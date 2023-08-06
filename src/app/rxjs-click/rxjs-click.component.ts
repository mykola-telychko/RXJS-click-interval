import { Component, OnInit } from '@angular/core';
import { interval, Subject, throwError } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-click',
  templateUrl: './rxjs-click.component.html',
  styleUrls: ['./rxjs-click.component.css'],
})
export class RxjsClickComponent implements OnInit {
  // private interval$;
  private interval$ = new Subject();

  private source = throwError('This is an error!');
  private isIntervalActive = false;

  constructor() {
    // this.interval$ = new Subject();
  }

  ngOnInit() {
    // this.interval$ = new Subject();
    // const X = 5;
    // const interval$ = interval(X * 1000);
    // this.interval$ = interval(X * 1000);
  }

  startInterval() {
    console.log('start value:', this.isIntervalActive);

    if (!this.isIntervalActive) {
      this.isIntervalActive = true;
      this.interval$
        .pipe(
          switchMap(() => interval(2000))
          takeUntil(this.interval$) // Stops the interval when interval$ emits
        )
        .subscribe((value) => {
          console.log('Interval value:', value);
        });
    }
  }

  stopInterval() {
    console.log('stop value:', this.isIntervalActive);

    this.isIntervalActive = false;
    this.interval$.next(); // Emit a value to stop the interval
  }
}
