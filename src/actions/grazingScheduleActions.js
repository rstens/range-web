import * as actionTypes from '../constants/actionTypes';

export const addGrazingSchedule = payload => (
  {
    type: actionTypes.ADD_GRAZING_SCHEDULE,
    payload,
  }
);

export const updateGrazingSchedule = payload => (
  {
    type: actionTypes.UPDATE_GRAZING_SCHEDULE,
    payload,
  }
);

export const deleteGrazingSchedule = payload => (
  {
    type: actionTypes.DELETE_GRAZING_SCHEDULE,
    payload,
  }
);
