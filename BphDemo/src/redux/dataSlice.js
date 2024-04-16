import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchData2 = createAsyncThunk('fetchData', async (args, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    return rejectWithValue("Oops found an error...");
  }
});

const dataSlice =createSlice({
    name:"data",
    initialState:{
      data1: [], 
        isLoading:false,
        isError:null,
    },
    reducers: {
      clearApiData2: (state) => {
        state.apiData2 = null;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchData2.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchData2.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data1 = action.payload;
          })
          .addCase(fetchData2.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
          });
      },
  
});

export const { clearApiData1, clearApiData2  } = dataSlice.actions;
export default dataSlice.reducer;