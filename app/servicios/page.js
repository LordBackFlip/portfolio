'use client'
import React, { useState } from "react";
export default function Contacto() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      <div className="bg-black/60 to-white/5 rounded-lg shadow-md">
        <div className="flex flex-row items-center">
          <div className="text-3xl p-4">💰</div>
          <div className="p-2">
            <p className="text-xl font-bold">348$</p>
            <p className="text-gray-500 font-medium">Amber Gates</p>
            <p className="text-gray-500 text-sm">24 Nov 2022</p>
          </div>
        </div>
        <div className="border-t border-white/5 p-4">
          <a href="#" className="inline-flex space-x-2 items-center text-center" onClick={toggleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Info</span>
          </a>
        </div>
        {isOpen && (
        <div
          className="fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
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
                Título del Modal
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Cerrar"
                onClick={toggleModal}
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
              <p>
                Este es un contenido de ejemplo para mostrar un modal centrado verticalmente. Hemos añadido un texto
                adicional aquí para mostrar cómo funciona la centrado vertical del modal cuando se combina con modals
                desplazables. También utilizamos algunos saltos de línea repetidos para extender rápidamente la altura
                del contenido, lo que activa la función de desplazamiento. Cuando el contenido es más largo que la
                altura máxima predefinida del modal, el contenido se recorta y se vuelve desplazable dentro del modal.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>Así de fácil.</p>
            </div>
            <div className="flex justify-end p-4 border-t-2">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={toggleModal}
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
      <div className="bg-black/60 to-white/5 rounded-lg shadow-md">
        <div className="flex flex-row items-center">
          <div className="text-3xl p-4">💰</div>
          <div className="p-2">
            <p className="text-xl font-bold">348$</p>
            <p className="text-gray-500 font-medium">Amber Gates</p>
            <p className="text-gray-500 text-sm">24 Nov 2022</p>
          </div>
        </div>
        <div className="border-t border-white/5 p-4">
          <a href="#" className="inline-flex space-x-2 items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Info</span>
          </a>
        </div>
      </div>
      <div className="bg-black/60 to-white/5 rounded-lg shadow-md">
        <div className="flex flex-row items-center">
          <div className="text-3xl p-4">💰</div>
          <div className="p-2">
            <p className="text-xl font-bold">348$</p>
            <p className="text-gray-500 font-medium">Amber Gates</p>
            <p className="text-gray-500 text-sm">24 Nov 2022</p>
          </div>
        </div>
        <div className="border-t border-white/5 p-4">
          <a href="#" className="inline-flex space-x-2 items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Info</span>
          </a>
        </div>
      </div>
      <div className="bg-black/60 to-white/5 rounded-lg shadow-md">
        <div className="flex flex-row items-center">
          <div className="text-3xl p-4">💰</div>
          <div className="p-2">
            <p className="text-xl font-bold">348$</p>
            <p className="text-gray-500 font-medium">Amber Gates</p>
            <p className="text-gray-500 text-sm">24 Nov 2022</p>
          </div>
        </div>
        <div className="border-t border-white/5 p-4">
          <a href="#" className="inline-flex space-x-2 items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Info</span>
          </a>
        </div>
      </div>
      <div className="bg-black/60 to-white/5 rounded-lg shadow-md">
        <div className="flex flex-row items-center">
          <div className="text-3xl p-4">💰</div>
          <div className="p-2">
            <p className="text-xl font-bold">348$</p>
            <p className="text-gray-500 font-medium">Amber Gates</p>
            <p className="text-gray-500 text-sm">24 Nov 2022</p>
          </div>
        </div>
        <div className="border-t border-white/5 p-4">
          <a href="#" className="inline-flex space-x-2 items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Info</span>
          </a>
        </div>
      </div>
      <div className="bg-black/60 to-white/5 rounded-lg shadow-md">
        <div className="flex flex-row items-center">
          <div className="text-3xl p-4">💰</div>
          <div className="p-2">
            <p className="text-xl font-bold">348$</p>
            <p className="text-gray-500 font-medium">Amber Gates</p>
            <p className="text-gray-500 text-sm">24 Nov 2022</p>
          </div>
        </div>
        <div className="border-t border-white/5 p-4">
          <a href="#" className="inline-flex space-x-2 items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Info</span>
          </a>
        </div>
      </div>
      <div className="bg-black/60 to-white/5 rounded-lg shadow-md">
        <div className="flex flex-row items-center">
          <div className="text-3xl p-4">💰</div>
          <div className="p-2">
            <p className="text-xl font-bold">348$</p>
            <p className="text-gray-500 font-medium">Amber Gates</p>
            <p className="text-gray-500 text-sm">24 Nov 2022</p>
          </div>
        </div>
        <div className="border-t border-white/5 p-4">
          <a href="#" className="inline-flex space-x-2 items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Info</span>
          </a>
        </div>
      </div>
      <div className="bg-black/60 to-white/5 rounded-lg shadow-md">
        <div className="flex flex-row items-center">
          <div className="text-3xl p-4">💰</div>
          <div className="p-2">
            <p className="text-xl font-bold">348$</p>
            <p className="text-gray-500 font-medium">Amber Gates</p>
            <p className="text-gray-500 text-sm">24 Nov 2022</p>
          </div>
        </div>
        <div className="border-t border-white/5 p-4">
          <a href="#" className="inline-flex space-x-2 items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Info</span>
          </a>
        </div>
      </div>
    </div>
  );
}
