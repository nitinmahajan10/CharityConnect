import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  OnChanges
} from '@angular/core';

import 'tinymce/themes/modern/theme.js';
import 'tinymce/plugins/link/plugin.js';

declare var tinymce: any;

@Component({
    selector: 'rich-editor',
    template: `<textarea id="{{elementId}}"></textarea>`
})
export class RichEditorComponent implements AfterViewInit, OnDestroy, OnChanges {
    @Input() elementId: String;
    @Input() rawText: string;
    @Output() onEditorKeyup = new EventEmitter<string>();

    editor;
    
    ngAfterViewInit() {
        tinymce.init({
            selector: '#' + this.elementId,
            menubar: false,
            browser_spellcheck: true,
            plugins: ['link'],// 'paste', 'table'],
            skin_url: '../../node_modules/tinymce/skins/lightgray',
            setup: editor => {
                this.editor = editor;
                editor.on('keyup', () => {
                    const content = editor.getContent();
                    this.onEditorKeyup.emit(content);
                });
            },
        });
        this.ngOnChanges();
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }

    ngOnChanges(): void {
        if (this.editor)
        {
            let htmlText = this.editor.getContent();
            
            if (htmlText !== this.rawText)
            { 
                this.editor.setContent(this.rawText);
            }
        }    
     }    
}