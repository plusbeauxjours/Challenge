import { InputType, ObjectType, Field, PickType, PartialType } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Podcast } from '../entities/podcast.entity';

@InputType()
export class DeletePodcastInput {
    @Field(type => String)
    id: string
}

@ObjectType()
export class DeletePodcastOutput extends Output {
    @Field(type => [Podcast], { nullable: true })
    podcasts: Podcast[]
}

