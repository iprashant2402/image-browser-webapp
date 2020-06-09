import React from "react";
import { connect } from "react-redux";
import { setImages, addDataToImage } from "../redux/actions/imagesActions";
import "../css/tabOne.css";
import ImageForm from "../components/imageForm";

class TabOne extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            desc: "",
            selectedImage: null
        }
    }

    //This function is called from child component ImageForm to set state variable i.e. name and desc
    addData = (name, desc) => {
        this.setState({
            name,
            desc
        },()=>{
            //Get selected image
            let image = this.state.selectedImage;
            //update data for selected image
            image.name = this.state.name;
            image.desc = this.state.desc;
            //dispatch action to update image in redux store
            this.props.addDataToImage(image);
            //close modal
            document.getElementById("image-form").style.display="none";
        });
    }

    //Set selected image and then display modal i.e. Image Data Form
    handleAddDataEvent = (image) => {
        this.setState({
            selectedImage: image
        },()=>{
            document.getElementById("image-form").style.display="block";
        });
    }

  componentDidMount() {
    //only fetch new images if the data store is empty
    if (this.props.images.length === 0) {
      const tempImages = [];
      //associate an id with each image, in this case its an auto-incrementing variable
      let id = 0;
      //Fetch 15 new images from unsplash.com random photos API, pass params client_id and count=15
      fetch(
        "https://api.unsplash.com/photos/random/?client_id=XXXXX", //TODO: INSERT YOUR CLIENT ACCESS KEY HERE IN PLACE OF XXXXXX
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((result) => {
          //Push each image url fetched into a temp array.
          result.forEach((image) => {
            tempImages.push({ url: image.urls.small, id: id });
            //increment image id
            id++;
          });
          //dispatch action to initialize images in redux store
          this.props.setImages(tempImages);
        })
        .catch((err) => console.error(err));
    }
  }

  render() {
    return (
      <div>
        <ImageForm addData={this.addData}/>
        <div className="columns">
          {this.props.images.map((l, i) => (
            <div key={i} className="imageWrapper">
              <img
                width="100%"
                src={l.url}
                alt="Something will go here."
                onClick={() => {
                  this.handleAddDataEvent(l)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//Map the redux state to this component's prop
const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};


//Map redux actions to this component's prop
const mapDispatchToProps = (dispatch) => {
  return {
    setImages: (images) => {
      dispatch(setImages(images));
    },
    addDataToImage: (image) => {
      dispatch(addDataToImage(image));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabOne);
