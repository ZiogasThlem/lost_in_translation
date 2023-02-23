import { useState } from "react";
import { useForm } from "react-hook-form";
import { newTranslation } from "../api/translation";
import TranslationHeader from "../components/TranslationComp/TranslationHeader";
import { useUser } from "../context/UserProvider";
import { storageSave, STORAGE_USER_KEY } from "../miscellaneous/storage";
import withAuth from "../miscellaneous/withAuth";

/* Text configuration:
    - text must be typed
    - text must have at least 1 character */
const wordConfig = { required: true };

const Translation = () => {
  // useForm Object
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // useForm handles to not reload our page all the time
  // Translate word hook
  const [translateWord, setTranslateWord] = useState("");
  // User hook
  const { user, setUser } = useUser();
  /* Object for demonstrate errors:
        - no message for no errors
        - error message for empty text */
  const errorMessage = (() => {
    if (!errors.word) return null;
    if (errors.word.type === "required")
      return <span id="null-text">🚨 Text is required 🚨</span>;
  })();
  // When 'submit' button clicked, take the word and traslate it in images
  const onSubmit = async ({ word }) => {
    const images = [];
    const letters = /^[A-Za-z]+$/;
    if (word.match(letters)) {
      let index = 0;
      for (const letter of word) {
        index++;
        images.push(
          <img
            src={"signs/" + letter + ".png"}
            alt={letter + ".png"}
            key={index}
            width="87"
            height="87"
          />
        );
      }
      setTranslateWord(images);
      const [error, updatedUser] = await newTranslation(user, word);
      storageSave(STORAGE_USER_KEY, updatedUser);
      setUser(updatedUser);
      alert(`${word} is registered in your profile!`);
    }
  };
  // When text box is clicked, delete translation
  const deleteImagesInChange = async (event) => {
    setTranslateWord();
  };

  return (
    <>
      <TranslationHeader />
      <div id="translation-div">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="translation-form"
          className="input-group-lg"
        >
          <p id="warning">
            🚨 Text can not contain numbers or special characters 🚨
          </p>
          <input
            type="text"
            placeholder="Type your word here"
            className="form-control-lg"
            onClick={deleteImagesInChange}
            {...register("word", wordConfig)}
          />
          <button
            type="submit"
            className="btn btn-lg btn-success"
            id="submit-translation"
          >
            translate
          </button>
          <p>{errorMessage}</p>
        </form>
        <section id="ASL-word-display">
          {translateWord === "" ? (
            <p id="empty-ASL-list">
              {/* displaying while user 
                    hasn't type anything */}
              This is a "sign" that you must enter some words! 👨‍🏫
            </p>
          ) : (
            translateWord
          )}
        </section>
      </div>
    </>
  );
};

export default withAuth(Translation);
