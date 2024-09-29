import { Suspense, lazy } from "react";

import Navbar from "../components/Navbar/Navbar";
import CategoriesNavbar from "../components/Navbar/CategoriesNavbar";
import Header from "../components/Header/Header";
// import Categories from "../components/Categories/Categories";
const Categories = lazy(() => import("../components/Categories/Categories"));

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col">
      <Navbar />
      <CategoriesNavbar />
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
      </Suspense>
    </div>
  );
}

export default Home;
