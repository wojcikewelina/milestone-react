import React, { Component } from "react";
import SENTENCES from "../services/randomText";

const SENTENCES = [
  "Jaki jest magik kiedy straci pracę? Rozczarowany.",
  "Jaki jest ulubiony program kanibalów? Surowi rodzice.",
  "Dlaczego ściany nie toczą ze sobą wojen? Bo między nimi jest pokój.",
  "Dlaczego dom nie mówi? Bo go zamurowało.",
  "Dlaczego jeleń jest chudy? Bo nie jeleń.",
  "Co mówi elektryk do przyjaciela? Będziemy w kontakcie!",
  "Po co ubezpieczyciel poszedł do lasu? Polisa."
];
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

