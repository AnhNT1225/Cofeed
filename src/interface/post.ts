import { IUser } from "./user";

export interface IPost {
    id: string;
    content: string;
    like: number;
    postedBy: IUser;
}