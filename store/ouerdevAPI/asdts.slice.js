import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_asdt_list = createAsyncThunk(
  "asdts/api_v1_asdt_list",
  async payload => {
    const response = await apiService.api_v1_asdt_list(payload)
    return response.data
  }
)
export const api_v1_asdt_create = createAsyncThunk(
  "asdts/api_v1_asdt_create",
  async payload => {
    const response = await apiService.api_v1_asdt_create(payload)
    return response.data
  }
)
export const api_v1_asdt_retrieve = createAsyncThunk(
  "asdts/api_v1_asdt_retrieve",
  async payload => {
    const response = await apiService.api_v1_asdt_retrieve(payload)
    return response.data
  }
)
export const api_v1_asdt_update = createAsyncThunk(
  "asdts/api_v1_asdt_update",
  async payload => {
    const response = await apiService.api_v1_asdt_update(payload)
    return response.data
  }
)
export const api_v1_asdt_partial_update = createAsyncThunk(
  "asdts/api_v1_asdt_partial_update",
  async payload => {
    const response = await apiService.api_v1_asdt_partial_update(payload)
    return response.data
  }
)
export const api_v1_asdt_destroy = createAsyncThunk(
  "asdts/api_v1_asdt_destroy",
  async payload => {
    const response = await apiService.api_v1_asdt_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const asdtsSlice = createSlice({
  name: "asdts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_asdt_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_asdt_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_asdt_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_asdt_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_asdt_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_asdt_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_asdt_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_asdt_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_asdt_list,
  api_v1_asdt_create,
  api_v1_asdt_retrieve,
  api_v1_asdt_update,
  api_v1_asdt_partial_update,
  api_v1_asdt_destroy,
  slice: asdtsSlice
}
