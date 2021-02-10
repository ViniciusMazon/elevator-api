import { Company } from '../../entities/Company';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';
import { ICreateCompanyRequestDTO } from './CreateCompanyDTO';

export class CreateCompanyUseCase {
  private companyRepository: ICompanyRepository;

  constructor(companyRepository: ICompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async execute(data: ICreateCompanyRequestDTO) {
    const companyAlreadyExists = await this.companyRepository.findByCnpj(
      data.cnpj
    );

    if (companyAlreadyExists) {
      throw new Error('Company already exists');
    }

    const company = new Company(data);
    await this.companyRepository.save(company);
  }
}
