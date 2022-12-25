import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarView,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
} from 'angular-calendar';
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
import { EventColor } from 'calendar-utils';

import { LoadingService } from 'src/app/core/components/loading-spinner/loading.service';

import { Subject } from 'rxjs';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

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

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors['yellow'],
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
      title: 'An event',
      color: colors['red'],
    },
  ];

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date, events);
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    //this.handleEvent('Dropped or resized', event);
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
