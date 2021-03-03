import { InputType, ObjectType, Field, } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Episode } from '../entities/episode.entity';

@InputType()
export class DeleteEpisodeInput {
    @Field(type => String)
    id: string

    @Field(type => String)
    episodeId: string
}

@ObjectType()
export class DeleteEpisodeOutput extends Output {
    @Field(type => [Episode], { nullable: true })
    episodes: Episode[]
}

