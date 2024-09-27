function TopNotice() {
  return (
    <div className="relative w-screen flex items-center sm:justify-center gap-2 bg-black text-slate-50 py-2 px-5 uppercase tracking-tight font-light sm:text-sm text-[10px]">
      <p>New Arrivals take a look what is news this week</p>
      <p className="underline underline-offset-2 decoration-1 font-semibold cursor-pointer">
        Shop Now
      </p>
    </div>
  );
}

export default TopNotice;
