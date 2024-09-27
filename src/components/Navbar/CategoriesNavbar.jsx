import { motion } from "framer-motion";

const categories = [
  "New",
  "Clothing",
  "Designers",
  "Dresses",
  "Shoes",
  "Accessories",
  "Beauty ",
  "Sale",
  "Shop",
];

function CategoriesNavbar() {
  return (
    <div className="w-full px-5 py-8 border-b border-stone-400 overflow-x-auto">
      <motion.ul
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
        className="flex w-full items-center justify-between gap-5"
      >
        {categories.map((item, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer tracking-tight text-sm text-stone-800 font-medium uppercase"
            key={index}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default CategoriesNavbar;
