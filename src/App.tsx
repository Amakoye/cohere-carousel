import { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import slide1 from "./assets/images/slide_1.jpg";
import slid2 from "./assets/images/slide_2.jpg";
import slide3 from "./assets/images/slide_3.jpg";
const images = [slide1, slid2, slide3];
function App() {
  const [slides, setSlides] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    //fetch images and set slides here
    if (images) {
      setSlides(images);
    }
  }, []);

  //
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="app">
      <div className="carousel">
        <div className="carousel__track">
          <div className="carousel__slide">
            <img
              className="carousel__image"
              src={slides[currentSlide]}
              alt=""
            />
          </div>
        </div>
        <button className="carousel__btn carousel__btn--left">
          <AiOutlineCaretLeft className="carousel__btn--icon" />
        </button>
        <button className="carousel__btn carousel__btn--right">
          <AiOutlineCaretRight className="carousel__btn--icon" />
        </button>
        <div className="carousel__indicators">
          {slides.map((image, i) => (
            <button
              key={i}
              className={
                currentSlide === i
                  ? "carousel__indicator current__slide"
                  : "carousel__indicator"
              }
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
