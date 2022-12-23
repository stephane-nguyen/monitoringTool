import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { LoadingService } from 'src/app/core/components/loading-spinner/loading.service';

import { Subject } from 'rxjs';

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
  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
    },
  ];

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date, events);
  }
  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
      },
    ];
  }
  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }
}
