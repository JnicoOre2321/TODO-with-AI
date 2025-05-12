
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Ejemplo de un reducer

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;