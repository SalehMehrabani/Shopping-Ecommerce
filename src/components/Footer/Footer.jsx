import { ArrowDownRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto h-max bg-black flex flex-col">
      {/* Top */}
      <div className="flex items-start md:flex-row flex-col justify-between gap-10 p-10 border-b border-slate-50">
        {/* First */}
        <div className="flex-1 flex flex-col gap-10">
          <p className="text-slate-50 uppercase text-4xl tracking-tighter pr-5">
            get creative with clothes: stylish inspiration for every occasion.
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-slate-50 flex items-center gap-5 border border-slate-50 rounded-full w-max px-4 py-2"
          >
            <p className="tracking-tight  capitalize">contact us</p>
            <ArrowDownRightIcon className="size-4" />
          </motion.button>
        </div>
        {/* Second */}
        <div className="flex-1 flex gap-10 flex-wrap">
          {/* Office */}
          <div className="flex flex-col gap-1 tracking-tight capitalize ">
            <span className="text-stone-600">Office</span>
            <span className="text-slate-50">
              Rue Centralei, LASalle CC, Metaverse, 2024
            </span>
          </div>
          {/* Business */}
          <div className="flex flex-col gap-1 tracking-tight  capitalize">
            <span className="text-stone-600">Business</span>
            <span className="text-slate-50 normal-case">
              SalehMehrabani.business@gmail.com
            </span>
          </div>
          {/* Customer Care */}
          <div className="flex flex-col gap-1 tracking-tight  capitalize">
            <span className="text-stone-600">Customer Care</span>
            <span className="text-slate-50 ">Terms & Conditions</span>
            <span className="text-slate-50 ">Privacy Policy</span>
            <span className="text-slate-50 ">FAQ</span>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex items-center justify-between gap-5 p-10 flex-wrap">
        <p className="capitalize text-slate-50">
          Shopping, Copyright 2024, All Right Reserved
        </p>
        <div className="flex items-center gap-20">
          <a
            href="https://www.linkedin.com/in/amirsaleh-naderzadeh-mehrabani/"
            target="_blank"
            className="text-slate-50 tracking-tight"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@SalehMehrabani"
            target="_blank"
            className="text-slate-50 tracking-tight"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
