import Header from "./components/Header/Header";
import CategoriesNavbar from "./components/Navbar/CategoriesNavbar";
import Navbar from "./components/Navbar/Navbar";
import TopNotice from "./components/TopNotice/TopNotice";

function App() {
  return (
    <>
      <TopNotice />
      <div className="max-w-screen-xl mx-auto ">
        <Navbar />
        <CategoriesNavbar />
        <Header />
      </div>
    </>
  );
}

export default App;
