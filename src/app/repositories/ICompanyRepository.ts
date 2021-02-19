import { Company } from '../entities/Company';

export interface ICompanyRepository {
  findByCnpj(cnpj: string): Promise<Company | null>;
  findById(id: string): Promise<Company | null>;
  save(company: Company): Promise<void>;
}
