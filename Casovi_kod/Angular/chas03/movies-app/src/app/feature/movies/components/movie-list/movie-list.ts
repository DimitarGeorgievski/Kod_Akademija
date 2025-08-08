import { Component, inject, OnInit, signal } from '@angular/core';
import { MovieItem } from '../movie-item/movie-item';
import { LoggerService } from '../../../../core/services/logger-service';
import { MoviesService } from '../../../../core/services/movies-service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItem],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieList implements OnInit {
  private loggerService = inject(LoggerService);
  private moviesService = inject(MoviesService);
  movies = this.moviesService.movies;
  ngOnInit(): void {
    this.moviesService.loadMovies();
    this.loggerService.logDetails("Movie List");
  }
  onMovieItem(movie: Movie){
    this.moviesService.onMovieSelect(movie);
  }
}
