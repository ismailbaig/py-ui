// // counter.effects.ts
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { tap } from 'rxjs/operators';
// import { increment } from '../actions/counter.actions';

// @Injectable()
// export class CounterEffects {
//   increment$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(increment),
//       tap(() => console.log('Increment action dispatched'))
//     ),
//     { dispatch: false } // Set to false because we do not want to dispatch another action
//   );

//   constructor(private actions$: Actions) {}
// }
