import { Injectable } from '@nestjs/common';
import { Podcast } from './entities/podcast.entity';

import { GetAllPodcastsOutput } from './dtos/getAllPodcasts.dto';
import { UpdatePodcastOutput, UpdatePodcastInput } from './dtos/updatePodcast.dto';
import { CreatePodcastOutput, CreatePodcastInput, } from './dtos/createPodcast.dto';
import { GetPodcastInput, GetPodcastOutput } from './dtos/getPodcast.dto';
import { DeletePodcastInput, DeletePodcastOutput } from './dtos/deletePodcast.dto';
import { GetEpisodesInput, GetEpisodesOutput } from './dtos/getEpisodes.dto';
import { Episode } from './entities/episode.entity';
import { CreateEpisodeOutput, CreateEpisodeInput } from './dtos/createEpisode.dto';
import { DeleteEpisodeOutput, DeleteEpisodeInput } from './dtos/deleteEpisode.dto';
import { FindEpisodeInput, FindEpisodeOutput } from './dtos/findEpisode.dto';
import { UpdateEpisodeOutput, UpdateEpisodeInput } from './dtos/updateEpisode.dto';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [
    {
      id: 1,
      title: 'title',
      category: 'category',
      rating: 1,
      episodes: [{
        id: 1,
        title: 'title1',
        category: 'category1',
        rating: 1,
      }, {
        id: 2,
        title: 'title2',
        category: 'category2',
        rating: 2,
      }]
    }
  ];

  getAllPodcasts(): GetAllPodcastsOutput {
    return {
      ok: true,
      err: null,
      podcasts: this.podcasts
    };
  }

  createPodcast({ title, category }: CreatePodcastInput): CreatePodcastOutput {
    const podcast = {
      id: Date.now(),
      title,
      category,
      rating: 0,
      episodes: []
    }
    this.podcasts.push(podcast);
    return {
      ok: true,
      err: null,
      podcast
    };
  }

  getPodcast({ id }: GetPodcastInput): GetPodcastOutput {
    const foundPodcasts = this.podcasts.filter((podcast) => podcast.id === +id);
    if (foundPodcasts.length === 0) {
      return {
        ok: false,
        err: 'Podcast not found.',
        podcast: null,
      };
    }
    if (foundPodcasts.length === 1) {
      return {
        ok: true,
        err: null,
        podcast: foundPodcasts[0],
      };
    }
    if (foundPodcasts.length > 2) {
      return {
        ok: false,
        err: 'More than one items with same id.',
        podcast: null,
      };
    }
  }

  deletePodcast({ id }: DeletePodcastInput): DeletePodcastOutput {
    this.podcasts = this.podcasts.filter((podcast) => podcast.id !== +id)
    return {
      ok: true,
      err: null,
      podcasts: this.podcasts.filter((podcast) => podcast.id !== +id)
    };
  }

  updatePodcast(
    { id, ...updatePodcastInput }: UpdatePodcastInput
  ): UpdatePodcastOutput {
    console.log(updatePodcastInput, id)
    const { podcast, err: findErr } = this.getPodcast({ id: id + '' });
    if (findErr) {
      return {
        ok: false,
        err: findErr,
        podcast: null
      };
    }
    console.log(podcast)
    const { err: deleteErr } = this.deletePodcast({ id: id + '' });
    if (deleteErr) {
      return {
        ok: false,
        err: deleteErr,
        podcast: null
      };
    }
    this.podcasts.push({ ...podcast, ...updatePodcastInput });
    console.log(this.podcasts)
    return {
      ok: true,
      err: null,
      podcast: { ...podcast, ...updatePodcastInput }
    };
  }

  getEpisodes(
    { id }: GetEpisodesInput,
  ): GetEpisodesOutput {
    const { podcast, err } = this.getPodcast({ id });
    if (err) {
      return {
        ok: false,
        err,
        episodes: null,
      };
    }
    return {
      ok: true,
      err: null,
      episodes: podcast.episodes,
    };
  }

  createEpisode(
    { id, title, category }: CreateEpisodeInput
  ): CreateEpisodeOutput {
    const { podcast, err: findErr } = this.getPodcast({ id: id + '' });
    if (findErr) {
      return { ok: false, err: findErr, episode: null };
    }
    const episodeId = Date.now();
    const episode: Episode = { id: episodeId, title, category, rating: 0 };
    podcast.episodes.push(episode)
    return { ok: true, err: null, episode };
  }

  deleteEpisode({ id, episodeId }: DeleteEpisodeInput): DeleteEpisodeOutput {
    const { podcast, err: findErr } = this.getPodcast({ id: id + '' });
    if (findErr) {
      return { ok: false, err: findErr, episodes: null };
    }
    podcast.episodes = podcast.episodes.filter(episode => episode.id !== +id)
    return { ok: true, err: null, episodes: podcast.episodes.filter(episode => episode.id !== +id) };
  }

  findEpisode({ id, episodeId }: FindEpisodeInput): FindEpisodeOutput {
    const { episodes, err: findErr } = this.getEpisodes({ id: id + '' });
    if (findErr) {
      return { ok: false, err: findErr, episode: null };
    }
    const episode = episodes.find((episode) => episode.id === +episodeId);
    if (!episode) {
      return { ok: false, episode: null, err: 'Episode not found' };
    }
    return { ok: true, err: null, episode };
  }

  updateEpisode(
    { id,
      episodeId,
      ...updateEpisodeInput }: UpdateEpisodeInput
  ): UpdateEpisodeOutput {
    const { episode, err: findEpisodeErr } = this.findEpisode({ id, episodeId });
    if (findEpisodeErr) {
      return { ok: false, err: findEpisodeErr, episode: null };
    }
    const { err: deleteErr } = this.deleteEpisode({ id, episodeId });
    if (deleteErr) {
      return { ok: false, err: deleteErr, episode: null };
    }
    const { podcast, err: fundPodcastErr } = this.getPodcast({ id: id + '' });
    if (fundPodcastErr) {
      return { ok: false, err: fundPodcastErr, episode: null };
    }
    console.log({ ...episode, ...updateEpisodeInput })
    podcast.episodes.push({ ...episode, ...updateEpisodeInput })

    return { ok: true, err: null, episode: { ...episode, ...updateEpisodeInput } };
  }
}