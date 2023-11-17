import Banner from "../components/Banner";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Banner1 from '../assets/banner1.avif'
import Banner2 from '../assets/banner2.avif'
import {useEffect, useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {GrNext, GrPrevious} from "react-icons/gr"
import axiosInstance from "../config/AxiosInstance";
import HomeLayout from "../layout/HomeLayout";
import Movie from "../Types/Movie";

function Home() {
  var settings = {
    nextArrow: <GrNext/>,
    prevArrow: <GrPrevious/>,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  type MoviePoster = [{
    id: string,
    poster: string,
    name: string
  }];
  
  const [moviePosters, setMoviePosters] = useState<MoviePoster>([{id: "", poster: "", name: ""}]);

  async function fetchMovies() {
      try {
          const response = await axiosInstance.get("/mba/api/v1/movies");
          const movieData = response.data.data.map((movie: Movie) => {
              return {
                  id: movie._id,
                  poster: movie.poster,
                  name: movie.name
              };
          });
          console.log(movieData);
          setMoviePosters(movieData);
      } catch(error) {
          console.log(error);
      }
  }

  useEffect(() => {
      fetchMovies();
  }, []);

  return (
    <HomeLayout>
      <Carousel/>
        <div className="w-10/12 md:w-9/12 mx-auto flex flex-col gap-5">
            
            <Banner bannerImg={Banner1}/>

            <div className="text-2xl font-bold mb-10">Recommended Movies</div>

            <div className="flex flex-col gap-1 justify-around min-h-[300px]">
              
              <Slider {...settings}>
                {moviePosters && moviePosters.map((movie, idx) => (
                  <Card key={idx} movieId={movie.id} movieImg={movie.poster} movieName={movie.name}/>
                ))}  
              </Slider>
            </div>

            <Banner bannerImg={Banner2}/>

        </div>

    </HomeLayout>
  );
}

export default Home;