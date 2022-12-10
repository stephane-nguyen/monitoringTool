import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Scheduler App';
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    },
  ];

  setView(view: CalendarView) {
    this.view = view;
  }
  //assume data from db
  //example: Hospital appointment info
  // let data=fromdb();
  // for(let x of data)
  // {
  // this.events = [
  //           ...this.events,
  //           {
  // 	start:x["appointment_date"],
  // 	title:x["patient_name"]+x["medical_problem"]
  //  	 }
  // 	]
  // }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //this.openAppointmentList(date)
  }
}
