
import { InputType, ObjectType, Field, PickType } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Podcast } from '../entities/podcast.entity';

@InputType()
export class CreatePodcastInput extends PickType(Podcast, ['title', 'category',]) { }

@ObjectType()
export class CreatePodcastOutput extends Output {
  @Field(type => Podcast, { nullable: true })
  podcast: Podcast
}
