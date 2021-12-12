import { httpService } from './index';

export async function discover(filter_option) {
    return await httpService.get(`/discover/movie`,{
        params: filter_option
    });
}
