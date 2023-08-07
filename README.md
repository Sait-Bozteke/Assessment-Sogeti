
# Movie App with Firebase

## Description

Project aims to create a Movie App.

## Project Skeleton

```
Firebase Movie App (folder)
|
|----readme.md         
SOLUTION
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
│    │     └── Navbar.js
│    ├── context
│    │     └── AuthContext.js
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env

```


## Objective

Build a Movie App using ReactJS.

## Steps to Solution

- Step 1 : Create React App using `npx create-react-app movie-app`

- Step 2 : Signup `https://firebase.google.com/` and create new app in firebase.

- Step 3 : Use `https://firebase.google.com/docs/auth/web/start` and create `Authentication` operations.

- Step 4 : Signup `https://www.themoviedb.org/documentation/api` and get API key for getting data from `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, for searching movies `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` and for movie details `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`.

- Step 5: You can use css frameworks like Bootstrap, Semantic UI, Material UI.

- Step 6: Add project gif to your project and README.md file.

### !Note:
<p>Keys were used by creating a .env .When you download or clone the repository, you need to enter the .env and type your own passwords in the appropriate places</p>

