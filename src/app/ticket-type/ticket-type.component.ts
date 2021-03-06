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
  addAdultButtonDisabled : boolean;

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

    if(updateTicket === 'add ticket'){
      this.orderTicketType.push(ticketType);
    }else{
      console.log("Remove Ticket Type")
      this.orderTicketType.indexOf(ticketType) !== -1 && this.orderTicketType.splice(this.orderTicketType.indexOf(ticketType),1);
    } 
    // Save order ticket type to localstorage
    localStorage.setItem("ticket-type", JSON.stringify(this.orderTicketType));
  }

  checkOutOrder(id: number){
    this.router.navigate(['order-checkout',id]);
  }
}
