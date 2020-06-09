import {
  INITIALIZE_IMAGE,
  ADD_DATA_TO_IMAGE,
} from "../actions/action-types/images-actions";

const initState = {
  images: [],
};
const imagesReducer = (state = initState, action) => {
  
  if (action.type === INITIALIZE_IMAGE) {
    let images = action.images;
    return {
      images: images,
    };
  }
  
  if (action.type === ADD_DATA_TO_IMAGE) {
    let image = action.image;

    return { 
        images: state.images.map((pic, index) => {
            if (pic.id === image.id) {
            return { ...pic, name: image.name, desc: image.desc };
            }
        return pic;
        })
    }
  } 
  
  else {
    return state;
  }
};

export default imagesReducer;
