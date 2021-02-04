import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../class/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-showtime-by-movie',
  templateUrl: './showtime-by-movie.component.html',
  styleUrls: ['./showtime-by-movie.component.css']
})
export class ShowtimeByMovieComponent implements OnInit {
  movieShowTime: Movie = new Movie;
  id: number;

  constructor(private route: ActivatedRoute, private movieService: MovieService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movieShowTime = data;
      console.log(this.movieShowTime);
    },error => console.log(error));
  }

}
