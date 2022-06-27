import React from "react";
import styles from "./ShoeCard.module.css"

const ShoeCard = ({datas}) => {
  const shoeId = datas.id;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}  className={styles.card} >
      <img data-cy="shoe-card-image" src={datas.image}  alt="shoe" />
      <div className={styles.details} >
        <div data-cy="shoe-name">{datas.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">0</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
