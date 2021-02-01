import { Component, OnInit } from '@angular/core';
import { Movie } from '../class/movie';
import { ShowtimeService} from '../showtime.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {
  movieShowList: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getSelectedDateShowTimeList();
  }

  private getSelectedDateShowTimeList(){
    this.movieService.getPlayingMovieList().subscribe(data => {
      this.movieShowList = data;
      console.log(this.movieShowList);
    }, error => console.log(error));
  }
}
