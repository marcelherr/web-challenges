import { volumes } from "@/public/lib/data";
import Link from "next/link";

export default function HomePage() {
  const data = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.books.map((book) => (
          <li key={data.title}>{book.title}</li>
        ))}
      </ul>
      <Link href="/volumes/the-two-towers">Previous Volume</Link>
    </div>
  );
}
