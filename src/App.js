import { HashRouter } from "react-router-dom";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <HashRouter>
      <div className="bg-neutral-950 w-full">
        <Landing />
        {/* <Work /> */}
      </div>
    </HashRouter>
  );
}

export default App;
