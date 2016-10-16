import { Entity } from './entity';
export class Contact extends Entity{
    isPrimary: boolean;
    firstName: string;
    lastName: string;
    primaryEmail: string;
    primaryPhone: string;
}
