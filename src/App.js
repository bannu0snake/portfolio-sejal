import { BrowserRouter } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import gif from "./assets/images/Animation - 1716311024659.gif";
function App() {
  return (
    <>
      <div className="hidden md:block">
        <BrowserRouter>
          <div className="bg-neutral-950 w-full">
            <Landing />
            {/* <Work /> */}
          </div>
        </BrowserRouter>
      </div>
      <div className="bg-neutral-950 w-full h-[100vh] md:hidden">
        <div className="text-white mx-auto">
          <img src={gif} alt="" className="h-5rem w-[100%]" />
          <div className="text-center font-rubik text-xl mx-4">
            Veiw in Desktop for better experince
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
