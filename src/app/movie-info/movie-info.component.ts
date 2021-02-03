import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../class/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movieDetail: Movie = new Movie;
  id: number;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movieDetail = data;
      console.log(this.movieDetail);
    },error => console.log(error));
  }

}
