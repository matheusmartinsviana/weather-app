const express = require('express');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

class ApiController {

    async sendEmail(req, res) {
        
        const { recipient, subject, description, weatherInfo } = req.body;
        const msg = {
            to: recipient,
            from: 'contatomatheuscmd@gmail.com',
            subject: `Clima de ${weatherInfo.name}`,
            text: 'description',
            html: `<strong>Clima de hoje:</strong> <br> ${weatherInfo.weather[0].description}`,
        };

        sgMail
            .send(msg)
            .then(() => {
                res.status(200).json({ message: 'Email sent successfully' });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ error: 'Failed to send email' });
            });
    }
}

module.exports = ApiController