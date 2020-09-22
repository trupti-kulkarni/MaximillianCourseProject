export class User{
    constructor(public email: string, public id:string, private token :string, private token_expiration){}

    gettoken(){
        if(!this.token_expiration || this.token_expiration < new Date()){
            return null;
        }
        return this.token;
    }


}