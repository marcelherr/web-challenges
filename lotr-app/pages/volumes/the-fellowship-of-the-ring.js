import { volumes } from "@/public/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const data = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>{" "}
      <Image
        src=""
        width={"140px"}
        height={"230px"}
        alt="the image of the book"
      ></Image>
      <ul>
        {data.books.map((book) => (
          <li key={book.ordinal}>
            <h2>{book.title}</h2>
          </li>
        ))}
      </ul>
      <Link href="/">Overview</Link>
      <Link href="/volumes/the-two-towers">Next Volume</Link>
    </div>
  );
}
