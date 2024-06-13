import { BrowserRouter } from "react-router-dom";
import Landing from "./pages/landing/Landing";
function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <div className="bg-neutral-950 w-[100vw]">
            <Landing />
            {/* <Work /> */}
          </div>
        </BrowserRouter>
      </div>
      {/* <div className="bg-neutral-950 w-full h-[100vh] md:hidden">
        <div className="text-white flex flex-col items-center gap-4 h-full pt-[20%]">
          <LuSmile className="h-16 w-16" />
          <div className="text-center font-rubik text-lg mx-4">
            Visit me on larger screen
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
