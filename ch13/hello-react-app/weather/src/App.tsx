import React, {ChangeEvent, FormEvent, useCallback, useEffect, useState} from 'react';
import {Weather} from "./weather";
import WeatherInfo from "./components/weather.info";

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const suffix = '&units=imperial&appid=d6c1dad3b2dd811ec34e5142a466f21b';

const has = (value: any): value is boolean => !!value;

const App: React.FC = () => {
    const [city, setCity] = useState('Moscow');
    const [weather, setWeather] = useState<Weather | any>(null);
    const [msgFromChild, setMsgFromChild] = useState('');

    useEffect(() => {
        getWeather(city);
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    }

    const getWeather = async (city: string) => {
        const resp = await fetch(baseUrl + city + suffix);
        if (resp.status === 200) {
            const json = await resp.json();
            const citiTemp: Weather = json.main;
            citiTemp.city = json.name;
            setWeather(citiTemp);
        } else {
            setWeather(null);
        }
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        getWeather(city);
    }

    const getMsgFromChild = useCallback( (msg: string) => {
        setMsgFromChild(msg);
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type={"text"} placeholder={'Enter city'} onInput={handleChange}/>
                <button type="submit">Get weather</button>
            </form>
            {msgFromChild}
            {has(weather) ?
                (<WeatherInfo weather={weather} childGreeting = {getMsgFromChild}>
                    <strong>Invoked from parent!</strong>
                </WeatherInfo>) :
                (<h2>No weather available.</h2>)}
        </div>
    );
};

export default App;
