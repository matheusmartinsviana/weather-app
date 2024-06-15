# Weather App 

<img src="./src/assets/img/pngegg.png" height="80" width="80">

The Weather application is a website built using React and various backend concepts, including API integrations. It exclusively utilizes the [Open Weather API](https://openweathermap.org/api), which provides a free version with various information about any desired region.

## Deploy
To deploy the application, follow these steps:

1. In the root folder of the project, navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Return to the root folder:
    ```bash
    cd ..
    ```
4. With the backend server running, start the frontend development server from the root folder:
    ```bash
    npm run dev
    ```
5. Open your browser and navigate to:
    ```
    http://localhost:5173/
    ```

## Front-end
### Libraries Used:
- **React-slick**, **Bootstrap**: For creating customized components.
- **Axios**: For integrating with the backend.
- **Vite**: To facilitate project deployment and provide an optimized development environment.
- **React-router-dom**: For navigation between pages on the site.

## Back-end
### Libraries Used:
- **cors**: To authorize requests.
- **express**: To create a server for handling frontend requests.
- **SendGrid API**: To send emails with the weather information.
