import { volumes } from "@/public/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const data = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>{" "}
      <Image
        src={data.cover}
        width={"140"}
        height={"230"}
        alt="the image of the book"
      ></Image>
      <ul>
        {data.books.map((book) => (
          <li key={data.title}>
            <h2>
              {book.ordinal}:{book.title}
            </h2>
          </li>
        ))}
      </ul>
      <Link href="/volumes/the-two-towers">Previous Volume</Link>
    </div>
  );
}
