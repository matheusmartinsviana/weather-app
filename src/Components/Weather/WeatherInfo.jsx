import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Forms from '../Forms/Forms';
import WeatherSlider from './WeatherSlider';
import style from './Styles/CardWeatherInfo.module.css';

export default function WeatherInfo({ cityApi }) {
    const [data, setData] = useState([]);
    const [city, setCity] = useState({});
    const [loading, setLoading] = useState(false);

    const api = {
        key: 'b32daa9a9fcf66937b481e532e0d14d9',
        base: 'https://api.openweathermap.org/data/2.5/',
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const cityResponse = await axios.get(`${api.base}weather?q=${cityApi}&units=metric&appid=${api.key}&lang=pt_br`);
                setCity(cityResponse.data);
                const { lat, lon } = cityResponse.data.coord;
                const forecastResponse = await axios.get(`${api.base}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}&lang=pt_br`);
                setData(forecastResponse.data.list);
                console.log(forecastResponse.data.list);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cityApi]);

    return (
        <>
            {loading ? (
                "Carregando..."
            ) : (
                <>
                    <h1 className={style.weatherTitle}>Previsão do tempo em {city.name}</h1>
                    <WeatherSlider data={data.slice(0, 7)} />
                    <Forms weatherInfo={{ city, forecast: data.slice(0, 7) }} />
                </>
            )}
        </>
    );
}
