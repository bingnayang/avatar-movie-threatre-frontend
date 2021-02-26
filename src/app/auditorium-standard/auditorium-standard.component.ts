import { Component, OnInit } from '@angular/core';
import { Seat } from '../class/seat';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../class/movie';
import { Showtime } from '../class/showtime';
import { ShowtimeService } from '../showtime.service';

@Component({
  selector: 'app-auditorium-standard',
  templateUrl: './auditorium-standard.component.html',
  styleUrls: ['./auditorium-standard.component.css']
})
export class AuditoriumStandardComponent implements OnInit {
  id: number;
  starttime_id: number;
  movieInfo: Movie = new Movie;
  showtimeInfo: Showtime = new Showtime;
  
  seat : Seat[] = [
    {seatNumber:'A1',seatAvailable:'available'},
    {seatNumber:'A2',seatAvailable:'available'},
    {seatNumber:'A3',seatAvailable:'available'},
    {seatNumber:'A4',seatAvailable:'available'},
    {seatNumber:'A5',seatAvailable:'available'},
    {seatNumber:'B1',seatAvailable:'available'},
    {seatNumber:'B2',seatAvailable:'available'},
    {seatNumber:'B3',seatAvailable:'available'},
    {seatNumber:'B4',seatAvailable:'available'},
    {seatNumber:'B5',seatAvailable:'available'},
    {seatNumber:'B6',seatAvailable:'available'}
  ];

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService, private showtimeService: ShowtimeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.starttime_id = this.route.snapshot.params['starttime_id'];
    // Get movie info
    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movieInfo = data;
      console.log(this.movieInfo);
    },error => console.log(error));
    // Get showtime info
    this.showtimeService.getShowtime(this.starttime_id).subscribe(data => {
      this.showtimeInfo = data;
      console.log(this.showtimeInfo);
    })
  }

}
