// counter.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from '../reducer/counter.reducer';

// Step 1: Create a feature selector to select the counter state from the global state
export const selectCounterState = createFeatureSelector<CounterState>('count');

// Step 2: Create a selector to get the count value from the counter state
export const selectCounterValue = createSelector(
  selectCounterState,
  (state: CounterState) => state.count
);
