import {GET_PHOTOS,GET_PHOTO, LOADING, LOADED} from '../actions/action'
const prevStore = [];

export default (store = prevStore,action)=>{
    switch(action.type){
        case GET_PHOTOS:
             return {...store,photos:action.obj};
        default:
             return store;
    }
}