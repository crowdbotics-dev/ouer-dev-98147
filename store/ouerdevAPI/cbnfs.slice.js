import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cbnf_list = createAsyncThunk(
  "cbnfs/api_v1_cbnf_list",
  async payload => {
    const response = await apiService.api_v1_cbnf_list(payload)
    return response.data
  }
)
export const api_v1_cbnf_create = createAsyncThunk(
  "cbnfs/api_v1_cbnf_create",
  async payload => {
    const response = await apiService.api_v1_cbnf_create(payload)
    return response.data
  }
)
export const api_v1_cbnf_retrieve = createAsyncThunk(
  "cbnfs/api_v1_cbnf_retrieve",
  async payload => {
    const response = await apiService.api_v1_cbnf_retrieve(payload)
    return response.data
  }
)
export const api_v1_cbnf_update = createAsyncThunk(
  "cbnfs/api_v1_cbnf_update",
  async payload => {
    const response = await apiService.api_v1_cbnf_update(payload)
    return response.data
  }
)
export const api_v1_cbnf_partial_update = createAsyncThunk(
  "cbnfs/api_v1_cbnf_partial_update",
  async payload => {
    const response = await apiService.api_v1_cbnf_partial_update(payload)
    return response.data
  }
)
export const api_v1_cbnf_destroy = createAsyncThunk(
  "cbnfs/api_v1_cbnf_destroy",
  async payload => {
    const response = await apiService.api_v1_cbnf_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cbnfsSlice = createSlice({
  name: "cbnfs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_cbnf_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbnf_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbnf_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbnf_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbnf_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbnf_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbnf_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cbnf_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_cbnf_list,
  api_v1_cbnf_create,
  api_v1_cbnf_retrieve,
  api_v1_cbnf_update,
  api_v1_cbnf_partial_update,
  api_v1_cbnf_destroy,
  slice: cbnfsSlice
}
