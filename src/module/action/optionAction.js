import {
    optionService
} from '../../httpService';
import { set_genre_option } from '../reducer/option';

/**
 * fetch genre option
 * @param {*} force 
 */
export const action_fetch_genre_option = (force = false)=> {
    return async (dispatch,getState) => {
        const data = getState()?.option.option_genre || []

        if(!force && Array.isArray(data) && data.length > 0) {
            return;
        }

        try {
            const response = await optionService.getGenreOption();
            if(response.status === 200) {
                const data = await response.data;
                if(data?.genres){
                    dispatch(set_genre_option(data?.genres));
                }                
            }
        } catch (error) {
            console.log(error)
        }
    }
}