import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Movie } from '../class/movie';
import { MovieService } from '../movie.service';
import { Seat } from '../class/seat';
import { ShowtimeService } from '../showtime.service';
import { Showtime } from '../class/showtime';

@Component({
  selector: 'app-auditorium-one-imax',
  templateUrl: './auditorium-one-imax.component.html',
  styleUrls: ['./auditorium-one-imax.component.css']
})
export class AuditoriumOneIMAXComponent implements OnInit {
  id: number;
  starttime_id: number;
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
    {seatNumber:'B6',seatAvailable:'available'},
    {seatNumber:'B7',seatAvailable:'available'},
    {seatNumber:'C1',seatAvailable:'available'},
    {seatNumber:'C2',seatAvailable:'available'},
    {seatNumber:'C3',seatAvailable:'available'},
    {seatNumber:'C4',seatAvailable:'available'},
    {seatNumber:'C5',seatAvailable:'available'},
    {seatNumber:'C6',seatAvailable:'available'},
    {seatNumber:'C7',seatAvailable:'available'},
  ];
  showtimeInfo: Showtime = new Showtime;
  seatSelected = [];
  movieInfo: Movie = new Movie;

  constructor(private route: ActivatedRoute,  private router: Router,private movieService: MovieService, private showtimeService: ShowtimeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.starttime_id = this.route.snapshot.params['starttime_id'];
    // Get movie info
    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movieInfo = data;
      console.log(this.movieInfo);
    },error => console.log(error));
    // Get showtime info
    this.showtimeService.getShowtime(this.id).subscribe(data => {
      this.showtimeInfo = data;
      console.log(this.showtimeInfo);
    })
  }

  selectSeat(seatNumber: string){
    if(this.seatSelected.indexOf(seatNumber) > -1){
      console.log("Seat already selected")
      this.seatSelected = this.seatSelected.filter(obj => obj!== seatNumber);
      this.seat.forEach(function(obj){
        if(obj.seatNumber === seatNumber){
          obj.seatAvailable = 'available';
        }
      })
    }else{
      this.seatSelected.push(seatNumber);
      this.seat.forEach(function(obj){
        if(obj.seatNumber === seatNumber){
          obj.seatAvailable = 'Hold';
        }
      })
      console.log("Seat Select: "+seatNumber);
    }
    localStorage.setItem("seat", JSON.stringify(this.seat));
    console.log(this.seatSelected)
  }

  selectTicketType(id: number){
    this.router.navigate(['ticket-type',id]);
  }
}
