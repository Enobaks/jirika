import React from "react";

const Home = () => {
  return (
    <div className="home-wrap w-full">
      <div className="grid grid-cols-4 gap-4">
        <div className="greetings col-span-2 bg-orange-400">
          <h1>Hello, Clinton Elvis </h1>
          <div>
            <h5>Wallet Balance</h5>
            <p>#356.90</p>
          </div>
        </div>
        <div className="transactions-summary bg-lime-400"></div>
        <div className="transactions-summary bg-violet-400"></div>
      </div>
    </div>
  );
};

export default Home;
