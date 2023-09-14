import { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.querySelector(".menu").classList.remove("hidden");
      document.querySelector(".menu-icon").src = "icon-close.svg";
    } else {
      document.querySelector(".menu").classList.add("hidden");
      document.querySelector(".menu-icon").src = "icon-hamburger.svg";
    }
  }, [menu]);

  return (
    <div className="col-start-1 col-end-3 row-start-1 row-end-2 p-[5%] landscape:px-[10%] landscape:py-[4%] relative z-10">
      <div className="flex items-center justify-between landscape:hidden">
        <img src="logo.svg" alt="" className="w-[2.5em]" />
        <img
          src="icon-hamburger.svg"
          alt=""
          className="w-[2em] menu-icon"
          onClick={() => setMenu((prev) => !prev)}
        />
        <div className="menu absolute top-[250%] portrait:md:top-[200%] -translate-y-1/2 bg-white w-[90%] p-[2em] text-center z-20 shadow-2xl grid gap-[1em] font-contents font-bold">
          <p className="text-[120%] text-very-dark-blue">PRODUCT</p>
          <p className="text-[120%] text-very-dark-blue">FEATURES</p>
          <p className="text-[120%] text-very-dark-blue">PRICING</p>
          <hr />
          <p className="text-[120%] text-greyish-blue">LOGIN</p>
        </div>
      </div>
      <div className="hidden landscape:flex justify-between items-center">
        <img src="logo.svg" alt="" className="w-[2.5em]" />
        <div className="flex gap-[4em] items-center font-headings font-bold">
          <p className="text-very-dark-blue hover:underline hover:cursor-pointer">
            PRODUCT
          </p>
          <p className="text-very-dark-blue hover:underline hover:cursor-pointer">
            FEATURES
          </p>
          <p className="text-very-dark-blue hover:underline hover:cursor-pointer">
            PRICING
          </p>
          <span className="w-[0.5em] h-[0.5em] bg-greyish-blue rounded-full"></span>
          <p className="text-greyish-blue hover:underline hover:cursor-pointer">
            LOGIN
          </p>
        </div>
      </div>
    </div>
  );
}
