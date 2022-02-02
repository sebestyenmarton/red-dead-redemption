import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../../../images/media-images/media-images-data";

import "./red-media-page.scss";

const RedMediaPage = () => {
  return (
    <div className="media-page" id="mediaPage">
      {/*       {photos.map((image) => {
        return <img src={`${image.src}`} />;
      })} */}
      <div className="media-page-background">
        <Gallery photos={photos} direction={"row"} />
      </div>
    </div>
  );
};

export default RedMediaPage;
