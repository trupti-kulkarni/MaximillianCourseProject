export class User {
  constructor(
    public email: string,
    public id: string,
    private token: string,
    private token_expiration: Date
  ) {}

  public get _token(): string {
    if (!this.token_expiration || this.token_expiration < new Date()) {
      return null;
    }
    return this.token;
  }
}
