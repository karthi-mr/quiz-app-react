import { type ReactElement } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";


function App(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;
