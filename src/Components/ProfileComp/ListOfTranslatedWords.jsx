import TranslatedWord from "./TranslatedWord";

const ListOfTranslatedWords = ({ translations }) => {
  const listOfWords = translations.map((word, index) => (
    <TranslatedWord key={index + 1 + " " + word} word={word} />
  ));

  return (
    <section>
      <h3>TRANSLATION LIST</h3>
      <ul>{listOfWords}</ul>
    </section>
  );
};

export default ListOfTranslatedWords;
