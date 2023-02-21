import TranslatedWord from "./TranslatedWord";

const ListOfTranslatedWords = ({ translations }) => {
  const listOfWords = translations.map((word, index) => (
    <TranslatedWord key={index + 1 + " " + word} word={word} />
  ));


  return (
    <section id='sign-list'>
      {listOfWords.length>0 && 
      <fieldset>
        <h3 id='sign-list-header'><u>Words in ASL</u></h3>
        <ul id='list-of-translated-words'>{listOfWords.reverse().slice(0,10)}</ul>
      </fieldset>}
      {listOfWords.length===0 && 
      <p id='empty-translation-list'>well...better go translate some words</p>}
    </section>
  );
};

export default ListOfTranslatedWords;
