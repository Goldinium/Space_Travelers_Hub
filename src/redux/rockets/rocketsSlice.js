import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    updateRocket: (state, action) => {
      const rocketId = action.payload;
      state.allrockets.map((rocket) => {
        if (rocket.id === rocketId) return rocket;
        return { ...rocket, reserved: true };
      });
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
          rocketsEntries.forEach((rocketEntry) => {
            state.allrockets.push({
              id: rocketEntry[1].id,
              rocketname: rocketEntry[1].name,
              description: rocketEntry[1].description,
              flickrimages: rocketEntry[1].flickr_images[0],
              reverved: false,
            });
          });
        };
        theRockets();
      })
      .addCase(fetchRocketsByThunk.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const allrockets = (state) => state.allrockets;
export const rocketsloading = (state) => state.isLoading;

export const {
  updateRocket, extraReducers,
} = rocketsSlice.actions;
export default rocketsSlice.reducer;
