import { motion } from "framer-motion";
function Categories() {
  return (
    <section className="w-full h-screen grid grid-cols-5 grid-rows-2 p-5 gap-5">
      {/* Category1 */}
      <div
        className="col-start-1 col-end-4 row-start-1 row-end-2 flex flex-col justify-between items-start p-10 text-stone-800"
        style={{
          backgroundImage: "url(/images/Category1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className="w-1/2 uppercase text-3xl  tracking-tight"
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
      <div
        className="col-start-4 col-end-6 row-start-1 row-end-2 shadow"
        style={{
          backgroundImage: "url(/images/Category2.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Category3*/}
      <div
        className="col-start-1 col-end-3 row-start-2 row-end-3 flex flex-col justify-between items-start p-10 text-stone-800"
        style={{
          backgroundImage: "url(/images/Category3.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className="w-1/2 uppercase text-3xl  tracking-tight"
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
      <div
        className="col-start-3 col-end-6 row-start-2 row-end-3 flex flex-col justify-between items-start p-10 text-stone-800"
        style={{
          backgroundImage: "url(/images/Category4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", transition: 0.3, delay: 0.3 }}
          className="w-1/2 uppercase text-3xl  tracking-tight"
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
