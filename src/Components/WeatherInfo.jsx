import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardWeatherInfo from './CardWeatherInfo';
import style from './Styles/CardWeatherInfo.module.css';
import Weather from './Weather';

export default function WeatherInfo(props) {
    const [data, setData] = useState([]);
    const [city, setCity] = useState({});
    const [loading, setLoading] = useState(false);

    const api = {
        key: 'b32daa9a9fcf66937b481e532e0d14d9',
        base: 'https://api.openweathermap.org/data/2.5/',
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const cityResponse = await axios.get(`${api.base}weather?q=${props.cityApi}&units=metric&appid=${api.key}&lang=pt_br`);
            setCity(cityResponse.data);
            const { lat, lon } = cityResponse.data.coord;
            const forecastResponse = await axios.get(`${api.base}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}&lang=pt_br`);
            setData(forecastResponse.data.list);
            console.log(forecastResponse.data.list)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.cityApi]);

    return (
        <>
            {loading ? (
                "Carregando..."
            ) : (
                <>
                    <h1>Previsão do tempo em {city.name}</h1>
                    <div className={style.cardContainer}>

                        {data.slice(0, 7).map((forecast, index) => (
                            <CardWeatherInfo
                                key={index}
                                time={forecast.dt_txt}
                                temp={forecast.main.temp}
                                description={forecast.weather[0].description}
                                icon={forecast.weather[0].icon}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    );
}
