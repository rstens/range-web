//
// MyRangeBC
//
// Copyright © 2018 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Kyubin Han.
//

import { isBundled, RETURN_PAGE_TYPE } from './variables'

const DEV_API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  'https://web-range-myra-dev.apps.silver.devops.gov.bc.ca/api'
const DEV = {
  // eslint-disable-line no-unused-vars
  SSO_BASE_URL: 'https://sso-dev.pathfinder.gov.bc.ca',
  SITEMINDER_BASE_URL: 'https://logontest.gov.bc.ca',
  API_BASE_URL: DEV_API_BASE_URL
}

export const DEV_ENV = {
  ...DEV
}

export const SSO_BASE_URL = isBundled
  ? '{{.Env.SSO_BASE_URL}}' // Caddy will replace this with the environment variable configured in Openshift
  : DEV_ENV.SSO_BASE_URL

export const SSO_REALM_NAME = isBundled
  ? '{{.Env.SSO_REALM_NAME}}'
  : process.env.REACT_APP_SSO_REALM_NAME
export const SSO_CLIENT_ID = isBundled
  ? '{{.Env.SSO_CLIENT_ID}}'
  : process.env.REACT_APP_SSO_CLIENT_ID
export const SSO_BASE_AUTH_ENDPOINT = `${SSO_BASE_URL}/auth/realms/${SSO_REALM_NAME}/protocol/openid-connect`
export const SSO_LOGIN_REDIRECT_URI = `${window.location.origin}/return-page?type=${RETURN_PAGE_TYPE.LOGIN}`
export const SSO_LOGIN_ENDPOINT = `${SSO_BASE_AUTH_ENDPOINT}/auth?response_type=code&client_id=${SSO_CLIENT_ID}&redirect_uri=${SSO_LOGIN_REDIRECT_URI}`
export const SSO_IDIR_LOGIN_ENDPOINT = `${SSO_LOGIN_ENDPOINT}&kc_idp_hint=idir`
export const SSO_BCEID_LOGIN_ENDPOINT = `${SSO_LOGIN_ENDPOINT}&kc_idp_hint=bceid`

export const SSO_LOGOUT_REDIRECT_URI = `${window.location.origin}/return-page?type=${RETURN_PAGE_TYPE.LOGOUT}`
export const SSO_LOGOUT_ENDPOINT = `${SSO_BASE_AUTH_ENDPOINT}/logout?redirect_uri=${SSO_LOGOUT_REDIRECT_URI}`

export const SITEMINDER_BASE_URL = isBundled
  ? '{{.Env.SITEMINDER_BASE_URL}}'
  : DEV_ENV.SITEMINDER_BASE_URL

export const SITEMINDER_LOGOUT_REDIRECT_URI = `${window.location.origin}/return-page?type=${RETURN_PAGE_TYPE.SITEMINDER_LOGOUT}`
export const SITEMINDER_LOGOUT_ENDPOINT = `${SITEMINDER_BASE_URL}/clp-cgi/logoff.cgi?returl=${SITEMINDER_LOGOUT_REDIRECT_URI}&retnow=1`

export const GET_TOKEN_FROM_SSO = `/auth/realms/${SSO_REALM_NAME}/protocol/openid-connect/token`
export const REFRESH_TOKEN_FROM_SSO = `/auth/realms/${SSO_REALM_NAME}/protocol/openid-connect/token`

export const API_BASE_URL = isBundled
  ? `${window.location.origin}/api`
  : DEV_ENV.API_BASE_URL

export const SEARCH_AGREEMENTS = '/v1/agreement/search'
export const GET_AGREEMENT = agreementId => `/v1/agreement/${agreementId}`
export const UPDATE_AGREEMENT_ZONE = agreementId =>
  `/v1/agreement/${agreementId}/zone`

export const GET_REFERENCES = '/v1/reference'
export const GET_ZONES = '/v1/zone'
export const GET_USERS = '/v1/user'
export const SEARCH_CLIENTS = '/v1/client/search'
export const GET_USER_PROFILE = '/v1/user/me'
export const UPDATE_USER_PROFILE = '/v1/user/me'

