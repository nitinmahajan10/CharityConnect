import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {CharityDetailComponent} from './charities/charityDetail.component';
import {CharityListComponent} from './charities/charityList.component';
import {CharityEditor} from './charities/charityEditor.component';
import {AppComponent} from './app.component';
import {CharityDataSvc} from './shared/services/charityData.svc';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CharityDataSvcInMemory } from './shared/services/charityData.svc.in-memory';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(CharityDataSvcInMemory, {delay: 600}),
        RouterModule.forRoot([
        {
            path: '',
            redirectTo:'/charityList',
            pathMatch: 'full' 
        },
        {
            path: 'charityList',
            component: CharityListComponent
        },
        {
            path: 'charityDetail/:charityId',
            component: CharityDetailComponent 
        },
        {
            path: 'charityEditor/:charityId',
            component: CharityEditor
        }
        ])
    ],
    declarations: [AppComponent, CharityDetailComponent, CharityListComponent, CharityEditor],
    bootstrap: [AppComponent]
})
export class AppModule{

}