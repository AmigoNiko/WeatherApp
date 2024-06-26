Weather App
Description
This application provides weather forecasts using data from OpenWeatherMap. It allows users to view current weather conditions, forecasts, and other related information.

Features
Display current weather conditions
Show weather forecasts for the next few days
Display additional details like wind speed, humidity, and chance of precipitation
Use of Redux for state management
Designed using Tailwind CSS for styling
UI components styled with ui.shadcn for enhanced visual appeal
Technologies Used
OpenWeatherMap API: Provides weather data used in the application.
Tailwind CSS: Utility-first CSS framework for quickly building custom designs.
ui.shadcn: UI library for creating shadow-based designs.
Redux: State management library for maintaining application state.
Main Components
AirConditionCard: Displays real feel temperature, chance of rain, wind speed, and cloudiness.
Weather Forecast Card: Shows weather forecasts for selected dates.
Icons Component: Utilized for displaying weather icons corresponding to weather conditions.
Installation
Clone the repository from GitHub:
bash
Копиране на код
git clone https://github.com/your-username/weather-app.git
Install dependencies using npm:
Копиране на код
npm install
Set up environment variables:
Obtain an API key from OpenWeatherMap.
Create a .env file in the root directory and add your API key:
makefile
Копиране на код
REACT_APP_OPENWEATHERMAP_API_KEY=your-api-key
Start the development server:
sql
Копиране на код
npm start
Open the application in your browser:
arduino
Копиране на код
http://localhost:3000
Usage
Upon launching the application, users can view current weather conditions and forecasts.
Use navigation or date selectors to view weather forecasts for different dates.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Icons courtesy of ui.shadcn and OpenWeatherMap.
Weather data provided by OpenWeatherMap API.
