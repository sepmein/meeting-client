/**
 * Created by Spencer on 2016/10/17.
 */
/**
 * get the key of localStorage
 * @param {String} key - localStorage key
 * @return {String} value - value of the key
 * */
export function get(key) {
  return localStorage.getItem(key);
}
