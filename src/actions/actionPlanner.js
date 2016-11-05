/**
 * Created by Spencer on 2016/11/4.
 */
export const TYPES = {};
TYPES.ADD_PLAN = 'ADD_PLAN';

export let addPlan = plan => {
  return {
    type: TYPES.ADD_PLAN,
    plan
  };
};
