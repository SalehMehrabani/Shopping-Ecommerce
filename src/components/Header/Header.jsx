import { motion } from "framer-motion";
import ImageComponent from "../components/ImageComponent";

function Header() {
  return (
    <header className=" w-full  h-max md:h-screen p-5">
      <div
        className="relative p-10 shadow-lg h-full w-full flex flex-col justify-between gap-40 sm:gap-16"
        style={
          {
            // backgroundImage: "url(images/Header.jpg)",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }
        }
      >
        <ImageComponent
          src={"images/Header.jpg"}
          alt={"Bring the look to the life with our fashion picks"}
          className={"absolute top-0 left-0  -z-10"}
          hash={"LROCP_^#~PM|-,ahNIWXxoayM~jZ"}
        />
        {/* Top */}
        <div className="flex flex-col gap-5 w-full md:w-1/2 items-start">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", transition: 0.4, delay: 0.1 }}
            className="text-slate-50 uppercase text-4xl tracking-tight font-semibold"
          >
            Bring the look to the life with our fashion picks
          </motion.h3>
          <motion.button
            whileTap={{ sclae: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", transition: 0.5, delay: 0.5 }}
            className="uppercase text-slate-50 text-xl tracking-tight underline underline-offset-4 decoration-1"
          >
            Shop Now
          </motion.button>
        </div>
        {/* Bottom */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className="w-full text-center text-6xl md:text-8xl uppercase text-slate-50 font-bold tracking-tight"
        >
          unique fashion style
        </motion.p>
      </div>
    </header>
  );
}

export default Header;
