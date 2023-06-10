'use client'
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Contacto() {
  const [gameList, setGameList] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchGames = async () => {
    const res = await fetch('https://casino-api.starsolpty.com:8443/star-game-orchestrator/site/games?user_id=992722337__DivisionMalawi__MWK&page=1&size=1500&name=');
    const data = await res.json();
    return data.data.list;
  };

  useEffect(() => {
    const loadInitialGames = async () => {
      const initialGames = await fetchGames();
      if (initialGames.length === 0) {
        setHasMore(false);
      }
      const firstTenGames = initialGames.slice(0, 10);
      setGameList(firstTenGames);
    };

    loadInitialGames();
  }, []);

  const loadMore = async () => {
    const newGames = await fetchGames();
    if (newGames.length === 0) {
      setHasMore(false);
      return;
    }
    const startIndex = gameList.length;
    const endIndex = startIndex + 10;
    setGameList([...gameList, ...newGames.slice(startIndex, endIndex)]);
  };

  return (
    <div id="stats" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      <InfiniteScroll
        dataLength={gameList.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        initialScrollY={false}
      >
        {gameList.map(game => (
          <div key={game.id} className="flex flex-row items-center justify-center">
            <div className="p-2">
              <div className="relative">
                <img
                  className="w-52 h-52 rounded-lg shadow-md bg-black/20 to-white/10"
                  src={game.icon}
                  alt={game.game_name}
                  loading="lazy"
                />
                <a href="#" className="absolute inline-flex space-x-2 items-center text-center bottom-2 right-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </a>
              </div>
              <h4 className="text-base font-bold" style={{ maxWidth: '208px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{game.game_name}</h4>
              <p className="text-gray-500 text-xs">Min. Bet {game.min_bet + game.currency}</p>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
