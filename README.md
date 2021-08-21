This application is a small technical exercise for VisionTS. Below are the endpoints and their documentation

This project is hosted on https://visionts.herokuapp.com

| Method | Endpoint              | Request Body                | Returns                      |
| ------ | --------------------- | --------------------------- | ---------------------------- |
| GET    | `/api/weather/{city}` | - `empty`                   | `{latitude, longitude, temp}`|
| GET    | `/api/read/{filename}`| - `empty`                   | `String Literal`             |
| POST   | `/api/register`       | - `{userId, name, lastname}`| `String`                     |
| GET    | `/api/get:id`         | - `empty`                   | `{userId, name, lastname}`   |

# Exercise 1
- GET [/api/weather/{city}](): This endpoint requires that you send a city in the url. In turn, it will return a json object containing that cities latitude, longitude and temperature in farenheit. Cities can have spaces in the name.
## Examples
[https://visionts.herokuapp.com/api/weather/London](https://visionts.herokuapp.com/api/weather/London) - Returns:

    {
        "latitude": 51.5085,
        "longitude": -0.1257,
        "temperature": "62°F"
    }

Using the open weather map API, I'm returning the temperature as a string in farenheit converted from kelvin.

The error messages and status code are pulled directly from the openweathermap API.

# Exercise 2
- GET [/api/read/{filename}](): This endpoint requires that you send the name of an existing file in the url. The endpoint will return a string literal containing the text files contents exactly as they are.
## Examples
[https://visionts.herokuapp.com/api/read/vision](https://visionts.herokuapp.com/api/read/vision) - Returns:

    This are my technical exercises for VisionTS

    I hope it's all satisfactory!

# Exercise 3
- POST [/api/register](): This endpoint requires that a JSON object in the body be sent with the request, containing userId, name and lastName. It will take this information and put it onto a MongoDB database. userID, name, and lastName are all required.
## Examples
[https://visionts.herokuapp.com/api/register](https://visionts.herokuapp.com/api/register) with:

    {
        "userId": 1232,
        "name": "John",
        "lastName": "Doe"
    }
Returns:

    User created succesfully.

# Exercise 4
- GET [/api/get/:id](): This endpoint requires that a JSON object in the body be sent with the request, containing userId, name and lastName. It will take this information and put it onto a MongoDB database.
## Examples
[https://visionts.herokuapp.com/api/get/1234](https://visionts.herokuapp.com/api/get/1234) - Returns:

    {
        "userId": 1232,
        "name": "John",
        "lastName": "Doe"
    }
