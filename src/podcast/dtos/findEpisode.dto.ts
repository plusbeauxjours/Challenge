import { InputType, ObjectType, Field, } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Episode } from '../entities/episode.entity';

@InputType()
export class FindEpisodeInput {
    @Field(type => String)
    id: string

    @Field(type => String)
    episodeId: string
}

@ObjectType()
export class FindEpisodeOutput extends Output {
    @Field(type => Episode, { nullable: true })
    episode: Episode
}

