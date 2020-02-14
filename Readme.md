# REST API Quotey

This is a bare-bones example of a Sinatra application providing a REST
API to a DataMapper-backed model.

The entire application is contained within the `app.js` file.

# Install

## Yarn

    yarn

## npm

    npm install

## Run the app

    npm start

# REST API

The REST API to the example app is described below.

## Get a random quote

### Request

`GET /random`

    curl -i -H 'Accept: application/json' http://localhost:3000/random/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {
        "quote":"Whenever you find whole world against you just turn around and lead the world.",
        "author":"Anonymous",
        "length":78,
        "id":41
    }
