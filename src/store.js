import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import { todoReducer } from './features/Todos/todoSlice';
import { filterReducer } from './features/Filters/filterSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['todos', 'filter'],
};

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDeafaultMiddleware) =>
    getDeafaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  preloadedState: {
    todos: [
      { id: 1, title: 'React', completed: true },
      { id: 2, title: 'Redux', completed: false },
      { id: 3, title: 'HTML', completed: true },
      { id: 4, title: 'CSS', completed: false },
    ],
    filter: 'active',
  },
  enhancers: [],
});

export const persistor = persistStore(store);
