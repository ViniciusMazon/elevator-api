import { uuid } from 'uuidv4';

export class Opportunity {
  public id!: string;
  public videoURL!: string;
  public role!: string;
  public level!: string;
  public locality!: string;
  public contract!: string;
  public salary!: number;
  public companyId!: string;

  constructor(props: Omit<Opportunity, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
