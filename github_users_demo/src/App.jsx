import { useState } from "react";
import Form from "./components/Form";
import CardList from "./components/CardList";
import "./index.css";
function App() {
  const [cards, setCards] = useState([]);

  const addNewCard = (card) => {
    setCards([...cards, card]);
  };
  return (
    <>
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search a Github User
      </h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
      {console.log(cards)}
    </>
  );
}

export default App;
