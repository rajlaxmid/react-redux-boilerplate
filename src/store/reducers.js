import {TEST_ME_REQUESTED} from './actions';
import {GET_MYNAME} from './actions';
import {GET_POST} from './actions';

import { combineReducers } from 'redux';

const idReducer = (state={}, action) => {
    switch(action.type){
        case TEST_ME_REQUESTED: 
            return { id: action.payload.id }
        
        default: 
            return state;
    }
}

const nameReducer = (state={}, action) => {
    switch(action.type){
        
        case GET_MYNAME: 
            return { id: action.disName.id }
        default: 
            return state;
    }
}

const postReducer = (state={}, action) => {
    switch(action.type){
        
        case GET_POST: 
            return { id: action.postme.id, post: action.postme.post ,isFetching: false}
        default: 
            return state;
    }
}


const allReducers = combineReducers({
    testme: idReducer,
    getName:nameReducer,
    getPost:postReducer
    
});

export default allReducers;