import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Output {
    @Field(type => String, { nullable: true })
    err?: string;

    @Field(type => Boolean)
    ok: boolean
}