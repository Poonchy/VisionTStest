This application is a small technical exercise for VisionTS. Below are the endpoints and their documentation

| Method | Endpoint                  | Request Body     | Returns                          |
| ------ | ------------------------- | ---------------- | -------------------------------- |
| GET    | `/api/weather/{city}`     | - `empty`        | `{latitude, longitude, temp}`    |
| GET    | `/api/read/{filename}`    | - `empty`        | `String Literal`                 |

# Exercise 1
- GET [/api/weather/{city}](): This endpoint requires that you send a city in the url. In turn, it will return a json object containing that cities latitude, longitude and temperature in farenheit. Cities can have spaces in the name.
### Examples
[localhost:5000/api/weather/London](http://localhost:5000/api/weather/London) - Returns:

    {
        "latitude": 51.5085,
        "longitude": -0.1257,
        "temperature": "62°F"
    }

Using the open weather map API, I'm returning the temperature as a string in farenheit converted from kelvin.

The error messages and status code are pulled directly from the openweathermap API.

# Exercise 2
- GET [/api/read/{filename}](): This endpoint requires that you send the name of an existing file in the url. The endpoint will return a string literal containing the text files contents exactly as they are.
### Examples
[localhost:5000/api/read/vision](http://localhost:5000/api/read/vision) - Returns:

    This are my technical exercises for VisionTS

    I hope it's all satisfactory!