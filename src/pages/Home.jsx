import { Suspense, lazy } from "react";

import Navbar from "../components/Navbar/Navbar";
import CategoriesNavbar from "../components/Navbar/CategoriesNavbar";
import Header from "../components/Header/Header";

const Categories = lazy(() => import("../components/Categories/Categories"));
const ProductList = lazy(() => import("../components/Products/ProductList"));

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col">
      <Navbar />
      <CategoriesNavbar />
      <Header />

      <Suspense
        fallback={
          <div className="uppercase text-center text-xl">Loading...</div>
        }
      >
        <Categories />
      </Suspense>
      <Suspense
        fallback={
          <div className="uppercase text-center text-xl">Loading...</div>
        }
      >
        <ProductList />
      </Suspense>
    </div>
  );
}

export default Home;
