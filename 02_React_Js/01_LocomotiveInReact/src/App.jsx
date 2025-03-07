import locomotive from "locomotive-scroll";
const scroll = new locomotive();

function App() {
  return (
    <>
      <div className="main">

        <div className="w-[100%] h-screen bg-blue-400 flex justify-center items-center">
          <h1 className="relative text-5xl font-bold text-white">
            Locomotive JS
          </h1>
        </div>

        <div className="w-[100%] h-screen bg-blue-500 flex justify-evenly items-center">
          <h1 className="relative text-5xl font-bold text-white">
            Locomotive JS
          </h1>
        </div>

        <div className="w-[100%] h-screen bg-blue-600 flex justify-center items-center">
          <h1 className="relative text-5xl font-bold text-white">
            Locomotive JS
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
