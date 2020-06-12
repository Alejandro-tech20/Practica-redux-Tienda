
import {createStore, Store} from 'redux'
import { rootReducer } from './reducer_comb'


export const store: Store = createStore(rootReducer);
