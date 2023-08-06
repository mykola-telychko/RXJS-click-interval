import { Component, OnInit } from '@angular/core';
import { interval, Subject, throwError, Subscription } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-click',
  templateUrl: './rxjs-click.component.html',
  styleUrls: ['./rxjs-click.component.css'],
})
export class RxjsClickComponent implements OnInit {
  // private interval$;
  private interval$ = new Subject();
  private isIntervalActive = false;
  public subscri: Subscription;
  constructor() {}

  ngOnInit() {}

  startInterval() {
    console.log('start value:', this.isIntervalActive);

    if (!this.isIntervalActive) {
      this.isIntervalActive = true;
      this.subscri = this.interval$
        .pipe(
          switchMap(() => interval(1000))
          // takeUntil(this.interval$) // Stops the interval when interval$ emits
        )
        .subscribe((value) => {
          console.log('Interval value:', value);
        });
    }
  }

  stopInterval() {
    console.log('stop value:', this.isIntervalActive);
    // if (this.isIntervalActive == true) {
    this.isIntervalActive = false;
    this.interval$.next(); // Emit a value to stop the interval
    // this.subscri.next(); // Emit a value to stop the interval

    // this.interval$.();
    // this.subscri.unsubscribe();
    // }
  }
}
