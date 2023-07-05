var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/movies', (req, res)=> {
    const toto = fetch('https://api.themoviedb.org/3/discover/movie?api_key=d8655289c37ab9d70003f7d445fefdae')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   res.json({ movies: data.results });;
 });
 });

