import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  loginId: string;

  @Field()
  password: string;

  @Field()
  nickname: string;
}

@InputType()
export class UserInput {
  @Field()
  loginId: string;

  @Field()
  password: string;

  @Field()
  nickname: string;
}
