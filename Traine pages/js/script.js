const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personaMovieDB = {
  count: numberOfFilms,
  movie: {},
  actors: {},
  genders: [],
  privat: false,
};

const questA = prompt('Останній фільм який ви переглянули?', ''),
  questA1 = prompt('Наскільки балів оцінете?', ''),
  questB = prompt('Останній фільм який ви переглянули?', ''),
  questB1 = prompt('Наскільки балів оцінете?', '');

personaMovieDB.movie[questA] = questA1;
personaMovieDB.movie[questB] = questB1;

console.log(personaMovieDB);
