import { Entity } from './entity';
import { Address } from './address';
import { Contact } from './contact';
import { UserComment } from './userComment';

export class Charity extends Entity{
    name: string;
    url: string;
    missionStatement: string;
    description: string;
    addressList: Address[];
    contactList: Contact[];
    comments: UserComment[];
}
