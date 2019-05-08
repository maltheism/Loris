(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["loris-gland"] = factory();
	else
		root["loris-gland"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jsx/analytics/Client.js":
/*!*********************************!*\
  !*** ./jsx/analytics/Client.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Exported to htdocs/js/client.js
 */

var _socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

var _socket2 = _interopRequireDefault(_socket);

var _storage = __webpack_require__(/*! ./storage */ "./jsx/analytics/storage.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Client (websocket bridge)
 */
var Client =
/**
 * constructor initialize: (status, credentials, socket).
 */
function Client() {
  _classCallCheck(this, Client);

  this.status = {
    online: false
  };
  this.credentials = {
    uuid: '',
    token: ''
  };
  this.socket = null;
};

/**
 * Additional socket listeners.
 */


Client.prototype.setupSocketListeners = function setupSocketListeners() {
  client.socket.on('analytics', function (data) {
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
    if (document.readyState !== 'loading') fn();else document.addEventListener('DOMContentLoaded', fn);
  }
  // ready() fires when page loaded.
  ready(function () {
    var info = {
      window: {
        origin: window.origin,
        path: window.location.pathname,
        referrer: document.referrer,
        history: history.length
      },
      browser: {
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        product: navigator.product,
        userAgent: navigator.userAgent,
        language: navigator.language,
        online: navigator.onLine,
        platform: navigator.platform,
        java: navigator.javaEnabled()
      },
      dimensions: {
        screen: {
          width: screen.width,
          height: screen.height
        },
        document: {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        },
        inner: {
          width: innerWidth,
          height: innerHeight
        },
        available: {
          width: screen.availWidth,
          height: screen.availHeight
        },
        depth: {
          color: screen.colorDepth,
          pixel: screen.pixelDepth
        }
      },
      timezone: new Date().getTimezoneOffset() / 60,
      timestamp: new Date()
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
  _storage.storage.saveUuidAndToken();
  // Create websocket for connecting.
  var websocket = null;
  if (window.origin.includes('https://')) {
    // Production
    websocket = _socket2.default.connect('https://35.185.80.170', {
      secure: true,
      port: 80
    });
  } else {
    // Development
    websocket = _socket2.default.connect('localhost:6660', {
      transports: ['websocket', 'polling']
    });
  }
  websocket.on('connect', function () {
    websocket.on('client_identity', function (data) {
      console.log('Websocket connecting to server... \n[INFO] Socket id: ' + data.socketID + '\n[INFO] Client uuid: ' + _storage.storage.socket.config.uuid);
      if (_storage.storage.socket.config.uuid && _storage.storage.socket.config.token) {
        // token exists, emit client_identity
        websocket.emit('client_identity', {
          socketID: data.socketID,
          uuid: _storage.storage.socket.config.uuid,
          token: _storage.storage.socket.config.token
        });
      } else {
        // no token, emit client_register
        websocket.emit('client_register', _storage.storage.socket.config, function (ident) {
          console.log('[client_register] :\n');
          _storage.storage.socket.config.uuid !== ident.uuid ? console.log('[INFO] uuid: ' + ident.uuid + '\n[INFO] token: ' + ident.token) : console.log('[INFO] token: ' + ident.token);
          _storage.storage.socket.config = ident;
          _storage.storage.saveUuidAndToken();
          websocket.emit('client_identity', {
            socketID: data.socketID,
            uuid: _storage.storage.socket.config.uuid,
            token: _storage.storage.socket.config.token
          });
        });
      }
    });

    websocket.on('client_ready', function (data) {
      console.log('[client_ready]\n');
      return cb(null, websocket);
    });

    websocket.on('client_error', function (data) {
      console.log('[client_error]\n');
      return cb(new Error('Authentication Error'));
    });
  });
};

/**
 * Initiate client and proceed to authenticate.
 */
var client = new Client();
client.authentication(function (error, websocket) {
  if (error) throw error;
  client.socket = websocket;
  client.credentials = _storage.storage.socket.config;
  client.setupSocketListeners();
  client.getSystemDetails();
});

/***/ }),

/***/ "./jsx/analytics/Storage.js":
/*!**********************************!*\
  !*** ./jsx/analytics/Storage.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = exports.Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

/**
 * Storage for client.js
 */

var Storage =
/**
 * constructor initialize:
 * ( config: {uuid, token} ).
 */
function Storage() {
  _classCallCheck(this, Storage);

  this.socket = {
    config: {
      uuid: Cookies.get('loris-gland-uuid') ? Cookies.get('loris-gland-uuid') : '',
      token: Cookies.get('loris-gland-token') ? Cookies.get('loris-gland-token') : ''
    }
  };
};

var storage = exports.storage = new Storage();

/**
 * Save Uuid and Token to storage.
 */
Storage.prototype.saveUuidAndToken = function saveUuidAndToken() {
  Cookies.set('loris-gland-uuid', storage.socket.config.uuid, {
    secure: window.origin.includes('https://'),
    expires: 7
  }); // expires in 7 days
  Cookies.set('loris-gland-token', storage.socket.config.token, {
    secure: window.origin.includes('https://'),
    expires: 7
  }); // expires in 7 days
};

/***/ }),

/***/ "./jsx/analytics/storage.js":
/*!**********************************!*\
  !*** ./jsx/analytics/storage.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = exports.Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

/**
 * Storage for client.js
 */

var Storage =
/**
 * constructor initialize:
 * ( config: {uuid, token} ).
 */
function Storage() {
  _classCallCheck(this, Storage);

  this.socket = {
    config: {
      uuid: Cookies.get('loris-gland-uuid') ? Cookies.get('loris-gland-uuid') : '',
      token: Cookies.get('loris-gland-token') ? Cookies.get('loris-gland-token') : ''
    }
  };
};

var storage = exports.storage = new Storage();

/**
 * Save Uuid and Token to storage.
 */
Storage.prototype.saveUuidAndToken = function saveUuidAndToken() {
  Cookies.set('loris-gland-uuid', storage.socket.config.uuid, {
    secure: window.origin.includes('https://'),
    expires: 7
  }); // expires in 7 days
  Cookies.set('loris-gland-token', storage.socket.config.token, {
    secure: window.origin.includes('https://'),
    expires: 7
  }); // expires in 7 days
};

/***/ }),

/***/ "./node_modules/after/index.js":
/*!*************************************!*\
  !*** ./node_modules/after/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = after;

function after(count, callback, err_cb) {
    var bail = false;
    err_cb = err_cb || noop;
    proxy.count = count;

    return count === 0 ? callback() : proxy;

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times');
        }
        --proxy.count;

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true;
            callback(err);
            // future error callbacks will go to error handler
            callback = err_cb;
        } else if (proxy.count === 0 && !bail) {
            callback(null, result);
        }
    }
}

function noop() {}

/***/ }),

/***/ "./node_modules/arraybuffer.slice/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arraybuffer.slice/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function (arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) {
    return arraybuffer.slice(start, end);
  }

  if (start < 0) {
    start += bytes;
  }
  if (end < 0) {
    end += bytes;
  }
  if (end > bytes) {
    end = bytes;
  }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function () {
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function (min) {
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function (max) {
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function () {
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];

      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})();

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;

  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;

  return [validLen, placeHoldersLen];
}

// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

  var curByte = 0;

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

  for (var i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "./node_modules/blob/index.js":
/*!************************************!*\
  !*** ./node_modules/blob/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : false;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = function () {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch (e) {
    return false;
  }
}();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && function () {
  try {
    var b = new Blob([new Uint8Array([1, 2])]);
    return b.size === 2;
  } catch (e) {
    return false;
  }
}();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function (chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function (part) {
    bb.append(part);
  });

  return options.type ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
};

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = function () {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
}();

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/component-bind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function (obj, fn) {
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function () {
    return fn.apply(obj, args.concat(slice.call(arguments)));
  };
};

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/component-inherit/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-inherit/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (a, b) {
  var fn = function fn() {};
  fn.prototype = b.prototype;
  a.prototype = new fn();
  a.prototype.constructor = a;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Module dependencies.
 */

var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:socket');
var index = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure : typeof location !== 'undefined' && 'https:' === location.protocol;

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname || (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port ? location.port : this.secure ? 443 : 80);
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // detect ReactNative environment
  this.isReactNative = typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';

  // other options for Node.js or ReactNative client
  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
Socket.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
Socket.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void 0,
    isReactNative: this.isReactNative
  });

  return transport;
};

function clone(obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport.on('drain', function () {
    self.onDrain();
  }).on('packet', function (packet) {
    self.onPacket(packet);
  }).on('error', function (e) {
    self.onError(e);
  }).on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen() {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose() {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose() {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade(to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup() {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || self.pingInterval + self.pingTimeout);
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport(opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // results of ReactNative environment detection
  this.isReactNative = opts.isReactNative;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");
var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");
var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Module requirements.
 */

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty() {}

/**
 * Until https://github.com/tc39/proposal-global is shipped.
 */
function glob() {
  return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
}

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling(opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    var global = glob();
    callbacks = global.___eio = global.___eio || [];
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete() {
    initIframe();
    fn();
  }

  function initIframe() {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global attachEvent */

/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty() {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR(opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = typeof location !== 'undefined' && opts.hostname !== location.hostname || port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request(opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (self.supportsBinary && contentType === 'application/octet-stream') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = function () {
  var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
}();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling(opts) {
  var forceBase64 = opts && opts.forceBase64;
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause() {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function callback(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close() {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function callbackfn() {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
} else {
  try {
    NodeWebSocket = __webpack_require__(/*! ws */ 1);
  } catch (e) {}
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocketImpl = BrowserWebSocket || NodeWebSocket;

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts) {
  var forceBase64 = opts && opts.forceBase64;
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? protocols ? new WebSocketImpl(uri, protocols) : new WebSocketImpl(uri) : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done() {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new self[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) {}
  }
};

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/engine.io-client/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var keys = __webpack_require__(/*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js");
var hasBinary = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");
var sliceBuffer = __webpack_require__(/*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js");
var after = __webpack_require__(/*! after */ "./node_modules/after/index.js");
var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");

var base64encoder;
if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
  open: 0 // non-ws
  , close: 1 // non-ws
  , ping: 2,
  pong: 3,
  message: 4,
  upgrade: 5,
  noop: 6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(/*! blob */ "./node_modules/blob/index.js");

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);
};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i + 1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function () {
    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function (packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function () {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function (msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function (message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function eachWithIndex(i, el, cb) {
    each(el, function (error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '',
      n,
      msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || length != (n = Number(length))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }
};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function (packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function (err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function (acc, p) {
      var len;
      if (typeof p === 'string') {
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function (p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) {
        // not true binary
        resultArray[bufferIndex++] = 0;
      } else {
        // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function (packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1;; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function (buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys(obj) {
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/utf8.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! https://mths.be/utf8js v2.1.2 by @mathias */

var stringFromCharCode = String.fromCharCode;

// Taken from https://mths.be/punycode
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	var value;
	var extra;
	while (counter < length) {
		value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// high surrogate, and there is a next character
			extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) {
				// low surrogate
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// unmatched surrogate; only append this code unit, in case the next
				// code unit is the high surrogate of a surrogate pair
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

// Taken from https://mths.be/punycode
function ucs2encode(array) {
	var length = array.length;
	var index = -1;
	var value;
	var output = '';
	while (++index < length) {
		value = array[index];
		if (value > 0xFFFF) {
			value -= 0x10000;
			output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
			value = 0xDC00 | value & 0x3FF;
		}
		output += stringFromCharCode(value);
	}
	return output;
}

function checkScalarValue(codePoint, strict) {
	if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
		if (strict) {
			throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
		}
		return false;
	}
	return true;
}
/*--------------------------------------------------------------------------*/

function createByte(codePoint, shift) {
	return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
}

function encodeCodePoint(codePoint, strict) {
	if ((codePoint & 0xFFFFFF80) == 0) {
		// 1-byte sequence
		return stringFromCharCode(codePoint);
	}
	var symbol = '';
	if ((codePoint & 0xFFFFF800) == 0) {
		// 2-byte sequence
		symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
	} else if ((codePoint & 0xFFFF0000) == 0) {
		// 3-byte sequence
		if (!checkScalarValue(codePoint, strict)) {
			codePoint = 0xFFFD;
		}
		symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
		symbol += createByte(codePoint, 6);
	} else if ((codePoint & 0xFFE00000) == 0) {
		// 4-byte sequence
		symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
		symbol += createByte(codePoint, 12);
		symbol += createByte(codePoint, 6);
	}
	symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
	return symbol;
}

function utf8encode(string, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	var codePoints = ucs2decode(string);
	var length = codePoints.length;
	var index = -1;
	var codePoint;
	var byteString = '';
	while (++index < length) {
		codePoint = codePoints[index];
		byteString += encodeCodePoint(codePoint, strict);
	}
	return byteString;
}

/*--------------------------------------------------------------------------*/

function readContinuationByte() {
	if (byteIndex >= byteCount) {
		throw Error('Invalid byte index');
	}

	var continuationByte = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	if ((continuationByte & 0xC0) == 0x80) {
		return continuationByte & 0x3F;
	}

	// If we end up here, it’s not a continuation byte
	throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
	var byte1;
	var byte2;
	var byte3;
	var byte4;
	var codePoint;

	if (byteIndex > byteCount) {
		throw Error('Invalid byte index');
	}

	if (byteIndex == byteCount) {
		return false;
	}

	// Read first byte
	byte1 = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	// 1-byte sequence (no continuation bytes)
	if ((byte1 & 0x80) == 0) {
		return byte1;
	}

	// 2-byte sequence
	if ((byte1 & 0xE0) == 0xC0) {
		byte2 = readContinuationByte();
		codePoint = (byte1 & 0x1F) << 6 | byte2;
		if (codePoint >= 0x80) {
			return codePoint;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 3-byte sequence (may include unpaired surrogates)
	if ((byte1 & 0xF0) == 0xE0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;
		if (codePoint >= 0x0800) {
			return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 4-byte sequence
	if ((byte1 & 0xF8) == 0xF0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		byte4 = readContinuationByte();
		codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;
		if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
			return codePoint;
		}
	}

	throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	byteArray = ucs2decode(byteString);
	byteCount = byteArray.length;
	byteIndex = 0;
	var codePoints = [];
	var tmp;
	while ((tmp = decodeSymbol(strict)) !== false) {
		codePoints.push(tmp);
	}
	return ucs2encode(codePoints);
}

module.exports = {
	version: '2.1.2',
	encode: utf8encode,
	decode: utf8decode
};

/***/ }),

/***/ "./node_modules/has-binary2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-binary2/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/has-binary2/node_modules/isarray/index.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if (typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj) || typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/has-binary2/node_modules/isarray/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/has-binary2/node_modules/isarray/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = [].indexOf;

module.exports = function (arr, obj) {
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (( false ? undefined : _typeof(exports)) === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
})(function () {
	function extend() {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[i];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init(converter) {
		function api(key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return document.cookie = key + '=' + value + stringifiedAttributes;
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
});

/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Module dependencies.
 */

var url = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/lib/url.js");
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");
var Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if ((typeof uri === 'undefined' ? 'undefined' : _typeof(uri)) === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
exports.Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");

/***/ }),

/***/ "./node_modules/socket.io-client/lib/manager.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/lib/manager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Module dependencies.
 */

var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");
var Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");
var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:manager');
var indexOf = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");
var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : nsp + '#') + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function destroy() {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else {
    // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close = Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function destroy() {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/on.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-client/lib/on.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function destroy() {
      obj.removeListener(ev, fn);
    }
  };
}

/***/ }),

/***/ "./node_modules/socket.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Module dependencies.
 */

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var toArray = __webpack_require__(/*! to-array */ "./node_modules/to-array/index.js");
var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:socket');
var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
var hasBin = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open = Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = _typeof(this.query) === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({ type: parser.CONNECT, query: query });
    } else {
      this.packet({ type: parser.CONNECT });
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';

  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close = Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};

/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */

Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/url.js":
/*!**************************************************!*\
  !*** ./node_modules/socket.io-client/lib/url.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || typeof location !== 'undefined' && location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);

  return obj;
}

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/socket.io-client/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "./node_modules/socket.io-parser/binary.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-parser/binary.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(/*! isarray */ "./node_modules/socket.io-parser/node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function (packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return { packet: pack, buffers: buffers };
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function (packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function (data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function () {
        // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        } else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if (! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) {
      // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !isBuf(obj)) {
      // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/***/ }),

/***/ "./node_modules/socket.io-parser/index.js":
/*!************************************************!*\
  !*** ./node_modules/socket.io-parser/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-parser/node_modules/debug/src/browser.js")('socket.io-parser');
var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var binary = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/binary.js");
var isArray = __webpack_require__(/*! isarray */ "./node_modules/socket.io-parser/node_modules/isarray/index.js");
var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function (obj, callback) {
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch (e) {
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function (obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) {
      // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else {
      // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) {
    // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) {
        // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function () {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function (binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) {
    // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function () {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}

/***/ }),

/***/ "./node_modules/socket.io-parser/is-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-parser/is-buffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

module.exports = isBuf;

var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return withNativeBuffer && Buffer.isBuffer(obj) || withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/socket.io-parser/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/isarray/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/isarray/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/to-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-array/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toArray;

function toArray(list, index) {
    var array = [];

    index = index || 0;

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i];
    }

    return array;
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) {
  map[alphabet[i]] = i;
} //
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./jsx/analytics/Client.js ./jsx/analytics/Storage.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./jsx/analytics/Client.js */"./jsx/analytics/Client.js");
module.exports = __webpack_require__(/*! ./jsx/analytics/Storage.js */"./jsx/analytics/Storage.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9qc3gvYW5hbHl0aWNzL0NsaWVudC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL2pzeC9hbmFseXRpY3MvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL2pzeC9hbmFseXRpY3Mvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9hcnJheWJ1ZmZlci5zbGljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2Jsb2IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1pbmhlcml0L2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIveG1saHR0cHJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIva2V5cy5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi91dGY4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2hhcy1iaW5hcnkyL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2hhcy1iaW5hcnkyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2hhcy1jb3JzL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvaW5kZXhvZi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3BhcnNlcXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvb24uanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvc29ja2V0LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL3VybC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2lzLWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy90by1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkNsaWVudCIsInN0YXR1cyIsIm9ubGluZSIsImNyZWRlbnRpYWxzIiwidXVpZCIsInRva2VuIiwic29ja2V0IiwicHJvdG90eXBlIiwic2V0dXBTb2NrZXRMaXN0ZW5lcnMiLCJjbGllbnQiLCJvbiIsImRhdGEiLCJnZXRTeXN0ZW1EZXRhaWxzIiwicmVhZHkiLCJmbiIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbmZvIiwid2luZG93Iiwib3JpZ2luIiwicGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZWZlcnJlciIsImhpc3RvcnkiLCJsZW5ndGgiLCJicm93c2VyIiwiYXBwTmFtZSIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJwcm9kdWN0IiwidXNlckFnZW50IiwibGFuZ3VhZ2UiLCJvbkxpbmUiLCJwbGF0Zm9ybSIsImphdmEiLCJqYXZhRW5hYmxlZCIsImRpbWVuc2lvbnMiLCJzY3JlZW4iLCJ3aWR0aCIsImhlaWdodCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImlubmVyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYXZhaWxhYmxlIiwiYXZhaWxXaWR0aCIsImF2YWlsSGVpZ2h0IiwiZGVwdGgiLCJjb2xvciIsImNvbG9yRGVwdGgiLCJwaXhlbCIsInBpeGVsRGVwdGgiLCJ0aW1lem9uZSIsIkRhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsInRpbWVzdGFtcCIsImVtaXQiLCJhdXRoZW50aWNhdGlvbiIsImNiIiwic3RvcmFnZSIsInNhdmVVdWlkQW5kVG9rZW4iLCJ3ZWJzb2NrZXQiLCJpbmNsdWRlcyIsImlvIiwiY29ubmVjdCIsInNlY3VyZSIsInBvcnQiLCJ0cmFuc3BvcnRzIiwiY29uc29sZSIsImxvZyIsInNvY2tldElEIiwiY29uZmlnIiwiaWRlbnQiLCJFcnJvciIsImVycm9yIiwiQ29va2llcyIsInJlcXVpcmUiLCJTdG9yYWdlIiwiZ2V0Iiwic2V0IiwiZXhwaXJlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhZnRlciIsImNvdW50IiwiY2FsbGJhY2siLCJlcnJfY2IiLCJiYWlsIiwibm9vcCIsInByb3h5IiwiZXJyIiwicmVzdWx0IiwiYXJyYXlidWZmZXIiLCJzdGFydCIsImVuZCIsImJ5dGVzIiwiYnl0ZUxlbmd0aCIsInNsaWNlIiwiQXJyYXlCdWZmZXIiLCJhYnYiLCJVaW50OEFycmF5IiwiaSIsImlpIiwiYnVmZmVyIiwiQmFja29mZiIsIm9wdHMiLCJtcyIsIm1pbiIsIm1heCIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwiZHVyYXRpb24iLCJNYXRoIiwicG93IiwicmFuZCIsInJhbmRvbSIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJjaGFycyIsImxvb2t1cCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJsZW4iLCJiYXNlNjQiLCJzdWJzdHJpbmciLCJkZWNvZGUiLCJidWZmZXJMZW5ndGgiLCJwIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJ0b0J5dGVBcnJheSIsImZyb21CeXRlQXJyYXkiLCJyZXZMb29rdXAiLCJBcnIiLCJBcnJheSIsImNvZGUiLCJnZXRMZW5zIiwiYjY0IiwidmFsaWRMZW4iLCJpbmRleE9mIiwicGxhY2VIb2xkZXJzTGVuIiwibGVucyIsIl9ieXRlTGVuZ3RoIiwidG1wIiwiYXJyIiwiY3VyQnl0ZSIsInRyaXBsZXRUb0Jhc2U2NCIsIm51bSIsImVuY29kZUNodW5rIiwidWludDgiLCJvdXRwdXQiLCJwdXNoIiwiam9pbiIsImV4dHJhQnl0ZXMiLCJwYXJ0cyIsIm1heENodW5rTGVuZ3RoIiwibGVuMiIsIkJsb2JCdWlsZGVyIiwiV2ViS2l0QmxvYkJ1aWxkZXIiLCJNU0Jsb2JCdWlsZGVyIiwiTW96QmxvYkJ1aWxkZXIiLCJibG9iU3VwcG9ydGVkIiwiYSIsIkJsb2IiLCJzaXplIiwiZSIsImJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyIsImIiLCJibG9iQnVpbGRlclN1cHBvcnRlZCIsImFwcGVuZCIsImdldEJsb2IiLCJtYXBBcnJheUJ1ZmZlclZpZXdzIiwiYXJ5IiwibWFwIiwiY2h1bmsiLCJidWYiLCJjb3B5IiwiYnl0ZU9mZnNldCIsIkJsb2JCdWlsZGVyQ29uc3RydWN0b3IiLCJvcHRpb25zIiwiYmIiLCJmb3JFYWNoIiwicGFydCIsInR5cGUiLCJCbG9iQ29uc3RydWN0b3IiLCJ1bmRlZmluZWQiLCJpZWVlNzU0IiwiaXNBcnJheSIsIkJ1ZmZlciIsIlNsb3dCdWZmZXIiLCJJTlNQRUNUX01BWF9CWVRFUyIsIlRZUEVEX0FSUkFZX1NVUFBPUlQiLCJnbG9iYWwiLCJ0eXBlZEFycmF5U3VwcG9ydCIsImtNYXhMZW5ndGgiLCJfX3Byb3RvX18iLCJmb28iLCJzdWJhcnJheSIsImNyZWF0ZUJ1ZmZlciIsInRoYXQiLCJSYW5nZUVycm9yIiwiYXJnIiwiZW5jb2RpbmdPck9mZnNldCIsImFsbG9jVW5zYWZlIiwiZnJvbSIsInBvb2xTaXplIiwiX2F1Z21lbnQiLCJ2YWx1ZSIsIlR5cGVFcnJvciIsImZyb21BcnJheUJ1ZmZlciIsImZyb21TdHJpbmciLCJmcm9tT2JqZWN0IiwiU3ltYm9sIiwic3BlY2llcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiYXNzZXJ0U2l6ZSIsImFsbG9jIiwiZmlsbCIsImVuY29kaW5nIiwiY2hlY2tlZCIsImFsbG9jVW5zYWZlU2xvdyIsInN0cmluZyIsImlzRW5jb2RpbmciLCJhY3R1YWwiLCJ3cml0ZSIsImZyb21BcnJheUxpa2UiLCJhcnJheSIsIm9iaiIsImlzQnVmZmVyIiwiaXNuYW4iLCJ0b1N0cmluZyIsIl9pc0J1ZmZlciIsImNvbXBhcmUiLCJ4IiwieSIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwiY29uY2F0IiwibGlzdCIsInBvcyIsImlzVmlldyIsImxvd2VyZWRDYXNlIiwidXRmOFRvQnl0ZXMiLCJiYXNlNjRUb0J5dGVzIiwic2xvd1RvU3RyaW5nIiwiaGV4U2xpY2UiLCJ1dGY4U2xpY2UiLCJhc2NpaVNsaWNlIiwibGF0aW4xU2xpY2UiLCJiYXNlNjRTbGljZSIsInV0ZjE2bGVTbGljZSIsInN3YXAiLCJuIiwibSIsInN3YXAxNiIsInN3YXAzMiIsInN3YXA2NCIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXF1YWxzIiwiaW5zcGVjdCIsInN0ciIsIm1hdGNoIiwidGFyZ2V0IiwidGhpc1N0YXJ0IiwidGhpc0VuZCIsInRoaXNDb3B5IiwidGFyZ2V0Q29weSIsImJpZGlyZWN0aW9uYWxJbmRleE9mIiwidmFsIiwiZGlyIiwiaXNOYU4iLCJhcnJheUluZGV4T2YiLCJjYWxsIiwibGFzdEluZGV4T2YiLCJpbmRleFNpemUiLCJhcnJMZW5ndGgiLCJ2YWxMZW5ndGgiLCJyZWFkIiwicmVhZFVJbnQxNkJFIiwiZm91bmRJbmRleCIsImZvdW5kIiwiaiIsImhleFdyaXRlIiwib2Zmc2V0IiwiTnVtYmVyIiwicmVtYWluaW5nIiwic3RyTGVuIiwicGFyc2VkIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJ1dGY4V3JpdGUiLCJibGl0QnVmZmVyIiwiYXNjaWlXcml0ZSIsImFzY2lpVG9CeXRlcyIsImxhdGluMVdyaXRlIiwiYmFzZTY0V3JpdGUiLCJ1Y3MyV3JpdGUiLCJ1dGYxNmxlVG9CeXRlcyIsImlzRmluaXRlIiwidG9KU09OIiwiX2FyciIsInJlcyIsImZpcnN0Qnl0ZSIsImNvZGVQb2ludCIsImJ5dGVzUGVyU2VxdWVuY2UiLCJzZWNvbmRCeXRlIiwidGhpcmRCeXRlIiwiZm91cnRoQnl0ZSIsInRlbXBDb2RlUG9pbnQiLCJkZWNvZGVDb2RlUG9pbnRzQXJyYXkiLCJNQVhfQVJHVU1FTlRTX0xFTkdUSCIsImNvZGVQb2ludHMiLCJmcm9tQ2hhckNvZGUiLCJyZXQiLCJvdXQiLCJ0b0hleCIsIm5ld0J1ZiIsInNsaWNlTGVuIiwiY2hlY2tPZmZzZXQiLCJleHQiLCJyZWFkVUludExFIiwibm9Bc3NlcnQiLCJtdWwiLCJyZWFkVUludEJFIiwicmVhZFVJbnQ4IiwicmVhZFVJbnQxNkxFIiwicmVhZFVJbnQzMkxFIiwicmVhZFVJbnQzMkJFIiwicmVhZEludExFIiwicmVhZEludEJFIiwicmVhZEludDgiLCJyZWFkSW50MTZMRSIsInJlYWRJbnQxNkJFIiwicmVhZEludDMyTEUiLCJyZWFkSW50MzJCRSIsInJlYWRGbG9hdExFIiwicmVhZEZsb2F0QkUiLCJyZWFkRG91YmxlTEUiLCJyZWFkRG91YmxlQkUiLCJjaGVja0ludCIsIndyaXRlVUludExFIiwibWF4Qnl0ZXMiLCJ3cml0ZVVJbnRCRSIsIndyaXRlVUludDgiLCJvYmplY3RXcml0ZVVJbnQxNiIsImxpdHRsZUVuZGlhbiIsIndyaXRlVUludDE2TEUiLCJ3cml0ZVVJbnQxNkJFIiwib2JqZWN0V3JpdGVVSW50MzIiLCJ3cml0ZVVJbnQzMkxFIiwid3JpdGVVSW50MzJCRSIsIndyaXRlSW50TEUiLCJsaW1pdCIsInN1YiIsIndyaXRlSW50QkUiLCJ3cml0ZUludDgiLCJ3cml0ZUludDE2TEUiLCJ3cml0ZUludDE2QkUiLCJ3cml0ZUludDMyTEUiLCJ3cml0ZUludDMyQkUiLCJjaGVja0lFRUU3NTQiLCJ3cml0ZUZsb2F0Iiwid3JpdGVGbG9hdExFIiwid3JpdGVGbG9hdEJFIiwid3JpdGVEb3VibGUiLCJ3cml0ZURvdWJsZUxFIiwid3JpdGVEb3VibGVCRSIsInRhcmdldFN0YXJ0IiwiSU5WQUxJRF9CQVNFNjRfUkUiLCJiYXNlNjRjbGVhbiIsInN0cmluZ3RyaW0iLCJyZXBsYWNlIiwidHJpbSIsInVuaXRzIiwiSW5maW5pdHkiLCJsZWFkU3Vycm9nYXRlIiwiYnl0ZUFycmF5IiwiYyIsImhpIiwibG8iLCJzcmMiLCJkc3QiLCJhcmdzIiwiRW1pdHRlciIsIm1peGluIiwia2V5IiwiZXZlbnQiLCJfY2FsbGJhY2tzIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsInNwbGljZSIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwicGFyc2VyIiwiZGVidWciLCJpbmRleCIsInBhcnNldXJpIiwicGFyc2VxcyIsIlNvY2tldCIsInVyaSIsImhvc3RuYW1lIiwiaG9zdCIsInByb3RvY29sIiwicXVlcnkiLCJhZ2VudCIsInVwZ3JhZGUiLCJmb3JjZUpTT05QIiwianNvbnAiLCJmb3JjZUJhc2U2NCIsImVuYWJsZXNYRFIiLCJ0aW1lc3RhbXBQYXJhbSIsInRpbWVzdGFtcFJlcXVlc3RzIiwidHJhbnNwb3J0T3B0aW9ucyIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsInBvbGljeVBvcnQiLCJyZW1lbWJlclVwZ3JhZGUiLCJiaW5hcnlUeXBlIiwib25seUJpbmFyeVVwZ3JhZGVzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJ0aHJlc2hvbGQiLCJwZngiLCJwYXNzcGhyYXNlIiwiY2VydCIsImNhIiwiY2lwaGVycyIsInJlamVjdFVuYXV0aG9yaXplZCIsImZvcmNlTm9kZSIsImlzUmVhY3ROYXRpdmUiLCJzZWxmIiwiZXh0cmFIZWFkZXJzIiwia2V5cyIsImxvY2FsQWRkcmVzcyIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdJbnRlcnZhbFRpbWVyIiwicGluZ1RpbWVvdXRUaW1lciIsIm9wZW4iLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJUcmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJuYW1lIiwiY2xvbmUiLCJFSU8iLCJ0cmFuc3BvcnQiLCJzaWQiLCJyZXF1ZXN0VGltZW91dCIsInByb3RvY29scyIsIm8iLCJoYXNPd25Qcm9wZXJ0eSIsInNldFRpbWVvdXQiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJwYWNrZXQiLCJvblBhY2tldCIsIm9uRXJyb3IiLCJvbkNsb3NlIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJ1cGdyYWRlTG9zZXNCaW5hcnkiLCJzdXBwb3J0c0JpbmFyeSIsInNlbmQiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImNsZWFudXAiLCJmbHVzaCIsImZyZWV6ZVRyYW5zcG9ydCIsImNsb3NlIiwib25lcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbmNsb3NlIiwib251cGdyYWRlIiwidG8iLCJvbk9wZW4iLCJsIiwib25IYW5kc2hha2UiLCJKU09OIiwicGFyc2UiLCJzZXRQaW5nIiwiZmlsdGVyVXBncmFkZXMiLCJvbkhlYXJ0YmVhdCIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJwaW5nIiwic2VuZFBhY2tldCIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJ3YWl0Rm9yVXBncmFkZSIsImNsZWFudXBBbmRDbG9zZSIsInJlYXNvbiIsImRlc2MiLCJmaWx0ZXJlZFVwZ3JhZGVzIiwiZGVzY3JpcHRpb24iLCJkb09wZW4iLCJkb0Nsb3NlIiwicGFja2V0cyIsIm9uRGF0YSIsImRlY29kZVBhY2tldCIsIlhNTEh0dHBSZXF1ZXN0IiwiWEhSIiwiSlNPTlAiLCJwb2xsaW5nIiwieGhyIiwieGQiLCJ4cyIsImlzU1NMIiwieGRvbWFpbiIsInhzY2hlbWUiLCJQb2xsaW5nIiwiaW5oZXJpdCIsIkpTT05QUG9sbGluZyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiZW1wdHkiLCJnbG9iIiwiX19fZWlvIiwic2NyaXB0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZm9ybSIsImlmcmFtZSIsImRvUG9sbCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsImluc2VydEF0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJpc1VBZ2Vja28iLCJ0ZXN0IiwiZG9Xcml0ZSIsImFyZWEiLCJpZnJhbWVJZCIsImNsYXNzTmFtZSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWV0aG9kIiwic2V0QXR0cmlidXRlIiwiYWN0aW9uIiwiY29tcGxldGUiLCJpbml0SWZyYW1lIiwiaHRtbCIsInN1Ym1pdCIsImF0dGFjaEV2ZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwiUmVxdWVzdCIsInJlcXVlc3QiLCJpc0JpbmFyeSIsInJlcSIsInNlbmRYaHIiLCJwb2xsWGhyIiwiY3JlYXRlIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsImhhc1hEUiIsIm9uTG9hZCIsInJlc3BvbnNlVGV4dCIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJvblN1Y2Nlc3MiLCJmcm9tRXJyb3IiLCJhYm9ydCIsInJlc3BvbnNlIiwiWERvbWFpblJlcXVlc3QiLCJ1bmxvYWRIYW5kbGVyIiwidGVybWluYXRpb25FdmVudCIsInllYXN0IiwiaGFzWEhSMiIsInBvbGwiLCJvblBhdXNlIiwidG90YWwiLCJkZWNvZGVQYXlsb2FkIiwiY2FsbGJhY2tmbiIsImVuY29kZVBheWxvYWQiLCJzY2hlbWEiLCJpcHY2IiwiQnJvd3NlcldlYlNvY2tldCIsIk5vZGVXZWJTb2NrZXQiLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJXZWJTb2NrZXRJbXBsIiwiV1MiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJjaGVjayIsImhlYWRlcnMiLCJ3cyIsInN1cHBvcnRzIiwiYmluYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJvbm1lc3NhZ2UiLCJldiIsImVuY29kZVBhY2tldCIsImRvbmUiLCJoYXNDT1JTIiwiZm9ybWF0QXJncyIsInNhdmUiLCJsb2FkIiwidXNlQ29sb3JzIiwiY2hyb21lIiwibG9jYWwiLCJsb2NhbHN0b3JhZ2UiLCJjb2xvcnMiLCJwcm9jZXNzIiwiZG9jdW1lbnRFbGVtZW50IiwiV2Via2l0QXBwZWFyYW5jZSIsImZpcmVidWciLCJleGNlcHRpb24iLCJ0YWJsZSIsIlJlZ0V4cCIsIiQxIiwiZm9ybWF0dGVycyIsInYiLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwibmFtZXNwYWNlIiwiaHVtYW5pemUiLCJkaWZmIiwibGFzdEMiLCJGdW5jdGlvbiIsIm5hbWVzcGFjZXMiLCJyZW1vdmVJdGVtIiwiciIsImVudiIsIkRFQlVHIiwiZW5hYmxlIiwibG9jYWxTdG9yYWdlIiwiY3JlYXRlRGVidWciLCJjb2VyY2UiLCJkaXNhYmxlIiwiZW5hYmxlZCIsImluc3RhbmNlcyIsIm5hbWVzIiwic2tpcHMiLCJzZWxlY3RDb2xvciIsImhhc2giLCJhYnMiLCJwcmV2VGltZSIsImN1cnIiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImxvZ0ZuIiwiYmluZCIsImRlc3Ryb3kiLCJpbml0Iiwic3BsaXQiLCJpbnN0YW5jZSIsInN0YWNrIiwiaGFzQmluYXJ5Iiwic2xpY2VCdWZmZXIiLCJ1dGY4IiwiYmFzZTY0ZW5jb2RlciIsImlzQW5kcm9pZCIsImlzUGhhbnRvbUpTIiwiZG9udFNlbmRCbG9icyIsInBvbmciLCJwYWNrZXRzbGlzdCIsInV0ZjhlbmNvZGUiLCJlbmNvZGVBcnJheUJ1ZmZlciIsImVuY29kZUJsb2IiLCJlbmNvZGVCYXNlNjRPYmplY3QiLCJlbmNvZGVkIiwic3RyaWN0IiwiZW5jb2RlQmFzZTY0UGFja2V0IiwiY29udGVudEFycmF5IiwicmVzdWx0QnVmZmVyIiwiZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIiLCJmciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImJsb2IiLCJyZWFkQXNEYXRhVVJMIiwiYjY0ZGF0YSIsInR5cGVkIiwiYmFzaWMiLCJidG9hIiwidXRmOGRlY29kZSIsImNoYXJBdCIsImRlY29kZUJhc2U2NFBhY2tldCIsInRyeURlY29kZSIsImFzQXJyYXkiLCJyZXN0IiwiZW5jb2RlUGF5bG9hZEFzQmxvYiIsImVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyIiwic2V0TGVuZ3RoSGVhZGVyIiwiZW5jb2RlT25lIiwiZG9uZUNhbGxiYWNrIiwicmVzdWx0cyIsImVhY2giLCJuZXh0IiwiZWFjaFdpdGhJbmRleCIsImVsIiwiZGVjb2RlUGF5bG9hZEFzQmluYXJ5IiwiY2hyIiwiZW5jb2RlZFBhY2tldHMiLCJ0b3RhbExlbmd0aCIsInJlZHVjZSIsImFjYyIsInJlc3VsdEFycmF5IiwiYnVmZmVySW5kZXgiLCJpc1N0cmluZyIsImFiIiwidmlldyIsImxlblN0ciIsImJpbmFyeUlkZW50aWZpZXIiLCJsZW5ndGhBcnkiLCJidWZmZXJUYWlsIiwiYnVmZmVycyIsInRhaWxBcnJheSIsIm1zZ0xlbmd0aCIsImhhcyIsInN0cmluZ0Zyb21DaGFyQ29kZSIsInVjczJkZWNvZGUiLCJjb3VudGVyIiwiZXh0cmEiLCJ1Y3MyZW5jb2RlIiwiY2hlY2tTY2FsYXJWYWx1ZSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlQnl0ZSIsImVuY29kZUNvZGVQb2ludCIsInN5bWJvbCIsImJ5dGVTdHJpbmciLCJyZWFkQ29udGludWF0aW9uQnl0ZSIsImJ5dGVJbmRleCIsImJ5dGVDb3VudCIsImNvbnRpbnVhdGlvbkJ5dGUiLCJkZWNvZGVTeW1ib2wiLCJieXRlMSIsImJ5dGUyIiwiYnl0ZTMiLCJieXRlNCIsInZlcnNpb24iLCJ3aXRoTmF0aXZlQmxvYiIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsImlzTEUiLCJtTGVuIiwibkJ5dGVzIiwiZUxlbiIsImVNYXgiLCJlQmlhcyIsIm5CaXRzIiwiZCIsInMiLCJOYU4iLCJydCIsIkxOMiIsImZhY3RvcnkiLCJyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIiLCJkZWZpbmUiLCJPbGRDb29raWVzIiwiYXBpIiwibm9Db25mbGljdCIsImV4dGVuZCIsImF0dHJpYnV0ZXMiLCJjb252ZXJ0ZXIiLCJkZWZhdWx0cyIsInNldE1pbGxpc2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInRvVVRDU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwic3RyaW5naWZpZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlTmFtZSIsImNvb2tpZSIsImNvb2tpZXMiLCJyZGVjb2RlIiwianNvbiIsImdldEpTT04iLCJyZW1vdmUiLCJ3aXRoQ29udmVydGVyIiwiaCIsImxvbmciLCJmbXRMb25nIiwiZm10U2hvcnQiLCJleGVjIiwicGFyc2VGbG9hdCIsInJvdW5kIiwicGx1cmFsIiwiY2VpbCIsInFzIiwicXJ5IiwicGFpcnMiLCJwYWlyIiwicmUiLCJzb3VyY2UiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInJ1biIsIm5leHRUaWNrIiwiSXRlbSIsInRpdGxlIiwiYXJndiIsInZlcnNpb25zIiwiYWRkTGlzdGVuZXIiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwidW1hc2siLCJ1cmwiLCJNYW5hZ2VyIiwiY2FjaGUiLCJtYW5hZ2VycyIsInNhbWVOYW1lc3BhY2UiLCJuc3BzIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwiZWlvIiwic3VicyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiY29ubmVjdGluZyIsImxhc3RQaW5nIiwicGFja2V0QnVmZmVyIiwiX3BhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJhdXRvQ29ubmVjdCIsImVtaXRBbGwiLCJuc3AiLCJ1cGRhdGVTb2NrZXRJZHMiLCJnZW5lcmF0ZUlkIiwiZW5naW5lIiwiX3JlY29ubmVjdGlvbiIsIl9yZWNvbm5lY3Rpb25BdHRlbXB0cyIsIl9yZWNvbm5lY3Rpb25EZWxheSIsIl9yYW5kb21pemF0aW9uRmFjdG9yIiwiX3JlY29ubmVjdGlvbkRlbGF5TWF4IiwiX3RpbWVvdXQiLCJtYXliZVJlY29ubmVjdE9uT3BlbiIsInJlY29ubmVjdGluZyIsInJlY29ubmVjdCIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViIiwiZXJyb3JTdWIiLCJ0aW1lciIsIm9ucGluZyIsIm9ucG9uZyIsIm9uZGF0YSIsImFkZCIsIm9uZGVjb2RlZCIsIm9uQ29ubmVjdGluZyIsInByb2Nlc3NQYWNrZXRRdWV1ZSIsInBhY2siLCJzdWJzTGVuZ3RoIiwiZGlzY29ubmVjdCIsImRlbGF5Iiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwidG9BcnJheSIsImhhc0JpbiIsImV2ZW50cyIsImNvbm5lY3RfZXJyb3IiLCJjb25uZWN0X3RpbWVvdXQiLCJyZWNvbm5lY3RfYXR0ZW1wdCIsInJlY29ubmVjdF9mYWlsZWQiLCJyZWNvbm5lY3RfZXJyb3IiLCJpZHMiLCJhY2tzIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJjb25uZWN0ZWQiLCJkaXNjb25uZWN0ZWQiLCJmbGFncyIsInN1YkV2ZW50cyIsIkJJTkFSWV9FVkVOVCIsIkVWRU5UIiwicG9wIiwiQ09OTkVDVCIsIm9ucGFja2V0Iiwicm9vdE5hbWVzcGFjZUVycm9yIiwiRVJST1IiLCJvbmNvbm5lY3QiLCJvbmV2ZW50IiwiQUNLIiwib25hY2siLCJCSU5BUllfQUNLIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsImFjayIsInNlbnQiLCJlbWl0QnVmZmVyZWQiLCJsb2MiLCJocmVmIiwiaXNCdWYiLCJkZWNvbnN0cnVjdFBhY2tldCIsInBhY2tldERhdGEiLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJhdHRhY2htZW50cyIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwibmV3RGF0YSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwicmVtb3ZlQmxvYnMiLCJfcmVtb3ZlQmxvYnMiLCJjdXJLZXkiLCJjb250YWluaW5nT2JqZWN0IiwicGVuZGluZ0Jsb2JzIiwiZmlsZVJlYWRlciIsImJsb2JsZXNzRGF0YSIsInR5cGVzIiwiRVJST1JfUEFDS0VUIiwiZW5jb2RlQXNCaW5hcnkiLCJlbmNvZGVBc1N0cmluZyIsInBheWxvYWQiLCJ0cnlTdHJpbmdpZnkiLCJ3cml0ZUVuY29kaW5nIiwiZGVjb25zdHJ1Y3Rpb24iLCJyZWNvbnN0cnVjdG9yIiwiZGVjb2RlU3RyaW5nIiwiQmluYXJ5UmVjb25zdHJ1Y3RvciIsInJlY29uUGFjayIsInRha2VCaW5hcnlEYXRhIiwidHJ5UGFyc2UiLCJpc1BheWxvYWRWYWxpZCIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJiaW5EYXRhIiwid2l0aE5hdGl2ZUJ1ZmZlciIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsImciLCJldmFsIiwiYWxwaGFiZXQiLCJzZWVkIiwiZGVjb2RlZCIsIm5vdyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7QUFFQTs7O0lBR01BLE07QUFDSjs7O0FBR0Esa0JBQWM7QUFBQTs7QUFDWixPQUFLQyxNQUFMLEdBQWM7QUFDWkMsWUFBUTtBQURJLEdBQWQ7QUFHQSxPQUFLQyxXQUFMLEdBQW1CO0FBQ2pCQyxVQUFNLEVBRFc7QUFFakJDLFdBQU87QUFGVSxHQUFuQjtBQUlBLE9BQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0QsQzs7QUFHSDs7Ozs7QUFHQU4sT0FBT08sU0FBUCxDQUFpQkMsb0JBQWpCLEdBQXdDLFNBQVNBLG9CQUFULEdBQWdDO0FBQ3RFQyxTQUFPSCxNQUFQLENBQWNJLEVBQWQsQ0FBaUIsV0FBakIsRUFBOEIsVUFBU0MsSUFBVCxFQUFlO0FBQzNDO0FBQ0QsR0FGRDtBQUdELENBSkQ7O0FBTUE7OztBQUdBWCxPQUFPTyxTQUFQLENBQWlCSyxnQkFBakIsR0FBb0MsU0FBU0EsZ0JBQVQsR0FBNEI7QUFDOUQ7Ozs7QUFJQSxXQUFTQyxLQUFULENBQWVDLEVBQWYsRUFBbUI7QUFDakIsUUFBSUMsU0FBU0MsVUFBVCxLQUF3QixTQUE1QixFQUF1Q0YsS0FBdkMsS0FDS0MsU0FBU0UsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDSCxFQUE5QztBQUNOO0FBQ0Q7QUFDQUQsUUFBTSxZQUFXO0FBQ2YsUUFBTUssT0FBTztBQUNYQyxjQUFRO0FBQ05DLGdCQUFRRCxPQUFPQyxNQURUO0FBRU5DLGNBQU1GLE9BQU9HLFFBQVAsQ0FBZ0JDLFFBRmhCO0FBR05DLGtCQUFVVCxTQUFTUyxRQUhiO0FBSU5DLGlCQUFTQSxRQUFRQztBQUpYLE9BREc7QUFPWEMsZUFBUztBQUNQQyxpQkFBU0MsVUFBVUQsT0FEWjtBQUVQRSxvQkFBWUQsVUFBVUMsVUFGZjtBQUdQQyxpQkFBU0YsVUFBVUUsT0FIWjtBQUlQQyxtQkFBV0gsVUFBVUcsU0FKZDtBQUtQQyxrQkFBVUosVUFBVUksUUFMYjtBQU1QL0IsZ0JBQVEyQixVQUFVSyxNQU5YO0FBT1BDLGtCQUFVTixVQUFVTSxRQVBiO0FBUVBDLGNBQU1QLFVBQVVRLFdBQVY7QUFSQyxPQVBFO0FBaUJYQyxrQkFBWTtBQUNWQyxnQkFBUTtBQUNOQyxpQkFBT0QsT0FBT0MsS0FEUjtBQUVOQyxrQkFBUUYsT0FBT0U7QUFGVCxTQURFO0FBS1YxQixrQkFBVTtBQUNSeUIsaUJBQU96QixTQUFTMkIsSUFBVCxDQUFjQyxXQURiO0FBRVJGLGtCQUFRMUIsU0FBUzJCLElBQVQsQ0FBY0U7QUFGZCxTQUxBO0FBU1ZDLGVBQU87QUFDTEwsaUJBQU9NLFVBREY7QUFFTEwsa0JBQVFNO0FBRkgsU0FURztBQWFWQyxtQkFBVztBQUNUUixpQkFBT0QsT0FBT1UsVUFETDtBQUVUUixrQkFBUUYsT0FBT1c7QUFGTixTQWJEO0FBaUJWQyxlQUFPO0FBQ0xDLGlCQUFPYixPQUFPYyxVQURUO0FBRUxDLGlCQUFPZixPQUFPZ0I7QUFGVDtBQWpCRyxPQWpCRDtBQXVDWEMsZ0JBQVcsSUFBSUMsSUFBSixFQUFELENBQWFDLGlCQUFiLEtBQW1DLEVBdkNsQztBQXdDWEMsaUJBQVcsSUFBSUYsSUFBSjtBQXhDQSxLQUFiO0FBMENBO0FBQ0FoRCxXQUFPSCxNQUFQLENBQWNzRCxJQUFkLENBQW1CLFVBQW5CLEVBQStCMUMsSUFBL0I7QUFDRCxHQTdDRDtBQThDRCxDQXhERDs7QUEwREE7Ozs7QUFJQWxCLE9BQU9PLFNBQVAsQ0FBaUJzRCxjQUFqQixHQUFrQyxTQUFTQSxjQUFULENBQXdCQyxFQUF4QixFQUE0QjtBQUM1REMsbUJBQVFDLGdCQUFSO0FBQ0E7QUFDQSxNQUFJQyxZQUFZLElBQWhCO0FBQ0EsTUFBSTlDLE9BQU9DLE1BQVAsQ0FBYzhDLFFBQWQsQ0FBdUIsVUFBdkIsQ0FBSixFQUF3QztBQUN0QztBQUNBRCxnQkFBWUUsaUJBQUdDLE9BQUgsQ0FBVyx1QkFBWCxFQUFvQztBQUM5Q0MsY0FBUSxJQURzQztBQUU5Q0MsWUFBTTtBQUZ3QyxLQUFwQyxDQUFaO0FBSUQsR0FORCxNQU1PO0FBQ0w7QUFDQUwsZ0JBQVlFLGlCQUFHQyxPQUFILENBQVcsZ0JBQVgsRUFBNkI7QUFDdkNHLGtCQUFZLENBQUMsV0FBRCxFQUFjLFNBQWQ7QUFEMkIsS0FBN0IsQ0FBWjtBQUdEO0FBQ0ROLFlBQVV2RCxFQUFWLENBQWEsU0FBYixFQUF3QixZQUFXO0FBQ2pDdUQsY0FBVXZELEVBQVYsQ0FBYSxpQkFBYixFQUFnQyxVQUFTQyxJQUFULEVBQWU7QUFDN0M2RCxjQUFRQyxHQUFSLENBQVksMkRBQ1Y5RCxLQUFLK0QsUUFESyxHQUNNLHdCQUROLEdBQ2lDWCxpQkFBUXpELE1BQVIsQ0FBZXFFLE1BQWYsQ0FBc0J2RSxJQURuRTtBQUVBLFVBQUkyRCxpQkFBUXpELE1BQVIsQ0FBZXFFLE1BQWYsQ0FBc0J2RSxJQUF0QixJQUE4QjJELGlCQUFRekQsTUFBUixDQUFlcUUsTUFBZixDQUFzQnRFLEtBQXhELEVBQStEO0FBQUU7QUFDL0Q0RCxrQkFBVUwsSUFBVixDQUFlLGlCQUFmLEVBQWtDO0FBQ2hDYyxvQkFBVS9ELEtBQUsrRCxRQURpQjtBQUVoQ3RFLGdCQUFNMkQsaUJBQVF6RCxNQUFSLENBQWVxRSxNQUFmLENBQXNCdkUsSUFGSTtBQUdoQ0MsaUJBQU8wRCxpQkFBUXpELE1BQVIsQ0FBZXFFLE1BQWYsQ0FBc0J0RTtBQUhHLFNBQWxDO0FBS0QsT0FORCxNQU1PO0FBQUU7QUFDUDRELGtCQUFVTCxJQUFWLENBQWUsaUJBQWYsRUFBa0NHLGlCQUFRekQsTUFBUixDQUFlcUUsTUFBakQsRUFDRSxVQUFTQyxLQUFULEVBQWdCO0FBQ2RKLGtCQUFRQyxHQUFSLENBQVksdUJBQVo7QUFDQVYsMkJBQVF6RCxNQUFSLENBQWVxRSxNQUFmLENBQXNCdkUsSUFBdEIsS0FBK0J3RSxNQUFNeEUsSUFBckMsR0FDRW9FLFFBQVFDLEdBQVIsQ0FDRSxrQkFBa0JHLE1BQU14RSxJQUF4QixHQUErQixrQkFBL0IsR0FBb0R3RSxNQUFNdkUsS0FENUQsQ0FERixHQUdNbUUsUUFBUUMsR0FBUixDQUFZLG1CQUFtQkcsTUFBTXZFLEtBQXJDLENBSE47QUFJQTBELDJCQUFRekQsTUFBUixDQUFlcUUsTUFBZixHQUF3QkMsS0FBeEI7QUFDQWIsMkJBQVFDLGdCQUFSO0FBQ0FDLG9CQUFVTCxJQUFWLENBQWUsaUJBQWYsRUFBa0M7QUFDaENjLHNCQUFVL0QsS0FBSytELFFBRGlCO0FBRWhDdEUsa0JBQU0yRCxpQkFBUXpELE1BQVIsQ0FBZXFFLE1BQWYsQ0FBc0J2RSxJQUZJO0FBR2hDQyxtQkFBTzBELGlCQUFRekQsTUFBUixDQUFlcUUsTUFBZixDQUFzQnRFO0FBSEcsV0FBbEM7QUFLRCxTQWRIO0FBZ0JEO0FBQ0YsS0EzQkQ7O0FBNkJBNEQsY0FBVXZELEVBQVYsQ0FBYSxjQUFiLEVBQTZCLFVBQVNDLElBQVQsRUFBZTtBQUMxQzZELGNBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBLGFBQU9YLEdBQUcsSUFBSCxFQUFTRyxTQUFULENBQVA7QUFDRCxLQUhEOztBQUtBQSxjQUFVdkQsRUFBVixDQUFhLGNBQWIsRUFBNkIsVUFBU0MsSUFBVCxFQUFlO0FBQzFDNkQsY0FBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0EsYUFBT1gsR0FBRyxJQUFJZSxLQUFKLENBQVUsc0JBQVYsQ0FBSCxDQUFQO0FBQ0QsS0FIRDtBQUlELEdBdkNEO0FBd0NELENBeEREOztBQTBEQTs7O0FBR0EsSUFBTXBFLFNBQVMsSUFBSVQsTUFBSixFQUFmO0FBQ0FTLE9BQU9vRCxjQUFQLENBQXNCLFVBQVNpQixLQUFULEVBQWdCYixTQUFoQixFQUEyQjtBQUMvQyxNQUFJYSxLQUFKLEVBQVcsTUFBTUEsS0FBTjtBQUNYckUsU0FBT0gsTUFBUCxHQUFnQjJELFNBQWhCO0FBQ0F4RCxTQUFPTixXQUFQLEdBQXFCNEQsaUJBQVF6RCxNQUFSLENBQWVxRSxNQUFwQztBQUNBbEUsU0FBT0Qsb0JBQVA7QUFDQUMsU0FBT0csZ0JBQVA7QUFDRCxDQU5ELEU7Ozs7Ozs7Ozs7OztBQ3BLYTs7Ozs7Ozs7QUFFTixJQUFNbUUsNEJBQVVDLG1CQUFPQSxDQUFDLDREQUFSLENBQWhCOztBQUVQOzs7O0lBR01DLE87QUFDSjs7OztBQUlBLG1CQUFjO0FBQUE7O0FBQ1osT0FBSzNFLE1BQUwsR0FBYztBQUNacUUsWUFBUTtBQUNOdkUsWUFBTTJFLFFBQVFHLEdBQVIsQ0FBWSxrQkFBWixJQUNGSCxRQUFRRyxHQUFSLENBQVksa0JBQVosQ0FERSxHQUNnQyxFQUZoQztBQUdON0UsYUFBTzBFLFFBQVFHLEdBQVIsQ0FBWSxtQkFBWixJQUNISCxRQUFRRyxHQUFSLENBQVksbUJBQVosQ0FERyxHQUNnQztBQUpqQztBQURJLEdBQWQ7QUFRRCxDOztBQUdJLElBQU1uQiw0QkFBVSxJQUFJa0IsT0FBSixFQUFoQjs7QUFFUDs7O0FBR0FBLFFBQVExRSxTQUFSLENBQWtCeUQsZ0JBQWxCLEdBQXFDLFNBQVNBLGdCQUFULEdBQTRCO0FBQy9EZSxVQUFRSSxHQUFSLENBQVksa0JBQVosRUFBZ0NwQixRQUFRekQsTUFBUixDQUFlcUUsTUFBZixDQUFzQnZFLElBQXRELEVBQTREO0FBQzFEaUUsWUFBUWxELE9BQU9DLE1BQVAsQ0FBYzhDLFFBQWQsQ0FBdUIsVUFBdkIsQ0FEa0Q7QUFFMURrQixhQUFTO0FBRmlELEdBQTVELEVBRCtELENBSTNEO0FBQ0pMLFVBQVFJLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ3BCLFFBQVF6RCxNQUFSLENBQWVxRSxNQUFmLENBQXNCdEUsS0FBdkQsRUFBOEQ7QUFDNURnRSxZQUFRbEQsT0FBT0MsTUFBUCxDQUFjOEMsUUFBZCxDQUF1QixVQUF2QixDQURvRDtBQUU1RGtCLGFBQVM7QUFGbUQsR0FBOUQsRUFMK0QsQ0FRM0Q7QUFDTCxDQVRELEM7Ozs7Ozs7Ozs7OztBQzdCYTs7Ozs7Ozs7QUFFTixJQUFNTCw0QkFBVUMsbUJBQU9BLENBQUMsNERBQVIsQ0FBaEI7O0FBRVA7Ozs7SUFHTUMsTztBQUNKOzs7O0FBSUEsbUJBQWM7QUFBQTs7QUFDWixPQUFLM0UsTUFBTCxHQUFjO0FBQ1pxRSxZQUFRO0FBQ052RSxZQUFNMkUsUUFBUUcsR0FBUixDQUFZLGtCQUFaLElBQ0ZILFFBQVFHLEdBQVIsQ0FBWSxrQkFBWixDQURFLEdBQ2dDLEVBRmhDO0FBR043RSxhQUFPMEUsUUFBUUcsR0FBUixDQUFZLG1CQUFaLElBQ0hILFFBQVFHLEdBQVIsQ0FBWSxtQkFBWixDQURHLEdBQ2dDO0FBSmpDO0FBREksR0FBZDtBQVFELEM7O0FBR0ksSUFBTW5CLDRCQUFVLElBQUlrQixPQUFKLEVBQWhCOztBQUVQOzs7QUFHQUEsUUFBUTFFLFNBQVIsQ0FBa0J5RCxnQkFBbEIsR0FBcUMsU0FBU0EsZ0JBQVQsR0FBNEI7QUFDL0RlLFVBQVFJLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ3BCLFFBQVF6RCxNQUFSLENBQWVxRSxNQUFmLENBQXNCdkUsSUFBdEQsRUFBNEQ7QUFDMURpRSxZQUFRbEQsT0FBT0MsTUFBUCxDQUFjOEMsUUFBZCxDQUF1QixVQUF2QixDQURrRDtBQUUxRGtCLGFBQVM7QUFGaUQsR0FBNUQsRUFEK0QsQ0FJM0Q7QUFDSkwsVUFBUUksR0FBUixDQUFZLG1CQUFaLEVBQWlDcEIsUUFBUXpELE1BQVIsQ0FBZXFFLE1BQWYsQ0FBc0J0RSxLQUF2RCxFQUE4RDtBQUM1RGdFLFlBQVFsRCxPQUFPQyxNQUFQLENBQWM4QyxRQUFkLENBQXVCLFVBQXZCLENBRG9EO0FBRTVEa0IsYUFBUztBQUZtRCxHQUE5RCxFQUwrRCxDQVEzRDtBQUNMLENBVEQsQzs7Ozs7Ozs7Ozs7Ozs7QUM3QkFDLE9BQU9DLE9BQVAsR0FBaUJDLEtBQWpCOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQkMsUUFBdEIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQ3BDLFFBQUlDLE9BQU8sS0FBWDtBQUNBRCxhQUFTQSxVQUFVRSxJQUFuQjtBQUNBQyxVQUFNTCxLQUFOLEdBQWNBLEtBQWQ7O0FBRUEsV0FBUUEsVUFBVSxDQUFYLEdBQWdCQyxVQUFoQixHQUE2QkksS0FBcEM7O0FBRUEsYUFBU0EsS0FBVCxDQUFlQyxHQUFmLEVBQW9CQyxNQUFwQixFQUE0QjtBQUN4QixZQUFJRixNQUFNTCxLQUFOLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsa0JBQU0sSUFBSVgsS0FBSixDQUFVLDZCQUFWLENBQU47QUFDSDtBQUNELFVBQUVnQixNQUFNTCxLQUFSOztBQUVBO0FBQ0EsWUFBSU0sR0FBSixFQUFTO0FBQ0xILG1CQUFPLElBQVA7QUFDQUYscUJBQVNLLEdBQVQ7QUFDQTtBQUNBTCx1QkFBV0MsTUFBWDtBQUNILFNBTEQsTUFLTyxJQUFJRyxNQUFNTCxLQUFOLEtBQWdCLENBQWhCLElBQXFCLENBQUNHLElBQTFCLEVBQWdDO0FBQ25DRixxQkFBUyxJQUFULEVBQWVNLE1BQWY7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsU0FBU0gsSUFBVCxHQUFnQixDQUFFLEM7Ozs7Ozs7Ozs7Ozs7O0FDM0JsQjs7Ozs7OztBQU9BUCxPQUFPQyxPQUFQLEdBQWlCLFVBQVNVLFdBQVQsRUFBc0JDLEtBQXRCLEVBQTZCQyxHQUE3QixFQUFrQztBQUNqRCxNQUFJQyxRQUFRSCxZQUFZSSxVQUF4QjtBQUNBSCxVQUFRQSxTQUFTLENBQWpCO0FBQ0FDLFFBQU1BLE9BQU9DLEtBQWI7O0FBRUEsTUFBSUgsWUFBWUssS0FBaEIsRUFBdUI7QUFBRSxXQUFPTCxZQUFZSyxLQUFaLENBQWtCSixLQUFsQixFQUF5QkMsR0FBekIsQ0FBUDtBQUF1Qzs7QUFFaEUsTUFBSUQsUUFBUSxDQUFaLEVBQWU7QUFBRUEsYUFBU0UsS0FBVDtBQUFpQjtBQUNsQyxNQUFJRCxNQUFNLENBQVYsRUFBYTtBQUFFQSxXQUFPQyxLQUFQO0FBQWU7QUFDOUIsTUFBSUQsTUFBTUMsS0FBVixFQUFpQjtBQUFFRCxVQUFNQyxLQUFOO0FBQWM7O0FBRWpDLE1BQUlGLFNBQVNFLEtBQVQsSUFBa0JGLFNBQVNDLEdBQTNCLElBQWtDQyxVQUFVLENBQWhELEVBQW1EO0FBQ2pELFdBQU8sSUFBSUcsV0FBSixDQUFnQixDQUFoQixDQUFQO0FBQ0Q7O0FBRUQsTUFBSUMsTUFBTSxJQUFJQyxVQUFKLENBQWVSLFdBQWYsQ0FBVjtBQUNBLE1BQUlELFNBQVMsSUFBSVMsVUFBSixDQUFlTixNQUFNRCxLQUFyQixDQUFiO0FBQ0EsT0FBSyxJQUFJUSxJQUFJUixLQUFSLEVBQWVTLEtBQUssQ0FBekIsRUFBNEJELElBQUlQLEdBQWhDLEVBQXFDTyxLQUFLQyxJQUExQyxFQUFnRDtBQUM5Q1gsV0FBT1csRUFBUCxJQUFhSCxJQUFJRSxDQUFKLENBQWI7QUFDRDtBQUNELFNBQU9WLE9BQU9ZLE1BQWQ7QUFDRCxDQXJCRCxDOzs7Ozs7Ozs7Ozs7OztBQ05BOzs7O0FBSUF0QixPQUFPQyxPQUFQLEdBQWlCc0IsT0FBakI7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlBLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ3JCQSxTQUFPQSxRQUFRLEVBQWY7QUFDQSxPQUFLQyxFQUFMLEdBQVVELEtBQUtFLEdBQUwsSUFBWSxHQUF0QjtBQUNBLE9BQUtDLEdBQUwsR0FBV0gsS0FBS0csR0FBTCxJQUFZLEtBQXZCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjSixLQUFLSSxNQUFMLElBQWUsQ0FBN0I7QUFDQSxPQUFLQyxNQUFMLEdBQWNMLEtBQUtLLE1BQUwsR0FBYyxDQUFkLElBQW1CTCxLQUFLSyxNQUFMLElBQWUsQ0FBbEMsR0FBc0NMLEtBQUtLLE1BQTNDLEdBQW9ELENBQWxFO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNEOztBQUVEOzs7Ozs7O0FBT0FQLFFBQVFyRyxTQUFSLENBQWtCNkcsUUFBbEIsR0FBNkIsWUFBVTtBQUNyQyxNQUFJTixLQUFLLEtBQUtBLEVBQUwsR0FBVU8sS0FBS0MsR0FBTCxDQUFTLEtBQUtMLE1BQWQsRUFBc0IsS0FBS0UsUUFBTCxFQUF0QixDQUFuQjtBQUNBLE1BQUksS0FBS0QsTUFBVCxFQUFpQjtBQUNmLFFBQUlLLE9BQVFGLEtBQUtHLE1BQUwsRUFBWjtBQUNBLFFBQUlDLFlBQVlKLEtBQUtLLEtBQUwsQ0FBV0gsT0FBTyxLQUFLTCxNQUFaLEdBQXFCSixFQUFoQyxDQUFoQjtBQUNBQSxTQUFLLENBQUNPLEtBQUtLLEtBQUwsQ0FBV0gsT0FBTyxFQUFsQixJQUF3QixDQUF6QixLQUErQixDQUEvQixHQUFvQ1QsS0FBS1csU0FBekMsR0FBcURYLEtBQUtXLFNBQS9EO0FBQ0Q7QUFDRCxTQUFPSixLQUFLTixHQUFMLENBQVNELEVBQVQsRUFBYSxLQUFLRSxHQUFsQixJQUF5QixDQUFoQztBQUNELENBUkQ7O0FBVUE7Ozs7OztBQU1BSixRQUFRckcsU0FBUixDQUFrQm9ILEtBQWxCLEdBQTBCLFlBQVU7QUFDbEMsT0FBS1IsUUFBTCxHQUFnQixDQUFoQjtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BUCxRQUFRckcsU0FBUixDQUFrQnFILE1BQWxCLEdBQTJCLFVBQVNiLEdBQVQsRUFBYTtBQUN0QyxPQUFLRCxFQUFMLEdBQVVDLEdBQVY7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQUgsUUFBUXJHLFNBQVIsQ0FBa0JzSCxNQUFsQixHQUEyQixVQUFTYixHQUFULEVBQWE7QUFDdEMsT0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUFKLFFBQVFyRyxTQUFSLENBQWtCdUgsU0FBbEIsR0FBOEIsVUFBU1osTUFBVCxFQUFnQjtBQUM1QyxPQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7Ozs7O0FDakZBOzs7Ozs7O0FBT0EsQ0FBQyxZQUFVO0FBQ1Q7O0FBRUEsTUFBSWEsUUFBUSxrRUFBWjs7QUFFQTtBQUNBLE1BQUlDLFNBQVMsSUFBSXhCLFVBQUosQ0FBZSxHQUFmLENBQWI7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSXNCLE1BQU1yRyxNQUExQixFQUFrQytFLEdBQWxDLEVBQXVDO0FBQ3JDdUIsV0FBT0QsTUFBTUUsVUFBTixDQUFpQnhCLENBQWpCLENBQVAsSUFBOEJBLENBQTlCO0FBQ0Q7O0FBRURuQixVQUFRNEMsTUFBUixHQUFpQixVQUFTbEMsV0FBVCxFQUFzQjtBQUNyQyxRQUFJRyxRQUFRLElBQUlLLFVBQUosQ0FBZVIsV0FBZixDQUFaO0FBQUEsUUFDQVMsQ0FEQTtBQUFBLFFBQ0cwQixNQUFNaEMsTUFBTXpFLE1BRGY7QUFBQSxRQUN1QjBHLFNBQVMsRUFEaEM7O0FBR0EsU0FBSzNCLElBQUksQ0FBVCxFQUFZQSxJQUFJMEIsR0FBaEIsRUFBcUIxQixLQUFHLENBQXhCLEVBQTJCO0FBQ3pCMkIsZ0JBQVVMLE1BQU01QixNQUFNTSxDQUFOLEtBQVksQ0FBbEIsQ0FBVjtBQUNBMkIsZ0JBQVVMLE1BQU8sQ0FBQzVCLE1BQU1NLENBQU4sSUFBVyxDQUFaLEtBQWtCLENBQW5CLEdBQXlCTixNQUFNTSxJQUFJLENBQVYsS0FBZ0IsQ0FBL0MsQ0FBVjtBQUNBMkIsZ0JBQVVMLE1BQU8sQ0FBQzVCLE1BQU1NLElBQUksQ0FBVixJQUFlLEVBQWhCLEtBQXVCLENBQXhCLEdBQThCTixNQUFNTSxJQUFJLENBQVYsS0FBZ0IsQ0FBcEQsQ0FBVjtBQUNBMkIsZ0JBQVVMLE1BQU01QixNQUFNTSxJQUFJLENBQVYsSUFBZSxFQUFyQixDQUFWO0FBQ0Q7O0FBRUQsUUFBSzBCLE1BQU0sQ0FBUCxLQUFjLENBQWxCLEVBQXFCO0FBQ25CQyxlQUFTQSxPQUFPQyxTQUFQLENBQWlCLENBQWpCLEVBQW9CRCxPQUFPMUcsTUFBUCxHQUFnQixDQUFwQyxJQUF5QyxHQUFsRDtBQUNELEtBRkQsTUFFTyxJQUFJeUcsTUFBTSxDQUFOLEtBQVksQ0FBaEIsRUFBbUI7QUFDeEJDLGVBQVNBLE9BQU9DLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0JELE9BQU8xRyxNQUFQLEdBQWdCLENBQXBDLElBQXlDLElBQWxEO0FBQ0Q7O0FBRUQsV0FBTzBHLE1BQVA7QUFDRCxHQWxCRDs7QUFvQkE5QyxVQUFRZ0QsTUFBUixHQUFrQixVQUFTRixNQUFULEVBQWlCO0FBQ2pDLFFBQUlHLGVBQWVILE9BQU8xRyxNQUFQLEdBQWdCLElBQW5DO0FBQUEsUUFDQXlHLE1BQU1DLE9BQU8xRyxNQURiO0FBQUEsUUFDcUIrRSxDQURyQjtBQUFBLFFBQ3dCK0IsSUFBSSxDQUQ1QjtBQUFBLFFBRUFDLFFBRkE7QUFBQSxRQUVVQyxRQUZWO0FBQUEsUUFFb0JDLFFBRnBCO0FBQUEsUUFFOEJDLFFBRjlCOztBQUlBLFFBQUlSLE9BQU9BLE9BQU8xRyxNQUFQLEdBQWdCLENBQXZCLE1BQThCLEdBQWxDLEVBQXVDO0FBQ3JDNkc7QUFDQSxVQUFJSCxPQUFPQSxPQUFPMUcsTUFBUCxHQUFnQixDQUF2QixNQUE4QixHQUFsQyxFQUF1QztBQUNyQzZHO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJdkMsY0FBYyxJQUFJTSxXQUFKLENBQWdCaUMsWUFBaEIsQ0FBbEI7QUFBQSxRQUNBcEMsUUFBUSxJQUFJSyxVQUFKLENBQWVSLFdBQWYsQ0FEUjs7QUFHQSxTQUFLUyxJQUFJLENBQVQsRUFBWUEsSUFBSTBCLEdBQWhCLEVBQXFCMUIsS0FBRyxDQUF4QixFQUEyQjtBQUN6QmdDLGlCQUFXVCxPQUFPSSxPQUFPSCxVQUFQLENBQWtCeEIsQ0FBbEIsQ0FBUCxDQUFYO0FBQ0FpQyxpQkFBV1YsT0FBT0ksT0FBT0gsVUFBUCxDQUFrQnhCLElBQUUsQ0FBcEIsQ0FBUCxDQUFYO0FBQ0FrQyxpQkFBV1gsT0FBT0ksT0FBT0gsVUFBUCxDQUFrQnhCLElBQUUsQ0FBcEIsQ0FBUCxDQUFYO0FBQ0FtQyxpQkFBV1osT0FBT0ksT0FBT0gsVUFBUCxDQUFrQnhCLElBQUUsQ0FBcEIsQ0FBUCxDQUFYOztBQUVBTixZQUFNcUMsR0FBTixJQUFjQyxZQUFZLENBQWIsR0FBbUJDLFlBQVksQ0FBNUM7QUFDQXZDLFlBQU1xQyxHQUFOLElBQWMsQ0FBQ0UsV0FBVyxFQUFaLEtBQW1CLENBQXBCLEdBQTBCQyxZQUFZLENBQW5EO0FBQ0F4QyxZQUFNcUMsR0FBTixJQUFjLENBQUNHLFdBQVcsQ0FBWixLQUFrQixDQUFuQixHQUF5QkMsV0FBVyxFQUFqRDtBQUNEOztBQUVELFdBQU81QyxXQUFQO0FBQ0QsR0EzQkQ7QUE0QkQsQ0EzREQsSTs7Ozs7Ozs7Ozs7O0FDUEE7O0FBRUFWLFFBQVFjLFVBQVIsR0FBcUJBLFVBQXJCO0FBQ0FkLFFBQVF1RCxXQUFSLEdBQXNCQSxXQUF0QjtBQUNBdkQsUUFBUXdELGFBQVIsR0FBd0JBLGFBQXhCOztBQUVBLElBQUlkLFNBQVMsRUFBYjtBQUNBLElBQUllLFlBQVksRUFBaEI7QUFDQSxJQUFJQyxNQUFNLE9BQU94QyxVQUFQLEtBQXNCLFdBQXRCLEdBQW9DQSxVQUFwQyxHQUFpRHlDLEtBQTNEOztBQUVBLElBQUlDLE9BQU8sa0VBQVg7QUFDQSxLQUFLLElBQUl6QyxJQUFJLENBQVIsRUFBVzBCLE1BQU1lLEtBQUt4SCxNQUEzQixFQUFtQytFLElBQUkwQixHQUF2QyxFQUE0QyxFQUFFMUIsQ0FBOUMsRUFBaUQ7QUFDL0N1QixTQUFPdkIsQ0FBUCxJQUFZeUMsS0FBS3pDLENBQUwsQ0FBWjtBQUNBc0MsWUFBVUcsS0FBS2pCLFVBQUwsQ0FBZ0J4QixDQUFoQixDQUFWLElBQWdDQSxDQUFoQztBQUNEOztBQUVEO0FBQ0E7QUFDQXNDLFVBQVUsSUFBSWQsVUFBSixDQUFlLENBQWYsQ0FBVixJQUErQixFQUEvQjtBQUNBYyxVQUFVLElBQUlkLFVBQUosQ0FBZSxDQUFmLENBQVYsSUFBK0IsRUFBL0I7O0FBRUEsU0FBU2tCLE9BQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQ3JCLE1BQUlqQixNQUFNaUIsSUFBSTFILE1BQWQ7O0FBRUEsTUFBSXlHLE1BQU0sQ0FBTixHQUFVLENBQWQsRUFBaUI7QUFDZixVQUFNLElBQUl0RCxLQUFKLENBQVUsZ0RBQVYsQ0FBTjtBQUNEOztBQUVEO0FBQ0E7QUFDQSxNQUFJd0UsV0FBV0QsSUFBSUUsT0FBSixDQUFZLEdBQVosQ0FBZjtBQUNBLE1BQUlELGFBQWEsQ0FBQyxDQUFsQixFQUFxQkEsV0FBV2xCLEdBQVg7O0FBRXJCLE1BQUlvQixrQkFBa0JGLGFBQWFsQixHQUFiLEdBQ2xCLENBRGtCLEdBRWxCLElBQUtrQixXQUFXLENBRnBCOztBQUlBLFNBQU8sQ0FBQ0EsUUFBRCxFQUFXRSxlQUFYLENBQVA7QUFDRDs7QUFFRDtBQUNBLFNBQVNuRCxVQUFULENBQXFCZ0QsR0FBckIsRUFBMEI7QUFDeEIsTUFBSUksT0FBT0wsUUFBUUMsR0FBUixDQUFYO0FBQ0EsTUFBSUMsV0FBV0csS0FBSyxDQUFMLENBQWY7QUFDQSxNQUFJRCxrQkFBa0JDLEtBQUssQ0FBTCxDQUF0QjtBQUNBLFNBQVEsQ0FBQ0gsV0FBV0UsZUFBWixJQUErQixDQUEvQixHQUFtQyxDQUFwQyxHQUF5Q0EsZUFBaEQ7QUFDRDs7QUFFRCxTQUFTRSxXQUFULENBQXNCTCxHQUF0QixFQUEyQkMsUUFBM0IsRUFBcUNFLGVBQXJDLEVBQXNEO0FBQ3BELFNBQVEsQ0FBQ0YsV0FBV0UsZUFBWixJQUErQixDQUEvQixHQUFtQyxDQUFwQyxHQUF5Q0EsZUFBaEQ7QUFDRDs7QUFFRCxTQUFTVixXQUFULENBQXNCTyxHQUF0QixFQUEyQjtBQUN6QixNQUFJTSxHQUFKO0FBQ0EsTUFBSUYsT0FBT0wsUUFBUUMsR0FBUixDQUFYO0FBQ0EsTUFBSUMsV0FBV0csS0FBSyxDQUFMLENBQWY7QUFDQSxNQUFJRCxrQkFBa0JDLEtBQUssQ0FBTCxDQUF0Qjs7QUFFQSxNQUFJRyxNQUFNLElBQUlYLEdBQUosQ0FBUVMsWUFBWUwsR0FBWixFQUFpQkMsUUFBakIsRUFBMkJFLGVBQTNCLENBQVIsQ0FBVjs7QUFFQSxNQUFJSyxVQUFVLENBQWQ7O0FBRUE7QUFDQSxNQUFJekIsTUFBTW9CLGtCQUFrQixDQUFsQixHQUNORixXQUFXLENBREwsR0FFTkEsUUFGSjs7QUFJQSxPQUFLLElBQUk1QyxJQUFJLENBQWIsRUFBZ0JBLElBQUkwQixHQUFwQixFQUF5QjFCLEtBQUssQ0FBOUIsRUFBaUM7QUFDL0JpRCxVQUNHWCxVQUFVSyxJQUFJbkIsVUFBSixDQUFleEIsQ0FBZixDQUFWLEtBQWdDLEVBQWpDLEdBQ0NzQyxVQUFVSyxJQUFJbkIsVUFBSixDQUFleEIsSUFBSSxDQUFuQixDQUFWLEtBQW9DLEVBRHJDLEdBRUNzQyxVQUFVSyxJQUFJbkIsVUFBSixDQUFleEIsSUFBSSxDQUFuQixDQUFWLEtBQW9DLENBRnJDLEdBR0FzQyxVQUFVSyxJQUFJbkIsVUFBSixDQUFleEIsSUFBSSxDQUFuQixDQUFWLENBSkY7QUFLQWtELFFBQUlDLFNBQUosSUFBa0JGLE9BQU8sRUFBUixHQUFjLElBQS9CO0FBQ0FDLFFBQUlDLFNBQUosSUFBa0JGLE9BQU8sQ0FBUixHQUFhLElBQTlCO0FBQ0FDLFFBQUlDLFNBQUosSUFBaUJGLE1BQU0sSUFBdkI7QUFDRDs7QUFFRCxNQUFJSCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekJHLFVBQ0dYLFVBQVVLLElBQUluQixVQUFKLENBQWV4QixDQUFmLENBQVYsS0FBZ0MsQ0FBakMsR0FDQ3NDLFVBQVVLLElBQUluQixVQUFKLENBQWV4QixJQUFJLENBQW5CLENBQVYsS0FBb0MsQ0FGdkM7QUFHQWtELFFBQUlDLFNBQUosSUFBaUJGLE1BQU0sSUFBdkI7QUFDRDs7QUFFRCxNQUFJSCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekJHLFVBQ0dYLFVBQVVLLElBQUluQixVQUFKLENBQWV4QixDQUFmLENBQVYsS0FBZ0MsRUFBakMsR0FDQ3NDLFVBQVVLLElBQUluQixVQUFKLENBQWV4QixJQUFJLENBQW5CLENBQVYsS0FBb0MsQ0FEckMsR0FFQ3NDLFVBQVVLLElBQUluQixVQUFKLENBQWV4QixJQUFJLENBQW5CLENBQVYsS0FBb0MsQ0FIdkM7QUFJQWtELFFBQUlDLFNBQUosSUFBa0JGLE9BQU8sQ0FBUixHQUFhLElBQTlCO0FBQ0FDLFFBQUlDLFNBQUosSUFBaUJGLE1BQU0sSUFBdkI7QUFDRDs7QUFFRCxTQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsZUFBVCxDQUEwQkMsR0FBMUIsRUFBK0I7QUFDN0IsU0FBTzlCLE9BQU84QixPQUFPLEVBQVAsR0FBWSxJQUFuQixJQUNMOUIsT0FBTzhCLE9BQU8sRUFBUCxHQUFZLElBQW5CLENBREssR0FFTDlCLE9BQU84QixPQUFPLENBQVAsR0FBVyxJQUFsQixDQUZLLEdBR0w5QixPQUFPOEIsTUFBTSxJQUFiLENBSEY7QUFJRDs7QUFFRCxTQUFTQyxXQUFULENBQXNCQyxLQUF0QixFQUE2Qi9ELEtBQTdCLEVBQW9DQyxHQUFwQyxFQUF5QztBQUN2QyxNQUFJd0QsR0FBSjtBQUNBLE1BQUlPLFNBQVMsRUFBYjtBQUNBLE9BQUssSUFBSXhELElBQUlSLEtBQWIsRUFBb0JRLElBQUlQLEdBQXhCLEVBQTZCTyxLQUFLLENBQWxDLEVBQXFDO0FBQ25DaUQsVUFDRSxDQUFFTSxNQUFNdkQsQ0FBTixLQUFZLEVBQWIsR0FBbUIsUUFBcEIsS0FDRXVELE1BQU12RCxJQUFJLENBQVYsS0FBZ0IsQ0FBakIsR0FBc0IsTUFEdkIsS0FFQ3VELE1BQU12RCxJQUFJLENBQVYsSUFBZSxJQUZoQixDQURGO0FBSUF3RCxXQUFPQyxJQUFQLENBQVlMLGdCQUFnQkgsR0FBaEIsQ0FBWjtBQUNEO0FBQ0QsU0FBT08sT0FBT0UsSUFBUCxDQUFZLEVBQVosQ0FBUDtBQUNEOztBQUVELFNBQVNyQixhQUFULENBQXdCa0IsS0FBeEIsRUFBK0I7QUFDN0IsTUFBSU4sR0FBSjtBQUNBLE1BQUl2QixNQUFNNkIsTUFBTXRJLE1BQWhCO0FBQ0EsTUFBSTBJLGFBQWFqQyxNQUFNLENBQXZCLENBSDZCLENBR0o7QUFDekIsTUFBSWtDLFFBQVEsRUFBWjtBQUNBLE1BQUlDLGlCQUFpQixLQUFyQixDQUw2QixDQUtGOztBQUUzQjtBQUNBLE9BQUssSUFBSTdELElBQUksQ0FBUixFQUFXOEQsT0FBT3BDLE1BQU1pQyxVQUE3QixFQUF5QzNELElBQUk4RCxJQUE3QyxFQUFtRDlELEtBQUs2RCxjQUF4RCxFQUF3RTtBQUN0RUQsVUFBTUgsSUFBTixDQUFXSCxZQUNUQyxLQURTLEVBQ0Z2RCxDQURFLEVBQ0VBLElBQUk2RCxjQUFMLEdBQXVCQyxJQUF2QixHQUE4QkEsSUFBOUIsR0FBc0M5RCxJQUFJNkQsY0FEM0MsQ0FBWDtBQUdEOztBQUVEO0FBQ0EsTUFBSUYsZUFBZSxDQUFuQixFQUFzQjtBQUNwQlYsVUFBTU0sTUFBTTdCLE1BQU0sQ0FBWixDQUFOO0FBQ0FrQyxVQUFNSCxJQUFOLENBQ0VsQyxPQUFPMEIsT0FBTyxDQUFkLElBQ0ExQixPQUFRMEIsT0FBTyxDQUFSLEdBQWEsSUFBcEIsQ0FEQSxHQUVBLElBSEY7QUFLRCxHQVBELE1BT08sSUFBSVUsZUFBZSxDQUFuQixFQUFzQjtBQUMzQlYsVUFBTSxDQUFDTSxNQUFNN0IsTUFBTSxDQUFaLEtBQWtCLENBQW5CLElBQXdCNkIsTUFBTTdCLE1BQU0sQ0FBWixDQUE5QjtBQUNBa0MsVUFBTUgsSUFBTixDQUNFbEMsT0FBTzBCLE9BQU8sRUFBZCxJQUNBMUIsT0FBUTBCLE9BQU8sQ0FBUixHQUFhLElBQXBCLENBREEsR0FFQTFCLE9BQVEwQixPQUFPLENBQVIsR0FBYSxJQUFwQixDQUZBLEdBR0EsR0FKRjtBQU1EOztBQUVELFNBQU9XLE1BQU1GLElBQU4sQ0FBVyxFQUFYLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ3RKRDs7OztBQUlBLElBQUlLLGNBQWMsT0FBT0EsV0FBUCxLQUF1QixXQUF2QixHQUFxQ0EsV0FBckMsR0FDaEIsT0FBT0MsaUJBQVAsS0FBNkIsV0FBN0IsR0FBMkNBLGlCQUEzQyxHQUNBLE9BQU9DLGFBQVAsS0FBeUIsV0FBekIsR0FBdUNBLGFBQXZDLEdBQ0EsT0FBT0MsY0FBUCxLQUEwQixXQUExQixHQUF3Q0EsY0FBeEMsR0FDQSxLQUpGOztBQU1BOzs7O0FBSUEsSUFBSUMsZ0JBQWlCLFlBQVc7QUFDOUIsTUFBSTtBQUNGLFFBQUlDLElBQUksSUFBSUMsSUFBSixDQUFTLENBQUMsSUFBRCxDQUFULENBQVI7QUFDQSxXQUFPRCxFQUFFRSxJQUFGLEtBQVcsQ0FBbEI7QUFDRCxHQUhELENBR0UsT0FBTUMsQ0FBTixFQUFTO0FBQ1QsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDQVBtQixFQUFwQjs7QUFTQTs7Ozs7QUFLQSxJQUFJQyw4QkFBOEJMLGlCQUFrQixZQUFXO0FBQzdELE1BQUk7QUFDRixRQUFJTSxJQUFJLElBQUlKLElBQUosQ0FBUyxDQUFDLElBQUl0RSxVQUFKLENBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFmLENBQUQsQ0FBVCxDQUFSO0FBQ0EsV0FBTzBFLEVBQUVILElBQUYsS0FBVyxDQUFsQjtBQUNELEdBSEQsQ0FHRSxPQUFNQyxDQUFOLEVBQVM7QUFDVCxXQUFPLEtBQVA7QUFDRDtBQUNGLENBUGtELEVBQW5EOztBQVNBOzs7O0FBSUEsSUFBSUcsdUJBQXVCWCxlQUN0QkEsWUFBWWpLLFNBQVosQ0FBc0I2SyxNQURBLElBRXRCWixZQUFZakssU0FBWixDQUFzQjhLLE9BRjNCOztBQUlBOzs7Ozs7QUFNQSxTQUFTQyxtQkFBVCxDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsU0FBT0EsSUFBSUMsR0FBSixDQUFRLFVBQVNDLEtBQVQsRUFBZ0I7QUFDN0IsUUFBSUEsTUFBTTlFLE1BQU4sWUFBd0JMLFdBQTVCLEVBQXlDO0FBQ3ZDLFVBQUlvRixNQUFNRCxNQUFNOUUsTUFBaEI7O0FBRUE7QUFDQTtBQUNBLFVBQUk4RSxNQUFNckYsVUFBTixLQUFxQnNGLElBQUl0RixVQUE3QixFQUF5QztBQUN2QyxZQUFJdUYsT0FBTyxJQUFJbkYsVUFBSixDQUFlaUYsTUFBTXJGLFVBQXJCLENBQVg7QUFDQXVGLGFBQUt4RyxHQUFMLENBQVMsSUFBSXFCLFVBQUosQ0FBZWtGLEdBQWYsRUFBb0JELE1BQU1HLFVBQTFCLEVBQXNDSCxNQUFNckYsVUFBNUMsQ0FBVDtBQUNBc0YsY0FBTUMsS0FBS2hGLE1BQVg7QUFDRDs7QUFFRCxhQUFPK0UsR0FBUDtBQUNEOztBQUVELFdBQU9ELEtBQVA7QUFDRCxHQWhCTSxDQUFQO0FBaUJEOztBQUVELFNBQVNJLHNCQUFULENBQWdDTixHQUFoQyxFQUFxQ08sT0FBckMsRUFBOEM7QUFDNUNBLFlBQVVBLFdBQVcsRUFBckI7O0FBRUEsTUFBSUMsS0FBSyxJQUFJdkIsV0FBSixFQUFUO0FBQ0FjLHNCQUFvQkMsR0FBcEIsRUFBeUJTLE9BQXpCLENBQWlDLFVBQVNDLElBQVQsRUFBZTtBQUM5Q0YsT0FBR1gsTUFBSCxDQUFVYSxJQUFWO0FBQ0QsR0FGRDs7QUFJQSxTQUFRSCxRQUFRSSxJQUFULEdBQWlCSCxHQUFHVixPQUFILENBQVdTLFFBQVFJLElBQW5CLENBQWpCLEdBQTRDSCxHQUFHVixPQUFILEVBQW5EO0FBQ0Q7O0FBRUQsU0FBU2MsZUFBVCxDQUF5QlosR0FBekIsRUFBOEJPLE9BQTlCLEVBQXVDO0FBQ3JDLFNBQU8sSUFBSWhCLElBQUosQ0FBU1Esb0JBQW9CQyxHQUFwQixDQUFULEVBQW1DTyxXQUFXLEVBQTlDLENBQVA7QUFDRDs7QUFFRCxJQUFJLE9BQU9oQixJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CZSx5QkFBdUJ0TCxTQUF2QixHQUFtQ3VLLEtBQUt2SyxTQUF4QztBQUNBNEwsa0JBQWdCNUwsU0FBaEIsR0FBNEJ1SyxLQUFLdkssU0FBakM7QUFDRDs7QUFFRDhFLE9BQU9DLE9BQVAsR0FBa0IsWUFBVztBQUMzQixNQUFJc0YsYUFBSixFQUFtQjtBQUNqQixXQUFPSyw4QkFBOEJILElBQTlCLEdBQXFDcUIsZUFBNUM7QUFDRCxHQUZELE1BRU8sSUFBSWhCLG9CQUFKLEVBQTBCO0FBQy9CLFdBQU9VLHNCQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBT08sU0FBUDtBQUNEO0FBQ0YsQ0FSZ0IsRUFBakIsQzs7Ozs7Ozs7Ozs7O0FDM0ZBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQSxJQUFJaEUsU0FBU3BELG1CQUFPQSxDQUFDLG9EQUFSLENBQWI7QUFDQSxJQUFJcUgsVUFBVXJILG1CQUFPQSxDQUFDLGdEQUFSLENBQWQ7QUFDQSxJQUFJc0gsVUFBVXRILG1CQUFPQSxDQUFDLGdEQUFSLENBQWQ7O0FBRUFNLFFBQVFpSCxNQUFSLEdBQWlCQSxNQUFqQjtBQUNBakgsUUFBUWtILFVBQVIsR0FBcUJBLFVBQXJCO0FBQ0FsSCxRQUFRbUgsaUJBQVIsR0FBNEIsRUFBNUI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQUYsT0FBT0csbUJBQVAsR0FBNkJDLE9BQU9ELG1CQUFQLEtBQStCTixTQUEvQixHQUN6Qk8sT0FBT0QsbUJBRGtCLEdBRXpCRSxtQkFGSjs7QUFJQTs7O0FBR0F0SCxRQUFRdUgsVUFBUixHQUFxQkEsWUFBckI7O0FBRUEsU0FBU0QsaUJBQVQsR0FBOEI7QUFDNUIsTUFBSTtBQUNGLFFBQUlqRCxNQUFNLElBQUluRCxVQUFKLENBQWUsQ0FBZixDQUFWO0FBQ0FtRCxRQUFJbUQsU0FBSixHQUFnQixFQUFDQSxXQUFXdEcsV0FBV2pHLFNBQXZCLEVBQWtDd00sS0FBSyxlQUFZO0FBQUUsZUFBTyxFQUFQO0FBQVcsT0FBaEUsRUFBaEI7QUFDQSxXQUFPcEQsSUFBSW9ELEdBQUosT0FBYyxFQUFkLElBQW9CO0FBQ3ZCLFdBQU9wRCxJQUFJcUQsUUFBWCxLQUF3QixVQURyQixJQUNtQztBQUN0Q3JELFFBQUlxRCxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQjVHLFVBQW5CLEtBQWtDLENBRnRDLENBSEUsQ0FLc0M7QUFDekMsR0FORCxDQU1FLE9BQU80RSxDQUFQLEVBQVU7QUFDVixXQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQVM2QixVQUFULEdBQXVCO0FBQ3JCLFNBQU9OLE9BQU9HLG1CQUFQLEdBQ0gsVUFERyxHQUVILFVBRko7QUFHRDs7QUFFRCxTQUFTTyxZQUFULENBQXVCQyxJQUF2QixFQUE2QnhMLE1BQTdCLEVBQXFDO0FBQ25DLE1BQUltTCxlQUFlbkwsTUFBbkIsRUFBMkI7QUFDekIsVUFBTSxJQUFJeUwsVUFBSixDQUFlLDRCQUFmLENBQU47QUFDRDtBQUNELE1BQUlaLE9BQU9HLG1CQUFYLEVBQWdDO0FBQzlCO0FBQ0FRLFdBQU8sSUFBSTFHLFVBQUosQ0FBZTlFLE1BQWYsQ0FBUDtBQUNBd0wsU0FBS0osU0FBTCxHQUFpQlAsT0FBT2hNLFNBQXhCO0FBQ0QsR0FKRCxNQUlPO0FBQ0w7QUFDQSxRQUFJMk0sU0FBUyxJQUFiLEVBQW1CO0FBQ2pCQSxhQUFPLElBQUlYLE1BQUosQ0FBVzdLLE1BQVgsQ0FBUDtBQUNEO0FBQ0R3TCxTQUFLeEwsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7O0FBRUQsU0FBT3dMLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OztBQVVBLFNBQVNYLE1BQVQsQ0FBaUJhLEdBQWpCLEVBQXNCQyxnQkFBdEIsRUFBd0MzTCxNQUF4QyxFQUFnRDtBQUM5QyxNQUFJLENBQUM2SyxPQUFPRyxtQkFBUixJQUErQixFQUFFLGdCQUFnQkgsTUFBbEIsQ0FBbkMsRUFBOEQ7QUFDNUQsV0FBTyxJQUFJQSxNQUFKLENBQVdhLEdBQVgsRUFBZ0JDLGdCQUFoQixFQUFrQzNMLE1BQWxDLENBQVA7QUFDRDs7QUFFRDtBQUNBLE1BQUksT0FBTzBMLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUMzQixRQUFJLE9BQU9DLGdCQUFQLEtBQTRCLFFBQWhDLEVBQTBDO0FBQ3hDLFlBQU0sSUFBSXhJLEtBQUosQ0FDSixtRUFESSxDQUFOO0FBR0Q7QUFDRCxXQUFPeUksWUFBWSxJQUFaLEVBQWtCRixHQUFsQixDQUFQO0FBQ0Q7QUFDRCxTQUFPRyxLQUFLLElBQUwsRUFBV0gsR0FBWCxFQUFnQkMsZ0JBQWhCLEVBQWtDM0wsTUFBbEMsQ0FBUDtBQUNEOztBQUVENkssT0FBT2lCLFFBQVAsR0FBa0IsSUFBbEIsQyxDQUF1Qjs7QUFFdkI7QUFDQWpCLE9BQU9rQixRQUFQLEdBQWtCLFVBQVU5RCxHQUFWLEVBQWU7QUFDL0JBLE1BQUltRCxTQUFKLEdBQWdCUCxPQUFPaE0sU0FBdkI7QUFDQSxTQUFPb0osR0FBUDtBQUNELENBSEQ7O0FBS0EsU0FBUzRELElBQVQsQ0FBZUwsSUFBZixFQUFxQlEsS0FBckIsRUFBNEJMLGdCQUE1QixFQUE4QzNMLE1BQTlDLEVBQXNEO0FBQ3BELE1BQUksT0FBT2dNLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsVUFBTSxJQUFJQyxTQUFKLENBQWMsdUNBQWQsQ0FBTjtBQUNEOztBQUVELE1BQUksT0FBT3JILFdBQVAsS0FBdUIsV0FBdkIsSUFBc0NvSCxpQkFBaUJwSCxXQUEzRCxFQUF3RTtBQUN0RSxXQUFPc0gsZ0JBQWdCVixJQUFoQixFQUFzQlEsS0FBdEIsRUFBNkJMLGdCQUE3QixFQUErQzNMLE1BQS9DLENBQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU9nTSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFdBQU9HLFdBQVdYLElBQVgsRUFBaUJRLEtBQWpCLEVBQXdCTCxnQkFBeEIsQ0FBUDtBQUNEOztBQUVELFNBQU9TLFdBQVdaLElBQVgsRUFBaUJRLEtBQWpCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFRQW5CLE9BQU9nQixJQUFQLEdBQWMsVUFBVUcsS0FBVixFQUFpQkwsZ0JBQWpCLEVBQW1DM0wsTUFBbkMsRUFBMkM7QUFDdkQsU0FBTzZMLEtBQUssSUFBTCxFQUFXRyxLQUFYLEVBQWtCTCxnQkFBbEIsRUFBb0MzTCxNQUFwQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJNkssT0FBT0csbUJBQVgsRUFBZ0M7QUFDOUJILFNBQU9oTSxTQUFQLENBQWlCdU0sU0FBakIsR0FBNkJ0RyxXQUFXakcsU0FBeEM7QUFDQWdNLFNBQU9PLFNBQVAsR0FBbUJ0RyxVQUFuQjtBQUNBLE1BQUksT0FBT3VILE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9DLE9BQXhDLElBQ0F6QixPQUFPd0IsT0FBT0MsT0FBZCxNQUEyQnpCLE1BRC9CLEVBQ3VDO0FBQ3JDO0FBQ0EwQixXQUFPQyxjQUFQLENBQXNCM0IsTUFBdEIsRUFBOEJ3QixPQUFPQyxPQUFyQyxFQUE4QztBQUM1Q04sYUFBTyxJQURxQztBQUU1Q1Msb0JBQWM7QUFGOEIsS0FBOUM7QUFJRDtBQUNGOztBQUVELFNBQVNDLFVBQVQsQ0FBcUJyRCxJQUFyQixFQUEyQjtBQUN6QixNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsVUFBTSxJQUFJNEMsU0FBSixDQUFjLGtDQUFkLENBQU47QUFDRCxHQUZELE1BRU8sSUFBSTVDLE9BQU8sQ0FBWCxFQUFjO0FBQ25CLFVBQU0sSUFBSW9DLFVBQUosQ0FBZSxzQ0FBZixDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTa0IsS0FBVCxDQUFnQm5CLElBQWhCLEVBQXNCbkMsSUFBdEIsRUFBNEJ1RCxJQUE1QixFQUFrQ0MsUUFBbEMsRUFBNEM7QUFDMUNILGFBQVdyRCxJQUFYO0FBQ0EsTUFBSUEsUUFBUSxDQUFaLEVBQWU7QUFDYixXQUFPa0MsYUFBYUMsSUFBYixFQUFtQm5DLElBQW5CLENBQVA7QUFDRDtBQUNELE1BQUl1RCxTQUFTbEMsU0FBYixFQUF3QjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxXQUFPLE9BQU9tQyxRQUFQLEtBQW9CLFFBQXBCLEdBQ0h0QixhQUFhQyxJQUFiLEVBQW1CbkMsSUFBbkIsRUFBeUJ1RCxJQUF6QixDQUE4QkEsSUFBOUIsRUFBb0NDLFFBQXBDLENBREcsR0FFSHRCLGFBQWFDLElBQWIsRUFBbUJuQyxJQUFuQixFQUF5QnVELElBQXpCLENBQThCQSxJQUE5QixDQUZKO0FBR0Q7QUFDRCxTQUFPckIsYUFBYUMsSUFBYixFQUFtQm5DLElBQW5CLENBQVA7QUFDRDs7QUFFRDs7OztBQUlBd0IsT0FBTzhCLEtBQVAsR0FBZSxVQUFVdEQsSUFBVixFQUFnQnVELElBQWhCLEVBQXNCQyxRQUF0QixFQUFnQztBQUM3QyxTQUFPRixNQUFNLElBQU4sRUFBWXRELElBQVosRUFBa0J1RCxJQUFsQixFQUF3QkMsUUFBeEIsQ0FBUDtBQUNELENBRkQ7O0FBSUEsU0FBU2pCLFdBQVQsQ0FBc0JKLElBQXRCLEVBQTRCbkMsSUFBNUIsRUFBa0M7QUFDaENxRCxhQUFXckQsSUFBWDtBQUNBbUMsU0FBT0QsYUFBYUMsSUFBYixFQUFtQm5DLE9BQU8sQ0FBUCxHQUFXLENBQVgsR0FBZXlELFFBQVF6RCxJQUFSLElBQWdCLENBQWxELENBQVA7QUFDQSxNQUFJLENBQUN3QixPQUFPRyxtQkFBWixFQUFpQztBQUMvQixTQUFLLElBQUlqRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlzRSxJQUFwQixFQUEwQixFQUFFdEUsQ0FBNUIsRUFBK0I7QUFDN0J5RyxXQUFLekcsQ0FBTCxJQUFVLENBQVY7QUFDRDtBQUNGO0FBQ0QsU0FBT3lHLElBQVA7QUFDRDs7QUFFRDs7O0FBR0FYLE9BQU9lLFdBQVAsR0FBcUIsVUFBVXZDLElBQVYsRUFBZ0I7QUFDbkMsU0FBT3VDLFlBQVksSUFBWixFQUFrQnZDLElBQWxCLENBQVA7QUFDRCxDQUZEO0FBR0E7OztBQUdBd0IsT0FBT2tDLGVBQVAsR0FBeUIsVUFBVTFELElBQVYsRUFBZ0I7QUFDdkMsU0FBT3VDLFlBQVksSUFBWixFQUFrQnZDLElBQWxCLENBQVA7QUFDRCxDQUZEOztBQUlBLFNBQVM4QyxVQUFULENBQXFCWCxJQUFyQixFQUEyQndCLE1BQTNCLEVBQW1DSCxRQUFuQyxFQUE2QztBQUMzQyxNQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBcEIsSUFBZ0NBLGFBQWEsRUFBakQsRUFBcUQ7QUFDbkRBLGVBQVcsTUFBWDtBQUNEOztBQUVELE1BQUksQ0FBQ2hDLE9BQU9vQyxVQUFQLENBQWtCSixRQUFsQixDQUFMLEVBQWtDO0FBQ2hDLFVBQU0sSUFBSVosU0FBSixDQUFjLDRDQUFkLENBQU47QUFDRDs7QUFFRCxNQUFJak0sU0FBUzBFLFdBQVdzSSxNQUFYLEVBQW1CSCxRQUFuQixJQUErQixDQUE1QztBQUNBckIsU0FBT0QsYUFBYUMsSUFBYixFQUFtQnhMLE1BQW5CLENBQVA7O0FBRUEsTUFBSWtOLFNBQVMxQixLQUFLMkIsS0FBTCxDQUFXSCxNQUFYLEVBQW1CSCxRQUFuQixDQUFiOztBQUVBLE1BQUlLLFdBQVdsTixNQUFmLEVBQXVCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBd0wsV0FBT0EsS0FBSzdHLEtBQUwsQ0FBVyxDQUFYLEVBQWN1SSxNQUFkLENBQVA7QUFDRDs7QUFFRCxTQUFPMUIsSUFBUDtBQUNEOztBQUVELFNBQVM0QixhQUFULENBQXdCNUIsSUFBeEIsRUFBOEI2QixLQUE5QixFQUFxQztBQUNuQyxNQUFJck4sU0FBU3FOLE1BQU1yTixNQUFOLEdBQWUsQ0FBZixHQUFtQixDQUFuQixHQUF1QjhNLFFBQVFPLE1BQU1yTixNQUFkLElBQXdCLENBQTVEO0FBQ0F3TCxTQUFPRCxhQUFhQyxJQUFiLEVBQW1CeEwsTUFBbkIsQ0FBUDtBQUNBLE9BQUssSUFBSStFLElBQUksQ0FBYixFQUFnQkEsSUFBSS9FLE1BQXBCLEVBQTRCK0UsS0FBSyxDQUFqQyxFQUFvQztBQUNsQ3lHLFNBQUt6RyxDQUFMLElBQVVzSSxNQUFNdEksQ0FBTixJQUFXLEdBQXJCO0FBQ0Q7QUFDRCxTQUFPeUcsSUFBUDtBQUNEOztBQUVELFNBQVNVLGVBQVQsQ0FBMEJWLElBQTFCLEVBQWdDNkIsS0FBaEMsRUFBdUNuRCxVQUF2QyxFQUFtRGxLLE1BQW5ELEVBQTJEO0FBQ3pEcU4sUUFBTTNJLFVBQU4sQ0FEeUQsQ0FDeEM7O0FBRWpCLE1BQUl3RixhQUFhLENBQWIsSUFBa0JtRCxNQUFNM0ksVUFBTixHQUFtQndGLFVBQXpDLEVBQXFEO0FBQ25ELFVBQU0sSUFBSXVCLFVBQUosQ0FBZSw2QkFBZixDQUFOO0FBQ0Q7O0FBRUQsTUFBSTRCLE1BQU0zSSxVQUFOLEdBQW1Cd0YsY0FBY2xLLFVBQVUsQ0FBeEIsQ0FBdkIsRUFBbUQ7QUFDakQsVUFBTSxJQUFJeUwsVUFBSixDQUFlLDZCQUFmLENBQU47QUFDRDs7QUFFRCxNQUFJdkIsZUFBZVEsU0FBZixJQUE0QjFLLFdBQVcwSyxTQUEzQyxFQUFzRDtBQUNwRDJDLFlBQVEsSUFBSXZJLFVBQUosQ0FBZXVJLEtBQWYsQ0FBUjtBQUNELEdBRkQsTUFFTyxJQUFJck4sV0FBVzBLLFNBQWYsRUFBMEI7QUFDL0IyQyxZQUFRLElBQUl2SSxVQUFKLENBQWV1SSxLQUFmLEVBQXNCbkQsVUFBdEIsQ0FBUjtBQUNELEdBRk0sTUFFQTtBQUNMbUQsWUFBUSxJQUFJdkksVUFBSixDQUFldUksS0FBZixFQUFzQm5ELFVBQXRCLEVBQWtDbEssTUFBbEMsQ0FBUjtBQUNEOztBQUVELE1BQUk2SyxPQUFPRyxtQkFBWCxFQUFnQztBQUM5QjtBQUNBUSxXQUFPNkIsS0FBUDtBQUNBN0IsU0FBS0osU0FBTCxHQUFpQlAsT0FBT2hNLFNBQXhCO0FBQ0QsR0FKRCxNQUlPO0FBQ0w7QUFDQTJNLFdBQU80QixjQUFjNUIsSUFBZCxFQUFvQjZCLEtBQXBCLENBQVA7QUFDRDtBQUNELFNBQU83QixJQUFQO0FBQ0Q7O0FBRUQsU0FBU1ksVUFBVCxDQUFxQlosSUFBckIsRUFBMkI4QixHQUEzQixFQUFnQztBQUM5QixNQUFJekMsT0FBTzBDLFFBQVAsQ0FBZ0JELEdBQWhCLENBQUosRUFBMEI7QUFDeEIsUUFBSTdHLE1BQU1xRyxRQUFRUSxJQUFJdE4sTUFBWixJQUFzQixDQUFoQztBQUNBd0wsV0FBT0QsYUFBYUMsSUFBYixFQUFtQi9FLEdBQW5CLENBQVA7O0FBRUEsUUFBSStFLEtBQUt4TCxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGFBQU93TCxJQUFQO0FBQ0Q7O0FBRUQ4QixRQUFJckQsSUFBSixDQUFTdUIsSUFBVCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIvRSxHQUFyQjtBQUNBLFdBQU8rRSxJQUFQO0FBQ0Q7O0FBRUQsTUFBSThCLEdBQUosRUFBUztBQUNQLFFBQUssT0FBTzFJLFdBQVAsS0FBdUIsV0FBdkIsSUFDRDBJLElBQUlySSxNQUFKLFlBQXNCTCxXQUR0QixJQUNzQyxZQUFZMEksR0FEdEQsRUFDMkQ7QUFDekQsVUFBSSxPQUFPQSxJQUFJdE4sTUFBWCxLQUFzQixRQUF0QixJQUFrQ3dOLE1BQU1GLElBQUl0TixNQUFWLENBQXRDLEVBQXlEO0FBQ3ZELGVBQU91TCxhQUFhQyxJQUFiLEVBQW1CLENBQW5CLENBQVA7QUFDRDtBQUNELGFBQU80QixjQUFjNUIsSUFBZCxFQUFvQjhCLEdBQXBCLENBQVA7QUFDRDs7QUFFRCxRQUFJQSxJQUFJOUMsSUFBSixLQUFhLFFBQWIsSUFBeUJJLFFBQVEwQyxJQUFJck8sSUFBWixDQUE3QixFQUFnRDtBQUM5QyxhQUFPbU8sY0FBYzVCLElBQWQsRUFBb0I4QixJQUFJck8sSUFBeEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsUUFBTSxJQUFJZ04sU0FBSixDQUFjLG9GQUFkLENBQU47QUFDRDs7QUFFRCxTQUFTYSxPQUFULENBQWtCOU0sTUFBbEIsRUFBMEI7QUFDeEI7QUFDQTtBQUNBLE1BQUlBLFVBQVVtTCxZQUFkLEVBQTRCO0FBQzFCLFVBQU0sSUFBSU0sVUFBSixDQUFlLG9EQUNBLFVBREEsR0FDYU4sYUFBYXNDLFFBQWIsQ0FBc0IsRUFBdEIsQ0FEYixHQUN5QyxRQUR4RCxDQUFOO0FBRUQ7QUFDRCxTQUFPek4sU0FBUyxDQUFoQjtBQUNEOztBQUVELFNBQVM4SyxVQUFULENBQXFCOUssTUFBckIsRUFBNkI7QUFDM0IsTUFBSSxDQUFDQSxNQUFELElBQVdBLE1BQWYsRUFBdUI7QUFBRTtBQUN2QkEsYUFBUyxDQUFUO0FBQ0Q7QUFDRCxTQUFPNkssT0FBTzhCLEtBQVAsQ0FBYSxDQUFDM00sTUFBZCxDQUFQO0FBQ0Q7O0FBRUQ2SyxPQUFPMEMsUUFBUCxHQUFrQixTQUFTQSxRQUFULENBQW1CL0QsQ0FBbkIsRUFBc0I7QUFDdEMsU0FBTyxDQUFDLEVBQUVBLEtBQUssSUFBTCxJQUFhQSxFQUFFa0UsU0FBakIsQ0FBUjtBQUNELENBRkQ7O0FBSUE3QyxPQUFPOEMsT0FBUCxHQUFpQixTQUFTQSxPQUFULENBQWtCeEUsQ0FBbEIsRUFBcUJLLENBQXJCLEVBQXdCO0FBQ3ZDLE1BQUksQ0FBQ3FCLE9BQU8wQyxRQUFQLENBQWdCcEUsQ0FBaEIsQ0FBRCxJQUF1QixDQUFDMEIsT0FBTzBDLFFBQVAsQ0FBZ0IvRCxDQUFoQixDQUE1QixFQUFnRDtBQUM5QyxVQUFNLElBQUl5QyxTQUFKLENBQWMsMkJBQWQsQ0FBTjtBQUNEOztBQUVELE1BQUk5QyxNQUFNSyxDQUFWLEVBQWEsT0FBTyxDQUFQOztBQUViLE1BQUlvRSxJQUFJekUsRUFBRW5KLE1BQVY7QUFDQSxNQUFJNk4sSUFBSXJFLEVBQUV4SixNQUFWOztBQUVBLE9BQUssSUFBSStFLElBQUksQ0FBUixFQUFXMEIsTUFBTWQsS0FBS04sR0FBTCxDQUFTdUksQ0FBVCxFQUFZQyxDQUFaLENBQXRCLEVBQXNDOUksSUFBSTBCLEdBQTFDLEVBQStDLEVBQUUxQixDQUFqRCxFQUFvRDtBQUNsRCxRQUFJb0UsRUFBRXBFLENBQUYsTUFBU3lFLEVBQUV6RSxDQUFGLENBQWIsRUFBbUI7QUFDakI2SSxVQUFJekUsRUFBRXBFLENBQUYsQ0FBSjtBQUNBOEksVUFBSXJFLEVBQUV6RSxDQUFGLENBQUo7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsTUFBSTZJLElBQUlDLENBQVIsRUFBVyxPQUFPLENBQUMsQ0FBUjtBQUNYLE1BQUlBLElBQUlELENBQVIsRUFBVyxPQUFPLENBQVA7QUFDWCxTQUFPLENBQVA7QUFDRCxDQXJCRDs7QUF1QkEvQyxPQUFPb0MsVUFBUCxHQUFvQixTQUFTQSxVQUFULENBQXFCSixRQUFyQixFQUErQjtBQUNqRCxVQUFRaUIsT0FBT2pCLFFBQVAsRUFBaUJrQixXQUFqQixFQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0EsU0FBSyxRQUFMO0FBQ0EsU0FBSyxRQUFMO0FBQ0EsU0FBSyxRQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0UsYUFBTyxJQUFQO0FBQ0Y7QUFDRSxhQUFPLEtBQVA7QUFkSjtBQWdCRCxDQWpCRDs7QUFtQkFsRCxPQUFPbUQsTUFBUCxHQUFnQixTQUFTQSxNQUFULENBQWlCQyxJQUFqQixFQUF1QmpPLE1BQXZCLEVBQStCO0FBQzdDLE1BQUksQ0FBQzRLLFFBQVFxRCxJQUFSLENBQUwsRUFBb0I7QUFDbEIsVUFBTSxJQUFJaEMsU0FBSixDQUFjLDZDQUFkLENBQU47QUFDRDs7QUFFRCxNQUFJZ0MsS0FBS2pPLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsV0FBTzZLLE9BQU84QixLQUFQLENBQWEsQ0FBYixDQUFQO0FBQ0Q7O0FBRUQsTUFBSTVILENBQUo7QUFDQSxNQUFJL0UsV0FBVzBLLFNBQWYsRUFBMEI7QUFDeEIxSyxhQUFTLENBQVQ7QUFDQSxTQUFLK0UsSUFBSSxDQUFULEVBQVlBLElBQUlrSixLQUFLak8sTUFBckIsRUFBNkIsRUFBRStFLENBQS9CLEVBQWtDO0FBQ2hDL0UsZ0JBQVVpTyxLQUFLbEosQ0FBTCxFQUFRL0UsTUFBbEI7QUFDRDtBQUNGOztBQUVELE1BQUlpRixTQUFTNEYsT0FBT2UsV0FBUCxDQUFtQjVMLE1BQW5CLENBQWI7QUFDQSxNQUFJa08sTUFBTSxDQUFWO0FBQ0EsT0FBS25KLElBQUksQ0FBVCxFQUFZQSxJQUFJa0osS0FBS2pPLE1BQXJCLEVBQTZCLEVBQUUrRSxDQUEvQixFQUFrQztBQUNoQyxRQUFJaUYsTUFBTWlFLEtBQUtsSixDQUFMLENBQVY7QUFDQSxRQUFJLENBQUM4RixPQUFPMEMsUUFBUCxDQUFnQnZELEdBQWhCLENBQUwsRUFBMkI7QUFDekIsWUFBTSxJQUFJaUMsU0FBSixDQUFjLDZDQUFkLENBQU47QUFDRDtBQUNEakMsUUFBSUMsSUFBSixDQUFTaEYsTUFBVCxFQUFpQmlKLEdBQWpCO0FBQ0FBLFdBQU9sRSxJQUFJaEssTUFBWDtBQUNEO0FBQ0QsU0FBT2lGLE1BQVA7QUFDRCxDQTVCRDs7QUE4QkEsU0FBU1AsVUFBVCxDQUFxQnNJLE1BQXJCLEVBQTZCSCxRQUE3QixFQUF1QztBQUNyQyxNQUFJaEMsT0FBTzBDLFFBQVAsQ0FBZ0JQLE1BQWhCLENBQUosRUFBNkI7QUFDM0IsV0FBT0EsT0FBT2hOLE1BQWQ7QUFDRDtBQUNELE1BQUksT0FBTzRFLFdBQVAsS0FBdUIsV0FBdkIsSUFBc0MsT0FBT0EsWUFBWXVKLE1BQW5CLEtBQThCLFVBQXBFLEtBQ0N2SixZQUFZdUosTUFBWixDQUFtQm5CLE1BQW5CLEtBQThCQSxrQkFBa0JwSSxXQURqRCxDQUFKLEVBQ21FO0FBQ2pFLFdBQU9vSSxPQUFPdEksVUFBZDtBQUNEO0FBQ0QsTUFBSSxPQUFPc0ksTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QkEsYUFBUyxLQUFLQSxNQUFkO0FBQ0Q7O0FBRUQsTUFBSXZHLE1BQU11RyxPQUFPaE4sTUFBakI7QUFDQSxNQUFJeUcsUUFBUSxDQUFaLEVBQWUsT0FBTyxDQUFQOztBQUVmO0FBQ0EsTUFBSTJILGNBQWMsS0FBbEI7QUFDQSxXQUFTO0FBQ1AsWUFBUXZCLFFBQVI7QUFDRSxXQUFLLE9BQUw7QUFDQSxXQUFLLFFBQUw7QUFDQSxXQUFLLFFBQUw7QUFDRSxlQUFPcEcsR0FBUDtBQUNGLFdBQUssTUFBTDtBQUNBLFdBQUssT0FBTDtBQUNBLFdBQUtpRSxTQUFMO0FBQ0UsZUFBTzJELFlBQVlyQixNQUFaLEVBQW9CaE4sTUFBM0I7QUFDRixXQUFLLE1BQUw7QUFDQSxXQUFLLE9BQUw7QUFDQSxXQUFLLFNBQUw7QUFDQSxXQUFLLFVBQUw7QUFDRSxlQUFPeUcsTUFBTSxDQUFiO0FBQ0YsV0FBSyxLQUFMO0FBQ0UsZUFBT0EsUUFBUSxDQUFmO0FBQ0YsV0FBSyxRQUFMO0FBQ0UsZUFBTzZILGNBQWN0QixNQUFkLEVBQXNCaE4sTUFBN0I7QUFDRjtBQUNFLFlBQUlvTyxXQUFKLEVBQWlCLE9BQU9DLFlBQVlyQixNQUFaLEVBQW9CaE4sTUFBM0IsQ0FEbkIsQ0FDcUQ7QUFDbkQ2TSxtQkFBVyxDQUFDLEtBQUtBLFFBQU4sRUFBZ0JrQixXQUFoQixFQUFYO0FBQ0FLLHNCQUFjLElBQWQ7QUFyQko7QUF1QkQ7QUFDRjtBQUNEdkQsT0FBT25HLFVBQVAsR0FBb0JBLFVBQXBCOztBQUVBLFNBQVM2SixZQUFULENBQXVCMUIsUUFBdkIsRUFBaUN0SSxLQUFqQyxFQUF3Q0MsR0FBeEMsRUFBNkM7QUFDM0MsTUFBSTRKLGNBQWMsS0FBbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUk3SixVQUFVbUcsU0FBVixJQUF1Qm5HLFFBQVEsQ0FBbkMsRUFBc0M7QUFDcENBLFlBQVEsQ0FBUjtBQUNEO0FBQ0Q7QUFDQTtBQUNBLE1BQUlBLFFBQVEsS0FBS3ZFLE1BQWpCLEVBQXlCO0FBQ3ZCLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQUl3RSxRQUFRa0csU0FBUixJQUFxQmxHLE1BQU0sS0FBS3hFLE1BQXBDLEVBQTRDO0FBQzFDd0UsVUFBTSxLQUFLeEUsTUFBWDtBQUNEOztBQUVELE1BQUl3RSxPQUFPLENBQVgsRUFBYztBQUNaLFdBQU8sRUFBUDtBQUNEOztBQUVEO0FBQ0FBLFdBQVMsQ0FBVDtBQUNBRCxhQUFXLENBQVg7O0FBRUEsTUFBSUMsT0FBT0QsS0FBWCxFQUFrQjtBQUNoQixXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNzSSxRQUFMLEVBQWVBLFdBQVcsTUFBWDs7QUFFZixTQUFPLElBQVAsRUFBYTtBQUNYLFlBQVFBLFFBQVI7QUFDRSxXQUFLLEtBQUw7QUFDRSxlQUFPMkIsU0FBUyxJQUFULEVBQWVqSyxLQUFmLEVBQXNCQyxHQUF0QixDQUFQOztBQUVGLFdBQUssTUFBTDtBQUNBLFdBQUssT0FBTDtBQUNFLGVBQU9pSyxVQUFVLElBQVYsRUFBZ0JsSyxLQUFoQixFQUF1QkMsR0FBdkIsQ0FBUDs7QUFFRixXQUFLLE9BQUw7QUFDRSxlQUFPa0ssV0FBVyxJQUFYLEVBQWlCbkssS0FBakIsRUFBd0JDLEdBQXhCLENBQVA7O0FBRUYsV0FBSyxRQUFMO0FBQ0EsV0FBSyxRQUFMO0FBQ0UsZUFBT21LLFlBQVksSUFBWixFQUFrQnBLLEtBQWxCLEVBQXlCQyxHQUF6QixDQUFQOztBQUVGLFdBQUssUUFBTDtBQUNFLGVBQU9vSyxZQUFZLElBQVosRUFBa0JySyxLQUFsQixFQUF5QkMsR0FBekIsQ0FBUDs7QUFFRixXQUFLLE1BQUw7QUFDQSxXQUFLLE9BQUw7QUFDQSxXQUFLLFNBQUw7QUFDQSxXQUFLLFVBQUw7QUFDRSxlQUFPcUssYUFBYSxJQUFiLEVBQW1CdEssS0FBbkIsRUFBMEJDLEdBQTFCLENBQVA7O0FBRUY7QUFDRSxZQUFJNEosV0FBSixFQUFpQixNQUFNLElBQUluQyxTQUFKLENBQWMsdUJBQXVCWSxRQUFyQyxDQUFOO0FBQ2pCQSxtQkFBVyxDQUFDQSxXQUFXLEVBQVosRUFBZ0JrQixXQUFoQixFQUFYO0FBQ0FLLHNCQUFjLElBQWQ7QUEzQko7QUE2QkQ7QUFDRjs7QUFFRDtBQUNBO0FBQ0F2RCxPQUFPaE0sU0FBUCxDQUFpQjZPLFNBQWpCLEdBQTZCLElBQTdCOztBQUVBLFNBQVNvQixJQUFULENBQWV0RixDQUFmLEVBQWtCdUYsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQ3RCLE1BQUlqSyxJQUFJeUUsRUFBRXVGLENBQUYsQ0FBUjtBQUNBdkYsSUFBRXVGLENBQUYsSUFBT3ZGLEVBQUV3RixDQUFGLENBQVA7QUFDQXhGLElBQUV3RixDQUFGLElBQU9qSyxDQUFQO0FBQ0Q7O0FBRUQ4RixPQUFPaE0sU0FBUCxDQUFpQm9RLE1BQWpCLEdBQTBCLFNBQVNBLE1BQVQsR0FBbUI7QUFDM0MsTUFBSXhJLE1BQU0sS0FBS3pHLE1BQWY7QUFDQSxNQUFJeUcsTUFBTSxDQUFOLEtBQVksQ0FBaEIsRUFBbUI7QUFDakIsVUFBTSxJQUFJZ0YsVUFBSixDQUFlLDJDQUFmLENBQU47QUFDRDtBQUNELE9BQUssSUFBSTFHLElBQUksQ0FBYixFQUFnQkEsSUFBSTBCLEdBQXBCLEVBQXlCMUIsS0FBSyxDQUE5QixFQUFpQztBQUMvQitKLFNBQUssSUFBTCxFQUFXL0osQ0FBWCxFQUFjQSxJQUFJLENBQWxCO0FBQ0Q7QUFDRCxTQUFPLElBQVA7QUFDRCxDQVREOztBQVdBOEYsT0FBT2hNLFNBQVAsQ0FBaUJxUSxNQUFqQixHQUEwQixTQUFTQSxNQUFULEdBQW1CO0FBQzNDLE1BQUl6SSxNQUFNLEtBQUt6RyxNQUFmO0FBQ0EsTUFBSXlHLE1BQU0sQ0FBTixLQUFZLENBQWhCLEVBQW1CO0FBQ2pCLFVBQU0sSUFBSWdGLFVBQUosQ0FBZSwyQ0FBZixDQUFOO0FBQ0Q7QUFDRCxPQUFLLElBQUkxRyxJQUFJLENBQWIsRUFBZ0JBLElBQUkwQixHQUFwQixFQUF5QjFCLEtBQUssQ0FBOUIsRUFBaUM7QUFDL0IrSixTQUFLLElBQUwsRUFBVy9KLENBQVgsRUFBY0EsSUFBSSxDQUFsQjtBQUNBK0osU0FBSyxJQUFMLEVBQVcvSixJQUFJLENBQWYsRUFBa0JBLElBQUksQ0FBdEI7QUFDRDtBQUNELFNBQU8sSUFBUDtBQUNELENBVkQ7O0FBWUE4RixPQUFPaE0sU0FBUCxDQUFpQnNRLE1BQWpCLEdBQTBCLFNBQVNBLE1BQVQsR0FBbUI7QUFDM0MsTUFBSTFJLE1BQU0sS0FBS3pHLE1BQWY7QUFDQSxNQUFJeUcsTUFBTSxDQUFOLEtBQVksQ0FBaEIsRUFBbUI7QUFDakIsVUFBTSxJQUFJZ0YsVUFBSixDQUFlLDJDQUFmLENBQU47QUFDRDtBQUNELE9BQUssSUFBSTFHLElBQUksQ0FBYixFQUFnQkEsSUFBSTBCLEdBQXBCLEVBQXlCMUIsS0FBSyxDQUE5QixFQUFpQztBQUMvQitKLFNBQUssSUFBTCxFQUFXL0osQ0FBWCxFQUFjQSxJQUFJLENBQWxCO0FBQ0ErSixTQUFLLElBQUwsRUFBVy9KLElBQUksQ0FBZixFQUFrQkEsSUFBSSxDQUF0QjtBQUNBK0osU0FBSyxJQUFMLEVBQVcvSixJQUFJLENBQWYsRUFBa0JBLElBQUksQ0FBdEI7QUFDQStKLFNBQUssSUFBTCxFQUFXL0osSUFBSSxDQUFmLEVBQWtCQSxJQUFJLENBQXRCO0FBQ0Q7QUFDRCxTQUFPLElBQVA7QUFDRCxDQVpEOztBQWNBOEYsT0FBT2hNLFNBQVAsQ0FBaUI0TyxRQUFqQixHQUE0QixTQUFTQSxRQUFULEdBQXFCO0FBQy9DLE1BQUl6TixTQUFTLEtBQUtBLE1BQUwsR0FBYyxDQUEzQjtBQUNBLE1BQUlBLFdBQVcsQ0FBZixFQUFrQixPQUFPLEVBQVA7QUFDbEIsTUFBSW9QLFVBQVVwUCxNQUFWLEtBQXFCLENBQXpCLEVBQTRCLE9BQU95TyxVQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUJ6TyxNQUFuQixDQUFQO0FBQzVCLFNBQU91TyxhQUFhYyxLQUFiLENBQW1CLElBQW5CLEVBQXlCRCxTQUF6QixDQUFQO0FBQ0QsQ0FMRDs7QUFPQXZFLE9BQU9oTSxTQUFQLENBQWlCeVEsTUFBakIsR0FBMEIsU0FBU0EsTUFBVCxDQUFpQjlGLENBQWpCLEVBQW9CO0FBQzVDLE1BQUksQ0FBQ3FCLE9BQU8wQyxRQUFQLENBQWdCL0QsQ0FBaEIsQ0FBTCxFQUF5QixNQUFNLElBQUl5QyxTQUFKLENBQWMsMkJBQWQsQ0FBTjtBQUN6QixNQUFJLFNBQVN6QyxDQUFiLEVBQWdCLE9BQU8sSUFBUDtBQUNoQixTQUFPcUIsT0FBTzhDLE9BQVAsQ0FBZSxJQUFmLEVBQXFCbkUsQ0FBckIsTUFBNEIsQ0FBbkM7QUFDRCxDQUpEOztBQU1BcUIsT0FBT2hNLFNBQVAsQ0FBaUIwUSxPQUFqQixHQUEyQixTQUFTQSxPQUFULEdBQW9CO0FBQzdDLE1BQUlDLE1BQU0sRUFBVjtBQUNBLE1BQUlsSyxNQUFNMUIsUUFBUW1ILGlCQUFsQjtBQUNBLE1BQUksS0FBSy9LLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQndQLFVBQU0sS0FBSy9CLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLENBQXJCLEVBQXdCbkksR0FBeEIsRUFBNkJtSyxLQUE3QixDQUFtQyxPQUFuQyxFQUE0Q2hILElBQTVDLENBQWlELEdBQWpELENBQU47QUFDQSxRQUFJLEtBQUt6SSxNQUFMLEdBQWNzRixHQUFsQixFQUF1QmtLLE9BQU8sT0FBUDtBQUN4QjtBQUNELFNBQU8sYUFBYUEsR0FBYixHQUFtQixHQUExQjtBQUNELENBUkQ7O0FBVUEzRSxPQUFPaE0sU0FBUCxDQUFpQjhPLE9BQWpCLEdBQTJCLFNBQVNBLE9BQVQsQ0FBa0IrQixNQUFsQixFQUEwQm5MLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQ21MLFNBQXRDLEVBQWlEQyxPQUFqRCxFQUEwRDtBQUNuRixNQUFJLENBQUMvRSxPQUFPMEMsUUFBUCxDQUFnQm1DLE1BQWhCLENBQUwsRUFBOEI7QUFDNUIsVUFBTSxJQUFJekQsU0FBSixDQUFjLDJCQUFkLENBQU47QUFDRDs7QUFFRCxNQUFJMUgsVUFBVW1HLFNBQWQsRUFBeUI7QUFDdkJuRyxZQUFRLENBQVI7QUFDRDtBQUNELE1BQUlDLFFBQVFrRyxTQUFaLEVBQXVCO0FBQ3JCbEcsVUFBTWtMLFNBQVNBLE9BQU8xUCxNQUFoQixHQUF5QixDQUEvQjtBQUNEO0FBQ0QsTUFBSTJQLGNBQWNqRixTQUFsQixFQUE2QjtBQUMzQmlGLGdCQUFZLENBQVo7QUFDRDtBQUNELE1BQUlDLFlBQVlsRixTQUFoQixFQUEyQjtBQUN6QmtGLGNBQVUsS0FBSzVQLE1BQWY7QUFDRDs7QUFFRCxNQUFJdUUsUUFBUSxDQUFSLElBQWFDLE1BQU1rTCxPQUFPMVAsTUFBMUIsSUFBb0MyUCxZQUFZLENBQWhELElBQXFEQyxVQUFVLEtBQUs1UCxNQUF4RSxFQUFnRjtBQUM5RSxVQUFNLElBQUl5TCxVQUFKLENBQWUsb0JBQWYsQ0FBTjtBQUNEOztBQUVELE1BQUlrRSxhQUFhQyxPQUFiLElBQXdCckwsU0FBU0MsR0FBckMsRUFBMEM7QUFDeEMsV0FBTyxDQUFQO0FBQ0Q7QUFDRCxNQUFJbUwsYUFBYUMsT0FBakIsRUFBMEI7QUFDeEIsV0FBTyxDQUFDLENBQVI7QUFDRDtBQUNELE1BQUlyTCxTQUFTQyxHQUFiLEVBQWtCO0FBQ2hCLFdBQU8sQ0FBUDtBQUNEOztBQUVERCxhQUFXLENBQVg7QUFDQUMsV0FBUyxDQUFUO0FBQ0FtTCxpQkFBZSxDQUFmO0FBQ0FDLGVBQWEsQ0FBYjs7QUFFQSxNQUFJLFNBQVNGLE1BQWIsRUFBcUIsT0FBTyxDQUFQOztBQUVyQixNQUFJOUIsSUFBSWdDLFVBQVVELFNBQWxCO0FBQ0EsTUFBSTlCLElBQUlySixNQUFNRCxLQUFkO0FBQ0EsTUFBSWtDLE1BQU1kLEtBQUtOLEdBQUwsQ0FBU3VJLENBQVQsRUFBWUMsQ0FBWixDQUFWOztBQUVBLE1BQUlnQyxXQUFXLEtBQUtsTCxLQUFMLENBQVdnTCxTQUFYLEVBQXNCQyxPQUF0QixDQUFmO0FBQ0EsTUFBSUUsYUFBYUosT0FBTy9LLEtBQVAsQ0FBYUosS0FBYixFQUFvQkMsR0FBcEIsQ0FBakI7O0FBRUEsT0FBSyxJQUFJTyxJQUFJLENBQWIsRUFBZ0JBLElBQUkwQixHQUFwQixFQUF5QixFQUFFMUIsQ0FBM0IsRUFBOEI7QUFDNUIsUUFBSThLLFNBQVM5SyxDQUFULE1BQWdCK0ssV0FBVy9LLENBQVgsQ0FBcEIsRUFBbUM7QUFDakM2SSxVQUFJaUMsU0FBUzlLLENBQVQsQ0FBSjtBQUNBOEksVUFBSWlDLFdBQVcvSyxDQUFYLENBQUo7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsTUFBSTZJLElBQUlDLENBQVIsRUFBVyxPQUFPLENBQUMsQ0FBUjtBQUNYLE1BQUlBLElBQUlELENBQVIsRUFBVyxPQUFPLENBQVA7QUFDWCxTQUFPLENBQVA7QUFDRCxDQXpERDs7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU21DLG9CQUFULENBQStCOUssTUFBL0IsRUFBdUMrSyxHQUF2QyxFQUE0QzlGLFVBQTVDLEVBQXdEMkMsUUFBeEQsRUFBa0VvRCxHQUFsRSxFQUF1RTtBQUNyRTtBQUNBLE1BQUloTCxPQUFPakYsTUFBUCxLQUFrQixDQUF0QixFQUF5QixPQUFPLENBQUMsQ0FBUjs7QUFFekI7QUFDQSxNQUFJLE9BQU9rSyxVQUFQLEtBQXNCLFFBQTFCLEVBQW9DO0FBQ2xDMkMsZUFBVzNDLFVBQVg7QUFDQUEsaUJBQWEsQ0FBYjtBQUNELEdBSEQsTUFHTyxJQUFJQSxhQUFhLFVBQWpCLEVBQTZCO0FBQ2xDQSxpQkFBYSxVQUFiO0FBQ0QsR0FGTSxNQUVBLElBQUlBLGFBQWEsQ0FBQyxVQUFsQixFQUE4QjtBQUNuQ0EsaUJBQWEsQ0FBQyxVQUFkO0FBQ0Q7QUFDREEsZUFBYSxDQUFDQSxVQUFkLENBYnFFLENBYTNDO0FBQzFCLE1BQUlnRyxNQUFNaEcsVUFBTixDQUFKLEVBQXVCO0FBQ3JCO0FBQ0FBLGlCQUFhK0YsTUFBTSxDQUFOLEdBQVdoTCxPQUFPakYsTUFBUCxHQUFnQixDQUF4QztBQUNEOztBQUVEO0FBQ0EsTUFBSWtLLGFBQWEsQ0FBakIsRUFBb0JBLGFBQWFqRixPQUFPakYsTUFBUCxHQUFnQmtLLFVBQTdCO0FBQ3BCLE1BQUlBLGNBQWNqRixPQUFPakYsTUFBekIsRUFBaUM7QUFDL0IsUUFBSWlRLEdBQUosRUFBUyxPQUFPLENBQUMsQ0FBUixDQUFULEtBQ0svRixhQUFhakYsT0FBT2pGLE1BQVAsR0FBZ0IsQ0FBN0I7QUFDTixHQUhELE1BR08sSUFBSWtLLGFBQWEsQ0FBakIsRUFBb0I7QUFDekIsUUFBSStGLEdBQUosRUFBUy9GLGFBQWEsQ0FBYixDQUFULEtBQ0ssT0FBTyxDQUFDLENBQVI7QUFDTjs7QUFFRDtBQUNBLE1BQUksT0FBTzhGLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUMzQkEsVUFBTW5GLE9BQU9nQixJQUFQLENBQVltRSxHQUFaLEVBQWlCbkQsUUFBakIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsTUFBSWhDLE9BQU8wQyxRQUFQLENBQWdCeUMsR0FBaEIsQ0FBSixFQUEwQjtBQUN4QjtBQUNBLFFBQUlBLElBQUloUSxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFDcEIsYUFBTyxDQUFDLENBQVI7QUFDRDtBQUNELFdBQU9tUSxhQUFhbEwsTUFBYixFQUFxQitLLEdBQXJCLEVBQTBCOUYsVUFBMUIsRUFBc0MyQyxRQUF0QyxFQUFnRG9ELEdBQWhELENBQVA7QUFDRCxHQU5ELE1BTU8sSUFBSSxPQUFPRCxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDbENBLFVBQU1BLE1BQU0sSUFBWixDQURrQyxDQUNqQjtBQUNqQixRQUFJbkYsT0FBT0csbUJBQVAsSUFDQSxPQUFPbEcsV0FBV2pHLFNBQVgsQ0FBcUIrSSxPQUE1QixLQUF3QyxVQUQ1QyxFQUN3RDtBQUN0RCxVQUFJcUksR0FBSixFQUFTO0FBQ1AsZUFBT25MLFdBQVdqRyxTQUFYLENBQXFCK0ksT0FBckIsQ0FBNkJ3SSxJQUE3QixDQUFrQ25MLE1BQWxDLEVBQTBDK0ssR0FBMUMsRUFBK0M5RixVQUEvQyxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT3BGLFdBQVdqRyxTQUFYLENBQXFCd1IsV0FBckIsQ0FBaUNELElBQWpDLENBQXNDbkwsTUFBdEMsRUFBOEMrSyxHQUE5QyxFQUFtRDlGLFVBQW5ELENBQVA7QUFDRDtBQUNGO0FBQ0QsV0FBT2lHLGFBQWFsTCxNQUFiLEVBQXFCLENBQUUrSyxHQUFGLENBQXJCLEVBQThCOUYsVUFBOUIsRUFBMEMyQyxRQUExQyxFQUFvRG9ELEdBQXBELENBQVA7QUFDRDs7QUFFRCxRQUFNLElBQUloRSxTQUFKLENBQWMsc0NBQWQsQ0FBTjtBQUNEOztBQUVELFNBQVNrRSxZQUFULENBQXVCbEksR0FBdkIsRUFBNEIrSCxHQUE1QixFQUFpQzlGLFVBQWpDLEVBQTZDMkMsUUFBN0MsRUFBdURvRCxHQUF2RCxFQUE0RDtBQUMxRCxNQUFJSyxZQUFZLENBQWhCO0FBQ0EsTUFBSUMsWUFBWXRJLElBQUlqSSxNQUFwQjtBQUNBLE1BQUl3USxZQUFZUixJQUFJaFEsTUFBcEI7O0FBRUEsTUFBSTZNLGFBQWFuQyxTQUFqQixFQUE0QjtBQUMxQm1DLGVBQVdpQixPQUFPakIsUUFBUCxFQUFpQmtCLFdBQWpCLEVBQVg7QUFDQSxRQUFJbEIsYUFBYSxNQUFiLElBQXVCQSxhQUFhLE9BQXBDLElBQ0FBLGFBQWEsU0FEYixJQUMwQkEsYUFBYSxVQUQzQyxFQUN1RDtBQUNyRCxVQUFJNUUsSUFBSWpJLE1BQUosR0FBYSxDQUFiLElBQWtCZ1EsSUFBSWhRLE1BQUosR0FBYSxDQUFuQyxFQUFzQztBQUNwQyxlQUFPLENBQUMsQ0FBUjtBQUNEO0FBQ0RzUSxrQkFBWSxDQUFaO0FBQ0FDLG1CQUFhLENBQWI7QUFDQUMsbUJBQWEsQ0FBYjtBQUNBdEcsb0JBQWMsQ0FBZDtBQUNEO0FBQ0Y7O0FBRUQsV0FBU3VHLElBQVQsQ0FBZXpHLEdBQWYsRUFBb0JqRixDQUFwQixFQUF1QjtBQUNyQixRQUFJdUwsY0FBYyxDQUFsQixFQUFxQjtBQUNuQixhQUFPdEcsSUFBSWpGLENBQUosQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9pRixJQUFJMEcsWUFBSixDQUFpQjNMLElBQUl1TCxTQUFyQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJdkwsQ0FBSjtBQUNBLE1BQUlrTCxHQUFKLEVBQVM7QUFDUCxRQUFJVSxhQUFhLENBQUMsQ0FBbEI7QUFDQSxTQUFLNUwsSUFBSW1GLFVBQVQsRUFBcUJuRixJQUFJd0wsU0FBekIsRUFBb0N4TCxHQUFwQyxFQUF5QztBQUN2QyxVQUFJMEwsS0FBS3hJLEdBQUwsRUFBVWxELENBQVYsTUFBaUIwTCxLQUFLVCxHQUFMLEVBQVVXLGVBQWUsQ0FBQyxDQUFoQixHQUFvQixDQUFwQixHQUF3QjVMLElBQUk0TCxVQUF0QyxDQUFyQixFQUF3RTtBQUN0RSxZQUFJQSxlQUFlLENBQUMsQ0FBcEIsRUFBdUJBLGFBQWE1TCxDQUFiO0FBQ3ZCLFlBQUlBLElBQUk0TCxVQUFKLEdBQWlCLENBQWpCLEtBQXVCSCxTQUEzQixFQUFzQyxPQUFPRyxhQUFhTCxTQUFwQjtBQUN2QyxPQUhELE1BR087QUFDTCxZQUFJSyxlQUFlLENBQUMsQ0FBcEIsRUFBdUI1TCxLQUFLQSxJQUFJNEwsVUFBVDtBQUN2QkEscUJBQWEsQ0FBQyxDQUFkO0FBQ0Q7QUFDRjtBQUNGLEdBWEQsTUFXTztBQUNMLFFBQUl6RyxhQUFhc0csU0FBYixHQUF5QkQsU0FBN0IsRUFBd0NyRyxhQUFhcUcsWUFBWUMsU0FBekI7QUFDeEMsU0FBS3pMLElBQUltRixVQUFULEVBQXFCbkYsS0FBSyxDQUExQixFQUE2QkEsR0FBN0IsRUFBa0M7QUFDaEMsVUFBSTZMLFFBQVEsSUFBWjtBQUNBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJTCxTQUFwQixFQUErQkssR0FBL0IsRUFBb0M7QUFDbEMsWUFBSUosS0FBS3hJLEdBQUwsRUFBVWxELElBQUk4TCxDQUFkLE1BQXFCSixLQUFLVCxHQUFMLEVBQVVhLENBQVYsQ0FBekIsRUFBdUM7QUFDckNELGtCQUFRLEtBQVI7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxVQUFJQSxLQUFKLEVBQVcsT0FBTzdMLENBQVA7QUFDWjtBQUNGOztBQUVELFNBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBRUQ4RixPQUFPaE0sU0FBUCxDQUFpQjJELFFBQWpCLEdBQTRCLFNBQVNBLFFBQVQsQ0FBbUJ3TixHQUFuQixFQUF3QjlGLFVBQXhCLEVBQW9DMkMsUUFBcEMsRUFBOEM7QUFDeEUsU0FBTyxLQUFLakYsT0FBTCxDQUFhb0ksR0FBYixFQUFrQjlGLFVBQWxCLEVBQThCMkMsUUFBOUIsTUFBNEMsQ0FBQyxDQUFwRDtBQUNELENBRkQ7O0FBSUFoQyxPQUFPaE0sU0FBUCxDQUFpQitJLE9BQWpCLEdBQTJCLFNBQVNBLE9BQVQsQ0FBa0JvSSxHQUFsQixFQUF1QjlGLFVBQXZCLEVBQW1DMkMsUUFBbkMsRUFBNkM7QUFDdEUsU0FBT2tELHFCQUFxQixJQUFyQixFQUEyQkMsR0FBM0IsRUFBZ0M5RixVQUFoQyxFQUE0QzJDLFFBQTVDLEVBQXNELElBQXRELENBQVA7QUFDRCxDQUZEOztBQUlBaEMsT0FBT2hNLFNBQVAsQ0FBaUJ3UixXQUFqQixHQUErQixTQUFTQSxXQUFULENBQXNCTCxHQUF0QixFQUEyQjlGLFVBQTNCLEVBQXVDMkMsUUFBdkMsRUFBaUQ7QUFDOUUsU0FBT2tELHFCQUFxQixJQUFyQixFQUEyQkMsR0FBM0IsRUFBZ0M5RixVQUFoQyxFQUE0QzJDLFFBQTVDLEVBQXNELEtBQXRELENBQVA7QUFDRCxDQUZEOztBQUlBLFNBQVNpRSxRQUFULENBQW1COUcsR0FBbkIsRUFBd0JnRCxNQUF4QixFQUFnQytELE1BQWhDLEVBQXdDL1EsTUFBeEMsRUFBZ0Q7QUFDOUMrUSxXQUFTQyxPQUFPRCxNQUFQLEtBQWtCLENBQTNCO0FBQ0EsTUFBSUUsWUFBWWpILElBQUloSyxNQUFKLEdBQWErUSxNQUE3QjtBQUNBLE1BQUksQ0FBQy9RLE1BQUwsRUFBYTtBQUNYQSxhQUFTaVIsU0FBVDtBQUNELEdBRkQsTUFFTztBQUNMalIsYUFBU2dSLE9BQU9oUixNQUFQLENBQVQ7QUFDQSxRQUFJQSxTQUFTaVIsU0FBYixFQUF3QjtBQUN0QmpSLGVBQVNpUixTQUFUO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLE1BQUlDLFNBQVNsRSxPQUFPaE4sTUFBcEI7QUFDQSxNQUFJa1IsU0FBUyxDQUFULEtBQWUsQ0FBbkIsRUFBc0IsTUFBTSxJQUFJakYsU0FBSixDQUFjLG9CQUFkLENBQU47O0FBRXRCLE1BQUlqTSxTQUFTa1IsU0FBUyxDQUF0QixFQUF5QjtBQUN2QmxSLGFBQVNrUixTQUFTLENBQWxCO0FBQ0Q7QUFDRCxPQUFLLElBQUluTSxJQUFJLENBQWIsRUFBZ0JBLElBQUkvRSxNQUFwQixFQUE0QixFQUFFK0UsQ0FBOUIsRUFBaUM7QUFDL0IsUUFBSW9NLFNBQVNDLFNBQVNwRSxPQUFPcUUsTUFBUCxDQUFjdE0sSUFBSSxDQUFsQixFQUFxQixDQUFyQixDQUFULEVBQWtDLEVBQWxDLENBQWI7QUFDQSxRQUFJbUwsTUFBTWlCLE1BQU4sQ0FBSixFQUFtQixPQUFPcE0sQ0FBUDtBQUNuQmlGLFFBQUkrRyxTQUFTaE0sQ0FBYixJQUFrQm9NLE1BQWxCO0FBQ0Q7QUFDRCxTQUFPcE0sQ0FBUDtBQUNEOztBQUVELFNBQVN1TSxTQUFULENBQW9CdEgsR0FBcEIsRUFBeUJnRCxNQUF6QixFQUFpQytELE1BQWpDLEVBQXlDL1EsTUFBekMsRUFBaUQ7QUFDL0MsU0FBT3VSLFdBQVdsRCxZQUFZckIsTUFBWixFQUFvQmhELElBQUloSyxNQUFKLEdBQWErUSxNQUFqQyxDQUFYLEVBQXFEL0csR0FBckQsRUFBMEQrRyxNQUExRCxFQUFrRS9RLE1BQWxFLENBQVA7QUFDRDs7QUFFRCxTQUFTd1IsVUFBVCxDQUFxQnhILEdBQXJCLEVBQTBCZ0QsTUFBMUIsRUFBa0MrRCxNQUFsQyxFQUEwQy9RLE1BQTFDLEVBQWtEO0FBQ2hELFNBQU91UixXQUFXRSxhQUFhekUsTUFBYixDQUFYLEVBQWlDaEQsR0FBakMsRUFBc0MrRyxNQUF0QyxFQUE4Qy9RLE1BQTlDLENBQVA7QUFDRDs7QUFFRCxTQUFTMFIsV0FBVCxDQUFzQjFILEdBQXRCLEVBQTJCZ0QsTUFBM0IsRUFBbUMrRCxNQUFuQyxFQUEyQy9RLE1BQTNDLEVBQW1EO0FBQ2pELFNBQU93UixXQUFXeEgsR0FBWCxFQUFnQmdELE1BQWhCLEVBQXdCK0QsTUFBeEIsRUFBZ0MvUSxNQUFoQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBUzJSLFdBQVQsQ0FBc0IzSCxHQUF0QixFQUEyQmdELE1BQTNCLEVBQW1DK0QsTUFBbkMsRUFBMkMvUSxNQUEzQyxFQUFtRDtBQUNqRCxTQUFPdVIsV0FBV2pELGNBQWN0QixNQUFkLENBQVgsRUFBa0NoRCxHQUFsQyxFQUF1QytHLE1BQXZDLEVBQStDL1EsTUFBL0MsQ0FBUDtBQUNEOztBQUVELFNBQVM0UixTQUFULENBQW9CNUgsR0FBcEIsRUFBeUJnRCxNQUF6QixFQUFpQytELE1BQWpDLEVBQXlDL1EsTUFBekMsRUFBaUQ7QUFDL0MsU0FBT3VSLFdBQVdNLGVBQWU3RSxNQUFmLEVBQXVCaEQsSUFBSWhLLE1BQUosR0FBYStRLE1BQXBDLENBQVgsRUFBd0QvRyxHQUF4RCxFQUE2RCtHLE1BQTdELEVBQXFFL1EsTUFBckUsQ0FBUDtBQUNEOztBQUVENkssT0FBT2hNLFNBQVAsQ0FBaUJzTyxLQUFqQixHQUF5QixTQUFTQSxLQUFULENBQWdCSCxNQUFoQixFQUF3QitELE1BQXhCLEVBQWdDL1EsTUFBaEMsRUFBd0M2TSxRQUF4QyxFQUFrRDtBQUN6RTtBQUNBLE1BQUlrRSxXQUFXckcsU0FBZixFQUEwQjtBQUN4Qm1DLGVBQVcsTUFBWDtBQUNBN00sYUFBUyxLQUFLQSxNQUFkO0FBQ0ErUSxhQUFTLENBQVQ7QUFDRjtBQUNDLEdBTEQsTUFLTyxJQUFJL1EsV0FBVzBLLFNBQVgsSUFBd0IsT0FBT3FHLE1BQVAsS0FBa0IsUUFBOUMsRUFBd0Q7QUFDN0RsRSxlQUFXa0UsTUFBWDtBQUNBL1EsYUFBUyxLQUFLQSxNQUFkO0FBQ0ErUSxhQUFTLENBQVQ7QUFDRjtBQUNDLEdBTE0sTUFLQSxJQUFJZSxTQUFTZixNQUFULENBQUosRUFBc0I7QUFDM0JBLGFBQVNBLFNBQVMsQ0FBbEI7QUFDQSxRQUFJZSxTQUFTOVIsTUFBVCxDQUFKLEVBQXNCO0FBQ3BCQSxlQUFTQSxTQUFTLENBQWxCO0FBQ0EsVUFBSTZNLGFBQWFuQyxTQUFqQixFQUE0Qm1DLFdBQVcsTUFBWDtBQUM3QixLQUhELE1BR087QUFDTEEsaUJBQVc3TSxNQUFYO0FBQ0FBLGVBQVMwSyxTQUFUO0FBQ0Q7QUFDSDtBQUNDLEdBVk0sTUFVQTtBQUNMLFVBQU0sSUFBSXZILEtBQUosQ0FDSix5RUFESSxDQUFOO0FBR0Q7O0FBRUQsTUFBSThOLFlBQVksS0FBS2pSLE1BQUwsR0FBYytRLE1BQTlCO0FBQ0EsTUFBSS9RLFdBQVcwSyxTQUFYLElBQXdCMUssU0FBU2lSLFNBQXJDLEVBQWdEalIsU0FBU2lSLFNBQVQ7O0FBRWhELE1BQUtqRSxPQUFPaE4sTUFBUCxHQUFnQixDQUFoQixLQUFzQkEsU0FBUyxDQUFULElBQWMrUSxTQUFTLENBQTdDLENBQUQsSUFBcURBLFNBQVMsS0FBSy9RLE1BQXZFLEVBQStFO0FBQzdFLFVBQU0sSUFBSXlMLFVBQUosQ0FBZSx3Q0FBZixDQUFOO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDb0IsUUFBTCxFQUFlQSxXQUFXLE1BQVg7O0FBRWYsTUFBSXVCLGNBQWMsS0FBbEI7QUFDQSxXQUFTO0FBQ1AsWUFBUXZCLFFBQVI7QUFDRSxXQUFLLEtBQUw7QUFDRSxlQUFPaUUsU0FBUyxJQUFULEVBQWU5RCxNQUFmLEVBQXVCK0QsTUFBdkIsRUFBK0IvUSxNQUEvQixDQUFQOztBQUVGLFdBQUssTUFBTDtBQUNBLFdBQUssT0FBTDtBQUNFLGVBQU9zUixVQUFVLElBQVYsRUFBZ0J0RSxNQUFoQixFQUF3QitELE1BQXhCLEVBQWdDL1EsTUFBaEMsQ0FBUDs7QUFFRixXQUFLLE9BQUw7QUFDRSxlQUFPd1IsV0FBVyxJQUFYLEVBQWlCeEUsTUFBakIsRUFBeUIrRCxNQUF6QixFQUFpQy9RLE1BQWpDLENBQVA7O0FBRUYsV0FBSyxRQUFMO0FBQ0EsV0FBSyxRQUFMO0FBQ0UsZUFBTzBSLFlBQVksSUFBWixFQUFrQjFFLE1BQWxCLEVBQTBCK0QsTUFBMUIsRUFBa0MvUSxNQUFsQyxDQUFQOztBQUVGLFdBQUssUUFBTDtBQUNFO0FBQ0EsZUFBTzJSLFlBQVksSUFBWixFQUFrQjNFLE1BQWxCLEVBQTBCK0QsTUFBMUIsRUFBa0MvUSxNQUFsQyxDQUFQOztBQUVGLFdBQUssTUFBTDtBQUNBLFdBQUssT0FBTDtBQUNBLFdBQUssU0FBTDtBQUNBLFdBQUssVUFBTDtBQUNFLGVBQU80UixVQUFVLElBQVYsRUFBZ0I1RSxNQUFoQixFQUF3QitELE1BQXhCLEVBQWdDL1EsTUFBaEMsQ0FBUDs7QUFFRjtBQUNFLFlBQUlvTyxXQUFKLEVBQWlCLE1BQU0sSUFBSW5DLFNBQUosQ0FBYyx1QkFBdUJZLFFBQXJDLENBQU47QUFDakJBLG1CQUFXLENBQUMsS0FBS0EsUUFBTixFQUFnQmtCLFdBQWhCLEVBQVg7QUFDQUssc0JBQWMsSUFBZDtBQTVCSjtBQThCRDtBQUNGLENBdEVEOztBQXdFQXZELE9BQU9oTSxTQUFQLENBQWlCa1QsTUFBakIsR0FBMEIsU0FBU0EsTUFBVCxHQUFtQjtBQUMzQyxTQUFPO0FBQ0x2SCxVQUFNLFFBREQ7QUFFTHZMLFVBQU1zSSxNQUFNMUksU0FBTixDQUFnQjhGLEtBQWhCLENBQXNCeUwsSUFBdEIsQ0FBMkIsS0FBSzRCLElBQUwsSUFBYSxJQUF4QyxFQUE4QyxDQUE5QztBQUZELEdBQVA7QUFJRCxDQUxEOztBQU9BLFNBQVNwRCxXQUFULENBQXNCNUUsR0FBdEIsRUFBMkJ6RixLQUEzQixFQUFrQ0MsR0FBbEMsRUFBdUM7QUFDckMsTUFBSUQsVUFBVSxDQUFWLElBQWVDLFFBQVF3RixJQUFJaEssTUFBL0IsRUFBdUM7QUFDckMsV0FBTzBHLE9BQU9VLGFBQVAsQ0FBcUI0QyxHQUFyQixDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT3RELE9BQU9VLGFBQVAsQ0FBcUI0QyxJQUFJckYsS0FBSixDQUFVSixLQUFWLEVBQWlCQyxHQUFqQixDQUFyQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTaUssU0FBVCxDQUFvQnpFLEdBQXBCLEVBQXlCekYsS0FBekIsRUFBZ0NDLEdBQWhDLEVBQXFDO0FBQ25DQSxRQUFNbUIsS0FBS04sR0FBTCxDQUFTMkUsSUFBSWhLLE1BQWIsRUFBcUJ3RSxHQUFyQixDQUFOO0FBQ0EsTUFBSXlOLE1BQU0sRUFBVjs7QUFFQSxNQUFJbE4sSUFBSVIsS0FBUjtBQUNBLFNBQU9RLElBQUlQLEdBQVgsRUFBZ0I7QUFDZCxRQUFJME4sWUFBWWxJLElBQUlqRixDQUFKLENBQWhCO0FBQ0EsUUFBSW9OLFlBQVksSUFBaEI7QUFDQSxRQUFJQyxtQkFBb0JGLFlBQVksSUFBYixHQUFxQixDQUFyQixHQUNsQkEsWUFBWSxJQUFiLEdBQXFCLENBQXJCLEdBQ0NBLFlBQVksSUFBYixHQUFxQixDQUFyQixHQUNBLENBSEo7O0FBS0EsUUFBSW5OLElBQUlxTixnQkFBSixJQUF3QjVOLEdBQTVCLEVBQWlDO0FBQy9CLFVBQUk2TixVQUFKLEVBQWdCQyxTQUFoQixFQUEyQkMsVUFBM0IsRUFBdUNDLGFBQXZDOztBQUVBLGNBQVFKLGdCQUFSO0FBQ0UsYUFBSyxDQUFMO0FBQ0UsY0FBSUYsWUFBWSxJQUFoQixFQUFzQjtBQUNwQkMsd0JBQVlELFNBQVo7QUFDRDtBQUNEO0FBQ0YsYUFBSyxDQUFMO0FBQ0VHLHVCQUFhckksSUFBSWpGLElBQUksQ0FBUixDQUFiO0FBQ0EsY0FBSSxDQUFDc04sYUFBYSxJQUFkLE1BQXdCLElBQTVCLEVBQWtDO0FBQ2hDRyw0QkFBZ0IsQ0FBQ04sWUFBWSxJQUFiLEtBQXNCLEdBQXRCLEdBQTZCRyxhQUFhLElBQTFEO0FBQ0EsZ0JBQUlHLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkwsMEJBQVlLLGFBQVo7QUFDRDtBQUNGO0FBQ0Q7QUFDRixhQUFLLENBQUw7QUFDRUgsdUJBQWFySSxJQUFJakYsSUFBSSxDQUFSLENBQWI7QUFDQXVOLHNCQUFZdEksSUFBSWpGLElBQUksQ0FBUixDQUFaO0FBQ0EsY0FBSSxDQUFDc04sYUFBYSxJQUFkLE1BQXdCLElBQXhCLElBQWdDLENBQUNDLFlBQVksSUFBYixNQUF1QixJQUEzRCxFQUFpRTtBQUMvREUsNEJBQWdCLENBQUNOLFlBQVksR0FBYixLQUFxQixHQUFyQixHQUEyQixDQUFDRyxhQUFhLElBQWQsS0FBdUIsR0FBbEQsR0FBeURDLFlBQVksSUFBckY7QUFDQSxnQkFBSUUsZ0JBQWdCLEtBQWhCLEtBQTBCQSxnQkFBZ0IsTUFBaEIsSUFBMEJBLGdCQUFnQixNQUFwRSxDQUFKLEVBQWlGO0FBQy9FTCwwQkFBWUssYUFBWjtBQUNEO0FBQ0Y7QUFDRDtBQUNGLGFBQUssQ0FBTDtBQUNFSCx1QkFBYXJJLElBQUlqRixJQUFJLENBQVIsQ0FBYjtBQUNBdU4sc0JBQVl0SSxJQUFJakYsSUFBSSxDQUFSLENBQVo7QUFDQXdOLHVCQUFhdkksSUFBSWpGLElBQUksQ0FBUixDQUFiO0FBQ0EsY0FBSSxDQUFDc04sYUFBYSxJQUFkLE1BQXdCLElBQXhCLElBQWdDLENBQUNDLFlBQVksSUFBYixNQUF1QixJQUF2RCxJQUErRCxDQUFDQyxhQUFhLElBQWQsTUFBd0IsSUFBM0YsRUFBaUc7QUFDL0ZDLDRCQUFnQixDQUFDTixZQUFZLEdBQWIsS0FBcUIsSUFBckIsR0FBNEIsQ0FBQ0csYUFBYSxJQUFkLEtBQXVCLEdBQW5ELEdBQXlELENBQUNDLFlBQVksSUFBYixLQUFzQixHQUEvRSxHQUFzRkMsYUFBYSxJQUFuSDtBQUNBLGdCQUFJQyxnQkFBZ0IsTUFBaEIsSUFBMEJBLGdCQUFnQixRQUE5QyxFQUF3RDtBQUN0REwsMEJBQVlLLGFBQVo7QUFDRDtBQUNGO0FBbENMO0FBb0NEOztBQUVELFFBQUlMLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEI7QUFDQTtBQUNBQSxrQkFBWSxNQUFaO0FBQ0FDLHlCQUFtQixDQUFuQjtBQUNELEtBTEQsTUFLTyxJQUFJRCxZQUFZLE1BQWhCLEVBQXdCO0FBQzdCO0FBQ0FBLG1CQUFhLE9BQWI7QUFDQUYsVUFBSXpKLElBQUosQ0FBUzJKLGNBQWMsRUFBZCxHQUFtQixLQUFuQixHQUEyQixNQUFwQztBQUNBQSxrQkFBWSxTQUFTQSxZQUFZLEtBQWpDO0FBQ0Q7O0FBRURGLFFBQUl6SixJQUFKLENBQVMySixTQUFUO0FBQ0FwTixTQUFLcU4sZ0JBQUw7QUFDRDs7QUFFRCxTQUFPSyxzQkFBc0JSLEdBQXRCLENBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJUyx1QkFBdUIsTUFBM0I7O0FBRUEsU0FBU0QscUJBQVQsQ0FBZ0NFLFVBQWhDLEVBQTRDO0FBQzFDLE1BQUlsTSxNQUFNa00sV0FBVzNTLE1BQXJCO0FBQ0EsTUFBSXlHLE9BQU9pTSxvQkFBWCxFQUFpQztBQUMvQixXQUFPNUUsT0FBTzhFLFlBQVAsQ0FBb0J2RCxLQUFwQixDQUEwQnZCLE1BQTFCLEVBQWtDNkUsVUFBbEMsQ0FBUCxDQUQrQixDQUNzQjtBQUN0RDs7QUFFRDtBQUNBLE1BQUlWLE1BQU0sRUFBVjtBQUNBLE1BQUlsTixJQUFJLENBQVI7QUFDQSxTQUFPQSxJQUFJMEIsR0FBWCxFQUFnQjtBQUNkd0wsV0FBT25FLE9BQU84RSxZQUFQLENBQW9CdkQsS0FBcEIsQ0FDTHZCLE1BREssRUFFTDZFLFdBQVdoTyxLQUFYLENBQWlCSSxDQUFqQixFQUFvQkEsS0FBSzJOLG9CQUF6QixDQUZLLENBQVA7QUFJRDtBQUNELFNBQU9ULEdBQVA7QUFDRDs7QUFFRCxTQUFTdkQsVUFBVCxDQUFxQjFFLEdBQXJCLEVBQTBCekYsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDLE1BQUlxTyxNQUFNLEVBQVY7QUFDQXJPLFFBQU1tQixLQUFLTixHQUFMLENBQVMyRSxJQUFJaEssTUFBYixFQUFxQndFLEdBQXJCLENBQU47O0FBRUEsT0FBSyxJQUFJTyxJQUFJUixLQUFiLEVBQW9CUSxJQUFJUCxHQUF4QixFQUE2QixFQUFFTyxDQUEvQixFQUFrQztBQUNoQzhOLFdBQU8vRSxPQUFPOEUsWUFBUCxDQUFvQjVJLElBQUlqRixDQUFKLElBQVMsSUFBN0IsQ0FBUDtBQUNEO0FBQ0QsU0FBTzhOLEdBQVA7QUFDRDs7QUFFRCxTQUFTbEUsV0FBVCxDQUFzQjNFLEdBQXRCLEVBQTJCekYsS0FBM0IsRUFBa0NDLEdBQWxDLEVBQXVDO0FBQ3JDLE1BQUlxTyxNQUFNLEVBQVY7QUFDQXJPLFFBQU1tQixLQUFLTixHQUFMLENBQVMyRSxJQUFJaEssTUFBYixFQUFxQndFLEdBQXJCLENBQU47O0FBRUEsT0FBSyxJQUFJTyxJQUFJUixLQUFiLEVBQW9CUSxJQUFJUCxHQUF4QixFQUE2QixFQUFFTyxDQUEvQixFQUFrQztBQUNoQzhOLFdBQU8vRSxPQUFPOEUsWUFBUCxDQUFvQjVJLElBQUlqRixDQUFKLENBQXBCLENBQVA7QUFDRDtBQUNELFNBQU84TixHQUFQO0FBQ0Q7O0FBRUQsU0FBU3JFLFFBQVQsQ0FBbUJ4RSxHQUFuQixFQUF3QnpGLEtBQXhCLEVBQStCQyxHQUEvQixFQUFvQztBQUNsQyxNQUFJaUMsTUFBTXVELElBQUloSyxNQUFkOztBQUVBLE1BQUksQ0FBQ3VFLEtBQUQsSUFBVUEsUUFBUSxDQUF0QixFQUF5QkEsUUFBUSxDQUFSO0FBQ3pCLE1BQUksQ0FBQ0MsR0FBRCxJQUFRQSxNQUFNLENBQWQsSUFBbUJBLE1BQU1pQyxHQUE3QixFQUFrQ2pDLE1BQU1pQyxHQUFOOztBQUVsQyxNQUFJcU0sTUFBTSxFQUFWO0FBQ0EsT0FBSyxJQUFJL04sSUFBSVIsS0FBYixFQUFvQlEsSUFBSVAsR0FBeEIsRUFBNkIsRUFBRU8sQ0FBL0IsRUFBa0M7QUFDaEMrTixXQUFPQyxNQUFNL0ksSUFBSWpGLENBQUosQ0FBTixDQUFQO0FBQ0Q7QUFDRCxTQUFPK04sR0FBUDtBQUNEOztBQUVELFNBQVNqRSxZQUFULENBQXVCN0UsR0FBdkIsRUFBNEJ6RixLQUE1QixFQUFtQ0MsR0FBbkMsRUFBd0M7QUFDdEMsTUFBSUMsUUFBUXVGLElBQUlyRixLQUFKLENBQVVKLEtBQVYsRUFBaUJDLEdBQWpCLENBQVo7QUFDQSxNQUFJeU4sTUFBTSxFQUFWO0FBQ0EsT0FBSyxJQUFJbE4sSUFBSSxDQUFiLEVBQWdCQSxJQUFJTixNQUFNekUsTUFBMUIsRUFBa0MrRSxLQUFLLENBQXZDLEVBQTBDO0FBQ3hDa04sV0FBT25FLE9BQU84RSxZQUFQLENBQW9Cbk8sTUFBTU0sQ0FBTixJQUFXTixNQUFNTSxJQUFJLENBQVYsSUFBZSxHQUE5QyxDQUFQO0FBQ0Q7QUFDRCxTQUFPa04sR0FBUDtBQUNEOztBQUVEcEgsT0FBT2hNLFNBQVAsQ0FBaUI4RixLQUFqQixHQUF5QixTQUFTQSxLQUFULENBQWdCSixLQUFoQixFQUF1QkMsR0FBdkIsRUFBNEI7QUFDbkQsTUFBSWlDLE1BQU0sS0FBS3pHLE1BQWY7QUFDQXVFLFVBQVEsQ0FBQyxDQUFDQSxLQUFWO0FBQ0FDLFFBQU1BLFFBQVFrRyxTQUFSLEdBQW9CakUsR0FBcEIsR0FBMEIsQ0FBQyxDQUFDakMsR0FBbEM7O0FBRUEsTUFBSUQsUUFBUSxDQUFaLEVBQWU7QUFDYkEsYUFBU2tDLEdBQVQ7QUFDQSxRQUFJbEMsUUFBUSxDQUFaLEVBQWVBLFFBQVEsQ0FBUjtBQUNoQixHQUhELE1BR08sSUFBSUEsUUFBUWtDLEdBQVosRUFBaUI7QUFDdEJsQyxZQUFRa0MsR0FBUjtBQUNEOztBQUVELE1BQUlqQyxNQUFNLENBQVYsRUFBYTtBQUNYQSxXQUFPaUMsR0FBUDtBQUNBLFFBQUlqQyxNQUFNLENBQVYsRUFBYUEsTUFBTSxDQUFOO0FBQ2QsR0FIRCxNQUdPLElBQUlBLE1BQU1pQyxHQUFWLEVBQWU7QUFDcEJqQyxVQUFNaUMsR0FBTjtBQUNEOztBQUVELE1BQUlqQyxNQUFNRCxLQUFWLEVBQWlCQyxNQUFNRCxLQUFOOztBQUVqQixNQUFJeU8sTUFBSjtBQUNBLE1BQUluSSxPQUFPRyxtQkFBWCxFQUFnQztBQUM5QmdJLGFBQVMsS0FBSzFILFFBQUwsQ0FBYy9HLEtBQWQsRUFBcUJDLEdBQXJCLENBQVQ7QUFDQXdPLFdBQU81SCxTQUFQLEdBQW1CUCxPQUFPaE0sU0FBMUI7QUFDRCxHQUhELE1BR087QUFDTCxRQUFJb1UsV0FBV3pPLE1BQU1ELEtBQXJCO0FBQ0F5TyxhQUFTLElBQUluSSxNQUFKLENBQVdvSSxRQUFYLEVBQXFCdkksU0FBckIsQ0FBVDtBQUNBLFNBQUssSUFBSTNGLElBQUksQ0FBYixFQUFnQkEsSUFBSWtPLFFBQXBCLEVBQThCLEVBQUVsTyxDQUFoQyxFQUFtQztBQUNqQ2lPLGFBQU9qTyxDQUFQLElBQVksS0FBS0EsSUFBSVIsS0FBVCxDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPeU8sTUFBUDtBQUNELENBbENEOztBQW9DQTs7O0FBR0EsU0FBU0UsV0FBVCxDQUFzQm5DLE1BQXRCLEVBQThCb0MsR0FBOUIsRUFBbUNuVCxNQUFuQyxFQUEyQztBQUN6QyxNQUFLK1EsU0FBUyxDQUFWLEtBQWlCLENBQWpCLElBQXNCQSxTQUFTLENBQW5DLEVBQXNDLE1BQU0sSUFBSXRGLFVBQUosQ0FBZSxvQkFBZixDQUFOO0FBQ3RDLE1BQUlzRixTQUFTb0MsR0FBVCxHQUFlblQsTUFBbkIsRUFBMkIsTUFBTSxJQUFJeUwsVUFBSixDQUFlLHVDQUFmLENBQU47QUFDNUI7O0FBRURaLE9BQU9oTSxTQUFQLENBQWlCdVUsVUFBakIsR0FBOEIsU0FBU0EsVUFBVCxDQUFxQnJDLE1BQXJCLEVBQTZCck0sVUFBN0IsRUFBeUMyTyxRQUF6QyxFQUFtRDtBQUMvRXRDLFdBQVNBLFNBQVMsQ0FBbEI7QUFDQXJNLGVBQWFBLGFBQWEsQ0FBMUI7QUFDQSxNQUFJLENBQUMyTyxRQUFMLEVBQWVILFlBQVluQyxNQUFaLEVBQW9Cck0sVUFBcEIsRUFBZ0MsS0FBSzFFLE1BQXJDOztBQUVmLE1BQUlnUSxNQUFNLEtBQUtlLE1BQUwsQ0FBVjtBQUNBLE1BQUl1QyxNQUFNLENBQVY7QUFDQSxNQUFJdk8sSUFBSSxDQUFSO0FBQ0EsU0FBTyxFQUFFQSxDQUFGLEdBQU1MLFVBQU4sS0FBcUI0TyxPQUFPLEtBQTVCLENBQVAsRUFBMkM7QUFDekN0RCxXQUFPLEtBQUtlLFNBQVNoTSxDQUFkLElBQW1CdU8sR0FBMUI7QUFDRDs7QUFFRCxTQUFPdEQsR0FBUDtBQUNELENBYkQ7O0FBZUFuRixPQUFPaE0sU0FBUCxDQUFpQjBVLFVBQWpCLEdBQThCLFNBQVNBLFVBQVQsQ0FBcUJ4QyxNQUFyQixFQUE2QnJNLFVBQTdCLEVBQXlDMk8sUUFBekMsRUFBbUQ7QUFDL0V0QyxXQUFTQSxTQUFTLENBQWxCO0FBQ0FyTSxlQUFhQSxhQUFhLENBQTFCO0FBQ0EsTUFBSSxDQUFDMk8sUUFBTCxFQUFlO0FBQ2JILGdCQUFZbkMsTUFBWixFQUFvQnJNLFVBQXBCLEVBQWdDLEtBQUsxRSxNQUFyQztBQUNEOztBQUVELE1BQUlnUSxNQUFNLEtBQUtlLFNBQVMsRUFBRXJNLFVBQWhCLENBQVY7QUFDQSxNQUFJNE8sTUFBTSxDQUFWO0FBQ0EsU0FBTzVPLGFBQWEsQ0FBYixLQUFtQjRPLE9BQU8sS0FBMUIsQ0FBUCxFQUF5QztBQUN2Q3RELFdBQU8sS0FBS2UsU0FBUyxFQUFFck0sVUFBaEIsSUFBOEI0TyxHQUFyQztBQUNEOztBQUVELFNBQU90RCxHQUFQO0FBQ0QsQ0FkRDs7QUFnQkFuRixPQUFPaE0sU0FBUCxDQUFpQjJVLFNBQWpCLEdBQTZCLFNBQVNBLFNBQVQsQ0FBb0J6QyxNQUFwQixFQUE0QnNDLFFBQTVCLEVBQXNDO0FBQ2pFLE1BQUksQ0FBQ0EsUUFBTCxFQUFlSCxZQUFZbkMsTUFBWixFQUFvQixDQUFwQixFQUF1QixLQUFLL1EsTUFBNUI7QUFDZixTQUFPLEtBQUsrUSxNQUFMLENBQVA7QUFDRCxDQUhEOztBQUtBbEcsT0FBT2hNLFNBQVAsQ0FBaUI0VSxZQUFqQixHQUFnQyxTQUFTQSxZQUFULENBQXVCMUMsTUFBdkIsRUFBK0JzQyxRQUEvQixFQUF5QztBQUN2RSxNQUFJLENBQUNBLFFBQUwsRUFBZUgsWUFBWW5DLE1BQVosRUFBb0IsQ0FBcEIsRUFBdUIsS0FBSy9RLE1BQTVCO0FBQ2YsU0FBTyxLQUFLK1EsTUFBTCxJQUFnQixLQUFLQSxTQUFTLENBQWQsS0FBb0IsQ0FBM0M7QUFDRCxDQUhEOztBQUtBbEcsT0FBT2hNLFNBQVAsQ0FBaUI2UixZQUFqQixHQUFnQyxTQUFTQSxZQUFULENBQXVCSyxNQUF2QixFQUErQnNDLFFBQS9CLEVBQXlDO0FBQ3ZFLE1BQUksQ0FBQ0EsUUFBTCxFQUFlSCxZQUFZbkMsTUFBWixFQUFvQixDQUFwQixFQUF1QixLQUFLL1EsTUFBNUI7QUFDZixTQUFRLEtBQUsrUSxNQUFMLEtBQWdCLENBQWpCLEdBQXNCLEtBQUtBLFNBQVMsQ0FBZCxDQUE3QjtBQUNELENBSEQ7O0FBS0FsRyxPQUFPaE0sU0FBUCxDQUFpQjZVLFlBQWpCLEdBQWdDLFNBQVNBLFlBQVQsQ0FBdUIzQyxNQUF2QixFQUErQnNDLFFBQS9CLEVBQXlDO0FBQ3ZFLE1BQUksQ0FBQ0EsUUFBTCxFQUFlSCxZQUFZbkMsTUFBWixFQUFvQixDQUFwQixFQUF1QixLQUFLL1EsTUFBNUI7O0FBRWYsU0FBTyxDQUFFLEtBQUsrUSxNQUFMLENBQUQsR0FDSCxLQUFLQSxTQUFTLENBQWQsS0FBb0IsQ0FEakIsR0FFSCxLQUFLQSxTQUFTLENBQWQsS0FBb0IsRUFGbEIsSUFHRixLQUFLQSxTQUFTLENBQWQsSUFBbUIsU0FIeEI7QUFJRCxDQVBEOztBQVNBbEcsT0FBT2hNLFNBQVAsQ0FBaUI4VSxZQUFqQixHQUFnQyxTQUFTQSxZQUFULENBQXVCNUMsTUFBdkIsRUFBK0JzQyxRQUEvQixFQUF5QztBQUN2RSxNQUFJLENBQUNBLFFBQUwsRUFBZUgsWUFBWW5DLE1BQVosRUFBb0IsQ0FBcEIsRUFBdUIsS0FBSy9RLE1BQTVCOztBQUVmLFNBQVEsS0FBSytRLE1BQUwsSUFBZSxTQUFoQixJQUNILEtBQUtBLFNBQVMsQ0FBZCxLQUFvQixFQUFyQixHQUNBLEtBQUtBLFNBQVMsQ0FBZCxLQUFvQixDQURwQixHQUVELEtBQUtBLFNBQVMsQ0FBZCxDQUhLLENBQVA7QUFJRCxDQVBEOztBQVNBbEcsT0FBT2hNLFNBQVAsQ0FBaUIrVSxTQUFqQixHQUE2QixTQUFTQSxTQUFULENBQW9CN0MsTUFBcEIsRUFBNEJyTSxVQUE1QixFQUF3QzJPLFFBQXhDLEVBQWtEO0FBQzdFdEMsV0FBU0EsU0FBUyxDQUFsQjtBQUNBck0sZUFBYUEsYUFBYSxDQUExQjtBQUNBLE1BQUksQ0FBQzJPLFFBQUwsRUFBZUgsWUFBWW5DLE1BQVosRUFBb0JyTSxVQUFwQixFQUFnQyxLQUFLMUUsTUFBckM7O0FBRWYsTUFBSWdRLE1BQU0sS0FBS2UsTUFBTCxDQUFWO0FBQ0EsTUFBSXVDLE1BQU0sQ0FBVjtBQUNBLE1BQUl2TyxJQUFJLENBQVI7QUFDQSxTQUFPLEVBQUVBLENBQUYsR0FBTUwsVUFBTixLQUFxQjRPLE9BQU8sS0FBNUIsQ0FBUCxFQUEyQztBQUN6Q3RELFdBQU8sS0FBS2UsU0FBU2hNLENBQWQsSUFBbUJ1TyxHQUExQjtBQUNEO0FBQ0RBLFNBQU8sSUFBUDs7QUFFQSxNQUFJdEQsT0FBT3NELEdBQVgsRUFBZ0J0RCxPQUFPckssS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWSxJQUFJbEIsVUFBaEIsQ0FBUDs7QUFFaEIsU0FBT3NMLEdBQVA7QUFDRCxDQWhCRDs7QUFrQkFuRixPQUFPaE0sU0FBUCxDQUFpQmdWLFNBQWpCLEdBQTZCLFNBQVNBLFNBQVQsQ0FBb0I5QyxNQUFwQixFQUE0QnJNLFVBQTVCLEVBQXdDMk8sUUFBeEMsRUFBa0Q7QUFDN0V0QyxXQUFTQSxTQUFTLENBQWxCO0FBQ0FyTSxlQUFhQSxhQUFhLENBQTFCO0FBQ0EsTUFBSSxDQUFDMk8sUUFBTCxFQUFlSCxZQUFZbkMsTUFBWixFQUFvQnJNLFVBQXBCLEVBQWdDLEtBQUsxRSxNQUFyQzs7QUFFZixNQUFJK0UsSUFBSUwsVUFBUjtBQUNBLE1BQUk0TyxNQUFNLENBQVY7QUFDQSxNQUFJdEQsTUFBTSxLQUFLZSxTQUFTLEVBQUVoTSxDQUFoQixDQUFWO0FBQ0EsU0FBT0EsSUFBSSxDQUFKLEtBQVV1TyxPQUFPLEtBQWpCLENBQVAsRUFBZ0M7QUFDOUJ0RCxXQUFPLEtBQUtlLFNBQVMsRUFBRWhNLENBQWhCLElBQXFCdU8sR0FBNUI7QUFDRDtBQUNEQSxTQUFPLElBQVA7O0FBRUEsTUFBSXRELE9BQU9zRCxHQUFYLEVBQWdCdEQsT0FBT3JLLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVksSUFBSWxCLFVBQWhCLENBQVA7O0FBRWhCLFNBQU9zTCxHQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBbkYsT0FBT2hNLFNBQVAsQ0FBaUJpVixRQUFqQixHQUE0QixTQUFTQSxRQUFULENBQW1CL0MsTUFBbkIsRUFBMkJzQyxRQUEzQixFQUFxQztBQUMvRCxNQUFJLENBQUNBLFFBQUwsRUFBZUgsWUFBWW5DLE1BQVosRUFBb0IsQ0FBcEIsRUFBdUIsS0FBSy9RLE1BQTVCO0FBQ2YsTUFBSSxFQUFFLEtBQUsrUSxNQUFMLElBQWUsSUFBakIsQ0FBSixFQUE0QixPQUFRLEtBQUtBLE1BQUwsQ0FBUjtBQUM1QixTQUFRLENBQUMsT0FBTyxLQUFLQSxNQUFMLENBQVAsR0FBc0IsQ0FBdkIsSUFBNEIsQ0FBQyxDQUFyQztBQUNELENBSkQ7O0FBTUFsRyxPQUFPaE0sU0FBUCxDQUFpQmtWLFdBQWpCLEdBQStCLFNBQVNBLFdBQVQsQ0FBc0JoRCxNQUF0QixFQUE4QnNDLFFBQTlCLEVBQXdDO0FBQ3JFLE1BQUksQ0FBQ0EsUUFBTCxFQUFlSCxZQUFZbkMsTUFBWixFQUFvQixDQUFwQixFQUF1QixLQUFLL1EsTUFBNUI7QUFDZixNQUFJZ1EsTUFBTSxLQUFLZSxNQUFMLElBQWdCLEtBQUtBLFNBQVMsQ0FBZCxLQUFvQixDQUE5QztBQUNBLFNBQVFmLE1BQU0sTUFBUCxHQUFpQkEsTUFBTSxVQUF2QixHQUFvQ0EsR0FBM0M7QUFDRCxDQUpEOztBQU1BbkYsT0FBT2hNLFNBQVAsQ0FBaUJtVixXQUFqQixHQUErQixTQUFTQSxXQUFULENBQXNCakQsTUFBdEIsRUFBOEJzQyxRQUE5QixFQUF3QztBQUNyRSxNQUFJLENBQUNBLFFBQUwsRUFBZUgsWUFBWW5DLE1BQVosRUFBb0IsQ0FBcEIsRUFBdUIsS0FBSy9RLE1BQTVCO0FBQ2YsTUFBSWdRLE1BQU0sS0FBS2UsU0FBUyxDQUFkLElBQW9CLEtBQUtBLE1BQUwsS0FBZ0IsQ0FBOUM7QUFDQSxTQUFRZixNQUFNLE1BQVAsR0FBaUJBLE1BQU0sVUFBdkIsR0FBb0NBLEdBQTNDO0FBQ0QsQ0FKRDs7QUFNQW5GLE9BQU9oTSxTQUFQLENBQWlCb1YsV0FBakIsR0FBK0IsU0FBU0EsV0FBVCxDQUFzQmxELE1BQXRCLEVBQThCc0MsUUFBOUIsRUFBd0M7QUFDckUsTUFBSSxDQUFDQSxRQUFMLEVBQWVILFlBQVluQyxNQUFaLEVBQW9CLENBQXBCLEVBQXVCLEtBQUsvUSxNQUE1Qjs7QUFFZixTQUFRLEtBQUsrUSxNQUFMLENBQUQsR0FDSixLQUFLQSxTQUFTLENBQWQsS0FBb0IsQ0FEaEIsR0FFSixLQUFLQSxTQUFTLENBQWQsS0FBb0IsRUFGaEIsR0FHSixLQUFLQSxTQUFTLENBQWQsS0FBb0IsRUFIdkI7QUFJRCxDQVBEOztBQVNBbEcsT0FBT2hNLFNBQVAsQ0FBaUJxVixXQUFqQixHQUErQixTQUFTQSxXQUFULENBQXNCbkQsTUFBdEIsRUFBOEJzQyxRQUE5QixFQUF3QztBQUNyRSxNQUFJLENBQUNBLFFBQUwsRUFBZUgsWUFBWW5DLE1BQVosRUFBb0IsQ0FBcEIsRUFBdUIsS0FBSy9RLE1BQTVCOztBQUVmLFNBQVEsS0FBSytRLE1BQUwsS0FBZ0IsRUFBakIsR0FDSixLQUFLQSxTQUFTLENBQWQsS0FBb0IsRUFEaEIsR0FFSixLQUFLQSxTQUFTLENBQWQsS0FBb0IsQ0FGaEIsR0FHSixLQUFLQSxTQUFTLENBQWQsQ0FISDtBQUlELENBUEQ7O0FBU0FsRyxPQUFPaE0sU0FBUCxDQUFpQnNWLFdBQWpCLEdBQStCLFNBQVNBLFdBQVQsQ0FBc0JwRCxNQUF0QixFQUE4QnNDLFFBQTlCLEVBQXdDO0FBQ3JFLE1BQUksQ0FBQ0EsUUFBTCxFQUFlSCxZQUFZbkMsTUFBWixFQUFvQixDQUFwQixFQUF1QixLQUFLL1EsTUFBNUI7QUFDZixTQUFPMkssUUFBUThGLElBQVIsQ0FBYSxJQUFiLEVBQW1CTSxNQUFuQixFQUEyQixJQUEzQixFQUFpQyxFQUFqQyxFQUFxQyxDQUFyQyxDQUFQO0FBQ0QsQ0FIRDs7QUFLQWxHLE9BQU9oTSxTQUFQLENBQWlCdVYsV0FBakIsR0FBK0IsU0FBU0EsV0FBVCxDQUFzQnJELE1BQXRCLEVBQThCc0MsUUFBOUIsRUFBd0M7QUFDckUsTUFBSSxDQUFDQSxRQUFMLEVBQWVILFlBQVluQyxNQUFaLEVBQW9CLENBQXBCLEVBQXVCLEtBQUsvUSxNQUE1QjtBQUNmLFNBQU8ySyxRQUFROEYsSUFBUixDQUFhLElBQWIsRUFBbUJNLE1BQW5CLEVBQTJCLEtBQTNCLEVBQWtDLEVBQWxDLEVBQXNDLENBQXRDLENBQVA7QUFDRCxDQUhEOztBQUtBbEcsT0FBT2hNLFNBQVAsQ0FBaUJ3VixZQUFqQixHQUFnQyxTQUFTQSxZQUFULENBQXVCdEQsTUFBdkIsRUFBK0JzQyxRQUEvQixFQUF5QztBQUN2RSxNQUFJLENBQUNBLFFBQUwsRUFBZUgsWUFBWW5DLE1BQVosRUFBb0IsQ0FBcEIsRUFBdUIsS0FBSy9RLE1BQTVCO0FBQ2YsU0FBTzJLLFFBQVE4RixJQUFSLENBQWEsSUFBYixFQUFtQk0sTUFBbkIsRUFBMkIsSUFBM0IsRUFBaUMsRUFBakMsRUFBcUMsQ0FBckMsQ0FBUDtBQUNELENBSEQ7O0FBS0FsRyxPQUFPaE0sU0FBUCxDQUFpQnlWLFlBQWpCLEdBQWdDLFNBQVNBLFlBQVQsQ0FBdUJ2RCxNQUF2QixFQUErQnNDLFFBQS9CLEVBQXlDO0FBQ3ZFLE1BQUksQ0FBQ0EsUUFBTCxFQUFlSCxZQUFZbkMsTUFBWixFQUFvQixDQUFwQixFQUF1QixLQUFLL1EsTUFBNUI7QUFDZixTQUFPMkssUUFBUThGLElBQVIsQ0FBYSxJQUFiLEVBQW1CTSxNQUFuQixFQUEyQixLQUEzQixFQUFrQyxFQUFsQyxFQUFzQyxDQUF0QyxDQUFQO0FBQ0QsQ0FIRDs7QUFLQSxTQUFTd0QsUUFBVCxDQUFtQnZLLEdBQW5CLEVBQXdCZ0MsS0FBeEIsRUFBK0IrRSxNQUEvQixFQUF1Q29DLEdBQXZDLEVBQTRDN04sR0FBNUMsRUFBaURELEdBQWpELEVBQXNEO0FBQ3BELE1BQUksQ0FBQ3dGLE9BQU8wQyxRQUFQLENBQWdCdkQsR0FBaEIsQ0FBTCxFQUEyQixNQUFNLElBQUlpQyxTQUFKLENBQWMsNkNBQWQsQ0FBTjtBQUMzQixNQUFJRCxRQUFRMUcsR0FBUixJQUFlMEcsUUFBUTNHLEdBQTNCLEVBQWdDLE1BQU0sSUFBSW9HLFVBQUosQ0FBZSxtQ0FBZixDQUFOO0FBQ2hDLE1BQUlzRixTQUFTb0MsR0FBVCxHQUFlbkosSUFBSWhLLE1BQXZCLEVBQStCLE1BQU0sSUFBSXlMLFVBQUosQ0FBZSxvQkFBZixDQUFOO0FBQ2hDOztBQUVEWixPQUFPaE0sU0FBUCxDQUFpQjJWLFdBQWpCLEdBQStCLFNBQVNBLFdBQVQsQ0FBc0J4SSxLQUF0QixFQUE2QitFLE1BQTdCLEVBQXFDck0sVUFBckMsRUFBaUQyTyxRQUFqRCxFQUEyRDtBQUN4RnJILFVBQVEsQ0FBQ0EsS0FBVDtBQUNBK0UsV0FBU0EsU0FBUyxDQUFsQjtBQUNBck0sZUFBYUEsYUFBYSxDQUExQjtBQUNBLE1BQUksQ0FBQzJPLFFBQUwsRUFBZTtBQUNiLFFBQUlvQixXQUFXOU8sS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWSxJQUFJbEIsVUFBaEIsSUFBOEIsQ0FBN0M7QUFDQTZQLGFBQVMsSUFBVCxFQUFldkksS0FBZixFQUFzQitFLE1BQXRCLEVBQThCck0sVUFBOUIsRUFBMEMrUCxRQUExQyxFQUFvRCxDQUFwRDtBQUNEOztBQUVELE1BQUluQixNQUFNLENBQVY7QUFDQSxNQUFJdk8sSUFBSSxDQUFSO0FBQ0EsT0FBS2dNLE1BQUwsSUFBZS9FLFFBQVEsSUFBdkI7QUFDQSxTQUFPLEVBQUVqSCxDQUFGLEdBQU1MLFVBQU4sS0FBcUI0TyxPQUFPLEtBQTVCLENBQVAsRUFBMkM7QUFDekMsU0FBS3ZDLFNBQVNoTSxDQUFkLElBQW9CaUgsUUFBUXNILEdBQVQsR0FBZ0IsSUFBbkM7QUFDRDs7QUFFRCxTQUFPdkMsU0FBU3JNLFVBQWhCO0FBQ0QsQ0FqQkQ7O0FBbUJBbUcsT0FBT2hNLFNBQVAsQ0FBaUI2VixXQUFqQixHQUErQixTQUFTQSxXQUFULENBQXNCMUksS0FBdEIsRUFBNkIrRSxNQUE3QixFQUFxQ3JNLFVBQXJDLEVBQWlEMk8sUUFBakQsRUFBMkQ7QUFDeEZySCxVQUFRLENBQUNBLEtBQVQ7QUFDQStFLFdBQVNBLFNBQVMsQ0FBbEI7QUFDQXJNLGVBQWFBLGFBQWEsQ0FBMUI7QUFDQSxNQUFJLENBQUMyTyxRQUFMLEVBQWU7QUFDYixRQUFJb0IsV0FBVzlPLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVksSUFBSWxCLFVBQWhCLElBQThCLENBQTdDO0FBQ0E2UCxhQUFTLElBQVQsRUFBZXZJLEtBQWYsRUFBc0IrRSxNQUF0QixFQUE4QnJNLFVBQTlCLEVBQTBDK1AsUUFBMUMsRUFBb0QsQ0FBcEQ7QUFDRDs7QUFFRCxNQUFJMVAsSUFBSUwsYUFBYSxDQUFyQjtBQUNBLE1BQUk0TyxNQUFNLENBQVY7QUFDQSxPQUFLdkMsU0FBU2hNLENBQWQsSUFBbUJpSCxRQUFRLElBQTNCO0FBQ0EsU0FBTyxFQUFFakgsQ0FBRixJQUFPLENBQVAsS0FBYXVPLE9BQU8sS0FBcEIsQ0FBUCxFQUFtQztBQUNqQyxTQUFLdkMsU0FBU2hNLENBQWQsSUFBb0JpSCxRQUFRc0gsR0FBVCxHQUFnQixJQUFuQztBQUNEOztBQUVELFNBQU92QyxTQUFTck0sVUFBaEI7QUFDRCxDQWpCRDs7QUFtQkFtRyxPQUFPaE0sU0FBUCxDQUFpQjhWLFVBQWpCLEdBQThCLFNBQVNBLFVBQVQsQ0FBcUIzSSxLQUFyQixFQUE0QitFLE1BQTVCLEVBQW9Dc0MsUUFBcEMsRUFBOEM7QUFDMUVySCxVQUFRLENBQUNBLEtBQVQ7QUFDQStFLFdBQVNBLFNBQVMsQ0FBbEI7QUFDQSxNQUFJLENBQUNzQyxRQUFMLEVBQWVrQixTQUFTLElBQVQsRUFBZXZJLEtBQWYsRUFBc0IrRSxNQUF0QixFQUE4QixDQUE5QixFQUFpQyxJQUFqQyxFQUF1QyxDQUF2QztBQUNmLE1BQUksQ0FBQ2xHLE9BQU9HLG1CQUFaLEVBQWlDZ0IsUUFBUXJHLEtBQUtLLEtBQUwsQ0FBV2dHLEtBQVgsQ0FBUjtBQUNqQyxPQUFLK0UsTUFBTCxJQUFnQi9FLFFBQVEsSUFBeEI7QUFDQSxTQUFPK0UsU0FBUyxDQUFoQjtBQUNELENBUEQ7O0FBU0EsU0FBUzZELGlCQUFULENBQTRCNUssR0FBNUIsRUFBaUNnQyxLQUFqQyxFQUF3QytFLE1BQXhDLEVBQWdEOEQsWUFBaEQsRUFBOEQ7QUFDNUQsTUFBSTdJLFFBQVEsQ0FBWixFQUFlQSxRQUFRLFNBQVNBLEtBQVQsR0FBaUIsQ0FBekI7QUFDZixPQUFLLElBQUlqSCxJQUFJLENBQVIsRUFBVzhMLElBQUlsTCxLQUFLTixHQUFMLENBQVMyRSxJQUFJaEssTUFBSixHQUFhK1EsTUFBdEIsRUFBOEIsQ0FBOUIsQ0FBcEIsRUFBc0RoTSxJQUFJOEwsQ0FBMUQsRUFBNkQsRUFBRTlMLENBQS9ELEVBQWtFO0FBQ2hFaUYsUUFBSStHLFNBQVNoTSxDQUFiLElBQWtCLENBQUNpSCxRQUFTLFFBQVMsS0FBSzZJLGVBQWU5UCxDQUFmLEdBQW1CLElBQUlBLENBQTVCLENBQW5CLE1BQ2hCLENBQUM4UCxlQUFlOVAsQ0FBZixHQUFtQixJQUFJQSxDQUF4QixJQUE2QixDQUQvQjtBQUVEO0FBQ0Y7O0FBRUQ4RixPQUFPaE0sU0FBUCxDQUFpQmlXLGFBQWpCLEdBQWlDLFNBQVNBLGFBQVQsQ0FBd0I5SSxLQUF4QixFQUErQitFLE1BQS9CLEVBQXVDc0MsUUFBdkMsRUFBaUQ7QUFDaEZySCxVQUFRLENBQUNBLEtBQVQ7QUFDQStFLFdBQVNBLFNBQVMsQ0FBbEI7QUFDQSxNQUFJLENBQUNzQyxRQUFMLEVBQWVrQixTQUFTLElBQVQsRUFBZXZJLEtBQWYsRUFBc0IrRSxNQUF0QixFQUE4QixDQUE5QixFQUFpQyxNQUFqQyxFQUF5QyxDQUF6QztBQUNmLE1BQUlsRyxPQUFPRyxtQkFBWCxFQUFnQztBQUM5QixTQUFLK0YsTUFBTCxJQUFnQi9FLFFBQVEsSUFBeEI7QUFDQSxTQUFLK0UsU0FBUyxDQUFkLElBQW9CL0UsVUFBVSxDQUE5QjtBQUNELEdBSEQsTUFHTztBQUNMNEksc0JBQWtCLElBQWxCLEVBQXdCNUksS0FBeEIsRUFBK0IrRSxNQUEvQixFQUF1QyxJQUF2QztBQUNEO0FBQ0QsU0FBT0EsU0FBUyxDQUFoQjtBQUNELENBWEQ7O0FBYUFsRyxPQUFPaE0sU0FBUCxDQUFpQmtXLGFBQWpCLEdBQWlDLFNBQVNBLGFBQVQsQ0FBd0IvSSxLQUF4QixFQUErQitFLE1BQS9CLEVBQXVDc0MsUUFBdkMsRUFBaUQ7QUFDaEZySCxVQUFRLENBQUNBLEtBQVQ7QUFDQStFLFdBQVNBLFNBQVMsQ0FBbEI7QUFDQSxNQUFJLENBQUNzQyxRQUFMLEVBQWVrQixTQUFTLElBQVQsRUFBZXZJLEtBQWYsRUFBc0IrRSxNQUF0QixFQUE4QixDQUE5QixFQUFpQyxNQUFqQyxFQUF5QyxDQUF6QztBQUNmLE1BQUlsRyxPQUFPRyxtQkFBWCxFQUFnQztBQUM5QixTQUFLK0YsTUFBTCxJQUFnQi9FLFVBQVUsQ0FBMUI7QUFDQSxTQUFLK0UsU0FBUyxDQUFkLElBQW9CL0UsUUFBUSxJQUE1QjtBQUNELEdBSEQsTUFHTztBQUNMNEksc0JBQWtCLElBQWxCLEVBQXdCNUksS0FBeEIsRUFBK0IrRSxNQUEvQixFQUF1QyxLQUF2QztBQUNEO0FBQ0QsU0FBT0EsU0FBUyxDQUFoQjtBQUNELENBWEQ7O0FBYUEsU0FBU2lFLGlCQUFULENBQTRCaEwsR0FBNUIsRUFBaUNnQyxLQUFqQyxFQUF3QytFLE1BQXhDLEVBQWdEOEQsWUFBaEQsRUFBOEQ7QUFDNUQsTUFBSTdJLFFBQVEsQ0FBWixFQUFlQSxRQUFRLGFBQWFBLEtBQWIsR0FBcUIsQ0FBN0I7QUFDZixPQUFLLElBQUlqSCxJQUFJLENBQVIsRUFBVzhMLElBQUlsTCxLQUFLTixHQUFMLENBQVMyRSxJQUFJaEssTUFBSixHQUFhK1EsTUFBdEIsRUFBOEIsQ0FBOUIsQ0FBcEIsRUFBc0RoTSxJQUFJOEwsQ0FBMUQsRUFBNkQsRUFBRTlMLENBQS9ELEVBQWtFO0FBQ2hFaUYsUUFBSStHLFNBQVNoTSxDQUFiLElBQW1CaUgsVUFBVSxDQUFDNkksZUFBZTlQLENBQWYsR0FBbUIsSUFBSUEsQ0FBeEIsSUFBNkIsQ0FBeEMsR0FBNkMsSUFBL0Q7QUFDRDtBQUNGOztBQUVEOEYsT0FBT2hNLFNBQVAsQ0FBaUJvVyxhQUFqQixHQUFpQyxTQUFTQSxhQUFULENBQXdCakosS0FBeEIsRUFBK0IrRSxNQUEvQixFQUF1Q3NDLFFBQXZDLEVBQWlEO0FBQ2hGckgsVUFBUSxDQUFDQSxLQUFUO0FBQ0ErRSxXQUFTQSxTQUFTLENBQWxCO0FBQ0EsTUFBSSxDQUFDc0MsUUFBTCxFQUFla0IsU0FBUyxJQUFULEVBQWV2SSxLQUFmLEVBQXNCK0UsTUFBdEIsRUFBOEIsQ0FBOUIsRUFBaUMsVUFBakMsRUFBNkMsQ0FBN0M7QUFDZixNQUFJbEcsT0FBT0csbUJBQVgsRUFBZ0M7QUFDOUIsU0FBSytGLFNBQVMsQ0FBZCxJQUFvQi9FLFVBQVUsRUFBOUI7QUFDQSxTQUFLK0UsU0FBUyxDQUFkLElBQW9CL0UsVUFBVSxFQUE5QjtBQUNBLFNBQUsrRSxTQUFTLENBQWQsSUFBb0IvRSxVQUFVLENBQTlCO0FBQ0EsU0FBSytFLE1BQUwsSUFBZ0IvRSxRQUFRLElBQXhCO0FBQ0QsR0FMRCxNQUtPO0FBQ0xnSixzQkFBa0IsSUFBbEIsRUFBd0JoSixLQUF4QixFQUErQitFLE1BQS9CLEVBQXVDLElBQXZDO0FBQ0Q7QUFDRCxTQUFPQSxTQUFTLENBQWhCO0FBQ0QsQ0FiRDs7QUFlQWxHLE9BQU9oTSxTQUFQLENBQWlCcVcsYUFBakIsR0FBaUMsU0FBU0EsYUFBVCxDQUF3QmxKLEtBQXhCLEVBQStCK0UsTUFBL0IsRUFBdUNzQyxRQUF2QyxFQUFpRDtBQUNoRnJILFVBQVEsQ0FBQ0EsS0FBVDtBQUNBK0UsV0FBU0EsU0FBUyxDQUFsQjtBQUNBLE1BQUksQ0FBQ3NDLFFBQUwsRUFBZWtCLFNBQVMsSUFBVCxFQUFldkksS0FBZixFQUFzQitFLE1BQXRCLEVBQThCLENBQTlCLEVBQWlDLFVBQWpDLEVBQTZDLENBQTdDO0FBQ2YsTUFBSWxHLE9BQU9HLG1CQUFYLEVBQWdDO0FBQzlCLFNBQUsrRixNQUFMLElBQWdCL0UsVUFBVSxFQUExQjtBQUNBLFNBQUsrRSxTQUFTLENBQWQsSUFBb0IvRSxVQUFVLEVBQTlCO0FBQ0EsU0FBSytFLFNBQVMsQ0FBZCxJQUFvQi9FLFVBQVUsQ0FBOUI7QUFDQSxTQUFLK0UsU0FBUyxDQUFkLElBQW9CL0UsUUFBUSxJQUE1QjtBQUNELEdBTEQsTUFLTztBQUNMZ0osc0JBQWtCLElBQWxCLEVBQXdCaEosS0FBeEIsRUFBK0IrRSxNQUEvQixFQUF1QyxLQUF2QztBQUNEO0FBQ0QsU0FBT0EsU0FBUyxDQUFoQjtBQUNELENBYkQ7O0FBZUFsRyxPQUFPaE0sU0FBUCxDQUFpQnNXLFVBQWpCLEdBQThCLFNBQVNBLFVBQVQsQ0FBcUJuSixLQUFyQixFQUE0QitFLE1BQTVCLEVBQW9Dck0sVUFBcEMsRUFBZ0QyTyxRQUFoRCxFQUEwRDtBQUN0RnJILFVBQVEsQ0FBQ0EsS0FBVDtBQUNBK0UsV0FBU0EsU0FBUyxDQUFsQjtBQUNBLE1BQUksQ0FBQ3NDLFFBQUwsRUFBZTtBQUNiLFFBQUkrQixRQUFRelAsS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWSxJQUFJbEIsVUFBSixHQUFpQixDQUE3QixDQUFaOztBQUVBNlAsYUFBUyxJQUFULEVBQWV2SSxLQUFmLEVBQXNCK0UsTUFBdEIsRUFBOEJyTSxVQUE5QixFQUEwQzBRLFFBQVEsQ0FBbEQsRUFBcUQsQ0FBQ0EsS0FBdEQ7QUFDRDs7QUFFRCxNQUFJclEsSUFBSSxDQUFSO0FBQ0EsTUFBSXVPLE1BQU0sQ0FBVjtBQUNBLE1BQUkrQixNQUFNLENBQVY7QUFDQSxPQUFLdEUsTUFBTCxJQUFlL0UsUUFBUSxJQUF2QjtBQUNBLFNBQU8sRUFBRWpILENBQUYsR0FBTUwsVUFBTixLQUFxQjRPLE9BQU8sS0FBNUIsQ0FBUCxFQUEyQztBQUN6QyxRQUFJdEgsUUFBUSxDQUFSLElBQWFxSixRQUFRLENBQXJCLElBQTBCLEtBQUt0RSxTQUFTaE0sQ0FBVCxHQUFhLENBQWxCLE1BQXlCLENBQXZELEVBQTBEO0FBQ3hEc1EsWUFBTSxDQUFOO0FBQ0Q7QUFDRCxTQUFLdEUsU0FBU2hNLENBQWQsSUFBbUIsQ0FBRWlILFFBQVFzSCxHQUFULElBQWlCLENBQWxCLElBQXVCK0IsR0FBdkIsR0FBNkIsSUFBaEQ7QUFDRDs7QUFFRCxTQUFPdEUsU0FBU3JNLFVBQWhCO0FBQ0QsQ0FyQkQ7O0FBdUJBbUcsT0FBT2hNLFNBQVAsQ0FBaUJ5VyxVQUFqQixHQUE4QixTQUFTQSxVQUFULENBQXFCdEosS0FBckIsRUFBNEIrRSxNQUE1QixFQUFvQ3JNLFVBQXBDLEVBQWdEMk8sUUFBaEQsRUFBMEQ7QUFDdEZySCxVQUFRLENBQUNBLEtBQVQ7QUFDQStFLFdBQVNBLFNBQVMsQ0FBbEI7QUFDQSxNQUFJLENBQUNzQyxRQUFMLEVBQWU7QUFDYixRQUFJK0IsUUFBUXpQLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVksSUFBSWxCLFVBQUosR0FBaUIsQ0FBN0IsQ0FBWjs7QUFFQTZQLGFBQVMsSUFBVCxFQUFldkksS0FBZixFQUFzQitFLE1BQXRCLEVBQThCck0sVUFBOUIsRUFBMEMwUSxRQUFRLENBQWxELEVBQXFELENBQUNBLEtBQXREO0FBQ0Q7O0FBRUQsTUFBSXJRLElBQUlMLGFBQWEsQ0FBckI7QUFDQSxNQUFJNE8sTUFBTSxDQUFWO0FBQ0EsTUFBSStCLE1BQU0sQ0FBVjtBQUNBLE9BQUt0RSxTQUFTaE0sQ0FBZCxJQUFtQmlILFFBQVEsSUFBM0I7QUFDQSxTQUFPLEVBQUVqSCxDQUFGLElBQU8sQ0FBUCxLQUFhdU8sT0FBTyxLQUFwQixDQUFQLEVBQW1DO0FBQ2pDLFFBQUl0SCxRQUFRLENBQVIsSUFBYXFKLFFBQVEsQ0FBckIsSUFBMEIsS0FBS3RFLFNBQVNoTSxDQUFULEdBQWEsQ0FBbEIsTUFBeUIsQ0FBdkQsRUFBMEQ7QUFDeERzUSxZQUFNLENBQU47QUFDRDtBQUNELFNBQUt0RSxTQUFTaE0sQ0FBZCxJQUFtQixDQUFFaUgsUUFBUXNILEdBQVQsSUFBaUIsQ0FBbEIsSUFBdUIrQixHQUF2QixHQUE2QixJQUFoRDtBQUNEOztBQUVELFNBQU90RSxTQUFTck0sVUFBaEI7QUFDRCxDQXJCRDs7QUF1QkFtRyxPQUFPaE0sU0FBUCxDQUFpQjBXLFNBQWpCLEdBQTZCLFNBQVNBLFNBQVQsQ0FBb0J2SixLQUFwQixFQUEyQitFLE1BQTNCLEVBQW1Dc0MsUUFBbkMsRUFBNkM7QUFDeEVySCxVQUFRLENBQUNBLEtBQVQ7QUFDQStFLFdBQVNBLFNBQVMsQ0FBbEI7QUFDQSxNQUFJLENBQUNzQyxRQUFMLEVBQWVrQixTQUFTLElBQVQsRUFBZXZJLEtBQWYsRUFBc0IrRSxNQUF0QixFQUE4QixDQUE5QixFQUFpQyxJQUFqQyxFQUF1QyxDQUFDLElBQXhDO0FBQ2YsTUFBSSxDQUFDbEcsT0FBT0csbUJBQVosRUFBaUNnQixRQUFRckcsS0FBS0ssS0FBTCxDQUFXZ0csS0FBWCxDQUFSO0FBQ2pDLE1BQUlBLFFBQVEsQ0FBWixFQUFlQSxRQUFRLE9BQU9BLEtBQVAsR0FBZSxDQUF2QjtBQUNmLE9BQUsrRSxNQUFMLElBQWdCL0UsUUFBUSxJQUF4QjtBQUNBLFNBQU8rRSxTQUFTLENBQWhCO0FBQ0QsQ0FSRDs7QUFVQWxHLE9BQU9oTSxTQUFQLENBQWlCMlcsWUFBakIsR0FBZ0MsU0FBU0EsWUFBVCxDQUF1QnhKLEtBQXZCLEVBQThCK0UsTUFBOUIsRUFBc0NzQyxRQUF0QyxFQUFnRDtBQUM5RXJILFVBQVEsQ0FBQ0EsS0FBVDtBQUNBK0UsV0FBU0EsU0FBUyxDQUFsQjtBQUNBLE1BQUksQ0FBQ3NDLFFBQUwsRUFBZWtCLFNBQVMsSUFBVCxFQUFldkksS0FBZixFQUFzQitFLE1BQXRCLEVBQThCLENBQTlCLEVBQWlDLE1BQWpDLEVBQXlDLENBQUMsTUFBMUM7QUFDZixNQUFJbEcsT0FBT0csbUJBQVgsRUFBZ0M7QUFDOUIsU0FBSytGLE1BQUwsSUFBZ0IvRSxRQUFRLElBQXhCO0FBQ0EsU0FBSytFLFNBQVMsQ0FBZCxJQUFvQi9FLFVBQVUsQ0FBOUI7QUFDRCxHQUhELE1BR087QUFDTDRJLHNCQUFrQixJQUFsQixFQUF3QjVJLEtBQXhCLEVBQStCK0UsTUFBL0IsRUFBdUMsSUFBdkM7QUFDRDtBQUNELFNBQU9BLFNBQVMsQ0FBaEI7QUFDRCxDQVhEOztBQWFBbEcsT0FBT2hNLFNBQVAsQ0FBaUI0VyxZQUFqQixHQUFnQyxTQUFTQSxZQUFULENBQXVCekosS0FBdkIsRUFBOEIrRSxNQUE5QixFQUFzQ3NDLFFBQXRDLEVBQWdEO0FBQzlFckgsVUFBUSxDQUFDQSxLQUFUO0FBQ0ErRSxXQUFTQSxTQUFTLENBQWxCO0FBQ0EsTUFBSSxDQUFDc0MsUUFBTCxFQUFla0IsU0FBUyxJQUFULEVBQWV2SSxLQUFmLEVBQXNCK0UsTUFBdEIsRUFBOEIsQ0FBOUIsRUFBaUMsTUFBakMsRUFBeUMsQ0FBQyxNQUExQztBQUNmLE1BQUlsRyxPQUFPRyxtQkFBWCxFQUFnQztBQUM5QixTQUFLK0YsTUFBTCxJQUFnQi9FLFVBQVUsQ0FBMUI7QUFDQSxTQUFLK0UsU0FBUyxDQUFkLElBQW9CL0UsUUFBUSxJQUE1QjtBQUNELEdBSEQsTUFHTztBQUNMNEksc0JBQWtCLElBQWxCLEVBQXdCNUksS0FBeEIsRUFBK0IrRSxNQUEvQixFQUF1QyxLQUF2QztBQUNEO0FBQ0QsU0FBT0EsU0FBUyxDQUFoQjtBQUNELENBWEQ7O0FBYUFsRyxPQUFPaE0sU0FBUCxDQUFpQjZXLFlBQWpCLEdBQWdDLFNBQVNBLFlBQVQsQ0FBdUIxSixLQUF2QixFQUE4QitFLE1BQTlCLEVBQXNDc0MsUUFBdEMsRUFBZ0Q7QUFDOUVySCxVQUFRLENBQUNBLEtBQVQ7QUFDQStFLFdBQVNBLFNBQVMsQ0FBbEI7QUFDQSxNQUFJLENBQUNzQyxRQUFMLEVBQWVrQixTQUFTLElBQVQsRUFBZXZJLEtBQWYsRUFBc0IrRSxNQUF0QixFQUE4QixDQUE5QixFQUFpQyxVQUFqQyxFQUE2QyxDQUFDLFVBQTlDO0FBQ2YsTUFBSWxHLE9BQU9HLG1CQUFYLEVBQWdDO0FBQzlCLFNBQUsrRixNQUFMLElBQWdCL0UsUUFBUSxJQUF4QjtBQUNBLFNBQUsrRSxTQUFTLENBQWQsSUFBb0IvRSxVQUFVLENBQTlCO0FBQ0EsU0FBSytFLFNBQVMsQ0FBZCxJQUFvQi9FLFVBQVUsRUFBOUI7QUFDQSxTQUFLK0UsU0FBUyxDQUFkLElBQW9CL0UsVUFBVSxFQUE5QjtBQUNELEdBTEQsTUFLTztBQUNMZ0osc0JBQWtCLElBQWxCLEVBQXdCaEosS0FBeEIsRUFBK0IrRSxNQUEvQixFQUF1QyxJQUF2QztBQUNEO0FBQ0QsU0FBT0EsU0FBUyxDQUFoQjtBQUNELENBYkQ7O0FBZUFsRyxPQUFPaE0sU0FBUCxDQUFpQjhXLFlBQWpCLEdBQWdDLFNBQVNBLFlBQVQsQ0FBdUIzSixLQUF2QixFQUE4QitFLE1BQTlCLEVBQXNDc0MsUUFBdEMsRUFBZ0Q7QUFDOUVySCxVQUFRLENBQUNBLEtBQVQ7QUFDQStFLFdBQVNBLFNBQVMsQ0FBbEI7QUFDQSxNQUFJLENBQUNzQyxRQUFMLEVBQWVrQixTQUFTLElBQVQsRUFBZXZJLEtBQWYsRUFBc0IrRSxNQUF0QixFQUE4QixDQUE5QixFQUFpQyxVQUFqQyxFQUE2QyxDQUFDLFVBQTlDO0FBQ2YsTUFBSS9FLFFBQVEsQ0FBWixFQUFlQSxRQUFRLGFBQWFBLEtBQWIsR0FBcUIsQ0FBN0I7QUFDZixNQUFJbkIsT0FBT0csbUJBQVgsRUFBZ0M7QUFDOUIsU0FBSytGLE1BQUwsSUFBZ0IvRSxVQUFVLEVBQTFCO0FBQ0EsU0FBSytFLFNBQVMsQ0FBZCxJQUFvQi9FLFVBQVUsRUFBOUI7QUFDQSxTQUFLK0UsU0FBUyxDQUFkLElBQW9CL0UsVUFBVSxDQUE5QjtBQUNBLFNBQUsrRSxTQUFTLENBQWQsSUFBb0IvRSxRQUFRLElBQTVCO0FBQ0QsR0FMRCxNQUtPO0FBQ0xnSixzQkFBa0IsSUFBbEIsRUFBd0JoSixLQUF4QixFQUErQitFLE1BQS9CLEVBQXVDLEtBQXZDO0FBQ0Q7QUFDRCxTQUFPQSxTQUFTLENBQWhCO0FBQ0QsQ0FkRDs7QUFnQkEsU0FBUzZFLFlBQVQsQ0FBdUI1TCxHQUF2QixFQUE0QmdDLEtBQTVCLEVBQW1DK0UsTUFBbkMsRUFBMkNvQyxHQUEzQyxFQUFnRDdOLEdBQWhELEVBQXFERCxHQUFyRCxFQUEwRDtBQUN4RCxNQUFJMEwsU0FBU29DLEdBQVQsR0FBZW5KLElBQUloSyxNQUF2QixFQUErQixNQUFNLElBQUl5TCxVQUFKLENBQWUsb0JBQWYsQ0FBTjtBQUMvQixNQUFJc0YsU0FBUyxDQUFiLEVBQWdCLE1BQU0sSUFBSXRGLFVBQUosQ0FBZSxvQkFBZixDQUFOO0FBQ2pCOztBQUVELFNBQVNvSyxVQUFULENBQXFCN0wsR0FBckIsRUFBMEJnQyxLQUExQixFQUFpQytFLE1BQWpDLEVBQXlDOEQsWUFBekMsRUFBdUR4QixRQUF2RCxFQUFpRTtBQUMvRCxNQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNidUMsaUJBQWE1TCxHQUFiLEVBQWtCZ0MsS0FBbEIsRUFBeUIrRSxNQUF6QixFQUFpQyxDQUFqQyxFQUFvQyxzQkFBcEMsRUFBNEQsQ0FBQyxzQkFBN0Q7QUFDRDtBQUNEcEcsVUFBUXdDLEtBQVIsQ0FBY25ELEdBQWQsRUFBbUJnQyxLQUFuQixFQUEwQitFLE1BQTFCLEVBQWtDOEQsWUFBbEMsRUFBZ0QsRUFBaEQsRUFBb0QsQ0FBcEQ7QUFDQSxTQUFPOUQsU0FBUyxDQUFoQjtBQUNEOztBQUVEbEcsT0FBT2hNLFNBQVAsQ0FBaUJpWCxZQUFqQixHQUFnQyxTQUFTQSxZQUFULENBQXVCOUosS0FBdkIsRUFBOEIrRSxNQUE5QixFQUFzQ3NDLFFBQXRDLEVBQWdEO0FBQzlFLFNBQU93QyxXQUFXLElBQVgsRUFBaUI3SixLQUFqQixFQUF3QitFLE1BQXhCLEVBQWdDLElBQWhDLEVBQXNDc0MsUUFBdEMsQ0FBUDtBQUNELENBRkQ7O0FBSUF4SSxPQUFPaE0sU0FBUCxDQUFpQmtYLFlBQWpCLEdBQWdDLFNBQVNBLFlBQVQsQ0FBdUIvSixLQUF2QixFQUE4QitFLE1BQTlCLEVBQXNDc0MsUUFBdEMsRUFBZ0Q7QUFDOUUsU0FBT3dDLFdBQVcsSUFBWCxFQUFpQjdKLEtBQWpCLEVBQXdCK0UsTUFBeEIsRUFBZ0MsS0FBaEMsRUFBdUNzQyxRQUF2QyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTMkMsV0FBVCxDQUFzQmhNLEdBQXRCLEVBQTJCZ0MsS0FBM0IsRUFBa0MrRSxNQUFsQyxFQUEwQzhELFlBQTFDLEVBQXdEeEIsUUFBeEQsRUFBa0U7QUFDaEUsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYnVDLGlCQUFhNUwsR0FBYixFQUFrQmdDLEtBQWxCLEVBQXlCK0UsTUFBekIsRUFBaUMsQ0FBakMsRUFBb0MsdUJBQXBDLEVBQTZELENBQUMsdUJBQTlEO0FBQ0Q7QUFDRHBHLFVBQVF3QyxLQUFSLENBQWNuRCxHQUFkLEVBQW1CZ0MsS0FBbkIsRUFBMEIrRSxNQUExQixFQUFrQzhELFlBQWxDLEVBQWdELEVBQWhELEVBQW9ELENBQXBEO0FBQ0EsU0FBTzlELFNBQVMsQ0FBaEI7QUFDRDs7QUFFRGxHLE9BQU9oTSxTQUFQLENBQWlCb1gsYUFBakIsR0FBaUMsU0FBU0EsYUFBVCxDQUF3QmpLLEtBQXhCLEVBQStCK0UsTUFBL0IsRUFBdUNzQyxRQUF2QyxFQUFpRDtBQUNoRixTQUFPMkMsWUFBWSxJQUFaLEVBQWtCaEssS0FBbEIsRUFBeUIrRSxNQUF6QixFQUFpQyxJQUFqQyxFQUF1Q3NDLFFBQXZDLENBQVA7QUFDRCxDQUZEOztBQUlBeEksT0FBT2hNLFNBQVAsQ0FBaUJxWCxhQUFqQixHQUFpQyxTQUFTQSxhQUFULENBQXdCbEssS0FBeEIsRUFBK0IrRSxNQUEvQixFQUF1Q3NDLFFBQXZDLEVBQWlEO0FBQ2hGLFNBQU8yQyxZQUFZLElBQVosRUFBa0JoSyxLQUFsQixFQUF5QitFLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDc0MsUUFBeEMsQ0FBUDtBQUNELENBRkQ7O0FBSUE7QUFDQXhJLE9BQU9oTSxTQUFQLENBQWlCb0wsSUFBakIsR0FBd0IsU0FBU0EsSUFBVCxDQUFleUYsTUFBZixFQUF1QnlHLFdBQXZCLEVBQW9DNVIsS0FBcEMsRUFBMkNDLEdBQTNDLEVBQWdEO0FBQ3RFLE1BQUksQ0FBQ0QsS0FBTCxFQUFZQSxRQUFRLENBQVI7QUFDWixNQUFJLENBQUNDLEdBQUQsSUFBUUEsUUFBUSxDQUFwQixFQUF1QkEsTUFBTSxLQUFLeEUsTUFBWDtBQUN2QixNQUFJbVcsZUFBZXpHLE9BQU8xUCxNQUExQixFQUFrQ21XLGNBQWN6RyxPQUFPMVAsTUFBckI7QUFDbEMsTUFBSSxDQUFDbVcsV0FBTCxFQUFrQkEsY0FBYyxDQUFkO0FBQ2xCLE1BQUkzUixNQUFNLENBQU4sSUFBV0EsTUFBTUQsS0FBckIsRUFBNEJDLE1BQU1ELEtBQU47O0FBRTVCO0FBQ0EsTUFBSUMsUUFBUUQsS0FBWixFQUFtQixPQUFPLENBQVA7QUFDbkIsTUFBSW1MLE9BQU8xUCxNQUFQLEtBQWtCLENBQWxCLElBQXVCLEtBQUtBLE1BQUwsS0FBZ0IsQ0FBM0MsRUFBOEMsT0FBTyxDQUFQOztBQUU5QztBQUNBLE1BQUltVyxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLFVBQU0sSUFBSTFLLFVBQUosQ0FBZSwyQkFBZixDQUFOO0FBQ0Q7QUFDRCxNQUFJbEgsUUFBUSxDQUFSLElBQWFBLFNBQVMsS0FBS3ZFLE1BQS9CLEVBQXVDLE1BQU0sSUFBSXlMLFVBQUosQ0FBZSwyQkFBZixDQUFOO0FBQ3ZDLE1BQUlqSCxNQUFNLENBQVYsRUFBYSxNQUFNLElBQUlpSCxVQUFKLENBQWUseUJBQWYsQ0FBTjs7QUFFYjtBQUNBLE1BQUlqSCxNQUFNLEtBQUt4RSxNQUFmLEVBQXVCd0UsTUFBTSxLQUFLeEUsTUFBWDtBQUN2QixNQUFJMFAsT0FBTzFQLE1BQVAsR0FBZ0JtVyxXQUFoQixHQUE4QjNSLE1BQU1ELEtBQXhDLEVBQStDO0FBQzdDQyxVQUFNa0wsT0FBTzFQLE1BQVAsR0FBZ0JtVyxXQUFoQixHQUE4QjVSLEtBQXBDO0FBQ0Q7O0FBRUQsTUFBSWtDLE1BQU1qQyxNQUFNRCxLQUFoQjtBQUNBLE1BQUlRLENBQUo7O0FBRUEsTUFBSSxTQUFTMkssTUFBVCxJQUFtQm5MLFFBQVE0UixXQUEzQixJQUEwQ0EsY0FBYzNSLEdBQTVELEVBQWlFO0FBQy9EO0FBQ0EsU0FBS08sSUFBSTBCLE1BQU0sQ0FBZixFQUFrQjFCLEtBQUssQ0FBdkIsRUFBMEIsRUFBRUEsQ0FBNUIsRUFBK0I7QUFDN0IySyxhQUFPM0ssSUFBSW9SLFdBQVgsSUFBMEIsS0FBS3BSLElBQUlSLEtBQVQsQ0FBMUI7QUFDRDtBQUNGLEdBTEQsTUFLTyxJQUFJa0MsTUFBTSxJQUFOLElBQWMsQ0FBQ29FLE9BQU9HLG1CQUExQixFQUErQztBQUNwRDtBQUNBLFNBQUtqRyxJQUFJLENBQVQsRUFBWUEsSUFBSTBCLEdBQWhCLEVBQXFCLEVBQUUxQixDQUF2QixFQUEwQjtBQUN4QjJLLGFBQU8zSyxJQUFJb1IsV0FBWCxJQUEwQixLQUFLcFIsSUFBSVIsS0FBVCxDQUExQjtBQUNEO0FBQ0YsR0FMTSxNQUtBO0FBQ0xPLGVBQVdqRyxTQUFYLENBQXFCNEUsR0FBckIsQ0FBeUIyTSxJQUF6QixDQUNFVixNQURGLEVBRUUsS0FBS3BFLFFBQUwsQ0FBYy9HLEtBQWQsRUFBcUJBLFFBQVFrQyxHQUE3QixDQUZGLEVBR0UwUCxXQUhGO0FBS0Q7O0FBRUQsU0FBTzFQLEdBQVA7QUFDRCxDQTlDRDs7QUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQW9FLE9BQU9oTSxTQUFQLENBQWlCK04sSUFBakIsR0FBd0IsU0FBU0EsSUFBVCxDQUFlb0QsR0FBZixFQUFvQnpMLEtBQXBCLEVBQTJCQyxHQUEzQixFQUFnQ3FJLFFBQWhDLEVBQTBDO0FBQ2hFO0FBQ0EsTUFBSSxPQUFPbUQsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLFFBQUksT0FBT3pMLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JzSSxpQkFBV3RJLEtBQVg7QUFDQUEsY0FBUSxDQUFSO0FBQ0FDLFlBQU0sS0FBS3hFLE1BQVg7QUFDRCxLQUpELE1BSU8sSUFBSSxPQUFPd0UsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ2xDcUksaUJBQVdySSxHQUFYO0FBQ0FBLFlBQU0sS0FBS3hFLE1BQVg7QUFDRDtBQUNELFFBQUlnUSxJQUFJaFEsTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLFVBQUl3SCxPQUFPd0ksSUFBSXpKLFVBQUosQ0FBZSxDQUFmLENBQVg7QUFDQSxVQUFJaUIsT0FBTyxHQUFYLEVBQWdCO0FBQ2R3SSxjQUFNeEksSUFBTjtBQUNEO0FBQ0Y7QUFDRCxRQUFJcUYsYUFBYW5DLFNBQWIsSUFBMEIsT0FBT21DLFFBQVAsS0FBb0IsUUFBbEQsRUFBNEQ7QUFDMUQsWUFBTSxJQUFJWixTQUFKLENBQWMsMkJBQWQsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxPQUFPWSxRQUFQLEtBQW9CLFFBQXBCLElBQWdDLENBQUNoQyxPQUFPb0MsVUFBUCxDQUFrQkosUUFBbEIsQ0FBckMsRUFBa0U7QUFDaEUsWUFBTSxJQUFJWixTQUFKLENBQWMsdUJBQXVCWSxRQUFyQyxDQUFOO0FBQ0Q7QUFDRixHQXJCRCxNQXFCTyxJQUFJLE9BQU9tRCxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDbENBLFVBQU1BLE1BQU0sR0FBWjtBQUNEOztBQUVEO0FBQ0EsTUFBSXpMLFFBQVEsQ0FBUixJQUFhLEtBQUt2RSxNQUFMLEdBQWN1RSxLQUEzQixJQUFvQyxLQUFLdkUsTUFBTCxHQUFjd0UsR0FBdEQsRUFBMkQ7QUFDekQsVUFBTSxJQUFJaUgsVUFBSixDQUFlLG9CQUFmLENBQU47QUFDRDs7QUFFRCxNQUFJakgsT0FBT0QsS0FBWCxFQUFrQjtBQUNoQixXQUFPLElBQVA7QUFDRDs7QUFFREEsVUFBUUEsVUFBVSxDQUFsQjtBQUNBQyxRQUFNQSxRQUFRa0csU0FBUixHQUFvQixLQUFLMUssTUFBekIsR0FBa0N3RSxRQUFRLENBQWhEOztBQUVBLE1BQUksQ0FBQ3dMLEdBQUwsRUFBVUEsTUFBTSxDQUFOOztBQUVWLE1BQUlqTCxDQUFKO0FBQ0EsTUFBSSxPQUFPaUwsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLFNBQUtqTCxJQUFJUixLQUFULEVBQWdCUSxJQUFJUCxHQUFwQixFQUF5QixFQUFFTyxDQUEzQixFQUE4QjtBQUM1QixXQUFLQSxDQUFMLElBQVVpTCxHQUFWO0FBQ0Q7QUFDRixHQUpELE1BSU87QUFDTCxRQUFJdkwsUUFBUW9HLE9BQU8wQyxRQUFQLENBQWdCeUMsR0FBaEIsSUFDUkEsR0FEUSxHQUVSM0IsWUFBWSxJQUFJeEQsTUFBSixDQUFXbUYsR0FBWCxFQUFnQm5ELFFBQWhCLEVBQTBCWSxRQUExQixFQUFaLENBRko7QUFHQSxRQUFJaEgsTUFBTWhDLE1BQU16RSxNQUFoQjtBQUNBLFNBQUsrRSxJQUFJLENBQVQsRUFBWUEsSUFBSVAsTUFBTUQsS0FBdEIsRUFBNkIsRUFBRVEsQ0FBL0IsRUFBa0M7QUFDaEMsV0FBS0EsSUFBSVIsS0FBVCxJQUFrQkUsTUFBTU0sSUFBSTBCLEdBQVYsQ0FBbEI7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNELENBekREOztBQTJEQTtBQUNBOztBQUVBLElBQUkyUCxvQkFBb0Isb0JBQXhCOztBQUVBLFNBQVNDLFdBQVQsQ0FBc0I3RyxHQUF0QixFQUEyQjtBQUN6QjtBQUNBQSxRQUFNOEcsV0FBVzlHLEdBQVgsRUFBZ0IrRyxPQUFoQixDQUF3QkgsaUJBQXhCLEVBQTJDLEVBQTNDLENBQU47QUFDQTtBQUNBLE1BQUk1RyxJQUFJeFAsTUFBSixHQUFhLENBQWpCLEVBQW9CLE9BQU8sRUFBUDtBQUNwQjtBQUNBLFNBQU93UCxJQUFJeFAsTUFBSixHQUFhLENBQWIsS0FBbUIsQ0FBMUIsRUFBNkI7QUFDM0J3UCxVQUFNQSxNQUFNLEdBQVo7QUFDRDtBQUNELFNBQU9BLEdBQVA7QUFDRDs7QUFFRCxTQUFTOEcsVUFBVCxDQUFxQjlHLEdBQXJCLEVBQTBCO0FBQ3hCLE1BQUlBLElBQUlnSCxJQUFSLEVBQWMsT0FBT2hILElBQUlnSCxJQUFKLEVBQVA7QUFDZCxTQUFPaEgsSUFBSStHLE9BQUosQ0FBWSxZQUFaLEVBQTBCLEVBQTFCLENBQVA7QUFDRDs7QUFFRCxTQUFTeEQsS0FBVCxDQUFnQmhFLENBQWhCLEVBQW1CO0FBQ2pCLE1BQUlBLElBQUksRUFBUixFQUFZLE9BQU8sTUFBTUEsRUFBRXRCLFFBQUYsQ0FBVyxFQUFYLENBQWI7QUFDWixTQUFPc0IsRUFBRXRCLFFBQUYsQ0FBVyxFQUFYLENBQVA7QUFDRDs7QUFFRCxTQUFTWSxXQUFULENBQXNCckIsTUFBdEIsRUFBOEJ5SixLQUE5QixFQUFxQztBQUNuQ0EsVUFBUUEsU0FBU0MsUUFBakI7QUFDQSxNQUFJdkUsU0FBSjtBQUNBLE1BQUluUyxTQUFTZ04sT0FBT2hOLE1BQXBCO0FBQ0EsTUFBSTJXLGdCQUFnQixJQUFwQjtBQUNBLE1BQUlsUyxRQUFRLEVBQVo7O0FBRUEsT0FBSyxJQUFJTSxJQUFJLENBQWIsRUFBZ0JBLElBQUkvRSxNQUFwQixFQUE0QixFQUFFK0UsQ0FBOUIsRUFBaUM7QUFDL0JvTixnQkFBWW5GLE9BQU96RyxVQUFQLENBQWtCeEIsQ0FBbEIsQ0FBWjs7QUFFQTtBQUNBLFFBQUlvTixZQUFZLE1BQVosSUFBc0JBLFlBQVksTUFBdEMsRUFBOEM7QUFDNUM7QUFDQSxVQUFJLENBQUN3RSxhQUFMLEVBQW9CO0FBQ2xCO0FBQ0EsWUFBSXhFLFlBQVksTUFBaEIsRUFBd0I7QUFDdEI7QUFDQSxjQUFJLENBQUNzRSxTQUFTLENBQVYsSUFBZSxDQUFDLENBQXBCLEVBQXVCaFMsTUFBTStELElBQU4sQ0FBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCO0FBQ3ZCO0FBQ0QsU0FKRCxNQUlPLElBQUl6RCxJQUFJLENBQUosS0FBVS9FLE1BQWQsRUFBc0I7QUFDM0I7QUFDQSxjQUFJLENBQUN5VyxTQUFTLENBQVYsSUFBZSxDQUFDLENBQXBCLEVBQXVCaFMsTUFBTStELElBQU4sQ0FBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCO0FBQ3ZCO0FBQ0Q7O0FBRUQ7QUFDQW1PLHdCQUFnQnhFLFNBQWhCOztBQUVBO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJQSxZQUFZLE1BQWhCLEVBQXdCO0FBQ3RCLFlBQUksQ0FBQ3NFLFNBQVMsQ0FBVixJQUFlLENBQUMsQ0FBcEIsRUFBdUJoUyxNQUFNK0QsSUFBTixDQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkI7QUFDdkJtTyx3QkFBZ0J4RSxTQUFoQjtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQUEsa0JBQVksQ0FBQ3dFLGdCQUFnQixNQUFoQixJQUEwQixFQUExQixHQUErQnhFLFlBQVksTUFBNUMsSUFBc0QsT0FBbEU7QUFDRCxLQTdCRCxNQTZCTyxJQUFJd0UsYUFBSixFQUFtQjtBQUN4QjtBQUNBLFVBQUksQ0FBQ0YsU0FBUyxDQUFWLElBQWUsQ0FBQyxDQUFwQixFQUF1QmhTLE1BQU0rRCxJQUFOLENBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixJQUF2QjtBQUN4Qjs7QUFFRG1PLG9CQUFnQixJQUFoQjs7QUFFQTtBQUNBLFFBQUl4RSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFVBQUksQ0FBQ3NFLFNBQVMsQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ3RCaFMsWUFBTStELElBQU4sQ0FBVzJKLFNBQVg7QUFDRCxLQUhELE1BR08sSUFBSUEsWUFBWSxLQUFoQixFQUF1QjtBQUM1QixVQUFJLENBQUNzRSxTQUFTLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUN0QmhTLFlBQU0rRCxJQUFOLENBQ0UySixhQUFhLEdBQWIsR0FBbUIsSUFEckIsRUFFRUEsWUFBWSxJQUFaLEdBQW1CLElBRnJCO0FBSUQsS0FOTSxNQU1BLElBQUlBLFlBQVksT0FBaEIsRUFBeUI7QUFDOUIsVUFBSSxDQUFDc0UsU0FBUyxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDdEJoUyxZQUFNK0QsSUFBTixDQUNFMkosYUFBYSxHQUFiLEdBQW1CLElBRHJCLEVBRUVBLGFBQWEsR0FBYixHQUFtQixJQUFuQixHQUEwQixJQUY1QixFQUdFQSxZQUFZLElBQVosR0FBbUIsSUFIckI7QUFLRCxLQVBNLE1BT0EsSUFBSUEsWUFBWSxRQUFoQixFQUEwQjtBQUMvQixVQUFJLENBQUNzRSxTQUFTLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUN0QmhTLFlBQU0rRCxJQUFOLENBQ0UySixhQUFhLElBQWIsR0FBb0IsSUFEdEIsRUFFRUEsYUFBYSxHQUFiLEdBQW1CLElBQW5CLEdBQTBCLElBRjVCLEVBR0VBLGFBQWEsR0FBYixHQUFtQixJQUFuQixHQUEwQixJQUg1QixFQUlFQSxZQUFZLElBQVosR0FBbUIsSUFKckI7QUFNRCxLQVJNLE1BUUE7QUFDTCxZQUFNLElBQUloUCxLQUFKLENBQVUsb0JBQVYsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3NCLEtBQVA7QUFDRDs7QUFFRCxTQUFTZ04sWUFBVCxDQUF1QmpDLEdBQXZCLEVBQTRCO0FBQzFCLE1BQUlvSCxZQUFZLEVBQWhCO0FBQ0EsT0FBSyxJQUFJN1IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJeUssSUFBSXhQLE1BQXhCLEVBQWdDLEVBQUUrRSxDQUFsQyxFQUFxQztBQUNuQztBQUNBNlIsY0FBVXBPLElBQVYsQ0FBZWdILElBQUlqSixVQUFKLENBQWV4QixDQUFmLElBQW9CLElBQW5DO0FBQ0Q7QUFDRCxTQUFPNlIsU0FBUDtBQUNEOztBQUVELFNBQVMvRSxjQUFULENBQXlCckMsR0FBekIsRUFBOEJpSCxLQUE5QixFQUFxQztBQUNuQyxNQUFJSSxDQUFKLEVBQU9DLEVBQVAsRUFBV0MsRUFBWDtBQUNBLE1BQUlILFlBQVksRUFBaEI7QUFDQSxPQUFLLElBQUk3UixJQUFJLENBQWIsRUFBZ0JBLElBQUl5SyxJQUFJeFAsTUFBeEIsRUFBZ0MsRUFBRStFLENBQWxDLEVBQXFDO0FBQ25DLFFBQUksQ0FBQzBSLFNBQVMsQ0FBVixJQUFlLENBQW5CLEVBQXNCOztBQUV0QkksUUFBSXJILElBQUlqSixVQUFKLENBQWV4QixDQUFmLENBQUo7QUFDQStSLFNBQUtELEtBQUssQ0FBVjtBQUNBRSxTQUFLRixJQUFJLEdBQVQ7QUFDQUQsY0FBVXBPLElBQVYsQ0FBZXVPLEVBQWY7QUFDQUgsY0FBVXBPLElBQVYsQ0FBZXNPLEVBQWY7QUFDRDs7QUFFRCxTQUFPRixTQUFQO0FBQ0Q7O0FBRUQsU0FBU3RJLGFBQVQsQ0FBd0JrQixHQUF4QixFQUE2QjtBQUMzQixTQUFPOUksT0FBT1MsV0FBUCxDQUFtQmtQLFlBQVk3RyxHQUFaLENBQW5CLENBQVA7QUFDRDs7QUFFRCxTQUFTK0IsVUFBVCxDQUFxQnlGLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQmxHLE1BQS9CLEVBQXVDL1EsTUFBdkMsRUFBK0M7QUFDN0MsT0FBSyxJQUFJK0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJL0UsTUFBcEIsRUFBNEIsRUFBRStFLENBQTlCLEVBQWlDO0FBQy9CLFFBQUtBLElBQUlnTSxNQUFKLElBQWNrRyxJQUFJalgsTUFBbkIsSUFBK0IrRSxLQUFLaVMsSUFBSWhYLE1BQTVDLEVBQXFEO0FBQ3JEaVgsUUFBSWxTLElBQUlnTSxNQUFSLElBQWtCaUcsSUFBSWpTLENBQUosQ0FBbEI7QUFDRDtBQUNELFNBQU9BLENBQVA7QUFDRDs7QUFFRCxTQUFTeUksS0FBVCxDQUFnQndDLEdBQWhCLEVBQXFCO0FBQ25CLFNBQU9BLFFBQVFBLEdBQWYsQ0FEbUIsQ0FDQTtBQUNwQixDOzs7Ozs7Ozs7Ozs7Ozs7QUM1dkREOzs7O0FBSUEsSUFBSXJMLFFBQVEsR0FBR0EsS0FBZjs7QUFFQTs7Ozs7Ozs7O0FBU0FoQixPQUFPQyxPQUFQLEdBQWlCLFVBQVMwSixHQUFULEVBQWNsTyxFQUFkLEVBQWlCO0FBQ2hDLE1BQUksWUFBWSxPQUFPQSxFQUF2QixFQUEyQkEsS0FBS2tPLElBQUlsTyxFQUFKLENBQUw7QUFDM0IsTUFBSSxjQUFjLE9BQU9BLEVBQXpCLEVBQTZCLE1BQU0sSUFBSStELEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQzdCLE1BQUkrVCxPQUFPdlMsTUFBTXlMLElBQU4sQ0FBV2hCLFNBQVgsRUFBc0IsQ0FBdEIsQ0FBWDtBQUNBLFNBQU8sWUFBVTtBQUNmLFdBQU9oUSxHQUFHaVEsS0FBSCxDQUFTL0IsR0FBVCxFQUFjNEosS0FBS2xKLE1BQUwsQ0FBWXJKLE1BQU15TCxJQUFOLENBQVdoQixTQUFYLENBQVosQ0FBZCxDQUFQO0FBQ0QsR0FGRDtBQUdELENBUEQsQzs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7OztBQUlBLElBQUksSUFBSixFQUFtQztBQUNqQ3pMLFNBQU9DLE9BQVAsR0FBaUJ1VCxPQUFqQjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTQSxPQUFULENBQWlCN0osR0FBakIsRUFBc0I7QUFDcEIsTUFBSUEsR0FBSixFQUFTLE9BQU84SixNQUFNOUosR0FBTixDQUFQO0FBQ1Y7O0FBRUQ7Ozs7Ozs7O0FBUUEsU0FBUzhKLEtBQVQsQ0FBZTlKLEdBQWYsRUFBb0I7QUFDbEIsT0FBSyxJQUFJK0osR0FBVCxJQUFnQkYsUUFBUXRZLFNBQXhCLEVBQW1DO0FBQ2pDeU8sUUFBSStKLEdBQUosSUFBV0YsUUFBUXRZLFNBQVIsQ0FBa0J3WSxHQUFsQixDQUFYO0FBQ0Q7QUFDRCxTQUFPL0osR0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7QUFTQTZKLFFBQVF0WSxTQUFSLENBQWtCRyxFQUFsQixHQUNBbVksUUFBUXRZLFNBQVIsQ0FBa0JVLGdCQUFsQixHQUFxQyxVQUFTK1gsS0FBVCxFQUFnQmxZLEVBQWhCLEVBQW1CO0FBQ3RELE9BQUttWSxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxHQUFDLEtBQUtBLFVBQUwsQ0FBZ0IsTUFBTUQsS0FBdEIsSUFBK0IsS0FBS0MsVUFBTCxDQUFnQixNQUFNRCxLQUF0QixLQUFnQyxFQUFoRSxFQUNHOU8sSUFESCxDQUNRcEosRUFEUjtBQUVBLFNBQU8sSUFBUDtBQUNELENBTkQ7O0FBUUE7Ozs7Ozs7Ozs7QUFVQStYLFFBQVF0WSxTQUFSLENBQWtCMlksSUFBbEIsR0FBeUIsVUFBU0YsS0FBVCxFQUFnQmxZLEVBQWhCLEVBQW1CO0FBQzFDLFdBQVNKLEVBQVQsR0FBYztBQUNaLFNBQUt5WSxHQUFMLENBQVNILEtBQVQsRUFBZ0J0WSxFQUFoQjtBQUNBSSxPQUFHaVEsS0FBSCxDQUFTLElBQVQsRUFBZUQsU0FBZjtBQUNEOztBQUVEcFEsS0FBR0ksRUFBSCxHQUFRQSxFQUFSO0FBQ0EsT0FBS0osRUFBTCxDQUFRc1ksS0FBUixFQUFldFksRUFBZjtBQUNBLFNBQU8sSUFBUDtBQUNELENBVEQ7O0FBV0E7Ozs7Ozs7Ozs7QUFVQW1ZLFFBQVF0WSxTQUFSLENBQWtCNFksR0FBbEIsR0FDQU4sUUFBUXRZLFNBQVIsQ0FBa0I2WSxjQUFsQixHQUNBUCxRQUFRdFksU0FBUixDQUFrQjhZLGtCQUFsQixHQUNBUixRQUFRdFksU0FBUixDQUFrQitZLG1CQUFsQixHQUF3QyxVQUFTTixLQUFULEVBQWdCbFksRUFBaEIsRUFBbUI7QUFDekQsT0FBS21ZLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQUFyQzs7QUFFQTtBQUNBLE1BQUksS0FBS25JLFVBQVVwUCxNQUFuQixFQUEyQjtBQUN6QixTQUFLdVgsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVEO0FBQ0EsTUFBSU0sWUFBWSxLQUFLTixVQUFMLENBQWdCLE1BQU1ELEtBQXRCLENBQWhCO0FBQ0EsTUFBSSxDQUFDTyxTQUFMLEVBQWdCLE9BQU8sSUFBUDs7QUFFaEI7QUFDQSxNQUFJLEtBQUt6SSxVQUFVcFAsTUFBbkIsRUFBMkI7QUFDekIsV0FBTyxLQUFLdVgsVUFBTCxDQUFnQixNQUFNRCxLQUF0QixDQUFQO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFJbFYsRUFBSjtBQUNBLE9BQUssSUFBSTJDLElBQUksQ0FBYixFQUFnQkEsSUFBSThTLFVBQVU3WCxNQUE5QixFQUFzQytFLEdBQXRDLEVBQTJDO0FBQ3pDM0MsU0FBS3lWLFVBQVU5UyxDQUFWLENBQUw7QUFDQSxRQUFJM0MsT0FBT2hELEVBQVAsSUFBYWdELEdBQUdoRCxFQUFILEtBQVVBLEVBQTNCLEVBQStCO0FBQzdCeVksZ0JBQVVDLE1BQVYsQ0FBaUIvUyxDQUFqQixFQUFvQixDQUFwQjtBQUNBO0FBQ0Q7QUFDRjtBQUNELFNBQU8sSUFBUDtBQUNELENBaENEOztBQWtDQTs7Ozs7Ozs7QUFRQW9TLFFBQVF0WSxTQUFSLENBQWtCcUQsSUFBbEIsR0FBeUIsVUFBU29WLEtBQVQsRUFBZTtBQUN0QyxPQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxNQUFJTCxPQUFPLEdBQUd2UyxLQUFILENBQVN5TCxJQUFULENBQWNoQixTQUFkLEVBQXlCLENBQXpCLENBQVg7QUFBQSxNQUNJeUksWUFBWSxLQUFLTixVQUFMLENBQWdCLE1BQU1ELEtBQXRCLENBRGhCOztBQUdBLE1BQUlPLFNBQUosRUFBZTtBQUNiQSxnQkFBWUEsVUFBVWxULEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUNBLFNBQUssSUFBSUksSUFBSSxDQUFSLEVBQVcwQixNQUFNb1IsVUFBVTdYLE1BQWhDLEVBQXdDK0UsSUFBSTBCLEdBQTVDLEVBQWlELEVBQUUxQixDQUFuRCxFQUFzRDtBQUNwRDhTLGdCQUFVOVMsQ0FBVixFQUFhc0ssS0FBYixDQUFtQixJQUFuQixFQUF5QjZILElBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQWJEOztBQWVBOzs7Ozs7OztBQVFBQyxRQUFRdFksU0FBUixDQUFrQmtaLFNBQWxCLEdBQThCLFVBQVNULEtBQVQsRUFBZTtBQUMzQyxPQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxTQUFPLEtBQUtBLFVBQUwsQ0FBZ0IsTUFBTUQsS0FBdEIsS0FBZ0MsRUFBdkM7QUFDRCxDQUhEOztBQUtBOzs7Ozs7OztBQVFBSCxRQUFRdFksU0FBUixDQUFrQm1aLFlBQWxCLEdBQWlDLFVBQVNWLEtBQVQsRUFBZTtBQUM5QyxTQUFPLENBQUMsQ0FBRSxLQUFLUyxTQUFMLENBQWVULEtBQWYsRUFBc0J0WCxNQUFoQztBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7QUMvSkEyRCxPQUFPQyxPQUFQLEdBQWlCLFVBQVN1RixDQUFULEVBQVlLLENBQVosRUFBYztBQUM3QixNQUFJcEssS0FBSyxTQUFMQSxFQUFLLEdBQVUsQ0FBRSxDQUFyQjtBQUNBQSxLQUFHUCxTQUFILEdBQWUySyxFQUFFM0ssU0FBakI7QUFDQXNLLElBQUV0SyxTQUFGLEdBQWMsSUFBSU8sRUFBSixFQUFkO0FBQ0ErSixJQUFFdEssU0FBRixDQUFZb1osV0FBWixHQUEwQjlPLENBQTFCO0FBQ0QsQ0FMRCxDOzs7Ozs7Ozs7Ozs7OztBQ0FBeEYsT0FBT0MsT0FBUCxHQUFpQk4sbUJBQU9BLENBQUMsK0RBQVIsQ0FBakI7O0FBRUE7Ozs7OztBQU1BSyxPQUFPQyxPQUFQLENBQWVzVSxNQUFmLEdBQXdCNVUsbUJBQU9BLENBQUMsd0VBQVIsQ0FBeEIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOzs7O0FBSUEsSUFBSVQsYUFBYVMsbUJBQU9BLENBQUMsbUZBQVIsQ0FBakI7QUFDQSxJQUFJNlQsVUFBVTdULG1CQUFPQSxDQUFDLG9FQUFSLENBQWQ7QUFDQSxJQUFJNlUsUUFBUTdVLG1CQUFPQSxDQUFDLGdGQUFSLEVBQWlCLHlCQUFqQixDQUFaO0FBQ0EsSUFBSThVLFFBQVE5VSxtQkFBT0EsQ0FBQyxnREFBUixDQUFaO0FBQ0EsSUFBSTRVLFNBQVM1VSxtQkFBT0EsQ0FBQyx3RUFBUixDQUFiO0FBQ0EsSUFBSStVLFdBQVcvVSxtQkFBT0EsQ0FBQyxrREFBUixDQUFmO0FBQ0EsSUFBSWdWLFVBQVVoVixtQkFBT0EsQ0FBQyxnREFBUixDQUFkOztBQUVBOzs7O0FBSUFLLE9BQU9DLE9BQVAsR0FBaUIyVSxNQUFqQjs7QUFFQTs7Ozs7Ozs7QUFRQSxTQUFTQSxNQUFULENBQWlCQyxHQUFqQixFQUFzQnJULElBQXRCLEVBQTRCO0FBQzFCLE1BQUksRUFBRSxnQkFBZ0JvVCxNQUFsQixDQUFKLEVBQStCLE9BQU8sSUFBSUEsTUFBSixDQUFXQyxHQUFYLEVBQWdCclQsSUFBaEIsQ0FBUDs7QUFFL0JBLFNBQU9BLFFBQVEsRUFBZjs7QUFFQSxNQUFJcVQsT0FBTyxxQkFBb0JBLEdBQXBCLHlDQUFvQkEsR0FBcEIsRUFBWCxFQUFvQztBQUNsQ3JULFdBQU9xVCxHQUFQO0FBQ0FBLFVBQU0sSUFBTjtBQUNEOztBQUVELE1BQUlBLEdBQUosRUFBUztBQUNQQSxVQUFNSCxTQUFTRyxHQUFULENBQU47QUFDQXJULFNBQUtzVCxRQUFMLEdBQWdCRCxJQUFJRSxJQUFwQjtBQUNBdlQsU0FBS3hDLE1BQUwsR0FBYzZWLElBQUlHLFFBQUosS0FBaUIsT0FBakIsSUFBNEJILElBQUlHLFFBQUosS0FBaUIsS0FBM0Q7QUFDQXhULFNBQUt2QyxJQUFMLEdBQVk0VixJQUFJNVYsSUFBaEI7QUFDQSxRQUFJNFYsSUFBSUksS0FBUixFQUFlelQsS0FBS3lULEtBQUwsR0FBYUosSUFBSUksS0FBakI7QUFDaEIsR0FORCxNQU1PLElBQUl6VCxLQUFLdVQsSUFBVCxFQUFlO0FBQ3BCdlQsU0FBS3NULFFBQUwsR0FBZ0JKLFNBQVNsVCxLQUFLdVQsSUFBZCxFQUFvQkEsSUFBcEM7QUFDRDs7QUFFRCxPQUFLL1YsTUFBTCxHQUFjLFFBQVF3QyxLQUFLeEMsTUFBYixHQUFzQndDLEtBQUt4QyxNQUEzQixHQUNULE9BQU8vQyxRQUFQLEtBQW9CLFdBQXBCLElBQW1DLGFBQWFBLFNBQVMrWSxRQUQ5RDs7QUFHQSxNQUFJeFQsS0FBS3NULFFBQUwsSUFBaUIsQ0FBQ3RULEtBQUt2QyxJQUEzQixFQUFpQztBQUMvQjtBQUNBdUMsU0FBS3ZDLElBQUwsR0FBWSxLQUFLRCxNQUFMLEdBQWMsS0FBZCxHQUFzQixJQUFsQztBQUNEOztBQUVELE9BQUtrVyxLQUFMLEdBQWExVCxLQUFLMFQsS0FBTCxJQUFjLEtBQTNCO0FBQ0EsT0FBS0osUUFBTCxHQUFnQnRULEtBQUtzVCxRQUFMLEtBQ2IsT0FBTzdZLFFBQVAsS0FBb0IsV0FBcEIsR0FBa0NBLFNBQVM2WSxRQUEzQyxHQUFzRCxXQUR6QyxDQUFoQjtBQUVBLE9BQUs3VixJQUFMLEdBQVl1QyxLQUFLdkMsSUFBTCxLQUFjLE9BQU9oRCxRQUFQLEtBQW9CLFdBQXBCLElBQW1DQSxTQUFTZ0QsSUFBNUMsR0FDcEJoRCxTQUFTZ0QsSUFEVyxHQUVuQixLQUFLRCxNQUFMLEdBQWMsR0FBZCxHQUFvQixFQUZmLENBQVo7QUFHQSxPQUFLaVcsS0FBTCxHQUFhelQsS0FBS3lULEtBQUwsSUFBYyxFQUEzQjtBQUNBLE1BQUksYUFBYSxPQUFPLEtBQUtBLEtBQTdCLEVBQW9DLEtBQUtBLEtBQUwsR0FBYU4sUUFBUTFSLE1BQVIsQ0FBZSxLQUFLZ1MsS0FBcEIsQ0FBYjtBQUNwQyxPQUFLRSxPQUFMLEdBQWUsVUFBVTNULEtBQUsyVCxPQUE5QjtBQUNBLE9BQUtuWixJQUFMLEdBQVksQ0FBQ3dGLEtBQUt4RixJQUFMLElBQWEsWUFBZCxFQUE0QjRXLE9BQTVCLENBQW9DLEtBQXBDLEVBQTJDLEVBQTNDLElBQWlELEdBQTdEO0FBQ0EsT0FBS3dDLFVBQUwsR0FBa0IsQ0FBQyxDQUFDNVQsS0FBSzRULFVBQXpCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLFVBQVU3VCxLQUFLNlQsS0FBNUI7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLENBQUMsQ0FBQzlULEtBQUs4VCxXQUExQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsQ0FBQyxDQUFDL1QsS0FBSytULFVBQXpCO0FBQ0EsT0FBS0MsY0FBTCxHQUFzQmhVLEtBQUtnVSxjQUFMLElBQXVCLEdBQTdDO0FBQ0EsT0FBS0MsaUJBQUwsR0FBeUJqVSxLQUFLaVUsaUJBQTlCO0FBQ0EsT0FBS3ZXLFVBQUwsR0FBa0JzQyxLQUFLdEMsVUFBTCxJQUFtQixDQUFDLFNBQUQsRUFBWSxXQUFaLENBQXJDO0FBQ0EsT0FBS3dXLGdCQUFMLEdBQXdCbFUsS0FBS2tVLGdCQUFMLElBQXlCLEVBQWpEO0FBQ0EsT0FBSy9aLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxPQUFLZ2EsV0FBTCxHQUFtQixFQUFuQjtBQUNBLE9BQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCclUsS0FBS3FVLFVBQUwsSUFBbUIsR0FBckM7QUFDQSxPQUFLQyxlQUFMLEdBQXVCdFUsS0FBS3NVLGVBQUwsSUFBd0IsS0FBL0M7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsT0FBS0Msa0JBQUwsR0FBMEJ4VSxLQUFLd1Usa0JBQS9CO0FBQ0EsT0FBS0MsaUJBQUwsR0FBeUIsVUFBVXpVLEtBQUt5VSxpQkFBZixHQUFvQ3pVLEtBQUt5VSxpQkFBTCxJQUEwQixFQUE5RCxHQUFvRSxLQUE3Rjs7QUFFQSxNQUFJLFNBQVMsS0FBS0EsaUJBQWxCLEVBQXFDLEtBQUtBLGlCQUFMLEdBQXlCLEVBQXpCO0FBQ3JDLE1BQUksS0FBS0EsaUJBQUwsSUFBMEIsUUFBUSxLQUFLQSxpQkFBTCxDQUF1QkMsU0FBN0QsRUFBd0U7QUFDdEUsU0FBS0QsaUJBQUwsQ0FBdUJDLFNBQXZCLEdBQW1DLElBQW5DO0FBQ0Q7O0FBRUQ7QUFDQSxPQUFLQyxHQUFMLEdBQVczVSxLQUFLMlUsR0FBTCxJQUFZLElBQXZCO0FBQ0EsT0FBS3pDLEdBQUwsR0FBV2xTLEtBQUtrUyxHQUFMLElBQVksSUFBdkI7QUFDQSxPQUFLMEMsVUFBTCxHQUFrQjVVLEtBQUs0VSxVQUFMLElBQW1CLElBQXJDO0FBQ0EsT0FBS0MsSUFBTCxHQUFZN1UsS0FBSzZVLElBQUwsSUFBYSxJQUF6QjtBQUNBLE9BQUtDLEVBQUwsR0FBVTlVLEtBQUs4VSxFQUFMLElBQVcsSUFBckI7QUFDQSxPQUFLQyxPQUFMLEdBQWUvVSxLQUFLK1UsT0FBTCxJQUFnQixJQUEvQjtBQUNBLE9BQUtDLGtCQUFMLEdBQTBCaFYsS0FBS2dWLGtCQUFMLEtBQTRCelAsU0FBNUIsR0FBd0MsSUFBeEMsR0FBK0N2RixLQUFLZ1Ysa0JBQTlFO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixDQUFDLENBQUNqVixLQUFLaVYsU0FBeEI7O0FBRUE7QUFDQSxPQUFLQyxhQUFMLEdBQXNCLE9BQU9sYSxTQUFQLEtBQXFCLFdBQXJCLElBQW9DLE9BQU9BLFVBQVVFLE9BQWpCLEtBQTZCLFFBQWpFLElBQTZFRixVQUFVRSxPQUFWLENBQWtCME4sV0FBbEIsT0FBb0MsYUFBdkk7O0FBRUE7QUFDQSxNQUFJLE9BQU91TSxJQUFQLEtBQWdCLFdBQWhCLElBQStCLEtBQUtELGFBQXhDLEVBQXVEO0FBQ3JELFFBQUlsVixLQUFLb1YsWUFBTCxJQUFxQmhPLE9BQU9pTyxJQUFQLENBQVlyVixLQUFLb1YsWUFBakIsRUFBK0J2YSxNQUEvQixHQUF3QyxDQUFqRSxFQUFvRTtBQUNsRSxXQUFLdWEsWUFBTCxHQUFvQnBWLEtBQUtvVixZQUF6QjtBQUNEOztBQUVELFFBQUlwVixLQUFLc1YsWUFBVCxFQUF1QjtBQUNyQixXQUFLQSxZQUFMLEdBQW9CdFYsS0FBS3NWLFlBQXpCO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLE9BQUtDLEVBQUwsR0FBVSxJQUFWO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLE9BQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLElBQW5COztBQUVBO0FBQ0EsT0FBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxPQUFLQyxnQkFBTCxHQUF3QixJQUF4Qjs7QUFFQSxPQUFLQyxJQUFMO0FBQ0Q7O0FBRUR6QyxPQUFPMEMscUJBQVAsR0FBK0IsS0FBL0I7O0FBRUE7Ozs7QUFJQTlELFFBQVFvQixPQUFPMVosU0FBZjs7QUFFQTs7Ozs7O0FBTUEwWixPQUFPSSxRQUFQLEdBQWtCVCxPQUFPUyxRQUF6QixDLENBQW1DOztBQUVuQzs7Ozs7QUFLQUosT0FBT0EsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQUEsT0FBTzJDLFNBQVAsR0FBbUI1WCxtQkFBT0EsQ0FBQyxxRUFBUixDQUFuQjtBQUNBaVYsT0FBTzFWLFVBQVAsR0FBb0JTLG1CQUFPQSxDQUFDLG1GQUFSLENBQXBCO0FBQ0FpVixPQUFPTCxNQUFQLEdBQWdCNVUsbUJBQU9BLENBQUMsd0VBQVIsQ0FBaEI7O0FBRUE7Ozs7Ozs7O0FBUUFpVixPQUFPMVosU0FBUCxDQUFpQnNjLGVBQWpCLEdBQW1DLFVBQVVDLElBQVYsRUFBZ0I7QUFDakRqRCxRQUFNLHlCQUFOLEVBQWlDaUQsSUFBakM7QUFDQSxNQUFJeEMsUUFBUXlDLE1BQU0sS0FBS3pDLEtBQVgsQ0FBWjs7QUFFQTtBQUNBQSxRQUFNMEMsR0FBTixHQUFZcEQsT0FBT1MsUUFBbkI7O0FBRUE7QUFDQUMsUUFBTTJDLFNBQU4sR0FBa0JILElBQWxCOztBQUVBO0FBQ0EsTUFBSWhSLFVBQVUsS0FBS2lQLGdCQUFMLENBQXNCK0IsSUFBdEIsS0FBK0IsRUFBN0M7O0FBRUE7QUFDQSxNQUFJLEtBQUtWLEVBQVQsRUFBYTlCLE1BQU00QyxHQUFOLEdBQVksS0FBS2QsRUFBakI7O0FBRWIsTUFBSWEsWUFBWSxJQUFJMVksV0FBV3VZLElBQVgsQ0FBSixDQUFxQjtBQUNuQ3hDLFdBQU9BLEtBRDRCO0FBRW5DaGEsWUFBUSxJQUYyQjtBQUduQ2lhLFdBQU96TyxRQUFReU8sS0FBUixJQUFpQixLQUFLQSxLQUhNO0FBSW5DSixjQUFVck8sUUFBUXFPLFFBQVIsSUFBb0IsS0FBS0EsUUFKQTtBQUtuQzdWLFVBQU13SCxRQUFReEgsSUFBUixJQUFnQixLQUFLQSxJQUxRO0FBTW5DRCxZQUFReUgsUUFBUXpILE1BQVIsSUFBa0IsS0FBS0EsTUFOSTtBQU9uQ2hELFVBQU15SyxRQUFRekssSUFBUixJQUFnQixLQUFLQSxJQVBRO0FBUW5Db1osZ0JBQVkzTyxRQUFRMk8sVUFBUixJQUFzQixLQUFLQSxVQVJKO0FBU25DQyxXQUFPNU8sUUFBUTRPLEtBQVIsSUFBaUIsS0FBS0EsS0FUTTtBQVVuQ0MsaUJBQWE3TyxRQUFRNk8sV0FBUixJQUF1QixLQUFLQSxXQVZOO0FBV25DQyxnQkFBWTlPLFFBQVE4TyxVQUFSLElBQXNCLEtBQUtBLFVBWEo7QUFZbkNFLHVCQUFtQmhQLFFBQVFnUCxpQkFBUixJQUE2QixLQUFLQSxpQkFabEI7QUFhbkNELG9CQUFnQi9PLFFBQVErTyxjQUFSLElBQTBCLEtBQUtBLGNBYlo7QUFjbkNLLGdCQUFZcFAsUUFBUW9QLFVBQVIsSUFBc0IsS0FBS0EsVUFkSjtBQWVuQ00sU0FBSzFQLFFBQVEwUCxHQUFSLElBQWUsS0FBS0EsR0FmVTtBQWdCbkN6QyxTQUFLak4sUUFBUWlOLEdBQVIsSUFBZSxLQUFLQSxHQWhCVTtBQWlCbkMwQyxnQkFBWTNQLFFBQVEyUCxVQUFSLElBQXNCLEtBQUtBLFVBakJKO0FBa0JuQ0MsVUFBTTVQLFFBQVE0UCxJQUFSLElBQWdCLEtBQUtBLElBbEJRO0FBbUJuQ0MsUUFBSTdQLFFBQVE2UCxFQUFSLElBQWMsS0FBS0EsRUFuQlk7QUFvQm5DQyxhQUFTOVAsUUFBUThQLE9BQVIsSUFBbUIsS0FBS0EsT0FwQkU7QUFxQm5DQyx3QkFBb0IvUCxRQUFRK1Asa0JBQVIsSUFBOEIsS0FBS0Esa0JBckJwQjtBQXNCbkNQLHVCQUFtQnhQLFFBQVF3UCxpQkFBUixJQUE2QixLQUFLQSxpQkF0QmxCO0FBdUJuQ1csa0JBQWNuUSxRQUFRbVEsWUFBUixJQUF3QixLQUFLQSxZQXZCUjtBQXdCbkNILGVBQVdoUSxRQUFRZ1EsU0FBUixJQUFxQixLQUFLQSxTQXhCRjtBQXlCbkNLLGtCQUFjclEsUUFBUXFRLFlBQVIsSUFBd0IsS0FBS0EsWUF6QlI7QUEwQm5DZ0Isb0JBQWdCclIsUUFBUXFSLGNBQVIsSUFBMEIsS0FBS0EsY0ExQlo7QUEyQm5DQyxlQUFXdFIsUUFBUXNSLFNBQVIsSUFBcUIsS0FBTSxDQTNCSDtBQTRCbkNyQixtQkFBZSxLQUFLQTtBQTVCZSxHQUFyQixDQUFoQjs7QUErQkEsU0FBT2tCLFNBQVA7QUFDRCxDQWhERDs7QUFrREEsU0FBU0YsS0FBVCxDQUFnQi9OLEdBQWhCLEVBQXFCO0FBQ25CLE1BQUlxTyxJQUFJLEVBQVI7QUFDQSxPQUFLLElBQUk1VyxDQUFULElBQWN1SSxHQUFkLEVBQW1CO0FBQ2pCLFFBQUlBLElBQUlzTyxjQUFKLENBQW1CN1csQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QjRXLFFBQUU1VyxDQUFGLElBQU91SSxJQUFJdkksQ0FBSixDQUFQO0FBQ0Q7QUFDRjtBQUNELFNBQU80VyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0FwRCxPQUFPMVosU0FBUCxDQUFpQm1jLElBQWpCLEdBQXdCLFlBQVk7QUFDbEMsTUFBSU8sU0FBSjtBQUNBLE1BQUksS0FBSzlCLGVBQUwsSUFBd0JsQixPQUFPMEMscUJBQS9CLElBQXdELEtBQUtwWSxVQUFMLENBQWdCK0UsT0FBaEIsQ0FBd0IsV0FBeEIsTUFBeUMsQ0FBQyxDQUF0RyxFQUF5RztBQUN2RzJULGdCQUFZLFdBQVo7QUFDRCxHQUZELE1BRU8sSUFBSSxNQUFNLEtBQUsxWSxVQUFMLENBQWdCN0MsTUFBMUIsRUFBa0M7QUFDdkM7QUFDQSxRQUFJc2EsT0FBTyxJQUFYO0FBQ0F1QixlQUFXLFlBQVk7QUFDckJ2QixXQUFLcFksSUFBTCxDQUFVLE9BQVYsRUFBbUIseUJBQW5CO0FBQ0QsS0FGRCxFQUVHLENBRkg7QUFHQTtBQUNELEdBUE0sTUFPQTtBQUNMcVosZ0JBQVksS0FBSzFZLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUNEO0FBQ0QsT0FBS3ZELFVBQUwsR0FBa0IsU0FBbEI7O0FBRUE7QUFDQSxNQUFJO0FBQ0ZpYyxnQkFBWSxLQUFLSixlQUFMLENBQXFCSSxTQUFyQixDQUFaO0FBQ0QsR0FGRCxDQUVFLE9BQU9qUyxDQUFQLEVBQVU7QUFDVixTQUFLekcsVUFBTCxDQUFnQmlaLEtBQWhCO0FBQ0EsU0FBS2QsSUFBTDtBQUNBO0FBQ0Q7O0FBRURPLFlBQVVQLElBQVY7QUFDQSxPQUFLZSxZQUFMLENBQWtCUixTQUFsQjtBQUNELENBM0JEOztBQTZCQTs7Ozs7O0FBTUFoRCxPQUFPMVosU0FBUCxDQUFpQmtkLFlBQWpCLEdBQWdDLFVBQVVSLFNBQVYsRUFBcUI7QUFDbkRwRCxRQUFNLHNCQUFOLEVBQThCb0QsVUFBVUgsSUFBeEM7QUFDQSxNQUFJZCxPQUFPLElBQVg7O0FBRUEsTUFBSSxLQUFLaUIsU0FBVCxFQUFvQjtBQUNsQnBELFVBQU0sZ0NBQU4sRUFBd0MsS0FBS29ELFNBQUwsQ0FBZUgsSUFBdkQ7QUFDQSxTQUFLRyxTQUFMLENBQWU1RCxrQkFBZjtBQUNEOztBQUVEO0FBQ0EsT0FBSzRELFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBO0FBQ0FBLFlBQ0N2YyxFQURELENBQ0ksT0FESixFQUNhLFlBQVk7QUFDdkJzYixTQUFLMEIsT0FBTDtBQUNELEdBSEQsRUFJQ2hkLEVBSkQsQ0FJSSxRQUpKLEVBSWMsVUFBVWlkLE1BQVYsRUFBa0I7QUFDOUIzQixTQUFLNEIsUUFBTCxDQUFjRCxNQUFkO0FBQ0QsR0FORCxFQU9DamQsRUFQRCxDQU9JLE9BUEosRUFPYSxVQUFVc0ssQ0FBVixFQUFhO0FBQ3hCZ1IsU0FBSzZCLE9BQUwsQ0FBYTdTLENBQWI7QUFDRCxHQVRELEVBVUN0SyxFQVZELENBVUksT0FWSixFQVVhLFlBQVk7QUFDdkJzYixTQUFLOEIsT0FBTCxDQUFhLGlCQUFiO0FBQ0QsR0FaRDtBQWFELENBMUJEOztBQTRCQTs7Ozs7OztBQU9BN0QsT0FBTzFaLFNBQVAsQ0FBaUJ3ZCxLQUFqQixHQUF5QixVQUFVakIsSUFBVixFQUFnQjtBQUN2Q2pELFFBQU0sd0JBQU4sRUFBZ0NpRCxJQUFoQztBQUNBLE1BQUlHLFlBQVksS0FBS0osZUFBTCxDQUFxQkMsSUFBckIsRUFBMkIsRUFBRWlCLE9BQU8sQ0FBVCxFQUEzQixDQUFoQjtBQUNBLE1BQUlDLFNBQVMsS0FBYjtBQUNBLE1BQUloQyxPQUFPLElBQVg7O0FBRUEvQixTQUFPMEMscUJBQVAsR0FBK0IsS0FBL0I7O0FBRUEsV0FBU3NCLGVBQVQsR0FBNEI7QUFDMUIsUUFBSWpDLEtBQUtYLGtCQUFULEVBQTZCO0FBQzNCLFVBQUk2QyxxQkFBcUIsQ0FBQyxLQUFLQyxjQUFOLElBQXdCbkMsS0FBS2lCLFNBQUwsQ0FBZWtCLGNBQWhFO0FBQ0FILGVBQVNBLFVBQVVFLGtCQUFuQjtBQUNEO0FBQ0QsUUFBSUYsTUFBSixFQUFZOztBQUVabkUsVUFBTSw2QkFBTixFQUFxQ2lELElBQXJDO0FBQ0FHLGNBQVVtQixJQUFWLENBQWUsQ0FBQyxFQUFFbFMsTUFBTSxNQUFSLEVBQWdCdkwsTUFBTSxPQUF0QixFQUFELENBQWY7QUFDQXNjLGNBQVUvRCxJQUFWLENBQWUsUUFBZixFQUF5QixVQUFVbUYsR0FBVixFQUFlO0FBQ3RDLFVBQUlMLE1BQUosRUFBWTtBQUNaLFVBQUksV0FBV0ssSUFBSW5TLElBQWYsSUFBdUIsWUFBWW1TLElBQUkxZCxJQUEzQyxFQUFpRDtBQUMvQ2taLGNBQU0sMkJBQU4sRUFBbUNpRCxJQUFuQztBQUNBZCxhQUFLc0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBdEMsYUFBS3BZLElBQUwsQ0FBVSxXQUFWLEVBQXVCcVosU0FBdkI7QUFDQSxZQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDaEJoRCxlQUFPMEMscUJBQVAsR0FBK0IsZ0JBQWdCTSxVQUFVSCxJQUF6RDs7QUFFQWpELGNBQU0sZ0NBQU4sRUFBd0NtQyxLQUFLaUIsU0FBTCxDQUFlSCxJQUF2RDtBQUNBZCxhQUFLaUIsU0FBTCxDQUFlc0IsS0FBZixDQUFxQixZQUFZO0FBQy9CLGNBQUlQLE1BQUosRUFBWTtBQUNaLGNBQUksYUFBYWhDLEtBQUtoYixVQUF0QixFQUFrQztBQUNsQzZZLGdCQUFNLCtDQUFOOztBQUVBMkU7O0FBRUF4QyxlQUFLeUIsWUFBTCxDQUFrQlIsU0FBbEI7QUFDQUEsb0JBQVVtQixJQUFWLENBQWUsQ0FBQyxFQUFFbFMsTUFBTSxTQUFSLEVBQUQsQ0FBZjtBQUNBOFAsZUFBS3BZLElBQUwsQ0FBVSxTQUFWLEVBQXFCcVosU0FBckI7QUFDQUEsc0JBQVksSUFBWjtBQUNBakIsZUFBS3NDLFNBQUwsR0FBaUIsS0FBakI7QUFDQXRDLGVBQUt5QyxLQUFMO0FBQ0QsU0FiRDtBQWNELE9BdEJELE1Bc0JPO0FBQ0w1RSxjQUFNLDZCQUFOLEVBQXFDaUQsSUFBckM7QUFDQSxZQUFJaFgsTUFBTSxJQUFJakIsS0FBSixDQUFVLGFBQVYsQ0FBVjtBQUNBaUIsWUFBSW1YLFNBQUosR0FBZ0JBLFVBQVVILElBQTFCO0FBQ0FkLGFBQUtwWSxJQUFMLENBQVUsY0FBVixFQUEwQmtDLEdBQTFCO0FBQ0Q7QUFDRixLQTlCRDtBQStCRDs7QUFFRCxXQUFTNFksZUFBVCxHQUE0QjtBQUMxQixRQUFJVixNQUFKLEVBQVk7O0FBRVo7QUFDQUEsYUFBUyxJQUFUOztBQUVBUTs7QUFFQXZCLGNBQVUwQixLQUFWO0FBQ0ExQixnQkFBWSxJQUFaO0FBQ0Q7O0FBRUQ7QUFDQSxXQUFTMkIsT0FBVCxDQUFrQjlZLEdBQWxCLEVBQXVCO0FBQ3JCLFFBQUloQixRQUFRLElBQUlELEtBQUosQ0FBVSxrQkFBa0JpQixHQUE1QixDQUFaO0FBQ0FoQixVQUFNbVksU0FBTixHQUFrQkEsVUFBVUgsSUFBNUI7O0FBRUE0Qjs7QUFFQTdFLFVBQU0sa0RBQU4sRUFBMERpRCxJQUExRCxFQUFnRWhYLEdBQWhFOztBQUVBa1csU0FBS3BZLElBQUwsQ0FBVSxjQUFWLEVBQTBCa0IsS0FBMUI7QUFDRDs7QUFFRCxXQUFTK1osZ0JBQVQsR0FBNkI7QUFDM0JELFlBQVEsa0JBQVI7QUFDRDs7QUFFRDtBQUNBLFdBQVNFLE9BQVQsR0FBb0I7QUFDbEJGLFlBQVEsZUFBUjtBQUNEOztBQUVEO0FBQ0EsV0FBU0csU0FBVCxDQUFvQkMsRUFBcEIsRUFBd0I7QUFDdEIsUUFBSS9CLGFBQWErQixHQUFHbEMsSUFBSCxLQUFZRyxVQUFVSCxJQUF2QyxFQUE2QztBQUMzQ2pELFlBQU0sNEJBQU4sRUFBb0NtRixHQUFHbEMsSUFBdkMsRUFBNkNHLFVBQVVILElBQXZEO0FBQ0E0QjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxXQUFTRixPQUFULEdBQW9CO0FBQ2xCdkIsY0FBVTdELGNBQVYsQ0FBeUIsTUFBekIsRUFBaUM2RSxlQUFqQztBQUNBaEIsY0FBVTdELGNBQVYsQ0FBeUIsT0FBekIsRUFBa0N3RixPQUFsQztBQUNBM0IsY0FBVTdELGNBQVYsQ0FBeUIsT0FBekIsRUFBa0N5RixnQkFBbEM7QUFDQTdDLFNBQUs1QyxjQUFMLENBQW9CLE9BQXBCLEVBQTZCMEYsT0FBN0I7QUFDQTlDLFNBQUs1QyxjQUFMLENBQW9CLFdBQXBCLEVBQWlDMkYsU0FBakM7QUFDRDs7QUFFRDlCLFlBQVUvRCxJQUFWLENBQWUsTUFBZixFQUF1QitFLGVBQXZCO0FBQ0FoQixZQUFVL0QsSUFBVixDQUFlLE9BQWYsRUFBd0IwRixPQUF4QjtBQUNBM0IsWUFBVS9ELElBQVYsQ0FBZSxPQUFmLEVBQXdCMkYsZ0JBQXhCOztBQUVBLE9BQUszRixJQUFMLENBQVUsT0FBVixFQUFtQjRGLE9BQW5CO0FBQ0EsT0FBSzVGLElBQUwsQ0FBVSxXQUFWLEVBQXVCNkYsU0FBdkI7O0FBRUE5QixZQUFVUCxJQUFWO0FBQ0QsQ0E1R0Q7O0FBOEdBOzs7Ozs7QUFNQXpDLE9BQU8xWixTQUFQLENBQWlCMGUsTUFBakIsR0FBMEIsWUFBWTtBQUNwQ3BGLFFBQU0sYUFBTjtBQUNBLE9BQUs3WSxVQUFMLEdBQWtCLE1BQWxCO0FBQ0FpWixTQUFPMEMscUJBQVAsR0FBK0IsZ0JBQWdCLEtBQUtNLFNBQUwsQ0FBZUgsSUFBOUQ7QUFDQSxPQUFLbFosSUFBTCxDQUFVLE1BQVY7QUFDQSxPQUFLNmEsS0FBTDs7QUFFQTtBQUNBO0FBQ0EsTUFBSSxXQUFXLEtBQUt6ZCxVQUFoQixJQUE4QixLQUFLd1osT0FBbkMsSUFBOEMsS0FBS3lDLFNBQUwsQ0FBZXNCLEtBQWpFLEVBQXdFO0FBQ3RFMUUsVUFBTSx5QkFBTjtBQUNBLFNBQUssSUFBSXBULElBQUksQ0FBUixFQUFXeVksSUFBSSxLQUFLN0MsUUFBTCxDQUFjM2EsTUFBbEMsRUFBMEMrRSxJQUFJeVksQ0FBOUMsRUFBaUR6WSxHQUFqRCxFQUFzRDtBQUNwRCxXQUFLc1gsS0FBTCxDQUFXLEtBQUsxQixRQUFMLENBQWM1VixDQUFkLENBQVg7QUFDRDtBQUNGO0FBQ0YsQ0FmRDs7QUFpQkE7Ozs7OztBQU1Bd1QsT0FBTzFaLFNBQVAsQ0FBaUJxZCxRQUFqQixHQUE0QixVQUFVRCxNQUFWLEVBQWtCO0FBQzVDLE1BQUksY0FBYyxLQUFLM2MsVUFBbkIsSUFBaUMsV0FBVyxLQUFLQSxVQUFqRCxJQUNBLGNBQWMsS0FBS0EsVUFEdkIsRUFDbUM7QUFDakM2WSxVQUFNLHNDQUFOLEVBQThDOEQsT0FBT3pSLElBQXJELEVBQTJEeVIsT0FBT2hkLElBQWxFOztBQUVBLFNBQUtpRCxJQUFMLENBQVUsUUFBVixFQUFvQitaLE1BQXBCOztBQUVBO0FBQ0EsU0FBSy9aLElBQUwsQ0FBVSxXQUFWOztBQUVBLFlBQVErWixPQUFPelIsSUFBZjtBQUNFLFdBQUssTUFBTDtBQUNFLGFBQUtpVCxXQUFMLENBQWlCQyxLQUFLQyxLQUFMLENBQVcxQixPQUFPaGQsSUFBbEIsQ0FBakI7QUFDQTs7QUFFRixXQUFLLE1BQUw7QUFDRSxhQUFLMmUsT0FBTDtBQUNBLGFBQUsxYixJQUFMLENBQVUsTUFBVjtBQUNBOztBQUVGLFdBQUssT0FBTDtBQUNFLFlBQUlrQyxNQUFNLElBQUlqQixLQUFKLENBQVUsY0FBVixDQUFWO0FBQ0FpQixZQUFJb0QsSUFBSixHQUFXeVUsT0FBT2hkLElBQWxCO0FBQ0EsYUFBS2tkLE9BQUwsQ0FBYS9YLEdBQWI7QUFDQTs7QUFFRixXQUFLLFNBQUw7QUFDRSxhQUFLbEMsSUFBTCxDQUFVLE1BQVYsRUFBa0IrWixPQUFPaGQsSUFBekI7QUFDQSxhQUFLaUQsSUFBTCxDQUFVLFNBQVYsRUFBcUIrWixPQUFPaGQsSUFBNUI7QUFDQTtBQW5CSjtBQXFCRCxHQTlCRCxNQThCTztBQUNMa1osVUFBTSw2Q0FBTixFQUFxRCxLQUFLN1ksVUFBMUQ7QUFDRDtBQUNGLENBbENEOztBQW9DQTs7Ozs7OztBQU9BaVosT0FBTzFaLFNBQVAsQ0FBaUI0ZSxXQUFqQixHQUErQixVQUFVeGUsSUFBVixFQUFnQjtBQUM3QyxPQUFLaUQsSUFBTCxDQUFVLFdBQVYsRUFBdUJqRCxJQUF2QjtBQUNBLE9BQUt5YixFQUFMLEdBQVV6YixLQUFLdWMsR0FBZjtBQUNBLE9BQUtELFNBQUwsQ0FBZTNDLEtBQWYsQ0FBcUI0QyxHQUFyQixHQUEyQnZjLEtBQUt1YyxHQUFoQztBQUNBLE9BQUtiLFFBQUwsR0FBZ0IsS0FBS2tELGNBQUwsQ0FBb0I1ZSxLQUFLMGIsUUFBekIsQ0FBaEI7QUFDQSxPQUFLQyxZQUFMLEdBQW9CM2IsS0FBSzJiLFlBQXpCO0FBQ0EsT0FBS0MsV0FBTCxHQUFtQjViLEtBQUs0YixXQUF4QjtBQUNBLE9BQUswQyxNQUFMO0FBQ0E7QUFDQSxNQUFJLGFBQWEsS0FBS2plLFVBQXRCLEVBQWtDO0FBQ2xDLE9BQUtzZSxPQUFMOztBQUVBO0FBQ0EsT0FBS2xHLGNBQUwsQ0FBb0IsV0FBcEIsRUFBaUMsS0FBS29HLFdBQXRDO0FBQ0EsT0FBSzllLEVBQUwsQ0FBUSxXQUFSLEVBQXFCLEtBQUs4ZSxXQUExQjtBQUNELENBZkQ7O0FBaUJBOzs7Ozs7QUFNQXZGLE9BQU8xWixTQUFQLENBQWlCaWYsV0FBakIsR0FBK0IsVUFBVUMsT0FBVixFQUFtQjtBQUNoREMsZUFBYSxLQUFLakQsZ0JBQWxCO0FBQ0EsTUFBSVQsT0FBTyxJQUFYO0FBQ0FBLE9BQUtTLGdCQUFMLEdBQXdCYyxXQUFXLFlBQVk7QUFDN0MsUUFBSSxhQUFhdkIsS0FBS2hiLFVBQXRCLEVBQWtDO0FBQ2xDZ2IsU0FBSzhCLE9BQUwsQ0FBYSxjQUFiO0FBQ0QsR0FIdUIsRUFHckIyQixXQUFZekQsS0FBS00sWUFBTCxHQUFvQk4sS0FBS08sV0FIaEIsQ0FBeEI7QUFJRCxDQVBEOztBQVNBOzs7Ozs7O0FBT0F0QyxPQUFPMVosU0FBUCxDQUFpQitlLE9BQWpCLEdBQTJCLFlBQVk7QUFDckMsTUFBSXRELE9BQU8sSUFBWDtBQUNBMEQsZUFBYTFELEtBQUtRLGlCQUFsQjtBQUNBUixPQUFLUSxpQkFBTCxHQUF5QmUsV0FBVyxZQUFZO0FBQzlDMUQsVUFBTSxrREFBTixFQUEwRG1DLEtBQUtPLFdBQS9EO0FBQ0FQLFNBQUsyRCxJQUFMO0FBQ0EzRCxTQUFLd0QsV0FBTCxDQUFpQnhELEtBQUtPLFdBQXRCO0FBQ0QsR0FKd0IsRUFJdEJQLEtBQUtNLFlBSmlCLENBQXpCO0FBS0QsQ0FSRDs7QUFVQTs7Ozs7O0FBTUFyQyxPQUFPMVosU0FBUCxDQUFpQm9mLElBQWpCLEdBQXdCLFlBQVk7QUFDbEMsTUFBSTNELE9BQU8sSUFBWDtBQUNBLE9BQUs0RCxVQUFMLENBQWdCLE1BQWhCLEVBQXdCLFlBQVk7QUFDbEM1RCxTQUFLcFksSUFBTCxDQUFVLE1BQVY7QUFDRCxHQUZEO0FBR0QsQ0FMRDs7QUFPQTs7Ozs7O0FBTUFxVyxPQUFPMVosU0FBUCxDQUFpQm1kLE9BQWpCLEdBQTJCLFlBQVk7QUFDckMsT0FBSzFDLFdBQUwsQ0FBaUJ4QixNQUFqQixDQUF3QixDQUF4QixFQUEyQixLQUFLeUIsYUFBaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBS0EsYUFBTCxHQUFxQixDQUFyQjs7QUFFQSxNQUFJLE1BQU0sS0FBS0QsV0FBTCxDQUFpQnRaLE1BQTNCLEVBQW1DO0FBQ2pDLFNBQUtrQyxJQUFMLENBQVUsT0FBVjtBQUNELEdBRkQsTUFFTztBQUNMLFNBQUs2YSxLQUFMO0FBQ0Q7QUFDRixDQWJEOztBQWVBOzs7Ozs7QUFNQXhFLE9BQU8xWixTQUFQLENBQWlCa2UsS0FBakIsR0FBeUIsWUFBWTtBQUNuQyxNQUFJLGFBQWEsS0FBS3pkLFVBQWxCLElBQWdDLEtBQUtpYyxTQUFMLENBQWU0QyxRQUEvQyxJQUNGLENBQUMsS0FBS3ZCLFNBREosSUFDaUIsS0FBS3RELFdBQUwsQ0FBaUJ0WixNQUR0QyxFQUM4QztBQUM1Q21ZLFVBQU0sK0JBQU4sRUFBdUMsS0FBS21CLFdBQUwsQ0FBaUJ0WixNQUF4RDtBQUNBLFNBQUt1YixTQUFMLENBQWVtQixJQUFmLENBQW9CLEtBQUtwRCxXQUF6QjtBQUNBO0FBQ0E7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQUtELFdBQUwsQ0FBaUJ0WixNQUF0QztBQUNBLFNBQUtrQyxJQUFMLENBQVUsT0FBVjtBQUNEO0FBQ0YsQ0FWRDs7QUFZQTs7Ozs7Ozs7OztBQVVBcVcsT0FBTzFaLFNBQVAsQ0FBaUJzTyxLQUFqQixHQUNBb0wsT0FBTzFaLFNBQVAsQ0FBaUI2ZCxJQUFqQixHQUF3QixVQUFVQyxHQUFWLEVBQWV2UyxPQUFmLEVBQXdCaEwsRUFBeEIsRUFBNEI7QUFDbEQsT0FBSzhlLFVBQUwsQ0FBZ0IsU0FBaEIsRUFBMkJ2QixHQUEzQixFQUFnQ3ZTLE9BQWhDLEVBQXlDaEwsRUFBekM7QUFDQSxTQUFPLElBQVA7QUFDRCxDQUpEOztBQU1BOzs7Ozs7Ozs7O0FBVUFtWixPQUFPMVosU0FBUCxDQUFpQnFmLFVBQWpCLEdBQThCLFVBQVUxVCxJQUFWLEVBQWdCdkwsSUFBaEIsRUFBc0JtTCxPQUF0QixFQUErQmhMLEVBQS9CLEVBQW1DO0FBQy9ELE1BQUksZUFBZSxPQUFPSCxJQUExQixFQUFnQztBQUM5QkcsU0FBS0gsSUFBTDtBQUNBQSxXQUFPeUwsU0FBUDtBQUNEOztBQUVELE1BQUksZUFBZSxPQUFPTixPQUExQixFQUFtQztBQUNqQ2hMLFNBQUtnTCxPQUFMO0FBQ0FBLGNBQVUsSUFBVjtBQUNEOztBQUVELE1BQUksY0FBYyxLQUFLOUssVUFBbkIsSUFBaUMsYUFBYSxLQUFLQSxVQUF2RCxFQUFtRTtBQUNqRTtBQUNEOztBQUVEOEssWUFBVUEsV0FBVyxFQUFyQjtBQUNBQSxVQUFRZ1UsUUFBUixHQUFtQixVQUFVaFUsUUFBUWdVLFFBQXJDOztBQUVBLE1BQUluQyxTQUFTO0FBQ1h6UixVQUFNQSxJQURLO0FBRVh2TCxVQUFNQSxJQUZLO0FBR1htTCxhQUFTQTtBQUhFLEdBQWI7QUFLQSxPQUFLbEksSUFBTCxDQUFVLGNBQVYsRUFBMEIrWixNQUExQjtBQUNBLE9BQUszQyxXQUFMLENBQWlCOVEsSUFBakIsQ0FBc0J5VCxNQUF0QjtBQUNBLE1BQUk3YyxFQUFKLEVBQVEsS0FBS29ZLElBQUwsQ0FBVSxPQUFWLEVBQW1CcFksRUFBbkI7QUFDUixPQUFLMmQsS0FBTDtBQUNELENBM0JEOztBQTZCQTs7Ozs7O0FBTUF4RSxPQUFPMVosU0FBUCxDQUFpQm9lLEtBQWpCLEdBQXlCLFlBQVk7QUFDbkMsTUFBSSxjQUFjLEtBQUszZCxVQUFuQixJQUFpQyxXQUFXLEtBQUtBLFVBQXJELEVBQWlFO0FBQy9ELFNBQUtBLFVBQUwsR0FBa0IsU0FBbEI7O0FBRUEsUUFBSWdiLE9BQU8sSUFBWDs7QUFFQSxRQUFJLEtBQUtoQixXQUFMLENBQWlCdFosTUFBckIsRUFBNkI7QUFDM0IsV0FBS3dYLElBQUwsQ0FBVSxPQUFWLEVBQW1CLFlBQVk7QUFDN0IsWUFBSSxLQUFLb0YsU0FBVCxFQUFvQjtBQUNsQnlCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xwQjtBQUNEO0FBQ0YsT0FORDtBQU9ELEtBUkQsTUFRTyxJQUFJLEtBQUtMLFNBQVQsRUFBb0I7QUFDekJ5QjtBQUNELEtBRk0sTUFFQTtBQUNMcEI7QUFDRDtBQUNGOztBQUVELFdBQVNBLEtBQVQsR0FBa0I7QUFDaEIzQyxTQUFLOEIsT0FBTCxDQUFhLGNBQWI7QUFDQWpFLFVBQU0sNkNBQU47QUFDQW1DLFNBQUtpQixTQUFMLENBQWUwQixLQUFmO0FBQ0Q7O0FBRUQsV0FBU3FCLGVBQVQsR0FBNEI7QUFDMUJoRSxTQUFLNUMsY0FBTCxDQUFvQixTQUFwQixFQUErQjRHLGVBQS9CO0FBQ0FoRSxTQUFLNUMsY0FBTCxDQUFvQixjQUFwQixFQUFvQzRHLGVBQXBDO0FBQ0FyQjtBQUNEOztBQUVELFdBQVNvQixjQUFULEdBQTJCO0FBQ3pCO0FBQ0EvRCxTQUFLOUMsSUFBTCxDQUFVLFNBQVYsRUFBcUI4RyxlQUFyQjtBQUNBaEUsU0FBSzlDLElBQUwsQ0FBVSxjQUFWLEVBQTBCOEcsZUFBMUI7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQXhDRDs7QUEwQ0E7Ozs7OztBQU1BL0YsT0FBTzFaLFNBQVAsQ0FBaUJzZCxPQUFqQixHQUEyQixVQUFVL1gsR0FBVixFQUFlO0FBQ3hDK1QsUUFBTSxpQkFBTixFQUF5Qi9ULEdBQXpCO0FBQ0FtVSxTQUFPMEMscUJBQVAsR0FBK0IsS0FBL0I7QUFDQSxPQUFLL1ksSUFBTCxDQUFVLE9BQVYsRUFBbUJrQyxHQUFuQjtBQUNBLE9BQUtnWSxPQUFMLENBQWEsaUJBQWIsRUFBZ0NoWSxHQUFoQztBQUNELENBTEQ7O0FBT0E7Ozs7OztBQU1BbVUsT0FBTzFaLFNBQVAsQ0FBaUJ1ZCxPQUFqQixHQUEyQixVQUFVbUMsTUFBVixFQUFrQkMsSUFBbEIsRUFBd0I7QUFDakQsTUFBSSxjQUFjLEtBQUtsZixVQUFuQixJQUFpQyxXQUFXLEtBQUtBLFVBQWpELElBQStELGNBQWMsS0FBS0EsVUFBdEYsRUFBa0c7QUFDaEc2WSxVQUFNLGdDQUFOLEVBQXdDb0csTUFBeEM7QUFDQSxRQUFJakUsT0FBTyxJQUFYOztBQUVBO0FBQ0EwRCxpQkFBYSxLQUFLbEQsaUJBQWxCO0FBQ0FrRCxpQkFBYSxLQUFLakQsZ0JBQWxCOztBQUVBO0FBQ0EsU0FBS1EsU0FBTCxDQUFlNUQsa0JBQWYsQ0FBa0MsT0FBbEM7O0FBRUE7QUFDQSxTQUFLNEQsU0FBTCxDQUFlMEIsS0FBZjs7QUFFQTtBQUNBLFNBQUsxQixTQUFMLENBQWU1RCxrQkFBZjs7QUFFQTtBQUNBLFNBQUtyWSxVQUFMLEdBQWtCLFFBQWxCOztBQUVBO0FBQ0EsU0FBS29iLEVBQUwsR0FBVSxJQUFWOztBQUVBO0FBQ0EsU0FBS3hZLElBQUwsQ0FBVSxPQUFWLEVBQW1CcWMsTUFBbkIsRUFBMkJDLElBQTNCOztBQUVBO0FBQ0E7QUFDQWxFLFNBQUtoQixXQUFMLEdBQW1CLEVBQW5CO0FBQ0FnQixTQUFLZixhQUFMLEdBQXFCLENBQXJCO0FBQ0Q7QUFDRixDQWhDRDs7QUFrQ0E7Ozs7Ozs7O0FBUUFoQixPQUFPMVosU0FBUCxDQUFpQmdmLGNBQWpCLEdBQWtDLFVBQVVsRCxRQUFWLEVBQW9CO0FBQ3BELE1BQUk4RCxtQkFBbUIsRUFBdkI7QUFDQSxPQUFLLElBQUkxWixJQUFJLENBQVIsRUFBVzhMLElBQUk4SixTQUFTM2EsTUFBN0IsRUFBcUMrRSxJQUFJOEwsQ0FBekMsRUFBNEM5TCxHQUE1QyxFQUFpRDtBQUMvQyxRQUFJLENBQUNxVCxNQUFNLEtBQUt2VixVQUFYLEVBQXVCOFgsU0FBUzVWLENBQVQsQ0FBdkIsQ0FBTCxFQUEwQzBaLGlCQUFpQmpXLElBQWpCLENBQXNCbVMsU0FBUzVWLENBQVQsQ0FBdEI7QUFDM0M7QUFDRCxTQUFPMFosZ0JBQVA7QUFDRCxDQU5ELEM7Ozs7Ozs7Ozs7Ozs7O0FDbnVCQTs7OztBQUlBLElBQUl2RyxTQUFTNVUsbUJBQU9BLENBQUMsd0VBQVIsQ0FBYjtBQUNBLElBQUk2VCxVQUFVN1QsbUJBQU9BLENBQUMsb0VBQVIsQ0FBZDs7QUFFQTs7OztBQUlBSyxPQUFPQyxPQUFQLEdBQWlCc1gsU0FBakI7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTQSxTQUFULENBQW9CL1YsSUFBcEIsRUFBMEI7QUFDeEIsT0FBS3hGLElBQUwsR0FBWXdGLEtBQUt4RixJQUFqQjtBQUNBLE9BQUs4WSxRQUFMLEdBQWdCdFQsS0FBS3NULFFBQXJCO0FBQ0EsT0FBSzdWLElBQUwsR0FBWXVDLEtBQUt2QyxJQUFqQjtBQUNBLE9BQUtELE1BQUwsR0FBY3dDLEtBQUt4QyxNQUFuQjtBQUNBLE9BQUtpVyxLQUFMLEdBQWF6VCxLQUFLeVQsS0FBbEI7QUFDQSxPQUFLTyxjQUFMLEdBQXNCaFUsS0FBS2dVLGNBQTNCO0FBQ0EsT0FBS0MsaUJBQUwsR0FBeUJqVSxLQUFLaVUsaUJBQTlCO0FBQ0EsT0FBSzlaLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxPQUFLdVosS0FBTCxHQUFhMVQsS0FBSzBULEtBQUwsSUFBYyxLQUEzQjtBQUNBLE9BQUtqYSxNQUFMLEdBQWN1RyxLQUFLdkcsTUFBbkI7QUFDQSxPQUFLc2EsVUFBTCxHQUFrQi9ULEtBQUsrVCxVQUF2Qjs7QUFFQTtBQUNBLE9BQUtZLEdBQUwsR0FBVzNVLEtBQUsyVSxHQUFoQjtBQUNBLE9BQUt6QyxHQUFMLEdBQVdsUyxLQUFLa1MsR0FBaEI7QUFDQSxPQUFLMEMsVUFBTCxHQUFrQjVVLEtBQUs0VSxVQUF2QjtBQUNBLE9BQUtDLElBQUwsR0FBWTdVLEtBQUs2VSxJQUFqQjtBQUNBLE9BQUtDLEVBQUwsR0FBVTlVLEtBQUs4VSxFQUFmO0FBQ0EsT0FBS0MsT0FBTCxHQUFlL1UsS0FBSytVLE9BQXBCO0FBQ0EsT0FBS0Msa0JBQUwsR0FBMEJoVixLQUFLZ1Ysa0JBQS9CO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQmpWLEtBQUtpVixTQUF0Qjs7QUFFQTtBQUNBLE9BQUtDLGFBQUwsR0FBcUJsVixLQUFLa1YsYUFBMUI7O0FBRUE7QUFDQSxPQUFLRSxZQUFMLEdBQW9CcFYsS0FBS29WLFlBQXpCO0FBQ0EsT0FBS0UsWUFBTCxHQUFvQnRWLEtBQUtzVixZQUF6QjtBQUNEOztBQUVEOzs7O0FBSUF0RCxRQUFRK0QsVUFBVXJjLFNBQWxCOztBQUVBOzs7Ozs7OztBQVFBcWMsVUFBVXJjLFNBQVYsQ0FBb0JzZCxPQUFwQixHQUE4QixVQUFVUSxHQUFWLEVBQWU2QixJQUFmLEVBQXFCO0FBQ2pELE1BQUlwYSxNQUFNLElBQUlqQixLQUFKLENBQVV3WixHQUFWLENBQVY7QUFDQXZZLE1BQUlvRyxJQUFKLEdBQVcsZ0JBQVg7QUFDQXBHLE1BQUlzYSxXQUFKLEdBQWtCRixJQUFsQjtBQUNBLE9BQUt0YyxJQUFMLENBQVUsT0FBVixFQUFtQmtDLEdBQW5CO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7O0FBTUE4VyxVQUFVcmMsU0FBVixDQUFvQm1jLElBQXBCLEdBQTJCLFlBQVk7QUFDckMsTUFBSSxhQUFhLEtBQUsxYixVQUFsQixJQUFnQyxPQUFPLEtBQUtBLFVBQWhELEVBQTREO0FBQzFELFNBQUtBLFVBQUwsR0FBa0IsU0FBbEI7QUFDQSxTQUFLcWYsTUFBTDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBUEQ7O0FBU0E7Ozs7OztBQU1BekQsVUFBVXJjLFNBQVYsQ0FBb0JvZSxLQUFwQixHQUE0QixZQUFZO0FBQ3RDLE1BQUksY0FBYyxLQUFLM2QsVUFBbkIsSUFBaUMsV0FBVyxLQUFLQSxVQUFyRCxFQUFpRTtBQUMvRCxTQUFLc2YsT0FBTDtBQUNBLFNBQUt4QyxPQUFMO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FQRDs7QUFTQTs7Ozs7OztBQU9BbEIsVUFBVXJjLFNBQVYsQ0FBb0I2ZCxJQUFwQixHQUEyQixVQUFVbUMsT0FBVixFQUFtQjtBQUM1QyxNQUFJLFdBQVcsS0FBS3ZmLFVBQXBCLEVBQWdDO0FBQzlCLFNBQUs2TixLQUFMLENBQVcwUixPQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsVUFBTSxJQUFJMWIsS0FBSixDQUFVLG9CQUFWLENBQU47QUFDRDtBQUNGLENBTkQ7O0FBUUE7Ozs7OztBQU1BK1gsVUFBVXJjLFNBQVYsQ0FBb0IwZSxNQUFwQixHQUE2QixZQUFZO0FBQ3ZDLE9BQUtqZSxVQUFMLEdBQWtCLE1BQWxCO0FBQ0EsT0FBSzZlLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxPQUFLamMsSUFBTCxDQUFVLE1BQVY7QUFDRCxDQUpEOztBQU1BOzs7Ozs7O0FBT0FnWixVQUFVcmMsU0FBVixDQUFvQmlnQixNQUFwQixHQUE2QixVQUFVN2YsSUFBVixFQUFnQjtBQUMzQyxNQUFJZ2QsU0FBUy9ELE9BQU82RyxZQUFQLENBQW9COWYsSUFBcEIsRUFBMEIsS0FBS0wsTUFBTCxDQUFZOGEsVUFBdEMsQ0FBYjtBQUNBLE9BQUt3QyxRQUFMLENBQWNELE1BQWQ7QUFDRCxDQUhEOztBQUtBOzs7O0FBSUFmLFVBQVVyYyxTQUFWLENBQW9CcWQsUUFBcEIsR0FBK0IsVUFBVUQsTUFBVixFQUFrQjtBQUMvQyxPQUFLL1osSUFBTCxDQUFVLFFBQVYsRUFBb0IrWixNQUFwQjtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BZixVQUFVcmMsU0FBVixDQUFvQnVkLE9BQXBCLEdBQThCLFlBQVk7QUFDeEMsT0FBSzljLFVBQUwsR0FBa0IsUUFBbEI7QUFDQSxPQUFLNEMsSUFBTCxDQUFVLE9BQVY7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7Ozs7O0FDNUpBOzs7O0FBSUEsSUFBSThjLGlCQUFpQjFiLG1CQUFPQSxDQUFDLGlGQUFSLENBQXJCO0FBQ0EsSUFBSTJiLE1BQU0zYixtQkFBT0EsQ0FBQyxvRkFBUixDQUFWO0FBQ0EsSUFBSTRiLFFBQVE1YixtQkFBT0EsQ0FBQyx3RkFBUixDQUFaO0FBQ0EsSUFBSWYsWUFBWWUsbUJBQU9BLENBQUMsZ0ZBQVIsQ0FBaEI7O0FBRUE7Ozs7QUFJQU0sUUFBUXViLE9BQVIsR0FBa0JBLE9BQWxCO0FBQ0F2YixRQUFRckIsU0FBUixHQUFvQkEsU0FBcEI7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTNGMsT0FBVCxDQUFrQmhhLElBQWxCLEVBQXdCO0FBQ3RCLE1BQUlpYSxHQUFKO0FBQ0EsTUFBSUMsS0FBSyxLQUFUO0FBQ0EsTUFBSUMsS0FBSyxLQUFUO0FBQ0EsTUFBSXRHLFFBQVEsVUFBVTdULEtBQUs2VCxLQUEzQjs7QUFFQSxNQUFJLE9BQU9wWixRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLFFBQUkyZixRQUFRLGFBQWEzZixTQUFTK1ksUUFBbEM7QUFDQSxRQUFJL1YsT0FBT2hELFNBQVNnRCxJQUFwQjs7QUFFQTtBQUNBLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1RBLGFBQU8yYyxRQUFRLEdBQVIsR0FBYyxFQUFyQjtBQUNEOztBQUVERixTQUFLbGEsS0FBS3NULFFBQUwsS0FBa0I3WSxTQUFTNlksUUFBM0IsSUFBdUM3VixTQUFTdUMsS0FBS3ZDLElBQTFEO0FBQ0EwYyxTQUFLbmEsS0FBS3hDLE1BQUwsS0FBZ0I0YyxLQUFyQjtBQUNEOztBQUVEcGEsT0FBS3FhLE9BQUwsR0FBZUgsRUFBZjtBQUNBbGEsT0FBS3NhLE9BQUwsR0FBZUgsRUFBZjtBQUNBRixRQUFNLElBQUlKLGNBQUosQ0FBbUI3WixJQUFuQixDQUFOOztBQUVBLE1BQUksVUFBVWlhLEdBQVYsSUFBaUIsQ0FBQ2phLEtBQUs0VCxVQUEzQixFQUF1QztBQUNyQyxXQUFPLElBQUlrRyxHQUFKLENBQVE5WixJQUFSLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFJLENBQUM2VCxLQUFMLEVBQVksTUFBTSxJQUFJN1YsS0FBSixDQUFVLGdCQUFWLENBQU47QUFDWixXQUFPLElBQUkrYixLQUFKLENBQVUvWixJQUFWLENBQVA7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7O0FDcEREOzs7O0FBSUEsSUFBSXVhLFVBQVVwYyxtQkFBT0EsQ0FBQyw0RUFBUixDQUFkO0FBQ0EsSUFBSXFjLFVBQVVyYyxtQkFBT0EsQ0FBQyxvRUFBUixDQUFkOztBQUVBOzs7O0FBSUFLLE9BQU9DLE9BQVAsR0FBaUJnYyxZQUFqQjs7QUFFQTs7OztBQUlBLElBQUlDLFdBQVcsS0FBZjtBQUNBLElBQUlDLGtCQUFrQixNQUF0Qjs7QUFFQTs7OztBQUlBLElBQUlqSSxTQUFKOztBQUVBOzs7O0FBSUEsU0FBU2tJLEtBQVQsR0FBa0IsQ0FBRzs7QUFFckI7OztBQUdBLFNBQVNDLElBQVQsR0FBaUI7QUFDZixTQUFPLE9BQU8xRixJQUFQLEtBQWdCLFdBQWhCLEdBQThCQSxJQUE5QixHQUNELE9BQU83YSxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUNBLE9BQU93TCxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5QyxFQUYvQztBQUdEOztBQUVEOzs7Ozs7O0FBT0EsU0FBUzJVLFlBQVQsQ0FBdUJ6YSxJQUF2QixFQUE2QjtBQUMzQnVhLFVBQVF0UCxJQUFSLENBQWEsSUFBYixFQUFtQmpMLElBQW5COztBQUVBLE9BQUt5VCxLQUFMLEdBQWEsS0FBS0EsS0FBTCxJQUFjLEVBQTNCOztBQUVBO0FBQ0E7QUFDQSxNQUFJLENBQUNmLFNBQUwsRUFBZ0I7QUFDZDtBQUNBLFFBQUk1TSxTQUFTK1UsTUFBYjtBQUNBbkksZ0JBQVk1TSxPQUFPZ1YsTUFBUCxHQUFpQmhWLE9BQU9nVixNQUFQLElBQWlCLEVBQTlDO0FBQ0Q7O0FBRUQ7QUFDQSxPQUFLN0gsS0FBTCxHQUFhUCxVQUFVN1gsTUFBdkI7O0FBRUE7QUFDQSxNQUFJc2EsT0FBTyxJQUFYO0FBQ0F6QyxZQUFVclAsSUFBVixDQUFlLFVBQVVtVSxHQUFWLEVBQWU7QUFDNUJyQyxTQUFLd0UsTUFBTCxDQUFZbkMsR0FBWjtBQUNELEdBRkQ7O0FBSUE7QUFDQSxPQUFLL0QsS0FBTCxDQUFXL0gsQ0FBWCxHQUFlLEtBQUt1SCxLQUFwQjs7QUFFQTtBQUNBLE1BQUksT0FBTzdZLGdCQUFQLEtBQTRCLFVBQWhDLEVBQTRDO0FBQzFDQSxxQkFBaUIsY0FBakIsRUFBaUMsWUFBWTtBQUMzQyxVQUFJK2EsS0FBSzRGLE1BQVQsRUFBaUI1RixLQUFLNEYsTUFBTCxDQUFZaEQsT0FBWixHQUFzQjZDLEtBQXRCO0FBQ2xCLEtBRkQsRUFFRyxLQUZIO0FBR0Q7QUFDRjs7QUFFRDs7OztBQUlBSixRQUFRQyxZQUFSLEVBQXNCRixPQUF0Qjs7QUFFQTs7OztBQUlBRSxhQUFhL2dCLFNBQWIsQ0FBdUI0ZCxjQUF2QixHQUF3QyxLQUF4Qzs7QUFFQTs7Ozs7O0FBTUFtRCxhQUFhL2dCLFNBQWIsQ0FBdUIrZixPQUF2QixHQUFpQyxZQUFZO0FBQzNDLE1BQUksS0FBS3NCLE1BQVQsRUFBaUI7QUFDZixTQUFLQSxNQUFMLENBQVlDLFVBQVosQ0FBdUJDLFdBQXZCLENBQW1DLEtBQUtGLE1BQXhDO0FBQ0EsU0FBS0EsTUFBTCxHQUFjLElBQWQ7QUFDRDs7QUFFRCxNQUFJLEtBQUtHLElBQVQsRUFBZTtBQUNiLFNBQUtBLElBQUwsQ0FBVUYsVUFBVixDQUFxQkMsV0FBckIsQ0FBaUMsS0FBS0MsSUFBdEM7QUFDQSxTQUFLQSxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7O0FBRURaLFVBQVE3Z0IsU0FBUixDQUFrQitmLE9BQWxCLENBQTBCeE8sSUFBMUIsQ0FBK0IsSUFBL0I7QUFDRCxDQWJEOztBQWVBOzs7Ozs7QUFNQXdQLGFBQWEvZ0IsU0FBYixDQUF1QjBoQixNQUF2QixHQUFnQyxZQUFZO0FBQzFDLE1BQUlqRyxPQUFPLElBQVg7QUFDQSxNQUFJNEYsU0FBUzdnQixTQUFTbWhCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjs7QUFFQSxNQUFJLEtBQUtOLE1BQVQsRUFBaUI7QUFDZixTQUFLQSxNQUFMLENBQVlDLFVBQVosQ0FBdUJDLFdBQXZCLENBQW1DLEtBQUtGLE1BQXhDO0FBQ0EsU0FBS0EsTUFBTCxHQUFjLElBQWQ7QUFDRDs7QUFFREEsU0FBT08sS0FBUCxHQUFlLElBQWY7QUFDQVAsU0FBT2xKLEdBQVAsR0FBYSxLQUFLd0IsR0FBTCxFQUFiO0FBQ0EwSCxTQUFPaEQsT0FBUCxHQUFpQixVQUFVNVQsQ0FBVixFQUFhO0FBQzVCZ1IsU0FBSzZCLE9BQUwsQ0FBYSxrQkFBYixFQUFpQzdTLENBQWpDO0FBQ0QsR0FGRDs7QUFJQSxNQUFJb1gsV0FBV3JoQixTQUFTc2hCLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQWY7QUFDQSxNQUFJRCxRQUFKLEVBQWM7QUFDWkEsYUFBU1AsVUFBVCxDQUFvQlMsWUFBcEIsQ0FBaUNWLE1BQWpDLEVBQXlDUSxRQUF6QztBQUNELEdBRkQsTUFFTztBQUNMLEtBQUNyaEIsU0FBU3doQixJQUFULElBQWlCeGhCLFNBQVMyQixJQUEzQixFQUFpQzhmLFdBQWpDLENBQTZDWixNQUE3QztBQUNEO0FBQ0QsT0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVBLE1BQUlhLFlBQVksZ0JBQWdCLE9BQU81Z0IsU0FBdkIsSUFBb0MsU0FBUzZnQixJQUFULENBQWM3Z0IsVUFBVUcsU0FBeEIsQ0FBcEQ7O0FBRUEsTUFBSXlnQixTQUFKLEVBQWU7QUFDYmxGLGVBQVcsWUFBWTtBQUNyQixVQUFJeUUsU0FBU2poQixTQUFTbWhCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBbmhCLGVBQVMyQixJQUFULENBQWM4ZixXQUFkLENBQTBCUixNQUExQjtBQUNBamhCLGVBQVMyQixJQUFULENBQWNvZixXQUFkLENBQTBCRSxNQUExQjtBQUNELEtBSkQsRUFJRyxHQUpIO0FBS0Q7QUFDRixDQWhDRDs7QUFrQ0E7Ozs7Ozs7O0FBUUFWLGFBQWEvZ0IsU0FBYixDQUF1Qm9pQixPQUF2QixHQUFpQyxVQUFVaGlCLElBQVYsRUFBZ0JHLEVBQWhCLEVBQW9CO0FBQ25ELE1BQUlrYixPQUFPLElBQVg7O0FBRUEsTUFBSSxDQUFDLEtBQUsrRixJQUFWLEVBQWdCO0FBQ2QsUUFBSUEsT0FBT2hoQixTQUFTbWhCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBLFFBQUlVLE9BQU83aEIsU0FBU21oQixhQUFULENBQXVCLFVBQXZCLENBQVg7QUFDQSxRQUFJOUYsS0FBSyxLQUFLeUcsUUFBTCxHQUFnQixnQkFBZ0IsS0FBSy9JLEtBQTlDO0FBQ0EsUUFBSWtJLE1BQUo7O0FBRUFELFNBQUtlLFNBQUwsR0FBaUIsVUFBakI7QUFDQWYsU0FBS2dCLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixVQUF0QjtBQUNBakIsU0FBS2dCLEtBQUwsQ0FBV0UsR0FBWCxHQUFpQixTQUFqQjtBQUNBbEIsU0FBS2dCLEtBQUwsQ0FBV0csSUFBWCxHQUFrQixTQUFsQjtBQUNBbkIsU0FBSzNRLE1BQUwsR0FBY2dMLEVBQWQ7QUFDQTJGLFNBQUtvQixNQUFMLEdBQWMsTUFBZDtBQUNBcEIsU0FBS3FCLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DLE9BQXBDO0FBQ0FSLFNBQUs5RixJQUFMLEdBQVksR0FBWjtBQUNBaUYsU0FBS1MsV0FBTCxDQUFpQkksSUFBakI7QUFDQTdoQixhQUFTMkIsSUFBVCxDQUFjOGYsV0FBZCxDQUEwQlQsSUFBMUI7O0FBRUEsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS2EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBRUQsT0FBS2IsSUFBTCxDQUFVc0IsTUFBVixHQUFtQixLQUFLbkosR0FBTCxFQUFuQjs7QUFFQSxXQUFTb0osUUFBVCxHQUFxQjtBQUNuQkM7QUFDQXppQjtBQUNEOztBQUVELFdBQVN5aUIsVUFBVCxHQUF1QjtBQUNyQixRQUFJdkgsS0FBS2dHLE1BQVQsRUFBaUI7QUFDZixVQUFJO0FBQ0ZoRyxhQUFLK0YsSUFBTCxDQUFVRCxXQUFWLENBQXNCOUYsS0FBS2dHLE1BQTNCO0FBQ0QsT0FGRCxDQUVFLE9BQU9oWCxDQUFQLEVBQVU7QUFDVmdSLGFBQUs2QixPQUFMLENBQWEsb0NBQWIsRUFBbUQ3UyxDQUFuRDtBQUNEO0FBQ0Y7O0FBRUQsUUFBSTtBQUNGO0FBQ0EsVUFBSXdZLE9BQU8sc0NBQXNDeEgsS0FBSzZHLFFBQTNDLEdBQXNELElBQWpFO0FBQ0FiLGVBQVNqaEIsU0FBU21oQixhQUFULENBQXVCc0IsSUFBdkIsQ0FBVDtBQUNELEtBSkQsQ0FJRSxPQUFPeFksQ0FBUCxFQUFVO0FBQ1ZnWCxlQUFTamhCLFNBQVNtaEIsYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0FGLGFBQU9sRixJQUFQLEdBQWNkLEtBQUs2RyxRQUFuQjtBQUNBYixhQUFPdEosR0FBUCxHQUFhLGNBQWI7QUFDRDs7QUFFRHNKLFdBQU81RixFQUFQLEdBQVlKLEtBQUs2RyxRQUFqQjs7QUFFQTdHLFNBQUsrRixJQUFMLENBQVVTLFdBQVYsQ0FBc0JSLE1BQXRCO0FBQ0FoRyxTQUFLZ0csTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7O0FBRUR1Qjs7QUFFQTtBQUNBO0FBQ0E1aUIsU0FBT0EsS0FBS3NYLE9BQUwsQ0FBYXVKLGVBQWIsRUFBOEIsTUFBOUIsQ0FBUDtBQUNBLE9BQUtvQixJQUFMLENBQVVsVixLQUFWLEdBQWtCL00sS0FBS3NYLE9BQUwsQ0FBYXNKLFFBQWIsRUFBdUIsS0FBdkIsQ0FBbEI7O0FBRUEsTUFBSTtBQUNGLFNBQUtRLElBQUwsQ0FBVTBCLE1BQVY7QUFDRCxHQUZELENBRUUsT0FBT3pZLENBQVAsRUFBVSxDQUFFOztBQUVkLE1BQUksS0FBS2dYLE1BQUwsQ0FBWTBCLFdBQWhCLEVBQTZCO0FBQzNCLFNBQUsxQixNQUFMLENBQVkyQixrQkFBWixHQUFpQyxZQUFZO0FBQzNDLFVBQUkzSCxLQUFLZ0csTUFBTCxDQUFZaGhCLFVBQVosS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNzaUI7QUFDRDtBQUNGLEtBSkQ7QUFLRCxHQU5ELE1BTU87QUFDTCxTQUFLdEIsTUFBTCxDQUFZNEIsTUFBWixHQUFxQk4sUUFBckI7QUFDRDtBQUNGLENBNUVELEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xLQTs7QUFFQTs7OztBQUlBLElBQUk1QyxpQkFBaUIxYixtQkFBT0EsQ0FBQyxpRkFBUixDQUFyQjtBQUNBLElBQUlvYyxVQUFVcGMsbUJBQU9BLENBQUMsNEVBQVIsQ0FBZDtBQUNBLElBQUk2VCxVQUFVN1QsbUJBQU9BLENBQUMsb0VBQVIsQ0FBZDtBQUNBLElBQUlxYyxVQUFVcmMsbUJBQU9BLENBQUMsb0VBQVIsQ0FBZDtBQUNBLElBQUk2VSxRQUFRN1UsbUJBQU9BLENBQUMsZ0ZBQVIsRUFBaUIsOEJBQWpCLENBQVo7O0FBRUE7Ozs7QUFJQUssT0FBT0MsT0FBUCxHQUFpQnFiLEdBQWpCO0FBQ0F0YixPQUFPQyxPQUFQLENBQWV1ZSxPQUFmLEdBQXlCQSxPQUF6Qjs7QUFFQTs7OztBQUlBLFNBQVNwQyxLQUFULEdBQWtCLENBQUU7O0FBRXBCOzs7Ozs7O0FBT0EsU0FBU2QsR0FBVCxDQUFjOVosSUFBZCxFQUFvQjtBQUNsQnVhLFVBQVF0UCxJQUFSLENBQWEsSUFBYixFQUFtQmpMLElBQW5CO0FBQ0EsT0FBS3NXLGNBQUwsR0FBc0J0VyxLQUFLc1csY0FBM0I7QUFDQSxPQUFLbEIsWUFBTCxHQUFvQnBWLEtBQUtvVixZQUF6Qjs7QUFFQSxNQUFJLE9BQU8zYSxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLFFBQUkyZixRQUFRLGFBQWEzZixTQUFTK1ksUUFBbEM7QUFDQSxRQUFJL1YsT0FBT2hELFNBQVNnRCxJQUFwQjs7QUFFQTtBQUNBLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1RBLGFBQU8yYyxRQUFRLEdBQVIsR0FBYyxFQUFyQjtBQUNEOztBQUVELFNBQUtGLEVBQUwsR0FBVyxPQUFPemYsUUFBUCxLQUFvQixXQUFwQixJQUFtQ3VGLEtBQUtzVCxRQUFMLEtBQWtCN1ksU0FBUzZZLFFBQS9ELElBQ1I3VixTQUFTdUMsS0FBS3ZDLElBRGhCO0FBRUEsU0FBSzBjLEVBQUwsR0FBVW5hLEtBQUt4QyxNQUFMLEtBQWdCNGMsS0FBMUI7QUFDRDtBQUNGOztBQUVEOzs7O0FBSUFJLFFBQVFWLEdBQVIsRUFBYVMsT0FBYjs7QUFFQTs7OztBQUlBVCxJQUFJcGdCLFNBQUosQ0FBYzRkLGNBQWQsR0FBK0IsSUFBL0I7O0FBRUE7Ozs7Ozs7QUFPQXdDLElBQUlwZ0IsU0FBSixDQUFjdWpCLE9BQWQsR0FBd0IsVUFBVWpkLElBQVYsRUFBZ0I7QUFDdENBLFNBQU9BLFFBQVEsRUFBZjtBQUNBQSxPQUFLcVQsR0FBTCxHQUFXLEtBQUtBLEdBQUwsRUFBWDtBQUNBclQsT0FBS2thLEVBQUwsR0FBVSxLQUFLQSxFQUFmO0FBQ0FsYSxPQUFLbWEsRUFBTCxHQUFVLEtBQUtBLEVBQWY7QUFDQW5hLE9BQUswVCxLQUFMLEdBQWEsS0FBS0EsS0FBTCxJQUFjLEtBQTNCO0FBQ0ExVCxPQUFLc1gsY0FBTCxHQUFzQixLQUFLQSxjQUEzQjtBQUNBdFgsT0FBSytULFVBQUwsR0FBa0IsS0FBS0EsVUFBdkI7O0FBRUE7QUFDQS9ULE9BQUsyVSxHQUFMLEdBQVcsS0FBS0EsR0FBaEI7QUFDQTNVLE9BQUtrUyxHQUFMLEdBQVcsS0FBS0EsR0FBaEI7QUFDQWxTLE9BQUs0VSxVQUFMLEdBQWtCLEtBQUtBLFVBQXZCO0FBQ0E1VSxPQUFLNlUsSUFBTCxHQUFZLEtBQUtBLElBQWpCO0FBQ0E3VSxPQUFLOFUsRUFBTCxHQUFVLEtBQUtBLEVBQWY7QUFDQTlVLE9BQUsrVSxPQUFMLEdBQWUsS0FBS0EsT0FBcEI7QUFDQS9VLE9BQUtnVixrQkFBTCxHQUEwQixLQUFLQSxrQkFBL0I7QUFDQWhWLE9BQUtzVyxjQUFMLEdBQXNCLEtBQUtBLGNBQTNCOztBQUVBO0FBQ0F0VyxPQUFLb1YsWUFBTCxHQUFvQixLQUFLQSxZQUF6Qjs7QUFFQSxTQUFPLElBQUk0SCxPQUFKLENBQVloZCxJQUFaLENBQVA7QUFDRCxDQXZCRDs7QUF5QkE7Ozs7Ozs7O0FBUUE4WixJQUFJcGdCLFNBQUosQ0FBY29pQixPQUFkLEdBQXdCLFVBQVVoaUIsSUFBVixFQUFnQkcsRUFBaEIsRUFBb0I7QUFDMUMsTUFBSWlqQixXQUFXLE9BQU9wakIsSUFBUCxLQUFnQixRQUFoQixJQUE0QkEsU0FBU3lMLFNBQXBEO0FBQ0EsTUFBSTRYLE1BQU0sS0FBS0YsT0FBTCxDQUFhLEVBQUVYLFFBQVEsTUFBVixFQUFrQnhpQixNQUFNQSxJQUF4QixFQUE4Qm9qQixVQUFVQSxRQUF4QyxFQUFiLENBQVY7QUFDQSxNQUFJL0gsT0FBTyxJQUFYO0FBQ0FnSSxNQUFJdGpCLEVBQUosQ0FBTyxTQUFQLEVBQWtCSSxFQUFsQjtBQUNBa2pCLE1BQUl0akIsRUFBSixDQUFPLE9BQVAsRUFBZ0IsVUFBVW9GLEdBQVYsRUFBZTtBQUM3QmtXLFNBQUs2QixPQUFMLENBQWEsZ0JBQWIsRUFBK0IvWCxHQUEvQjtBQUNELEdBRkQ7QUFHQSxPQUFLbWUsT0FBTCxHQUFlRCxHQUFmO0FBQ0QsQ0FURDs7QUFXQTs7Ozs7O0FBTUFyRCxJQUFJcGdCLFNBQUosQ0FBYzBoQixNQUFkLEdBQXVCLFlBQVk7QUFDakNwSSxRQUFNLFVBQU47QUFDQSxNQUFJbUssTUFBTSxLQUFLRixPQUFMLEVBQVY7QUFDQSxNQUFJOUgsT0FBTyxJQUFYO0FBQ0FnSSxNQUFJdGpCLEVBQUosQ0FBTyxNQUFQLEVBQWUsVUFBVUMsSUFBVixFQUFnQjtBQUM3QnFiLFNBQUt3RSxNQUFMLENBQVk3ZixJQUFaO0FBQ0QsR0FGRDtBQUdBcWpCLE1BQUl0akIsRUFBSixDQUFPLE9BQVAsRUFBZ0IsVUFBVW9GLEdBQVYsRUFBZTtBQUM3QmtXLFNBQUs2QixPQUFMLENBQWEsZ0JBQWIsRUFBK0IvWCxHQUEvQjtBQUNELEdBRkQ7QUFHQSxPQUFLb2UsT0FBTCxHQUFlRixHQUFmO0FBQ0QsQ0FYRDs7QUFhQTs7Ozs7OztBQU9BLFNBQVNILE9BQVQsQ0FBa0JoZCxJQUFsQixFQUF3QjtBQUN0QixPQUFLc2MsTUFBTCxHQUFjdGMsS0FBS3NjLE1BQUwsSUFBZSxLQUE3QjtBQUNBLE9BQUtqSixHQUFMLEdBQVdyVCxLQUFLcVQsR0FBaEI7QUFDQSxPQUFLNkcsRUFBTCxHQUFVLENBQUMsQ0FBQ2xhLEtBQUtrYSxFQUFqQjtBQUNBLE9BQUtDLEVBQUwsR0FBVSxDQUFDLENBQUNuYSxLQUFLbWEsRUFBakI7QUFDQSxPQUFLbUIsS0FBTCxHQUFhLFVBQVV0YixLQUFLc2IsS0FBNUI7QUFDQSxPQUFLeGhCLElBQUwsR0FBWXlMLGNBQWN2RixLQUFLbEcsSUFBbkIsR0FBMEJrRyxLQUFLbEcsSUFBL0IsR0FBc0MsSUFBbEQ7QUFDQSxPQUFLNFosS0FBTCxHQUFhMVQsS0FBSzBULEtBQWxCO0FBQ0EsT0FBS3dKLFFBQUwsR0FBZ0JsZCxLQUFLa2QsUUFBckI7QUFDQSxPQUFLNUYsY0FBTCxHQUFzQnRYLEtBQUtzWCxjQUEzQjtBQUNBLE9BQUt2RCxVQUFMLEdBQWtCL1QsS0FBSytULFVBQXZCO0FBQ0EsT0FBS3VDLGNBQUwsR0FBc0J0VyxLQUFLc1csY0FBM0I7O0FBRUE7QUFDQSxPQUFLM0IsR0FBTCxHQUFXM1UsS0FBSzJVLEdBQWhCO0FBQ0EsT0FBS3pDLEdBQUwsR0FBV2xTLEtBQUtrUyxHQUFoQjtBQUNBLE9BQUswQyxVQUFMLEdBQWtCNVUsS0FBSzRVLFVBQXZCO0FBQ0EsT0FBS0MsSUFBTCxHQUFZN1UsS0FBSzZVLElBQWpCO0FBQ0EsT0FBS0MsRUFBTCxHQUFVOVUsS0FBSzhVLEVBQWY7QUFDQSxPQUFLQyxPQUFMLEdBQWUvVSxLQUFLK1UsT0FBcEI7QUFDQSxPQUFLQyxrQkFBTCxHQUEwQmhWLEtBQUtnVixrQkFBL0I7O0FBRUE7QUFDQSxPQUFLSSxZQUFMLEdBQW9CcFYsS0FBS29WLFlBQXpCOztBQUVBLE9BQUtrSSxNQUFMO0FBQ0Q7O0FBRUQ7Ozs7QUFJQXRMLFFBQVFnTCxRQUFRdGpCLFNBQWhCOztBQUVBOzs7Ozs7QUFNQXNqQixRQUFRdGpCLFNBQVIsQ0FBa0I0akIsTUFBbEIsR0FBMkIsWUFBWTtBQUNyQyxNQUFJdGQsT0FBTyxFQUFFMFQsT0FBTyxLQUFLQSxLQUFkLEVBQXFCMkcsU0FBUyxLQUFLSCxFQUFuQyxFQUF1Q0ksU0FBUyxLQUFLSCxFQUFyRCxFQUF5RHBHLFlBQVksS0FBS0EsVUFBMUUsRUFBWDs7QUFFQTtBQUNBL1QsT0FBSzJVLEdBQUwsR0FBVyxLQUFLQSxHQUFoQjtBQUNBM1UsT0FBS2tTLEdBQUwsR0FBVyxLQUFLQSxHQUFoQjtBQUNBbFMsT0FBSzRVLFVBQUwsR0FBa0IsS0FBS0EsVUFBdkI7QUFDQTVVLE9BQUs2VSxJQUFMLEdBQVksS0FBS0EsSUFBakI7QUFDQTdVLE9BQUs4VSxFQUFMLEdBQVUsS0FBS0EsRUFBZjtBQUNBOVUsT0FBSytVLE9BQUwsR0FBZSxLQUFLQSxPQUFwQjtBQUNBL1UsT0FBS2dWLGtCQUFMLEdBQTBCLEtBQUtBLGtCQUEvQjs7QUFFQSxNQUFJaUYsTUFBTSxLQUFLQSxHQUFMLEdBQVcsSUFBSUosY0FBSixDQUFtQjdaLElBQW5CLENBQXJCO0FBQ0EsTUFBSW1WLE9BQU8sSUFBWDs7QUFFQSxNQUFJO0FBQ0ZuQyxVQUFNLGlCQUFOLEVBQXlCLEtBQUtzSixNQUE5QixFQUFzQyxLQUFLakosR0FBM0M7QUFDQTRHLFFBQUlwRSxJQUFKLENBQVMsS0FBS3lHLE1BQWQsRUFBc0IsS0FBS2pKLEdBQTNCLEVBQWdDLEtBQUtpSSxLQUFyQztBQUNBLFFBQUk7QUFDRixVQUFJLEtBQUtsRyxZQUFULEVBQXVCO0FBQ3JCNkUsWUFBSXNELHFCQUFKLElBQTZCdEQsSUFBSXNELHFCQUFKLENBQTBCLElBQTFCLENBQTdCO0FBQ0EsYUFBSyxJQUFJM2QsQ0FBVCxJQUFjLEtBQUt3VixZQUFuQixFQUFpQztBQUMvQixjQUFJLEtBQUtBLFlBQUwsQ0FBa0JxQixjQUFsQixDQUFpQzdXLENBQWpDLENBQUosRUFBeUM7QUFDdkNxYSxnQkFBSXVELGdCQUFKLENBQXFCNWQsQ0FBckIsRUFBd0IsS0FBS3dWLFlBQUwsQ0FBa0J4VixDQUFsQixDQUF4QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBVEQsQ0FTRSxPQUFPdUUsQ0FBUCxFQUFVLENBQUU7O0FBRWQsUUFBSSxXQUFXLEtBQUttWSxNQUFwQixFQUE0QjtBQUMxQixVQUFJO0FBQ0YsWUFBSSxLQUFLWSxRQUFULEVBQW1CO0FBQ2pCakQsY0FBSXVELGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLDBCQUFyQztBQUNELFNBRkQsTUFFTztBQUNMdkQsY0FBSXVELGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLDBCQUFyQztBQUNEO0FBQ0YsT0FORCxDQU1FLE9BQU9yWixDQUFQLEVBQVUsQ0FBRTtBQUNmOztBQUVELFFBQUk7QUFDRjhWLFVBQUl1RCxnQkFBSixDQUFxQixRQUFyQixFQUErQixLQUEvQjtBQUNELEtBRkQsQ0FFRSxPQUFPclosQ0FBUCxFQUFVLENBQUU7O0FBRWQ7QUFDQSxRQUFJLHFCQUFxQjhWLEdBQXpCLEVBQThCO0FBQzVCQSxVQUFJd0QsZUFBSixHQUFzQixJQUF0QjtBQUNEOztBQUVELFFBQUksS0FBS25ILGNBQVQsRUFBeUI7QUFDdkIyRCxVQUFJckIsT0FBSixHQUFjLEtBQUt0QyxjQUFuQjtBQUNEOztBQUVELFFBQUksS0FBS29ILE1BQUwsRUFBSixFQUFtQjtBQUNqQnpELFVBQUk4QyxNQUFKLEdBQWEsWUFBWTtBQUN2QjVILGFBQUt3SSxNQUFMO0FBQ0QsT0FGRDtBQUdBMUQsVUFBSWxDLE9BQUosR0FBYyxZQUFZO0FBQ3hCNUMsYUFBSzZCLE9BQUwsQ0FBYWlELElBQUkyRCxZQUFqQjtBQUNELE9BRkQ7QUFHRCxLQVBELE1BT087QUFDTDNELFVBQUk2QyxrQkFBSixHQUF5QixZQUFZO0FBQ25DLFlBQUk3QyxJQUFJOWYsVUFBSixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixjQUFJO0FBQ0YsZ0JBQUkwakIsY0FBYzVELElBQUk2RCxpQkFBSixDQUFzQixjQUF0QixDQUFsQjtBQUNBLGdCQUFJM0ksS0FBS21DLGNBQUwsSUFBdUJ1RyxnQkFBZ0IsMEJBQTNDLEVBQXVFO0FBQ3JFNUQsa0JBQUk4RCxZQUFKLEdBQW1CLGFBQW5CO0FBQ0Q7QUFDRixXQUxELENBS0UsT0FBTzVaLENBQVAsRUFBVSxDQUFFO0FBQ2Y7QUFDRCxZQUFJLE1BQU04VixJQUFJOWYsVUFBZCxFQUEwQjtBQUMxQixZQUFJLFFBQVE4ZixJQUFJN2dCLE1BQVosSUFBc0IsU0FBUzZnQixJQUFJN2dCLE1BQXZDLEVBQStDO0FBQzdDK2IsZUFBS3dJLE1BQUw7QUFDRCxTQUZELE1BRU87QUFDTDtBQUNBO0FBQ0FqSCxxQkFBVyxZQUFZO0FBQ3JCdkIsaUJBQUs2QixPQUFMLENBQWFpRCxJQUFJN2dCLE1BQWpCO0FBQ0QsV0FGRCxFQUVHLENBRkg7QUFHRDtBQUNGLE9BbkJEO0FBb0JEOztBQUVENFosVUFBTSxhQUFOLEVBQXFCLEtBQUtsWixJQUExQjtBQUNBbWdCLFFBQUkxQyxJQUFKLENBQVMsS0FBS3pkLElBQWQ7QUFDRCxHQXJFRCxDQXFFRSxPQUFPcUssQ0FBUCxFQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0F1UyxlQUFXLFlBQVk7QUFDckJ2QixXQUFLNkIsT0FBTCxDQUFhN1MsQ0FBYjtBQUNELEtBRkQsRUFFRyxDQUZIO0FBR0E7QUFDRDs7QUFFRCxNQUFJLE9BQU9qSyxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLFNBQUsrWSxLQUFMLEdBQWErSixRQUFRZ0IsYUFBUixFQUFiO0FBQ0FoQixZQUFRaUIsUUFBUixDQUFpQixLQUFLaEwsS0FBdEIsSUFBK0IsSUFBL0I7QUFDRDtBQUNGLENBbEdEOztBQW9HQTs7Ozs7O0FBTUErSixRQUFRdGpCLFNBQVIsQ0FBa0J3a0IsU0FBbEIsR0FBOEIsWUFBWTtBQUN4QyxPQUFLbmhCLElBQUwsQ0FBVSxTQUFWO0FBQ0EsT0FBSzRhLE9BQUw7QUFDRCxDQUhEOztBQUtBOzs7Ozs7QUFNQXFGLFFBQVF0akIsU0FBUixDQUFrQmlnQixNQUFsQixHQUEyQixVQUFVN2YsSUFBVixFQUFnQjtBQUN6QyxPQUFLaUQsSUFBTCxDQUFVLE1BQVYsRUFBa0JqRCxJQUFsQjtBQUNBLE9BQUtva0IsU0FBTDtBQUNELENBSEQ7O0FBS0E7Ozs7OztBQU1BbEIsUUFBUXRqQixTQUFSLENBQWtCc2QsT0FBbEIsR0FBNEIsVUFBVS9YLEdBQVYsRUFBZTtBQUN6QyxPQUFLbEMsSUFBTCxDQUFVLE9BQVYsRUFBbUJrQyxHQUFuQjtBQUNBLE9BQUswWSxPQUFMLENBQWEsSUFBYjtBQUNELENBSEQ7O0FBS0E7Ozs7OztBQU1BcUYsUUFBUXRqQixTQUFSLENBQWtCaWUsT0FBbEIsR0FBNEIsVUFBVXdHLFNBQVYsRUFBcUI7QUFDL0MsTUFBSSxnQkFBZ0IsT0FBTyxLQUFLbEUsR0FBNUIsSUFBbUMsU0FBUyxLQUFLQSxHQUFyRCxFQUEwRDtBQUN4RDtBQUNEO0FBQ0Q7QUFDQSxNQUFJLEtBQUt5RCxNQUFMLEVBQUosRUFBbUI7QUFDakIsU0FBS3pELEdBQUwsQ0FBUzhDLE1BQVQsR0FBa0IsS0FBSzlDLEdBQUwsQ0FBU2xDLE9BQVQsR0FBbUI2QyxLQUFyQztBQUNELEdBRkQsTUFFTztBQUNMLFNBQUtYLEdBQUwsQ0FBUzZDLGtCQUFULEdBQThCbEMsS0FBOUI7QUFDRDs7QUFFRCxNQUFJdUQsU0FBSixFQUFlO0FBQ2IsUUFBSTtBQUNGLFdBQUtsRSxHQUFMLENBQVNtRSxLQUFUO0FBQ0QsS0FGRCxDQUVFLE9BQU9qYSxDQUFQLEVBQVUsQ0FBRTtBQUNmOztBQUVELE1BQUksT0FBT2pLLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsV0FBTzhpQixRQUFRaUIsUUFBUixDQUFpQixLQUFLaEwsS0FBdEIsQ0FBUDtBQUNEOztBQUVELE9BQUtnSCxHQUFMLEdBQVcsSUFBWDtBQUNELENBdEJEOztBQXdCQTs7Ozs7O0FBTUErQyxRQUFRdGpCLFNBQVIsQ0FBa0Jpa0IsTUFBbEIsR0FBMkIsWUFBWTtBQUNyQyxNQUFJN2pCLElBQUo7QUFDQSxNQUFJO0FBQ0YsUUFBSStqQixXQUFKO0FBQ0EsUUFBSTtBQUNGQSxvQkFBYyxLQUFLNUQsR0FBTCxDQUFTNkQsaUJBQVQsQ0FBMkIsY0FBM0IsQ0FBZDtBQUNELEtBRkQsQ0FFRSxPQUFPM1osQ0FBUCxFQUFVLENBQUU7QUFDZCxRQUFJMFosZ0JBQWdCLDBCQUFwQixFQUFnRDtBQUM5Qy9qQixhQUFPLEtBQUttZ0IsR0FBTCxDQUFTb0UsUUFBVCxJQUFxQixLQUFLcEUsR0FBTCxDQUFTMkQsWUFBckM7QUFDRCxLQUZELE1BRU87QUFDTDlqQixhQUFPLEtBQUttZ0IsR0FBTCxDQUFTMkQsWUFBaEI7QUFDRDtBQUNGLEdBVkQsQ0FVRSxPQUFPelosQ0FBUCxFQUFVO0FBQ1YsU0FBSzZTLE9BQUwsQ0FBYTdTLENBQWI7QUFDRDtBQUNELE1BQUksUUFBUXJLLElBQVosRUFBa0I7QUFDaEIsU0FBSzZmLE1BQUwsQ0FBWTdmLElBQVo7QUFDRDtBQUNGLENBbEJEOztBQW9CQTs7Ozs7O0FBTUFrakIsUUFBUXRqQixTQUFSLENBQWtCZ2tCLE1BQWxCLEdBQTJCLFlBQVk7QUFDckMsU0FBTyxPQUFPWSxjQUFQLEtBQTBCLFdBQTFCLElBQXlDLENBQUMsS0FBS25FLEVBQS9DLElBQXFELEtBQUtwRyxVQUFqRTtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BaUosUUFBUXRqQixTQUFSLENBQWtCMGtCLEtBQWxCLEdBQTBCLFlBQVk7QUFDcEMsT0FBS3pHLE9BQUw7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQXFGLFFBQVFnQixhQUFSLEdBQXdCLENBQXhCO0FBQ0FoQixRQUFRaUIsUUFBUixHQUFtQixFQUFuQjs7QUFFQSxJQUFJLE9BQU8vakIsUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQyxNQUFJLE9BQU8yaUIsV0FBUCxLQUF1QixVQUEzQixFQUF1QztBQUNyQ0EsZ0JBQVksVUFBWixFQUF3QjBCLGFBQXhCO0FBQ0QsR0FGRCxNQUVPLElBQUksT0FBT25rQixnQkFBUCxLQUE0QixVQUFoQyxFQUE0QztBQUNqRCxRQUFJb2tCLG1CQUFtQixnQkFBZ0JySixJQUFoQixHQUF1QixVQUF2QixHQUFvQyxRQUEzRDtBQUNBL2EscUJBQWlCb2tCLGdCQUFqQixFQUFtQ0QsYUFBbkMsRUFBa0QsS0FBbEQ7QUFDRDtBQUNGOztBQUVELFNBQVNBLGFBQVQsR0FBMEI7QUFDeEIsT0FBSyxJQUFJM2UsQ0FBVCxJQUFjb2QsUUFBUWlCLFFBQXRCLEVBQWdDO0FBQzlCLFFBQUlqQixRQUFRaUIsUUFBUixDQUFpQnhILGNBQWpCLENBQWdDN1csQ0FBaEMsQ0FBSixFQUF3QztBQUN0Q29kLGNBQVFpQixRQUFSLENBQWlCcmUsQ0FBakIsRUFBb0J3ZSxLQUFwQjtBQUNEO0FBQ0Y7QUFDRixDOzs7Ozs7Ozs7Ozs7OztBQzlaRDs7OztBQUlBLElBQUlySSxZQUFZNVgsbUJBQU9BLENBQUMsc0VBQVIsQ0FBaEI7QUFDQSxJQUFJZ1YsVUFBVWhWLG1CQUFPQSxDQUFDLGdEQUFSLENBQWQ7QUFDQSxJQUFJNFUsU0FBUzVVLG1CQUFPQSxDQUFDLHdFQUFSLENBQWI7QUFDQSxJQUFJcWMsVUFBVXJjLG1CQUFPQSxDQUFDLG9FQUFSLENBQWQ7QUFDQSxJQUFJc2dCLFFBQVF0Z0IsbUJBQU9BLENBQUMsNENBQVIsQ0FBWjtBQUNBLElBQUk2VSxRQUFRN1UsbUJBQU9BLENBQUMsZ0ZBQVIsRUFBaUIsMEJBQWpCLENBQVo7O0FBRUE7Ozs7QUFJQUssT0FBT0MsT0FBUCxHQUFpQjhiLE9BQWpCOztBQUVBOzs7O0FBSUEsSUFBSW1FLFVBQVcsWUFBWTtBQUN6QixNQUFJN0UsaUJBQWlCMWIsbUJBQU9BLENBQUMsaUZBQVIsQ0FBckI7QUFDQSxNQUFJOGIsTUFBTSxJQUFJSixjQUFKLENBQW1CLEVBQUVRLFNBQVMsS0FBWCxFQUFuQixDQUFWO0FBQ0EsU0FBTyxRQUFRSixJQUFJOEQsWUFBbkI7QUFDRCxDQUphLEVBQWQ7O0FBTUE7Ozs7Ozs7QUFPQSxTQUFTeEQsT0FBVCxDQUFrQnZhLElBQWxCLEVBQXdCO0FBQ3RCLE1BQUk4VCxjQUFlOVQsUUFBUUEsS0FBSzhULFdBQWhDO0FBQ0EsTUFBSSxDQUFDNEssT0FBRCxJQUFZNUssV0FBaEIsRUFBNkI7QUFDM0IsU0FBS3dELGNBQUwsR0FBc0IsS0FBdEI7QUFDRDtBQUNEdkIsWUFBVTlLLElBQVYsQ0FBZSxJQUFmLEVBQXFCakwsSUFBckI7QUFDRDs7QUFFRDs7OztBQUlBd2EsUUFBUUQsT0FBUixFQUFpQnhFLFNBQWpCOztBQUVBOzs7O0FBSUF3RSxRQUFRN2dCLFNBQVIsQ0FBa0J1YyxJQUFsQixHQUF5QixTQUF6Qjs7QUFFQTs7Ozs7OztBQU9Bc0UsUUFBUTdnQixTQUFSLENBQWtCOGYsTUFBbEIsR0FBMkIsWUFBWTtBQUNyQyxPQUFLbUYsSUFBTDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7QUFPQXBFLFFBQVE3Z0IsU0FBUixDQUFrQmdlLEtBQWxCLEdBQTBCLFVBQVVrSCxPQUFWLEVBQW1CO0FBQzNDLE1BQUl6SixPQUFPLElBQVg7O0FBRUEsT0FBS2hiLFVBQUwsR0FBa0IsU0FBbEI7O0FBRUEsV0FBU3VkLEtBQVQsR0FBa0I7QUFDaEIxRSxVQUFNLFFBQU47QUFDQW1DLFNBQUtoYixVQUFMLEdBQWtCLFFBQWxCO0FBQ0F5a0I7QUFDRDs7QUFFRCxNQUFJLEtBQUs1RSxPQUFMLElBQWdCLENBQUMsS0FBS2hCLFFBQTFCLEVBQW9DO0FBQ2xDLFFBQUk2RixRQUFRLENBQVo7O0FBRUEsUUFBSSxLQUFLN0UsT0FBVCxFQUFrQjtBQUNoQmhILFlBQU0sNkNBQU47QUFDQTZMO0FBQ0EsV0FBS3hNLElBQUwsQ0FBVSxjQUFWLEVBQTBCLFlBQVk7QUFDcENXLGNBQU0sNEJBQU47QUFDQSxVQUFFNkwsS0FBRixJQUFXbkgsT0FBWDtBQUNELE9BSEQ7QUFJRDs7QUFFRCxRQUFJLENBQUMsS0FBS3NCLFFBQVYsRUFBb0I7QUFDbEJoRyxZQUFNLDZDQUFOO0FBQ0E2TDtBQUNBLFdBQUt4TSxJQUFMLENBQVUsT0FBVixFQUFtQixZQUFZO0FBQzdCVyxjQUFNLDRCQUFOO0FBQ0EsVUFBRTZMLEtBQUYsSUFBV25ILE9BQVg7QUFDRCxPQUhEO0FBSUQ7QUFDRixHQXBCRCxNQW9CTztBQUNMQTtBQUNEO0FBQ0YsQ0FsQ0Q7O0FBb0NBOzs7Ozs7QUFNQTZDLFFBQVE3Z0IsU0FBUixDQUFrQmlsQixJQUFsQixHQUF5QixZQUFZO0FBQ25DM0wsUUFBTSxTQUFOO0FBQ0EsT0FBS2dILE9BQUwsR0FBZSxJQUFmO0FBQ0EsT0FBS29CLE1BQUw7QUFDQSxPQUFLcmUsSUFBTCxDQUFVLE1BQVY7QUFDRCxDQUxEOztBQU9BOzs7Ozs7QUFNQXdkLFFBQVE3Z0IsU0FBUixDQUFrQmlnQixNQUFsQixHQUEyQixVQUFVN2YsSUFBVixFQUFnQjtBQUN6QyxNQUFJcWIsT0FBTyxJQUFYO0FBQ0FuQyxRQUFNLHFCQUFOLEVBQTZCbFosSUFBN0I7QUFDQSxNQUFJOEUsV0FBVyxTQUFYQSxRQUFXLENBQVVrWSxNQUFWLEVBQWtCN0QsS0FBbEIsRUFBeUI0TCxLQUF6QixFQUFnQztBQUM3QztBQUNBLFFBQUksY0FBYzFKLEtBQUtoYixVQUF2QixFQUFtQztBQUNqQ2diLFdBQUtpRCxNQUFMO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJLFlBQVl0QixPQUFPelIsSUFBdkIsRUFBNkI7QUFDM0I4UCxXQUFLOEIsT0FBTDtBQUNBLGFBQU8sS0FBUDtBQUNEOztBQUVEO0FBQ0E5QixTQUFLNEIsUUFBTCxDQUFjRCxNQUFkO0FBQ0QsR0FkRDs7QUFnQkE7QUFDQS9ELFNBQU8rTCxhQUFQLENBQXFCaGxCLElBQXJCLEVBQTJCLEtBQUtMLE1BQUwsQ0FBWThhLFVBQXZDLEVBQW1EM1YsUUFBbkQ7O0FBRUE7QUFDQSxNQUFJLGFBQWEsS0FBS3pFLFVBQXRCLEVBQWtDO0FBQ2hDO0FBQ0EsU0FBSzZmLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS2pkLElBQUwsQ0FBVSxjQUFWOztBQUVBLFFBQUksV0FBVyxLQUFLNUMsVUFBcEIsRUFBZ0M7QUFDOUIsV0FBS3drQixJQUFMO0FBQ0QsS0FGRCxNQUVPO0FBQ0wzTCxZQUFNLHNDQUFOLEVBQThDLEtBQUs3WSxVQUFuRDtBQUNEO0FBQ0Y7QUFDRixDQWxDRDs7QUFvQ0E7Ozs7OztBQU1Bb2dCLFFBQVE3Z0IsU0FBUixDQUFrQitmLE9BQWxCLEdBQTRCLFlBQVk7QUFDdEMsTUFBSXRFLE9BQU8sSUFBWDs7QUFFQSxXQUFTMkMsS0FBVCxHQUFrQjtBQUNoQjlFLFVBQU0sc0JBQU47QUFDQW1DLFNBQUtuTixLQUFMLENBQVcsQ0FBQyxFQUFFM0MsTUFBTSxPQUFSLEVBQUQsQ0FBWDtBQUNEOztBQUVELE1BQUksV0FBVyxLQUFLbEwsVUFBcEIsRUFBZ0M7QUFDOUI2WSxVQUFNLDBCQUFOO0FBQ0E4RTtBQUNELEdBSEQsTUFHTztBQUNMO0FBQ0E7QUFDQTlFLFVBQU0sc0NBQU47QUFDQSxTQUFLWCxJQUFMLENBQVUsTUFBVixFQUFrQnlGLEtBQWxCO0FBQ0Q7QUFDRixDQWpCRDs7QUFtQkE7Ozs7Ozs7O0FBUUF5QyxRQUFRN2dCLFNBQVIsQ0FBa0JzTyxLQUFsQixHQUEwQixVQUFVMFIsT0FBVixFQUFtQjtBQUMzQyxNQUFJdkUsT0FBTyxJQUFYO0FBQ0EsT0FBSzZELFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxNQUFJK0YsYUFBYSxTQUFiQSxVQUFhLEdBQVk7QUFDM0I1SixTQUFLNkQsUUFBTCxHQUFnQixJQUFoQjtBQUNBN0QsU0FBS3BZLElBQUwsQ0FBVSxPQUFWO0FBQ0QsR0FIRDs7QUFLQWdXLFNBQU9pTSxhQUFQLENBQXFCdEYsT0FBckIsRUFBOEIsS0FBS3BDLGNBQW5DLEVBQW1ELFVBQVV4ZCxJQUFWLEVBQWdCO0FBQ2pFcWIsU0FBSzJHLE9BQUwsQ0FBYWhpQixJQUFiLEVBQW1CaWxCLFVBQW5CO0FBQ0QsR0FGRDtBQUdELENBWEQ7O0FBYUE7Ozs7OztBQU1BeEUsUUFBUTdnQixTQUFSLENBQWtCMlosR0FBbEIsR0FBd0IsWUFBWTtBQUNsQyxNQUFJSSxRQUFRLEtBQUtBLEtBQUwsSUFBYyxFQUExQjtBQUNBLE1BQUl3TCxTQUFTLEtBQUt6aEIsTUFBTCxHQUFjLE9BQWQsR0FBd0IsTUFBckM7QUFDQSxNQUFJQyxPQUFPLEVBQVg7O0FBRUE7QUFDQSxNQUFJLFVBQVUsS0FBS3dXLGlCQUFuQixFQUFzQztBQUNwQ1IsVUFBTSxLQUFLTyxjQUFYLElBQTZCeUssT0FBN0I7QUFDRDs7QUFFRCxNQUFJLENBQUMsS0FBS25ILGNBQU4sSUFBd0IsQ0FBQzdELE1BQU00QyxHQUFuQyxFQUF3QztBQUN0QzVDLFVBQU1sUixHQUFOLEdBQVksQ0FBWjtBQUNEOztBQUVEa1IsVUFBUU4sUUFBUTlSLE1BQVIsQ0FBZW9TLEtBQWYsQ0FBUjs7QUFFQTtBQUNBLE1BQUksS0FBS2hXLElBQUwsS0FBZSxZQUFZd2hCLE1BQVosSUFBc0JwVCxPQUFPLEtBQUtwTyxJQUFaLE1BQXNCLEdBQTdDLElBQ2QsV0FBV3doQixNQUFYLElBQXFCcFQsT0FBTyxLQUFLcE8sSUFBWixNQUFzQixFQUQzQyxDQUFKLEVBQ3FEO0FBQ25EQSxXQUFPLE1BQU0sS0FBS0EsSUFBbEI7QUFDRDs7QUFFRDtBQUNBLE1BQUlnVyxNQUFNNVksTUFBVixFQUFrQjtBQUNoQjRZLFlBQVEsTUFBTUEsS0FBZDtBQUNEOztBQUVELE1BQUl5TCxPQUFPLEtBQUs1TCxRQUFMLENBQWM3USxPQUFkLENBQXNCLEdBQXRCLE1BQStCLENBQUMsQ0FBM0M7QUFDQSxTQUFPd2MsU0FBUyxLQUFULElBQWtCQyxPQUFPLE1BQU0sS0FBSzVMLFFBQVgsR0FBc0IsR0FBN0IsR0FBbUMsS0FBS0EsUUFBMUQsSUFBc0U3VixJQUF0RSxHQUE2RSxLQUFLakQsSUFBbEYsR0FBeUZpWixLQUFoRztBQUNELENBN0JELEM7Ozs7Ozs7Ozs7Ozs7O0FDdk5BOzs7O0FBSUEsSUFBSXNDLFlBQVk1WCxtQkFBT0EsQ0FBQyxzRUFBUixDQUFoQjtBQUNBLElBQUk0VSxTQUFTNVUsbUJBQU9BLENBQUMsd0VBQVIsQ0FBYjtBQUNBLElBQUlnVixVQUFVaFYsbUJBQU9BLENBQUMsZ0RBQVIsQ0FBZDtBQUNBLElBQUlxYyxVQUFVcmMsbUJBQU9BLENBQUMsb0VBQVIsQ0FBZDtBQUNBLElBQUlzZ0IsUUFBUXRnQixtQkFBT0EsQ0FBQyw0Q0FBUixDQUFaO0FBQ0EsSUFBSTZVLFFBQVE3VSxtQkFBT0EsQ0FBQyxnRkFBUixFQUFpQiw0QkFBakIsQ0FBWjs7QUFFQSxJQUFJZ2hCLGdCQUFKLEVBQXNCQyxhQUF0Qjs7QUFFQSxJQUFJLE9BQU9DLFNBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFDcENGLHFCQUFtQkUsU0FBbkI7QUFDRCxDQUZELE1BRU8sSUFBSSxPQUFPbEssSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUN0Q2dLLHFCQUFtQmhLLEtBQUtrSyxTQUFMLElBQWtCbEssS0FBS21LLFlBQTFDO0FBQ0QsQ0FGTSxNQUVBO0FBQ0wsTUFBSTtBQUNGRixvQkFBZ0JqaEIsbUJBQU9BLENBQUMsV0FBUixDQUFoQjtBQUNELEdBRkQsQ0FFRSxPQUFPZ0csQ0FBUCxFQUFVLENBQUc7QUFDaEI7O0FBRUQ7Ozs7OztBQU1BLElBQUlvYixnQkFBZ0JKLG9CQUFvQkMsYUFBeEM7O0FBRUE7Ozs7QUFJQTVnQixPQUFPQyxPQUFQLEdBQWlCK2dCLEVBQWpCOztBQUVBOzs7Ozs7O0FBT0EsU0FBU0EsRUFBVCxDQUFheGYsSUFBYixFQUFtQjtBQUNqQixNQUFJOFQsY0FBZTlULFFBQVFBLEtBQUs4VCxXQUFoQztBQUNBLE1BQUlBLFdBQUosRUFBaUI7QUFDZixTQUFLd0QsY0FBTCxHQUFzQixLQUF0QjtBQUNEO0FBQ0QsT0FBSzdDLGlCQUFMLEdBQXlCelUsS0FBS3lVLGlCQUE5QjtBQUNBLE9BQUtnTCxxQkFBTCxHQUE2Qk4sb0JBQW9CLENBQUNuZixLQUFLaVYsU0FBdkQ7QUFDQSxPQUFLc0IsU0FBTCxHQUFpQnZXLEtBQUt1VyxTQUF0QjtBQUNBLE1BQUksQ0FBQyxLQUFLa0oscUJBQVYsRUFBaUM7QUFDL0JGLG9CQUFnQkgsYUFBaEI7QUFDRDtBQUNEckosWUFBVTlLLElBQVYsQ0FBZSxJQUFmLEVBQXFCakwsSUFBckI7QUFDRDs7QUFFRDs7OztBQUlBd2EsUUFBUWdGLEVBQVIsRUFBWXpKLFNBQVo7O0FBRUE7Ozs7OztBQU1BeUosR0FBRzlsQixTQUFILENBQWF1YyxJQUFiLEdBQW9CLFdBQXBCOztBQUVBOzs7O0FBSUF1SixHQUFHOWxCLFNBQUgsQ0FBYTRkLGNBQWIsR0FBOEIsSUFBOUI7O0FBRUE7Ozs7OztBQU1Ba0ksR0FBRzlsQixTQUFILENBQWE4ZixNQUFiLEdBQXNCLFlBQVk7QUFDaEMsTUFBSSxDQUFDLEtBQUtrRyxLQUFMLEVBQUwsRUFBbUI7QUFDakI7QUFDQTtBQUNEOztBQUVELE1BQUlyTSxNQUFNLEtBQUtBLEdBQUwsRUFBVjtBQUNBLE1BQUlrRCxZQUFZLEtBQUtBLFNBQXJCO0FBQ0EsTUFBSXZXLE9BQU87QUFDVDBULFdBQU8sS0FBS0EsS0FESDtBQUVUZSx1QkFBbUIsS0FBS0E7QUFGZixHQUFYOztBQUtBO0FBQ0F6VSxPQUFLMlUsR0FBTCxHQUFXLEtBQUtBLEdBQWhCO0FBQ0EzVSxPQUFLa1MsR0FBTCxHQUFXLEtBQUtBLEdBQWhCO0FBQ0FsUyxPQUFLNFUsVUFBTCxHQUFrQixLQUFLQSxVQUF2QjtBQUNBNVUsT0FBSzZVLElBQUwsR0FBWSxLQUFLQSxJQUFqQjtBQUNBN1UsT0FBSzhVLEVBQUwsR0FBVSxLQUFLQSxFQUFmO0FBQ0E5VSxPQUFLK1UsT0FBTCxHQUFlLEtBQUtBLE9BQXBCO0FBQ0EvVSxPQUFLZ1Ysa0JBQUwsR0FBMEIsS0FBS0Esa0JBQS9CO0FBQ0EsTUFBSSxLQUFLSSxZQUFULEVBQXVCO0FBQ3JCcFYsU0FBSzJmLE9BQUwsR0FBZSxLQUFLdkssWUFBcEI7QUFDRDtBQUNELE1BQUksS0FBS0UsWUFBVCxFQUF1QjtBQUNyQnRWLFNBQUtzVixZQUFMLEdBQW9CLEtBQUtBLFlBQXpCO0FBQ0Q7O0FBRUQsTUFBSTtBQUNGLFNBQUtzSyxFQUFMLEdBQ0UsS0FBS0gscUJBQUwsSUFBOEIsQ0FBQyxLQUFLdkssYUFBcEMsR0FDSXFCLFlBQ0UsSUFBSWdKLGFBQUosQ0FBa0JsTSxHQUFsQixFQUF1QmtELFNBQXZCLENBREYsR0FFRSxJQUFJZ0osYUFBSixDQUFrQmxNLEdBQWxCLENBSE4sR0FJSSxJQUFJa00sYUFBSixDQUFrQmxNLEdBQWxCLEVBQXVCa0QsU0FBdkIsRUFBa0N2VyxJQUFsQyxDQUxOO0FBTUQsR0FQRCxDQU9FLE9BQU9mLEdBQVAsRUFBWTtBQUNaLFdBQU8sS0FBS2xDLElBQUwsQ0FBVSxPQUFWLEVBQW1Ca0MsR0FBbkIsQ0FBUDtBQUNEOztBQUVELE1BQUksS0FBSzJnQixFQUFMLENBQVFyTCxVQUFSLEtBQXVCaFAsU0FBM0IsRUFBc0M7QUFDcEMsU0FBSytSLGNBQUwsR0FBc0IsS0FBdEI7QUFDRDs7QUFFRCxNQUFJLEtBQUtzSSxFQUFMLENBQVFDLFFBQVIsSUFBb0IsS0FBS0QsRUFBTCxDQUFRQyxRQUFSLENBQWlCQyxNQUF6QyxFQUFpRDtBQUMvQyxTQUFLeEksY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtzSSxFQUFMLENBQVFyTCxVQUFSLEdBQXFCLFlBQXJCO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsU0FBS3FMLEVBQUwsQ0FBUXJMLFVBQVIsR0FBcUIsYUFBckI7QUFDRDs7QUFFRCxPQUFLd0wsaUJBQUw7QUFDRCxDQW5ERDs7QUFxREE7Ozs7OztBQU1BUCxHQUFHOWxCLFNBQUgsQ0FBYXFtQixpQkFBYixHQUFpQyxZQUFZO0FBQzNDLE1BQUk1SyxPQUFPLElBQVg7O0FBRUEsT0FBS3lLLEVBQUwsQ0FBUUksTUFBUixHQUFpQixZQUFZO0FBQzNCN0ssU0FBS2lELE1BQUw7QUFDRCxHQUZEO0FBR0EsT0FBS3dILEVBQUwsQ0FBUTNILE9BQVIsR0FBa0IsWUFBWTtBQUM1QjlDLFNBQUs4QixPQUFMO0FBQ0QsR0FGRDtBQUdBLE9BQUsySSxFQUFMLENBQVFLLFNBQVIsR0FBb0IsVUFBVUMsRUFBVixFQUFjO0FBQ2hDL0ssU0FBS3dFLE1BQUwsQ0FBWXVHLEdBQUdwbUIsSUFBZjtBQUNELEdBRkQ7QUFHQSxPQUFLOGxCLEVBQUwsQ0FBUTdILE9BQVIsR0FBa0IsVUFBVTVULENBQVYsRUFBYTtBQUM3QmdSLFNBQUs2QixPQUFMLENBQWEsaUJBQWIsRUFBZ0M3UyxDQUFoQztBQUNELEdBRkQ7QUFHRCxDQWZEOztBQWlCQTs7Ozs7OztBQU9BcWIsR0FBRzlsQixTQUFILENBQWFzTyxLQUFiLEdBQXFCLFVBQVUwUixPQUFWLEVBQW1CO0FBQ3RDLE1BQUl2RSxPQUFPLElBQVg7QUFDQSxPQUFLNkQsUUFBTCxHQUFnQixLQUFoQjs7QUFFQTtBQUNBO0FBQ0EsTUFBSTZGLFFBQVFuRixRQUFRN2UsTUFBcEI7QUFDQSxPQUFLLElBQUkrRSxJQUFJLENBQVIsRUFBV3lZLElBQUl3RyxLQUFwQixFQUEyQmpmLElBQUl5WSxDQUEvQixFQUFrQ3pZLEdBQWxDLEVBQXVDO0FBQ3JDLEtBQUMsVUFBVWtYLE1BQVYsRUFBa0I7QUFDakIvRCxhQUFPb04sWUFBUCxDQUFvQnJKLE1BQXBCLEVBQTRCM0IsS0FBS21DLGNBQWpDLEVBQWlELFVBQVV4ZCxJQUFWLEVBQWdCO0FBQy9ELFlBQUksQ0FBQ3FiLEtBQUtzSyxxQkFBVixFQUFpQztBQUMvQjtBQUNBLGNBQUl6ZixPQUFPLEVBQVg7QUFDQSxjQUFJOFcsT0FBTzdSLE9BQVgsRUFBb0I7QUFDbEJqRixpQkFBS2laLFFBQUwsR0FBZ0JuQyxPQUFPN1IsT0FBUCxDQUFlZ1UsUUFBL0I7QUFDRDs7QUFFRCxjQUFJOUQsS0FBS1YsaUJBQVQsRUFBNEI7QUFDMUIsZ0JBQUluVCxNQUFNLGFBQWEsT0FBT3hILElBQXBCLEdBQTJCNEwsT0FBT25HLFVBQVAsQ0FBa0J6RixJQUFsQixDQUEzQixHQUFxREEsS0FBS2UsTUFBcEU7QUFDQSxnQkFBSXlHLE1BQU02VCxLQUFLVixpQkFBTCxDQUF1QkMsU0FBakMsRUFBNEM7QUFDMUMxVSxtQkFBS2laLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNGLGNBQUk5RCxLQUFLc0sscUJBQVQsRUFBZ0M7QUFDOUI7QUFDQXRLLGlCQUFLeUssRUFBTCxDQUFRckksSUFBUixDQUFhemQsSUFBYjtBQUNELFdBSEQsTUFHTztBQUNMcWIsaUJBQUt5SyxFQUFMLENBQVFySSxJQUFSLENBQWF6ZCxJQUFiLEVBQW1Ca0csSUFBbkI7QUFDRDtBQUNGLFNBUEQsQ0FPRSxPQUFPbUUsQ0FBUCxFQUFVO0FBQ1Y2TyxnQkFBTSx1Q0FBTjtBQUNEOztBQUVELFVBQUU2TCxLQUFGLElBQVd1QixNQUFYO0FBQ0QsT0EvQkQ7QUFnQ0QsS0FqQ0QsRUFpQ0cxRyxRQUFROVosQ0FBUixDQWpDSDtBQWtDRDs7QUFFRCxXQUFTd2dCLElBQVQsR0FBaUI7QUFDZmpMLFNBQUtwWSxJQUFMLENBQVUsT0FBVjs7QUFFQTtBQUNBO0FBQ0EyWixlQUFXLFlBQVk7QUFDckJ2QixXQUFLNkQsUUFBTCxHQUFnQixJQUFoQjtBQUNBN0QsV0FBS3BZLElBQUwsQ0FBVSxPQUFWO0FBQ0QsS0FIRCxFQUdHLENBSEg7QUFJRDtBQUNGLENBdEREOztBQXdEQTs7Ozs7O0FBTUF5aUIsR0FBRzlsQixTQUFILENBQWF1ZCxPQUFiLEdBQXVCLFlBQVk7QUFDakNsQixZQUFVcmMsU0FBVixDQUFvQnVkLE9BQXBCLENBQTRCaE0sSUFBNUIsQ0FBaUMsSUFBakM7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQXVVLEdBQUc5bEIsU0FBSCxDQUFhK2YsT0FBYixHQUF1QixZQUFZO0FBQ2pDLE1BQUksT0FBTyxLQUFLbUcsRUFBWixLQUFtQixXQUF2QixFQUFvQztBQUNsQyxTQUFLQSxFQUFMLENBQVE5SCxLQUFSO0FBQ0Q7QUFDRixDQUpEOztBQU1BOzs7Ozs7QUFNQTBILEdBQUc5bEIsU0FBSCxDQUFhMlosR0FBYixHQUFtQixZQUFZO0FBQzdCLE1BQUlJLFFBQVEsS0FBS0EsS0FBTCxJQUFjLEVBQTFCO0FBQ0EsTUFBSXdMLFNBQVMsS0FBS3poQixNQUFMLEdBQWMsS0FBZCxHQUFzQixJQUFuQztBQUNBLE1BQUlDLE9BQU8sRUFBWDs7QUFFQTtBQUNBLE1BQUksS0FBS0EsSUFBTCxLQUFlLFVBQVV3aEIsTUFBVixJQUFvQnBULE9BQU8sS0FBS3BPLElBQVosTUFBc0IsR0FBM0MsSUFDZixTQUFTd2hCLE1BQVQsSUFBbUJwVCxPQUFPLEtBQUtwTyxJQUFaLE1BQXNCLEVBRHhDLENBQUosRUFDa0Q7QUFDaERBLFdBQU8sTUFBTSxLQUFLQSxJQUFsQjtBQUNEOztBQUVEO0FBQ0EsTUFBSSxLQUFLd1csaUJBQVQsRUFBNEI7QUFDMUJSLFVBQU0sS0FBS08sY0FBWCxJQUE2QnlLLE9BQTdCO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFJLENBQUMsS0FBS25ILGNBQVYsRUFBMEI7QUFDeEI3RCxVQUFNbFIsR0FBTixHQUFZLENBQVo7QUFDRDs7QUFFRGtSLFVBQVFOLFFBQVE5UixNQUFSLENBQWVvUyxLQUFmLENBQVI7O0FBRUE7QUFDQSxNQUFJQSxNQUFNNVksTUFBVixFQUFrQjtBQUNoQjRZLFlBQVEsTUFBTUEsS0FBZDtBQUNEOztBQUVELE1BQUl5TCxPQUFPLEtBQUs1TCxRQUFMLENBQWM3USxPQUFkLENBQXNCLEdBQXRCLE1BQStCLENBQUMsQ0FBM0M7QUFDQSxTQUFPd2MsU0FBUyxLQUFULElBQWtCQyxPQUFPLE1BQU0sS0FBSzVMLFFBQVgsR0FBc0IsR0FBN0IsR0FBbUMsS0FBS0EsUUFBMUQsSUFBc0U3VixJQUF0RSxHQUE2RSxLQUFLakQsSUFBbEYsR0FBeUZpWixLQUFoRztBQUNELENBOUJEOztBQWdDQTs7Ozs7OztBQU9BK0wsR0FBRzlsQixTQUFILENBQWFnbUIsS0FBYixHQUFxQixZQUFZO0FBQy9CLFNBQU8sQ0FBQyxDQUFDSCxhQUFGLElBQW1CLEVBQUUsa0JBQWtCQSxhQUFsQixJQUFtQyxLQUFLdEosSUFBTCxLQUFjdUosR0FBRzlsQixTQUFILENBQWF1YyxJQUFoRSxDQUExQjtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbFNBOztBQUVBLElBQUlvSyxVQUFVbGlCLG1CQUFPQSxDQUFDLGtEQUFSLENBQWQ7O0FBRUFLLE9BQU9DLE9BQVAsR0FBaUIsVUFBVXVCLElBQVYsRUFBZ0I7QUFDL0IsTUFBSXFhLFVBQVVyYSxLQUFLcWEsT0FBbkI7O0FBRUE7QUFDQTtBQUNBLE1BQUlDLFVBQVV0YSxLQUFLc2EsT0FBbkI7O0FBRUE7QUFDQTtBQUNBLE1BQUl2RyxhQUFhL1QsS0FBSytULFVBQXRCOztBQUVBO0FBQ0EsTUFBSTtBQUNGLFFBQUksZ0JBQWdCLE9BQU84RixjQUF2QixLQUEwQyxDQUFDUSxPQUFELElBQVlnRyxPQUF0RCxDQUFKLEVBQW9FO0FBQ2xFLGFBQU8sSUFBSXhHLGNBQUosRUFBUDtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU8xVixDQUFQLEVBQVUsQ0FBRzs7QUFFZjtBQUNBO0FBQ0E7QUFDQSxNQUFJO0FBQ0YsUUFBSSxnQkFBZ0IsT0FBT21hLGNBQXZCLElBQXlDLENBQUNoRSxPQUExQyxJQUFxRHZHLFVBQXpELEVBQXFFO0FBQ25FLGFBQU8sSUFBSXVLLGNBQUosRUFBUDtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU9uYSxDQUFQLEVBQVUsQ0FBRzs7QUFFZixNQUFJLENBQUNrVyxPQUFMLEVBQWM7QUFDWixRQUFJO0FBQ0YsYUFBTyxJQUFJbEYsS0FBSyxDQUFDLFFBQUQsRUFBV3RNLE1BQVgsQ0FBa0IsUUFBbEIsRUFBNEJ2RixJQUE1QixDQUFpQyxHQUFqQyxDQUFMLENBQUosQ0FBZ0QsbUJBQWhELENBQVA7QUFDRCxLQUZELENBRUUsT0FBT2EsQ0FBUCxFQUFVLENBQUc7QUFDaEI7QUFDRixDQWhDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7OztBQU1BMUYsVUFBVUQsT0FBT0MsT0FBUCxHQUFpQk4sbUJBQU9BLENBQUMsZ0ZBQVIsQ0FBM0I7QUFDQU0sUUFBUWIsR0FBUixHQUFjQSxHQUFkO0FBQ0FhLFFBQVE2aEIsVUFBUixHQUFxQkEsVUFBckI7QUFDQTdoQixRQUFROGhCLElBQVIsR0FBZUEsSUFBZjtBQUNBOWhCLFFBQVEraEIsSUFBUixHQUFlQSxJQUFmO0FBQ0EvaEIsUUFBUWdpQixTQUFSLEdBQW9CQSxTQUFwQjtBQUNBaGlCLFFBQVF2QixPQUFSLEdBQWtCLGVBQWUsT0FBT3dqQixNQUF0QixJQUNBLGVBQWUsT0FBT0EsT0FBT3hqQixPQUQ3QixHQUVFd2pCLE9BQU94akIsT0FBUCxDQUFleWpCLEtBRmpCLEdBR0VDLGNBSHBCOztBQUtBOzs7O0FBSUFuaUIsUUFBUW9pQixNQUFSLEdBQWlCLENBQ2YsU0FEZSxFQUNKLFNBREksRUFDTyxTQURQLEVBQ2tCLFNBRGxCLEVBQzZCLFNBRDdCLEVBQ3dDLFNBRHhDLEVBQ21ELFNBRG5ELEVBRWYsU0FGZSxFQUVKLFNBRkksRUFFTyxTQUZQLEVBRWtCLFNBRmxCLEVBRTZCLFNBRjdCLEVBRXdDLFNBRnhDLEVBRW1ELFNBRm5ELEVBR2YsU0FIZSxFQUdKLFNBSEksRUFHTyxTQUhQLEVBR2tCLFNBSGxCLEVBRzZCLFNBSDdCLEVBR3dDLFNBSHhDLEVBR21ELFNBSG5ELEVBSWYsU0FKZSxFQUlKLFNBSkksRUFJTyxTQUpQLEVBSWtCLFNBSmxCLEVBSTZCLFNBSjdCLEVBSXdDLFNBSnhDLEVBSW1ELFNBSm5ELEVBS2YsU0FMZSxFQUtKLFNBTEksRUFLTyxTQUxQLEVBS2tCLFNBTGxCLEVBSzZCLFNBTDdCLEVBS3dDLFNBTHhDLEVBS21ELFNBTG5ELEVBTWYsU0FOZSxFQU1KLFNBTkksRUFNTyxTQU5QLEVBTWtCLFNBTmxCLEVBTTZCLFNBTjdCLEVBTXdDLFNBTnhDLEVBTW1ELFNBTm5ELEVBT2YsU0FQZSxFQU9KLFNBUEksRUFPTyxTQVBQLEVBT2tCLFNBUGxCLEVBTzZCLFNBUDdCLEVBT3dDLFNBUHhDLEVBT21ELFNBUG5ELEVBUWYsU0FSZSxFQVFKLFNBUkksRUFRTyxTQVJQLEVBUWtCLFNBUmxCLEVBUTZCLFNBUjdCLEVBUXdDLFNBUnhDLEVBUW1ELFNBUm5ELEVBU2YsU0FUZSxFQVNKLFNBVEksRUFTTyxTQVRQLEVBU2tCLFNBVGxCLEVBUzZCLFNBVDdCLEVBU3dDLFNBVHhDLEVBU21ELFNBVG5ELEVBVWYsU0FWZSxFQVVKLFNBVkksRUFVTyxTQVZQLEVBVWtCLFNBVmxCLEVBVTZCLFNBVjdCLEVBVXdDLFNBVnhDLEVBVW1ELFNBVm5ELEVBV2YsU0FYZSxFQVdKLFNBWEksRUFXTyxTQVhQLEVBV2tCLFNBWGxCLEVBVzZCLFNBWDdCLEVBV3dDLFNBWHhDLENBQWpCOztBQWNBOzs7Ozs7OztBQVFBLFNBQVNKLFNBQVQsR0FBcUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsTUFBSSxPQUFPbm1CLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU93bUIsT0FBeEMsSUFBbUR4bUIsT0FBT3dtQixPQUFQLENBQWV6YixJQUFmLEtBQXdCLFVBQS9FLEVBQTJGO0FBQ3pGLFdBQU8sSUFBUDtBQUNEOztBQUVEO0FBQ0EsTUFBSSxPQUFPckssU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsVUFBVUcsU0FBOUMsSUFBMkRILFVBQVVHLFNBQVYsQ0FBb0J5TixXQUFwQixHQUFrQzBCLEtBQWxDLENBQXdDLHVCQUF4QyxDQUEvRCxFQUFpSTtBQUMvSCxXQUFPLEtBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsU0FBUSxPQUFPcFEsUUFBUCxLQUFvQixXQUFwQixJQUFtQ0EsU0FBUzZtQixlQUE1QyxJQUErRDdtQixTQUFTNm1CLGVBQVQsQ0FBeUI3RSxLQUF4RixJQUFpR2hpQixTQUFTNm1CLGVBQVQsQ0FBeUI3RSxLQUF6QixDQUErQjhFLGdCQUFqSTtBQUNMO0FBQ0MsU0FBTzFtQixNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPcUQsT0FBeEMsS0FBb0RyRCxPQUFPcUQsT0FBUCxDQUFlc2pCLE9BQWYsSUFBMkIzbUIsT0FBT3FELE9BQVAsQ0FBZXVqQixTQUFmLElBQTRCNW1CLE9BQU9xRCxPQUFQLENBQWV3akIsS0FBMUgsQ0FGSTtBQUdMO0FBQ0E7QUFDQyxTQUFPbm1CLFNBQVAsS0FBcUIsV0FBckIsSUFBb0NBLFVBQVVHLFNBQTlDLElBQTJESCxVQUFVRyxTQUFWLENBQW9CeU4sV0FBcEIsR0FBa0MwQixLQUFsQyxDQUF3QyxnQkFBeEMsQ0FBM0QsSUFBd0gyQixTQUFTbVYsT0FBT0MsRUFBaEIsRUFBb0IsRUFBcEIsS0FBMkIsRUFML0k7QUFNTDtBQUNDLFNBQU9ybUIsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsVUFBVUcsU0FBOUMsSUFBMkRILFVBQVVHLFNBQVYsQ0FBb0J5TixXQUFwQixHQUFrQzBCLEtBQWxDLENBQXdDLG9CQUF4QyxDQVA5RDtBQVFEOztBQUVEOzs7O0FBSUE3TCxRQUFRNmlCLFVBQVIsQ0FBbUI1VixDQUFuQixHQUF1QixVQUFTNlYsQ0FBVCxFQUFZO0FBQ2pDLE1BQUk7QUFDRixXQUFPaEosS0FBS2lKLFNBQUwsQ0FBZUQsQ0FBZixDQUFQO0FBQ0QsR0FGRCxDQUVFLE9BQU90aUIsR0FBUCxFQUFZO0FBQ1osV0FBTyxpQ0FBaUNBLElBQUl3aUIsT0FBNUM7QUFDRDtBQUNGLENBTkQ7O0FBU0E7Ozs7OztBQU1BLFNBQVNuQixVQUFULENBQW9Cdk8sSUFBcEIsRUFBMEI7QUFDeEIsTUFBSTBPLFlBQVksS0FBS0EsU0FBckI7O0FBRUExTyxPQUFLLENBQUwsSUFBVSxDQUFDME8sWUFBWSxJQUFaLEdBQW1CLEVBQXBCLElBQ04sS0FBS2lCLFNBREMsSUFFTGpCLFlBQVksS0FBWixHQUFvQixHQUZmLElBR04xTyxLQUFLLENBQUwsQ0FITSxJQUlMME8sWUFBWSxLQUFaLEdBQW9CLEdBSmYsSUFLTixHQUxNLEdBS0FoaUIsUUFBUWtqQixRQUFSLENBQWlCLEtBQUtDLElBQXRCLENBTFY7O0FBT0EsTUFBSSxDQUFDbkIsU0FBTCxFQUFnQjs7QUFFaEIsTUFBSS9PLElBQUksWUFBWSxLQUFLblYsS0FBekI7QUFDQXdWLE9BQUtZLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQmpCLENBQWxCLEVBQXFCLGdCQUFyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJdUIsUUFBUSxDQUFaO0FBQ0EsTUFBSTRPLFFBQVEsQ0FBWjtBQUNBOVAsT0FBSyxDQUFMLEVBQVFYLE9BQVIsQ0FBZ0IsYUFBaEIsRUFBK0IsVUFBUzlHLEtBQVQsRUFBZ0I7QUFDN0MsUUFBSSxTQUFTQSxLQUFiLEVBQW9CO0FBQ3BCMkk7QUFDQSxRQUFJLFNBQVMzSSxLQUFiLEVBQW9CO0FBQ2xCO0FBQ0E7QUFDQXVYLGNBQVE1TyxLQUFSO0FBQ0Q7QUFDRixHQVJEOztBQVVBbEIsT0FBS1ksTUFBTCxDQUFZa1AsS0FBWixFQUFtQixDQUFuQixFQUFzQm5RLENBQXRCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7QUFPQSxTQUFTOVQsR0FBVCxHQUFlO0FBQ2I7QUFDQTtBQUNBLFNBQU8scUJBQW9CRCxPQUFwQix5Q0FBb0JBLE9BQXBCLE1BQ0ZBLFFBQVFDLEdBRE4sSUFFRmtrQixTQUFTcG9CLFNBQVQsQ0FBbUJ3USxLQUFuQixDQUF5QmUsSUFBekIsQ0FBOEJ0TixRQUFRQyxHQUF0QyxFQUEyQ0QsT0FBM0MsRUFBb0RzTSxTQUFwRCxDQUZMO0FBR0Q7O0FBRUQ7Ozs7Ozs7QUFPQSxTQUFTc1csSUFBVCxDQUFjd0IsVUFBZCxFQUEwQjtBQUN4QixNQUFJO0FBQ0YsUUFBSSxRQUFRQSxVQUFaLEVBQXdCO0FBQ3RCdGpCLGNBQVF2QixPQUFSLENBQWdCOGtCLFVBQWhCLENBQTJCLE9BQTNCO0FBQ0QsS0FGRCxNQUVPO0FBQ0x2akIsY0FBUXZCLE9BQVIsQ0FBZ0I4VixLQUFoQixHQUF3QitPLFVBQXhCO0FBQ0Q7QUFDRixHQU5ELENBTUUsT0FBTTVkLENBQU4sRUFBUyxDQUFFO0FBQ2Q7O0FBRUQ7Ozs7Ozs7QUFPQSxTQUFTcWMsSUFBVCxHQUFnQjtBQUNkLE1BQUl5QixDQUFKO0FBQ0EsTUFBSTtBQUNGQSxRQUFJeGpCLFFBQVF2QixPQUFSLENBQWdCOFYsS0FBcEI7QUFDRCxHQUZELENBRUUsT0FBTTdPLENBQU4sRUFBUyxDQUFFOztBQUViO0FBQ0EsTUFBSSxDQUFDOGQsQ0FBRCxJQUFNLE9BQU9uQixPQUFQLEtBQW1CLFdBQXpCLElBQXdDLFNBQVNBLE9BQXJELEVBQThEO0FBQzVEbUIsUUFBSW5CLFFBQVFvQixHQUFSLENBQVlDLEtBQWhCO0FBQ0Q7O0FBRUQsU0FBT0YsQ0FBUDtBQUNEOztBQUVEOzs7O0FBSUF4akIsUUFBUTJqQixNQUFSLENBQWU1QixNQUFmOztBQUVBOzs7Ozs7Ozs7OztBQVdBLFNBQVNJLFlBQVQsR0FBd0I7QUFDdEIsTUFBSTtBQUNGLFdBQU90bUIsT0FBTytuQixZQUFkO0FBQ0QsR0FGRCxDQUVFLE9BQU9sZSxDQUFQLEVBQVUsQ0FBRTtBQUNmLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2pNRDs7Ozs7OztBQU9BMUYsVUFBVUQsT0FBT0MsT0FBUCxHQUFpQjZqQixZQUFZdFAsS0FBWixHQUFvQnNQLFlBQVksU0FBWixJQUF5QkEsV0FBeEU7QUFDQTdqQixRQUFROGpCLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0E5akIsUUFBUStqQixPQUFSLEdBQWtCQSxPQUFsQjtBQUNBL2pCLFFBQVEyakIsTUFBUixHQUFpQkEsTUFBakI7QUFDQTNqQixRQUFRZ2tCLE9BQVIsR0FBa0JBLE9BQWxCO0FBQ0Foa0IsUUFBUWtqQixRQUFSLEdBQW1CeGpCLG1CQUFPQSxDQUFDLHNDQUFSLENBQW5COztBQUVBOzs7QUFHQU0sUUFBUWlrQixTQUFSLEdBQW9CLEVBQXBCOztBQUVBOzs7O0FBSUFqa0IsUUFBUWtrQixLQUFSLEdBQWdCLEVBQWhCO0FBQ0Fsa0IsUUFBUW1rQixLQUFSLEdBQWdCLEVBQWhCOztBQUVBOzs7Ozs7QUFNQW5rQixRQUFRNmlCLFVBQVIsR0FBcUIsRUFBckI7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTdUIsV0FBVCxDQUFxQm5CLFNBQXJCLEVBQWdDO0FBQzlCLE1BQUlvQixPQUFPLENBQVg7QUFBQSxNQUFjbGpCLENBQWQ7O0FBRUEsT0FBS0EsQ0FBTCxJQUFVOGhCLFNBQVYsRUFBcUI7QUFDbkJvQixXQUFTLENBQUNBLFFBQVEsQ0FBVCxJQUFjQSxJQUFmLEdBQXVCcEIsVUFBVXRnQixVQUFWLENBQXFCeEIsQ0FBckIsQ0FBL0I7QUFDQWtqQixZQUFRLENBQVIsQ0FGbUIsQ0FFUjtBQUNaOztBQUVELFNBQU9ya0IsUUFBUW9pQixNQUFSLENBQWVyZ0IsS0FBS3VpQixHQUFMLENBQVNELElBQVQsSUFBaUJya0IsUUFBUW9pQixNQUFSLENBQWVobUIsTUFBL0MsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7OztBQVFBLFNBQVN5bkIsV0FBVCxDQUFxQlosU0FBckIsRUFBZ0M7O0FBRTlCLE1BQUlzQixRQUFKOztBQUVBLFdBQVNoUSxLQUFULEdBQWlCO0FBQ2Y7QUFDQSxRQUFJLENBQUNBLE1BQU15UCxPQUFYLEVBQW9COztBQUVwQixRQUFJdE4sT0FBT25DLEtBQVg7O0FBRUE7QUFDQSxRQUFJaVEsT0FBTyxDQUFDLElBQUlybUIsSUFBSixFQUFaO0FBQ0EsUUFBSXFELEtBQUtnakIsUUFBUUQsWUFBWUMsSUFBcEIsQ0FBVDtBQUNBOU4sU0FBS3lNLElBQUwsR0FBWTNoQixFQUFaO0FBQ0FrVixTQUFLK04sSUFBTCxHQUFZRixRQUFaO0FBQ0E3TixTQUFLOE4sSUFBTCxHQUFZQSxJQUFaO0FBQ0FELGVBQVdDLElBQVg7O0FBRUE7QUFDQSxRQUFJbFIsT0FBTyxJQUFJM1AsS0FBSixDQUFVNkgsVUFBVXBQLE1BQXBCLENBQVg7QUFDQSxTQUFLLElBQUkrRSxJQUFJLENBQWIsRUFBZ0JBLElBQUltUyxLQUFLbFgsTUFBekIsRUFBaUMrRSxHQUFqQyxFQUFzQztBQUNwQ21TLFdBQUtuUyxDQUFMLElBQVVxSyxVQUFVckssQ0FBVixDQUFWO0FBQ0Q7O0FBRURtUyxTQUFLLENBQUwsSUFBVXRULFFBQVE4akIsTUFBUixDQUFleFEsS0FBSyxDQUFMLENBQWYsQ0FBVjs7QUFFQSxRQUFJLGFBQWEsT0FBT0EsS0FBSyxDQUFMLENBQXhCLEVBQWlDO0FBQy9CO0FBQ0FBLFdBQUtvUixPQUFMLENBQWEsSUFBYjtBQUNEOztBQUVEO0FBQ0EsUUFBSWxRLFFBQVEsQ0FBWjtBQUNBbEIsU0FBSyxDQUFMLElBQVVBLEtBQUssQ0FBTCxFQUFRWCxPQUFSLENBQWdCLGVBQWhCLEVBQWlDLFVBQVM5RyxLQUFULEVBQWdCOFksTUFBaEIsRUFBd0I7QUFDakU7QUFDQSxVQUFJOVksVUFBVSxJQUFkLEVBQW9CLE9BQU9BLEtBQVA7QUFDcEIySTtBQUNBLFVBQUlvUSxZQUFZNWtCLFFBQVE2aUIsVUFBUixDQUFtQjhCLE1BQW5CLENBQWhCO0FBQ0EsVUFBSSxlQUFlLE9BQU9DLFNBQTFCLEVBQXFDO0FBQ25DLFlBQUl4WSxNQUFNa0gsS0FBS2tCLEtBQUwsQ0FBVjtBQUNBM0ksZ0JBQVErWSxVQUFVcFksSUFBVixDQUFla0ssSUFBZixFQUFxQnRLLEdBQXJCLENBQVI7O0FBRUE7QUFDQWtILGFBQUtZLE1BQUwsQ0FBWU0sS0FBWixFQUFtQixDQUFuQjtBQUNBQTtBQUNEO0FBQ0QsYUFBTzNJLEtBQVA7QUFDRCxLQWRTLENBQVY7O0FBZ0JBO0FBQ0E3TCxZQUFRNmhCLFVBQVIsQ0FBbUJyVixJQUFuQixDQUF3QmtLLElBQXhCLEVBQThCcEQsSUFBOUI7O0FBRUEsUUFBSXVSLFFBQVF0USxNQUFNcFYsR0FBTixJQUFhYSxRQUFRYixHQUFyQixJQUE0QkQsUUFBUUMsR0FBUixDQUFZMmxCLElBQVosQ0FBaUI1bEIsT0FBakIsQ0FBeEM7QUFDQTJsQixVQUFNcFosS0FBTixDQUFZaUwsSUFBWixFQUFrQnBELElBQWxCO0FBQ0Q7O0FBRURpQixRQUFNME8sU0FBTixHQUFrQkEsU0FBbEI7QUFDQTFPLFFBQU15UCxPQUFOLEdBQWdCaGtCLFFBQVFna0IsT0FBUixDQUFnQmYsU0FBaEIsQ0FBaEI7QUFDQTFPLFFBQU15TixTQUFOLEdBQWtCaGlCLFFBQVFnaUIsU0FBUixFQUFsQjtBQUNBek4sUUFBTXpXLEtBQU4sR0FBY3NtQixZQUFZbkIsU0FBWixDQUFkO0FBQ0ExTyxRQUFNd1EsT0FBTixHQUFnQkEsT0FBaEI7O0FBRUE7QUFDQSxNQUFJLGVBQWUsT0FBTy9rQixRQUFRZ2xCLElBQWxDLEVBQXdDO0FBQ3RDaGxCLFlBQVFnbEIsSUFBUixDQUFhelEsS0FBYjtBQUNEOztBQUVEdlUsVUFBUWlrQixTQUFSLENBQWtCcmYsSUFBbEIsQ0FBdUIyUCxLQUF2Qjs7QUFFQSxTQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsU0FBU3dRLE9BQVQsR0FBb0I7QUFDbEIsTUFBSXZRLFFBQVF4VSxRQUFRaWtCLFNBQVIsQ0FBa0JqZ0IsT0FBbEIsQ0FBMEIsSUFBMUIsQ0FBWjtBQUNBLE1BQUl3USxVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQnhVLFlBQVFpa0IsU0FBUixDQUFrQi9QLE1BQWxCLENBQXlCTSxLQUF6QixFQUFnQyxDQUFoQztBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQsTUFHTztBQUNMLFdBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O0FBUUEsU0FBU21QLE1BQVQsQ0FBZ0JMLFVBQWhCLEVBQTRCO0FBQzFCdGpCLFVBQVE4aEIsSUFBUixDQUFhd0IsVUFBYjs7QUFFQXRqQixVQUFRa2tCLEtBQVIsR0FBZ0IsRUFBaEI7QUFDQWxrQixVQUFRbWtCLEtBQVIsR0FBZ0IsRUFBaEI7O0FBRUEsTUFBSWhqQixDQUFKO0FBQ0EsTUFBSThqQixRQUFRLENBQUMsT0FBTzNCLFVBQVAsS0FBc0IsUUFBdEIsR0FBaUNBLFVBQWpDLEdBQThDLEVBQS9DLEVBQW1EMkIsS0FBbkQsQ0FBeUQsUUFBekQsQ0FBWjtBQUNBLE1BQUlwaUIsTUFBTW9pQixNQUFNN29CLE1BQWhCOztBQUVBLE9BQUsrRSxJQUFJLENBQVQsRUFBWUEsSUFBSTBCLEdBQWhCLEVBQXFCMUIsR0FBckIsRUFBMEI7QUFDeEIsUUFBSSxDQUFDOGpCLE1BQU05akIsQ0FBTixDQUFMLEVBQWUsU0FEUyxDQUNDO0FBQ3pCbWlCLGlCQUFhMkIsTUFBTTlqQixDQUFOLEVBQVN3UixPQUFULENBQWlCLEtBQWpCLEVBQXdCLEtBQXhCLENBQWI7QUFDQSxRQUFJMlEsV0FBVyxDQUFYLE1BQWtCLEdBQXRCLEVBQTJCO0FBQ3pCdGpCLGNBQVFta0IsS0FBUixDQUFjdmYsSUFBZCxDQUFtQixJQUFJK2QsTUFBSixDQUFXLE1BQU1XLFdBQVc3VixNQUFYLENBQWtCLENBQWxCLENBQU4sR0FBNkIsR0FBeEMsQ0FBbkI7QUFDRCxLQUZELE1BRU87QUFDTHpOLGNBQVFra0IsS0FBUixDQUFjdGYsSUFBZCxDQUFtQixJQUFJK2QsTUFBSixDQUFXLE1BQU1XLFVBQU4sR0FBbUIsR0FBOUIsQ0FBbkI7QUFDRDtBQUNGOztBQUVELE9BQUtuaUIsSUFBSSxDQUFULEVBQVlBLElBQUluQixRQUFRaWtCLFNBQVIsQ0FBa0I3bkIsTUFBbEMsRUFBMEMrRSxHQUExQyxFQUErQztBQUM3QyxRQUFJK2pCLFdBQVdsbEIsUUFBUWlrQixTQUFSLENBQWtCOWlCLENBQWxCLENBQWY7QUFDQStqQixhQUFTbEIsT0FBVCxHQUFtQmhrQixRQUFRZ2tCLE9BQVIsQ0FBZ0JrQixTQUFTakMsU0FBekIsQ0FBbkI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7QUFNQSxTQUFTYyxPQUFULEdBQW1CO0FBQ2pCL2pCLFVBQVEyakIsTUFBUixDQUFlLEVBQWY7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFRQSxTQUFTSyxPQUFULENBQWlCeE0sSUFBakIsRUFBdUI7QUFDckIsTUFBSUEsS0FBS0EsS0FBS3BiLE1BQUwsR0FBYyxDQUFuQixNQUEwQixHQUE5QixFQUFtQztBQUNqQyxXQUFPLElBQVA7QUFDRDtBQUNELE1BQUkrRSxDQUFKLEVBQU8wQixHQUFQO0FBQ0EsT0FBSzFCLElBQUksQ0FBSixFQUFPMEIsTUFBTTdDLFFBQVFta0IsS0FBUixDQUFjL25CLE1BQWhDLEVBQXdDK0UsSUFBSTBCLEdBQTVDLEVBQWlEMUIsR0FBakQsRUFBc0Q7QUFDcEQsUUFBSW5CLFFBQVFta0IsS0FBUixDQUFjaGpCLENBQWQsRUFBaUJpYyxJQUFqQixDQUFzQjVGLElBQXRCLENBQUosRUFBaUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNELE9BQUtyVyxJQUFJLENBQUosRUFBTzBCLE1BQU03QyxRQUFRa2tCLEtBQVIsQ0FBYzluQixNQUFoQyxFQUF3QytFLElBQUkwQixHQUE1QyxFQUFpRDFCLEdBQWpELEVBQXNEO0FBQ3BELFFBQUluQixRQUFRa2tCLEtBQVIsQ0FBYy9pQixDQUFkLEVBQWlCaWMsSUFBakIsQ0FBc0I1RixJQUF0QixDQUFKLEVBQWlDO0FBQy9CLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFPLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFRQSxTQUFTc00sTUFBVCxDQUFnQjFYLEdBQWhCLEVBQXFCO0FBQ25CLE1BQUlBLGVBQWU3TSxLQUFuQixFQUEwQixPQUFPNk0sSUFBSStZLEtBQUosSUFBYS9ZLElBQUk0VyxPQUF4QjtBQUMxQixTQUFPNVcsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDaE9EOzs7O0FBSUEsSUFBSXdLLE9BQU9sWCxtQkFBT0EsQ0FBQywyREFBUixDQUFYO0FBQ0EsSUFBSTBsQixZQUFZMWxCLG1CQUFPQSxDQUFDLHdEQUFSLENBQWhCO0FBQ0EsSUFBSTJsQixjQUFjM2xCLG1CQUFPQSxDQUFDLG9FQUFSLENBQWxCO0FBQ0EsSUFBSU8sUUFBUVAsbUJBQU9BLENBQUMsNENBQVIsQ0FBWjtBQUNBLElBQUk0bEIsT0FBTzVsQixtQkFBT0EsQ0FBQywyREFBUixDQUFYOztBQUVBLElBQUk2bEIsYUFBSjtBQUNBLElBQUksT0FBT3ZrQixXQUFQLEtBQXVCLFdBQTNCLEVBQXdDO0FBQ3RDdWtCLGtCQUFnQjdsQixtQkFBT0EsQ0FBQyx1RkFBUixDQUFoQjtBQUNEOztBQUVEOzs7Ozs7O0FBT0EsSUFBSThsQixZQUFZLE9BQU9qcEIsU0FBUCxLQUFxQixXQUFyQixJQUFvQyxXQUFXNmdCLElBQVgsQ0FBZ0I3Z0IsVUFBVUcsU0FBMUIsQ0FBcEQ7O0FBRUE7Ozs7OztBQU1BLElBQUkrb0IsY0FBYyxPQUFPbHBCLFNBQVAsS0FBcUIsV0FBckIsSUFBb0MsYUFBYTZnQixJQUFiLENBQWtCN2dCLFVBQVVHLFNBQTVCLENBQXREOztBQUVBOzs7O0FBSUEsSUFBSWdwQixnQkFBZ0JGLGFBQWFDLFdBQWpDOztBQUVBOzs7O0FBSUF6bEIsUUFBUStVLFFBQVIsR0FBbUIsQ0FBbkI7O0FBRUE7Ozs7QUFJQSxJQUFJa0csVUFBVWpiLFFBQVFpYixPQUFSLEdBQWtCO0FBQzVCN0QsUUFBVSxDQURrQixDQUNiO0FBRGEsSUFFNUJpQyxPQUFVLENBRmtCLENBRWI7QUFGYSxJQUc1QmdCLE1BQVUsQ0FIa0I7QUFJNUJzTCxRQUFVLENBSmtCO0FBSzVCM0MsV0FBVSxDQUxrQjtBQU01QjlOLFdBQVUsQ0FOa0I7QUFPNUI1VSxRQUFVO0FBUGtCLENBQWhDOztBQVVBLElBQUlzbEIsY0FBY2hQLEtBQUtxRSxPQUFMLENBQWxCOztBQUVBOzs7O0FBSUEsSUFBSXphLE1BQU0sRUFBRW9HLE1BQU0sT0FBUixFQUFpQnZMLE1BQU0sY0FBdkIsRUFBVjs7QUFFQTs7OztBQUlBLElBQUltSyxPQUFPOUYsbUJBQU9BLENBQUMsMENBQVIsQ0FBWDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQU0sUUFBUTBoQixZQUFSLEdBQXVCLFVBQVVySixNQUFWLEVBQWtCUSxjQUFsQixFQUFrQ2dOLFVBQWxDLEVBQThDMWxCLFFBQTlDLEVBQXdEO0FBQzdFLE1BQUksT0FBTzBZLGNBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDeEMxWSxlQUFXMFksY0FBWDtBQUNBQSxxQkFBaUIsS0FBakI7QUFDRDs7QUFFRCxNQUFJLE9BQU9nTixVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ3BDMWxCLGVBQVcwbEIsVUFBWDtBQUNBQSxpQkFBYSxJQUFiO0FBQ0Q7O0FBRUQsTUFBSXhxQixPQUFRZ2QsT0FBT2hkLElBQVAsS0FBZ0J5TCxTQUFqQixHQUNQQSxTQURPLEdBRVB1UixPQUFPaGQsSUFBUCxDQUFZZ0csTUFBWixJQUFzQmdYLE9BQU9oZCxJQUZqQzs7QUFJQSxNQUFJLE9BQU8yRixXQUFQLEtBQXVCLFdBQXZCLElBQXNDM0YsZ0JBQWdCMkYsV0FBMUQsRUFBdUU7QUFDckUsV0FBTzhrQixrQkFBa0J6TixNQUFsQixFQUEwQlEsY0FBMUIsRUFBMEMxWSxRQUExQyxDQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksT0FBT3FGLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JuSyxnQkFBZ0JtSyxJQUFuRCxFQUF5RDtBQUM5RCxXQUFPdWdCLFdBQVcxTixNQUFYLEVBQW1CUSxjQUFuQixFQUFtQzFZLFFBQW5DLENBQVA7QUFDRDs7QUFFRDtBQUNBLE1BQUk5RSxRQUFRQSxLQUFLeUgsTUFBakIsRUFBeUI7QUFDdkIsV0FBT2tqQixtQkFBbUIzTixNQUFuQixFQUEyQmxZLFFBQTNCLENBQVA7QUFDRDs7QUFFRDtBQUNBLE1BQUk4bEIsVUFBVWhMLFFBQVE1QyxPQUFPelIsSUFBZixDQUFkOztBQUVBO0FBQ0EsTUFBSUUsY0FBY3VSLE9BQU9oZCxJQUF6QixFQUErQjtBQUM3QjRxQixlQUFXSixhQUFhUCxLQUFLMWlCLE1BQUwsQ0FBWXNILE9BQU9tTyxPQUFPaGQsSUFBZCxDQUFaLEVBQWlDLEVBQUU2cUIsUUFBUSxLQUFWLEVBQWpDLENBQWIsR0FBbUVoYyxPQUFPbU8sT0FBT2hkLElBQWQsQ0FBOUU7QUFDRDs7QUFFRCxTQUFPOEUsU0FBUyxLQUFLOGxCLE9BQWQsQ0FBUDtBQUVELENBcENEOztBQXNDQSxTQUFTRCxrQkFBVCxDQUE0QjNOLE1BQTVCLEVBQW9DbFksUUFBcEMsRUFBOEM7QUFDNUM7QUFDQSxNQUFJNmlCLFVBQVUsTUFBTWhqQixRQUFRaWIsT0FBUixDQUFnQjVDLE9BQU96UixJQUF2QixDQUFOLEdBQXFDeVIsT0FBT2hkLElBQVAsQ0FBWUEsSUFBL0Q7QUFDQSxTQUFPOEUsU0FBUzZpQixPQUFULENBQVA7QUFDRDs7QUFFRDs7OztBQUlBLFNBQVM4QyxpQkFBVCxDQUEyQnpOLE1BQTNCLEVBQW1DUSxjQUFuQyxFQUFtRDFZLFFBQW5ELEVBQTZEO0FBQzNELE1BQUksQ0FBQzBZLGNBQUwsRUFBcUI7QUFDbkIsV0FBTzdZLFFBQVFtbUIsa0JBQVIsQ0FBMkI5TixNQUEzQixFQUFtQ2xZLFFBQW5DLENBQVA7QUFDRDs7QUFFRCxNQUFJOUUsT0FBT2dkLE9BQU9oZCxJQUFsQjtBQUNBLE1BQUkrcUIsZUFBZSxJQUFJbGxCLFVBQUosQ0FBZTdGLElBQWYsQ0FBbkI7QUFDQSxNQUFJZ3JCLGVBQWUsSUFBSW5sQixVQUFKLENBQWUsSUFBSTdGLEtBQUt5RixVQUF4QixDQUFuQjs7QUFFQXVsQixlQUFhLENBQWIsSUFBa0JwTCxRQUFRNUMsT0FBT3pSLElBQWYsQ0FBbEI7QUFDQSxPQUFLLElBQUl6RixJQUFJLENBQWIsRUFBZ0JBLElBQUlpbEIsYUFBYWhxQixNQUFqQyxFQUF5QytFLEdBQXpDLEVBQThDO0FBQzVDa2xCLGlCQUFhbGxCLElBQUUsQ0FBZixJQUFvQmlsQixhQUFhamxCLENBQWIsQ0FBcEI7QUFDRDs7QUFFRCxTQUFPaEIsU0FBU2ttQixhQUFhaGxCLE1BQXRCLENBQVA7QUFDRDs7QUFFRCxTQUFTaWxCLHVCQUFULENBQWlDak8sTUFBakMsRUFBeUNRLGNBQXpDLEVBQXlEMVksUUFBekQsRUFBbUU7QUFDakUsTUFBSSxDQUFDMFksY0FBTCxFQUFxQjtBQUNuQixXQUFPN1ksUUFBUW1tQixrQkFBUixDQUEyQjlOLE1BQTNCLEVBQW1DbFksUUFBbkMsQ0FBUDtBQUNEOztBQUVELE1BQUlvbUIsS0FBSyxJQUFJQyxVQUFKLEVBQVQ7QUFDQUQsS0FBR2pJLE1BQUgsR0FBWSxZQUFXO0FBQ3JCdGUsWUFBUTBoQixZQUFSLENBQXFCLEVBQUU5YSxNQUFNeVIsT0FBT3pSLElBQWYsRUFBcUJ2TCxNQUFNa3JCLEdBQUc5bEIsTUFBOUIsRUFBckIsRUFBNkRvWSxjQUE3RCxFQUE2RSxJQUE3RSxFQUFtRjFZLFFBQW5GO0FBQ0QsR0FGRDtBQUdBLFNBQU9vbUIsR0FBR0UsaUJBQUgsQ0FBcUJwTyxPQUFPaGQsSUFBNUIsQ0FBUDtBQUNEOztBQUVELFNBQVMwcUIsVUFBVCxDQUFvQjFOLE1BQXBCLEVBQTRCUSxjQUE1QixFQUE0QzFZLFFBQTVDLEVBQXNEO0FBQ3BELE1BQUksQ0FBQzBZLGNBQUwsRUFBcUI7QUFDbkIsV0FBTzdZLFFBQVFtbUIsa0JBQVIsQ0FBMkI5TixNQUEzQixFQUFtQ2xZLFFBQW5DLENBQVA7QUFDRDs7QUFFRCxNQUFJdWxCLGFBQUosRUFBbUI7QUFDakIsV0FBT1ksd0JBQXdCak8sTUFBeEIsRUFBZ0NRLGNBQWhDLEVBQWdEMVksUUFBaEQsQ0FBUDtBQUNEOztBQUVELE1BQUkvRCxTQUFTLElBQUk4RSxVQUFKLENBQWUsQ0FBZixDQUFiO0FBQ0E5RSxTQUFPLENBQVAsSUFBWTZlLFFBQVE1QyxPQUFPelIsSUFBZixDQUFaO0FBQ0EsTUFBSThmLE9BQU8sSUFBSWxoQixJQUFKLENBQVMsQ0FBQ3BKLE9BQU9pRixNQUFSLEVBQWdCZ1gsT0FBT2hkLElBQXZCLENBQVQsQ0FBWDs7QUFFQSxTQUFPOEUsU0FBU3VtQixJQUFULENBQVA7QUFDRDs7QUFFRDs7Ozs7OztBQU9BMW1CLFFBQVFtbUIsa0JBQVIsR0FBNkIsVUFBUzlOLE1BQVQsRUFBaUJsWSxRQUFqQixFQUEyQjtBQUN0RCxNQUFJNmlCLFVBQVUsTUFBTWhqQixRQUFRaWIsT0FBUixDQUFnQjVDLE9BQU96UixJQUF2QixDQUFwQjtBQUNBLE1BQUksT0FBT3BCLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0I2UyxPQUFPaGQsSUFBUCxZQUF1Qm1LLElBQTFELEVBQWdFO0FBQzlELFFBQUkrZ0IsS0FBSyxJQUFJQyxVQUFKLEVBQVQ7QUFDQUQsT0FBR2pJLE1BQUgsR0FBWSxZQUFXO0FBQ3JCLFVBQUl4YSxNQUFNeWlCLEdBQUc5bEIsTUFBSCxDQUFVd2tCLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBVjtBQUNBOWtCLGVBQVM2aUIsVUFBVWxmLEdBQW5CO0FBQ0QsS0FIRDtBQUlBLFdBQU95aUIsR0FBR0ksYUFBSCxDQUFpQnRPLE9BQU9oZCxJQUF4QixDQUFQO0FBQ0Q7O0FBRUQsTUFBSXVyQixPQUFKO0FBQ0EsTUFBSTtBQUNGQSxjQUFVMWMsT0FBTzhFLFlBQVAsQ0FBb0J2RCxLQUFwQixDQUEwQixJQUExQixFQUFnQyxJQUFJdkssVUFBSixDQUFlbVgsT0FBT2hkLElBQXRCLENBQWhDLENBQVY7QUFDRCxHQUZELENBRUUsT0FBT3FLLENBQVAsRUFBVTtBQUNWO0FBQ0EsUUFBSW1oQixRQUFRLElBQUkzbEIsVUFBSixDQUFlbVgsT0FBT2hkLElBQXRCLENBQVo7QUFDQSxRQUFJeXJCLFFBQVEsSUFBSW5qQixLQUFKLENBQVVrakIsTUFBTXpxQixNQUFoQixDQUFaO0FBQ0EsU0FBSyxJQUFJK0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMGxCLE1BQU16cUIsTUFBMUIsRUFBa0MrRSxHQUFsQyxFQUF1QztBQUNyQzJsQixZQUFNM2xCLENBQU4sSUFBVzBsQixNQUFNMWxCLENBQU4sQ0FBWDtBQUNEO0FBQ0R5bEIsY0FBVTFjLE9BQU84RSxZQUFQLENBQW9CdkQsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NxYixLQUFoQyxDQUFWO0FBQ0Q7QUFDRDlELGFBQVcrRCxLQUFLSCxPQUFMLENBQVg7QUFDQSxTQUFPem1CLFNBQVM2aUIsT0FBVCxDQUFQO0FBQ0QsQ0F6QkQ7O0FBMkJBOzs7Ozs7O0FBT0FoakIsUUFBUW1iLFlBQVIsR0FBdUIsVUFBVTlmLElBQVYsRUFBZ0J5YSxVQUFoQixFQUE0QmtSLFVBQTVCLEVBQXdDO0FBQzdELE1BQUkzckIsU0FBU3lMLFNBQWIsRUFBd0I7QUFDdEIsV0FBT3RHLEdBQVA7QUFDRDtBQUNEO0FBQ0EsTUFBSSxPQUFPbkYsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixRQUFJQSxLQUFLNHJCLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGFBQU9qbkIsUUFBUWtuQixrQkFBUixDQUEyQjdyQixLQUFLb1MsTUFBTCxDQUFZLENBQVosQ0FBM0IsRUFBMkNxSSxVQUEzQyxDQUFQO0FBQ0Q7O0FBRUQsUUFBSWtSLFVBQUosRUFBZ0I7QUFDZDNyQixhQUFPOHJCLFVBQVU5ckIsSUFBVixDQUFQO0FBQ0EsVUFBSUEsU0FBUyxLQUFiLEVBQW9CO0FBQ2xCLGVBQU9tRixHQUFQO0FBQ0Q7QUFDRjtBQUNELFFBQUlvRyxPQUFPdkwsS0FBSzRyQixNQUFMLENBQVksQ0FBWixDQUFYOztBQUVBLFFBQUk3WixPQUFPeEcsSUFBUCxLQUFnQkEsSUFBaEIsSUFBd0IsQ0FBQ2dmLFlBQVloZixJQUFaLENBQTdCLEVBQWdEO0FBQzlDLGFBQU9wRyxHQUFQO0FBQ0Q7O0FBRUQsUUFBSW5GLEtBQUtlLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQixhQUFPLEVBQUV3SyxNQUFNZ2YsWUFBWWhmLElBQVosQ0FBUixFQUEyQnZMLE1BQU1BLEtBQUswSCxTQUFMLENBQWUsQ0FBZixDQUFqQyxFQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxFQUFFNkQsTUFBTWdmLFlBQVloZixJQUFaLENBQVIsRUFBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBSXdnQixVQUFVLElBQUlsbUIsVUFBSixDQUFlN0YsSUFBZixDQUFkO0FBQ0EsTUFBSXVMLE9BQU93Z0IsUUFBUSxDQUFSLENBQVg7QUFDQSxNQUFJQyxPQUFPaEMsWUFBWWhxQixJQUFaLEVBQWtCLENBQWxCLENBQVg7QUFDQSxNQUFJbUssUUFBUXNRLGVBQWUsTUFBM0IsRUFBbUM7QUFDakN1UixXQUFPLElBQUk3aEIsSUFBSixDQUFTLENBQUM2aEIsSUFBRCxDQUFULENBQVA7QUFDRDtBQUNELFNBQU8sRUFBRXpnQixNQUFNZ2YsWUFBWWhmLElBQVosQ0FBUixFQUEyQnZMLE1BQU1nc0IsSUFBakMsRUFBUDtBQUNELENBcENEOztBQXNDQSxTQUFTRixTQUFULENBQW1COXJCLElBQW5CLEVBQXlCO0FBQ3ZCLE1BQUk7QUFDRkEsV0FBT2lxQixLQUFLdGlCLE1BQUwsQ0FBWTNILElBQVosRUFBa0IsRUFBRTZxQixRQUFRLEtBQVYsRUFBbEIsQ0FBUDtBQUNELEdBRkQsQ0FFRSxPQUFPeGdCLENBQVAsRUFBVTtBQUNWLFdBQU8sS0FBUDtBQUNEO0FBQ0QsU0FBT3JLLElBQVA7QUFDRDs7QUFFRDs7Ozs7OztBQU9BMkUsUUFBUWtuQixrQkFBUixHQUE2QixVQUFTbk8sR0FBVCxFQUFjakQsVUFBZCxFQUEwQjtBQUNyRCxNQUFJbFAsT0FBT2dmLFlBQVk3TSxJQUFJa08sTUFBSixDQUFXLENBQVgsQ0FBWixDQUFYO0FBQ0EsTUFBSSxDQUFDMUIsYUFBTCxFQUFvQjtBQUNsQixXQUFPLEVBQUUzZSxNQUFNQSxJQUFSLEVBQWN2TCxNQUFNLEVBQUV5SCxRQUFRLElBQVYsRUFBZ0J6SCxNQUFNMGQsSUFBSXRMLE1BQUosQ0FBVyxDQUFYLENBQXRCLEVBQXBCLEVBQVA7QUFDRDs7QUFFRCxNQUFJcFMsT0FBT2txQixjQUFjdmlCLE1BQWQsQ0FBcUIrVixJQUFJdEwsTUFBSixDQUFXLENBQVgsQ0FBckIsQ0FBWDs7QUFFQSxNQUFJcUksZUFBZSxNQUFmLElBQXlCdFEsSUFBN0IsRUFBbUM7QUFDakNuSyxXQUFPLElBQUltSyxJQUFKLENBQVMsQ0FBQ25LLElBQUQsQ0FBVCxDQUFQO0FBQ0Q7O0FBRUQsU0FBTyxFQUFFdUwsTUFBTUEsSUFBUixFQUFjdkwsTUFBTUEsSUFBcEIsRUFBUDtBQUNELENBYkQ7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEyRSxRQUFRdWdCLGFBQVIsR0FBd0IsVUFBVXRGLE9BQVYsRUFBbUJwQyxjQUFuQixFQUFtQzFZLFFBQW5DLEVBQTZDO0FBQ25FLE1BQUksT0FBTzBZLGNBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDeEMxWSxlQUFXMFksY0FBWDtBQUNBQSxxQkFBaUIsSUFBakI7QUFDRDs7QUFFRCxNQUFJNEYsV0FBVzJHLFVBQVVuSyxPQUFWLENBQWY7O0FBRUEsTUFBSXBDLGtCQUFrQjRGLFFBQXRCLEVBQWdDO0FBQzlCLFFBQUlqWixRQUFRLENBQUNrZ0IsYUFBYixFQUE0QjtBQUMxQixhQUFPMWxCLFFBQVFzbkIsbUJBQVIsQ0FBNEJyTSxPQUE1QixFQUFxQzlhLFFBQXJDLENBQVA7QUFDRDs7QUFFRCxXQUFPSCxRQUFRdW5CLDBCQUFSLENBQW1DdE0sT0FBbkMsRUFBNEM5YSxRQUE1QyxDQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDOGEsUUFBUTdlLE1BQWIsRUFBcUI7QUFDbkIsV0FBTytELFNBQVMsSUFBVCxDQUFQO0FBQ0Q7O0FBRUQsV0FBU3FuQixlQUFULENBQXlCeEUsT0FBekIsRUFBa0M7QUFDaEMsV0FBT0EsUUFBUTVtQixNQUFSLEdBQWlCLEdBQWpCLEdBQXVCNG1CLE9BQTlCO0FBQ0Q7O0FBRUQsV0FBU3lFLFNBQVQsQ0FBbUJwUCxNQUFuQixFQUEyQnFQLFlBQTNCLEVBQXlDO0FBQ3ZDMW5CLFlBQVEwaEIsWUFBUixDQUFxQnJKLE1BQXJCLEVBQTZCLENBQUNvRyxRQUFELEdBQVksS0FBWixHQUFvQjVGLGNBQWpELEVBQWlFLEtBQWpFLEVBQXdFLFVBQVNtSyxPQUFULEVBQWtCO0FBQ3hGMEUsbUJBQWEsSUFBYixFQUFtQkYsZ0JBQWdCeEUsT0FBaEIsQ0FBbkI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQ5YyxNQUFJK1UsT0FBSixFQUFhd00sU0FBYixFQUF3QixVQUFTam5CLEdBQVQsRUFBY21uQixPQUFkLEVBQXVCO0FBQzdDLFdBQU94bkIsU0FBU3duQixRQUFROWlCLElBQVIsQ0FBYSxFQUFiLENBQVQsQ0FBUDtBQUNELEdBRkQ7QUFHRCxDQWpDRDs7QUFtQ0E7Ozs7QUFJQSxTQUFTcUIsR0FBVCxDQUFhRCxHQUFiLEVBQWtCMmhCLElBQWxCLEVBQXdCakcsSUFBeEIsRUFBOEI7QUFDNUIsTUFBSWxoQixTQUFTLElBQUlrRCxLQUFKLENBQVVzQyxJQUFJN0osTUFBZCxDQUFiO0FBQ0EsTUFBSXlyQixPQUFPNW5CLE1BQU1nRyxJQUFJN0osTUFBVixFQUFrQnVsQixJQUFsQixDQUFYOztBQUVBLE1BQUltRyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVMzbUIsQ0FBVCxFQUFZNG1CLEVBQVosRUFBZ0J2cEIsRUFBaEIsRUFBb0I7QUFDdENvcEIsU0FBS0csRUFBTCxFQUFTLFVBQVN2b0IsS0FBVCxFQUFnQnVaLEdBQWhCLEVBQXFCO0FBQzVCdFksYUFBT1UsQ0FBUCxJQUFZNFgsR0FBWjtBQUNBdmEsU0FBR2dCLEtBQUgsRUFBVWlCLE1BQVY7QUFDRCxLQUhEO0FBSUQsR0FMRDs7QUFPQSxPQUFLLElBQUlVLElBQUksQ0FBYixFQUFnQkEsSUFBSThFLElBQUk3SixNQUF4QixFQUFnQytFLEdBQWhDLEVBQXFDO0FBQ25DMm1CLGtCQUFjM21CLENBQWQsRUFBaUI4RSxJQUFJOUUsQ0FBSixDQUFqQixFQUF5QjBtQixJQUF6QjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O0FBUUE3bkIsUUFBUXFnQixhQUFSLEdBQXdCLFVBQVVobEIsSUFBVixFQUFnQnlhLFVBQWhCLEVBQTRCM1YsUUFBNUIsRUFBc0M7QUFDNUQsTUFBSSxPQUFPOUUsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixXQUFPMkUsUUFBUWdvQixxQkFBUixDQUE4QjNzQixJQUE5QixFQUFvQ3lhLFVBQXBDLEVBQWdEM1YsUUFBaEQsQ0FBUDtBQUNEOztBQUVELE1BQUksT0FBTzJWLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDcEMzVixlQUFXMlYsVUFBWDtBQUNBQSxpQkFBYSxJQUFiO0FBQ0Q7O0FBRUQsTUFBSXVDLE1BQUo7QUFDQSxNQUFJaGQsU0FBUyxFQUFiLEVBQWlCO0FBQ2Y7QUFDQSxXQUFPOEUsU0FBU0ssR0FBVCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBUDtBQUNEOztBQUVELE1BQUlwRSxTQUFTLEVBQWI7QUFBQSxNQUFpQitPLENBQWpCO0FBQUEsTUFBb0I0TixHQUFwQjs7QUFFQSxPQUFLLElBQUk1WCxJQUFJLENBQVIsRUFBV3lZLElBQUl2ZSxLQUFLZSxNQUF6QixFQUFpQytFLElBQUl5WSxDQUFyQyxFQUF3Q3pZLEdBQXhDLEVBQTZDO0FBQzNDLFFBQUk4bUIsTUFBTTVzQixLQUFLNHJCLE1BQUwsQ0FBWTlsQixDQUFaLENBQVY7O0FBRUEsUUFBSThtQixRQUFRLEdBQVosRUFBaUI7QUFDZjdyQixnQkFBVTZyQixHQUFWO0FBQ0E7QUFDRDs7QUFFRCxRQUFJN3JCLFdBQVcsRUFBWCxJQUFrQkEsV0FBVytPLElBQUlpQyxPQUFPaFIsTUFBUCxDQUFmLENBQXRCLEVBQXVEO0FBQ3JEO0FBQ0EsYUFBTytELFNBQVNLLEdBQVQsRUFBYyxDQUFkLEVBQWlCLENBQWpCLENBQVA7QUFDRDs7QUFFRHVZLFVBQU0xZCxLQUFLb1MsTUFBTCxDQUFZdE0sSUFBSSxDQUFoQixFQUFtQmdLLENBQW5CLENBQU47O0FBRUEsUUFBSS9PLFVBQVUyYyxJQUFJM2MsTUFBbEIsRUFBMEI7QUFDeEI7QUFDQSxhQUFPK0QsU0FBU0ssR0FBVCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBUDtBQUNEOztBQUVELFFBQUl1WSxJQUFJM2MsTUFBUixFQUFnQjtBQUNkaWMsZUFBU3JZLFFBQVFtYixZQUFSLENBQXFCcEMsR0FBckIsRUFBMEJqRCxVQUExQixFQUFzQyxLQUF0QyxDQUFUOztBQUVBLFVBQUl0VixJQUFJb0csSUFBSixLQUFheVIsT0FBT3pSLElBQXBCLElBQTRCcEcsSUFBSW5GLElBQUosS0FBYWdkLE9BQU9oZCxJQUFwRCxFQUEwRDtBQUN4RDtBQUNBLGVBQU84RSxTQUFTSyxHQUFULEVBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUFQO0FBQ0Q7O0FBRUQsVUFBSXlPLE1BQU05TyxTQUFTa1ksTUFBVCxFQUFpQmxYLElBQUlnSyxDQUFyQixFQUF3QnlPLENBQXhCLENBQVY7QUFDQSxVQUFJLFVBQVUzSyxHQUFkLEVBQW1CO0FBQ3BCOztBQUVEO0FBQ0E5TixTQUFLZ0ssQ0FBTDtBQUNBL08sYUFBUyxFQUFUO0FBQ0Q7O0FBRUQsTUFBSUEsV0FBVyxFQUFmLEVBQW1CO0FBQ2pCO0FBQ0EsV0FBTytELFNBQVNLLEdBQVQsRUFBYyxDQUFkLEVBQWlCLENBQWpCLENBQVA7QUFDRDtBQUVGLENBNUREOztBQThEQTs7Ozs7Ozs7Ozs7Ozs7QUFjQVIsUUFBUXVuQiwwQkFBUixHQUFxQyxVQUFTdE0sT0FBVCxFQUFrQjlhLFFBQWxCLEVBQTRCO0FBQy9ELE1BQUksQ0FBQzhhLFFBQVE3ZSxNQUFiLEVBQXFCO0FBQ25CLFdBQU8rRCxTQUFTLElBQUlhLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBVCxDQUFQO0FBQ0Q7O0FBRUQsV0FBU3ltQixTQUFULENBQW1CcFAsTUFBbkIsRUFBMkJxUCxZQUEzQixFQUF5QztBQUN2QzFuQixZQUFRMGhCLFlBQVIsQ0FBcUJySixNQUFyQixFQUE2QixJQUE3QixFQUFtQyxJQUFuQyxFQUF5QyxVQUFTaGQsSUFBVCxFQUFlO0FBQ3RELGFBQU9xc0IsYUFBYSxJQUFiLEVBQW1CcnNCLElBQW5CLENBQVA7QUFDRCxLQUZEO0FBR0Q7O0FBRUQ2SyxNQUFJK1UsT0FBSixFQUFhd00sU0FBYixFQUF3QixVQUFTam5CLEdBQVQsRUFBYzBuQixjQUFkLEVBQThCO0FBQ3BELFFBQUlDLGNBQWNELGVBQWVFLE1BQWYsQ0FBc0IsVUFBU0MsR0FBVCxFQUFjbmxCLENBQWQsRUFBaUI7QUFDdkQsVUFBSUwsR0FBSjtBQUNBLFVBQUksT0FBT0ssQ0FBUCxLQUFhLFFBQWpCLEVBQTBCO0FBQ3hCTCxjQUFNSyxFQUFFOUcsTUFBUjtBQUNELE9BRkQsTUFFTztBQUNMeUcsY0FBTUssRUFBRXBDLFVBQVI7QUFDRDtBQUNELGFBQU91bkIsTUFBTXhsQixJQUFJZ0gsUUFBSixHQUFlek4sTUFBckIsR0FBOEJ5RyxHQUE5QixHQUFvQyxDQUEzQyxDQVB1RCxDQU9UO0FBQy9DLEtBUmlCLEVBUWYsQ0FSZSxDQUFsQjs7QUFVQSxRQUFJeWxCLGNBQWMsSUFBSXBuQixVQUFKLENBQWVpbkIsV0FBZixDQUFsQjs7QUFFQSxRQUFJSSxjQUFjLENBQWxCO0FBQ0FMLG1CQUFleGhCLE9BQWYsQ0FBdUIsVUFBU3hELENBQVQsRUFBWTtBQUNqQyxVQUFJc2xCLFdBQVcsT0FBT3RsQixDQUFQLEtBQWEsUUFBNUI7QUFDQSxVQUFJdWxCLEtBQUt2bEIsQ0FBVDtBQUNBLFVBQUlzbEIsUUFBSixFQUFjO0FBQ1osWUFBSUUsT0FBTyxJQUFJeG5CLFVBQUosQ0FBZWdDLEVBQUU5RyxNQUFqQixDQUFYO0FBQ0EsYUFBSyxJQUFJK0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK0IsRUFBRTlHLE1BQXRCLEVBQThCK0UsR0FBOUIsRUFBbUM7QUFDakN1bkIsZUFBS3ZuQixDQUFMLElBQVUrQixFQUFFUCxVQUFGLENBQWF4QixDQUFiLENBQVY7QUFDRDtBQUNEc25CLGFBQUtDLEtBQUtybkIsTUFBVjtBQUNEOztBQUVELFVBQUltbkIsUUFBSixFQUFjO0FBQUU7QUFDZEYsb0JBQVlDLGFBQVosSUFBNkIsQ0FBN0I7QUFDRCxPQUZELE1BRU87QUFBRTtBQUNQRCxvQkFBWUMsYUFBWixJQUE2QixDQUE3QjtBQUNEOztBQUVELFVBQUlJLFNBQVNGLEdBQUczbkIsVUFBSCxDQUFjK0ksUUFBZCxFQUFiO0FBQ0EsV0FBSyxJQUFJMUksSUFBSSxDQUFiLEVBQWdCQSxJQUFJd25CLE9BQU92c0IsTUFBM0IsRUFBbUMrRSxHQUFuQyxFQUF3QztBQUN0Q21uQixvQkFBWUMsYUFBWixJQUE2Qi9hLFNBQVNtYixPQUFPeG5CLENBQVAsQ0FBVCxDQUE3QjtBQUNEO0FBQ0RtbkIsa0JBQVlDLGFBQVosSUFBNkIsR0FBN0I7O0FBRUEsVUFBSUcsT0FBTyxJQUFJeG5CLFVBQUosQ0FBZXVuQixFQUFmLENBQVg7QUFDQSxXQUFLLElBQUl0bkIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJdW5CLEtBQUt0c0IsTUFBekIsRUFBaUMrRSxHQUFqQyxFQUFzQztBQUNwQ21uQixvQkFBWUMsYUFBWixJQUE2QkcsS0FBS3ZuQixDQUFMLENBQTdCO0FBQ0Q7QUFDRixLQTNCRDs7QUE2QkEsV0FBT2hCLFNBQVNtb0IsWUFBWWpuQixNQUFyQixDQUFQO0FBQ0QsR0E1Q0Q7QUE2Q0QsQ0F4REQ7O0FBMERBOzs7O0FBSUFyQixRQUFRc25CLG1CQUFSLEdBQThCLFVBQVNyTSxPQUFULEVBQWtCOWEsUUFBbEIsRUFBNEI7QUFDeEQsV0FBU3NuQixTQUFULENBQW1CcFAsTUFBbkIsRUFBMkJxUCxZQUEzQixFQUF5QztBQUN2QzFuQixZQUFRMGhCLFlBQVIsQ0FBcUJySixNQUFyQixFQUE2QixJQUE3QixFQUFtQyxJQUFuQyxFQUF5QyxVQUFTNE4sT0FBVCxFQUFrQjtBQUN6RCxVQUFJMkMsbUJBQW1CLElBQUkxbkIsVUFBSixDQUFlLENBQWYsQ0FBdkI7QUFDQTBuQix1QkFBaUIsQ0FBakIsSUFBc0IsQ0FBdEI7QUFDQSxVQUFJLE9BQU8zQyxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CLFlBQUl5QyxPQUFPLElBQUl4bkIsVUFBSixDQUFlK2tCLFFBQVE3cEIsTUFBdkIsQ0FBWDtBQUNBLGFBQUssSUFBSStFLElBQUksQ0FBYixFQUFnQkEsSUFBSThrQixRQUFRN3BCLE1BQTVCLEVBQW9DK0UsR0FBcEMsRUFBeUM7QUFDdkN1bkIsZUFBS3ZuQixDQUFMLElBQVU4a0IsUUFBUXRqQixVQUFSLENBQW1CeEIsQ0FBbkIsQ0FBVjtBQUNEO0FBQ0Q4a0Isa0JBQVV5QyxLQUFLcm5CLE1BQWY7QUFDQXVuQix5QkFBaUIsQ0FBakIsSUFBc0IsQ0FBdEI7QUFDRDs7QUFFRCxVQUFJL2xCLE1BQU9vakIsbUJBQW1CamxCLFdBQXBCLEdBQ05pbEIsUUFBUW5sQixVQURGLEdBRU5tbEIsUUFBUXhnQixJQUZaOztBQUlBLFVBQUlrakIsU0FBUzlsQixJQUFJZ0gsUUFBSixFQUFiO0FBQ0EsVUFBSWdmLFlBQVksSUFBSTNuQixVQUFKLENBQWV5bkIsT0FBT3ZzQixNQUFQLEdBQWdCLENBQS9CLENBQWhCO0FBQ0EsV0FBSyxJQUFJK0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJd25CLE9BQU92c0IsTUFBM0IsRUFBbUMrRSxHQUFuQyxFQUF3QztBQUN0QzBuQixrQkFBVTFuQixDQUFWLElBQWVxTSxTQUFTbWIsT0FBT3huQixDQUFQLENBQVQsQ0FBZjtBQUNEO0FBQ0QwbkIsZ0JBQVVGLE9BQU92c0IsTUFBakIsSUFBMkIsR0FBM0I7O0FBRUEsVUFBSW9KLElBQUosRUFBVTtBQUNSLFlBQUlraEIsT0FBTyxJQUFJbGhCLElBQUosQ0FBUyxDQUFDb2pCLGlCQUFpQnZuQixNQUFsQixFQUEwQnduQixVQUFVeG5CLE1BQXBDLEVBQTRDNGtCLE9BQTVDLENBQVQsQ0FBWDtBQUNBeUIscUJBQWEsSUFBYixFQUFtQmhCLElBQW5CO0FBQ0Q7QUFDRixLQTNCRDtBQTRCRDs7QUFFRHhnQixNQUFJK1UsT0FBSixFQUFhd00sU0FBYixFQUF3QixVQUFTam5CLEdBQVQsRUFBY21uQixPQUFkLEVBQXVCO0FBQzdDLFdBQU94bkIsU0FBUyxJQUFJcUYsSUFBSixDQUFTbWlCLE9BQVQsQ0FBVCxDQUFQO0FBQ0QsR0FGRDtBQUdELENBbkNEOztBQXFDQTs7Ozs7Ozs7O0FBU0EzbkIsUUFBUWdvQixxQkFBUixHQUFnQyxVQUFVM3NCLElBQVYsRUFBZ0J5YSxVQUFoQixFQUE0QjNWLFFBQTVCLEVBQXNDO0FBQ3BFLE1BQUksT0FBTzJWLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDcEMzVixlQUFXMlYsVUFBWDtBQUNBQSxpQkFBYSxJQUFiO0FBQ0Q7O0FBRUQsTUFBSWdULGFBQWF6dEIsSUFBakI7QUFDQSxNQUFJMHRCLFVBQVUsRUFBZDs7QUFFQSxTQUFPRCxXQUFXaG9CLFVBQVgsR0FBd0IsQ0FBL0IsRUFBa0M7QUFDaEMsUUFBSWtvQixZQUFZLElBQUk5bkIsVUFBSixDQUFlNG5CLFVBQWYsQ0FBaEI7QUFDQSxRQUFJTixXQUFXUSxVQUFVLENBQVYsTUFBaUIsQ0FBaEM7QUFDQSxRQUFJQyxZQUFZLEVBQWhCOztBQUVBLFNBQUssSUFBSTluQixJQUFJLENBQWIsR0FBa0JBLEdBQWxCLEVBQXVCO0FBQ3JCLFVBQUk2bkIsVUFBVTduQixDQUFWLE1BQWlCLEdBQXJCLEVBQTBCOztBQUUxQjtBQUNBLFVBQUk4bkIsVUFBVTdzQixNQUFWLEdBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGVBQU8rRCxTQUFTSyxHQUFULEVBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUFQO0FBQ0Q7O0FBRUR5b0IsbUJBQWFELFVBQVU3bkIsQ0FBVixDQUFiO0FBQ0Q7O0FBRUQybkIsaUJBQWF6RCxZQUFZeUQsVUFBWixFQUF3QixJQUFJRyxVQUFVN3NCLE1BQXRDLENBQWI7QUFDQTZzQixnQkFBWXpiLFNBQVN5YixTQUFULENBQVo7O0FBRUEsUUFBSWxRLE1BQU1zTSxZQUFZeUQsVUFBWixFQUF3QixDQUF4QixFQUEyQkcsU0FBM0IsQ0FBVjtBQUNBLFFBQUlULFFBQUosRUFBYztBQUNaLFVBQUk7QUFDRnpQLGNBQU03TyxPQUFPOEUsWUFBUCxDQUFvQnZELEtBQXBCLENBQTBCLElBQTFCLEVBQWdDLElBQUl2SyxVQUFKLENBQWU2WCxHQUFmLENBQWhDLENBQU47QUFDRCxPQUZELENBRUUsT0FBT3JULENBQVAsRUFBVTtBQUNWO0FBQ0EsWUFBSW1oQixRQUFRLElBQUkzbEIsVUFBSixDQUFlNlgsR0FBZixDQUFaO0FBQ0FBLGNBQU0sRUFBTjtBQUNBLGFBQUssSUFBSTVYLElBQUksQ0FBYixFQUFnQkEsSUFBSTBsQixNQUFNenFCLE1BQTFCLEVBQWtDK0UsR0FBbEMsRUFBdUM7QUFDckM0WCxpQkFBTzdPLE9BQU84RSxZQUFQLENBQW9CNlgsTUFBTTFsQixDQUFOLENBQXBCLENBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ0bkIsWUFBUW5rQixJQUFSLENBQWFtVSxHQUFiO0FBQ0ErUCxpQkFBYXpELFlBQVl5RCxVQUFaLEVBQXdCRyxTQUF4QixDQUFiO0FBQ0Q7O0FBRUQsTUFBSTdJLFFBQVEySSxRQUFRM3NCLE1BQXBCO0FBQ0Eyc0IsVUFBUXJpQixPQUFSLENBQWdCLFVBQVNyRixNQUFULEVBQWlCRixDQUFqQixFQUFvQjtBQUNsQ2hCLGFBQVNILFFBQVFtYixZQUFSLENBQXFCOVosTUFBckIsRUFBNkJ5VSxVQUE3QixFQUF5QyxJQUF6QyxDQUFULEVBQXlEM1UsQ0FBekQsRUFBNERpZixLQUE1RDtBQUNELEdBRkQ7QUFHRCxDQWxERCxDOzs7Ozs7Ozs7Ozs7OztBQ3ppQkE7Ozs7Ozs7QUFPQXJnQixPQUFPQyxPQUFQLEdBQWlCMkksT0FBT2lPLElBQVAsSUFBZSxTQUFTQSxJQUFULENBQWVsTixHQUFmLEVBQW1CO0FBQ2pELE1BQUlyRixNQUFNLEVBQVY7QUFDQSxNQUFJNmtCLE1BQU12Z0IsT0FBTzFOLFNBQVAsQ0FBaUIrYyxjQUEzQjs7QUFFQSxPQUFLLElBQUk3VyxDQUFULElBQWN1SSxHQUFkLEVBQW1CO0FBQ2pCLFFBQUl3ZixJQUFJMWMsSUFBSixDQUFTOUMsR0FBVCxFQUFjdkksQ0FBZCxDQUFKLEVBQXNCO0FBQ3BCa0QsVUFBSU8sSUFBSixDQUFTekQsQ0FBVDtBQUNEO0FBQ0Y7QUFDRCxTQUFPa0QsR0FBUDtBQUNELENBVkQsQzs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7QUFFQSxJQUFJOGtCLHFCQUFxQmpmLE9BQU84RSxZQUFoQzs7QUFFQTtBQUNBLFNBQVNvYSxVQUFULENBQW9CaGdCLE1BQXBCLEVBQTRCO0FBQzNCLEtBQUl6RSxTQUFTLEVBQWI7QUFDQSxLQUFJMGtCLFVBQVUsQ0FBZDtBQUNBLEtBQUlqdEIsU0FBU2dOLE9BQU9oTixNQUFwQjtBQUNBLEtBQUlnTSxLQUFKO0FBQ0EsS0FBSWtoQixLQUFKO0FBQ0EsUUFBT0QsVUFBVWp0QixNQUFqQixFQUF5QjtBQUN4QmdNLFVBQVFnQixPQUFPekcsVUFBUCxDQUFrQjBtQixTQUFsQixDQUFSO0FBQ0EsTUFBSWpoQixTQUFTLE1BQVQsSUFBbUJBLFNBQVMsTUFBNUIsSUFBc0NpaEIsVUFBVWp0QixNQUFwRCxFQUE0RDtBQUMzRDtBQUNBa3RCLFdBQVFsZ0IsT0FBT3pHLFVBQVAsQ0FBa0IwbUIsU0FBbEIsQ0FBUjtBQUNBLE9BQUksQ0FBQ0MsUUFBUSxNQUFULEtBQW9CLE1BQXhCLEVBQWdDO0FBQUU7QUFDakMza0IsV0FBT0MsSUFBUCxDQUFZLENBQUMsQ0FBQ3dELFFBQVEsS0FBVCxLQUFtQixFQUFwQixLQUEyQmtoQixRQUFRLEtBQW5DLElBQTRDLE9BQXhEO0FBQ0EsSUFGRCxNQUVPO0FBQ047QUFDQTtBQUNBM2tCLFdBQU9DLElBQVAsQ0FBWXdELEtBQVo7QUFDQWloQjtBQUNBO0FBQ0QsR0FYRCxNQVdPO0FBQ04xa0IsVUFBT0MsSUFBUCxDQUFZd0QsS0FBWjtBQUNBO0FBQ0Q7QUFDRCxRQUFPekQsTUFBUDtBQUNBOztBQUVEO0FBQ0EsU0FBUzRrQixVQUFULENBQW9COWYsS0FBcEIsRUFBMkI7QUFDMUIsS0FBSXJOLFNBQVNxTixNQUFNck4sTUFBbkI7QUFDQSxLQUFJb1ksUUFBUSxDQUFDLENBQWI7QUFDQSxLQUFJcE0sS0FBSjtBQUNBLEtBQUl6RCxTQUFTLEVBQWI7QUFDQSxRQUFPLEVBQUU2UCxLQUFGLEdBQVVwWSxNQUFqQixFQUF5QjtBQUN4QmdNLFVBQVFxQixNQUFNK0ssS0FBTixDQUFSO0FBQ0EsTUFBSXBNLFFBQVEsTUFBWixFQUFvQjtBQUNuQkEsWUFBUyxPQUFUO0FBQ0F6RCxhQUFVd2tCLG1CQUFtQi9nQixVQUFVLEVBQVYsR0FBZSxLQUFmLEdBQXVCLE1BQTFDLENBQVY7QUFDQUEsV0FBUSxTQUFTQSxRQUFRLEtBQXpCO0FBQ0E7QUFDRHpELFlBQVV3a0IsbUJBQW1CL2dCLEtBQW5CLENBQVY7QUFDQTtBQUNELFFBQU96RCxNQUFQO0FBQ0E7O0FBRUQsU0FBUzZrQixnQkFBVCxDQUEwQmpiLFNBQTFCLEVBQXFDMlgsTUFBckMsRUFBNkM7QUFDNUMsS0FBSTNYLGFBQWEsTUFBYixJQUF1QkEsYUFBYSxNQUF4QyxFQUFnRDtBQUMvQyxNQUFJMlgsTUFBSixFQUFZO0FBQ1gsU0FBTTNtQixNQUNMLHNCQUFzQmdQLFVBQVUxRSxRQUFWLENBQW1CLEVBQW5CLEVBQXVCNGYsV0FBdkIsRUFBdEIsR0FDQSx3QkFGSyxDQUFOO0FBSUE7QUFDRCxTQUFPLEtBQVA7QUFDQTtBQUNELFFBQU8sSUFBUDtBQUNBO0FBQ0Q7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQm5iLFNBQXBCLEVBQStCMkosS0FBL0IsRUFBc0M7QUFDckMsUUFBT2lSLG1CQUFxQjVhLGFBQWEySixLQUFkLEdBQXVCLElBQXhCLEdBQWdDLElBQW5ELENBQVA7QUFDQTs7QUFFRCxTQUFTeVIsZUFBVCxDQUF5QnBiLFNBQXpCLEVBQW9DMlgsTUFBcEMsRUFBNEM7QUFDM0MsS0FBSSxDQUFDM1gsWUFBWSxVQUFiLEtBQTRCLENBQWhDLEVBQW1DO0FBQUU7QUFDcEMsU0FBTzRhLG1CQUFtQjVhLFNBQW5CLENBQVA7QUFDQTtBQUNELEtBQUlxYixTQUFTLEVBQWI7QUFDQSxLQUFJLENBQUNyYixZQUFZLFVBQWIsS0FBNEIsQ0FBaEMsRUFBbUM7QUFBRTtBQUNwQ3FiLFdBQVNULG1CQUFxQjVhLGFBQWEsQ0FBZCxHQUFtQixJQUFwQixHQUE0QixJQUEvQyxDQUFUO0FBQ0EsRUFGRCxNQUdLLElBQUksQ0FBQ0EsWUFBWSxVQUFiLEtBQTRCLENBQWhDLEVBQW1DO0FBQUU7QUFDekMsTUFBSSxDQUFDaWIsaUJBQWlCamIsU0FBakIsRUFBNEIyWCxNQUE1QixDQUFMLEVBQTBDO0FBQ3pDM1gsZUFBWSxNQUFaO0FBQ0E7QUFDRHFiLFdBQVNULG1CQUFxQjVhLGFBQWEsRUFBZCxHQUFvQixJQUFyQixHQUE2QixJQUFoRCxDQUFUO0FBQ0FxYixZQUFVRixXQUFXbmIsU0FBWCxFQUFzQixDQUF0QixDQUFWO0FBQ0EsRUFOSSxNQU9BLElBQUksQ0FBQ0EsWUFBWSxVQUFiLEtBQTRCLENBQWhDLEVBQW1DO0FBQUU7QUFDekNxYixXQUFTVCxtQkFBcUI1YSxhQUFhLEVBQWQsR0FBb0IsSUFBckIsR0FBNkIsSUFBaEQsQ0FBVDtBQUNBcWIsWUFBVUYsV0FBV25iLFNBQVgsRUFBc0IsRUFBdEIsQ0FBVjtBQUNBcWIsWUFBVUYsV0FBV25iLFNBQVgsRUFBc0IsQ0FBdEIsQ0FBVjtBQUNBO0FBQ0RxYixXQUFVVCxtQkFBb0I1YSxZQUFZLElBQWIsR0FBcUIsSUFBeEMsQ0FBVjtBQUNBLFFBQU9xYixNQUFQO0FBQ0E7O0FBRUQsU0FBUy9ELFVBQVQsQ0FBb0J6YyxNQUFwQixFQUE0QjdILElBQTVCLEVBQWtDO0FBQ2pDQSxRQUFPQSxRQUFRLEVBQWY7QUFDQSxLQUFJMmtCLFNBQVMsVUFBVTNrQixLQUFLMmtCLE1BQTVCOztBQUVBLEtBQUluWCxhQUFhcWEsV0FBV2hnQixNQUFYLENBQWpCO0FBQ0EsS0FBSWhOLFNBQVMyUyxXQUFXM1MsTUFBeEI7QUFDQSxLQUFJb1ksUUFBUSxDQUFDLENBQWI7QUFDQSxLQUFJakcsU0FBSjtBQUNBLEtBQUlzYixhQUFhLEVBQWpCO0FBQ0EsUUFBTyxFQUFFclYsS0FBRixHQUFVcFksTUFBakIsRUFBeUI7QUFDeEJtUyxjQUFZUSxXQUFXeUYsS0FBWCxDQUFaO0FBQ0FxVixnQkFBY0YsZ0JBQWdCcGIsU0FBaEIsRUFBMkIyWCxNQUEzQixDQUFkO0FBQ0E7QUFDRCxRQUFPMkQsVUFBUDtBQUNBOztBQUVEOztBQUVBLFNBQVNDLG9CQUFULEdBQWdDO0FBQy9CLEtBQUlDLGFBQWFDLFNBQWpCLEVBQTRCO0FBQzNCLFFBQU16cUIsTUFBTSxvQkFBTixDQUFOO0FBQ0E7O0FBRUQsS0FBSTBxQixtQkFBbUJqWCxVQUFVK1csU0FBVixJQUF1QixJQUE5QztBQUNBQTs7QUFFQSxLQUFJLENBQUNFLG1CQUFtQixJQUFwQixLQUE2QixJQUFqQyxFQUF1QztBQUN0QyxTQUFPQSxtQkFBbUIsSUFBMUI7QUFDQTs7QUFFRDtBQUNBLE9BQU0xcUIsTUFBTSwyQkFBTixDQUFOO0FBQ0E7O0FBRUQsU0FBUzJxQixZQUFULENBQXNCaEUsTUFBdEIsRUFBOEI7QUFDN0IsS0FBSWlFLEtBQUo7QUFDQSxLQUFJQyxLQUFKO0FBQ0EsS0FBSUMsS0FBSjtBQUNBLEtBQUlDLEtBQUo7QUFDQSxLQUFJL2IsU0FBSjs7QUFFQSxLQUFJd2IsWUFBWUMsU0FBaEIsRUFBMkI7QUFDMUIsUUFBTXpxQixNQUFNLG9CQUFOLENBQU47QUFDQTs7QUFFRCxLQUFJd3FCLGFBQWFDLFNBQWpCLEVBQTRCO0FBQzNCLFNBQU8sS0FBUDtBQUNBOztBQUVEO0FBQ0FHLFNBQVFuWCxVQUFVK1csU0FBVixJQUF1QixJQUEvQjtBQUNBQTs7QUFFQTtBQUNBLEtBQUksQ0FBQ0ksUUFBUSxJQUFULEtBQWtCLENBQXRCLEVBQXlCO0FBQ3hCLFNBQU9BLEtBQVA7QUFDQTs7QUFFRDtBQUNBLEtBQUksQ0FBQ0EsUUFBUSxJQUFULEtBQWtCLElBQXRCLEVBQTRCO0FBQzNCQyxVQUFRTixzQkFBUjtBQUNBdmIsY0FBYSxDQUFDNGIsUUFBUSxJQUFULEtBQWtCLENBQW5CLEdBQXdCQyxLQUFwQztBQUNBLE1BQUk3YixhQUFhLElBQWpCLEVBQXVCO0FBQ3RCLFVBQU9BLFNBQVA7QUFDQSxHQUZELE1BRU87QUFDTixTQUFNaFAsTUFBTSwyQkFBTixDQUFOO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLEtBQUksQ0FBQzRxQixRQUFRLElBQVQsS0FBa0IsSUFBdEIsRUFBNEI7QUFDM0JDLFVBQVFOLHNCQUFSO0FBQ0FPLFVBQVFQLHNCQUFSO0FBQ0F2YixjQUFhLENBQUM0YixRQUFRLElBQVQsS0FBa0IsRUFBbkIsR0FBMEJDLFNBQVMsQ0FBbkMsR0FBd0NDLEtBQXBEO0FBQ0EsTUFBSTliLGFBQWEsTUFBakIsRUFBeUI7QUFDeEIsVUFBT2liLGlCQUFpQmpiLFNBQWpCLEVBQTRCMlgsTUFBNUIsSUFBc0MzWCxTQUF0QyxHQUFrRCxNQUF6RDtBQUNBLEdBRkQsTUFFTztBQUNOLFNBQU1oUCxNQUFNLDJCQUFOLENBQU47QUFDQTtBQUNEOztBQUVEO0FBQ0EsS0FBSSxDQUFDNHFCLFFBQVEsSUFBVCxLQUFrQixJQUF0QixFQUE0QjtBQUMzQkMsVUFBUU4sc0JBQVI7QUFDQU8sVUFBUVAsc0JBQVI7QUFDQVEsVUFBUVIsc0JBQVI7QUFDQXZiLGNBQWEsQ0FBQzRiLFFBQVEsSUFBVCxLQUFrQixJQUFuQixHQUE0QkMsU0FBUyxJQUFyQyxHQUNWQyxTQUFTLElBREMsR0FDT0MsS0FEbkI7QUFFQSxNQUFJL2IsYUFBYSxRQUFiLElBQXlCQSxhQUFhLFFBQTFDLEVBQW9EO0FBQ25ELFVBQU9BLFNBQVA7QUFDQTtBQUNEOztBQUVELE9BQU1oUCxNQUFNLHdCQUFOLENBQU47QUFDQTs7QUFFRCxJQUFJeVQsU0FBSjtBQUNBLElBQUlnWCxTQUFKO0FBQ0EsSUFBSUQsU0FBSjtBQUNBLFNBQVMvQyxVQUFULENBQW9CNkMsVUFBcEIsRUFBZ0N0b0IsSUFBaEMsRUFBc0M7QUFDckNBLFFBQU9BLFFBQVEsRUFBZjtBQUNBLEtBQUkya0IsU0FBUyxVQUFVM2tCLEtBQUsya0IsTUFBNUI7O0FBRUFsVCxhQUFZb1csV0FBV1MsVUFBWCxDQUFaO0FBQ0FHLGFBQVloWCxVQUFVNVcsTUFBdEI7QUFDQTJ0QixhQUFZLENBQVo7QUFDQSxLQUFJaGIsYUFBYSxFQUFqQjtBQUNBLEtBQUkzSyxHQUFKO0FBQ0EsUUFBTyxDQUFDQSxNQUFNOGxCLGFBQWFoRSxNQUFiLENBQVAsTUFBaUMsS0FBeEMsRUFBK0M7QUFDOUNuWCxhQUFXbkssSUFBWCxDQUFnQlIsR0FBaEI7QUFDQTtBQUNELFFBQU9tbEIsV0FBV3hhLFVBQVgsQ0FBUDtBQUNBOztBQUVEaFAsT0FBT0MsT0FBUCxHQUFpQjtBQUNoQnVxQixVQUFTLE9BRE87QUFFaEIzbkIsU0FBUWlqQixVQUZRO0FBR2hCN2lCLFNBQVFna0I7QUFIUSxDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN01BOztBQUVBOzs7O0FBSUEsSUFBSWhnQixVQUFVdEgsbUJBQU9BLENBQUMseUVBQVIsQ0FBZDs7QUFFQSxJQUFJbUssV0FBV2xCLE9BQU8xTixTQUFQLENBQWlCNE8sUUFBaEM7QUFDQSxJQUFJMmdCLGlCQUFpQixPQUFPaGxCLElBQVAsS0FBZ0IsVUFBaEIsSUFDRyxPQUFPQSxJQUFQLEtBQWdCLFdBQWhCLElBQStCcUUsU0FBUzJDLElBQVQsQ0FBY2hILElBQWQsTUFBd0IsMEJBRC9FO0FBRUEsSUFBSWlsQixpQkFBaUIsT0FBT0MsSUFBUCxLQUFnQixVQUFoQixJQUNHLE9BQU9BLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0I3Z0IsU0FBUzJDLElBQVQsQ0FBY2tlLElBQWQsTUFBd0IsMEJBRC9FOztBQUdBOzs7O0FBSUEzcUIsT0FBT0MsT0FBUCxHQUFpQm9sQixTQUFqQjs7QUFFQTs7Ozs7Ozs7O0FBU0EsU0FBU0EsU0FBVCxDQUFvQjFiLEdBQXBCLEVBQXlCO0FBQ3ZCLE1BQUksQ0FBQ0EsR0FBRCxJQUFRLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUEzQixFQUFxQztBQUNuQyxXQUFPLEtBQVA7QUFDRDs7QUFFRCxNQUFJMUMsUUFBUTBDLEdBQVIsQ0FBSixFQUFrQjtBQUNoQixTQUFLLElBQUl2SSxJQUFJLENBQVIsRUFBV3lZLElBQUlsUSxJQUFJdE4sTUFBeEIsRUFBZ0MrRSxJQUFJeVksQ0FBcEMsRUFBdUN6WSxHQUF2QyxFQUE0QztBQUMxQyxVQUFJaWtCLFVBQVUxYixJQUFJdkksQ0FBSixDQUFWLENBQUosRUFBdUI7QUFDckIsZUFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNELFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUssT0FBTzhGLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE9BQU8wQyxRQUF2QyxJQUFtRDFDLE9BQU8wQyxRQUFQLENBQWdCRCxHQUFoQixDQUFwRCxJQUNELE9BQU8xSSxXQUFQLEtBQXVCLFVBQXZCLElBQXFDMEksZUFBZTFJLFdBRG5ELElBRUR3cEIsa0JBQWtCOWdCLGVBQWVsRSxJQUZoQyxJQUdEaWxCLGtCQUFrQi9nQixlQUFlZ2hCLElBSHBDLEVBSUU7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFRDtBQUNBLE1BQUloaEIsSUFBSXlFLE1BQUosSUFBYyxPQUFPekUsSUFBSXlFLE1BQVgsS0FBc0IsVUFBcEMsSUFBa0QzQyxVQUFVcFAsTUFBVixLQUFxQixDQUEzRSxFQUE4RTtBQUM1RSxXQUFPZ3BCLFVBQVUxYixJQUFJeUUsTUFBSixFQUFWLEVBQXdCLElBQXhCLENBQVA7QUFDRDs7QUFFRCxPQUFLLElBQUlzRixHQUFULElBQWdCL0osR0FBaEIsRUFBcUI7QUFDbkIsUUFBSWYsT0FBTzFOLFNBQVAsQ0FBaUIrYyxjQUFqQixDQUFnQ3hMLElBQWhDLENBQXFDOUMsR0FBckMsRUFBMEMrSixHQUExQyxLQUFrRDJSLFVBQVUxYixJQUFJK0osR0FBSixDQUFWLENBQXRELEVBQTJFO0FBQ3pFLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0RELElBQUk1SixXQUFXLEdBQUdBLFFBQWxCOztBQUVBOUosT0FBT0MsT0FBUCxHQUFpQjJELE1BQU1xRCxPQUFOLElBQWlCLFVBQVUzQyxHQUFWLEVBQWU7QUFDL0MsU0FBT3dGLFNBQVMyQyxJQUFULENBQWNuSSxHQUFkLEtBQXNCLGdCQUE3QjtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7Ozs7QUFRQSxJQUFJO0FBQ0Z0RSxTQUFPQyxPQUFQLEdBQWlCLE9BQU9vYixjQUFQLEtBQTBCLFdBQTFCLElBQ2YscUJBQXFCLElBQUlBLGNBQUosRUFEdkI7QUFFRCxDQUhELENBR0UsT0FBTzVhLEdBQVAsRUFBWTtBQUNaO0FBQ0E7QUFDQVQsU0FBT0MsT0FBUCxHQUFpQixLQUFqQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDaEJEQSxRQUFRNk0sSUFBUixHQUFlLFVBQVV4TCxNQUFWLEVBQWtCOEwsTUFBbEIsRUFBMEJ3ZCxJQUExQixFQUFnQ0MsSUFBaEMsRUFBc0NDLE1BQXRDLEVBQThDO0FBQzNELE1BQUlubEIsQ0FBSixFQUFPMEYsQ0FBUDtBQUNBLE1BQUkwZixPQUFRRCxTQUFTLENBQVYsR0FBZUQsSUFBZixHQUFzQixDQUFqQztBQUNBLE1BQUlHLE9BQU8sQ0FBQyxLQUFLRCxJQUFOLElBQWMsQ0FBekI7QUFDQSxNQUFJRSxRQUFRRCxRQUFRLENBQXBCO0FBQ0EsTUFBSUUsUUFBUSxDQUFDLENBQWI7QUFDQSxNQUFJOXBCLElBQUl3cEIsT0FBUUUsU0FBUyxDQUFqQixHQUFzQixDQUE5QjtBQUNBLE1BQUlLLElBQUlQLE9BQU8sQ0FBQyxDQUFSLEdBQVksQ0FBcEI7QUFDQSxNQUFJUSxJQUFJOXBCLE9BQU84TCxTQUFTaE0sQ0FBaEIsQ0FBUjs7QUFFQUEsT0FBSytwQixDQUFMOztBQUVBeGxCLE1BQUl5bEIsSUFBSyxDQUFDLEtBQU0sQ0FBQ0YsS0FBUixJQUFrQixDQUEzQjtBQUNBRSxRQUFPLENBQUNGLEtBQVI7QUFDQUEsV0FBU0gsSUFBVDtBQUNBLFNBQU9HLFFBQVEsQ0FBZixFQUFrQnZsQixJQUFLQSxJQUFJLEdBQUwsR0FBWXJFLE9BQU84TCxTQUFTaE0sQ0FBaEIsQ0FBaEIsRUFBb0NBLEtBQUsrcEIsQ0FBekMsRUFBNENELFNBQVMsQ0FBdkUsRUFBMEUsQ0FBRTs7QUFFNUU3ZixNQUFJMUYsSUFBSyxDQUFDLEtBQU0sQ0FBQ3VsQixLQUFSLElBQWtCLENBQTNCO0FBQ0F2bEIsUUFBTyxDQUFDdWxCLEtBQVI7QUFDQUEsV0FBU0wsSUFBVDtBQUNBLFNBQU9LLFFBQVEsQ0FBZixFQUFrQjdmLElBQUtBLElBQUksR0FBTCxHQUFZL0osT0FBTzhMLFNBQVNoTSxDQUFoQixDQUFoQixFQUFvQ0EsS0FBSytwQixDQUF6QyxFQUE0Q0QsU0FBUyxDQUF2RSxFQUEwRSxDQUFFOztBQUU1RSxNQUFJdmxCLE1BQU0sQ0FBVixFQUFhO0FBQ1hBLFFBQUksSUFBSXNsQixLQUFSO0FBQ0QsR0FGRCxNQUVPLElBQUl0bEIsTUFBTXFsQixJQUFWLEVBQWdCO0FBQ3JCLFdBQU8zZixJQUFJZ2dCLEdBQUosR0FBVyxDQUFDRCxJQUFJLENBQUMsQ0FBTCxHQUFTLENBQVYsSUFBZXJZLFFBQWpDO0FBQ0QsR0FGTSxNQUVBO0FBQ0wxSCxRQUFJQSxJQUFJckosS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWTRvQixJQUFaLENBQVI7QUFDQWxsQixRQUFJQSxJQUFJc2xCLEtBQVI7QUFDRDtBQUNELFNBQU8sQ0FBQ0csSUFBSSxDQUFDLENBQUwsR0FBUyxDQUFWLElBQWUvZixDQUFmLEdBQW1CckosS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWTBELElBQUlrbEIsSUFBaEIsQ0FBMUI7QUFDRCxDQS9CRDs7QUFpQ0E1cUIsUUFBUXVKLEtBQVIsR0FBZ0IsVUFBVWxJLE1BQVYsRUFBa0IrRyxLQUFsQixFQUF5QitFLE1BQXpCLEVBQWlDd2QsSUFBakMsRUFBdUNDLElBQXZDLEVBQTZDQyxNQUE3QyxFQUFxRDtBQUNuRSxNQUFJbmxCLENBQUosRUFBTzBGLENBQVAsRUFBVTZILENBQVY7QUFDQSxNQUFJNlgsT0FBUUQsU0FBUyxDQUFWLEdBQWVELElBQWYsR0FBc0IsQ0FBakM7QUFDQSxNQUFJRyxPQUFPLENBQUMsS0FBS0QsSUFBTixJQUFjLENBQXpCO0FBQ0EsTUFBSUUsUUFBUUQsUUFBUSxDQUFwQjtBQUNBLE1BQUlNLEtBQU1ULFNBQVMsRUFBVCxHQUFjN29CLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFiLElBQW1CRCxLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBYixDQUFqQyxHQUFvRCxDQUE5RDtBQUNBLE1BQUliLElBQUl3cEIsT0FBTyxDQUFQLEdBQVlFLFNBQVMsQ0FBN0I7QUFDQSxNQUFJSyxJQUFJUCxPQUFPLENBQVAsR0FBVyxDQUFDLENBQXBCO0FBQ0EsTUFBSVEsSUFBSS9pQixRQUFRLENBQVIsSUFBY0EsVUFBVSxDQUFWLElBQWUsSUFBSUEsS0FBSixHQUFZLENBQXpDLEdBQThDLENBQTlDLEdBQWtELENBQTFEOztBQUVBQSxVQUFRckcsS0FBS3VpQixHQUFMLENBQVNsYyxLQUFULENBQVI7O0FBRUEsTUFBSWtFLE1BQU1sRSxLQUFOLEtBQWdCQSxVQUFVMEssUUFBOUIsRUFBd0M7QUFDdEMxSCxRQUFJa0IsTUFBTWxFLEtBQU4sSUFBZSxDQUFmLEdBQW1CLENBQXZCO0FBQ0ExQyxRQUFJcWxCLElBQUo7QUFDRCxHQUhELE1BR087QUFDTHJsQixRQUFJM0QsS0FBS0ssS0FBTCxDQUFXTCxLQUFLNUMsR0FBTCxDQUFTaUosS0FBVCxJQUFrQnJHLEtBQUt1cEIsR0FBbEMsQ0FBSjtBQUNBLFFBQUlsakIsU0FBUzZLLElBQUlsUixLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMwRCxDQUFiLENBQWIsSUFBZ0MsQ0FBcEMsRUFBdUM7QUFDckNBO0FBQ0F1TixXQUFLLENBQUw7QUFDRDtBQUNELFFBQUl2TixJQUFJc2xCLEtBQUosSUFBYSxDQUFqQixFQUFvQjtBQUNsQjVpQixlQUFTaWpCLEtBQUtwWSxDQUFkO0FBQ0QsS0FGRCxNQUVPO0FBQ0w3SyxlQUFTaWpCLEtBQUt0cEIsS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWSxJQUFJZ3BCLEtBQWhCLENBQWQ7QUFDRDtBQUNELFFBQUk1aUIsUUFBUTZLLENBQVIsSUFBYSxDQUFqQixFQUFvQjtBQUNsQnZOO0FBQ0F1TixXQUFLLENBQUw7QUFDRDs7QUFFRCxRQUFJdk4sSUFBSXNsQixLQUFKLElBQWFELElBQWpCLEVBQXVCO0FBQ3JCM2YsVUFBSSxDQUFKO0FBQ0ExRixVQUFJcWxCLElBQUo7QUFDRCxLQUhELE1BR08sSUFBSXJsQixJQUFJc2xCLEtBQUosSUFBYSxDQUFqQixFQUFvQjtBQUN6QjVmLFVBQUksQ0FBRWhELFFBQVE2SyxDQUFULEdBQWMsQ0FBZixJQUFvQmxSLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVk0b0IsSUFBWixDQUF4QjtBQUNBbGxCLFVBQUlBLElBQUlzbEIsS0FBUjtBQUNELEtBSE0sTUFHQTtBQUNMNWYsVUFBSWhELFFBQVFyRyxLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZZ3BCLFFBQVEsQ0FBcEIsQ0FBUixHQUFpQ2pwQixLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZNG9CLElBQVosQ0FBckM7QUFDQWxsQixVQUFJLENBQUo7QUFDRDtBQUNGOztBQUVELFNBQU9rbEIsUUFBUSxDQUFmLEVBQWtCdnBCLE9BQU84TCxTQUFTaE0sQ0FBaEIsSUFBcUJpSyxJQUFJLElBQXpCLEVBQStCakssS0FBSytwQixDQUFwQyxFQUF1QzlmLEtBQUssR0FBNUMsRUFBaUR3ZixRQUFRLENBQTNFLEVBQThFLENBQUU7O0FBRWhGbGxCLE1BQUtBLEtBQUtrbEIsSUFBTixHQUFjeGYsQ0FBbEI7QUFDQTBmLFVBQVFGLElBQVI7QUFDQSxTQUFPRSxPQUFPLENBQWQsRUFBaUJ6cEIsT0FBTzhMLFNBQVNoTSxDQUFoQixJQUFxQnVFLElBQUksSUFBekIsRUFBK0J2RSxLQUFLK3BCLENBQXBDLEVBQXVDeGxCLEtBQUssR0FBNUMsRUFBaURvbEIsUUFBUSxDQUExRSxFQUE2RSxDQUFFOztBQUUvRXpwQixTQUFPOEwsU0FBU2hNLENBQVQsR0FBYStwQixDQUFwQixLQUEwQkMsSUFBSSxHQUE5QjtBQUNELENBbERELEM7Ozs7Ozs7Ozs7Ozs7O0FDaENBLElBQUlubkIsVUFBVSxHQUFHQSxPQUFqQjs7QUFFQWpFLE9BQU9DLE9BQVAsR0FBaUIsVUFBU3FFLEdBQVQsRUFBY3FGLEdBQWQsRUFBa0I7QUFDakMsTUFBSTFGLE9BQUosRUFBYSxPQUFPSyxJQUFJTCxPQUFKLENBQVkwRixHQUFaLENBQVA7QUFDYixPQUFLLElBQUl2SSxJQUFJLENBQWIsRUFBZ0JBLElBQUlrRCxJQUFJakksTUFBeEIsRUFBZ0MsRUFBRStFLENBQWxDLEVBQXFDO0FBQ25DLFFBQUlrRCxJQUFJbEQsQ0FBSixNQUFXdUksR0FBZixFQUFvQixPQUFPdkksQ0FBUDtBQUNyQjtBQUNELFNBQU8sQ0FBQyxDQUFSO0FBQ0QsQ0FORCxDOzs7Ozs7Ozs7Ozs7OztBQ0hBLElBQUkwSSxXQUFXLEdBQUdBLFFBQWxCOztBQUVBOUosT0FBT0MsT0FBUCxHQUFpQjJELE1BQU1xRCxPQUFOLElBQWlCLFVBQVUzQyxHQUFWLEVBQWU7QUFDL0MsU0FBT3dGLFNBQVMyQyxJQUFULENBQWNuSSxHQUFkLEtBQXNCLGdCQUE3QjtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7O0FBT0EsQ0FBRSxXQUFVa25CLE9BQVYsRUFBbUI7QUFDcEIsS0FBSUMsMkJBQTJCLEtBQS9CO0FBQ0EsS0FBSSxJQUFKLEVBQWdEO0FBQy9DQyxzQ0FBT0YsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FDLDZCQUEyQixJQUEzQjtBQUNBO0FBQ0QsS0FBSSw4QkFBT3hyQixPQUFQLE9BQW1CLFFBQXZCLEVBQWlDO0FBQ2hDRCxTQUFPQyxPQUFQLEdBQWlCdXJCLFNBQWpCO0FBQ0FDLDZCQUEyQixJQUEzQjtBQUNBO0FBQ0QsS0FBSSxDQUFDQSx3QkFBTCxFQUErQjtBQUM5QixNQUFJRSxhQUFhN3ZCLE9BQU80RCxPQUF4QjtBQUNBLE1BQUlrc0IsTUFBTTl2QixPQUFPNEQsT0FBUCxHQUFpQjhyQixTQUEzQjtBQUNBSSxNQUFJQyxVQUFKLEdBQWlCLFlBQVk7QUFDNUIvdkIsVUFBTzRELE9BQVAsR0FBaUJpc0IsVUFBakI7QUFDQSxVQUFPQyxHQUFQO0FBQ0EsR0FIRDtBQUlBO0FBQ0QsQ0FsQkMsRUFrQkEsWUFBWTtBQUNiLFVBQVNFLE1BQVQsR0FBbUI7QUFDbEIsTUFBSTFxQixJQUFJLENBQVI7QUFDQSxNQUFJVixTQUFTLEVBQWI7QUFDQSxTQUFPVSxJQUFJcUssVUFBVXBQLE1BQXJCLEVBQTZCK0UsR0FBN0IsRUFBa0M7QUFDakMsT0FBSTJxQixhQUFhdGdCLFVBQVdySyxDQUFYLENBQWpCO0FBQ0EsUUFBSyxJQUFJc1MsR0FBVCxJQUFnQnFZLFVBQWhCLEVBQTRCO0FBQzNCcnJCLFdBQU9nVCxHQUFQLElBQWNxWSxXQUFXclksR0FBWCxDQUFkO0FBQ0E7QUFDRDtBQUNELFNBQU9oVCxNQUFQO0FBQ0E7O0FBRUQsVUFBU3VrQixJQUFULENBQWUrRyxTQUFmLEVBQTBCO0FBQ3pCLFdBQVNKLEdBQVQsQ0FBY2xZLEdBQWQsRUFBbUJyTCxLQUFuQixFQUEwQjBqQixVQUExQixFQUFzQztBQUNyQyxPQUFJcnJCLE1BQUo7QUFDQSxPQUFJLE9BQU9oRixRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ3BDO0FBQ0E7O0FBRUQ7O0FBRUEsT0FBSStQLFVBQVVwUCxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3pCMHZCLGlCQUFhRCxPQUFPO0FBQ25COXZCLFdBQU07QUFEYSxLQUFQLEVBRVY0dkIsSUFBSUssUUFGTSxFQUVJRixVQUZKLENBQWI7O0FBSUEsUUFBSSxPQUFPQSxXQUFXaHNCLE9BQWxCLEtBQThCLFFBQWxDLEVBQTRDO0FBQzNDLFNBQUlBLFVBQVUsSUFBSTNCLElBQUosRUFBZDtBQUNBMkIsYUFBUW1zQixlQUFSLENBQXdCbnNCLFFBQVFvc0IsZUFBUixLQUE0QkosV0FBV2hzQixPQUFYLEdBQXFCLE1BQXpFO0FBQ0Fnc0IsZ0JBQVdoc0IsT0FBWCxHQUFxQkEsT0FBckI7QUFDQTs7QUFFRDtBQUNBZ3NCLGVBQVdoc0IsT0FBWCxHQUFxQmdzQixXQUFXaHNCLE9BQVgsR0FBcUJnc0IsV0FBV2hzQixPQUFYLENBQW1CcXNCLFdBQW5CLEVBQXJCLEdBQXdELEVBQTdFOztBQUVBLFFBQUk7QUFDSDFyQixjQUFTcVosS0FBS2lKLFNBQUwsQ0FBZTNhLEtBQWYsQ0FBVDtBQUNBLFNBQUksVUFBVWdWLElBQVYsQ0FBZTNjLE1BQWYsQ0FBSixFQUE0QjtBQUMzQjJILGNBQVEzSCxNQUFSO0FBQ0E7QUFDRCxLQUxELENBS0UsT0FBT2lGLENBQVAsRUFBVSxDQUFFOztBQUVkLFFBQUksQ0FBQ3FtQixVQUFVeGlCLEtBQWYsRUFBc0I7QUFDckJuQixhQUFRZ2tCLG1CQUFtQmxpQixPQUFPOUIsS0FBUCxDQUFuQixFQUNOdUssT0FETSxDQUNFLDJEQURGLEVBQytEMFosa0JBRC9ELENBQVI7QUFFQSxLQUhELE1BR087QUFDTmprQixhQUFRMmpCLFVBQVV4aUIsS0FBVixDQUFnQm5CLEtBQWhCLEVBQXVCcUwsR0FBdkIsQ0FBUjtBQUNBOztBQUVEQSxVQUFNMlksbUJBQW1CbGlCLE9BQU91SixHQUFQLENBQW5CLENBQU47QUFDQUEsVUFBTUEsSUFBSWQsT0FBSixDQUFZLDBCQUFaLEVBQXdDMFosa0JBQXhDLENBQU47QUFDQTVZLFVBQU1BLElBQUlkLE9BQUosQ0FBWSxTQUFaLEVBQXVCMlosTUFBdkIsQ0FBTjs7QUFFQSxRQUFJQyx3QkFBd0IsRUFBNUI7O0FBRUEsU0FBSyxJQUFJQyxhQUFULElBQTBCVixVQUExQixFQUFzQztBQUNyQyxTQUFJLENBQUNBLFdBQVdVLGFBQVgsQ0FBTCxFQUFnQztBQUMvQjtBQUNBO0FBQ0RELDhCQUF5QixPQUFPQyxhQUFoQztBQUNBLFNBQUlWLFdBQVdVLGFBQVgsTUFBOEIsSUFBbEMsRUFBd0M7QUFDdkM7QUFDQTtBQUNERCw4QkFBeUIsTUFBTVQsV0FBV1UsYUFBWCxDQUEvQjtBQUNBO0FBQ0QsV0FBUS93QixTQUFTZ3hCLE1BQVQsR0FBa0JoWixNQUFNLEdBQU4sR0FBWXJMLEtBQVosR0FBb0Jta0IscUJBQTlDO0FBQ0E7O0FBRUQ7O0FBRUEsT0FBSSxDQUFDOVksR0FBTCxFQUFVO0FBQ1RoVCxhQUFTLEVBQVQ7QUFDQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxPQUFJaXNCLFVBQVVqeEIsU0FBU2d4QixNQUFULEdBQWtCaHhCLFNBQVNneEIsTUFBVCxDQUFnQnhILEtBQWhCLENBQXNCLElBQXRCLENBQWxCLEdBQWdELEVBQTlEO0FBQ0EsT0FBSTBILFVBQVUsa0JBQWQ7QUFDQSxPQUFJeHJCLElBQUksQ0FBUjs7QUFFQSxVQUFPQSxJQUFJdXJCLFFBQVF0d0IsTUFBbkIsRUFBMkIrRSxHQUEzQixFQUFnQztBQUMvQixRQUFJNEQsUUFBUTJuQixRQUFRdnJCLENBQVIsRUFBVzhqQixLQUFYLENBQWlCLEdBQWpCLENBQVo7QUFDQSxRQUFJd0gsU0FBUzFuQixNQUFNaEUsS0FBTixDQUFZLENBQVosRUFBZThELElBQWYsQ0FBb0IsR0FBcEIsQ0FBYjs7QUFFQSxRQUFJLENBQUMsS0FBSytuQixJQUFOLElBQWNILE9BQU94RixNQUFQLENBQWMsQ0FBZCxNQUFxQixHQUF2QyxFQUE0QztBQUMzQ3dGLGNBQVNBLE9BQU8xckIsS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBQyxDQUFqQixDQUFUO0FBQ0E7O0FBRUQsUUFBSTtBQUNILFNBQUl5VyxPQUFPelMsTUFBTSxDQUFOLEVBQVM0TixPQUFULENBQWlCZ2EsT0FBakIsRUFBMEJOLGtCQUExQixDQUFYO0FBQ0FJLGNBQVNWLFVBQVVsZixJQUFWLEdBQ1JrZixVQUFVbGYsSUFBVixDQUFlNGYsTUFBZixFQUF1QmpWLElBQXZCLENBRFEsR0FDdUJ1VSxVQUFVVSxNQUFWLEVBQWtCalYsSUFBbEIsS0FDL0JpVixPQUFPOVosT0FBUCxDQUFlZ2EsT0FBZixFQUF3Qk4sa0JBQXhCLENBRkQ7O0FBSUEsU0FBSSxLQUFLTyxJQUFULEVBQWU7QUFDZCxVQUFJO0FBQ0hILGdCQUFTM1MsS0FBS0MsS0FBTCxDQUFXMFMsTUFBWCxDQUFUO0FBQ0EsT0FGRCxDQUVFLE9BQU8vbUIsQ0FBUCxFQUFVLENBQUU7QUFDZDs7QUFFRCxTQUFJK04sUUFBUStELElBQVosRUFBa0I7QUFDakIvVyxlQUFTZ3NCLE1BQVQ7QUFDQTtBQUNBOztBQUVELFNBQUksQ0FBQ2haLEdBQUwsRUFBVTtBQUNUaFQsYUFBTytXLElBQVAsSUFBZWlWLE1BQWY7QUFDQTtBQUNELEtBcEJELENBb0JFLE9BQU8vbUIsQ0FBUCxFQUFVLENBQUU7QUFDZDs7QUFFRCxVQUFPakYsTUFBUDtBQUNBOztBQUVEa3JCLE1BQUk5ckIsR0FBSixHQUFVOHJCLEdBQVY7QUFDQUEsTUFBSS9yQixHQUFKLEdBQVUsVUFBVTZULEdBQVYsRUFBZTtBQUN4QixVQUFPa1ksSUFBSW5mLElBQUosQ0FBU21mLEdBQVQsRUFBY2xZLEdBQWQsQ0FBUDtBQUNBLEdBRkQ7QUFHQWtZLE1BQUlrQixPQUFKLEdBQWMsWUFBWTtBQUN6QixVQUFPbEIsSUFBSWxnQixLQUFKLENBQVU7QUFDaEJtaEIsVUFBTTtBQURVLElBQVYsRUFFSixHQUFHN3JCLEtBQUgsQ0FBU3lMLElBQVQsQ0FBY2hCLFNBQWQsQ0FGSSxDQUFQO0FBR0EsR0FKRDtBQUtBbWdCLE1BQUlLLFFBQUosR0FBZSxFQUFmOztBQUVBTCxNQUFJbUIsTUFBSixHQUFhLFVBQVVyWixHQUFWLEVBQWVxWSxVQUFmLEVBQTJCO0FBQ3ZDSCxPQUFJbFksR0FBSixFQUFTLEVBQVQsRUFBYW9ZLE9BQU9DLFVBQVAsRUFBbUI7QUFDL0Joc0IsYUFBUyxDQUFDO0FBRHFCLElBQW5CLENBQWI7QUFHQSxHQUpEOztBQU1BNnJCLE1BQUlvQixhQUFKLEdBQW9CL0gsSUFBcEI7O0FBRUEsU0FBTzJHLEdBQVA7QUFDQTs7QUFFRCxRQUFPM0csS0FBSyxZQUFZLENBQUUsQ0FBbkIsQ0FBUDtBQUNBLENBN0pDLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BEOzs7O0FBSUEsSUFBSW1HLElBQUksSUFBUjtBQUNBLElBQUkvZixJQUFJK2YsSUFBSSxFQUFaO0FBQ0EsSUFBSTZCLElBQUk1aEIsSUFBSSxFQUFaO0FBQ0EsSUFBSThmLElBQUk4QixJQUFJLEVBQVo7QUFDQSxJQUFJL2lCLElBQUlpaEIsSUFBSSxNQUFaOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNBbnJCLE9BQU9DLE9BQVAsR0FBaUIsVUFBU29NLEdBQVQsRUFBYzVGLE9BQWQsRUFBdUI7QUFDdENBLFlBQVVBLFdBQVcsRUFBckI7QUFDQSxNQUFJSSxjQUFjd0YsR0FBZCx5Q0FBY0EsR0FBZCxDQUFKO0FBQ0EsTUFBSXhGLFNBQVMsUUFBVCxJQUFxQndGLElBQUloUSxNQUFKLEdBQWEsQ0FBdEMsRUFBeUM7QUFDdkMsV0FBTzJkLE1BQU0zTixHQUFOLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSXhGLFNBQVMsUUFBVCxJQUFxQjBGLE1BQU1GLEdBQU4sTUFBZSxLQUF4QyxFQUErQztBQUNwRCxXQUFPNUYsUUFBUXltQixJQUFSLEdBQWVDLFFBQVE5Z0IsR0FBUixDQUFmLEdBQThCK2dCLFNBQVMvZ0IsR0FBVCxDQUFyQztBQUNEO0FBQ0QsUUFBTSxJQUFJN00sS0FBSixDQUNKLDBEQUNFdWEsS0FBS2lKLFNBQUwsQ0FBZTNXLEdBQWYsQ0FGRSxDQUFOO0FBSUQsQ0FaRDs7QUFjQTs7Ozs7Ozs7QUFRQSxTQUFTMk4sS0FBVCxDQUFlbk8sR0FBZixFQUFvQjtBQUNsQkEsUUFBTTFCLE9BQU8wQixHQUFQLENBQU47QUFDQSxNQUFJQSxJQUFJeFAsTUFBSixHQUFhLEdBQWpCLEVBQXNCO0FBQ3BCO0FBQ0Q7QUFDRCxNQUFJeVAsUUFBUSx3SEFBd0h1aEIsSUFBeEgsQ0FDVnhoQixHQURVLENBQVo7QUFHQSxNQUFJLENBQUNDLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7QUFDRCxNQUFJVixJQUFJa2lCLFdBQVd4aEIsTUFBTSxDQUFOLENBQVgsQ0FBUjtBQUNBLE1BQUlqRixPQUFPLENBQUNpRixNQUFNLENBQU4sS0FBWSxJQUFiLEVBQW1CMUIsV0FBbkIsRUFBWDtBQUNBLFVBQVF2RCxJQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0EsU0FBSyxLQUFMO0FBQ0EsU0FBSyxJQUFMO0FBQ0EsU0FBSyxHQUFMO0FBQ0UsYUFBT3VFLElBQUlsQixDQUFYO0FBQ0YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxLQUFMO0FBQ0EsU0FBSyxHQUFMO0FBQ0UsYUFBT2tCLElBQUkrZixDQUFYO0FBQ0YsU0FBSyxPQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0EsU0FBSyxLQUFMO0FBQ0EsU0FBSyxJQUFMO0FBQ0EsU0FBSyxHQUFMO0FBQ0UsYUFBTy9mLElBQUk2aEIsQ0FBWDtBQUNGLFNBQUssU0FBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssR0FBTDtBQUNFLGFBQU83aEIsSUFBSUMsQ0FBWDtBQUNGLFNBQUssU0FBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssR0FBTDtBQUNFLGFBQU9ELElBQUlnZ0IsQ0FBWDtBQUNGLFNBQUssY0FBTDtBQUNBLFNBQUssYUFBTDtBQUNBLFNBQUssT0FBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssSUFBTDtBQUNFLGFBQU9oZ0IsQ0FBUDtBQUNGO0FBQ0UsYUFBT3JFLFNBQVA7QUFwQ0o7QUFzQ0Q7O0FBRUQ7Ozs7Ozs7O0FBUUEsU0FBU3FtQixRQUFULENBQWtCM3JCLEVBQWxCLEVBQXNCO0FBQ3BCLE1BQUlBLE1BQU0wcEIsQ0FBVixFQUFhO0FBQ1gsV0FBT25wQixLQUFLdXJCLEtBQUwsQ0FBVzlyQixLQUFLMHBCLENBQWhCLElBQXFCLEdBQTVCO0FBQ0Q7QUFDRCxNQUFJMXBCLE1BQU13ckIsQ0FBVixFQUFhO0FBQ1gsV0FBT2pyQixLQUFLdXJCLEtBQUwsQ0FBVzlyQixLQUFLd3JCLENBQWhCLElBQXFCLEdBQTVCO0FBQ0Q7QUFDRCxNQUFJeHJCLE1BQU00SixDQUFWLEVBQWE7QUFDWCxXQUFPckosS0FBS3VyQixLQUFMLENBQVc5ckIsS0FBSzRKLENBQWhCLElBQXFCLEdBQTVCO0FBQ0Q7QUFDRCxNQUFJNUosTUFBTTJwQixDQUFWLEVBQWE7QUFDWCxXQUFPcHBCLEtBQUt1ckIsS0FBTCxDQUFXOXJCLEtBQUsycEIsQ0FBaEIsSUFBcUIsR0FBNUI7QUFDRDtBQUNELFNBQU8zcEIsS0FBSyxJQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O0FBUUEsU0FBUzByQixPQUFULENBQWlCMXJCLEVBQWpCLEVBQXFCO0FBQ25CLFNBQU8rckIsT0FBTy9yQixFQUFQLEVBQVcwcEIsQ0FBWCxFQUFjLEtBQWQsS0FDTHFDLE9BQU8vckIsRUFBUCxFQUFXd3JCLENBQVgsRUFBYyxNQUFkLENBREssSUFFTE8sT0FBTy9yQixFQUFQLEVBQVc0SixDQUFYLEVBQWMsUUFBZCxDQUZLLElBR0xtaUIsT0FBTy9yQixFQUFQLEVBQVcycEIsQ0FBWCxFQUFjLFFBQWQsQ0FISyxJQUlMM3BCLEtBQUssS0FKUDtBQUtEOztBQUVEOzs7O0FBSUEsU0FBUytyQixNQUFULENBQWdCL3JCLEVBQWhCLEVBQW9CMkosQ0FBcEIsRUFBdUJxTSxJQUF2QixFQUE2QjtBQUMzQixNQUFJaFcsS0FBSzJKLENBQVQsRUFBWTtBQUNWO0FBQ0Q7QUFDRCxNQUFJM0osS0FBSzJKLElBQUksR0FBYixFQUFrQjtBQUNoQixXQUFPcEosS0FBS0ssS0FBTCxDQUFXWixLQUFLMkosQ0FBaEIsSUFBcUIsR0FBckIsR0FBMkJxTSxJQUFsQztBQUNEO0FBQ0QsU0FBT3pWLEtBQUt5ckIsSUFBTCxDQUFVaHNCLEtBQUsySixDQUFmLElBQW9CLEdBQXBCLEdBQTBCcU0sSUFBMUIsR0FBaUMsR0FBeEM7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ3ZKRDs7Ozs7Ozs7QUFRQXhYLFFBQVE0QyxNQUFSLEdBQWlCLFVBQVU4RyxHQUFWLEVBQWU7QUFDOUIsTUFBSWtDLE1BQU0sRUFBVjs7QUFFQSxPQUFLLElBQUl6SyxDQUFULElBQWN1SSxHQUFkLEVBQW1CO0FBQ2pCLFFBQUlBLElBQUlzTyxjQUFKLENBQW1CN1csQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QixVQUFJeUssSUFBSXhQLE1BQVIsRUFBZ0J3UCxPQUFPLEdBQVA7QUFDaEJBLGFBQU93Z0IsbUJBQW1CanJCLENBQW5CLElBQXdCLEdBQXhCLEdBQThCaXJCLG1CQUFtQjFpQixJQUFJdkksQ0FBSixDQUFuQixDQUFyQztBQUNEO0FBQ0Y7O0FBRUQsU0FBT3lLLEdBQVA7QUFDRCxDQVhEOztBQWFBOzs7Ozs7O0FBT0E1TCxRQUFRZ0QsTUFBUixHQUFpQixVQUFTeXFCLEVBQVQsRUFBWTtBQUMzQixNQUFJQyxNQUFNLEVBQVY7QUFDQSxNQUFJQyxRQUFRRixHQUFHeEksS0FBSCxDQUFTLEdBQVQsQ0FBWjtBQUNBLE9BQUssSUFBSTlqQixJQUFJLENBQVIsRUFBV3lZLElBQUkrVCxNQUFNdnhCLE1BQTFCLEVBQWtDK0UsSUFBSXlZLENBQXRDLEVBQXlDelksR0FBekMsRUFBOEM7QUFDNUMsUUFBSXlzQixPQUFPRCxNQUFNeHNCLENBQU4sRUFBUzhqQixLQUFULENBQWUsR0FBZixDQUFYO0FBQ0F5SSxRQUFJckIsbUJBQW1CdUIsS0FBSyxDQUFMLENBQW5CLENBQUosSUFBbUN2QixtQkFBbUJ1QixLQUFLLENBQUwsQ0FBbkIsQ0FBbkM7QUFDRDtBQUNELFNBQU9GLEdBQVA7QUFDRCxDQVJELEM7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOzs7Ozs7O0FBT0EsSUFBSUcsS0FBSyx5T0FBVDs7QUFFQSxJQUFJOW9CLFFBQVEsQ0FDUixRQURRLEVBQ0UsVUFERixFQUNjLFdBRGQsRUFDMkIsVUFEM0IsRUFDdUMsTUFEdkMsRUFDK0MsVUFEL0MsRUFDMkQsTUFEM0QsRUFDbUUsTUFEbkUsRUFDMkUsVUFEM0UsRUFDdUYsTUFEdkYsRUFDK0YsV0FEL0YsRUFDNEcsTUFENUcsRUFDb0gsT0FEcEgsRUFDNkgsUUFEN0gsQ0FBWjs7QUFJQWhGLE9BQU9DLE9BQVAsR0FBaUIsU0FBU3lVLFFBQVQsQ0FBa0I3SSxHQUFsQixFQUF1QjtBQUNwQyxRQUFJd0gsTUFBTXhILEdBQVY7QUFBQSxRQUNJaEcsSUFBSWdHLElBQUk1SCxPQUFKLENBQVksR0FBWixDQURSO0FBQUEsUUFFSTBCLElBQUlrRyxJQUFJNUgsT0FBSixDQUFZLEdBQVosQ0FGUjs7QUFJQSxRQUFJNEIsS0FBSyxDQUFDLENBQU4sSUFBV0YsS0FBSyxDQUFDLENBQXJCLEVBQXdCO0FBQ3BCa0csY0FBTUEsSUFBSTdJLFNBQUosQ0FBYyxDQUFkLEVBQWlCNkMsQ0FBakIsSUFBc0JnRyxJQUFJN0ksU0FBSixDQUFjNkMsQ0FBZCxFQUFpQkYsQ0FBakIsRUFBb0JpTixPQUFwQixDQUE0QixJQUE1QixFQUFrQyxHQUFsQyxDQUF0QixHQUErRC9HLElBQUk3SSxTQUFKLENBQWMyQyxDQUFkLEVBQWlCa0csSUFBSXhQLE1BQXJCLENBQXJFO0FBQ0g7O0FBRUQsUUFBSWdQLElBQUl5aUIsR0FBR1QsSUFBSCxDQUFReGhCLE9BQU8sRUFBZixDQUFSO0FBQUEsUUFDSWdKLE1BQU0sRUFEVjtBQUFBLFFBRUl6VCxJQUFJLEVBRlI7O0FBSUEsV0FBT0EsR0FBUCxFQUFZO0FBQ1J5VCxZQUFJN1AsTUFBTTVELENBQU4sQ0FBSixJQUFnQmlLLEVBQUVqSyxDQUFGLEtBQVEsRUFBeEI7QUFDSDs7QUFFRCxRQUFJeUUsS0FBSyxDQUFDLENBQU4sSUFBV0YsS0FBSyxDQUFDLENBQXJCLEVBQXdCO0FBQ3BCa1AsWUFBSWtaLE1BQUosR0FBYTFhLEdBQWI7QUFDQXdCLFlBQUlFLElBQUosR0FBV0YsSUFBSUUsSUFBSixDQUFTL1IsU0FBVCxDQUFtQixDQUFuQixFQUFzQjZSLElBQUlFLElBQUosQ0FBUzFZLE1BQVQsR0FBa0IsQ0FBeEMsRUFBMkN1VyxPQUEzQyxDQUFtRCxJQUFuRCxFQUF5RCxHQUF6RCxDQUFYO0FBQ0FpQyxZQUFJbVosU0FBSixHQUFnQm5aLElBQUltWixTQUFKLENBQWNwYixPQUFkLENBQXNCLEdBQXRCLEVBQTJCLEVBQTNCLEVBQStCQSxPQUEvQixDQUF1QyxHQUF2QyxFQUE0QyxFQUE1QyxFQUFnREEsT0FBaEQsQ0FBd0QsSUFBeEQsRUFBOEQsR0FBOUQsQ0FBaEI7QUFDQWlDLFlBQUlvWixPQUFKLEdBQWMsSUFBZDtBQUNIOztBQUVELFdBQU9wWixHQUFQO0FBQ0gsQ0F6QkQsQzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBLElBQUl5TixVQUFVdGlCLE9BQU9DLE9BQVAsR0FBaUIsRUFBL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSWl1QixnQkFBSjtBQUNBLElBQUlDLGtCQUFKOztBQUVBLFNBQVNDLGdCQUFULEdBQTRCO0FBQ3hCLFVBQU0sSUFBSTV1QixLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNIO0FBQ0QsU0FBUzZ1QixtQkFBVCxHQUFnQztBQUM1QixVQUFNLElBQUk3dUIsS0FBSixDQUFVLG1DQUFWLENBQU47QUFDSDtBQUNBLGFBQVk7QUFDVCxRQUFJO0FBQ0EsWUFBSSxPQUFPMFksVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNsQ2dXLCtCQUFtQmhXLFVBQW5CO0FBQ0gsU0FGRCxNQUVPO0FBQ0hnVywrQkFBbUJFLGdCQUFuQjtBQUNIO0FBQ0osS0FORCxDQU1FLE9BQU96b0IsQ0FBUCxFQUFVO0FBQ1J1b0IsMkJBQW1CRSxnQkFBbkI7QUFDSDtBQUNELFFBQUk7QUFDQSxZQUFJLE9BQU8vVCxZQUFQLEtBQXdCLFVBQTVCLEVBQXdDO0FBQ3BDOFQsaUNBQXFCOVQsWUFBckI7QUFDSCxTQUZELE1BRU87QUFDSDhULGlDQUFxQkUsbUJBQXJCO0FBQ0g7QUFDSixLQU5ELENBTUUsT0FBTzFvQixDQUFQLEVBQVU7QUFDUndvQiw2QkFBcUJFLG1CQUFyQjtBQUNIO0FBQ0osQ0FuQkEsR0FBRDtBQW9CQSxTQUFTQyxVQUFULENBQW9CQyxHQUFwQixFQUF5QjtBQUNyQixRQUFJTCxxQkFBcUJoVyxVQUF6QixFQUFxQztBQUNqQztBQUNBLGVBQU9BLFdBQVdxVyxHQUFYLEVBQWdCLENBQWhCLENBQVA7QUFDSDtBQUNEO0FBQ0EsUUFBSSxDQUFDTCxxQkFBcUJFLGdCQUFyQixJQUF5QyxDQUFDRixnQkFBM0MsS0FBZ0VoVyxVQUFwRSxFQUFnRjtBQUM1RWdXLDJCQUFtQmhXLFVBQW5CO0FBQ0EsZUFBT0EsV0FBV3FXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUNIO0FBQ0QsUUFBSTtBQUNBO0FBQ0EsZUFBT0wsaUJBQWlCSyxHQUFqQixFQUFzQixDQUF0QixDQUFQO0FBQ0gsS0FIRCxDQUdFLE9BQU01b0IsQ0FBTixFQUFRO0FBQ04sWUFBSTtBQUNBO0FBQ0EsbUJBQU91b0IsaUJBQWlCemhCLElBQWpCLENBQXNCLElBQXRCLEVBQTRCOGhCLEdBQTVCLEVBQWlDLENBQWpDLENBQVA7QUFDSCxTQUhELENBR0UsT0FBTTVvQixDQUFOLEVBQVE7QUFDTjtBQUNBLG1CQUFPdW9CLGlCQUFpQnpoQixJQUFqQixDQUFzQixJQUF0QixFQUE0QjhoQixHQUE1QixFQUFpQyxDQUFqQyxDQUFQO0FBQ0g7QUFDSjtBQUdKO0FBQ0QsU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDN0IsUUFBSU4sdUJBQXVCOVQsWUFBM0IsRUFBeUM7QUFDckM7QUFDQSxlQUFPQSxhQUFhb1UsTUFBYixDQUFQO0FBQ0g7QUFDRDtBQUNBLFFBQUksQ0FBQ04sdUJBQXVCRSxtQkFBdkIsSUFBOEMsQ0FBQ0Ysa0JBQWhELEtBQXVFOVQsWUFBM0UsRUFBeUY7QUFDckY4VCw2QkFBcUI5VCxZQUFyQjtBQUNBLGVBQU9BLGFBQWFvVSxNQUFiLENBQVA7QUFDSDtBQUNELFFBQUk7QUFDQTtBQUNBLGVBQU9OLG1CQUFtQk0sTUFBbkIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFPOW9CLENBQVAsRUFBUztBQUNQLFlBQUk7QUFDQTtBQUNBLG1CQUFPd29CLG1CQUFtQjFoQixJQUFuQixDQUF3QixJQUF4QixFQUE4QmdpQixNQUE5QixDQUFQO0FBQ0gsU0FIRCxDQUdFLE9BQU85b0IsQ0FBUCxFQUFTO0FBQ1A7QUFDQTtBQUNBLG1CQUFPd29CLG1CQUFtQjFoQixJQUFuQixDQUF3QixJQUF4QixFQUE4QmdpQixNQUE5QixDQUFQO0FBQ0g7QUFDSjtBQUlKO0FBQ0QsSUFBSUMsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsV0FBVyxLQUFmO0FBQ0EsSUFBSUMsWUFBSjtBQUNBLElBQUlDLGFBQWEsQ0FBQyxDQUFsQjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3ZCLFFBQUksQ0FBQ0gsUUFBRCxJQUFhLENBQUNDLFlBQWxCLEVBQWdDO0FBQzVCO0FBQ0g7QUFDREQsZUFBVyxLQUFYO0FBQ0EsUUFBSUMsYUFBYXZ5QixNQUFqQixFQUF5QjtBQUNyQnF5QixnQkFBUUUsYUFBYXZrQixNQUFiLENBQW9CcWtCLEtBQXBCLENBQVI7QUFDSCxLQUZELE1BRU87QUFDSEcscUJBQWEsQ0FBQyxDQUFkO0FBQ0g7QUFDRCxRQUFJSCxNQUFNcnlCLE1BQVYsRUFBa0I7QUFDZDB5QjtBQUNIO0FBQ0o7O0FBRUQsU0FBU0EsVUFBVCxHQUFzQjtBQUNsQixRQUFJSixRQUFKLEVBQWM7QUFDVjtBQUNIO0FBQ0QsUUFBSXZVLFVBQVVrVSxXQUFXUSxlQUFYLENBQWQ7QUFDQUgsZUFBVyxJQUFYOztBQUVBLFFBQUk3ckIsTUFBTTRyQixNQUFNcnlCLE1BQWhCO0FBQ0EsV0FBTXlHLEdBQU4sRUFBVztBQUNQOHJCLHVCQUFlRixLQUFmO0FBQ0FBLGdCQUFRLEVBQVI7QUFDQSxlQUFPLEVBQUVHLFVBQUYsR0FBZS9yQixHQUF0QixFQUEyQjtBQUN2QixnQkFBSThyQixZQUFKLEVBQWtCO0FBQ2RBLDZCQUFhQyxVQUFiLEVBQXlCRyxHQUF6QjtBQUNIO0FBQ0o7QUFDREgscUJBQWEsQ0FBQyxDQUFkO0FBQ0EvckIsY0FBTTRyQixNQUFNcnlCLE1BQVo7QUFDSDtBQUNEdXlCLG1CQUFlLElBQWY7QUFDQUQsZUFBVyxLQUFYO0FBQ0FILG9CQUFnQnBVLE9BQWhCO0FBQ0g7O0FBRURrSSxRQUFRMk0sUUFBUixHQUFtQixVQUFVVixHQUFWLEVBQWU7QUFDOUIsUUFBSWhiLE9BQU8sSUFBSTNQLEtBQUosQ0FBVTZILFVBQVVwUCxNQUFWLEdBQW1CLENBQTdCLENBQVg7QUFDQSxRQUFJb1AsVUFBVXBQLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsYUFBSyxJQUFJK0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcUssVUFBVXBQLE1BQTlCLEVBQXNDK0UsR0FBdEMsRUFBMkM7QUFDdkNtUyxpQkFBS25TLElBQUksQ0FBVCxJQUFjcUssVUFBVXJLLENBQVYsQ0FBZDtBQUNIO0FBQ0o7QUFDRHN0QixVQUFNN3BCLElBQU4sQ0FBVyxJQUFJcXFCLElBQUosQ0FBU1gsR0FBVCxFQUFjaGIsSUFBZCxDQUFYO0FBQ0EsUUFBSW1iLE1BQU1yeUIsTUFBTixLQUFpQixDQUFqQixJQUFzQixDQUFDc3lCLFFBQTNCLEVBQXFDO0FBQ2pDTCxtQkFBV1MsVUFBWDtBQUNIO0FBQ0osQ0FYRDs7QUFhQTtBQUNBLFNBQVNHLElBQVQsQ0FBY1gsR0FBZCxFQUFtQjdrQixLQUFuQixFQUEwQjtBQUN0QixTQUFLNmtCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUs3a0IsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7QUFDRHdsQixLQUFLaDBCLFNBQUwsQ0FBZTh6QixHQUFmLEdBQXFCLFlBQVk7QUFDN0IsU0FBS1QsR0FBTCxDQUFTN2lCLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLEtBQUtoQyxLQUExQjtBQUNILENBRkQ7QUFHQTRZLFFBQVE2TSxLQUFSLEdBQWdCLFNBQWhCO0FBQ0E3TSxRQUFRaG1CLE9BQVIsR0FBa0IsSUFBbEI7QUFDQWdtQixRQUFRb0IsR0FBUixHQUFjLEVBQWQ7QUFDQXBCLFFBQVE4TSxJQUFSLEdBQWUsRUFBZjtBQUNBOU0sUUFBUWtJLE9BQVIsR0FBa0IsRUFBbEIsQyxDQUFzQjtBQUN0QmxJLFFBQVErTSxRQUFSLEdBQW1CLEVBQW5COztBQUVBLFNBQVM5dUIsSUFBVCxHQUFnQixDQUFFOztBQUVsQitoQixRQUFRam5CLEVBQVIsR0FBYWtGLElBQWI7QUFDQStoQixRQUFRZ04sV0FBUixHQUFzQi91QixJQUF0QjtBQUNBK2hCLFFBQVF6TyxJQUFSLEdBQWV0VCxJQUFmO0FBQ0EraEIsUUFBUXhPLEdBQVIsR0FBY3ZULElBQWQ7QUFDQStoQixRQUFRdk8sY0FBUixHQUF5QnhULElBQXpCO0FBQ0EraEIsUUFBUXRPLGtCQUFSLEdBQTZCelQsSUFBN0I7QUFDQStoQixRQUFRL2pCLElBQVIsR0FBZWdDLElBQWY7QUFDQStoQixRQUFRaU4sZUFBUixHQUEwQmh2QixJQUExQjtBQUNBK2hCLFFBQVFrTixtQkFBUixHQUE4Qmp2QixJQUE5Qjs7QUFFQStoQixRQUFRbE8sU0FBUixHQUFvQixVQUFVcUQsSUFBVixFQUFnQjtBQUFFLFdBQU8sRUFBUDtBQUFXLENBQWpEOztBQUVBNkssUUFBUW1OLE9BQVIsR0FBa0IsVUFBVWhZLElBQVYsRUFBZ0I7QUFDOUIsVUFBTSxJQUFJalksS0FBSixDQUFVLGtDQUFWLENBQU47QUFDSCxDQUZEOztBQUlBOGlCLFFBQVFvTixHQUFSLEdBQWMsWUFBWTtBQUFFLFdBQU8sR0FBUDtBQUFZLENBQXhDO0FBQ0FwTixRQUFRcU4sS0FBUixHQUFnQixVQUFVcmpCLEdBQVYsRUFBZTtBQUMzQixVQUFNLElBQUk5TSxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNILENBRkQ7QUFHQThpQixRQUFRc04sS0FBUixHQUFnQixZQUFXO0FBQUUsV0FBTyxDQUFQO0FBQVcsQ0FBeEMsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMQTs7OztBQUlBLElBQUlDLE1BQU1sd0IsbUJBQU9BLENBQUMseURBQVIsQ0FBVjtBQUNBLElBQUk0VSxTQUFTNVUsbUJBQU9BLENBQUMsa0VBQVIsQ0FBYjtBQUNBLElBQUltd0IsVUFBVW53QixtQkFBT0EsQ0FBQyxpRUFBUixDQUFkO0FBQ0EsSUFBSTZVLFFBQVE3VSxtQkFBT0EsQ0FBQyxnRkFBUixFQUFpQixrQkFBakIsQ0FBWjs7QUFFQTs7OztBQUlBSyxPQUFPQyxPQUFQLEdBQWlCQSxVQUFVMEMsTUFBM0I7O0FBRUE7Ozs7QUFJQSxJQUFJb3RCLFFBQVE5dkIsUUFBUSt2QixRQUFSLEdBQW1CLEVBQS9COztBQUVBOzs7Ozs7Ozs7Ozs7O0FBYUEsU0FBU3J0QixNQUFULENBQWlCa1MsR0FBakIsRUFBc0JyVCxJQUF0QixFQUE0QjtBQUMxQixNQUFJLFFBQU9xVCxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBbkIsRUFBNkI7QUFDM0JyVCxXQUFPcVQsR0FBUDtBQUNBQSxVQUFNOU4sU0FBTjtBQUNEOztBQUVEdkYsU0FBT0EsUUFBUSxFQUFmOztBQUVBLE1BQUlnTSxTQUFTcWlCLElBQUloYixHQUFKLENBQWI7QUFDQSxNQUFJa1osU0FBU3ZnQixPQUFPdWdCLE1BQXBCO0FBQ0EsTUFBSWhYLEtBQUt2SixPQUFPdUosRUFBaEI7QUFDQSxNQUFJL2EsT0FBT3dSLE9BQU94UixJQUFsQjtBQUNBLE1BQUlpMEIsZ0JBQWdCRixNQUFNaFosRUFBTixLQUFhL2EsUUFBUSt6QixNQUFNaFosRUFBTixFQUFVbVosSUFBbkQ7QUFDQSxNQUFJQyxnQkFBZ0IzdUIsS0FBSzR1QixRQUFMLElBQWlCNXVCLEtBQUssc0JBQUwsQ0FBakIsSUFDQSxVQUFVQSxLQUFLNnVCLFNBRGYsSUFDNEJKLGFBRGhEOztBQUdBLE1BQUlueEIsRUFBSjs7QUFFQSxNQUFJcXhCLGFBQUosRUFBbUI7QUFDakIzYixVQUFNLDhCQUFOLEVBQXNDdVosTUFBdEM7QUFDQWp2QixTQUFLZ3hCLFFBQVEvQixNQUFSLEVBQWdCdnNCLElBQWhCLENBQUw7QUFDRCxHQUhELE1BR087QUFDTCxRQUFJLENBQUN1dUIsTUFBTWhaLEVBQU4sQ0FBTCxFQUFnQjtBQUNkdkMsWUFBTSx3QkFBTixFQUFnQ3VaLE1BQWhDO0FBQ0FnQyxZQUFNaFosRUFBTixJQUFZK1ksUUFBUS9CLE1BQVIsRUFBZ0J2c0IsSUFBaEIsQ0FBWjtBQUNEO0FBQ0QxQyxTQUFLaXhCLE1BQU1oWixFQUFOLENBQUw7QUFDRDtBQUNELE1BQUl2SixPQUFPeUgsS0FBUCxJQUFnQixDQUFDelQsS0FBS3lULEtBQTFCLEVBQWlDO0FBQy9CelQsU0FBS3lULEtBQUwsR0FBYXpILE9BQU95SCxLQUFwQjtBQUNEO0FBQ0QsU0FBT25XLEdBQUc3RCxNQUFILENBQVV1UyxPQUFPeFIsSUFBakIsRUFBdUJ3RixJQUF2QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BdkIsUUFBUStVLFFBQVIsR0FBbUJULE9BQU9TLFFBQTFCOztBQUVBOzs7Ozs7O0FBT0EvVSxRQUFRbEIsT0FBUixHQUFrQjRELE1BQWxCOztBQUVBOzs7Ozs7QUFNQTFDLFFBQVE2dkIsT0FBUixHQUFrQm53QixtQkFBT0EsQ0FBQyxpRUFBUixDQUFsQjtBQUNBTSxRQUFRMlUsTUFBUixHQUFpQmpWLG1CQUFPQSxDQUFDLCtEQUFSLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7Ozs7QUFJQSxJQUFJMndCLE1BQU0zd0IsbUJBQU9BLENBQUMsc0VBQVIsQ0FBVjtBQUNBLElBQUlpVixTQUFTalYsbUJBQU9BLENBQUMsK0RBQVIsQ0FBYjtBQUNBLElBQUk2VCxVQUFVN1QsbUJBQU9BLENBQUMsb0VBQVIsQ0FBZDtBQUNBLElBQUk0VSxTQUFTNVUsbUJBQU9BLENBQUMsa0VBQVIsQ0FBYjtBQUNBLElBQUl0RSxLQUFLc0UsbUJBQU9BLENBQUMsdURBQVIsQ0FBVDtBQUNBLElBQUlvbEIsT0FBT3BsQixtQkFBT0EsQ0FBQyw4REFBUixDQUFYO0FBQ0EsSUFBSTZVLFFBQVE3VSxtQkFBT0EsQ0FBQyxnRkFBUixFQUFpQiwwQkFBakIsQ0FBWjtBQUNBLElBQUlzRSxVQUFVdEUsbUJBQU9BLENBQUMsZ0RBQVIsQ0FBZDtBQUNBLElBQUk0QixVQUFVNUIsbUJBQU9BLENBQUMsOENBQVIsQ0FBZDs7QUFFQTs7OztBQUlBLElBQUl3cEIsTUFBTXZnQixPQUFPMU4sU0FBUCxDQUFpQitjLGNBQTNCOztBQUVBOzs7O0FBSUFqWSxPQUFPQyxPQUFQLEdBQWlCNnZCLE9BQWpCOztBQUVBOzs7Ozs7OztBQVFBLFNBQVNBLE9BQVQsQ0FBa0JqYixHQUFsQixFQUF1QnJULElBQXZCLEVBQTZCO0FBQzNCLE1BQUksRUFBRSxnQkFBZ0JzdUIsT0FBbEIsQ0FBSixFQUFnQyxPQUFPLElBQUlBLE9BQUosQ0FBWWpiLEdBQVosRUFBaUJyVCxJQUFqQixDQUFQO0FBQ2hDLE1BQUlxVCxPQUFRLHFCQUFvQkEsR0FBcEIseUNBQW9CQSxHQUFwQixFQUFaLEVBQXNDO0FBQ3BDclQsV0FBT3FULEdBQVA7QUFDQUEsVUFBTTlOLFNBQU47QUFDRDtBQUNEdkYsU0FBT0EsUUFBUSxFQUFmOztBQUVBQSxPQUFLeEYsSUFBTCxHQUFZd0YsS0FBS3hGLElBQUwsSUFBYSxZQUF6QjtBQUNBLE9BQUtrMEIsSUFBTCxHQUFZLEVBQVo7QUFDQSxPQUFLSyxJQUFMLEdBQVksRUFBWjtBQUNBLE9BQUsvdUIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS2d2QixZQUFMLENBQWtCaHZCLEtBQUtndkIsWUFBTCxLQUFzQixLQUF4QztBQUNBLE9BQUtDLG9CQUFMLENBQTBCanZCLEtBQUtpdkIsb0JBQUwsSUFBNkIxZCxRQUF2RDtBQUNBLE9BQUsyZCxpQkFBTCxDQUF1Qmx2QixLQUFLa3ZCLGlCQUFMLElBQTBCLElBQWpEO0FBQ0EsT0FBS0Msb0JBQUwsQ0FBMEJudkIsS0FBS212QixvQkFBTCxJQUE2QixJQUF2RDtBQUNBLE9BQUtDLG1CQUFMLENBQXlCcHZCLEtBQUtvdkIsbUJBQUwsSUFBNEIsR0FBckQ7QUFDQSxPQUFLQyxPQUFMLEdBQWUsSUFBSXR2QixPQUFKLENBQVk7QUFDekJHLFNBQUssS0FBS2d2QixpQkFBTCxFQURvQjtBQUV6Qi91QixTQUFLLEtBQUtndkIsb0JBQUwsRUFGb0I7QUFHekI5dUIsWUFBUSxLQUFLK3VCLG1CQUFMO0FBSGlCLEdBQVosQ0FBZjtBQUtBLE9BQUt4VyxPQUFMLENBQWEsUUFBUTVZLEtBQUs0WSxPQUFiLEdBQXVCLEtBQXZCLEdBQStCNVksS0FBSzRZLE9BQWpEO0FBQ0EsT0FBS3plLFVBQUwsR0FBa0IsUUFBbEI7QUFDQSxPQUFLa1osR0FBTCxHQUFXQSxHQUFYO0FBQ0EsT0FBS2ljLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsT0FBSzduQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsT0FBSzhuQixZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsTUFBSUMsVUFBVXp2QixLQUFLK1MsTUFBTCxJQUFlQSxNQUE3QjtBQUNBLE9BQUsyYyxPQUFMLEdBQWUsSUFBSUQsUUFBUUUsT0FBWixFQUFmO0FBQ0EsT0FBS0MsT0FBTCxHQUFlLElBQUlILFFBQVFJLE9BQVosRUFBZjtBQUNBLE9BQUtDLFdBQUwsR0FBbUI5dkIsS0FBSzh2QixXQUFMLEtBQXFCLEtBQXhDO0FBQ0EsTUFBSSxLQUFLQSxXQUFULEVBQXNCLEtBQUtqYSxJQUFMO0FBQ3ZCOztBQUVEOzs7Ozs7QUFNQXlZLFFBQVE1MEIsU0FBUixDQUFrQnEyQixPQUFsQixHQUE0QixZQUFZO0FBQ3RDLE9BQUtoekIsSUFBTCxDQUFVbU4sS0FBVixDQUFnQixJQUFoQixFQUFzQkQsU0FBdEI7QUFDQSxPQUFLLElBQUkrbEIsR0FBVCxJQUFnQixLQUFLdEIsSUFBckIsRUFBMkI7QUFDekIsUUFBSS9HLElBQUkxYyxJQUFKLENBQVMsS0FBS3lqQixJQUFkLEVBQW9Cc0IsR0FBcEIsQ0FBSixFQUE4QjtBQUM1QixXQUFLdEIsSUFBTCxDQUFVc0IsR0FBVixFQUFlanpCLElBQWYsQ0FBb0JtTixLQUFwQixDQUEwQixLQUFLd2tCLElBQUwsQ0FBVXNCLEdBQVYsQ0FBMUIsRUFBMEMvbEIsU0FBMUM7QUFDRDtBQUNGO0FBQ0YsQ0FQRDs7QUFTQTs7Ozs7O0FBTUFxa0IsUUFBUTUwQixTQUFSLENBQWtCdTJCLGVBQWxCLEdBQW9DLFlBQVk7QUFDOUMsT0FBSyxJQUFJRCxHQUFULElBQWdCLEtBQUt0QixJQUFyQixFQUEyQjtBQUN6QixRQUFJL0csSUFBSTFjLElBQUosQ0FBUyxLQUFLeWpCLElBQWQsRUFBb0JzQixHQUFwQixDQUFKLEVBQThCO0FBQzVCLFdBQUt0QixJQUFMLENBQVVzQixHQUFWLEVBQWV6YSxFQUFmLEdBQW9CLEtBQUsyYSxVQUFMLENBQWdCRixHQUFoQixDQUFwQjtBQUNEO0FBQ0Y7QUFDRixDQU5EOztBQVFBOzs7Ozs7OztBQVFBMUIsUUFBUTUwQixTQUFSLENBQWtCdzJCLFVBQWxCLEdBQStCLFVBQVVGLEdBQVYsRUFBZTtBQUM1QyxTQUFPLENBQUNBLFFBQVEsR0FBUixHQUFjLEVBQWQsR0FBb0JBLE1BQU0sR0FBM0IsSUFBbUMsS0FBS0csTUFBTCxDQUFZNWEsRUFBdEQ7QUFDRCxDQUZEOztBQUlBOzs7O0FBSUF2RCxRQUFRc2MsUUFBUTUwQixTQUFoQjs7QUFFQTs7Ozs7Ozs7QUFRQTQwQixRQUFRNTBCLFNBQVIsQ0FBa0JzMUIsWUFBbEIsR0FBaUMsVUFBVXpOLENBQVYsRUFBYTtBQUM1QyxNQUFJLENBQUN0WCxVQUFVcFAsTUFBZixFQUF1QixPQUFPLEtBQUt1MUIsYUFBWjtBQUN2QixPQUFLQSxhQUFMLEdBQXFCLENBQUMsQ0FBQzdPLENBQXZCO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FKRDs7QUFNQTs7Ozs7Ozs7QUFRQStNLFFBQVE1MEIsU0FBUixDQUFrQnUxQixvQkFBbEIsR0FBeUMsVUFBVTFOLENBQVYsRUFBYTtBQUNwRCxNQUFJLENBQUN0WCxVQUFVcFAsTUFBZixFQUF1QixPQUFPLEtBQUt3MUIscUJBQVo7QUFDdkIsT0FBS0EscUJBQUwsR0FBNkI5TyxDQUE3QjtBQUNBLFNBQU8sSUFBUDtBQUNELENBSkQ7O0FBTUE7Ozs7Ozs7O0FBUUErTSxRQUFRNTBCLFNBQVIsQ0FBa0J3MUIsaUJBQWxCLEdBQXNDLFVBQVUzTixDQUFWLEVBQWE7QUFDakQsTUFBSSxDQUFDdFgsVUFBVXBQLE1BQWYsRUFBdUIsT0FBTyxLQUFLeTFCLGtCQUFaO0FBQ3ZCLE9BQUtBLGtCQUFMLEdBQTBCL08sQ0FBMUI7QUFDQSxPQUFLOE4sT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWF0dUIsTUFBYixDQUFvQndnQixDQUFwQixDQUFoQjtBQUNBLFNBQU8sSUFBUDtBQUNELENBTEQ7O0FBT0ErTSxRQUFRNTBCLFNBQVIsQ0FBa0IwMUIsbUJBQWxCLEdBQXdDLFVBQVU3TixDQUFWLEVBQWE7QUFDbkQsTUFBSSxDQUFDdFgsVUFBVXBQLE1BQWYsRUFBdUIsT0FBTyxLQUFLMDFCLG9CQUFaO0FBQ3ZCLE9BQUtBLG9CQUFMLEdBQTRCaFAsQ0FBNUI7QUFDQSxPQUFLOE4sT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWFwdUIsU0FBYixDQUF1QnNnQixDQUF2QixDQUFoQjtBQUNBLFNBQU8sSUFBUDtBQUNELENBTEQ7O0FBT0E7Ozs7Ozs7O0FBUUErTSxRQUFRNTBCLFNBQVIsQ0FBa0J5MUIsb0JBQWxCLEdBQXlDLFVBQVU1TixDQUFWLEVBQWE7QUFDcEQsTUFBSSxDQUFDdFgsVUFBVXBQLE1BQWYsRUFBdUIsT0FBTyxLQUFLMjFCLHFCQUFaO0FBQ3ZCLE9BQUtBLHFCQUFMLEdBQTZCalAsQ0FBN0I7QUFDQSxPQUFLOE4sT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWFydUIsTUFBYixDQUFvQnVnQixDQUFwQixDQUFoQjtBQUNBLFNBQU8sSUFBUDtBQUNELENBTEQ7O0FBT0E7Ozs7Ozs7QUFPQStNLFFBQVE1MEIsU0FBUixDQUFrQmtmLE9BQWxCLEdBQTRCLFVBQVUySSxDQUFWLEVBQWE7QUFDdkMsTUFBSSxDQUFDdFgsVUFBVXBQLE1BQWYsRUFBdUIsT0FBTyxLQUFLNDFCLFFBQVo7QUFDdkIsT0FBS0EsUUFBTCxHQUFnQmxQLENBQWhCO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FKRDs7QUFNQTs7Ozs7OztBQU9BK00sUUFBUTUwQixTQUFSLENBQWtCZzNCLG9CQUFsQixHQUF5QyxZQUFZO0FBQ25EO0FBQ0EsTUFBSSxDQUFDLEtBQUtDLFlBQU4sSUFBc0IsS0FBS1AsYUFBM0IsSUFBNEMsS0FBS2YsT0FBTCxDQUFhL3VCLFFBQWIsS0FBMEIsQ0FBMUUsRUFBNkU7QUFDM0U7QUFDQSxTQUFLc3dCLFNBQUw7QUFDRDtBQUNGLENBTkQ7O0FBUUE7Ozs7Ozs7O0FBUUF0QyxRQUFRNTBCLFNBQVIsQ0FBa0JtYyxJQUFsQixHQUNBeVksUUFBUTUwQixTQUFSLENBQWtCNkQsT0FBbEIsR0FBNEIsVUFBVXRELEVBQVYsRUFBYytGLElBQWQsRUFBb0I7QUFDOUNnVCxRQUFNLGVBQU4sRUFBdUIsS0FBSzdZLFVBQTVCO0FBQ0EsTUFBSSxDQUFDLEtBQUtBLFVBQUwsQ0FBZ0JzSSxPQUFoQixDQUF3QixNQUF4QixDQUFMLEVBQXNDLE9BQU8sSUFBUDs7QUFFdEN1USxRQUFNLFlBQU4sRUFBb0IsS0FBS0ssR0FBekI7QUFDQSxPQUFLOGMsTUFBTCxHQUFjckIsSUFBSSxLQUFLemIsR0FBVCxFQUFjLEtBQUtyVCxJQUFuQixDQUFkO0FBQ0EsTUFBSXZHLFNBQVMsS0FBSzAyQixNQUFsQjtBQUNBLE1BQUloYixPQUFPLElBQVg7QUFDQSxPQUFLaGIsVUFBTCxHQUFrQixTQUFsQjtBQUNBLE9BQUswMkIsYUFBTCxHQUFxQixLQUFyQjs7QUFFQTtBQUNBLE1BQUlDLFVBQVVqM0IsR0FBR0osTUFBSCxFQUFXLE1BQVgsRUFBbUIsWUFBWTtBQUMzQzBiLFNBQUs2SyxNQUFMO0FBQ0EvbEIsVUFBTUEsSUFBTjtBQUNELEdBSGEsQ0FBZDs7QUFLQTtBQUNBLE1BQUk4MkIsV0FBV2wzQixHQUFHSixNQUFILEVBQVcsT0FBWCxFQUFvQixVQUFVSyxJQUFWLEVBQWdCO0FBQ2pEa1osVUFBTSxlQUFOO0FBQ0FtQyxTQUFLd0MsT0FBTDtBQUNBeEMsU0FBS2hiLFVBQUwsR0FBa0IsUUFBbEI7QUFDQWdiLFNBQUs0YSxPQUFMLENBQWEsZUFBYixFQUE4QmoyQixJQUE5QjtBQUNBLFFBQUlHLEVBQUosRUFBUTtBQUNOLFVBQUlnRixNQUFNLElBQUlqQixLQUFKLENBQVUsa0JBQVYsQ0FBVjtBQUNBaUIsVUFBSW5GLElBQUosR0FBV0EsSUFBWDtBQUNBRyxTQUFHZ0YsR0FBSDtBQUNELEtBSkQsTUFJTztBQUNMO0FBQ0FrVyxXQUFLdWIsb0JBQUw7QUFDRDtBQUNGLEdBYmMsQ0FBZjs7QUFlQTtBQUNBLE1BQUksVUFBVSxLQUFLRCxRQUFuQixFQUE2QjtBQUMzQixRQUFJN1gsVUFBVSxLQUFLNlgsUUFBbkI7QUFDQXpkLFVBQU0sdUNBQU4sRUFBK0M0RixPQUEvQzs7QUFFQTtBQUNBLFFBQUlvWSxRQUFRdGEsV0FBVyxZQUFZO0FBQ2pDMUQsWUFBTSxvQ0FBTixFQUE0QzRGLE9BQTVDO0FBQ0FrWSxjQUFRdE4sT0FBUjtBQUNBL3BCLGFBQU9xZSxLQUFQO0FBQ0FyZSxhQUFPc0QsSUFBUCxDQUFZLE9BQVosRUFBcUIsU0FBckI7QUFDQW9ZLFdBQUs0YSxPQUFMLENBQWEsaUJBQWIsRUFBZ0NuWCxPQUFoQztBQUNELEtBTlcsRUFNVEEsT0FOUyxDQUFaOztBQVFBLFNBQUttVyxJQUFMLENBQVUxckIsSUFBVixDQUFlO0FBQ2JtZ0IsZUFBUyxtQkFBWTtBQUNuQjNLLHFCQUFhbVksS0FBYjtBQUNEO0FBSFksS0FBZjtBQUtEOztBQUVELE9BQUtqQyxJQUFMLENBQVUxckIsSUFBVixDQUFleXRCLE9BQWY7QUFDQSxPQUFLL0IsSUFBTCxDQUFVMXJCLElBQVYsQ0FBZTB0QixRQUFmOztBQUVBLFNBQU8sSUFBUDtBQUNELENBM0REOztBQTZEQTs7Ozs7O0FBTUF6QyxRQUFRNTBCLFNBQVIsQ0FBa0JzbUIsTUFBbEIsR0FBMkIsWUFBWTtBQUNyQ2hOLFFBQU0sTUFBTjs7QUFFQTtBQUNBLE9BQUsyRSxPQUFMOztBQUVBO0FBQ0EsT0FBS3hkLFVBQUwsR0FBa0IsTUFBbEI7QUFDQSxPQUFLNEMsSUFBTCxDQUFVLE1BQVY7O0FBRUE7QUFDQSxNQUFJdEQsU0FBUyxLQUFLMDJCLE1BQWxCO0FBQ0EsT0FBS3BCLElBQUwsQ0FBVTFyQixJQUFWLENBQWV4SixHQUFHSixNQUFILEVBQVcsTUFBWCxFQUFtQjhwQixLQUFLLElBQUwsRUFBVyxRQUFYLENBQW5CLENBQWY7QUFDQSxPQUFLd0wsSUFBTCxDQUFVMXJCLElBQVYsQ0FBZXhKLEdBQUdKLE1BQUgsRUFBVyxNQUFYLEVBQW1COHBCLEtBQUssSUFBTCxFQUFXLFFBQVgsQ0FBbkIsQ0FBZjtBQUNBLE9BQUt3TCxJQUFMLENBQVUxckIsSUFBVixDQUFleEosR0FBR0osTUFBSCxFQUFXLE1BQVgsRUFBbUI4cEIsS0FBSyxJQUFMLEVBQVcsUUFBWCxDQUFuQixDQUFmO0FBQ0EsT0FBS3dMLElBQUwsQ0FBVTFyQixJQUFWLENBQWV4SixHQUFHSixNQUFILEVBQVcsT0FBWCxFQUFvQjhwQixLQUFLLElBQUwsRUFBVyxTQUFYLENBQXBCLENBQWY7QUFDQSxPQUFLd0wsSUFBTCxDQUFVMXJCLElBQVYsQ0FBZXhKLEdBQUdKLE1BQUgsRUFBVyxPQUFYLEVBQW9COHBCLEtBQUssSUFBTCxFQUFXLFNBQVgsQ0FBcEIsQ0FBZjtBQUNBLE9BQUt3TCxJQUFMLENBQVUxckIsSUFBVixDQUFleEosR0FBRyxLQUFLKzFCLE9BQVIsRUFBaUIsU0FBakIsRUFBNEJyTSxLQUFLLElBQUwsRUFBVyxXQUFYLENBQTVCLENBQWY7QUFDRCxDQWxCRDs7QUFvQkE7Ozs7OztBQU1BK0ssUUFBUTUwQixTQUFSLENBQWtCdTNCLE1BQWxCLEdBQTJCLFlBQVk7QUFDckMsT0FBSzFCLFFBQUwsR0FBZ0IsSUFBSTN5QixJQUFKLEVBQWhCO0FBQ0EsT0FBS216QixPQUFMLENBQWEsTUFBYjtBQUNELENBSEQ7O0FBS0E7Ozs7OztBQU1BekIsUUFBUTUwQixTQUFSLENBQWtCdzNCLE1BQWxCLEdBQTJCLFlBQVk7QUFDckMsT0FBS25CLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLElBQUluekIsSUFBSixLQUFhLEtBQUsyeUIsUUFBdkM7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQWpCLFFBQVE1MEIsU0FBUixDQUFrQnkzQixNQUFsQixHQUEyQixVQUFVcjNCLElBQVYsRUFBZ0I7QUFDekMsT0FBSzgxQixPQUFMLENBQWF3QixHQUFiLENBQWlCdDNCLElBQWpCO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUF3MEIsUUFBUTUwQixTQUFSLENBQWtCMjNCLFNBQWxCLEdBQThCLFVBQVV2YSxNQUFWLEVBQWtCO0FBQzlDLE9BQUsvWixJQUFMLENBQVUsUUFBVixFQUFvQitaLE1BQXBCO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUF3WCxRQUFRNTBCLFNBQVIsQ0FBa0JxZSxPQUFsQixHQUE0QixVQUFVOVksR0FBVixFQUFlO0FBQ3pDK1QsUUFBTSxPQUFOLEVBQWUvVCxHQUFmO0FBQ0EsT0FBSzh3QixPQUFMLENBQWEsT0FBYixFQUFzQjl3QixHQUF0QjtBQUNELENBSEQ7O0FBS0E7Ozs7Ozs7QUFPQXF2QixRQUFRNTBCLFNBQVIsQ0FBa0JELE1BQWxCLEdBQTJCLFVBQVV1MkIsR0FBVixFQUFlaHdCLElBQWYsRUFBcUI7QUFDOUMsTUFBSXZHLFNBQVMsS0FBS2kxQixJQUFMLENBQVVzQixHQUFWLENBQWI7QUFDQSxNQUFJLENBQUN2MkIsTUFBTCxFQUFhO0FBQ1hBLGFBQVMsSUFBSTJaLE1BQUosQ0FBVyxJQUFYLEVBQWlCNGMsR0FBakIsRUFBc0Jod0IsSUFBdEIsQ0FBVDtBQUNBLFNBQUswdUIsSUFBTCxDQUFVc0IsR0FBVixJQUFpQnYyQixNQUFqQjtBQUNBLFFBQUkwYixPQUFPLElBQVg7QUFDQTFiLFdBQU9JLEVBQVAsQ0FBVSxZQUFWLEVBQXdCeTNCLFlBQXhCO0FBQ0E3M0IsV0FBT0ksRUFBUCxDQUFVLFNBQVYsRUFBcUIsWUFBWTtBQUMvQkosYUFBTzhiLEVBQVAsR0FBWUosS0FBSythLFVBQUwsQ0FBZ0JGLEdBQWhCLENBQVo7QUFDRCxLQUZEOztBQUlBLFFBQUksS0FBS0YsV0FBVCxFQUFzQjtBQUNwQjtBQUNBd0I7QUFDRDtBQUNGOztBQUVELFdBQVNBLFlBQVQsR0FBeUI7QUFDdkIsUUFBSSxDQUFDLENBQUM3dUIsUUFBUTBTLEtBQUttYSxVQUFiLEVBQXlCNzFCLE1BQXpCLENBQU4sRUFBd0M7QUFDdEMwYixXQUFLbWEsVUFBTCxDQUFnQmpzQixJQUFoQixDQUFxQjVKLE1BQXJCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPQSxNQUFQO0FBQ0QsQ0F4QkQ7O0FBMEJBOzs7Ozs7QUFNQTYwQixRQUFRNTBCLFNBQVIsQ0FBa0I4cEIsT0FBbEIsR0FBNEIsVUFBVS9wQixNQUFWLEVBQWtCO0FBQzVDLE1BQUl3WixRQUFReFEsUUFBUSxLQUFLNnNCLFVBQWIsRUFBeUI3MUIsTUFBekIsQ0FBWjtBQUNBLE1BQUksQ0FBQ3daLEtBQUwsRUFBWSxLQUFLcWMsVUFBTCxDQUFnQjNjLE1BQWhCLENBQXVCTSxLQUF2QixFQUE4QixDQUE5QjtBQUNaLE1BQUksS0FBS3FjLFVBQUwsQ0FBZ0J6MEIsTUFBcEIsRUFBNEI7O0FBRTVCLE9BQUtpZCxLQUFMO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7OztBQU9Bd1csUUFBUTUwQixTQUFSLENBQWtCb2QsTUFBbEIsR0FBMkIsVUFBVUEsTUFBVixFQUFrQjtBQUMzQzlELFFBQU0sbUJBQU4sRUFBMkI4RCxNQUEzQjtBQUNBLE1BQUkzQixPQUFPLElBQVg7QUFDQSxNQUFJMkIsT0FBT3JELEtBQVAsSUFBZ0JxRCxPQUFPelIsSUFBUCxLQUFnQixDQUFwQyxFQUF1Q3lSLE9BQU9rWixHQUFQLElBQWMsTUFBTWxaLE9BQU9yRCxLQUEzQjs7QUFFdkMsTUFBSSxDQUFDMEIsS0FBS3pOLFFBQVYsRUFBb0I7QUFDbEI7QUFDQXlOLFNBQUt6TixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS2dvQixPQUFMLENBQWFydUIsTUFBYixDQUFvQnlWLE1BQXBCLEVBQTRCLFVBQVU2UCxjQUFWLEVBQTBCO0FBQ3BELFdBQUssSUFBSS9tQixJQUFJLENBQWIsRUFBZ0JBLElBQUkrbUIsZUFBZTlyQixNQUFuQyxFQUEyQytFLEdBQTNDLEVBQWdEO0FBQzlDdVYsYUFBS2diLE1BQUwsQ0FBWW5vQixLQUFaLENBQWtCMmUsZUFBZS9tQixDQUFmLENBQWxCLEVBQXFDa1gsT0FBTzdSLE9BQTVDO0FBQ0Q7QUFDRGtRLFdBQUt6TixRQUFMLEdBQWdCLEtBQWhCO0FBQ0F5TixXQUFLb2Msa0JBQUw7QUFDRCxLQU5EO0FBT0QsR0FWRCxNQVVPO0FBQUU7QUFDUHBjLFNBQUtxYSxZQUFMLENBQWtCbnNCLElBQWxCLENBQXVCeVQsTUFBdkI7QUFDRDtBQUNGLENBbEJEOztBQW9CQTs7Ozs7OztBQU9Bd1gsUUFBUTUwQixTQUFSLENBQWtCNjNCLGtCQUFsQixHQUF1QyxZQUFZO0FBQ2pELE1BQUksS0FBSy9CLFlBQUwsQ0FBa0IzMEIsTUFBbEIsR0FBMkIsQ0FBM0IsSUFBZ0MsQ0FBQyxLQUFLNk0sUUFBMUMsRUFBb0Q7QUFDbEQsUUFBSThwQixPQUFPLEtBQUtoQyxZQUFMLENBQWtCN1ksS0FBbEIsRUFBWDtBQUNBLFNBQUtHLE1BQUwsQ0FBWTBhLElBQVo7QUFDRDtBQUNGLENBTEQ7O0FBT0E7Ozs7OztBQU1BbEQsUUFBUTUwQixTQUFSLENBQWtCaWUsT0FBbEIsR0FBNEIsWUFBWTtBQUN0QzNFLFFBQU0sU0FBTjs7QUFFQSxNQUFJeWUsYUFBYSxLQUFLMUMsSUFBTCxDQUFVbDBCLE1BQTNCO0FBQ0EsT0FBSyxJQUFJK0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNnhCLFVBQXBCLEVBQWdDN3hCLEdBQWhDLEVBQXFDO0FBQ25DLFFBQUlzUSxNQUFNLEtBQUs2ZSxJQUFMLENBQVVwWSxLQUFWLEVBQVY7QUFDQXpHLFFBQUlzVCxPQUFKO0FBQ0Q7O0FBRUQsT0FBS2dNLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxPQUFLOW5CLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxPQUFLNm5CLFFBQUwsR0FBZ0IsSUFBaEI7O0FBRUEsT0FBS0ssT0FBTCxDQUFhcE0sT0FBYjtBQUNELENBZEQ7O0FBZ0JBOzs7Ozs7QUFNQThLLFFBQVE1MEIsU0FBUixDQUFrQm9lLEtBQWxCLEdBQ0F3VyxRQUFRNTBCLFNBQVIsQ0FBa0JnNEIsVUFBbEIsR0FBK0IsWUFBWTtBQUN6QzFlLFFBQU0sWUFBTjtBQUNBLE9BQUs2ZCxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsT0FBS0YsWUFBTCxHQUFvQixLQUFwQjtBQUNBLE1BQUksY0FBYyxLQUFLeDJCLFVBQXZCLEVBQW1DO0FBQ2pDO0FBQ0E7QUFDQSxTQUFLd2QsT0FBTDtBQUNEO0FBQ0QsT0FBSzBYLE9BQUwsQ0FBYXZ1QixLQUFiO0FBQ0EsT0FBSzNHLFVBQUwsR0FBa0IsUUFBbEI7QUFDQSxNQUFJLEtBQUtnMkIsTUFBVCxFQUFpQixLQUFLQSxNQUFMLENBQVlyWSxLQUFaO0FBQ2xCLENBYkQ7O0FBZUE7Ozs7OztBQU1Bd1csUUFBUTUwQixTQUFSLENBQWtCdWUsT0FBbEIsR0FBNEIsVUFBVW1CLE1BQVYsRUFBa0I7QUFDNUNwRyxRQUFNLFNBQU47O0FBRUEsT0FBSzJFLE9BQUw7QUFDQSxPQUFLMFgsT0FBTCxDQUFhdnVCLEtBQWI7QUFDQSxPQUFLM0csVUFBTCxHQUFrQixRQUFsQjtBQUNBLE9BQUs0QyxJQUFMLENBQVUsT0FBVixFQUFtQnFjLE1BQW5COztBQUVBLE1BQUksS0FBS2dYLGFBQUwsSUFBc0IsQ0FBQyxLQUFLUyxhQUFoQyxFQUErQztBQUM3QyxTQUFLRCxTQUFMO0FBQ0Q7QUFDRixDQVhEOztBQWFBOzs7Ozs7QUFNQXRDLFFBQVE1MEIsU0FBUixDQUFrQmszQixTQUFsQixHQUE4QixZQUFZO0FBQ3hDLE1BQUksS0FBS0QsWUFBTCxJQUFxQixLQUFLRSxhQUE5QixFQUE2QyxPQUFPLElBQVA7O0FBRTdDLE1BQUkxYixPQUFPLElBQVg7O0FBRUEsTUFBSSxLQUFLa2EsT0FBTCxDQUFhL3VCLFFBQWIsSUFBeUIsS0FBSyt2QixxQkFBbEMsRUFBeUQ7QUFDdkRyZCxVQUFNLGtCQUFOO0FBQ0EsU0FBS3FjLE9BQUwsQ0FBYXZ1QixLQUFiO0FBQ0EsU0FBS2l2QixPQUFMLENBQWEsa0JBQWI7QUFDQSxTQUFLWSxZQUFMLEdBQW9CLEtBQXBCO0FBQ0QsR0FMRCxNQUtPO0FBQ0wsUUFBSWdCLFFBQVEsS0FBS3RDLE9BQUwsQ0FBYTl1QixRQUFiLEVBQVo7QUFDQXlTLFVBQU0seUNBQU4sRUFBaUQyZSxLQUFqRDs7QUFFQSxTQUFLaEIsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFFBQUlLLFFBQVF0YSxXQUFXLFlBQVk7QUFDakMsVUFBSXZCLEtBQUswYixhQUFULEVBQXdCOztBQUV4QjdkLFlBQU0sc0JBQU47QUFDQW1DLFdBQUs0YSxPQUFMLENBQWEsbUJBQWIsRUFBa0M1YSxLQUFLa2EsT0FBTCxDQUFhL3VCLFFBQS9DO0FBQ0E2VSxXQUFLNGEsT0FBTCxDQUFhLGNBQWIsRUFBNkI1YSxLQUFLa2EsT0FBTCxDQUFhL3VCLFFBQTFDOztBQUVBO0FBQ0EsVUFBSTZVLEtBQUswYixhQUFULEVBQXdCOztBQUV4QjFiLFdBQUtVLElBQUwsQ0FBVSxVQUFVNVcsR0FBVixFQUFlO0FBQ3ZCLFlBQUlBLEdBQUosRUFBUztBQUNQK1QsZ0JBQU0seUJBQU47QUFDQW1DLGVBQUt3YixZQUFMLEdBQW9CLEtBQXBCO0FBQ0F4YixlQUFLeWIsU0FBTDtBQUNBemIsZUFBSzRhLE9BQUwsQ0FBYSxpQkFBYixFQUFnQzl3QixJQUFJbkYsSUFBcEM7QUFDRCxTQUxELE1BS087QUFDTGtaLGdCQUFNLG1CQUFOO0FBQ0FtQyxlQUFLeWMsV0FBTDtBQUNEO0FBQ0YsT0FWRDtBQVdELEtBckJXLEVBcUJURCxLQXJCUyxDQUFaOztBQXVCQSxTQUFLNUMsSUFBTCxDQUFVMXJCLElBQVYsQ0FBZTtBQUNibWdCLGVBQVMsbUJBQVk7QUFDbkIzSyxxQkFBYW1ZLEtBQWI7QUFDRDtBQUhZLEtBQWY7QUFLRDtBQUNGLENBNUNEOztBQThDQTs7Ozs7O0FBTUExQyxRQUFRNTBCLFNBQVIsQ0FBa0JrNEIsV0FBbEIsR0FBZ0MsWUFBWTtBQUMxQyxNQUFJQyxVQUFVLEtBQUt4QyxPQUFMLENBQWEvdUIsUUFBM0I7QUFDQSxPQUFLcXdCLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxPQUFLdEIsT0FBTCxDQUFhdnVCLEtBQWI7QUFDQSxPQUFLbXZCLGVBQUw7QUFDQSxPQUFLRixPQUFMLENBQWEsV0FBYixFQUEwQjhCLE9BQTFCO0FBQ0QsQ0FORCxDOzs7Ozs7Ozs7Ozs7OztBQ3JqQkE7Ozs7QUFJQXJ6QixPQUFPQyxPQUFQLEdBQWlCNUUsRUFBakI7O0FBRUE7Ozs7Ozs7OztBQVNBLFNBQVNBLEVBQVQsQ0FBYXNPLEdBQWIsRUFBa0IrWCxFQUFsQixFQUFzQmptQixFQUF0QixFQUEwQjtBQUN4QmtPLE1BQUl0TyxFQUFKLENBQU9xbUIsRUFBUCxFQUFXam1CLEVBQVg7QUFDQSxTQUFPO0FBQ0x1cEIsYUFBUyxtQkFBWTtBQUNuQnJiLFVBQUlvSyxjQUFKLENBQW1CMk4sRUFBbkIsRUFBdUJqbUIsRUFBdkI7QUFDRDtBQUhJLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJEOzs7O0FBSUEsSUFBSThZLFNBQVM1VSxtQkFBT0EsQ0FBQyxrRUFBUixDQUFiO0FBQ0EsSUFBSTZULFVBQVU3VCxtQkFBT0EsQ0FBQyxvRUFBUixDQUFkO0FBQ0EsSUFBSTJ6QixVQUFVM3pCLG1CQUFPQSxDQUFDLGtEQUFSLENBQWQ7QUFDQSxJQUFJdEUsS0FBS3NFLG1CQUFPQSxDQUFDLHVEQUFSLENBQVQ7QUFDQSxJQUFJb2xCLE9BQU9wbEIsbUJBQU9BLENBQUMsOERBQVIsQ0FBWDtBQUNBLElBQUk2VSxRQUFRN1UsbUJBQU9BLENBQUMsZ0ZBQVIsRUFBaUIseUJBQWpCLENBQVo7QUFDQSxJQUFJZ1YsVUFBVWhWLG1CQUFPQSxDQUFDLGdEQUFSLENBQWQ7QUFDQSxJQUFJNHpCLFNBQVM1ekIsbUJBQU9BLENBQUMsd0RBQVIsQ0FBYjs7QUFFQTs7OztBQUlBSyxPQUFPQyxPQUFQLEdBQWlCQSxVQUFVMlUsTUFBM0I7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFJNGUsU0FBUztBQUNYejBCLFdBQVMsQ0FERTtBQUVYMDBCLGlCQUFlLENBRko7QUFHWEMsbUJBQWlCLENBSE47QUFJWDVDLGNBQVksQ0FKRDtBQUtYb0MsY0FBWSxDQUxEO0FBTVh6ekIsU0FBTyxDQU5JO0FBT1gyeUIsYUFBVyxDQVBBO0FBUVh1QixxQkFBbUIsQ0FSUjtBQVNYQyxvQkFBa0IsQ0FUUDtBQVVYQyxtQkFBaUIsQ0FWTjtBQVdYMUIsZ0JBQWMsQ0FYSDtBQVlYN1gsUUFBTSxDQVpLO0FBYVhzTCxRQUFNO0FBYkssQ0FBYjs7QUFnQkE7Ozs7QUFJQSxJQUFJcm5CLE9BQU9pVixRQUFRdFksU0FBUixDQUFrQnFELElBQTdCOztBQUVBOzs7Ozs7QUFNQSxTQUFTcVcsTUFBVCxDQUFpQjlWLEVBQWpCLEVBQXFCMHlCLEdBQXJCLEVBQTBCaHdCLElBQTFCLEVBQWdDO0FBQzlCLE9BQUsxQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxPQUFLMHlCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUszRSxJQUFMLEdBQVksSUFBWixDQUg4QixDQUdaO0FBQ2xCLE9BQUtpSCxHQUFMLEdBQVcsQ0FBWDtBQUNBLE9BQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsTUFBSTV5QixRQUFRQSxLQUFLeVQsS0FBakIsRUFBd0I7QUFDdEIsU0FBS0EsS0FBTCxHQUFhelQsS0FBS3lULEtBQWxCO0FBQ0Q7QUFDRCxNQUFJLEtBQUtuVyxFQUFMLENBQVF3eUIsV0FBWixFQUF5QixLQUFLamEsSUFBTDtBQUMxQjs7QUFFRDs7OztBQUlBN0QsUUFBUW9CLE9BQU8xWixTQUFmOztBQUVBOzs7Ozs7QUFNQTBaLE9BQU8xWixTQUFQLENBQWlCbTVCLFNBQWpCLEdBQTZCLFlBQVk7QUFDdkMsTUFBSSxLQUFLOUQsSUFBVCxFQUFlOztBQUVmLE1BQUl6eEIsS0FBSyxLQUFLQSxFQUFkO0FBQ0EsT0FBS3l4QixJQUFMLEdBQVksQ0FDVmwxQixHQUFHeUQsRUFBSCxFQUFPLE1BQVAsRUFBZWltQixLQUFLLElBQUwsRUFBVyxRQUFYLENBQWYsQ0FEVSxFQUVWMXBCLEdBQUd5RCxFQUFILEVBQU8sUUFBUCxFQUFpQmltQixLQUFLLElBQUwsRUFBVyxVQUFYLENBQWpCLENBRlUsRUFHVjFwQixHQUFHeUQsRUFBSCxFQUFPLE9BQVAsRUFBZ0JpbUIsS0FBSyxJQUFMLEVBQVcsU0FBWCxDQUFoQixDQUhVLENBQVo7QUFLRCxDQVREOztBQVdBOzs7Ozs7QUFNQW5RLE9BQU8xWixTQUFQLENBQWlCbWMsSUFBakIsR0FDQXpDLE9BQU8xWixTQUFQLENBQWlCNkQsT0FBakIsR0FBMkIsWUFBWTtBQUNyQyxNQUFJLEtBQUttMUIsU0FBVCxFQUFvQixPQUFPLElBQVA7O0FBRXBCLE9BQUtHLFNBQUw7QUFDQSxPQUFLdjFCLEVBQUwsQ0FBUXVZLElBQVIsR0FKcUMsQ0FJckI7QUFDaEIsTUFBSSxXQUFXLEtBQUt2WSxFQUFMLENBQVFuRCxVQUF2QixFQUFtQyxLQUFLNmxCLE1BQUw7QUFDbkMsT0FBS2pqQixJQUFMLENBQVUsWUFBVjtBQUNBLFNBQU8sSUFBUDtBQUNELENBVEQ7O0FBV0E7Ozs7Ozs7QUFPQXFXLE9BQU8xWixTQUFQLENBQWlCNmQsSUFBakIsR0FBd0IsWUFBWTtBQUNsQyxNQUFJeEYsT0FBTytmLFFBQVE3bkIsU0FBUixDQUFYO0FBQ0E4SCxPQUFLb1IsT0FBTCxDQUFhLFNBQWI7QUFDQSxPQUFLcG1CLElBQUwsQ0FBVW1OLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0I2SCxJQUF0QjtBQUNBLFNBQU8sSUFBUDtBQUNELENBTEQ7O0FBT0E7Ozs7Ozs7OztBQVNBcUIsT0FBTzFaLFNBQVAsQ0FBaUJxRCxJQUFqQixHQUF3QixVQUFVbWpCLEVBQVYsRUFBYztBQUNwQyxNQUFJOFIsT0FBT3ZiLGNBQVAsQ0FBc0J5SixFQUF0QixDQUFKLEVBQStCO0FBQzdCbmpCLFNBQUttTixLQUFMLENBQVcsSUFBWCxFQUFpQkQsU0FBakI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJOEgsT0FBTytmLFFBQVE3bkIsU0FBUixDQUFYO0FBQ0EsTUFBSTZNLFNBQVM7QUFDWHpSLFVBQU0sQ0FBQyxLQUFLdXRCLEtBQUwsQ0FBVzlTLE1BQVgsS0FBc0J2YSxTQUF0QixHQUFrQyxLQUFLcXRCLEtBQUwsQ0FBVzlTLE1BQTdDLEdBQXNEaVMsT0FBT2hnQixJQUFQLENBQXZELElBQXVFZ0IsT0FBTytmLFlBQTlFLEdBQTZGL2YsT0FBT2dnQixLQUQvRjtBQUVYajVCLFVBQU1pWTtBQUZLLEdBQWI7O0FBS0ErRSxTQUFPN1IsT0FBUCxHQUFpQixFQUFqQjtBQUNBNlIsU0FBTzdSLE9BQVAsQ0FBZWdVLFFBQWYsR0FBMEIsQ0FBQyxLQUFLMlosS0FBTixJQUFlLFVBQVUsS0FBS0EsS0FBTCxDQUFXM1osUUFBOUQ7O0FBRUE7QUFDQSxNQUFJLGVBQWUsT0FBT2xILEtBQUtBLEtBQUtsWCxNQUFMLEdBQWMsQ0FBbkIsQ0FBMUIsRUFBaUQ7QUFDL0NtWSxVQUFNLGdDQUFOLEVBQXdDLEtBQUtzZixHQUE3QztBQUNBLFNBQUtDLElBQUwsQ0FBVSxLQUFLRCxHQUFmLElBQXNCdmdCLEtBQUtpaEIsR0FBTCxFQUF0QjtBQUNBbGMsV0FBT3ZCLEVBQVAsR0FBWSxLQUFLK2MsR0FBTCxFQUFaO0FBQ0Q7O0FBRUQsTUFBSSxLQUFLSSxTQUFULEVBQW9CO0FBQ2xCLFNBQUs1YixNQUFMLENBQVlBLE1BQVo7QUFDRCxHQUZELE1BRU87QUFDTCxTQUFLMmIsVUFBTCxDQUFnQnB2QixJQUFoQixDQUFxQnlULE1BQXJCO0FBQ0Q7O0FBRUQsT0FBSzhiLEtBQUwsR0FBYSxFQUFiOztBQUVBLFNBQU8sSUFBUDtBQUNELENBL0JEOztBQWlDQTs7Ozs7OztBQU9BeGYsT0FBTzFaLFNBQVAsQ0FBaUJvZCxNQUFqQixHQUEwQixVQUFVQSxNQUFWLEVBQWtCO0FBQzFDQSxTQUFPa1osR0FBUCxHQUFhLEtBQUtBLEdBQWxCO0FBQ0EsT0FBSzF5QixFQUFMLENBQVF3WixNQUFSLENBQWVBLE1BQWY7QUFDRCxDQUhEOztBQUtBOzs7Ozs7QUFNQTFELE9BQU8xWixTQUFQLENBQWlCc21CLE1BQWpCLEdBQTBCLFlBQVk7QUFDcENoTixRQUFNLGdDQUFOOztBQUVBO0FBQ0EsTUFBSSxRQUFRLEtBQUtnZCxHQUFqQixFQUFzQjtBQUNwQixRQUFJLEtBQUt2YyxLQUFULEVBQWdCO0FBQ2QsVUFBSUEsUUFBUSxRQUFPLEtBQUtBLEtBQVosTUFBc0IsUUFBdEIsR0FBaUNOLFFBQVE5UixNQUFSLENBQWUsS0FBS29TLEtBQXBCLENBQWpDLEdBQThELEtBQUtBLEtBQS9FO0FBQ0FULFlBQU0sc0NBQU4sRUFBOENTLEtBQTlDO0FBQ0EsV0FBS3FELE1BQUwsQ0FBWSxFQUFDelIsTUFBTTBOLE9BQU9rZ0IsT0FBZCxFQUF1QnhmLE9BQU9BLEtBQTlCLEVBQVo7QUFDRCxLQUpELE1BSU87QUFDTCxXQUFLcUQsTUFBTCxDQUFZLEVBQUN6UixNQUFNME4sT0FBT2tnQixPQUFkLEVBQVo7QUFDRDtBQUNGO0FBQ0YsQ0FiRDs7QUFlQTs7Ozs7OztBQU9BN2YsT0FBTzFaLFNBQVAsQ0FBaUJ1ZSxPQUFqQixHQUEyQixVQUFVbUIsTUFBVixFQUFrQjtBQUMzQ3BHLFFBQU0sWUFBTixFQUFvQm9HLE1BQXBCO0FBQ0EsT0FBS3NaLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxPQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsU0FBTyxLQUFLcGQsRUFBWjtBQUNBLE9BQUt4WSxJQUFMLENBQVUsWUFBVixFQUF3QnFjLE1BQXhCO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7OztBQU9BaEcsT0FBTzFaLFNBQVAsQ0FBaUJ3NUIsUUFBakIsR0FBNEIsVUFBVXBjLE1BQVYsRUFBa0I7QUFDNUMsTUFBSTJYLGdCQUFnQjNYLE9BQU9rWixHQUFQLEtBQWUsS0FBS0EsR0FBeEM7QUFDQSxNQUFJbUQscUJBQXFCcmMsT0FBT3pSLElBQVAsS0FBZ0IwTixPQUFPcWdCLEtBQXZCLElBQWdDdGMsT0FBT2taLEdBQVAsS0FBZSxHQUF4RTs7QUFFQSxNQUFJLENBQUN2QixhQUFELElBQWtCLENBQUMwRSxrQkFBdkIsRUFBMkM7O0FBRTNDLFVBQVFyYyxPQUFPelIsSUFBZjtBQUNFLFNBQUswTixPQUFPa2dCLE9BQVo7QUFDRSxXQUFLSSxTQUFMO0FBQ0E7O0FBRUYsU0FBS3RnQixPQUFPZ2dCLEtBQVo7QUFDRSxXQUFLTyxPQUFMLENBQWF4YyxNQUFiO0FBQ0E7O0FBRUYsU0FBSy9ELE9BQU8rZixZQUFaO0FBQ0UsV0FBS1EsT0FBTCxDQUFheGMsTUFBYjtBQUNBOztBQUVGLFNBQUsvRCxPQUFPd2dCLEdBQVo7QUFDRSxXQUFLQyxLQUFMLENBQVcxYyxNQUFYO0FBQ0E7O0FBRUYsU0FBSy9ELE9BQU8wZ0IsVUFBWjtBQUNFLFdBQUtELEtBQUwsQ0FBVzFjLE1BQVg7QUFDQTs7QUFFRixTQUFLL0QsT0FBTzJnQixVQUFaO0FBQ0UsV0FBS0MsWUFBTDtBQUNBOztBQUVGLFNBQUs1Z0IsT0FBT3FnQixLQUFaO0FBQ0UsV0FBS3IyQixJQUFMLENBQVUsT0FBVixFQUFtQitaLE9BQU9oZCxJQUExQjtBQUNBO0FBM0JKO0FBNkJELENBbkNEOztBQXFDQTs7Ozs7OztBQU9Bc1osT0FBTzFaLFNBQVAsQ0FBaUI0NUIsT0FBakIsR0FBMkIsVUFBVXhjLE1BQVYsRUFBa0I7QUFDM0MsTUFBSS9FLE9BQU8rRSxPQUFPaGQsSUFBUCxJQUFlLEVBQTFCO0FBQ0FrWixRQUFNLG1CQUFOLEVBQTJCakIsSUFBM0I7O0FBRUEsTUFBSSxRQUFRK0UsT0FBT3ZCLEVBQW5CLEVBQXVCO0FBQ3JCdkMsVUFBTSxpQ0FBTjtBQUNBakIsU0FBSzFPLElBQUwsQ0FBVSxLQUFLdXdCLEdBQUwsQ0FBUzljLE9BQU92QixFQUFoQixDQUFWO0FBQ0Q7O0FBRUQsTUFBSSxLQUFLbWQsU0FBVCxFQUFvQjtBQUNsQjMxQixTQUFLbU4sS0FBTCxDQUFXLElBQVgsRUFBaUI2SCxJQUFqQjtBQUNELEdBRkQsTUFFTztBQUNMLFNBQUt5Z0IsYUFBTCxDQUFtQm52QixJQUFuQixDQUF3QjBPLElBQXhCO0FBQ0Q7QUFDRixDQWREOztBQWdCQTs7Ozs7O0FBTUFxQixPQUFPMVosU0FBUCxDQUFpQms2QixHQUFqQixHQUF1QixVQUFVcmUsRUFBVixFQUFjO0FBQ25DLE1BQUlKLE9BQU8sSUFBWDtBQUNBLE1BQUkwZSxPQUFPLEtBQVg7QUFDQSxTQUFPLFlBQVk7QUFDakI7QUFDQSxRQUFJQSxJQUFKLEVBQVU7QUFDVkEsV0FBTyxJQUFQO0FBQ0EsUUFBSTloQixPQUFPK2YsUUFBUTduQixTQUFSLENBQVg7QUFDQStJLFVBQU0sZ0JBQU4sRUFBd0JqQixJQUF4Qjs7QUFFQW9ELFNBQUsyQixNQUFMLENBQVk7QUFDVnpSLFlBQU0wc0IsT0FBT2hnQixJQUFQLElBQWVnQixPQUFPMGdCLFVBQXRCLEdBQW1DMWdCLE9BQU93Z0IsR0FEdEM7QUFFVmhlLFVBQUlBLEVBRk07QUFHVnpiLFlBQU1pWTtBQUhJLEtBQVo7QUFLRCxHQVpEO0FBYUQsQ0FoQkQ7O0FBa0JBOzs7Ozs7O0FBT0FxQixPQUFPMVosU0FBUCxDQUFpQjg1QixLQUFqQixHQUF5QixVQUFVMWMsTUFBVixFQUFrQjtBQUN6QyxNQUFJOGMsTUFBTSxLQUFLckIsSUFBTCxDQUFVemIsT0FBT3ZCLEVBQWpCLENBQVY7QUFDQSxNQUFJLGVBQWUsT0FBT3FlLEdBQTFCLEVBQStCO0FBQzdCNWdCLFVBQU0sd0JBQU4sRUFBZ0M4RCxPQUFPdkIsRUFBdkMsRUFBMkN1QixPQUFPaGQsSUFBbEQ7QUFDQTg1QixRQUFJMXBCLEtBQUosQ0FBVSxJQUFWLEVBQWdCNE0sT0FBT2hkLElBQXZCO0FBQ0EsV0FBTyxLQUFLeTRCLElBQUwsQ0FBVXpiLE9BQU92QixFQUFqQixDQUFQO0FBQ0QsR0FKRCxNQUlPO0FBQ0x2QyxVQUFNLFlBQU4sRUFBb0I4RCxPQUFPdkIsRUFBM0I7QUFDRDtBQUNGLENBVEQ7O0FBV0E7Ozs7OztBQU1BbkMsT0FBTzFaLFNBQVAsQ0FBaUIyNUIsU0FBakIsR0FBNkIsWUFBWTtBQUN2QyxPQUFLWCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNBLE9BQUs1MUIsSUFBTCxDQUFVLFNBQVY7QUFDQSxPQUFLKzJCLFlBQUw7QUFDRCxDQUxEOztBQU9BOzs7Ozs7QUFNQTFnQixPQUFPMVosU0FBUCxDQUFpQm82QixZQUFqQixHQUFnQyxZQUFZO0FBQzFDLE1BQUlsMEIsQ0FBSjtBQUNBLE9BQUtBLElBQUksQ0FBVCxFQUFZQSxJQUFJLEtBQUs0eUIsYUFBTCxDQUFtQjMzQixNQUFuQyxFQUEyQytFLEdBQTNDLEVBQWdEO0FBQzlDN0MsU0FBS21OLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtzb0IsYUFBTCxDQUFtQjV5QixDQUFuQixDQUFqQjtBQUNEO0FBQ0QsT0FBSzR5QixhQUFMLEdBQXFCLEVBQXJCOztBQUVBLE9BQUs1eUIsSUFBSSxDQUFULEVBQVlBLElBQUksS0FBSzZ5QixVQUFMLENBQWdCNTNCLE1BQWhDLEVBQXdDK0UsR0FBeEMsRUFBNkM7QUFDM0MsU0FBS2tYLE1BQUwsQ0FBWSxLQUFLMmIsVUFBTCxDQUFnQjd5QixDQUFoQixDQUFaO0FBQ0Q7QUFDRCxPQUFLNnlCLFVBQUwsR0FBa0IsRUFBbEI7QUFDRCxDQVhEOztBQWFBOzs7Ozs7QUFNQXJmLE9BQU8xWixTQUFQLENBQWlCaTZCLFlBQWpCLEdBQWdDLFlBQVk7QUFDMUMzZ0IsUUFBTSx3QkFBTixFQUFnQyxLQUFLZ2QsR0FBckM7QUFDQSxPQUFLeE0sT0FBTDtBQUNBLE9BQUt2TCxPQUFMLENBQWEsc0JBQWI7QUFDRCxDQUpEOztBQU1BOzs7Ozs7OztBQVFBN0UsT0FBTzFaLFNBQVAsQ0FBaUI4cEIsT0FBakIsR0FBMkIsWUFBWTtBQUNyQyxNQUFJLEtBQUt1TCxJQUFULEVBQWU7QUFDYjtBQUNBLFNBQUssSUFBSW52QixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS212QixJQUFMLENBQVVsMEIsTUFBOUIsRUFBc0MrRSxHQUF0QyxFQUEyQztBQUN6QyxXQUFLbXZCLElBQUwsQ0FBVW52QixDQUFWLEVBQWE0akIsT0FBYjtBQUNEO0FBQ0QsU0FBS3VMLElBQUwsR0FBWSxJQUFaO0FBQ0Q7O0FBRUQsT0FBS3p4QixFQUFMLENBQVFrbUIsT0FBUixDQUFnQixJQUFoQjtBQUNELENBVkQ7O0FBWUE7Ozs7Ozs7QUFPQXBRLE9BQU8xWixTQUFQLENBQWlCb2UsS0FBakIsR0FDQTFFLE9BQU8xWixTQUFQLENBQWlCZzRCLFVBQWpCLEdBQThCLFlBQVk7QUFDeEMsTUFBSSxLQUFLZ0IsU0FBVCxFQUFvQjtBQUNsQjFmLFVBQU0sNEJBQU4sRUFBb0MsS0FBS2dkLEdBQXpDO0FBQ0EsU0FBS2xaLE1BQUwsQ0FBWSxFQUFFelIsTUFBTTBOLE9BQU8yZ0IsVUFBZixFQUFaO0FBQ0Q7O0FBRUQ7QUFDQSxPQUFLbFEsT0FBTDs7QUFFQSxNQUFJLEtBQUtrUCxTQUFULEVBQW9CO0FBQ2xCO0FBQ0EsU0FBS3phLE9BQUwsQ0FBYSxzQkFBYjtBQUNEO0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FmRDs7QUFpQkE7Ozs7Ozs7O0FBUUE3RSxPQUFPMVosU0FBUCxDQUFpQnVmLFFBQWpCLEdBQTRCLFVBQVVBLFFBQVYsRUFBb0I7QUFDOUMsT0FBSzJaLEtBQUwsQ0FBVzNaLFFBQVgsR0FBc0JBLFFBQXRCO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FIRDs7QUFLQTs7Ozs7Ozs7QUFRQTdGLE9BQU8xWixTQUFQLENBQWlCb21CLE1BQWpCLEdBQTBCLFVBQVVBLE1BQVYsRUFBa0I7QUFDMUMsT0FBSzhTLEtBQUwsQ0FBVzlTLE1BQVgsR0FBb0JBLE1BQXBCO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7Ozs7OztBQ2piQTs7OztBQUlBLElBQUk1TSxXQUFXL1UsbUJBQU9BLENBQUMsa0RBQVIsQ0FBZjtBQUNBLElBQUk2VSxRQUFRN1UsbUJBQU9BLENBQUMsZ0ZBQVIsRUFBaUIsc0JBQWpCLENBQVo7O0FBRUE7Ozs7QUFJQUssT0FBT0MsT0FBUCxHQUFpQjR2QixHQUFqQjs7QUFFQTs7Ozs7Ozs7O0FBU0EsU0FBU0EsR0FBVCxDQUFjaGIsR0FBZCxFQUFtQjBnQixHQUFuQixFQUF3QjtBQUN0QixNQUFJNXJCLE1BQU1rTCxHQUFWOztBQUVBO0FBQ0EwZ0IsUUFBTUEsT0FBUSxPQUFPdDVCLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLFFBQWpEO0FBQ0EsTUFBSSxRQUFRNFksR0FBWixFQUFpQkEsTUFBTTBnQixJQUFJdmdCLFFBQUosR0FBZSxJQUFmLEdBQXNCdWdCLElBQUl4Z0IsSUFBaEM7O0FBRWpCO0FBQ0EsTUFBSSxhQUFhLE9BQU9GLEdBQXhCLEVBQTZCO0FBQzNCLFFBQUksUUFBUUEsSUFBSXFTLE1BQUosQ0FBVyxDQUFYLENBQVosRUFBMkI7QUFDekIsVUFBSSxRQUFRclMsSUFBSXFTLE1BQUosQ0FBVyxDQUFYLENBQVosRUFBMkI7QUFDekJyUyxjQUFNMGdCLElBQUl2Z0IsUUFBSixHQUFlSCxHQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMQSxjQUFNMGdCLElBQUl4Z0IsSUFBSixHQUFXRixHQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSSxDQUFDLHNCQUFzQndJLElBQXRCLENBQTJCeEksR0FBM0IsQ0FBTCxFQUFzQztBQUNwQ0wsWUFBTSxzQkFBTixFQUE4QkssR0FBOUI7QUFDQSxVQUFJLGdCQUFnQixPQUFPMGdCLEdBQTNCLEVBQWdDO0FBQzlCMWdCLGNBQU0wZ0IsSUFBSXZnQixRQUFKLEdBQWUsSUFBZixHQUFzQkgsR0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTEEsY0FBTSxhQUFhQSxHQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQUwsVUFBTSxVQUFOLEVBQWtCSyxHQUFsQjtBQUNBbEwsVUFBTStLLFNBQVNHLEdBQVQsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsTUFBSSxDQUFDbEwsSUFBSTFLLElBQVQsRUFBZTtBQUNiLFFBQUksY0FBY29lLElBQWQsQ0FBbUIxVCxJQUFJcUwsUUFBdkIsQ0FBSixFQUFzQztBQUNwQ3JMLFVBQUkxSyxJQUFKLEdBQVcsSUFBWDtBQUNELEtBRkQsTUFFTyxJQUFJLGVBQWVvZSxJQUFmLENBQW9CMVQsSUFBSXFMLFFBQXhCLENBQUosRUFBdUM7QUFDNUNyTCxVQUFJMUssSUFBSixHQUFXLEtBQVg7QUFDRDtBQUNGOztBQUVEMEssTUFBSTNOLElBQUosR0FBVzJOLElBQUkzTixJQUFKLElBQVksR0FBdkI7O0FBRUEsTUFBSTBrQixPQUFPL1csSUFBSW9MLElBQUosQ0FBUzlRLE9BQVQsQ0FBaUIsR0FBakIsTUFBMEIsQ0FBQyxDQUF0QztBQUNBLE1BQUk4USxPQUFPMkwsT0FBTyxNQUFNL1csSUFBSW9MLElBQVYsR0FBaUIsR0FBeEIsR0FBOEJwTCxJQUFJb0wsSUFBN0M7O0FBRUE7QUFDQXBMLE1BQUlvTixFQUFKLEdBQVNwTixJQUFJcUwsUUFBSixHQUFlLEtBQWYsR0FBdUJELElBQXZCLEdBQThCLEdBQTlCLEdBQW9DcEwsSUFBSTFLLElBQWpEO0FBQ0E7QUFDQTBLLE1BQUk2ckIsSUFBSixHQUFXN3JCLElBQUlxTCxRQUFKLEdBQWUsS0FBZixHQUF1QkQsSUFBdkIsSUFBK0J3Z0IsT0FBT0EsSUFBSXQyQixJQUFKLEtBQWEwSyxJQUFJMUssSUFBeEIsR0FBK0IsRUFBL0IsR0FBcUMsTUFBTTBLLElBQUkxSyxJQUE5RSxDQUFYOztBQUVBLFNBQU8wSyxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFFRDs7Ozs7O0FBTUExSixVQUFVRCxPQUFPQyxPQUFQLEdBQWlCTixtQkFBT0EsQ0FBQyxnRkFBUixDQUEzQjtBQUNBTSxRQUFRYixHQUFSLEdBQWNBLEdBQWQ7QUFDQWEsUUFBUTZoQixVQUFSLEdBQXFCQSxVQUFyQjtBQUNBN2hCLFFBQVE4aEIsSUFBUixHQUFlQSxJQUFmO0FBQ0E5aEIsUUFBUStoQixJQUFSLEdBQWVBLElBQWY7QUFDQS9oQixRQUFRZ2lCLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0FoaUIsUUFBUXZCLE9BQVIsR0FBa0IsZUFBZSxPQUFPd2pCLE1BQXRCLElBQ0EsZUFBZSxPQUFPQSxPQUFPeGpCLE9BRDdCLEdBRUV3akIsT0FBT3hqQixPQUFQLENBQWV5akIsS0FGakIsR0FHRUMsY0FIcEI7O0FBS0E7Ozs7QUFJQW5pQixRQUFRb2lCLE1BQVIsR0FBaUIsQ0FDZixTQURlLEVBQ0osU0FESSxFQUNPLFNBRFAsRUFDa0IsU0FEbEIsRUFDNkIsU0FEN0IsRUFDd0MsU0FEeEMsRUFDbUQsU0FEbkQsRUFFZixTQUZlLEVBRUosU0FGSSxFQUVPLFNBRlAsRUFFa0IsU0FGbEIsRUFFNkIsU0FGN0IsRUFFd0MsU0FGeEMsRUFFbUQsU0FGbkQsRUFHZixTQUhlLEVBR0osU0FISSxFQUdPLFNBSFAsRUFHa0IsU0FIbEIsRUFHNkIsU0FIN0IsRUFHd0MsU0FIeEMsRUFHbUQsU0FIbkQsRUFJZixTQUplLEVBSUosU0FKSSxFQUlPLFNBSlAsRUFJa0IsU0FKbEIsRUFJNkIsU0FKN0IsRUFJd0MsU0FKeEMsRUFJbUQsU0FKbkQsRUFLZixTQUxlLEVBS0osU0FMSSxFQUtPLFNBTFAsRUFLa0IsU0FMbEIsRUFLNkIsU0FMN0IsRUFLd0MsU0FMeEMsRUFLbUQsU0FMbkQsRUFNZixTQU5lLEVBTUosU0FOSSxFQU1PLFNBTlAsRUFNa0IsU0FObEIsRUFNNkIsU0FON0IsRUFNd0MsU0FOeEMsRUFNbUQsU0FObkQsRUFPZixTQVBlLEVBT0osU0FQSSxFQU9PLFNBUFAsRUFPa0IsU0FQbEIsRUFPNkIsU0FQN0IsRUFPd0MsU0FQeEMsRUFPbUQsU0FQbkQsRUFRZixTQVJlLEVBUUosU0FSSSxFQVFPLFNBUlAsRUFRa0IsU0FSbEIsRUFRNkIsU0FSN0IsRUFRd0MsU0FSeEMsRUFRbUQsU0FSbkQsRUFTZixTQVRlLEVBU0osU0FUSSxFQVNPLFNBVFAsRUFTa0IsU0FUbEIsRUFTNkIsU0FUN0IsRUFTd0MsU0FUeEMsRUFTbUQsU0FUbkQsRUFVZixTQVZlLEVBVUosU0FWSSxFQVVPLFNBVlAsRUFVa0IsU0FWbEIsRUFVNkIsU0FWN0IsRUFVd0MsU0FWeEMsRUFVbUQsU0FWbkQsRUFXZixTQVhlLEVBV0osU0FYSSxFQVdPLFNBWFAsRUFXa0IsU0FYbEIsRUFXNkIsU0FYN0IsRUFXd0MsU0FYeEMsQ0FBakI7O0FBY0E7Ozs7Ozs7O0FBUUEsU0FBU0osU0FBVCxHQUFxQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxNQUFJLE9BQU9ubUIsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT3dtQixPQUF4QyxJQUFtRHhtQixPQUFPd21CLE9BQVAsQ0FBZXpiLElBQWYsS0FBd0IsVUFBL0UsRUFBMkY7QUFDekYsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFJLE9BQU9ySyxTQUFQLEtBQXFCLFdBQXJCLElBQW9DQSxVQUFVRyxTQUE5QyxJQUEyREgsVUFBVUcsU0FBVixDQUFvQnlOLFdBQXBCLEdBQWtDMEIsS0FBbEMsQ0FBd0MsdUJBQXhDLENBQS9ELEVBQWlJO0FBQy9ILFdBQU8sS0FBUDtBQUNEOztBQUVEO0FBQ0E7QUFDQSxTQUFRLE9BQU9wUSxRQUFQLEtBQW9CLFdBQXBCLElBQW1DQSxTQUFTNm1CLGVBQTVDLElBQStEN21CLFNBQVM2bUIsZUFBVCxDQUF5QjdFLEtBQXhGLElBQWlHaGlCLFNBQVM2bUIsZUFBVCxDQUF5QjdFLEtBQXpCLENBQStCOEUsZ0JBQWpJO0FBQ0w7QUFDQyxTQUFPMW1CLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9xRCxPQUF4QyxLQUFvRHJELE9BQU9xRCxPQUFQLENBQWVzakIsT0FBZixJQUEyQjNtQixPQUFPcUQsT0FBUCxDQUFldWpCLFNBQWYsSUFBNEI1bUIsT0FBT3FELE9BQVAsQ0FBZXdqQixLQUExSCxDQUZJO0FBR0w7QUFDQTtBQUNDLFNBQU9ubUIsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsVUFBVUcsU0FBOUMsSUFBMkRILFVBQVVHLFNBQVYsQ0FBb0J5TixXQUFwQixHQUFrQzBCLEtBQWxDLENBQXdDLGdCQUF4QyxDQUEzRCxJQUF3SDJCLFNBQVNtVixPQUFPQyxFQUFoQixFQUFvQixFQUFwQixLQUEyQixFQUwvSTtBQU1MO0FBQ0MsU0FBT3JtQixTQUFQLEtBQXFCLFdBQXJCLElBQW9DQSxVQUFVRyxTQUE5QyxJQUEyREgsVUFBVUcsU0FBVixDQUFvQnlOLFdBQXBCLEdBQWtDMEIsS0FBbEMsQ0FBd0Msb0JBQXhDLENBUDlEO0FBUUQ7O0FBRUQ7Ozs7QUFJQTdMLFFBQVE2aUIsVUFBUixDQUFtQjVWLENBQW5CLEdBQXVCLFVBQVM2VixDQUFULEVBQVk7QUFDakMsTUFBSTtBQUNGLFdBQU9oSixLQUFLaUosU0FBTCxDQUFlRCxDQUFmLENBQVA7QUFDRCxHQUZELENBRUUsT0FBT3RpQixHQUFQLEVBQVk7QUFDWixXQUFPLGlDQUFpQ0EsSUFBSXdpQixPQUE1QztBQUNEO0FBQ0YsQ0FORDs7QUFTQTs7Ozs7O0FBTUEsU0FBU25CLFVBQVQsQ0FBb0J2TyxJQUFwQixFQUEwQjtBQUN4QixNQUFJME8sWUFBWSxLQUFLQSxTQUFyQjs7QUFFQTFPLE9BQUssQ0FBTCxJQUFVLENBQUMwTyxZQUFZLElBQVosR0FBbUIsRUFBcEIsSUFDTixLQUFLaUIsU0FEQyxJQUVMakIsWUFBWSxLQUFaLEdBQW9CLEdBRmYsSUFHTjFPLEtBQUssQ0FBTCxDQUhNLElBSUwwTyxZQUFZLEtBQVosR0FBb0IsR0FKZixJQUtOLEdBTE0sR0FLQWhpQixRQUFRa2pCLFFBQVIsQ0FBaUIsS0FBS0MsSUFBdEIsQ0FMVjs7QUFPQSxNQUFJLENBQUNuQixTQUFMLEVBQWdCOztBQUVoQixNQUFJL08sSUFBSSxZQUFZLEtBQUtuVixLQUF6QjtBQUNBd1YsT0FBS1ksTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCakIsQ0FBbEIsRUFBcUIsZ0JBQXJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUl1QixRQUFRLENBQVo7QUFDQSxNQUFJNE8sUUFBUSxDQUFaO0FBQ0E5UCxPQUFLLENBQUwsRUFBUVgsT0FBUixDQUFnQixhQUFoQixFQUErQixVQUFTOUcsS0FBVCxFQUFnQjtBQUM3QyxRQUFJLFNBQVNBLEtBQWIsRUFBb0I7QUFDcEIySTtBQUNBLFFBQUksU0FBUzNJLEtBQWIsRUFBb0I7QUFDbEI7QUFDQTtBQUNBdVgsY0FBUTVPLEtBQVI7QUFDRDtBQUNGLEdBUkQ7O0FBVUFsQixPQUFLWSxNQUFMLENBQVlrUCxLQUFaLEVBQW1CLENBQW5CLEVBQXNCblEsQ0FBdEI7QUFDRDs7QUFFRDs7Ozs7OztBQU9BLFNBQVM5VCxHQUFULEdBQWU7QUFDYjtBQUNBO0FBQ0EsU0FBTyxxQkFBb0JELE9BQXBCLHlDQUFvQkEsT0FBcEIsTUFDRkEsUUFBUUMsR0FETixJQUVGa2tCLFNBQVNwb0IsU0FBVCxDQUFtQndRLEtBQW5CLENBQXlCZSxJQUF6QixDQUE4QnROLFFBQVFDLEdBQXRDLEVBQTJDRCxPQUEzQyxFQUFvRHNNLFNBQXBELENBRkw7QUFHRDs7QUFFRDs7Ozs7OztBQU9BLFNBQVNzVyxJQUFULENBQWN3QixVQUFkLEVBQTBCO0FBQ3hCLE1BQUk7QUFDRixRQUFJLFFBQVFBLFVBQVosRUFBd0I7QUFDdEJ0akIsY0FBUXZCLE9BQVIsQ0FBZ0I4a0IsVUFBaEIsQ0FBMkIsT0FBM0I7QUFDRCxLQUZELE1BRU87QUFDTHZqQixjQUFRdkIsT0FBUixDQUFnQjhWLEtBQWhCLEdBQXdCK08sVUFBeEI7QUFDRDtBQUNGLEdBTkQsQ0FNRSxPQUFNNWQsQ0FBTixFQUFTLENBQUU7QUFDZDs7QUFFRDs7Ozs7OztBQU9BLFNBQVNxYyxJQUFULEdBQWdCO0FBQ2QsTUFBSXlCLENBQUo7QUFDQSxNQUFJO0FBQ0ZBLFFBQUl4akIsUUFBUXZCLE9BQVIsQ0FBZ0I4VixLQUFwQjtBQUNELEdBRkQsQ0FFRSxPQUFNN08sQ0FBTixFQUFTLENBQUU7O0FBRWI7QUFDQSxNQUFJLENBQUM4ZCxDQUFELElBQU0sT0FBT25CLE9BQVAsS0FBbUIsV0FBekIsSUFBd0MsU0FBU0EsT0FBckQsRUFBOEQ7QUFDNURtQixRQUFJbkIsUUFBUW9CLEdBQVIsQ0FBWUMsS0FBaEI7QUFDRDs7QUFFRCxTQUFPRixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7QUFJQXhqQixRQUFRMmpCLE1BQVIsQ0FBZTVCLE1BQWY7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0EsU0FBU0ksWUFBVCxHQUF3QjtBQUN0QixNQUFJO0FBQ0YsV0FBT3RtQixPQUFPK25CLFlBQWQ7QUFDRCxHQUZELENBRUUsT0FBT2xlLENBQVAsRUFBVSxDQUFFO0FBQ2YsQzs7Ozs7Ozs7Ozs7Ozs7O0FDak1EOzs7Ozs7O0FBT0ExRixVQUFVRCxPQUFPQyxPQUFQLEdBQWlCNmpCLFlBQVl0UCxLQUFaLEdBQW9Cc1AsWUFBWSxTQUFaLElBQXlCQSxXQUF4RTtBQUNBN2pCLFFBQVE4akIsTUFBUixHQUFpQkEsTUFBakI7QUFDQTlqQixRQUFRK2pCLE9BQVIsR0FBa0JBLE9BQWxCO0FBQ0EvakIsUUFBUTJqQixNQUFSLEdBQWlCQSxNQUFqQjtBQUNBM2pCLFFBQVFna0IsT0FBUixHQUFrQkEsT0FBbEI7QUFDQWhrQixRQUFRa2pCLFFBQVIsR0FBbUJ4akIsbUJBQU9BLENBQUMsc0NBQVIsQ0FBbkI7O0FBRUE7OztBQUdBTSxRQUFRaWtCLFNBQVIsR0FBb0IsRUFBcEI7O0FBRUE7Ozs7QUFJQWprQixRQUFRa2tCLEtBQVIsR0FBZ0IsRUFBaEI7QUFDQWxrQixRQUFRbWtCLEtBQVIsR0FBZ0IsRUFBaEI7O0FBRUE7Ozs7OztBQU1BbmtCLFFBQVE2aUIsVUFBUixHQUFxQixFQUFyQjs7QUFFQTs7Ozs7OztBQU9BLFNBQVN1QixXQUFULENBQXFCbkIsU0FBckIsRUFBZ0M7QUFDOUIsTUFBSW9CLE9BQU8sQ0FBWDtBQUFBLE1BQWNsakIsQ0FBZDs7QUFFQSxPQUFLQSxDQUFMLElBQVU4aEIsU0FBVixFQUFxQjtBQUNuQm9CLFdBQVMsQ0FBQ0EsUUFBUSxDQUFULElBQWNBLElBQWYsR0FBdUJwQixVQUFVdGdCLFVBQVYsQ0FBcUJ4QixDQUFyQixDQUEvQjtBQUNBa2pCLFlBQVEsQ0FBUixDQUZtQixDQUVSO0FBQ1o7O0FBRUQsU0FBT3JrQixRQUFRb2lCLE1BQVIsQ0FBZXJnQixLQUFLdWlCLEdBQUwsQ0FBU0QsSUFBVCxJQUFpQnJrQixRQUFRb2lCLE1BQVIsQ0FBZWhtQixNQUEvQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O0FBUUEsU0FBU3luQixXQUFULENBQXFCWixTQUFyQixFQUFnQzs7QUFFOUIsTUFBSXNCLFFBQUo7O0FBRUEsV0FBU2hRLEtBQVQsR0FBaUI7QUFDZjtBQUNBLFFBQUksQ0FBQ0EsTUFBTXlQLE9BQVgsRUFBb0I7O0FBRXBCLFFBQUl0TixPQUFPbkMsS0FBWDs7QUFFQTtBQUNBLFFBQUlpUSxPQUFPLENBQUMsSUFBSXJtQixJQUFKLEVBQVo7QUFDQSxRQUFJcUQsS0FBS2dqQixRQUFRRCxZQUFZQyxJQUFwQixDQUFUO0FBQ0E5TixTQUFLeU0sSUFBTCxHQUFZM2hCLEVBQVo7QUFDQWtWLFNBQUsrTixJQUFMLEdBQVlGLFFBQVo7QUFDQTdOLFNBQUs4TixJQUFMLEdBQVlBLElBQVo7QUFDQUQsZUFBV0MsSUFBWDs7QUFFQTtBQUNBLFFBQUlsUixPQUFPLElBQUkzUCxLQUFKLENBQVU2SCxVQUFVcFAsTUFBcEIsQ0FBWDtBQUNBLFNBQUssSUFBSStFLElBQUksQ0FBYixFQUFnQkEsSUFBSW1TLEtBQUtsWCxNQUF6QixFQUFpQytFLEdBQWpDLEVBQXNDO0FBQ3BDbVMsV0FBS25TLENBQUwsSUFBVXFLLFVBQVVySyxDQUFWLENBQVY7QUFDRDs7QUFFRG1TLFNBQUssQ0FBTCxJQUFVdFQsUUFBUThqQixNQUFSLENBQWV4USxLQUFLLENBQUwsQ0FBZixDQUFWOztBQUVBLFFBQUksYUFBYSxPQUFPQSxLQUFLLENBQUwsQ0FBeEIsRUFBaUM7QUFDL0I7QUFDQUEsV0FBS29SLE9BQUwsQ0FBYSxJQUFiO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJbFEsUUFBUSxDQUFaO0FBQ0FsQixTQUFLLENBQUwsSUFBVUEsS0FBSyxDQUFMLEVBQVFYLE9BQVIsQ0FBZ0IsZUFBaEIsRUFBaUMsVUFBUzlHLEtBQVQsRUFBZ0I4WSxNQUFoQixFQUF3QjtBQUNqRTtBQUNBLFVBQUk5WSxVQUFVLElBQWQsRUFBb0IsT0FBT0EsS0FBUDtBQUNwQjJJO0FBQ0EsVUFBSW9RLFlBQVk1a0IsUUFBUTZpQixVQUFSLENBQW1COEIsTUFBbkIsQ0FBaEI7QUFDQSxVQUFJLGVBQWUsT0FBT0MsU0FBMUIsRUFBcUM7QUFDbkMsWUFBSXhZLE1BQU1rSCxLQUFLa0IsS0FBTCxDQUFWO0FBQ0EzSSxnQkFBUStZLFVBQVVwWSxJQUFWLENBQWVrSyxJQUFmLEVBQXFCdEssR0FBckIsQ0FBUjs7QUFFQTtBQUNBa0gsYUFBS1ksTUFBTCxDQUFZTSxLQUFaLEVBQW1CLENBQW5CO0FBQ0FBO0FBQ0Q7QUFDRCxhQUFPM0ksS0FBUDtBQUNELEtBZFMsQ0FBVjs7QUFnQkE7QUFDQTdMLFlBQVE2aEIsVUFBUixDQUFtQnJWLElBQW5CLENBQXdCa0ssSUFBeEIsRUFBOEJwRCxJQUE5Qjs7QUFFQSxRQUFJdVIsUUFBUXRRLE1BQU1wVixHQUFOLElBQWFhLFFBQVFiLEdBQXJCLElBQTRCRCxRQUFRQyxHQUFSLENBQVkybEIsSUFBWixDQUFpQjVsQixPQUFqQixDQUF4QztBQUNBMmxCLFVBQU1wWixLQUFOLENBQVlpTCxJQUFaLEVBQWtCcEQsSUFBbEI7QUFDRDs7QUFFRGlCLFFBQU0wTyxTQUFOLEdBQWtCQSxTQUFsQjtBQUNBMU8sUUFBTXlQLE9BQU4sR0FBZ0Joa0IsUUFBUWdrQixPQUFSLENBQWdCZixTQUFoQixDQUFoQjtBQUNBMU8sUUFBTXlOLFNBQU4sR0FBa0JoaUIsUUFBUWdpQixTQUFSLEVBQWxCO0FBQ0F6TixRQUFNelcsS0FBTixHQUFjc21CLFlBQVluQixTQUFaLENBQWQ7QUFDQTFPLFFBQU13USxPQUFOLEdBQWdCQSxPQUFoQjs7QUFFQTtBQUNBLE1BQUksZUFBZSxPQUFPL2tCLFFBQVFnbEIsSUFBbEMsRUFBd0M7QUFDdENobEIsWUFBUWdsQixJQUFSLENBQWF6USxLQUFiO0FBQ0Q7O0FBRUR2VSxVQUFRaWtCLFNBQVIsQ0FBa0JyZixJQUFsQixDQUF1QjJQLEtBQXZCOztBQUVBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTd1EsT0FBVCxHQUFvQjtBQUNsQixNQUFJdlEsUUFBUXhVLFFBQVFpa0IsU0FBUixDQUFrQmpnQixPQUFsQixDQUEwQixJQUExQixDQUFaO0FBQ0EsTUFBSXdRLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCeFUsWUFBUWlrQixTQUFSLENBQWtCL1AsTUFBbEIsQ0FBeUJNLEtBQXpCLEVBQWdDLENBQWhDO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsV0FBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7QUFRQSxTQUFTbVAsTUFBVCxDQUFnQkwsVUFBaEIsRUFBNEI7QUFDMUJ0akIsVUFBUThoQixJQUFSLENBQWF3QixVQUFiOztBQUVBdGpCLFVBQVFra0IsS0FBUixHQUFnQixFQUFoQjtBQUNBbGtCLFVBQVFta0IsS0FBUixHQUFnQixFQUFoQjs7QUFFQSxNQUFJaGpCLENBQUo7QUFDQSxNQUFJOGpCLFFBQVEsQ0FBQyxPQUFPM0IsVUFBUCxLQUFzQixRQUF0QixHQUFpQ0EsVUFBakMsR0FBOEMsRUFBL0MsRUFBbUQyQixLQUFuRCxDQUF5RCxRQUF6RCxDQUFaO0FBQ0EsTUFBSXBpQixNQUFNb2lCLE1BQU03b0IsTUFBaEI7O0FBRUEsT0FBSytFLElBQUksQ0FBVCxFQUFZQSxJQUFJMEIsR0FBaEIsRUFBcUIxQixHQUFyQixFQUEwQjtBQUN4QixRQUFJLENBQUM4akIsTUFBTTlqQixDQUFOLENBQUwsRUFBZSxTQURTLENBQ0M7QUFDekJtaUIsaUJBQWEyQixNQUFNOWpCLENBQU4sRUFBU3dSLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsS0FBeEIsQ0FBYjtBQUNBLFFBQUkyUSxXQUFXLENBQVgsTUFBa0IsR0FBdEIsRUFBMkI7QUFDekJ0akIsY0FBUW1rQixLQUFSLENBQWN2ZixJQUFkLENBQW1CLElBQUkrZCxNQUFKLENBQVcsTUFBTVcsV0FBVzdWLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBTixHQUE2QixHQUF4QyxDQUFuQjtBQUNELEtBRkQsTUFFTztBQUNMek4sY0FBUWtrQixLQUFSLENBQWN0ZixJQUFkLENBQW1CLElBQUkrZCxNQUFKLENBQVcsTUFBTVcsVUFBTixHQUFtQixHQUE5QixDQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsT0FBS25pQixJQUFJLENBQVQsRUFBWUEsSUFBSW5CLFFBQVFpa0IsU0FBUixDQUFrQjduQixNQUFsQyxFQUEwQytFLEdBQTFDLEVBQStDO0FBQzdDLFFBQUkrakIsV0FBV2xsQixRQUFRaWtCLFNBQVIsQ0FBa0I5aUIsQ0FBbEIsQ0FBZjtBQUNBK2pCLGFBQVNsQixPQUFULEdBQW1CaGtCLFFBQVFna0IsT0FBUixDQUFnQmtCLFNBQVNqQyxTQUF6QixDQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7OztBQU1BLFNBQVNjLE9BQVQsR0FBbUI7QUFDakIvakIsVUFBUTJqQixNQUFSLENBQWUsRUFBZjtBQUNEOztBQUVEOzs7Ozs7OztBQVFBLFNBQVNLLE9BQVQsQ0FBaUJ4TSxJQUFqQixFQUF1QjtBQUNyQixNQUFJQSxLQUFLQSxLQUFLcGIsTUFBTCxHQUFjLENBQW5CLE1BQTBCLEdBQTlCLEVBQW1DO0FBQ2pDLFdBQU8sSUFBUDtBQUNEO0FBQ0QsTUFBSStFLENBQUosRUFBTzBCLEdBQVA7QUFDQSxPQUFLMUIsSUFBSSxDQUFKLEVBQU8wQixNQUFNN0MsUUFBUW1rQixLQUFSLENBQWMvbkIsTUFBaEMsRUFBd0MrRSxJQUFJMEIsR0FBNUMsRUFBaUQxQixHQUFqRCxFQUFzRDtBQUNwRCxRQUFJbkIsUUFBUW1rQixLQUFSLENBQWNoakIsQ0FBZCxFQUFpQmljLElBQWpCLENBQXNCNUYsSUFBdEIsQ0FBSixFQUFpQztBQUMvQixhQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0QsT0FBS3JXLElBQUksQ0FBSixFQUFPMEIsTUFBTTdDLFFBQVFra0IsS0FBUixDQUFjOW5CLE1BQWhDLEVBQXdDK0UsSUFBSTBCLEdBQTVDLEVBQWlEMUIsR0FBakQsRUFBc0Q7QUFDcEQsUUFBSW5CLFFBQVFra0IsS0FBUixDQUFjL2lCLENBQWQsRUFBaUJpYyxJQUFqQixDQUFzQjVGLElBQXRCLENBQUosRUFBaUM7QUFDL0IsYUFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNELFNBQU8sS0FBUDtBQUNEOztBQUVEOzs7Ozs7OztBQVFBLFNBQVNzTSxNQUFULENBQWdCMVgsR0FBaEIsRUFBcUI7QUFDbkIsTUFBSUEsZUFBZTdNLEtBQW5CLEVBQTBCLE9BQU82TSxJQUFJK1ksS0FBSixJQUFhL1ksSUFBSTRXLE9BQXhCO0FBQzFCLFNBQU81VyxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hPRDs7QUFFQTs7OztBQUlBLElBQUlwRixVQUFVdEgsbUJBQU9BLENBQUMsOEVBQVIsQ0FBZDtBQUNBLElBQUk4MUIsUUFBUTkxQixtQkFBT0EsQ0FBQyxpRUFBUixDQUFaO0FBQ0EsSUFBSW1LLFdBQVdsQixPQUFPMU4sU0FBUCxDQUFpQjRPLFFBQWhDO0FBQ0EsSUFBSTJnQixpQkFBaUIsT0FBT2hsQixJQUFQLEtBQWdCLFVBQWhCLElBQStCLE9BQU9BLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JxRSxTQUFTMkMsSUFBVCxDQUFjaEgsSUFBZCxNQUF3QiwwQkFBM0c7QUFDQSxJQUFJaWxCLGlCQUFpQixPQUFPQyxJQUFQLEtBQWdCLFVBQWhCLElBQStCLE9BQU9BLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0I3Z0IsU0FBUzJDLElBQVQsQ0FBY2tlLElBQWQsTUFBd0IsMEJBQTNHOztBQUVBOzs7Ozs7Ozs7O0FBVUExcUIsUUFBUXkxQixpQkFBUixHQUE0QixVQUFTcGQsTUFBVCxFQUFpQjtBQUMzQyxNQUFJMFEsVUFBVSxFQUFkO0FBQ0EsTUFBSTJNLGFBQWFyZCxPQUFPaGQsSUFBeEI7QUFDQSxNQUFJMDNCLE9BQU8xYSxNQUFYO0FBQ0EwYSxPQUFLMTNCLElBQUwsR0FBWXM2QixtQkFBbUJELFVBQW5CLEVBQStCM00sT0FBL0IsQ0FBWjtBQUNBZ0ssT0FBSzZDLFdBQUwsR0FBbUI3TSxRQUFRM3NCLE1BQTNCLENBTDJDLENBS1I7QUFDbkMsU0FBTyxFQUFDaWMsUUFBUTBhLElBQVQsRUFBZWhLLFNBQVNBLE9BQXhCLEVBQVA7QUFDRCxDQVBEOztBQVNBLFNBQVM0TSxrQkFBVCxDQUE0QnQ2QixJQUE1QixFQUFrQzB0QixPQUFsQyxFQUEyQztBQUN6QyxNQUFJLENBQUMxdEIsSUFBTCxFQUFXLE9BQU9BLElBQVA7O0FBRVgsTUFBSW02QixNQUFNbjZCLElBQU4sQ0FBSixFQUFpQjtBQUNmLFFBQUl3NkIsY0FBYyxFQUFFQyxjQUFjLElBQWhCLEVBQXNCdHhCLEtBQUt1a0IsUUFBUTNzQixNQUFuQyxFQUFsQjtBQUNBMnNCLFlBQVFua0IsSUFBUixDQUFhdkosSUFBYjtBQUNBLFdBQU93NkIsV0FBUDtBQUNELEdBSkQsTUFJTyxJQUFJN3VCLFFBQVEzTCxJQUFSLENBQUosRUFBbUI7QUFDeEIsUUFBSTA2QixVQUFVLElBQUlweUIsS0FBSixDQUFVdEksS0FBS2UsTUFBZixDQUFkO0FBQ0EsU0FBSyxJQUFJK0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJOUYsS0FBS2UsTUFBekIsRUFBaUMrRSxHQUFqQyxFQUFzQztBQUNwQzQwQixjQUFRNTBCLENBQVIsSUFBYXcwQixtQkFBbUJ0NkIsS0FBSzhGLENBQUwsQ0FBbkIsRUFBNEI0bkIsT0FBNUIsQ0FBYjtBQUNEO0FBQ0QsV0FBT2dOLE9BQVA7QUFDRCxHQU5NLE1BTUEsSUFBSSxRQUFPMTZCLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBaEIsSUFBNEIsRUFBRUEsZ0JBQWdCOEMsSUFBbEIsQ0FBaEMsRUFBeUQ7QUFDOUQsUUFBSTQzQixVQUFVLEVBQWQ7QUFDQSxTQUFLLElBQUl0aUIsR0FBVCxJQUFnQnBZLElBQWhCLEVBQXNCO0FBQ3BCMDZCLGNBQVF0aUIsR0FBUixJQUFla2lCLG1CQUFtQnQ2QixLQUFLb1ksR0FBTCxDQUFuQixFQUE4QnNWLE9BQTlCLENBQWY7QUFDRDtBQUNELFdBQU9nTixPQUFQO0FBQ0Q7QUFDRCxTQUFPMTZCLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O0FBU0EyRSxRQUFRZzJCLGlCQUFSLEdBQTRCLFVBQVMzZCxNQUFULEVBQWlCMFEsT0FBakIsRUFBMEI7QUFDcEQxUSxTQUFPaGQsSUFBUCxHQUFjNDZCLG1CQUFtQjVkLE9BQU9oZCxJQUExQixFQUFnQzB0QixPQUFoQyxDQUFkO0FBQ0ExUSxTQUFPdWQsV0FBUCxHQUFxQjl1QixTQUFyQixDQUZvRCxDQUVwQjtBQUNoQyxTQUFPdVIsTUFBUDtBQUNELENBSkQ7O0FBTUEsU0FBUzRkLGtCQUFULENBQTRCNTZCLElBQTVCLEVBQWtDMHRCLE9BQWxDLEVBQTJDO0FBQ3pDLE1BQUksQ0FBQzF0QixJQUFMLEVBQVcsT0FBT0EsSUFBUDs7QUFFWCxNQUFJQSxRQUFRQSxLQUFLeTZCLFlBQWpCLEVBQStCO0FBQzdCLFdBQU8vTSxRQUFRMXRCLEtBQUttSixHQUFiLENBQVAsQ0FENkIsQ0FDSDtBQUMzQixHQUZELE1BRU8sSUFBSXdDLFFBQVEzTCxJQUFSLENBQUosRUFBbUI7QUFDeEIsU0FBSyxJQUFJOEYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJOUYsS0FBS2UsTUFBekIsRUFBaUMrRSxHQUFqQyxFQUFzQztBQUNwQzlGLFdBQUs4RixDQUFMLElBQVU4MEIsbUJBQW1CNTZCLEtBQUs4RixDQUFMLENBQW5CLEVBQTRCNG5CLE9BQTVCLENBQVY7QUFDRDtBQUNGLEdBSk0sTUFJQSxJQUFJLFFBQU8xdEIsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFwQixFQUE4QjtBQUNuQyxTQUFLLElBQUlvWSxHQUFULElBQWdCcFksSUFBaEIsRUFBc0I7QUFDcEJBLFdBQUtvWSxHQUFMLElBQVl3aUIsbUJBQW1CNTZCLEtBQUtvWSxHQUFMLENBQW5CLEVBQThCc1YsT0FBOUIsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTzF0QixJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7QUFVQTJFLFFBQVFrMkIsV0FBUixHQUFzQixVQUFTNzZCLElBQVQsRUFBZThFLFFBQWYsRUFBeUI7QUFDN0MsV0FBU2cyQixZQUFULENBQXNCenNCLEdBQXRCLEVBQTJCMHNCLE1BQTNCLEVBQW1DQyxnQkFBbkMsRUFBcUQ7QUFDbkQsUUFBSSxDQUFDM3NCLEdBQUwsRUFBVSxPQUFPQSxHQUFQOztBQUVWO0FBQ0EsUUFBSzhnQixrQkFBa0I5Z0IsZUFBZWxFLElBQWxDLElBQ0NpbEIsa0JBQWtCL2dCLGVBQWVnaEIsSUFEdEMsRUFDNkM7QUFDM0M0TDs7QUFFQTtBQUNBLFVBQUlDLGFBQWEsSUFBSS9QLFVBQUosRUFBakI7QUFDQStQLGlCQUFXalksTUFBWCxHQUFvQixZQUFXO0FBQUU7QUFDL0IsWUFBSStYLGdCQUFKLEVBQXNCO0FBQ3BCQSwyQkFBaUJELE1BQWpCLElBQTJCLEtBQUszMUIsTUFBaEM7QUFDRCxTQUZELE1BR0s7QUFDSCsxQix5QkFBZSxLQUFLLzFCLE1BQXBCO0FBQ0Q7O0FBRUQ7QUFDQSxZQUFHLENBQUUsR0FBRTYxQixZQUFQLEVBQXFCO0FBQ25CbjJCLG1CQUFTcTJCLFlBQVQ7QUFDRDtBQUNGLE9BWkQ7O0FBY0FELGlCQUFXOVAsaUJBQVgsQ0FBNkIvYyxHQUE3QixFQW5CMkMsQ0FtQlI7QUFDcEMsS0FyQkQsTUFxQk8sSUFBSTFDLFFBQVEwQyxHQUFSLENBQUosRUFBa0I7QUFBRTtBQUN6QixXQUFLLElBQUl2SSxJQUFJLENBQWIsRUFBZ0JBLElBQUl1SSxJQUFJdE4sTUFBeEIsRUFBZ0MrRSxHQUFoQyxFQUFxQztBQUNuQ2cxQixxQkFBYXpzQixJQUFJdkksQ0FBSixDQUFiLEVBQXFCQSxDQUFyQixFQUF3QnVJLEdBQXhCO0FBQ0Q7QUFDRixLQUpNLE1BSUEsSUFBSSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBZixJQUEyQixDQUFDOHJCLE1BQU05ckIsR0FBTixDQUFoQyxFQUE0QztBQUFFO0FBQ25ELFdBQUssSUFBSStKLEdBQVQsSUFBZ0IvSixHQUFoQixFQUFxQjtBQUNuQnlzQixxQkFBYXpzQixJQUFJK0osR0FBSixDQUFiLEVBQXVCQSxHQUF2QixFQUE0Qi9KLEdBQTVCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUk0c0IsZUFBZSxDQUFuQjtBQUNBLE1BQUlFLGVBQWVuN0IsSUFBbkI7QUFDQTg2QixlQUFhSyxZQUFiO0FBQ0EsTUFBSSxDQUFDRixZQUFMLEVBQW1CO0FBQ2pCbjJCLGFBQVNxMkIsWUFBVDtBQUNEO0FBQ0YsQ0EzQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7Ozs7QUFJQSxJQUFJamlCLFFBQVE3VSxtQkFBT0EsQ0FBQyxnRkFBUixFQUFpQixrQkFBakIsQ0FBWjtBQUNBLElBQUk2VCxVQUFVN1QsbUJBQU9BLENBQUMsb0VBQVIsQ0FBZDtBQUNBLElBQUkyaEIsU0FBUzNoQixtQkFBT0EsQ0FBQywyREFBUixDQUFiO0FBQ0EsSUFBSXNILFVBQVV0SCxtQkFBT0EsQ0FBQyw4RUFBUixDQUFkO0FBQ0EsSUFBSTgxQixRQUFROTFCLG1CQUFPQSxDQUFDLGlFQUFSLENBQVo7O0FBRUE7Ozs7OztBQU1BTSxRQUFRK1UsUUFBUixHQUFtQixDQUFuQjs7QUFFQTs7Ozs7O0FBTUEvVSxRQUFReTJCLEtBQVIsR0FBZ0IsQ0FDZCxTQURjLEVBRWQsWUFGYyxFQUdkLE9BSGMsRUFJZCxLQUpjLEVBS2QsT0FMYyxFQU1kLGNBTmMsRUFPZCxZQVBjLENBQWhCOztBQVVBOzs7Ozs7QUFNQXoyQixRQUFRdzBCLE9BQVIsR0FBa0IsQ0FBbEI7O0FBRUE7Ozs7OztBQU1BeDBCLFFBQVFpMUIsVUFBUixHQUFxQixDQUFyQjs7QUFFQTs7Ozs7O0FBTUFqMUIsUUFBUXMwQixLQUFSLEdBQWdCLENBQWhCOztBQUVBOzs7Ozs7QUFNQXQwQixRQUFRODBCLEdBQVIsR0FBYyxDQUFkOztBQUVBOzs7Ozs7QUFNQTkwQixRQUFRMjBCLEtBQVIsR0FBZ0IsQ0FBaEI7O0FBRUE7Ozs7OztBQU1BMzBCLFFBQVFxMEIsWUFBUixHQUF1QixDQUF2Qjs7QUFFQTs7Ozs7O0FBTUFyMEIsUUFBUWcxQixVQUFSLEdBQXFCLENBQXJCOztBQUVBOzs7Ozs7QUFNQWgxQixRQUFRa3hCLE9BQVIsR0FBa0JBLE9BQWxCOztBQUVBOzs7Ozs7QUFNQWx4QixRQUFRb3hCLE9BQVIsR0FBa0JBLE9BQWxCOztBQUVBOzs7Ozs7QUFNQSxTQUFTRixPQUFULEdBQW1CLENBQUU7O0FBRXJCLElBQUl3RixlQUFlMTJCLFFBQVEyMEIsS0FBUixHQUFnQixnQkFBbkM7O0FBRUE7Ozs7Ozs7Ozs7QUFVQXpELFFBQVFqMkIsU0FBUixDQUFrQjJILE1BQWxCLEdBQTJCLFVBQVM4RyxHQUFULEVBQWN2SixRQUFkLEVBQXVCO0FBQ2hEb1UsUUFBTSxvQkFBTixFQUE0QjdLLEdBQTVCOztBQUVBLE1BQUkxSixRQUFRcTBCLFlBQVIsS0FBeUIzcUIsSUFBSTlDLElBQTdCLElBQXFDNUcsUUFBUWcxQixVQUFSLEtBQXVCdHJCLElBQUk5QyxJQUFwRSxFQUEwRTtBQUN4RSt2QixtQkFBZWp0QixHQUFmLEVBQW9CdkosUUFBcEI7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFJOEksV0FBVzJ0QixlQUFlbHRCLEdBQWYsQ0FBZjtBQUNBdkosYUFBUyxDQUFDOEksUUFBRCxDQUFUO0FBQ0Q7QUFDRixDQVREOztBQVdBOzs7Ozs7OztBQVFBLFNBQVMydEIsY0FBVCxDQUF3Qmx0QixHQUF4QixFQUE2Qjs7QUFFM0I7QUFDQSxNQUFJa0MsTUFBTSxLQUFLbEMsSUFBSTlDLElBQW5COztBQUVBO0FBQ0EsTUFBSTVHLFFBQVFxMEIsWUFBUixLQUF5QjNxQixJQUFJOUMsSUFBN0IsSUFBcUM1RyxRQUFRZzFCLFVBQVIsS0FBdUJ0ckIsSUFBSTlDLElBQXBFLEVBQTBFO0FBQ3hFZ0YsV0FBT2xDLElBQUlrc0IsV0FBSixHQUFrQixHQUF6QjtBQUNEOztBQUVEO0FBQ0E7QUFDQSxNQUFJbHNCLElBQUk2bkIsR0FBSixJQUFXLFFBQVE3bkIsSUFBSTZuQixHQUEzQixFQUFnQztBQUM5QjNsQixXQUFPbEMsSUFBSTZuQixHQUFKLEdBQVUsR0FBakI7QUFDRDs7QUFFRDtBQUNBLE1BQUksUUFBUTduQixJQUFJb04sRUFBaEIsRUFBb0I7QUFDbEJsTCxXQUFPbEMsSUFBSW9OLEVBQVg7QUFDRDs7QUFFRDtBQUNBLE1BQUksUUFBUXBOLElBQUlyTyxJQUFoQixFQUFzQjtBQUNwQixRQUFJdzdCLFVBQVVDLGFBQWFwdEIsSUFBSXJPLElBQWpCLENBQWQ7QUFDQSxRQUFJdzdCLFlBQVksS0FBaEIsRUFBdUI7QUFDckJqckIsYUFBT2lyQixPQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT0gsWUFBUDtBQUNEO0FBQ0Y7O0FBRURuaUIsUUFBTSxrQkFBTixFQUEwQjdLLEdBQTFCLEVBQStCa0MsR0FBL0I7QUFDQSxTQUFPQSxHQUFQO0FBQ0Q7O0FBRUQsU0FBU2tyQixZQUFULENBQXNCbHJCLEdBQXRCLEVBQTJCO0FBQ3pCLE1BQUk7QUFDRixXQUFPa08sS0FBS2lKLFNBQUwsQ0FBZW5YLEdBQWYsQ0FBUDtBQUNELEdBRkQsQ0FFRSxPQUFNbEcsQ0FBTixFQUFRO0FBQ1IsV0FBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7OztBQVVBLFNBQVNpeEIsY0FBVCxDQUF3Qmp0QixHQUF4QixFQUE2QnZKLFFBQTdCLEVBQXVDOztBQUVyQyxXQUFTNDJCLGFBQVQsQ0FBdUJQLFlBQXZCLEVBQXFDO0FBQ25DLFFBQUlRLGlCQUFpQjNWLE9BQU9vVSxpQkFBUCxDQUF5QmUsWUFBekIsQ0FBckI7QUFDQSxRQUFJekQsT0FBTzZELGVBQWVJLGVBQWUzZSxNQUE5QixDQUFYO0FBQ0EsUUFBSTBRLFVBQVVpTyxlQUFlak8sT0FBN0I7O0FBRUFBLFlBQVFyRSxPQUFSLENBQWdCcU8sSUFBaEIsRUFMbUMsQ0FLWjtBQUN2QjV5QixhQUFTNG9CLE9BQVQsRUFObUMsQ0FNaEI7QUFDcEI7O0FBRUQxSCxTQUFPNlUsV0FBUCxDQUFtQnhzQixHQUFuQixFQUF3QnF0QixhQUF4QjtBQUNEOztBQUVEOzs7Ozs7O0FBT0EsU0FBUzNGLE9BQVQsR0FBbUI7QUFDakIsT0FBSzZGLGFBQUwsR0FBcUIsSUFBckI7QUFDRDs7QUFFRDs7OztBQUlBMWpCLFFBQVE2ZCxRQUFRbjJCLFNBQWhCOztBQUVBOzs7Ozs7OztBQVFBbTJCLFFBQVFuMkIsU0FBUixDQUFrQjAzQixHQUFsQixHQUF3QixVQUFTanBCLEdBQVQsRUFBYztBQUNwQyxNQUFJMk8sTUFBSjtBQUNBLE1BQUksT0FBTzNPLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUMzQjJPLGFBQVM2ZSxhQUFheHRCLEdBQWIsQ0FBVDtBQUNBLFFBQUkxSixRQUFRcTBCLFlBQVIsS0FBeUJoYyxPQUFPelIsSUFBaEMsSUFBd0M1RyxRQUFRZzFCLFVBQVIsS0FBdUIzYyxPQUFPelIsSUFBMUUsRUFBZ0Y7QUFBRTtBQUNoRixXQUFLcXdCLGFBQUwsR0FBcUIsSUFBSUUsbUJBQUosQ0FBd0I5ZSxNQUF4QixDQUFyQjs7QUFFQTtBQUNBLFVBQUksS0FBSzRlLGFBQUwsQ0FBbUJHLFNBQW5CLENBQTZCeEIsV0FBN0IsS0FBNkMsQ0FBakQsRUFBb0Q7QUFDbEQsYUFBS3QzQixJQUFMLENBQVUsU0FBVixFQUFxQitaLE1BQXJCO0FBQ0Q7QUFDRixLQVBELE1BT087QUFBRTtBQUNQLFdBQUsvWixJQUFMLENBQVUsU0FBVixFQUFxQitaLE1BQXJCO0FBQ0Q7QUFDRixHQVpELE1BWU8sSUFBSW1kLE1BQU05ckIsR0FBTixLQUFjQSxJQUFJNUcsTUFBdEIsRUFBOEI7QUFBRTtBQUNyQyxRQUFJLENBQUMsS0FBS20wQixhQUFWLEVBQXlCO0FBQ3ZCLFlBQU0sSUFBSTEzQixLQUFKLENBQVUsa0RBQVYsQ0FBTjtBQUNELEtBRkQsTUFFTztBQUNMOFksZUFBUyxLQUFLNGUsYUFBTCxDQUFtQkksY0FBbkIsQ0FBa0MzdEIsR0FBbEMsQ0FBVDtBQUNBLFVBQUkyTyxNQUFKLEVBQVk7QUFBRTtBQUNaLGFBQUs0ZSxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsYUFBSzM0QixJQUFMLENBQVUsU0FBVixFQUFxQitaLE1BQXJCO0FBQ0Q7QUFDRjtBQUNGLEdBVk0sTUFVQTtBQUNMLFVBQU0sSUFBSTlZLEtBQUosQ0FBVSxtQkFBbUJtSyxHQUE3QixDQUFOO0FBQ0Q7QUFDRixDQTNCRDs7QUE2QkE7Ozs7Ozs7O0FBUUEsU0FBU3d0QixZQUFULENBQXNCdHJCLEdBQXRCLEVBQTJCO0FBQ3pCLE1BQUl6SyxJQUFJLENBQVI7QUFDQTtBQUNBLE1BQUkrQixJQUFJO0FBQ04wRCxVQUFNd0csT0FBT3hCLElBQUlxYixNQUFKLENBQVcsQ0FBWCxDQUFQO0FBREEsR0FBUjs7QUFJQSxNQUFJLFFBQVFqbkIsUUFBUXkyQixLQUFSLENBQWN2ekIsRUFBRTBELElBQWhCLENBQVosRUFBbUM7QUFDakMsV0FBT3BILE1BQU0seUJBQXlCMEQsRUFBRTBELElBQWpDLENBQVA7QUFDRDs7QUFFRDtBQUNBLE1BQUk1RyxRQUFRcTBCLFlBQVIsS0FBeUJueEIsRUFBRTBELElBQTNCLElBQW1DNUcsUUFBUWcxQixVQUFSLEtBQXVCOXhCLEVBQUUwRCxJQUFoRSxFQUFzRTtBQUNwRSxRQUFJUixNQUFNLEVBQVY7QUFDQSxXQUFPd0YsSUFBSXFiLE1BQUosQ0FBVyxFQUFFOWxCLENBQWIsTUFBb0IsR0FBM0IsRUFBZ0M7QUFDOUJpRixhQUFPd0YsSUFBSXFiLE1BQUosQ0FBVzlsQixDQUFYLENBQVA7QUFDQSxVQUFJQSxLQUFLeUssSUFBSXhQLE1BQWIsRUFBcUI7QUFDdEI7QUFDRCxRQUFJZ0ssT0FBT2dILE9BQU9oSCxHQUFQLENBQVAsSUFBc0J3RixJQUFJcWIsTUFBSixDQUFXOWxCLENBQVgsTUFBa0IsR0FBNUMsRUFBaUQ7QUFDL0MsWUFBTSxJQUFJNUIsS0FBSixDQUFVLHFCQUFWLENBQU47QUFDRDtBQUNEMkQsTUFBRTB5QixXQUFGLEdBQWdCeG9CLE9BQU9oSCxHQUFQLENBQWhCO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFJLFFBQVF3RixJQUFJcWIsTUFBSixDQUFXOWxCLElBQUksQ0FBZixDQUFaLEVBQStCO0FBQzdCK0IsTUFBRXF1QixHQUFGLEdBQVEsRUFBUjtBQUNBLFdBQU8sRUFBRXB3QixDQUFULEVBQVk7QUFDVixVQUFJOFIsSUFBSXJILElBQUlxYixNQUFKLENBQVc5bEIsQ0FBWCxDQUFSO0FBQ0EsVUFBSSxRQUFROFIsQ0FBWixFQUFlO0FBQ2YvUCxRQUFFcXVCLEdBQUYsSUFBU3RlLENBQVQ7QUFDQSxVQUFJOVIsTUFBTXlLLElBQUl4UCxNQUFkLEVBQXNCO0FBQ3ZCO0FBQ0YsR0FSRCxNQVFPO0FBQ0w4RyxNQUFFcXVCLEdBQUYsR0FBUSxHQUFSO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFJMUosT0FBT2pjLElBQUlxYixNQUFKLENBQVc5bEIsSUFBSSxDQUFmLENBQVg7QUFDQSxNQUFJLE9BQU8wbUIsSUFBUCxJQUFlemEsT0FBT3lhLElBQVAsS0FBZ0JBLElBQW5DLEVBQXlDO0FBQ3ZDM2tCLE1BQUU0VCxFQUFGLEdBQU8sRUFBUDtBQUNBLFdBQU8sRUFBRTNWLENBQVQsRUFBWTtBQUNWLFVBQUk4UixJQUFJckgsSUFBSXFiLE1BQUosQ0FBVzlsQixDQUFYLENBQVI7QUFDQSxVQUFJLFFBQVE4UixDQUFSLElBQWE3RixPQUFPNkYsQ0FBUCxLQUFhQSxDQUE5QixFQUFpQztBQUMvQixVQUFFOVIsQ0FBRjtBQUNBO0FBQ0Q7QUFDRCtCLFFBQUU0VCxFQUFGLElBQVFsTCxJQUFJcWIsTUFBSixDQUFXOWxCLENBQVgsQ0FBUjtBQUNBLFVBQUlBLE1BQU15SyxJQUFJeFAsTUFBZCxFQUFzQjtBQUN2QjtBQUNEOEcsTUFBRTRULEVBQUYsR0FBTzFKLE9BQU9sSyxFQUFFNFQsRUFBVCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFJbEwsSUFBSXFiLE1BQUosQ0FBVyxFQUFFOWxCLENBQWIsQ0FBSixFQUFxQjtBQUNuQixRQUFJMDFCLFVBQVVTLFNBQVMxckIsSUFBSTZCLE1BQUosQ0FBV3RNLENBQVgsQ0FBVCxDQUFkO0FBQ0EsUUFBSW8yQixpQkFBaUJWLFlBQVksS0FBWixLQUFzQjN6QixFQUFFMEQsSUFBRixLQUFXNUcsUUFBUTIwQixLQUFuQixJQUE0QjN0QixRQUFRNnZCLE9BQVIsQ0FBbEQsQ0FBckI7QUFDQSxRQUFJVSxjQUFKLEVBQW9CO0FBQ2xCcjBCLFFBQUU3SCxJQUFGLEdBQVN3N0IsT0FBVDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9yM0IsTUFBTSxpQkFBTixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCtVLFFBQU0sa0JBQU4sRUFBMEIzSSxHQUExQixFQUErQjFJLENBQS9CO0FBQ0EsU0FBT0EsQ0FBUDtBQUNEOztBQUVELFNBQVNvMEIsUUFBVCxDQUFrQjFyQixHQUFsQixFQUF1QjtBQUNyQixNQUFJO0FBQ0YsV0FBT2tPLEtBQUtDLEtBQUwsQ0FBV25PLEdBQVgsQ0FBUDtBQUNELEdBRkQsQ0FFRSxPQUFNbEcsQ0FBTixFQUFRO0FBQ1IsV0FBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7O0FBTUEwckIsUUFBUW4yQixTQUFSLENBQWtCOHBCLE9BQWxCLEdBQTRCLFlBQVc7QUFDckMsTUFBSSxLQUFLa1MsYUFBVCxFQUF3QjtBQUN0QixTQUFLQSxhQUFMLENBQW1CTyxzQkFBbkI7QUFDRDtBQUNGLENBSkQ7O0FBTUE7Ozs7Ozs7Ozs7QUFVQSxTQUFTTCxtQkFBVCxDQUE2QjllLE1BQTdCLEVBQXFDO0FBQ25DLE9BQUsrZSxTQUFMLEdBQWlCL2UsTUFBakI7QUFDQSxPQUFLMFEsT0FBTCxHQUFlLEVBQWY7QUFDRDs7QUFFRDs7Ozs7Ozs7OztBQVVBb08sb0JBQW9CbDhCLFNBQXBCLENBQThCbzhCLGNBQTlCLEdBQStDLFVBQVNJLE9BQVQsRUFBa0I7QUFDL0QsT0FBSzFPLE9BQUwsQ0FBYW5rQixJQUFiLENBQWtCNnlCLE9BQWxCO0FBQ0EsTUFBSSxLQUFLMU8sT0FBTCxDQUFhM3NCLE1BQWIsS0FBd0IsS0FBS2c3QixTQUFMLENBQWV4QixXQUEzQyxFQUF3RDtBQUFFO0FBQ3hELFFBQUl2ZCxTQUFTZ0osT0FBTzJVLGlCQUFQLENBQXlCLEtBQUtvQixTQUE5QixFQUF5QyxLQUFLck8sT0FBOUMsQ0FBYjtBQUNBLFNBQUt5TyxzQkFBTDtBQUNBLFdBQU9uZixNQUFQO0FBQ0Q7QUFDRCxTQUFPLElBQVA7QUFDRCxDQVJEOztBQVVBOzs7Ozs7QUFNQThlLG9CQUFvQmw4QixTQUFwQixDQUE4QnU4QixzQkFBOUIsR0FBdUQsWUFBVztBQUNoRSxPQUFLSixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsT0FBS3JPLE9BQUwsR0FBZSxFQUFmO0FBQ0QsQ0FIRDs7QUFLQSxTQUFTdnBCLEtBQVQsQ0FBZXVaLEdBQWYsRUFBb0I7QUFDbEIsU0FBTztBQUNMblMsVUFBTTVHLFFBQVEyMEIsS0FEVDtBQUVMdDVCLFVBQU0sbUJBQW1CMGQ7QUFGcEIsR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7O0FDN1pEaFosT0FBT0MsT0FBUCxHQUFpQncxQixLQUFqQjs7QUFFQSxJQUFJa0MsbUJBQW1CLE9BQU96d0IsTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPQSxPQUFPMEMsUUFBZCxLQUEyQixVQUFsRjtBQUNBLElBQUlndUIsd0JBQXdCLE9BQU8zMkIsV0FBUCxLQUF1QixVQUFuRDs7QUFFQSxJQUFJdUosU0FBUyxTQUFUQSxNQUFTLENBQVViLEdBQVYsRUFBZTtBQUMxQixTQUFPLE9BQU8xSSxZQUFZdUosTUFBbkIsS0FBOEIsVUFBOUIsR0FBMkN2SixZQUFZdUosTUFBWixDQUFtQmIsR0FBbkIsQ0FBM0MsR0FBc0VBLElBQUlySSxNQUFKLFlBQXNCTCxXQUFuRztBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BLFNBQVN3MEIsS0FBVCxDQUFlOXJCLEdBQWYsRUFBb0I7QUFDbEIsU0FBUWd1QixvQkFBb0J6d0IsT0FBTzBDLFFBQVAsQ0FBZ0JELEdBQWhCLENBQXJCLElBQ0VpdUIsMEJBQTBCanVCLGVBQWUxSSxXQUFmLElBQThCdUosT0FBT2IsR0FBUCxDQUF4RCxDQURUO0FBRUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQ7Ozs7OztBQU1BMUosVUFBVUQsT0FBT0MsT0FBUCxHQUFpQk4sbUJBQU9BLENBQUMsZ0ZBQVIsQ0FBM0I7QUFDQU0sUUFBUWIsR0FBUixHQUFjQSxHQUFkO0FBQ0FhLFFBQVE2aEIsVUFBUixHQUFxQkEsVUFBckI7QUFDQTdoQixRQUFROGhCLElBQVIsR0FBZUEsSUFBZjtBQUNBOWhCLFFBQVEraEIsSUFBUixHQUFlQSxJQUFmO0FBQ0EvaEIsUUFBUWdpQixTQUFSLEdBQW9CQSxTQUFwQjtBQUNBaGlCLFFBQVF2QixPQUFSLEdBQWtCLGVBQWUsT0FBT3dqQixNQUF0QixJQUNBLGVBQWUsT0FBT0EsT0FBT3hqQixPQUQ3QixHQUVFd2pCLE9BQU94akIsT0FBUCxDQUFleWpCLEtBRmpCLEdBR0VDLGNBSHBCOztBQUtBOzs7O0FBSUFuaUIsUUFBUW9pQixNQUFSLEdBQWlCLENBQ2YsU0FEZSxFQUNKLFNBREksRUFDTyxTQURQLEVBQ2tCLFNBRGxCLEVBQzZCLFNBRDdCLEVBQ3dDLFNBRHhDLEVBQ21ELFNBRG5ELEVBRWYsU0FGZSxFQUVKLFNBRkksRUFFTyxTQUZQLEVBRWtCLFNBRmxCLEVBRTZCLFNBRjdCLEVBRXdDLFNBRnhDLEVBRW1ELFNBRm5ELEVBR2YsU0FIZSxFQUdKLFNBSEksRUFHTyxTQUhQLEVBR2tCLFNBSGxCLEVBRzZCLFNBSDdCLEVBR3dDLFNBSHhDLEVBR21ELFNBSG5ELEVBSWYsU0FKZSxFQUlKLFNBSkksRUFJTyxTQUpQLEVBSWtCLFNBSmxCLEVBSTZCLFNBSjdCLEVBSXdDLFNBSnhDLEVBSW1ELFNBSm5ELEVBS2YsU0FMZSxFQUtKLFNBTEksRUFLTyxTQUxQLEVBS2tCLFNBTGxCLEVBSzZCLFNBTDdCLEVBS3dDLFNBTHhDLEVBS21ELFNBTG5ELEVBTWYsU0FOZSxFQU1KLFNBTkksRUFNTyxTQU5QLEVBTWtCLFNBTmxCLEVBTTZCLFNBTjdCLEVBTXdDLFNBTnhDLEVBTW1ELFNBTm5ELEVBT2YsU0FQZSxFQU9KLFNBUEksRUFPTyxTQVBQLEVBT2tCLFNBUGxCLEVBTzZCLFNBUDdCLEVBT3dDLFNBUHhDLEVBT21ELFNBUG5ELEVBUWYsU0FSZSxFQVFKLFNBUkksRUFRTyxTQVJQLEVBUWtCLFNBUmxCLEVBUTZCLFNBUjdCLEVBUXdDLFNBUnhDLEVBUW1ELFNBUm5ELEVBU2YsU0FUZSxFQVNKLFNBVEksRUFTTyxTQVRQLEVBU2tCLFNBVGxCLEVBUzZCLFNBVDdCLEVBU3dDLFNBVHhDLEVBU21ELFNBVG5ELEVBVWYsU0FWZSxFQVVKLFNBVkksRUFVTyxTQVZQLEVBVWtCLFNBVmxCLEVBVTZCLFNBVjdCLEVBVXdDLFNBVnhDLEVBVW1ELFNBVm5ELEVBV2YsU0FYZSxFQVdKLFNBWEksRUFXTyxTQVhQLEVBV2tCLFNBWGxCLEVBVzZCLFNBWDdCLEVBV3dDLFNBWHhDLENBQWpCOztBQWNBOzs7Ozs7OztBQVFBLFNBQVNKLFNBQVQsR0FBcUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsTUFBSSxPQUFPbm1CLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU93bUIsT0FBeEMsSUFBbUR4bUIsT0FBT3dtQixPQUFQLENBQWV6YixJQUFmLEtBQXdCLFVBQS9FLEVBQTJGO0FBQ3pGLFdBQU8sSUFBUDtBQUNEOztBQUVEO0FBQ0EsTUFBSSxPQUFPckssU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsVUFBVUcsU0FBOUMsSUFBMkRILFVBQVVHLFNBQVYsQ0FBb0J5TixXQUFwQixHQUFrQzBCLEtBQWxDLENBQXdDLHVCQUF4QyxDQUEvRCxFQUFpSTtBQUMvSCxXQUFPLEtBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsU0FBUSxPQUFPcFEsUUFBUCxLQUFvQixXQUFwQixJQUFtQ0EsU0FBUzZtQixlQUE1QyxJQUErRDdtQixTQUFTNm1CLGVBQVQsQ0FBeUI3RSxLQUF4RixJQUFpR2hpQixTQUFTNm1CLGVBQVQsQ0FBeUI3RSxLQUF6QixDQUErQjhFLGdCQUFqSTtBQUNMO0FBQ0MsU0FBTzFtQixNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPcUQsT0FBeEMsS0FBb0RyRCxPQUFPcUQsT0FBUCxDQUFlc2pCLE9BQWYsSUFBMkIzbUIsT0FBT3FELE9BQVAsQ0FBZXVqQixTQUFmLElBQTRCNW1CLE9BQU9xRCxPQUFQLENBQWV3akIsS0FBMUgsQ0FGSTtBQUdMO0FBQ0E7QUFDQyxTQUFPbm1CLFNBQVAsS0FBcUIsV0FBckIsSUFBb0NBLFVBQVVHLFNBQTlDLElBQTJESCxVQUFVRyxTQUFWLENBQW9CeU4sV0FBcEIsR0FBa0MwQixLQUFsQyxDQUF3QyxnQkFBeEMsQ0FBM0QsSUFBd0gyQixTQUFTbVYsT0FBT0MsRUFBaEIsRUFBb0IsRUFBcEIsS0FBMkIsRUFML0k7QUFNTDtBQUNDLFNBQU9ybUIsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsVUFBVUcsU0FBOUMsSUFBMkRILFVBQVVHLFNBQVYsQ0FBb0J5TixXQUFwQixHQUFrQzBCLEtBQWxDLENBQXdDLG9CQUF4QyxDQVA5RDtBQVFEOztBQUVEOzs7O0FBSUE3TCxRQUFRNmlCLFVBQVIsQ0FBbUI1VixDQUFuQixHQUF1QixVQUFTNlYsQ0FBVCxFQUFZO0FBQ2pDLE1BQUk7QUFDRixXQUFPaEosS0FBS2lKLFNBQUwsQ0FBZUQsQ0FBZixDQUFQO0FBQ0QsR0FGRCxDQUVFLE9BQU90aUIsR0FBUCxFQUFZO0FBQ1osV0FBTyxpQ0FBaUNBLElBQUl3aUIsT0FBNUM7QUFDRDtBQUNGLENBTkQ7O0FBU0E7Ozs7OztBQU1BLFNBQVNuQixVQUFULENBQW9Cdk8sSUFBcEIsRUFBMEI7QUFDeEIsTUFBSTBPLFlBQVksS0FBS0EsU0FBckI7O0FBRUExTyxPQUFLLENBQUwsSUFBVSxDQUFDME8sWUFBWSxJQUFaLEdBQW1CLEVBQXBCLElBQ04sS0FBS2lCLFNBREMsSUFFTGpCLFlBQVksS0FBWixHQUFvQixHQUZmLElBR04xTyxLQUFLLENBQUwsQ0FITSxJQUlMME8sWUFBWSxLQUFaLEdBQW9CLEdBSmYsSUFLTixHQUxNLEdBS0FoaUIsUUFBUWtqQixRQUFSLENBQWlCLEtBQUtDLElBQXRCLENBTFY7O0FBT0EsTUFBSSxDQUFDbkIsU0FBTCxFQUFnQjs7QUFFaEIsTUFBSS9PLElBQUksWUFBWSxLQUFLblYsS0FBekI7QUFDQXdWLE9BQUtZLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQmpCLENBQWxCLEVBQXFCLGdCQUFyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJdUIsUUFBUSxDQUFaO0FBQ0EsTUFBSTRPLFFBQVEsQ0FBWjtBQUNBOVAsT0FBSyxDQUFMLEVBQVFYLE9BQVIsQ0FBZ0IsYUFBaEIsRUFBK0IsVUFBUzlHLEtBQVQsRUFBZ0I7QUFDN0MsUUFBSSxTQUFTQSxLQUFiLEVBQW9CO0FBQ3BCMkk7QUFDQSxRQUFJLFNBQVMzSSxLQUFiLEVBQW9CO0FBQ2xCO0FBQ0E7QUFDQXVYLGNBQVE1TyxLQUFSO0FBQ0Q7QUFDRixHQVJEOztBQVVBbEIsT0FBS1ksTUFBTCxDQUFZa1AsS0FBWixFQUFtQixDQUFuQixFQUFzQm5RLENBQXRCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7QUFPQSxTQUFTOVQsR0FBVCxHQUFlO0FBQ2I7QUFDQTtBQUNBLFNBQU8scUJBQW9CRCxPQUFwQix5Q0FBb0JBLE9BQXBCLE1BQ0ZBLFFBQVFDLEdBRE4sSUFFRmtrQixTQUFTcG9CLFNBQVQsQ0FBbUJ3USxLQUFuQixDQUF5QmUsSUFBekIsQ0FBOEJ0TixRQUFRQyxHQUF0QyxFQUEyQ0QsT0FBM0MsRUFBb0RzTSxTQUFwRCxDQUZMO0FBR0Q7O0FBRUQ7Ozs7Ozs7QUFPQSxTQUFTc1csSUFBVCxDQUFjd0IsVUFBZCxFQUEwQjtBQUN4QixNQUFJO0FBQ0YsUUFBSSxRQUFRQSxVQUFaLEVBQXdCO0FBQ3RCdGpCLGNBQVF2QixPQUFSLENBQWdCOGtCLFVBQWhCLENBQTJCLE9BQTNCO0FBQ0QsS0FGRCxNQUVPO0FBQ0x2akIsY0FBUXZCLE9BQVIsQ0FBZ0I4VixLQUFoQixHQUF3QitPLFVBQXhCO0FBQ0Q7QUFDRixHQU5ELENBTUUsT0FBTTVkLENBQU4sRUFBUyxDQUFFO0FBQ2Q7O0FBRUQ7Ozs7Ozs7QUFPQSxTQUFTcWMsSUFBVCxHQUFnQjtBQUNkLE1BQUl5QixDQUFKO0FBQ0EsTUFBSTtBQUNGQSxRQUFJeGpCLFFBQVF2QixPQUFSLENBQWdCOFYsS0FBcEI7QUFDRCxHQUZELENBRUUsT0FBTTdPLENBQU4sRUFBUyxDQUFFOztBQUViO0FBQ0EsTUFBSSxDQUFDOGQsQ0FBRCxJQUFNLE9BQU9uQixPQUFQLEtBQW1CLFdBQXpCLElBQXdDLFNBQVNBLE9BQXJELEVBQThEO0FBQzVEbUIsUUFBSW5CLFFBQVFvQixHQUFSLENBQVlDLEtBQWhCO0FBQ0Q7O0FBRUQsU0FBT0YsQ0FBUDtBQUNEOztBQUVEOzs7O0FBSUF4akIsUUFBUTJqQixNQUFSLENBQWU1QixNQUFmOztBQUVBOzs7Ozs7Ozs7OztBQVdBLFNBQVNJLFlBQVQsR0FBd0I7QUFDdEIsTUFBSTtBQUNGLFdBQU90bUIsT0FBTytuQixZQUFkO0FBQ0QsR0FGRCxDQUVFLE9BQU9sZSxDQUFQLEVBQVUsQ0FBRTtBQUNmLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2pNRDs7Ozs7OztBQU9BMUYsVUFBVUQsT0FBT0MsT0FBUCxHQUFpQjZqQixZQUFZdFAsS0FBWixHQUFvQnNQLFlBQVksU0FBWixJQUF5QkEsV0FBeEU7QUFDQTdqQixRQUFROGpCLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0E5akIsUUFBUStqQixPQUFSLEdBQWtCQSxPQUFsQjtBQUNBL2pCLFFBQVEyakIsTUFBUixHQUFpQkEsTUFBakI7QUFDQTNqQixRQUFRZ2tCLE9BQVIsR0FBa0JBLE9BQWxCO0FBQ0Foa0IsUUFBUWtqQixRQUFSLEdBQW1CeGpCLG1CQUFPQSxDQUFDLHNDQUFSLENBQW5COztBQUVBOzs7QUFHQU0sUUFBUWlrQixTQUFSLEdBQW9CLEVBQXBCOztBQUVBOzs7O0FBSUFqa0IsUUFBUWtrQixLQUFSLEdBQWdCLEVBQWhCO0FBQ0Fsa0IsUUFBUW1rQixLQUFSLEdBQWdCLEVBQWhCOztBQUVBOzs7Ozs7QUFNQW5rQixRQUFRNmlCLFVBQVIsR0FBcUIsRUFBckI7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTdUIsV0FBVCxDQUFxQm5CLFNBQXJCLEVBQWdDO0FBQzlCLE1BQUlvQixPQUFPLENBQVg7QUFBQSxNQUFjbGpCLENBQWQ7O0FBRUEsT0FBS0EsQ0FBTCxJQUFVOGhCLFNBQVYsRUFBcUI7QUFDbkJvQixXQUFTLENBQUNBLFFBQVEsQ0FBVCxJQUFjQSxJQUFmLEdBQXVCcEIsVUFBVXRnQixVQUFWLENBQXFCeEIsQ0FBckIsQ0FBL0I7QUFDQWtqQixZQUFRLENBQVIsQ0FGbUIsQ0FFUjtBQUNaOztBQUVELFNBQU9ya0IsUUFBUW9pQixNQUFSLENBQWVyZ0IsS0FBS3VpQixHQUFMLENBQVNELElBQVQsSUFBaUJya0IsUUFBUW9pQixNQUFSLENBQWVobUIsTUFBL0MsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7OztBQVFBLFNBQVN5bkIsV0FBVCxDQUFxQlosU0FBckIsRUFBZ0M7O0FBRTlCLE1BQUlzQixRQUFKOztBQUVBLFdBQVNoUSxLQUFULEdBQWlCO0FBQ2Y7QUFDQSxRQUFJLENBQUNBLE1BQU15UCxPQUFYLEVBQW9COztBQUVwQixRQUFJdE4sT0FBT25DLEtBQVg7O0FBRUE7QUFDQSxRQUFJaVEsT0FBTyxDQUFDLElBQUlybUIsSUFBSixFQUFaO0FBQ0EsUUFBSXFELEtBQUtnakIsUUFBUUQsWUFBWUMsSUFBcEIsQ0FBVDtBQUNBOU4sU0FBS3lNLElBQUwsR0FBWTNoQixFQUFaO0FBQ0FrVixTQUFLK04sSUFBTCxHQUFZRixRQUFaO0FBQ0E3TixTQUFLOE4sSUFBTCxHQUFZQSxJQUFaO0FBQ0FELGVBQVdDLElBQVg7O0FBRUE7QUFDQSxRQUFJbFIsT0FBTyxJQUFJM1AsS0FBSixDQUFVNkgsVUFBVXBQLE1BQXBCLENBQVg7QUFDQSxTQUFLLElBQUkrRSxJQUFJLENBQWIsRUFBZ0JBLElBQUltUyxLQUFLbFgsTUFBekIsRUFBaUMrRSxHQUFqQyxFQUFzQztBQUNwQ21TLFdBQUtuUyxDQUFMLElBQVVxSyxVQUFVckssQ0FBVixDQUFWO0FBQ0Q7O0FBRURtUyxTQUFLLENBQUwsSUFBVXRULFFBQVE4akIsTUFBUixDQUFleFEsS0FBSyxDQUFMLENBQWYsQ0FBVjs7QUFFQSxRQUFJLGFBQWEsT0FBT0EsS0FBSyxDQUFMLENBQXhCLEVBQWlDO0FBQy9CO0FBQ0FBLFdBQUtvUixPQUFMLENBQWEsSUFBYjtBQUNEOztBQUVEO0FBQ0EsUUFBSWxRLFFBQVEsQ0FBWjtBQUNBbEIsU0FBSyxDQUFMLElBQVVBLEtBQUssQ0FBTCxFQUFRWCxPQUFSLENBQWdCLGVBQWhCLEVBQWlDLFVBQVM5RyxLQUFULEVBQWdCOFksTUFBaEIsRUFBd0I7QUFDakU7QUFDQSxVQUFJOVksVUFBVSxJQUFkLEVBQW9CLE9BQU9BLEtBQVA7QUFDcEIySTtBQUNBLFVBQUlvUSxZQUFZNWtCLFFBQVE2aUIsVUFBUixDQUFtQjhCLE1BQW5CLENBQWhCO0FBQ0EsVUFBSSxlQUFlLE9BQU9DLFNBQTFCLEVBQXFDO0FBQ25DLFlBQUl4WSxNQUFNa0gsS0FBS2tCLEtBQUwsQ0FBVjtBQUNBM0ksZ0JBQVErWSxVQUFVcFksSUFBVixDQUFla0ssSUFBZixFQUFxQnRLLEdBQXJCLENBQVI7O0FBRUE7QUFDQWtILGFBQUtZLE1BQUwsQ0FBWU0sS0FBWixFQUFtQixDQUFuQjtBQUNBQTtBQUNEO0FBQ0QsYUFBTzNJLEtBQVA7QUFDRCxLQWRTLENBQVY7O0FBZ0JBO0FBQ0E3TCxZQUFRNmhCLFVBQVIsQ0FBbUJyVixJQUFuQixDQUF3QmtLLElBQXhCLEVBQThCcEQsSUFBOUI7O0FBRUEsUUFBSXVSLFFBQVF0USxNQUFNcFYsR0FBTixJQUFhYSxRQUFRYixHQUFyQixJQUE0QkQsUUFBUUMsR0FBUixDQUFZMmxCLElBQVosQ0FBaUI1bEIsT0FBakIsQ0FBeEM7QUFDQTJsQixVQUFNcFosS0FBTixDQUFZaUwsSUFBWixFQUFrQnBELElBQWxCO0FBQ0Q7O0FBRURpQixRQUFNME8sU0FBTixHQUFrQkEsU0FBbEI7QUFDQTFPLFFBQU15UCxPQUFOLEdBQWdCaGtCLFFBQVFna0IsT0FBUixDQUFnQmYsU0FBaEIsQ0FBaEI7QUFDQTFPLFFBQU15TixTQUFOLEdBQWtCaGlCLFFBQVFnaUIsU0FBUixFQUFsQjtBQUNBek4sUUFBTXpXLEtBQU4sR0FBY3NtQixZQUFZbkIsU0FBWixDQUFkO0FBQ0ExTyxRQUFNd1EsT0FBTixHQUFnQkEsT0FBaEI7O0FBRUE7QUFDQSxNQUFJLGVBQWUsT0FBTy9rQixRQUFRZ2xCLElBQWxDLEVBQXdDO0FBQ3RDaGxCLFlBQVFnbEIsSUFBUixDQUFhelEsS0FBYjtBQUNEOztBQUVEdlUsVUFBUWlrQixTQUFSLENBQWtCcmYsSUFBbEIsQ0FBdUIyUCxLQUF2Qjs7QUFFQSxTQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsU0FBU3dRLE9BQVQsR0FBb0I7QUFDbEIsTUFBSXZRLFFBQVF4VSxRQUFRaWtCLFNBQVIsQ0FBa0JqZ0IsT0FBbEIsQ0FBMEIsSUFBMUIsQ0FBWjtBQUNBLE1BQUl3USxVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQnhVLFlBQVFpa0IsU0FBUixDQUFrQi9QLE1BQWxCLENBQXlCTSxLQUF6QixFQUFnQyxDQUFoQztBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQsTUFHTztBQUNMLFdBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O0FBUUEsU0FBU21QLE1BQVQsQ0FBZ0JMLFVBQWhCLEVBQTRCO0FBQzFCdGpCLFVBQVE4aEIsSUFBUixDQUFhd0IsVUFBYjs7QUFFQXRqQixVQUFRa2tCLEtBQVIsR0FBZ0IsRUFBaEI7QUFDQWxrQixVQUFRbWtCLEtBQVIsR0FBZ0IsRUFBaEI7O0FBRUEsTUFBSWhqQixDQUFKO0FBQ0EsTUFBSThqQixRQUFRLENBQUMsT0FBTzNCLFVBQVAsS0FBc0IsUUFBdEIsR0FBaUNBLFVBQWpDLEdBQThDLEVBQS9DLEVBQW1EMkIsS0FBbkQsQ0FBeUQsUUFBekQsQ0FBWjtBQUNBLE1BQUlwaUIsTUFBTW9pQixNQUFNN29CLE1BQWhCOztBQUVBLE9BQUsrRSxJQUFJLENBQVQsRUFBWUEsSUFBSTBCLEdBQWhCLEVBQXFCMUIsR0FBckIsRUFBMEI7QUFDeEIsUUFBSSxDQUFDOGpCLE1BQU05akIsQ0FBTixDQUFMLEVBQWUsU0FEUyxDQUNDO0FBQ3pCbWlCLGlCQUFhMkIsTUFBTTlqQixDQUFOLEVBQVN3UixPQUFULENBQWlCLEtBQWpCLEVBQXdCLEtBQXhCLENBQWI7QUFDQSxRQUFJMlEsV0FBVyxDQUFYLE1BQWtCLEdBQXRCLEVBQTJCO0FBQ3pCdGpCLGNBQVFta0IsS0FBUixDQUFjdmYsSUFBZCxDQUFtQixJQUFJK2QsTUFBSixDQUFXLE1BQU1XLFdBQVc3VixNQUFYLENBQWtCLENBQWxCLENBQU4sR0FBNkIsR0FBeEMsQ0FBbkI7QUFDRCxLQUZELE1BRU87QUFDTHpOLGNBQVFra0IsS0FBUixDQUFjdGYsSUFBZCxDQUFtQixJQUFJK2QsTUFBSixDQUFXLE1BQU1XLFVBQU4sR0FBbUIsR0FBOUIsQ0FBbkI7QUFDRDtBQUNGOztBQUVELE9BQUtuaUIsSUFBSSxDQUFULEVBQVlBLElBQUluQixRQUFRaWtCLFNBQVIsQ0FBa0I3bkIsTUFBbEMsRUFBMEMrRSxHQUExQyxFQUErQztBQUM3QyxRQUFJK2pCLFdBQVdsbEIsUUFBUWlrQixTQUFSLENBQWtCOWlCLENBQWxCLENBQWY7QUFDQStqQixhQUFTbEIsT0FBVCxHQUFtQmhrQixRQUFRZ2tCLE9BQVIsQ0FBZ0JrQixTQUFTakMsU0FBekIsQ0FBbkI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7QUFNQSxTQUFTYyxPQUFULEdBQW1CO0FBQ2pCL2pCLFVBQVEyakIsTUFBUixDQUFlLEVBQWY7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFRQSxTQUFTSyxPQUFULENBQWlCeE0sSUFBakIsRUFBdUI7QUFDckIsTUFBSUEsS0FBS0EsS0FBS3BiLE1BQUwsR0FBYyxDQUFuQixNQUEwQixHQUE5QixFQUFtQztBQUNqQyxXQUFPLElBQVA7QUFDRDtBQUNELE1BQUkrRSxDQUFKLEVBQU8wQixHQUFQO0FBQ0EsT0FBSzFCLElBQUksQ0FBSixFQUFPMEIsTUFBTTdDLFFBQVFta0IsS0FBUixDQUFjL25CLE1BQWhDLEVBQXdDK0UsSUFBSTBCLEdBQTVDLEVBQWlEMUIsR0FBakQsRUFBc0Q7QUFDcEQsUUFBSW5CLFFBQVFta0IsS0FBUixDQUFjaGpCLENBQWQsRUFBaUJpYyxJQUFqQixDQUFzQjVGLElBQXRCLENBQUosRUFBaUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNELE9BQUtyVyxJQUFJLENBQUosRUFBTzBCLE1BQU03QyxRQUFRa2tCLEtBQVIsQ0FBYzluQixNQUFoQyxFQUF3QytFLElBQUkwQixHQUE1QyxFQUFpRDFCLEdBQWpELEVBQXNEO0FBQ3BELFFBQUluQixRQUFRa2tCLEtBQVIsQ0FBYy9pQixDQUFkLEVBQWlCaWMsSUFBakIsQ0FBc0I1RixJQUF0QixDQUFKLEVBQWlDO0FBQy9CLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFPLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFRQSxTQUFTc00sTUFBVCxDQUFnQjFYLEdBQWhCLEVBQXFCO0FBQ25CLE1BQUlBLGVBQWU3TSxLQUFuQixFQUEwQixPQUFPNk0sSUFBSStZLEtBQUosSUFBYS9ZLElBQUk0VyxPQUF4QjtBQUMxQixTQUFPNVcsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDaE9ELElBQUl2QyxXQUFXLEdBQUdBLFFBQWxCOztBQUVBOUosT0FBT0MsT0FBUCxHQUFpQjJELE1BQU1xRCxPQUFOLElBQWlCLFVBQVUzQyxHQUFWLEVBQWU7QUFDL0MsU0FBT3dGLFNBQVMyQyxJQUFULENBQWNuSSxHQUFkLEtBQXNCLGdCQUE3QjtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7QUNGQXRFLE9BQU9DLE9BQVAsR0FBaUJxekIsT0FBakI7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQmhwQixJQUFqQixFQUF1Qm1LLEtBQXZCLEVBQThCO0FBQzFCLFFBQUkvSyxRQUFRLEVBQVo7O0FBRUErSyxZQUFRQSxTQUFTLENBQWpCOztBQUVBLFNBQUssSUFBSXJULElBQUlxVCxTQUFTLENBQXRCLEVBQXlCclQsSUFBSWtKLEtBQUtqTyxNQUFsQyxFQUEwQytFLEdBQTFDLEVBQStDO0FBQzNDc0ksY0FBTXRJLElBQUlxVCxLQUFWLElBQW1CbkssS0FBS2xKLENBQUwsQ0FBbkI7QUFDSDs7QUFFRCxXQUFPc0ksS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCxJQUFJbXVCLENBQUo7O0FBRUE7QUFDQUEsSUFBSyxZQUFXO0FBQ2YsUUFBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxLQUFJQSxLQUFLdlUsU0FBUyxhQUFULEdBQUwsSUFBa0MsQ0FBQyxHQUFHd1UsSUFBSixFQUFVLE1BQVYsQ0FBdEM7QUFDQSxDQUhELENBR0UsT0FBT255QixDQUFQLEVBQVU7QUFDWDtBQUNBLEtBQUksUUFBTzdKLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0MrN0IsSUFBSS83QixNQUFKO0FBQ2hDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQWtFLE9BQU9DLE9BQVAsR0FBaUI0M0IsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDbkJhOztBQUViLElBQUlFLFdBQVcsbUVBQW1FN1MsS0FBbkUsQ0FBeUUsRUFBekUsQ0FBZjtBQUFBLElBQ0k3b0IsU0FBUyxFQURiO0FBQUEsSUFFSThKLE1BQU0sRUFGVjtBQUFBLElBR0k2eEIsT0FBTyxDQUhYO0FBQUEsSUFJSTUyQixJQUFJLENBSlI7QUFBQSxJQUtJc2pCLElBTEo7O0FBT0E7Ozs7Ozs7QUFPQSxTQUFTN2hCLE1BQVQsQ0FBZ0I0QixHQUFoQixFQUFxQjtBQUNuQixNQUFJeWhCLFVBQVUsRUFBZDs7QUFFQSxLQUFHO0FBQ0RBLGNBQVU2UixTQUFTdHpCLE1BQU1wSSxNQUFmLElBQXlCNnBCLE9BQW5DO0FBQ0F6aEIsVUFBTXpDLEtBQUtLLEtBQUwsQ0FBV29DLE1BQU1wSSxNQUFqQixDQUFOO0FBQ0QsR0FIRCxRQUdTb0ksTUFBTSxDQUhmOztBQUtBLFNBQU95aEIsT0FBUDtBQUNEOztBQUVEOzs7Ozs7O0FBT0EsU0FBU2pqQixNQUFULENBQWdCNEksR0FBaEIsRUFBcUI7QUFDbkIsTUFBSW9zQixVQUFVLENBQWQ7O0FBRUEsT0FBSzcyQixJQUFJLENBQVQsRUFBWUEsSUFBSXlLLElBQUl4UCxNQUFwQixFQUE0QitFLEdBQTVCLEVBQWlDO0FBQy9CNjJCLGNBQVVBLFVBQVU1N0IsTUFBVixHQUFtQjhKLElBQUkwRixJQUFJcWIsTUFBSixDQUFXOWxCLENBQVgsQ0FBSixDQUE3QjtBQUNEOztBQUVELFNBQU82MkIsT0FBUDtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTaFksS0FBVCxHQUFpQjtBQUNmLE1BQUlpWSxNQUFNcjFCLE9BQU8sQ0FBQyxJQUFJekUsSUFBSixFQUFSLENBQVY7O0FBRUEsTUFBSTg1QixRQUFReFQsSUFBWixFQUFrQixPQUFPc1QsT0FBTyxDQUFQLEVBQVV0VCxPQUFPd1QsR0FBeEI7QUFDbEIsU0FBT0EsTUFBSyxHQUFMLEdBQVVyMUIsT0FBT20xQixNQUFQLENBQWpCO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsT0FBTzUyQixJQUFJL0UsTUFBWCxFQUFtQitFLEdBQW5CO0FBQXdCK0UsTUFBSTR4QixTQUFTMzJCLENBQVQsQ0FBSixJQUFtQkEsQ0FBbkI7QUFBeEIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBNmUsTUFBTXBkLE1BQU4sR0FBZUEsTUFBZjtBQUNBb2QsTUFBTWhkLE1BQU4sR0FBZUEsTUFBZjtBQUNBakQsT0FBT0MsT0FBUCxHQUFpQmdnQixLQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsZSIsImZpbGUiOiJsb3Jpcy1nbGFuZC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsb3Jpcy1nbGFuZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsb3Jpcy1nbGFuZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEV4cG9ydGVkIHRvIGh0ZG9jcy9qcy9jbGllbnQuanNcbiAqL1xuXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4vc3RvcmFnZSc7XG5cbi8qKlxuICogQ2xpZW50ICh3ZWJzb2NrZXQgYnJpZGdlKVxuICovXG5jbGFzcyBDbGllbnQge1xuICAvKipcbiAgICogY29uc3RydWN0b3IgaW5pdGlhbGl6ZTogKHN0YXR1cywgY3JlZGVudGlhbHMsIHNvY2tldCkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0YXR1cyA9IHtcbiAgICAgIG9ubGluZTogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgICAgdXVpZDogJycsXG4gICAgICB0b2tlbjogJycsXG4gICAgfTtcbiAgICB0aGlzLnNvY2tldCA9IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRpdGlvbmFsIHNvY2tldCBsaXN0ZW5lcnMuXG4gKi9cbkNsaWVudC5wcm90b3R5cGUuc2V0dXBTb2NrZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXR1cFNvY2tldExpc3RlbmVycygpIHtcbiAgY2xpZW50LnNvY2tldC5vbignYW5hbHl0aWNzJywgZnVuY3Rpb24oZGF0YSkge1xuICAgIC8vIHRvZG9cbiAgfSk7XG59O1xuXG4vKipcbiAqIEdldHMgYWxsIHRoZSBTeXN0ZW0gRGV0YWlscy5cbiAqL1xuQ2xpZW50LnByb3RvdHlwZS5nZXRTeXN0ZW1EZXRhaWxzID0gZnVuY3Rpb24gZ2V0U3lzdGVtRGV0YWlscygpIHtcbiAgLyoqXG4gICAqIEhhbmRsZXMgbG9hZGluZyBmaW5pc2hlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGZ1bmN0aW9uIHJlYWR5KGZuKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykgZm4oKTtcbiAgICBlbHNlIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gIH1cbiAgLy8gcmVhZHkoKSBmaXJlcyB3aGVuIHBhZ2UgbG9hZGVkLlxuICByZWFkeShmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpbmZvID0ge1xuICAgICAgd2luZG93OiB7XG4gICAgICAgIG9yaWdpbjogd2luZG93Lm9yaWdpbixcbiAgICAgICAgcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICByZWZlcnJlcjogZG9jdW1lbnQucmVmZXJyZXIsXG4gICAgICAgIGhpc3Rvcnk6IGhpc3RvcnkubGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIGJyb3dzZXI6IHtcbiAgICAgICAgYXBwTmFtZTogbmF2aWdhdG9yLmFwcE5hbWUsXG4gICAgICAgIGFwcFZlcnNpb246IG5hdmlnYXRvci5hcHBWZXJzaW9uLFxuICAgICAgICBwcm9kdWN0OiBuYXZpZ2F0b3IucHJvZHVjdCxcbiAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICBsYW5ndWFnZTogbmF2aWdhdG9yLmxhbmd1YWdlLFxuICAgICAgICBvbmxpbmU6IG5hdmlnYXRvci5vbkxpbmUsXG4gICAgICAgIHBsYXRmb3JtOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gICAgICAgIGphdmE6IG5hdmlnYXRvci5qYXZhRW5hYmxlZCgpLFxuICAgICAgfSxcbiAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgc2NyZWVuOiB7XG4gICAgICAgICAgd2lkdGg6IHNjcmVlbi53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHNjcmVlbi5oZWlnaHQsXG4gICAgICAgIH0sXG4gICAgICAgIGRvY3VtZW50OiB7XG4gICAgICAgICAgd2lkdGg6IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxcbiAgICAgICAgfSxcbiAgICAgICAgaW5uZXI6IHtcbiAgICAgICAgICB3aWR0aDogaW5uZXJXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGlubmVySGVpZ2h0LFxuICAgICAgICB9LFxuICAgICAgICBhdmFpbGFibGU6IHtcbiAgICAgICAgICB3aWR0aDogc2NyZWVuLmF2YWlsV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBzY3JlZW4uYXZhaWxIZWlnaHQsXG4gICAgICAgIH0sXG4gICAgICAgIGRlcHRoOiB7XG4gICAgICAgICAgY29sb3I6IHNjcmVlbi5jb2xvckRlcHRoLFxuICAgICAgICAgIHBpeGVsOiBzY3JlZW4ucGl4ZWxEZXB0aCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0aW1lem9uZTogKG5ldyBEYXRlKCkpLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCxcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICB9O1xuICAgIC8vIGVtaXQgdG8gYW5hbHl0aWNzLlxuICAgIGNsaWVudC5zb2NrZXQuZW1pdCgndHJhY2tfbWUnLCBpbmZvKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEF1dGhlbnRpY2F0aW9uIHdpdGggc29ja2V0LmlvIHNlcnZlci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbkNsaWVudC5wcm90b3R5cGUuYXV0aGVudGljYXRpb24gPSBmdW5jdGlvbiBhdXRoZW50aWNhdGlvbihjYikge1xuICBzdG9yYWdlLnNhdmVVdWlkQW5kVG9rZW4oKTtcbiAgLy8gQ3JlYXRlIHdlYnNvY2tldCBmb3IgY29ubmVjdGluZy5cbiAgbGV0IHdlYnNvY2tldCA9IG51bGw7XG4gIGlmICh3aW5kb3cub3JpZ2luLmluY2x1ZGVzKCdodHRwczovLycpKSB7XG4gICAgLy8gUHJvZHVjdGlvblxuICAgIHdlYnNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHBzOi8vMzUuMTg1LjgwLjE3MCcsIHtcbiAgICAgIHNlY3VyZTogdHJ1ZSxcbiAgICAgIHBvcnQ6IDgwLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIERldmVsb3BtZW50XG4gICAgd2Vic29ja2V0ID0gaW8uY29ubmVjdCgnbG9jYWxob3N0OjY2NjAnLCB7XG4gICAgICB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCcsICdwb2xsaW5nJ10sXG4gICAgfSk7XG4gIH1cbiAgd2Vic29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24oKSB7XG4gICAgd2Vic29ja2V0Lm9uKCdjbGllbnRfaWRlbnRpdHknLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNvbm5lY3RpbmcgdG8gc2VydmVyLi4uIFxcbltJTkZPXSBTb2NrZXQgaWQ6ICcgK1xuICAgICAgICBkYXRhLnNvY2tldElEICsgJ1xcbltJTkZPXSBDbGllbnQgdXVpZDogJyArIHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy51dWlkKTtcbiAgICAgIGlmIChzdG9yYWdlLnNvY2tldC5jb25maWcudXVpZCAmJiBzdG9yYWdlLnNvY2tldC5jb25maWcudG9rZW4pIHsgLy8gdG9rZW4gZXhpc3RzLCBlbWl0IGNsaWVudF9pZGVudGl0eVxuICAgICAgICB3ZWJzb2NrZXQuZW1pdCgnY2xpZW50X2lkZW50aXR5Jywge1xuICAgICAgICAgIHNvY2tldElEOiBkYXRhLnNvY2tldElELFxuICAgICAgICAgIHV1aWQ6IHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy51dWlkLFxuICAgICAgICAgIHRva2VuOiBzdG9yYWdlLnNvY2tldC5jb25maWcudG9rZW4sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHsgLy8gbm8gdG9rZW4sIGVtaXQgY2xpZW50X3JlZ2lzdGVyXG4gICAgICAgIHdlYnNvY2tldC5lbWl0KCdjbGllbnRfcmVnaXN0ZXInLCBzdG9yYWdlLnNvY2tldC5jb25maWcsXG4gICAgICAgICAgZnVuY3Rpb24oaWRlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbY2xpZW50X3JlZ2lzdGVyXSA6XFxuJyk7XG4gICAgICAgICAgICBzdG9yYWdlLnNvY2tldC5jb25maWcudXVpZCAhPT0gaWRlbnQudXVpZCA/XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICdbSU5GT10gdXVpZDogJyArIGlkZW50LnV1aWQgKyAnXFxuW0lORk9dIHRva2VuOiAnICsgaWRlbnQudG9rZW5cbiAgICAgICAgICAgICAgKSA6IGNvbnNvbGUubG9nKCdbSU5GT10gdG9rZW46ICcgKyBpZGVudC50b2tlbik7XG4gICAgICAgICAgICBzdG9yYWdlLnNvY2tldC5jb25maWcgPSBpZGVudDtcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2F2ZVV1aWRBbmRUb2tlbigpO1xuICAgICAgICAgICAgd2Vic29ja2V0LmVtaXQoJ2NsaWVudF9pZGVudGl0eScsIHtcbiAgICAgICAgICAgICAgc29ja2V0SUQ6IGRhdGEuc29ja2V0SUQsXG4gICAgICAgICAgICAgIHV1aWQ6IHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy51dWlkLFxuICAgICAgICAgICAgICB0b2tlbjogc3RvcmFnZS5zb2NrZXQuY29uZmlnLnRva2VuLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2Vic29ja2V0Lm9uKCdjbGllbnRfcmVhZHknLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnW2NsaWVudF9yZWFkeV1cXG4nKTtcbiAgICAgIHJldHVybiBjYihudWxsLCB3ZWJzb2NrZXQpO1xuICAgIH0pO1xuXG4gICAgd2Vic29ja2V0Lm9uKCdjbGllbnRfZXJyb3InLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnW2NsaWVudF9lcnJvcl1cXG4nKTtcbiAgICAgIHJldHVybiBjYihuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIEVycm9yJykpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhdGUgY2xpZW50IGFuZCBwcm9jZWVkIHRvIGF1dGhlbnRpY2F0ZS5cbiAqL1xuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpO1xuY2xpZW50LmF1dGhlbnRpY2F0aW9uKGZ1bmN0aW9uKGVycm9yLCB3ZWJzb2NrZXQpIHtcbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbiAgY2xpZW50LnNvY2tldCA9IHdlYnNvY2tldDtcbiAgY2xpZW50LmNyZWRlbnRpYWxzID0gc3RvcmFnZS5zb2NrZXQuY29uZmlnO1xuICBjbGllbnQuc2V0dXBTb2NrZXRMaXN0ZW5lcnMoKTtcbiAgY2xpZW50LmdldFN5c3RlbURldGFpbHMoKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY29uc3QgQ29va2llcyA9IHJlcXVpcmUoJ2pzLWNvb2tpZScpO1xuXG4vKipcbiAqIFN0b3JhZ2UgZm9yIGNsaWVudC5qc1xuICovXG5jbGFzcyBTdG9yYWdlIHtcbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yIGluaXRpYWxpemU6XG4gICAqICggY29uZmlnOiB7dXVpZCwgdG9rZW59ICkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNvY2tldCA9IHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICB1dWlkOiBDb29raWVzLmdldCgnbG9yaXMtZ2xhbmQtdXVpZCcpXG4gICAgICAgICAgPyBDb29raWVzLmdldCgnbG9yaXMtZ2xhbmQtdXVpZCcpIDogJycsXG4gICAgICAgIHRva2VuOiBDb29raWVzLmdldCgnbG9yaXMtZ2xhbmQtdG9rZW4nKVxuICAgICAgICAgID8gQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXRva2VuJykgOiAnJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5cbi8qKlxuICogU2F2ZSBVdWlkIGFuZCBUb2tlbiB0byBzdG9yYWdlLlxuICovXG5TdG9yYWdlLnByb3RvdHlwZS5zYXZlVXVpZEFuZFRva2VuID0gZnVuY3Rpb24gc2F2ZVV1aWRBbmRUb2tlbigpIHtcbiAgQ29va2llcy5zZXQoJ2xvcmlzLWdsYW5kLXV1aWQnLCBzdG9yYWdlLnNvY2tldC5jb25maWcudXVpZCwge1xuICAgIHNlY3VyZTogd2luZG93Lm9yaWdpbi5pbmNsdWRlcygnaHR0cHM6Ly8nKSxcbiAgICBleHBpcmVzOiA3LFxuICB9KTsgLy8gZXhwaXJlcyBpbiA3IGRheXNcbiAgQ29va2llcy5zZXQoJ2xvcmlzLWdsYW5kLXRva2VuJywgc3RvcmFnZS5zb2NrZXQuY29uZmlnLnRva2VuLCB7XG4gICAgc2VjdXJlOiB3aW5kb3cub3JpZ2luLmluY2x1ZGVzKCdodHRwczovLycpLFxuICAgIGV4cGlyZXM6IDcsXG4gIH0pOyAvLyBleHBpcmVzIGluIDcgZGF5c1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNvbnN0IENvb2tpZXMgPSByZXF1aXJlKCdqcy1jb29raWUnKTtcblxuLyoqXG4gKiBTdG9yYWdlIGZvciBjbGllbnQuanNcbiAqL1xuY2xhc3MgU3RvcmFnZSB7XG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RvciBpbml0aWFsaXplOlxuICAgKiAoIGNvbmZpZzoge3V1aWQsIHRva2VufSApLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb2NrZXQgPSB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdXVpZDogQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXV1aWQnKVxuICAgICAgICAgID8gQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXV1aWQnKSA6ICcnLFxuICAgICAgICB0b2tlbjogQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXRva2VuJylcbiAgICAgICAgICA/IENvb2tpZXMuZ2V0KCdsb3Jpcy1nbGFuZC10b2tlbicpIDogJycsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuXG4vKipcbiAqIFNhdmUgVXVpZCBhbmQgVG9rZW4gdG8gc3RvcmFnZS5cbiAqL1xuU3RvcmFnZS5wcm90b3R5cGUuc2F2ZVV1aWRBbmRUb2tlbiA9IGZ1bmN0aW9uIHNhdmVVdWlkQW5kVG9rZW4oKSB7XG4gIENvb2tpZXMuc2V0KCdsb3Jpcy1nbGFuZC11dWlkJywgc3RvcmFnZS5zb2NrZXQuY29uZmlnLnV1aWQsIHtcbiAgICBzZWN1cmU6IHdpbmRvdy5vcmlnaW4uaW5jbHVkZXMoJ2h0dHBzOi8vJyksXG4gICAgZXhwaXJlczogNyxcbiAgfSk7IC8vIGV4cGlyZXMgaW4gNyBkYXlzXG4gIENvb2tpZXMuc2V0KCdsb3Jpcy1nbGFuZC10b2tlbicsIHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy50b2tlbiwge1xuICAgIHNlY3VyZTogd2luZG93Lm9yaWdpbi5pbmNsdWRlcygnaHR0cHM6Ly8nKSxcbiAgICBleHBpcmVzOiA3LFxuICB9KTsgLy8gZXhwaXJlcyBpbiA3IGRheXNcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFmdGVyXG5cbmZ1bmN0aW9uIGFmdGVyKGNvdW50LCBjYWxsYmFjaywgZXJyX2NiKSB7XG4gICAgdmFyIGJhaWwgPSBmYWxzZVxuICAgIGVycl9jYiA9IGVycl9jYiB8fCBub29wXG4gICAgcHJveHkuY291bnQgPSBjb3VudFxuXG4gICAgcmV0dXJuIChjb3VudCA9PT0gMCkgPyBjYWxsYmFjaygpIDogcHJveHlcblxuICAgIGZ1bmN0aW9uIHByb3h5KGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChwcm94eS5jb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FmdGVyIGNhbGxlZCB0b28gbWFueSB0aW1lcycpXG4gICAgICAgIH1cbiAgICAgICAgLS1wcm94eS5jb3VudFxuXG4gICAgICAgIC8vIGFmdGVyIGZpcnN0IGVycm9yLCByZXN0IGFyZSBwYXNzZWQgdG8gZXJyX2NiXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGJhaWwgPSB0cnVlXG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpXG4gICAgICAgICAgICAvLyBmdXR1cmUgZXJyb3IgY2FsbGJhY2tzIHdpbGwgZ28gdG8gZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBlcnJfY2JcbiAgICAgICAgfSBlbHNlIGlmIChwcm94eS5jb3VudCA9PT0gMCAmJiAhYmFpbCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge31cbiIsIi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIHNsaWNpbmcgYW4gYXJyYXlidWZmZXIgZXZlbiB3aGVuXG4gKiBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgaXMgbm90IHN1cHBvcnRlZFxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnJheWJ1ZmZlciwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBhcnJheWJ1ZmZlci5ieXRlTGVuZ3RoO1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIGVuZCA9IGVuZCB8fCBieXRlcztcblxuICBpZiAoYXJyYXlidWZmZXIuc2xpY2UpIHsgcmV0dXJuIGFycmF5YnVmZmVyLnNsaWNlKHN0YXJ0LCBlbmQpOyB9XG5cbiAgaWYgKHN0YXJ0IDwgMCkgeyBzdGFydCArPSBieXRlczsgfVxuICBpZiAoZW5kIDwgMCkgeyBlbmQgKz0gYnl0ZXM7IH1cbiAgaWYgKGVuZCA+IGJ5dGVzKSB7IGVuZCA9IGJ5dGVzOyB9XG5cbiAgaWYgKHN0YXJ0ID49IGJ5dGVzIHx8IHN0YXJ0ID49IGVuZCB8fCBieXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gIH1cblxuICB2YXIgYWJ2ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZW5kIC0gc3RhcnQpO1xuICBmb3IgKHZhciBpID0gc3RhcnQsIGlpID0gMDsgaSA8IGVuZDsgaSsrLCBpaSsrKSB7XG4gICAgcmVzdWx0W2lpXSA9IGFidltpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0LmJ1ZmZlcjtcbn07XG4iLCJcbi8qKlxuICogRXhwb3NlIGBCYWNrb2ZmYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tvZmY7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBiYWNrb2ZmIHRpbWVyIHdpdGggYG9wdHNgLlxuICpcbiAqIC0gYG1pbmAgaW5pdGlhbCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbMTAwXVxuICogLSBgbWF4YCBtYXggdGltZW91dCBbMTAwMDBdXG4gKiAtIGBqaXR0ZXJgIFswXVxuICogLSBgZmFjdG9yYCBbMl1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBCYWNrb2ZmKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHRoaXMubXMgPSBvcHRzLm1pbiB8fCAxMDA7XG4gIHRoaXMubWF4ID0gb3B0cy5tYXggfHwgMTAwMDA7XG4gIHRoaXMuZmFjdG9yID0gb3B0cy5mYWN0b3IgfHwgMjtcbiAgdGhpcy5qaXR0ZXIgPSBvcHRzLmppdHRlciA+IDAgJiYgb3B0cy5qaXR0ZXIgPD0gMSA/IG9wdHMuaml0dGVyIDogMDtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBiYWNrb2ZmIGR1cmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbigpe1xuICB2YXIgbXMgPSB0aGlzLm1zICogTWF0aC5wb3codGhpcy5mYWN0b3IsIHRoaXMuYXR0ZW1wdHMrKyk7XG4gIGlmICh0aGlzLmppdHRlcikge1xuICAgIHZhciByYW5kID0gIE1hdGgucmFuZG9tKCk7XG4gICAgdmFyIGRldmlhdGlvbiA9IE1hdGguZmxvb3IocmFuZCAqIHRoaXMuaml0dGVyICogbXMpO1xuICAgIG1zID0gKE1hdGguZmxvb3IocmFuZCAqIDEwKSAmIDEpID09IDAgID8gbXMgLSBkZXZpYXRpb24gOiBtcyArIGRldmlhdGlvbjtcbiAgfVxuICByZXR1cm4gTWF0aC5taW4obXMsIHRoaXMubWF4KSB8IDA7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1pbmltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uKG1pbil7XG4gIHRoaXMubXMgPSBtaW47XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4aW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24obWF4KXtcbiAgdGhpcy5tYXggPSBtYXg7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgaml0dGVyXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRKaXR0ZXIgPSBmdW5jdGlvbihqaXR0ZXIpe1xuICB0aGlzLmppdHRlciA9IGppdHRlcjtcbn07XG5cbiIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgY2hhcnMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcblxuICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguXG4gIHZhciBsb29rdXAgPSBuZXcgVWludDhBcnJheSgyNTYpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9va3VwW2NoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbiAgfVxuXG4gIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgaSwgbGVuID0gYnl0ZXMubGVuZ3RoLCBiYXNlNjQgPSBcIlwiO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9Mykge1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmICgobGVuICUgMykgPT09IDIpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0O1xuICB9O1xuXG4gIGV4cG9ydHMuZGVjb2RlID0gIGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCxcbiAgICBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz00KSB7XG4gICAgICBlbmNvZGVkMSA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKV07XG4gICAgICBlbmNvZGVkMiA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzEpXTtcbiAgICAgIGVuY29kZWQzID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMildO1xuICAgICAgZW5jb2RlZDQgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSszKV07XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyoqXHJcbiAqIENyZWF0ZSBhIGJsb2IgYnVpbGRlciBldmVuIHdoZW4gdmVuZG9yIHByZWZpeGVzIGV4aXN0XHJcbiAqL1xyXG5cclxudmFyIEJsb2JCdWlsZGVyID0gdHlwZW9mIEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IEJsb2JCdWlsZGVyIDpcclxuICB0eXBlb2YgV2ViS2l0QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gV2ViS2l0QmxvYkJ1aWxkZXIgOlxyXG4gIHR5cGVvZiBNU0Jsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1TQmxvYkJ1aWxkZXIgOlxyXG4gIHR5cGVvZiBNb3pCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNb3pCbG9iQnVpbGRlciA6IFxyXG4gIGZhbHNlO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIEJsb2IgY29uc3RydWN0b3IgaXMgc3VwcG9ydGVkXHJcbiAqL1xyXG5cclxudmFyIGJsb2JTdXBwb3J0ZWQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBhID0gbmV3IEJsb2IoWydoaSddKTtcclxuICAgIHJldHVybiBhLnNpemUgPT09IDI7XHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIEJsb2IgY29uc3RydWN0b3Igc3VwcG9ydHMgQXJyYXlCdWZmZXJWaWV3c1xyXG4gKiBGYWlscyBpbiBTYWZhcmkgNiwgc28gd2UgbmVlZCB0byBtYXAgdG8gQXJyYXlCdWZmZXJzIHRoZXJlLlxyXG4gKi9cclxuXHJcbnZhciBibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXcgPSBibG9iU3VwcG9ydGVkICYmIChmdW5jdGlvbigpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGIgPSBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoWzEsMl0pXSk7XHJcbiAgICByZXR1cm4gYi5zaXplID09PSAyO1xyXG4gIH0gY2F0Y2goZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSkoKTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBCbG9iQnVpbGRlciBpcyBzdXBwb3J0ZWRcclxuICovXHJcblxyXG52YXIgYmxvYkJ1aWxkZXJTdXBwb3J0ZWQgPSBCbG9iQnVpbGRlclxyXG4gICYmIEJsb2JCdWlsZGVyLnByb3RvdHlwZS5hcHBlbmRcclxuICAmJiBCbG9iQnVpbGRlci5wcm90b3R5cGUuZ2V0QmxvYjtcclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBtYXBzIEFycmF5QnVmZmVyVmlld3MgdG8gQXJyYXlCdWZmZXJzXHJcbiAqIFVzZWQgYnkgQmxvYkJ1aWxkZXIgY29uc3RydWN0b3IgYW5kIG9sZCBicm93c2VycyB0aGF0IGRpZG4ndFxyXG4gKiBzdXBwb3J0IGl0IGluIHRoZSBCbG9iIGNvbnN0cnVjdG9yLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1hcEFycmF5QnVmZmVyVmlld3MoYXJ5KSB7XHJcbiAgcmV0dXJuIGFyeS5tYXAoZnVuY3Rpb24oY2h1bmspIHtcclxuICAgIGlmIChjaHVuay5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICB2YXIgYnVmID0gY2h1bmsuYnVmZmVyO1xyXG5cclxuICAgICAgLy8gaWYgdGhpcyBpcyBhIHN1YmFycmF5LCBtYWtlIGEgY29weSBzbyB3ZSBvbmx5XHJcbiAgICAgIC8vIGluY2x1ZGUgdGhlIHN1YmFycmF5IHJlZ2lvbiBmcm9tIHRoZSB1bmRlcmx5aW5nIGJ1ZmZlclxyXG4gICAgICBpZiAoY2h1bmsuYnl0ZUxlbmd0aCAhPT0gYnVmLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICB2YXIgY29weSA9IG5ldyBVaW50OEFycmF5KGNodW5rLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIGNvcHkuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZiwgY2h1bmsuYnl0ZU9mZnNldCwgY2h1bmsuYnl0ZUxlbmd0aCkpO1xyXG4gICAgICAgIGJ1ZiA9IGNvcHkuYnVmZmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYnVmO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaHVuaztcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gQmxvYkJ1aWxkZXJDb25zdHJ1Y3RvcihhcnksIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgdmFyIGJiID0gbmV3IEJsb2JCdWlsZGVyKCk7XHJcbiAgbWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpLmZvckVhY2goZnVuY3Rpb24ocGFydCkge1xyXG4gICAgYmIuYXBwZW5kKHBhcnQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKG9wdGlvbnMudHlwZSkgPyBiYi5nZXRCbG9iKG9wdGlvbnMudHlwZSkgOiBiYi5nZXRCbG9iKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBCbG9iQ29uc3RydWN0b3IoYXJ5LCBvcHRpb25zKSB7XHJcbiAgcmV0dXJuIG5ldyBCbG9iKG1hcEFycmF5QnVmZmVyVmlld3MoYXJ5KSwgb3B0aW9ucyB8fCB7fSk7XHJcbn07XHJcblxyXG5pZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgQmxvYkJ1aWxkZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBCbG9iLnByb3RvdHlwZTtcclxuICBCbG9iQ29uc3RydWN0b3IucHJvdG90eXBlID0gQmxvYi5wcm90b3R5cGU7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xyXG4gIGlmIChibG9iU3VwcG9ydGVkKSB7XHJcbiAgICByZXR1cm4gYmxvYlN1cHBvcnRzQXJyYXlCdWZmZXJWaWV3ID8gQmxvYiA6IEJsb2JDb25zdHJ1Y3RvcjtcclxuICB9IGVsc2UgaWYgKGJsb2JCdWlsZGVyU3VwcG9ydGVkKSB7XHJcbiAgICByZXR1cm4gQmxvYkJ1aWxkZXJDb25zdHJ1Y3RvcjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn0pKCk7XHJcbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsIi8qKlxuICogU2xpY2UgcmVmZXJlbmNlLlxuICovXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xuXG4vKipcbiAqIEJpbmQgYG9iamAgdG8gYGZuYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gZm4gb3Igc3RyaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIGZuKXtcbiAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBmbikgZm4gPSBvYmpbZm5dO1xuICBpZiAoJ2Z1bmN0aW9uJyAhPSB0eXBlb2YgZm4pIHRocm93IG5ldyBFcnJvcignYmluZCgpIHJlcXVpcmVzIGEgZnVuY3Rpb24nKTtcbiAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseShvYmosIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICB9XG59O1xuIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGEsIGIpe1xuICB2YXIgZm4gPSBmdW5jdGlvbigpe307XG4gIGZuLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICBhLnByb3RvdHlwZSA9IG5ldyBmbjtcbiAgYS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBhO1xufTsiLCJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcblxuLyoqXG4gKiBFeHBvcnRzIHBhcnNlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKlxuICovXG5tb2R1bGUuZXhwb3J0cy5wYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHRyYW5zcG9ydHMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMvaW5kZXgnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6c29ja2V0Jyk7XG52YXIgaW5kZXggPSByZXF1aXJlKCdpbmRleG9mJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIHBhcnNldXJpID0gcmVxdWlyZSgncGFyc2V1cmknKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gU29ja2V0O1xuXG4vKipcbiAqIFNvY2tldCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVyaSBvciBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBTb2NrZXQgKHVyaSwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU29ja2V0KSkgcmV0dXJuIG5ldyBTb2NrZXQodXJpLCBvcHRzKTtcblxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICBpZiAodXJpICYmICdvYmplY3QnID09PSB0eXBlb2YgdXJpKSB7XG4gICAgb3B0cyA9IHVyaTtcbiAgICB1cmkgPSBudWxsO1xuICB9XG5cbiAgaWYgKHVyaSkge1xuICAgIHVyaSA9IHBhcnNldXJpKHVyaSk7XG4gICAgb3B0cy5ob3N0bmFtZSA9IHVyaS5ob3N0O1xuICAgIG9wdHMuc2VjdXJlID0gdXJpLnByb3RvY29sID09PSAnaHR0cHMnIHx8IHVyaS5wcm90b2NvbCA9PT0gJ3dzcyc7XG4gICAgb3B0cy5wb3J0ID0gdXJpLnBvcnQ7XG4gICAgaWYgKHVyaS5xdWVyeSkgb3B0cy5xdWVyeSA9IHVyaS5xdWVyeTtcbiAgfSBlbHNlIGlmIChvcHRzLmhvc3QpIHtcbiAgICBvcHRzLmhvc3RuYW1lID0gcGFyc2V1cmkob3B0cy5ob3N0KS5ob3N0O1xuICB9XG5cbiAgdGhpcy5zZWN1cmUgPSBudWxsICE9IG9wdHMuc2VjdXJlID8gb3B0cy5zZWN1cmVcbiAgICA6ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmICdodHRwczonID09PSBsb2NhdGlvbi5wcm90b2NvbCk7XG5cbiAgaWYgKG9wdHMuaG9zdG5hbWUgJiYgIW9wdHMucG9ydCkge1xuICAgIC8vIGlmIG5vIHBvcnQgaXMgc3BlY2lmaWVkIG1hbnVhbGx5LCB1c2UgdGhlIHByb3RvY29sIGRlZmF1bHRcbiAgICBvcHRzLnBvcnQgPSB0aGlzLnNlY3VyZSA/ICc0NDMnIDogJzgwJztcbiAgfVxuXG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50IHx8IGZhbHNlO1xuICB0aGlzLmhvc3RuYW1lID0gb3B0cy5ob3N0bmFtZSB8fFxuICAgICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG4gIHRoaXMucG9ydCA9IG9wdHMucG9ydCB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhdGlvbi5wb3J0XG4gICAgICA/IGxvY2F0aW9uLnBvcnRcbiAgICAgIDogKHRoaXMuc2VjdXJlID8gNDQzIDogODApKTtcbiAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnkgfHwge307XG4gIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHRoaXMucXVlcnkpIHRoaXMucXVlcnkgPSBwYXJzZXFzLmRlY29kZSh0aGlzLnF1ZXJ5KTtcbiAgdGhpcy51cGdyYWRlID0gZmFsc2UgIT09IG9wdHMudXBncmFkZTtcbiAgdGhpcy5wYXRoID0gKG9wdHMucGF0aCB8fCAnL2VuZ2luZS5pbycpLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLyc7XG4gIHRoaXMuZm9yY2VKU09OUCA9ICEhb3B0cy5mb3JjZUpTT05QO1xuICB0aGlzLmpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG4gIHRoaXMuZm9yY2VCYXNlNjQgPSAhIW9wdHMuZm9yY2VCYXNlNjQ7XG4gIHRoaXMuZW5hYmxlc1hEUiA9ICEhb3B0cy5lbmFibGVzWERSO1xuICB0aGlzLnRpbWVzdGFtcFBhcmFtID0gb3B0cy50aW1lc3RhbXBQYXJhbSB8fCAndCc7XG4gIHRoaXMudGltZXN0YW1wUmVxdWVzdHMgPSBvcHRzLnRpbWVzdGFtcFJlcXVlc3RzO1xuICB0aGlzLnRyYW5zcG9ydHMgPSBvcHRzLnRyYW5zcG9ydHMgfHwgWydwb2xsaW5nJywgJ3dlYnNvY2tldCddO1xuICB0aGlzLnRyYW5zcG9ydE9wdGlvbnMgPSBvcHRzLnRyYW5zcG9ydE9wdGlvbnMgfHwge307XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICcnO1xuICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG4gIHRoaXMucG9saWN5UG9ydCA9IG9wdHMucG9saWN5UG9ydCB8fCA4NDM7XG4gIHRoaXMucmVtZW1iZXJVcGdyYWRlID0gb3B0cy5yZW1lbWJlclVwZ3JhZGUgfHwgZmFsc2U7XG4gIHRoaXMuYmluYXJ5VHlwZSA9IG51bGw7XG4gIHRoaXMub25seUJpbmFyeVVwZ3JhZGVzID0gb3B0cy5vbmx5QmluYXJ5VXBncmFkZXM7XG4gIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSBmYWxzZSAhPT0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSA/IChvcHRzLnBlck1lc3NhZ2VEZWZsYXRlIHx8IHt9KSA6IGZhbHNlO1xuXG4gIGlmICh0cnVlID09PSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlKSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0ge307XG4gIGlmICh0aGlzLnBlck1lc3NhZ2VEZWZsYXRlICYmIG51bGwgPT0gdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCA9IDEwMjQ7XG4gIH1cblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeCB8fCBudWxsO1xuICB0aGlzLmtleSA9IG9wdHMua2V5IHx8IG51bGw7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZSB8fCBudWxsO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQgfHwgbnVsbDtcbiAgdGhpcy5jYSA9IG9wdHMuY2EgfHwgbnVsbDtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzIHx8IG51bGw7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgdGhpcy5mb3JjZU5vZGUgPSAhIW9wdHMuZm9yY2VOb2RlO1xuXG4gIC8vIGRldGVjdCBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudFxuICB0aGlzLmlzUmVhY3ROYXRpdmUgPSAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnc3RyaW5nJyAmJiBuYXZpZ2F0b3IucHJvZHVjdC50b0xvd2VyQ2FzZSgpID09PSAncmVhY3RuYXRpdmUnKTtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIG9yIFJlYWN0TmF0aXZlIGNsaWVudFxuICBpZiAodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuaXNSZWFjdE5hdGl2ZSkge1xuICAgIGlmIChvcHRzLmV4dHJhSGVhZGVycyAmJiBPYmplY3Qua2V5cyhvcHRzLmV4dHJhSGVhZGVycykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5sb2NhbEFkZHJlc3MpIHtcbiAgICAgIHRoaXMubG9jYWxBZGRyZXNzID0gb3B0cy5sb2NhbEFkZHJlc3M7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IG9uIGhhbmRzaGFrZVxuICB0aGlzLmlkID0gbnVsbDtcbiAgdGhpcy51cGdyYWRlcyA9IG51bGw7XG4gIHRoaXMucGluZ0ludGVydmFsID0gbnVsbDtcbiAgdGhpcy5waW5nVGltZW91dCA9IG51bGw7XG5cbiAgLy8gc2V0IG9uIGhlYXJ0YmVhdFxuICB0aGlzLnBpbmdJbnRlcnZhbFRpbWVyID0gbnVsbDtcbiAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gbnVsbDtcblxuICB0aGlzLm9wZW4oKTtcbn1cblxuU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihTb2NrZXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxuXG4vKipcbiAqIEV4cG9zZSBkZXBzIGZvciBsZWdhY3kgY29tcGF0aWJpbGl0eVxuICogYW5kIHN0YW5kYWxvbmUgYnJvd3NlciBhY2Nlc3MuXG4gKi9cblxuU29ja2V0LlNvY2tldCA9IFNvY2tldDtcblNvY2tldC5UcmFuc3BvcnQgPSByZXF1aXJlKCcuL3RyYW5zcG9ydCcpO1xuU29ja2V0LnRyYW5zcG9ydHMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMvaW5kZXgnKTtcblNvY2tldC5wYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyB0cmFuc3BvcnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gKiBAcmV0dXJuIHtUcmFuc3BvcnR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNyZWF0ZVRyYW5zcG9ydCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlYnVnKCdjcmVhdGluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gIHZhciBxdWVyeSA9IGNsb25lKHRoaXMucXVlcnkpO1xuXG4gIC8vIGFwcGVuZCBlbmdpbmUuaW8gcHJvdG9jb2wgaWRlbnRpZmllclxuICBxdWVyeS5FSU8gPSBwYXJzZXIucHJvdG9jb2w7XG5cbiAgLy8gdHJhbnNwb3J0IG5hbWVcbiAgcXVlcnkudHJhbnNwb3J0ID0gbmFtZTtcblxuICAvLyBwZXItdHJhbnNwb3J0IG9wdGlvbnNcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLnRyYW5zcG9ydE9wdGlvbnNbbmFtZV0gfHwge307XG5cbiAgLy8gc2Vzc2lvbiBpZCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gIHZhciB0cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c1tuYW1lXSh7XG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIHNvY2tldDogdGhpcyxcbiAgICBhZ2VudDogb3B0aW9ucy5hZ2VudCB8fCB0aGlzLmFnZW50LFxuICAgIGhvc3RuYW1lOiBvcHRpb25zLmhvc3RuYW1lIHx8IHRoaXMuaG9zdG5hbWUsXG4gICAgcG9ydDogb3B0aW9ucy5wb3J0IHx8IHRoaXMucG9ydCxcbiAgICBzZWN1cmU6IG9wdGlvbnMuc2VjdXJlIHx8IHRoaXMuc2VjdXJlLFxuICAgIHBhdGg6IG9wdGlvbnMucGF0aCB8fCB0aGlzLnBhdGgsXG4gICAgZm9yY2VKU09OUDogb3B0aW9ucy5mb3JjZUpTT05QIHx8IHRoaXMuZm9yY2VKU09OUCxcbiAgICBqc29ucDogb3B0aW9ucy5qc29ucCB8fCB0aGlzLmpzb25wLFxuICAgIGZvcmNlQmFzZTY0OiBvcHRpb25zLmZvcmNlQmFzZTY0IHx8IHRoaXMuZm9yY2VCYXNlNjQsXG4gICAgZW5hYmxlc1hEUjogb3B0aW9ucy5lbmFibGVzWERSIHx8IHRoaXMuZW5hYmxlc1hEUixcbiAgICB0aW1lc3RhbXBSZXF1ZXN0czogb3B0aW9ucy50aW1lc3RhbXBSZXF1ZXN0cyB8fCB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzLFxuICAgIHRpbWVzdGFtcFBhcmFtOiBvcHRpb25zLnRpbWVzdGFtcFBhcmFtIHx8IHRoaXMudGltZXN0YW1wUGFyYW0sXG4gICAgcG9saWN5UG9ydDogb3B0aW9ucy5wb2xpY3lQb3J0IHx8IHRoaXMucG9saWN5UG9ydCxcbiAgICBwZng6IG9wdGlvbnMucGZ4IHx8IHRoaXMucGZ4LFxuICAgIGtleTogb3B0aW9ucy5rZXkgfHwgdGhpcy5rZXksXG4gICAgcGFzc3BocmFzZTogb3B0aW9ucy5wYXNzcGhyYXNlIHx8IHRoaXMucGFzc3BocmFzZSxcbiAgICBjZXJ0OiBvcHRpb25zLmNlcnQgfHwgdGhpcy5jZXJ0LFxuICAgIGNhOiBvcHRpb25zLmNhIHx8IHRoaXMuY2EsXG4gICAgY2lwaGVyczogb3B0aW9ucy5jaXBoZXJzIHx8IHRoaXMuY2lwaGVycyxcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6IG9wdGlvbnMucmVqZWN0VW5hdXRob3JpemVkIHx8IHRoaXMucmVqZWN0VW5hdXRob3JpemVkLFxuICAgIHBlck1lc3NhZ2VEZWZsYXRlOiBvcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlIHx8IHRoaXMucGVyTWVzc2FnZURlZmxhdGUsXG4gICAgZXh0cmFIZWFkZXJzOiBvcHRpb25zLmV4dHJhSGVhZGVycyB8fCB0aGlzLmV4dHJhSGVhZGVycyxcbiAgICBmb3JjZU5vZGU6IG9wdGlvbnMuZm9yY2VOb2RlIHx8IHRoaXMuZm9yY2VOb2RlLFxuICAgIGxvY2FsQWRkcmVzczogb3B0aW9ucy5sb2NhbEFkZHJlc3MgfHwgdGhpcy5sb2NhbEFkZHJlc3MsXG4gICAgcmVxdWVzdFRpbWVvdXQ6IG9wdGlvbnMucmVxdWVzdFRpbWVvdXQgfHwgdGhpcy5yZXF1ZXN0VGltZW91dCxcbiAgICBwcm90b2NvbHM6IG9wdGlvbnMucHJvdG9jb2xzIHx8IHZvaWQgKDApLFxuICAgIGlzUmVhY3ROYXRpdmU6IHRoaXMuaXNSZWFjdE5hdGl2ZVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNwb3J0O1xufTtcblxuZnVuY3Rpb24gY2xvbmUgKG9iaikge1xuICB2YXIgbyA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIG9baV0gPSBvYmpbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIHRyYW5zcG9ydCB0byB1c2UgYW5kIHN0YXJ0cyBwcm9iZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuU29ja2V0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdHJhbnNwb3J0O1xuICBpZiAodGhpcy5yZW1lbWJlclVwZ3JhZGUgJiYgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyAmJiB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZignd2Vic29ja2V0JykgIT09IC0xKSB7XG4gICAgdHJhbnNwb3J0ID0gJ3dlYnNvY2tldCc7XG4gIH0gZWxzZSBpZiAoMCA9PT0gdGhpcy50cmFuc3BvcnRzLmxlbmd0aCkge1xuICAgIC8vIEVtaXQgZXJyb3Igb24gbmV4dCB0aWNrIHNvIGl0IGNhbiBiZSBsaXN0ZW5lZCB0b1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCAnTm8gdHJhbnNwb3J0cyBhdmFpbGFibGUnKTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzWzBdO1xuICB9XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcblxuICAvLyBSZXRyeSB3aXRoIHRoZSBuZXh0IHRyYW5zcG9ydCBpZiB0aGUgdHJhbnNwb3J0IGlzIGRpc2FibGVkIChqc29ucDogZmFsc2UpXG4gIHRyeSB7XG4gICAgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMudHJhbnNwb3J0cy5zaGlmdCgpO1xuICAgIHRoaXMub3BlbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyYW5zcG9ydC5vcGVuKCk7XG4gIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0LiBEaXNhYmxlcyB0aGUgZXhpc3Rpbmcgb25lIChpZiBhbnkpLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2V0VHJhbnNwb3J0ID0gZnVuY3Rpb24gKHRyYW5zcG9ydCkge1xuICBkZWJ1Zygnc2V0dGluZyB0cmFuc3BvcnQgJXMnLCB0cmFuc3BvcnQubmFtZSk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICBkZWJ1ZygnY2xlYXJpbmcgZXhpc3RpbmcgdHJhbnNwb3J0ICVzJywgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gIH1cblxuICAvLyBzZXQgdXAgdHJhbnNwb3J0XG4gIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXG4gIC8vIHNldCB1cCB0cmFuc3BvcnQgbGlzdGVuZXJzXG4gIHRyYW5zcG9ydFxuICAub24oJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25EcmFpbigpO1xuICB9KVxuICAub24oJ3BhY2tldCcsIGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICBzZWxmLm9uUGFja2V0KHBhY2tldCk7XG4gIH0pXG4gIC5vbignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgIHNlbGYub25FcnJvcihlKTtcbiAgfSlcbiAgLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uQ2xvc2UoJ3RyYW5zcG9ydCBjbG9zZScpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUHJvYmVzIGEgdHJhbnNwb3J0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5wcm9iZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgdmFyIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KG5hbWUsIHsgcHJvYmU6IDEgfSk7XG4gIHZhciBmYWlsZWQgPSBmYWxzZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBvblRyYW5zcG9ydE9wZW4gKCkge1xuICAgIGlmIChzZWxmLm9ubHlCaW5hcnlVcGdyYWRlcykge1xuICAgICAgdmFyIHVwZ3JhZGVMb3Nlc0JpbmFyeSA9ICF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmIHNlbGYudHJhbnNwb3J0LnN1cHBvcnRzQmluYXJ5O1xuICAgICAgZmFpbGVkID0gZmFpbGVkIHx8IHVwZ3JhZGVMb3Nlc0JpbmFyeTtcbiAgICB9XG4gICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgb3BlbmVkJywgbmFtZSk7XG4gICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogJ3BpbmcnLCBkYXRhOiAncHJvYmUnIH1dKTtcbiAgICB0cmFuc3BvcnQub25jZSgncGFja2V0JywgZnVuY3Rpb24gKG1zZykge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgaWYgKCdwb25nJyA9PT0gbXNnLnR5cGUgJiYgJ3Byb2JlJyA9PT0gbXNnLmRhdGEpIHtcbiAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgcG9uZycsIG5hbWUpO1xuICAgICAgICBzZWxmLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgIHNlbGYuZW1pdCgndXBncmFkaW5nJywgdHJhbnNwb3J0KTtcbiAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVybjtcbiAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICd3ZWJzb2NrZXQnID09PSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgICBkZWJ1ZygncGF1c2luZyBjdXJyZW50IHRyYW5zcG9ydCBcIiVzXCInLCBzZWxmLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgc2VsZi50cmFuc3BvcnQucGF1c2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoJ2Nsb3NlZCcgPT09IHNlbGYucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGRlYnVnKCdjaGFuZ2luZyB0cmFuc3BvcnQgYW5kIHNlbmRpbmcgdXBncmFkZSBwYWNrZXQnKTtcblxuICAgICAgICAgIGNsZWFudXAoKTtcblxuICAgICAgICAgIHNlbGYuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogJ3VwZ3JhZGUnIH1dKTtcbiAgICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGUnLCB0cmFuc3BvcnQpO1xuICAgICAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgICAgICAgc2VsZi51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLmZsdXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkJywgbmFtZSk7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3Byb2JlIGVycm9yJyk7XG4gICAgICAgIGVyci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcbiAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlRXJyb3InLCBlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJlZXplVHJhbnNwb3J0ICgpIHtcbiAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAvLyBBbnkgY2FsbGJhY2sgY2FsbGVkIGJ5IHRyYW5zcG9ydCBzaG91bGQgYmUgaWdub3JlZCBzaW5jZSBub3dcbiAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgY2xlYW51cCgpO1xuXG4gICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgfVxuXG4gIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBoYXBwZW5zIHdoaWxlIHByb2JpbmdcbiAgZnVuY3Rpb24gb25lcnJvciAoZXJyKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdwcm9iZSBlcnJvcjogJyArIGVycik7XG4gICAgZXJyb3IudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICBmcmVlemVUcmFuc3BvcnQoKTtcblxuICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yOiAlcycsIG5hbWUsIGVycik7XG5cbiAgICBzZWxmLmVtaXQoJ3VwZ3JhZGVFcnJvcicsIGVycm9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNwb3J0Q2xvc2UgKCkge1xuICAgIG9uZXJyb3IoJ3RyYW5zcG9ydCBjbG9zZWQnKTtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbmNsb3NlICgpIHtcbiAgICBvbmVycm9yKCdzb2NrZXQgY2xvc2VkJyk7XG4gIH1cblxuICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgdXBncmFkZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbnVwZ3JhZGUgKHRvKSB7XG4gICAgaWYgKHRyYW5zcG9ydCAmJiB0by5uYW1lICE9PSB0cmFuc3BvcnQubmFtZSkge1xuICAgICAgZGVidWcoJ1wiJXNcIiB3b3JrcyAtIGFib3J0aW5nIFwiJXNcIicsIHRvLm5hbWUsIHRyYW5zcG9ydC5uYW1lKTtcbiAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIHRoZSB0cmFuc3BvcnQgYW5kIG9uIHNlbGZcbiAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdvcGVuJywgb25UcmFuc3BvcnRPcGVuKTtcbiAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcigndXBncmFkaW5nJywgb251cGdyYWRlKTtcbiAgfVxuXG4gIHRyYW5zcG9ydC5vbmNlKCdvcGVuJywgb25UcmFuc3BvcnRPcGVuKTtcbiAgdHJhbnNwb3J0Lm9uY2UoJ2Vycm9yJywgb25lcnJvcik7XG4gIHRyYW5zcG9ydC5vbmNlKCdjbG9zZScsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuXG4gIHRoaXMub25jZSgnY2xvc2UnLCBvbmNsb3NlKTtcbiAgdGhpcy5vbmNlKCd1cGdyYWRpbmcnLCBvbnVwZ3JhZGUpO1xuXG4gIHRyYW5zcG9ydC5vcGVuKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgZGVlbWVkIG9wZW4uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3NvY2tldCBvcGVuJyk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICd3ZWJzb2NrZXQnID09PSB0aGlzLnRyYW5zcG9ydC5uYW1lO1xuICB0aGlzLmVtaXQoJ29wZW4nKTtcbiAgdGhpcy5mbHVzaCgpO1xuXG4gIC8vIHdlIGNoZWNrIGZvciBgcmVhZHlTdGF0ZWAgaW4gY2FzZSBhbiBgb3BlbmBcbiAgLy8gbGlzdGVuZXIgYWxyZWFkeSBjbG9zZWQgdGhlIHNvY2tldFxuICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUgJiYgdGhpcy51cGdyYWRlICYmIHRoaXMudHJhbnNwb3J0LnBhdXNlKSB7XG4gICAgZGVidWcoJ3N0YXJ0aW5nIHVwZ3JhZGUgcHJvYmVzJyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLnVwZ3JhZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5wcm9iZSh0aGlzLnVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogSGFuZGxlcyBhIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgICdjbG9zaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3NvY2tldCByZWNlaXZlOiB0eXBlIFwiJXNcIiwgZGF0YSBcIiVzXCInLCBwYWNrZXQudHlwZSwgcGFja2V0LmRhdGEpO1xuXG4gICAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xuXG4gICAgLy8gU29ja2V0IGlzIGxpdmUgLSBhbnkgcGFja2V0IGNvdW50c1xuICAgIHRoaXMuZW1pdCgnaGVhcnRiZWF0Jyk7XG5cbiAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICBjYXNlICdvcGVuJzpcbiAgICAgICAgdGhpcy5vbkhhbmRzaGFrZShKU09OLnBhcnNlKHBhY2tldC5kYXRhKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb25nJzpcbiAgICAgICAgdGhpcy5zZXRQaW5nKCk7XG4gICAgICAgIHRoaXMuZW1pdCgncG9uZycpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdzZXJ2ZXIgZXJyb3InKTtcbiAgICAgICAgZXJyLmNvZGUgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgICAgdGhpcy5lbWl0KCdkYXRhJywgcGFja2V0LmRhdGEpO1xuICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkZWJ1ZygncGFja2V0IHJlY2VpdmVkIHdpdGggc29ja2V0IHJlYWR5U3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBoYW5kc2hha2UgY29tcGxldGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGFuZHNoYWtlIG9ialxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkhhbmRzaGFrZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuZW1pdCgnaGFuZHNoYWtlJywgZGF0YSk7XG4gIHRoaXMuaWQgPSBkYXRhLnNpZDtcbiAgdGhpcy50cmFuc3BvcnQucXVlcnkuc2lkID0gZGF0YS5zaWQ7XG4gIHRoaXMudXBncmFkZXMgPSB0aGlzLmZpbHRlclVwZ3JhZGVzKGRhdGEudXBncmFkZXMpO1xuICB0aGlzLnBpbmdJbnRlcnZhbCA9IGRhdGEucGluZ0ludGVydmFsO1xuICB0aGlzLnBpbmdUaW1lb3V0ID0gZGF0YS5waW5nVGltZW91dDtcbiAgdGhpcy5vbk9wZW4oKTtcbiAgLy8gSW4gY2FzZSBvcGVuIGhhbmRsZXIgY2xvc2VzIHNvY2tldFxuICBpZiAoJ2Nsb3NlZCcgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICB0aGlzLnNldFBpbmcoKTtcblxuICAvLyBQcm9sb25nIGxpdmVuZXNzIG9mIHNvY2tldCBvbiBoZWFydGJlYXRcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignaGVhcnRiZWF0JywgdGhpcy5vbkhlYXJ0YmVhdCk7XG4gIHRoaXMub24oJ2hlYXJ0YmVhdCcsIHRoaXMub25IZWFydGJlYXQpO1xufTtcblxuLyoqXG4gKiBSZXNldHMgcGluZyB0aW1lb3V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25IZWFydGJlYXQgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLnBpbmdUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJ2Nsb3NlZCcgPT09IHNlbGYucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIHNlbGYub25DbG9zZSgncGluZyB0aW1lb3V0Jyk7XG4gIH0sIHRpbWVvdXQgfHwgKHNlbGYucGluZ0ludGVydmFsICsgc2VsZi5waW5nVGltZW91dCkpO1xufTtcblxuLyoqXG4gKiBQaW5ncyBzZXJ2ZXIgZXZlcnkgYHRoaXMucGluZ0ludGVydmFsYCBhbmQgZXhwZWN0cyByZXNwb25zZVxuICogd2l0aGluIGB0aGlzLnBpbmdUaW1lb3V0YCBvciBjbG9zZXMgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNldFBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgY2xlYXJUaW1lb3V0KHNlbGYucGluZ0ludGVydmFsVGltZXIpO1xuICBzZWxmLnBpbmdJbnRlcnZhbFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZGVidWcoJ3dyaXRpbmcgcGluZyBwYWNrZXQgLSBleHBlY3RpbmcgcG9uZyB3aXRoaW4gJXNtcycsIHNlbGYucGluZ1RpbWVvdXQpO1xuICAgIHNlbGYucGluZygpO1xuICAgIHNlbGYub25IZWFydGJlYXQoc2VsZi5waW5nVGltZW91dCk7XG4gIH0sIHNlbGYucGluZ0ludGVydmFsKTtcbn07XG5cbi8qKlxuKiBTZW5kcyBhIHBpbmcgcGFja2V0LlxuKlxuKiBAYXBpIHByaXZhdGVcbiovXG5cblNvY2tldC5wcm90b3R5cGUucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnNlbmRQYWNrZXQoJ3BpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5lbWl0KCdwaW5nJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgb24gYGRyYWluYCBldmVudFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25EcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53cml0ZUJ1ZmZlci5zcGxpY2UoMCwgdGhpcy5wcmV2QnVmZmVyTGVuKTtcblxuICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAvLyBhbmQgYSBub256ZXJvIHByZXZCdWZmZXJMZW4gY291bGQgY2F1c2UgcHJvYmxlbXMgb24gYGRyYWluYFxuICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgIHRoaXMuZW1pdCgnZHJhaW4nKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRmx1c2ggd3JpdGUgYnVmZmVycy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ2Nsb3NlZCcgIT09IHRoaXMucmVhZHlTdGF0ZSAmJiB0aGlzLnRyYW5zcG9ydC53cml0YWJsZSAmJlxuICAgICF0aGlzLnVwZ3JhZGluZyAmJiB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgIGRlYnVnKCdmbHVzaGluZyAlZCBwYWNrZXRzIGluIHNvY2tldCcsIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKTtcbiAgICB0aGlzLnRyYW5zcG9ydC5zZW5kKHRoaXMud3JpdGVCdWZmZXIpO1xuICAgIC8vIGtlZXAgdHJhY2sgb2YgY3VycmVudCBsZW5ndGggb2Ygd3JpdGVCdWZmZXJcbiAgICAvLyBzcGxpY2Ugd3JpdGVCdWZmZXIgYW5kIGNhbGxiYWNrQnVmZmVyIG9uIGBkcmFpbmBcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aDtcbiAgICB0aGlzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2VuZHMgYSBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAqIEByZXR1cm4ge1NvY2tldH0gZm9yIGNoYWluaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLndyaXRlID1cblNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChtc2csIG9wdGlvbnMsIGZuKSB7XG4gIHRoaXMuc2VuZFBhY2tldCgnbWVzc2FnZScsIG1zZywgb3B0aW9ucywgZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhY2tldCB0eXBlLlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZW5kUGFja2V0ID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIG9wdGlvbnMsIGZuKSB7XG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZGF0YSkge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgZm4gPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgaWYgKCdjbG9zaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdjbG9zZWQnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gIHZhciBwYWNrZXQgPSB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBkYXRhOiBkYXRhLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfTtcbiAgdGhpcy5lbWl0KCdwYWNrZXRDcmVhdGUnLCBwYWNrZXQpO1xuICB0aGlzLndyaXRlQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgaWYgKGZuKSB0aGlzLm9uY2UoJ2ZsdXNoJywgZm4pO1xuICB0aGlzLmZsdXNoKCk7XG59O1xuXG4vKipcbiAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2luZyc7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIHRoaXMub25jZSgnZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSAoKSB7XG4gICAgc2VsZi5vbkNsb3NlKCdmb3JjZWQgY2xvc2UnKTtcbiAgICBkZWJ1Zygnc29ja2V0IGNsb3NpbmcgLSB0ZWxsaW5nIHRyYW5zcG9ydCB0byBjbG9zZScpO1xuICAgIHNlbGYudHJhbnNwb3J0LmNsb3NlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwQW5kQ2xvc2UgKCkge1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGUnLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGVFcnJvcicsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgY2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdhaXRGb3JVcGdyYWRlICgpIHtcbiAgICAvLyB3YWl0IGZvciB1cGdyYWRlIHRvIGZpbmlzaCBzaW5jZSB3ZSBjYW4ndCBzZW5kIHBhY2tldHMgd2hpbGUgcGF1c2luZyBhIHRyYW5zcG9ydFxuICAgIHNlbGYub25jZSgndXBncmFkZScsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgc2VsZi5vbmNlKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgZGVidWcoJ3NvY2tldCBlcnJvciAlaicsIGVycik7XG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHRoaXMub25DbG9zZSgndHJhbnNwb3J0IGVycm9yJywgZXJyKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24sIGRlc2MpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdjbG9zaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3NvY2tldCBjbG9zZSB3aXRoIHJlYXNvbjogXCIlc1wiJywgcmVhc29uKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBjbGVhciB0aW1lcnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nSW50ZXJ2YWxUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoJ2Nsb3NlJyk7XG5cbiAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cbiAgICAvLyBpZ25vcmUgZnVydGhlciB0cmFuc3BvcnQgY29tbXVuaWNhdGlvblxuICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgLy8gc2V0IHJlYWR5IHN0YXRlXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG5cbiAgICAvLyBjbGVhciBzZXNzaW9uIGlkXG4gICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAvLyBlbWl0IGNsb3NlIGV2ZW50XG4gICAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAvLyBjbGVhbiBidWZmZXJzIGFmdGVyLCBzbyB1c2VycyBjYW4gc3RpbGxcbiAgICAvLyBncmFiIHRoZSBidWZmZXJzIG9uIGBjbG9zZWAgZXZlbnRcbiAgICBzZWxmLndyaXRlQnVmZmVyID0gW107XG4gICAgc2VsZi5wcmV2QnVmZmVyTGVuID0gMDtcbiAgfVxufTtcblxuLyoqXG4gKiBGaWx0ZXJzIHVwZ3JhZGVzLCByZXR1cm5pbmcgb25seSB0aG9zZSBtYXRjaGluZyBjbGllbnQgdHJhbnNwb3J0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXIgdXBncmFkZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICpcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmZpbHRlclVwZ3JhZGVzID0gZnVuY3Rpb24gKHVwZ3JhZGVzKSB7XG4gIHZhciBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBqID0gdXBncmFkZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgaWYgKH5pbmRleCh0aGlzLnRyYW5zcG9ydHMsIHVwZ3JhZGVzW2ldKSkgZmlsdGVyZWRVcGdyYWRlcy5wdXNoKHVwZ3JhZGVzW2ldKTtcbiAgfVxuICByZXR1cm4gZmlsdGVyZWRVcGdyYWRlcztcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcG9ydDtcblxuLyoqXG4gKiBUcmFuc3BvcnQgYWJzdHJhY3QgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBUcmFuc3BvcnQgKG9wdHMpIHtcbiAgdGhpcy5wYXRoID0gb3B0cy5wYXRoO1xuICB0aGlzLmhvc3RuYW1lID0gb3B0cy5ob3N0bmFtZTtcbiAgdGhpcy5wb3J0ID0gb3B0cy5wb3J0O1xuICB0aGlzLnNlY3VyZSA9IG9wdHMuc2VjdXJlO1xuICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgdGhpcy50aW1lc3RhbXBQYXJhbSA9IG9wdHMudGltZXN0YW1wUGFyYW07XG4gIHRoaXMudGltZXN0YW1wUmVxdWVzdHMgPSBvcHRzLnRpbWVzdGFtcFJlcXVlc3RzO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnJztcbiAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQgfHwgZmFsc2U7XG4gIHRoaXMuc29ja2V0ID0gb3B0cy5zb2NrZXQ7XG4gIHRoaXMuZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeDtcbiAgdGhpcy5rZXkgPSBvcHRzLmtleTtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQ7XG4gIHRoaXMuY2EgPSBvcHRzLmNhO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnM7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIHRoaXMuZm9yY2VOb2RlID0gb3B0cy5mb3JjZU5vZGU7XG5cbiAgLy8gcmVzdWx0cyBvZiBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudCBkZXRlY3Rpb25cbiAgdGhpcy5pc1JlYWN0TmF0aXZlID0gb3B0cy5pc1JlYWN0TmF0aXZlO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG4gIHRoaXMubG9jYWxBZGRyZXNzID0gb3B0cy5sb2NhbEFkZHJlc3M7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFRyYW5zcG9ydC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEVtaXRzIGFuIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1RyYW5zcG9ydH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChtc2csIGRlc2MpIHtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIudHlwZSA9ICdUcmFuc3BvcnRFcnJvcic7XG4gIGVyci5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3BlbnMgdGhlIHRyYW5zcG9ydC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdjbG9zZWQnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcbiAgICB0aGlzLmRvT3BlbigpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsb3NlcyB0aGUgdHJhbnNwb3J0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgIHRoaXMub25DbG9zZSgpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy53cml0ZShwYWNrZXRzKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zcG9ydCBub3Qgb3BlbicpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIG9wZW5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGRhdGEuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIHBhY2tldCA9IHBhcnNlci5kZWNvZGVQYWNrZXQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSk7XG4gIHRoaXMub25QYWNrZXQocGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggYSBkZWNvZGVkIHBhY2tldC5cbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbnZhciBYSFIgPSByZXF1aXJlKCcuL3BvbGxpbmcteGhyJyk7XG52YXIgSlNPTlAgPSByZXF1aXJlKCcuL3BvbGxpbmctanNvbnAnKTtcbnZhciB3ZWJzb2NrZXQgPSByZXF1aXJlKCcuL3dlYnNvY2tldCcpO1xuXG4vKipcbiAqIEV4cG9ydCB0cmFuc3BvcnRzLlxuICovXG5cbmV4cG9ydHMucG9sbGluZyA9IHBvbGxpbmc7XG5leHBvcnRzLndlYnNvY2tldCA9IHdlYnNvY2tldDtcblxuLyoqXG4gKiBQb2xsaW5nIHRyYW5zcG9ydCBwb2x5bW9ycGhpYyBjb25zdHJ1Y3Rvci5cbiAqIERlY2lkZXMgb24geGhyIHZzIGpzb25wIGJhc2VkIG9uIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBvbGxpbmcgKG9wdHMpIHtcbiAgdmFyIHhocjtcbiAgdmFyIHhkID0gZmFsc2U7XG4gIHZhciB4cyA9IGZhbHNlO1xuICB2YXIganNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBpc1NTTCA9ICdodHRwczonID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB4ZCA9IG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lIHx8IHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB4cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgfVxuXG4gIG9wdHMueGRvbWFpbiA9IHhkO1xuICBvcHRzLnhzY2hlbWUgPSB4cztcbiAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuXG4gIGlmICgnb3BlbicgaW4geGhyICYmICFvcHRzLmZvcmNlSlNPTlApIHtcbiAgICByZXR1cm4gbmV3IFhIUihvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWpzb25wKSB0aHJvdyBuZXcgRXJyb3IoJ0pTT05QIGRpc2FibGVkJyk7XG4gICAgcmV0dXJuIG5ldyBKU09OUChvcHRzKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBQb2xsaW5nID0gcmVxdWlyZSgnLi9wb2xsaW5nJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBKU09OUFBvbGxpbmc7XG5cbi8qKlxuICogQ2FjaGVkIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gKi9cblxudmFyIHJOZXdsaW5lID0gL1xcbi9nO1xudmFyIHJFc2NhcGVkTmV3bGluZSA9IC9cXFxcbi9nO1xuXG4vKipcbiAqIEdsb2JhbCBKU09OUCBjYWxsYmFja3MuXG4gKi9cblxudmFyIGNhbGxiYWNrcztcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIGVtcHR5ICgpIHsgfVxuXG4vKipcbiAqIFVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbCBpcyBzaGlwcGVkLlxuICovXG5mdW5jdGlvbiBnbG9iICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGZcbiAgICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3dcbiAgICAgIDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcbn1cblxuLyoqXG4gKiBKU09OUCBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBKU09OUFBvbGxpbmcgKG9wdHMpIHtcbiAgUG9sbGluZy5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gIC8vIGRlZmluZSBnbG9iYWwgY2FsbGJhY2tzIGFycmF5IGlmIG5vdCBwcmVzZW50XG4gIC8vIHdlIGRvIHRoaXMgaGVyZSAobGF6aWx5KSB0byBhdm9pZCB1bm5lZWRlZCBnbG9iYWwgcG9sbHV0aW9uXG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgLy8gd2UgbmVlZCB0byBjb25zaWRlciBtdWx0aXBsZSBlbmdpbmVzIGluIHRoZSBzYW1lIHBhZ2VcbiAgICB2YXIgZ2xvYmFsID0gZ2xvYigpO1xuICAgIGNhbGxiYWNrcyA9IGdsb2JhbC5fX19laW8gPSAoZ2xvYmFsLl9fX2VpbyB8fCBbXSk7XG4gIH1cblxuICAvLyBjYWxsYmFjayBpZGVudGlmaWVyXG4gIHRoaXMuaW5kZXggPSBjYWxsYmFja3MubGVuZ3RoO1xuXG4gIC8vIGFkZCBjYWxsYmFjayB0byBqc29ucCBnbG9iYWxcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAobXNnKSB7XG4gICAgc2VsZi5vbkRhdGEobXNnKTtcbiAgfSk7XG5cbiAgLy8gYXBwZW5kIHRvIHF1ZXJ5IHN0cmluZ1xuICB0aGlzLnF1ZXJ5LmogPSB0aGlzLmluZGV4O1xuXG4gIC8vIHByZXZlbnQgc3B1cmlvdXMgZXJyb3JzIGZyb20gYmVpbmcgZW1pdHRlZCB3aGVuIHRoZSB3aW5kb3cgaXMgdW5sb2FkZWRcbiAgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuc2NyaXB0KSBzZWxmLnNjcmlwdC5vbmVycm9yID0gZW1wdHk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBQb2xsaW5nLlxuICovXG5cbmluaGVyaXQoSlNPTlBQb2xsaW5nLCBQb2xsaW5nKTtcblxuLypcbiAqIEpTT05QIG9ubHkgc3VwcG9ydHMgYmluYXJ5IGFzIGJhc2U2NCBlbmNvZGVkIHN0cmluZ3NcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5mb3JtKSB7XG4gICAgdGhpcy5mb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKTtcbiAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgfVxuXG4gIFBvbGxpbmcucHJvdG90eXBlLmRvQ2xvc2UuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICB9XG5cbiAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgc2NyaXB0LnNyYyA9IHRoaXMudXJpKCk7XG4gIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ2pzb25wIHBvbGwgZXJyb3InLCBlKTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0QXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gIGlmIChpbnNlcnRBdCkge1xuICAgIGluc2VydEF0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaW5zZXJ0QXQpO1xuICB9IGVsc2Uge1xuICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cbiAgdGhpcy5zY3JpcHQgPSBzY3JpcHQ7XG5cbiAgdmFyIGlzVUFnZWNrbyA9ICd1bmRlZmluZWQnICE9PSB0eXBlb2YgbmF2aWdhdG9yICYmIC9nZWNrby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgaWYgKGlzVUFnZWNrbykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgIH0sIDEwMCk7XG4gIH1cbn07XG5cbi8qKlxuICogV3JpdGVzIHdpdGggYSBoaWRkZW4gaWZyYW1lLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb1dyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoIXRoaXMuZm9ybSkge1xuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHZhciBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB2YXIgaWQgPSB0aGlzLmlmcmFtZUlkID0gJ2Vpb19pZnJhbWVfJyArIHRoaXMuaW5kZXg7XG4gICAgdmFyIGlmcmFtZTtcblxuICAgIGZvcm0uY2xhc3NOYW1lID0gJ3NvY2tldGlvJztcbiAgICBmb3JtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBmb3JtLnN0eWxlLnRvcCA9ICctMTAwMHB4JztcbiAgICBmb3JtLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XG4gICAgZm9ybS50YXJnZXQgPSBpZDtcbiAgICBmb3JtLm1ldGhvZCA9ICdQT1NUJztcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWNjZXB0LWNoYXJzZXQnLCAndXRmLTgnKTtcbiAgICBhcmVhLm5hbWUgPSAnZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhcmVhKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB0aGlzLmFyZWEgPSBhcmVhO1xuICB9XG5cbiAgdGhpcy5mb3JtLmFjdGlvbiA9IHRoaXMudXJpKCk7XG5cbiAgZnVuY3Rpb24gY29tcGxldGUgKCkge1xuICAgIGluaXRJZnJhbWUoKTtcbiAgICBmbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdElmcmFtZSAoKSB7XG4gICAgaWYgKHNlbGYuaWZyYW1lKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZWxmLmZvcm0ucmVtb3ZlQ2hpbGQoc2VsZi5pZnJhbWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZWxmLm9uRXJyb3IoJ2pzb25wIHBvbGxpbmcgaWZyYW1lIHJlbW92YWwgZXJyb3InLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gaWU2IGR5bmFtaWMgaWZyYW1lcyB3aXRoIHRhcmdldD1cIlwiIHN1cHBvcnQgKHRoYW5rcyBDaHJpcyBMYW1iYWNoZXIpXG4gICAgICB2YXIgaHRtbCA9ICc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIG5hbWU9XCInICsgc2VsZi5pZnJhbWVJZCArICdcIj4nO1xuICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgIGlmcmFtZS5uYW1lID0gc2VsZi5pZnJhbWVJZDtcbiAgICAgIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDowJztcbiAgICB9XG5cbiAgICBpZnJhbWUuaWQgPSBzZWxmLmlmcmFtZUlkO1xuXG4gICAgc2VsZi5mb3JtLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgc2VsZi5pZnJhbWUgPSBpZnJhbWU7XG4gIH1cblxuICBpbml0SWZyYW1lKCk7XG5cbiAgLy8gZXNjYXBlIFxcbiB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY29udmVydGVkIGludG8gXFxyXFxuIGJ5IHNvbWUgVUFzXG4gIC8vIGRvdWJsZSBlc2NhcGluZyBpcyByZXF1aXJlZCBmb3IgZXNjYXBlZCBuZXcgbGluZXMgYmVjYXVzZSB1bmVzY2FwaW5nIG9mIG5ldyBsaW5lcyBjYW4gYmUgZG9uZSBzYWZlbHkgb24gc2VydmVyLXNpZGVcbiAgZGF0YSA9IGRhdGEucmVwbGFjZShyRXNjYXBlZE5ld2xpbmUsICdcXFxcXFxuJyk7XG4gIHRoaXMuYXJlYS52YWx1ZSA9IGRhdGEucmVwbGFjZShyTmV3bGluZSwgJ1xcXFxuJyk7XG5cbiAgdHJ5IHtcbiAgICB0aGlzLmZvcm0uc3VibWl0KCk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgaWYgKHRoaXMuaWZyYW1lLmF0dGFjaEV2ZW50KSB7XG4gICAgdGhpcy5pZnJhbWUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuaWZyYW1lLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaWZyYW1lLm9ubG9hZCA9IGNvbXBsZXRlO1xuICB9XG59O1xuIiwiLyogZ2xvYmFsIGF0dGFjaEV2ZW50ICovXG5cbi8qKlxuICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAqL1xuXG52YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbnZhciBQb2xsaW5nID0gcmVxdWlyZSgnLi9wb2xsaW5nJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcteGhyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBYSFI7XG5tb2R1bGUuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBFbXB0eSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGVtcHR5ICgpIHt9XG5cbi8qKlxuICogWEhSIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gWEhSIChvcHRzKSB7XG4gIFBvbGxpbmcuY2FsbCh0aGlzLCBvcHRzKTtcbiAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG9wdHMucmVxdWVzdFRpbWVvdXQ7XG4gIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgaXNTU0wgPSAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgdGhpcy54ZCA9ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lKSB8fFxuICAgICAgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgIHRoaXMueHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFBvbGxpbmcuXG4gKi9cblxuaW5oZXJpdChYSFIsIFBvbGxpbmcpO1xuXG4vKipcbiAqIFhIUiBzdXBwb3J0cyBiaW5hcnlcbiAqL1xuXG5YSFIucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5YSFIucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgb3B0cy51cmkgPSB0aGlzLnVyaSgpO1xuICBvcHRzLnhkID0gdGhpcy54ZDtcbiAgb3B0cy54cyA9IHRoaXMueHM7XG4gIG9wdHMuYWdlbnQgPSB0aGlzLmFnZW50IHx8IGZhbHNlO1xuICBvcHRzLnN1cHBvcnRzQmluYXJ5ID0gdGhpcy5zdXBwb3J0c0JpbmFyeTtcbiAgb3B0cy5lbmFibGVzWERSID0gdGhpcy5lbmFibGVzWERSO1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgb3B0cy5yZXF1ZXN0VGltZW91dCA9IHRoaXMucmVxdWVzdFRpbWVvdXQ7XG5cbiAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5leHRyYUhlYWRlcnMgPSB0aGlzLmV4dHJhSGVhZGVycztcblxuICByZXR1cm4gbmV3IFJlcXVlc3Qob3B0cyk7XG59O1xuXG4vKipcbiAqIFNlbmRzIGRhdGEuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5kb1dyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gIHZhciBpc0JpbmFyeSA9IHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyAmJiBkYXRhICE9PSB1bmRlZmluZWQ7XG4gIHZhciByZXEgPSB0aGlzLnJlcXVlc3QoeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSwgaXNCaW5hcnk6IGlzQmluYXJ5IH0pO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJlcS5vbignc3VjY2VzcycsIGZuKTtcbiAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ3hociBwb3N0IGVycm9yJywgZXJyKTtcbiAgfSk7XG4gIHRoaXMuc2VuZFhociA9IHJlcTtcbn07XG5cbi8qKlxuICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5YSFIucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3hociBwb2xsJyk7XG4gIHZhciByZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXEub24oJ2RhdGEnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHNlbGYub25EYXRhKGRhdGEpO1xuICB9KTtcbiAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ3hociBwb2xsIGVycm9yJywgZXJyKTtcbiAgfSk7XG4gIHRoaXMucG9sbFhociA9IHJlcTtcbn07XG5cbi8qKlxuICogUmVxdWVzdCBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3QgKG9wdHMpIHtcbiAgdGhpcy5tZXRob2QgPSBvcHRzLm1ldGhvZCB8fCAnR0VUJztcbiAgdGhpcy51cmkgPSBvcHRzLnVyaTtcbiAgdGhpcy54ZCA9ICEhb3B0cy54ZDtcbiAgdGhpcy54cyA9ICEhb3B0cy54cztcbiAgdGhpcy5hc3luYyA9IGZhbHNlICE9PSBvcHRzLmFzeW5jO1xuICB0aGlzLmRhdGEgPSB1bmRlZmluZWQgIT09IG9wdHMuZGF0YSA/IG9wdHMuZGF0YSA6IG51bGw7XG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50O1xuICB0aGlzLmlzQmluYXJ5ID0gb3B0cy5pc0JpbmFyeTtcbiAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IG9wdHMuc3VwcG9ydHNCaW5hcnk7XG4gIHRoaXMuZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcbiAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG9wdHMucmVxdWVzdFRpbWVvdXQ7XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMucGZ4ID0gb3B0cy5wZng7XG4gIHRoaXMua2V5ID0gb3B0cy5rZXk7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZTtcbiAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0O1xuICB0aGlzLmNhID0gb3B0cy5jYTtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzO1xuICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG5cbiAgdGhpcy5jcmVhdGUoKTtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIFhIUiBvYmplY3QgYW5kIHNlbmRzIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9wdHMgPSB7IGFnZW50OiB0aGlzLmFnZW50LCB4ZG9tYWluOiB0aGlzLnhkLCB4c2NoZW1lOiB0aGlzLnhzLCBlbmFibGVzWERSOiB0aGlzLmVuYWJsZXNYRFIgfTtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgdmFyIHhociA9IHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdHJ5IHtcbiAgICBkZWJ1ZygneGhyIG9wZW4gJXM6ICVzJywgdGhpcy5tZXRob2QsIHRoaXMudXJpKTtcbiAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmksIHRoaXMuYXN5bmMpO1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayAmJiB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrKHRydWUpO1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpLCB0aGlzLmV4dHJhSGVhZGVyc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIGlmICgnUE9TVCcgPT09IHRoaXMubWV0aG9kKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5pc0JpbmFyeSkge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICcqLyonKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgLy8gaWU2IGNoZWNrXG4gICAgaWYgKCd3aXRoQ3JlZGVudGlhbHMnIGluIHhocikge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgIHhoci50aW1lb3V0ID0gdGhpcy5yZXF1ZXN0VGltZW91dDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgICAgICAgICBpZiAoc2VsZi5zdXBwb3J0c0JpbmFyeSAmJiBjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpIHtcbiAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgICBpZiAoNCAhPT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgaWYgKDIwMCA9PT0geGhyLnN0YXR1cyB8fCAxMjIzID09PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IoeGhyLnN0YXR1cyk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVidWcoJ3hociBkYXRhICVzJywgdGhpcy5kYXRhKTtcbiAgICB4aHIuc2VuZCh0aGlzLmRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gTmVlZCB0byBkZWZlciBzaW5jZSAuY3JlYXRlKCkgaXMgY2FsbGVkIGRpcmVjdGx5IGZocm9tIHRoZSBjb25zdHJ1Y3RvclxuICAgIC8vIGFuZCB0aHVzIHRoZSAnZXJyb3InIGV2ZW50IGNhbiBvbmx5IGJlIG9ubHkgYm91bmQgKmFmdGVyKiB0aGlzIGV4Y2VwdGlvblxuICAgIC8vIG9jY3Vycy4gIFRoZXJlZm9yZSwgYWxzbywgd2UgY2Fubm90IHRocm93IGhlcmUgYXQgYWxsLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgIH0sIDApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5pbmRleCA9IFJlcXVlc3QucmVxdWVzdHNDb3VudCsrO1xuICAgIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF0gPSB0aGlzO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25TdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVtaXQoJ3N1Y2Nlc3MnKTtcbiAgdGhpcy5jbGVhbnVwKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCBpZiB3ZSBoYXZlIGRhdGEuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdGhpcy5lbWl0KCdkYXRhJywgZGF0YSk7XG4gIHRoaXMub25TdWNjZXNzKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB0aGlzLmNsZWFudXAodHJ1ZSk7XG59O1xuXG4vKipcbiAqIENsZWFucyB1cCBob3VzZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKGZyb21FcnJvcikge1xuICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB0aGlzLnhociB8fCBudWxsID09PSB0aGlzLnhocikge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB4bWxodHRwcmVxdWVzdFxuICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgIHRoaXMueGhyLm9ubG9hZCA9IHRoaXMueGhyLm9uZXJyb3IgPSBlbXB0eTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eTtcbiAgfVxuXG4gIGlmIChmcm9tRXJyb3IpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWxldGUgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XTtcbiAgfVxuXG4gIHRoaXMueGhyID0gbnVsbDtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gbG9hZC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBkYXRhO1xuICB0cnkge1xuICAgIHZhciBjb250ZW50VHlwZTtcbiAgICB0cnkge1xuICAgICAgY29udGVudFR5cGUgPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICBpZiAoY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKSB7XG4gICAgICBkYXRhID0gdGhpcy54aHIucmVzcG9uc2UgfHwgdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMub25FcnJvcihlKTtcbiAgfVxuICBpZiAobnVsbCAhPSBkYXRhKSB7XG4gICAgdGhpcy5vbkRhdGEoZGF0YSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgaXQgaGFzIFhEb21haW5SZXF1ZXN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmhhc1hEUiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMueHMgJiYgdGhpcy5lbmFibGVzWERSO1xufTtcblxuLyoqXG4gKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhbnVwKCk7XG59O1xuXG4vKipcbiAqIEFib3J0cyBwZW5kaW5nIHJlcXVlc3RzIHdoZW4gdW5sb2FkaW5nIHRoZSB3aW5kb3cuIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnRcbiAqIG1lbW9yeSBsZWFrcyAoZS5nLiB3aGVuIHVzaW5nIElFKSBhbmQgdG8gZW5zdXJlIHRoYXQgbm8gc3B1cmlvdXMgZXJyb3IgaXNcbiAqIGVtaXR0ZWQuXG4gKi9cblxuUmVxdWVzdC5yZXF1ZXN0c0NvdW50ID0gMDtcblJlcXVlc3QucmVxdWVzdHMgPSB7fTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKHR5cGVvZiBhdHRhY2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIHVubG9hZEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHRlcm1pbmF0aW9uRXZlbnQgPSAnb25wYWdlaGlkZScgaW4gc2VsZiA/ICdwYWdlaGlkZScgOiAndW5sb2FkJztcbiAgICBhZGRFdmVudExpc3RlbmVyKHRlcm1pbmF0aW9uRXZlbnQsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxvYWRIYW5kbGVyICgpIHtcbiAgZm9yICh2YXIgaSBpbiBSZXF1ZXN0LnJlcXVlc3RzKSB7XG4gICAgaWYgKFJlcXVlc3QucmVxdWVzdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbaV0uYWJvcnQoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi4vdHJhbnNwb3J0Jyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgeWVhc3QgPSByZXF1aXJlKCd5ZWFzdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBQb2xsaW5nO1xuXG4vKipcbiAqIElzIFhIUjIgc3VwcG9ydGVkP1xuICovXG5cbnZhciBoYXNYSFIyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoeyB4ZG9tYWluOiBmYWxzZSB9KTtcbiAgcmV0dXJuIG51bGwgIT0geGhyLnJlc3BvbnNlVHlwZTtcbn0pKCk7XG5cbi8qKlxuICogUG9sbGluZyBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFBvbGxpbmcgKG9wdHMpIHtcbiAgdmFyIGZvcmNlQmFzZTY0ID0gKG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NCk7XG4gIGlmICghaGFzWEhSMiB8fCBmb3JjZUJhc2U2NCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuICBUcmFuc3BvcnQuY2FsbCh0aGlzLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFRyYW5zcG9ydC5cbiAqL1xuXG5pbmhlcml0KFBvbGxpbmcsIFRyYW5zcG9ydCk7XG5cbi8qKlxuICogVHJhbnNwb3J0IG5hbWUuXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUubmFtZSA9ICdwb2xsaW5nJztcblxuLyoqXG4gKiBPcGVucyB0aGUgc29ja2V0ICh0cmlnZ2VycyBwb2xsaW5nKS4gV2Ugd3JpdGUgYSBQSU5HIG1lc3NhZ2UgdG8gZGV0ZXJtaW5lXG4gKiB3aGVuIHRoZSB0cmFuc3BvcnQgaXMgb3Blbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5kb09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucG9sbCgpO1xufTtcblxuLyoqXG4gKiBQYXVzZXMgcG9sbGluZy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB1cG9uIGJ1ZmZlcnMgYXJlIGZsdXNoZWQgYW5kIHRyYW5zcG9ydCBpcyBwYXVzZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKG9uUGF1c2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdwYXVzaW5nJztcblxuICBmdW5jdGlvbiBwYXVzZSAoKSB7XG4gICAgZGVidWcoJ3BhdXNlZCcpO1xuICAgIHNlbGYucmVhZHlTdGF0ZSA9ICdwYXVzZWQnO1xuICAgIG9uUGF1c2UoKTtcbiAgfVxuXG4gIGlmICh0aGlzLnBvbGxpbmcgfHwgIXRoaXMud3JpdGFibGUpIHtcbiAgICB2YXIgdG90YWwgPSAwO1xuXG4gICAgaWYgKHRoaXMucG9sbGluZykge1xuICAgICAgZGVidWcoJ3dlIGFyZSBjdXJyZW50bHkgcG9sbGluZyAtIHdhaXRpbmcgdG8gcGF1c2UnKTtcbiAgICAgIHRvdGFsKys7XG4gICAgICB0aGlzLm9uY2UoJ3BvbGxDb21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVidWcoJ3ByZS1wYXVzZSBwb2xsaW5nIGNvbXBsZXRlJyk7XG4gICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy53cml0YWJsZSkge1xuICAgICAgZGVidWcoJ3dlIGFyZSBjdXJyZW50bHkgd3JpdGluZyAtIHdhaXRpbmcgdG8gcGF1c2UnKTtcbiAgICAgIHRvdGFsKys7XG4gICAgICB0aGlzLm9uY2UoJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWJ1ZygncHJlLXBhdXNlIHdyaXRpbmcgY29tcGxldGUnKTtcbiAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhdXNlKCk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RhcnRzIHBvbGxpbmcgY3ljbGUuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5wb2xsID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygncG9sbGluZycpO1xuICB0aGlzLnBvbGxpbmcgPSB0cnVlO1xuICB0aGlzLmRvUG9sbCgpO1xuICB0aGlzLmVtaXQoJ3BvbGwnKTtcbn07XG5cbi8qKlxuICogT3ZlcmxvYWRzIG9uRGF0YSB0byBkZXRlY3QgcGF5bG9hZHMuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBkZWJ1ZygncG9sbGluZyBnb3QgZGF0YSAlcycsIGRhdGEpO1xuICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAocGFja2V0LCBpbmRleCwgdG90YWwpIHtcbiAgICAvLyBpZiBpdHMgdGhlIGZpcnN0IG1lc3NhZ2Ugd2UgY29uc2lkZXIgdGhlIHRyYW5zcG9ydCBvcGVuXG4gICAgaWYgKCdvcGVuaW5nJyA9PT0gc2VsZi5yZWFkeVN0YXRlKSB7XG4gICAgICBzZWxmLm9uT3BlbigpO1xuICAgIH1cblxuICAgIC8vIGlmIGl0cyBhIGNsb3NlIHBhY2tldCwgd2UgY2xvc2UgdGhlIG9uZ29pbmcgcmVxdWVzdHNcbiAgICBpZiAoJ2Nsb3NlJyA9PT0gcGFja2V0LnR5cGUpIHtcbiAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSBieXBhc3Mgb25EYXRhIGFuZCBoYW5kbGUgdGhlIG1lc3NhZ2VcbiAgICBzZWxmLm9uUGFja2V0KHBhY2tldCk7XG4gIH07XG5cbiAgLy8gZGVjb2RlIHBheWxvYWRcbiAgcGFyc2VyLmRlY29kZVBheWxvYWQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSwgY2FsbGJhY2spO1xuXG4gIC8vIGlmIGFuIGV2ZW50IGRpZCBub3QgdHJpZ2dlciBjbG9zaW5nXG4gIGlmICgnY2xvc2VkJyAhPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgLy8gaWYgd2UgZ290IGRhdGEgd2UncmUgbm90IHBvbGxpbmdcbiAgICB0aGlzLnBvbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoJ3BvbGxDb21wbGV0ZScpO1xuXG4gICAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnBvbGwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ2lnbm9yaW5nIHBvbGwgLSB0cmFuc3BvcnQgc3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRm9yIHBvbGxpbmcsIHNlbmQgYSBjbG9zZSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGNsb3NlICgpIHtcbiAgICBkZWJ1Zygnd3JpdGluZyBjbG9zZSBwYWNrZXQnKTtcbiAgICBzZWxmLndyaXRlKFt7IHR5cGU6ICdjbG9zZScgfV0pO1xuICB9XG5cbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3RyYW5zcG9ydCBvcGVuIC0gY2xvc2luZycpO1xuICAgIGNsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gaW4gY2FzZSB3ZSdyZSB0cnlpbmcgdG8gY2xvc2Ugd2hpbGVcbiAgICAvLyBoYW5kc2hha2luZyBpcyBpbiBwcm9ncmVzcyAoR0gtMTY0KVxuICAgIGRlYnVnKCd0cmFuc3BvcnQgbm90IG9wZW4gLSBkZWZlcnJpbmcgY2xvc2UnKTtcbiAgICB0aGlzLm9uY2UoJ29wZW4nLCBjbG9zZSk7XG4gIH1cbn07XG5cbi8qKlxuICogV3JpdGVzIGEgcGFja2V0cyBwYXlsb2FkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgcGFja2V0c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZHJhaW4gY2FsbGJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gIHZhciBjYWxsYmFja2ZuID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYud3JpdGFibGUgPSB0cnVlO1xuICAgIHNlbGYuZW1pdCgnZHJhaW4nKTtcbiAgfTtcblxuICBwYXJzZXIuZW5jb2RlUGF5bG9hZChwYWNrZXRzLCB0aGlzLnN1cHBvcnRzQmluYXJ5LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHNlbGYuZG9Xcml0ZShkYXRhLCBjYWxsYmFja2ZuKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUudXJpID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICB2YXIgc2NoZW1hID0gdGhpcy5zZWN1cmUgPyAnaHR0cHMnIDogJ2h0dHAnO1xuICB2YXIgcG9ydCA9ICcnO1xuXG4gIC8vIGNhY2hlIGJ1c3RpbmcgaXMgZm9yY2VkXG4gIGlmIChmYWxzZSAhPT0gdGhpcy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgIHF1ZXJ5W3RoaXMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiAhcXVlcnkuc2lkKSB7XG4gICAgcXVlcnkuYjY0ID0gMTtcbiAgfVxuXG4gIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gIGlmICh0aGlzLnBvcnQgJiYgKCgnaHR0cHMnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgKCdodHRwJyA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLnBvcnQpICE9PSA4MCkpKSB7XG4gICAgcG9ydCA9ICc6JyArIHRoaXMucG9ydDtcbiAgfVxuXG4gIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgcXVlcnkgPSAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIHZhciBpcHY2ID0gdGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgIT09IC0xO1xuICByZXR1cm4gc2NoZW1hICsgJzovLycgKyAoaXB2NiA/ICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScgOiB0aGlzLmhvc3RuYW1lKSArIHBvcnQgKyB0aGlzLnBhdGggKyBxdWVyeTtcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIFRyYW5zcG9ydCA9IHJlcXVpcmUoJy4uL3RyYW5zcG9ydCcpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdjb21wb25lbnQtaW5oZXJpdCcpO1xudmFyIHllYXN0ID0gcmVxdWlyZSgneWVhc3QnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6d2Vic29ja2V0Jyk7XG5cbnZhciBCcm93c2VyV2ViU29ja2V0LCBOb2RlV2ViU29ja2V0O1xuXG5pZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgQnJvd3NlcldlYlNvY2tldCA9IFdlYlNvY2tldDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIEJyb3dzZXJXZWJTb2NrZXQgPSBzZWxmLldlYlNvY2tldCB8fCBzZWxmLk1veldlYlNvY2tldDtcbn0gZWxzZSB7XG4gIHRyeSB7XG4gICAgTm9kZVdlYlNvY2tldCA9IHJlcXVpcmUoJ3dzJyk7XG4gIH0gY2F0Y2ggKGUpIHsgfVxufVxuXG4vKipcbiAqIEdldCBlaXRoZXIgdGhlIGBXZWJTb2NrZXRgIG9yIGBNb3pXZWJTb2NrZXRgIGdsb2JhbHNcbiAqIGluIHRoZSBicm93c2VyIG9yIHRyeSB0byByZXNvbHZlIFdlYlNvY2tldC1jb21wYXRpYmxlXG4gKiBpbnRlcmZhY2UgZXhwb3NlZCBieSBgd3NgIGZvciBOb2RlLWxpa2UgZW52aXJvbm1lbnQuXG4gKi9cblxudmFyIFdlYlNvY2tldEltcGwgPSBCcm93c2VyV2ViU29ja2V0IHx8IE5vZGVXZWJTb2NrZXQ7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBXUztcblxuLyoqXG4gKiBXZWJTb2NrZXQgdHJhbnNwb3J0IGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkge09iamVjdH0gY29ubmVjdGlvbiBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFdTIChvcHRzKSB7XG4gIHZhciBmb3JjZUJhc2U2NCA9IChvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQpO1xuICBpZiAoZm9yY2VCYXNlNjQpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IG9wdHMucGVyTWVzc2FnZURlZmxhdGU7XG4gIHRoaXMudXNpbmdCcm93c2VyV2ViU29ja2V0ID0gQnJvd3NlcldlYlNvY2tldCAmJiAhb3B0cy5mb3JjZU5vZGU7XG4gIHRoaXMucHJvdG9jb2xzID0gb3B0cy5wcm90b2NvbHM7XG4gIGlmICghdGhpcy51c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICBXZWJTb2NrZXRJbXBsID0gTm9kZVdlYlNvY2tldDtcbiAgfVxuICBUcmFuc3BvcnQuY2FsbCh0aGlzLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFRyYW5zcG9ydC5cbiAqL1xuXG5pbmhlcml0KFdTLCBUcmFuc3BvcnQpO1xuXG4vKipcbiAqIFRyYW5zcG9ydCBuYW1lLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuV1MucHJvdG90eXBlLm5hbWUgPSAnd2Vic29ja2V0JztcblxuLypcbiAqIFdlYlNvY2tldHMgc3VwcG9ydCBiaW5hcnlcbiAqL1xuXG5XUy5wcm90b3R5cGUuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuXG4vKipcbiAqIE9wZW5zIHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUuZG9PcGVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuY2hlY2soKSkge1xuICAgIC8vIGxldCBwcm9iZSB0aW1lb3V0XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHVyaSA9IHRoaXMudXJpKCk7XG4gIHZhciBwcm90b2NvbHMgPSB0aGlzLnByb3RvY29scztcbiAgdmFyIG9wdHMgPSB7XG4gICAgYWdlbnQ6IHRoaXMuYWdlbnQsXG4gICAgcGVyTWVzc2FnZURlZmxhdGU6IHRoaXMucGVyTWVzc2FnZURlZmxhdGVcbiAgfTtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIGlmICh0aGlzLmV4dHJhSGVhZGVycykge1xuICAgIG9wdHMuaGVhZGVycyA9IHRoaXMuZXh0cmFIZWFkZXJzO1xuICB9XG4gIGlmICh0aGlzLmxvY2FsQWRkcmVzcykge1xuICAgIG9wdHMubG9jYWxBZGRyZXNzID0gdGhpcy5sb2NhbEFkZHJlc3M7XG4gIH1cblxuICB0cnkge1xuICAgIHRoaXMud3MgPVxuICAgICAgdGhpcy51c2luZ0Jyb3dzZXJXZWJTb2NrZXQgJiYgIXRoaXMuaXNSZWFjdE5hdGl2ZVxuICAgICAgICA/IHByb3RvY29sc1xuICAgICAgICAgID8gbmV3IFdlYlNvY2tldEltcGwodXJpLCBwcm90b2NvbHMpXG4gICAgICAgICAgOiBuZXcgV2ViU29ja2V0SW1wbCh1cmkpXG4gICAgICAgIDogbmV3IFdlYlNvY2tldEltcGwodXJpLCBwcm90b2NvbHMsIG9wdHMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cblxuICBpZiAodGhpcy53cy5iaW5hcnlUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy53cy5zdXBwb3J0cyAmJiB0aGlzLndzLnN1cHBvcnRzLmJpbmFyeSkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdub2RlYnVmZmVyJztcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICB9XG5cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xufTtcblxuLyoqXG4gKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc29ja2V0XG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy53cy5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbk9wZW4oKTtcbiAgfTtcbiAgdGhpcy53cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25DbG9zZSgpO1xuICB9O1xuICB0aGlzLndzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldikge1xuICAgIHNlbGYub25EYXRhKGV2LmRhdGEpO1xuICB9O1xuICB0aGlzLndzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHNlbGYub25FcnJvcignd2Vic29ja2V0IGVycm9yJywgZSk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyaXRlcyBkYXRhIHRvIHNvY2tldC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBvZiBwYWNrZXRzLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgLy8gZW5jb2RlUGFja2V0IGVmZmljaWVudCBhcyBpdCB1c2VzIFdTIGZyYW1pbmdcbiAgLy8gbm8gbmVlZCBmb3IgZW5jb2RlUGF5bG9hZFxuICB2YXIgdG90YWwgPSBwYWNrZXRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b3RhbDsgaSA8IGw7IGkrKykge1xuICAgIChmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgICBwYXJzZXIuZW5jb2RlUGFja2V0KHBhY2tldCwgc2VsZi5zdXBwb3J0c0JpbmFyeSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKCFzZWxmLnVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgIC8vIGFsd2F5cyBjcmVhdGUgYSBuZXcgb2JqZWN0IChHSC00MzcpXG4gICAgICAgICAgdmFyIG9wdHMgPSB7fTtcbiAgICAgICAgICBpZiAocGFja2V0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBwYWNrZXQub3B0aW9ucy5jb21wcmVzcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZi5wZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICAgICAgdmFyIGxlbiA9ICdzdHJpbmcnID09PSB0eXBlb2YgZGF0YSA/IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpIDogZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVuIDwgc2VsZi5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgd2Vic29ja2V0IGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ1dCB0aGUgYnJvd3NlciBkaWRuJ3RcbiAgICAgICAgLy8gaGF2ZSBhIGNoYW5jZSBvZiBpbmZvcm1pbmcgdXMgYWJvdXQgaXQgeWV0LCBpbiB0aGF0IGNhc2Ugc2VuZCB3aWxsXG4gICAgICAgIC8vIHRocm93IGFuIGVycm9yXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHNlbGYudXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgICAvLyBUeXBlRXJyb3IgaXMgdGhyb3duIHdoZW4gcGFzc2luZyB0aGUgc2Vjb25kIGFyZ3VtZW50IG9uIFNhZmFyaVxuICAgICAgICAgICAgc2VsZi53cy5zZW5kKGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLndzLnNlbmQoZGF0YSwgb3B0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZGVidWcoJ3dlYnNvY2tldCBjbG9zZWQgYmVmb3JlIG9uY2xvc2UgZXZlbnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tdG90YWwgfHwgZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSkocGFja2V0c1tpXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkb25lICgpIHtcbiAgICBzZWxmLmVtaXQoJ2ZsdXNoJyk7XG5cbiAgICAvLyBmYWtlIGRyYWluXG4gICAgLy8gZGVmZXIgdG8gbmV4dCB0aWNrIHRvIGFsbG93IFNvY2tldCB0byBjbGVhciB3cml0ZUJ1ZmZlclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgICBzZWxmLmVtaXQoJ2RyYWluJyk7XG4gICAgfSwgMCk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gY2xvc2VcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIENsb3NlcyBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgdGhpcy53cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLndzLmNsb3NlKCk7XG4gIH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUudXJpID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICB2YXIgc2NoZW1hID0gdGhpcy5zZWN1cmUgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciBwb3J0ID0gJyc7XG5cbiAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgaWYgKHRoaXMucG9ydCAmJiAoKCd3c3MnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAoJ3dzJyA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLnBvcnQpICE9PSA4MCkpKSB7XG4gICAgcG9ydCA9ICc6JyArIHRoaXMucG9ydDtcbiAgfVxuXG4gIC8vIGFwcGVuZCB0aW1lc3RhbXAgdG8gVVJJXG4gIGlmICh0aGlzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgcXVlcnlbdGhpcy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICB9XG5cbiAgLy8gY29tbXVuaWNhdGUgYmluYXJ5IHN1cHBvcnQgY2FwYWJpbGl0aWVzXG4gIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgIHF1ZXJ5LmI2NCA9IDE7XG4gIH1cblxuICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgIHF1ZXJ5ID0gJz8nICsgcXVlcnk7XG4gIH1cblxuICB2YXIgaXB2NiA9IHRoaXMuaG9zdG5hbWUuaW5kZXhPZignOicpICE9PSAtMTtcbiAgcmV0dXJuIHNjaGVtYSArICc6Ly8nICsgKGlwdjYgPyAnWycgKyB0aGlzLmhvc3RuYW1lICsgJ10nIDogdGhpcy5ob3N0bmFtZSkgKyBwb3J0ICsgdGhpcy5wYXRoICsgcXVlcnk7XG59O1xuXG4vKipcbiAqIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBXZWJTb2NrZXQuXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciB0aGlzIHRyYW5zcG9ydCBpcyBhdmFpbGFibGUuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbldTLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhV2ViU29ja2V0SW1wbCAmJiAhKCdfX2luaXRpYWxpemUnIGluIFdlYlNvY2tldEltcGwgJiYgdGhpcy5uYW1lID09PSBXUy5wcm90b3R5cGUubmFtZSk7XG59O1xuIiwiLy8gYnJvd3NlciBzaGltIGZvciB4bWxodHRwcmVxdWVzdCBtb2R1bGVcblxudmFyIGhhc0NPUlMgPSByZXF1aXJlKCdoYXMtY29ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHZhciB4ZG9tYWluID0gb3B0cy54ZG9tYWluO1xuXG4gIC8vIHNjaGVtZSBtdXN0IGJlIHNhbWUgd2hlbiB1c2lnbiBYRG9tYWluUmVxdWVzdFxuICAvLyBodHRwOi8vYmxvZ3MubXNkbi5jb20vYi9pZWludGVybmFscy9hcmNoaXZlLzIwMTAvMDUvMTMveGRvbWFpbnJlcXVlc3QtcmVzdHJpY3Rpb25zLWxpbWl0YXRpb25zLWFuZC13b3JrYXJvdW5kcy5hc3B4XG4gIHZhciB4c2NoZW1lID0gb3B0cy54c2NoZW1lO1xuXG4gIC8vIFhEb21haW5SZXF1ZXN0IGhhcyBhIGZsb3cgb2Ygbm90IHNlbmRpbmcgY29va2llLCB0aGVyZWZvcmUgaXQgc2hvdWxkIGJlIGRpc2FibGVkIGFzIGEgZGVmYXVsdC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvZW5naW5lLmlvLWNsaWVudC9wdWxsLzIxN1xuICB2YXIgZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBYTUxIdHRwUmVxdWVzdCBjYW4gYmUgZGlzYWJsZWQgb24gSUVcbiAgdHJ5IHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJiAoIXhkb21haW4gfHwgaGFzQ09SUykpIHtcbiAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuXG4gIC8vIFVzZSBYRG9tYWluUmVxdWVzdCBmb3IgSUU4IGlmIGVuYWJsZXNYRFIgaXMgdHJ1ZVxuICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgdHJ5IHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAheHNjaGVtZSAmJiBlbmFibGVzWERSKSB7XG4gICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7IH1cblxuICBpZiAoIXhkb21haW4pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBzZWxmW1snQWN0aXZlJ10uY29uY2F0KCdPYmplY3QnKS5qb2luKCdYJyldKCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG59O1xuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsXG4gICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJyxcbiAgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLFxuICAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsXG4gICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJyxcbiAgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLFxuICAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsXG4gICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJyxcbiAgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLFxuICAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsXG4gICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0cy5pbnN0YW5jZXMgPSBbXTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuICByZXR1cm4gZGVidWc7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB2YXIgaW5kZXggPSBleHBvcnRzLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgZXhwb3J0cy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgaTtcbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4cG9ydHMuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGluc3RhbmNlID0gZXhwb3J0cy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgaWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xudmFyIGhhc0JpbmFyeSA9IHJlcXVpcmUoJ2hhcy1iaW5hcnkyJyk7XG52YXIgc2xpY2VCdWZmZXIgPSByZXF1aXJlKCdhcnJheWJ1ZmZlci5zbGljZScpO1xudmFyIGFmdGVyID0gcmVxdWlyZSgnYWZ0ZXInKTtcbnZhciB1dGY4ID0gcmVxdWlyZSgnLi91dGY4Jyk7XG5cbnZhciBiYXNlNjRlbmNvZGVyO1xuaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgYmFzZTY0ZW5jb2RlciA9IHJlcXVpcmUoJ2Jhc2U2NC1hcnJheWJ1ZmZlcicpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHdlIGFyZSBydW5uaW5nIGFuIGFuZHJvaWQgYnJvd3Nlci4gVGhhdCByZXF1aXJlcyB1cyB0byB1c2VcbiAqIEFycmF5QnVmZmVyIHdpdGggcG9sbGluZyB0cmFuc3BvcnRzLi4uXG4gKlxuICogaHR0cDovL2doaW5kYS5uZXQvanBlZy1ibG9iLWFqYXgtYW5kcm9pZC9cbiAqL1xuXG52YXIgaXNBbmRyb2lkID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIENoZWNrIGlmIHdlIGFyZSBydW5uaW5nIGluIFBoYW50b21KUy5cbiAqIFVwbG9hZGluZyBhIEJsb2Igd2l0aCBQaGFudG9tSlMgZG9lcyBub3Qgd29yayBjb3JyZWN0bHksIGFzIHJlcG9ydGVkIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXJpeWEvcGhhbnRvbWpzL2lzc3Vlcy8xMTM5NVxuICogQHR5cGUgYm9vbGVhblxuICovXG52YXIgaXNQaGFudG9tSlMgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvUGhhbnRvbUpTL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBXaGVuIHRydWUsIGF2b2lkcyB1c2luZyBCbG9icyB0byBlbmNvZGUgcGF5bG9hZHMuXG4gKiBAdHlwZSBib29sZWFuXG4gKi9cbnZhciBkb250U2VuZEJsb2JzID0gaXNBbmRyb2lkIHx8IGlzUGhhbnRvbUpTO1xuXG4vKipcbiAqIEN1cnJlbnQgcHJvdG9jb2wgdmVyc2lvbi5cbiAqL1xuXG5leHBvcnRzLnByb3RvY29sID0gMztcblxuLyoqXG4gKiBQYWNrZXQgdHlwZXMuXG4gKi9cblxudmFyIHBhY2tldHMgPSBleHBvcnRzLnBhY2tldHMgPSB7XG4gICAgb3BlbjogICAgIDAgICAgLy8gbm9uLXdzXG4gICwgY2xvc2U6ICAgIDEgICAgLy8gbm9uLXdzXG4gICwgcGluZzogICAgIDJcbiAgLCBwb25nOiAgICAgM1xuICAsIG1lc3NhZ2U6ICA0XG4gICwgdXBncmFkZTogIDVcbiAgLCBub29wOiAgICAgNlxufTtcblxudmFyIHBhY2tldHNsaXN0ID0ga2V5cyhwYWNrZXRzKTtcblxuLyoqXG4gKiBQcmVtYWRlIGVycm9yIHBhY2tldC5cbiAqL1xuXG52YXIgZXJyID0geyB0eXBlOiAnZXJyb3InLCBkYXRhOiAncGFyc2VyIGVycm9yJyB9O1xuXG4vKipcbiAqIENyZWF0ZSBhIGJsb2IgYXBpIGV2ZW4gZm9yIGJsb2IgYnVpbGRlciB3aGVuIHZlbmRvciBwcmVmaXhlcyBleGlzdFxuICovXG5cbnZhciBCbG9iID0gcmVxdWlyZSgnYmxvYicpO1xuXG4vKipcbiAqIEVuY29kZXMgYSBwYWNrZXQuXG4gKlxuICogICAgIDxwYWNrZXQgdHlwZSBpZD4gWyA8ZGF0YT4gXVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDVoZWxsbyB3b3JsZFxuICogICAgIDNcbiAqICAgICA0XG4gKlxuICogQmluYXJ5IGlzIGVuY29kZWQgaW4gYW4gaWRlbnRpY2FsIHByaW5jaXBsZVxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIHV0ZjhlbmNvZGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNCaW5hcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHN1cHBvcnRzQmluYXJ5O1xuICAgIHN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHV0ZjhlbmNvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHV0ZjhlbmNvZGU7XG4gICAgdXRmOGVuY29kZSA9IG51bGw7XG4gIH1cblxuICB2YXIgZGF0YSA9IChwYWNrZXQuZGF0YSA9PT0gdW5kZWZpbmVkKVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiBwYWNrZXQuZGF0YS5idWZmZXIgfHwgcGFja2V0LmRhdGE7XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICByZXR1cm4gZW5jb2RlQmxvYihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gIH1cblxuICAvLyBtaWdodCBiZSBhbiBvYmplY3Qgd2l0aCB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogZGF0YUFzQmFzZTY0U3RyaW5nIH1cbiAgaWYgKGRhdGEgJiYgZGF0YS5iYXNlNjQpIHtcbiAgICByZXR1cm4gZW5jb2RlQmFzZTY0T2JqZWN0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgLy8gU2VuZGluZyBkYXRhIGFzIGEgdXRmLTggc3RyaW5nXG4gIHZhciBlbmNvZGVkID0gcGFja2V0c1twYWNrZXQudHlwZV07XG5cbiAgLy8gZGF0YSBmcmFnbWVudCBpcyBvcHRpb25hbFxuICBpZiAodW5kZWZpbmVkICE9PSBwYWNrZXQuZGF0YSkge1xuICAgIGVuY29kZWQgKz0gdXRmOGVuY29kZSA/IHV0ZjguZW5jb2RlKFN0cmluZyhwYWNrZXQuZGF0YSksIHsgc3RyaWN0OiBmYWxzZSB9KSA6IFN0cmluZyhwYWNrZXQuZGF0YSk7XG4gIH1cblxuICByZXR1cm4gY2FsbGJhY2soJycgKyBlbmNvZGVkKTtcblxufTtcblxuZnVuY3Rpb24gZW5jb2RlQmFzZTY0T2JqZWN0KHBhY2tldCwgY2FsbGJhY2spIHtcbiAgLy8gcGFja2V0IGRhdGEgaXMgYW4gb2JqZWN0IHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBkYXRhQXNCYXNlNjRTdHJpbmcgfVxuICB2YXIgbWVzc2FnZSA9ICdiJyArIGV4cG9ydHMucGFja2V0c1twYWNrZXQudHlwZV0gKyBwYWNrZXQuZGF0YS5kYXRhO1xuICByZXR1cm4gY2FsbGJhY2sobWVzc2FnZSk7XG59XG5cbi8qKlxuICogRW5jb2RlIHBhY2tldCBoZWxwZXJzIGZvciBiaW5hcnkgdHlwZXNcbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGVBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGRhdGEgPSBwYWNrZXQuZGF0YTtcbiAgdmFyIGNvbnRlbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB2YXIgcmVzdWx0QnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoMSArIGRhdGEuYnl0ZUxlbmd0aCk7XG5cbiAgcmVzdWx0QnVmZmVyWzBdID0gcGFja2V0c1twYWNrZXQudHlwZV07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0QnVmZmVyW2krMV0gPSBjb250ZW50QXJyYXlbaV07XG4gIH1cblxuICByZXR1cm4gY2FsbGJhY2socmVzdWx0QnVmZmVyLmJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUJsb2JBc0FycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldCh7IHR5cGU6IHBhY2tldC50eXBlLCBkYXRhOiBmci5yZXN1bHQgfSwgc3VwcG9ydHNCaW5hcnksIHRydWUsIGNhbGxiYWNrKTtcbiAgfTtcbiAgcmV0dXJuIGZyLnJlYWRBc0FycmF5QnVmZmVyKHBhY2tldC5kYXRhKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlQmxvYihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKGRvbnRTZW5kQmxvYnMpIHtcbiAgICByZXR1cm4gZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICBsZW5ndGhbMF0gPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgdmFyIGJsb2IgPSBuZXcgQmxvYihbbGVuZ3RoLmJ1ZmZlciwgcGFja2V0LmRhdGFdKTtcblxuICByZXR1cm4gY2FsbGJhY2soYmxvYik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBhIHBhY2tldCB3aXRoIGJpbmFyeSBkYXRhIGluIGEgYmFzZTY0IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQsIGhhcyBgdHlwZWAgYW5kIGBkYXRhYFxuICogQHJldHVybiB7U3RyaW5nfSBiYXNlNjQgZW5jb2RlZCBtZXNzYWdlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQsIGNhbGxiYWNrKSB7XG4gIHZhciBtZXNzYWdlID0gJ2InICsgZXhwb3J0cy5wYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBwYWNrZXQuZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGI2NCA9IGZyLnJlc3VsdC5zcGxpdCgnLCcpWzFdO1xuICAgICAgY2FsbGJhY2sobWVzc2FnZSArIGI2NCk7XG4gICAgfTtcbiAgICByZXR1cm4gZnIucmVhZEFzRGF0YVVSTChwYWNrZXQuZGF0YSk7XG4gIH1cblxuICB2YXIgYjY0ZGF0YTtcbiAgdHJ5IHtcbiAgICBiNjRkYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShwYWNrZXQuZGF0YSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaVBob25lIFNhZmFyaSBkb2Vzbid0IGxldCB5b3UgYXBwbHkgd2l0aCB0eXBlZCBhcnJheXNcbiAgICB2YXIgdHlwZWQgPSBuZXcgVWludDhBcnJheShwYWNrZXQuZGF0YSk7XG4gICAgdmFyIGJhc2ljID0gbmV3IEFycmF5KHR5cGVkLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgYmFzaWNbaV0gPSB0eXBlZFtpXTtcbiAgICB9XG4gICAgYjY0ZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYmFzaWMpO1xuICB9XG4gIG1lc3NhZ2UgKz0gYnRvYShiNjRkYXRhKTtcbiAgcmV0dXJuIGNhbGxiYWNrKG1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiBEZWNvZGVzIGEgcGFja2V0LiBDaGFuZ2VzIGZvcm1hdCB0byBCbG9iIGlmIHJlcXVlc3RlZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggYHR5cGVgIGFuZCBgZGF0YWAgKGlmIGFueSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZGVjb2RlUGFja2V0ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIHV0ZjhkZWNvZGUpIHtcbiAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlcnI7XG4gIH1cbiAgLy8gU3RyaW5nIGRhdGFcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIGlmIChkYXRhLmNoYXJBdCgwKSA9PT0gJ2InKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZWNvZGVCYXNlNjRQYWNrZXQoZGF0YS5zdWJzdHIoMSksIGJpbmFyeVR5cGUpO1xuICAgIH1cblxuICAgIGlmICh1dGY4ZGVjb2RlKSB7XG4gICAgICBkYXRhID0gdHJ5RGVjb2RlKGRhdGEpO1xuICAgICAgaWYgKGRhdGEgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB0eXBlID0gZGF0YS5jaGFyQXQoMCk7XG5cbiAgICBpZiAoTnVtYmVyKHR5cGUpICE9IHR5cGUgfHwgIXBhY2tldHNsaXN0W3R5cGVdKSB7XG4gICAgICByZXR1cm4gZXJyO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdLCBkYXRhOiBkYXRhLnN1YnN0cmluZygxKSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBhc0FycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIHZhciB0eXBlID0gYXNBcnJheVswXTtcbiAgdmFyIHJlc3QgPSBzbGljZUJ1ZmZlcihkYXRhLCAxKTtcbiAgaWYgKEJsb2IgJiYgYmluYXJ5VHlwZSA9PT0gJ2Jsb2InKSB7XG4gICAgcmVzdCA9IG5ldyBCbG9iKFtyZXN0XSk7XG4gIH1cbiAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0sIGRhdGE6IHJlc3QgfTtcbn07XG5cbmZ1bmN0aW9uIHRyeURlY29kZShkYXRhKSB7XG4gIHRyeSB7XG4gICAgZGF0YSA9IHV0ZjguZGVjb2RlKGRhdGEsIHsgc3RyaWN0OiBmYWxzZSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBEZWNvZGVzIGEgcGFja2V0IGVuY29kZWQgaW4gYSBiYXNlNjQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGJhc2U2NCBlbmNvZGVkIG1lc3NhZ2VcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBgdHlwZWAgYW5kIGBkYXRhYCAoaWYgYW55KVxuICovXG5cbmV4cG9ydHMuZGVjb2RlQmFzZTY0UGFja2V0ID0gZnVuY3Rpb24obXNnLCBiaW5hcnlUeXBlKSB7XG4gIHZhciB0eXBlID0gcGFja2V0c2xpc3RbbXNnLmNoYXJBdCgwKV07XG4gIGlmICghYmFzZTY0ZW5jb2Rlcikge1xuICAgIHJldHVybiB7IHR5cGU6IHR5cGUsIGRhdGE6IHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBtc2cuc3Vic3RyKDEpIH0gfTtcbiAgfVxuXG4gIHZhciBkYXRhID0gYmFzZTY0ZW5jb2Rlci5kZWNvZGUobXNnLnN1YnN0cigxKSk7XG5cbiAgaWYgKGJpbmFyeVR5cGUgPT09ICdibG9iJyAmJiBCbG9iKSB7XG4gICAgZGF0YSA9IG5ldyBCbG9iKFtkYXRhXSk7XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBkYXRhOiBkYXRhIH07XG59O1xuXG4vKipcbiAqIEVuY29kZXMgbXVsdGlwbGUgbWVzc2FnZXMgKHBheWxvYWQpLlxuICpcbiAqICAgICA8bGVuZ3RoPjpkYXRhXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgMTE6aGVsbG8gd29ybGQyOmhpXG4gKlxuICogSWYgYW55IGNvbnRlbnRzIGFyZSBiaW5hcnksIHRoZXkgd2lsbCBiZSBlbmNvZGVkIGFzIGJhc2U2NCBzdHJpbmdzLiBCYXNlNjRcbiAqIGVuY29kZWQgc3RyaW5ncyBhcmUgbWFya2VkIHdpdGggYSBiIGJlZm9yZSB0aGUgbGVuZ3RoIHNwZWNpZmllclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZCA9IGZ1bmN0aW9uIChwYWNrZXRzLCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0JpbmFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgc3VwcG9ydHNCaW5hcnkgPSBudWxsO1xuICB9XG5cbiAgdmFyIGlzQmluYXJ5ID0gaGFzQmluYXJ5KHBhY2tldHMpO1xuXG4gIGlmIChzdXBwb3J0c0JpbmFyeSAmJiBpc0JpbmFyeSkge1xuICAgIGlmIChCbG9iICYmICFkb250U2VuZEJsb2JzKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iKHBhY2tldHMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNBcnJheUJ1ZmZlcihwYWNrZXRzLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCcwOicpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TGVuZ3RoSGVhZGVyKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbWVzc2FnZS5sZW5ndGggKyAnOicgKyBtZXNzYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCAhaXNCaW5hcnkgPyBmYWxzZSA6IHN1cHBvcnRzQmluYXJ5LCBmYWxzZSwgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgZG9uZUNhbGxiYWNrKG51bGwsIHNldExlbmd0aEhlYWRlcihtZXNzYWdlKSk7XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0cy5qb2luKCcnKSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBBc3luYyBhcnJheSBtYXAgdXNpbmcgYWZ0ZXJcbiAqL1xuXG5mdW5jdGlvbiBtYXAoYXJ5LCBlYWNoLCBkb25lKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoYXJ5Lmxlbmd0aCk7XG4gIHZhciBuZXh0ID0gYWZ0ZXIoYXJ5Lmxlbmd0aCwgZG9uZSk7XG5cbiAgdmFyIGVhY2hXaXRoSW5kZXggPSBmdW5jdGlvbihpLCBlbCwgY2IpIHtcbiAgICBlYWNoKGVsLCBmdW5jdGlvbihlcnJvciwgbXNnKSB7XG4gICAgICByZXN1bHRbaV0gPSBtc2c7XG4gICAgICBjYihlcnJvciwgcmVzdWx0KTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgIGVhY2hXaXRoSW5kZXgoaSwgYXJ5W2ldLCBuZXh0KTtcbiAgfVxufVxuXG4vKlxuICogRGVjb2RlcyBkYXRhIHdoZW4gYSBwYXlsb2FkIGlzIG1heWJlIGV4cGVjdGVkLiBQb3NzaWJsZSBiaW5hcnkgY29udGVudHMgYXJlXG4gKiBkZWNvZGVkIGZyb20gdGhlaXIgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEsIGNhbGxiYWNrIG1ldGhvZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlY29kZVBheWxvYWQgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBleHBvcnRzLmRlY29kZVBheWxvYWRBc0JpbmFyeShkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAodHlwZW9mIGJpbmFyeVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGJpbmFyeVR5cGU7XG4gICAgYmluYXJ5VHlwZSA9IG51bGw7XG4gIH1cblxuICB2YXIgcGFja2V0O1xuICBpZiAoZGF0YSA9PT0gJycpIHtcbiAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gJycsIG4sIG1zZztcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNociA9IGRhdGEuY2hhckF0KGkpO1xuXG4gICAgaWYgKGNociAhPT0gJzonKSB7XG4gICAgICBsZW5ndGggKz0gY2hyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGxlbmd0aCA9PT0gJycgfHwgKGxlbmd0aCAhPSAobiA9IE51bWJlcihsZW5ndGgpKSkpIHtcbiAgICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgIH1cblxuICAgIG1zZyA9IGRhdGEuc3Vic3RyKGkgKyAxLCBuKTtcblxuICAgIGlmIChsZW5ndGggIT0gbXNnLmxlbmd0aCkge1xuICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKG1zZy5sZW5ndGgpIHtcbiAgICAgIHBhY2tldCA9IGV4cG9ydHMuZGVjb2RlUGFja2V0KG1zZywgYmluYXJ5VHlwZSwgZmFsc2UpO1xuXG4gICAgICBpZiAoZXJyLnR5cGUgPT09IHBhY2tldC50eXBlICYmIGVyci5kYXRhID09PSBwYWNrZXQuZGF0YSkge1xuICAgICAgICAvLyBwYXJzZXIgZXJyb3IgaW4gaW5kaXZpZHVhbCBwYWNrZXQgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmV0ID0gY2FsbGJhY2socGFja2V0LCBpICsgbiwgbCk7XG4gICAgICBpZiAoZmFsc2UgPT09IHJldCkgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkdmFuY2UgY3Vyc29yXG4gICAgaSArPSBuO1xuICAgIGxlbmd0aCA9ICcnO1xuICB9XG5cbiAgaWYgKGxlbmd0aCAhPT0gJycpIHtcbiAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gIH1cblxufTtcblxuLyoqXG4gKiBFbmNvZGVzIG11bHRpcGxlIG1lc3NhZ2VzIChwYXlsb2FkKSBhcyBiaW5hcnkuXG4gKlxuICogPDEgPSBiaW5hcnksIDAgPSBzdHJpbmc+PG51bWJlciBmcm9tIDAtOT48bnVtYmVyIGZyb20gMC05PlsuLi5dPG51bWJlclxuICogMjU1PjxkYXRhPlxuICpcbiAqIEV4YW1wbGU6XG4gKiAxIDMgMjU1IDEgMiAzLCBpZiB0aGUgYmluYXJ5IGNvbnRlbnRzIGFyZSBpbnRlcnByZXRlZCBhcyA4IGJpdCBpbnRlZ2Vyc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBlbmNvZGVkIHBheWxvYWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIgPSBmdW5jdGlvbihwYWNrZXRzLCBjYWxsYmFjaykge1xuICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBBcnJheUJ1ZmZlcigwKSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsIHRydWUsIHRydWUsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiBkb25lQ2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIGVuY29kZWRQYWNrZXRzKSB7XG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gZW5jb2RlZFBhY2tldHMucmVkdWNlKGZ1bmN0aW9uKGFjYywgcCkge1xuICAgICAgdmFyIGxlbjtcbiAgICAgIGlmICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpe1xuICAgICAgICBsZW4gPSBwLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IHAuYnl0ZUxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2MgKyBsZW4udG9TdHJpbmcoKS5sZW5ndGggKyBsZW4gKyAyOyAvLyBzdHJpbmcvYmluYXJ5IGlkZW50aWZpZXIgKyBzZXBhcmF0b3IgPSAyXG4gICAgfSwgMCk7XG5cbiAgICB2YXIgcmVzdWx0QXJyYXkgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XG5cbiAgICB2YXIgYnVmZmVySW5kZXggPSAwO1xuICAgIGVuY29kZWRQYWNrZXRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIHAgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIGFiID0gcDtcbiAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KHAubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmlld1tpXSA9IHAuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBhYiA9IHZpZXcuYnVmZmVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdHJpbmcpIHsgLy8gbm90IHRydWUgYmluYXJ5XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMDtcbiAgICAgIH0gZWxzZSB7IC8vIHRydWUgYmluYXJ5XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlblN0ciA9IGFiLmJ5dGVMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuU3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gcGFyc2VJbnQobGVuU3RyW2ldKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMjU1O1xuXG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGFiKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IHZpZXdbaV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0QXJyYXkuYnVmZmVyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBhcyBCbG9iXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iID0gZnVuY3Rpb24ocGFja2V0cywgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCB0cnVlLCBmdW5jdGlvbihlbmNvZGVkKSB7XG4gICAgICB2YXIgYmluYXJ5SWRlbnRpZmllciA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgICAgYmluYXJ5SWRlbnRpZmllclswXSA9IDE7XG4gICAgICBpZiAodHlwZW9mIGVuY29kZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZC5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2aWV3W2ldID0gZW5jb2RlZC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGVuY29kZWQgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgICAgYmluYXJ5SWRlbnRpZmllclswXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSAoZW5jb2RlZCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKVxuICAgICAgICA/IGVuY29kZWQuYnl0ZUxlbmd0aFxuICAgICAgICA6IGVuY29kZWQuc2l6ZTtcblxuICAgICAgdmFyIGxlblN0ciA9IGxlbi50b1N0cmluZygpO1xuICAgICAgdmFyIGxlbmd0aEFyeSA9IG5ldyBVaW50OEFycmF5KGxlblN0ci5sZW5ndGggKyAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuU3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxlbmd0aEFyeVtpXSA9IHBhcnNlSW50KGxlblN0cltpXSk7XG4gICAgICB9XG4gICAgICBsZW5ndGhBcnlbbGVuU3RyLmxlbmd0aF0gPSAyNTU7XG5cbiAgICAgIGlmIChCbG9iKSB7XG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2JpbmFyeUlkZW50aWZpZXIuYnVmZmVyLCBsZW5ndGhBcnkuYnVmZmVyLCBlbmNvZGVkXSk7XG4gICAgICAgIGRvbmVDYWxsYmFjayhudWxsLCBibG9iKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgQmxvYihyZXN1bHRzKSk7XG4gIH0pO1xufTtcblxuLypcbiAqIERlY29kZXMgZGF0YSB3aGVuIGEgcGF5bG9hZCBpcyBtYXliZSBleHBlY3RlZC4gU3RyaW5ncyBhcmUgZGVjb2RlZCBieVxuICogaW50ZXJwcmV0aW5nIGVhY2ggYnl0ZSBhcyBhIGtleSBjb2RlIGZvciBlbnRyaWVzIG1hcmtlZCB0byBzdGFydCB3aXRoIDAuIFNlZVxuICogZGVzY3JpcHRpb24gb2YgZW5jb2RlUGF5bG9hZEFzQmluYXJ5XG4gKlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gZGF0YSwgY2FsbGJhY2sgbWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb2RlUGF5bG9hZEFzQmluYXJ5ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgYmluYXJ5VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gYmluYXJ5VHlwZTtcbiAgICBiaW5hcnlUeXBlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBidWZmZXJUYWlsID0gZGF0YTtcbiAgdmFyIGJ1ZmZlcnMgPSBbXTtcblxuICB3aGlsZSAoYnVmZmVyVGFpbC5ieXRlTGVuZ3RoID4gMCkge1xuICAgIHZhciB0YWlsQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJUYWlsKTtcbiAgICB2YXIgaXNTdHJpbmcgPSB0YWlsQXJyYXlbMF0gPT09IDA7XG4gICAgdmFyIG1zZ0xlbmd0aCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IDsgaSsrKSB7XG4gICAgICBpZiAodGFpbEFycmF5W2ldID09PSAyNTUpIGJyZWFrO1xuXG4gICAgICAvLyAzMTAgPSBjaGFyIGxlbmd0aCBvZiBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICBpZiAobXNnTGVuZ3RoLmxlbmd0aCA+IDMxMCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgIH1cblxuICAgICAgbXNnTGVuZ3RoICs9IHRhaWxBcnJheVtpXTtcbiAgICB9XG5cbiAgICBidWZmZXJUYWlsID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMiArIG1zZ0xlbmd0aC5sZW5ndGgpO1xuICAgIG1zZ0xlbmd0aCA9IHBhcnNlSW50KG1zZ0xlbmd0aCk7XG5cbiAgICB2YXIgbXNnID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMCwgbXNnTGVuZ3RoKTtcbiAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1zZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkobXNnKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlQaG9uZSBTYWZhcmkgZG9lc24ndCBsZXQgeW91IGFwcGx5IHRvIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgdHlwZWQgPSBuZXcgVWludDhBcnJheShtc2cpO1xuICAgICAgICBtc2cgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1zZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHR5cGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGJ1ZmZlcnMucHVzaChtc2cpO1xuICAgIGJ1ZmZlclRhaWwgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCBtc2dMZW5ndGgpO1xuICB9XG5cbiAgdmFyIHRvdGFsID0gYnVmZmVycy5sZW5ndGg7XG4gIGJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbihidWZmZXIsIGkpIHtcbiAgICBjYWxsYmFjayhleHBvcnRzLmRlY29kZVBhY2tldChidWZmZXIsIGJpbmFyeVR5cGUsIHRydWUpLCBpLCB0b3RhbCk7XG4gIH0pO1xufTtcbiIsIlxuLyoqXG4gKiBHZXRzIHRoZSBrZXlzIGZvciBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IGtleXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyAob2JqKXtcbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChoYXMuY2FsbChvYmosIGkpKSB7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG4iLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3V0ZjhqcyB2Mi4xLjIgYnkgQG1hdGhpYXMgKi9cblxudmFyIHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbi8vIFRha2VuIGZyb20gaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlXG5mdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHR2YXIgb3V0cHV0ID0gW107XG5cdHZhciBjb3VudGVyID0gMDtcblx0dmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cdHZhciB2YWx1ZTtcblx0dmFyIGV4dHJhO1xuXHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBsb3cgc3Vycm9nYXRlXG5cdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGUgbmV4dFxuXHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRjb3VudGVyLS07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG91dHB1dDtcbn1cblxuLy8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcbmZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0dmFyIGluZGV4ID0gLTE7XG5cdHZhciB2YWx1ZTtcblx0dmFyIG91dHB1dCA9ICcnO1xuXHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuXHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdH1cblx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSB7XG5cdGlmIChjb2RlUG9pbnQgPj0gMHhEODAwICYmIGNvZGVQb2ludCA8PSAweERGRkYpIHtcblx0XHRpZiAoc3RyaWN0KSB7XG5cdFx0XHR0aHJvdyBFcnJvcihcblx0XHRcdFx0J0xvbmUgc3Vycm9nYXRlIFUrJyArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdCcgaXMgbm90IGEgc2NhbGFyIHZhbHVlJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ5dGUoY29kZVBvaW50LCBzaGlmdCkge1xuXHRyZXR1cm4gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IHNoaWZ0KSAmIDB4M0YpIHwgMHg4MCk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUNvZGVQb2ludChjb2RlUG9pbnQsIHN0cmljdCkge1xuXHRpZiAoKGNvZGVQb2ludCAmIDB4RkZGRkZGODApID09IDApIHsgLy8gMS1ieXRlIHNlcXVlbmNlXG5cdFx0cmV0dXJuIHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuXHR9XG5cdHZhciBzeW1ib2wgPSAnJztcblx0aWYgKChjb2RlUG9pbnQgJiAweEZGRkZGODAwKSA9PSAwKSB7IC8vIDItYnl0ZSBzZXF1ZW5jZVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiA2KSAmIDB4MUYpIHwgMHhDMCk7XG5cdH1cblx0ZWxzZSBpZiAoKGNvZGVQb2ludCAmIDB4RkZGRjAwMDApID09IDApIHsgLy8gMy1ieXRlIHNlcXVlbmNlXG5cdFx0aWYgKCFjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSkge1xuXHRcdFx0Y29kZVBvaW50ID0gMHhGRkZEO1xuXHRcdH1cblx0XHRzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gMTIpICYgMHgwRikgfCAweEUwKTtcblx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDYpO1xuXHR9XG5cdGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRTAwMDAwKSA9PSAwKSB7IC8vIDQtYnl0ZSBzZXF1ZW5jZVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiAxOCkgJiAweDA3KSB8IDB4RjApO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgMTIpO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdH1cblx0c3ltYm9sICs9IHN0cmluZ0Zyb21DaGFyQ29kZSgoY29kZVBvaW50ICYgMHgzRikgfCAweDgwKTtcblx0cmV0dXJuIHN5bWJvbDtcbn1cblxuZnVuY3Rpb24gdXRmOGVuY29kZShzdHJpbmcsIG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdHZhciBzdHJpY3QgPSBmYWxzZSAhPT0gb3B0cy5zdHJpY3Q7XG5cblx0dmFyIGNvZGVQb2ludHMgPSB1Y3MyZGVjb2RlKHN0cmluZyk7XG5cdHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcblx0dmFyIGluZGV4ID0gLTE7XG5cdHZhciBjb2RlUG9pbnQ7XG5cdHZhciBieXRlU3RyaW5nID0gJyc7XG5cdHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdFx0Y29kZVBvaW50ID0gY29kZVBvaW50c1tpbmRleF07XG5cdFx0Ynl0ZVN0cmluZyArPSBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50LCBzdHJpY3QpO1xuXHR9XG5cdHJldHVybiBieXRlU3RyaW5nO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKSB7XG5cdGlmIChieXRlSW5kZXggPj0gYnl0ZUNvdW50KSB7XG5cdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgYnl0ZSBpbmRleCcpO1xuXHR9XG5cblx0dmFyIGNvbnRpbnVhdGlvbkJ5dGUgPSBieXRlQXJyYXlbYnl0ZUluZGV4XSAmIDB4RkY7XG5cdGJ5dGVJbmRleCsrO1xuXG5cdGlmICgoY29udGludWF0aW9uQnl0ZSAmIDB4QzApID09IDB4ODApIHtcblx0XHRyZXR1cm4gY29udGludWF0aW9uQnl0ZSAmIDB4M0Y7XG5cdH1cblxuXHQvLyBJZiB3ZSBlbmQgdXAgaGVyZSwgaXTigJlzIG5vdCBhIGNvbnRpbnVhdGlvbiBieXRlXG5cdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVN5bWJvbChzdHJpY3QpIHtcblx0dmFyIGJ5dGUxO1xuXHR2YXIgYnl0ZTI7XG5cdHZhciBieXRlMztcblx0dmFyIGJ5dGU0O1xuXHR2YXIgY29kZVBvaW50O1xuXG5cdGlmIChieXRlSW5kZXggPiBieXRlQ291bnQpIHtcblx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdH1cblxuXHRpZiAoYnl0ZUluZGV4ID09IGJ5dGVDb3VudCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIFJlYWQgZmlyc3QgYnl0ZVxuXHRieXRlMSA9IGJ5dGVBcnJheVtieXRlSW5kZXhdICYgMHhGRjtcblx0Ynl0ZUluZGV4Kys7XG5cblx0Ly8gMS1ieXRlIHNlcXVlbmNlIChubyBjb250aW51YXRpb24gYnl0ZXMpXG5cdGlmICgoYnl0ZTEgJiAweDgwKSA9PSAwKSB7XG5cdFx0cmV0dXJuIGJ5dGUxO1xuXHR9XG5cblx0Ly8gMi1ieXRlIHNlcXVlbmNlXG5cdGlmICgoYnl0ZTEgJiAweEUwKSA9PSAweEMwKSB7XG5cdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDFGKSA8PCA2KSB8IGJ5dGUyO1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHg4MCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyAzLWJ5dGUgc2VxdWVuY2UgKG1heSBpbmNsdWRlIHVucGFpcmVkIHN1cnJvZ2F0ZXMpXG5cdGlmICgoYnl0ZTEgJiAweEYwKSA9PSAweEUwKSB7XG5cdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgwRikgPDwgMTIpIHwgKGJ5dGUyIDw8IDYpIHwgYnl0ZTM7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDA4MDApIHtcblx0XHRcdHJldHVybiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSA/IGNvZGVQb2ludCA6IDB4RkZGRDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyA0LWJ5dGUgc2VxdWVuY2Vcblx0aWYgKChieXRlMSAmIDB4RjgpID09IDB4RjApIHtcblx0XHRieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Ynl0ZTMgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGJ5dGU0ID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgwNykgPDwgMHgxMikgfCAoYnl0ZTIgPDwgMHgwQykgfFxuXHRcdFx0KGJ5dGUzIDw8IDB4MDYpIHwgYnl0ZTQ7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDAxMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgxMEZGRkYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQ7XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgVVRGLTggZGV0ZWN0ZWQnKTtcbn1cblxudmFyIGJ5dGVBcnJheTtcbnZhciBieXRlQ291bnQ7XG52YXIgYnl0ZUluZGV4O1xuZnVuY3Rpb24gdXRmOGRlY29kZShieXRlU3RyaW5nLCBvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHR2YXIgc3RyaWN0ID0gZmFsc2UgIT09IG9wdHMuc3RyaWN0O1xuXG5cdGJ5dGVBcnJheSA9IHVjczJkZWNvZGUoYnl0ZVN0cmluZyk7XG5cdGJ5dGVDb3VudCA9IGJ5dGVBcnJheS5sZW5ndGg7XG5cdGJ5dGVJbmRleCA9IDA7XG5cdHZhciBjb2RlUG9pbnRzID0gW107XG5cdHZhciB0bXA7XG5cdHdoaWxlICgodG1wID0gZGVjb2RlU3ltYm9sKHN0cmljdCkpICE9PSBmYWxzZSkge1xuXHRcdGNvZGVQb2ludHMucHVzaCh0bXApO1xuXHR9XG5cdHJldHVybiB1Y3MyZW5jb2RlKGNvZGVQb2ludHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dmVyc2lvbjogJzIuMS4yJyxcblx0ZW5jb2RlOiB1dGY4ZW5jb2RlLFxuXHRkZWNvZGU6IHV0ZjhkZWNvZGVcbn07XG4iLCIvKiBnbG9iYWwgQmxvYiBGaWxlICovXG5cbi8qXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEJsb2IpID09PSAnW29iamVjdCBCbG9iQ29uc3RydWN0b3JdJztcbnZhciB3aXRoTmF0aXZlRmlsZSA9IHR5cGVvZiBGaWxlID09PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9TdHJpbmcuY2FsbChGaWxlKSA9PT0gJ1tvYmplY3QgRmlsZUNvbnN0cnVjdG9yXSc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNCaW5hcnk7XG5cbi8qKlxuICogQ2hlY2tzIGZvciBiaW5hcnkgZGF0YS5cbiAqXG4gKiBTdXBwb3J0cyBCdWZmZXIsIEFycmF5QnVmZmVyLCBCbG9iIGFuZCBGaWxlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbnl0aGluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBoYXNCaW5hcnkgKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChoYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIEJ1ZmZlci5pc0J1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIob2JqKSkgfHxcbiAgICAodHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICAgICh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvaGFzLWJpbmFyeS9wdWxsLzRcbiAgaWYgKG9iai50b0pTT04gJiYgdHlwZW9mIG9iai50b0pTT04gPT09ICdmdW5jdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBoYXNCaW5hcnkob2JqLnRvSlNPTigpLCB0cnVlKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBoYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqXG4gKiBMb2dpYyBib3Jyb3dlZCBmcm9tIE1vZGVybml6cjpcbiAqXG4gKiAgIC0gaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2NvcnMuanNcbiAqL1xuXG50cnkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbn0gY2F0Y2ggKGVycikge1xuICAvLyBpZiBYTUxIdHRwIHN1cHBvcnQgaXMgZGlzYWJsZWQgaW4gSUUgdGhlbiBpdCB3aWxsIHRocm93XG4gIC8vIHdoZW4gdHJ5aW5nIHRvIGNyZWF0ZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwiXG52YXIgaW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBvYmope1xuICBpZiAoaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHZhciByZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSBmYWxzZTtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICghcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyKSB7XG5cdFx0dmFyIE9sZENvb2tpZXMgPSB3aW5kb3cuQ29va2llcztcblx0XHR2YXIgYXBpID0gd2luZG93LkNvb2tpZXMgPSBmYWN0b3J5KCk7XG5cdFx0YXBpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuQ29va2llcyA9IE9sZENvb2tpZXM7XG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH07XG5cdH1cbn0oZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBleHRlbmQgKCkge1xuXHRcdHZhciBpID0gMDtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0Zm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzWyBpIF07XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlcikge1xuXHRcdGZ1bmN0aW9uIGFwaSAoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV3JpdGVcblxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRcdHBhdGg6ICcvJ1xuXHRcdFx0XHR9LCBhcGkuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcblx0XHRcdFx0XHRleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBleHBpcmVzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UncmUgdXNpbmcgXCJleHBpcmVzXCIgYmVjYXVzZSBcIm1heC1hZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcyA/IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRcdGlmICghY29udmVydGVyLndyaXRlKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcblx0XHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0a2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHRcdHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcblxuXHRcdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJz0nICsgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlICsgc3RyaW5naWZpZWRBdHRyaWJ1dGVzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVhZFxuXG5cdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRyZXN1bHQgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuXHRcdFx0Ly8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuIEFsc28gcHJldmVudHMgb2RkIHJlc3VsdCB3aGVuXG5cdFx0XHQvLyBjYWxsaW5nIFwiZ2V0KClcIlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciByZGVjb2RlID0gLyglWzAtOUEtWl17Mn0pKy9nO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0XHR2YXIgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG5cdFx0XHRcdGlmICghdGhpcy5qc29uICYmIGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IHBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0XHRjb29raWUgPSBjb252ZXJ0ZXIucmVhZCA/XG5cdFx0XHRcdFx0XHRjb252ZXJ0ZXIucmVhZChjb29raWUsIG5hbWUpIDogY29udmVydGVyKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5qc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IGNvb2tpZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBjb29raWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBhcGk7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBhcGkuY2FsbChhcGksIGtleSk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBhcGkuYXBwbHkoe1xuXHRcdFx0XHRqc29uOiB0cnVlXG5cdFx0XHR9LCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXHRcdH07XG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0YXBpKGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS53aXRoQ29udmVydGVyID0gaW5pdDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XG59KSk7XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG4iLCIvKipcclxuICogQ29tcGlsZXMgYSBxdWVyeXN0cmluZ1xyXG4gKiBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICB2YXIgc3RyID0gJyc7XHJcblxyXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XHJcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgIGlmIChzdHIubGVuZ3RoKSBzdHIgKz0gJyYnO1xyXG4gICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIHNpbXBsZSBxdWVyeXN0cmluZyBpbnRvIGFuIG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcXNcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbihxcyl7XHJcbiAgdmFyIHFyeSA9IHt9O1xyXG4gIHZhciBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYWlycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcclxuICAgIHFyeVtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xyXG4gIH1cclxuICByZXR1cm4gcXJ5O1xyXG59O1xyXG4iLCIvKipcclxuICogUGFyc2VzIGFuIFVSSVxyXG4gKlxyXG4gKiBAYXV0aG9yIFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPiAoTUlUIGxpY2Vuc2UpXHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbnZhciByZSA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KCg/OlthLWYwLTldezAsNH06KXsyLDd9W2EtZjAtOV17MCw0fXxbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xyXG5cclxudmFyIHBhcnRzID0gW1xyXG4gICAgJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xyXG4gICAgdmFyIHNyYyA9IHN0cixcclxuICAgICAgICBiID0gc3RyLmluZGV4T2YoJ1snKSxcclxuICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcclxuXHJcbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBiKSArIHN0ci5zdWJzdHJpbmcoYiwgZSkucmVwbGFjZSgvOi9nLCAnOycpICsgc3RyLnN1YnN0cmluZyhlLCBzdHIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3RyIHx8ICcnKSxcclxuICAgICAgICB1cmkgPSB7fSxcclxuICAgICAgICBpID0gMTQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHVyaVtwYXJ0c1tpXV0gPSBtW2ldIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcclxuICAgICAgICB1cmkuc291cmNlID0gc3JjO1xyXG4gICAgICAgIHVyaS5ob3N0ID0gdXJpLmhvc3Quc3Vic3RyaW5nKDEsIHVyaS5ob3N0Lmxlbmd0aCAtIDEpLnJlcGxhY2UoLzsvZywgJzonKTtcclxuICAgICAgICB1cmkuYXV0aG9yaXR5ID0gdXJpLmF1dGhvcml0eS5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJykucmVwbGFjZSgvOy9nLCAnOicpO1xyXG4gICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXJpO1xyXG59O1xyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHVybCA9IHJlcXVpcmUoJy4vdXJsJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIE1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBsb29rdXA7XG5cbi8qKlxuICogTWFuYWdlcnMgY2FjaGUuXG4gKi9cblxudmFyIGNhY2hlID0gZXhwb3J0cy5tYW5hZ2VycyA9IHt9O1xuXG4vKipcbiAqIExvb2tzIHVwIGFuIGV4aXN0aW5nIGBNYW5hZ2VyYCBmb3IgbXVsdGlwbGV4aW5nLlxuICogSWYgdGhlIHVzZXIgc3VtbW9uczpcbiAqXG4gKiAgIGBpbygnaHR0cDovL2xvY2FsaG9zdC9hJyk7YFxuICogICBgaW8oJ2h0dHA6Ly9sb2NhbGhvc3QvYicpO2BcbiAqXG4gKiBXZSByZXVzZSB0aGUgZXhpc3RpbmcgaW5zdGFuY2UgYmFzZWQgb24gc2FtZSBzY2hlbWUvcG9ydC9ob3N0LFxuICogYW5kIHdlIGluaXRpYWxpemUgc29ja2V0cyBmb3IgZWFjaCBuYW1lc3BhY2UuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb29rdXAgKHVyaSwgb3B0cykge1xuICBpZiAodHlwZW9mIHVyaSA9PT0gJ29iamVjdCcpIHtcbiAgICBvcHRzID0gdXJpO1xuICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIHZhciBwYXJzZWQgPSB1cmwodXJpKTtcbiAgdmFyIHNvdXJjZSA9IHBhcnNlZC5zb3VyY2U7XG4gIHZhciBpZCA9IHBhcnNlZC5pZDtcbiAgdmFyIHBhdGggPSBwYXJzZWQucGF0aDtcbiAgdmFyIHNhbWVOYW1lc3BhY2UgPSBjYWNoZVtpZF0gJiYgcGF0aCBpbiBjYWNoZVtpZF0ubnNwcztcbiAgdmFyIG5ld0Nvbm5lY3Rpb24gPSBvcHRzLmZvcmNlTmV3IHx8IG9wdHNbJ2ZvcmNlIG5ldyBjb25uZWN0aW9uJ10gfHxcbiAgICAgICAgICAgICAgICAgICAgICBmYWxzZSA9PT0gb3B0cy5tdWx0aXBsZXggfHwgc2FtZU5hbWVzcGFjZTtcblxuICB2YXIgaW87XG5cbiAgaWYgKG5ld0Nvbm5lY3Rpb24pIHtcbiAgICBkZWJ1ZygnaWdub3Jpbmcgc29ja2V0IGNhY2hlIGZvciAlcycsIHNvdXJjZSk7XG4gICAgaW8gPSBNYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFjYWNoZVtpZF0pIHtcbiAgICAgIGRlYnVnKCduZXcgaW8gaW5zdGFuY2UgZm9yICVzJywgc291cmNlKTtcbiAgICAgIGNhY2hlW2lkXSA9IE1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgaW8gPSBjYWNoZVtpZF07XG4gIH1cbiAgaWYgKHBhcnNlZC5xdWVyeSAmJiAhb3B0cy5xdWVyeSkge1xuICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnk7XG4gIH1cbiAgcmV0dXJuIGlvLnNvY2tldChwYXJzZWQucGF0aCwgb3B0cyk7XG59XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7XG5cbi8qKlxuICogYGNvbm5lY3RgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5jb25uZWN0ID0gbG9va3VwO1xuXG4vKipcbiAqIEV4cG9zZSBjb25zdHJ1Y3RvcnMgZm9yIHN0YW5kYWxvbmUgYnVpbGQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLk1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcbmV4cG9ydHMuU29ja2V0ID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBlaW8gPSByZXF1aXJlKCdlbmdpbmUuaW8tY2xpZW50Jyk7XG52YXIgU29ja2V0ID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgb24gPSByZXF1aXJlKCcuL29uJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1iaW5kJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50Om1hbmFnZXInKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnaW5kZXhvZicpO1xudmFyIEJhY2tvZmYgPSByZXF1aXJlKCdiYWNrbzInKTtcblxuLyoqXG4gKiBJRTYrIGhhc093blByb3BlcnR5XG4gKi9cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZXI7XG5cbi8qKlxuICogYE1hbmFnZXJgIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmdpbmUgaW5zdGFuY2Ugb3IgZW5naW5lIHVyaS9vcHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBNYW5hZ2VyICh1cmksIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hbmFnZXIpKSByZXR1cm4gbmV3IE1hbmFnZXIodXJpLCBvcHRzKTtcbiAgaWYgKHVyaSAmJiAoJ29iamVjdCcgPT09IHR5cGVvZiB1cmkpKSB7XG4gICAgb3B0cyA9IHVyaTtcbiAgICB1cmkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgb3B0cy5wYXRoID0gb3B0cy5wYXRoIHx8ICcvc29ja2V0LmlvJztcbiAgdGhpcy5uc3BzID0ge307XG4gIHRoaXMuc3VicyA9IFtdO1xuICB0aGlzLm9wdHMgPSBvcHRzO1xuICB0aGlzLnJlY29ubmVjdGlvbihvcHRzLnJlY29ubmVjdGlvbiAhPT0gZmFsc2UpO1xuICB0aGlzLnJlY29ubmVjdGlvbkF0dGVtcHRzKG9wdHMucmVjb25uZWN0aW9uQXR0ZW1wdHMgfHwgSW5maW5pdHkpO1xuICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KG9wdHMucmVjb25uZWN0aW9uRGVsYXkgfHwgMTAwMCk7XG4gIHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgob3B0cy5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1MDAwKTtcbiAgdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKG9wdHMucmFuZG9taXphdGlvbkZhY3RvciB8fCAwLjUpO1xuICB0aGlzLmJhY2tvZmYgPSBuZXcgQmFja29mZih7XG4gICAgbWluOiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KCksXG4gICAgbWF4OiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KCksXG4gICAgaml0dGVyOiB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3IoKVxuICB9KTtcbiAgdGhpcy50aW1lb3V0KG51bGwgPT0gb3B0cy50aW1lb3V0ID8gMjAwMDAgOiBvcHRzLnRpbWVvdXQpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgdGhpcy51cmkgPSB1cmk7XG4gIHRoaXMuY29ubmVjdGluZyA9IFtdO1xuICB0aGlzLmxhc3RQaW5nID0gbnVsbDtcbiAgdGhpcy5lbmNvZGluZyA9IGZhbHNlO1xuICB0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xuICB2YXIgX3BhcnNlciA9IG9wdHMucGFyc2VyIHx8IHBhcnNlcjtcbiAgdGhpcy5lbmNvZGVyID0gbmV3IF9wYXJzZXIuRW5jb2RlcigpO1xuICB0aGlzLmRlY29kZXIgPSBuZXcgX3BhcnNlci5EZWNvZGVyKCk7XG4gIHRoaXMuYXV0b0Nvbm5lY3QgPSBvcHRzLmF1dG9Db25uZWN0ICE9PSBmYWxzZTtcbiAgaWYgKHRoaXMuYXV0b0Nvbm5lY3QpIHRoaXMub3BlbigpO1xufVxuXG4vKipcbiAqIFByb3BhZ2F0ZSBnaXZlbiBldmVudCB0byBzb2NrZXRzIGFuZCBlbWl0IG9uIGB0aGlzYFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmVtaXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBuc3AgaW4gdGhpcy5uc3BzKSB7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMubnNwcywgbnNwKSkge1xuICAgICAgdGhpcy5uc3BzW25zcF0uZW1pdC5hcHBseSh0aGlzLm5zcHNbbnNwXSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlIGBzb2NrZXQuaWRgIG9mIGFsbCBzb2NrZXRzXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU29ja2V0SWRzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBuc3AgaW4gdGhpcy5uc3BzKSB7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMubnNwcywgbnNwKSkge1xuICAgICAgdGhpcy5uc3BzW25zcF0uaWQgPSB0aGlzLmdlbmVyYXRlSWQobnNwKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogZ2VuZXJhdGUgYHNvY2tldC5pZGAgZm9yIHRoZSBnaXZlbiBgbnNwYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuc3BcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmdlbmVyYXRlSWQgPSBmdW5jdGlvbiAobnNwKSB7XG4gIHJldHVybiAobnNwID09PSAnLycgPyAnJyA6IChuc3AgKyAnIycpKSArIHRoaXMuZW5naW5lLmlkO1xufTtcblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoTWFuYWdlci5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFNldHMgdGhlIGByZWNvbm5lY3Rpb25gIGNvbmZpZy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRydWUvZmFsc2UgaWYgaXQgc2hvdWxkIGF1dG9tYXRpY2FsbHkgcmVjb25uZWN0XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbiA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgcmVjb25uZWN0aW9uIGF0dGVtcHRzIGNvbmZpZy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IHJlY29ubmVjdGlvbiBhdHRlbXB0cyBiZWZvcmUgZ2l2aW5nIHVwXG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkF0dGVtcHRzID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzID0gdjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGRlbGF5IGJldHdlZW4gcmVjb25uZWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uRGVsYXkgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheTtcbiAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldE1pbih2KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yYW5kb21pemF0aW9uRmFjdG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvcjtcbiAgdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0Sml0dGVyKHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgbWF4aW11bSBkZWxheSBiZXR3ZWVuIHJlY29ubmVjdGlvbnMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkRlbGF5TWF4ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXg7XG4gIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4ID0gdjtcbiAgdGhpcy5iYWNrb2ZmICYmIHRoaXMuYmFja29mZi5zZXRNYXgodik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjb25uZWN0aW9uIHRpbWVvdXQuIGBmYWxzZWAgdG8gZGlzYWJsZVxuICpcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gIHRoaXMuX3RpbWVvdXQgPSB2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3RhcnRzIHRyeWluZyB0byByZWNvbm5lY3QgaWYgcmVjb25uZWN0aW9uIGlzIGVuYWJsZWQgYW5kIHdlIGhhdmUgbm90XG4gKiBzdGFydGVkIHJlY29ubmVjdGluZyB5ZXRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5tYXliZVJlY29ubmVjdE9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gT25seSB0cnkgdG8gcmVjb25uZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGluZ1xuICBpZiAoIXRoaXMucmVjb25uZWN0aW5nICYmIHRoaXMuX3JlY29ubmVjdGlvbiAmJiB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPT09IDApIHtcbiAgICAvLyBrZWVwcyByZWNvbm5lY3Rpb24gZnJvbSBmaXJpbmcgdHdpY2UgZm9yIHRoZSBzYW1lIHJlY29ubmVjdGlvbiBsb29wXG4gICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25hbCwgY2FsbGJhY2tcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub3BlbiA9XG5NYW5hZ2VyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKGZuLCBvcHRzKSB7XG4gIGRlYnVnKCdyZWFkeVN0YXRlICVzJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgaWYgKH50aGlzLnJlYWR5U3RhdGUuaW5kZXhPZignb3BlbicpKSByZXR1cm4gdGhpcztcblxuICBkZWJ1Zygnb3BlbmluZyAlcycsIHRoaXMudXJpKTtcbiAgdGhpcy5lbmdpbmUgPSBlaW8odGhpcy51cmksIHRoaXMub3B0cyk7XG4gIHZhciBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG4gIHRoaXMuc2tpcFJlY29ubmVjdCA9IGZhbHNlO1xuXG4gIC8vIGVtaXQgYG9wZW5gXG4gIHZhciBvcGVuU3ViID0gb24oc29ja2V0LCAnb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9ub3BlbigpO1xuICAgIGZuICYmIGZuKCk7XG4gIH0pO1xuXG4gIC8vIGVtaXQgYGNvbm5lY3RfZXJyb3JgXG4gIHZhciBlcnJvclN1YiA9IG9uKHNvY2tldCwgJ2Vycm9yJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkZWJ1ZygnY29ubmVjdF9lcnJvcicpO1xuICAgIHNlbGYuY2xlYW51cCgpO1xuICAgIHNlbGYucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICAgIHNlbGYuZW1pdEFsbCgnY29ubmVjdF9lcnJvcicsIGRhdGEpO1xuICAgIGlmIChmbikge1xuICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignQ29ubmVjdGlvbiBlcnJvcicpO1xuICAgICAgZXJyLmRhdGEgPSBkYXRhO1xuICAgICAgZm4oZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT25seSBkbyB0aGlzIGlmIHRoZXJlIGlzIG5vIGZuIHRvIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgIHNlbGYubWF5YmVSZWNvbm5lY3RPbk9wZW4oKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGVtaXQgYGNvbm5lY3RfdGltZW91dGBcbiAgaWYgKGZhbHNlICE9PSB0aGlzLl90aW1lb3V0KSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICAgIGRlYnVnKCdjb25uZWN0IGF0dGVtcHQgd2lsbCB0aW1lb3V0IGFmdGVyICVkJywgdGltZW91dCk7XG5cbiAgICAvLyBzZXQgdGltZXJcbiAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlYnVnKCdjb25uZWN0IGF0dGVtcHQgdGltZWQgb3V0IGFmdGVyICVkJywgdGltZW91dCk7XG4gICAgICBvcGVuU3ViLmRlc3Ryb3koKTtcbiAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgc29ja2V0LmVtaXQoJ2Vycm9yJywgJ3RpbWVvdXQnKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgnY29ubmVjdF90aW1lb3V0JywgdGltZW91dCk7XG4gICAgfSwgdGltZW91dCk7XG5cbiAgICB0aGlzLnN1YnMucHVzaCh7XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLnN1YnMucHVzaChvcGVuU3ViKTtcbiAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdvcGVuJyk7XG5cbiAgLy8gY2xlYXIgb2xkIHN1YnNcbiAgdGhpcy5jbGVhbnVwKCk7XG5cbiAgLy8gbWFyayBhcyBvcGVuXG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG5cbiAgLy8gYWRkIG5ldyBzdWJzXG4gIHZhciBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnZGF0YScsIGJpbmQodGhpcywgJ29uZGF0YScpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ3BpbmcnLCBiaW5kKHRoaXMsICdvbnBpbmcnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdwb25nJywgYmluZCh0aGlzLCAnb25wb25nJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnZXJyb3InLCBiaW5kKHRoaXMsICdvbmVycm9yJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnY2xvc2UnLCBiaW5kKHRoaXMsICdvbmNsb3NlJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24odGhpcy5kZWNvZGVyLCAnZGVjb2RlZCcsIGJpbmQodGhpcywgJ29uZGVjb2RlZCcpKSk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgcGluZy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGFzdFBpbmcgPSBuZXcgRGF0ZSgpO1xuICB0aGlzLmVtaXRBbGwoJ3BpbmcnKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25wb25nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVtaXRBbGwoJ3BvbmcnLCBuZXcgRGF0ZSgpIC0gdGhpcy5sYXN0UGluZyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGRhdGEuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25kYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdGhpcy5kZWNvZGVyLmFkZChkYXRhKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gcGFyc2VyIGZ1bGx5IGRlY29kZXMgYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25kZWNvZGVkID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHNvY2tldCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICBkZWJ1ZygnZXJyb3InLCBlcnIpO1xuICB0aGlzLmVtaXRBbGwoJ2Vycm9yJywgZXJyKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBzb2NrZXQgZm9yIHRoZSBnaXZlbiBgbnNwYC5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnNvY2tldCA9IGZ1bmN0aW9uIChuc3AsIG9wdHMpIHtcbiAgdmFyIHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICBpZiAoIXNvY2tldCkge1xuICAgIHNvY2tldCA9IG5ldyBTb2NrZXQodGhpcywgbnNwLCBvcHRzKTtcbiAgICB0aGlzLm5zcHNbbnNwXSA9IHNvY2tldDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdjb25uZWN0aW5nJywgb25Db25uZWN0aW5nKTtcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzb2NrZXQuaWQgPSBzZWxmLmdlbmVyYXRlSWQobnNwKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmF1dG9Db25uZWN0KSB7XG4gICAgICAvLyBtYW51YWxseSBjYWxsIGhlcmUgc2luY2UgY29ubmVjdGluZyBldmVudCBpcyBmaXJlZCBiZWZvcmUgbGlzdGVuaW5nXG4gICAgICBvbkNvbm5lY3RpbmcoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkNvbm5lY3RpbmcgKCkge1xuICAgIGlmICghfmluZGV4T2Yoc2VsZi5jb25uZWN0aW5nLCBzb2NrZXQpKSB7XG4gICAgICBzZWxmLmNvbm5lY3RpbmcucHVzaChzb2NrZXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzb2NrZXQ7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgc29ja2V0IGNsb3NlLlxuICpcbiAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXRcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHNvY2tldCkge1xuICB2YXIgaW5kZXggPSBpbmRleE9mKHRoaXMuY29ubmVjdGluZywgc29ja2V0KTtcbiAgaWYgKH5pbmRleCkgdGhpcy5jb25uZWN0aW5nLnNwbGljZShpbmRleCwgMSk7XG4gIGlmICh0aGlzLmNvbm5lY3RpbmcubGVuZ3RoKSByZXR1cm47XG5cbiAgdGhpcy5jbG9zZSgpO1xufTtcblxuLyoqXG4gKiBXcml0ZXMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICBkZWJ1Zygnd3JpdGluZyBwYWNrZXQgJWonLCBwYWNrZXQpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChwYWNrZXQucXVlcnkgJiYgcGFja2V0LnR5cGUgPT09IDApIHBhY2tldC5uc3AgKz0gJz8nICsgcGFja2V0LnF1ZXJ5O1xuXG4gIGlmICghc2VsZi5lbmNvZGluZykge1xuICAgIC8vIGVuY29kZSwgdGhlbiB3cml0ZSB0byBlbmdpbmUgd2l0aCByZXN1bHRcbiAgICBzZWxmLmVuY29kaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmVuY29kZXIuZW5jb2RlKHBhY2tldCwgZnVuY3Rpb24gKGVuY29kZWRQYWNrZXRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGYuZW5naW5lLndyaXRlKGVuY29kZWRQYWNrZXRzW2ldLCBwYWNrZXQub3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBzZWxmLmVuY29kaW5nID0gZmFsc2U7XG4gICAgICBzZWxmLnByb2Nlc3NQYWNrZXRRdWV1ZSgpO1xuICAgIH0pO1xuICB9IGVsc2UgeyAvLyBhZGQgcGFja2V0IHRvIHRoZSBxdWV1ZVxuICAgIHNlbGYucGFja2V0QnVmZmVyLnB1c2gocGFja2V0KTtcbiAgfVxufTtcblxuLyoqXG4gKiBJZiBwYWNrZXQgYnVmZmVyIGlzIG5vbi1lbXB0eSwgYmVnaW5zIGVuY29kaW5nIHRoZVxuICogbmV4dCBwYWNrZXQgaW4gbGluZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5wcm9jZXNzUGFja2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBhY2tldEJ1ZmZlci5sZW5ndGggPiAwICYmICF0aGlzLmVuY29kaW5nKSB7XG4gICAgdmFyIHBhY2sgPSB0aGlzLnBhY2tldEJ1ZmZlci5zaGlmdCgpO1xuICAgIHRoaXMucGFja2V0KHBhY2spO1xuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdjbGVhbnVwJyk7XG5cbiAgdmFyIHN1YnNMZW5ndGggPSB0aGlzLnN1YnMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNMZW5ndGg7IGkrKykge1xuICAgIHZhciBzdWIgPSB0aGlzLnN1YnMuc2hpZnQoKTtcbiAgICBzdWIuZGVzdHJveSgpO1xuICB9XG5cbiAgdGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcbiAgdGhpcy5lbmNvZGluZyA9IGZhbHNlO1xuICB0aGlzLmxhc3RQaW5nID0gbnVsbDtcblxuICB0aGlzLmRlY29kZXIuZGVzdHJveSgpO1xufTtcblxuLyoqXG4gKiBDbG9zZSB0aGUgY3VycmVudCBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuY2xvc2UgPVxuTWFuYWdlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2Rpc2Nvbm5lY3QnKTtcbiAgdGhpcy5za2lwUmVjb25uZWN0ID0gdHJ1ZTtcbiAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgLy8gYG9uY2xvc2VgIHdpbGwgbm90IGZpcmUgYmVjYXVzZVxuICAgIC8vIGFuIG9wZW4gZXZlbnQgbmV2ZXIgaGFwcGVuZWRcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxuICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIGlmICh0aGlzLmVuZ2luZSkgdGhpcy5lbmdpbmUuY2xvc2UoKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZW5naW5lIGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGRlYnVnKCdvbmNsb3NlJyk7XG5cbiAgdGhpcy5jbGVhbnVwKCk7XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbik7XG5cbiAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRlbXB0IGEgcmVjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucmVjb25uZWN0aW5nIHx8IHRoaXMuc2tpcFJlY29ubmVjdCkgcmV0dXJuIHRoaXM7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICBkZWJ1ZygncmVjb25uZWN0IGZhaWxlZCcpO1xuICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgIHRoaXMuZW1pdEFsbCgncmVjb25uZWN0X2ZhaWxlZCcpO1xuICAgIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgZGVidWcoJ3dpbGwgd2FpdCAlZG1zIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdCcsIGRlbGF5KTtcblxuICAgIHRoaXMucmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpIHJldHVybjtcblxuICAgICAgZGVidWcoJ2F0dGVtcHRpbmcgcmVjb25uZWN0Jyk7XG4gICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdF9hdHRlbXB0Jywgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0aW5nJywgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcblxuICAgICAgLy8gY2hlY2sgYWdhaW4gZm9yIHRoZSBjYXNlIHNvY2tldCBjbG9zZWQgaW4gYWJvdmUgZXZlbnRzXG4gICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KSByZXR1cm47XG5cbiAgICAgIHNlbGYub3BlbihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBkZWJ1ZygncmVjb25uZWN0IGF0dGVtcHQgZXJyb3InKTtcbiAgICAgICAgICBzZWxmLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RfZXJyb3InLCBlcnIuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVidWcoJ3JlY29ubmVjdCBzdWNjZXNzJyk7XG4gICAgICAgICAgc2VsZi5vbnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkZWxheSk7XG5cbiAgICB0aGlzLnN1YnMucHVzaCh7XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZWNvbm5lY3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25yZWNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhdHRlbXB0ID0gdGhpcy5iYWNrb2ZmLmF0dGVtcHRzO1xuICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgdGhpcy51cGRhdGVTb2NrZXRJZHMoKTtcbiAgdGhpcy5lbWl0QWxsKCdyZWNvbm5lY3QnLCBhdHRlbXB0KTtcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBvbjtcblxuLyoqXG4gKiBIZWxwZXIgZm9yIHN1YnNjcmlwdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8RXZlbnRFbWl0dGVyfSBvYmogd2l0aCBgRW1pdHRlcmAgbWl4aW4gb3IgYEV2ZW50RW1pdHRlcmBcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBvbiAob2JqLCBldiwgZm4pIHtcbiAgb2JqLm9uKGV2LCBmbik7XG4gIHJldHVybiB7XG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgb2JqLnJlbW92ZUxpc3RlbmVyKGV2LCBmbik7XG4gICAgfVxuICB9O1xufVxuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHBhcnNlciA9IHJlcXVpcmUoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciB0b0FycmF5ID0gcmVxdWlyZSgndG8tYXJyYXknKTtcbnZhciBvbiA9IHJlcXVpcmUoJy4vb24nKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnY29tcG9uZW50LWJpbmQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6c29ja2V0Jyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcbnZhciBoYXNCaW4gPSByZXF1aXJlKCdoYXMtYmluYXJ5MicpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFNvY2tldDtcblxuLyoqXG4gKiBJbnRlcm5hbCBldmVudHMgKGJsYWNrbGlzdGVkKS5cbiAqIFRoZXNlIGV2ZW50cyBjYW4ndCBiZSBlbWl0dGVkIGJ5IHRoZSB1c2VyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBldmVudHMgPSB7XG4gIGNvbm5lY3Q6IDEsXG4gIGNvbm5lY3RfZXJyb3I6IDEsXG4gIGNvbm5lY3RfdGltZW91dDogMSxcbiAgY29ubmVjdGluZzogMSxcbiAgZGlzY29ubmVjdDogMSxcbiAgZXJyb3I6IDEsXG4gIHJlY29ubmVjdDogMSxcbiAgcmVjb25uZWN0X2F0dGVtcHQ6IDEsXG4gIHJlY29ubmVjdF9mYWlsZWQ6IDEsXG4gIHJlY29ubmVjdF9lcnJvcjogMSxcbiAgcmVjb25uZWN0aW5nOiAxLFxuICBwaW5nOiAxLFxuICBwb25nOiAxXG59O1xuXG4vKipcbiAqIFNob3J0Y3V0IHRvIGBFbWl0dGVyI2VtaXRgLlxuICovXG5cbnZhciBlbWl0ID0gRW1pdHRlci5wcm90b3R5cGUuZW1pdDtcblxuLyoqXG4gKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFNvY2tldCAoaW8sIG5zcCwgb3B0cykge1xuICB0aGlzLmlvID0gaW87XG4gIHRoaXMubnNwID0gbnNwO1xuICB0aGlzLmpzb24gPSB0aGlzOyAvLyBjb21wYXRcbiAgdGhpcy5pZHMgPSAwO1xuICB0aGlzLmFja3MgPSB7fTtcbiAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gIHRoaXMuZmxhZ3MgPSB7fTtcbiAgaWYgKG9wdHMgJiYgb3B0cy5xdWVyeSkge1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICB9XG4gIGlmICh0aGlzLmlvLmF1dG9Db25uZWN0KSB0aGlzLm9wZW4oKTtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoU29ja2V0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zdWJFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnN1YnMpIHJldHVybjtcblxuICB2YXIgaW8gPSB0aGlzLmlvO1xuICB0aGlzLnN1YnMgPSBbXG4gICAgb24oaW8sICdvcGVuJywgYmluZCh0aGlzLCAnb25vcGVuJykpLFxuICAgIG9uKGlvLCAncGFja2V0JywgYmluZCh0aGlzLCAnb25wYWNrZXQnKSksXG4gICAgb24oaW8sICdjbG9zZScsIGJpbmQodGhpcywgJ29uY2xvc2UnKSlcbiAgXTtcbn07XG5cbi8qKlxuICogXCJPcGVuc1wiIHRoZSBzb2NrZXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9wZW4gPVxuU29ja2V0LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb25uZWN0ZWQpIHJldHVybiB0aGlzO1xuXG4gIHRoaXMuc3ViRXZlbnRzKCk7XG4gIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICBpZiAoJ29wZW4nID09PSB0aGlzLmlvLnJlYWR5U3RhdGUpIHRoaXMub25vcGVuKCk7XG4gIHRoaXMuZW1pdCgnY29ubmVjdGluZycpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBgbWVzc2FnZWAgZXZlbnQuXG4gKlxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gIGFyZ3MudW5zaGlmdCgnbWVzc2FnZScpO1xuICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBgZW1pdGAuXG4gKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgbmFtZVxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldikge1xuICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2KSkge1xuICAgIGVtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICB2YXIgcGFja2V0ID0ge1xuICAgIHR5cGU6ICh0aGlzLmZsYWdzLmJpbmFyeSAhPT0gdW5kZWZpbmVkID8gdGhpcy5mbGFncy5iaW5hcnkgOiBoYXNCaW4oYXJncykpID8gcGFyc2VyLkJJTkFSWV9FVkVOVCA6IHBhcnNlci5FVkVOVCxcbiAgICBkYXRhOiBhcmdzXG4gIH07XG5cbiAgcGFja2V0Lm9wdGlvbnMgPSB7fTtcbiAgcGFja2V0Lm9wdGlvbnMuY29tcHJlc3MgPSAhdGhpcy5mbGFncyB8fCBmYWxzZSAhPT0gdGhpcy5mbGFncy5jb21wcmVzcztcblxuICAvLyBldmVudCBhY2sgY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICBkZWJ1ZygnZW1pdHRpbmcgcGFja2V0IHdpdGggYWNrIGlkICVkJywgdGhpcy5pZHMpO1xuICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gIH1cblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIH1cblxuICB0aGlzLmZsYWdzID0ge307XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gIHRoaXMuaW8ucGFja2V0KHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBgb3BlbmAuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCd0cmFuc3BvcnQgaXMgb3BlbiAtIGNvbm5lY3RpbmcnKTtcblxuICAvLyB3cml0ZSBjb25uZWN0IHBhY2tldCBpZiBuZWNlc3NhcnlcbiAgaWYgKCcvJyAhPT0gdGhpcy5uc3ApIHtcbiAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgdmFyIHF1ZXJ5ID0gdHlwZW9mIHRoaXMucXVlcnkgPT09ICdvYmplY3QnID8gcGFyc2Vxcy5lbmNvZGUodGhpcy5xdWVyeSkgOiB0aGlzLnF1ZXJ5O1xuICAgICAgZGVidWcoJ3NlbmRpbmcgY29ubmVjdCBwYWNrZXQgd2l0aCBxdWVyeSAlcycsIHF1ZXJ5KTtcbiAgICAgIHRoaXMucGFja2V0KHt0eXBlOiBwYXJzZXIuQ09OTkVDVCwgcXVlcnk6IHF1ZXJ5fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFja2V0KHt0eXBlOiBwYXJzZXIuQ09OTkVDVH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVhc29uXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGRlYnVnKCdjbG9zZSAoJXMpJywgcmVhc29uKTtcbiAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICBkZWxldGUgdGhpcy5pZDtcbiAgdGhpcy5lbWl0KCdkaXNjb25uZWN0JywgcmVhc29uKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggc29ja2V0IHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9ucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB2YXIgc2FtZU5hbWVzcGFjZSA9IHBhY2tldC5uc3AgPT09IHRoaXMubnNwO1xuICB2YXIgcm9vdE5hbWVzcGFjZUVycm9yID0gcGFja2V0LnR5cGUgPT09IHBhcnNlci5FUlJPUiAmJiBwYWNrZXQubnNwID09PSAnLyc7XG5cbiAgaWYgKCFzYW1lTmFtZXNwYWNlICYmICFyb290TmFtZXNwYWNlRXJyb3IpIHJldHVybjtcblxuICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgY2FzZSBwYXJzZXIuQ09OTkVDVDpcbiAgICAgIHRoaXMub25jb25uZWN0KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkVWRU5UOlxuICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkJJTkFSWV9FVkVOVDpcbiAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5BQ0s6XG4gICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkJJTkFSWV9BQ0s6XG4gICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkRJU0NPTk5FQ1Q6XG4gICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5FUlJPUjpcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBwYWNrZXQuZGF0YSk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBldmVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uZXZlbnQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHZhciBhcmdzID0gcGFja2V0LmRhdGEgfHwgW107XG4gIGRlYnVnKCdlbWl0dGluZyBldmVudCAlaicsIGFyZ3MpO1xuXG4gIGlmIChudWxsICE9IHBhY2tldC5pZCkge1xuICAgIGRlYnVnKCdhdHRhY2hpbmcgYWNrIGNhbGxiYWNrIHRvIGV2ZW50Jyk7XG4gICAgYXJncy5wdXNoKHRoaXMuYWNrKHBhY2tldC5pZCkpO1xuICB9XG5cbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlY2VpdmVCdWZmZXIucHVzaChhcmdzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBQcm9kdWNlcyBhbiBhY2sgY2FsbGJhY2sgdG8gZW1pdCB3aXRoIGFuIGV2ZW50LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuYWNrID0gZnVuY3Rpb24gKGlkKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHNlbnQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBwcmV2ZW50IGRvdWJsZSBjYWxsYmFja3NcbiAgICBpZiAoc2VudCkgcmV0dXJuO1xuICAgIHNlbnQgPSB0cnVlO1xuICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgIGRlYnVnKCdzZW5kaW5nIGFjayAlaicsIGFyZ3MpO1xuXG4gICAgc2VsZi5wYWNrZXQoe1xuICAgICAgdHlwZTogaGFzQmluKGFyZ3MpID8gcGFyc2VyLkJJTkFSWV9BQ0sgOiBwYXJzZXIuQUNLLFxuICAgICAgaWQ6IGlkLFxuICAgICAgZGF0YTogYXJnc1xuICAgIH0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uYWNrID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB2YXIgYWNrID0gdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgYWNrKSB7XG4gICAgZGVidWcoJ2NhbGxpbmcgYWNrICVzIHdpdGggJWonLCBwYWNrZXQuaWQsIHBhY2tldC5kYXRhKTtcbiAgICBhY2suYXBwbHkodGhpcywgcGFja2V0LmRhdGEpO1xuICAgIGRlbGV0ZSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgfSBlbHNlIHtcbiAgICBkZWJ1ZygnYmFkIGFjayAlcycsIHBhY2tldC5pZCk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc2VydmVyIGNvbm5lY3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5lbWl0KCdjb25uZWN0Jyk7XG4gIHRoaXMuZW1pdEJ1ZmZlcmVkKCk7XG59O1xuXG4vKipcbiAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5lbWl0QnVmZmVyZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5yZWNlaXZlQnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCB0aGlzLnJlY2VpdmVCdWZmZXJbaV0pO1xuICB9XG4gIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLnNlbmRCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnBhY2tldCh0aGlzLnNlbmRCdWZmZXJbaV0pO1xuICB9XG4gIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgZGlzY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3NlcnZlciBkaXNjb25uZWN0ICglcyknLCB0aGlzLm5zcCk7XG4gIHRoaXMuZGVzdHJveSgpO1xuICB0aGlzLm9uY2xvc2UoJ2lvIHNlcnZlciBkaXNjb25uZWN0Jyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGZvcmNlZCBjbGllbnQvc2VydmVyIHNpZGUgZGlzY29ubmVjdGlvbnMsXG4gKiB0aGlzIG1ldGhvZCBlbnN1cmVzIHRoZSBtYW5hZ2VyIHN0b3BzIHRyYWNraW5nIHVzIGFuZFxuICogdGhhdCByZWNvbm5lY3Rpb25zIGRvbid0IGdldCB0cmlnZ2VyZWQgZm9yIHRoaXMuXG4gKlxuICogQGFwaSBwcml2YXRlLlxuICovXG5cblNvY2tldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc3Vicykge1xuICAgIC8vIGNsZWFuIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgcmVjb25uZWN0aW9uc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnN1YnNbaV0uZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnN1YnMgPSBudWxsO1xuICB9XG5cbiAgdGhpcy5pby5kZXN0cm95KHRoaXMpO1xufTtcblxuLyoqXG4gKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0IG1hbnVhbGx5LlxuICpcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNsb3NlID1cblNvY2tldC5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgZGVidWcoJ3BlcmZvcm1pbmcgZGlzY29ubmVjdCAoJXMpJywgdGhpcy5uc3ApO1xuICAgIHRoaXMucGFja2V0KHsgdHlwZTogcGFyc2VyLkRJU0NPTk5FQ1QgfSk7XG4gIH1cblxuICAvLyByZW1vdmUgc29ja2V0IGZyb20gcG9vbFxuICB0aGlzLmRlc3Ryb3koKTtcblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAvLyBmaXJlIGV2ZW50c1xuICAgIHRoaXMub25jbG9zZSgnaW8gY2xpZW50IGRpc2Nvbm5lY3QnKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jb21wcmVzcyA9IGZ1bmN0aW9uIChjb21wcmVzcykge1xuICB0aGlzLmZsYWdzLmNvbXByZXNzID0gY29tcHJlc3M7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBiaW5hcnkgZmxhZ1xuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2hldGhlciB0aGUgZW1pdHRlZCBkYXRhIGNvbnRhaW5zIGJpbmFyeVxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuYmluYXJ5ID0gZnVuY3Rpb24gKGJpbmFyeSkge1xuICB0aGlzLmZsYWdzLmJpbmFyeSA9IGJpbmFyeTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHBhcnNldXJpID0gcmVxdWlyZSgncGFyc2V1cmknKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6dXJsJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB1cmw7XG5cbi8qKlxuICogVVJMIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gQW4gb2JqZWN0IG1lYW50IHRvIG1pbWljIHdpbmRvdy5sb2NhdGlvbi5cbiAqICAgICAgICAgICAgICAgICBEZWZhdWx0cyB0byB3aW5kb3cubG9jYXRpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHVybCAodXJpLCBsb2MpIHtcbiAgdmFyIG9iaiA9IHVyaTtcblxuICAvLyBkZWZhdWx0IHRvIHdpbmRvdy5sb2NhdGlvblxuICBsb2MgPSBsb2MgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYXRpb24pO1xuICBpZiAobnVsbCA9PSB1cmkpIHVyaSA9IGxvYy5wcm90b2NvbCArICcvLycgKyBsb2MuaG9zdDtcblxuICAvLyByZWxhdGl2ZSBwYXRoIHN1cHBvcnRcbiAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgdXJpKSB7XG4gICAgaWYgKCcvJyA9PT0gdXJpLmNoYXJBdCgwKSkge1xuICAgICAgaWYgKCcvJyA9PT0gdXJpLmNoYXJBdCgxKSkge1xuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyB1cmk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmkgPSBsb2MuaG9zdCArIHVyaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIS9eKGh0dHBzP3x3c3M/KTpcXC9cXC8vLnRlc3QodXJpKSkge1xuICAgICAgZGVidWcoJ3Byb3RvY29sLWxlc3MgdXJsICVzJywgdXJpKTtcbiAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGxvYykge1xuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyAnLy8nICsgdXJpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJpID0gJ2h0dHBzOi8vJyArIHVyaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwYXJzZVxuICAgIGRlYnVnKCdwYXJzZSAlcycsIHVyaSk7XG4gICAgb2JqID0gcGFyc2V1cmkodXJpKTtcbiAgfVxuXG4gIC8vIG1ha2Ugc3VyZSB3ZSB0cmVhdCBgbG9jYWxob3N0OjgwYCBhbmQgYGxvY2FsaG9zdGAgZXF1YWxseVxuICBpZiAoIW9iai5wb3J0KSB7XG4gICAgaWYgKC9eKGh0dHB8d3MpJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICBvYmoucG9ydCA9ICc4MCc7XG4gICAgfSBlbHNlIGlmICgvXihodHRwfHdzKXMkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgIG9iai5wb3J0ID0gJzQ0Myc7XG4gICAgfVxuICB9XG5cbiAgb2JqLnBhdGggPSBvYmoucGF0aCB8fCAnLyc7XG5cbiAgdmFyIGlwdjYgPSBvYmouaG9zdC5pbmRleE9mKCc6JykgIT09IC0xO1xuICB2YXIgaG9zdCA9IGlwdjYgPyAnWycgKyBvYmouaG9zdCArICddJyA6IG9iai5ob3N0O1xuXG4gIC8vIGRlZmluZSB1bmlxdWUgaWRcbiAgb2JqLmlkID0gb2JqLnByb3RvY29sICsgJzovLycgKyBob3N0ICsgJzonICsgb2JqLnBvcnQ7XG4gIC8vIGRlZmluZSBocmVmXG4gIG9iai5ocmVmID0gb2JqLnByb3RvY29sICsgJzovLycgKyBob3N0ICsgKGxvYyAmJiBsb2MucG9ydCA9PT0gb2JqLnBvcnQgPyAnJyA6ICgnOicgKyBvYmoucG9ydCkpO1xuXG4gIHJldHVybiBvYmo7XG59XG4iLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICcjMDAwMENDJywgJyMwMDAwRkYnLCAnIzAwMzNDQycsICcjMDAzM0ZGJywgJyMwMDY2Q0MnLCAnIzAwNjZGRicsICcjMDA5OUNDJyxcbiAgJyMwMDk5RkYnLCAnIzAwQ0MwMCcsICcjMDBDQzMzJywgJyMwMENDNjYnLCAnIzAwQ0M5OScsICcjMDBDQ0NDJywgJyMwMENDRkYnLFxuICAnIzMzMDBDQycsICcjMzMwMEZGJywgJyMzMzMzQ0MnLCAnIzMzMzNGRicsICcjMzM2NkNDJywgJyMzMzY2RkYnLCAnIzMzOTlDQycsXG4gICcjMzM5OUZGJywgJyMzM0NDMDAnLCAnIzMzQ0MzMycsICcjMzNDQzY2JywgJyMzM0NDOTknLCAnIzMzQ0NDQycsICcjMzNDQ0ZGJyxcbiAgJyM2NjAwQ0MnLCAnIzY2MDBGRicsICcjNjYzM0NDJywgJyM2NjMzRkYnLCAnIzY2Q0MwMCcsICcjNjZDQzMzJywgJyM5OTAwQ0MnLFxuICAnIzk5MDBGRicsICcjOTkzM0NDJywgJyM5OTMzRkYnLCAnIzk5Q0MwMCcsICcjOTlDQzMzJywgJyNDQzAwMDAnLCAnI0NDMDAzMycsXG4gICcjQ0MwMDY2JywgJyNDQzAwOTknLCAnI0NDMDBDQycsICcjQ0MwMEZGJywgJyNDQzMzMDAnLCAnI0NDMzMzMycsICcjQ0MzMzY2JyxcbiAgJyNDQzMzOTknLCAnI0NDMzNDQycsICcjQ0MzM0ZGJywgJyNDQzY2MDAnLCAnI0NDNjYzMycsICcjQ0M5OTAwJywgJyNDQzk5MzMnLFxuICAnI0NDQ0MwMCcsICcjQ0NDQzMzJywgJyNGRjAwMDAnLCAnI0ZGMDAzMycsICcjRkYwMDY2JywgJyNGRjAwOTknLCAnI0ZGMDBDQycsXG4gICcjRkYwMEZGJywgJyNGRjMzMDAnLCAnI0ZGMzMzMycsICcjRkYzMzY2JywgJyNGRjMzOTknLCAnI0ZGMzNDQycsICcjRkYzM0ZGJyxcbiAgJyNGRjY2MDAnLCAnI0ZGNjYzMycsICcjRkY5OTAwJywgJyNGRjk5MzMnLCAnI0ZGQ0MwMCcsICcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICovXG5leHBvcnRzLmluc3RhbmNlcyA9IFtdO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICB2YXIgcHJldlRpbWU7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG4gIGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIGV4cG9ydHMuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHZhciBpbmRleCA9IGV4cG9ydHMuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBleHBvcnRzLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBpO1xuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhwb3J0cy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBleHBvcnRzLmluc3RhbmNlc1tpXTtcbiAgICBpbnN0YW5jZS5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuIiwiLypnbG9iYWwgQmxvYixGaWxlKi9cblxuLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzXG4gKi9cblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG52YXIgaXNCdWYgPSByZXF1aXJlKCcuL2lzLWJ1ZmZlcicpO1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciB3aXRoTmF0aXZlQmxvYiA9IHR5cGVvZiBCbG9iID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gJ1tvYmplY3QgQmxvYkNvbnN0cnVjdG9yXScpO1xudmFyIHdpdGhOYXRpdmVGaWxlID0gdHlwZW9mIEZpbGUgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBGaWxlICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEZpbGUpID09PSAnW29iamVjdCBGaWxlQ29uc3RydWN0b3JdJyk7XG5cbi8qKlxuICogUmVwbGFjZXMgZXZlcnkgQnVmZmVyIHwgQXJyYXlCdWZmZXIgaW4gcGFja2V0IHdpdGggYSBudW1iZXJlZCBwbGFjZWhvbGRlci5cbiAqIEFueXRoaW5nIHdpdGggYmxvYnMgb3IgZmlsZXMgc2hvdWxkIGJlIGZlZCB0aHJvdWdoIHJlbW92ZUJsb2JzIGJlZm9yZSBjb21pbmdcbiAqIGhlcmUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIHNvY2tldC5pbyBldmVudCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBkZWNvbnN0cnVjdGVkIHBhY2tldCBhbmQgbGlzdCBvZiBidWZmZXJzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpIHtcbiAgdmFyIGJ1ZmZlcnMgPSBbXTtcbiAgdmFyIHBhY2tldERhdGEgPSBwYWNrZXQuZGF0YTtcbiAgdmFyIHBhY2sgPSBwYWNrZXQ7XG4gIHBhY2suZGF0YSA9IF9kZWNvbnN0cnVjdFBhY2tldChwYWNrZXREYXRhLCBidWZmZXJzKTtcbiAgcGFjay5hdHRhY2htZW50cyA9IGJ1ZmZlcnMubGVuZ3RoOyAvLyBudW1iZXIgb2YgYmluYXJ5ICdhdHRhY2htZW50cydcbiAgcmV0dXJuIHtwYWNrZXQ6IHBhY2ssIGJ1ZmZlcnM6IGJ1ZmZlcnN9O1xufTtcblxuZnVuY3Rpb24gX2RlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgaWYgKCFkYXRhKSByZXR1cm4gZGF0YTtcblxuICBpZiAoaXNCdWYoZGF0YSkpIHtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSB7IF9wbGFjZWhvbGRlcjogdHJ1ZSwgbnVtOiBidWZmZXJzLmxlbmd0aCB9O1xuICAgIGJ1ZmZlcnMucHVzaChkYXRhKTtcbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH0gZWxzZSBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgIHZhciBuZXdEYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5ld0RhdGFbaV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdEYXRhO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiAhKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHZhciBuZXdEYXRhID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIG5ld0RhdGFba2V5XSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBSZWNvbnN0cnVjdHMgYSBiaW5hcnkgcGFja2V0IGZyb20gaXRzIHBsYWNlaG9sZGVyIHBhY2tldCBhbmQgYnVmZmVyc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBldmVudCBwYWNrZXQgd2l0aCBwbGFjZWhvbGRlcnNcbiAqIEBwYXJhbSB7QXJyYXl9IGJ1ZmZlcnMgLSBiaW5hcnkgYnVmZmVycyB0byBwdXQgaW4gcGxhY2Vob2xkZXIgcG9zaXRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY29uc3RydWN0ZWQgcGFja2V0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQsIGJ1ZmZlcnMpIHtcbiAgcGFja2V0LmRhdGEgPSBfcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LmRhdGEsIGJ1ZmZlcnMpO1xuICBwYWNrZXQuYXR0YWNobWVudHMgPSB1bmRlZmluZWQ7IC8vIG5vIGxvbmdlciB1c2VmdWxcbiAgcmV0dXJuIHBhY2tldDtcbn07XG5cbmZ1bmN0aW9uIF9yZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gIGlmICghZGF0YSkgcmV0dXJuIGRhdGE7XG5cbiAgaWYgKGRhdGEgJiYgZGF0YS5fcGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyc1tkYXRhLm51bV07IC8vIGFwcHJvcHJpYXRlIGJ1ZmZlciAoc2hvdWxkIGJlIG5hdHVyYWwgb3JkZXIgYW55d2F5KVxuICB9IGVsc2UgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFbaV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBkYXRhW2tleV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSByZW1vdmVzIEJsb2JzIG9yIEZpbGVzIGZyb20gZGF0YSB2aWFcbiAqIEZpbGVSZWFkZXIncyByZWFkQXNBcnJheUJ1ZmZlciBtZXRob2QuIFVzZWQgYmVmb3JlIGVuY29kaW5nXG4gKiBkYXRhIGFzIG1zZ3BhY2suIENhbGxzIGNhbGxiYWNrIHdpdGggdGhlIGJsb2JsZXNzIGRhdGEuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJlbW92ZUJsb2JzID0gZnVuY3Rpb24oZGF0YSwgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gX3JlbW92ZUJsb2JzKG9iaiwgY3VyS2V5LCBjb250YWluaW5nT2JqZWN0KSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBvYmo7XG5cbiAgICAvLyBjb252ZXJ0IGFueSBibG9iXG4gICAgaWYgKCh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICAgICAod2l0aE5hdGl2ZUZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSkpIHtcbiAgICAgIHBlbmRpbmdCbG9icysrO1xuXG4gICAgICAvLyBhc3luYyBmaWxlcmVhZGVyXG4gICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyAvLyB0aGlzLnJlc3VsdCA9PSBhcnJheWJ1ZmZlclxuICAgICAgICBpZiAoY29udGFpbmluZ09iamVjdCkge1xuICAgICAgICAgIGNvbnRhaW5pbmdPYmplY3RbY3VyS2V5XSA9IHRoaXMucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJsb2JsZXNzRGF0YSA9IHRoaXMucmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm90aGluZyBwZW5kaW5nIGl0cyBjYWxsYmFjayB0aW1lXG4gICAgICAgIGlmKCEgLS1wZW5kaW5nQmxvYnMpIHtcbiAgICAgICAgICBjYWxsYmFjayhibG9ibGVzc0RhdGEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKG9iaik7IC8vIGJsb2IgLT4gYXJyYXlidWZmZXJcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqKSkgeyAvLyBoYW5kbGUgYXJyYXlcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9yZW1vdmVCbG9icyhvYmpbaV0sIGksIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhaXNCdWYob2JqKSkgeyAvLyBhbmQgb2JqZWN0XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIF9yZW1vdmVCbG9icyhvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBwZW5kaW5nQmxvYnMgPSAwO1xuICB2YXIgYmxvYmxlc3NEYXRhID0gZGF0YTtcbiAgX3JlbW92ZUJsb2JzKGJsb2JsZXNzRGF0YSk7XG4gIGlmICghcGVuZGluZ0Jsb2JzKSB7XG4gICAgY2FsbGJhY2soYmxvYmxlc3NEYXRhKTtcbiAgfVxufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBiaW5hcnkgPSByZXF1aXJlKCcuL2JpbmFyeScpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG52YXIgaXNCdWYgPSByZXF1aXJlKCcuL2lzLWJ1ZmZlcicpO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnByb3RvY29sID0gNDtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZXMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnR5cGVzID0gW1xuICAnQ09OTkVDVCcsXG4gICdESVNDT05ORUNUJyxcbiAgJ0VWRU5UJyxcbiAgJ0FDSycsXG4gICdFUlJPUicsXG4gICdCSU5BUllfRVZFTlQnLFxuICAnQklOQVJZX0FDSydcbl07XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGNvbm5lY3RgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5DT05ORUNUID0gMDtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgZGlzY29ubmVjdGAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkRJU0NPTk5FQ1QgPSAxO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBldmVudGAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkVWRU5UID0gMjtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgYWNrYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQUNLID0gMztcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgZXJyb3JgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5FUlJPUiA9IDQ7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgJ2JpbmFyeSBldmVudCdcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQklOQVJZX0VWRU5UID0gNTtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgYmluYXJ5IGFja2AuIEZvciBhY2tzIHdpdGggYmluYXJ5IGFyZ3VtZW50cy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQklOQVJZX0FDSyA9IDY7XG5cbi8qKlxuICogRW5jb2RlciBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRW5jb2RlciA9IEVuY29kZXI7XG5cbi8qKlxuICogRGVjb2RlciBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5cbi8qKlxuICogQSBzb2NrZXQuaW8gRW5jb2RlciBpbnN0YW5jZVxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW5jb2RlcigpIHt9XG5cbnZhciBFUlJPUl9QQUNLRVQgPSBleHBvcnRzLkVSUk9SICsgJ1wiZW5jb2RlIGVycm9yXCInO1xuXG4vKipcbiAqIEVuY29kZSBhIHBhY2tldCBhcyBhIHNpbmdsZSBzdHJpbmcgaWYgbm9uLWJpbmFyeSwgb3IgYXMgYVxuICogYnVmZmVyIHNlcXVlbmNlLCBkZXBlbmRpbmcgb24gcGFja2V0IHR5cGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHBhY2tldCBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gaGFuZGxlIGVuY29kaW5ncyAobGlrZWx5IGVuZ2luZS53cml0ZSlcbiAqIEByZXR1cm4gQ2FsbHMgY2FsbGJhY2sgd2l0aCBBcnJheSBvZiBlbmNvZGluZ3NcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW5jb2Rlci5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24ob2JqLCBjYWxsYmFjayl7XG4gIGRlYnVnKCdlbmNvZGluZyBwYWNrZXQgJWonLCBvYmopO1xuXG4gIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gb2JqLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBvYmoudHlwZSkge1xuICAgIGVuY29kZUFzQmluYXJ5KG9iaiwgY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIHZhciBlbmNvZGluZyA9IGVuY29kZUFzU3RyaW5nKG9iaik7XG4gICAgY2FsbGJhY2soW2VuY29kaW5nXSk7XG4gIH1cbn07XG5cbi8qKlxuICogRW5jb2RlIHBhY2tldCBhcyBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7U3RyaW5nfSBlbmNvZGVkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGVBc1N0cmluZyhvYmopIHtcblxuICAvLyBmaXJzdCBpcyB0eXBlXG4gIHZhciBzdHIgPSAnJyArIG9iai50eXBlO1xuXG4gIC8vIGF0dGFjaG1lbnRzIGlmIHdlIGhhdmUgdGhlbVxuICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IG9iai50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gb2JqLnR5cGUpIHtcbiAgICBzdHIgKz0gb2JqLmF0dGFjaG1lbnRzICsgJy0nO1xuICB9XG5cbiAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVzcGFjZSBvdGhlciB0aGFuIGAvYFxuICAvLyB3ZSBhcHBlbmQgaXQgZm9sbG93ZWQgYnkgYSBjb21tYSBgLGBcbiAgaWYgKG9iai5uc3AgJiYgJy8nICE9PSBvYmoubnNwKSB7XG4gICAgc3RyICs9IG9iai5uc3AgKyAnLCc7XG4gIH1cblxuICAvLyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSB0aGUgaWRcbiAgaWYgKG51bGwgIT0gb2JqLmlkKSB7XG4gICAgc3RyICs9IG9iai5pZDtcbiAgfVxuXG4gIC8vIGpzb24gZGF0YVxuICBpZiAobnVsbCAhPSBvYmouZGF0YSkge1xuICAgIHZhciBwYXlsb2FkID0gdHJ5U3RyaW5naWZ5KG9iai5kYXRhKTtcbiAgICBpZiAocGF5bG9hZCAhPT0gZmFsc2UpIHtcbiAgICAgIHN0ciArPSBwYXlsb2FkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRVJST1JfUEFDS0VUO1xuICAgIH1cbiAgfVxuXG4gIGRlYnVnKCdlbmNvZGVkICVqIGFzICVzJywgb2JqLCBzdHIpO1xuICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiB0cnlTdHJpbmdpZnkoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN0cik7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5jb2RlIHBhY2tldCBhcyAnYnVmZmVyIHNlcXVlbmNlJyBieSByZW1vdmluZyBibG9icywgYW5kXG4gKiBkZWNvbnN0cnVjdGluZyBwYWNrZXQgaW50byBvYmplY3Qgd2l0aCBwbGFjZWhvbGRlcnMgYW5kXG4gKiBhIGxpc3Qgb2YgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9IGVuY29kZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVuY29kZUFzQmluYXJ5KG9iaiwgY2FsbGJhY2spIHtcblxuICBmdW5jdGlvbiB3cml0ZUVuY29kaW5nKGJsb2JsZXNzRGF0YSkge1xuICAgIHZhciBkZWNvbnN0cnVjdGlvbiA9IGJpbmFyeS5kZWNvbnN0cnVjdFBhY2tldChibG9ibGVzc0RhdGEpO1xuICAgIHZhciBwYWNrID0gZW5jb2RlQXNTdHJpbmcoZGVjb25zdHJ1Y3Rpb24ucGFja2V0KTtcbiAgICB2YXIgYnVmZmVycyA9IGRlY29uc3RydWN0aW9uLmJ1ZmZlcnM7XG5cbiAgICBidWZmZXJzLnVuc2hpZnQocGFjayk7IC8vIGFkZCBwYWNrZXQgaW5mbyB0byBiZWdpbm5pbmcgb2YgZGF0YSBsaXN0XG4gICAgY2FsbGJhY2soYnVmZmVycyk7IC8vIHdyaXRlIGFsbCB0aGUgYnVmZmVyc1xuICB9XG5cbiAgYmluYXJ5LnJlbW92ZUJsb2JzKG9iaiwgd3JpdGVFbmNvZGluZyk7XG59XG5cbi8qKlxuICogQSBzb2NrZXQuaW8gRGVjb2RlciBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVjb2RlclxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBEZWNvZGVyKCkge1xuICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAgd2l0aCBEZWNvZGVyLlxuICovXG5cbkVtaXR0ZXIoRGVjb2Rlci5wcm90b3R5cGUpO1xuXG4vKipcbiAqIERlY29kZXMgYW4gZW5jb2RlZCBwYWNrZXQgc3RyaW5nIGludG8gcGFja2V0IEpTT04uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG9iaiAtIGVuY29kZWQgcGFja2V0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5EZWNvZGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIHBhY2tldDtcbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcGFja2V0ID0gZGVjb2RlU3RyaW5nKG9iaik7XG4gICAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBwYWNrZXQudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IHBhY2tldC50eXBlKSB7IC8vIGJpbmFyeSBwYWNrZXQncyBqc29uXG4gICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpO1xuXG4gICAgICAvLyBubyBhdHRhY2htZW50cywgbGFiZWxlZCBiaW5hcnkgYnV0IG5vIGJpbmFyeSBkYXRhIHRvIGZvbGxvd1xuICAgICAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvci5yZWNvblBhY2suYXR0YWNobWVudHMgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBub24tYmluYXJ5IGZ1bGwgcGFja2V0XG4gICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0J1ZihvYmopIHx8IG9iai5iYXNlNjQpIHsgLy8gcmF3IGJpbmFyeSBkYXRhXG4gICAgaWYgKCF0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ290IGJpbmFyeSBkYXRhIHdoZW4gbm90IHJlY29uc3RydWN0aW5nIGEgcGFja2V0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhY2tldCA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YShvYmopO1xuICAgICAgaWYgKHBhY2tldCkgeyAvLyByZWNlaXZlZCBmaW5hbCBidWZmZXJcbiAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHR5cGU6ICcgKyBvYmopO1xuICB9XG59O1xuXG4vKipcbiAqIERlY29kZSBhIHBhY2tldCBTdHJpbmcgKEpTT04gZGF0YSlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZGVjb2RlU3RyaW5nKHN0cikge1xuICB2YXIgaSA9IDA7XG4gIC8vIGxvb2sgdXAgdHlwZVxuICB2YXIgcCA9IHtcbiAgICB0eXBlOiBOdW1iZXIoc3RyLmNoYXJBdCgwKSlcbiAgfTtcblxuICBpZiAobnVsbCA9PSBleHBvcnRzLnR5cGVzW3AudHlwZV0pIHtcbiAgICByZXR1cm4gZXJyb3IoJ3Vua25vd24gcGFja2V0IHR5cGUgJyArIHAudHlwZSk7XG4gIH1cblxuICAvLyBsb29rIHVwIGF0dGFjaG1lbnRzIGlmIHR5cGUgYmluYXJ5XG4gIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gcC50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gcC50eXBlKSB7XG4gICAgdmFyIGJ1ZiA9ICcnO1xuICAgIHdoaWxlIChzdHIuY2hhckF0KCsraSkgIT09ICctJykge1xuICAgICAgYnVmICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAoaSA9PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gICAgaWYgKGJ1ZiAhPSBOdW1iZXIoYnVmKSB8fCBzdHIuY2hhckF0KGkpICE9PSAnLScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBhdHRhY2htZW50cycpO1xuICAgIH1cbiAgICBwLmF0dGFjaG1lbnRzID0gTnVtYmVyKGJ1Zik7XG4gIH1cblxuICAvLyBsb29rIHVwIG5hbWVzcGFjZSAoaWYgYW55KVxuICBpZiAoJy8nID09PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgIHAubnNwID0gJyc7XG4gICAgd2hpbGUgKCsraSkge1xuICAgICAgdmFyIGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKCcsJyA9PT0gYykgYnJlYWs7XG4gICAgICBwLm5zcCArPSBjO1xuICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwLm5zcCA9ICcvJztcbiAgfVxuXG4gIC8vIGxvb2sgdXAgaWRcbiAgdmFyIG5leHQgPSBzdHIuY2hhckF0KGkgKyAxKTtcbiAgaWYgKCcnICE9PSBuZXh0ICYmIE51bWJlcihuZXh0KSA9PSBuZXh0KSB7XG4gICAgcC5pZCA9ICcnO1xuICAgIHdoaWxlICgrK2kpIHtcbiAgICAgIHZhciBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChudWxsID09IGMgfHwgTnVtYmVyKGMpICE9IGMpIHtcbiAgICAgICAgLS1pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHAuaWQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gICAgcC5pZCA9IE51bWJlcihwLmlkKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAganNvbiBkYXRhXG4gIGlmIChzdHIuY2hhckF0KCsraSkpIHtcbiAgICB2YXIgcGF5bG9hZCA9IHRyeVBhcnNlKHN0ci5zdWJzdHIoaSkpO1xuICAgIHZhciBpc1BheWxvYWRWYWxpZCA9IHBheWxvYWQgIT09IGZhbHNlICYmIChwLnR5cGUgPT09IGV4cG9ydHMuRVJST1IgfHwgaXNBcnJheShwYXlsb2FkKSk7XG4gICAgaWYgKGlzUGF5bG9hZFZhbGlkKSB7XG4gICAgICBwLmRhdGEgPSBwYXlsb2FkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJyb3IoJ2ludmFsaWQgcGF5bG9hZCcpO1xuICAgIH1cbiAgfVxuXG4gIGRlYnVnKCdkZWNvZGVkICVzIGFzICVqJywgc3RyLCBwKTtcbiAgcmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGVhbGxvY2F0ZXMgYSBwYXJzZXIncyByZXNvdXJjZXNcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkRlY29kZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMucmVjb25zdHJ1Y3Rvci5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQSBtYW5hZ2VyIG9mIGEgYmluYXJ5IGV2ZW50J3MgJ2J1ZmZlciBzZXF1ZW5jZScuIFNob3VsZFxuICogYmUgY29uc3RydWN0ZWQgd2hlbmV2ZXIgYSBwYWNrZXQgb2YgdHlwZSBCSU5BUllfRVZFTlQgaXNcbiAqIGRlY29kZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QmluYXJ5UmVjb25zdHJ1Y3Rvcn0gaW5pdGlhbGl6ZWQgcmVjb25zdHJ1Y3RvclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpIHtcbiAgdGhpcy5yZWNvblBhY2sgPSBwYWNrZXQ7XG4gIHRoaXMuYnVmZmVycyA9IFtdO1xufVxuXG4vKipcbiAqIE1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBiaW5hcnkgZGF0YSByZWNlaXZlZCBmcm9tIGNvbm5lY3Rpb25cbiAqIGFmdGVyIGEgQklOQVJZX0VWRU5UIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlciB8IEFycmF5QnVmZmVyfSBiaW5EYXRhIC0gdGhlIHJhdyBiaW5hcnkgZGF0YSByZWNlaXZlZFxuICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gcmV0dXJucyBudWxsIGlmIG1vcmUgYmluYXJ5IGRhdGEgaXMgZXhwZWN0ZWQgb3JcbiAqICAgYSByZWNvbnN0cnVjdGVkIHBhY2tldCBvYmplY3QgaWYgYWxsIGJ1ZmZlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQmluYXJ5UmVjb25zdHJ1Y3Rvci5wcm90b3R5cGUudGFrZUJpbmFyeURhdGEgPSBmdW5jdGlvbihiaW5EYXRhKSB7XG4gIHRoaXMuYnVmZmVycy5wdXNoKGJpbkRhdGEpO1xuICBpZiAodGhpcy5idWZmZXJzLmxlbmd0aCA9PT0gdGhpcy5yZWNvblBhY2suYXR0YWNobWVudHMpIHsgLy8gZG9uZSB3aXRoIGJ1ZmZlciBsaXN0XG4gICAgdmFyIHBhY2tldCA9IGJpbmFyeS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTtcbiAgICB0aGlzLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICByZXR1cm4gcGFja2V0O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBDbGVhbnMgdXAgYmluYXJ5IHBhY2tldCByZWNvbnN0cnVjdGlvbiB2YXJpYWJsZXMuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQmluYXJ5UmVjb25zdHJ1Y3Rvci5wcm90b3R5cGUuZmluaXNoZWRSZWNvbnN0cnVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlY29uUGFjayA9IG51bGw7XG4gIHRoaXMuYnVmZmVycyA9IFtdO1xufTtcblxuZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogZXhwb3J0cy5FUlJPUixcbiAgICBkYXRhOiAncGFyc2VyIGVycm9yOiAnICsgbXNnXG4gIH07XG59XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gaXNCdWY7XG5cbnZhciB3aXRoTmF0aXZlQnVmZmVyID0gdHlwZW9mIEJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgQnVmZmVyLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nO1xudmFyIHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIGlzVmlldyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKSA6IChvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgb2JqIGlzIGEgYnVmZmVyIG9yIGFuIGFycmF5YnVmZmVyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzQnVmKG9iaikge1xuICByZXR1cm4gKHdpdGhOYXRpdmVCdWZmZXIgJiYgQnVmZmVyLmlzQnVmZmVyKG9iaikpIHx8XG4gICAgICAgICAgKHdpdGhOYXRpdmVBcnJheUJ1ZmZlciAmJiAob2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgaXNWaWV3KG9iaikpKTtcbn1cbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VzID0gW107XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIHZhciBwcmV2VGltZTtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdmFyIGluZGV4ID0gZXhwb3J0cy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGV4cG9ydHMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIGk7XG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleHBvcnRzLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnN0YW5jZSA9IGV4cG9ydHMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdG9BcnJheVxuXG5mdW5jdGlvbiB0b0FycmF5KGxpc3QsIGluZGV4KSB7XG4gICAgdmFyIGFycmF5ID0gW11cblxuICAgIGluZGV4ID0gaW5kZXggfHwgMFxuXG4gICAgZm9yICh2YXIgaSA9IGluZGV4IHx8IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2kgLSBpbmRleF0gPSBsaXN0W2ldXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXotXycuc3BsaXQoJycpXG4gICwgbGVuZ3RoID0gNjRcbiAgLCBtYXAgPSB7fVxuICAsIHNlZWQgPSAwXG4gICwgaSA9IDBcbiAgLCBwcmV2O1xuXG4vKipcbiAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHNwZWNpZmllZCBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG51bSBUaGUgbnVtYmVyIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBudW1iZXIuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBlbmNvZGUobnVtKSB7XG4gIHZhciBlbmNvZGVkID0gJyc7XG5cbiAgZG8ge1xuICAgIGVuY29kZWQgPSBhbHBoYWJldFtudW0gJSBsZW5ndGhdICsgZW5jb2RlZDtcbiAgICBudW0gPSBNYXRoLmZsb29yKG51bSAvIGxlbmd0aCk7XG4gIH0gd2hpbGUgKG51bSA+IDApO1xuXG4gIHJldHVybiBlbmNvZGVkO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgaW50ZWdlciB2YWx1ZSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBpbnRlZ2VyIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZSBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gIHZhciBkZWNvZGVkID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVjb2RlZCA9IGRlY29kZWQgKiBsZW5ndGggKyBtYXBbc3RyLmNoYXJBdChpKV07XG4gIH1cblxuICByZXR1cm4gZGVjb2RlZDtcbn1cblxuLyoqXG4gKiBZZWFzdDogQSB0aW55IGdyb3dpbmcgaWQgZ2VuZXJhdG9yLlxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IEEgdW5pcXVlIGlkLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24geWVhc3QoKSB7XG4gIHZhciBub3cgPSBlbmNvZGUoK25ldyBEYXRlKCkpO1xuXG4gIGlmIChub3cgIT09IHByZXYpIHJldHVybiBzZWVkID0gMCwgcHJldiA9IG5vdztcbiAgcmV0dXJuIG5vdyArJy4nKyBlbmNvZGUoc2VlZCsrKTtcbn1cblxuLy9cbi8vIE1hcCBlYWNoIGNoYXJhY3RlciB0byBpdHMgaW5kZXguXG4vL1xuZm9yICg7IGkgPCBsZW5ndGg7IGkrKykgbWFwW2FscGhhYmV0W2ldXSA9IGk7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIGB5ZWFzdGAsIGBlbmNvZGVgIGFuZCBgZGVjb2RlYCBmdW5jdGlvbnMuXG4vL1xueWVhc3QuZW5jb2RlID0gZW5jb2RlO1xueWVhc3QuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMgPSB5ZWFzdDtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=