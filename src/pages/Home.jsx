import { Suspense, lazy } from "react";

import Navbar from "../components/Navbar/Navbar";
import CategoriesNavbar from "../components/Navbar/CategoriesNavbar";
import Header from "../components/Header/Header";

const Categories = lazy(() => import("../components/Categories/Categories"));
const ProductList = lazy(() => import("../components/Products/ProductList"));
const Slogan = lazy(() => import("../components/Slogan/Slogan"));
const About = lazy(() => import("../components/About/About"));

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col">
      <Navbar />
      <CategoriesNavbar />
      <Header />
      {/* Categories */}
      <Suspense
        fallback={
          <div className="uppercase text-center text-xl">Loading...</div>
        }
      >
        <Categories />
      </Suspense>
      {/* Products List */}
      <Suspense
        fallback={
          <div className="uppercase text-center text-xl">Loading...</div>
        }
      >
        <ProductList />
      </Suspense>
      {/* Slogan */}
      <Suspense
        fallback={
          <div className="uppercase text-center text-xl">Loading...</div>
        }
      >
        <Slogan />
      </Suspense>
      {/* About */}
      <Suspense
        fallback={
          <div className="uppercase text-center text-xl">Loading...</div>
        }
      >
        <About />
      </Suspense>
    </div>
  );
}

export default Home;
