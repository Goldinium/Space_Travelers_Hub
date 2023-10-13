import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    reserveMission: (state, action) => {
      const missionId = action.payload;
      const newMissionState = state.allrockets.map((mission) => {
        if (mission.id !== missionId) return mission;
        return { ...mission, reserved: true };
      });
      return { state, allrockets: newMissionState };
    },
  
    cancelMission: (state, action) => {
      const missionId = action.payload;
      const newMissionState = state.allrockets.map((mission) => {
        if (missionId !== missionId) return mission;
        return { ...mission, reserved: false };
      });
      return { state, allrockets: newMissionState };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionsByThunk.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(fetchMissionsByThunk.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.allmissions.length = 4;
        const theMissions = (missionsData = action.payload) => {
          const missionsEntries = Object.entries(missionsData);
          missionsEntries.length = 4;
          missionsEntries.forEach((missionEntry) => {
            state.allmissions.push({
              id: missionEntry[1].mission_id,
              missionname: missionEntry[1].mission_name,
              description: missionEntry[1].description,
            });
          });
        };
        theMissions();
      })
      .addCase(fetchMissionsByThunk.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const allmissions = (state) => state.allmissions;
export const missionsloading = (state) => state.isLoading;

export const {
  extraReducers,
} = missionsSlice.actions;
export default missionsSlice.reducer;
