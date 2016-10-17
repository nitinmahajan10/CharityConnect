import {Component, Input, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {Form} from '@angular/forms';
import {Location} from '@angular/common';

import {Charity} from '../models/charity';
import {CharityDataSvc} from '../shared/services/charityData.svc';

import { RichEditorComponent } from '../directives/richEditor.component';

@Component({
    selector: 'charity-editor',
    templateUrl: 'app/charities/charityEditor.html',
    providers:[CharityDataSvc]
})
export class CharityEditor implements OnInit{
    constructor(private charitySvc:CharityDataSvc,
                private location:Location,
                private activeRoute:ActivatedRoute){}

   @Input() charityId : number;
   theCharity: Charity;
    
   getCharityDetail(): void {
       console.log(this.charityId);
       if (this.charityId == 0) {
           this.theCharity = new Charity();
           return;
       }
       this.charitySvc.getCharityDetail(this.charityId)
           .then(fetched => { this.theCharity = fetched; });
   }

   ngOnInit(): void {
       this.activeRoute.params.forEach((param: Params) => { this.charityId = param['charityId']; });
       this.getCharityDetail();
   }

    upsertCharity(): void {
        this.charitySvc.upsertCharity(this.theCharity);
    }

    deleteCharity(): void { 
        this.charitySvc.deleteCharity(this.charityId);
        this.location.back();
    }

    missionStatementSet(newHtml:string): void { 
       this.theCharity.missionStatement = newHtml;
    }
}