import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "❤️": "Love",
  "😊": "Smiling",
  "💥": "Collision",
  "🤩": "Star-struck",
  "🎖️": "Military-medal",
  "😋": "Face savouring food",
  "🤑": "Money face",
  "😗": "Kissing face",
  "⛹️": "Person bouncing ball",
  "🥐": "Croissant",
  "🍟": "French fries"
};

// Storing object keys in an array 
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [inputText, setInputText] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }
    
    setInputText(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setInputText(meaning);
  }

  return (
    <div className="App">
      <h1>Click on an emoji!</h1>
      {/* Input handling */}
      <input onChange={onChangeHandler}></input>
      <div className="heading">{inputText}</div>

      <div className="heading">Emojis We know</div>
      {/* Setting up emojis on UI using map function */}
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            // On emoji click
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
