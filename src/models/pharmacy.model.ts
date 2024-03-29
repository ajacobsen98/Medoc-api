import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Pharmacy {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  phone?: string;

  @Field(() => User)
  user: User;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class PharmacyInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  phone?: string;
}
