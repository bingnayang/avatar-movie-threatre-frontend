import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auditorium-one-imax',
  templateUrl: './auditorium-one-imax.component.html',
  styleUrls: ['./auditorium-one-imax.component.css']
})
export class AuditoriumOneIMAXComponent implements OnInit {
  id: number;
  seat: any = ["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5","B6","B7","C1","C2","C3","C4","C5","C6","C7"];
  seatSelected = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
  }

  selectSeat(seatNumber: string){
    this.seatSelected.push(seatNumber);
    console.log("Seat Select: "+seatNumber);
    console.log(this.seatSelected)
  }
}