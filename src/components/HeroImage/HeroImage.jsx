export default function HeroImage() {
  return (
    <div className="col-start-1 col-end-3 row-start-2 row-end-3 relative grid overflow-hidden landscape:col-start-2 landscape:col-end-3">
      <img
        src="illustration-devices.svg"
        alt=""
        className="self-center scale-125 relative left-[70%] -translate-x-1/2 w-full portrait:md:scale-110"
      />
    </div>
  );
}
