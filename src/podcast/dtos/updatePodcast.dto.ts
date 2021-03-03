import { InputType, ObjectType, Field, OmitType, PartialType } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Podcast } from '../entities/podcast.entity';
import { Episode } from '../entities/episode.entity';

@InputType()
export class UpdatePodcastInput {
  @Field(type => Number)
  id: number;

  @Field(type => String, { nullable: true })
  title: string;

  @Field(type => String, { nullable: true })
  category: string;

  @Field(type => Number, { nullable: true })
  rating: number;
}

@ObjectType()
export class UpdatePodcastOutput extends Output {
  @Field(type => Podcast, { nullable: true })
  podcast: Podcast
}
