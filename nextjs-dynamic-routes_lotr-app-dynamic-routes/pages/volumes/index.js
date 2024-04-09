import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function handleRandomCLick() {
    const randomValue = getRandomElement(volumes);
    const pushValue = randomValue.slug;
    console.log(randomValue.slug);
    router.push(`/volumes/${pushValue}`);
  }

  return (
    <>
      <Head>
        <title>The Lord of the Rings</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ id, slug, title }) => (
          <li key={id}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleRandomCLick}>
        Get Random Volume
      </button>
    </>
  );
}
