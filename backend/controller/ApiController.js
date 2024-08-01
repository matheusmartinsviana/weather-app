require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

class ApiController {
    async sendEmail(req, res) {
        const { recipient, weatherInfo } = req.body;

        const { city, forecast } = weatherInfo;
        
        const forecastHtml = forecast.map(f => `
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">${new Date(f.dt_txt).toLocaleString([], { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${f.main.temp}°C</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${f.weather[0].description}</td>
            </tr>
        `).join('');

        const msg = {
            to: recipient,
            from: 'contatomatheuscmd@gmail.com',
            subject: `Clima de ${city.name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="text-align: center; color: #257EEF;">Clima em ${city.name}</h2>
                    <p><strong>Condição atual:</strong> ${city.weather[0].description}</p>
                    <p><strong>Temperatura:</strong> ${city.main.temp}°C</p>
                    <p><strong>Sensação térmica:</strong> ${city.main.feels_like}°C</p>
                    <p><strong>Humidade:</strong> ${city.main.humidity}%</p>
                    <p><strong>Pressão:</strong> ${city.main.pressure} hPa</p>
                    <p><strong>Vento:</strong> ${city.wind.speed} m/s</p>
                    <h3 style="text-align: center; color: ##257EEF;">Previsão para o resto do dia e amanhã:</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <thead>
                            <tr style="background-color: #f2f2f2;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Data</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Temperatura</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${forecastHtml}
                        </tbody>
                    </table>
                    <p style="text-align: center; margin-top: 20px;">Verifique sua caixa de spam se não encontrar o email.</p>
                </div>
            `,
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    }
}

module.exports = ApiController;

