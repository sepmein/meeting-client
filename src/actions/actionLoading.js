/**
 * Created by Spencer on 2016/10/10.
 */

export let types = {
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING'
};

export const startLoading = () => {
  return {
    type: types.START_LOADING
  };
};

export const stopLoading = () => {
  return {
    type: types.STOP_LOADING
  };
};
