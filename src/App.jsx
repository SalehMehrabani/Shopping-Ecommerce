import { Suspense, lazy } from "react";

import TopNotice from "./components/TopNotice/TopNotice";
import Home from "./pages/Home";
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <TopNotice />
      <Home />
      <Suspense
        fallback={
          <div className="uppercase text-center text-xl">Loading...</div>
        }
      >
        <div className="bg-black flex flex-col">
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;
