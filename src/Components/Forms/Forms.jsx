import React, { useState } from "react";
import style from "./Styles/Forms.module.css";
import logoIcon from "../../assets/img/pngegg.png";

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
            const response = await fetch('http://localhost:5000/api/v1/send-email', {
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
            <div className={style.formsHeader}>
                <h2>Deseja receber via email?</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    
                    <input
                        className={style.emailInput}
                        type="email"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder="email@dominio.com"
                        required
                    />
                </div>
                <button className={style.submitButton} type="submit">
                    Receber
                </button>
            </form>
            {modalVisible && (
                <div className={style.modal}>
                    <div className={style.modalContent}>
                    <img src={logoIcon} height={50} width={50} />
                        <p>Email enviado com sucesso. Verifique sua caixa de spam.</p>
                        <button className={style.closeButton} onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
