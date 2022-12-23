import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { LoadingService } from 'src/app/core/components/loading-spinner/loading.service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
})
export class AgendaComponent implements OnInit {
  constructor(
    private loadingService: LoadingService,
    private dialog: MatDialog
  ) {}

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

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date, events);
    //this.openAppointmentList(date)
  }
}
