import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allrockets: [],
  isLoading: 'true',
  error: undefined,
};

export const fetchRocketsByThunk = createAsyncThunk(
  'rockets/fetchRocketsByThunk',
  async (endPoint = 'rockets', { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.spacexdata.com/v4/${endPoint}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const newState = state.allrockets.map((rocket) => {
        if (rocket.id !== rocketId) return rocket;
        return { ...rocket, reserved: true };
      });
      return { state, allrockets: newState };
    },

    cancelRocket: (state, action) => {
      const rocketId = action.payload;
      const newState = state.allrockets.map((rocket) => {
        if (rocket.id !== rocketId) return rocket;
        return { ...rocket, reserved: false };
      });
      return { state, allrockets: newState };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsByThunk.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(fetchRocketsByThunk.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.allrockets.length = 4;
        const theRockets = (rocketsData = action.payload) => {
          const rocketsEntries = Object.entries(rocketsData);
          rocketsEntries.forEach((rocketEntry) => {
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
      });
  },
});

export const allrockets = (state) => state.allrockets;
export const rocketsloading = (state) => state.isLoading;

export const {
  reserveRocket, cancelRocket, extraReducers,
} = rocketsSlice.actions;
export default rocketsSlice.reducer;
