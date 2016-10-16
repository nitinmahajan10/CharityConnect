import {Entity} from './entity';
export class UserComment extends Entity{
    id:number;
    comment:string;
    user:string;
    upVoteCount:number;
    downVoteCount:number;
}