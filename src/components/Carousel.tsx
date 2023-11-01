import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.avif'

function Carousel() {
  return (
    <div className="carousel w-full my-2">
        <div id="slide1" className="carousel-item h-[10rem] md:h-[19rem] relative w-full">
            <img src={slide1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-square">❮</a> 
            <a href="#slide2" className="btn btn-square">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item h-[10rem] md:h-[19rem] relative w-full">
            <img src={slide2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-square">❮</a> 
            <a href="#slide3" className="btn btn-square">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item h-[10rem] md:h-[19rem] relative w-full">
            <img src={slide3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-square">❮</a> 
            <a href="#slide4" className="btn btn-square">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item h-[10rem] md:h-[19rem] relative w-full">
            <img src={slide4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-square">❮</a> 
            <a href="#slide1" className="btn btn-square">❯</a>
            </div>
        </div>
    </div>
  )
}

export default Carousel