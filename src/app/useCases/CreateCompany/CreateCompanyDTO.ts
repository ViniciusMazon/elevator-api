export interface ICreateCompanyRequestDTO {
  name: string;
  cnpj: string;
  email: string;
  hash_password?: string;
  password: string;
}
