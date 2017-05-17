export interface IUser {
   id:number;
   firstName:string;
   lastName:string;
   email:string;
   authToken:string;
}

export class User implements IUser {
  authToken:string = 'token';
  id:number = 1;
  firstName:string = "Testy";
  lastName:string = "Mctestface";
  email:string ="test@test.com";
}
