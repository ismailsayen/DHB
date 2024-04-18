import '../styles/caroussel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const pictures = [
    { url: "neon.png", link: "https://neonunivers.com/" },
    { url: "outako.png", link: "https://shonensports.com/" },
    { url: "sport.png", link: "https://quedufootcom.com/" },
];

function Caroussel() {
    return (
        <div className='carousel-container' id='projet'>
            <div className='parent-caross'>
                <div className='titlle'>
                    <h1>NOS RÉALISATIONS</h1>
                </div>
                <div className='images-con'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        {pictures.map((picture, index) => (
                            <SwiperSlide>
                                <a href={picture.link} target="_blank" rel="noopener noreferrer">
                                    <img src={`./images/${picture.url}`} key={index} alt={`Image ${index + 1}`} />
                                </a>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Caroussel;
