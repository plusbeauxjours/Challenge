import { InputType, ObjectType, Field, OmitType, PartialType } from '@nestjs/graphql';
import { Output } from './output.dto';
import { Episode } from '../entities/episode.entity';

@InputType()
export class GetEpisodesInput {
    @Field(type => String)
    id: string


}
@ObjectType()
export class GetEpisodesOutput extends Output {
    @Field(type => [Episode], { nullable: true })
    episodes: Episode[]
}

