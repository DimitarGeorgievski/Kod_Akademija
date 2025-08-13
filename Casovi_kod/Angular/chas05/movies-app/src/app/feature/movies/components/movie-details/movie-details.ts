import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { Button } from "../../../../shared/components/button/button";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [Button],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails {
  private movieService = inject(MoviesService);
  private route = inject(ActivatedRoute);
  selectedMovie = this.movieService.selectedMovie;
  ngOnInit(){
    const movieId: string = (this.route.snapshot.params['id']);
    this.movieService.getMovieById(movieId)
  }
  onClickLikeDislike(type: "LIKE" | "DISLIKE"){
    this.movieService.addLikeDislike(type);
  }
}
