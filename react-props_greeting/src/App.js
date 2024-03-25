import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting coach="Feline" name="Marcel" />
    </div>
  );
}

function Greeting({ name, coach }) {
  return <h1> {name === coach ? "Hello Coach" : ` Hello ${name} `}</h1>;
}
