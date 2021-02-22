import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../class/movie';
import { ActivatedRoute } from '@angular/router';
import { Seat } from '../class/seat';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {
  id: number;
  movieInfo: Movie = new Movie;
  
  retrievedSeatType: any[];
  retrievedData : any;

  retrievedSeatData : any;
  retrievedSeatNumber : Seat[];
  seatsHold : string[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // Get movie info
    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movieInfo = data;
      console.log(this.movieInfo);
    },error => console.log(error));
    // Retrieving data and converting it back into an array
    this.retrievedData = localStorage.getItem("ticket-type");
    this.retrievedSeatType = JSON.parse(this.retrievedData);
    console.log("seat ticket type retrieve")
    console.log(this.retrievedSeatType)

    // Retrieving data and converting it back into an array
    this.retrievedSeatData = localStorage.getItem("seat");
    this.retrievedSeatNumber = JSON.parse(this.retrievedSeatData);
    // Push hold seat number to array
    this.retrievedSeatNumber.forEach(obj => {
      if(obj.seatAvailable == 'Hold'){
        this.seatsHold.push(obj.seatNumber);
      }
    })
  }

}