export const UPDATE_USER_ID_OF_ZONE = zoneId => `/v1/zone/${zoneId}/user`
export const CREATE_USER_CLIENT_LINK = userId => `/v1/user/${userId}/client`
export const DELETE_USER_CLIENT_LINK = (userId, clientId) =>
  `/v1/user/${userId}/client/${clientId}`

export const CREATE_RUP = '/v1/plan'
export const GET_RUP = planId => `/v1/plan/${planId}`
export const GET_PLAN_PDF = planId => `/v1/report/${planId}`
export const GET_CLIENT_AGREEMENTS = planId => `/v1/client/agreements/${planId}`
export const UPDATE_CLIENT_AGREEMENT = (planId, clientAgreementId) =>
  `/v1/client/agreements/${planId}/${clientAgreementId}`
export const UPDATE_PLAN_STATUS = planId => `/v1/plan/${planId}/status`
export const UPDATE_RUP = planId => `/v1/plan/${planId}`
export const UPDATE_CONFIRMATION = (planId, confirmationId) =>
  `/v1/plan/${planId}/confirmation/${confirmationId}`
export const DISCARD_AMENDMENT = planId => `v1/plan/${planId}/discard-amendment`

export const CREATE_RUP_VERSION = planId => `/v1/plan/${planId}/version`
export const GET_RUP_VERSIONS = planId => `/v1/plan/${planId}/version`
export const GET_RUP_VERSION = (planId, version) =>
  `/v1/plan/${planId}/version/${version}`
export const RESTORE_RUP_VERSION = (planId, version) =>
  `v1/plan/${planId}/version/${version}/restore`

export const CREATE_RUP_ATTACHMENT = planId => `/v1/plan/${planId}/attachment`
export const DELETE_RUP_ATTACHMENT = (planId, attachmentId) =>
  `/v1/plan/${planId}/attachment/${attachmentId}`
export const UPDATE_RUP_ATTACHMENT = (planId, attachmentId) =>
  `/v1/plan/${planId}/attachment/${attachmentId}`

export const GET_SIGNED_URL = fileName =>
  `/v1/files/upload-url?name=${fileName}`
export const GET_SIGNED_DOWNLOAD_URL = fileId =>
  `/v1/files/download-url?id=${fileId}`

export const CREATE_RUP_STATUS_RECORD = planId =>
  `/v1/plan/${planId}/status-record`
export const CREATE_RUP_PASTURE = planId => `/v1/plan/${planId}/pasture`
export const UPDATE_RUP_PASTURE = (planId, pastureId) =>
  `/v1/plan/${planId}/pasture/${pastureId}`
export const DELETE_RUP_PASTURE = (planId, pastureId) =>
  `/v1/plan/${planId}/pasture/${pastureId}`

export const CREATE_RUP_GRAZING_SCHEDULE = planId =>
  `/v1/plan/${planId}/schedule`
export const UPDATE_RUP_GRAZING_SCHEDULE = (planId, scheduleId) =>
  `/v1/plan/${planId}/schedule/${scheduleId}`
export const DELETE_RUP_GRAZING_SCHEDULE = (planId, scheduleId) =>
  `/v1/plan/${planId}/schedule/${scheduleId}`
export const CREATE_RUP_GRAZING_SCHEDULE_ENTRY = (planId, scheduleId) =>
  `/v1/plan/${planId}/schedule/${scheduleId}/entry`
// export const UPDATE_RUP_GRAZING_SCHEDULE_ENTRY
export const DELETE_RUP_GRAZING_SCHEDULE_ENTRY = (
  planId,
  scheduleId,
  entryId
) => `/v1/plan/${planId}/schedule/${scheduleId}/entry/${entryId}`

export const CREATE_RUP_MINISTER_ISSUE = planId => `/v1/plan/${planId}/issue`
export const UPDATE_RUP_MINISTER_ISSUE = (planId, issueId) =>
  `/v1/plan/${planId}/issue/${issueId}`
