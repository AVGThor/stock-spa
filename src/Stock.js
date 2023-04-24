import React from "react";

const Stock = ({ code, time, date, basicPrice, open, close }) => {
  return (
    <div className="mx-auto w-fit p-4 bg-white my-2 drop-shadow-md rounded-lg">
      <div className="flex items-center">
        <div className="coin flex items-center">
        <h1 className="w-32 ml-4 flex justify-start">{code}</h1>
          <h1 className="w-32 ml-4 flex justify-start">{date}</h1>
          <p className="w-20 ml-4 flex justify-start uppercase">{time}</p>
        </div>
        <div className="coin-data flex items-center">
          <p className="coin-price w-32 ml-10 flex justify-start">Basic Price: {basicPrice}</p>
          <p className="coin-volume w-32 ml-10 flex justify-start">
            Open: {open.toLocaleString()}
          </p>
          {close < 0 ? (
            <p className="coin-percent text-red-500 w-40 ml-5 flex justify-end">
              {close.toFixed(2)}
            </p>
          ) : (
            <p className="coin-percent text-green-500 w-40 ml-5 flex justify-end">
              Close Price: {close.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stock;