import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { Movie } from '../../models/movie-model';

@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails implements OnInit{
  private movieService = inject(MoviesService);
  
  selectedMovie: Movie = null;

  ngOnInit(){
    this.movieService.selectedMovie$.subscribe(value => {
      console.log("THIS IS THE SELECTED MOVIE");
      console.log(value);
      this.selectedMovie = value;
    })
  }
  onClickLikeDislike(type: 'LIKE' | "DISLIKE"){
    this.movieService.addLikeDislike(type);
  }
}
