import React from 'react';
import Slider from 'react-slick';
import CardWeatherInfo from './CardWeatherInfo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styleSlider from './Styles/Slider.module.css';

export default function WeatherSlider({ data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600, //breakpoint verifica o tamanho da tela
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className={styleSlider.sliderContainer}>
            <Slider {...settings}>
                {data.map((forecast, index) => (
                    <CardWeatherInfo
                        key={index}
                        time={forecast.dt_txt}
                        temp={forecast.main.temp}
                        description={forecast.weather[0].description}
                        icon={forecast.weather[0].icon}
                    />
                ))}
            </Slider>
        </div>
    );
}
