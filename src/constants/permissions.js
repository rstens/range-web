import {
  BASIC_INFORMATION,
  LIVESTOCK_ID,
  PASTURES,
  PLANT_COMMUNITY,
  MONITORING_AREAS,
  RANGE_READINESS,
  STUBBLE_HEIGHT,
  SHRUB_USE,
  MINISTER_ISSUES,
  SCHEDULE,
  INVASIVE_PLANTS,
  MANAGEMENT_CONSIDERAIONTS
} from './fields'

const permissions = {
  myra_range_officer: [
    BASIC_INFORMATION.RANGE_NAME,
    BASIC_INFORMATION.ALTERNATE_BUSINESS_NAME,
    BASIC_INFORMATION.PLAN_START_DATE,
    BASIC_INFORMATION.PLAN_END_DATE,
    LIVESTOCK_ID.OWNER,
    LIVESTOCK_ID.TYPE,
    LIVESTOCK_ID.LOCATION,
    LIVESTOCK_ID.DESCRIPTION,
    LIVESTOCK_ID.IMAGE,
    LIVESTOCK_ID.ACCEPTED,
    PASTURES.NAME,
    PASTURES.ALLOWABLE_AUMS,
    PASTURES.PLD,
    PASTURES.GRACE_DAYS,
    PASTURES.NOTES,
    PLANT_COMMUNITY.APPROVED,
    PLANT_COMMUNITY.NAME,
    PLANT_COMMUNITY.ASPECT,
    PLANT_COMMUNITY.ELEVATION,
    PLANT_COMMUNITY.DESCRIPTION,
    PLANT_COMMUNITY.COMMUNITY_URL,
    PLANT_COMMUNITY.PURPOSE_OF_ACTION,
    PLANT_COMMUNITY.ACTIONS.NAME,
    PLANT_COMMUNITY.ACTIONS.DETAIL,
    PLANT_COMMUNITY.ACTIONS.NO_GRAZING_PERIOD,
    MONITORING_AREAS.NAME,
    MONITORING_AREAS.LOCATION,
    MONITORING_AREAS.LATITUDE,
    MONITORING_AREAS.LONGTITUDE,
    MONITORING_AREAS.PURPOSE,
    MONITORING_AREAS.RANGELAND_HEALTH,
    RANGE_READINESS.DATE,
    RANGE_READINESS.INDICATOR_PLANTS,
    RANGE_READINESS.CRITERIA,
    STUBBLE_HEIGHT.INDICATOR_PLANTS,
    STUBBLE_HEIGHT.HEIGHT,
    SHRUB_USE.INDICATOR_PLANTS,
    SHRUB_USE.PERCENT,
    MINISTER_ISSUES.TYPE
  ],
  agreementHolder: [
    SCHEDULE.PASTURE,
    SCHEDULE.TYPE,
    SCHEDULE.ANIMALS,
    SCHEDULE.DATE_IN,
    SCHEDULE.DATE_OUT,
    SCHEDULE.DESCRIPTION,
    MINISTER_ISSUES.ACTIONS.NAME,
    MINISTER_ISSUES.ACTIONS.DETAIL,
    MINISTER_ISSUES.ACTIONS.NO_GRAZING_PERIOD,
    INVASIVE_PLANTS.ITEMS,
    MANAGEMENT_CONSIDERAIONTS.NAME,
    MANAGEMENT_CONSIDERAIONTS.TYPE,
    MANAGEMENT_CONSIDERAIONTS.DESCRIPTION,
    MANAGEMENT_CONSIDERAIONTS.ATTACHMENT
  ]
}

export default permissions
