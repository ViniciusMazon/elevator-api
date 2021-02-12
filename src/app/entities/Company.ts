import { uuid } from 'uuidv4';

export class Company {
  public readonly id!: string;
  public name!: string;
  public cnpj!: string;
  public email!: string;
  public role?: string;
  public password!: string;
  public hash_password?: string;

  constructor(props: Omit<Company, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
