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
 * constructor initialize:
 * (status, credentials, socket).
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
    console.log('test');
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
  client.socket.emit('track_me');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9qc3gvYW5hbHl0aWNzL0NsaWVudC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL2pzeC9hbmFseXRpY3MvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL2pzeC9hbmFseXRpY3Mvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9hcnJheWJ1ZmZlci5zbGljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2Jsb2IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1pbmhlcml0L2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIveG1saHR0cHJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIva2V5cy5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi91dGY4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2hhcy1iaW5hcnkyL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2hhcy1iaW5hcnkyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2hhcy1jb3JzL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvaW5kZXhvZi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3BhcnNlcXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvb24uanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvc29ja2V0LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL3VybC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2lzLWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy90by1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkNsaWVudCIsInN0YXR1cyIsIm9ubGluZSIsImNyZWRlbnRpYWxzIiwidXVpZCIsInRva2VuIiwic29ja2V0IiwicHJvdG90eXBlIiwic2V0dXBTb2NrZXRMaXN0ZW5lcnMiLCJjbGllbnQiLCJvbiIsImRhdGEiLCJhdXRoZW50aWNhdGlvbiIsImNiIiwic3RvcmFnZSIsInNhdmVVdWlkQW5kVG9rZW4iLCJ3ZWJzb2NrZXQiLCJ3aW5kb3ciLCJvcmlnaW4iLCJpbmNsdWRlcyIsImlvIiwiY29ubmVjdCIsInNlY3VyZSIsInBvcnQiLCJjb25zb2xlIiwibG9nIiwidHJhbnNwb3J0cyIsInNvY2tldElEIiwiY29uZmlnIiwiZW1pdCIsImlkZW50IiwiRXJyb3IiLCJlcnJvciIsIkNvb2tpZXMiLCJyZXF1aXJlIiwiU3RvcmFnZSIsImdldCIsInNldCIsImV4cGlyZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWZ0ZXIiLCJjb3VudCIsImNhbGxiYWNrIiwiZXJyX2NiIiwiYmFpbCIsIm5vb3AiLCJwcm94eSIsImVyciIsInJlc3VsdCIsImFycmF5YnVmZmVyIiwic3RhcnQiLCJlbmQiLCJieXRlcyIsImJ5dGVMZW5ndGgiLCJzbGljZSIsIkFycmF5QnVmZmVyIiwiYWJ2IiwiVWludDhBcnJheSIsImkiLCJpaSIsImJ1ZmZlciIsIkJhY2tvZmYiLCJvcHRzIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiY2hhcnMiLCJsb29rdXAiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiZW5jb2RlIiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiZGVjb2RlIiwiYnVmZmVyTGVuZ3RoIiwicCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwidG9CeXRlQXJyYXkiLCJmcm9tQnl0ZUFycmF5IiwicmV2TG9va3VwIiwiQXJyIiwiQXJyYXkiLCJjb2RlIiwiZ2V0TGVucyIsImI2NCIsInZhbGlkTGVuIiwiaW5kZXhPZiIsInBsYWNlSG9sZGVyc0xlbiIsImxlbnMiLCJfYnl0ZUxlbmd0aCIsInRtcCIsImFyciIsImN1ckJ5dGUiLCJ0cmlwbGV0VG9CYXNlNjQiLCJudW0iLCJlbmNvZGVDaHVuayIsInVpbnQ4Iiwib3V0cHV0IiwicHVzaCIsImpvaW4iLCJleHRyYUJ5dGVzIiwicGFydHMiLCJtYXhDaHVua0xlbmd0aCIsImxlbjIiLCJCbG9iQnVpbGRlciIsIldlYktpdEJsb2JCdWlsZGVyIiwiTVNCbG9iQnVpbGRlciIsIk1vekJsb2JCdWlsZGVyIiwiYmxvYlN1cHBvcnRlZCIsImEiLCJCbG9iIiwic2l6ZSIsImUiLCJibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXciLCJiIiwiYmxvYkJ1aWxkZXJTdXBwb3J0ZWQiLCJhcHBlbmQiLCJnZXRCbG9iIiwibWFwQXJyYXlCdWZmZXJWaWV3cyIsImFyeSIsIm1hcCIsImNodW5rIiwiYnVmIiwiY29weSIsImJ5dGVPZmZzZXQiLCJCbG9iQnVpbGRlckNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImJiIiwiZm9yRWFjaCIsInBhcnQiLCJ0eXBlIiwiQmxvYkNvbnN0cnVjdG9yIiwidW5kZWZpbmVkIiwiaWVlZTc1NCIsImlzQXJyYXkiLCJCdWZmZXIiLCJTbG93QnVmZmVyIiwiSU5TUEVDVF9NQVhfQllURVMiLCJUWVBFRF9BUlJBWV9TVVBQT1JUIiwiZ2xvYmFsIiwidHlwZWRBcnJheVN1cHBvcnQiLCJrTWF4TGVuZ3RoIiwiX19wcm90b19fIiwiZm9vIiwic3ViYXJyYXkiLCJjcmVhdGVCdWZmZXIiLCJ0aGF0IiwiUmFuZ2VFcnJvciIsImFyZyIsImVuY29kaW5nT3JPZmZzZXQiLCJhbGxvY1Vuc2FmZSIsImZyb20iLCJwb29sU2l6ZSIsIl9hdWdtZW50IiwidmFsdWUiLCJUeXBlRXJyb3IiLCJmcm9tQXJyYXlCdWZmZXIiLCJmcm9tU3RyaW5nIiwiZnJvbU9iamVjdCIsIlN5bWJvbCIsInNwZWNpZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImFzc2VydFNpemUiLCJhbGxvYyIsImZpbGwiLCJlbmNvZGluZyIsImNoZWNrZWQiLCJhbGxvY1Vuc2FmZVNsb3ciLCJzdHJpbmciLCJpc0VuY29kaW5nIiwiYWN0dWFsIiwid3JpdGUiLCJmcm9tQXJyYXlMaWtlIiwiYXJyYXkiLCJvYmoiLCJpc0J1ZmZlciIsImlzbmFuIiwidG9TdHJpbmciLCJfaXNCdWZmZXIiLCJjb21wYXJlIiwieCIsInkiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImNvbmNhdCIsImxpc3QiLCJwb3MiLCJpc1ZpZXciLCJsb3dlcmVkQ2FzZSIsInV0ZjhUb0J5dGVzIiwiYmFzZTY0VG9CeXRlcyIsInNsb3dUb1N0cmluZyIsImhleFNsaWNlIiwidXRmOFNsaWNlIiwiYXNjaWlTbGljZSIsImxhdGluMVNsaWNlIiwiYmFzZTY0U2xpY2UiLCJ1dGYxNmxlU2xpY2UiLCJzd2FwIiwibiIsIm0iLCJzd2FwMTYiLCJzd2FwMzIiLCJzd2FwNjQiLCJhcmd1bWVudHMiLCJhcHBseSIsImVxdWFscyIsImluc3BlY3QiLCJzdHIiLCJtYXRjaCIsInRhcmdldCIsInRoaXNTdGFydCIsInRoaXNFbmQiLCJ0aGlzQ29weSIsInRhcmdldENvcHkiLCJiaWRpcmVjdGlvbmFsSW5kZXhPZiIsInZhbCIsImRpciIsImlzTmFOIiwiYXJyYXlJbmRleE9mIiwiY2FsbCIsImxhc3RJbmRleE9mIiwiaW5kZXhTaXplIiwiYXJyTGVuZ3RoIiwidmFsTGVuZ3RoIiwicmVhZCIsInJlYWRVSW50MTZCRSIsImZvdW5kSW5kZXgiLCJmb3VuZCIsImoiLCJoZXhXcml0ZSIsIm9mZnNldCIsIk51bWJlciIsInJlbWFpbmluZyIsInN0ckxlbiIsInBhcnNlZCIsInBhcnNlSW50Iiwic3Vic3RyIiwidXRmOFdyaXRlIiwiYmxpdEJ1ZmZlciIsImFzY2lpV3JpdGUiLCJhc2NpaVRvQnl0ZXMiLCJsYXRpbjFXcml0ZSIsImJhc2U2NFdyaXRlIiwidWNzMldyaXRlIiwidXRmMTZsZVRvQnl0ZXMiLCJpc0Zpbml0ZSIsInRvSlNPTiIsIl9hcnIiLCJyZXMiLCJmaXJzdEJ5dGUiLCJjb2RlUG9pbnQiLCJieXRlc1BlclNlcXVlbmNlIiwic2Vjb25kQnl0ZSIsInRoaXJkQnl0ZSIsImZvdXJ0aEJ5dGUiLCJ0ZW1wQ29kZVBvaW50IiwiZGVjb2RlQ29kZVBvaW50c0FycmF5IiwiTUFYX0FSR1VNRU5UU19MRU5HVEgiLCJjb2RlUG9pbnRzIiwiZnJvbUNoYXJDb2RlIiwicmV0Iiwib3V0IiwidG9IZXgiLCJuZXdCdWYiLCJzbGljZUxlbiIsImNoZWNrT2Zmc2V0IiwiZXh0IiwicmVhZFVJbnRMRSIsIm5vQXNzZXJ0IiwibXVsIiwicmVhZFVJbnRCRSIsInJlYWRVSW50OCIsInJlYWRVSW50MTZMRSIsInJlYWRVSW50MzJMRSIsInJlYWRVSW50MzJCRSIsInJlYWRJbnRMRSIsInJlYWRJbnRCRSIsInJlYWRJbnQ4IiwicmVhZEludDE2TEUiLCJyZWFkSW50MTZCRSIsInJlYWRJbnQzMkxFIiwicmVhZEludDMyQkUiLCJyZWFkRmxvYXRMRSIsInJlYWRGbG9hdEJFIiwicmVhZERvdWJsZUxFIiwicmVhZERvdWJsZUJFIiwiY2hlY2tJbnQiLCJ3cml0ZVVJbnRMRSIsIm1heEJ5dGVzIiwid3JpdGVVSW50QkUiLCJ3cml0ZVVJbnQ4Iiwib2JqZWN0V3JpdGVVSW50MTYiLCJsaXR0bGVFbmRpYW4iLCJ3cml0ZVVJbnQxNkxFIiwid3JpdGVVSW50MTZCRSIsIm9iamVjdFdyaXRlVUludDMyIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVUludDMyQkUiLCJ3cml0ZUludExFIiwibGltaXQiLCJzdWIiLCJ3cml0ZUludEJFIiwid3JpdGVJbnQ4Iiwid3JpdGVJbnQxNkxFIiwid3JpdGVJbnQxNkJFIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwiY2hlY2tJRUVFNzU0Iiwid3JpdGVGbG9hdCIsIndyaXRlRmxvYXRMRSIsIndyaXRlRmxvYXRCRSIsIndyaXRlRG91YmxlIiwid3JpdGVEb3VibGVMRSIsIndyaXRlRG91YmxlQkUiLCJ0YXJnZXRTdGFydCIsIklOVkFMSURfQkFTRTY0X1JFIiwiYmFzZTY0Y2xlYW4iLCJzdHJpbmd0cmltIiwicmVwbGFjZSIsInRyaW0iLCJ1bml0cyIsIkluZmluaXR5IiwibGVhZFN1cnJvZ2F0ZSIsImJ5dGVBcnJheSIsImMiLCJoaSIsImxvIiwic3JjIiwiZHN0IiwiZm4iLCJhcmdzIiwiRW1pdHRlciIsIm1peGluIiwia2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX2NhbGxiYWNrcyIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJzcGxpY2UiLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsInBhcnNlciIsImRlYnVnIiwiaW5kZXgiLCJwYXJzZXVyaSIsInBhcnNlcXMiLCJTb2NrZXQiLCJ1cmkiLCJob3N0bmFtZSIsImhvc3QiLCJwcm90b2NvbCIsInF1ZXJ5IiwibG9jYXRpb24iLCJhZ2VudCIsInVwZ3JhZGUiLCJwYXRoIiwiZm9yY2VKU09OUCIsImpzb25wIiwiZm9yY2VCYXNlNjQiLCJlbmFibGVzWERSIiwidGltZXN0YW1wUGFyYW0iLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRyYW5zcG9ydE9wdGlvbnMiLCJyZWFkeVN0YXRlIiwid3JpdGVCdWZmZXIiLCJwcmV2QnVmZmVyTGVuIiwicG9saWN5UG9ydCIsInJlbWVtYmVyVXBncmFkZSIsImJpbmFyeVR5cGUiLCJvbmx5QmluYXJ5VXBncmFkZXMiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsInRocmVzaG9sZCIsInBmeCIsInBhc3NwaHJhc2UiLCJjZXJ0IiwiY2EiLCJjaXBoZXJzIiwicmVqZWN0VW5hdXRob3JpemVkIiwiZm9yY2VOb2RlIiwiaXNSZWFjdE5hdGl2ZSIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJzZWxmIiwiZXh0cmFIZWFkZXJzIiwia2V5cyIsImxvY2FsQWRkcmVzcyIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdJbnRlcnZhbFRpbWVyIiwicGluZ1RpbWVvdXRUaW1lciIsIm9wZW4iLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJUcmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJuYW1lIiwiY2xvbmUiLCJFSU8iLCJ0cmFuc3BvcnQiLCJzaWQiLCJyZXF1ZXN0VGltZW91dCIsInByb3RvY29scyIsIm8iLCJoYXNPd25Qcm9wZXJ0eSIsInNldFRpbWVvdXQiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJwYWNrZXQiLCJvblBhY2tldCIsIm9uRXJyb3IiLCJvbkNsb3NlIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJ1cGdyYWRlTG9zZXNCaW5hcnkiLCJzdXBwb3J0c0JpbmFyeSIsInNlbmQiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImNsZWFudXAiLCJmbHVzaCIsImZyZWV6ZVRyYW5zcG9ydCIsImNsb3NlIiwib25lcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbmNsb3NlIiwib251cGdyYWRlIiwidG8iLCJvbk9wZW4iLCJsIiwib25IYW5kc2hha2UiLCJKU09OIiwicGFyc2UiLCJzZXRQaW5nIiwiZmlsdGVyVXBncmFkZXMiLCJvbkhlYXJ0YmVhdCIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJwaW5nIiwic2VuZFBhY2tldCIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJ3YWl0Rm9yVXBncmFkZSIsImNsZWFudXBBbmRDbG9zZSIsInJlYXNvbiIsImRlc2MiLCJmaWx0ZXJlZFVwZ3JhZGVzIiwiZGVzY3JpcHRpb24iLCJkb09wZW4iLCJkb0Nsb3NlIiwicGFja2V0cyIsIm9uRGF0YSIsImRlY29kZVBhY2tldCIsIlhNTEh0dHBSZXF1ZXN0IiwiWEhSIiwiSlNPTlAiLCJwb2xsaW5nIiwieGhyIiwieGQiLCJ4cyIsImlzU1NMIiwieGRvbWFpbiIsInhzY2hlbWUiLCJQb2xsaW5nIiwiaW5oZXJpdCIsIkpTT05QUG9sbGluZyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiZW1wdHkiLCJnbG9iIiwiX19fZWlvIiwic2NyaXB0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZm9ybSIsImlmcmFtZSIsImRvUG9sbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwiaW5zZXJ0QXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluc2VydEJlZm9yZSIsImhlYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpc1VBZ2Vja28iLCJ0ZXN0IiwidXNlckFnZW50IiwiZG9Xcml0ZSIsImFyZWEiLCJpZnJhbWVJZCIsImNsYXNzTmFtZSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWV0aG9kIiwic2V0QXR0cmlidXRlIiwiYWN0aW9uIiwiY29tcGxldGUiLCJpbml0SWZyYW1lIiwiaHRtbCIsInN1Ym1pdCIsImF0dGFjaEV2ZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwiUmVxdWVzdCIsInJlcXVlc3QiLCJpc0JpbmFyeSIsInJlcSIsInNlbmRYaHIiLCJwb2xsWGhyIiwiY3JlYXRlIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsImhhc1hEUiIsIm9uTG9hZCIsInJlc3BvbnNlVGV4dCIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJvblN1Y2Nlc3MiLCJmcm9tRXJyb3IiLCJhYm9ydCIsInJlc3BvbnNlIiwiWERvbWFpblJlcXVlc3QiLCJ1bmxvYWRIYW5kbGVyIiwidGVybWluYXRpb25FdmVudCIsInllYXN0IiwiaGFzWEhSMiIsInBvbGwiLCJvblBhdXNlIiwidG90YWwiLCJkZWNvZGVQYXlsb2FkIiwiY2FsbGJhY2tmbiIsImVuY29kZVBheWxvYWQiLCJzY2hlbWEiLCJpcHY2IiwiQnJvd3NlcldlYlNvY2tldCIsIk5vZGVXZWJTb2NrZXQiLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJXZWJTb2NrZXRJbXBsIiwiV1MiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJjaGVjayIsImhlYWRlcnMiLCJ3cyIsInN1cHBvcnRzIiwiYmluYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJvbm1lc3NhZ2UiLCJldiIsImVuY29kZVBhY2tldCIsImRvbmUiLCJoYXNDT1JTIiwiZm9ybWF0QXJncyIsInNhdmUiLCJsb2FkIiwidXNlQ29sb3JzIiwiY2hyb21lIiwibG9jYWwiLCJsb2NhbHN0b3JhZ2UiLCJjb2xvcnMiLCJwcm9jZXNzIiwiZG9jdW1lbnRFbGVtZW50IiwiV2Via2l0QXBwZWFyYW5jZSIsImZpcmVidWciLCJleGNlcHRpb24iLCJ0YWJsZSIsIlJlZ0V4cCIsIiQxIiwiZm9ybWF0dGVycyIsInYiLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwibmFtZXNwYWNlIiwiaHVtYW5pemUiLCJkaWZmIiwiY29sb3IiLCJsYXN0QyIsIkZ1bmN0aW9uIiwibmFtZXNwYWNlcyIsInJlbW92ZUl0ZW0iLCJyIiwiZW52IiwiREVCVUciLCJlbmFibGUiLCJsb2NhbFN0b3JhZ2UiLCJjcmVhdGVEZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGVkIiwiaW5zdGFuY2VzIiwibmFtZXMiLCJza2lwcyIsInNlbGVjdENvbG9yIiwiaGFzaCIsImFicyIsInByZXZUaW1lIiwiY3VyciIsIkRhdGUiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImxvZ0ZuIiwiYmluZCIsImRlc3Ryb3kiLCJpbml0Iiwic3BsaXQiLCJpbnN0YW5jZSIsInN0YWNrIiwiaGFzQmluYXJ5Iiwic2xpY2VCdWZmZXIiLCJ1dGY4IiwiYmFzZTY0ZW5jb2RlciIsImlzQW5kcm9pZCIsImlzUGhhbnRvbUpTIiwiZG9udFNlbmRCbG9icyIsInBvbmciLCJwYWNrZXRzbGlzdCIsInV0ZjhlbmNvZGUiLCJlbmNvZGVBcnJheUJ1ZmZlciIsImVuY29kZUJsb2IiLCJlbmNvZGVCYXNlNjRPYmplY3QiLCJlbmNvZGVkIiwic3RyaWN0IiwiZW5jb2RlQmFzZTY0UGFja2V0IiwiY29udGVudEFycmF5IiwicmVzdWx0QnVmZmVyIiwiZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIiLCJmciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImJsb2IiLCJyZWFkQXNEYXRhVVJMIiwiYjY0ZGF0YSIsInR5cGVkIiwiYmFzaWMiLCJidG9hIiwidXRmOGRlY29kZSIsImNoYXJBdCIsImRlY29kZUJhc2U2NFBhY2tldCIsInRyeURlY29kZSIsImFzQXJyYXkiLCJyZXN0IiwiZW5jb2RlUGF5bG9hZEFzQmxvYiIsImVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyIiwic2V0TGVuZ3RoSGVhZGVyIiwiZW5jb2RlT25lIiwiZG9uZUNhbGxiYWNrIiwicmVzdWx0cyIsImVhY2giLCJuZXh0IiwiZWFjaFdpdGhJbmRleCIsImVsIiwiZGVjb2RlUGF5bG9hZEFzQmluYXJ5IiwiY2hyIiwiZW5jb2RlZFBhY2tldHMiLCJ0b3RhbExlbmd0aCIsInJlZHVjZSIsImFjYyIsInJlc3VsdEFycmF5IiwiYnVmZmVySW5kZXgiLCJpc1N0cmluZyIsImFiIiwidmlldyIsImxlblN0ciIsImJpbmFyeUlkZW50aWZpZXIiLCJsZW5ndGhBcnkiLCJidWZmZXJUYWlsIiwiYnVmZmVycyIsInRhaWxBcnJheSIsIm1zZ0xlbmd0aCIsImhhcyIsInN0cmluZ0Zyb21DaGFyQ29kZSIsInVjczJkZWNvZGUiLCJjb3VudGVyIiwiZXh0cmEiLCJ1Y3MyZW5jb2RlIiwiY2hlY2tTY2FsYXJWYWx1ZSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlQnl0ZSIsImVuY29kZUNvZGVQb2ludCIsInN5bWJvbCIsImJ5dGVTdHJpbmciLCJyZWFkQ29udGludWF0aW9uQnl0ZSIsImJ5dGVJbmRleCIsImJ5dGVDb3VudCIsImNvbnRpbnVhdGlvbkJ5dGUiLCJkZWNvZGVTeW1ib2wiLCJieXRlMSIsImJ5dGUyIiwiYnl0ZTMiLCJieXRlNCIsInZlcnNpb24iLCJ3aXRoTmF0aXZlQmxvYiIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsImlzTEUiLCJtTGVuIiwibkJ5dGVzIiwiZUxlbiIsImVNYXgiLCJlQmlhcyIsIm5CaXRzIiwiZCIsInMiLCJOYU4iLCJydCIsIkxOMiIsImZhY3RvcnkiLCJyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIiLCJkZWZpbmUiLCJPbGRDb29raWVzIiwiYXBpIiwibm9Db25mbGljdCIsImV4dGVuZCIsImF0dHJpYnV0ZXMiLCJjb252ZXJ0ZXIiLCJkZWZhdWx0cyIsInNldE1pbGxpc2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInRvVVRDU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwic3RyaW5naWZpZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlTmFtZSIsImNvb2tpZSIsImNvb2tpZXMiLCJyZGVjb2RlIiwianNvbiIsImdldEpTT04iLCJyZW1vdmUiLCJ3aXRoQ29udmVydGVyIiwiaCIsImxvbmciLCJmbXRMb25nIiwiZm10U2hvcnQiLCJleGVjIiwicGFyc2VGbG9hdCIsInJvdW5kIiwicGx1cmFsIiwiY2VpbCIsInFzIiwicXJ5IiwicGFpcnMiLCJwYWlyIiwicmUiLCJzb3VyY2UiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInJ1biIsIm5leHRUaWNrIiwiSXRlbSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9ucyIsImFkZExpc3RlbmVyIiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsInVtYXNrIiwidXJsIiwiTWFuYWdlciIsImNhY2hlIiwibWFuYWdlcnMiLCJzYW1lTmFtZXNwYWNlIiwibnNwcyIsIm5ld0Nvbm5lY3Rpb24iLCJmb3JjZU5ldyIsIm11bHRpcGxleCIsImVpbyIsInN1YnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsInJlY29ubmVjdGlvbkRlbGF5IiwicmVjb25uZWN0aW9uRGVsYXlNYXgiLCJyYW5kb21pemF0aW9uRmFjdG9yIiwiYmFja29mZiIsImNvbm5lY3RpbmciLCJsYXN0UGluZyIsInBhY2tldEJ1ZmZlciIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiYXV0b0Nvbm5lY3QiLCJlbWl0QWxsIiwibnNwIiwidXBkYXRlU29ja2V0SWRzIiwiZ2VuZXJhdGVJZCIsImVuZ2luZSIsIl9yZWNvbm5lY3Rpb24iLCJfcmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJyZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJza2lwUmVjb25uZWN0Iiwib3BlblN1YiIsImVycm9yU3ViIiwidGltZXIiLCJvbnBpbmciLCJvbnBvbmciLCJvbmRhdGEiLCJhZGQiLCJvbmRlY29kZWQiLCJvbkNvbm5lY3RpbmciLCJwcm9jZXNzUGFja2V0UXVldWUiLCJwYWNrIiwic3Vic0xlbmd0aCIsImRpc2Nvbm5lY3QiLCJkZWxheSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsInRvQXJyYXkiLCJoYXNCaW4iLCJldmVudHMiLCJjb25uZWN0X2Vycm9yIiwiY29ubmVjdF90aW1lb3V0IiwicmVjb25uZWN0X2F0dGVtcHQiLCJyZWNvbm5lY3RfZmFpbGVkIiwicmVjb25uZWN0X2Vycm9yIiwiaWRzIiwiYWNrcyIsInJlY2VpdmVCdWZmZXIiLCJzZW5kQnVmZmVyIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdGVkIiwiZmxhZ3MiLCJzdWJFdmVudHMiLCJCSU5BUllfRVZFTlQiLCJFVkVOVCIsInBvcCIsIkNPTk5FQ1QiLCJvbnBhY2tldCIsInJvb3ROYW1lc3BhY2VFcnJvciIsIkVSUk9SIiwib25jb25uZWN0Iiwib25ldmVudCIsIkFDSyIsIm9uYWNrIiwiQklOQVJZX0FDSyIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJhY2siLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwibG9jIiwiaHJlZiIsImlzQnVmIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrZXREYXRhIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm5ld0RhdGEiLCJyZWNvbnN0cnVjdFBhY2tldCIsIl9yZWNvbnN0cnVjdFBhY2tldCIsInJlbW92ZUJsb2JzIiwiX3JlbW92ZUJsb2JzIiwiY3VyS2V5IiwiY29udGFpbmluZ09iamVjdCIsInBlbmRpbmdCbG9icyIsImZpbGVSZWFkZXIiLCJibG9ibGVzc0RhdGEiLCJ0eXBlcyIsIkVSUk9SX1BBQ0tFVCIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJwYXlsb2FkIiwidHJ5U3RyaW5naWZ5Iiwid3JpdGVFbmNvZGluZyIsImRlY29uc3RydWN0aW9uIiwicmVjb25zdHJ1Y3RvciIsImRlY29kZVN0cmluZyIsIkJpbmFyeVJlY29uc3RydWN0b3IiLCJyZWNvblBhY2siLCJ0YWtlQmluYXJ5RGF0YSIsInRyeVBhcnNlIiwiaXNQYXlsb2FkVmFsaWQiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwiYmluRGF0YSIsIndpdGhOYXRpdmVCdWZmZXIiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJnIiwiZXZhbCIsImFscGhhYmV0Iiwic2VlZCIsImRlY29kZWQiLCJub3ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFD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SixJQUFtQkEsQ0FBbkI7QUFBeEIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBd2YsTUFBTTlkLE1BQU4sR0FBZUEsTUFBZjtBQUNBOGQsTUFBTTFkLE1BQU4sR0FBZUEsTUFBZjtBQUNBbEQsT0FBT0MsT0FBUCxHQUFpQjJnQixLQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsZSIsImZpbGUiOiJsb3Jpcy1nbGFuZC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsb3Jpcy1nbGFuZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsb3Jpcy1nbGFuZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEV4cG9ydGVkIHRvIGh0ZG9jcy9qcy9jbGllbnQuanNcbiAqL1xuXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQge3N0b3JhZ2V9IGZyb20gJy4vc3RvcmFnZSc7XG5cbi8qKlxuICogQ2xpZW50ICh3ZWJzb2NrZXQgYnJpZGdlKVxuICovXG5jbGFzcyBDbGllbnQge1xuICAvKipcbiAgICogY29uc3RydWN0b3IgaW5pdGlhbGl6ZTpcbiAgICogKHN0YXR1cywgY3JlZGVudGlhbHMsIHNvY2tldCkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0YXR1cyA9IHtcbiAgICAgIG9ubGluZTogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgICAgdXVpZDogJycsXG4gICAgICB0b2tlbjogJycsXG4gICAgfTtcbiAgICB0aGlzLnNvY2tldCA9IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRpdGlvbmFsIHNvY2tldCBsaXN0ZW5lcnMuXG4gKi9cbkNsaWVudC5wcm90b3R5cGUuc2V0dXBTb2NrZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXR1cFNvY2tldExpc3RlbmVycygpIHtcbiAgY2xpZW50LnNvY2tldC5vbignYW5hbHl0aWNzJywgZnVuY3Rpb24oZGF0YSkge1xuICAgIC8vIHRvZG9cbiAgfSk7XG59O1xuXG4vKipcbiAqIEF1dGhlbnRpY2F0aW9uIHdpdGggc29ja2V0LmlvIHNlcnZlci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbkNsaWVudC5wcm90b3R5cGUuYXV0aGVudGljYXRpb24gPSBmdW5jdGlvbiBhdXRoZW50aWNhdGlvbihjYikge1xuICBzdG9yYWdlLnNhdmVVdWlkQW5kVG9rZW4oKTtcbiAgLy8gQ3JlYXRlIHdlYnNvY2tldCBmb3IgY29ubmVjdGluZy5cbiAgbGV0IHdlYnNvY2tldCA9IG51bGw7XG4gIGlmICh3aW5kb3cub3JpZ2luLmluY2x1ZGVzKCdodHRwczovLycpKSB7XG4gICAgLy8gUHJvZHVjdGlvblxuICAgIHdlYnNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHBzOi8vMzUuMTg1LjgwLjE3MCcsIHtcbiAgICAgIHNlY3VyZTogdHJ1ZSxcbiAgICAgIHBvcnQ6IDgwLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIERldmVsb3BtZW50XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICB3ZWJzb2NrZXQgPSBpby5jb25uZWN0KCdsb2NhbGhvc3Q6NjY2MCcsIHtcbiAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0JywgJ3BvbGxpbmcnXSxcbiAgICB9KTtcbiAgfVxuICB3ZWJzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcbiAgICB3ZWJzb2NrZXQub24oJ2NsaWVudF9pZGVudGl0eScsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGluZyB0byBzZXJ2ZXIuLi4gXFxuW0lORk9dIFNvY2tldCBpZDogJyArXG4gICAgICAgIGRhdGEuc29ja2V0SUQgKyAnXFxuW0lORk9dIENsaWVudCB1dWlkOiAnICsgc3RvcmFnZS5zb2NrZXQuY29uZmlnLnV1aWQpO1xuICAgICAgaWYgKHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy51dWlkICYmIHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy50b2tlbikgeyAvLyB0b2tlbiBleGlzdHMsIGVtaXQgY2xpZW50X2lkZW50aXR5XG4gICAgICAgIHdlYnNvY2tldC5lbWl0KCdjbGllbnRfaWRlbnRpdHknLCB7XG4gICAgICAgICAgc29ja2V0SUQ6IGRhdGEuc29ja2V0SUQsXG4gICAgICAgICAgdXVpZDogc3RvcmFnZS5zb2NrZXQuY29uZmlnLnV1aWQsXG4gICAgICAgICAgdG9rZW46IHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy50b2tlbixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgeyAvLyBubyB0b2tlbiwgZW1pdCBjbGllbnRfcmVnaXN0ZXJcbiAgICAgICAgd2Vic29ja2V0LmVtaXQoJ2NsaWVudF9yZWdpc3RlcicsIHN0b3JhZ2Uuc29ja2V0LmNvbmZpZyxcbiAgICAgICAgICBmdW5jdGlvbihpZGVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tjbGllbnRfcmVnaXN0ZXJdIDpcXG4nKTtcbiAgICAgICAgICAgIHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy51dWlkICE9PSBpZGVudC51dWlkID9cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ1tJTkZPXSB1dWlkOiAnICsgaWRlbnQudXVpZCArICdcXG5bSU5GT10gdG9rZW46ICcgKyBpZGVudC50b2tlblxuICAgICAgICAgICAgICApIDogY29uc29sZS5sb2coJ1tJTkZPXSB0b2tlbjogJyArIGlkZW50LnRva2VuKTtcbiAgICAgICAgICAgIHN0b3JhZ2Uuc29ja2V0LmNvbmZpZyA9IGlkZW50O1xuICAgICAgICAgICAgc3RvcmFnZS5zYXZlVXVpZEFuZFRva2VuKCk7XG4gICAgICAgICAgICB3ZWJzb2NrZXQuZW1pdCgnY2xpZW50X2lkZW50aXR5Jywge1xuICAgICAgICAgICAgICBzb2NrZXRJRDogZGF0YS5zb2NrZXRJRCxcbiAgICAgICAgICAgICAgdXVpZDogc3RvcmFnZS5zb2NrZXQuY29uZmlnLnV1aWQsXG4gICAgICAgICAgICAgIHRva2VuOiBzdG9yYWdlLnNvY2tldC5jb25maWcudG9rZW4sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3ZWJzb2NrZXQub24oJ2NsaWVudF9yZWFkeScsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbY2xpZW50X3JlYWR5XVxcbicpO1xuICAgICAgcmV0dXJuIGNiKG51bGwsIHdlYnNvY2tldCk7XG4gICAgfSk7XG5cbiAgICB3ZWJzb2NrZXQub24oJ2NsaWVudF9lcnJvcicsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbY2xpZW50X2Vycm9yXVxcbicpO1xuICAgICAgcmV0dXJuIGNiKG5ldyBFcnJvcignQXV0aGVudGljYXRpb24gRXJyb3InKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJbml0aWF0ZSBjbGllbnQgYW5kIHByb2NlZWQgdG8gYXV0aGVudGljYXRlLlxuICovXG5jb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KCk7XG5jbGllbnQuYXV0aGVudGljYXRpb24oZnVuY3Rpb24oZXJyb3IsIHdlYnNvY2tldCkge1xuICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xuICBjbGllbnQuc29ja2V0ID0gd2Vic29ja2V0O1xuICBjbGllbnQuY3JlZGVudGlhbHMgPSBzdG9yYWdlLnNvY2tldC5jb25maWc7XG4gIGNsaWVudC5zZXR1cFNvY2tldExpc3RlbmVycygpO1xuICBjbGllbnQuc29ja2V0LmVtaXQoJ3RyYWNrX21lJyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNvbnN0IENvb2tpZXMgPSByZXF1aXJlKCdqcy1jb29raWUnKTtcblxuLyoqXG4gKiBTdG9yYWdlIGZvciBjbGllbnQuanNcbiAqL1xuY2xhc3MgU3RvcmFnZSB7XG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RvciBpbml0aWFsaXplOlxuICAgKiAoIGNvbmZpZzoge3V1aWQsIHRva2VufSApLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb2NrZXQgPSB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdXVpZDogQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXV1aWQnKVxuICAgICAgICAgID8gQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXV1aWQnKSA6ICcnLFxuICAgICAgICB0b2tlbjogQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXRva2VuJylcbiAgICAgICAgICA/IENvb2tpZXMuZ2V0KCdsb3Jpcy1nbGFuZC10b2tlbicpIDogJycsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuXG4vKipcbiAqIFNhdmUgVXVpZCBhbmQgVG9rZW4gdG8gc3RvcmFnZS5cbiAqL1xuU3RvcmFnZS5wcm90b3R5cGUuc2F2ZVV1aWRBbmRUb2tlbiA9IGZ1bmN0aW9uIHNhdmVVdWlkQW5kVG9rZW4oKSB7XG4gIENvb2tpZXMuc2V0KCdsb3Jpcy1nbGFuZC11dWlkJywgc3RvcmFnZS5zb2NrZXQuY29uZmlnLnV1aWQsIHtcbiAgICBzZWN1cmU6IHdpbmRvdy5vcmlnaW4uaW5jbHVkZXMoJ2h0dHBzOi8vJyksXG4gICAgZXhwaXJlczogNyxcbiAgfSk7IC8vIGV4cGlyZXMgaW4gNyBkYXlzXG4gIENvb2tpZXMuc2V0KCdsb3Jpcy1nbGFuZC10b2tlbicsIHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy50b2tlbiwge1xuICAgIHNlY3VyZTogd2luZG93Lm9yaWdpbi5pbmNsdWRlcygnaHR0cHM6Ly8nKSxcbiAgICBleHBpcmVzOiA3LFxuICB9KTsgLy8gZXhwaXJlcyBpbiA3IGRheXNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCBDb29raWVzID0gcmVxdWlyZSgnanMtY29va2llJyk7XG5cbi8qKlxuICogU3RvcmFnZSBmb3IgY2xpZW50LmpzXG4gKi9cbmNsYXNzIFN0b3JhZ2Uge1xuICAvKipcbiAgICogY29uc3RydWN0b3IgaW5pdGlhbGl6ZTpcbiAgICogKCBjb25maWc6IHt1dWlkLCB0b2tlbn0gKS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc29ja2V0ID0ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHV1aWQ6IENvb2tpZXMuZ2V0KCdsb3Jpcy1nbGFuZC11dWlkJylcbiAgICAgICAgICA/IENvb2tpZXMuZ2V0KCdsb3Jpcy1nbGFuZC11dWlkJykgOiAnJyxcbiAgICAgICAgdG9rZW46IENvb2tpZXMuZ2V0KCdsb3Jpcy1nbGFuZC10b2tlbicpXG4gICAgICAgICAgPyBDb29raWVzLmdldCgnbG9yaXMtZ2xhbmQtdG9rZW4nKSA6ICcnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuLyoqXG4gKiBTYXZlIFV1aWQgYW5kIFRva2VuIHRvIHN0b3JhZ2UuXG4gKi9cblN0b3JhZ2UucHJvdG90eXBlLnNhdmVVdWlkQW5kVG9rZW4gPSBmdW5jdGlvbiBzYXZlVXVpZEFuZFRva2VuKCkge1xuICBDb29raWVzLnNldCgnbG9yaXMtZ2xhbmQtdXVpZCcsIHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy51dWlkLCB7XG4gICAgc2VjdXJlOiB3aW5kb3cub3JpZ2luLmluY2x1ZGVzKCdodHRwczovLycpLFxuICAgIGV4cGlyZXM6IDcsXG4gIH0pOyAvLyBleHBpcmVzIGluIDcgZGF5c1xuICBDb29raWVzLnNldCgnbG9yaXMtZ2xhbmQtdG9rZW4nLCBzdG9yYWdlLnNvY2tldC5jb25maWcudG9rZW4sIHtcbiAgICBzZWN1cmU6IHdpbmRvdy5vcmlnaW4uaW5jbHVkZXMoJ2h0dHBzOi8vJyksXG4gICAgZXhwaXJlczogNyxcbiAgfSk7IC8vIGV4cGlyZXMgaW4gNyBkYXlzXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhZnRlclxuXG5mdW5jdGlvbiBhZnRlcihjb3VudCwgY2FsbGJhY2ssIGVycl9jYikge1xuICAgIHZhciBiYWlsID0gZmFsc2VcbiAgICBlcnJfY2IgPSBlcnJfY2IgfHwgbm9vcFxuICAgIHByb3h5LmNvdW50ID0gY291bnRcblxuICAgIHJldHVybiAoY291bnQgPT09IDApID8gY2FsbGJhY2soKSA6IHByb3h5XG5cbiAgICBmdW5jdGlvbiBwcm94eShlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAocHJveHkuY291bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZnRlciBjYWxsZWQgdG9vIG1hbnkgdGltZXMnKVxuICAgICAgICB9XG4gICAgICAgIC0tcHJveHkuY291bnRcblxuICAgICAgICAvLyBhZnRlciBmaXJzdCBlcnJvciwgcmVzdCBhcmUgcGFzc2VkIHRvIGVycl9jYlxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBiYWlsID0gdHJ1ZVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKVxuICAgICAgICAgICAgLy8gZnV0dXJlIGVycm9yIGNhbGxiYWNrcyB3aWxsIGdvIHRvIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZXJyX2NiXG4gICAgICAgIH0gZWxzZSBpZiAocHJveHkuY291bnQgPT09IDAgJiYgIWJhaWwpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4iLCIvKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBzbGljaW5nIGFuIGFycmF5YnVmZmVyIGV2ZW4gd2hlblxuICogQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlIGlzIG5vdCBzdXBwb3J0ZWRcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyYXlidWZmZXIsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYXJyYXlidWZmZXIuYnl0ZUxlbmd0aDtcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICBlbmQgPSBlbmQgfHwgYnl0ZXM7XG5cbiAgaWYgKGFycmF5YnVmZmVyLnNsaWNlKSB7IHJldHVybiBhcnJheWJ1ZmZlci5zbGljZShzdGFydCwgZW5kKTsgfVxuXG4gIGlmIChzdGFydCA8IDApIHsgc3RhcnQgKz0gYnl0ZXM7IH1cbiAgaWYgKGVuZCA8IDApIHsgZW5kICs9IGJ5dGVzOyB9XG4gIGlmIChlbmQgPiBieXRlcykgeyBlbmQgPSBieXRlczsgfVxuXG4gIGlmIChzdGFydCA+PSBieXRlcyB8fCBzdGFydCA+PSBlbmQgfHwgYnl0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG5cbiAgdmFyIGFidiA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGVuZCAtIHN0YXJ0KTtcbiAgZm9yICh2YXIgaSA9IHN0YXJ0LCBpaSA9IDA7IGkgPCBlbmQ7IGkrKywgaWkrKykge1xuICAgIHJlc3VsdFtpaV0gPSBhYnZbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5idWZmZXI7XG59O1xuIiwiXG4vKipcbiAqIEV4cG9zZSBgQmFja29mZmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrb2ZmO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYmFja29mZiB0aW1lciB3aXRoIGBvcHRzYC5cbiAqXG4gKiAtIGBtaW5gIGluaXRpYWwgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgWzEwMF1cbiAqIC0gYG1heGAgbWF4IHRpbWVvdXQgWzEwMDAwXVxuICogLSBgaml0dGVyYCBbMF1cbiAqIC0gYGZhY3RvcmAgWzJdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gQmFja29mZihvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB0aGlzLm1zID0gb3B0cy5taW4gfHwgMTAwO1xuICB0aGlzLm1heCA9IG9wdHMubWF4IHx8IDEwMDAwO1xuICB0aGlzLmZhY3RvciA9IG9wdHMuZmFjdG9yIHx8IDI7XG4gIHRoaXMuaml0dGVyID0gb3B0cy5qaXR0ZXIgPiAwICYmIG9wdHMuaml0dGVyIDw9IDEgPyBvcHRzLmppdHRlciA6IDA7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgYmFja29mZiBkdXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oKXtcbiAgdmFyIG1zID0gdGhpcy5tcyAqIE1hdGgucG93KHRoaXMuZmFjdG9yLCB0aGlzLmF0dGVtcHRzKyspO1xuICBpZiAodGhpcy5qaXR0ZXIpIHtcbiAgICB2YXIgcmFuZCA9ICBNYXRoLnJhbmRvbSgpO1xuICAgIHZhciBkZXZpYXRpb24gPSBNYXRoLmZsb29yKHJhbmQgKiB0aGlzLmppdHRlciAqIG1zKTtcbiAgICBtcyA9IChNYXRoLmZsb29yKHJhbmQgKiAxMCkgJiAxKSA9PSAwICA/IG1zIC0gZGV2aWF0aW9uIDogbXMgKyBkZXZpYXRpb247XG4gIH1cbiAgcmV0dXJuIE1hdGgubWluKG1zLCB0aGlzLm1heCkgfCAwO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtaW5pbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbihtaW4pe1xuICB0aGlzLm1zID0gbWluO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heGltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uKG1heCl7XG4gIHRoaXMubWF4ID0gbWF4O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGppdHRlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0Sml0dGVyID0gZnVuY3Rpb24oaml0dGVyKXtcbiAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XG59O1xuXG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG5cbiAgLy8gVXNlIGEgbG9va3VwIHRhYmxlIHRvIGZpbmQgdGhlIGluZGV4LlxuICB2YXIgbG9va3VwID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XG4gIH1cblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSldO1xuICAgICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSsxKV07XG4gICAgICBlbmNvZGVkMyA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzIpXTtcbiAgICAgIGVuY29kZWQ0ID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMyldO1xuXG4gICAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMyAmIDMpIDw8IDYpIHwgKGVuY29kZWQ0ICYgNjMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbiAgfTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qKlxyXG4gKiBDcmVhdGUgYSBibG9iIGJ1aWxkZXIgZXZlbiB3aGVuIHZlbmRvciBwcmVmaXhlcyBleGlzdFxyXG4gKi9cclxuXHJcbnZhciBCbG9iQnVpbGRlciA9IHR5cGVvZiBCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iQnVpbGRlciA6XHJcbiAgdHlwZW9mIFdlYktpdEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IFdlYktpdEJsb2JCdWlsZGVyIDpcclxuICB0eXBlb2YgTVNCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNU0Jsb2JCdWlsZGVyIDpcclxuICB0eXBlb2YgTW96QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTW96QmxvYkJ1aWxkZXIgOiBcclxuICBmYWxzZTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBCbG9iIGNvbnN0cnVjdG9yIGlzIHN1cHBvcnRlZFxyXG4gKi9cclxuXHJcbnZhciBibG9iU3VwcG9ydGVkID0gKGZ1bmN0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgYSA9IG5ldyBCbG9iKFsnaGknXSk7XHJcbiAgICByZXR1cm4gYS5zaXplID09PSAyO1xyXG4gIH0gY2F0Y2goZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSkoKTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBCbG9iIGNvbnN0cnVjdG9yIHN1cHBvcnRzIEFycmF5QnVmZmVyVmlld3NcclxuICogRmFpbHMgaW4gU2FmYXJpIDYsIHNvIHdlIG5lZWQgdG8gbWFwIHRvIEFycmF5QnVmZmVycyB0aGVyZS5cclxuICovXHJcblxyXG52YXIgYmxvYlN1cHBvcnRzQXJyYXlCdWZmZXJWaWV3ID0gYmxvYlN1cHBvcnRlZCAmJiAoZnVuY3Rpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBiID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KFsxLDJdKV0pO1xyXG4gICAgcmV0dXJuIGIuc2l6ZSA9PT0gMjtcclxuICB9IGNhdGNoKGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgQmxvYkJ1aWxkZXIgaXMgc3VwcG9ydGVkXHJcbiAqL1xyXG5cclxudmFyIGJsb2JCdWlsZGVyU3VwcG9ydGVkID0gQmxvYkJ1aWxkZXJcclxuICAmJiBCbG9iQnVpbGRlci5wcm90b3R5cGUuYXBwZW5kXHJcbiAgJiYgQmxvYkJ1aWxkZXIucHJvdG90eXBlLmdldEJsb2I7XHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgbWFwcyBBcnJheUJ1ZmZlclZpZXdzIHRvIEFycmF5QnVmZmVyc1xyXG4gKiBVc2VkIGJ5IEJsb2JCdWlsZGVyIGNvbnN0cnVjdG9yIGFuZCBvbGQgYnJvd3NlcnMgdGhhdCBkaWRuJ3RcclxuICogc3VwcG9ydCBpdCBpbiB0aGUgQmxvYiBjb25zdHJ1Y3Rvci5cclxuICovXHJcblxyXG5mdW5jdGlvbiBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSkge1xyXG4gIHJldHVybiBhcnkubWFwKGZ1bmN0aW9uKGNodW5rKSB7XHJcbiAgICBpZiAoY2h1bmsuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgdmFyIGJ1ZiA9IGNodW5rLmJ1ZmZlcjtcclxuXHJcbiAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdWJhcnJheSwgbWFrZSBhIGNvcHkgc28gd2Ugb25seVxyXG4gICAgICAvLyBpbmNsdWRlIHRoZSBzdWJhcnJheSByZWdpb24gZnJvbSB0aGUgdW5kZXJseWluZyBidWZmZXJcclxuICAgICAgaWYgKGNodW5rLmJ5dGVMZW5ndGggIT09IGJ1Zi5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNvcHkgPSBuZXcgVWludDhBcnJheShjaHVuay5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb3B5LnNldChuZXcgVWludDhBcnJheShidWYsIGNodW5rLmJ5dGVPZmZzZXQsIGNodW5rLmJ5dGVMZW5ndGgpKTtcclxuICAgICAgICBidWYgPSBjb3B5LmJ1ZmZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2h1bms7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJsb2JCdWlsZGVyQ29uc3RydWN0b3IoYXJ5LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gIHZhciBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xyXG4gIG1hcEFycmF5QnVmZmVyVmlld3MoYXJ5KS5mb3JFYWNoKGZ1bmN0aW9uKHBhcnQpIHtcclxuICAgIGJiLmFwcGVuZChwYXJ0KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChvcHRpb25zLnR5cGUpID8gYmIuZ2V0QmxvYihvcHRpb25zLnR5cGUpIDogYmIuZ2V0QmxvYigpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQmxvYkNvbnN0cnVjdG9yKGFyeSwgb3B0aW9ucykge1xyXG4gIHJldHVybiBuZXcgQmxvYihtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSksIG9wdGlvbnMgfHwge30pO1xyXG59O1xyXG5cclxuaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEJsb2JCdWlsZGVyQ29uc3RydWN0b3IucHJvdG90eXBlID0gQmxvYi5wcm90b3R5cGU7XHJcbiAgQmxvYkNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEJsb2IucHJvdG90eXBlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcclxuICBpZiAoYmxvYlN1cHBvcnRlZCkge1xyXG4gICAgcmV0dXJuIGJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyA/IEJsb2IgOiBCbG9iQ29uc3RydWN0b3I7XHJcbiAgfSBlbHNlIGlmIChibG9iQnVpbGRlclN1cHBvcnRlZCkge1xyXG4gICAgcmV0dXJuIEJsb2JCdWlsZGVyQ29uc3RydWN0b3I7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59KSgpO1xyXG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCIvKipcbiAqIFNsaWNlIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcblxuLyoqXG4gKiBCaW5kIGBvYmpgIHRvIGBmbmAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGZuIG9yIHN0cmluZ1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBmbil7XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZm4pIGZuID0gb2JqW2ZuXTtcbiAgaWYgKCdmdW5jdGlvbicgIT0gdHlwZW9mIGZuKSB0aHJvdyBuZXcgRXJyb3IoJ2JpbmQoKSByZXF1aXJlcyBhIGZ1bmN0aW9uJyk7XG4gIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkob2JqLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgfVxufTtcbiIsIlxyXG4vKipcclxuICogRXhwb3NlIGBFbWl0dGVyYC5cclxuICovXHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xyXG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcclxuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cclxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcclxuICAgIC5wdXNoKGZuKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcclxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xyXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIG9uLmZuID0gZm47XHJcbiAgdGhpcy5vbihldmVudCwgb24pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXHJcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgLy8gYWxsXHJcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXHJcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXHJcbiAgdmFyIGNiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcclxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhLCBiKXtcbiAgdmFyIGZuID0gZnVuY3Rpb24oKXt9O1xuICBmbi5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgYS5wcm90b3R5cGUgPSBuZXcgZm47XG4gIGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gYTtcbn07IiwiXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7XG5cbi8qKlxuICogRXhwb3J0cyBwYXJzZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICpcbiAqL1xubW9kdWxlLmV4cG9ydHMucGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0cmFuc3BvcnRzID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL2luZGV4Jyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnNvY2tldCcpO1xudmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBwYXJzZXVyaSA9IHJlcXVpcmUoJ3BhcnNldXJpJyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2tldDtcblxuLyoqXG4gKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmkgb3Igb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gU29ja2V0ICh1cmksIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNvY2tldCkpIHJldHVybiBuZXcgU29ja2V0KHVyaSwgb3B0cyk7XG5cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgaWYgKHVyaSAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIHVyaSkge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gbnVsbDtcbiAgfVxuXG4gIGlmICh1cmkpIHtcbiAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICBvcHRzLnNlY3VyZSA9IHVyaS5wcm90b2NvbCA9PT0gJ2h0dHBzJyB8fCB1cmkucHJvdG9jb2wgPT09ICd3c3MnO1xuICAgIG9wdHMucG9ydCA9IHVyaS5wb3J0O1xuICAgIGlmICh1cmkucXVlcnkpIG9wdHMucXVlcnkgPSB1cmkucXVlcnk7XG4gIH0gZWxzZSBpZiAob3B0cy5ob3N0KSB7XG4gICAgb3B0cy5ob3N0bmFtZSA9IHBhcnNldXJpKG9wdHMuaG9zdCkuaG9zdDtcbiAgfVxuXG4gIHRoaXMuc2VjdXJlID0gbnVsbCAhPSBvcHRzLnNlY3VyZSA/IG9wdHMuc2VjdXJlXG4gICAgOiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2wpO1xuXG4gIGlmIChvcHRzLmhvc3RuYW1lICYmICFvcHRzLnBvcnQpIHtcbiAgICAvLyBpZiBubyBwb3J0IGlzIHNwZWNpZmllZCBtYW51YWxseSwgdXNlIHRoZSBwcm90b2NvbCBkZWZhdWx0XG4gICAgb3B0cy5wb3J0ID0gdGhpcy5zZWN1cmUgPyAnNDQzJyA6ICc4MCc7XG4gIH1cblxuICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudCB8fCBmYWxzZTtcbiAgdGhpcy5ob3N0bmFtZSA9IG9wdHMuaG9zdG5hbWUgfHxcbiAgICAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xuICB0aGlzLnBvcnQgPSBvcHRzLnBvcnQgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYXRpb24ucG9ydFxuICAgICAgPyBsb2NhdGlvbi5wb3J0XG4gICAgICA6ICh0aGlzLnNlY3VyZSA/IDQ0MyA6IDgwKSk7XG4gIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHt9O1xuICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB0aGlzLnF1ZXJ5KSB0aGlzLnF1ZXJ5ID0gcGFyc2Vxcy5kZWNvZGUodGhpcy5xdWVyeSk7XG4gIHRoaXMudXBncmFkZSA9IGZhbHNlICE9PSBvcHRzLnVwZ3JhZGU7XG4gIHRoaXMucGF0aCA9IChvcHRzLnBhdGggfHwgJy9lbmdpbmUuaW8nKS5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nO1xuICB0aGlzLmZvcmNlSlNPTlAgPSAhIW9wdHMuZm9yY2VKU09OUDtcbiAgdGhpcy5qc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuICB0aGlzLmZvcmNlQmFzZTY0ID0gISFvcHRzLmZvcmNlQmFzZTY0O1xuICB0aGlzLmVuYWJsZXNYRFIgPSAhIW9wdHMuZW5hYmxlc1hEUjtcbiAgdGhpcy50aW1lc3RhbXBQYXJhbSA9IG9wdHMudGltZXN0YW1wUGFyYW0gfHwgJ3QnO1xuICB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzID0gb3B0cy50aW1lc3RhbXBSZXF1ZXN0cztcbiAgdGhpcy50cmFuc3BvcnRzID0gb3B0cy50cmFuc3BvcnRzIHx8IFsncG9sbGluZycsICd3ZWJzb2NrZXQnXTtcbiAgdGhpcy50cmFuc3BvcnRPcHRpb25zID0gb3B0cy50cmFuc3BvcnRPcHRpb25zIHx8IHt9O1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnJztcbiAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuICB0aGlzLnBvbGljeVBvcnQgPSBvcHRzLnBvbGljeVBvcnQgfHwgODQzO1xuICB0aGlzLnJlbWVtYmVyVXBncmFkZSA9IG9wdHMucmVtZW1iZXJVcGdyYWRlIHx8IGZhbHNlO1xuICB0aGlzLmJpbmFyeVR5cGUgPSBudWxsO1xuICB0aGlzLm9ubHlCaW5hcnlVcGdyYWRlcyA9IG9wdHMub25seUJpbmFyeVVwZ3JhZGVzO1xuICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0gZmFsc2UgIT09IG9wdHMucGVyTWVzc2FnZURlZmxhdGUgPyAob3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSB8fCB7fSkgOiBmYWxzZTtcblxuICBpZiAodHJ1ZSA9PT0gdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSkgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IHt9O1xuICBpZiAodGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSAmJiBudWxsID09IHRoaXMucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkKSB7XG4gICAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQgPSAxMDI0O1xuICB9XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMucGZ4ID0gb3B0cy5wZnggfHwgbnVsbDtcbiAgdGhpcy5rZXkgPSBvcHRzLmtleSB8fCBudWxsO1xuICB0aGlzLnBhc3NwaHJhc2UgPSBvcHRzLnBhc3NwaHJhc2UgfHwgbnVsbDtcbiAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0IHx8IG51bGw7XG4gIHRoaXMuY2EgPSBvcHRzLmNhIHx8IG51bGw7XG4gIHRoaXMuY2lwaGVycyA9IG9wdHMuY2lwaGVycyB8fCBudWxsO1xuICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIHRoaXMuZm9yY2VOb2RlID0gISFvcHRzLmZvcmNlTm9kZTtcblxuICAvLyBkZXRlY3QgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnRcbiAgdGhpcy5pc1JlYWN0TmF0aXZlID0gKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ3N0cmluZycgJiYgbmF2aWdhdG9yLnByb2R1Y3QudG9Mb3dlckNhc2UoKSA9PT0gJ3JlYWN0bmF0aXZlJyk7XG5cbiAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBvciBSZWFjdE5hdGl2ZSBjbGllbnRcbiAgaWYgKHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLmlzUmVhY3ROYXRpdmUpIHtcbiAgICBpZiAob3B0cy5leHRyYUhlYWRlcnMgJiYgT2JqZWN0LmtleXMob3B0cy5leHRyYUhlYWRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMubG9jYWxBZGRyZXNzKSB7XG4gICAgICB0aGlzLmxvY2FsQWRkcmVzcyA9IG9wdHMubG9jYWxBZGRyZXNzO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBvbiBoYW5kc2hha2VcbiAgdGhpcy5pZCA9IG51bGw7XG4gIHRoaXMudXBncmFkZXMgPSBudWxsO1xuICB0aGlzLnBpbmdJbnRlcnZhbCA9IG51bGw7XG4gIHRoaXMucGluZ1RpbWVvdXQgPSBudWxsO1xuXG4gIC8vIHNldCBvbiBoZWFydGJlYXRcbiAgdGhpcy5waW5nSW50ZXJ2YWxUaW1lciA9IG51bGw7XG4gIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IG51bGw7XG5cbiAgdGhpcy5vcGVuKCk7XG59XG5cblNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoU29ja2V0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcblxuLyoqXG4gKiBFeHBvc2UgZGVwcyBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHlcbiAqIGFuZCBzdGFuZGFsb25lIGJyb3dzZXIgYWNjZXNzLlxuICovXG5cblNvY2tldC5Tb2NrZXQgPSBTb2NrZXQ7XG5Tb2NrZXQuVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi90cmFuc3BvcnQnKTtcblNvY2tldC50cmFuc3BvcnRzID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL2luZGV4Jyk7XG5Tb2NrZXQucGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgdHJhbnNwb3J0IG9mIHRoZSBnaXZlbiB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICogQHJldHVybiB7VHJhbnNwb3J0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jcmVhdGVUcmFuc3BvcnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWJ1ZygnY3JlYXRpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICB2YXIgcXVlcnkgPSBjbG9uZSh0aGlzLnF1ZXJ5KTtcblxuICAvLyBhcHBlbmQgZW5naW5lLmlvIHByb3RvY29sIGlkZW50aWZpZXJcbiAgcXVlcnkuRUlPID0gcGFyc2VyLnByb3RvY29sO1xuXG4gIC8vIHRyYW5zcG9ydCBuYW1lXG4gIHF1ZXJ5LnRyYW5zcG9ydCA9IG5hbWU7XG5cbiAgLy8gcGVyLXRyYW5zcG9ydCBvcHRpb25zXG4gIHZhciBvcHRpb25zID0gdGhpcy50cmFuc3BvcnRPcHRpb25zW25hbWVdIHx8IHt9O1xuXG4gIC8vIHNlc3Npb24gaWQgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICBpZiAodGhpcy5pZCkgcXVlcnkuc2lkID0gdGhpcy5pZDtcblxuICB2YXIgdHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNbbmFtZV0oe1xuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBzb2NrZXQ6IHRoaXMsXG4gICAgYWdlbnQ6IG9wdGlvbnMuYWdlbnQgfHwgdGhpcy5hZ2VudCxcbiAgICBob3N0bmFtZTogb3B0aW9ucy5ob3N0bmFtZSB8fCB0aGlzLmhvc3RuYW1lLFxuICAgIHBvcnQ6IG9wdGlvbnMucG9ydCB8fCB0aGlzLnBvcnQsXG4gICAgc2VjdXJlOiBvcHRpb25zLnNlY3VyZSB8fCB0aGlzLnNlY3VyZSxcbiAgICBwYXRoOiBvcHRpb25zLnBhdGggfHwgdGhpcy5wYXRoLFxuICAgIGZvcmNlSlNPTlA6IG9wdGlvbnMuZm9yY2VKU09OUCB8fCB0aGlzLmZvcmNlSlNPTlAsXG4gICAganNvbnA6IG9wdGlvbnMuanNvbnAgfHwgdGhpcy5qc29ucCxcbiAgICBmb3JjZUJhc2U2NDogb3B0aW9ucy5mb3JjZUJhc2U2NCB8fCB0aGlzLmZvcmNlQmFzZTY0LFxuICAgIGVuYWJsZXNYRFI6IG9wdGlvbnMuZW5hYmxlc1hEUiB8fCB0aGlzLmVuYWJsZXNYRFIsXG4gICAgdGltZXN0YW1wUmVxdWVzdHM6IG9wdGlvbnMudGltZXN0YW1wUmVxdWVzdHMgfHwgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyxcbiAgICB0aW1lc3RhbXBQYXJhbTogb3B0aW9ucy50aW1lc3RhbXBQYXJhbSB8fCB0aGlzLnRpbWVzdGFtcFBhcmFtLFxuICAgIHBvbGljeVBvcnQ6IG9wdGlvbnMucG9saWN5UG9ydCB8fCB0aGlzLnBvbGljeVBvcnQsXG4gICAgcGZ4OiBvcHRpb25zLnBmeCB8fCB0aGlzLnBmeCxcbiAgICBrZXk6IG9wdGlvbnMua2V5IHx8IHRoaXMua2V5LFxuICAgIHBhc3NwaHJhc2U6IG9wdGlvbnMucGFzc3BocmFzZSB8fCB0aGlzLnBhc3NwaHJhc2UsXG4gICAgY2VydDogb3B0aW9ucy5jZXJ0IHx8IHRoaXMuY2VydCxcbiAgICBjYTogb3B0aW9ucy5jYSB8fCB0aGlzLmNhLFxuICAgIGNpcGhlcnM6IG9wdGlvbnMuY2lwaGVycyB8fCB0aGlzLmNpcGhlcnMsXG4gICAgcmVqZWN0VW5hdXRob3JpemVkOiBvcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCB8fCB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSB8fCB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLFxuICAgIGV4dHJhSGVhZGVyczogb3B0aW9ucy5leHRyYUhlYWRlcnMgfHwgdGhpcy5leHRyYUhlYWRlcnMsXG4gICAgZm9yY2VOb2RlOiBvcHRpb25zLmZvcmNlTm9kZSB8fCB0aGlzLmZvcmNlTm9kZSxcbiAgICBsb2NhbEFkZHJlc3M6IG9wdGlvbnMubG9jYWxBZGRyZXNzIHx8IHRoaXMubG9jYWxBZGRyZXNzLFxuICAgIHJlcXVlc3RUaW1lb3V0OiBvcHRpb25zLnJlcXVlc3RUaW1lb3V0IHx8IHRoaXMucmVxdWVzdFRpbWVvdXQsXG4gICAgcHJvdG9jb2xzOiBvcHRpb25zLnByb3RvY29scyB8fCB2b2lkICgwKSxcbiAgICBpc1JlYWN0TmF0aXZlOiB0aGlzLmlzUmVhY3ROYXRpdmVcbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zcG9ydDtcbn07XG5cbmZ1bmN0aW9uIGNsb25lIChvYmopIHtcbiAgdmFyIG8gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBvW2ldID0gb2JqW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyB0cmFuc3BvcnQgdG8gdXNlIGFuZCBzdGFydHMgcHJvYmUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblNvY2tldC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRyYW5zcG9ydDtcbiAgaWYgKHRoaXMucmVtZW1iZXJVcGdyYWRlICYmIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgJiYgdGhpcy50cmFuc3BvcnRzLmluZGV4T2YoJ3dlYnNvY2tldCcpICE9PSAtMSkge1xuICAgIHRyYW5zcG9ydCA9ICd3ZWJzb2NrZXQnO1xuICB9IGVsc2UgaWYgKDAgPT09IHRoaXMudHJhbnNwb3J0cy5sZW5ndGgpIHtcbiAgICAvLyBFbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyBpdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywgJ05vIHRyYW5zcG9ydHMgYXZhaWxhYmxlJyk7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgfVxuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG5cbiAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICB0cnkge1xuICAgIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLnRyYW5zcG9ydHMuc2hpZnQoKTtcbiAgICB0aGlzLm9wZW4oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cmFuc3BvcnQub3BlbigpO1xuICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydC4gRGlzYWJsZXMgdGhlIGV4aXN0aW5nIG9uZSAoaWYgYW55KS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNldFRyYW5zcG9ydCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQpIHtcbiAgZGVidWcoJ3NldHRpbmcgdHJhbnNwb3J0ICVzJywgdHJhbnNwb3J0Lm5hbWUpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgZGVidWcoJ2NsZWFyaW5nIGV4aXN0aW5nIHRyYW5zcG9ydCAlcycsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICB9XG5cbiAgLy8gc2V0IHVwIHRyYW5zcG9ydFxuICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblxuICAvLyBzZXQgdXAgdHJhbnNwb3J0IGxpc3RlbmVyc1xuICB0cmFuc3BvcnRcbiAgLm9uKCdkcmFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uRHJhaW4oKTtcbiAgfSlcbiAgLm9uKCdwYWNrZXQnLCBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgc2VsZi5vblBhY2tldChwYWNrZXQpO1xuICB9KVxuICAub24oJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICBzZWxmLm9uRXJyb3IoZSk7XG4gIH0pXG4gIC5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbkNsb3NlKCd0cmFuc3BvcnQgY2xvc2UnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFByb2JlcyBhIHRyYW5zcG9ydC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUucHJvYmUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWJ1ZygncHJvYmluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gIHZhciB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydChuYW1lLCB7IHByb2JlOiAxIH0pO1xuICB2YXIgZmFpbGVkID0gZmFsc2U7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gb25UcmFuc3BvcnRPcGVuICgpIHtcbiAgICBpZiAoc2VsZi5vbmx5QmluYXJ5VXBncmFkZXMpIHtcbiAgICAgIHZhciB1cGdyYWRlTG9zZXNCaW5hcnkgPSAhdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiBzZWxmLnRyYW5zcG9ydC5zdXBwb3J0c0JpbmFyeTtcbiAgICAgIGZhaWxlZCA9IGZhaWxlZCB8fCB1cGdyYWRlTG9zZXNCaW5hcnk7XG4gICAgfVxuICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIG9wZW5lZCcsIG5hbWUpO1xuICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6ICdwaW5nJywgZGF0YTogJ3Byb2JlJyB9XSk7XG4gICAgdHJhbnNwb3J0Lm9uY2UoJ3BhY2tldCcsIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgIGlmICgncG9uZycgPT09IG1zZy50eXBlICYmICdwcm9iZScgPT09IG1zZy5kYXRhKSB7XG4gICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIHBvbmcnLCBuYW1lKTtcbiAgICAgICAgc2VsZi51cGdyYWRpbmcgPSB0cnVlO1xuICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGluZycsIHRyYW5zcG9ydCk7XG4gICAgICAgIGlmICghdHJhbnNwb3J0KSByZXR1cm47XG4gICAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSAnd2Vic29ja2V0JyA9PT0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgZGVidWcoJ3BhdXNpbmcgY3VycmVudCB0cmFuc3BvcnQgXCIlc1wiJywgc2VsZi50cmFuc3BvcnQubmFtZSk7XG4gICAgICAgIHNlbGYudHJhbnNwb3J0LnBhdXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgaWYgKCdjbG9zZWQnID09PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICBkZWJ1ZygnY2hhbmdpbmcgdHJhbnNwb3J0IGFuZCBzZW5kaW5nIHVwZ3JhZGUgcGFja2V0Jyk7XG5cbiAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICBzZWxmLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6ICd1cGdyYWRlJyB9XSk7XG4gICAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlJywgdHJhbnNwb3J0KTtcbiAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgIHNlbGYudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5mbHVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCcsIG5hbWUpO1xuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdwcm9iZSBlcnJvcicpO1xuICAgICAgICBlcnIudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgIHNlbGYuZW1pdCgndXBncmFkZUVycm9yJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyZWV6ZVRyYW5zcG9ydCAoKSB7XG4gICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgLy8gQW55IGNhbGxiYWNrIGNhbGxlZCBieSB0cmFuc3BvcnQgc2hvdWxkIGJlIGlnbm9yZWQgc2luY2Ugbm93XG4gICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgIGNsZWFudXAoKTtcblxuICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gIH1cblxuICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgaGFwcGVucyB3aGlsZSBwcm9iaW5nXG4gIGZ1bmN0aW9uIG9uZXJyb3IgKGVycikge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigncHJvYmUgZXJyb3I6ICcgKyBlcnIpO1xuICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgZnJlZXplVHJhbnNwb3J0KCk7XG5cbiAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvcjogJXMnLCBuYW1lLCBlcnIpO1xuXG4gICAgc2VsZi5lbWl0KCd1cGdyYWRlRXJyb3InLCBlcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zcG9ydENsb3NlICgpIHtcbiAgICBvbmVycm9yKCd0cmFuc3BvcnQgY2xvc2VkJyk7XG4gIH1cblxuICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgY2xvc2VkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgZnVuY3Rpb24gb25jbG9zZSAoKSB7XG4gICAgb25lcnJvcignc29ja2V0IGNsb3NlZCcpO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIHVwZ3JhZGVkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgZnVuY3Rpb24gb251cGdyYWRlICh0bykge1xuICAgIGlmICh0cmFuc3BvcnQgJiYgdG8ubmFtZSAhPT0gdHJhbnNwb3J0Lm5hbWUpIHtcbiAgICAgIGRlYnVnKCdcIiVzXCIgd29ya3MgLSBhYm9ydGluZyBcIiVzXCInLCB0by5uYW1lLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICBmcmVlemVUcmFuc3BvcnQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignb3BlbicsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvblRyYW5zcG9ydENsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGluZycsIG9udXBncmFkZSk7XG4gIH1cblxuICB0cmFuc3BvcnQub25jZSgnb3BlbicsIG9uVHJhbnNwb3J0T3Blbik7XG4gIHRyYW5zcG9ydC5vbmNlKCdlcnJvcicsIG9uZXJyb3IpO1xuICB0cmFuc3BvcnQub25jZSgnY2xvc2UnLCBvblRyYW5zcG9ydENsb3NlKTtcblxuICB0aGlzLm9uY2UoJ2Nsb3NlJywgb25jbG9zZSk7XG4gIHRoaXMub25jZSgndXBncmFkaW5nJywgb251cGdyYWRlKTtcblxuICB0cmFuc3BvcnQub3BlbigpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGRlZW1lZCBvcGVuLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdzb2NrZXQgb3BlbicpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSAnd2Vic29ja2V0JyA9PT0gdGhpcy50cmFuc3BvcnQubmFtZTtcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG4gIHRoaXMuZmx1c2goKTtcblxuICAvLyB3ZSBjaGVjayBmb3IgYHJlYWR5U3RhdGVgIGluIGNhc2UgYW4gYG9wZW5gXG4gIC8vIGxpc3RlbmVyIGFscmVhZHkgY2xvc2VkIHRoZSBzb2NrZXRcbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlICYmIHRoaXMudXBncmFkZSAmJiB0aGlzLnRyYW5zcG9ydC5wYXVzZSkge1xuICAgIGRlYnVnKCdzdGFydGluZyB1cGdyYWRlIHByb2JlcycpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy51cGdyYWRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMucHJvYmUodGhpcy51cGdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vblBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICAnY2xvc2luZycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIGRlYnVnKCdzb2NrZXQgcmVjZWl2ZTogdHlwZSBcIiVzXCIsIGRhdGEgXCIlc1wiJywgcGFja2V0LnR5cGUsIHBhY2tldC5kYXRhKTtcblxuICAgIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcblxuICAgIC8vIFNvY2tldCBpcyBsaXZlIC0gYW55IHBhY2tldCBjb3VudHNcbiAgICB0aGlzLmVtaXQoJ2hlYXJ0YmVhdCcpO1xuXG4gICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgY2FzZSAnb3Blbic6XG4gICAgICAgIHRoaXMub25IYW5kc2hha2UoSlNPTi5wYXJzZShwYWNrZXQuZGF0YSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9uZyc6XG4gICAgICAgIHRoaXMuc2V0UGluZygpO1xuICAgICAgICB0aGlzLmVtaXQoJ3BvbmcnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignc2VydmVyIGVycm9yJyk7XG4gICAgICAgIGVyci5jb2RlID0gcGFja2V0LmRhdGE7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgIHRoaXMuZW1pdCgnZGF0YScsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgcGFja2V0LmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoJ3BhY2tldCByZWNlaXZlZCB3aXRoIHNvY2tldCByZWFkeVN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhhbmRzaGFrZSBvYmpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25IYW5kc2hha2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmVtaXQoJ2hhbmRzaGFrZScsIGRhdGEpO1xuICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gIHRoaXMudHJhbnNwb3J0LnF1ZXJ5LnNpZCA9IGRhdGEuc2lkO1xuICB0aGlzLnVwZ3JhZGVzID0gdGhpcy5maWx0ZXJVcGdyYWRlcyhkYXRhLnVwZ3JhZGVzKTtcbiAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgdGhpcy5waW5nVGltZW91dCA9IGRhdGEucGluZ1RpbWVvdXQ7XG4gIHRoaXMub25PcGVuKCk7XG4gIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgaWYgKCdjbG9zZWQnID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgdGhpcy5zZXRQaW5nKCk7XG5cbiAgLy8gUHJvbG9uZyBsaXZlbmVzcyBvZiBzb2NrZXQgb24gaGVhcnRiZWF0XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2hlYXJ0YmVhdCcsIHRoaXMub25IZWFydGJlYXQpO1xuICB0aGlzLm9uKCdoZWFydGJlYXQnLCB0aGlzLm9uSGVhcnRiZWF0KTtcbn07XG5cbi8qKlxuICogUmVzZXRzIHBpbmcgdGltZW91dC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uSGVhcnRiZWF0ID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5waW5nVGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCdjbG9zZWQnID09PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICBzZWxmLm9uQ2xvc2UoJ3BpbmcgdGltZW91dCcpO1xuICB9LCB0aW1lb3V0IHx8IChzZWxmLnBpbmdJbnRlcnZhbCArIHNlbGYucGluZ1RpbWVvdXQpKTtcbn07XG5cbi8qKlxuICogUGluZ3Mgc2VydmVyIGV2ZXJ5IGB0aGlzLnBpbmdJbnRlcnZhbGAgYW5kIGV4cGVjdHMgcmVzcG9uc2VcbiAqIHdpdGhpbiBgdGhpcy5waW5nVGltZW91dGAgb3IgY2xvc2VzIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZXRQaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGNsZWFyVGltZW91dChzZWxmLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgc2VsZi5waW5nSW50ZXJ2YWxUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGRlYnVnKCd3cml0aW5nIHBpbmcgcGFja2V0IC0gZXhwZWN0aW5nIHBvbmcgd2l0aGluICVzbXMnLCBzZWxmLnBpbmdUaW1lb3V0KTtcbiAgICBzZWxmLnBpbmcoKTtcbiAgICBzZWxmLm9uSGVhcnRiZWF0KHNlbGYucGluZ1RpbWVvdXQpO1xuICB9LCBzZWxmLnBpbmdJbnRlcnZhbCk7XG59O1xuXG4vKipcbiogU2VuZHMgYSBwaW5nIHBhY2tldC5cbipcbiogQGFwaSBwcml2YXRlXG4qL1xuXG5Tb2NrZXQucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5zZW5kUGFja2V0KCdwaW5nJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuZW1pdCgncGluZycpO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIG9uIGBkcmFpbmAgZXZlbnRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud3JpdGVCdWZmZXIuc3BsaWNlKDAsIHRoaXMucHJldkJ1ZmZlckxlbik7XG5cbiAgLy8gc2V0dGluZyBwcmV2QnVmZmVyTGVuID0gMCBpcyB2ZXJ5IGltcG9ydGFudFxuICAvLyBmb3IgZXhhbXBsZSwgd2hlbiB1cGdyYWRpbmcsIHVwZ3JhZGUgcGFja2V0IGlzIHNlbnQgb3ZlcixcbiAgLy8gYW5kIGEgbm9uemVybyBwcmV2QnVmZmVyTGVuIGNvdWxkIGNhdXNlIHByb2JsZW1zIG9uIGBkcmFpbmBcbiAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICBpZiAoMCA9PT0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICB0aGlzLmVtaXQoJ2RyYWluJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5mbHVzaCgpO1xuICB9XG59O1xuXG4vKipcbiAqIEZsdXNoIHdyaXRlIGJ1ZmZlcnMuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdjbG9zZWQnICE9PSB0aGlzLnJlYWR5U3RhdGUgJiYgdGhpcy50cmFuc3BvcnQud3JpdGFibGUgJiZcbiAgICAhdGhpcy51cGdyYWRpbmcgJiYgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICBkZWJ1ZygnZmx1c2hpbmcgJWQgcGFja2V0cyBpbiBzb2NrZXQnLCB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCk7XG4gICAgdGhpcy50cmFuc3BvcnQuc2VuZCh0aGlzLndyaXRlQnVmZmVyKTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgbGVuZ3RoIG9mIHdyaXRlQnVmZmVyXG4gICAgLy8gc3BsaWNlIHdyaXRlQnVmZmVyIGFuZCBjYWxsYmFja0J1ZmZlciBvbiBgZHJhaW5gXG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGg7XG4gICAgdGhpcy5lbWl0KCdmbHVzaCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAcmV0dXJuIHtTb2NrZXR9IGZvciBjaGFpbmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS53cml0ZSA9XG5Tb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAobXNnLCBvcHRpb25zLCBmbikge1xuICB0aGlzLnNlbmRQYWNrZXQoJ21lc3NhZ2UnLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYWNrZXQgdHlwZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2VuZFBhY2tldCA9IGZ1bmN0aW9uICh0eXBlLCBkYXRhLCBvcHRpb25zLCBmbikge1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGRhdGEpIHtcbiAgICBmbiA9IGRhdGE7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgIGZuID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGlmICgnY2xvc2luZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2VkJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuY29tcHJlc3MgPSBmYWxzZSAhPT0gb3B0aW9ucy5jb21wcmVzcztcblxuICB2YXIgcGFja2V0ID0ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgZGF0YTogZGF0YSxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH07XG4gIHRoaXMuZW1pdCgncGFja2V0Q3JlYXRlJywgcGFja2V0KTtcbiAgdGhpcy53cml0ZUJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIGlmIChmbikgdGhpcy5vbmNlKCdmbHVzaCcsIGZuKTtcbiAgdGhpcy5mbHVzaCgpO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NpbmcnO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9uY2UoJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2UgKCkge1xuICAgIHNlbGYub25DbG9zZSgnZm9yY2VkIGNsb3NlJyk7XG4gICAgZGVidWcoJ3NvY2tldCBjbG9zaW5nIC0gdGVsbGluZyB0cmFuc3BvcnQgdG8gY2xvc2UnKTtcbiAgICBzZWxmLnRyYW5zcG9ydC5jbG9zZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cEFuZENsb3NlICgpIHtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIGNsb3NlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB3YWl0Rm9yVXBncmFkZSAoKSB7XG4gICAgLy8gd2FpdCBmb3IgdXBncmFkZSB0byBmaW5pc2ggc2luY2Ugd2UgY2FuJ3Qgc2VuZCBwYWNrZXRzIHdoaWxlIHBhdXNpbmcgYSB0cmFuc3BvcnRcbiAgICBzZWxmLm9uY2UoJ3VwZ3JhZGUnLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIHNlbGYub25jZSgndXBncmFkZUVycm9yJywgY2xlYW51cEFuZENsb3NlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgZXJyb3JcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIGRlYnVnKCdzb2NrZXQgZXJyb3IgJWonLCBlcnIpO1xuICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB0aGlzLm9uQ2xvc2UoJ3RyYW5zcG9ydCBlcnJvcicsIGVycik7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBjbG9zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAocmVhc29uLCBkZXNjKSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2luZycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIGRlYnVnKCdzb2NrZXQgY2xvc2Ugd2l0aCByZWFzb246IFwiJXNcIicsIHJlYXNvbik7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gY2xlYXIgdGltZXJzXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ0ludGVydmFsVGltZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuXG4gICAgLy8gc3RvcCBldmVudCBmcm9tIGZpcmluZyBhZ2FpbiBmb3IgdHJhbnNwb3J0XG4gICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCdjbG9zZScpO1xuXG4gICAgLy8gZW5zdXJlIHRyYW5zcG9ydCB3b24ndCBzdGF5IG9wZW5cbiAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgLy8gaWdub3JlIGZ1cnRoZXIgdHJhbnNwb3J0IGNvbW11bmljYXRpb25cbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIHNldCByZWFkeSBzdGF0ZVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuXG4gICAgLy8gY2xlYXIgc2Vzc2lvbiBpZFxuICAgIHRoaXMuaWQgPSBudWxsO1xuXG4gICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgIHRoaXMuZW1pdCgnY2xvc2UnLCByZWFzb24sIGRlc2MpO1xuXG4gICAgLy8gY2xlYW4gYnVmZmVycyBhZnRlciwgc28gdXNlcnMgY2FuIHN0aWxsXG4gICAgLy8gZ3JhYiB0aGUgYnVmZmVycyBvbiBgY2xvc2VgIGV2ZW50XG4gICAgc2VsZi53cml0ZUJ1ZmZlciA9IFtdO1xuICAgIHNlbGYucHJldkJ1ZmZlckxlbiA9IDA7XG4gIH1cbn07XG5cbi8qKlxuICogRmlsdGVycyB1cGdyYWRlcywgcmV0dXJuaW5nIG9ubHkgdGhvc2UgbWF0Y2hpbmcgY2xpZW50IHRyYW5zcG9ydHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2VydmVyIHVwZ3JhZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5maWx0ZXJVcGdyYWRlcyA9IGZ1bmN0aW9uICh1cGdyYWRlcykge1xuICB2YXIgZmlsdGVyZWRVcGdyYWRlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IHVwZ3JhZGVzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgIGlmICh+aW5kZXgodGhpcy50cmFuc3BvcnRzLCB1cGdyYWRlc1tpXSkpIGZpbHRlcmVkVXBncmFkZXMucHVzaCh1cGdyYWRlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkVXBncmFkZXM7XG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BvcnQ7XG5cbi8qKlxuICogVHJhbnNwb3J0IGFic3RyYWN0IGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gVHJhbnNwb3J0IChvcHRzKSB7XG4gIHRoaXMucGF0aCA9IG9wdHMucGF0aDtcbiAgdGhpcy5ob3N0bmFtZSA9IG9wdHMuaG9zdG5hbWU7XG4gIHRoaXMucG9ydCA9IG9wdHMucG9ydDtcbiAgdGhpcy5zZWN1cmUgPSBvcHRzLnNlY3VyZTtcbiAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gIHRoaXMudGltZXN0YW1wUGFyYW0gPSBvcHRzLnRpbWVzdGFtcFBhcmFtO1xuICB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzID0gb3B0cy50aW1lc3RhbXBSZXF1ZXN0cztcbiAgdGhpcy5yZWFkeVN0YXRlID0gJyc7XG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50IHx8IGZhbHNlO1xuICB0aGlzLnNvY2tldCA9IG9wdHMuc29ja2V0O1xuICB0aGlzLmVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMucGZ4ID0gb3B0cy5wZng7XG4gIHRoaXMua2V5ID0gb3B0cy5rZXk7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZTtcbiAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0O1xuICB0aGlzLmNhID0gb3B0cy5jYTtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzO1xuICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuICB0aGlzLmZvcmNlTm9kZSA9IG9wdHMuZm9yY2VOb2RlO1xuXG4gIC8vIHJlc3VsdHMgb2YgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnQgZGV0ZWN0aW9uXG4gIHRoaXMuaXNSZWFjdE5hdGl2ZSA9IG9wdHMuaXNSZWFjdE5hdGl2ZTtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuICB0aGlzLmxvY2FsQWRkcmVzcyA9IG9wdHMubG9jYWxBZGRyZXNzO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihUcmFuc3BvcnQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBFbWl0cyBhbiBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAobXNnLCBkZXNjKSB7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnR5cGUgPSAnVHJhbnNwb3J0RXJyb3InO1xuICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE9wZW5zIHRoZSB0cmFuc3BvcnQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnY2xvc2VkJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG4gICAgdGhpcy5kb09wZW4oKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgdGhlIHRyYW5zcG9ydC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBtdWx0aXBsZSBwYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYWNrZXRzKSB7XG4gIGlmICgnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMud3JpdGUocGFja2V0cyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc3BvcnQgbm90IG9wZW4nKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBvcGVuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gIHRoaXMuZW1pdCgnb3BlbicpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBkYXRhLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBwYWNrZXQgPSBwYXJzZXIuZGVjb2RlUGFja2V0KGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpO1xuICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGEgZGVjb2RlZCBwYWNrZXQuXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vblBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBjbG9zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG52YXIgWEhSID0gcmVxdWlyZSgnLi9wb2xsaW5nLXhocicpO1xudmFyIEpTT05QID0gcmVxdWlyZSgnLi9wb2xsaW5nLWpzb25wJyk7XG52YXIgd2Vic29ja2V0ID0gcmVxdWlyZSgnLi93ZWJzb2NrZXQnKTtcblxuLyoqXG4gKiBFeHBvcnQgdHJhbnNwb3J0cy5cbiAqL1xuXG5leHBvcnRzLnBvbGxpbmcgPSBwb2xsaW5nO1xuZXhwb3J0cy53ZWJzb2NrZXQgPSB3ZWJzb2NrZXQ7XG5cbi8qKlxuICogUG9sbGluZyB0cmFuc3BvcnQgcG9seW1vcnBoaWMgY29uc3RydWN0b3IuXG4gKiBEZWNpZGVzIG9uIHhociB2cyBqc29ucCBiYXNlZCBvbiBmZWF0dXJlIGRldGVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb2xsaW5nIChvcHRzKSB7XG4gIHZhciB4aHI7XG4gIHZhciB4ZCA9IGZhbHNlO1xuICB2YXIgeHMgPSBmYWxzZTtcbiAgdmFyIGpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgaXNTU0wgPSAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgeGQgPSBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgeHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cblxuICBvcHRzLnhkb21haW4gPSB4ZDtcbiAgb3B0cy54c2NoZW1lID0geHM7XG4gIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcblxuICBpZiAoJ29wZW4nIGluIHhociAmJiAhb3B0cy5mb3JjZUpTT05QKSB7XG4gICAgcmV0dXJuIG5ldyBYSFIob3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFqc29ucCkgdGhyb3cgbmV3IEVycm9yKCdKU09OUCBkaXNhYmxlZCcpO1xuICAgIHJldHVybiBuZXcgSlNPTlAob3B0cyk7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAqL1xuXG52YXIgUG9sbGluZyA9IHJlcXVpcmUoJy4vcG9sbGluZycpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdjb21wb25lbnQtaW5oZXJpdCcpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gSlNPTlBQb2xsaW5nO1xuXG4vKipcbiAqIENhY2hlZCByZWd1bGFyIGV4cHJlc3Npb25zLlxuICovXG5cbnZhciByTmV3bGluZSA9IC9cXG4vZztcbnZhciByRXNjYXBlZE5ld2xpbmUgPSAvXFxcXG4vZztcblxuLyoqXG4gKiBHbG9iYWwgSlNPTlAgY2FsbGJhY2tzLlxuICovXG5cbnZhciBjYWxsYmFja3M7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSAoKSB7IH1cblxuLyoqXG4gKiBVbnRpbCBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWwgaXMgc2hpcHBlZC5cbiAqL1xuZnVuY3Rpb24gZ2xvYiAoKSB7XG4gIHJldHVybiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmXG4gICAgICA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93XG4gICAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG59XG5cbi8qKlxuICogSlNPTlAgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gSlNPTlBQb2xsaW5nIChvcHRzKSB7XG4gIFBvbGxpbmcuY2FsbCh0aGlzLCBvcHRzKTtcblxuICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcblxuICAvLyBkZWZpbmUgZ2xvYmFsIGNhbGxiYWNrcyBhcnJheSBpZiBub3QgcHJlc2VudFxuICAvLyB3ZSBkbyB0aGlzIGhlcmUgKGxhemlseSkgdG8gYXZvaWQgdW5uZWVkZWQgZ2xvYmFsIHBvbGx1dGlvblxuICBpZiAoIWNhbGxiYWNrcykge1xuICAgIC8vIHdlIG5lZWQgdG8gY29uc2lkZXIgbXVsdGlwbGUgZW5naW5lcyBpbiB0aGUgc2FtZSBwYWdlXG4gICAgdmFyIGdsb2JhbCA9IGdsb2IoKTtcbiAgICBjYWxsYmFja3MgPSBnbG9iYWwuX19fZWlvID0gKGdsb2JhbC5fX19laW8gfHwgW10pO1xuICB9XG5cbiAgLy8gY2FsbGJhY2sgaWRlbnRpZmllclxuICB0aGlzLmluZGV4ID0gY2FsbGJhY2tzLmxlbmd0aDtcblxuICAvLyBhZGQgY2FsbGJhY2sgdG8ganNvbnAgZ2xvYmFsXG4gIHZhciBzZWxmID0gdGhpcztcbiAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKG1zZykge1xuICAgIHNlbGYub25EYXRhKG1zZyk7XG4gIH0pO1xuXG4gIC8vIGFwcGVuZCB0byBxdWVyeSBzdHJpbmdcbiAgdGhpcy5xdWVyeS5qID0gdGhpcy5pbmRleDtcblxuICAvLyBwcmV2ZW50IHNwdXJpb3VzIGVycm9ycyBmcm9tIGJlaW5nIGVtaXR0ZWQgd2hlbiB0aGUgd2luZG93IGlzIHVubG9hZGVkXG4gIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLnNjcmlwdCkgc2VsZi5zY3JpcHQub25lcnJvciA9IGVtcHR5O1xuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gUG9sbGluZy5cbiAqL1xuXG5pbmhlcml0KEpTT05QUG9sbGluZywgUG9sbGluZyk7XG5cbi8qXG4gKiBKU09OUCBvbmx5IHN1cHBvcnRzIGJpbmFyeSBhcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuXG4vKipcbiAqIENsb3NlcyB0aGUgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuZm9ybSkge1xuICAgIHRoaXMuZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZm9ybSk7XG4gICAgdGhpcy5mb3JtID0gbnVsbDtcbiAgICB0aGlzLmlmcmFtZSA9IG51bGw7XG4gIH1cblxuICBQb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb1BvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gIGlmICh0aGlzLnNjcmlwdCkge1xuICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgfVxuXG4gIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gIHNjcmlwdC5zcmMgPSB0aGlzLnVyaSgpO1xuICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgc2VsZi5vbkVycm9yKCdqc29ucCBwb2xsIGVycm9yJywgZSk7XG4gIH07XG5cbiAgdmFyIGluc2VydEF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICBpZiAoaW5zZXJ0QXQpIHtcbiAgICBpbnNlcnRBdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGluc2VydEF0KTtcbiAgfSBlbHNlIHtcbiAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG4gIHRoaXMuc2NyaXB0ID0gc2NyaXB0O1xuXG4gIHZhciBpc1VBZ2Vja28gPSAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG5hdmlnYXRvciAmJiAvZ2Vja28vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIGlmIChpc1VBZ2Vja28pIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICB9LCAxMDApO1xuICB9XG59O1xuXG4vKipcbiAqIFdyaXRlcyB3aXRoIGEgaGlkZGVuIGlmcmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9Xcml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBmbikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB2YXIgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdmFyIGlkID0gdGhpcy5pZnJhbWVJZCA9ICdlaW9faWZyYW1lXycgKyB0aGlzLmluZGV4O1xuICAgIHZhciBpZnJhbWU7XG5cbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdzb2NrZXRpbyc7XG4gICAgZm9ybS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZm9ybS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XG4gICAgZm9ybS5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xuICAgIGZvcm0udGFyZ2V0ID0gaWQ7XG4gICAgZm9ybS5tZXRob2QgPSAnUE9TVCc7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjY2VwdC1jaGFyc2V0JywgJ3V0Zi04Jyk7XG4gICAgYXJlYS5uYW1lID0gJ2QnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgfVxuXG4gIHRoaXMuZm9ybS5hY3Rpb24gPSB0aGlzLnVyaSgpO1xuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlICgpIHtcbiAgICBpbml0SWZyYW1lKCk7XG4gICAgZm4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJZnJhbWUgKCkge1xuICAgIGlmIChzZWxmLmlmcmFtZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZi5mb3JtLnJlbW92ZUNoaWxkKHNlbGYuaWZyYW1lKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKCdqc29ucCBwb2xsaW5nIGlmcmFtZSByZW1vdmFsIGVycm9yJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIGllNiBkeW5hbWljIGlmcmFtZXMgd2l0aCB0YXJnZXQ9XCJcIiBzdXBwb3J0ICh0aGFua3MgQ2hyaXMgTGFtYmFjaGVyKVxuICAgICAgdmFyIGh0bWwgPSAnPGlmcmFtZSBzcmM9XCJqYXZhc2NyaXB0OjBcIiBuYW1lPVwiJyArIHNlbGYuaWZyYW1lSWQgKyAnXCI+JztcbiAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICBpZnJhbWUubmFtZSA9IHNlbGYuaWZyYW1lSWQ7XG4gICAgICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6MCc7XG4gICAgfVxuXG4gICAgaWZyYW1lLmlkID0gc2VsZi5pZnJhbWVJZDtcblxuICAgIHNlbGYuZm9ybS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIHNlbGYuaWZyYW1lID0gaWZyYW1lO1xuICB9XG5cbiAgaW5pdElmcmFtZSgpO1xuXG4gIC8vIGVzY2FwZSBcXG4gdG8gcHJldmVudCBpdCBmcm9tIGJlaW5nIGNvbnZlcnRlZCBpbnRvIFxcclxcbiBieSBzb21lIFVBc1xuICAvLyBkb3VibGUgZXNjYXBpbmcgaXMgcmVxdWlyZWQgZm9yIGVzY2FwZWQgbmV3IGxpbmVzIGJlY2F1c2UgdW5lc2NhcGluZyBvZiBuZXcgbGluZXMgY2FuIGJlIGRvbmUgc2FmZWx5IG9uIHNlcnZlci1zaWRlXG4gIGRhdGEgPSBkYXRhLnJlcGxhY2UockVzY2FwZWROZXdsaW5lLCAnXFxcXFxcbicpO1xuICB0aGlzLmFyZWEudmFsdWUgPSBkYXRhLnJlcGxhY2Uock5ld2xpbmUsICdcXFxcbicpO1xuXG4gIHRyeSB7XG4gICAgdGhpcy5mb3JtLnN1Ym1pdCgpO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIGlmICh0aGlzLmlmcmFtZS5hdHRhY2hFdmVudCkge1xuICAgIHRoaXMuaWZyYW1lLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLmlmcmFtZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlmcmFtZS5vbmxvYWQgPSBjb21wbGV0ZTtcbiAgfVxufTtcbiIsIi8qIGdsb2JhbCBhdHRhY2hFdmVudCAqL1xuXG4vKipcbiAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gKi9cblxudmFyIFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG52YXIgUG9sbGluZyA9IHJlcXVpcmUoJy4vcG9sbGluZycpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdjb21wb25lbnQtaW5oZXJpdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nLXhocicpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gWEhSO1xubW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogRW1wdHkgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSAoKSB7fVxuXG4vKipcbiAqIFhIUiBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFhIUiAob3B0cykge1xuICBQb2xsaW5nLmNhbGwodGhpcywgb3B0cyk7XG4gIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBvcHRzLnJlcXVlc3RUaW1lb3V0O1xuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGlzU1NMID0gJ2h0dHBzOicgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgIHZhciBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgIH1cblxuICAgIHRoaXMueGQgPSAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkgfHxcbiAgICAgIHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB0aGlzLnhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBQb2xsaW5nLlxuICovXG5cbmluaGVyaXQoWEhSLCBQb2xsaW5nKTtcblxuLyoqXG4gKiBYSFIgc3VwcG9ydHMgYmluYXJ5XG4gKi9cblxuWEhSLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIG9wdHMudXJpID0gdGhpcy51cmkoKTtcbiAgb3B0cy54ZCA9IHRoaXMueGQ7XG4gIG9wdHMueHMgPSB0aGlzLnhzO1xuICBvcHRzLmFnZW50ID0gdGhpcy5hZ2VudCB8fCBmYWxzZTtcbiAgb3B0cy5zdXBwb3J0c0JpbmFyeSA9IHRoaXMuc3VwcG9ydHNCaW5hcnk7XG4gIG9wdHMuZW5hYmxlc1hEUiA9IHRoaXMuZW5hYmxlc1hEUjtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIG9wdHMucmVxdWVzdFRpbWVvdXQgPSB0aGlzLnJlcXVlc3RUaW1lb3V0O1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMuZXh0cmFIZWFkZXJzID0gdGhpcy5leHRyYUhlYWRlcnM7XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG9wdHMpO1xufTtcblxuLyoqXG4gKiBTZW5kcyBkYXRhLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblhIUi5wcm90b3R5cGUuZG9Xcml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBmbikge1xuICB2YXIgaXNCaW5hcnkgPSB0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycgJiYgZGF0YSAhPT0gdW5kZWZpbmVkO1xuICB2YXIgcmVxID0gdGhpcy5yZXF1ZXN0KHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEsIGlzQmluYXJ5OiBpc0JpbmFyeSB9KTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXEub24oJ3N1Y2Nlc3MnLCBmbik7XG4gIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2VsZi5vbkVycm9yKCd4aHIgcG9zdCBlcnJvcicsIGVycik7XG4gIH0pO1xuICB0aGlzLnNlbmRYaHIgPSByZXE7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5kb1BvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCd4aHIgcG9sbCcpO1xuICB2YXIgcmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmVxLm9uKCdkYXRhJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBzZWxmLm9uRGF0YShkYXRhKTtcbiAgfSk7XG4gIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2VsZi5vbkVycm9yKCd4aHIgcG9sbCBlcnJvcicsIGVycik7XG4gIH0pO1xuICB0aGlzLnBvbGxYaHIgPSByZXE7XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0IChvcHRzKSB7XG4gIHRoaXMubWV0aG9kID0gb3B0cy5tZXRob2QgfHwgJ0dFVCc7XG4gIHRoaXMudXJpID0gb3B0cy51cmk7XG4gIHRoaXMueGQgPSAhIW9wdHMueGQ7XG4gIHRoaXMueHMgPSAhIW9wdHMueHM7XG4gIHRoaXMuYXN5bmMgPSBmYWxzZSAhPT0gb3B0cy5hc3luYztcbiAgdGhpcy5kYXRhID0gdW5kZWZpbmVkICE9PSBvcHRzLmRhdGEgPyBvcHRzLmRhdGEgOiBudWxsO1xuICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudDtcbiAgdGhpcy5pc0JpbmFyeSA9IG9wdHMuaXNCaW5hcnk7XG4gIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBvcHRzLnN1cHBvcnRzQmluYXJ5O1xuICB0aGlzLmVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG4gIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBvcHRzLnJlcXVlc3RUaW1lb3V0O1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLnBmeCA9IG9wdHMucGZ4O1xuICB0aGlzLmtleSA9IG9wdHMua2V5O1xuICB0aGlzLnBhc3NwaHJhc2UgPSBvcHRzLnBhc3NwaHJhc2U7XG4gIHRoaXMuY2VydCA9IG9wdHMuY2VydDtcbiAgdGhpcy5jYSA9IG9wdHMuY2E7XG4gIHRoaXMuY2lwaGVycyA9IG9wdHMuY2lwaGVycztcbiAgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuXG4gIHRoaXMuY3JlYXRlKCk7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBYSFIgb2JqZWN0IGFuZCBzZW5kcyB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcHRzID0geyBhZ2VudDogdGhpcy5hZ2VudCwgeGRvbWFpbjogdGhpcy54ZCwgeHNjaGVtZTogdGhpcy54cywgZW5hYmxlc1hEUjogdGhpcy5lbmFibGVzWERSIH07XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gIG9wdHMua2V5ID0gdGhpcy5rZXk7XG4gIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICBvcHRzLmNhID0gdGhpcy5jYTtcbiAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gIHZhciB4aHIgPSB0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRyeSB7XG4gICAgZGVidWcoJ3hociBvcGVuICVzOiAlcycsIHRoaXMubWV0aG9kLCB0aGlzLnVyaSk7XG4gICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJpLCB0aGlzLmFzeW5jKTtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sgJiYgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgIGlmICh0aGlzLmV4dHJhSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5leHRyYUhlYWRlcnNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICBpZiAoJ1BPU1QnID09PSB0aGlzLm1ldGhvZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuaXNCaW5hcnkpIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnKi8qJyk7XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIC8vIGllNiBjaGVja1xuICAgIGlmICgnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlcXVlc3RUaW1lb3V0KSB7XG4gICAgICB4aHIudGltZW91dCA9IHRoaXMucmVxdWVzdFRpbWVvdXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYub25Mb2FkKCk7XG4gICAgICB9O1xuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYub25FcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgICAgICAgICAgaWYgKHNlbGYuc3VwcG9ydHNCaW5hcnkgJiYgY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKSB7XG4gICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDQgIT09IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgIGlmICgyMDAgPT09IHhoci5zdGF0dXMgfHwgMTIyMyA9PT0geGhyLnN0YXR1cykge1xuICAgICAgICAgIHNlbGYub25Mb2FkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBgZXJyb3JgIGV2ZW50IGhhbmRsZXIgdGhhdCdzIHVzZXItc2V0XG4gICAgICAgICAgLy8gZG9lcyBub3QgdGhyb3cgaW4gdGhlIHNhbWUgdGljayBhbmQgZ2V0cyBjYXVnaHQgaGVyZVxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yKHhoci5zdGF0dXMpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlYnVnKCd4aHIgZGF0YSAlcycsIHRoaXMuZGF0YSk7XG4gICAgeGhyLnNlbmQodGhpcy5kYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE5lZWQgdG8gZGVmZXIgc2luY2UgLmNyZWF0ZSgpIGlzIGNhbGxlZCBkaXJlY3RseSBmaHJvbSB0aGUgY29uc3RydWN0b3JcbiAgICAvLyBhbmQgdGh1cyB0aGUgJ2Vycm9yJyBldmVudCBjYW4gb25seSBiZSBvbmx5IGJvdW5kICphZnRlciogdGhpcyBleGNlcHRpb25cbiAgICAvLyBvY2N1cnMuICBUaGVyZWZvcmUsIGFsc28sIHdlIGNhbm5vdCB0aHJvdyBoZXJlIGF0IGFsbC5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYub25FcnJvcihlKTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuaW5kZXggPSBSZXF1ZXN0LnJlcXVlc3RzQ291bnQrKztcbiAgICBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdID0gdGhpcztcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0KCdzdWNjZXNzJyk7XG4gIHRoaXMuY2xlYW51cCgpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgaWYgd2UgaGF2ZSBkYXRhLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuZW1pdCgnZGF0YScsIGRhdGEpO1xuICB0aGlzLm9uU3VjY2VzcygpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgdGhpcy5jbGVhbnVwKHRydWUpO1xufTtcblxuLyoqXG4gKiBDbGVhbnMgdXAgaG91c2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uIChmcm9tRXJyb3IpIHtcbiAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgdGhpcy54aHIgfHwgbnVsbCA9PT0gdGhpcy54aHIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8geG1saHR0cHJlcXVlc3RcbiAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICB0aGlzLnhoci5vbmxvYWQgPSB0aGlzLnhoci5vbmVycm9yID0gZW1wdHk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy54aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHk7XG4gIH1cblxuICBpZiAoZnJvbUVycm9yKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVsZXRlIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF07XG4gIH1cblxuICB0aGlzLnhociA9IG51bGw7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGxvYWQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICB2YXIgY29udGVudFR5cGU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnRlbnRUeXBlID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgaWYgKGNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJykge1xuICAgICAgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlIHx8IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLm9uRXJyb3IoZSk7XG4gIH1cbiAgaWYgKG51bGwgIT0gZGF0YSkge1xuICAgIHRoaXMub25EYXRhKGRhdGEpO1xuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGl0IGhhcyBYRG9tYWluUmVxdWVzdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5oYXNYRFIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2YgWERvbWFpblJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLnhzICYmIHRoaXMuZW5hYmxlc1hEUjtcbn07XG5cbi8qKlxuICogQWJvcnRzIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xlYW51cCgpO1xufTtcblxuLyoqXG4gKiBBYm9ydHMgcGVuZGluZyByZXF1ZXN0cyB3aGVuIHVubG9hZGluZyB0aGUgd2luZG93LiBUaGlzIGlzIG5lZWRlZCB0byBwcmV2ZW50XG4gKiBtZW1vcnkgbGVha3MgKGUuZy4gd2hlbiB1c2luZyBJRSkgYW5kIHRvIGVuc3VyZSB0aGF0IG5vIHNwdXJpb3VzIGVycm9yIGlzXG4gKiBlbWl0dGVkLlxuICovXG5cblJlcXVlc3QucmVxdWVzdHNDb3VudCA9IDA7XG5SZXF1ZXN0LnJlcXVlc3RzID0ge307XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlmICh0eXBlb2YgYXR0YWNoRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhdHRhY2hFdmVudCgnb251bmxvYWQnLCB1bmxvYWRIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciB0ZXJtaW5hdGlvbkV2ZW50ID0gJ29ucGFnZWhpZGUnIGluIHNlbGYgPyAncGFnZWhpZGUnIDogJ3VubG9hZCc7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0ZXJtaW5hdGlvbkV2ZW50LCB1bmxvYWRIYW5kbGVyLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5sb2FkSGFuZGxlciAoKSB7XG4gIGZvciAodmFyIGkgaW4gUmVxdWVzdC5yZXF1ZXN0cykge1xuICAgIGlmIChSZXF1ZXN0LnJlcXVlc3RzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBSZXF1ZXN0LnJlcXVlc3RzW2ldLmFib3J0KCk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIFRyYW5zcG9ydCA9IHJlcXVpcmUoJy4uL3RyYW5zcG9ydCcpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdjb21wb25lbnQtaW5oZXJpdCcpO1xudmFyIHllYXN0ID0gcmVxdWlyZSgneWVhc3QnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6cG9sbGluZycpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUG9sbGluZztcblxuLyoqXG4gKiBJcyBYSFIyIHN1cHBvcnRlZD9cbiAqL1xuXG52YXIgaGFzWEhSMiA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoJ3htbGh0dHByZXF1ZXN0LXNzbCcpO1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHsgeGRvbWFpbjogZmFsc2UgfSk7XG4gIHJldHVybiBudWxsICE9IHhoci5yZXNwb25zZVR5cGU7XG59KSgpO1xuXG4vKipcbiAqIFBvbGxpbmcgaW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBQb2xsaW5nIChvcHRzKSB7XG4gIHZhciBmb3JjZUJhc2U2NCA9IChvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQpO1xuICBpZiAoIWhhc1hIUjIgfHwgZm9yY2VCYXNlNjQpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cbiAgVHJhbnNwb3J0LmNhbGwodGhpcywgb3B0cyk7XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBUcmFuc3BvcnQuXG4gKi9cblxuaW5oZXJpdChQb2xsaW5nLCBUcmFuc3BvcnQpO1xuXG4vKipcbiAqIFRyYW5zcG9ydCBuYW1lLlxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLm5hbWUgPSAncG9sbGluZyc7XG5cbi8qKlxuICogT3BlbnMgdGhlIHNvY2tldCAodHJpZ2dlcnMgcG9sbGluZykuIFdlIHdyaXRlIGEgUElORyBtZXNzYWdlIHRvIGRldGVybWluZVxuICogd2hlbiB0aGUgdHJhbnNwb3J0IGlzIG9wZW4uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUuZG9PcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBvbGwoKTtcbn07XG5cbi8qKlxuICogUGF1c2VzIHBvbGxpbmcuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgdXBvbiBidWZmZXJzIGFyZSBmbHVzaGVkIGFuZCB0cmFuc3BvcnQgaXMgcGF1c2VkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIChvblBhdXNlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLnJlYWR5U3RhdGUgPSAncGF1c2luZyc7XG5cbiAgZnVuY3Rpb24gcGF1c2UgKCkge1xuICAgIGRlYnVnKCdwYXVzZWQnKTtcbiAgICBzZWxmLnJlYWR5U3RhdGUgPSAncGF1c2VkJztcbiAgICBvblBhdXNlKCk7XG4gIH1cblxuICBpZiAodGhpcy5wb2xsaW5nIHx8ICF0aGlzLndyaXRhYmxlKSB7XG4gICAgdmFyIHRvdGFsID0gMDtcblxuICAgIGlmICh0aGlzLnBvbGxpbmcpIHtcbiAgICAgIGRlYnVnKCd3ZSBhcmUgY3VycmVudGx5IHBvbGxpbmcgLSB3YWl0aW5nIHRvIHBhdXNlJyk7XG4gICAgICB0b3RhbCsrO1xuICAgICAgdGhpcy5vbmNlKCdwb2xsQ29tcGxldGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlYnVnKCdwcmUtcGF1c2UgcG9sbGluZyBjb21wbGV0ZScpO1xuICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMud3JpdGFibGUpIHtcbiAgICAgIGRlYnVnKCd3ZSBhcmUgY3VycmVudGx5IHdyaXRpbmcgLSB3YWl0aW5nIHRvIHBhdXNlJyk7XG4gICAgICB0b3RhbCsrO1xuICAgICAgdGhpcy5vbmNlKCdkcmFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVidWcoJ3ByZS1wYXVzZSB3cml0aW5nIGNvbXBsZXRlJyk7XG4gICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXVzZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBwb2xsaW5nIGN5Y2xlLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUucG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3BvbGxpbmcnKTtcbiAgdGhpcy5wb2xsaW5nID0gdHJ1ZTtcbiAgdGhpcy5kb1BvbGwoKTtcbiAgdGhpcy5lbWl0KCdwb2xsJyk7XG59O1xuXG4vKipcbiAqIE92ZXJsb2FkcyBvbkRhdGEgdG8gZGV0ZWN0IHBheWxvYWRzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgZGVidWcoJ3BvbGxpbmcgZ290IGRhdGEgJXMnLCBkYXRhKTtcbiAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKHBhY2tldCwgaW5kZXgsIHRvdGFsKSB7XG4gICAgLy8gaWYgaXRzIHRoZSBmaXJzdCBtZXNzYWdlIHdlIGNvbnNpZGVyIHRoZSB0cmFuc3BvcnQgb3BlblxuICAgIGlmICgnb3BlbmluZycgPT09IHNlbGYucmVhZHlTdGF0ZSkge1xuICAgICAgc2VsZi5vbk9wZW4oKTtcbiAgICB9XG5cbiAgICAvLyBpZiBpdHMgYSBjbG9zZSBwYWNrZXQsIHdlIGNsb3NlIHRoZSBvbmdvaW5nIHJlcXVlc3RzXG4gICAgaWYgKCdjbG9zZScgPT09IHBhY2tldC50eXBlKSB7XG4gICAgICBzZWxmLm9uQ2xvc2UoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UgYnlwYXNzIG9uRGF0YSBhbmQgaGFuZGxlIHRoZSBtZXNzYWdlXG4gICAgc2VsZi5vblBhY2tldChwYWNrZXQpO1xuICB9O1xuXG4gIC8vIGRlY29kZSBwYXlsb2FkXG4gIHBhcnNlci5kZWNvZGVQYXlsb2FkKGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUsIGNhbGxiYWNrKTtcblxuICAvLyBpZiBhbiBldmVudCBkaWQgbm90IHRyaWdnZXIgY2xvc2luZ1xuICBpZiAoJ2Nsb3NlZCcgIT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIC8vIGlmIHdlIGdvdCBkYXRhIHdlJ3JlIG5vdCBwb2xsaW5nXG4gICAgdGhpcy5wb2xsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KCdwb2xsQ29tcGxldGUnKTtcblxuICAgIGlmICgnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5wb2xsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdpZ25vcmluZyBwb2xsIC0gdHJhbnNwb3J0IHN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEZvciBwb2xsaW5nLCBzZW5kIGEgY2xvc2UgcGFja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBmdW5jdGlvbiBjbG9zZSAoKSB7XG4gICAgZGVidWcoJ3dyaXRpbmcgY2xvc2UgcGFja2V0Jyk7XG4gICAgc2VsZi53cml0ZShbeyB0eXBlOiAnY2xvc2UnIH1dKTtcbiAgfVxuXG4gIGlmICgnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIGRlYnVnKCd0cmFuc3BvcnQgb3BlbiAtIGNsb3NpbmcnKTtcbiAgICBjbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGluIGNhc2Ugd2UncmUgdHJ5aW5nIHRvIGNsb3NlIHdoaWxlXG4gICAgLy8gaGFuZHNoYWtpbmcgaXMgaW4gcHJvZ3Jlc3MgKEdILTE2NClcbiAgICBkZWJ1ZygndHJhbnNwb3J0IG5vdCBvcGVuIC0gZGVmZXJyaW5nIGNsb3NlJyk7XG4gICAgdGhpcy5vbmNlKCdvcGVuJywgY2xvc2UpO1xuICB9XG59O1xuXG4vKipcbiAqIFdyaXRlcyBhIHBhY2tldHMgcGF5bG9hZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBkYXRhIHBhY2tldHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRyYWluIGNhbGxiYWNrXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChwYWNrZXRzKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuICB2YXIgY2FsbGJhY2tmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBzZWxmLmVtaXQoJ2RyYWluJyk7XG4gIH07XG5cbiAgcGFyc2VyLmVuY29kZVBheWxvYWQocGFja2V0cywgdGhpcy5zdXBwb3J0c0JpbmFyeSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBzZWxmLmRvV3JpdGUoZGF0YSwgY2FsbGJhY2tmbik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLnVyaSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgdmFyIHNjaGVtYSA9IHRoaXMuc2VjdXJlID8gJ2h0dHBzJyA6ICdodHRwJztcbiAgdmFyIHBvcnQgPSAnJztcblxuICAvLyBjYWNoZSBidXN0aW5nIGlzIGZvcmNlZFxuICBpZiAoZmFsc2UgIT09IHRoaXMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICBxdWVyeVt0aGlzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgIXF1ZXJ5LnNpZCkge1xuICAgIHF1ZXJ5LmI2NCA9IDE7XG4gIH1cblxuICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICBpZiAodGhpcy5wb3J0ICYmICgoJ2h0dHBzJyA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICgnaHR0cCcgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gODApKSkge1xuICAgIHBvcnQgPSAnOicgKyB0aGlzLnBvcnQ7XG4gIH1cblxuICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgIHF1ZXJ5ID0gJz8nICsgcXVlcnk7XG4gIH1cblxuICB2YXIgaXB2NiA9IHRoaXMuaG9zdG5hbWUuaW5kZXhPZignOicpICE9PSAtMTtcbiAgcmV0dXJuIHNjaGVtYSArICc6Ly8nICsgKGlwdjYgPyAnWycgKyB0aGlzLmhvc3RuYW1lICsgJ10nIDogdGhpcy5ob3N0bmFtZSkgKyBwb3J0ICsgdGhpcy5wYXRoICsgcXVlcnk7XG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBUcmFuc3BvcnQgPSByZXF1aXJlKCcuLi90cmFuc3BvcnQnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciB5ZWFzdCA9IHJlcXVpcmUoJ3llYXN0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OndlYnNvY2tldCcpO1xuXG52YXIgQnJvd3NlcldlYlNvY2tldCwgTm9kZVdlYlNvY2tldDtcblxuaWYgKHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIEJyb3dzZXJXZWJTb2NrZXQgPSBXZWJTb2NrZXQ7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICBCcm93c2VyV2ViU29ja2V0ID0gc2VsZi5XZWJTb2NrZXQgfHwgc2VsZi5Nb3pXZWJTb2NrZXQ7XG59IGVsc2Uge1xuICB0cnkge1xuICAgIE5vZGVXZWJTb2NrZXQgPSByZXF1aXJlKCd3cycpO1xuICB9IGNhdGNoIChlKSB7IH1cbn1cblxuLyoqXG4gKiBHZXQgZWl0aGVyIHRoZSBgV2ViU29ja2V0YCBvciBgTW96V2ViU29ja2V0YCBnbG9iYWxzXG4gKiBpbiB0aGUgYnJvd3NlciBvciB0cnkgdG8gcmVzb2x2ZSBXZWJTb2NrZXQtY29tcGF0aWJsZVxuICogaW50ZXJmYWNlIGV4cG9zZWQgYnkgYHdzYCBmb3IgTm9kZS1saWtlIGVudmlyb25tZW50LlxuICovXG5cbnZhciBXZWJTb2NrZXRJbXBsID0gQnJvd3NlcldlYlNvY2tldCB8fCBOb2RlV2ViU29ja2V0O1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gV1M7XG5cbi8qKlxuICogV2ViU29ja2V0IHRyYW5zcG9ydCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHtPYmplY3R9IGNvbm5lY3Rpb24gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBXUyAob3B0cykge1xuICB2YXIgZm9yY2VCYXNlNjQgPSAob3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0KTtcbiAgaWYgKGZvcmNlQmFzZTY0KSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG4gIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSBvcHRzLnBlck1lc3NhZ2VEZWZsYXRlO1xuICB0aGlzLnVzaW5nQnJvd3NlcldlYlNvY2tldCA9IEJyb3dzZXJXZWJTb2NrZXQgJiYgIW9wdHMuZm9yY2VOb2RlO1xuICB0aGlzLnByb3RvY29scyA9IG9wdHMucHJvdG9jb2xzO1xuICBpZiAoIXRoaXMudXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgV2ViU29ja2V0SW1wbCA9IE5vZGVXZWJTb2NrZXQ7XG4gIH1cbiAgVHJhbnNwb3J0LmNhbGwodGhpcywgb3B0cyk7XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBUcmFuc3BvcnQuXG4gKi9cblxuaW5oZXJpdChXUywgVHJhbnNwb3J0KTtcblxuLyoqXG4gKiBUcmFuc3BvcnQgbmFtZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbldTLnByb3RvdHlwZS5uYW1lID0gJ3dlYnNvY2tldCc7XG5cbi8qXG4gKiBXZWJTb2NrZXRzIHN1cHBvcnQgYmluYXJ5XG4gKi9cblxuV1MucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcblxuLyoqXG4gKiBPcGVucyBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLmRvT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmNoZWNrKCkpIHtcbiAgICAvLyBsZXQgcHJvYmUgdGltZW91dFxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB1cmkgPSB0aGlzLnVyaSgpO1xuICB2YXIgcHJvdG9jb2xzID0gdGhpcy5wcm90b2NvbHM7XG4gIHZhciBvcHRzID0ge1xuICAgIGFnZW50OiB0aGlzLmFnZW50LFxuICAgIHBlck1lc3NhZ2VEZWZsYXRlOiB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlXG4gIH07XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gIG9wdHMua2V5ID0gdGhpcy5rZXk7XG4gIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICBvcHRzLmNhID0gdGhpcy5jYTtcbiAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuICBpZiAodGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICBvcHRzLmhlYWRlcnMgPSB0aGlzLmV4dHJhSGVhZGVycztcbiAgfVxuICBpZiAodGhpcy5sb2NhbEFkZHJlc3MpIHtcbiAgICBvcHRzLmxvY2FsQWRkcmVzcyA9IHRoaXMubG9jYWxBZGRyZXNzO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB0aGlzLndzID1cbiAgICAgIHRoaXMudXNpbmdCcm93c2VyV2ViU29ja2V0ICYmICF0aGlzLmlzUmVhY3ROYXRpdmVcbiAgICAgICAgPyBwcm90b2NvbHNcbiAgICAgICAgICA/IG5ldyBXZWJTb2NrZXRJbXBsKHVyaSwgcHJvdG9jb2xzKVxuICAgICAgICAgIDogbmV3IFdlYlNvY2tldEltcGwodXJpKVxuICAgICAgICA6IG5ldyBXZWJTb2NrZXRJbXBsKHVyaSwgcHJvdG9jb2xzLCBvcHRzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG5cbiAgaWYgKHRoaXMud3MuYmluYXJ5VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMud3Muc3VwcG9ydHMgJiYgdGhpcy53cy5zdXBwb3J0cy5iaW5hcnkpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcbiAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSAnbm9kZWJ1ZmZlcic7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53cy5iaW5hcnlUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgfVxuXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbn07XG5cbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNvY2tldFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMud3Mub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25PcGVuKCk7XG4gIH07XG4gIHRoaXMud3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uQ2xvc2UoKTtcbiAgfTtcbiAgdGhpcy53cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBzZWxmLm9uRGF0YShldi5kYXRhKTtcbiAgfTtcbiAgdGhpcy53cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcml0ZXMgZGF0YSB0byBzb2NrZXQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgb2YgcGFja2V0cy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChwYWNrZXRzKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gIC8vIGVuY29kZVBhY2tldCBlZmZpY2llbnQgYXMgaXQgdXNlcyBXUyBmcmFtaW5nXG4gIC8vIG5vIG5lZWQgZm9yIGVuY29kZVBheWxvYWRcbiAgdmFyIHRvdGFsID0gcGFja2V0cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdG90YWw7IGkgPCBsOyBpKyspIHtcbiAgICAoZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgcGFyc2VyLmVuY29kZVBhY2tldChwYWNrZXQsIHNlbGYuc3VwcG9ydHNCaW5hcnksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICghc2VsZi51c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICAvLyBhbHdheXMgY3JlYXRlIGEgbmV3IG9iamVjdCAoR0gtNDM3KVxuICAgICAgICAgIHZhciBvcHRzID0ge307XG4gICAgICAgICAgaWYgKHBhY2tldC5vcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gcGFja2V0Lm9wdGlvbnMuY29tcHJlc3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGYucGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgICAgICAgIHZhciBsZW4gPSAnc3RyaW5nJyA9PT0gdHlwZW9mIGRhdGEgPyBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA8IHNlbGYucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb21ldGltZXMgdGhlIHdlYnNvY2tldCBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZCBidXQgdGhlIGJyb3dzZXIgZGlkbid0XG4gICAgICAgIC8vIGhhdmUgYSBjaGFuY2Ugb2YgaW5mb3JtaW5nIHVzIGFib3V0IGl0IHlldCwgaW4gdGhhdCBjYXNlIHNlbmQgd2lsbFxuICAgICAgICAvLyB0aHJvdyBhbiBlcnJvclxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChzZWxmLnVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgLy8gVHlwZUVycm9yIGlzIHRocm93biB3aGVuIHBhc3NpbmcgdGhlIHNlY29uZCBhcmd1bWVudCBvbiBTYWZhcmlcbiAgICAgICAgICAgIHNlbGYud3Muc2VuZChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi53cy5zZW5kKGRhdGEsIG9wdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGRlYnVnKCd3ZWJzb2NrZXQgY2xvc2VkIGJlZm9yZSBvbmNsb3NlIGV2ZW50Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAtLXRvdGFsIHx8IGRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH0pKHBhY2tldHNbaV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9uZSAoKSB7XG4gICAgc2VsZi5lbWl0KCdmbHVzaCcpO1xuXG4gICAgLy8gZmFrZSBkcmFpblxuICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYud3JpdGFibGUgPSB0cnVlO1xuICAgICAgc2VsZi5lbWl0KCdkcmFpbicpO1xuICAgIH0sIDApO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGNsb3NlXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIFRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHRoaXMud3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy53cy5jbG9zZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLnVyaSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgdmFyIHNjaGVtYSA9IHRoaXMuc2VjdXJlID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgcG9ydCA9ICcnO1xuXG4gIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gIGlmICh0aGlzLnBvcnQgJiYgKCgnd3NzJyA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgKCd3cycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gODApKSkge1xuICAgIHBvcnQgPSAnOicgKyB0aGlzLnBvcnQ7XG4gIH1cblxuICAvLyBhcHBlbmQgdGltZXN0YW1wIHRvIFVSSVxuICBpZiAodGhpcy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgIHF1ZXJ5W3RoaXMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgfVxuXG4gIC8vIGNvbW11bmljYXRlIGJpbmFyeSBzdXBwb3J0IGNhcGFiaWxpdGllc1xuICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICBxdWVyeS5iNjQgPSAxO1xuICB9XG5cbiAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgdmFyIGlwdjYgPSB0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHJldHVybiBzY2hlbWEgKyAnOi8vJyArIChpcHY2ID8gJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyA6IHRoaXMuaG9zdG5hbWUpICsgcG9ydCArIHRoaXMucGF0aCArIHF1ZXJ5O1xufTtcblxuLyoqXG4gKiBGZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViU29ja2V0LlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgdGhpcyB0cmFuc3BvcnQgaXMgYXZhaWxhYmxlLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5XUy5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIVdlYlNvY2tldEltcGwgJiYgISgnX19pbml0aWFsaXplJyBpbiBXZWJTb2NrZXRJbXBsICYmIHRoaXMubmFtZSA9PT0gV1MucHJvdG90eXBlLm5hbWUpO1xufTtcbiIsIi8vIGJyb3dzZXIgc2hpbSBmb3IgeG1saHR0cHJlcXVlc3QgbW9kdWxlXG5cbnZhciBoYXNDT1JTID0gcmVxdWlyZSgnaGFzLWNvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0cykge1xuICB2YXIgeGRvbWFpbiA9IG9wdHMueGRvbWFpbjtcblxuICAvLyBzY2hlbWUgbXVzdCBiZSBzYW1lIHdoZW4gdXNpZ24gWERvbWFpblJlcXVlc3RcbiAgLy8gaHR0cDovL2Jsb2dzLm1zZG4uY29tL2IvaWVpbnRlcm5hbHMvYXJjaGl2ZS8yMDEwLzA1LzEzL3hkb21haW5yZXF1ZXN0LXJlc3RyaWN0aW9ucy1saW1pdGF0aW9ucy1hbmQtd29ya2Fyb3VuZHMuYXNweFxuICB2YXIgeHNjaGVtZSA9IG9wdHMueHNjaGVtZTtcblxuICAvLyBYRG9tYWluUmVxdWVzdCBoYXMgYSBmbG93IG9mIG5vdCBzZW5kaW5nIGNvb2tpZSwgdGhlcmVmb3JlIGl0IHNob3VsZCBiZSBkaXNhYmxlZCBhcyBhIGRlZmF1bHQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9BdXRvbWF0dGljL2VuZ2luZS5pby1jbGllbnQvcHVsbC8yMTdcbiAgdmFyIGVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgLy8gWE1MSHR0cFJlcXVlc3QgY2FuIGJlIGRpc2FibGVkIG9uIElFXG4gIHRyeSB7XG4gICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgJiYgKCF4ZG9tYWluIHx8IGhhc0NPUlMpKSB7XG4gICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7IH1cblxuICAvLyBVc2UgWERvbWFpblJlcXVlc3QgZm9yIElFOCBpZiBlbmFibGVzWERSIGlzIHRydWVcbiAgLy8gYmVjYXVzZSBsb2FkaW5nIGJhciBrZWVwcyBmbGFzaGluZyB3aGVuIHVzaW5nIGpzb25wLXBvbGxpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3l1amlvc2FrYS9zb2NrZS5pby1pZTgtbG9hZGluZy1leGFtcGxlXG4gIHRyeSB7XG4gICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgWERvbWFpblJlcXVlc3QgJiYgIXhzY2hlbWUgJiYgZW5hYmxlc1hEUikge1xuICAgICAgcmV0dXJuIG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgaWYgKCF4ZG9tYWluKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgc2VsZltbJ0FjdGl2ZSddLmNvbmNhdCgnT2JqZWN0Jykuam9pbignWCcpXSgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfVxufTtcbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VzID0gW107XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIHZhciBwcmV2VGltZTtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdmFyIGluZGV4ID0gZXhwb3J0cy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGV4cG9ydHMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIGk7XG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleHBvcnRzLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnN0YW5jZSA9IGV4cG9ydHMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcbnZhciBoYXNCaW5hcnkgPSByZXF1aXJlKCdoYXMtYmluYXJ5MicpO1xudmFyIHNsaWNlQnVmZmVyID0gcmVxdWlyZSgnYXJyYXlidWZmZXIuc2xpY2UnKTtcbnZhciBhZnRlciA9IHJlcXVpcmUoJ2FmdGVyJyk7XG52YXIgdXRmOCA9IHJlcXVpcmUoJy4vdXRmOCcpO1xuXG52YXIgYmFzZTY0ZW5jb2RlcjtcbmlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gIGJhc2U2NGVuY29kZXIgPSByZXF1aXJlKCdiYXNlNjQtYXJyYXlidWZmZXInKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB3ZSBhcmUgcnVubmluZyBhbiBhbmRyb2lkIGJyb3dzZXIuIFRoYXQgcmVxdWlyZXMgdXMgdG8gdXNlXG4gKiBBcnJheUJ1ZmZlciB3aXRoIHBvbGxpbmcgdHJhbnNwb3J0cy4uLlxuICpcbiAqIGh0dHA6Ly9naGluZGEubmV0L2pwZWctYmxvYi1hamF4LWFuZHJvaWQvXG4gKi9cblxudmFyIGlzQW5kcm9pZCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9BbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBDaGVjayBpZiB3ZSBhcmUgcnVubmluZyBpbiBQaGFudG9tSlMuXG4gKiBVcGxvYWRpbmcgYSBCbG9iIHdpdGggUGhhbnRvbUpTIGRvZXMgbm90IHdvcmsgY29ycmVjdGx5LCBhcyByZXBvcnRlZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2FyaXlhL3BoYW50b21qcy9pc3N1ZXMvMTEzOTVcbiAqIEB0eXBlIGJvb2xlYW5cbiAqL1xudmFyIGlzUGhhbnRvbUpTID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL1BoYW50b21KUy9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogV2hlbiB0cnVlLCBhdm9pZHMgdXNpbmcgQmxvYnMgdG8gZW5jb2RlIHBheWxvYWRzLlxuICogQHR5cGUgYm9vbGVhblxuICovXG52YXIgZG9udFNlbmRCbG9icyA9IGlzQW5kcm9pZCB8fCBpc1BoYW50b21KUztcblxuLyoqXG4gKiBDdXJyZW50IHByb3RvY29sIHZlcnNpb24uXG4gKi9cblxuZXhwb3J0cy5wcm90b2NvbCA9IDM7XG5cbi8qKlxuICogUGFja2V0IHR5cGVzLlxuICovXG5cbnZhciBwYWNrZXRzID0gZXhwb3J0cy5wYWNrZXRzID0ge1xuICAgIG9wZW46ICAgICAwICAgIC8vIG5vbi13c1xuICAsIGNsb3NlOiAgICAxICAgIC8vIG5vbi13c1xuICAsIHBpbmc6ICAgICAyXG4gICwgcG9uZzogICAgIDNcbiAgLCBtZXNzYWdlOiAgNFxuICAsIHVwZ3JhZGU6ICA1XG4gICwgbm9vcDogICAgIDZcbn07XG5cbnZhciBwYWNrZXRzbGlzdCA9IGtleXMocGFja2V0cyk7XG5cbi8qKlxuICogUHJlbWFkZSBlcnJvciBwYWNrZXQuXG4gKi9cblxudmFyIGVyciA9IHsgdHlwZTogJ2Vycm9yJywgZGF0YTogJ3BhcnNlciBlcnJvcicgfTtcblxuLyoqXG4gKiBDcmVhdGUgYSBibG9iIGFwaSBldmVuIGZvciBibG9iIGJ1aWxkZXIgd2hlbiB2ZW5kb3IgcHJlZml4ZXMgZXhpc3RcbiAqL1xuXG52YXIgQmxvYiA9IHJlcXVpcmUoJ2Jsb2InKTtcblxuLyoqXG4gKiBFbmNvZGVzIGEgcGFja2V0LlxuICpcbiAqICAgICA8cGFja2V0IHR5cGUgaWQ+IFsgPGRhdGE+IF1cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICA1aGVsbG8gd29ybGRcbiAqICAgICAzXG4gKiAgICAgNFxuICpcbiAqIEJpbmFyeSBpcyBlbmNvZGVkIGluIGFuIGlkZW50aWNhbCBwcmluY2lwbGVcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCB1dGY4ZW5jb2RlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQmluYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBzdXBwb3J0c0JpbmFyeTtcbiAgICBzdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB1dGY4ZW5jb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSB1dGY4ZW5jb2RlO1xuICAgIHV0ZjhlbmNvZGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIGRhdGEgPSAocGFja2V0LmRhdGEgPT09IHVuZGVmaW5lZClcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogcGFja2V0LmRhdGEuYnVmZmVyIHx8IHBhY2tldC5kYXRhO1xuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBlbmNvZGVBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIGRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgcmV0dXJuIGVuY29kZUJsb2IocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICB9XG5cbiAgLy8gbWlnaHQgYmUgYW4gb2JqZWN0IHdpdGggeyBiYXNlNjQ6IHRydWUsIGRhdGE6IGRhdGFBc0Jhc2U2NFN0cmluZyB9XG4gIGlmIChkYXRhICYmIGRhdGEuYmFzZTY0KSB7XG4gICAgcmV0dXJuIGVuY29kZUJhc2U2NE9iamVjdChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8vIFNlbmRpbmcgZGF0YSBhcyBhIHV0Zi04IHN0cmluZ1xuICB2YXIgZW5jb2RlZCA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuXG4gIC8vIGRhdGEgZnJhZ21lbnQgaXMgb3B0aW9uYWxcbiAgaWYgKHVuZGVmaW5lZCAhPT0gcGFja2V0LmRhdGEpIHtcbiAgICBlbmNvZGVkICs9IHV0ZjhlbmNvZGUgPyB1dGY4LmVuY29kZShTdHJpbmcocGFja2V0LmRhdGEpLCB7IHN0cmljdDogZmFsc2UgfSkgOiBTdHJpbmcocGFja2V0LmRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGxiYWNrKCcnICsgZW5jb2RlZCk7XG5cbn07XG5cbmZ1bmN0aW9uIGVuY29kZUJhc2U2NE9iamVjdChwYWNrZXQsIGNhbGxiYWNrKSB7XG4gIC8vIHBhY2tldCBkYXRhIGlzIGFuIG9iamVjdCB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogZGF0YUFzQmFzZTY0U3RyaW5nIH1cbiAgdmFyIG1lc3NhZ2UgPSAnYicgKyBleHBvcnRzLnBhY2tldHNbcGFja2V0LnR5cGVdICsgcGFja2V0LmRhdGEuZGF0YTtcbiAgcmV0dXJuIGNhbGxiYWNrKG1lc3NhZ2UpO1xufVxuXG4vKipcbiAqIEVuY29kZSBwYWNrZXQgaGVscGVycyBmb3IgYmluYXJ5IHR5cGVzXG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBkYXRhID0gcGFja2V0LmRhdGE7XG4gIHZhciBjb250ZW50QXJyYXkgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgdmFyIHJlc3VsdEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDEgKyBkYXRhLmJ5dGVMZW5ndGgpO1xuXG4gIHJlc3VsdEJ1ZmZlclswXSA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdEJ1ZmZlcltpKzFdID0gY29udGVudEFycmF5W2ldO1xuICB9XG5cbiAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdEJ1ZmZlci5idWZmZXIpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVCbG9iQXNBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZnIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQoeyB0eXBlOiBwYWNrZXQudHlwZSwgZGF0YTogZnIucmVzdWx0IH0sIHN1cHBvcnRzQmluYXJ5LCB0cnVlLCBjYWxsYmFjayk7XG4gIH07XG4gIHJldHVybiBmci5yZWFkQXNBcnJheUJ1ZmZlcihwYWNrZXQuZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUJsb2IocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmIChkb250U2VuZEJsb2JzKSB7XG4gICAgcmV0dXJuIGVuY29kZUJsb2JBc0FycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBuZXcgVWludDhBcnJheSgxKTtcbiAgbGVuZ3RoWzBdID0gcGFja2V0c1twYWNrZXQudHlwZV07XG4gIHZhciBibG9iID0gbmV3IEJsb2IoW2xlbmd0aC5idWZmZXIsIHBhY2tldC5kYXRhXSk7XG5cbiAgcmV0dXJuIGNhbGxiYWNrKGJsb2IpO1xufVxuXG4vKipcbiAqIEVuY29kZXMgYSBwYWNrZXQgd2l0aCBiaW5hcnkgZGF0YSBpbiBhIGJhc2U2NCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0LCBoYXMgYHR5cGVgIGFuZCBgZGF0YWBcbiAqIEByZXR1cm4ge1N0cmluZ30gYmFzZTY0IGVuY29kZWQgbWVzc2FnZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0ID0gZnVuY3Rpb24ocGFja2V0LCBjYWxsYmFjaykge1xuICB2YXIgbWVzc2FnZSA9ICdiJyArIGV4cG9ydHMucGFja2V0c1twYWNrZXQudHlwZV07XG4gIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFja2V0LmRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBmci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiNjQgPSBmci5yZXN1bHQuc3BsaXQoJywnKVsxXTtcbiAgICAgIGNhbGxiYWNrKG1lc3NhZ2UgKyBiNjQpO1xuICAgIH07XG4gICAgcmV0dXJuIGZyLnJlYWRBc0RhdGFVUkwocGFja2V0LmRhdGEpO1xuICB9XG5cbiAgdmFyIGI2NGRhdGE7XG4gIHRyeSB7XG4gICAgYjY0ZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkocGFja2V0LmRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGlQaG9uZSBTYWZhcmkgZG9lc24ndCBsZXQgeW91IGFwcGx5IHdpdGggdHlwZWQgYXJyYXlzXG4gICAgdmFyIHR5cGVkID0gbmV3IFVpbnQ4QXJyYXkocGFja2V0LmRhdGEpO1xuICAgIHZhciBiYXNpYyA9IG5ldyBBcnJheSh0eXBlZC5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJhc2ljW2ldID0gdHlwZWRbaV07XG4gICAgfVxuICAgIGI2NGRhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJhc2ljKTtcbiAgfVxuICBtZXNzYWdlICs9IGJ0b2EoYjY0ZGF0YSk7XG4gIHJldHVybiBjYWxsYmFjayhtZXNzYWdlKTtcbn07XG5cbi8qKlxuICogRGVjb2RlcyBhIHBhY2tldC4gQ2hhbmdlcyBmb3JtYXQgdG8gQmxvYiBpZiByZXF1ZXN0ZWQuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGB0eXBlYCBhbmQgYGRhdGFgIChpZiBhbnkpXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmRlY29kZVBhY2tldCA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCB1dGY4ZGVjb2RlKSB7XG4gIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG4gIC8vIFN0cmluZyBkYXRhXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZGF0YS5jaGFyQXQoMCkgPT09ICdiJykge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVjb2RlQmFzZTY0UGFja2V0KGRhdGEuc3Vic3RyKDEpLCBiaW5hcnlUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAodXRmOGRlY29kZSkge1xuICAgICAgZGF0YSA9IHRyeURlY29kZShkYXRhKTtcbiAgICAgIGlmIChkYXRhID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdHlwZSA9IGRhdGEuY2hhckF0KDApO1xuXG4gICAgaWYgKE51bWJlcih0eXBlKSAhPSB0eXBlIHx8ICFwYWNrZXRzbGlzdFt0eXBlXSkge1xuICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSwgZGF0YTogZGF0YS5zdWJzdHJpbmcoMSkgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0gfTtcbiAgICB9XG4gIH1cblxuICB2YXIgYXNBcnJheSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB2YXIgdHlwZSA9IGFzQXJyYXlbMF07XG4gIHZhciByZXN0ID0gc2xpY2VCdWZmZXIoZGF0YSwgMSk7XG4gIGlmIChCbG9iICYmIGJpbmFyeVR5cGUgPT09ICdibG9iJykge1xuICAgIHJlc3QgPSBuZXcgQmxvYihbcmVzdF0pO1xuICB9XG4gIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdLCBkYXRhOiByZXN0IH07XG59O1xuXG5mdW5jdGlvbiB0cnlEZWNvZGUoZGF0YSkge1xuICB0cnkge1xuICAgIGRhdGEgPSB1dGY4LmRlY29kZShkYXRhLCB7IHN0cmljdDogZmFsc2UgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogRGVjb2RlcyBhIHBhY2tldCBlbmNvZGVkIGluIGEgYmFzZTY0IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlNjQgZW5jb2RlZCBtZXNzYWdlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggYHR5cGVgIGFuZCBgZGF0YWAgKGlmIGFueSlcbiAqL1xuXG5leHBvcnRzLmRlY29kZUJhc2U2NFBhY2tldCA9IGZ1bmN0aW9uKG1zZywgYmluYXJ5VHlwZSkge1xuICB2YXIgdHlwZSA9IHBhY2tldHNsaXN0W21zZy5jaGFyQXQoMCldO1xuICBpZiAoIWJhc2U2NGVuY29kZXIpIHtcbiAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBkYXRhOiB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogbXNnLnN1YnN0cigxKSB9IH07XG4gIH1cblxuICB2YXIgZGF0YSA9IGJhc2U2NGVuY29kZXIuZGVjb2RlKG1zZy5zdWJzdHIoMSkpO1xuXG4gIGlmIChiaW5hcnlUeXBlID09PSAnYmxvYicgJiYgQmxvYikge1xuICAgIGRhdGEgPSBuZXcgQmxvYihbZGF0YV0pO1xuICB9XG5cbiAgcmV0dXJuIHsgdHlwZTogdHlwZSwgZGF0YTogZGF0YSB9O1xufTtcblxuLyoqXG4gKiBFbmNvZGVzIG11bHRpcGxlIG1lc3NhZ2VzIChwYXlsb2FkKS5cbiAqXG4gKiAgICAgPGxlbmd0aD46ZGF0YVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDExOmhlbGxvIHdvcmxkMjpoaVxuICpcbiAqIElmIGFueSBjb250ZW50cyBhcmUgYmluYXJ5LCB0aGV5IHdpbGwgYmUgZW5jb2RlZCBhcyBiYXNlNjQgc3RyaW5ncy4gQmFzZTY0XG4gKiBlbmNvZGVkIHN0cmluZ3MgYXJlIG1hcmtlZCB3aXRoIGEgYiBiZWZvcmUgdGhlIGxlbmd0aCBzcGVjaWZpZXJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBheWxvYWQgPSBmdW5jdGlvbiAocGFja2V0cywgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNCaW5hcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHN1cHBvcnRzQmluYXJ5O1xuICAgIHN1cHBvcnRzQmluYXJ5ID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpc0JpbmFyeSA9IGhhc0JpbmFyeShwYWNrZXRzKTtcblxuICBpZiAoc3VwcG9ydHNCaW5hcnkgJiYgaXNCaW5hcnkpIHtcbiAgICBpZiAoQmxvYiAmJiAhZG9udFNlbmRCbG9icykge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQmxvYihwYWNrZXRzLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIocGFja2V0cywgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKCFwYWNrZXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjaygnMDonKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldExlbmd0aEhlYWRlcihtZXNzYWdlKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UubGVuZ3RoICsgJzonICsgbWVzc2FnZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuY29kZU9uZShwYWNrZXQsIGRvbmVDYWxsYmFjaykge1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHBhY2tldCwgIWlzQmluYXJ5ID8gZmFsc2UgOiBzdXBwb3J0c0JpbmFyeSwgZmFsc2UsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIGRvbmVDYWxsYmFjayhudWxsLCBzZXRMZW5ndGhIZWFkZXIobWVzc2FnZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFwKHBhY2tldHMsIGVuY29kZU9uZSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdHMuam9pbignJykpO1xuICB9KTtcbn07XG5cbi8qKlxuICogQXN5bmMgYXJyYXkgbWFwIHVzaW5nIGFmdGVyXG4gKi9cblxuZnVuY3Rpb24gbWFwKGFyeSwgZWFjaCwgZG9uZSkge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGFyeS5sZW5ndGgpO1xuICB2YXIgbmV4dCA9IGFmdGVyKGFyeS5sZW5ndGgsIGRvbmUpO1xuXG4gIHZhciBlYWNoV2l0aEluZGV4ID0gZnVuY3Rpb24oaSwgZWwsIGNiKSB7XG4gICAgZWFjaChlbCwgZnVuY3Rpb24oZXJyb3IsIG1zZykge1xuICAgICAgcmVzdWx0W2ldID0gbXNnO1xuICAgICAgY2IoZXJyb3IsIHJlc3VsdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkubGVuZ3RoOyBpKyspIHtcbiAgICBlYWNoV2l0aEluZGV4KGksIGFyeVtpXSwgbmV4dCk7XG4gIH1cbn1cblxuLypcbiAqIERlY29kZXMgZGF0YSB3aGVuIGEgcGF5bG9hZCBpcyBtYXliZSBleHBlY3RlZC4gUG9zc2libGUgYmluYXJ5IGNvbnRlbnRzIGFyZVxuICogZGVjb2RlZCBmcm9tIHRoZWlyIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLCBjYWxsYmFjayBtZXRob2RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVQYXlsb2FkID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5kZWNvZGVQYXlsb2FkQXNCaW5hcnkoZGF0YSwgYmluYXJ5VHlwZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBiaW5hcnlUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBiaW5hcnlUeXBlO1xuICAgIGJpbmFyeVR5cGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIHBhY2tldDtcbiAgaWYgKGRhdGEgPT09ICcnKSB7XG4gICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9ICcnLCBuLCBtc2c7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjaHIgPSBkYXRhLmNoYXJBdChpKTtcblxuICAgIGlmIChjaHIgIT09ICc6Jykge1xuICAgICAgbGVuZ3RoICs9IGNocjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChsZW5ndGggPT09ICcnIHx8IChsZW5ndGggIT0gKG4gPSBOdW1iZXIobGVuZ3RoKSkpKSB7XG4gICAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICB9XG5cbiAgICBtc2cgPSBkYXRhLnN1YnN0cihpICsgMSwgbik7XG5cbiAgICBpZiAobGVuZ3RoICE9IG1zZy5sZW5ndGgpIHtcbiAgICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgIH1cblxuICAgIGlmIChtc2cubGVuZ3RoKSB7XG4gICAgICBwYWNrZXQgPSBleHBvcnRzLmRlY29kZVBhY2tldChtc2csIGJpbmFyeVR5cGUsIGZhbHNlKTtcblxuICAgICAgaWYgKGVyci50eXBlID09PSBwYWNrZXQudHlwZSAmJiBlcnIuZGF0YSA9PT0gcGFja2V0LmRhdGEpIHtcbiAgICAgICAgLy8gcGFyc2VyIGVycm9yIGluIGluZGl2aWR1YWwgcGFja2V0IC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJldCA9IGNhbGxiYWNrKHBhY2tldCwgaSArIG4sIGwpO1xuICAgICAgaWYgKGZhbHNlID09PSByZXQpIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZHZhbmNlIGN1cnNvclxuICAgIGkgKz0gbjtcbiAgICBsZW5ndGggPSAnJztcbiAgfVxuXG4gIGlmIChsZW5ndGggIT09ICcnKSB7XG4gICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICB9XG5cbn07XG5cbi8qKlxuICogRW5jb2RlcyBtdWx0aXBsZSBtZXNzYWdlcyAocGF5bG9hZCkgYXMgYmluYXJ5LlxuICpcbiAqIDwxID0gYmluYXJ5LCAwID0gc3RyaW5nPjxudW1iZXIgZnJvbSAwLTk+PG51bWJlciBmcm9tIDAtOT5bLi4uXTxudW1iZXJcbiAqIDI1NT48ZGF0YT5cbiAqXG4gKiBFeGFtcGxlOlxuICogMSAzIDI1NSAxIDIgMywgaWYgdGhlIGJpbmFyeSBjb250ZW50cyBhcmUgaW50ZXJwcmV0ZWQgYXMgOCBiaXQgaW50ZWdlcnNcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gKiBAcmV0dXJuIHtBcnJheUJ1ZmZlcn0gZW5jb2RlZCBwYXlsb2FkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyID0gZnVuY3Rpb24ocGFja2V0cywgY2FsbGJhY2spIHtcbiAgaWYgKCFwYWNrZXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgQXJyYXlCdWZmZXIoMCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCB0cnVlLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gZG9uZUNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFwKHBhY2tldHMsIGVuY29kZU9uZSwgZnVuY3Rpb24oZXJyLCBlbmNvZGVkUGFja2V0cykge1xuICAgIHZhciB0b3RhbExlbmd0aCA9IGVuY29kZWRQYWNrZXRzLnJlZHVjZShmdW5jdGlvbihhY2MsIHApIHtcbiAgICAgIHZhciBsZW47XG4gICAgICBpZiAodHlwZW9mIHAgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgbGVuID0gcC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW4gPSBwLmJ5dGVMZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjICsgbGVuLnRvU3RyaW5nKCkubGVuZ3RoICsgbGVuICsgMjsgLy8gc3RyaW5nL2JpbmFyeSBpZGVudGlmaWVyICsgc2VwYXJhdG9yID0gMlxuICAgIH0sIDApO1xuXG4gICAgdmFyIHJlc3VsdEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuXG4gICAgdmFyIGJ1ZmZlckluZGV4ID0gMDtcbiAgICBlbmNvZGVkUGFja2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IHR5cGVvZiBwID09PSAnc3RyaW5nJztcbiAgICAgIHZhciBhYiA9IHA7XG4gICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShwLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZpZXdbaV0gPSBwLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgYWIgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RyaW5nKSB7IC8vIG5vdCB0cnVlIGJpbmFyeVxuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDA7XG4gICAgICB9IGVsc2UgeyAvLyB0cnVlIGJpbmFyeVxuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5TdHIgPSBhYi5ieXRlTGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlblN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IHBhcnNlSW50KGxlblN0cltpXSk7XG4gICAgICB9XG4gICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDI1NTtcblxuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShhYik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSB2aWV3W2ldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdEFycmF5LmJ1ZmZlcik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgYXMgQmxvYlxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQmxvYiA9IGZ1bmN0aW9uKHBhY2tldHMsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIGVuY29kZU9uZShwYWNrZXQsIGRvbmVDYWxsYmFjaykge1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHBhY2tldCwgdHJ1ZSwgdHJ1ZSwgZnVuY3Rpb24oZW5jb2RlZCkge1xuICAgICAgdmFyIGJpbmFyeUlkZW50aWZpZXIgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICAgIGJpbmFyeUlkZW50aWZpZXJbMF0gPSAxO1xuICAgICAgaWYgKHR5cGVvZiBlbmNvZGVkID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGVuY29kZWQubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmlld1tpXSA9IGVuY29kZWQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGVkID0gdmlldy5idWZmZXI7XG4gICAgICAgIGJpbmFyeUlkZW50aWZpZXJbMF0gPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuID0gKGVuY29kZWQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcilcbiAgICAgICAgPyBlbmNvZGVkLmJ5dGVMZW5ndGhcbiAgICAgICAgOiBlbmNvZGVkLnNpemU7XG5cbiAgICAgIHZhciBsZW5TdHIgPSBsZW4udG9TdHJpbmcoKTtcbiAgICAgIHZhciBsZW5ndGhBcnkgPSBuZXcgVWludDhBcnJheShsZW5TdHIubGVuZ3RoICsgMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlblN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZW5ndGhBcnlbaV0gPSBwYXJzZUludChsZW5TdHJbaV0pO1xuICAgICAgfVxuICAgICAgbGVuZ3RoQXJ5W2xlblN0ci5sZW5ndGhdID0gMjU1O1xuXG4gICAgICBpZiAoQmxvYikge1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtiaW5hcnlJZGVudGlmaWVyLmJ1ZmZlciwgbGVuZ3RoQXJ5LmJ1ZmZlciwgZW5jb2RlZF0pO1xuICAgICAgICBkb25lQ2FsbGJhY2sobnVsbCwgYmxvYik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IEJsb2IocmVzdWx0cykpO1xuICB9KTtcbn07XG5cbi8qXG4gKiBEZWNvZGVzIGRhdGEgd2hlbiBhIHBheWxvYWQgaXMgbWF5YmUgZXhwZWN0ZWQuIFN0cmluZ3MgYXJlIGRlY29kZWQgYnlcbiAqIGludGVycHJldGluZyBlYWNoIGJ5dGUgYXMgYSBrZXkgY29kZSBmb3IgZW50cmllcyBtYXJrZWQgdG8gc3RhcnQgd2l0aCAwLiBTZWVcbiAqIGRlc2NyaXB0aW9uIG9mIGVuY29kZVBheWxvYWRBc0JpbmFyeVxuICpcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGRhdGEsIGNhbGxiYWNrIG1ldGhvZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlY29kZVBheWxvYWRBc0JpbmFyeSA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGJpbmFyeVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGJpbmFyeVR5cGU7XG4gICAgYmluYXJ5VHlwZSA9IG51bGw7XG4gIH1cblxuICB2YXIgYnVmZmVyVGFpbCA9IGRhdGE7XG4gIHZhciBidWZmZXJzID0gW107XG5cbiAgd2hpbGUgKGJ1ZmZlclRhaWwuYnl0ZUxlbmd0aCA+IDApIHtcbiAgICB2YXIgdGFpbEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyVGFpbCk7XG4gICAgdmFyIGlzU3RyaW5nID0gdGFpbEFycmF5WzBdID09PSAwO1xuICAgIHZhciBtc2dMZW5ndGggPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAxOyA7IGkrKykge1xuICAgICAgaWYgKHRhaWxBcnJheVtpXSA9PT0gMjU1KSBicmVhaztcblxuICAgICAgLy8gMzEwID0gY2hhciBsZW5ndGggb2YgTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgaWYgKG1zZ0xlbmd0aC5sZW5ndGggPiAzMTApIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgICB9XG5cbiAgICAgIG1zZ0xlbmd0aCArPSB0YWlsQXJyYXlbaV07XG4gICAgfVxuXG4gICAgYnVmZmVyVGFpbCA9IHNsaWNlQnVmZmVyKGJ1ZmZlclRhaWwsIDIgKyBtc2dMZW5ndGgubGVuZ3RoKTtcbiAgICBtc2dMZW5ndGggPSBwYXJzZUludChtc2dMZW5ndGgpO1xuXG4gICAgdmFyIG1zZyA9IHNsaWNlQnVmZmVyKGJ1ZmZlclRhaWwsIDAsIG1zZ0xlbmd0aCk7XG4gICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtc2cgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KG1zZykpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpUGhvbmUgU2FmYXJpIGRvZXNuJ3QgbGV0IHlvdSBhcHBseSB0byB0eXBlZCBhcnJheXNcbiAgICAgICAgdmFyIHR5cGVkID0gbmV3IFVpbnQ4QXJyYXkobXNnKTtcbiAgICAgICAgbXNnID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBtc2cgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh0eXBlZFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBidWZmZXJzLnB1c2gobXNnKTtcbiAgICBidWZmZXJUYWlsID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgbXNnTGVuZ3RoKTtcbiAgfVxuXG4gIHZhciB0b3RhbCA9IGJ1ZmZlcnMubGVuZ3RoO1xuICBidWZmZXJzLmZvckVhY2goZnVuY3Rpb24oYnVmZmVyLCBpKSB7XG4gICAgY2FsbGJhY2soZXhwb3J0cy5kZWNvZGVQYWNrZXQoYnVmZmVyLCBiaW5hcnlUeXBlLCB0cnVlKSwgaSwgdG90YWwpO1xuICB9KTtcbn07XG4iLCJcbi8qKlxuICogR2V0cyB0aGUga2V5cyBmb3IgYW4gb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge0FycmF5fSBrZXlzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMgKG9iail7XG4gIHZhciBhcnIgPSBbXTtcbiAgdmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoaGFzLmNhbGwob2JqLCBpKSkge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuIiwiLyohIGh0dHBzOi8vbXRocy5iZS91dGY4anMgdjIuMS4yIGJ5IEBtYXRoaWFzICovXG5cbnZhciBzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuXG4vLyBUYWtlbiBmcm9tIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZVxuZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0dmFyIG91dHB1dCA9IFtdO1xuXHR2YXIgY291bnRlciA9IDA7XG5cdHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXHR2YXIgdmFsdWU7XG5cdHZhciBleHRyYTtcblx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHR2YWx1ZSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRleHRyYSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gbG93IHN1cnJvZ2F0ZVxuXHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlIG5leHRcblx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvdXRwdXQ7XG59XG5cbi8vIFRha2VuIGZyb20gaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlXG5mdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdHZhciBpbmRleCA9IC0xO1xuXHR2YXIgdmFsdWU7XG5cdHZhciBvdXRwdXQgPSAnJztcblx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0XHR2YWx1ZSA9IGFycmF5W2luZGV4XTtcblx0XHRpZiAodmFsdWUgPiAweEZGRkYpIHtcblx0XHRcdHZhbHVlIC09IDB4MTAwMDA7XG5cdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdHZhbHVlID0gMHhEQzAwIHwgdmFsdWUgJiAweDNGRjtcblx0XHR9XG5cdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gY2hlY2tTY2FsYXJWYWx1ZShjb2RlUG9pbnQsIHN0cmljdCkge1xuXHRpZiAoY29kZVBvaW50ID49IDB4RDgwMCAmJiBjb2RlUG9pbnQgPD0gMHhERkZGKSB7XG5cdFx0aWYgKHN0cmljdCkge1xuXHRcdFx0dGhyb3cgRXJyb3IoXG5cdFx0XHRcdCdMb25lIHN1cnJvZ2F0ZSBVKycgKyBjb2RlUG9pbnQudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgK1xuXHRcdFx0XHQnIGlzIG5vdCBhIHNjYWxhciB2YWx1ZSdcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5mdW5jdGlvbiBjcmVhdGVCeXRlKGNvZGVQb2ludCwgc2hpZnQpIHtcblx0cmV0dXJuIHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiBzaGlmdCkgJiAweDNGKSB8IDB4ODApO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50LCBzdHJpY3QpIHtcblx0aWYgKChjb2RlUG9pbnQgJiAweEZGRkZGRjgwKSA9PSAwKSB7IC8vIDEtYnl0ZSBzZXF1ZW5jZVxuXHRcdHJldHVybiBzdHJpbmdGcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcblx0fVxuXHR2YXIgc3ltYm9sID0gJyc7XG5cdGlmICgoY29kZVBvaW50ICYgMHhGRkZGRjgwMCkgPT0gMCkgeyAvLyAyLWJ5dGUgc2VxdWVuY2Vcblx0XHRzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gNikgJiAweDFGKSB8IDB4QzApO1xuXHR9XG5cdGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRkYwMDAwKSA9PSAwKSB7IC8vIDMtYnl0ZSBzZXF1ZW5jZVxuXHRcdGlmICghY2hlY2tTY2FsYXJWYWx1ZShjb2RlUG9pbnQsIHN0cmljdCkpIHtcblx0XHRcdGNvZGVQb2ludCA9IDB4RkZGRDtcblx0XHR9XG5cdFx0c3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDEyKSAmIDB4MEYpIHwgMHhFMCk7XG5cdFx0c3ltYm9sICs9IGNyZWF0ZUJ5dGUoY29kZVBvaW50LCA2KTtcblx0fVxuXHRlbHNlIGlmICgoY29kZVBvaW50ICYgMHhGRkUwMDAwMCkgPT0gMCkgeyAvLyA0LWJ5dGUgc2VxdWVuY2Vcblx0XHRzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gMTgpICYgMHgwNykgfCAweEYwKTtcblx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDEyKTtcblx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDYpO1xuXHR9XG5cdHN5bWJvbCArPSBzdHJpbmdGcm9tQ2hhckNvZGUoKGNvZGVQb2ludCAmIDB4M0YpIHwgMHg4MCk7XG5cdHJldHVybiBzeW1ib2w7XG59XG5cbmZ1bmN0aW9uIHV0ZjhlbmNvZGUoc3RyaW5nLCBvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHR2YXIgc3RyaWN0ID0gZmFsc2UgIT09IG9wdHMuc3RyaWN0O1xuXG5cdHZhciBjb2RlUG9pbnRzID0gdWNzMmRlY29kZShzdHJpbmcpO1xuXHR2YXIgbGVuZ3RoID0gY29kZVBvaW50cy5sZW5ndGg7XG5cdHZhciBpbmRleCA9IC0xO1xuXHR2YXIgY29kZVBvaW50O1xuXHR2YXIgYnl0ZVN0cmluZyA9ICcnO1xuXHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdGNvZGVQb2ludCA9IGNvZGVQb2ludHNbaW5kZXhdO1xuXHRcdGJ5dGVTdHJpbmcgKz0gZW5jb2RlQ29kZVBvaW50KGNvZGVQb2ludCwgc3RyaWN0KTtcblx0fVxuXHRyZXR1cm4gYnl0ZVN0cmluZztcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIHJlYWRDb250aW51YXRpb25CeXRlKCkge1xuXHRpZiAoYnl0ZUluZGV4ID49IGJ5dGVDb3VudCkge1xuXHRcdHRocm93IEVycm9yKCdJbnZhbGlkIGJ5dGUgaW5kZXgnKTtcblx0fVxuXG5cdHZhciBjb250aW51YXRpb25CeXRlID0gYnl0ZUFycmF5W2J5dGVJbmRleF0gJiAweEZGO1xuXHRieXRlSW5kZXgrKztcblxuXHRpZiAoKGNvbnRpbnVhdGlvbkJ5dGUgJiAweEMwKSA9PSAweDgwKSB7XG5cdFx0cmV0dXJuIGNvbnRpbnVhdGlvbkJ5dGUgJiAweDNGO1xuXHR9XG5cblx0Ly8gSWYgd2UgZW5kIHVwIGhlcmUsIGl04oCZcyBub3QgYSBjb250aW51YXRpb24gYnl0ZVxuXHR0aHJvdyBFcnJvcignSW52YWxpZCBjb250aW51YXRpb24gYnl0ZScpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVTeW1ib2woc3RyaWN0KSB7XG5cdHZhciBieXRlMTtcblx0dmFyIGJ5dGUyO1xuXHR2YXIgYnl0ZTM7XG5cdHZhciBieXRlNDtcblx0dmFyIGNvZGVQb2ludDtcblxuXHRpZiAoYnl0ZUluZGV4ID4gYnl0ZUNvdW50KSB7XG5cdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgYnl0ZSBpbmRleCcpO1xuXHR9XG5cblx0aWYgKGJ5dGVJbmRleCA9PSBieXRlQ291bnQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBSZWFkIGZpcnN0IGJ5dGVcblx0Ynl0ZTEgPSBieXRlQXJyYXlbYnl0ZUluZGV4XSAmIDB4RkY7XG5cdGJ5dGVJbmRleCsrO1xuXG5cdC8vIDEtYnl0ZSBzZXF1ZW5jZSAobm8gY29udGludWF0aW9uIGJ5dGVzKVxuXHRpZiAoKGJ5dGUxICYgMHg4MCkgPT0gMCkge1xuXHRcdHJldHVybiBieXRlMTtcblx0fVxuXG5cdC8vIDItYnl0ZSBzZXF1ZW5jZVxuXHRpZiAoKGJ5dGUxICYgMHhFMCkgPT0gMHhDMCkge1xuXHRcdGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgxRikgPDwgNikgfCBieXRlMjtcblx0XHRpZiAoY29kZVBvaW50ID49IDB4ODApIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gMy1ieXRlIHNlcXVlbmNlIChtYXkgaW5jbHVkZSB1bnBhaXJlZCBzdXJyb2dhdGVzKVxuXHRpZiAoKGJ5dGUxICYgMHhGMCkgPT0gMHhFMCkge1xuXHRcdGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRieXRlMyA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Y29kZVBvaW50ID0gKChieXRlMSAmIDB4MEYpIDw8IDEyKSB8IChieXRlMiA8PCA2KSB8IGJ5dGUzO1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHgwODAwKSB7XG5cdFx0XHRyZXR1cm4gY2hlY2tTY2FsYXJWYWx1ZShjb2RlUG9pbnQsIHN0cmljdCkgPyBjb2RlUG9pbnQgOiAweEZGRkQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gNC1ieXRlIHNlcXVlbmNlXG5cdGlmICgoYnl0ZTEgJiAweEY4KSA9PSAweEYwKSB7XG5cdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRieXRlNCA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Y29kZVBvaW50ID0gKChieXRlMSAmIDB4MDcpIDw8IDB4MTIpIHwgKGJ5dGUyIDw8IDB4MEMpIHxcblx0XHRcdChieXRlMyA8PCAweDA2KSB8IGJ5dGU0O1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHgwMTAwMDAgJiYgY29kZVBvaW50IDw9IDB4MTBGRkZGKSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50O1xuXHRcdH1cblx0fVxuXG5cdHRocm93IEVycm9yKCdJbnZhbGlkIFVURi04IGRldGVjdGVkJyk7XG59XG5cbnZhciBieXRlQXJyYXk7XG52YXIgYnl0ZUNvdW50O1xudmFyIGJ5dGVJbmRleDtcbmZ1bmN0aW9uIHV0ZjhkZWNvZGUoYnl0ZVN0cmluZywgb3B0cykge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblx0dmFyIHN0cmljdCA9IGZhbHNlICE9PSBvcHRzLnN0cmljdDtcblxuXHRieXRlQXJyYXkgPSB1Y3MyZGVjb2RlKGJ5dGVTdHJpbmcpO1xuXHRieXRlQ291bnQgPSBieXRlQXJyYXkubGVuZ3RoO1xuXHRieXRlSW5kZXggPSAwO1xuXHR2YXIgY29kZVBvaW50cyA9IFtdO1xuXHR2YXIgdG1wO1xuXHR3aGlsZSAoKHRtcCA9IGRlY29kZVN5bWJvbChzdHJpY3QpKSAhPT0gZmFsc2UpIHtcblx0XHRjb2RlUG9pbnRzLnB1c2godG1wKTtcblx0fVxuXHRyZXR1cm4gdWNzMmVuY29kZShjb2RlUG9pbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHZlcnNpb246ICcyLjEuMicsXG5cdGVuY29kZTogdXRmOGVuY29kZSxcblx0ZGVjb2RlOiB1dGY4ZGVjb2RlXG59O1xuIiwiLyogZ2xvYmFsIEJsb2IgRmlsZSAqL1xuXG4vKlxuICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAqL1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciB3aXRoTmF0aXZlQmxvYiA9IHR5cGVvZiBCbG9iID09PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gJ1tvYmplY3QgQmxvYkNvbnN0cnVjdG9yXSc7XG52YXIgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIEZpbGUgIT09ICd1bmRlZmluZWQnICYmIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09ICdbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl0nO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaGFzQmluYXJ5O1xuXG4vKipcbiAqIENoZWNrcyBmb3IgYmluYXJ5IGRhdGEuXG4gKlxuICogU3VwcG9ydHMgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQmxvYiBhbmQgRmlsZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYW55dGhpbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gaGFzQmluYXJ5IChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoaGFzQmluYXJ5KG9ialtpXSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICgodHlwZW9mIEJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBCdWZmZXIuaXNCdWZmZXIgJiYgQnVmZmVyLmlzQnVmZmVyKG9iaikpIHx8XG4gICAgKHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHxcbiAgICAod2l0aE5hdGl2ZUJsb2IgJiYgb2JqIGluc3RhbmNlb2YgQmxvYikgfHxcbiAgICAod2l0aE5hdGl2ZUZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSlcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9BdXRvbWF0dGljL2hhcy1iaW5hcnkvcHVsbC80XG4gIGlmIChvYmoudG9KU09OICYmIHR5cGVvZiBvYmoudG9KU09OID09PSAnZnVuY3Rpb24nICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gaGFzQmluYXJ5KG9iai50b0pTT04oKSwgdHJ1ZSk7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgJiYgaGFzQmluYXJ5KG9ialtrZXldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKlxuICogTG9naWMgYm9ycm93ZWQgZnJvbSBNb2Rlcm5penI6XG4gKlxuICogICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb3JzLmpzXG4gKi9cblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gaWYgWE1MSHR0cCBzdXBwb3J0IGlzIGRpc2FibGVkIGluIElFIHRoZW4gaXQgd2lsbCB0aHJvd1xuICAvLyB3aGVuIHRyeWluZyB0byBjcmVhdGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsIlxudmFyIGluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgb2JqKXtcbiAgaWYgKGluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gZmFsc2U7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAoIXJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcikge1xuXHRcdHZhciBPbGRDb29raWVzID0gd2luZG93LkNvb2tpZXM7XG5cdFx0dmFyIGFwaSA9IHdpbmRvdy5Db29raWVzID0gZmFjdG9yeSgpO1xuXHRcdGFwaS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LkNvb2tpZXMgPSBPbGRDb29raWVzO1xuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9O1xuXHR9XG59KGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gZXh0ZW5kICgpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkgKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdyaXRlXG5cblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzID0gZXh0ZW5kKHtcblx0XHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdFx0fSwgYXBpLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHR2YXIgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0ZXhwaXJlcy5zZXRNaWxsaXNlY29uZHMoZXhwaXJlcy5nZXRNaWxsaXNlY29uZHMoKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gZXhwaXJlcztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBhdHRyaWJ1dGVzLmV4cGlyZXMgPyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHRcdFx0XHRcdGlmICgvXltcXHtcXFtdLy50ZXN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0XHRpZiAoIWNvbnZlcnRlci53cml0ZSkge1xuXHRcdFx0XHRcdHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvW1xcKFxcKV0vZywgZXNjYXBlKTtcblxuXHRcdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cblx0XHRcdFx0Zm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRcdGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlYWRcblxuXHRcdFx0aWYgKCFrZXkpIHtcblx0XHRcdFx0cmVzdWx0ID0ge307XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLiBBbHNvIHByZXZlbnRzIG9kZCByZXN1bHQgd2hlblxuXHRcdFx0Ly8gY2FsbGluZyBcImdldCgpXCJcblx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG5cdFx0XHR2YXIgcmRlY29kZSA9IC8oJVswLTlBLVpdezJ9KSsvZztcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIXRoaXMuanNvbiAmJiBjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XG5cdFx0XHRcdFx0Y29va2llID0gY29va2llLnNsaWNlKDEsIC0xKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBwYXJ0c1swXS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdFx0Y29va2llID0gY29udmVydGVyLnJlYWQgP1xuXHRcdFx0XHRcdFx0Y29udmVydGVyLnJlYWQoY29va2llLCBuYW1lKSA6IGNvbnZlcnRlcihjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRjb29raWUucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuanNvbikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0Y29va2llID0gSlNPTi5wYXJzZShjb29raWUpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBuYW1lKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBjb29raWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gY29va2llO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRhcGkuc2V0ID0gYXBpO1xuXHRcdGFwaS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gYXBpLmNhbGwoYXBpLCBrZXkpO1xuXHRcdH07XG5cdFx0YXBpLmdldEpTT04gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gYXBpLmFwcGx5KHtcblx0XHRcdFx0anNvbjogdHJ1ZVxuXHRcdFx0fSwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcblx0XHR9O1xuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXksIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGFwaShrZXksICcnLCBleHRlbmQoYXR0cmlidXRlcywge1xuXHRcdFx0XHRleHBpcmVzOiAtMVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cblx0XHRhcGkud2l0aENvbnZlcnRlciA9IGluaXQ7XG5cblx0XHRyZXR1cm4gYXBpO1xuXHR9XG5cblx0cmV0dXJuIGluaXQoZnVuY3Rpb24gKCkge30pO1xufSkpO1xuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgaWYgKG1zID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHJldHVybiBwbHVyYWwobXMsIGQsICdkYXknKSB8fFxuICAgIHBsdXJhbChtcywgaCwgJ2hvdXInKSB8fFxuICAgIHBsdXJhbChtcywgbSwgJ21pbnV0ZScpIHx8XG4gICAgcGx1cmFsKG1zLCBzLCAnc2Vjb25kJykgfHxcbiAgICBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZTtcbiAgfVxuICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xufVxuIiwiLyoqXHJcbiAqIENvbXBpbGVzIGEgcXVlcnlzdHJpbmdcclxuICogUmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgdmFyIHN0ciA9ICcnO1xyXG5cclxuICBmb3IgKHZhciBpIGluIG9iaikge1xyXG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICBpZiAoc3RyLmxlbmd0aCkgc3RyICs9ICcmJztcclxuICAgICAgc3RyICs9IGVuY29kZVVSSUNvbXBvbmVudChpKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0cjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBzaW1wbGUgcXVlcnlzdHJpbmcgaW50byBhbiBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHFzXHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24ocXMpe1xyXG4gIHZhciBxcnkgPSB7fTtcclxuICB2YXIgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xyXG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGFpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICBxcnlbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcclxuICB9XHJcbiAgcmV0dXJuIHFyeTtcclxufTtcclxuIiwiLyoqXHJcbiAqIFBhcnNlcyBhbiBVUklcclxuICpcclxuICogQGF1dGhvciBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT4gKE1JVCBsaWNlbnNlKVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG52YXIgcmUgPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShodHRwfGh0dHBzfHdzfHdzcyk6XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPygoPzpbYS1mMC05XXswLDR9Oil7Miw3fVthLWYwLTldezAsNH18W146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcclxuXHJcbnZhciBwYXJ0cyA9IFtcclxuICAgICdzb3VyY2UnLCAncHJvdG9jb2wnLCAnYXV0aG9yaXR5JywgJ3VzZXJJbmZvJywgJ3VzZXInLCAncGFzc3dvcmQnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnYW5jaG9yJ1xyXG5dO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZXVyaShzdHIpIHtcclxuICAgIHZhciBzcmMgPSBzdHIsXHJcbiAgICAgICAgYiA9IHN0ci5pbmRleE9mKCdbJyksXHJcbiAgICAgICAgZSA9IHN0ci5pbmRleE9mKCddJyk7XHJcblxyXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xyXG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgYikgKyBzdHIuc3Vic3RyaW5nKGIsIGUpLnJlcGxhY2UoLzovZywgJzsnKSArIHN0ci5zdWJzdHJpbmcoZSwgc3RyLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG0gPSByZS5leGVjKHN0ciB8fCAnJyksXHJcbiAgICAgICAgdXJpID0ge30sXHJcbiAgICAgICAgaSA9IDE0O1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICB1cmlbcGFydHNbaV1dID0gbVtpXSB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XHJcbiAgICAgICAgdXJpLnNvdXJjZSA9IHNyYztcclxuICAgICAgICB1cmkuaG9zdCA9IHVyaS5ob3N0LnN1YnN0cmluZygxLCB1cmkuaG9zdC5sZW5ndGggLSAxKS5yZXBsYWNlKC87L2csICc6Jyk7XHJcbiAgICAgICAgdXJpLmF1dGhvcml0eSA9IHVyaS5hdXRob3JpdHkucmVwbGFjZSgnWycsICcnKS5yZXBsYWNlKCddJywgJycpLnJlcGxhY2UoLzsvZywgJzonKTtcclxuICAgICAgICB1cmkuaXB2NnVyaSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVyaTtcclxufTtcclxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB1cmwgPSByZXF1aXJlKCcuL3VybCcpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBNYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50Jyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gbG9va3VwO1xuXG4vKipcbiAqIE1hbmFnZXJzIGNhY2hlLlxuICovXG5cbnZhciBjYWNoZSA9IGV4cG9ydHMubWFuYWdlcnMgPSB7fTtcblxuLyoqXG4gKiBMb29rcyB1cCBhbiBleGlzdGluZyBgTWFuYWdlcmAgZm9yIG11bHRpcGxleGluZy5cbiAqIElmIHRoZSB1c2VyIHN1bW1vbnM6XG4gKlxuICogICBgaW8oJ2h0dHA6Ly9sb2NhbGhvc3QvYScpO2BcbiAqICAgYGlvKCdodHRwOi8vbG9jYWxob3N0L2InKTtgXG4gKlxuICogV2UgcmV1c2UgdGhlIGV4aXN0aW5nIGluc3RhbmNlIGJhc2VkIG9uIHNhbWUgc2NoZW1lL3BvcnQvaG9zdCxcbiAqIGFuZCB3ZSBpbml0aWFsaXplIHNvY2tldHMgZm9yIGVhY2ggbmFtZXNwYWNlLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9va3VwICh1cmksIG9wdHMpIHtcbiAgaWYgKHR5cGVvZiB1cmkgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0cyA9IHVyaTtcbiAgICB1cmkgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICB2YXIgcGFyc2VkID0gdXJsKHVyaSk7XG4gIHZhciBzb3VyY2UgPSBwYXJzZWQuc291cmNlO1xuICB2YXIgaWQgPSBwYXJzZWQuaWQ7XG4gIHZhciBwYXRoID0gcGFyc2VkLnBhdGg7XG4gIHZhciBzYW1lTmFtZXNwYWNlID0gY2FjaGVbaWRdICYmIHBhdGggaW4gY2FjaGVbaWRdLm5zcHM7XG4gIHZhciBuZXdDb25uZWN0aW9uID0gb3B0cy5mb3JjZU5ldyB8fCBvcHRzWydmb3JjZSBuZXcgY29ubmVjdGlvbiddIHx8XG4gICAgICAgICAgICAgICAgICAgICAgZmFsc2UgPT09IG9wdHMubXVsdGlwbGV4IHx8IHNhbWVOYW1lc3BhY2U7XG5cbiAgdmFyIGlvO1xuXG4gIGlmIChuZXdDb25uZWN0aW9uKSB7XG4gICAgZGVidWcoJ2lnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXMnLCBzb3VyY2UpO1xuICAgIGlvID0gTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICB9IGVsc2Uge1xuICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICBkZWJ1ZygnbmV3IGlvIGluc3RhbmNlIGZvciAlcycsIHNvdXJjZSk7XG4gICAgICBjYWNoZVtpZF0gPSBNYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgfVxuICAgIGlvID0gY2FjaGVbaWRdO1xuICB9XG4gIGlmIChwYXJzZWQucXVlcnkgJiYgIW9wdHMucXVlcnkpIHtcbiAgICBvcHRzLnF1ZXJ5ID0gcGFyc2VkLnF1ZXJ5O1xuICB9XG4gIHJldHVybiBpby5zb2NrZXQocGFyc2VkLnBhdGgsIG9wdHMpO1xufVxuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sO1xuXG4vKipcbiAqIGBjb25uZWN0YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcblxuLyoqXG4gKiBFeHBvc2UgY29uc3RydWN0b3JzIGZvciBzdGFuZGFsb25lIGJ1aWxkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5NYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XG5leHBvcnRzLlNvY2tldCA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgZWlvID0gcmVxdWlyZSgnZW5naW5lLmlvLWNsaWVudCcpO1xudmFyIFNvY2tldCA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIG9uID0gcmVxdWlyZSgnLi9vbicpO1xudmFyIGJpbmQgPSByZXF1aXJlKCdjb21wb25lbnQtYmluZCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDptYW5hZ2VyJyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJ2luZGV4b2YnKTtcbnZhciBCYWNrb2ZmID0gcmVxdWlyZSgnYmFja28yJyk7XG5cbi8qKlxuICogSUU2KyBoYXNPd25Qcm9wZXJ0eVxuICovXG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VyO1xuXG4vKipcbiAqIGBNYW5hZ2VyYCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5naW5lIGluc3RhbmNlIG9yIGVuZ2luZSB1cmkvb3B0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gTWFuYWdlciAodXJpLCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYW5hZ2VyKSkgcmV0dXJuIG5ldyBNYW5hZ2VyKHVyaSwgb3B0cyk7XG4gIGlmICh1cmkgJiYgKCdvYmplY3QnID09PSB0eXBlb2YgdXJpKSkge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gdW5kZWZpbmVkO1xuICB9XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIG9wdHMucGF0aCA9IG9wdHMucGF0aCB8fCAnL3NvY2tldC5pbyc7XG4gIHRoaXMubnNwcyA9IHt9O1xuICB0aGlzLnN1YnMgPSBbXTtcbiAgdGhpcy5vcHRzID0gb3B0cztcbiAgdGhpcy5yZWNvbm5lY3Rpb24ob3B0cy5yZWNvbm5lY3Rpb24gIT09IGZhbHNlKTtcbiAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0cyhvcHRzLnJlY29ubmVjdGlvbkF0dGVtcHRzIHx8IEluZmluaXR5KTtcbiAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheShvcHRzLnJlY29ubmVjdGlvbkRlbGF5IHx8IDEwMDApO1xuICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KG9wdHMucmVjb25uZWN0aW9uRGVsYXlNYXggfHwgNTAwMCk7XG4gIHRoaXMucmFuZG9taXphdGlvbkZhY3RvcihvcHRzLnJhbmRvbWl6YXRpb25GYWN0b3IgfHwgMC41KTtcbiAgdGhpcy5iYWNrb2ZmID0gbmV3IEJhY2tvZmYoe1xuICAgIG1pbjogdGhpcy5yZWNvbm5lY3Rpb25EZWxheSgpLFxuICAgIG1heDogdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heCgpLFxuICAgIGppdHRlcjogdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKClcbiAgfSk7XG4gIHRoaXMudGltZW91dChudWxsID09IG9wdHMudGltZW91dCA/IDIwMDAwIDogb3B0cy50aW1lb3V0KTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIHRoaXMudXJpID0gdXJpO1xuICB0aGlzLmNvbm5lY3RpbmcgPSBbXTtcbiAgdGhpcy5sYXN0UGluZyA9IG51bGw7XG4gIHRoaXMuZW5jb2RpbmcgPSBmYWxzZTtcbiAgdGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcbiAgdmFyIF9wYXJzZXIgPSBvcHRzLnBhcnNlciB8fCBwYXJzZXI7XG4gIHRoaXMuZW5jb2RlciA9IG5ldyBfcGFyc2VyLkVuY29kZXIoKTtcbiAgdGhpcy5kZWNvZGVyID0gbmV3IF9wYXJzZXIuRGVjb2RlcigpO1xuICB0aGlzLmF1dG9Db25uZWN0ID0gb3B0cy5hdXRvQ29ubmVjdCAhPT0gZmFsc2U7XG4gIGlmICh0aGlzLmF1dG9Db25uZWN0KSB0aGlzLm9wZW4oKTtcbn1cblxuLyoqXG4gKiBQcm9wYWdhdGUgZ2l2ZW4gZXZlbnQgdG8gc29ja2V0cyBhbmQgZW1pdCBvbiBgdGhpc2BcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0QWxsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgZm9yICh2YXIgbnNwIGluIHRoaXMubnNwcykge1xuICAgIGlmIChoYXMuY2FsbCh0aGlzLm5zcHMsIG5zcCkpIHtcbiAgICAgIHRoaXMubnNwc1tuc3BdLmVtaXQuYXBwbHkodGhpcy5uc3BzW25zcF0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBgc29ja2V0LmlkYCBvZiBhbGwgc29ja2V0c1xuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVNvY2tldElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgbnNwIGluIHRoaXMubnNwcykge1xuICAgIGlmIChoYXMuY2FsbCh0aGlzLm5zcHMsIG5zcCkpIHtcbiAgICAgIHRoaXMubnNwc1tuc3BdLmlkID0gdGhpcy5nZW5lcmF0ZUlkKG5zcCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGdlbmVyYXRlIGBzb2NrZXQuaWRgIGZvciB0aGUgZ2l2ZW4gYG5zcGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbnNwXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKG5zcCkge1xuICByZXR1cm4gKG5zcCA9PT0gJy8nID8gJycgOiAobnNwICsgJyMnKSkgKyB0aGlzLmVuZ2luZS5pZDtcbn07XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKE1hbmFnZXIucHJvdG90eXBlKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgcmVjb25uZWN0aW9uYCBjb25maWcuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSB0cnVlL2ZhbHNlIGlmIGl0IHNob3VsZCBhdXRvbWF0aWNhbGx5IHJlY29ubmVjdFxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb24gPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb247XG4gIHRoaXMuX3JlY29ubmVjdGlvbiA9ICEhdjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIHJlY29ubmVjdGlvbiBhdHRlbXB0cyBjb25maWcuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1heCByZWNvbm5lY3Rpb24gYXR0ZW1wdHMgYmVmb3JlIGdpdmluZyB1cFxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBkZWxheSBiZXR3ZWVuIHJlY29ubmVjdGlvbnMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkRlbGF5ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXk7XG4gIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5ID0gdjtcbiAgdGhpcy5iYWNrb2ZmICYmIHRoaXMuYmFja29mZi5zZXRNaW4odik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuTWFuYWdlci5wcm90b3R5cGUucmFuZG9taXphdGlvbkZhY3RvciA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3I7XG4gIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IgPSB2O1xuICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldEppdHRlcih2KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIG1heGltdW0gZGVsYXkgYmV0d2VlbiByZWNvbm5lY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheVxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb25EZWxheU1heCA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4O1xuICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heCA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0TWF4KHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY29ubmVjdGlvbiB0aW1lb3V0LiBgZmFsc2VgIHRvIGRpc2FibGVcbiAqXG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICB0aGlzLl90aW1lb3V0ID0gdjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyB0cnlpbmcgdG8gcmVjb25uZWN0IGlmIHJlY29ubmVjdGlvbiBpcyBlbmFibGVkIGFuZCB3ZSBoYXZlIG5vdFxuICogc3RhcnRlZCByZWNvbm5lY3RpbmcgeWV0XG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUubWF5YmVSZWNvbm5lY3RPbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIC8vIE9ubHkgdHJ5IHRvIHJlY29ubmVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RpbmdcbiAgaWYgKCF0aGlzLnJlY29ubmVjdGluZyAmJiB0aGlzLl9yZWNvbm5lY3Rpb24gJiYgdGhpcy5iYWNrb2ZmLmF0dGVtcHRzID09PSAwKSB7XG4gICAgLy8ga2VlcHMgcmVjb25uZWN0aW9uIGZyb20gZmlyaW5nIHR3aWNlIGZvciB0aGUgc2FtZSByZWNvbm5lY3Rpb24gbG9vcFxuICAgIHRoaXMucmVjb25uZWN0KCk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQgYHNvY2tldGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9uYWwsIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9wZW4gPVxuTWFuYWdlci5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChmbiwgb3B0cykge1xuICBkZWJ1ZygncmVhZHlTdGF0ZSAlcycsIHRoaXMucmVhZHlTdGF0ZSk7XG4gIGlmICh+dGhpcy5yZWFkeVN0YXRlLmluZGV4T2YoJ29wZW4nKSkgcmV0dXJuIHRoaXM7XG5cbiAgZGVidWcoJ29wZW5pbmcgJXMnLCB0aGlzLnVyaSk7XG4gIHRoaXMuZW5naW5lID0gZWlvKHRoaXMudXJpLCB0aGlzLm9wdHMpO1xuICB2YXIgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcblxuICAvLyBlbWl0IGBvcGVuYFxuICB2YXIgb3BlblN1YiA9IG9uKHNvY2tldCwgJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbm9wZW4oKTtcbiAgICBmbiAmJiBmbigpO1xuICB9KTtcblxuICAvLyBlbWl0IGBjb25uZWN0X2Vycm9yYFxuICB2YXIgZXJyb3JTdWIgPSBvbihzb2NrZXQsICdlcnJvcicsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGVidWcoJ2Nvbm5lY3RfZXJyb3InKTtcbiAgICBzZWxmLmNsZWFudXAoKTtcbiAgICBzZWxmLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgICBzZWxmLmVtaXRBbGwoJ2Nvbm5lY3RfZXJyb3InLCBkYXRhKTtcbiAgICBpZiAoZm4pIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0Nvbm5lY3Rpb24gZXJyb3InKTtcbiAgICAgIGVyci5kYXRhID0gZGF0YTtcbiAgICAgIGZuKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9ubHkgZG8gdGhpcyBpZiB0aGVyZSBpcyBubyBmbiB0byBoYW5kbGUgdGhlIGVycm9yXG4gICAgICBzZWxmLm1heWJlUmVjb25uZWN0T25PcGVuKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBlbWl0IGBjb25uZWN0X3RpbWVvdXRgXG4gIGlmIChmYWxzZSAhPT0gdGhpcy5fdGltZW91dCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICBkZWJ1ZygnY29ubmVjdCBhdHRlbXB0IHdpbGwgdGltZW91dCBhZnRlciAlZCcsIHRpbWVvdXQpO1xuXG4gICAgLy8gc2V0IHRpbWVyXG4gICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1ZygnY29ubmVjdCBhdHRlbXB0IHRpbWVkIG91dCBhZnRlciAlZCcsIHRpbWVvdXQpO1xuICAgICAgb3BlblN1Yi5kZXN0cm95KCk7XG4gICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgIHNvY2tldC5lbWl0KCdlcnJvcicsICd0aW1lb3V0Jyk7XG4gICAgICBzZWxmLmVtaXRBbGwoJ2Nvbm5lY3RfdGltZW91dCcsIHRpbWVvdXQpO1xuICAgIH0sIHRpbWVvdXQpO1xuXG4gICAgdGhpcy5zdWJzLnB1c2goe1xuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5zdWJzLnB1c2gob3BlblN1Yik7XG4gIHRoaXMuc3Vicy5wdXNoKGVycm9yU3ViKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IG9wZW4uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Zygnb3BlbicpO1xuXG4gIC8vIGNsZWFyIG9sZCBzdWJzXG4gIHRoaXMuY2xlYW51cCgpO1xuXG4gIC8vIG1hcmsgYXMgb3BlblxuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gIHRoaXMuZW1pdCgnb3BlbicpO1xuXG4gIC8vIGFkZCBuZXcgc3Vic1xuICB2YXIgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2RhdGEnLCBiaW5kKHRoaXMsICdvbmRhdGEnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdwaW5nJywgYmluZCh0aGlzLCAnb25waW5nJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAncG9uZycsIGJpbmQodGhpcywgJ29ucG9uZycpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2Vycm9yJywgYmluZCh0aGlzLCAnb25lcnJvcicpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2Nsb3NlJywgYmluZCh0aGlzLCAnb25jbG9zZScpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHRoaXMuZGVjb2RlciwgJ2RlY29kZWQnLCBiaW5kKHRoaXMsICdvbmRlY29kZWQnKSkpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHBpbmcuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25waW5nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxhc3RQaW5nID0gbmV3IERhdGUoKTtcbiAgdGhpcy5lbWl0QWxsKCdwaW5nJyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgcGFja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ucG9uZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0QWxsKCdwb25nJywgbmV3IERhdGUoKSAtIHRoaXMubGFzdFBpbmcpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBkYXRhLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uZGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuZGVjb2Rlci5hZGQoZGF0YSk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIHBhcnNlciBmdWxseSBkZWNvZGVzIGEgcGFja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uZGVjb2RlZCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzb2NrZXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgZGVidWcoJ2Vycm9yJywgZXJyKTtcbiAgdGhpcy5lbWl0QWxsKCdlcnJvcicsIGVycik7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgc29ja2V0IGZvciB0aGUgZ2l2ZW4gYG5zcGAuXG4gKlxuICogQHJldHVybiB7U29ja2V0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5zb2NrZXQgPSBmdW5jdGlvbiAobnNwLCBvcHRzKSB7XG4gIHZhciBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgaWYgKCFzb2NrZXQpIHtcbiAgICBzb2NrZXQgPSBuZXcgU29ja2V0KHRoaXMsIG5zcCwgb3B0cyk7XG4gICAgdGhpcy5uc3BzW25zcF0gPSBzb2NrZXQ7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNvY2tldC5vbignY29ubmVjdGluZycsIG9uQ29ubmVjdGluZyk7XG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgc29ja2V0LmlkID0gc2VsZi5nZW5lcmF0ZUlkKG5zcCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5hdXRvQ29ubmVjdCkge1xuICAgICAgLy8gbWFudWFsbHkgY2FsbCBoZXJlIHNpbmNlIGNvbm5lY3RpbmcgZXZlbnQgaXMgZmlyZWQgYmVmb3JlIGxpc3RlbmluZ1xuICAgICAgb25Db25uZWN0aW5nKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Db25uZWN0aW5nICgpIHtcbiAgICBpZiAoIX5pbmRleE9mKHNlbGYuY29ubmVjdGluZywgc29ja2V0KSkge1xuICAgICAgc2VsZi5jb25uZWN0aW5nLnB1c2goc29ja2V0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc29ja2V0O1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNvY2tldCBjbG9zZS5cbiAqXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0XG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgdmFyIGluZGV4ID0gaW5kZXhPZih0aGlzLmNvbm5lY3RpbmcsIHNvY2tldCk7XG4gIGlmICh+aW5kZXgpIHRoaXMuY29ubmVjdGluZy5zcGxpY2UoaW5kZXgsIDEpO1xuICBpZiAodGhpcy5jb25uZWN0aW5nLmxlbmd0aCkgcmV0dXJuO1xuXG4gIHRoaXMuY2xvc2UoKTtcbn07XG5cbi8qKlxuICogV3JpdGVzIGEgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgZGVidWcoJ3dyaXRpbmcgcGFja2V0ICVqJywgcGFja2V0KTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAocGFja2V0LnF1ZXJ5ICYmIHBhY2tldC50eXBlID09PSAwKSBwYWNrZXQubnNwICs9ICc/JyArIHBhY2tldC5xdWVyeTtcblxuICBpZiAoIXNlbGYuZW5jb2RpbmcpIHtcbiAgICAvLyBlbmNvZGUsIHRoZW4gd3JpdGUgdG8gZW5naW5lIHdpdGggcmVzdWx0XG4gICAgc2VsZi5lbmNvZGluZyA9IHRydWU7XG4gICAgdGhpcy5lbmNvZGVyLmVuY29kZShwYWNrZXQsIGZ1bmN0aW9uIChlbmNvZGVkUGFja2V0cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZWxmLmVuZ2luZS53cml0ZShlbmNvZGVkUGFja2V0c1tpXSwgcGFja2V0Lm9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgc2VsZi5lbmNvZGluZyA9IGZhbHNlO1xuICAgICAgc2VsZi5wcm9jZXNzUGFja2V0UXVldWUoKTtcbiAgICB9KTtcbiAgfSBlbHNlIHsgLy8gYWRkIHBhY2tldCB0byB0aGUgcXVldWVcbiAgICBzZWxmLnBhY2tldEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIH1cbn07XG5cbi8qKlxuICogSWYgcGFja2V0IGJ1ZmZlciBpcyBub24tZW1wdHksIGJlZ2lucyBlbmNvZGluZyB0aGVcbiAqIG5leHQgcGFja2V0IGluIGxpbmUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucHJvY2Vzc1BhY2tldFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5wYWNrZXRCdWZmZXIubGVuZ3RoID4gMCAmJiAhdGhpcy5lbmNvZGluZykge1xuICAgIHZhciBwYWNrID0gdGhpcy5wYWNrZXRCdWZmZXIuc2hpZnQoKTtcbiAgICB0aGlzLnBhY2tldChwYWNrKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCB0cmFuc3BvcnQgc3Vic2NyaXB0aW9ucyBhbmQgcGFja2V0IGJ1ZmZlci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygnY2xlYW51cCcpO1xuXG4gIHZhciBzdWJzTGVuZ3RoID0gdGhpcy5zdWJzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc3ViID0gdGhpcy5zdWJzLnNoaWZ0KCk7XG4gICAgc3ViLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHRoaXMucGFja2V0QnVmZmVyID0gW107XG4gIHRoaXMuZW5jb2RpbmcgPSBmYWxzZTtcbiAgdGhpcy5sYXN0UGluZyA9IG51bGw7XG5cbiAgdGhpcy5kZWNvZGVyLmRlc3Ryb3koKTtcbn07XG5cbi8qKlxuICogQ2xvc2UgdGhlIGN1cnJlbnQgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmNsb3NlID1cbk1hbmFnZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdkaXNjb25uZWN0Jyk7XG4gIHRoaXMuc2tpcFJlY29ubmVjdCA9IHRydWU7XG4gIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIC8vIGBvbmNsb3NlYCB3aWxsIG5vdCBmaXJlIGJlY2F1c2VcbiAgICAvLyBhbiBvcGVuIGV2ZW50IG5ldmVyIGhhcHBlbmVkXG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cbiAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICBpZiAodGhpcy5lbmdpbmUpIHRoaXMuZW5naW5lLmNsb3NlKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBjbG9zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICBkZWJ1Zygnb25jbG9zZScpO1xuXG4gIHRoaXMuY2xlYW51cCgpO1xuICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIHRoaXMuZW1pdCgnY2xvc2UnLCByZWFzb24pO1xuXG4gIGlmICh0aGlzLl9yZWNvbm5lY3Rpb24gJiYgIXRoaXMuc2tpcFJlY29ubmVjdCkge1xuICAgIHRoaXMucmVjb25uZWN0KCk7XG4gIH1cbn07XG5cbi8qKlxuICogQXR0ZW1wdCBhIHJlY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnJlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpIHJldHVybiB0aGlzO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAodGhpcy5iYWNrb2ZmLmF0dGVtcHRzID49IHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgZGVidWcoJ3JlY29ubmVjdCBmYWlsZWQnKTtcbiAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICB0aGlzLmVtaXRBbGwoJ3JlY29ubmVjdF9mYWlsZWQnKTtcbiAgICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHZhciBkZWxheSA9IHRoaXMuYmFja29mZi5kdXJhdGlvbigpO1xuICAgIGRlYnVnKCd3aWxsIHdhaXQgJWRtcyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHQnLCBkZWxheSk7XG5cbiAgICB0aGlzLnJlY29ubmVjdGluZyA9IHRydWU7XG4gICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KSByZXR1cm47XG5cbiAgICAgIGRlYnVnKCdhdHRlbXB0aW5nIHJlY29ubmVjdCcpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RfYXR0ZW1wdCcsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG4gICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdGluZycsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG5cbiAgICAgIC8vIGNoZWNrIGFnYWluIGZvciB0aGUgY2FzZSBzb2NrZXQgY2xvc2VkIGluIGFib3ZlIGV2ZW50c1xuICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdCkgcmV0dXJuO1xuXG4gICAgICBzZWxmLm9wZW4oZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZGVidWcoJ3JlY29ubmVjdCBhdHRlbXB0IGVycm9yJyk7XG4gICAgICAgICAgc2VsZi5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLnJlY29ubmVjdCgpO1xuICAgICAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0X2Vycm9yJywgZXJyLmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlYnVnKCdyZWNvbm5lY3Qgc3VjY2VzcycpO1xuICAgICAgICAgIHNlbGYub25yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZGVsYXkpO1xuXG4gICAgdGhpcy5zdWJzLnB1c2goe1xuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXR0ZW1wdCA9IHRoaXMuYmFja29mZi5hdHRlbXB0cztcbiAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gIHRoaXMudXBkYXRlU29ja2V0SWRzKCk7XG4gIHRoaXMuZW1pdEFsbCgncmVjb25uZWN0JywgYXR0ZW1wdCk7XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gb247XG5cbi8qKlxuICogSGVscGVyIGZvciBzdWJzY3JpcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEV2ZW50RW1pdHRlcn0gb2JqIHdpdGggYEVtaXR0ZXJgIG1peGluIG9yIGBFdmVudEVtaXR0ZXJgXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gb24gKG9iaiwgZXYsIGZuKSB7XG4gIG9iai5vbihldiwgZm4pO1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iai5yZW1vdmVMaXN0ZW5lcihldiwgZm4pO1xuICAgIH1cbiAgfTtcbn1cbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBwYXJzZXIgPSByZXF1aXJlKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgdG9BcnJheSA9IHJlcXVpcmUoJ3RvLWFycmF5Jyk7XG52YXIgb24gPSByZXF1aXJlKCcuL29uJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1iaW5kJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50OnNvY2tldCcpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG52YXIgaGFzQmluID0gcmVxdWlyZSgnaGFzLWJpbmFyeTInKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBTb2NrZXQ7XG5cbi8qKlxuICogSW50ZXJuYWwgZXZlbnRzIChibGFja2xpc3RlZCkuXG4gKiBUaGVzZSBldmVudHMgY2FuJ3QgYmUgZW1pdHRlZCBieSB0aGUgdXNlci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgZXZlbnRzID0ge1xuICBjb25uZWN0OiAxLFxuICBjb25uZWN0X2Vycm9yOiAxLFxuICBjb25uZWN0X3RpbWVvdXQ6IDEsXG4gIGNvbm5lY3Rpbmc6IDEsXG4gIGRpc2Nvbm5lY3Q6IDEsXG4gIGVycm9yOiAxLFxuICByZWNvbm5lY3Q6IDEsXG4gIHJlY29ubmVjdF9hdHRlbXB0OiAxLFxuICByZWNvbm5lY3RfZmFpbGVkOiAxLFxuICByZWNvbm5lY3RfZXJyb3I6IDEsXG4gIHJlY29ubmVjdGluZzogMSxcbiAgcGluZzogMSxcbiAgcG9uZzogMVxufTtcblxuLyoqXG4gKiBTaG9ydGN1dCB0byBgRW1pdHRlciNlbWl0YC5cbiAqL1xuXG52YXIgZW1pdCA9IEVtaXR0ZXIucHJvdG90eXBlLmVtaXQ7XG5cbi8qKlxuICogYFNvY2tldGAgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBTb2NrZXQgKGlvLCBuc3AsIG9wdHMpIHtcbiAgdGhpcy5pbyA9IGlvO1xuICB0aGlzLm5zcCA9IG5zcDtcbiAgdGhpcy5qc29uID0gdGhpczsgLy8gY29tcGF0XG4gIHRoaXMuaWRzID0gMDtcbiAgdGhpcy5hY2tzID0ge307XG4gIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICB0aGlzLmZsYWdzID0ge307XG4gIGlmIChvcHRzICYmIG9wdHMucXVlcnkpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgfVxuICBpZiAodGhpcy5pby5hdXRvQ29ubmVjdCkgdGhpcy5vcGVuKCk7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFNvY2tldC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFN1YnNjcmliZSB0byBvcGVuLCBjbG9zZSBhbmQgcGFja2V0IGV2ZW50c1xuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc3ViRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdWJzKSByZXR1cm47XG5cbiAgdmFyIGlvID0gdGhpcy5pbztcbiAgdGhpcy5zdWJzID0gW1xuICAgIG9uKGlvLCAnb3BlbicsIGJpbmQodGhpcywgJ29ub3BlbicpKSxcbiAgICBvbihpbywgJ3BhY2tldCcsIGJpbmQodGhpcywgJ29ucGFja2V0JykpLFxuICAgIG9uKGlvLCAnY2xvc2UnLCBiaW5kKHRoaXMsICdvbmNsb3NlJykpXG4gIF07XG59O1xuXG4vKipcbiAqIFwiT3BlbnNcIiB0aGUgc29ja2V0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vcGVuID1cblNvY2tldC5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29ubmVjdGVkKSByZXR1cm4gdGhpcztcblxuICB0aGlzLnN1YkV2ZW50cygpO1xuICB0aGlzLmlvLm9wZW4oKTsgLy8gZW5zdXJlIG9wZW5cbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5pby5yZWFkeVN0YXRlKSB0aGlzLm9ub3BlbigpO1xuICB0aGlzLmVtaXQoJ2Nvbm5lY3RpbmcnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgYG1lc3NhZ2VgIGV2ZW50LlxuICpcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICBhcmdzLnVuc2hpZnQoJ21lc3NhZ2UnKTtcbiAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgYGVtaXRgLlxuICogSWYgdGhlIGV2ZW50IGlzIGluIGBldmVudHNgLCBpdCdzIGVtaXR0ZWQgbm9ybWFsbHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldikpIHtcbiAgICBlbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgdmFyIHBhY2tldCA9IHtcbiAgICB0eXBlOiAodGhpcy5mbGFncy5iaW5hcnkgIT09IHVuZGVmaW5lZCA/IHRoaXMuZmxhZ3MuYmluYXJ5IDogaGFzQmluKGFyZ3MpKSA/IHBhcnNlci5CSU5BUllfRVZFTlQgOiBwYXJzZXIuRVZFTlQsXG4gICAgZGF0YTogYXJnc1xuICB9O1xuXG4gIHBhY2tldC5vcHRpb25zID0ge307XG4gIHBhY2tldC5vcHRpb25zLmNvbXByZXNzID0gIXRoaXMuZmxhZ3MgfHwgZmFsc2UgIT09IHRoaXMuZmxhZ3MuY29tcHJlc3M7XG5cbiAgLy8gZXZlbnQgYWNrIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdKSB7XG4gICAgZGVidWcoJ2VtaXR0aW5nIHBhY2tldCB3aXRoIGFjayBpZCAlZCcsIHRoaXMuaWRzKTtcbiAgICB0aGlzLmFja3NbdGhpcy5pZHNdID0gYXJncy5wb3AoKTtcbiAgICBwYWNrZXQuaWQgPSB0aGlzLmlkcysrO1xuICB9XG5cbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgdGhpcy5wYWNrZXQocGFja2V0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNlbmRCdWZmZXIucHVzaChwYWNrZXQpO1xuICB9XG5cbiAgdGhpcy5mbGFncyA9IHt9O1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBhIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgcGFja2V0Lm5zcCA9IHRoaXMubnNwO1xuICB0aGlzLmlvLnBhY2tldChwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlbmdpbmUgYG9wZW5gLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygndHJhbnNwb3J0IGlzIG9wZW4gLSBjb25uZWN0aW5nJyk7XG5cbiAgLy8gd3JpdGUgY29ubmVjdCBwYWNrZXQgaWYgbmVjZXNzYXJ5XG4gIGlmICgnLycgIT09IHRoaXMubnNwKSB7XG4gICAgaWYgKHRoaXMucXVlcnkpIHtcbiAgICAgIHZhciBxdWVyeSA9IHR5cGVvZiB0aGlzLnF1ZXJ5ID09PSAnb2JqZWN0JyA/IHBhcnNlcXMuZW5jb2RlKHRoaXMucXVlcnkpIDogdGhpcy5xdWVyeTtcbiAgICAgIGRlYnVnKCdzZW5kaW5nIGNvbm5lY3QgcGFja2V0IHdpdGggcXVlcnkgJXMnLCBxdWVyeSk7XG4gICAgICB0aGlzLnBhY2tldCh7dHlwZTogcGFyc2VyLkNPTk5FQ1QsIHF1ZXJ5OiBxdWVyeX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhY2tldCh7dHlwZTogcGFyc2VyLkNPTk5FQ1R9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZW5naW5lIGBjbG9zZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJlYXNvblxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICBkZWJ1ZygnY2xvc2UgKCVzKScsIHJlYXNvbik7XG4gIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgZGVsZXRlIHRoaXMuaWQ7XG4gIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcsIHJlYXNvbik7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIHNvY2tldCBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbnBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdmFyIHNhbWVOYW1lc3BhY2UgPSBwYWNrZXQubnNwID09PSB0aGlzLm5zcDtcbiAgdmFyIHJvb3ROYW1lc3BhY2VFcnJvciA9IHBhY2tldC50eXBlID09PSBwYXJzZXIuRVJST1IgJiYgcGFja2V0Lm5zcCA9PT0gJy8nO1xuXG4gIGlmICghc2FtZU5hbWVzcGFjZSAmJiAhcm9vdE5hbWVzcGFjZUVycm9yKSByZXR1cm47XG5cbiAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgIGNhc2UgcGFyc2VyLkNPTk5FQ1Q6XG4gICAgICB0aGlzLm9uY29ubmVjdCgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5FVkVOVDpcbiAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5CSU5BUllfRVZFTlQ6XG4gICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuQUNLOlxuICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5CSU5BUllfQUNLOlxuICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5ESVNDT05ORUNUOlxuICAgICAgdGhpcy5vbmRpc2Nvbm5lY3QoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuRVJST1I6XG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgcGFja2V0LmRhdGEpO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmV2ZW50ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB2YXIgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICBkZWJ1ZygnZW1pdHRpbmcgZXZlbnQgJWonLCBhcmdzKTtcblxuICBpZiAobnVsbCAhPSBwYWNrZXQuaWQpIHtcbiAgICBkZWJ1ZygnYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudCcpO1xuICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIGVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goYXJncyk7XG4gIH1cbn07XG5cbi8qKlxuICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmFjayA9IGZ1bmN0aW9uIChpZCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBzZW50ID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gcHJldmVudCBkb3VibGUgY2FsbGJhY2tzXG4gICAgaWYgKHNlbnQpIHJldHVybjtcbiAgICBzZW50ID0gdHJ1ZTtcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICBkZWJ1Zygnc2VuZGluZyBhY2sgJWonLCBhcmdzKTtcblxuICAgIHNlbGYucGFja2V0KHtcbiAgICAgIHR5cGU6IGhhc0JpbihhcmdzKSA/IHBhcnNlci5CSU5BUllfQUNLIDogcGFyc2VyLkFDSyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGRhdGE6IGFyZ3NcbiAgICB9KTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgYWNrbm93bGVnZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmFjayA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdmFyIGFjayA9IHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGFjaykge1xuICAgIGRlYnVnKCdjYWxsaW5nIGFjayAlcyB3aXRoICVqJywgcGFja2V0LmlkLCBwYWNrZXQuZGF0YSk7XG4gICAgYWNrLmFwcGx5KHRoaXMsIHBhY2tldC5kYXRhKTtcbiAgICBkZWxldGUgdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoJ2JhZCBhY2sgJXMnLCBwYWNrZXQuaWQpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XG4gIHRoaXMuZGlzY29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMuZW1pdCgnY29ubmVjdCcpO1xuICB0aGlzLmVtaXRCdWZmZXJlZCgpO1xufTtcblxuLyoqXG4gKiBFbWl0IGJ1ZmZlcmVkIGV2ZW50cyAocmVjZWl2ZWQgYW5kIGVtaXR0ZWQpLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuZW1pdEJ1ZmZlcmVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRoaXMucmVjZWl2ZUJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgIGVtaXQuYXBwbHkodGhpcywgdGhpcy5yZWNlaXZlQnVmZmVyW2ldKTtcbiAgfVxuICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5zZW5kQnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5wYWNrZXQodGhpcy5zZW5kQnVmZmVyW2ldKTtcbiAgfVxuICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc2VydmVyIGRpc2Nvbm5lY3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdzZXJ2ZXIgZGlzY29ubmVjdCAoJXMpJywgdGhpcy5uc3ApO1xuICB0aGlzLmRlc3Ryb3koKTtcbiAgdGhpcy5vbmNsb3NlKCdpbyBzZXJ2ZXIgZGlzY29ubmVjdCcpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICogdGhpcyBtZXRob2QgZW5zdXJlcyB0aGUgbWFuYWdlciBzdG9wcyB0cmFja2luZyB1cyBhbmRcbiAqIHRoYXQgcmVjb25uZWN0aW9ucyBkb24ndCBnZXQgdHJpZ2dlcmVkIGZvciB0aGlzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZS5cbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnN1YnMpIHtcbiAgICAvLyBjbGVhbiBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIHJlY29ubmVjdGlvbnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vicy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zdWJzW2ldLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5zdWJzID0gbnVsbDtcbiAgfVxuXG4gIHRoaXMuaW8uZGVzdHJveSh0aGlzKTtcbn07XG5cbi8qKlxuICogRGlzY29ubmVjdHMgdGhlIHNvY2tldCBtYW51YWxseS5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9XG5Tb2NrZXQucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIGRlYnVnKCdwZXJmb3JtaW5nIGRpc2Nvbm5lY3QgKCVzKScsIHRoaXMubnNwKTtcbiAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHBhcnNlci5ESVNDT05ORUNUIH0pO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNvY2tldCBmcm9tIHBvb2xcbiAgdGhpcy5kZXN0cm95KCk7XG5cbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgLy8gZmlyZSBldmVudHNcbiAgICB0aGlzLm9uY2xvc2UoJ2lvIGNsaWVudCBkaXNjb25uZWN0Jyk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGNvbXByZXNzIGZsYWcuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBpZiBgdHJ1ZWAsIGNvbXByZXNzZXMgdGhlIHNlbmRpbmcgZGF0YVxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuY29tcHJlc3MgPSBmdW5jdGlvbiAoY29tcHJlc3MpIHtcbiAgdGhpcy5mbGFncy5jb21wcmVzcyA9IGNvbXByZXNzO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgYmluYXJ5IGZsYWdcbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHdoZXRoZXIgdGhlIGVtaXR0ZWQgZGF0YSBjb250YWlucyBiaW5hcnlcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmJpbmFyeSA9IGZ1bmN0aW9uIChiaW5hcnkpIHtcbiAgdGhpcy5mbGFncy5iaW5hcnkgPSBiaW5hcnk7XG4gIHJldHVybiB0aGlzO1xufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBwYXJzZXVyaSA9IHJlcXVpcmUoJ3BhcnNldXJpJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50OnVybCcpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdXJsO1xuXG4vKipcbiAqIFVSTCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IEFuIG9iamVjdCBtZWFudCB0byBtaW1pYyB3aW5kb3cubG9jYXRpb24uXG4gKiAgICAgICAgICAgICAgICAgRGVmYXVsdHMgdG8gd2luZG93LmxvY2F0aW9uLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB1cmwgKHVyaSwgbG9jKSB7XG4gIHZhciBvYmogPSB1cmk7XG5cbiAgLy8gZGVmYXVsdCB0byB3aW5kb3cubG9jYXRpb25cbiAgbG9jID0gbG9jIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGxvY2F0aW9uKTtcbiAgaWYgKG51bGwgPT0gdXJpKSB1cmkgPSBsb2MucHJvdG9jb2wgKyAnLy8nICsgbG9jLmhvc3Q7XG5cbiAgLy8gcmVsYXRpdmUgcGF0aCBzdXBwb3J0XG4gIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHVyaSkge1xuICAgIGlmICgnLycgPT09IHVyaS5jaGFyQXQoMCkpIHtcbiAgICAgIGlmICgnLycgPT09IHVyaS5jaGFyQXQoMSkpIHtcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgdXJpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJpID0gbG9jLmhvc3QgKyB1cmk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEvXihodHRwcz98d3NzPyk6XFwvXFwvLy50ZXN0KHVyaSkpIHtcbiAgICAgIGRlYnVnKCdwcm90b2NvbC1sZXNzIHVybCAlcycsIHVyaSk7XG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBsb2MpIHtcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgJy8vJyArIHVyaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVyaSA9ICdodHRwczovLycgKyB1cmk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcGFyc2VcbiAgICBkZWJ1ZygncGFyc2UgJXMnLCB1cmkpO1xuICAgIG9iaiA9IHBhcnNldXJpKHVyaSk7XG4gIH1cblxuICAvLyBtYWtlIHN1cmUgd2UgdHJlYXQgYGxvY2FsaG9zdDo4MGAgYW5kIGBsb2NhbGhvc3RgIGVxdWFsbHlcbiAgaWYgKCFvYmoucG9ydCkge1xuICAgIGlmICgvXihodHRwfHdzKSQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgb2JqLnBvcnQgPSAnODAnO1xuICAgIH0gZWxzZSBpZiAoL14oaHR0cHx3cylzJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICBvYmoucG9ydCA9ICc0NDMnO1xuICAgIH1cbiAgfVxuXG4gIG9iai5wYXRoID0gb2JqLnBhdGggfHwgJy8nO1xuXG4gIHZhciBpcHY2ID0gb2JqLmhvc3QuaW5kZXhPZignOicpICE9PSAtMTtcbiAgdmFyIGhvc3QgPSBpcHY2ID8gJ1snICsgb2JqLmhvc3QgKyAnXScgOiBvYmouaG9zdDtcblxuICAvLyBkZWZpbmUgdW5pcXVlIGlkXG4gIG9iai5pZCA9IG9iai5wcm90b2NvbCArICc6Ly8nICsgaG9zdCArICc6JyArIG9iai5wb3J0O1xuICAvLyBkZWZpbmUgaHJlZlxuICBvYmouaHJlZiA9IG9iai5wcm90b2NvbCArICc6Ly8nICsgaG9zdCArIChsb2MgJiYgbG9jLnBvcnQgPT09IG9iai5wb3J0ID8gJycgOiAoJzonICsgb2JqLnBvcnQpKTtcblxuICByZXR1cm4gb2JqO1xufVxuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsXG4gICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJyxcbiAgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLFxuICAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsXG4gICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJyxcbiAgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLFxuICAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsXG4gICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJyxcbiAgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLFxuICAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsXG4gICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0cy5pbnN0YW5jZXMgPSBbXTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuICByZXR1cm4gZGVidWc7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB2YXIgaW5kZXggPSBleHBvcnRzLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgZXhwb3J0cy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgaTtcbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4cG9ydHMuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGluc3RhbmNlID0gZXhwb3J0cy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgaWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsIi8qZ2xvYmFsIEJsb2IsRmlsZSovXG5cbi8qKlxuICogTW9kdWxlIHJlcXVpcmVtZW50c1xuICovXG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xudmFyIGlzQnVmID0gcmVxdWlyZSgnLi9pcy1idWZmZXInKTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgd2l0aE5hdGl2ZUJsb2IgPSB0eXBlb2YgQmxvYiA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHRvU3RyaW5nLmNhbGwoQmxvYikgPT09ICdbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl0nKTtcbnZhciB3aXRoTmF0aXZlRmlsZSA9IHR5cGVvZiBGaWxlID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9TdHJpbmcuY2FsbChGaWxlKSA9PT0gJ1tvYmplY3QgRmlsZUNvbnN0cnVjdG9yXScpO1xuXG4vKipcbiAqIFJlcGxhY2VzIGV2ZXJ5IEJ1ZmZlciB8IEFycmF5QnVmZmVyIGluIHBhY2tldCB3aXRoIGEgbnVtYmVyZWQgcGxhY2Vob2xkZXIuXG4gKiBBbnl0aGluZyB3aXRoIGJsb2JzIG9yIGZpbGVzIHNob3VsZCBiZSBmZWQgdGhyb3VnaCByZW1vdmVCbG9icyBiZWZvcmUgY29taW5nXG4gKiBoZXJlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBzb2NrZXQuaW8gZXZlbnQgcGFja2V0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggZGVjb25zdHJ1Y3RlZCBwYWNrZXQgYW5kIGxpc3Qgb2YgYnVmZmVyc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlY29uc3RydWN0UGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KSB7XG4gIHZhciBidWZmZXJzID0gW107XG4gIHZhciBwYWNrZXREYXRhID0gcGFja2V0LmRhdGE7XG4gIHZhciBwYWNrID0gcGFja2V0O1xuICBwYWNrLmRhdGEgPSBfZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0RGF0YSwgYnVmZmVycyk7XG4gIHBhY2suYXR0YWNobWVudHMgPSBidWZmZXJzLmxlbmd0aDsgLy8gbnVtYmVyIG9mIGJpbmFyeSAnYXR0YWNobWVudHMnXG4gIHJldHVybiB7cGFja2V0OiBwYWNrLCBidWZmZXJzOiBidWZmZXJzfTtcbn07XG5cbmZ1bmN0aW9uIF9kZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gIGlmICghZGF0YSkgcmV0dXJuIGRhdGE7XG5cbiAgaWYgKGlzQnVmKGRhdGEpKSB7XG4gICAgdmFyIHBsYWNlaG9sZGVyID0geyBfcGxhY2Vob2xkZXI6IHRydWUsIG51bTogYnVmZmVycy5sZW5ndGggfTtcbiAgICBidWZmZXJzLnB1c2goZGF0YSk7XG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICB2YXIgbmV3RGF0YSA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuZXdEYXRhW2ldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgIShkYXRhIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICB2YXIgbmV3RGF0YSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBuZXdEYXRhW2tleV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogUmVjb25zdHJ1Y3RzIGEgYmluYXJ5IHBhY2tldCBmcm9tIGl0cyBwbGFjZWhvbGRlciBwYWNrZXQgYW5kIGJ1ZmZlcnNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gZXZlbnQgcGFja2V0IHdpdGggcGxhY2Vob2xkZXJzXG4gKiBAcGFyYW0ge0FycmF5fSBidWZmZXJzIC0gYmluYXJ5IGJ1ZmZlcnMgdG8gcHV0IGluIHBsYWNlaG9sZGVyIHBvc2l0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSByZWNvbnN0cnVjdGVkIHBhY2tldFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gZnVuY3Rpb24ocGFja2V0LCBidWZmZXJzKSB7XG4gIHBhY2tldC5kYXRhID0gX3JlY29uc3RydWN0UGFja2V0KHBhY2tldC5kYXRhLCBidWZmZXJzKTtcbiAgcGFja2V0LmF0dGFjaG1lbnRzID0gdW5kZWZpbmVkOyAvLyBubyBsb25nZXIgdXNlZnVsXG4gIHJldHVybiBwYWNrZXQ7XG59O1xuXG5mdW5jdGlvbiBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICBpZiAoIWRhdGEpIHJldHVybiBkYXRhO1xuXG4gIGlmIChkYXRhICYmIGRhdGEuX3BsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGJ1ZmZlcnNbZGF0YS5udW1dOyAvLyBhcHByb3ByaWF0ZSBidWZmZXIgKHNob3VsZCBiZSBuYXR1cmFsIG9yZGVyIGFueXdheSlcbiAgfSBlbHNlIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhW2ldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFbaV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgZGF0YVtrZXldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgcmVtb3ZlcyBCbG9icyBvciBGaWxlcyBmcm9tIGRhdGEgdmlhXG4gKiBGaWxlUmVhZGVyJ3MgcmVhZEFzQXJyYXlCdWZmZXIgbWV0aG9kLiBVc2VkIGJlZm9yZSBlbmNvZGluZ1xuICogZGF0YSBhcyBtc2dwYWNrLiBDYWxscyBjYWxsYmFjayB3aXRoIHRoZSBibG9ibGVzcyBkYXRhLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZW1vdmVCbG9icyA9IGZ1bmN0aW9uKGRhdGEsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIF9yZW1vdmVCbG9icyhvYmosIGN1cktleSwgY29udGFpbmluZ09iamVjdCkge1xuICAgIGlmICghb2JqKSByZXR1cm4gb2JqO1xuXG4gICAgLy8gY29udmVydCBhbnkgYmxvYlxuICAgIGlmICgod2l0aE5hdGl2ZUJsb2IgJiYgb2JqIGluc3RhbmNlb2YgQmxvYikgfHxcbiAgICAgICAgKHdpdGhOYXRpdmVGaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICBwZW5kaW5nQmxvYnMrKztcblxuICAgICAgLy8gYXN5bmMgZmlsZXJlYWRlclxuICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHsgLy8gdGhpcy5yZXN1bHQgPT0gYXJyYXlidWZmZXJcbiAgICAgICAgaWYgKGNvbnRhaW5pbmdPYmplY3QpIHtcbiAgICAgICAgICBjb250YWluaW5nT2JqZWN0W2N1cktleV0gPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBibG9ibGVzc0RhdGEgPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vdGhpbmcgcGVuZGluZyBpdHMgY2FsbGJhY2sgdGltZVxuICAgICAgICBpZighIC0tcGVuZGluZ0Jsb2JzKSB7XG4gICAgICAgICAgY2FsbGJhY2soYmxvYmxlc3NEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihvYmopOyAvLyBibG9iIC0+IGFycmF5YnVmZmVyXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHsgLy8gaGFuZGxlIGFycmF5XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICBfcmVtb3ZlQmxvYnMob2JqW2ldLCBpLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgIWlzQnVmKG9iaikpIHsgLy8gYW5kIG9iamVjdFxuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBfcmVtb3ZlQmxvYnMob2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgcGVuZGluZ0Jsb2JzID0gMDtcbiAgdmFyIGJsb2JsZXNzRGF0YSA9IGRhdGE7XG4gIF9yZW1vdmVCbG9icyhibG9ibGVzc0RhdGEpO1xuICBpZiAoIXBlbmRpbmdCbG9icykge1xuICAgIGNhbGxiYWNrKGJsb2JsZXNzRGF0YSk7XG4gIH1cbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgYmluYXJ5ID0gcmVxdWlyZSgnLi9iaW5hcnknKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xudmFyIGlzQnVmID0gcmVxdWlyZSgnLi9pcy1idWZmZXInKTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5wcm90b2NvbCA9IDQ7XG5cbi8qKlxuICogUGFja2V0IHR5cGVzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy50eXBlcyA9IFtcbiAgJ0NPTk5FQ1QnLFxuICAnRElTQ09OTkVDVCcsXG4gICdFVkVOVCcsXG4gICdBQ0snLFxuICAnRVJST1InLFxuICAnQklOQVJZX0VWRU5UJyxcbiAgJ0JJTkFSWV9BQ0snXG5dO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBjb25uZWN0YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQ09OTkVDVCA9IDA7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGRpc2Nvbm5lY3RgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5ESVNDT05ORUNUID0gMTtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgZXZlbnRgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5FVkVOVCA9IDI7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGFja2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkFDSyA9IDM7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGVycm9yYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRVJST1IgPSA0O1xuXG4vKipcbiAqIFBhY2tldCB0eXBlICdiaW5hcnkgZXZlbnQnXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkJJTkFSWV9FVkVOVCA9IDU7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGJpbmFyeSBhY2tgLiBGb3IgYWNrcyB3aXRoIGJpbmFyeSBhcmd1bWVudHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkJJTkFSWV9BQ0sgPSA2O1xuXG4vKipcbiAqIEVuY29kZXIgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkVuY29kZXIgPSBFbmNvZGVyO1xuXG4vKipcbiAqIERlY29kZXIgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkRlY29kZXIgPSBEZWNvZGVyO1xuXG4vKipcbiAqIEEgc29ja2V0LmlvIEVuY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVuY29kZXIoKSB7fVxuXG52YXIgRVJST1JfUEFDS0VUID0gZXhwb3J0cy5FUlJPUiArICdcImVuY29kZSBlcnJvclwiJztcblxuLyoqXG4gKiBFbmNvZGUgYSBwYWNrZXQgYXMgYSBzaW5nbGUgc3RyaW5nIGlmIG5vbi1iaW5hcnksIG9yIGFzIGFcbiAqIGJ1ZmZlciBzZXF1ZW5jZSwgZGVwZW5kaW5nIG9uIHBhY2tldCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBwYWNrZXQgb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGhhbmRsZSBlbmNvZGluZ3MgKGxpa2VseSBlbmdpbmUud3JpdGUpXG4gKiBAcmV0dXJuIENhbGxzIGNhbGxiYWNrIHdpdGggQXJyYXkgb2YgZW5jb2RpbmdzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVuY29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2spe1xuICBkZWJ1ZygnZW5jb2RpbmcgcGFja2V0ICVqJywgb2JqKTtcblxuICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IG9iai50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gb2JqLnR5cGUpIHtcbiAgICBlbmNvZGVBc0JpbmFyeShvYmosIGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZW5jb2RpbmcgPSBlbmNvZGVBc1N0cmluZyhvYmopO1xuICAgIGNhbGxiYWNrKFtlbmNvZGluZ10pO1xuICB9XG59O1xuXG4vKipcbiAqIEVuY29kZSBwYWNrZXQgYXMgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge1N0cmluZ30gZW5jb2RlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlQXNTdHJpbmcob2JqKSB7XG5cbiAgLy8gZmlyc3QgaXMgdHlwZVxuICB2YXIgc3RyID0gJycgKyBvYmoudHlwZTtcblxuICAvLyBhdHRhY2htZW50cyBpZiB3ZSBoYXZlIHRoZW1cbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBvYmoudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IG9iai50eXBlKSB7XG4gICAgc3RyICs9IG9iai5hdHRhY2htZW50cyArICctJztcbiAgfVxuXG4gIC8vIGlmIHdlIGhhdmUgYSBuYW1lc3BhY2Ugb3RoZXIgdGhhbiBgL2BcbiAgLy8gd2UgYXBwZW5kIGl0IGZvbGxvd2VkIGJ5IGEgY29tbWEgYCxgXG4gIGlmIChvYmoubnNwICYmICcvJyAhPT0gb2JqLm5zcCkge1xuICAgIHN0ciArPSBvYmoubnNwICsgJywnO1xuICB9XG5cbiAgLy8gaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgdGhlIGlkXG4gIGlmIChudWxsICE9IG9iai5pZCkge1xuICAgIHN0ciArPSBvYmouaWQ7XG4gIH1cblxuICAvLyBqc29uIGRhdGFcbiAgaWYgKG51bGwgIT0gb2JqLmRhdGEpIHtcbiAgICB2YXIgcGF5bG9hZCA9IHRyeVN0cmluZ2lmeShvYmouZGF0YSk7XG4gICAgaWYgKHBheWxvYWQgIT09IGZhbHNlKSB7XG4gICAgICBzdHIgKz0gcGF5bG9hZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEVSUk9SX1BBQ0tFVDtcbiAgICB9XG4gIH1cblxuICBkZWJ1ZygnZW5jb2RlZCAlaiBhcyAlcycsIG9iaiwgc3RyKTtcbiAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gdHJ5U3RyaW5naWZ5KHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzdHIpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuY29kZSBwYWNrZXQgYXMgJ2J1ZmZlciBzZXF1ZW5jZScgYnkgcmVtb3ZpbmcgYmxvYnMsIGFuZFxuICogZGVjb25zdHJ1Y3RpbmcgcGFja2V0IGludG8gb2JqZWN0IHdpdGggcGxhY2Vob2xkZXJzIGFuZFxuICogYSBsaXN0IG9mIGJ1ZmZlcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QnVmZmVyfSBlbmNvZGVkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGVBc0JpbmFyeShvYmosIGNhbGxiYWNrKSB7XG5cbiAgZnVuY3Rpb24gd3JpdGVFbmNvZGluZyhibG9ibGVzc0RhdGEpIHtcbiAgICB2YXIgZGVjb25zdHJ1Y3Rpb24gPSBiaW5hcnkuZGVjb25zdHJ1Y3RQYWNrZXQoYmxvYmxlc3NEYXRhKTtcbiAgICB2YXIgcGFjayA9IGVuY29kZUFzU3RyaW5nKGRlY29uc3RydWN0aW9uLnBhY2tldCk7XG4gICAgdmFyIGJ1ZmZlcnMgPSBkZWNvbnN0cnVjdGlvbi5idWZmZXJzO1xuXG4gICAgYnVmZmVycy51bnNoaWZ0KHBhY2spOyAvLyBhZGQgcGFja2V0IGluZm8gdG8gYmVnaW5uaW5nIG9mIGRhdGEgbGlzdFxuICAgIGNhbGxiYWNrKGJ1ZmZlcnMpOyAvLyB3cml0ZSBhbGwgdGhlIGJ1ZmZlcnNcbiAgfVxuXG4gIGJpbmFyeS5yZW1vdmVCbG9icyhvYmosIHdyaXRlRW5jb2RpbmcpO1xufVxuXG4vKipcbiAqIEEgc29ja2V0LmlvIERlY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlY29kZXJcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRGVjb2RlcigpIHtcbiAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgIHdpdGggRGVjb2Rlci5cbiAqL1xuXG5FbWl0dGVyKERlY29kZXIucHJvdG90eXBlKTtcblxuLyoqXG4gKiBEZWNvZGVzIGFuIGVuY29kZWQgcGFja2V0IHN0cmluZyBpbnRvIHBhY2tldCBKU09OLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmogLSBlbmNvZGVkIHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRGVjb2Rlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciBwYWNrZXQ7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIHBhY2tldCA9IGRlY29kZVN0cmluZyhvYmopO1xuICAgIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gcGFja2V0LnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBwYWNrZXQudHlwZSkgeyAvLyBiaW5hcnkgcGFja2V0J3MganNvblxuICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbmV3IEJpbmFyeVJlY29uc3RydWN0b3IocGFja2V0KTtcblxuICAgICAgLy8gbm8gYXR0YWNobWVudHMsIGxhYmVsZWQgYmluYXJ5IGJ1dCBubyBiaW5hcnkgZGF0YSB0byBmb2xsb3dcbiAgICAgIGlmICh0aGlzLnJlY29uc3RydWN0b3IucmVjb25QYWNrLmF0dGFjaG1lbnRzID09PSAwKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZGVjb2RlZCcsIHBhY2tldCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gbm9uLWJpbmFyeSBmdWxsIHBhY2tldFxuICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNCdWYob2JqKSB8fCBvYmouYmFzZTY0KSB7IC8vIHJhdyBiaW5hcnkgZGF0YVxuICAgIGlmICghdGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dvdCBiaW5hcnkgZGF0YSB3aGVuIG5vdCByZWNvbnN0cnVjdGluZyBhIHBhY2tldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWNrZXQgPSB0aGlzLnJlY29uc3RydWN0b3IudGFrZUJpbmFyeURhdGEob2JqKTtcbiAgICAgIGlmIChwYWNrZXQpIHsgLy8gcmVjZWl2ZWQgZmluYWwgYnVmZmVyXG4gICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICAgIHRoaXMuZW1pdCgnZGVjb2RlZCcsIHBhY2tldCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biB0eXBlOiAnICsgb2JqKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEZWNvZGUgYSBwYWNrZXQgU3RyaW5nIChKU09OIGRhdGEpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGRlY29kZVN0cmluZyhzdHIpIHtcbiAgdmFyIGkgPSAwO1xuICAvLyBsb29rIHVwIHR5cGVcbiAgdmFyIHAgPSB7XG4gICAgdHlwZTogTnVtYmVyKHN0ci5jaGFyQXQoMCkpXG4gIH07XG5cbiAgaWYgKG51bGwgPT0gZXhwb3J0cy50eXBlc1twLnR5cGVdKSB7XG4gICAgcmV0dXJuIGVycm9yKCd1bmtub3duIHBhY2tldCB0eXBlICcgKyBwLnR5cGUpO1xuICB9XG5cbiAgLy8gbG9vayB1cCBhdHRhY2htZW50cyBpZiB0eXBlIGJpbmFyeVxuICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IHAudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IHAudHlwZSkge1xuICAgIHZhciBidWYgPSAnJztcbiAgICB3aGlsZSAoc3RyLmNoYXJBdCgrK2kpICE9PSAnLScpIHtcbiAgICAgIGJ1ZiArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKGkgPT0gc3RyLmxlbmd0aCkgYnJlYWs7XG4gICAgfVxuICAgIGlmIChidWYgIT0gTnVtYmVyKGJ1ZikgfHwgc3RyLmNoYXJBdChpKSAhPT0gJy0nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXR0YWNobWVudHMnKTtcbiAgICB9XG4gICAgcC5hdHRhY2htZW50cyA9IE51bWJlcihidWYpO1xuICB9XG5cbiAgLy8gbG9vayB1cCBuYW1lc3BhY2UgKGlmIGFueSlcbiAgaWYgKCcvJyA9PT0gc3RyLmNoYXJBdChpICsgMSkpIHtcbiAgICBwLm5zcCA9ICcnO1xuICAgIHdoaWxlICgrK2kpIHtcbiAgICAgIHZhciBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmICgnLCcgPT09IGMpIGJyZWFrO1xuICAgICAgcC5uc3AgKz0gYztcbiAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcC5uc3AgPSAnLyc7XG4gIH1cblxuICAvLyBsb29rIHVwIGlkXG4gIHZhciBuZXh0ID0gc3RyLmNoYXJBdChpICsgMSk7XG4gIGlmICgnJyAhPT0gbmV4dCAmJiBOdW1iZXIobmV4dCkgPT0gbmV4dCkge1xuICAgIHAuaWQgPSAnJztcbiAgICB3aGlsZSAoKytpKSB7XG4gICAgICB2YXIgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAobnVsbCA9PSBjIHx8IE51bWJlcihjKSAhPSBjKSB7XG4gICAgICAgIC0taTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwLmlkICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aCkgYnJlYWs7XG4gICAgfVxuICAgIHAuaWQgPSBOdW1iZXIocC5pZCk7XG4gIH1cblxuICAvLyBsb29rIHVwIGpzb24gZGF0YVxuICBpZiAoc3RyLmNoYXJBdCgrK2kpKSB7XG4gICAgdmFyIHBheWxvYWQgPSB0cnlQYXJzZShzdHIuc3Vic3RyKGkpKTtcbiAgICB2YXIgaXNQYXlsb2FkVmFsaWQgPSBwYXlsb2FkICE9PSBmYWxzZSAmJiAocC50eXBlID09PSBleHBvcnRzLkVSUk9SIHx8IGlzQXJyYXkocGF5bG9hZCkpO1xuICAgIGlmIChpc1BheWxvYWRWYWxpZCkge1xuICAgICAgcC5kYXRhID0gcGF5bG9hZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVycm9yKCdpbnZhbGlkIHBheWxvYWQnKTtcbiAgICB9XG4gIH1cblxuICBkZWJ1ZygnZGVjb2RlZCAlcyBhcyAlaicsIHN0ciwgcCk7XG4gIHJldHVybiBwO1xufVxuXG5mdW5jdGlvbiB0cnlQYXJzZShzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIERlYWxsb2NhdGVzIGEgcGFyc2VyJ3MgcmVzb3VyY2VzXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5EZWNvZGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLnJlY29uc3RydWN0b3IuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICB9XG59O1xuXG4vKipcbiAqIEEgbWFuYWdlciBvZiBhIGJpbmFyeSBldmVudCdzICdidWZmZXIgc2VxdWVuY2UnLiBTaG91bGRcbiAqIGJlIGNvbnN0cnVjdGVkIHdoZW5ldmVyIGEgcGFja2V0IG9mIHR5cGUgQklOQVJZX0VWRU5UIGlzXG4gKiBkZWNvZGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge0JpbmFyeVJlY29uc3RydWN0b3J9IGluaXRpYWxpemVkIHJlY29uc3RydWN0b3JcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIEJpbmFyeVJlY29uc3RydWN0b3IocGFja2V0KSB7XG4gIHRoaXMucmVjb25QYWNrID0gcGFja2V0O1xuICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBNZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gYmluYXJ5IGRhdGEgcmVjZWl2ZWQgZnJvbSBjb25uZWN0aW9uXG4gKiBhZnRlciBhIEJJTkFSWV9FVkVOVCBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXIgfCBBcnJheUJ1ZmZlcn0gYmluRGF0YSAtIHRoZSByYXcgYmluYXJ5IGRhdGEgcmVjZWl2ZWRcbiAqIEByZXR1cm4ge251bGwgfCBPYmplY3R9IHJldHVybnMgbnVsbCBpZiBtb3JlIGJpbmFyeSBkYXRhIGlzIGV4cGVjdGVkIG9yXG4gKiAgIGEgcmVjb25zdHJ1Y3RlZCBwYWNrZXQgb2JqZWN0IGlmIGFsbCBidWZmZXJzIGhhdmUgYmVlbiByZWNlaXZlZC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkJpbmFyeVJlY29uc3RydWN0b3IucHJvdG90eXBlLnRha2VCaW5hcnlEYXRhID0gZnVuY3Rpb24oYmluRGF0YSkge1xuICB0aGlzLmJ1ZmZlcnMucHVzaChiaW5EYXRhKTtcbiAgaWYgKHRoaXMuYnVmZmVycy5sZW5ndGggPT09IHRoaXMucmVjb25QYWNrLmF0dGFjaG1lbnRzKSB7IC8vIGRvbmUgd2l0aCBidWZmZXIgbGlzdFxuICAgIHZhciBwYWNrZXQgPSBiaW5hcnkucmVjb25zdHJ1Y3RQYWNrZXQodGhpcy5yZWNvblBhY2ssIHRoaXMuYnVmZmVycyk7XG4gICAgdGhpcy5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgcmV0dXJuIHBhY2tldDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogQ2xlYW5zIHVwIGJpbmFyeSBwYWNrZXQgcmVjb25zdHJ1Y3Rpb24gdmFyaWFibGVzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkJpbmFyeVJlY29uc3RydWN0b3IucHJvdG90eXBlLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZWNvblBhY2sgPSBudWxsO1xuICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbn07XG5cbmZ1bmN0aW9uIGVycm9yKG1zZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGV4cG9ydHMuRVJST1IsXG4gICAgZGF0YTogJ3BhcnNlciBlcnJvcjogJyArIG1zZ1xuICB9O1xufVxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmO1xuXG52YXIgd2l0aE5hdGl2ZUJ1ZmZlciA9IHR5cGVvZiBCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIEJ1ZmZlci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJztcbnZhciB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbic7XG5cbnZhciBpc1ZpZXcgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iaikgOiAob2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG9iaiBpcyBhIGJ1ZmZlciBvciBhbiBhcnJheWJ1ZmZlci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0J1ZihvYmopIHtcbiAgcmV0dXJuICh3aXRoTmF0aXZlQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB8fFxuICAgICAgICAgICh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhvYmopKSk7XG59XG4iLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICcjMDAwMENDJywgJyMwMDAwRkYnLCAnIzAwMzNDQycsICcjMDAzM0ZGJywgJyMwMDY2Q0MnLCAnIzAwNjZGRicsICcjMDA5OUNDJyxcbiAgJyMwMDk5RkYnLCAnIzAwQ0MwMCcsICcjMDBDQzMzJywgJyMwMENDNjYnLCAnIzAwQ0M5OScsICcjMDBDQ0NDJywgJyMwMENDRkYnLFxuICAnIzMzMDBDQycsICcjMzMwMEZGJywgJyMzMzMzQ0MnLCAnIzMzMzNGRicsICcjMzM2NkNDJywgJyMzMzY2RkYnLCAnIzMzOTlDQycsXG4gICcjMzM5OUZGJywgJyMzM0NDMDAnLCAnIzMzQ0MzMycsICcjMzNDQzY2JywgJyMzM0NDOTknLCAnIzMzQ0NDQycsICcjMzNDQ0ZGJyxcbiAgJyM2NjAwQ0MnLCAnIzY2MDBGRicsICcjNjYzM0NDJywgJyM2NjMzRkYnLCAnIzY2Q0MwMCcsICcjNjZDQzMzJywgJyM5OTAwQ0MnLFxuICAnIzk5MDBGRicsICcjOTkzM0NDJywgJyM5OTMzRkYnLCAnIzk5Q0MwMCcsICcjOTlDQzMzJywgJyNDQzAwMDAnLCAnI0NDMDAzMycsXG4gICcjQ0MwMDY2JywgJyNDQzAwOTknLCAnI0NDMDBDQycsICcjQ0MwMEZGJywgJyNDQzMzMDAnLCAnI0NDMzMzMycsICcjQ0MzMzY2JyxcbiAgJyNDQzMzOTknLCAnI0NDMzNDQycsICcjQ0MzM0ZGJywgJyNDQzY2MDAnLCAnI0NDNjYzMycsICcjQ0M5OTAwJywgJyNDQzk5MzMnLFxuICAnI0NDQ0MwMCcsICcjQ0NDQzMzJywgJyNGRjAwMDAnLCAnI0ZGMDAzMycsICcjRkYwMDY2JywgJyNGRjAwOTknLCAnI0ZGMDBDQycsXG4gICcjRkYwMEZGJywgJyNGRjMzMDAnLCAnI0ZGMzMzMycsICcjRkYzMzY2JywgJyNGRjMzOTknLCAnI0ZGMzNDQycsICcjRkYzM0ZGJyxcbiAgJyNGRjY2MDAnLCAnI0ZGNjYzMycsICcjRkY5OTAwJywgJyNGRjk5MzMnLCAnI0ZGQ0MwMCcsICcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICovXG5leHBvcnRzLmluc3RhbmNlcyA9IFtdO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICB2YXIgcHJldlRpbWU7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG4gIGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIGV4cG9ydHMuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHZhciBpbmRleCA9IGV4cG9ydHMuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBleHBvcnRzLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBpO1xuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhwb3J0cy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBleHBvcnRzLmluc3RhbmNlc1tpXTtcbiAgICBpbnN0YW5jZS5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRvQXJyYXlcblxuZnVuY3Rpb24gdG9BcnJheShsaXN0LCBpbmRleCkge1xuICAgIHZhciBhcnJheSA9IFtdXG5cbiAgICBpbmRleCA9IGluZGV4IHx8IDBcblxuICAgIGZvciAodmFyIGkgPSBpbmRleCB8fCAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheVtpIC0gaW5kZXhdID0gbGlzdFtpXVxuICAgIH1cblxuICAgIHJldHVybiBhcnJheVxufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8nLnNwbGl0KCcnKVxuICAsIGxlbmd0aCA9IDY0XG4gICwgbWFwID0ge31cbiAgLCBzZWVkID0gMFxuICAsIGkgPSAwXG4gICwgcHJldjtcblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICB2YXIgZW5jb2RlZCA9ICcnO1xuXG4gIGRvIHtcbiAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyBsZW5ndGgpO1xuICB9IHdoaWxlIChudW0gPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICB2YXIgZGVjb2RlZCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbi8qKlxuICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHVuaXF1ZSBpZC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHllYXN0KCkge1xuICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gIHJldHVybiBub3cgKycuJysgZW5jb2RlKHNlZWQrKyk7XG59XG5cbi8vXG4vLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuLy9cbmZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIG1hcFthbHBoYWJldFtpXV0gPSBpO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuLy9cbnllYXN0LmVuY29kZSA9IGVuY29kZTtcbnllYXN0LmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzID0geWVhc3Q7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9