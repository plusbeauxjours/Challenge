import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcast.entity';
import { GetAllPodcastsOutput } from './dtos/getAllPodcasts.dto';
import { CreatePodcastInput, CreatePodcastOutput, } from './dtos/createPodcast.dto';
import { GetPodcastInput, GetPodcastOutput } from './dtos/getPodcast.dto';
import { DeletePodcastInput, DeletePodcastOutput } from './dtos/deletePodcast.dto';
import { UpdatePodcastInput, UpdatePodcastOutput } from './dtos/updatePodcast.dto';
import { GetEpisodesInput, GetEpisodesOutput } from './dtos/getEpisodes.dto';
import { CreateEpisodeOutput, CreateEpisodeInput } from './dtos/createEpisode.dto';
import { DeleteEpisodeOutput, DeleteEpisodeInput } from './dtos/deleteEpisode.dto';
import { FindEpisodeInput, FindEpisodeOutput } from './dtos/findEpisode.dto';
import { UpdateEpisodeOutput, UpdateEpisodeInput } from './dtos/updateEpisode.dto';

@Resolver(of => Podcast)
export class PodcastsResolver {
    constructor(private readonly podcastsService: PodcastsService) { }

    @Query(returns => GetAllPodcastsOutput)
    async getAllPodcasts(): Promise<GetAllPodcastsOutput> {
        try {
            return await this.podcastsService.getAllPodcasts();
        } catch (err) {
            return {
                ok: false,
                err,
                podcasts: null
            }
        }
    }

    @Mutation(returns => CreatePodcastOutput)
    async createPodcast(@Args('input') createPodcastInput: CreatePodcastInput): Promise<CreatePodcastOutput> {
        try {
            return await this.podcastsService.createPodcast(createPodcastInput)
        } catch (err) {
            return {
                ok: false,
                err,
                podcast: null
            }
        }
    }

    @Query(returns => GetPodcastOutput)
    async getPodcast(@Args('input') getPodcastInput: GetPodcastInput): Promise<GetPodcastOutput> {
        try {
            return await this.podcastsService.getPodcast(getPodcastInput);
        } catch (err) {
            return {
                ok: false,
                err,
                podcast: null
            }
        }
    }

    @Mutation(returns => DeletePodcastOutput)
    async deletePodcast(@Args('input') deletePodcastInput: DeletePodcastInput): Promise<DeletePodcastOutput> {
        try {
            return await this.podcastsService.deletePodcast(deletePodcastInput)
        } catch (err) {
            return {
                ok: false,
                err,
                podcasts: null
            }
        }
    }

    @Mutation(returns => UpdatePodcastOutput)
    async updatePodcast(@Args('input') updatePodcastInput: UpdatePodcastInput): Promise<UpdatePodcastOutput> {
        try {
            return await this.podcastsService.updatePodcast(updatePodcastInput)
        } catch (err) {
            return {
                ok: false,
                err,
                podcast: null
            }
        }
    }

    @Query(returns => GetEpisodesOutput)
    async getEpisodes(@Args('input') getEpisodesInput: GetEpisodesInput): Promise<GetEpisodesOutput> {
        try {
            return await this.podcastsService.getEpisodes(getEpisodesInput);
        } catch (err) {
            return {
                ok: false,
                err,
                episodes: null
            }
        }
    }

    @Mutation(returns => CreateEpisodeOutput)
    async createEpisode(@Args('input') createEpisodeInput: CreateEpisodeInput): Promise<CreateEpisodeOutput> {
        try {
            return await this.podcastsService.createEpisode(createEpisodeInput)
        } catch (err) {
            return {
                ok: false,
                err,
                episode: null
            }
        }
    }

    @Mutation(returns => DeleteEpisodeOutput)
    async deleteEpisode(@Args('input') deleteEpisodeInput: DeleteEpisodeInput): Promise<DeleteEpisodeOutput> {
        try {
            return await this.podcastsService.deleteEpisode(deleteEpisodeInput)
        } catch (err) {
            return {
                ok: false,
                err,
                episodes: null
            }
        }
    }

    @Query(returns => FindEpisodeOutput)
    async findEpisode(@Args('input') findEpisodesInput: FindEpisodeInput): Promise<FindEpisodeOutput> {
        try {
            return await this.podcastsService.findEpisode(findEpisodesInput);
        } catch (err) {
            return {
                ok: false,
                err,
                episode: null
            }
        }
    }

    @Mutation(returns => UpdateEpisodeOutput)
    async updateEpisode(@Args('input') updateEpisodeInput: UpdateEpisodeInput): Promise<UpdateEpisodeOutput> {
        try {
            return await this.podcastsService.updateEpisode(updateEpisodeInput)
        } catch (err) {
            return {
                ok: false,
                err,
                episode: null
            }
        }
    }
}