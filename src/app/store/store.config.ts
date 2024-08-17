import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from './counter/reducer/counter.reducer';
// import { CounterEffects } from './effects/counter.effects';


export const appStoreProviders = [
    provideStore({ count: counterReducer }),
    // provideEffects([CounterEffects]),
];
