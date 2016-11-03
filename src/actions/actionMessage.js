export const TYPES = {};
TYPES.SHOW_MESSAGE = 'SHOW_MESSAGE';
TYPES.HIDE_MESSAGE = 'HIDE_MESSAGE';
export let showMessage = message => {
  return {
    type: TYPES.SHOW_MESSAGE,
    message: message
  };
};
export let hideMessage = () => {
  return {
    type: TYPES.HIDE_MESSAGE
  };
};
