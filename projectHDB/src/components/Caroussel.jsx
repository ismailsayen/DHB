import '../styles/caroussel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const pictures = [
    { url: "neon1.png" },
    { url: "outako1.png" },
    { url: "neon3.png" },
    { url: "sport2.png" },
    { url: "outako2.png" },
    { url: "neon2.png" },
    { url: "sport1.png" },
];
function Caroussel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='carousel-container' id='projet'>
            <div className='parent-caross'>
                <div className='titlle'>
                    <h1>NOS RÉALISATIONS</h1>
                </div>
                <div className='images-con'>
                    <Slider {...settings} >
                        {
                            pictures.map((ele, ind) =>
                                <img key={ind} src={`./images/${ele.url}`} width={'400'} height={'400'} className='img'/>
                            )}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Caroussel;