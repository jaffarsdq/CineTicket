import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Banner1 from '../../assets/banner1.avif'
import Banner2 from '../../assets/banner2.avif'
import cardImg from '../../assets/cardImg.avif'
import cardImg2 from '../../assets/cardImg2.jpg'

function Home() {
  return (
    <>
      <Carousel/>
      <div className="w-9/12 mx-auto flex flex-col gap-5">
        <Banner bannerImg={Banner1}/>
          <div className="text-2xl font-bold">Recommended Movies</div>
        <div className="flex gap-10 justify-center overflow-x-hidden">
          <Card cardImg={cardImg}/>
          <Card cardImg={cardImg2}/>
          <Card cardImg={cardImg}/>
          <Card cardImg={cardImg2}/>
          <Card cardImg={cardImg}/>
        
        </div>
        <Banner bannerImg={Banner2}/>
      </div>
    </>
  );
}

export default Home;