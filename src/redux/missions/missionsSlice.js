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

export const removeMissionByThunk = createAsyncThunk(
  'missions/removeMissionByThunk',
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

export const fetchMissionsByThunk = createAsyncThunk(
  'missions/fetchMissionsByThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://api.spacexdata.com/v3/missions');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  allmissions: [],
  isLoading: 'idle',
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionsByThunk.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(fetchMissionsByThunk.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        const theMissions = (missionsData = action.payload) => {
          const missionsEntries = Object.entries(missionsData);
          missionsEntries.forEach((missionEntry) => {
            console.log(missionEntry[1].flickr_images[0]);
            state.allmissions.push({
              id: missionEntry[1].id,
              missionname: missionEntry[1].name,
              description: missionEntry[1].description,
              flickrimages: missionEntry[1].flickr_images[0],
            });
          });
        };
        theMissions();
      })
      .addCase(fetchMissionsByThunk.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeMissionByThunk.fulfilled, (state, action) => {
        console.log(state, action.payload);
      });
  },
});

export const allmissions = (state) => state.allmissions;
export const missionsloading = (state) => state.isLoading;

export const {
  extraReducers,
} = missionsSlice.actions;
export default missionsSlice.reducer;
