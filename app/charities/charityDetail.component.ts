import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Charity} from '../models/charity';

import {CharityDataSvc} from '../shared/services/charityData.svc';

@Component({
    selector: 'charity-detail',
    templateUrl: 'app/charities/charityDetail.html',
    providers: [CharityDataSvc]
})
export class CharityDetailComponent implements OnInit{
     constructor(
         private charitySvc: CharityDataSvc, 
         private route: ActivatedRoute,
         private location: Location){}

     theCharity: Charity;
     @Input() charityId: number;
     
     getCharityDetail(): void {
         this.charitySvc.getCharityDetail(this.charityId)
             .then(charityDetail => this.theCharity = charityDetail);
     }
     
     ngOnInit():void{
         this.route.params.forEach((param:Params)=>{
             this.charityId = param['charityId'];
         });
         this.getCharityDetail();
     }
}