import { BrowserRouter } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Work from "./pages/work/Work";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-950 w-full">
        <Landing />
        {/* <Work /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
