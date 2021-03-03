import { Episode } from './episode.entity';
import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType({ isAbstract: true })
@ObjectType()
export class Podcast {
  @Field(type => Number)
  id: number;

  @Field(type => String)
  title: string;

  @Field(type => String)
  category: string;

  @Field(type => Number, { nullable: true })
  rating: number;

  @Field(type => [Episode], { nullable: true })
  episodes?: Episode[];
}
