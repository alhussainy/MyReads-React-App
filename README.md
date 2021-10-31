# MyReads Project

MyReads project is developed to keep tracking of your favorite books with three diferrent stages: Currently Reading, Want To Read and Read.
this project is using Udacity API to get the data of the books and update them as you select for each book.

## Table of Contents

- [Installation](#Installation)
- [Technologies](#Technologies)
- [Frontend-Server](#Frontend-Server)
- [Backend-Server](#Backend-Server)
- [Demo] (#Demo)
## Installation

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Technologies

*HTML5
*CSS3
*JavaScript
*React

## Frontend-Server

- Book Components
  - Book
  - List Of Books
  - Main Page
  - Search Page
  - Wait
- APP.css _contains the style of our app_
- Index.js \*This is the root of our app.
- BooksAPI.js # A JavaScript API for the provided Udacity backend.

## Backend-Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### Demo
you can check the demo website on netlify.com on [this link](https://zealous-shaw-6f930e.netlify.app/ )
