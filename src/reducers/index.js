import { combineReducers } from 'redux';
import listReducer from './list_reducer';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
    list: listReducer,
    form: formReducer
});