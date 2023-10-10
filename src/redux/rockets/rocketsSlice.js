import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

export const removeRocketByThunk = createAsyncThunk(
  'rockets/removeRocketByThunk',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(id)(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Om6k22yKr6fTJWoqUNAC/books',
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

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
          rocketsEntries.forEach((rocketEntry) => {
            console.log(rocketEntry[1].flickr_images[0]);
            state.allrockets.push({
              id: rocketEntry[1].id,
              rocketname: rocketEntry[1].name,
              description: rocketEntry[1].description,
              flickrimages: rocketEntry[1].flickr_images[0],
            });
          });
        };
        theRockets();
      })
      .addCase(fetchRocketsByThunk.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      })
    // .addCase(addRocketByThunk.fulfilled, (state, action) => {
    //   console.log(state, action);
    // })
      .addCase(removeRocketByThunk.fulfilled, (state, action) => {
        console.log(state, action.payload);
      });
  },
});

export const allrockets = (state) => state.allrockets;
export const rocketsloading = (state) => state.isLoading;

export const {
  extraReducers,
} = rocketsSlice.actions;
export default rocketsSlice.reducer;
