import { uuid } from 'uuidv4';

export class ApplyForOpportunity {
  public id!: string;
  public professionalId!: string;
  public opportunityId!: string;

  constructor(props: Omit<ApplyForOpportunity, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
