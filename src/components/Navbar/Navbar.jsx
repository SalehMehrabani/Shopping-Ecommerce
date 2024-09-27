import {
  Bars2Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between gap-5 p-5 border-b border-stone-400">
      {/* Logo */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.4, delay: 0.1 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="uppercase text-xl font-bold tracking-tighter text-stone-900 cursor-pointer"
      >
        Shopping.
      </motion.h2>
      {/* Navbar Items */}
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        className=" hidden md:flex items-center justify-center gap-10"
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="tracking-tight text-stone-800 uppercase cursor-pointer font-medium"
        >
          About
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="tracking-tight text-stone-800 uppercase cursor-pointer font-medium"
        >
          Mens
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="tracking-tight text-stone-800 uppercase cursor-pointer font-medium"
        >
          Womens
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="tracking-tight text-stone-800 uppercase cursor-pointer font-medium"
        >
          Contact
        </motion.li>
      </motion.ul>
      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}
        className="flex items-center justify-center sm:gap-5 gap-3"
      >
        <motion.button whileTap={{ scale: 1.1 }} whileHover={{ scale: 0.9 }}>
          <MagnifyingGlassIcon className="size-5" />
        </motion.button>
        <motion.button whileTap={{ scale: 1.1 }} whileHover={{ scale: 0.9 }}>
          <ShoppingBagIcon className="size-5" />
        </motion.button>
        <motion.button whileTap={{ scale: 1.1 }} whileHover={{ scale: 0.9 }}>
          <UserIcon className="size-5" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 0.9 }}
          className="block sm:hidden"
          onClick={() => setOpen(!open)}
        >
          <Bars2Icon className="size-5" />
        </motion.button>
      </motion.div>
      {/* More Option */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          className=" sm:hidden absolute top-[110px] z-10 left-0 w-full bg-white py-10 border-b border-stone-400"
        >
          {/* Close button */}
          <button
            className="top-3 right-3 absolute"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className="size-5" />
          </button>
          {/* Options */}
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
            className=" flex flex-col gap-5 px-5"
          >
            <motion.li
              whileHover={{ translateX: 10 }}
              className="tracking-tight text-stone-800 uppercase cursor-pointer font-medium"
            >
              About
            </motion.li>
            <motion.li
              whileHover={{ translateX: 10 }}
              className="tracking-tight text-stone-800 uppercase cursor-pointer font-medium"
            >
              Mens
            </motion.li>
            <motion.li
              whileHover={{ translateX: 10 }}
              className="tracking-tight text-stone-800 uppercase cursor-pointer font-medium"
            >
              Womens
            </motion.li>
            <motion.li
              whileHover={{ translateX: 10 }}
              className="tracking-tight text-stone-800 uppercase cursor-pointer font-medium"
            >
              Contact
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
