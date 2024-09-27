import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import CategoriesNavbar from "../components/Navbar/CategoriesNavbar";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col">
      <Navbar />
      <CategoriesNavbar />
      <Header />
      <Categories />
    </div>
  );
}

export default Home;
