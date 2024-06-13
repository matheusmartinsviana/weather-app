import React, { useState } from "react";
import style from "./Styles/Forms.module.css";

export default function Forms({ weatherInfo }) {
    const [recipient, setRecipient] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const data = {
            recipient,
            weatherInfo
        };

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log('Email sent', result);
            setModalVisible(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className={style.formsContainer}>
            <h2>Receba a previsão de via <strong>Email</strong></h2>
            <form onSubmit={handleSubmit}>
                Digite seu email:
                <input
                    className={style.emailInput}
                    type="email"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="email@dominio.com"
                    required
                />
                <button className={style.submitButton} type="submit">Enviar email</button>
            </form>
            {modalVisible && (
                <div className={style.modal}>
                    <div className={style.modalContent}>
                        <p>Email enviado com sucesso. Verifique sua caixa de spam.</p>
                        <button className={style.closeButton} onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
