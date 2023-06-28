'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Games({ title, games }) {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center bg-gradient-to-r from-black via-black to-transparent pl-2 border-l-2 border-white mx-2">
        <h2 className="text-xl font-bold uppercase mx-2 text-gray-200">{title}</h2>
        <div>
          <button onClick={scrollLeft}>Left</button>
          <button onClick={scrollRight}>Right</button>
        </div>
      </div>
      <div ref={scrollRef} className="flex overflow-hidden mt-4 p-4">
        {games.map((game) => (
          <div key={game.id} className="m-2 w-36 sm:m-4 sm:w-52 lg:w-56">
            <div className="relative">
              <Image
                className="h-36 w-36 sm:h-48 sm:w-48 lg:w-52 lg:h-52 transition-all duration-200 rounded-lg shadow-3xl bg-black/30 to-white/10 aspect-square"
                src={game.icon}
                alt={game.game_name}
                loading="lazy"
                width={200}
                height={200}
              />
              <a className="absolute inline-flex space-x-2 items-center text-center bottom-2 right-2" onClick={() => toggleModal(game.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </a>
            </div>
            <div className='text-center w-36 sm:w-48 lg:w-52'>
              <h4 className="text-gray-200 font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap">{game.game_name}</h4>
              <p className="text-green-500 text-xs">{game.min_bet + game.currency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const fetchCategories = () => {
  return fetch(
    `https://casino-api.starsolpty.com:8443/star-game-orchestrator/site/categories?user_id=992722337__DivisionMalawi__MWK`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};


const fetchGames = (category) => {
  return fetch(
    `https://casino-api.starsolpty.com:8443/star-game-orchestrator/site/games?user_id=992722337__DivisionMalawi__MWK&page=1&size=10&category=${category}`
  ).then((res) => res.json());
};

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [gamesByCategory, setGamesByCategory] = useState({});

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data.data));
  }, []);

  useEffect(() => {
    categories.forEach((category) => {
      fetchGames(category.name).then((data) =>
        setGamesByCategory((prev) => ({ ...prev, [category.name]: data.data.list }))
      );
    });
  }, [categories]);

  return (
    <>
      {categories.map((category) => (
        <Games key={category.code} title={category.name} games={gamesByCategory[category.name] || []} />
      ))}
    </>
  );
}