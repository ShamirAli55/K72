const Banner = () => 
{
  const words = ["POUR", "TOUT", "VOIR"];
  const images = [ "/images/2.webp", "/images/3.webp", "/images/4.jpg"];

  return (
    <div className="h-full w-full text-black absolute top-0 flex gap-x-5 slider">
      {[...Array(25)].map((_, i) => {

        const img = images[i % images.length];

        return (
          <div
            key={i}
            className="flex items-center justify-center text-7xl gap-x-5 py-4"
          >
            {words.map((word, j) => (
              <h1 key={j}>{word}</h1>
            ))}
            <img src={img} className="w-46 h-16 object-cover rounded-full" alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
