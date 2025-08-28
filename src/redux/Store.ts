import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage
import { combineReducers } from 'redux'

// Import reducers
import languageReducer from './slices/LanguageSlice'
// import modalReducer from './slices/ModalSlice'

// Combine reducers
const rootReducer = combineReducers({
  language: languageReducer,
  // Thêm reducer khác ở đây nếu có
  //   modal: modalReducer,
})

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language'], // chỉ persist reducer 'language'
}

// Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
