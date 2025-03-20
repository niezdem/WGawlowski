import { Carousel } from "react-responsive-carousel";

const photoCarouselData = [
  {
    id: 0,
    img: "/images/photos/img_01.jpg",
  },
  {
    id: 1,
    img: "/images/photos/img_02.jpg",
  },
  {
    id: 2,
    img: "/images/photos/img_03.jpg",
  },
  {
    id: 3,
    img: "/images/photos/img_04.jpg",
  },
  {
    id: 4,
    img: "/images/photos/img_05.jpg",
  },
  {
    id: 5,
    img: "/images/photos/img_06.jpg",
  },
  {
    id: 6,
    img: "/images/photos/img_07.jpg",
  },
  {
    id: 7,
    img: "/images/photos/img_08.jpg",
  },
  {
    id: 8,
    img: "/images/photos/img_09.jpg",
  },
  {
    id: 9,
    img: "/images/photos/img_10.jpg",
  },
  {
    id: 10,
    img: "/images/photos/img_11.jpg",
  },
];

const PhotoCarousel = () => (
  <div className="carousel_background">
    <div className="container">
      <Carousel>
        {photoCarouselData.map((carousel) => (
          <div key={carousel.id}>
            <img src={carousel.img} />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default PhotoCarousel;
