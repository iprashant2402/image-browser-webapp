import React from "react";
import { connect } from "react-redux";
import { setImages } from "../redux/actions/imagesActions";
import "../css/tabTwo.css";

class TabTwo extends React.Component {
  render() {
    return (
      <div>
        <div className="columns">
          {this.props.images.map((l, i) => (
            <div key={i} className="imageWrapper">
              <img width="100%" src={l.url} alt="Something will go here." />
              {l.name ? (
                <div className="imageDataWrapper">
                  <h6 className="imageName"><b>{l.name}</b></h6>
                  <p className="imageDesc"><i>{l.desc}</i></p>
                </div>
              ) : null}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabTwo);
