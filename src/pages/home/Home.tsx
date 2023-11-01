import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Banner1 from '../../assets/banner1.avif'
import Banner2 from '../../assets/banner2.avif'
import axios from "axios";
import {useEffect, useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {GrNext, GrPrevious} from "react-icons/gr"

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

  interface Movie {
    _id: string;
    poster: string;
    name: string;
    trailerUrl: string;
  }
  
  interface MovieList {
    movies: Movie[];
    map: (callback: (movie: Movie, index: number) => any) => any[];
  }
  

  const [movieList, setMovieList] = useState<MovieList>();

  const apiUrl = 'https://mbaservice.onrender.com/mba/api/v1/movies';

  async function getMovies () {
    await axios.get(apiUrl)
    .then(response => {
      // Handle the successful response here
      setMovieList(response.data.data)
      console.log(movieList)
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    getMovies()
  }, [])
  

  return (
    <>
      <Carousel/>
        <div className="w-10/12 md:w-9/12 mx-auto flex flex-col gap-5">
            
            <Banner bannerImg={Banner1}/>

            <div className="text-2xl font-bold mb-10">Recommended Movies</div>

            <div className="flex flex-col gap-1 justify-around min-h-[300px]">
              
              <Slider {...settings}>
                {movieList && movieList.map((movie, idx) => (
                  <Card key={idx} url={movie.trailerUrl} cardImg={movie.poster} name={movie.name}/>
                ))}  
              </Slider>
            </div>

            <Banner bannerImg={Banner2}/>

        </div>

    </>
  );
}

export default Home;