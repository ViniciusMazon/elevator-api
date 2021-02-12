export interface ICreateProfessionalRequestDTO {
  name: string;
  lastname: string;
  email: string;
  password: string;
  hash_password?: string;
  role: string;
}
