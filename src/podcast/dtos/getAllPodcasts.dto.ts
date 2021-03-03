import { InputType, IntersectionType, ObjectType, Field } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Podcast } from '../entities/podcast.entity';

@ObjectType()
export class GetAllPodcastsOutput extends Output {
    @Field(type => [Podcast], { nullable: true })
    podcasts: Podcast[]
}
