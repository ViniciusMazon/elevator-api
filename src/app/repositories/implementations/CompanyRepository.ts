import { Company } from '../../entities/Company';
import { ICompanyRepository } from '../ICompanyRepository';
import { Company as CompanyModel } from '../../models/Company';

export class CompanyRepository implements ICompanyRepository {
  async findByCnpj(cnpj: string): Promise<Company | null> {
    const company = await CompanyModel.findOne({
      where: { cnpj: cnpj },
    });

    return company;
  }

  async findById(id: string): Promise<Company | null> {
    const company = await CompanyModel.findOne({
      where: { id: id },
    });

    return company;
  }

  async save(company: Company): Promise<void> {
    console.log(company);
    await CompanyModel.create(company);
  }
}
