import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <a href="/">
            <span className="sr-only">Your Company</span>
            <img className="h-32 w-auto sm:h-17" src="/logo.svg" alt="" />
          </a>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-2xl font-semibold leading-8 text-indigo-600">
              MB Studio
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Dominio en construccion
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Nos estamos reinventando ☀️
            </p>
            <div className="mt-10">
              {/* <a
                href="#"
                className="text-sm font-semibold leading-7 text-indigo-600"
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </a> */}
            </div>
          </div>
        </main>
        <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-gray-100 bg-gray-50 py-10">
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
              <a href="#">Mind Breakers Studio © 2023</a>
            </nav>
          </div>
        </footer>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
