import { ADD_DATA_TO_IMAGE,INITIALIZE_IMAGE } from './action-types/images-actions'

export const addDataToImage= (image)=>{
    return{
        type: ADD_DATA_TO_IMAGE,
        image
    }
}

export const setImages=(images)=>{
    console.log("CALLED");
    return{
        type: INITIALIZE_IMAGE,
        images
    }
}