/**
 * Created by Spencer on 16/2/15.
 */
/**
 * request get
 * @param {String} url - url end point
 * @return {Promise} promise - resolve json result / reject error
 * */
export function get(url) {
  let token = localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(json => {
        resolve(json);
      })
      .catch(e => {
        console.log(e);
        reject(e);
      });
  });
}

/**
 * request post
 * @param {String} url - url of the endpoint
 * @param {Object} args - post arguments
 * @return {Promise} promise - resolve json result / reject error
 * */
export function post(url, args) {
  let token = localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      },
      body: JSON.stringify(args)
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(json => {
        resolve(json);
      })
      .catch(e => {
        reject(e);
      });
  });
}

/**
 * request put
 * @param {String} url - url of the endpoint
 * @param {Object} args - post arguments
 * @return {Promise} promise - resolve json result / reject error
 * */
export function put(url, args) {
  let token = localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      },
      body: args
    })
      .then(response => {
        return response;
      })
      .then(response => {
        resolve(response);
      })
      .catch(e => {
        reject(e);
      });
  });
}

/**
 * local method logout, delete localStorage token
 * @return {Promise} promise - always resolve true
 * */
export function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return Promise.resolve(true);
}

/**
 * check the status of the response
 * @param {Object} response - the response of the request
 * @return {Object} response - the response
 * @throws {Error} error - an Error include error text
 * */
function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  throw new Error(response.statusText);
}

/**
 * get json of the response
 * @param {Object} response - the response
 * @return {Object} json - JSON results of the response
 * */
function parseJSON(response) {
  return response.json();
}
