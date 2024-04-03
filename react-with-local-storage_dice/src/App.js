import useLocalStorageState from "use-local-storage-state";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  const [currentRollValue, setCurrentRollValue] = useLocalStorageState(
    "currentValue",
    {
      defaultValue: 0,
    }
  );

  const handleRoll = (newRollValue) => {
    setCurrentRollValue(newRollValue);
  };

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={[]} />
      </aside>
    </div>
  );
}
