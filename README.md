This application is a small technical exercise for VisionTS. Below are the endpoints and their documentation

| Method | Endpoint                  | Request Body     | Returns                          |
| ------ | ------------------------- | ---------------- | -------------------------------- |
| GET    | `/api/{city}`             | - `empty`        | `{latitude, longitude, temp}`    |

## Exercise 1
- GET `/api/{city}`: This endpoint requires that you send a city in the url. In turn, it will return a json object containing that cities latitude, longitude and temperature in farenheit. Cities can have spaces in the name.
### Examples
[localhost:5000/api/London](http://localhost:5000/api/London) - Returns:

    {
        "latitude": 51.5085,
        "longitude": -0.1257,
        "temperature": "62°F"
    }

Using the open weather map API, I'm returning the temperature as a string in farenheit converted from kelvin.

The error messages and status code are pulled directly from the openweathermap API.