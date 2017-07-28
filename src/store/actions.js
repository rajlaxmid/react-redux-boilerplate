export const TEST_ME_REQUESTED = 'TEST_ME_REQUESTED';
export const GET_MYNAME='GET_MYNAME';
export const GET_POST='GET_POST';

import axios from 'axios'

export const testme = () => dispatch => {
    dispatch({
        type: TEST_ME_REQUESTED,
        payload: {id: '>>> thi is payload data from action.. going to reducer <<<' }
    });
}

export const getName = () => dispatch => {
    dispatch({
        type: GET_MYNAME,
        disName: {id: '>>> thi is disName data Rajlaxmi from action.. going to reducer <<<' }
    });
}

export const getPost = () => dispatch => {
    
    axios.get('https://jsonplaceholder.typicode.com/posts').then(function(result){
        dispatch({
            type: GET_POST, postme: {id: '1', post: result.data,isFetching: false}
        });
    })
   
}


