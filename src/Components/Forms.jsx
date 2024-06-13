import React, { useState } from "react";
import style from "./Styles/Forms.module.css";

export default function Forms() {
    const [recipient, setRecipient] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            recipient,
            WeatherInfo
        };

        fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Email sent', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className={style.formsContainer}>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Ex..: email@dominio.com"
                    required
                />
                <button type="submit">Enviar email</button>
            </form>
        </div>
    );
}
