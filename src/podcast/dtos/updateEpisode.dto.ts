import { InputType, ObjectType, Field, OmitType, PartialType } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Podcast } from '../entities/podcast.entity';
import { Episode } from '../entities/episode.entity';

@InputType()
export class UpdateEpisodeInput {
    @Field(type => String)
    id: string;

    @Field(type => String)
    episodeId: string;

    @Field(type => String, { nullable: true })
    title: string;

    @Field(type => String, { nullable: true })
    category: string;

    @Field(type => Number, { nullable: true })
    rating: number;
}

@ObjectType()
export class UpdateEpisodeOutput extends Output {
    @Field(type => Episode, { nullable: true })
    episode: Episode
}
