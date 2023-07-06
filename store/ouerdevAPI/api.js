import axios from "axios"
const ouerdevAPI = axios.create({
  baseURL: "https://ouer-dev-98147.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return ouerdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_asdt_list(payload) {
  return ouerdevAPI.get(`/api/v1/asdt/`)
}
function api_v1_asdt_create(payload) {
  return ouerdevAPI.post(`/api/v1/asdt/`, payload.data)
}
function api_v1_asdt_retrieve(payload) {
  return ouerdevAPI.get(`/api/v1/asdt/${payload.id}/`)
}
function api_v1_asdt_update(payload) {
  return ouerdevAPI.put(`/api/v1/asdt/${payload.id}/`, payload.data)
}
function api_v1_asdt_partial_update(payload) {
  return ouerdevAPI.patch(`/api/v1/asdt/${payload.id}/`, payload.data)
}
function api_v1_asdt_destroy(payload) {
  return ouerdevAPI.delete(`/api/v1/asdt/${payload.id}/`)
}
function api_v1_cbnf_list(payload) {
  return ouerdevAPI.get(`/api/v1/cbnf/`)
}
function api_v1_cbnf_create(payload) {
  return ouerdevAPI.post(`/api/v1/cbnf/`, payload.data)
}
function api_v1_cbnf_retrieve(payload) {
  return ouerdevAPI.get(`/api/v1/cbnf/${payload.id}/`)
}
function api_v1_cbnf_update(payload) {
  return ouerdevAPI.put(`/api/v1/cbnf/${payload.id}/`, payload.data)
}
function api_v1_cbnf_partial_update(payload) {
  return ouerdevAPI.patch(`/api/v1/cbnf/${payload.id}/`, payload.data)
}
function api_v1_cbnf_destroy(payload) {
  return ouerdevAPI.delete(`/api/v1/cbnf/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return ouerdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_sghty_list(payload) {
  return ouerdevAPI.get(`/api/v1/sghty/`)
}
function api_v1_sghty_create(payload) {
  return ouerdevAPI.post(`/api/v1/sghty/`, payload.data)
}
function api_v1_sghty_retrieve(payload) {
  return ouerdevAPI.get(`/api/v1/sghty/${payload.id}/`)
}
function api_v1_sghty_update(payload) {
  return ouerdevAPI.put(`/api/v1/sghty/${payload.id}/`, payload.data)
}
function api_v1_sghty_partial_update(payload) {
  return ouerdevAPI.patch(`/api/v1/sghty/${payload.id}/`, payload.data)
}
function api_v1_sghty_destroy(payload) {
  return ouerdevAPI.delete(`/api/v1/sghty/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return ouerdevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return ouerdevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return ouerdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return ouerdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return ouerdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return ouerdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return ouerdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return ouerdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return ouerdevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return ouerdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return ouerdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return ouerdevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_asdt_list,
  api_v1_asdt_create,
  api_v1_asdt_retrieve,
  api_v1_asdt_update,
  api_v1_asdt_partial_update,
  api_v1_asdt_destroy,
  api_v1_cbnf_list,
  api_v1_cbnf_create,
  api_v1_cbnf_retrieve,
  api_v1_cbnf_update,
  api_v1_cbnf_partial_update,
  api_v1_cbnf_destroy,
  api_v1_login_create,
  api_v1_sghty_list,
  api_v1_sghty_create,
  api_v1_sghty_retrieve,
  api_v1_sghty_update,
  api_v1_sghty_partial_update,
  api_v1_sghty_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
