import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class Photo {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;
}

@InputType()
export class PhotoInput {
  @Field()
  id: number;

  @Field()
  title: string;
}
