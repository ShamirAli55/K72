import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Agence = () => {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg",
    "/images/img11.jpg",
    "/images/img12.jpg",
    "/images/img13.jpg",
    "/images/img14.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -150%",
        pin: true,
        pinSpacing:true,
        pinReparent: true,
        pinType:"transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true,
        onUpdate: (self) => {
          let imageIndex = Math.min(
            Math.floor(self.progress * images.length),
            images.length - 1
          );
          imageRef.current.src = images[imageIndex];
        },
      },
    });
  });
  return (
    <div className="py-1">
      <div>
      <div
        ref={imageDivRef}
        className="h-64 w-50 absolute top-1/2 left-[30%] transform  -translate-y-1/2 rounded-2xl overflow-hidden"
      >
        <img
          ref={imageRef}
          className="h-full w-full object-cover"
          src="/images/img1.jpg"
          alt=""
        />
      </div>
      <div className="font-[font2] relative">
        <div className="mt-[50vh]">
          <h1 className="text-center text-[19vw] uppercase leading-[18vw] font-bold">
            Soixan7e Douze
          </h1>
        </div>
        <div className="flex justify-end pr-8">
          <p className="text-5xl w-[60%] font-semibold leading-[4vw]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
            curiosité nourrit notre créativité. On reste humbles et on dit non
            aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>
     </div>
      <section className="h-screen bg-yellow-100"></section>
    </div>
  );
};

export default Agence;
