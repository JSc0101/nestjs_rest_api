import { Address } from '../interfaces/address.users';

export class CreateUsersDTO {
  readonly name: string;
  readonly lastname: string;
  readonly aboutMe: string;
  readonly image: string;
  readonly address: Address;
  readonly rol: string;
}
