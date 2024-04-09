import { volumes } from "@/public/lib/data";
import Link from "next/link";

export default function HomePage() {
  const data = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>

      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </div>
  );
}
