import { httpService } from './index';

export async function getGenreOption() {
    return await httpService.get(`/genre/movie/list`);
}
