import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../class/movie';
import { MovieService } from '../movie.service';
import { Showtime } from '../class/showtime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showtime-by-movie',
  templateUrl: './showtime-by-movie.component.html',
  styleUrls: ['./showtime-by-movie.component.css']
})
export class ShowtimeByMovieComponent implements OnInit {
  movieShowTime: Movie = new Movie;
  id: number;
  start_id: number;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.start_id = this.route.snapshot.params['start_id'];

    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movieShowTime = data;
      console.log(this.movieShowTime);
    },error => console.log(error));
  }

  selectTime(id: number, showtime: Showtime){
    console.log("Movie Id: ")
    console.log(id)
    console.log("ShowTime: ")
    console.log(showtime)

    if(showtime.auditorium == 'IMAX-3D'){
      this.router.navigate(['auditorium-one-imax',id,showtime.id]);
    }else{
      this.router.navigate(['auditorium-standard',id,showtime.id]);
    }
  }
}
