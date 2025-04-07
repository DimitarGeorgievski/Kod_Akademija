SELECT * FROM movies;
SELECT * FROM actors;
SELECT * FROM genres;

SELECT * FROM movies
WHERE title = 'Alien';

SELECT * FROM actors
WHERE last_name = 'DiCaprio';

-- ako sakame da pocnuva ili od kade da go filtrira go koristime zborceto LIKE i ako sakame od nasredina treba samo dve %m%
SELECT director_id, first_name, last_name FROM directors
WHERE first_name LIKE 'M%'

SELECT * FROM actors
Where nationality = 'American';

-- za porazlicno se koristi "<>"
SELECT * FROM actors 
WHERE birth_date > '1980-01-01'

SELECT * FROM  movies
WHERE rating = 'R';

-- za da e case insensitive za Like se koristi ILIKE, ako imame bez da kazime ORDERY BY title samo ke bidi ascending default value
SELECT * FROM movies
WHERE  plot_summary ILIKE '%Deadly%'
ORDER BY title ASC;

SELECT * FROM genres
ORDER BY name DESC;

SELECT * FROM movies
WHERE title LIKE 'A%'
ORDER BY rating;

SELECT * FROM movies
WHERE title LIKE 'A%'
ORDER BY duration_minutes;

SELECT * FROM movies
WHERE language = 'English'
ORDER BY budget;

SELECT * FROM movies
WHERE release_date > '2010-01-01'
ORDER BY release_date;

