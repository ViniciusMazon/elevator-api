import { Professional } from '../../entities/Professional';
import { IProfessionalRepository } from '../../repositories/IProfessionalRepository';
import { ICreateProfessionalRequestDTO } from './CreateProfessionalDTO';

export class CreateProfessionalUseCase {
  private professionalRepository: IProfessionalRepository;

  constructor(professionalRepository: IProfessionalRepository) {
    this.professionalRepository = professionalRepository;
  }

  async execute(data: ICreateProfessionalRequestDTO) {
    const professionalAlreadyExistis = await this.professionalRepository.findByEmail(
      data.email
    );

    if (professionalAlreadyExistis) {
      throw new Error('Professional already exists');
    }

    const professional = new Professional(data);
    await this.professionalRepository.save(professional);
  }
}
