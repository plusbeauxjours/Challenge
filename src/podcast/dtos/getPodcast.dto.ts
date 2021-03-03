import { InputType, ObjectType, Field, PickType, PartialType } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Podcast } from '../entities/podcast.entity';

@InputType()
export class GetPodcastInput {
    @Field(type => String)
    id: string
}

@ObjectType()
export class GetPodcastOutput extends Output {
    @Field(type => Podcast, { nullable: true })
    podcast: Podcast
}

