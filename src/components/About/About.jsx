import { motion } from "framer-motion";
import ImageComponent from "../components/ImageComponent";

function About() {
  return (
    <header className=" w-full  h-screen px-5 py-10">
      <div className="relative p-10 shadow-lg h-full w-full flex flex-col justify-center items-center gap-12 ">
        <ImageComponent
          src={"images/About.jpg"}
          alt={"Bring the look to the life with our fashion picks"}
          className={"absolute top-0 left-0 -z-10 brightness-75"}
        />
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="w-full text-slate-50 text-4xl sm:text-6xl font-medium tracking-tighter text-center uppercase px-5 sm:px-10 "
        >
          find your unique style with our fashion collection
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}
          className="w-full text-slate-50 underline underline-offset-4 decoration-1  tracking-tight text-center uppercase px-10 "
        >
          Explore more
        </motion.p>
      </div>
    </header>
  );
}

export default About;
