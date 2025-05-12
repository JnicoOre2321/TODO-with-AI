import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: "",
    isLoggedIn: false,
  },
  reducers: {
    setuser: (state, action) => {
      state.value = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.value = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setuser, logout } = userSlice.actions;
export default userSlice.reducer;