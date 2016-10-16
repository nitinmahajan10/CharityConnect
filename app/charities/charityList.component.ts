import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Charity} from '../models/charity';
import {CharityDataSvc} from '../shared/services/charityData.svc';

@Component({
    selector: 'charity-list',
    templateUrl: 'app/charities/charityList.html',
    providers: [CharityDataSvc]
})
export class CharityListComponent implements OnInit{
  constructor(private router: Router, private charitySvc: CharityDataSvc){  }
  charityList: Charity[];
  selectedCharity: Charity;
  searchName: string;

  getCharityList(): void{
    this.charitySvc.getCharityList()
      .then(charities => this.charityList = charities);
  }

  ngOnInit(): void{
    this.getCharityList();
  }

  onSelect(selCharity: Charity):void{
    this.selectedCharity = selCharity;
    this.router.navigate(['/charityDetail', this.selectedCharity.id]);
  }

  onEdit(charityId:number):void{
    this.router.navigate(['/charityEditor', charityId]);
  }

  onSearch(): void {
    if (this.searchName) {
      this.charitySvc.searchCharityByName(this.searchName)
        .then(charities => this.charityList = charities);
    }
    else { 
      this.getCharityList();
    }
  }
}