import React from 'react'
import { CDN_URL } from '../Utils/constants.js';

function ItemList({ items }) {
    console.log(items);
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 border-white"
        >
          <div className="">
            <span className="font-bold">{item.card.info.name}</span>
            <span>
              {" "}
              - ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className='flex justify-between align-middle'>
            <p className="text-xs self-center">{item.card.info.description}</p>
            <img
              className="w-[150px] h-28 rounded-md self-end"
              src={CDN_URL + item.card.info.imageId}
              alt="img"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList
