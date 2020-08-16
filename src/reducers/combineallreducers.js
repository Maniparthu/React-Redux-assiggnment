import {combineReducers} from 'redux';
import addfirstnamereducer from './reducerfirstname'
import addlastnamereducer from './reducerlastname';
import scorereducer from './reducerscore';

const allReducers = combineReducers({
    firstname:addfirstnamereducer,
    lastname:addlastnamereducer,
    score:scorereducer
    
});

export default allReducers
