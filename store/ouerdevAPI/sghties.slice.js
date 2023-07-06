import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sghty_list = createAsyncThunk(
  "sghties/api_v1_sghty_list",
  async payload => {
    const response = await apiService.api_v1_sghty_list(payload)
    return response.data
  }
)
export const api_v1_sghty_create = createAsyncThunk(
  "sghties/api_v1_sghty_create",
  async payload => {
    const response = await apiService.api_v1_sghty_create(payload)
    return response.data
  }
)
export const api_v1_sghty_retrieve = createAsyncThunk(
  "sghties/api_v1_sghty_retrieve",
  async payload => {
    const response = await apiService.api_v1_sghty_retrieve(payload)
    return response.data
  }
)
export const api_v1_sghty_update = createAsyncThunk(
  "sghties/api_v1_sghty_update",
  async payload => {
    const response = await apiService.api_v1_sghty_update(payload)
    return response.data
  }
)
export const api_v1_sghty_partial_update = createAsyncThunk(
  "sghties/api_v1_sghty_partial_update",
  async payload => {
    const response = await apiService.api_v1_sghty_partial_update(payload)
    return response.data
  }
)
export const api_v1_sghty_destroy = createAsyncThunk(
  "sghties/api_v1_sghty_destroy",
  async payload => {
    const response = await apiService.api_v1_sghty_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sghtiesSlice = createSlice({
  name: "sghties",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_sghty_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sghty_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sghty_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sghty_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sghty_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sghty_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sghty_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sghty_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_sghty_list,
  api_v1_sghty_create,
  api_v1_sghty_retrieve,
  api_v1_sghty_update,
  api_v1_sghty_partial_update,
  api_v1_sghty_destroy,
  slice: sghtiesSlice
}
