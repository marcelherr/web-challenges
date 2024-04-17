import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return;
  }

  return (
    <>
      <h2>ID: {id}</h2>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <h3>
        {data.price}
        {data.currency}
      </h3>
      <p>{data.category}</p>
      <Link href="/products/">Back to List</Link>
    </>
  );
}
