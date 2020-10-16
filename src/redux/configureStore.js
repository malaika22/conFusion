import {createStore, combineReducers} from 'redux';
import { Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import {Dishes} from './dishes';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

    return store;
}