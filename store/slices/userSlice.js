// // src/store/slices/userSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../../utils/api'; // Your Axios instance

// // Async thunk example
// export const fetchUserProfile = createAsyncThunk(
//   'user/fetchProfile',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.get('/profile');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Error');
//     }
//   }
// );

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     profile: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     clearProfile: (state) => {
//       state.profile = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserProfile.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserProfile.fulfilled, (state, action) => {
//         state.loading = false;
//         state.profile = action.payload;
//       })
//       .addCase(fetchUserProfile.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { clearProfile } = userSlice.actions;

// export default userSlice.reducer;
