'use client'
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchGames = (page) => {
  return fetch(`https://casino-api.starsolpty.com:8443/star-game-orchestrator/site/games?user_id=992722337__DivisionMalawi__MWK&page=${page}&size=10&name=`)
    .then(res => res.json())
}

export default function Contacto() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialPageLoaded, setInitialPageLoaded] = useState(false); // Nuevo estado para controlar si se cargó la primera página
  const [modalState, setModalState] = useState({});

  const toggleModal = (gameId) => {
    setModalState(prevState => ({
      ...prevState,
      [gameId]: !prevState[gameId]
    }));
  };
  useEffect(() => {
    fetchGames(1).then(data => {
      setGames(data.data.list);
      setPage(2);
      setInitialPageLoaded(true); // Marcar la primera página como cargada
    });
  }, []);

  const loadMore = () => {
    fetchGames(page).then(data => {
      if (data.data.list.length === 0) {
        setHasMore(false);
        return;
      }

      setGames([...games, ...data.data.list]);
      setPage(page + 1);
    });
  }

  return (
    <div id="stats" className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5">
      {initialPageLoaded && games.map(game => (
        <div key={game.id} className="flex-row items-center justify-center">
          <div className="p-2">
            <div className="relative">
              <Image
                className="rounded-lg shadow-3xl bg-black/30 to-white/10 aspect-square w-full"
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
            <div className='text-center'>
              <h4 className="text-gray-200 font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap">{game.game_name}</h4>
              <p className="text-green-500 text-xs">{game.min_bet + game.currency}</p>
            </div>
          </div>
          {modalState[game.id] && (
            <div
              className="fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm px-4"
              data-te-modal-init
              id="exampleModalCenteredScrollable"
              tabIndex="-1"
              aria-labelledby="exampleModalCenteredScrollable"
              aria-modal="true"
              role="dialog"
            >
              <div className="bg-white rounded-md shadow-lg w-auto mx-auto max-w-[500px]">
                <div className="flex justify-between items-center p-4 border-b-2 border-neutral-100">
                  <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                    {game.game_name}
                  </h5>
                  <button
                    type="button"
                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss
                    aria-label="Cerrar"
                    onClick={() => toggleModal(game.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <Image
                    className="rounded-lg shadow-3xl bg-black/30 to-white/10 aspect-square items-center"
                    src={game.icon}
                    alt={game.game_name}
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                  <p>
                    {game.info}
                  </p>
                </div>
                <div className="flex justify-end p-4 border-t-2">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    data-te-modal-dismiss
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => toggleModal(game.id)}
                  >
                    Cerrar
                  </button>
                  <button
                    type="button"
                    className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Guardar cambios
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {!initialPageLoaded && (
        [...Array(10)].map((_, index) => (
          <div key={index} className="animate-pulse flex-row items-center justify-center">
            <div className="p-2">
              <div className="flex items-center justify-center placed-center relative rounded-lg shadow-3xl bg-black/25 to-white/10 aspect-square w-full">
                <div className="animate-spin w-6 h-6 border-[3px] border-current border-t-transparent text-slate-400 rounded-full" role="status" aria-label="loading">
                  <span className="sr-only">Cargando...</span>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className="h-2 mt-2 rounded-full bg-slate-400 w-28"></div>
                <div className="h-1.5 mt-1.5 mb-3 rounded-full bg-slate-400 w-12"></div>
              </div>
            </div>
          </div>
        ))
      )}
      {initialPageLoaded && hasMore && (
        <InfiniteScroll
          dataLength={games.length}
          next={loadMore}
          hasMore={true}
          loader={
            <div className="animate-spin w-6 h-6 border-[3px] border-current border-t-transparent text-slate-400 rounded-full" role="status" aria-label="loading">
              <span className="sr-only">Loading...</span>
            </div>
          }
        />
      )}
    </div>
  )
}
