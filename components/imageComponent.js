import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import * as htmlToImage from "html-to-image";

class ImageComponent extends Component {
  downloadThis(id) {
    var ele = document.getElementById("photo" + id);
    htmlToImage
      .toPng(ele, { proxy: this.props.logo })
      .then(function (dataUrl) {
        var a = document.createElement("a");
        a.href = dataUrl;
        a.download = "photo" + id + ".jpg";
        a.click();
      });

  }

  render() {
    return (
      <div className={styles.compomentsImage}>
        <div className={styles.navigation}>
          <i
            onClick={() => this.downloadThis(this.props.myKey)}
            className="bi bi-arrow-down-circle"
          > Download image</i>
        </div>
        <div id={"photo" + this.props.myKey} className={styles.allPict}>
          {this.props.data.map((image,index) => (
            <img key={index} src={image} className={styles.mergedImage} />))}
        </div>
      </div>
    );
  }
}

export default ImageComponent;
