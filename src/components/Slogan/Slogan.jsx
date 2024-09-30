import { motion } from "framer-motion";
import ImageComponent from "../components/ImageComponent";

function Slogan() {
  return (
    <section className="relative w-full  h-max">
      <motion.p
        whileInView={{ y: [0, -5, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
        className="text-stone-900 text-6xl md:text-8xl uppercase w-full h-full flex items-center justify-center text-center py-20 px-20 sm:px-32 font-medium tracking-tight"
      >
        with a modern design, we make your personal style the center attention
      </motion.p>
      <div className=" absolute top-5 md:top-32 left-5 w-32 md:w-60 h-40 md:h-80 z-10">
        <ImageComponent
          src={"images/Product3.jpg"}
          alt={"Bring the look to the life with our fashion picks"}
          className={""}
        />
      </div>
      <div className="absolute bottom-0 md:bottom-20 right-5 md:right-10 w-40 md:w-60 h-60 md:h-80 -z-10">
        <ImageComponent
          src={"images/Category4.jpg"}
          alt={"Bring the look to the life with our fashion picks"}
          className={""}
        />
      </div>
    </section>
  );
}

export default Slogan;
