import { Component, OnInit } from '@angular/core';
import { Movie } from '../class/movie';
import { MovieService} from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  playingMovieList: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPlayingMovieList();
  }

  private getPlayingMovieList(){
    this.movieService.getPlayingMovieList().subscribe(data => {
      this.playingMovieList = data;
      console.log(this.playingMovieList);
    }, error => console.log(error));
  }

}
