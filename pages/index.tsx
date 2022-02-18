import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import imageLoader from "../imageLoader";
import { Character, GetCharacterResult } from "../types";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  let isDark = true;
  return (
    <div className="dark">
      <Head>
        <title>Rick Morty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white dark:bg-black ">
        <h1 className="text-center py-8 font-bold text-3xl dark:text-white">
          Rick Morty Characters
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-10">
          {characters.map((character) => {
            return (
              <div className="mx-8 flex justify-center py-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <Link href={`/characters/${character.id}`}>
                  <div key={character.id}>
                    <Image
                      loader={imageLoader}
                      unoptimized
                      src={character.image}
                      alt={character.name}
                      width={280}
                      height="200px"
                    />
                    <h1 className="text-center font-semibold text-lg dark:text-white">
                      {character.name}
                    </h1>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResult = await res.json();
  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
