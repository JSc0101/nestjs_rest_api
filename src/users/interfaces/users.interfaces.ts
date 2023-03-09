import { Address } from './address.users';
import { Document } from 'mongoose';

export interface USER extends Document {
  readonly name: string;
  readonly lastname: string;
  readonly aboutMe: string;
  readonly image: string;
  readonly address: Address;
  readonly rol: string;
}
