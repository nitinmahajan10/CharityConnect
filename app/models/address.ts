import { Entity } from './entity';

export class Address extends Entity{ 
    isPrimary: boolean;
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
}