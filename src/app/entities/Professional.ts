import { uuid } from 'uuidv4';

export class Professional {
  public readonly id!: string;
  public name!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  public hash_password!: string;
  public role!: string;

  constructor(props: Omit<Professional, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
