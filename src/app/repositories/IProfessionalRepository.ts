import { Professional } from '../entities/Professional';

export interface IProfessionalRepository {
  findByEmail(email: string): Promise<Professional | null>;
  findById(id: string): Promise<Professional | null>;
  save(professional: Professional): Promise<void>;
}
