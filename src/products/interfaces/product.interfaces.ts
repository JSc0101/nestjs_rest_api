import { Document } from 'mongoose';

export interface PRODUCT extends Document {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly price: number;
  readonly createAt: Date;
}
