import { computed, Injectable, signal } from '@angular/core';
import { Movie } from '../../feature/movies/models/movie-model';
import { MOVIES_URL } from '../../feature/movies/movie-constants';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies = signal<Movie[]>([]);
  selectedMovie = signal<Movie>(null);
  totalLikes = computed(() =>
    this.movies().reduce((acc, el) => acc + el.likeCount, 0)
  );
  avgRating = computed(
    () =>
      this.movies().reduce((acc, el) => acc + el.likeCount, 0) /
      this.movies().length
  );
  getMovies() {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((res) => {
        console.log('this is the value form the get movies fetch', res);
        this.movies.set(res);
      })
      .catch((err) => {
        console.error('Something went wrong');
        console.error(err);
      });
  }
  movieSelect(movie: Movie) {
    this.selectedMovie.set(movie);
  }
  getMovieById(id: string) {
    if (this.selectedMovie) return;
    fetch(`${MOVIES_URL}/${id}`)
      .then((res) => res.json())
      .then((value: Movie) => {
        this.selectedMovie.set(value);
      });
  }
  addLikeDislike(type: 'LIKE' | 'DISLIKE') {
    // this.selectedMovie.update((prevMovie) => {
    //   if (type === 'LIKE') prevMovie.likeCount += 1;
    //   if (type === 'DISLIKE') prevMovie.likeCount -= 1;
    //   return prevMovie;
    // });
    const reqMovie: Movie = {
      ...this.selectedMovie(),
      likeCount:
        type === 'LIKE'
          ? this.selectedMovie().likeCount + 1
          : this.selectedMovie().likeCount - 1,
    };

    fetch(`${MOVIES_URL}/${this.selectedMovie().id}`, {
      method: 'PUT',
      body: JSON.stringify(this.selectedMovie),
    })
      .then((res) => res.json())
      .then((value) => this.selectedMovie.set(value));
  }
}