export const DELETE_RUP_MINISTER_ISSUE = (planId, issueId) =>
  `/v1/plan/${planId}/issue/${issueId}`
export const CREATE_RUP_MINISTER_ISSUE_ACTION = (planId, issueId) =>
  `/v1/plan/${planId}/issue/${issueId}/action`
export const UPDATE_RUP_MINISTER_ISSUE_ACTION = (planId, issueId, actionId) =>
  `/v1/plan/${planId}/issue/${issueId}/action/${actionId}`
export const DELETE_RUP_MINISTER_ISSUE_ACTION = (planId, issueId, actionId) =>
  `/v1/plan/${planId}/issue/${issueId}/action/${actionId}`

export const CREATE_RUP_PLANT_COMMUNITY = (planId, pastureId) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community`
export const UPDATE_RUP_PLANT_COMMUNITY = (planId, pastureId, plantId) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${plantId}`
export const DELETE_RUP_PLANT_COMMUNITY = (planId, pastureId, plantId) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${plantId}`
export const CREATE_RUP_PLANT_COMMUNITY_ACTION = (
  planId,
  pastureId,
  communityId
) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${communityId}/action`
export const UPDATE_RUP_PLANT_COMMUNITY_ACTION = (
  planId,
  pastureId,
  communityId,
  actionId
) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${communityId}/action/${actionId}`
export const DELETE_RUP_PLANT_COMMUNITY_ACTION = (
  planId,
  pastureId,
  communityId,
  actionId
) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${communityId}/action/${actionId}`

export const CREATE_RUP_INDICATOR_PLANT = (planId, pastureId, communityId) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${communityId}/indicator-plant`
export const UPDATE_RUP_INDICATOR_PLANT = (
  planId,
  pastureId,
  communityId,
  plantId
) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${communityId}/indicator-plant/${plantId}`
export const DELETE_RUP_INDICATOR_PLANT = (
  planId,
  pastureId,
  communityId,
  plantId
) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${communityId}/indicator-plant/${plantId}`
export const CREATE_RUP_MONITERING_AREA = (planId, pastureId, communityId) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${communityId}/monitoring-area`
export const UPDATE_RUP_MONITORING_AREA = (
  planId,
  pastureId,
  communityId,
  areaId
) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${communityId}/monitoring-area/${areaId}`
export const DELETE_RUP_MONITORING_AREA = (
  planId,
  pastureId,
  communityId,
  areaId
) =>
  `/v1/plan/${planId}/pasture/${pastureId}/plant-community/${communityId}/monitoring-area/${areaId}`
export const CREATE_RUP_INVASIVE_PLANT_CHECKLIST = planId =>
  `/v1/plan/${planId}/invasive-plant-checklist`
export const UPDATE_RUP_INVASIVE_PLANT_CHECKLIST = (planId, checklistId) =>
  `/v1/plan/${planId}/invasive-plant-checklist/${checklistId}`
export const CREATE_RUP_MANAGEMENT_CONSIDERATION = planId =>
  `/v1/plan/${planId}/management-consideration`
export const UPDATE_RUP_MANAGEMENT_CONSIDERATION = (planId, considerationId) =>
  `/v1/plan/${planId}/management-consideration/${considerationId}`
export const DELETE_RUP_MANAGEMENT_CONSIDERATION = (planId, considerationId) =>
  `/v1/plan/${planId}/management-consideration/${considerationId}`
export const CREATE_RUP_ADDITIONAL_REQUIREMENT = planId =>
  `/v1/plan/${planId}/additional-requirement`
export const UPDATE_RUP_ADDITIONAL_REQUIREMENT = (planId, requirementId) =>
  `/v1/plan/${planId}/additional-requirement/${requirementId}`
export const DELETE_RUP_ADDITIONAL_REQUIREMENT = (planId, requirementId) =>
  `/v1/plan/${planId}/additional-requirement/${requirementId}`
