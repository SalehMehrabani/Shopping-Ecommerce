import CategoriesNavbar from "./components/Navbar/CategoriesNavbar";
import Navbar from "./components/Navbar/Navbar";
import TopNotice from "./components/TopNotice/TopNotice";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <TopNotice />
      <Navbar />
      <CategoriesNavbar />
    </div>
  );
}

export default App;
