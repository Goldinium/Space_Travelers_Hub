import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// export const addRocketByThunk = createAsyncThunk(
//   'rockets/addRocketByThunk',
//   async (newRocketData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         'https://api.spacexdata.com/v4/rockets', {
//          newMissionData,
//         },
//       );
//       const feedback = await response.data;
//       return feedback;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

// export const removeRocketByThunk = createAsyncThunk(
//   'rockets/removeRocketByThunk',
//   async (bookId, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(bookId)(
//         'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Om6k22yKr6fTJWoqUNAC/books');
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

export const fetchRocketsByThunk = createAsyncThunk(
  'rockets/fetchRocketsByThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://api.spacexdata.com/v4/rockets');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  allrockets: [],
  isLoading: 'idle',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    removeRockets: (state, action) => {
      const itemId = action.payload;
      state.allbooks = state.allbooks.filter((item) => item.itemId !== itemId);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsByThunk.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(fetchRocketsByThunk.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        const theRockets = (rocketsData = action.payload) => {
          const rocketsEntries = Object.entries(rocketsData);
          rocketsEntries.forEach((entry) => {
            console.log(entry);
          });
        };
        theRockets();
      })
      .addCase(fetchRocketsByThunk.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      });
    // .addCase(addRocketByThunk.fulfilled, (state, action) => {
    // const { title, author } = action.meta.arg;
    // state.rockets.push({

    // });
    //   console.log(state, action.payload)
    // })
    // .addCase(removeRocketByThunk.fulfilled, (state, action) => {
    //   console.log(state, action.payload)

    // });
  },
});

export const allrockets = (state) => state.allrockets;
export const rocketsloading = (state) => state.isLoading;

export const {
  extraReducers,
} = rocketsSlice.actions;
export default rocketsSlice.reducer;
