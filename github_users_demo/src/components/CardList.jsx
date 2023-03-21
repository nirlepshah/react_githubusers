import Card from "./Card.jsx";

function CardList(props) {
  return (
    <>
      <div>
        {props.cards.map((card, index) => {
          return <Card key={index} {...card} />;
          console.log(card);
        })}
      </div>
    </>
  );
}
export default CardList;
