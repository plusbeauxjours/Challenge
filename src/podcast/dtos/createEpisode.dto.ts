
import { InputType, ObjectType, Field, PickType } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Episode } from '../entities/episode.entity';

@InputType()
export class CreateEpisodeInput {
    @Field(type => Number)
    id: number;

    @Field(type => String)
    title: string;

    @Field(type => String)
    category: string;
}

@ObjectType()
export class CreateEpisodeOutput extends Output {
    @Field(type => Episode, { nullable: true })
    episode: Episode
}
