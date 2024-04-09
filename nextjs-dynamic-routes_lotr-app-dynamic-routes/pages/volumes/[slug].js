import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }
  const { title, description, cover, books } = currentVolume;

  return (
    <>
      {" "}
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />{" "}
    </>
  );
}
