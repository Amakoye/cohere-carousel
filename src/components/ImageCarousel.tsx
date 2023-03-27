import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const ImageCarousel = ({
  images,
  handleNextSlideClick,
  handlePrevSlideClick,
  currentSlideIndex,
}: ImageCarouselProps) => {
  return (
    <div className="carousel">
      <div className="carousel__track">
        <div className="carousel__slide">
          <img
            className="carousel__image"
            src={images[currentSlideIndex]}
            alt={`slide number ${currentSlideIndex + 1}`}
          />
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
  );
};

type ImageCarouselProps = {
  handlePrevSlideClick: VoidFunction;
  handleNextSlideClick: VoidFunction;
  currentSlideIndex: number;
  images: string[];
};

export default ImageCarousel;
