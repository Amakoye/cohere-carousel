import { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import { useDispatch, useSelector } from "./store";
import { getImagesRework } from "./store/thunks/carousel/carousel";
/* const images = [slide1, slid2, slide3]; */
function App() {
  /* const [slides, setSlides] = useState<any[]>([]); */
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const dispatch = useDispatch();

  const { loading, images } = useSelector((store) => store.carousel);

  console.log(images?.length);

  useEffect(() => {
    dispatch(getImagesRework());
  }, [dispatch]);

  //
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevSlide) =>
        prevSlide === images?.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images?.length]);

  const handlePrevSlideClick = () => {
    setCurrentSlideIndex((prevSlideIndex) =>
      prevSlideIndex === 0 ? images?.length - 1 : prevSlideIndex - 1
    );
  };

  const handleNextSlideClick = () => {
    setCurrentSlideIndex((prevSlideIndex) =>
      prevSlideIndex === images?.length - 1 ? 0 : prevSlideIndex + 1
    );
  };

  if (loading) {
    return <h4>Loading please wait...</h4>;
  }

  return (
    <div className="app">
      <h4>{`slide count: ${currentSlideIndex + 1}`}</h4>
      <div className="carousel">
        <div className="carousel__track">
          <div className="carousel__slide">
            {images?.length && (
              <img
                className="carousel__image"
                src={images[currentSlideIndex]}
                alt={`slide number ${currentSlideIndex + 1}`}
              />
            )}
          </div>
        </div>
        <button
          className="carousel__btn carousel__btn--left"
          onClick={handlePrevSlideClick}
        >
          <AiOutlineCaretLeft className="carousel__btn--icon" />
        </button>
        <button
          className="carousel__btn carousel__btn--right"
          onClick={handleNextSlideClick}
        >
          <AiOutlineCaretRight className="carousel__btn--icon" />
        </button>
        <div className="carousel__indicators">
          {images?.map((image, i) => (
            <button
              key={i}
              className={
                currentSlideIndex === i
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
