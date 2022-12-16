import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { LoadingService } from 'src/app/shared/loading.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
})
export class AgendaComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  isLoading$ = this.loadingService.loading$;

  /**
   * To show the loading spinner while an asynchronous operation is in progress,
   * call the show() method of the loading service
   * before the asynchronous operation starts,
   * and call the hide() method when the operation is completed.
   */
  ngOnInit(): void {
    this.loadingService.showLoadingSpinner();
  }
  // ngOnInit() {
  //   this.loadingService.showLoadingSpinner();
  //   someAsyncOperation().then(() => {
  //     this.loadingService.hideLoadingSpinner();
  //   });
  // }

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
