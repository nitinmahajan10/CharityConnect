import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CharityDataSvcInMemory implements InMemoryDbService
{ 
    createDb() {
    let charityList = [
            { id: 11, name: 'Mr. Nice ko', missionStatement:'<p>This is nice charity <strong>highly recommended</strong></p>' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { charityList: charityList };
    }    
}