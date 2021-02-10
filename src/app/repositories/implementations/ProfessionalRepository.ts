import { Professional } from '../../entities/Professional';
import { IProfessionalRepository } from '../IProfessionalRepository';
import { Professional as ProfessionalModel } from '../../models/Professional';

export class ProfessionalRepository implements IProfessionalRepository {
  async findByEmail(email: string): Promise<Professional | null> {
    const professional = await ProfessionalModel.findOne({
      where: { email: email },
    });

    return professional;
  }

  async save(professional: Professional): Promise<void> {
    await ProfessionalModel.create(professional);
  }
}
