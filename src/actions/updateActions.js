import * as actionTypes from '../constants/actionTypes';

export const updateZone = payload => (
  {
    type: actionTypes.UPDATE_ZONE,
    payload,
  }
);

export const updateUser = payload => (
  {
    type: actionTypes.UPDATE_USER,
    payload,
  }
);

export const updatePlan = payload => (
  {
    type: actionTypes.UPDATE_PLAN,
    payload,
  }
);
