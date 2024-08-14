import React from "react";

function Cards(props) {
  return (
    <>
      <div className="mt-8 my-6">
        <div className=" dark:bg-slate-900 dark:text-gray-300 card bg-white w-11/12 shadow-xl hover:scale-105 hover:shadow-2xl duration-300 ">
          <figure>
            <img className="border"
              src={props.item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {props.item.name}
              <div className="badge badge-secondary">{props.item.category}</div>
            </h2>
            <p>{props.item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${props.item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white ">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
