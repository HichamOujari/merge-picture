import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ImageComponent from "../components/imageComponent";
import React, { Component } from "react";

class Home extends Component {
  state = {
    generate: false,
    loading:false,
    images: [],
  };

  generatePic(e) {
    e.preventDefault();
    if (this.state.images.length == 0) alert('Please upload images')
    else this.setState({ generate: true });
  }

  getImages(images) {
    this.setState({loading:true, images:[], generate:false});
    let pictures = images.target.files;
    for(const file of pictures){
      var reader = new FileReader();
      reader.onload = function (e) {
        this.setState({ images: [...this.state.images, e.target.result] });
        if(this.state.images.length == images.target.files.length) this.setState({loading:false});
      }.bind(this);
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Welcome to HomePage</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav id="nav">
          <div className="nav left">
            <span className="gradient skew">
              <h1 className="logo un-skew">Generator</h1>
            </span>
            <button id="menu" className="btn-nav">
              <span className="fas fa-bars"></span>
            </button>
          </div>
        </nav>

        <main className={styles.main}>
          <form onSubmit={this.generatePic.bind(this)} method="post" encType="multipart/form-data">
            <p>Data Form :</p>
            <div className={styles.input_g}>
              <p>Images : </p>
              <input
                accept="image/png, image/jpeg"
                onChange={(e)=> this.getImages(e)}
                multiple={true}
                type="file"
              />
            </div>
            <input type="submit" value="Merge" />
          </form>
        </main>

        {this.state.generate ? (
          <section id="output" className={styles.look_like}>
            <ImageComponent
              data={this.state.images}
              myKey={0}
            />
          </section>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Home;
