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
        uuid: Cookies.get('uuid') ? Cookies.get('uuid') : '',
        token: Cookies.get('token') ? Cookies.get('token') : '',
      },
    };
  }
}

export const storage = new Storage();

/**
 * Save Uuid and Token to storage.
 */
Storage.prototype.saveUuidAndToken = function saveUuidAndToken() {
  Cookies.set('uuid', storage.socket.config.uuid, {
    secure: window.origin !== 'http://localhost:5000',
    expires: 7,
  }); // expires in 7 days
  Cookies.set('token', storage.socket.config.token, {
    secure: window.origin !== 'http://localhost:5000',
    expires: 7,
  }); // expires in 7 days
};
