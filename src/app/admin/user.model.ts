export class User {
  constructor(
    public id?:number,
    public firstname?: string,
    public lastname?: string,
    public email?: string,
    public phone?: string,
    public DOB?: number,
    public status?: boolean,
    public twitterLink?: string,
    public facebookLink?:string,
    public linkedinLink?:string
  ) {}
}
