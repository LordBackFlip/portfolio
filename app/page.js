'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Games({ title, games }) {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold uppercase mx-8">{title}</h2>
      <div className="flex overflow-x-auto mt-4 p-4">
        {games.map((game) => (
          <Image
          className="m-2 w-40 h-40 transition-all duration-200 hover:scale-110 rounded-lg shadow-3xl bg-black/30 to-white/10 aspect-square"
            key={game.id}
            src={game.icon}
            alt={game.game_name}
            loading="lazy"
            width={200}
            height={200}
          />
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