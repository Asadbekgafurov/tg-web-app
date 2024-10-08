import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState();
    const [street, setStreet] = useState()
    const [city, setCity] = useState()
    const [subject, setSubject] = useState('physical')
    const {tg} = useTelegram()
    useEffect(() => {
    if (tg && tg.MainButton) {
        tg.MainButton.setParams({
            text: 'Malumotlarni yuborish'
        });
    }
}, [tg]);


    useEffect(() => {
        if(!street || !country){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()

        }
    }, [country,street]);


    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Malumotlaringizni kiriting</h3>
            <input className={"input"} type={"text"} placeholder={'Viloyat'} value={country} onChange={onChangeCountry}/>
            <input className={"input"} type={"text"} placeholder={'Shahar'} value={city} onChange={onChangeCity}/>
            <input className={"input"} type={"text"} placeholder={'kocha'} value={street} onChange={onChangeStreet}/>
            <select className={'select'}  onChange={onChangeSubject} value={subject} >
                <option value={'physical'}> physical</option>
                <option value={'legal'}> ur.litso</option>
            </select>
        </div>
    );
};

export default Form;