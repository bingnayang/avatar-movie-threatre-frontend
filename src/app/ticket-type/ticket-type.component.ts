import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Seat } from '../class/seat';
import { Movie } from '../class/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-ticket-type',
  templateUrl: './ticket-type.component.html',
  styleUrls: ['./ticket-type.component.css']
})
export class TicketTypeComponent implements OnInit {
  id: number;
  retrievedSeat : Seat[];
  retrievedData : any;
  seatsHold : string[] = [];
  movieInfo: Movie = new Movie;
  orderTicketType : string[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // Get movie info
    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movieInfo = data;
      console.log(this.movieInfo);
    },error => console.log(error));
    // Retrieving data and converting it back into an array
    this.retrievedData = localStorage.getItem("seat");
    this.retrievedSeat = JSON.parse(this.retrievedData);
    console.log(this.retrievedSeat)
    // Push hold seat number to array
    this.retrievedSeat.forEach(obj => {
      if(obj.seatAvailable == 'Hold'){
        this.seatsHold.push(obj.seatNumber);
      }
    })
    console.log(this.seatsHold)
  }

  updateTicket(updateTicket: string, ticketType: string){
    console.log("UpdateTicket: "+updateTicket+"\n"+"TicketType:"+ticketType)
    if(updateTicket === 'add ticket'){
      console.log("Add Ticket Type")
      this.orderTicketType.push(ticketType);
    }else{
      console.log("Remove Ticket Type")
      this.orderTicketType.indexOf(ticketType) !== -1 && this.orderTicketType.splice(this.orderTicketType.indexOf(ticketType),1)
    } 
    console.log("Order Ticket Type")
    console.log(this.orderTicketType)
  }

  checkOutOrder(id: number){
    this.router.navigate(['showtime-by-movie',id]);
  }
}
