import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchData = createAsyncThunk('fetchData', async (args, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://api.github.com/users');
    return response.data;
  } catch (error) {
    return rejectWithValue("Oops found an error...");
  }
});

const userSlice =createSlice({
    name:"users",
    initialState:{
        users: undefined, 
        isLoading:false,
        isError:null,
    },
    reducers: {
      clearApiData1: (state) => {
        state.apiData1 = null;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchData.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
          });
      },
  
});

export const { clearApiData1, clearApiData2  } = userSlice.actions;
export default userSlice.reducer;