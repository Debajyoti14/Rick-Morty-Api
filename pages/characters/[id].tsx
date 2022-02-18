import { Character, GetCharacterResult } from "../../types";
import Image from "next/image";
import imageLoader from "../../imageLoader";

function characterPage({ character }: { character: Character }) {
  return (
    <div className="dark ">
    <div className="bg-white dark:bg-black h-screen">
      <h1 className="text-center py-8 font-bold text-3xl dark:text-white">Characters</h1>
      <div className="flex flex-col justify-center items-center py-2 bg-gray-100 dark:bg-gray-800 rounded-xl max-w-fit mx-auto">
      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width={280}
        height="200px"
        />
        <h1 className="text-center font-semibold text-lg dark:text-white">{character.name}</h1>
    </div>
    </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResult = await res.json();
  return {
    paths: results.map((character) => {
      return { params: { id: String(character.id) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: String } }) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await res.json();
  return {
    props: {
      character,
    },
  };
}

export default characterPage;
