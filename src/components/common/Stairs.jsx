import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
const Stairs = ({ children }) => {
  const PageRef = useRef(null);
  const currentPath = useLocation().pathname;

  const stairParentRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(PageRef.current, {
        opacity:0,
        delay:1.2,
    })
  }, [currentPath]);

  return (
    <div>
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-10 pointer-events-none"
      >
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={PageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
