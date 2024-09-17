import React, {useEffect, useState} from 'react';
import './form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {

    const [country, setCountry] = useState();
    const [street, setStreet] = useState()
    const [city, setCity] = useState()
    const [subject, setSubject] = useState('physical')
    const {tg} = useTelegram()
    useEffect(() => {
        tg.MainButton.setparams({
            text: 'Malumotlarni yuborish'
        })
    }, []);

    useEffect(() => {
        if(!street || !country || !city){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()

        }
    }, [country,street, city]);


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
            <input className={"input"} type={"text"} placeholder={'kocha'} value={city} onChange={onChangeCity}/>
            <select className={'select'}  onChange={subject} value={subject} >
                <option value={'physical'}> physical</option>
                <option value={'legal'}> ur.litso</option>
            </select>
        </div>
    );
};

export default Form;