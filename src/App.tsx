import { useEffect, useState } from "react";
import ImageCarousel from "./components/ImageCarousel";

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
      {images.length && (
        <ImageCarousel
          images={images}
          currentSlideIndex={currentSlideIndex}
          handleNextSlideClick={handleNextSlideClick}
          handlePrevSlideClick={handlePrevSlideClick}
        />
      )}
    </div>
  );
}

export default App;
