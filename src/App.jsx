import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

import { CORE_CONCEPTS, EXAMPLES } from "./data";

export const reactDescriptions = ["Fundamental", "Crucial", "Core"];

export function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts concepts={CORE_CONCEPTS} />
        <Examples concepts={CORE_CONCEPTS} examples={EXAMPLES} />
      </main>
    </>
  );
}

export default App;
