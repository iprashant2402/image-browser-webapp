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

    addData = (name, desc) => {
        this.setState({
            name,
            desc
        },()=>{
            console.log(this.state);
            let image = this.state.selectedImage;
            image.name = this.state.name;
            image.desc = this.state.desc;
            this.props.addDataToImage(image);
            document.getElementById("image-form").style.display="none";
        });
    }

    handleAddDataEvent = (image) => {
        this.setState({
            selectedImage: image
        },()=>{
            document.getElementById("image-form").style.display="block";
        });
    }

  componentDidMount() {
    if (this.props.images.length === 0) {
      const tempImages = [];
      let id = 0;
      fetch(
        "https://api.unsplash.com/photos/random/?client_id=Ul3Gpz6ulWarqjePqRZUk1XxXRua7RypILdOqaum0Ck&count=15",
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((result) => {
          result.forEach((image) => {
            console.log(image.urls);
            tempImages.push({ url: image.urls.small, id: id });
            id++;
          });
          this.props.setImages(tempImages);
          console.log(this.props.images);
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

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

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
