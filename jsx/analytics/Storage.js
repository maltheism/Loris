'use strict';

export const Cookies = require('js-cookie');

/**
 * Storage for client.js
 */
class Storage {
  /**
   * constructor initialize:
   * ( config: {uuid, token} ).
   */
  constructor() {
    this.socket = {
      config: {
        uuid: Cookies.get('loris-gland-uuid')
          ? Cookies.get('loris-gland-uuid') : '',
        token: Cookies.get('loris-gland-token')
          ? Cookies.get('loris-gland-token') : '',
      },
    };
  }
}

export const storage = new Storage();

/**
 * Save Uuid and Token to storage.
 */
Storage.prototype.saveUuidAndToken = function saveUuidAndToken() {
  Cookies.set('loris-gland-uuid', storage.socket.config.uuid, {
    secure: window.origin.includes('https://'),
    expires: 7,
  }); // expires in 7 days
  Cookies.set('loris-gland-token', storage.socket.config.token, {
    secure: window.origin.includes('https://'),
    expires: 7,
  }); // expires in 7 days
};
