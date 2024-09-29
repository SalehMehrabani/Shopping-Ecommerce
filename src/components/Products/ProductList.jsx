import { motion } from "framer-motion";
import Product from "./Product";

const productData = [
  {
    name: "irregular geometric",
    price: "19.12",
    category: "men's casual shirt",
    path: "images/Product1.jpg",
  },
  {
    name: "signature geometric",
    price: "14.23",
    category: "men's casual shirt",
    path: "images/Product2.jpg",
  },
  {
    name: "overshirt signature",
    price: "13.45",
    category: "men's casual shirt",
    path: "images/Product3.jpg",
  },
  {
    name: "pocket shoulder",
    price: "12.51",
    category: "men's hodie",
    path: "images/Product4.jpg",
  },
  {
    name: "prada delivers four",
    price: "13.44",
    path: "images/Product5.jpg",
    category: "men's shirt",
  },
  {
    name: "overshirt signature",
    price: "17.73",
    category: "men's casual shirt",
    path: "images/Product6.jpg",
  },
  {
    name: "soft overshirt",
    price: "15.39",
    category: "women's jacket",
    path: "images/Product7.jpg",
  },
  {
    name: "signature chunky ",
    price: "14.92",
    category: "men's casual shirt",
    path: "images/Product8.jpg",
  },
];

function ProductList() {
  return (
    <section className="w-full  h-max p-5 pt-10 flex flex-col gap-10">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
        className="text-stone uppercase tracking-tight text-center text-3xl"
      >
        Featured Items
      </motion.h2>
      {/* Products */}
      <div className="flex items-center gap-3 flex-wrap justify-between w-full">
        {productData.map((item, index) => (
          <Product data={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
