import TranslatedWord from "./TranslatedWord";

const ListOfTranslatedWords = ({ translations }) => {
  const listOfWords = translations.map((word, index) => (
    <TranslatedWord key={index + 1 + " " + word} word={word} />
  ));

  return (
    <section id="ASL-list">
      {listOfWords.length > 0 && (
        <fieldset>
          <h3 id="ASL-list-header">
            <u>Words translated to ASL</u>
          </h3>
          <ol id="ASL-translated-words">
            {listOfWords.reverse().slice(0, 10)}
          </ol>
        </fieldset>
      )}
      {/* displaying while user 
      hasn't type anything */}
      {listOfWords.length === 0 && (
        <p id="empty-translation-list">
          Well...it's time to translate some words
          <img src="signs\v.png" />
        </p>
      )}
    </section>
  );
};

export default ListOfTranslatedWords;
