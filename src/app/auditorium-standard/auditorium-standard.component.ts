import { Component, OnInit } from '@angular/core';
import { Seat } from '../class/seat';

@Component({
  selector: 'app-auditorium-standard',
  templateUrl: './auditorium-standard.component.html',
  styleUrls: ['./auditorium-standard.component.css']
})
export class AuditoriumStandardComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
