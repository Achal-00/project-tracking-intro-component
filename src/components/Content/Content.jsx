export default function Content() {
  return (
    <div className="col-start-1 col-end-3 landscape:col-start-1 landscape:col-end-2 px-[5%] self-center grid gap-[1.5em] landscape:pl-[20%] pb-[5%] portrait:md:text-center">
      <p className="text-greyish-blue tracking-[0.2em] font-headings">
        <span className="bg-very-dark-blue text-light-greyish-blue rounded-full px-[0.8em] py-[0.2em] tracking-normal mr-[1em]">
          NEW
        </span>{" "}
        MONOGRAPH DASHBOARD
      </p>
      <h1 className="text-very-dark-blue text-[350%] font-headings font-bold leading-none landscape:lg:text-[400%]">
        POWERFUL INSIGHTS
        <br />
        INTO YOUR TEAM
      </h1>
      <p className="font-contents text-[120%] text-dark-greyish-blue">
        Project planning and time tracking
        <br />
        for agile teams
      </p>
      <div className="flex gap-[2em] items-center portrait:md:justify-self-center pt-[2em]">
        <button className="bg-custom-red py-[0.8em] px-[1.5em] rounded-[0.5em] text-light-greyish-blue font-headings font-bold tracking-[0.1em] hover:opacity-70 hover:cursor-pointer">
          SCHEDULE A DEMO
        </button>
        <p className="font-headings tracking-[0.2em] text-greyish-blue">
          TO SEE A PREVIEW
        </p>
      </div>
    </div>
  );
}
