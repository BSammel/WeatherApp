# Weather App

## Description
This is a simple weather application built with React that fetches real-time weather data from the OpenWeather API. The app automatically retrieves the current weather information of the user's location and displays important details such as temperature and weather conditions.

## Features
- Displays current weather information
- Shows temperature in Celsius
- Displays weather condition description
- Automatically detects the user's location
- Responsive and simple user interface

## Technologies Used
- React
- JavaScript
- CSS
- OpenWeather API

## How It Works
The application fetches weather data from the OpenWeather API using the browser's Geolocation API to obtain the user's latitude and longitude. The coordinates are then sent to the API to retrieve the current weather data.

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
```

2. Navigate into the project directory

```bash
cd weather-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## API Setup

1. Create an account on OpenWeather
2. Generate an API key
3. Create a `.env` file in the root directory

```
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Restart the development server.

## Project Status
This project is still under development and more features will be added in the future.

## Future Improvements
- AI assistant
- Improved UI design

## Author
Sammel Bempong
