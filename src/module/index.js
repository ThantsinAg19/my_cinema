import { combineReducers } from 'redux';
import {
    OptionAction,
    DiscoverAction
} from './action';
import {
    MovieReducer,
    OptionReducer
} from './reducer';

const RootReducer = combineReducers({
    option: OptionReducer,
    movie: MovieReducer
})

export default RootReducer;

export {
    OptionAction,
    DiscoverAction
}

