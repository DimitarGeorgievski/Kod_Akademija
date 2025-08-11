import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { Movie } from '../../models/movie-model';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss'
})
export class MovieList implements OnInit {
  private movieService = inject(MoviesService);
  movies: Movie[] = []
  ngOnInit() {
    this.movieService.movies$.subscribe(value => {
      console.log("Event Emitted");
      console.log(value);
      this.movies = value;
    })
    this.movieService.loadMovies();
  }
  onMovieClick(movie: Movie){
    this.movieService.onMovieSelect(movie);
  }
}
