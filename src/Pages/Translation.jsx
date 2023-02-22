import { useState } from "react";
import { newTranslation } from "../api/translation";
import ImageHolder from "../Components/TranslationComp/ImageHolder";
import TranslationHeader from "../Components/TranslationComp/TranslationHeader";
import TranslationResult from "../Components/TranslationComp/TranslationResult";
import { useUser } from "../Context/UserProvider";
import { storageSave, STORAGE_USER_KEY } from "../miscellaneous/storage";
import withAuth from "../miscellaneous/withAuth";

// looping through word input, turning
// every letter into an object with
// id,source and name fields
// and storing them into an array
const wordToImage = (word) => {
  let imageContainer = [];
  word.split("").forEach((letter, index) =>
    imageContainer.push({
      id: index + 1,
      name: `${letter}`,
      src: `signs/${letter}.png`,
    })
  );
  return imageContainer;
};

const Translation = () => {
  const { user, setUser } = useUser();
  const [word, setWord] = useState("");

  // displaying the word as ASL
  const signs = wordToImage(word).map((sign) => (
    <ImageHolder key={sign.id} sign={sign} />
  ));

  // change every letter typed into its respective image
  const handleTranslation = (letter) => {
    setWord(letter);
    return (
      <img
        src={wordToImage(letter).find((element) => element.name === letter)}
      />
    );
  };

  // function for submiting translated word to API,
  // and display it to profile page
  const handleTranslationSubmission = async (word) => {
    if (word.length === 0) {
      alert("Type a word to begin.");
      return;
    }
    const [error, updatedUser] = await newTranslation(user, word);
    if (error != null) return;

    alert(`${word} is registered in your profile!`);
    storageSave(STORAGE_USER_KEY, updatedUser);
    setUser(updatedUser);
  };

  return (
    <>
      <TranslationHeader />
      <div id="translation-div">
        <TranslationResult
          onSubmission={handleTranslationSubmission}
          onTranslation={handleTranslation}
        />
        <div id="ASL-word-display">
          {signs}
          {/* displaying while user 
          hasn't type anything */}
          {signs.length === 0 && (
            <p id="empty-ASL-list">
              This is a "sign" that you must enter some words 👨‍🏫
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default withAuth(Translation);
