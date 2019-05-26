'use strict';

/**
 * Exported to htdocs/js/client.js
 */

import io from 'socket.io-client';
import {storage} from './Storage';

/**
 * Client (websocket bridge)
 */
class Client {
  /**
   * constructor initialize: (status, credentials, socket).
   */
  constructor() {
    this.status = {
      online: false,
    };
    this.credentials = {
      uuid: '',
      token: '',
    };
    this.socket = null;
  }
}

/**
 * Additional socket listeners.
 */
Client.prototype.setupSocketListeners = function setupSocketListeners() {
  client.socket.on('analytics', function(data) {
    // todo
  });
};

/**
 * Gets all the System Details.
 */
Client.prototype.getSystemDetails = function getSystemDetails() {
  /**
   * Handles loading finished.
   * @param {function} fn
   */
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  // ready() fires when page loaded.
  ready(function() {
    const info = {
      window: {
        origin: window.origin,
        path: window.location.pathname,
        referrer: document.referrer,
        history: history.length,
      },
      browser: {
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        product: navigator.product,
        userAgent: navigator.userAgent,
        language: navigator.language,
        online: navigator.onLine,
        platform: navigator.platform,
        java: navigator.javaEnabled(),
      },
      dimensions: {
        screen: {
          width: screen.width,
          height: screen.height,
        },
        document: {
          width: document.body.clientWidth,
          height: document.body.clientHeight,
        },
        inner: {
          width: innerWidth,
          height: innerHeight,
        },
        available: {
          width: screen.availWidth,
          height: screen.availHeight,
        },
        depth: {
          color: screen.colorDepth,
          pixel: screen.pixelDepth,
        },
      },
      timezone: (new Date()).getTimezoneOffset() / 60,
      timestamp: new Date(),
    };
    // emit to analytics.
    client.socket.emit('track_me', info);
  });
};

/**
 * Authentication with socket.io server.
 * @param {function} cb
 */
Client.prototype.authentication = function authentication(cb) {
  storage.saveUuidAndToken();
  // Create websocket for connecting.
  let websocket = null;
  if (window.origin.includes('https://')) {
    // Production
    websocket = io.connect('https://xn--alize-esa.com', {
      secure: true,
      port: 80,
    });
  } else {
    // Development
    websocket = io.connect('http://xn--alize-esa.com', {
      transports: ['websocket', 'polling'],
    });
  }
  websocket.on('connect', function() {
    websocket.on('client_identity', function(data) {
      console.log('Websocket connecting to server... \n[INFO] Socket id: ' +
        data.socketID + '\n[INFO] Client uuid: ' + storage.socket.config.uuid);
      if (storage.socket.config.uuid && storage.socket.config.token) { // token exists, emit client_identity
        websocket.emit('client_identity', {
          socketID: data.socketID,
          uuid: storage.socket.config.uuid,
          token: storage.socket.config.token,
        });
      } else if (storage.socket.config.token === '') { // no token, emit client_register
        websocket.emit('client_register', storage.socket.config,
          function(ident) {
            console.log('[client_register] :\n');
            storage.socket.config.uuid !== ident.uuid ?
              console.log(
                '[INFO] uuid: ' + ident.uuid + '\n[INFO] token: ' + ident.token
              ) : console.log('[INFO] token: ' + ident.token);
            storage.socket.config = ident;
            storage.saveUuidAndToken();
            websocket.emit('client_identity', {
              socketID: data.socketID,
              uuid: storage.socket.config.uuid,
              token: storage.socket.config.token,
            });
          }
        );
      }
    });

    websocket.on('client_ready', function(data) {
      console.log('[client_ready]\n');
      return cb(null, websocket);
    });

    websocket.on('client_error', function(data) {
      console.log('[client_error]\n');
      return cb(new Error('Authentication Error'));
    });
  });
};

/**
 * Initiate client and proceed to authenticate.
 */
const client = new Client();
client.authentication(function(error, websocket) {
  if (error) throw error;
  client.socket = websocket;
  client.credentials = storage.socket.config;
  client.setupSocketListeners();
  client.getSystemDetails();
});
