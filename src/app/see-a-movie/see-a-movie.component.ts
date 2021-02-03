import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../class/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-a-movie',
  templateUrl: './see-a-movie.component.html',
  styleUrls: ['./see-a-movie.component.css']
})
export class SeeAMovieComponent implements OnInit {
  movieList: Movie[];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  private getMovieList(){
    this.movieService.getPlayingMovieList().subscribe(data => {
      this.movieList = data;
      console.log(this.movieList);
    }, error => console.log(error));
  }

  viewMovieDetail(id: number){
    this.router.navigate(['movie-info',id]);
  }
}
