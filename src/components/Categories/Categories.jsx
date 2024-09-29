import { motion } from "framer-motion";
import ImageComponent from "../components/ImageComponent";
function Categories() {
  return (
    <section className="w-full min-h-screen h-max sm:h-screen grid sm:grid-cols-5 sm:grid-rows-2 p-5 gap-5 grid-row-3">
      {/* Category1 */}
      <div className="relative col-start-1 col-end-2 row-start-1 row-end-2 sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 flex flex-col justify-between gap-10 items-start p-10 text-stone-800">
        <ImageComponent
          src={"images/Category1.jpg"}
          alt={"What to wear for this week ahead"}
          className={"absolute top-0 left-0  -z-10"}
        />
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className="w-full md:w-1/2 uppercase text-3xl  tracking-tight"
        >
          What to wear for this week ahead
        </motion.span>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className=" uppercase underline underline-offset-4 decoration-1 tracking-tight"
        >
          Shop now
        </motion.button>
      </div>
      {/* Category2*/}
      <div className="relative hidden sm:grid sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-2 shadow">
        <ImageComponent
          src={"images/Category2.jpg"}
          alt={"What to wear for this week ahead"}
          className={"absolute top-0 left-0  -z-10"}
        />
      </div>
      {/* Category3*/}
      <div className="relative col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3 flex flex-col justify-between gap-10 items-start p-10 text-stone-800">
        <ImageComponent
          src={"images/Category3.jpg"}
          alt={"Endless Summer Day"}
          className={"absolute top-0 left-0  -z-10"}
        />
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className="w-full md:w-1/2 uppercase text-3xl  tracking-tight"
        >
          Endless Summer Day
        </motion.span>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className=" uppercase underline underline-offset-4 decoration-1 tracking-tight"
        >
          Shop now
        </motion.button>
      </div>
      {/* Category4*/}
      <div className="relative col-start-1 col-end-2 row-start-3 row-end-4 sm:col-start-3 sm:col-end-6 sm:row-start-2 sm:row-end-3 flex flex-col justify-between items-start gap-10 p-10 text-stone-800">
        <ImageComponent
          src={"images/Category4.jpg"}
          alt={"The undisputed warm weather hero"}
          className={"absolute top-0 left-0  -z-10"}
        />
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className="w-full md:w-1/2 uppercase text-3xl  tracking-tight"
        >
          The undisputed warm weather hero
        </motion.span>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className=" uppercase underline underline-offset-4 decoration-1 tracking-tight"
        >
          Shop now
        </motion.button>
      </div>
    </section>
  );
}

export default Categories;
