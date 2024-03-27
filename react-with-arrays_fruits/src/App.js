import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "🍌 Banana", color: "card--yellow" },
    { id: 1338, name: "🍎 Apple", color: "card--red" },
    { id: 1339, name: "🍇 Grape", color: "card--puprle" },
    { id: 1340, name: "🍑 Peach", color: "card--red" },
    { id: 1341, name: "🍍 Pineapple", color: "card--yellow" },
  ];

  return (
    <ul>
      {fruits.map(({ id, name, color }) => (
        <li key={id}>
          <Card name={name} color={color}></Card>
        </li>
      ))}
    </ul>
  );
}
