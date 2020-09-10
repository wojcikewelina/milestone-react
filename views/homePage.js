import React, { Component } from "react";
import {SENTENCES} from "../services/sentencesService";


let index;
class HomePage extends Component {
  componentDidUpdate() {
    console.log("Zaktulizowalem wyglad strony po przycisku");
  }
  render() {
    var indexOfRndomSentece = Math.floor(Math.random() * 6);
    console.log(SENTENCES[indexOfRndomSentece]);
    return (
      <div id="homePageDiv">
        <div id="homeSentenceDiv">
          <p>{SENTENCES[indexOfRndomSentece]}</p>
        </div>
        <div id="homePictureDiv">
          <img
            src={
              "https://pngimage.net/wp-content/uploads/2018/06/spongebob-the-png-3.png"
            }
            alt="spongebob the png 3"
          />
        </div>
      </div>
    );
  }
}

export default HomePage;

