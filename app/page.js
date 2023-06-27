'use client'
import React, { useState, useEffect } from "react";

function Movies({ title, movies }) {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold uppercase mx-8">{title}</h2>
      <div className="flex overflow-x-auto mt-4 p-4">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.icon}
            alt={movie.game_name}
            className="m-2 w-40 transition-all duration-200 hover:scale-110"
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
        <Movies key={category.code} title={category.name} movies={gamesByCategory[category.name] || []} />
      ))}
    </>
  );
}