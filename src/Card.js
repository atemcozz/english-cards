import React from "react";

const Card = (props) => {
  return (
    <div
      key={props.card.id}
      className={"card" + (props.card.value.flipped ? " flipped" : "")}
      onClick={() => props.app.turnCard(props.card.id)}
    >
      {props.card.value.flipped
        ? props.card.value.translation
        : props.card.value.word}
    </div>
  );
};
export default Card;
