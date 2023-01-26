import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    
  },
});

export default store;