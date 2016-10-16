import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {Charity} from '../../models/charity';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CharityDataSvc {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private charitySvcUrl: string = 'app/charityList';

    constructor(private _http: Http) { }

    protected handleError(error: any): any {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    public searchCharityByName(searchPattern: string): Promise<Charity[]> {
        const searchUrl: string = `${this.charitySvcUrl}/?name=${searchPattern}+`;
 
        return this._http.get(searchUrl)
            .toPromise()
            .then(response => response.json().data as Charity[])
            .catch(this.handleError);
    }
    
    public getCharityList(): Promise<Charity[]> {
        return this._http.get(this.charitySvcUrl)
            .toPromise()
            .then(response => response.json().data as Charity[])
            .catch(this.handleError);
    }

    public getCharityDetail(id: number): Promise<Charity> {
        const url: string = `${this.charitySvcUrl}/${id}`;
        console.log(url);
        return this._http.get(url)
            .toPromise()
            .then(response=>response.json().data as Charity)
            .catch(this.handleError);
    }

    public deleteCharity(id: number): Promise<void> {
        const url = `${this.charitySvcUrl}/${id}`;
        return this._http.delete(url)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    public upsertCharity(theCharity: Charity): Promise<Charity> {
        console.log(theCharity);
        if (theCharity.id === 0) //insert
        {
            return this.insertCharity(theCharity);
        }
        else //update
        {
            return this.updateCharity(theCharity);
        }
    }

    private insertCharity(theCharity: Charity): Promise<Charity> {
        theCharity.id = 100;
        console.log(JSON.stringify(theCharity));
        return this._http.post(this.charitySvcUrl, JSON.stringify(theCharity), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    
    private updateCharity(theCharity: Charity): Promise<Charity> {
        const url = `${this.charitySvcUrl}/${theCharity.id}`;
        return this._http.put(url, JSON.stringify(theCharity), { headers: this.headers })
            .toPromise()
            .then(() => theCharity)
            .catch(this.handleError);
    }
}