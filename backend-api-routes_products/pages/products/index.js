import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function AllProductsList() {
  const { data, error } = useSWR("/api/products/", fetcher);

  if (error) return <div>failed to load data</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <h1>List of All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
