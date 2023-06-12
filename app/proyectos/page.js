import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchGames = (page, size) => {
  return fetch(`https://casino-api.starsolpty.com:8443/star-game-orchestrator/site/games?user_id=992722337__DivisionMalawi__MWK&page=${page}&size=${size}&name=`)
    .then(res => res.json())
}

export default function Contacto() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialPageLoaded, setInitialPageLoaded] = useState(false);

  useEffect(() => {
    const fetchInitialGames = async () => {
      const pageSize = 10; // Cantidad de juegos a obtener en la primera carga
      const initialData = await fetchGames(1, pageSize);
      const initialGames = initialData.data.list;
      const remainingGames = initialData.data.totalCount - pageSize;

      setGames(initialGames);
      setPage(2);
      setInitialPageLoaded(true);

      if (remainingGames === 0) {
        setHasMore(false);
      }
    };

    fetchInitialGames();
  }, []);

  const loadMore = () => {
    fetchGames(page, 10).then(data => {
      if (data.data.list.length === 0) {
        setHasMore(false);
        return;
      }

      setGames([...games, ...data.data.list]);
      setPage(page + 1);
    });
  }

  return (
    <div id="stats" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {initialPageLoaded && games.map(game => (
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
            <h4 className="text-base font-bold" style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{game.game_name}</h4>
            <p className="text-gray-500 text-xs">Min. Bet {game.min_bet + game.currency}</p>
          </div>
        </div>
      ))}
      {hasMore && initialPageLoaded && (
        <InfiniteScroll
          dataLength={games.length}
          next={loadMore}
          hasMore={true}
          loader={
            <div className="flex justify-center my-4">
              <div className="animate-spin w-6 h-6 border-3 border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
          }
        />
      )}
    </div>
  )
}
