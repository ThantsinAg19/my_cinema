import {
    discoverService
} from '../../httpService';
import {
    set_discovered_movies,
    set_errorMessage,
    set_loading_state,
    set_filter_option
} from '../reducer/movies';

export const action_discover_movies = (option = {}) => {
    return async (dispatch, getState) => {
        try {
            dispatch(set_filter_option(option));
            dispatch(set_loading_state(true));
            const response = await discoverService.discover(option);
            if (response.status === 200) {
                const data = await response.data;
                if (data?.page) {
                    const {
                        page = 1,
                        results = [],
                        total_pages = 1,
                        total_results = 0
                    } = data
                    dispatch(set_discovered_movies({
                        page, results, total_pages, total_results
                    }))
                }
            }
            setTimeout(() => {
                dispatch(set_loading_state());
            }, 500)
        } catch (error) {
            dispatch(set_errorMessage(error.message))
        }
    }
}