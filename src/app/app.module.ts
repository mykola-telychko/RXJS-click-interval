import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RxjsClickComponent } from './rxjs-click/rxjs-click.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
  ],
  declarations: [AppComponent, RxjsClickComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
