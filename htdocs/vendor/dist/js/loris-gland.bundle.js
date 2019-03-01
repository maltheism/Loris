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
    websocket = _socket2.default.connect('http://35.185.80.170', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9qc3gvYW5hbHl0aWNzL0NsaWVudC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL2pzeC9hbmFseXRpY3MvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL2pzeC9hbmFseXRpY3Mvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9hcnJheWJ1ZmZlci5zbGljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2Jsb2IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1pbmhlcml0L2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnQuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIveG1saHR0cHJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIva2V5cy5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi91dGY4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2hhcy1iaW5hcnkyL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2hhcy1iaW5hcnkyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2hhcy1jb3JzL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvaW5kZXhvZi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3BhcnNlcXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvb24uanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvc29ja2V0LmpzIiwid2VicGFjazovL2xvcmlzLWdsYW5kLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL3VybC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2lzLWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8uL25vZGVfbW9kdWxlcy90by1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb3Jpcy1nbGFuZC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvLi9ub2RlX21vZHVsZXMveWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9yaXMtZ2xhbmQvd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkNsaWVudCIsInN0YXR1cyIsIm9ubGluZSIsImNyZWRlbnRpYWxzIiwidXVpZCIsInRva2VuIiwic29ja2V0IiwicHJvdG90eXBlIiwic2V0dXBTb2NrZXRMaXN0ZW5lcnMiLCJjbGllbnQiLCJvbiIsImRhdGEiLCJhdXRoZW50aWNhdGlvbiIsImNiIiwic3RvcmFnZSIsInNhdmVVdWlkQW5kVG9rZW4iLCJ3ZWJzb2NrZXQiLCJ3aW5kb3ciLCJvcmlnaW4iLCJpbmNsdWRlcyIsImlvIiwiY29ubmVjdCIsInNlY3VyZSIsInBvcnQiLCJ0cmFuc3BvcnRzIiwiY29uc29sZSIsImxvZyIsInNvY2tldElEIiwiY29uZmlnIiwiZW1pdCIsImlkZW50IiwiRXJyb3IiLCJlcnJvciIsIkNvb2tpZXMiLCJyZXF1aXJlIiwiU3RvcmFnZSIsImdldCIsInNldCIsImV4cGlyZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWZ0ZXIiLCJjb3VudCIsImNhbGxiYWNrIiwiZXJyX2NiIiwiYmFpbCIsIm5vb3AiLCJwcm94eSIsImVyciIsInJlc3VsdCIsImFycmF5YnVmZmVyIiwic3RhcnQiLCJlbmQiLCJieXRlcyIsImJ5dGVMZW5ndGgiLCJzbGljZSIsIkFycmF5QnVmZmVyIiwiYWJ2IiwiVWludDhBcnJheSIsImkiLCJpaSIsImJ1ZmZlciIsIkJhY2tvZmYiLCJvcHRzIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiY2hhcnMiLCJsb29rdXAiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiZW5jb2RlIiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiZGVjb2RlIiwiYnVmZmVyTGVuZ3RoIiwicCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwidG9CeXRlQXJyYXkiLCJmcm9tQnl0ZUFycmF5IiwicmV2TG9va3VwIiwiQXJyIiwiQXJyYXkiLCJjb2RlIiwiZ2V0TGVucyIsImI2NCIsInZhbGlkTGVuIiwiaW5kZXhPZiIsInBsYWNlSG9sZGVyc0xlbiIsImxlbnMiLCJfYnl0ZUxlbmd0aCIsInRtcCIsImFyciIsImN1ckJ5dGUiLCJ0cmlwbGV0VG9CYXNlNjQiLCJudW0iLCJlbmNvZGVDaHVuayIsInVpbnQ4Iiwib3V0cHV0IiwicHVzaCIsImpvaW4iLCJleHRyYUJ5dGVzIiwicGFydHMiLCJtYXhDaHVua0xlbmd0aCIsImxlbjIiLCJCbG9iQnVpbGRlciIsIldlYktpdEJsb2JCdWlsZGVyIiwiTVNCbG9iQnVpbGRlciIsIk1vekJsb2JCdWlsZGVyIiwiYmxvYlN1cHBvcnRlZCIsImEiLCJCbG9iIiwic2l6ZSIsImUiLCJibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXciLCJiIiwiYmxvYkJ1aWxkZXJTdXBwb3J0ZWQiLCJhcHBlbmQiLCJnZXRCbG9iIiwibWFwQXJyYXlCdWZmZXJWaWV3cyIsImFyeSIsIm1hcCIsImNodW5rIiwiYnVmIiwiY29weSIsImJ5dGVPZmZzZXQiLCJCbG9iQnVpbGRlckNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImJiIiwiZm9yRWFjaCIsInBhcnQiLCJ0eXBlIiwiQmxvYkNvbnN0cnVjdG9yIiwidW5kZWZpbmVkIiwiaWVlZTc1NCIsImlzQXJyYXkiLCJCdWZmZXIiLCJTbG93QnVmZmVyIiwiSU5TUEVDVF9NQVhfQllURVMiLCJUWVBFRF9BUlJBWV9TVVBQT1JUIiwiZ2xvYmFsIiwidHlwZWRBcnJheVN1cHBvcnQiLCJrTWF4TGVuZ3RoIiwiX19wcm90b19fIiwiZm9vIiwic3ViYXJyYXkiLCJjcmVhdGVCdWZmZXIiLCJ0aGF0IiwiUmFuZ2VFcnJvciIsImFyZyIsImVuY29kaW5nT3JPZmZzZXQiLCJhbGxvY1Vuc2FmZSIsImZyb20iLCJwb29sU2l6ZSIsIl9hdWdtZW50IiwidmFsdWUiLCJUeXBlRXJyb3IiLCJmcm9tQXJyYXlCdWZmZXIiLCJmcm9tU3RyaW5nIiwiZnJvbU9iamVjdCIsIlN5bWJvbCIsInNwZWNpZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImFzc2VydFNpemUiLCJhbGxvYyIsImZpbGwiLCJlbmNvZGluZyIsImNoZWNrZWQiLCJhbGxvY1Vuc2FmZVNsb3ciLCJzdHJpbmciLCJpc0VuY29kaW5nIiwiYWN0dWFsIiwid3JpdGUiLCJmcm9tQXJyYXlMaWtlIiwiYXJyYXkiLCJvYmoiLCJpc0J1ZmZlciIsImlzbmFuIiwidG9TdHJpbmciLCJfaXNCdWZmZXIiLCJjb21wYXJlIiwieCIsInkiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImNvbmNhdCIsImxpc3QiLCJwb3MiLCJpc1ZpZXciLCJsb3dlcmVkQ2FzZSIsInV0ZjhUb0J5dGVzIiwiYmFzZTY0VG9CeXRlcyIsInNsb3dUb1N0cmluZyIsImhleFNsaWNlIiwidXRmOFNsaWNlIiwiYXNjaWlTbGljZSIsImxhdGluMVNsaWNlIiwiYmFzZTY0U2xpY2UiLCJ1dGYxNmxlU2xpY2UiLCJzd2FwIiwibiIsIm0iLCJzd2FwMTYiLCJzd2FwMzIiLCJzd2FwNjQiLCJhcmd1bWVudHMiLCJhcHBseSIsImVxdWFscyIsImluc3BlY3QiLCJzdHIiLCJtYXRjaCIsInRhcmdldCIsInRoaXNTdGFydCIsInRoaXNFbmQiLCJ0aGlzQ29weSIsInRhcmdldENvcHkiLCJiaWRpcmVjdGlvbmFsSW5kZXhPZiIsInZhbCIsImRpciIsImlzTmFOIiwiYXJyYXlJbmRleE9mIiwiY2FsbCIsImxhc3RJbmRleE9mIiwiaW5kZXhTaXplIiwiYXJyTGVuZ3RoIiwidmFsTGVuZ3RoIiwicmVhZCIsInJlYWRVSW50MTZCRSIsImZvdW5kSW5kZXgiLCJmb3VuZCIsImoiLCJoZXhXcml0ZSIsIm9mZnNldCIsIk51bWJlciIsInJlbWFpbmluZyIsInN0ckxlbiIsInBhcnNlZCIsInBhcnNlSW50Iiwic3Vic3RyIiwidXRmOFdyaXRlIiwiYmxpdEJ1ZmZlciIsImFzY2lpV3JpdGUiLCJhc2NpaVRvQnl0ZXMiLCJsYXRpbjFXcml0ZSIsImJhc2U2NFdyaXRlIiwidWNzMldyaXRlIiwidXRmMTZsZVRvQnl0ZXMiLCJpc0Zpbml0ZSIsInRvSlNPTiIsIl9hcnIiLCJyZXMiLCJmaXJzdEJ5dGUiLCJjb2RlUG9pbnQiLCJieXRlc1BlclNlcXVlbmNlIiwic2Vjb25kQnl0ZSIsInRoaXJkQnl0ZSIsImZvdXJ0aEJ5dGUiLCJ0ZW1wQ29kZVBvaW50IiwiZGVjb2RlQ29kZVBvaW50c0FycmF5IiwiTUFYX0FSR1VNRU5UU19MRU5HVEgiLCJjb2RlUG9pbnRzIiwiZnJvbUNoYXJDb2RlIiwicmV0Iiwib3V0IiwidG9IZXgiLCJuZXdCdWYiLCJzbGljZUxlbiIsImNoZWNrT2Zmc2V0IiwiZXh0IiwicmVhZFVJbnRMRSIsIm5vQXNzZXJ0IiwibXVsIiwicmVhZFVJbnRCRSIsInJlYWRVSW50OCIsInJlYWRVSW50MTZMRSIsInJlYWRVSW50MzJMRSIsInJlYWRVSW50MzJCRSIsInJlYWRJbnRMRSIsInJlYWRJbnRCRSIsInJlYWRJbnQ4IiwicmVhZEludDE2TEUiLCJyZWFkSW50MTZCRSIsInJlYWRJbnQzMkxFIiwicmVhZEludDMyQkUiLCJyZWFkRmxvYXRMRSIsInJlYWRGbG9hdEJFIiwicmVhZERvdWJsZUxFIiwicmVhZERvdWJsZUJFIiwiY2hlY2tJbnQiLCJ3cml0ZVVJbnRMRSIsIm1heEJ5dGVzIiwid3JpdGVVSW50QkUiLCJ3cml0ZVVJbnQ4Iiwib2JqZWN0V3JpdGVVSW50MTYiLCJsaXR0bGVFbmRpYW4iLCJ3cml0ZVVJbnQxNkxFIiwid3JpdGVVSW50MTZCRSIsIm9iamVjdFdyaXRlVUludDMyIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVUludDMyQkUiLCJ3cml0ZUludExFIiwibGltaXQiLCJzdWIiLCJ3cml0ZUludEJFIiwid3JpdGVJbnQ4Iiwid3JpdGVJbnQxNkxFIiwid3JpdGVJbnQxNkJFIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwiY2hlY2tJRUVFNzU0Iiwid3JpdGVGbG9hdCIsIndyaXRlRmxvYXRMRSIsIndyaXRlRmxvYXRCRSIsIndyaXRlRG91YmxlIiwid3JpdGVEb3VibGVMRSIsIndyaXRlRG91YmxlQkUiLCJ0YXJnZXRTdGFydCIsIklOVkFMSURfQkFTRTY0X1JFIiwiYmFzZTY0Y2xlYW4iLCJzdHJpbmd0cmltIiwicmVwbGFjZSIsInRyaW0iLCJ1bml0cyIsIkluZmluaXR5IiwibGVhZFN1cnJvZ2F0ZSIsImJ5dGVBcnJheSIsImMiLCJoaSIsImxvIiwic3JjIiwiZHN0IiwiZm4iLCJhcmdzIiwiRW1pdHRlciIsIm1peGluIiwia2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX2NhbGxiYWNrcyIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJzcGxpY2UiLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsInBhcnNlciIsImRlYnVnIiwiaW5kZXgiLCJwYXJzZXVyaSIsInBhcnNlcXMiLCJTb2NrZXQiLCJ1cmkiLCJob3N0bmFtZSIsImhvc3QiLCJwcm90b2NvbCIsInF1ZXJ5IiwibG9jYXRpb24iLCJhZ2VudCIsInVwZ3JhZGUiLCJwYXRoIiwiZm9yY2VKU09OUCIsImpzb25wIiwiZm9yY2VCYXNlNjQiLCJlbmFibGVzWERSIiwidGltZXN0YW1wUGFyYW0iLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRyYW5zcG9ydE9wdGlvbnMiLCJyZWFkeVN0YXRlIiwid3JpdGVCdWZmZXIiLCJwcmV2QnVmZmVyTGVuIiwicG9saWN5UG9ydCIsInJlbWVtYmVyVXBncmFkZSIsImJpbmFyeVR5cGUiLCJvbmx5QmluYXJ5VXBncmFkZXMiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsInRocmVzaG9sZCIsInBmeCIsInBhc3NwaHJhc2UiLCJjZXJ0IiwiY2EiLCJjaXBoZXJzIiwicmVqZWN0VW5hdXRob3JpemVkIiwiZm9yY2VOb2RlIiwiaXNSZWFjdE5hdGl2ZSIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJzZWxmIiwiZXh0cmFIZWFkZXJzIiwia2V5cyIsImxvY2FsQWRkcmVzcyIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdJbnRlcnZhbFRpbWVyIiwicGluZ1RpbWVvdXRUaW1lciIsIm9wZW4iLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJUcmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJuYW1lIiwiY2xvbmUiLCJFSU8iLCJ0cmFuc3BvcnQiLCJzaWQiLCJyZXF1ZXN0VGltZW91dCIsInByb3RvY29scyIsIm8iLCJoYXNPd25Qcm9wZXJ0eSIsInNldFRpbWVvdXQiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJwYWNrZXQiLCJvblBhY2tldCIsIm9uRXJyb3IiLCJvbkNsb3NlIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJ1cGdyYWRlTG9zZXNCaW5hcnkiLCJzdXBwb3J0c0JpbmFyeSIsInNlbmQiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImNsZWFudXAiLCJmbHVzaCIsImZyZWV6ZVRyYW5zcG9ydCIsImNsb3NlIiwib25lcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbmNsb3NlIiwib251cGdyYWRlIiwidG8iLCJvbk9wZW4iLCJsIiwib25IYW5kc2hha2UiLCJKU09OIiwicGFyc2UiLCJzZXRQaW5nIiwiZmlsdGVyVXBncmFkZXMiLCJvbkhlYXJ0YmVhdCIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJwaW5nIiwic2VuZFBhY2tldCIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJ3YWl0Rm9yVXBncmFkZSIsImNsZWFudXBBbmRDbG9zZSIsInJlYXNvbiIsImRlc2MiLCJmaWx0ZXJlZFVwZ3JhZGVzIiwiZGVzY3JpcHRpb24iLCJkb09wZW4iLCJkb0Nsb3NlIiwicGFja2V0cyIsIm9uRGF0YSIsImRlY29kZVBhY2tldCIsIlhNTEh0dHBSZXF1ZXN0IiwiWEhSIiwiSlNPTlAiLCJwb2xsaW5nIiwieGhyIiwieGQiLCJ4cyIsImlzU1NMIiwieGRvbWFpbiIsInhzY2hlbWUiLCJQb2xsaW5nIiwiaW5oZXJpdCIsIkpTT05QUG9sbGluZyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiZW1wdHkiLCJnbG9iIiwiX19fZWlvIiwic2NyaXB0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZm9ybSIsImlmcmFtZSIsImRvUG9sbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwiaW5zZXJ0QXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluc2VydEJlZm9yZSIsImhlYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpc1VBZ2Vja28iLCJ0ZXN0IiwidXNlckFnZW50IiwiZG9Xcml0ZSIsImFyZWEiLCJpZnJhbWVJZCIsImNsYXNzTmFtZSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWV0aG9kIiwic2V0QXR0cmlidXRlIiwiYWN0aW9uIiwiY29tcGxldGUiLCJpbml0SWZyYW1lIiwiaHRtbCIsInN1Ym1pdCIsImF0dGFjaEV2ZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwiUmVxdWVzdCIsInJlcXVlc3QiLCJpc0JpbmFyeSIsInJlcSIsInNlbmRYaHIiLCJwb2xsWGhyIiwiY3JlYXRlIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsImhhc1hEUiIsIm9uTG9hZCIsInJlc3BvbnNlVGV4dCIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJyZXNwb25zZVR5cGUiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJvblN1Y2Nlc3MiLCJmcm9tRXJyb3IiLCJhYm9ydCIsInJlc3BvbnNlIiwiWERvbWFpblJlcXVlc3QiLCJ1bmxvYWRIYW5kbGVyIiwidGVybWluYXRpb25FdmVudCIsInllYXN0IiwiaGFzWEhSMiIsInBvbGwiLCJvblBhdXNlIiwidG90YWwiLCJkZWNvZGVQYXlsb2FkIiwiY2FsbGJhY2tmbiIsImVuY29kZVBheWxvYWQiLCJzY2hlbWEiLCJpcHY2IiwiQnJvd3NlcldlYlNvY2tldCIsIk5vZGVXZWJTb2NrZXQiLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJXZWJTb2NrZXRJbXBsIiwiV1MiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJjaGVjayIsImhlYWRlcnMiLCJ3cyIsInN1cHBvcnRzIiwiYmluYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJvbm1lc3NhZ2UiLCJldiIsImVuY29kZVBhY2tldCIsImRvbmUiLCJoYXNDT1JTIiwiZm9ybWF0QXJncyIsInNhdmUiLCJsb2FkIiwidXNlQ29sb3JzIiwiY2hyb21lIiwibG9jYWwiLCJsb2NhbHN0b3JhZ2UiLCJjb2xvcnMiLCJwcm9jZXNzIiwiZG9jdW1lbnRFbGVtZW50IiwiV2Via2l0QXBwZWFyYW5jZSIsImZpcmVidWciLCJleGNlcHRpb24iLCJ0YWJsZSIsIlJlZ0V4cCIsIiQxIiwiZm9ybWF0dGVycyIsInYiLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwibmFtZXNwYWNlIiwiaHVtYW5pemUiLCJkaWZmIiwiY29sb3IiLCJsYXN0QyIsIkZ1bmN0aW9uIiwibmFtZXNwYWNlcyIsInJlbW92ZUl0ZW0iLCJyIiwiZW52IiwiREVCVUciLCJlbmFibGUiLCJsb2NhbFN0b3JhZ2UiLCJjcmVhdGVEZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGVkIiwiaW5zdGFuY2VzIiwibmFtZXMiLCJza2lwcyIsInNlbGVjdENvbG9yIiwiaGFzaCIsImFicyIsInByZXZUaW1lIiwiY3VyciIsIkRhdGUiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImxvZ0ZuIiwiYmluZCIsImRlc3Ryb3kiLCJpbml0Iiwic3BsaXQiLCJpbnN0YW5jZSIsInN0YWNrIiwiaGFzQmluYXJ5Iiwic2xpY2VCdWZmZXIiLCJ1dGY4IiwiYmFzZTY0ZW5jb2RlciIsImlzQW5kcm9pZCIsImlzUGhhbnRvbUpTIiwiZG9udFNlbmRCbG9icyIsInBvbmciLCJwYWNrZXRzbGlzdCIsInV0ZjhlbmNvZGUiLCJlbmNvZGVBcnJheUJ1ZmZlciIsImVuY29kZUJsb2IiLCJlbmNvZGVCYXNlNjRPYmplY3QiLCJlbmNvZGVkIiwic3RyaWN0IiwiZW5jb2RlQmFzZTY0UGFja2V0IiwiY29udGVudEFycmF5IiwicmVzdWx0QnVmZmVyIiwiZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIiLCJmciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImJsb2IiLCJyZWFkQXNEYXRhVVJMIiwiYjY0ZGF0YSIsInR5cGVkIiwiYmFzaWMiLCJidG9hIiwidXRmOGRlY29kZSIsImNoYXJBdCIsImRlY29kZUJhc2U2NFBhY2tldCIsInRyeURlY29kZSIsImFzQXJyYXkiLCJyZXN0IiwiZW5jb2RlUGF5bG9hZEFzQmxvYiIsImVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyIiwic2V0TGVuZ3RoSGVhZGVyIiwiZW5jb2RlT25lIiwiZG9uZUNhbGxiYWNrIiwicmVzdWx0cyIsImVhY2giLCJuZXh0IiwiZWFjaFdpdGhJbmRleCIsImVsIiwiZGVjb2RlUGF5bG9hZEFzQmluYXJ5IiwiY2hyIiwiZW5jb2RlZFBhY2tldHMiLCJ0b3RhbExlbmd0aCIsInJlZHVjZSIsImFjYyIsInJlc3VsdEFycmF5IiwiYnVmZmVySW5kZXgiLCJpc1N0cmluZyIsImFiIiwidmlldyIsImxlblN0ciIsImJpbmFyeUlkZW50aWZpZXIiLCJsZW5ndGhBcnkiLCJidWZmZXJUYWlsIiwiYnVmZmVycyIsInRhaWxBcnJheSIsIm1zZ0xlbmd0aCIsImhhcyIsInN0cmluZ0Zyb21DaGFyQ29kZSIsInVjczJkZWNvZGUiLCJjb3VudGVyIiwiZXh0cmEiLCJ1Y3MyZW5jb2RlIiwiY2hlY2tTY2FsYXJWYWx1ZSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlQnl0ZSIsImVuY29kZUNvZGVQb2ludCIsInN5bWJvbCIsImJ5dGVTdHJpbmciLCJyZWFkQ29udGludWF0aW9uQnl0ZSIsImJ5dGVJbmRleCIsImJ5dGVDb3VudCIsImNvbnRpbnVhdGlvbkJ5dGUiLCJkZWNvZGVTeW1ib2wiLCJieXRlMSIsImJ5dGUyIiwiYnl0ZTMiLCJieXRlNCIsInZlcnNpb24iLCJ3aXRoTmF0aXZlQmxvYiIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsImlzTEUiLCJtTGVuIiwibkJ5dGVzIiwiZUxlbiIsImVNYXgiLCJlQmlhcyIsIm5CaXRzIiwiZCIsInMiLCJOYU4iLCJydCIsIkxOMiIsImZhY3RvcnkiLCJyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIiLCJkZWZpbmUiLCJPbGRDb29raWVzIiwiYXBpIiwibm9Db25mbGljdCIsImV4dGVuZCIsImF0dHJpYnV0ZXMiLCJjb252ZXJ0ZXIiLCJkZWZhdWx0cyIsInNldE1pbGxpc2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInRvVVRDU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwic3RyaW5naWZpZWRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlTmFtZSIsImNvb2tpZSIsImNvb2tpZXMiLCJyZGVjb2RlIiwianNvbiIsImdldEpTT04iLCJyZW1vdmUiLCJ3aXRoQ29udmVydGVyIiwiaCIsImxvbmciLCJmbXRMb25nIiwiZm10U2hvcnQiLCJleGVjIiwicGFyc2VGbG9hdCIsInJvdW5kIiwicGx1cmFsIiwiY2VpbCIsInFzIiwicXJ5IiwicGFpcnMiLCJwYWlyIiwicmUiLCJzb3VyY2UiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInJ1biIsIm5leHRUaWNrIiwiSXRlbSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9ucyIsImFkZExpc3RlbmVyIiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsInVtYXNrIiwidXJsIiwiTWFuYWdlciIsImNhY2hlIiwibWFuYWdlcnMiLCJzYW1lTmFtZXNwYWNlIiwibnNwcyIsIm5ld0Nvbm5lY3Rpb24iLCJmb3JjZU5ldyIsIm11bHRpcGxleCIsImVpbyIsInN1YnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsInJlY29ubmVjdGlvbkRlbGF5IiwicmVjb25uZWN0aW9uRGVsYXlNYXgiLCJyYW5kb21pemF0aW9uRmFjdG9yIiwiYmFja29mZiIsImNvbm5lY3RpbmciLCJsYXN0UGluZyIsInBhY2tldEJ1ZmZlciIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiYXV0b0Nvbm5lY3QiLCJlbWl0QWxsIiwibnNwIiwidXBkYXRlU29ja2V0SWRzIiwiZ2VuZXJhdGVJZCIsImVuZ2luZSIsIl9yZWNvbm5lY3Rpb24iLCJfcmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJyZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJza2lwUmVjb25uZWN0Iiwib3BlblN1YiIsImVycm9yU3ViIiwidGltZXIiLCJvbnBpbmciLCJvbnBvbmciLCJvbmRhdGEiLCJhZGQiLCJvbmRlY29kZWQiLCJvbkNvbm5lY3RpbmciLCJwcm9jZXNzUGFja2V0UXVldWUiLCJwYWNrIiwic3Vic0xlbmd0aCIsImRpc2Nvbm5lY3QiLCJkZWxheSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsInRvQXJyYXkiLCJoYXNCaW4iLCJldmVudHMiLCJjb25uZWN0X2Vycm9yIiwiY29ubmVjdF90aW1lb3V0IiwicmVjb25uZWN0X2F0dGVtcHQiLCJyZWNvbm5lY3RfZmFpbGVkIiwicmVjb25uZWN0X2Vycm9yIiwiaWRzIiwiYWNrcyIsInJlY2VpdmVCdWZmZXIiLCJzZW5kQnVmZmVyIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdGVkIiwiZmxhZ3MiLCJzdWJFdmVudHMiLCJCSU5BUllfRVZFTlQiLCJFVkVOVCIsInBvcCIsIkNPTk5FQ1QiLCJvbnBhY2tldCIsInJvb3ROYW1lc3BhY2VFcnJvciIsIkVSUk9SIiwib25jb25uZWN0Iiwib25ldmVudCIsIkFDSyIsIm9uYWNrIiwiQklOQVJZX0FDSyIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJhY2siLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwibG9jIiwiaHJlZiIsImlzQnVmIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrZXREYXRhIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm5ld0RhdGEiLCJyZWNvbnN0cnVjdFBhY2tldCIsIl9yZWNvbnN0cnVjdFBhY2tldCIsInJlbW92ZUJsb2JzIiwiX3JlbW92ZUJsb2JzIiwiY3VyS2V5IiwiY29udGFpbmluZ09iamVjdCIsInBlbmRpbmdCbG9icyIsImZpbGVSZWFkZXIiLCJibG9ibGVzc0RhdGEiLCJ0eXBlcyIsIkVSUk9SX1BBQ0tFVCIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJwYXlsb2FkIiwidHJ5U3RyaW5naWZ5Iiwid3JpdGVFbmNvZGluZyIsImRlY29uc3RydWN0aW9uIiwicmVjb25zdHJ1Y3RvciIsImRlY29kZVN0cmluZyIsIkJpbmFyeVJlY29uc3RydWN0b3IiLCJyZWNvblBhY2siLCJ0YWtlQmluYXJ5RGF0YSIsInRyeVBhcnNlIiwiaXNQYXlsb2FkVmFsaWQiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwiYmluRGF0YSIsIndpdGhOYXRpdmVCdWZmZXIiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJnIiwiZXZhbCIsImFscGhhYmV0Iiwic2VlZCIsImRlY29kZWQiLCJub3ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFD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QWVBLE1BQWY7QUFDQThkLE1BQU0xZCxNQUFOLEdBQWVBLE1BQWY7QUFDQWxELE9BQU9DLE9BQVAsR0FBaUIyZ0IsS0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLGUiLCJmaWxlIjoibG9yaXMtZ2xhbmQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibG9yaXMtZ2xhbmRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibG9yaXMtZ2xhbmRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBFeHBvcnRlZCB0byBodGRvY3MvanMvY2xpZW50LmpzXG4gKi9cblxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHtzdG9yYWdlfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG4vKipcbiAqIENsaWVudCAod2Vic29ja2V0IGJyaWRnZSlcbiAqL1xuY2xhc3MgQ2xpZW50IHtcbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yIGluaXRpYWxpemU6XG4gICAqIChzdGF0dXMsIGNyZWRlbnRpYWxzLCBzb2NrZXQpLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICBvbmxpbmU6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICAgIHV1aWQ6ICcnLFxuICAgICAgdG9rZW46ICcnLFxuICAgIH07XG4gICAgdGhpcy5zb2NrZXQgPSBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQWRkaXRpb25hbCBzb2NrZXQgbGlzdGVuZXJzLlxuICovXG5DbGllbnQucHJvdG90eXBlLnNldHVwU29ja2V0TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0dXBTb2NrZXRMaXN0ZW5lcnMoKSB7XG4gIGNsaWVudC5zb2NrZXQub24oJ2FuYWx5dGljcycsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyB0b2RvXG4gIH0pO1xufTtcblxuLyoqXG4gKiBBdXRoZW50aWNhdGlvbiB3aXRoIHNvY2tldC5pbyBzZXJ2ZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYlxuICovXG5DbGllbnQucHJvdG90eXBlLmF1dGhlbnRpY2F0aW9uID0gZnVuY3Rpb24gYXV0aGVudGljYXRpb24oY2IpIHtcbiAgc3RvcmFnZS5zYXZlVXVpZEFuZFRva2VuKCk7XG4gIC8vIENyZWF0ZSB3ZWJzb2NrZXQgZm9yIGNvbm5lY3RpbmcuXG4gIGxldCB3ZWJzb2NrZXQgPSBudWxsO1xuICBpZiAod2luZG93Lm9yaWdpbi5pbmNsdWRlcygnaHR0cHM6Ly8nKSkge1xuICAgIC8vIFByb2R1Y3Rpb25cbiAgICB3ZWJzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwczovLzM1LjE4NS44MC4xNzAnLCB7XG4gICAgICBzZWN1cmU6IHRydWUsXG4gICAgICBwb3J0OiA4MCxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBEZXZlbG9wbWVudFxuICAgIHdlYnNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly8zNS4xODUuODAuMTcwJywge1xuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnLCAncG9sbGluZyddLFxuICAgIH0pO1xuICB9XG4gIHdlYnNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xuICAgIHdlYnNvY2tldC5vbignY2xpZW50X2lkZW50aXR5JywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0aW5nIHRvIHNlcnZlci4uLiBcXG5bSU5GT10gU29ja2V0IGlkOiAnICtcbiAgICAgICAgZGF0YS5zb2NrZXRJRCArICdcXG5bSU5GT10gQ2xpZW50IHV1aWQ6ICcgKyBzdG9yYWdlLnNvY2tldC5jb25maWcudXVpZCk7XG4gICAgICBpZiAoc3RvcmFnZS5zb2NrZXQuY29uZmlnLnV1aWQgJiYgc3RvcmFnZS5zb2NrZXQuY29uZmlnLnRva2VuKSB7IC8vIHRva2VuIGV4aXN0cywgZW1pdCBjbGllbnRfaWRlbnRpdHlcbiAgICAgICAgd2Vic29ja2V0LmVtaXQoJ2NsaWVudF9pZGVudGl0eScsIHtcbiAgICAgICAgICBzb2NrZXRJRDogZGF0YS5zb2NrZXRJRCxcbiAgICAgICAgICB1dWlkOiBzdG9yYWdlLnNvY2tldC5jb25maWcudXVpZCxcbiAgICAgICAgICB0b2tlbjogc3RvcmFnZS5zb2NrZXQuY29uZmlnLnRva2VuLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7IC8vIG5vIHRva2VuLCBlbWl0IGNsaWVudF9yZWdpc3RlclxuICAgICAgICB3ZWJzb2NrZXQuZW1pdCgnY2xpZW50X3JlZ2lzdGVyJywgc3RvcmFnZS5zb2NrZXQuY29uZmlnLFxuICAgICAgICAgIGZ1bmN0aW9uKGlkZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW2NsaWVudF9yZWdpc3Rlcl0gOlxcbicpO1xuICAgICAgICAgICAgc3RvcmFnZS5zb2NrZXQuY29uZmlnLnV1aWQgIT09IGlkZW50LnV1aWQgP1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAnW0lORk9dIHV1aWQ6ICcgKyBpZGVudC51dWlkICsgJ1xcbltJTkZPXSB0b2tlbjogJyArIGlkZW50LnRva2VuXG4gICAgICAgICAgICAgICkgOiBjb25zb2xlLmxvZygnW0lORk9dIHRva2VuOiAnICsgaWRlbnQudG9rZW4pO1xuICAgICAgICAgICAgc3RvcmFnZS5zb2NrZXQuY29uZmlnID0gaWRlbnQ7XG4gICAgICAgICAgICBzdG9yYWdlLnNhdmVVdWlkQW5kVG9rZW4oKTtcbiAgICAgICAgICAgIHdlYnNvY2tldC5lbWl0KCdjbGllbnRfaWRlbnRpdHknLCB7XG4gICAgICAgICAgICAgIHNvY2tldElEOiBkYXRhLnNvY2tldElELFxuICAgICAgICAgICAgICB1dWlkOiBzdG9yYWdlLnNvY2tldC5jb25maWcudXVpZCxcbiAgICAgICAgICAgICAgdG9rZW46IHN0b3JhZ2Uuc29ja2V0LmNvbmZpZy50b2tlbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdlYnNvY2tldC5vbignY2xpZW50X3JlYWR5JywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ1tjbGllbnRfcmVhZHldXFxuJyk7XG4gICAgICByZXR1cm4gY2IobnVsbCwgd2Vic29ja2V0KTtcbiAgICB9KTtcblxuICAgIHdlYnNvY2tldC5vbignY2xpZW50X2Vycm9yJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ1tjbGllbnRfZXJyb3JdXFxuJyk7XG4gICAgICByZXR1cm4gY2IobmV3IEVycm9yKCdBdXRoZW50aWNhdGlvbiBFcnJvcicpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIGNsaWVudCBhbmQgcHJvY2VlZCB0byBhdXRoZW50aWNhdGUuXG4gKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoKTtcbmNsaWVudC5hdXRoZW50aWNhdGlvbihmdW5jdGlvbihlcnJvciwgd2Vic29ja2V0KSB7XG4gIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XG4gIGNsaWVudC5zb2NrZXQgPSB3ZWJzb2NrZXQ7XG4gIGNsaWVudC5jcmVkZW50aWFscyA9IHN0b3JhZ2Uuc29ja2V0LmNvbmZpZztcbiAgY2xpZW50LnNldHVwU29ja2V0TGlzdGVuZXJzKCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNvbnN0IENvb2tpZXMgPSByZXF1aXJlKCdqcy1jb29raWUnKTtcblxuLyoqXG4gKiBTdG9yYWdlIGZvciBjbGllbnQuanNcbiAqL1xuY2xhc3MgU3RvcmFnZSB7XG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RvciBpbml0aWFsaXplOlxuICAgKiAoIGNvbmZpZzoge3V1aWQsIHRva2VufSApLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb2NrZXQgPSB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdXVpZDogQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXV1aWQnKSA/IENvb2tpZXMuZ2V0KCdsb3Jpcy1nbGFuZC11dWlkJykgOiAnJyxcbiAgICAgICAgdG9rZW46IENvb2tpZXMuZ2V0KCdsb3Jpcy1nbGFuZC10b2tlbicpID8gQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXRva2VuJykgOiAnJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5cbi8qKlxuICogU2F2ZSBVdWlkIGFuZCBUb2tlbiB0byBzdG9yYWdlLlxuICovXG5TdG9yYWdlLnByb3RvdHlwZS5zYXZlVXVpZEFuZFRva2VuID0gZnVuY3Rpb24gc2F2ZVV1aWRBbmRUb2tlbigpIHtcbiAgQ29va2llcy5zZXQoJ2xvcmlzLWdsYW5kLXV1aWQnLCBzdG9yYWdlLnNvY2tldC5jb25maWcudXVpZCwge1xuICAgIHNlY3VyZTogd2luZG93Lm9yaWdpbi5pbmNsdWRlcygnaHR0cHM6Ly8nKSxcbiAgICBleHBpcmVzOiA3LFxuICB9KTsgLy8gZXhwaXJlcyBpbiA3IGRheXNcbiAgQ29va2llcy5zZXQoJ2xvcmlzLWdsYW5kLXRva2VuJywgc3RvcmFnZS5zb2NrZXQuY29uZmlnLnRva2VuLCB7XG4gICAgc2VjdXJlOiB3aW5kb3cub3JpZ2luLmluY2x1ZGVzKCdodHRwczovLycpLFxuICAgIGV4cGlyZXM6IDcsXG4gIH0pOyAvLyBleHBpcmVzIGluIDcgZGF5c1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNvbnN0IENvb2tpZXMgPSByZXF1aXJlKCdqcy1jb29raWUnKTtcblxuLyoqXG4gKiBTdG9yYWdlIGZvciBjbGllbnQuanNcbiAqL1xuY2xhc3MgU3RvcmFnZSB7XG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RvciBpbml0aWFsaXplOlxuICAgKiAoIGNvbmZpZzoge3V1aWQsIHRva2VufSApLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb2NrZXQgPSB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdXVpZDogQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXV1aWQnKSA/IENvb2tpZXMuZ2V0KCdsb3Jpcy1nbGFuZC11dWlkJykgOiAnJyxcbiAgICAgICAgdG9rZW46IENvb2tpZXMuZ2V0KCdsb3Jpcy1nbGFuZC10b2tlbicpID8gQ29va2llcy5nZXQoJ2xvcmlzLWdsYW5kLXRva2VuJykgOiAnJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5cbi8qKlxuICogU2F2ZSBVdWlkIGFuZCBUb2tlbiB0byBzdG9yYWdlLlxuICovXG5TdG9yYWdlLnByb3RvdHlwZS5zYXZlVXVpZEFuZFRva2VuID0gZnVuY3Rpb24gc2F2ZVV1aWRBbmRUb2tlbigpIHtcbiAgQ29va2llcy5zZXQoJ2xvcmlzLWdsYW5kLXV1aWQnLCBzdG9yYWdlLnNvY2tldC5jb25maWcudXVpZCwge1xuICAgIHNlY3VyZTogd2luZG93Lm9yaWdpbi5pbmNsdWRlcygnaHR0cHM6Ly8nKSxcbiAgICBleHBpcmVzOiA3LFxuICB9KTsgLy8gZXhwaXJlcyBpbiA3IGRheXNcbiAgQ29va2llcy5zZXQoJ2xvcmlzLWdsYW5kLXRva2VuJywgc3RvcmFnZS5zb2NrZXQuY29uZmlnLnRva2VuLCB7XG4gICAgc2VjdXJlOiB3aW5kb3cub3JpZ2luLmluY2x1ZGVzKCdodHRwczovLycpLFxuICAgIGV4cGlyZXM6IDcsXG4gIH0pOyAvLyBleHBpcmVzIGluIDcgZGF5c1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYWZ0ZXJcblxuZnVuY3Rpb24gYWZ0ZXIoY291bnQsIGNhbGxiYWNrLCBlcnJfY2IpIHtcbiAgICB2YXIgYmFpbCA9IGZhbHNlXG4gICAgZXJyX2NiID0gZXJyX2NiIHx8IG5vb3BcbiAgICBwcm94eS5jb3VudCA9IGNvdW50XG5cbiAgICByZXR1cm4gKGNvdW50ID09PSAwKSA/IGNhbGxiYWNrKCkgOiBwcm94eVxuXG4gICAgZnVuY3Rpb24gcHJveHkoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgaWYgKHByb3h5LmNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYWZ0ZXIgY2FsbGVkIHRvbyBtYW55IHRpbWVzJylcbiAgICAgICAgfVxuICAgICAgICAtLXByb3h5LmNvdW50XG5cbiAgICAgICAgLy8gYWZ0ZXIgZmlyc3QgZXJyb3IsIHJlc3QgYXJlIHBhc3NlZCB0byBlcnJfY2JcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgYmFpbCA9IHRydWVcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycilcbiAgICAgICAgICAgIC8vIGZ1dHVyZSBlcnJvciBjYWxsYmFja3Mgd2lsbCBnbyB0byBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGVycl9jYlxuICAgICAgICB9IGVsc2UgaWYgKHByb3h5LmNvdW50ID09PSAwICYmICFiYWlsKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuIiwiLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3Igc2xpY2luZyBhbiBhcnJheWJ1ZmZlciBldmVuIHdoZW5cbiAqIEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZSBpcyBub3Qgc3VwcG9ydGVkXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGFycmF5YnVmZmVyLmJ5dGVMZW5ndGg7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgZW5kID0gZW5kIHx8IGJ5dGVzO1xuXG4gIGlmIChhcnJheWJ1ZmZlci5zbGljZSkgeyByZXR1cm4gYXJyYXlidWZmZXIuc2xpY2Uoc3RhcnQsIGVuZCk7IH1cblxuICBpZiAoc3RhcnQgPCAwKSB7IHN0YXJ0ICs9IGJ5dGVzOyB9XG4gIGlmIChlbmQgPCAwKSB7IGVuZCArPSBieXRlczsgfVxuICBpZiAoZW5kID4gYnl0ZXMpIHsgZW5kID0gYnl0ZXM7IH1cblxuICBpZiAoc3RhcnQgPj0gYnl0ZXMgfHwgc3RhcnQgPj0gZW5kIHx8IGJ5dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgfVxuXG4gIHZhciBhYnYgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG4gIHZhciByZXN1bHQgPSBuZXcgVWludDhBcnJheShlbmQgLSBzdGFydCk7XG4gIGZvciAodmFyIGkgPSBzdGFydCwgaWkgPSAwOyBpIDwgZW5kOyBpKyssIGlpKyspIHtcbiAgICByZXN1bHRbaWldID0gYWJ2W2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQuYnVmZmVyO1xufTtcbiIsIlxuLyoqXG4gKiBFeHBvc2UgYEJhY2tvZmZgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja29mZjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGJhY2tvZmYgdGltZXIgd2l0aCBgb3B0c2AuXG4gKlxuICogLSBgbWluYCBpbml0aWFsIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIFsxMDBdXG4gKiAtIGBtYXhgIG1heCB0aW1lb3V0IFsxMDAwMF1cbiAqIC0gYGppdHRlcmAgWzBdXG4gKiAtIGBmYWN0b3JgIFsyXVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEJhY2tvZmYob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgdGhpcy5tcyA9IG9wdHMubWluIHx8IDEwMDtcbiAgdGhpcy5tYXggPSBvcHRzLm1heCB8fCAxMDAwMDtcbiAgdGhpcy5mYWN0b3IgPSBvcHRzLmZhY3RvciB8fCAyO1xuICB0aGlzLmppdHRlciA9IG9wdHMuaml0dGVyID4gMCAmJiBvcHRzLmppdHRlciA8PSAxID8gb3B0cy5qaXR0ZXIgOiAwO1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGJhY2tvZmYgZHVyYXRpb24uXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciBtcyA9IHRoaXMubXMgKiBNYXRoLnBvdyh0aGlzLmZhY3RvciwgdGhpcy5hdHRlbXB0cysrKTtcbiAgaWYgKHRoaXMuaml0dGVyKSB7XG4gICAgdmFyIHJhbmQgPSAgTWF0aC5yYW5kb20oKTtcbiAgICB2YXIgZGV2aWF0aW9uID0gTWF0aC5mbG9vcihyYW5kICogdGhpcy5qaXR0ZXIgKiBtcyk7XG4gICAgbXMgPSAoTWF0aC5mbG9vcihyYW5kICogMTApICYgMSkgPT0gMCAgPyBtcyAtIGRldmlhdGlvbiA6IG1zICsgZGV2aWF0aW9uO1xuICB9XG4gIHJldHVybiBNYXRoLm1pbihtcywgdGhpcy5tYXgpIHwgMDtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG51bWJlciBvZiBhdHRlbXB0cy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWluaW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWluID0gZnVuY3Rpb24obWluKXtcbiAgdGhpcy5tcyA9IG1pbjtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXhpbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNYXggPSBmdW5jdGlvbihtYXgpe1xuICB0aGlzLm1heCA9IG1heDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBqaXR0ZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldEppdHRlciA9IGZ1bmN0aW9uKGppdHRlcil7XG4gIHRoaXMuaml0dGVyID0gaml0dGVyO1xufTtcblxuIiwiLypcbiAqIGJhc2U2NC1hcnJheWJ1ZmZlclxuICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiBOaWtsYXMgdm9uIEhlcnR6ZW5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBjaGFycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xuXG4gIC8vIFVzZSBhIGxvb2t1cCB0YWJsZSB0byBmaW5kIHRoZSBpbmRleC5cbiAgdmFyIGxvb2t1cCA9IG5ldyBVaW50OEFycmF5KDI1Nik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpO1xuICB9XG5cbiAgZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbihhcnJheWJ1ZmZlcikge1xuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSxcbiAgICBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9IFwiXCI7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz0zKSB7XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpXSAmIDMpIDw8IDQpIHwgKGJ5dGVzW2kgKyAxXSA+PiA0KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpICsgMV0gJiAxNSkgPDwgMikgfCAoYnl0ZXNbaSArIDJdID4+IDYpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107XG4gICAgfVxuXG4gICAgaWYgKChsZW4gJSAzKSA9PT0gMikge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMSkgKyBcIj1cIjtcbiAgICB9IGVsc2UgaWYgKGxlbiAlIDMgPT09IDEpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgXCI9PVwiO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlNjQ7XG4gIH07XG5cbiAgZXhwb3J0cy5kZWNvZGUgPSAgZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJhc2U2NC5sZW5ndGggKiAwLjc1LFxuICAgIGxlbiA9IGJhc2U2NC5sZW5ndGgsIGksIHAgPSAwLFxuICAgIGVuY29kZWQxLCBlbmNvZGVkMiwgZW5jb2RlZDMsIGVuY29kZWQ0O1xuXG4gICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMV0gPT09IFwiPVwiKSB7XG4gICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDJdID09PSBcIj1cIikge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJyYXlidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKSxcbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTQpIHtcbiAgICAgIGVuY29kZWQxID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkpXTtcbiAgICAgIGVuY29kZWQyID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMSldO1xuICAgICAgZW5jb2RlZDMgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSsyKV07XG4gICAgICBlbmNvZGVkNCA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzMpXTtcblxuICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMSA8PCAyKSB8IChlbmNvZGVkMiA+PiA0KTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQyICYgMTUpIDw8IDQpIHwgKGVuY29kZWQzID4+IDIpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDMgJiAzKSA8PCA2KSB8IChlbmNvZGVkNCAmIDYzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlidWZmZXI7XG4gIH07XG59KSgpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKipcclxuICogQ3JlYXRlIGEgYmxvYiBidWlsZGVyIGV2ZW4gd2hlbiB2ZW5kb3IgcHJlZml4ZXMgZXhpc3RcclxuICovXHJcblxyXG52YXIgQmxvYkJ1aWxkZXIgPSB0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gQmxvYkJ1aWxkZXIgOlxyXG4gIHR5cGVvZiBXZWJLaXRCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBXZWJLaXRCbG9iQnVpbGRlciA6XHJcbiAgdHlwZW9mIE1TQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTVNCbG9iQnVpbGRlciA6XHJcbiAgdHlwZW9mIE1vekJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1vekJsb2JCdWlsZGVyIDogXHJcbiAgZmFsc2U7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgQmxvYiBjb25zdHJ1Y3RvciBpcyBzdXBwb3J0ZWRcclxuICovXHJcblxyXG52YXIgYmxvYlN1cHBvcnRlZCA9IChmdW5jdGlvbigpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGEgPSBuZXcgQmxvYihbJ2hpJ10pO1xyXG4gICAgcmV0dXJuIGEuc2l6ZSA9PT0gMjtcclxuICB9IGNhdGNoKGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgQmxvYiBjb25zdHJ1Y3RvciBzdXBwb3J0cyBBcnJheUJ1ZmZlclZpZXdzXHJcbiAqIEZhaWxzIGluIFNhZmFyaSA2LCBzbyB3ZSBuZWVkIHRvIG1hcCB0byBBcnJheUJ1ZmZlcnMgdGhlcmUuXHJcbiAqL1xyXG5cclxudmFyIGJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyA9IGJsb2JTdXBwb3J0ZWQgJiYgKGZ1bmN0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgYiA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShbMSwyXSldKTtcclxuICAgIHJldHVybiBiLnNpemUgPT09IDI7XHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIEJsb2JCdWlsZGVyIGlzIHN1cHBvcnRlZFxyXG4gKi9cclxuXHJcbnZhciBibG9iQnVpbGRlclN1cHBvcnRlZCA9IEJsb2JCdWlsZGVyXHJcbiAgJiYgQmxvYkJ1aWxkZXIucHJvdG90eXBlLmFwcGVuZFxyXG4gICYmIEJsb2JCdWlsZGVyLnByb3RvdHlwZS5nZXRCbG9iO1xyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IG1hcHMgQXJyYXlCdWZmZXJWaWV3cyB0byBBcnJheUJ1ZmZlcnNcclxuICogVXNlZCBieSBCbG9iQnVpbGRlciBjb25zdHJ1Y3RvciBhbmQgb2xkIGJyb3dzZXJzIHRoYXQgZGlkbid0XHJcbiAqIHN1cHBvcnQgaXQgaW4gdGhlIEJsb2IgY29uc3RydWN0b3IuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpIHtcclxuICByZXR1cm4gYXJ5Lm1hcChmdW5jdGlvbihjaHVuaykge1xyXG4gICAgaWYgKGNodW5rLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgIHZhciBidWYgPSBjaHVuay5idWZmZXI7XHJcblxyXG4gICAgICAvLyBpZiB0aGlzIGlzIGEgc3ViYXJyYXksIG1ha2UgYSBjb3B5IHNvIHdlIG9ubHlcclxuICAgICAgLy8gaW5jbHVkZSB0aGUgc3ViYXJyYXkgcmVnaW9uIGZyb20gdGhlIHVuZGVybHlpbmcgYnVmZmVyXHJcbiAgICAgIGlmIChjaHVuay5ieXRlTGVuZ3RoICE9PSBidWYuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmsuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgY29weS5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmLCBjaHVuay5ieXRlT2Zmc2V0LCBjaHVuay5ieXRlTGVuZ3RoKSk7XHJcbiAgICAgICAgYnVmID0gY29weS5idWZmZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBidWY7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNodW5rO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCbG9iQnVpbGRlckNvbnN0cnVjdG9yKGFyeSwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICB2YXIgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcclxuICBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSkuZm9yRWFjaChmdW5jdGlvbihwYXJ0KSB7XHJcbiAgICBiYi5hcHBlbmQocGFydCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAob3B0aW9ucy50eXBlKSA/IGJiLmdldEJsb2Iob3B0aW9ucy50eXBlKSA6IGJiLmdldEJsb2IoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEJsb2JDb25zdHJ1Y3RvcihhcnksIG9wdGlvbnMpIHtcclxuICByZXR1cm4gbmV3IEJsb2IobWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpLCBvcHRpb25zIHx8IHt9KTtcclxufTtcclxuXHJcbmlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBCbG9iQnVpbGRlckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEJsb2IucHJvdG90eXBlO1xyXG4gIEJsb2JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBCbG9iLnByb3RvdHlwZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgaWYgKGJsb2JTdXBwb3J0ZWQpIHtcclxuICAgIHJldHVybiBibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXcgPyBCbG9iIDogQmxvYkNvbnN0cnVjdG9yO1xyXG4gIH0gZWxzZSBpZiAoYmxvYkJ1aWxkZXJTdXBwb3J0ZWQpIHtcclxuICAgIHJldHVybiBCbG9iQnVpbGRlckNvbnN0cnVjdG9yO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufSkoKTtcclxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiLyoqXG4gKiBTbGljZSByZWZlcmVuY2UuXG4gKi9cblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG5cbi8qKlxuICogQmluZCBgb2JqYCB0byBgZm5gLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBvciBzdHJpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgZm4pe1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGZuKSBmbiA9IG9ialtmbl07XG4gIGlmICgnZnVuY3Rpb24nICE9IHR5cGVvZiBmbikgdGhyb3cgbmV3IEVycm9yKCdiaW5kKCkgcmVxdWlyZXMgYSBmdW5jdGlvbicpO1xuICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG9iaiwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIH1cbn07XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSwgYil7XG4gIHZhciBmbiA9IGZ1bmN0aW9uKCl7fTtcbiAgZm4ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gIGEucHJvdG90eXBlID0gbmV3IGZuO1xuICBhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGE7XG59OyIsIlxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NvY2tldCcpO1xuXG4vKipcbiAqIEV4cG9ydHMgcGFyc2VyXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzLnBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdHJhbnNwb3J0cyA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9pbmRleCcpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpzb2NrZXQnKTtcbnZhciBpbmRleCA9IHJlcXVpcmUoJ2luZGV4b2YnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgcGFyc2V1cmkgPSByZXF1aXJlKCdwYXJzZXVyaScpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBTb2NrZXQ7XG5cbi8qKlxuICogU29ja2V0IGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXJpIG9yIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFNvY2tldCAodXJpLCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTb2NrZXQpKSByZXR1cm4gbmV3IFNvY2tldCh1cmksIG9wdHMpO1xuXG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIGlmICh1cmkgJiYgJ29iamVjdCcgPT09IHR5cGVvZiB1cmkpIHtcbiAgICBvcHRzID0gdXJpO1xuICAgIHVyaSA9IG51bGw7XG4gIH1cblxuICBpZiAodXJpKSB7XG4gICAgdXJpID0gcGFyc2V1cmkodXJpKTtcbiAgICBvcHRzLmhvc3RuYW1lID0gdXJpLmhvc3Q7XG4gICAgb3B0cy5zZWN1cmUgPSB1cmkucHJvdG9jb2wgPT09ICdodHRwcycgfHwgdXJpLnByb3RvY29sID09PSAnd3NzJztcbiAgICBvcHRzLnBvcnQgPSB1cmkucG9ydDtcbiAgICBpZiAodXJpLnF1ZXJ5KSBvcHRzLnF1ZXJ5ID0gdXJpLnF1ZXJ5O1xuICB9IGVsc2UgaWYgKG9wdHMuaG9zdCkge1xuICAgIG9wdHMuaG9zdG5hbWUgPSBwYXJzZXVyaShvcHRzLmhvc3QpLmhvc3Q7XG4gIH1cblxuICB0aGlzLnNlY3VyZSA9IG51bGwgIT0gb3B0cy5zZWN1cmUgPyBvcHRzLnNlY3VyZVxuICAgIDogKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2h0dHBzOicgPT09IGxvY2F0aW9uLnByb3RvY29sKTtcblxuICBpZiAob3B0cy5ob3N0bmFtZSAmJiAhb3B0cy5wb3J0KSB7XG4gICAgLy8gaWYgbm8gcG9ydCBpcyBzcGVjaWZpZWQgbWFudWFsbHksIHVzZSB0aGUgcHJvdG9jb2wgZGVmYXVsdFxuICAgIG9wdHMucG9ydCA9IHRoaXMuc2VjdXJlID8gJzQ0MycgOiAnODAnO1xuICB9XG5cbiAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQgfHwgZmFsc2U7XG4gIHRoaXMuaG9zdG5hbWUgPSBvcHRzLmhvc3RuYW1lIHx8XG4gICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbiAgdGhpcy5wb3J0ID0gb3B0cy5wb3J0IHx8ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGxvY2F0aW9uLnBvcnRcbiAgICAgID8gbG9jYXRpb24ucG9ydFxuICAgICAgOiAodGhpcy5zZWN1cmUgPyA0NDMgOiA4MCkpO1xuICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeSB8fCB7fTtcbiAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgdGhpcy5xdWVyeSkgdGhpcy5xdWVyeSA9IHBhcnNlcXMuZGVjb2RlKHRoaXMucXVlcnkpO1xuICB0aGlzLnVwZ3JhZGUgPSBmYWxzZSAhPT0gb3B0cy51cGdyYWRlO1xuICB0aGlzLnBhdGggPSAob3B0cy5wYXRoIHx8ICcvZW5naW5lLmlvJykucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJztcbiAgdGhpcy5mb3JjZUpTT05QID0gISFvcHRzLmZvcmNlSlNPTlA7XG4gIHRoaXMuanNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcbiAgdGhpcy5mb3JjZUJhc2U2NCA9ICEhb3B0cy5mb3JjZUJhc2U2NDtcbiAgdGhpcy5lbmFibGVzWERSID0gISFvcHRzLmVuYWJsZXNYRFI7XG4gIHRoaXMudGltZXN0YW1wUGFyYW0gPSBvcHRzLnRpbWVzdGFtcFBhcmFtIHx8ICd0JztcbiAgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyA9IG9wdHMudGltZXN0YW1wUmVxdWVzdHM7XG4gIHRoaXMudHJhbnNwb3J0cyA9IG9wdHMudHJhbnNwb3J0cyB8fCBbJ3BvbGxpbmcnLCAnd2Vic29ja2V0J107XG4gIHRoaXMudHJhbnNwb3J0T3B0aW9ucyA9IG9wdHMudHJhbnNwb3J0T3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJyc7XG4gIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcbiAgdGhpcy5wb2xpY3lQb3J0ID0gb3B0cy5wb2xpY3lQb3J0IHx8IDg0MztcbiAgdGhpcy5yZW1lbWJlclVwZ3JhZGUgPSBvcHRzLnJlbWVtYmVyVXBncmFkZSB8fCBmYWxzZTtcbiAgdGhpcy5iaW5hcnlUeXBlID0gbnVsbDtcbiAgdGhpcy5vbmx5QmluYXJ5VXBncmFkZXMgPSBvcHRzLm9ubHlCaW5hcnlVcGdyYWRlcztcbiAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IGZhbHNlICE9PSBvcHRzLnBlck1lc3NhZ2VEZWZsYXRlID8gKG9wdHMucGVyTWVzc2FnZURlZmxhdGUgfHwge30pIDogZmFsc2U7XG5cbiAgaWYgKHRydWUgPT09IHRoaXMucGVyTWVzc2FnZURlZmxhdGUpIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSB7fTtcbiAgaWYgKHRoaXMucGVyTWVzc2FnZURlZmxhdGUgJiYgbnVsbCA9PSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgIHRoaXMucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkID0gMTAyNDtcbiAgfVxuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLnBmeCA9IG9wdHMucGZ4IHx8IG51bGw7XG4gIHRoaXMua2V5ID0gb3B0cy5rZXkgfHwgbnVsbDtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlIHx8IG51bGw7XG4gIHRoaXMuY2VydCA9IG9wdHMuY2VydCB8fCBudWxsO1xuICB0aGlzLmNhID0gb3B0cy5jYSB8fCBudWxsO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnMgfHwgbnVsbDtcbiAgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuICB0aGlzLmZvcmNlTm9kZSA9ICEhb3B0cy5mb3JjZU5vZGU7XG5cbiAgLy8gZGV0ZWN0IFJlYWN0TmF0aXZlIGVudmlyb25tZW50XG4gIHRoaXMuaXNSZWFjdE5hdGl2ZSA9ICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdzdHJpbmcnICYmIG5hdmlnYXRvci5wcm9kdWN0LnRvTG93ZXJDYXNlKCkgPT09ICdyZWFjdG5hdGl2ZScpO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgb3IgUmVhY3ROYXRpdmUgY2xpZW50XG4gIGlmICh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5pc1JlYWN0TmF0aXZlKSB7XG4gICAgaWYgKG9wdHMuZXh0cmFIZWFkZXJzICYmIE9iamVjdC5rZXlzKG9wdHMuZXh0cmFIZWFkZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmxvY2FsQWRkcmVzcykge1xuICAgICAgdGhpcy5sb2NhbEFkZHJlc3MgPSBvcHRzLmxvY2FsQWRkcmVzcztcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgb24gaGFuZHNoYWtlXG4gIHRoaXMuaWQgPSBudWxsO1xuICB0aGlzLnVwZ3JhZGVzID0gbnVsbDtcbiAgdGhpcy5waW5nSW50ZXJ2YWwgPSBudWxsO1xuICB0aGlzLnBpbmdUaW1lb3V0ID0gbnVsbDtcblxuICAvLyBzZXQgb24gaGVhcnRiZWF0XG4gIHRoaXMucGluZ0ludGVydmFsVGltZXIgPSBudWxsO1xuICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBudWxsO1xuXG4gIHRoaXMub3BlbigpO1xufVxuXG5Tb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFNvY2tldC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5cbi8qKlxuICogRXhwb3NlIGRlcHMgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5XG4gKiBhbmQgc3RhbmRhbG9uZSBicm93c2VyIGFjY2Vzcy5cbiAqL1xuXG5Tb2NrZXQuU29ja2V0ID0gU29ja2V0O1xuU29ja2V0LlRyYW5zcG9ydCA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0Jyk7XG5Tb2NrZXQudHJhbnNwb3J0cyA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9pbmRleCcpO1xuU29ja2V0LnBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIHRyYW5zcG9ydCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAqIEByZXR1cm4ge1RyYW5zcG9ydH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuY3JlYXRlVHJhbnNwb3J0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVidWcoJ2NyZWF0aW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgdmFyIHF1ZXJ5ID0gY2xvbmUodGhpcy5xdWVyeSk7XG5cbiAgLy8gYXBwZW5kIGVuZ2luZS5pbyBwcm90b2NvbCBpZGVudGlmaWVyXG4gIHF1ZXJ5LkVJTyA9IHBhcnNlci5wcm90b2NvbDtcblxuICAvLyB0cmFuc3BvcnQgbmFtZVxuICBxdWVyeS50cmFuc3BvcnQgPSBuYW1lO1xuXG4gIC8vIHBlci10cmFuc3BvcnQgb3B0aW9uc1xuICB2YXIgb3B0aW9ucyA9IHRoaXMudHJhbnNwb3J0T3B0aW9uc1tuYW1lXSB8fCB7fTtcblxuICAvLyBzZXNzaW9uIGlkIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcbiAgaWYgKHRoaXMuaWQpIHF1ZXJ5LnNpZCA9IHRoaXMuaWQ7XG5cbiAgdmFyIHRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzW25hbWVdKHtcbiAgICBxdWVyeTogcXVlcnksXG4gICAgc29ja2V0OiB0aGlzLFxuICAgIGFnZW50OiBvcHRpb25zLmFnZW50IHx8IHRoaXMuYWdlbnQsXG4gICAgaG9zdG5hbWU6IG9wdGlvbnMuaG9zdG5hbWUgfHwgdGhpcy5ob3N0bmFtZSxcbiAgICBwb3J0OiBvcHRpb25zLnBvcnQgfHwgdGhpcy5wb3J0LFxuICAgIHNlY3VyZTogb3B0aW9ucy5zZWN1cmUgfHwgdGhpcy5zZWN1cmUsXG4gICAgcGF0aDogb3B0aW9ucy5wYXRoIHx8IHRoaXMucGF0aCxcbiAgICBmb3JjZUpTT05QOiBvcHRpb25zLmZvcmNlSlNPTlAgfHwgdGhpcy5mb3JjZUpTT05QLFxuICAgIGpzb25wOiBvcHRpb25zLmpzb25wIHx8IHRoaXMuanNvbnAsXG4gICAgZm9yY2VCYXNlNjQ6IG9wdGlvbnMuZm9yY2VCYXNlNjQgfHwgdGhpcy5mb3JjZUJhc2U2NCxcbiAgICBlbmFibGVzWERSOiBvcHRpb25zLmVuYWJsZXNYRFIgfHwgdGhpcy5lbmFibGVzWERSLFxuICAgIHRpbWVzdGFtcFJlcXVlc3RzOiBvcHRpb25zLnRpbWVzdGFtcFJlcXVlc3RzIHx8IHRoaXMudGltZXN0YW1wUmVxdWVzdHMsXG4gICAgdGltZXN0YW1wUGFyYW06IG9wdGlvbnMudGltZXN0YW1wUGFyYW0gfHwgdGhpcy50aW1lc3RhbXBQYXJhbSxcbiAgICBwb2xpY3lQb3J0OiBvcHRpb25zLnBvbGljeVBvcnQgfHwgdGhpcy5wb2xpY3lQb3J0LFxuICAgIHBmeDogb3B0aW9ucy5wZnggfHwgdGhpcy5wZngsXG4gICAga2V5OiBvcHRpb25zLmtleSB8fCB0aGlzLmtleSxcbiAgICBwYXNzcGhyYXNlOiBvcHRpb25zLnBhc3NwaHJhc2UgfHwgdGhpcy5wYXNzcGhyYXNlLFxuICAgIGNlcnQ6IG9wdGlvbnMuY2VydCB8fCB0aGlzLmNlcnQsXG4gICAgY2E6IG9wdGlvbnMuY2EgfHwgdGhpcy5jYSxcbiAgICBjaXBoZXJzOiBvcHRpb25zLmNpcGhlcnMgfHwgdGhpcy5jaXBoZXJzLFxuICAgIHJlamVjdFVuYXV0aG9yaXplZDogb3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgfHwgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQsXG4gICAgcGVyTWVzc2FnZURlZmxhdGU6IG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgfHwgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSxcbiAgICBleHRyYUhlYWRlcnM6IG9wdGlvbnMuZXh0cmFIZWFkZXJzIHx8IHRoaXMuZXh0cmFIZWFkZXJzLFxuICAgIGZvcmNlTm9kZTogb3B0aW9ucy5mb3JjZU5vZGUgfHwgdGhpcy5mb3JjZU5vZGUsXG4gICAgbG9jYWxBZGRyZXNzOiBvcHRpb25zLmxvY2FsQWRkcmVzcyB8fCB0aGlzLmxvY2FsQWRkcmVzcyxcbiAgICByZXF1ZXN0VGltZW91dDogb3B0aW9ucy5yZXF1ZXN0VGltZW91dCB8fCB0aGlzLnJlcXVlc3RUaW1lb3V0LFxuICAgIHByb3RvY29sczogb3B0aW9ucy5wcm90b2NvbHMgfHwgdm9pZCAoMCksXG4gICAgaXNSZWFjdE5hdGl2ZTogdGhpcy5pc1JlYWN0TmF0aXZlXG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc3BvcnQ7XG59O1xuXG5mdW5jdGlvbiBjbG9uZSAob2JqKSB7XG4gIHZhciBvID0ge307XG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgb1tpXSA9IG9ialtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgdHJhbnNwb3J0IHRvIHVzZSBhbmQgc3RhcnRzIHByb2JlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5Tb2NrZXQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0cmFuc3BvcnQ7XG4gIGlmICh0aGlzLnJlbWVtYmVyVXBncmFkZSAmJiBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzICYmIHRoaXMudHJhbnNwb3J0cy5pbmRleE9mKCd3ZWJzb2NrZXQnKSAhPT0gLTEpIHtcbiAgICB0cmFuc3BvcnQgPSAnd2Vic29ja2V0JztcbiAgfSBlbHNlIGlmICgwID09PSB0aGlzLnRyYW5zcG9ydHMubGVuZ3RoKSB7XG4gICAgLy8gRW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gaXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5lbWl0KCdlcnJvcicsICdObyB0cmFuc3BvcnRzIGF2YWlsYWJsZScpO1xuICAgIH0sIDApO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydHNbMF07XG4gIH1cbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuXG4gIC8vIFJldHJ5IHdpdGggdGhlIG5leHQgdHJhbnNwb3J0IGlmIHRoZSB0cmFuc3BvcnQgaXMgZGlzYWJsZWQgKGpzb25wOiBmYWxzZSlcbiAgdHJ5IHtcbiAgICB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy50cmFuc3BvcnRzLnNoaWZ0KCk7XG4gICAgdGhpcy5vcGVuKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgdGhpcy5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQuIERpc2FibGVzIHRoZSBleGlzdGluZyBvbmUgKGlmIGFueSkuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZXRUcmFuc3BvcnQgPSBmdW5jdGlvbiAodHJhbnNwb3J0KSB7XG4gIGRlYnVnKCdzZXR0aW5nIHRyYW5zcG9ydCAlcycsIHRyYW5zcG9ydC5uYW1lKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgIGRlYnVnKCdjbGVhcmluZyBleGlzdGluZyB0cmFuc3BvcnQgJXMnLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8vIHNldCB1cCB0cmFuc3BvcnRcbiAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cbiAgLy8gc2V0IHVwIHRyYW5zcG9ydCBsaXN0ZW5lcnNcbiAgdHJhbnNwb3J0XG4gIC5vbignZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbkRyYWluKCk7XG4gIH0pXG4gIC5vbigncGFja2V0JywgZnVuY3Rpb24gKHBhY2tldCkge1xuICAgIHNlbGYub25QYWNrZXQocGFja2V0KTtcbiAgfSlcbiAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgc2VsZi5vbkVycm9yKGUpO1xuICB9KVxuICAub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25DbG9zZSgndHJhbnNwb3J0IGNsb3NlJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQcm9iZXMgYSB0cmFuc3BvcnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnByb2JlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVidWcoJ3Byb2JpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICB2YXIgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQobmFtZSwgeyBwcm9iZTogMSB9KTtcbiAgdmFyIGZhaWxlZCA9IGZhbHNlO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG9uVHJhbnNwb3J0T3BlbiAoKSB7XG4gICAgaWYgKHNlbGYub25seUJpbmFyeVVwZ3JhZGVzKSB7XG4gICAgICB2YXIgdXBncmFkZUxvc2VzQmluYXJ5ID0gIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgc2VsZi50cmFuc3BvcnQuc3VwcG9ydHNCaW5hcnk7XG4gICAgICBmYWlsZWQgPSBmYWlsZWQgfHwgdXBncmFkZUxvc2VzQmluYXJ5O1xuICAgIH1cbiAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBvcGVuZWQnLCBuYW1lKTtcbiAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiAncGluZycsIGRhdGE6ICdwcm9iZScgfV0pO1xuICAgIHRyYW5zcG9ydC5vbmNlKCdwYWNrZXQnLCBmdW5jdGlvbiAobXNnKSB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICBpZiAoJ3BvbmcnID09PSBtc2cudHlwZSAmJiAncHJvYmUnID09PSBtc2cuZGF0YSkge1xuICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBwb25nJywgbmFtZSk7XG4gICAgICAgIHNlbGYudXBncmFkaW5nID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRpbmcnLCB0cmFuc3BvcnQpO1xuICAgICAgICBpZiAoIXRyYW5zcG9ydCkgcmV0dXJuO1xuICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gJ3dlYnNvY2tldCcgPT09IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICAgIGRlYnVnKCdwYXVzaW5nIGN1cnJlbnQgdHJhbnNwb3J0IFwiJXNcIicsIHNlbGYudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICBzZWxmLnRyYW5zcG9ydC5wYXVzZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICAgIGlmICgnY2xvc2VkJyA9PT0gc2VsZi5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgZGVidWcoJ2NoYW5naW5nIHRyYW5zcG9ydCBhbmQgc2VuZGluZyB1cGdyYWRlIHBhY2tldCcpO1xuXG4gICAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgICAgc2VsZi5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICAgICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiAndXBncmFkZScgfV0pO1xuICAgICAgICAgIHNlbGYuZW1pdCgndXBncmFkZScsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICBzZWxmLnVwZ3JhZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYuZmx1c2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQnLCBuYW1lKTtcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcigncHJvYmUgZXJyb3InKTtcbiAgICAgICAgZXJyLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGVFcnJvcicsIGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmcmVlemVUcmFuc3BvcnQgKCkge1xuICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgIC8vIEFueSBjYWxsYmFjayBjYWxsZWQgYnkgdHJhbnNwb3J0IHNob3VsZCBiZSBpZ25vcmVkIHNpbmNlIG5vd1xuICAgIGZhaWxlZCA9IHRydWU7XG5cbiAgICBjbGVhbnVwKCk7XG5cbiAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB0cmFuc3BvcnQgPSBudWxsO1xuICB9XG5cbiAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IGhhcHBlbnMgd2hpbGUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbmVycm9yIChlcnIpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ3Byb2JlIGVycm9yOiAnICsgZXJyKTtcbiAgICBlcnJvci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcblxuICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuXG4gICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3I6ICVzJywgbmFtZSwgZXJyKTtcblxuICAgIHNlbGYuZW1pdCgndXBncmFkZUVycm9yJywgZXJyb3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc3BvcnRDbG9zZSAoKSB7XG4gICAgb25lcnJvcigndHJhbnNwb3J0IGNsb3NlZCcpO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIGNsb3NlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gIGZ1bmN0aW9uIG9uY2xvc2UgKCkge1xuICAgIG9uZXJyb3IoJ3NvY2tldCBjbG9zZWQnKTtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHNvY2tldCBpcyB1cGdyYWRlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gIGZ1bmN0aW9uIG9udXBncmFkZSAodG8pIHtcbiAgICBpZiAodHJhbnNwb3J0ICYmIHRvLm5hbWUgIT09IHRyYW5zcG9ydC5uYW1lKSB7XG4gICAgICBkZWJ1ZygnXCIlc1wiIHdvcmtzIC0gYWJvcnRpbmcgXCIlc1wiJywgdG8ubmFtZSwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb24gdGhlIHRyYW5zcG9ydCBhbmQgb24gc2VsZlxuICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ29wZW4nLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25UcmFuc3BvcnRDbG9zZSk7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRpbmcnLCBvbnVwZ3JhZGUpO1xuICB9XG5cbiAgdHJhbnNwb3J0Lm9uY2UoJ29wZW4nLCBvblRyYW5zcG9ydE9wZW4pO1xuICB0cmFuc3BvcnQub25jZSgnZXJyb3InLCBvbmVycm9yKTtcbiAgdHJhbnNwb3J0Lm9uY2UoJ2Nsb3NlJywgb25UcmFuc3BvcnRDbG9zZSk7XG5cbiAgdGhpcy5vbmNlKCdjbG9zZScsIG9uY2xvc2UpO1xuICB0aGlzLm9uY2UoJ3VwZ3JhZGluZycsIG9udXBncmFkZSk7XG5cbiAgdHJhbnNwb3J0Lm9wZW4oKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBkZWVtZWQgb3Blbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Zygnc29ja2V0IG9wZW4nKTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gJ3dlYnNvY2tldCcgPT09IHRoaXMudHJhbnNwb3J0Lm5hbWU7XG4gIHRoaXMuZW1pdCgnb3BlbicpO1xuICB0aGlzLmZsdXNoKCk7XG5cbiAgLy8gd2UgY2hlY2sgZm9yIGByZWFkeVN0YXRlYCBpbiBjYXNlIGFuIGBvcGVuYFxuICAvLyBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlZCB0aGUgc29ja2V0XG4gIGlmICgnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSAmJiB0aGlzLnVwZ3JhZGUgJiYgdGhpcy50cmFuc3BvcnQucGF1c2UpIHtcbiAgICBkZWJ1Zygnc3RhcnRpbmcgdXBncmFkZSBwcm9iZXMnKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMudXBncmFkZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLnByb2JlKHRoaXMudXBncmFkZXNbaV0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBIYW5kbGVzIGEgcGFja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25QYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgJ2Nsb3NpbmcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1Zygnc29ja2V0IHJlY2VpdmU6IHR5cGUgXCIlc1wiLCBkYXRhIFwiJXNcIicsIHBhY2tldC50eXBlLCBwYWNrZXQuZGF0YSk7XG5cbiAgICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG5cbiAgICAvLyBTb2NrZXQgaXMgbGl2ZSAtIGFueSBwYWNrZXQgY291bnRzXG4gICAgdGhpcy5lbWl0KCdoZWFydGJlYXQnKTtcblxuICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgIGNhc2UgJ29wZW4nOlxuICAgICAgICB0aGlzLm9uSGFuZHNoYWtlKEpTT04ucGFyc2UocGFja2V0LmRhdGEpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BvbmcnOlxuICAgICAgICB0aGlzLnNldFBpbmcoKTtcbiAgICAgICAgdGhpcy5lbWl0KCdwb25nJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3NlcnZlciBlcnJvcicpO1xuICAgICAgICBlcnIuY29kZSA9IHBhY2tldC5kYXRhO1xuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21lc3NhZ2UnOlxuICAgICAgICB0aGlzLmVtaXQoJ2RhdGEnLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRlYnVnKCdwYWNrZXQgcmVjZWl2ZWQgd2l0aCBzb2NrZXQgcmVhZHlTdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGhhbmRzaGFrZSBjb21wbGV0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kc2hha2Ugb2JqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uSGFuZHNoYWtlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdGhpcy5lbWl0KCdoYW5kc2hha2UnLCBkYXRhKTtcbiAgdGhpcy5pZCA9IGRhdGEuc2lkO1xuICB0aGlzLnRyYW5zcG9ydC5xdWVyeS5zaWQgPSBkYXRhLnNpZDtcbiAgdGhpcy51cGdyYWRlcyA9IHRoaXMuZmlsdGVyVXBncmFkZXMoZGF0YS51cGdyYWRlcyk7XG4gIHRoaXMucGluZ0ludGVydmFsID0gZGF0YS5waW5nSW50ZXJ2YWw7XG4gIHRoaXMucGluZ1RpbWVvdXQgPSBkYXRhLnBpbmdUaW1lb3V0O1xuICB0aGlzLm9uT3BlbigpO1xuICAvLyBJbiBjYXNlIG9wZW4gaGFuZGxlciBjbG9zZXMgc29ja2V0XG4gIGlmICgnY2xvc2VkJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gIHRoaXMuc2V0UGluZygpO1xuXG4gIC8vIFByb2xvbmcgbGl2ZW5lc3Mgb2Ygc29ja2V0IG9uIGhlYXJ0YmVhdFxuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdoZWFydGJlYXQnLCB0aGlzLm9uSGVhcnRiZWF0KTtcbiAgdGhpcy5vbignaGVhcnRiZWF0JywgdGhpcy5vbkhlYXJ0YmVhdCk7XG59O1xuXG4vKipcbiAqIFJlc2V0cyBwaW5nIHRpbWVvdXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkhlYXJ0YmVhdCA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYucGluZ1RpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmICgnY2xvc2VkJyA9PT0gc2VsZi5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgc2VsZi5vbkNsb3NlKCdwaW5nIHRpbWVvdXQnKTtcbiAgfSwgdGltZW91dCB8fCAoc2VsZi5waW5nSW50ZXJ2YWwgKyBzZWxmLnBpbmdUaW1lb3V0KSk7XG59O1xuXG4vKipcbiAqIFBpbmdzIHNlcnZlciBldmVyeSBgdGhpcy5waW5nSW50ZXJ2YWxgIGFuZCBleHBlY3RzIHJlc3BvbnNlXG4gKiB3aXRoaW4gYHRoaXMucGluZ1RpbWVvdXRgIG9yIGNsb3NlcyBjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2V0UGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBjbGVhclRpbWVvdXQoc2VsZi5waW5nSW50ZXJ2YWxUaW1lcik7XG4gIHNlbGYucGluZ0ludGVydmFsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBkZWJ1Zygnd3JpdGluZyBwaW5nIHBhY2tldCAtIGV4cGVjdGluZyBwb25nIHdpdGhpbiAlc21zJywgc2VsZi5waW5nVGltZW91dCk7XG4gICAgc2VsZi5waW5nKCk7XG4gICAgc2VsZi5vbkhlYXJ0YmVhdChzZWxmLnBpbmdUaW1lb3V0KTtcbiAgfSwgc2VsZi5waW5nSW50ZXJ2YWwpO1xufTtcblxuLyoqXG4qIFNlbmRzIGEgcGluZyBwYWNrZXQuXG4qXG4qIEBhcGkgcHJpdmF0ZVxuKi9cblxuU29ja2V0LnByb3RvdHlwZS5waW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuc2VuZFBhY2tldCgncGluZycsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLmVtaXQoJ3BpbmcnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIENhbGxlZCBvbiBgZHJhaW5gIGV2ZW50XG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkRyYWluID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndyaXRlQnVmZmVyLnNwbGljZSgwLCB0aGlzLnByZXZCdWZmZXJMZW4pO1xuXG4gIC8vIHNldHRpbmcgcHJldkJ1ZmZlckxlbiA9IDAgaXMgdmVyeSBpbXBvcnRhbnRcbiAgLy8gZm9yIGV4YW1wbGUsIHdoZW4gdXBncmFkaW5nLCB1cGdyYWRlIHBhY2tldCBpcyBzZW50IG92ZXIsXG4gIC8vIGFuZCBhIG5vbnplcm8gcHJldkJ1ZmZlckxlbiBjb3VsZCBjYXVzZSBwcm9ibGVtcyBvbiBgZHJhaW5gXG4gIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgaWYgKDAgPT09IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgdGhpcy5lbWl0KCdkcmFpbicpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZmx1c2goKTtcbiAgfVxufTtcblxuLyoqXG4gKiBGbHVzaCB3cml0ZSBidWZmZXJzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnY2xvc2VkJyAhPT0gdGhpcy5yZWFkeVN0YXRlICYmIHRoaXMudHJhbnNwb3J0LndyaXRhYmxlICYmXG4gICAgIXRoaXMudXBncmFkaW5nICYmIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgZGVidWcoJ2ZsdXNoaW5nICVkIHBhY2tldHMgaW4gc29ja2V0JywgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpO1xuICAgIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy53cml0ZUJ1ZmZlcik7XG4gICAgLy8ga2VlcCB0cmFjayBvZiBjdXJyZW50IGxlbmd0aCBvZiB3cml0ZUJ1ZmZlclxuICAgIC8vIHNwbGljZSB3cml0ZUJ1ZmZlciBhbmQgY2FsbGJhY2tCdWZmZXIgb24gYGRyYWluYFxuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoO1xuICAgIHRoaXMuZW1pdCgnZmx1c2gnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZW5kcyBhIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICogQHJldHVybiB7U29ja2V0fSBmb3IgY2hhaW5pbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUud3JpdGUgPVxuU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgdGhpcy5zZW5kUGFja2V0KCdtZXNzYWdlJywgbXNnLCBvcHRpb25zLCBmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBhIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFja2V0IHR5cGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNlbmRQYWNrZXQgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgb3B0aW9ucywgZm4pIHtcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkYXRhKSB7XG4gICAgZm4gPSBkYXRhO1xuICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICBmbiA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cblxuICBpZiAoJ2Nsb3NpbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ2Nsb3NlZCcgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmNvbXByZXNzID0gZmFsc2UgIT09IG9wdGlvbnMuY29tcHJlc3M7XG5cbiAgdmFyIHBhY2tldCA9IHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9O1xuICB0aGlzLmVtaXQoJ3BhY2tldENyZWF0ZScsIHBhY2tldCk7XG4gIHRoaXMud3JpdGVCdWZmZXIucHVzaChwYWNrZXQpO1xuICBpZiAoZm4pIHRoaXMub25jZSgnZmx1c2gnLCBmbik7XG4gIHRoaXMuZmx1c2goKTtcbn07XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zaW5nJztcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5vbmNlKCdkcmFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlICgpIHtcbiAgICBzZWxmLm9uQ2xvc2UoJ2ZvcmNlZCBjbG9zZScpO1xuICAgIGRlYnVnKCdzb2NrZXQgY2xvc2luZyAtIHRlbGxpbmcgdHJhbnNwb3J0IHRvIGNsb3NlJyk7XG4gICAgc2VsZi50cmFuc3BvcnQuY2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXBBbmRDbG9zZSAoKSB7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcigndXBncmFkZScsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcigndXBncmFkZUVycm9yJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICBjbG9zZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FpdEZvclVwZ3JhZGUgKCkge1xuICAgIC8vIHdhaXQgZm9yIHVwZ3JhZGUgdG8gZmluaXNoIHNpbmNlIHdlIGNhbid0IHNlbmQgcGFja2V0cyB3aGlsZSBwYXVzaW5nIGEgdHJhbnNwb3J0XG4gICAgc2VsZi5vbmNlKCd1cGdyYWRlJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICBzZWxmLm9uY2UoJ3VwZ3JhZGVFcnJvcicsIGNsZWFudXBBbmRDbG9zZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGVycm9yXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICBkZWJ1Zygnc29ja2V0IGVycm9yICVqJywgZXJyKTtcbiAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgdGhpcy5vbkNsb3NlKCd0cmFuc3BvcnQgZXJyb3InLCBlcnIpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgY2xvc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbiwgZGVzYykge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ2Nsb3NpbmcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1Zygnc29ja2V0IGNsb3NlIHdpdGggcmVhc29uOiBcIiVzXCInLCByZWFzb24pO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIGNsZWFyIHRpbWVyc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcblxuICAgIC8vIHN0b3AgZXZlbnQgZnJvbSBmaXJpbmcgYWdhaW4gZm9yIHRyYW5zcG9ydFxuICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygnY2xvc2UnKTtcblxuICAgIC8vIGVuc3VyZSB0cmFuc3BvcnQgd29uJ3Qgc3RheSBvcGVuXG4gICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblxuICAgIC8vIGlnbm9yZSBmdXJ0aGVyIHRyYW5zcG9ydCBjb21tdW5pY2F0aW9uXG4gICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBzZXQgcmVhZHkgc3RhdGVcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcblxuICAgIC8vIGNsZWFyIHNlc3Npb24gaWRcbiAgICB0aGlzLmlkID0gbnVsbDtcblxuICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgcmVhc29uLCBkZXNjKTtcblxuICAgIC8vIGNsZWFuIGJ1ZmZlcnMgYWZ0ZXIsIHNvIHVzZXJzIGNhbiBzdGlsbFxuICAgIC8vIGdyYWIgdGhlIGJ1ZmZlcnMgb24gYGNsb3NlYCBldmVudFxuICAgIHNlbGYud3JpdGVCdWZmZXIgPSBbXTtcbiAgICBzZWxmLnByZXZCdWZmZXJMZW4gPSAwO1xuICB9XG59O1xuXG4vKipcbiAqIEZpbHRlcnMgdXBncmFkZXMsIHJldHVybmluZyBvbmx5IHRob3NlIG1hdGNoaW5nIGNsaWVudCB0cmFuc3BvcnRzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNlcnZlciB1cGdyYWRlc1xuICogQGFwaSBwcml2YXRlXG4gKlxuICovXG5cblNvY2tldC5wcm90b3R5cGUuZmlsdGVyVXBncmFkZXMgPSBmdW5jdGlvbiAodXBncmFkZXMpIHtcbiAgdmFyIGZpbHRlcmVkVXBncmFkZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGogPSB1cGdyYWRlcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICBpZiAofmluZGV4KHRoaXMudHJhbnNwb3J0cywgdXBncmFkZXNbaV0pKSBmaWx0ZXJlZFVwZ3JhZGVzLnB1c2godXBncmFkZXNbaV0pO1xuICB9XG4gIHJldHVybiBmaWx0ZXJlZFVwZ3JhZGVzO1xufTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwb3J0O1xuXG4vKipcbiAqIFRyYW5zcG9ydCBhYnN0cmFjdCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFRyYW5zcG9ydCAob3B0cykge1xuICB0aGlzLnBhdGggPSBvcHRzLnBhdGg7XG4gIHRoaXMuaG9zdG5hbWUgPSBvcHRzLmhvc3RuYW1lO1xuICB0aGlzLnBvcnQgPSBvcHRzLnBvcnQ7XG4gIHRoaXMuc2VjdXJlID0gb3B0cy5zZWN1cmU7XG4gIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICB0aGlzLnRpbWVzdGFtcFBhcmFtID0gb3B0cy50aW1lc3RhbXBQYXJhbTtcbiAgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyA9IG9wdHMudGltZXN0YW1wUmVxdWVzdHM7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICcnO1xuICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudCB8fCBmYWxzZTtcbiAgdGhpcy5zb2NrZXQgPSBvcHRzLnNvY2tldDtcbiAgdGhpcy5lbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLnBmeCA9IG9wdHMucGZ4O1xuICB0aGlzLmtleSA9IG9wdHMua2V5O1xuICB0aGlzLnBhc3NwaHJhc2UgPSBvcHRzLnBhc3NwaHJhc2U7XG4gIHRoaXMuY2VydCA9IG9wdHMuY2VydDtcbiAgdGhpcy5jYSA9IG9wdHMuY2E7XG4gIHRoaXMuY2lwaGVycyA9IG9wdHMuY2lwaGVycztcbiAgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgdGhpcy5mb3JjZU5vZGUgPSBvcHRzLmZvcmNlTm9kZTtcblxuICAvLyByZXN1bHRzIG9mIFJlYWN0TmF0aXZlIGVudmlyb25tZW50IGRldGVjdGlvblxuICB0aGlzLmlzUmVhY3ROYXRpdmUgPSBvcHRzLmlzUmVhY3ROYXRpdmU7XG5cbiAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcbiAgdGhpcy5sb2NhbEFkZHJlc3MgPSBvcHRzLmxvY2FsQWRkcmVzcztcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoVHJhbnNwb3J0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogRW1pdHMgYW4gZXJyb3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7VHJhbnNwb3J0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKG1zZywgZGVzYykge1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci50eXBlID0gJ1RyYW5zcG9ydEVycm9yJztcbiAgZXJyLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPcGVucyB0aGUgdHJhbnNwb3J0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ2Nsb3NlZCcgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuICAgIHRoaXMuZG9PcGVuKCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xvc2VzIHRoZSB0cmFuc3BvcnQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5kb0Nsb3NlKCk7XG4gICAgdGhpcy5vbkNsb3NlKCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgbXVsdGlwbGUgcGFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLndyaXRlKHBhY2tldHMpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNwb3J0IG5vdCBvcGVuJyk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gb3BlblxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICB0aGlzLmVtaXQoJ29wZW4nKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgcGFja2V0ID0gcGFyc2VyLmRlY29kZVBhY2tldChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKTtcbiAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBhIGRlY29kZWQgcGFja2V0LlxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25QYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gY2xvc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xufTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoJ3htbGh0dHByZXF1ZXN0LXNzbCcpO1xudmFyIFhIUiA9IHJlcXVpcmUoJy4vcG9sbGluZy14aHInKTtcbnZhciBKU09OUCA9IHJlcXVpcmUoJy4vcG9sbGluZy1qc29ucCcpO1xudmFyIHdlYnNvY2tldCA9IHJlcXVpcmUoJy4vd2Vic29ja2V0Jyk7XG5cbi8qKlxuICogRXhwb3J0IHRyYW5zcG9ydHMuXG4gKi9cblxuZXhwb3J0cy5wb2xsaW5nID0gcG9sbGluZztcbmV4cG9ydHMud2Vic29ja2V0ID0gd2Vic29ja2V0O1xuXG4vKipcbiAqIFBvbGxpbmcgdHJhbnNwb3J0IHBvbHltb3JwaGljIGNvbnN0cnVjdG9yLlxuICogRGVjaWRlcyBvbiB4aHIgdnMganNvbnAgYmFzZWQgb24gZmVhdHVyZSBkZXRlY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9sbGluZyAob3B0cykge1xuICB2YXIgeGhyO1xuICB2YXIgeGQgPSBmYWxzZTtcbiAgdmFyIHhzID0gZmFsc2U7XG4gIHZhciBqc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGlzU1NMID0gJ2h0dHBzOicgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgIHZhciBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgIH1cblxuICAgIHhkID0gb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUgfHwgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgIHhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICB9XG5cbiAgb3B0cy54ZG9tYWluID0geGQ7XG4gIG9wdHMueHNjaGVtZSA9IHhzO1xuICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cyk7XG5cbiAgaWYgKCdvcGVuJyBpbiB4aHIgJiYgIW9wdHMuZm9yY2VKU09OUCkge1xuICAgIHJldHVybiBuZXcgWEhSKG9wdHMpO1xuICB9IGVsc2Uge1xuICAgIGlmICghanNvbnApIHRocm93IG5ldyBFcnJvcignSlNPTlAgZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gbmV3IEpTT05QKG9wdHMpO1xuICB9XG59XG4iLCIvKipcbiAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gKi9cblxudmFyIFBvbGxpbmcgPSByZXF1aXJlKCcuL3BvbGxpbmcnKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpTT05QUG9sbGluZztcblxuLyoqXG4gKiBDYWNoZWQgcmVndWxhciBleHByZXNzaW9ucy5cbiAqL1xuXG52YXIgck5ld2xpbmUgPSAvXFxuL2c7XG52YXIgckVzY2FwZWROZXdsaW5lID0gL1xcXFxuL2c7XG5cbi8qKlxuICogR2xvYmFsIEpTT05QIGNhbGxiYWNrcy5cbiAqL1xuXG52YXIgY2FsbGJhY2tzO1xuXG4vKipcbiAqIE5vb3AuXG4gKi9cblxuZnVuY3Rpb24gZW1wdHkgKCkgeyB9XG5cbi8qKlxuICogVW50aWwgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZ2xvYmFsIGlzIHNoaXBwZWQuXG4gKi9cbmZ1bmN0aW9uIGdsb2IgKCkge1xuICByZXR1cm4gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZlxuICAgICAgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvd1xuICAgICAgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xufVxuXG4vKipcbiAqIEpTT05QIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEpTT05QUG9sbGluZyAob3B0cykge1xuICBQb2xsaW5nLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG5cbiAgLy8gZGVmaW5lIGdsb2JhbCBjYWxsYmFja3MgYXJyYXkgaWYgbm90IHByZXNlbnRcbiAgLy8gd2UgZG8gdGhpcyBoZXJlIChsYXppbHkpIHRvIGF2b2lkIHVubmVlZGVkIGdsb2JhbCBwb2xsdXRpb25cbiAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAvLyB3ZSBuZWVkIHRvIGNvbnNpZGVyIG11bHRpcGxlIGVuZ2luZXMgaW4gdGhlIHNhbWUgcGFnZVxuICAgIHZhciBnbG9iYWwgPSBnbG9iKCk7XG4gICAgY2FsbGJhY2tzID0gZ2xvYmFsLl9fX2VpbyA9IChnbG9iYWwuX19fZWlvIHx8IFtdKTtcbiAgfVxuXG4gIC8vIGNhbGxiYWNrIGlkZW50aWZpZXJcbiAgdGhpcy5pbmRleCA9IGNhbGxiYWNrcy5sZW5ndGg7XG5cbiAgLy8gYWRkIGNhbGxiYWNrIHRvIGpzb25wIGdsb2JhbFxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uIChtc2cpIHtcbiAgICBzZWxmLm9uRGF0YShtc2cpO1xuICB9KTtcblxuICAvLyBhcHBlbmQgdG8gcXVlcnkgc3RyaW5nXG4gIHRoaXMucXVlcnkuaiA9IHRoaXMuaW5kZXg7XG5cbiAgLy8gcHJldmVudCBzcHVyaW91cyBlcnJvcnMgZnJvbSBiZWluZyBlbWl0dGVkIHdoZW4gdGhlIHdpbmRvdyBpcyB1bmxvYWRlZFxuICBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5zY3JpcHQpIHNlbGYuc2NyaXB0Lm9uZXJyb3IgPSBlbXB0eTtcbiAgICB9LCBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFBvbGxpbmcuXG4gKi9cblxuaW5oZXJpdChKU09OUFBvbGxpbmcsIFBvbGxpbmcpO1xuXG4vKlxuICogSlNPTlAgb25seSBzdXBwb3J0cyBiaW5hcnkgYXMgYmFzZTY0IGVuY29kZWQgc3RyaW5nc1xuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcblxuLyoqXG4gKiBDbG9zZXMgdGhlIHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnNjcmlwdCkge1xuICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLmZvcm0pIHtcbiAgICB0aGlzLmZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZvcm0pO1xuICAgIHRoaXMuZm9ybSA9IG51bGw7XG4gICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICB9XG5cbiAgUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9Qb2xsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gIH1cblxuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICBzY3JpcHQuc3JjID0gdGhpcy51cmkoKTtcbiAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHNlbGYub25FcnJvcignanNvbnAgcG9sbCBlcnJvcicsIGUpO1xuICB9O1xuXG4gIHZhciBpbnNlcnRBdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgaWYgKGluc2VydEF0KSB7XG4gICAgaW5zZXJ0QXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBpbnNlcnRBdCk7XG4gIH0gZWxzZSB7XG4gICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuICB0aGlzLnNjcmlwdCA9IHNjcmlwdDtcblxuICB2YXIgaXNVQWdlY2tvID0gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2dlY2tvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICBpZiAoaXNVQWdlY2tvKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgfSwgMTAwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXcml0ZXMgd2l0aCBhIGhpZGRlbiBpZnJhbWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvV3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZm4pIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICghdGhpcy5mb3JtKSB7XG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdmFyIGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHZhciBpZCA9IHRoaXMuaWZyYW1lSWQgPSAnZWlvX2lmcmFtZV8nICsgdGhpcy5pbmRleDtcbiAgICB2YXIgaWZyYW1lO1xuXG4gICAgZm9ybS5jbGFzc05hbWUgPSAnc29ja2V0aW8nO1xuICAgIGZvcm0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGZvcm0uc3R5bGUudG9wID0gJy0xMDAwcHgnO1xuICAgIGZvcm0uc3R5bGUubGVmdCA9ICctMTAwMHB4JztcbiAgICBmb3JtLnRhcmdldCA9IGlkO1xuICAgIGZvcm0ubWV0aG9kID0gJ1BPU1QnO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY2NlcHQtY2hhcnNldCcsICd1dGYtOCcpO1xuICAgIGFyZWEubmFtZSA9ICdkJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIHRoaXMuYXJlYSA9IGFyZWE7XG4gIH1cblxuICB0aGlzLmZvcm0uYWN0aW9uID0gdGhpcy51cmkoKTtcblxuICBmdW5jdGlvbiBjb21wbGV0ZSAoKSB7XG4gICAgaW5pdElmcmFtZSgpO1xuICAgIGZuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SWZyYW1lICgpIHtcbiAgICBpZiAoc2VsZi5pZnJhbWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlbGYuZm9ybS5yZW1vdmVDaGlsZChzZWxmLmlmcmFtZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNlbGYub25FcnJvcignanNvbnAgcG9sbGluZyBpZnJhbWUgcmVtb3ZhbCBlcnJvcicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBpZTYgZHluYW1pYyBpZnJhbWVzIHdpdGggdGFyZ2V0PVwiXCIgc3VwcG9ydCAodGhhbmtzIENocmlzIExhbWJhY2hlcilcbiAgICAgIHZhciBodG1sID0gJzxpZnJhbWUgc3JjPVwiamF2YXNjcmlwdDowXCIgbmFtZT1cIicgKyBzZWxmLmlmcmFtZUlkICsgJ1wiPic7XG4gICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgaWZyYW1lLm5hbWUgPSBzZWxmLmlmcmFtZUlkO1xuICAgICAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0OjAnO1xuICAgIH1cblxuICAgIGlmcmFtZS5pZCA9IHNlbGYuaWZyYW1lSWQ7XG5cbiAgICBzZWxmLmZvcm0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICBzZWxmLmlmcmFtZSA9IGlmcmFtZTtcbiAgfVxuXG4gIGluaXRJZnJhbWUoKTtcblxuICAvLyBlc2NhcGUgXFxuIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb252ZXJ0ZWQgaW50byBcXHJcXG4gYnkgc29tZSBVQXNcbiAgLy8gZG91YmxlIGVzY2FwaW5nIGlzIHJlcXVpcmVkIGZvciBlc2NhcGVkIG5ldyBsaW5lcyBiZWNhdXNlIHVuZXNjYXBpbmcgb2YgbmV3IGxpbmVzIGNhbiBiZSBkb25lIHNhZmVseSBvbiBzZXJ2ZXItc2lkZVxuICBkYXRhID0gZGF0YS5yZXBsYWNlKHJFc2NhcGVkTmV3bGluZSwgJ1xcXFxcXG4nKTtcbiAgdGhpcy5hcmVhLnZhbHVlID0gZGF0YS5yZXBsYWNlKHJOZXdsaW5lLCAnXFxcXG4nKTtcblxuICB0cnkge1xuICAgIHRoaXMuZm9ybS5zdWJtaXQoKTtcbiAgfSBjYXRjaCAoZSkge31cblxuICBpZiAodGhpcy5pZnJhbWUuYXR0YWNoRXZlbnQpIHtcbiAgICB0aGlzLmlmcmFtZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5pZnJhbWUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pZnJhbWUub25sb2FkID0gY29tcGxldGU7XG4gIH1cbn07XG4iLCIvKiBnbG9iYWwgYXR0YWNoRXZlbnQgKi9cblxuLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoJ3htbGh0dHByZXF1ZXN0LXNzbCcpO1xudmFyIFBvbGxpbmcgPSByZXF1aXJlKCcuL3BvbGxpbmcnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6cG9sbGluZy14aHInKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhIUjtcbm1vZHVsZS5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIEVtcHR5IGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gZW1wdHkgKCkge31cblxuLyoqXG4gKiBYSFIgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBYSFIgKG9wdHMpIHtcbiAgUG9sbGluZy5jYWxsKHRoaXMsIG9wdHMpO1xuICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gb3B0cy5yZXF1ZXN0VGltZW91dDtcbiAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBpc1NTTCA9ICdodHRwczonID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB0aGlzLnhkID0gKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUpIHx8XG4gICAgICBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgdGhpcy54cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgfVxufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gUG9sbGluZy5cbiAqL1xuXG5pbmhlcml0KFhIUiwgUG9sbGluZyk7XG5cbi8qKlxuICogWEhSIHN1cHBvcnRzIGJpbmFyeVxuICovXG5cblhIUi5wcm90b3R5cGUuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblhIUi5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICBvcHRzLnVyaSA9IHRoaXMudXJpKCk7XG4gIG9wdHMueGQgPSB0aGlzLnhkO1xuICBvcHRzLnhzID0gdGhpcy54cztcbiAgb3B0cy5hZ2VudCA9IHRoaXMuYWdlbnQgfHwgZmFsc2U7XG4gIG9wdHMuc3VwcG9ydHNCaW5hcnkgPSB0aGlzLnN1cHBvcnRzQmluYXJ5O1xuICBvcHRzLmVuYWJsZXNYRFIgPSB0aGlzLmVuYWJsZXNYRFI7XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gIG9wdHMua2V5ID0gdGhpcy5rZXk7XG4gIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICBvcHRzLmNhID0gdGhpcy5jYTtcbiAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuICBvcHRzLnJlcXVlc3RUaW1lb3V0ID0gdGhpcy5yZXF1ZXN0VGltZW91dDtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLmV4dHJhSGVhZGVycyA9IHRoaXMuZXh0cmFIZWFkZXJzO1xuXG4gIHJldHVybiBuZXcgUmVxdWVzdChvcHRzKTtcbn07XG5cbi8qKlxuICogU2VuZHMgZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5YSFIucHJvdG90eXBlLmRvV3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZm4pIHtcbiAgdmFyIGlzQmluYXJ5ID0gdHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnICYmIGRhdGEgIT09IHVuZGVmaW5lZDtcbiAgdmFyIHJlcSA9IHRoaXMucmVxdWVzdCh7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhLCBpc0JpbmFyeTogaXNCaW5hcnkgfSk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmVxLm9uKCdzdWNjZXNzJywgZm4pO1xuICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgIHNlbGYub25FcnJvcigneGhyIHBvc3QgZXJyb3InLCBlcnIpO1xuICB9KTtcbiAgdGhpcy5zZW5kWGhyID0gcmVxO1xufTtcblxuLyoqXG4gKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblhIUi5wcm90b3R5cGUuZG9Qb2xsID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygneGhyIHBvbGwnKTtcbiAgdmFyIHJlcSA9IHRoaXMucmVxdWVzdCgpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJlcS5vbignZGF0YScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgc2VsZi5vbkRhdGEoZGF0YSk7XG4gIH0pO1xuICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgIHNlbGYub25FcnJvcigneGhyIHBvbGwgZXJyb3InLCBlcnIpO1xuICB9KTtcbiAgdGhpcy5wb2xsWGhyID0gcmVxO1xufTtcblxuLyoqXG4gKiBSZXF1ZXN0IGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdCAob3B0cykge1xuICB0aGlzLm1ldGhvZCA9IG9wdHMubWV0aG9kIHx8ICdHRVQnO1xuICB0aGlzLnVyaSA9IG9wdHMudXJpO1xuICB0aGlzLnhkID0gISFvcHRzLnhkO1xuICB0aGlzLnhzID0gISFvcHRzLnhzO1xuICB0aGlzLmFzeW5jID0gZmFsc2UgIT09IG9wdHMuYXN5bmM7XG4gIHRoaXMuZGF0YSA9IHVuZGVmaW5lZCAhPT0gb3B0cy5kYXRhID8gb3B0cy5kYXRhIDogbnVsbDtcbiAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQ7XG4gIHRoaXMuaXNCaW5hcnkgPSBvcHRzLmlzQmluYXJ5O1xuICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gb3B0cy5zdXBwb3J0c0JpbmFyeTtcbiAgdGhpcy5lbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gb3B0cy5yZXF1ZXN0VGltZW91dDtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeDtcbiAgdGhpcy5rZXkgPSBvcHRzLmtleTtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQ7XG4gIHRoaXMuY2EgPSBvcHRzLmNhO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnM7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcblxuICB0aGlzLmNyZWF0ZSgpO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgWEhSIG9iamVjdCBhbmQgc2VuZHMgdGhlIHJlcXVlc3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3B0cyA9IHsgYWdlbnQ6IHRoaXMuYWdlbnQsIHhkb21haW46IHRoaXMueGQsIHhzY2hlbWU6IHRoaXMueHMsIGVuYWJsZXNYRFI6IHRoaXMuZW5hYmxlc1hEUiB9O1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICB2YXIgeGhyID0gdGhpcy54aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cyk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0cnkge1xuICAgIGRlYnVnKCd4aHIgb3BlbiAlczogJXMnLCB0aGlzLm1ldGhvZCwgdGhpcy51cmkpO1xuICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVyaSwgdGhpcy5hc3luYyk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmV4dHJhSGVhZGVycykge1xuICAgICAgICB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrICYmIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sodHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAodGhpcy5leHRyYUhlYWRlcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMuZXh0cmFIZWFkZXJzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgaWYgKCdQT1NUJyA9PT0gdGhpcy5tZXRob2QpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmlzQmluYXJ5KSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJyovKicpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAvLyBpZTYgY2hlY2tcbiAgICBpZiAoJ3dpdGhDcmVkZW50aWFscycgaW4geGhyKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXF1ZXN0VGltZW91dCkge1xuICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLnJlcXVlc3RUaW1lb3V0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLm9uTG9hZCgpO1xuICAgICAgfTtcbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLm9uRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnN1cHBvcnRzQmluYXJ5ICYmIGNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJykge1xuICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG4gICAgICAgIGlmICg0ICE9PSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICBpZiAoMjAwID09PSB4aHIuc3RhdHVzIHx8IDEyMjMgPT09IHhoci5zdGF0dXMpIHtcbiAgICAgICAgICBzZWxmLm9uTG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgYGVycm9yYCBldmVudCBoYW5kbGVyIHRoYXQncyB1c2VyLXNldFxuICAgICAgICAgIC8vIGRvZXMgbm90IHRocm93IGluIHRoZSBzYW1lIHRpY2sgYW5kIGdldHMgY2F1Z2h0IGhlcmVcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25FcnJvcih4aHIuc3RhdHVzKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWJ1ZygneGhyIGRhdGEgJXMnLCB0aGlzLmRhdGEpO1xuICAgIHhoci5zZW5kKHRoaXMuZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBOZWVkIHRvIGRlZmVyIHNpbmNlIC5jcmVhdGUoKSBpcyBjYWxsZWQgZGlyZWN0bHkgZmhyb20gdGhlIGNvbnN0cnVjdG9yXG4gICAgLy8gYW5kIHRodXMgdGhlICdlcnJvcicgZXZlbnQgY2FuIG9ubHkgYmUgb25seSBib3VuZCAqYWZ0ZXIqIHRoaXMgZXhjZXB0aW9uXG4gICAgLy8gb2NjdXJzLiAgVGhlcmVmb3JlLCBhbHNvLCB3ZSBjYW5ub3QgdGhyb3cgaGVyZSBhdCBhbGwuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLm9uRXJyb3IoZSk7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmluZGV4ID0gUmVxdWVzdC5yZXF1ZXN0c0NvdW50Kys7XG4gICAgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XSA9IHRoaXM7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdCgnc3VjY2VzcycpO1xuICB0aGlzLmNsZWFudXAoKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIGlmIHdlIGhhdmUgZGF0YS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmVtaXQoJ2RhdGEnLCBkYXRhKTtcbiAgdGhpcy5vblN1Y2Nlc3MoKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHRoaXMuY2xlYW51cCh0cnVlKTtcbn07XG5cbi8qKlxuICogQ2xlYW5zIHVwIGhvdXNlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoZnJvbUVycm9yKSB7XG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHRoaXMueGhyIHx8IG51bGwgPT09IHRoaXMueGhyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHhtbGh0dHByZXF1ZXN0XG4gIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgdGhpcy54aHIub25sb2FkID0gdGhpcy54aHIub25lcnJvciA9IGVtcHR5O1xuICB9IGVsc2Uge1xuICAgIHRoaXMueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5O1xuICB9XG5cbiAgaWYgKGZyb21FcnJvcikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnhoci5hYm9ydCgpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRlbGV0ZSBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdO1xuICB9XG5cbiAgdGhpcy54aHIgPSBudWxsO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBsb2FkLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRhdGE7XG4gIHRyeSB7XG4gICAgdmFyIGNvbnRlbnRUeXBlO1xuICAgIHRyeSB7XG4gICAgICBjb250ZW50VHlwZSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIGlmIChjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpIHtcbiAgICAgIGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZSB8fCB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5vbkVycm9yKGUpO1xuICB9XG4gIGlmIChudWxsICE9IGRhdGEpIHtcbiAgICB0aGlzLm9uRGF0YShkYXRhKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBpZiBpdCBoYXMgWERvbWFpblJlcXVlc3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuaGFzWERSID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy54cyAmJiB0aGlzLmVuYWJsZXNYRFI7XG59O1xuXG4vKipcbiAqIEFib3J0cyB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFudXAoKTtcbn07XG5cbi8qKlxuICogQWJvcnRzIHBlbmRpbmcgcmVxdWVzdHMgd2hlbiB1bmxvYWRpbmcgdGhlIHdpbmRvdy4gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudFxuICogbWVtb3J5IGxlYWtzIChlLmcuIHdoZW4gdXNpbmcgSUUpIGFuZCB0byBlbnN1cmUgdGhhdCBubyBzcHVyaW91cyBlcnJvciBpc1xuICogZW1pdHRlZC5cbiAqL1xuXG5SZXF1ZXN0LnJlcXVlc3RzQ291bnQgPSAwO1xuUmVxdWVzdC5yZXF1ZXN0cyA9IHt9O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAodHlwZW9mIGF0dGFjaEV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgdW5sb2FkSGFuZGxlcik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgdGVybWluYXRpb25FdmVudCA9ICdvbnBhZ2VoaWRlJyBpbiBzZWxmID8gJ3BhZ2VoaWRlJyA6ICd1bmxvYWQnO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGVybWluYXRpb25FdmVudCwgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubG9hZEhhbmRsZXIgKCkge1xuICBmb3IgKHZhciBpIGluIFJlcXVlc3QucmVxdWVzdHMpIHtcbiAgICBpZiAoUmVxdWVzdC5yZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1tpXS5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBUcmFuc3BvcnQgPSByZXF1aXJlKCcuLi90cmFuc3BvcnQnKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciB5ZWFzdCA9IHJlcXVpcmUoJ3llYXN0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGxpbmc7XG5cbi8qKlxuICogSXMgWEhSMiBzdXBwb3J0ZWQ/XG4gKi9cblxudmFyIGhhc1hIUjIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh7IHhkb21haW46IGZhbHNlIH0pO1xuICByZXR1cm4gbnVsbCAhPSB4aHIucmVzcG9uc2VUeXBlO1xufSkoKTtcblxuLyoqXG4gKiBQb2xsaW5nIGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUG9sbGluZyAob3B0cykge1xuICB2YXIgZm9yY2VCYXNlNjQgPSAob3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0KTtcbiAgaWYgKCFoYXNYSFIyIHx8IGZvcmNlQmFzZTY0KSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG4gIFRyYW5zcG9ydC5jYWxsKHRoaXMsIG9wdHMpO1xufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gVHJhbnNwb3J0LlxuICovXG5cbmluaGVyaXQoUG9sbGluZywgVHJhbnNwb3J0KTtcblxuLyoqXG4gKiBUcmFuc3BvcnQgbmFtZS5cbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5uYW1lID0gJ3BvbGxpbmcnO1xuXG4vKipcbiAqIE9wZW5zIHRoZSBzb2NrZXQgKHRyaWdnZXJzIHBvbGxpbmcpLiBXZSB3cml0ZSBhIFBJTkcgbWVzc2FnZSB0byBkZXRlcm1pbmVcbiAqIHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBvcGVuLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLmRvT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wb2xsKCk7XG59O1xuXG4vKipcbiAqIFBhdXNlcyBwb2xsaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHVwb24gYnVmZmVycyBhcmUgZmx1c2hlZCBhbmQgdHJhbnNwb3J0IGlzIHBhdXNlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAob25QYXVzZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy5yZWFkeVN0YXRlID0gJ3BhdXNpbmcnO1xuXG4gIGZ1bmN0aW9uIHBhdXNlICgpIHtcbiAgICBkZWJ1ZygncGF1c2VkJyk7XG4gICAgc2VsZi5yZWFkeVN0YXRlID0gJ3BhdXNlZCc7XG4gICAgb25QYXVzZSgpO1xuICB9XG5cbiAgaWYgKHRoaXMucG9sbGluZyB8fCAhdGhpcy53cml0YWJsZSkge1xuICAgIHZhciB0b3RhbCA9IDA7XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nKSB7XG4gICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgdG90YWwrKztcbiAgICAgIHRoaXMub25jZSgncG9sbENvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWJ1ZygncHJlLXBhdXNlIHBvbGxpbmcgY29tcGxldGUnKTtcbiAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLndyaXRhYmxlKSB7XG4gICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSB3cml0aW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgdG90YWwrKztcbiAgICAgIHRoaXMub25jZSgnZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlYnVnKCdwcmUtcGF1c2Ugd3JpdGluZyBjb21wbGV0ZScpO1xuICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGF1c2UoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGFydHMgcG9sbGluZyBjeWNsZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblBvbGxpbmcucHJvdG90eXBlLnBvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdwb2xsaW5nJyk7XG4gIHRoaXMucG9sbGluZyA9IHRydWU7XG4gIHRoaXMuZG9Qb2xsKCk7XG4gIHRoaXMuZW1pdCgncG9sbCcpO1xufTtcblxuLyoqXG4gKiBPdmVybG9hZHMgb25EYXRhIHRvIGRldGVjdCBwYXlsb2Fkcy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGRlYnVnKCdwb2xsaW5nIGdvdCBkYXRhICVzJywgZGF0YSk7XG4gIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChwYWNrZXQsIGluZGV4LCB0b3RhbCkge1xuICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICBpZiAoJ29wZW5pbmcnID09PSBzZWxmLnJlYWR5U3RhdGUpIHtcbiAgICAgIHNlbGYub25PcGVuKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgaXRzIGEgY2xvc2UgcGFja2V0LCB3ZSBjbG9zZSB0aGUgb25nb2luZyByZXF1ZXN0c1xuICAgIGlmICgnY2xvc2UnID09PSBwYWNrZXQudHlwZSkge1xuICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlIGJ5cGFzcyBvbkRhdGEgYW5kIGhhbmRsZSB0aGUgbWVzc2FnZVxuICAgIHNlbGYub25QYWNrZXQocGFja2V0KTtcbiAgfTtcblxuICAvLyBkZWNvZGUgcGF5bG9hZFxuICBwYXJzZXIuZGVjb2RlUGF5bG9hZChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlLCBjYWxsYmFjayk7XG5cbiAgLy8gaWYgYW4gZXZlbnQgZGlkIG5vdCB0cmlnZ2VyIGNsb3NpbmdcbiAgaWYgKCdjbG9zZWQnICE9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBpZiB3ZSBnb3QgZGF0YSB3ZSdyZSBub3QgcG9sbGluZ1xuICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncG9sbENvbXBsZXRlJyk7XG5cbiAgICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucG9sbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygnaWdub3JpbmcgcG9sbCAtIHRyYW5zcG9ydCBzdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBGb3IgcG9sbGluZywgc2VuZCBhIGNsb3NlIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gY2xvc2UgKCkge1xuICAgIGRlYnVnKCd3cml0aW5nIGNsb3NlIHBhY2tldCcpO1xuICAgIHNlbGYud3JpdGUoW3sgdHlwZTogJ2Nsb3NlJyB9XSk7XG4gIH1cblxuICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1ZygndHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nJyk7XG4gICAgY2xvc2UoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgZGVidWcoJ3RyYW5zcG9ydCBub3Qgb3BlbiAtIGRlZmVycmluZyBjbG9zZScpO1xuICAgIHRoaXMub25jZSgnb3BlbicsIGNsb3NlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgdmFyIGNhbGxiYWNrZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgc2VsZi5lbWl0KCdkcmFpbicpO1xuICB9O1xuXG4gIHBhcnNlci5lbmNvZGVQYXlsb2FkKHBhY2tldHMsIHRoaXMuc3VwcG9ydHNCaW5hcnksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgc2VsZi5kb1dyaXRlKGRhdGEsIGNhbGxiYWNrZm4pO1xuICB9KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS51cmkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gIHZhciBzY2hlbWEgPSB0aGlzLnNlY3VyZSA/ICdodHRwcycgOiAnaHR0cCc7XG4gIHZhciBwb3J0ID0gJyc7XG5cbiAgLy8gY2FjaGUgYnVzdGluZyBpcyBmb3JjZWRcbiAgaWYgKGZhbHNlICE9PSB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgcXVlcnlbdGhpcy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICB9XG5cbiAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmICFxdWVyeS5zaWQpIHtcbiAgICBxdWVyeS5iNjQgPSAxO1xuICB9XG5cbiAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgaWYgKHRoaXMucG9ydCAmJiAoKCdodHRwcycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAoJ2h0dHAnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDgwKSkpIHtcbiAgICBwb3J0ID0gJzonICsgdGhpcy5wb3J0O1xuICB9XG5cbiAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgdmFyIGlwdjYgPSB0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHJldHVybiBzY2hlbWEgKyAnOi8vJyArIChpcHY2ID8gJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyA6IHRoaXMuaG9zdG5hbWUpICsgcG9ydCArIHRoaXMucGF0aCArIHF1ZXJ5O1xufTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi4vdHJhbnNwb3J0Jyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgeWVhc3QgPSByZXF1aXJlKCd5ZWFzdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDp3ZWJzb2NrZXQnKTtcblxudmFyIEJyb3dzZXJXZWJTb2NrZXQsIE5vZGVXZWJTb2NrZXQ7XG5cbmlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICBCcm93c2VyV2ViU29ja2V0ID0gV2ViU29ja2V0O1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgQnJvd3NlcldlYlNvY2tldCA9IHNlbGYuV2ViU29ja2V0IHx8IHNlbGYuTW96V2ViU29ja2V0O1xufSBlbHNlIHtcbiAgdHJ5IHtcbiAgICBOb2RlV2ViU29ja2V0ID0gcmVxdWlyZSgnd3MnKTtcbiAgfSBjYXRjaCAoZSkgeyB9XG59XG5cbi8qKlxuICogR2V0IGVpdGhlciB0aGUgYFdlYlNvY2tldGAgb3IgYE1veldlYlNvY2tldGAgZ2xvYmFsc1xuICogaW4gdGhlIGJyb3dzZXIgb3IgdHJ5IHRvIHJlc29sdmUgV2ViU29ja2V0LWNvbXBhdGlibGVcbiAqIGludGVyZmFjZSBleHBvc2VkIGJ5IGB3c2AgZm9yIE5vZGUtbGlrZSBlbnZpcm9ubWVudC5cbiAqL1xuXG52YXIgV2ViU29ja2V0SW1wbCA9IEJyb3dzZXJXZWJTb2NrZXQgfHwgTm9kZVdlYlNvY2tldDtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdTO1xuXG4vKipcbiAqIFdlYlNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSB7T2JqZWN0fSBjb25uZWN0aW9uIG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gV1MgKG9wdHMpIHtcbiAgdmFyIGZvcmNlQmFzZTY0ID0gKG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NCk7XG4gIGlmIChmb3JjZUJhc2U2NCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZTtcbiAgdGhpcy51c2luZ0Jyb3dzZXJXZWJTb2NrZXQgPSBCcm93c2VyV2ViU29ja2V0ICYmICFvcHRzLmZvcmNlTm9kZTtcbiAgdGhpcy5wcm90b2NvbHMgPSBvcHRzLnByb3RvY29scztcbiAgaWYgKCF0aGlzLnVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgIFdlYlNvY2tldEltcGwgPSBOb2RlV2ViU29ja2V0O1xuICB9XG4gIFRyYW5zcG9ydC5jYWxsKHRoaXMsIG9wdHMpO1xufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gVHJhbnNwb3J0LlxuICovXG5cbmluaGVyaXQoV1MsIFRyYW5zcG9ydCk7XG5cbi8qKlxuICogVHJhbnNwb3J0IG5hbWUuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5XUy5wcm90b3R5cGUubmFtZSA9ICd3ZWJzb2NrZXQnO1xuXG4vKlxuICogV2ViU29ja2V0cyBzdXBwb3J0IGJpbmFyeVxuICovXG5cbldTLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG5cbi8qKlxuICogT3BlbnMgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5kb09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdXJpID0gdGhpcy51cmkoKTtcbiAgdmFyIHByb3RvY29scyA9IHRoaXMucHJvdG9jb2xzO1xuICB2YXIgb3B0cyA9IHtcbiAgICBhZ2VudDogdGhpcy5hZ2VudCxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZVxuICB9O1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgb3B0cy5oZWFkZXJzID0gdGhpcy5leHRyYUhlYWRlcnM7XG4gIH1cbiAgaWYgKHRoaXMubG9jYWxBZGRyZXNzKSB7XG4gICAgb3B0cy5sb2NhbEFkZHJlc3MgPSB0aGlzLmxvY2FsQWRkcmVzcztcbiAgfVxuXG4gIHRyeSB7XG4gICAgdGhpcy53cyA9XG4gICAgICB0aGlzLnVzaW5nQnJvd3NlcldlYlNvY2tldCAmJiAhdGhpcy5pc1JlYWN0TmF0aXZlXG4gICAgICAgID8gcHJvdG9jb2xzXG4gICAgICAgICAgPyBuZXcgV2ViU29ja2V0SW1wbCh1cmksIHByb3RvY29scylcbiAgICAgICAgICA6IG5ldyBXZWJTb2NrZXRJbXBsKHVyaSlcbiAgICAgICAgOiBuZXcgV2ViU29ja2V0SW1wbCh1cmksIHByb3RvY29scywgb3B0cyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxuXG4gIGlmICh0aGlzLndzLmJpbmFyeVR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLndzLnN1cHBvcnRzICYmIHRoaXMud3Muc3VwcG9ydHMuYmluYXJ5KSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG4gICAgdGhpcy53cy5iaW5hcnlUeXBlID0gJ25vZGVidWZmZXInO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gIH1cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG59O1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLndzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uT3BlbigpO1xuICB9O1xuICB0aGlzLndzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbkNsb3NlKCk7XG4gIH07XG4gIHRoaXMud3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgc2VsZi5vbkRhdGEoZXYuZGF0YSk7XG4gIH07XG4gIHRoaXMud3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgc2VsZi5vbkVycm9yKCd3ZWJzb2NrZXQgZXJyb3InLCBlKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JpdGVzIGRhdGEgdG8gc29ja2V0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IG9mIHBhY2tldHMuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAvLyBlbmNvZGVQYWNrZXQgZWZmaWNpZW50IGFzIGl0IHVzZXMgV1MgZnJhbWluZ1xuICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gIHZhciB0b3RhbCA9IHBhY2tldHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRvdGFsOyBpIDwgbDsgaSsrKSB7XG4gICAgKGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgIHBhcnNlci5lbmNvZGVQYWNrZXQocGFja2V0LCBzZWxmLnN1cHBvcnRzQmluYXJ5LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoIXNlbGYudXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgLy8gYWx3YXlzIGNyZWF0ZSBhIG5ldyBvYmplY3QgKEdILTQzNylcbiAgICAgICAgICB2YXIgb3B0cyA9IHt9O1xuICAgICAgICAgIGlmIChwYWNrZXQub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IHBhY2tldC5vcHRpb25zLmNvbXByZXNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxmLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gJ3N0cmluZycgPT09IHR5cGVvZiBkYXRhID8gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSkgOiBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPCBzZWxmLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29tZXRpbWVzIHRoZSB3ZWJzb2NrZXQgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnV0IHRoZSBicm93c2VyIGRpZG4ndFxuICAgICAgICAvLyBoYXZlIGEgY2hhbmNlIG9mIGluZm9ybWluZyB1cyBhYm91dCBpdCB5ZXQsIGluIHRoYXQgY2FzZSBzZW5kIHdpbGxcbiAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoc2VsZi51c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIC8vIFR5cGVFcnJvciBpcyB0aHJvd24gd2hlbiBwYXNzaW5nIHRoZSBzZWNvbmQgYXJndW1lbnQgb24gU2FmYXJpXG4gICAgICAgICAgICBzZWxmLndzLnNlbmQoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYud3Muc2VuZChkYXRhLCBvcHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBkZWJ1Zygnd2Vic29ja2V0IGNsb3NlZCBiZWZvcmUgb25jbG9zZSBldmVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLS10b3RhbCB8fCBkb25lKCk7XG4gICAgICB9KTtcbiAgICB9KShwYWNrZXRzW2ldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUgKCkge1xuICAgIHNlbGYuZW1pdCgnZmx1c2gnKTtcblxuICAgIC8vIGZha2UgZHJhaW5cbiAgICAvLyBkZWZlciB0byBuZXh0IHRpY2sgdG8gYWxsb3cgU29ja2V0IHRvIGNsZWFyIHdyaXRlQnVmZmVyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIHNlbGYuZW1pdCgnZHJhaW4nKTtcbiAgICB9LCAwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBjbG9zZVxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogQ2xvc2VzIHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLndzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS51cmkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gIHZhciBzY2hlbWEgPSB0aGlzLnNlY3VyZSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHBvcnQgPSAnJztcblxuICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICBpZiAodGhpcy5wb3J0ICYmICgoJ3dzcycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICgnd3MnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDgwKSkpIHtcbiAgICBwb3J0ID0gJzonICsgdGhpcy5wb3J0O1xuICB9XG5cbiAgLy8gYXBwZW5kIHRpbWVzdGFtcCB0byBVUklcbiAgaWYgKHRoaXMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICBxdWVyeVt0aGlzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gIH1cblxuICAvLyBjb21tdW5pY2F0ZSBiaW5hcnkgc3VwcG9ydCBjYXBhYmlsaXRpZXNcbiAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcXVlcnkuYjY0ID0gMTtcbiAgfVxuXG4gIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgcXVlcnkgPSAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIHZhciBpcHY2ID0gdGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgIT09IC0xO1xuICByZXR1cm4gc2NoZW1hICsgJzovLycgKyAoaXB2NiA/ICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScgOiB0aGlzLmhvc3RuYW1lKSArIHBvcnQgKyB0aGlzLnBhdGggKyBxdWVyeTtcbn07XG5cbi8qKlxuICogRmVhdHVyZSBkZXRlY3Rpb24gZm9yIFdlYlNvY2tldC5cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoaXMgdHJhbnNwb3J0IGlzIGF2YWlsYWJsZS5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuV1MucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISFXZWJTb2NrZXRJbXBsICYmICEoJ19faW5pdGlhbGl6ZScgaW4gV2ViU29ja2V0SW1wbCAmJiB0aGlzLm5hbWUgPT09IFdTLnByb3RvdHlwZS5uYW1lKTtcbn07XG4iLCIvLyBicm93c2VyIHNoaW0gZm9yIHhtbGh0dHByZXF1ZXN0IG1vZHVsZVxuXG52YXIgaGFzQ09SUyA9IHJlcXVpcmUoJ2hhcy1jb3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIHhkb21haW4gPSBvcHRzLnhkb21haW47XG5cbiAgLy8gc2NoZW1lIG11c3QgYmUgc2FtZSB3aGVuIHVzaWduIFhEb21haW5SZXF1ZXN0XG4gIC8vIGh0dHA6Ly9ibG9ncy5tc2RuLmNvbS9iL2llaW50ZXJuYWxzL2FyY2hpdmUvMjAxMC8wNS8xMy94ZG9tYWlucmVxdWVzdC1yZXN0cmljdGlvbnMtbGltaXRhdGlvbnMtYW5kLXdvcmthcm91bmRzLmFzcHhcbiAgdmFyIHhzY2hlbWUgPSBvcHRzLnhzY2hlbWU7XG5cbiAgLy8gWERvbWFpblJlcXVlc3QgaGFzIGEgZmxvdyBvZiBub3Qgc2VuZGluZyBjb29raWUsIHRoZXJlZm9yZSBpdCBzaG91bGQgYmUgZGlzYWJsZWQgYXMgYSBkZWZhdWx0LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9lbmdpbmUuaW8tY2xpZW50L3B1bGwvMjE3XG4gIHZhciBlbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gIC8vIFhNTEh0dHBSZXF1ZXN0IGNhbiBiZSBkaXNhYmxlZCBvbiBJRVxuICB0cnkge1xuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICYmICgheGRvbWFpbiB8fCBoYXNDT1JTKSkge1xuICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgLy8gVXNlIFhEb21haW5SZXF1ZXN0IGZvciBJRTggaWYgZW5hYmxlc1hEUiBpcyB0cnVlXG4gIC8vIGJlY2F1c2UgbG9hZGluZyBiYXIga2VlcHMgZmxhc2hpbmcgd2hlbiB1c2luZyBqc29ucC1wb2xsaW5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95dWppb3Nha2Evc29ja2UuaW8taWU4LWxvYWRpbmctZXhhbXBsZVxuICB0cnkge1xuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICYmICF4c2NoZW1lICYmIGVuYWJsZXNYRFIpIHtcbiAgICAgIHJldHVybiBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuXG4gIGlmICgheGRvbWFpbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IHNlbGZbWydBY3RpdmUnXS5jb25jYXQoJ09iamVjdCcpLmpvaW4oJ1gnKV0oJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH1cbn07XG4iLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICcjMDAwMENDJywgJyMwMDAwRkYnLCAnIzAwMzNDQycsICcjMDAzM0ZGJywgJyMwMDY2Q0MnLCAnIzAwNjZGRicsICcjMDA5OUNDJyxcbiAgJyMwMDk5RkYnLCAnIzAwQ0MwMCcsICcjMDBDQzMzJywgJyMwMENDNjYnLCAnIzAwQ0M5OScsICcjMDBDQ0NDJywgJyMwMENDRkYnLFxuICAnIzMzMDBDQycsICcjMzMwMEZGJywgJyMzMzMzQ0MnLCAnIzMzMzNGRicsICcjMzM2NkNDJywgJyMzMzY2RkYnLCAnIzMzOTlDQycsXG4gICcjMzM5OUZGJywgJyMzM0NDMDAnLCAnIzMzQ0MzMycsICcjMzNDQzY2JywgJyMzM0NDOTknLCAnIzMzQ0NDQycsICcjMzNDQ0ZGJyxcbiAgJyM2NjAwQ0MnLCAnIzY2MDBGRicsICcjNjYzM0NDJywgJyM2NjMzRkYnLCAnIzY2Q0MwMCcsICcjNjZDQzMzJywgJyM5OTAwQ0MnLFxuICAnIzk5MDBGRicsICcjOTkzM0NDJywgJyM5OTMzRkYnLCAnIzk5Q0MwMCcsICcjOTlDQzMzJywgJyNDQzAwMDAnLCAnI0NDMDAzMycsXG4gICcjQ0MwMDY2JywgJyNDQzAwOTknLCAnI0NDMDBDQycsICcjQ0MwMEZGJywgJyNDQzMzMDAnLCAnI0NDMzMzMycsICcjQ0MzMzY2JyxcbiAgJyNDQzMzOTknLCAnI0NDMzNDQycsICcjQ0MzM0ZGJywgJyNDQzY2MDAnLCAnI0NDNjYzMycsICcjQ0M5OTAwJywgJyNDQzk5MzMnLFxuICAnI0NDQ0MwMCcsICcjQ0NDQzMzJywgJyNGRjAwMDAnLCAnI0ZGMDAzMycsICcjRkYwMDY2JywgJyNGRjAwOTknLCAnI0ZGMDBDQycsXG4gICcjRkYwMEZGJywgJyNGRjMzMDAnLCAnI0ZGMzMzMycsICcjRkYzMzY2JywgJyNGRjMzOTknLCAnI0ZGMzNDQycsICcjRkYzM0ZGJyxcbiAgJyNGRjY2MDAnLCAnI0ZGNjYzMycsICcjRkY5OTAwJywgJyNGRjk5MzMnLCAnI0ZGQ0MwMCcsICcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICovXG5leHBvcnRzLmluc3RhbmNlcyA9IFtdO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICB2YXIgcHJldlRpbWU7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG4gIGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIGV4cG9ydHMuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHZhciBpbmRleCA9IGV4cG9ydHMuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBleHBvcnRzLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBpO1xuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhwb3J0cy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBleHBvcnRzLmluc3RhbmNlc1tpXTtcbiAgICBpbnN0YW5jZS5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG52YXIgaGFzQmluYXJ5ID0gcmVxdWlyZSgnaGFzLWJpbmFyeTInKTtcbnZhciBzbGljZUJ1ZmZlciA9IHJlcXVpcmUoJ2FycmF5YnVmZmVyLnNsaWNlJyk7XG52YXIgYWZ0ZXIgPSByZXF1aXJlKCdhZnRlcicpO1xudmFyIHV0ZjggPSByZXF1aXJlKCcuL3V0ZjgnKTtcblxudmFyIGJhc2U2NGVuY29kZXI7XG5pZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykge1xuICBiYXNlNjRlbmNvZGVyID0gcmVxdWlyZSgnYmFzZTY0LWFycmF5YnVmZmVyJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UgYXJlIHJ1bm5pbmcgYW4gYW5kcm9pZCBicm93c2VyLiBUaGF0IHJlcXVpcmVzIHVzIHRvIHVzZVxuICogQXJyYXlCdWZmZXIgd2l0aCBwb2xsaW5nIHRyYW5zcG9ydHMuLi5cbiAqXG4gKiBodHRwOi8vZ2hpbmRhLm5ldC9qcGVnLWJsb2ItYWpheC1hbmRyb2lkL1xuICovXG5cbnZhciBpc0FuZHJvaWQgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvQW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gUGhhbnRvbUpTLlxuICogVXBsb2FkaW5nIGEgQmxvYiB3aXRoIFBoYW50b21KUyBkb2VzIG5vdCB3b3JrIGNvcnJlY3RseSwgYXMgcmVwb3J0ZWQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcml5YS9waGFudG9tanMvaXNzdWVzLzExMzk1XG4gKiBAdHlwZSBib29sZWFuXG4gKi9cbnZhciBpc1BoYW50b21KUyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9QaGFudG9tSlMvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIFdoZW4gdHJ1ZSwgYXZvaWRzIHVzaW5nIEJsb2JzIHRvIGVuY29kZSBwYXlsb2Fkcy5cbiAqIEB0eXBlIGJvb2xlYW5cbiAqL1xudmFyIGRvbnRTZW5kQmxvYnMgPSBpc0FuZHJvaWQgfHwgaXNQaGFudG9tSlM7XG5cbi8qKlxuICogQ3VycmVudCBwcm90b2NvbCB2ZXJzaW9uLlxuICovXG5cbmV4cG9ydHMucHJvdG9jb2wgPSAzO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlcy5cbiAqL1xuXG52YXIgcGFja2V0cyA9IGV4cG9ydHMucGFja2V0cyA9IHtcbiAgICBvcGVuOiAgICAgMCAgICAvLyBub24td3NcbiAgLCBjbG9zZTogICAgMSAgICAvLyBub24td3NcbiAgLCBwaW5nOiAgICAgMlxuICAsIHBvbmc6ICAgICAzXG4gICwgbWVzc2FnZTogIDRcbiAgLCB1cGdyYWRlOiAgNVxuICAsIG5vb3A6ICAgICA2XG59O1xuXG52YXIgcGFja2V0c2xpc3QgPSBrZXlzKHBhY2tldHMpO1xuXG4vKipcbiAqIFByZW1hZGUgZXJyb3IgcGFja2V0LlxuICovXG5cbnZhciBlcnIgPSB7IHR5cGU6ICdlcnJvcicsIGRhdGE6ICdwYXJzZXIgZXJyb3InIH07XG5cbi8qKlxuICogQ3JlYXRlIGEgYmxvYiBhcGkgZXZlbiBmb3IgYmxvYiBidWlsZGVyIHdoZW4gdmVuZG9yIHByZWZpeGVzIGV4aXN0XG4gKi9cblxudmFyIEJsb2IgPSByZXF1aXJlKCdibG9iJyk7XG5cbi8qKlxuICogRW5jb2RlcyBhIHBhY2tldC5cbiAqXG4gKiAgICAgPHBhY2tldCB0eXBlIGlkPiBbIDxkYXRhPiBdXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgNWhlbGxvIHdvcmxkXG4gKiAgICAgM1xuICogICAgIDRcbiAqXG4gKiBCaW5hcnkgaXMgZW5jb2RlZCBpbiBhbiBpZGVudGljYWwgcHJpbmNpcGxlXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgdXRmOGVuY29kZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0JpbmFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdXRmOGVuY29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gdXRmOGVuY29kZTtcbiAgICB1dGY4ZW5jb2RlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBkYXRhID0gKHBhY2tldC5kYXRhID09PSB1bmRlZmluZWQpXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHBhY2tldC5kYXRhLmJ1ZmZlciB8fCBwYWNrZXQuZGF0YTtcblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZW5jb2RlQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIHJldHVybiBlbmNvZGVCbG9iKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8vIG1pZ2h0IGJlIGFuIG9iamVjdCB3aXRoIHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBkYXRhQXNCYXNlNjRTdHJpbmcgfVxuICBpZiAoZGF0YSAmJiBkYXRhLmJhc2U2NCkge1xuICAgIHJldHVybiBlbmNvZGVCYXNlNjRPYmplY3QocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICAvLyBTZW5kaW5nIGRhdGEgYXMgYSB1dGYtOCBzdHJpbmdcbiAgdmFyIGVuY29kZWQgPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcblxuICAvLyBkYXRhIGZyYWdtZW50IGlzIG9wdGlvbmFsXG4gIGlmICh1bmRlZmluZWQgIT09IHBhY2tldC5kYXRhKSB7XG4gICAgZW5jb2RlZCArPSB1dGY4ZW5jb2RlID8gdXRmOC5lbmNvZGUoU3RyaW5nKHBhY2tldC5kYXRhKSwgeyBzdHJpY3Q6IGZhbHNlIH0pIDogU3RyaW5nKHBhY2tldC5kYXRhKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjaygnJyArIGVuY29kZWQpO1xuXG59O1xuXG5mdW5jdGlvbiBlbmNvZGVCYXNlNjRPYmplY3QocGFja2V0LCBjYWxsYmFjaykge1xuICAvLyBwYWNrZXQgZGF0YSBpcyBhbiBvYmplY3QgeyBiYXNlNjQ6IHRydWUsIGRhdGE6IGRhdGFBc0Jhc2U2NFN0cmluZyB9XG4gIHZhciBtZXNzYWdlID0gJ2InICsgZXhwb3J0cy5wYWNrZXRzW3BhY2tldC50eXBlXSArIHBhY2tldC5kYXRhLmRhdGE7XG4gIHJldHVybiBjYWxsYmFjayhtZXNzYWdlKTtcbn1cblxuLyoqXG4gKiBFbmNvZGUgcGFja2V0IGhlbHBlcnMgZm9yIGJpbmFyeSB0eXBlc1xuICovXG5cbmZ1bmN0aW9uIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgZGF0YSA9IHBhY2tldC5kYXRhO1xuICB2YXIgY29udGVudEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIHZhciByZXN1bHRCdWZmZXIgPSBuZXcgVWludDhBcnJheSgxICsgZGF0YS5ieXRlTGVuZ3RoKTtcblxuICByZXN1bHRCdWZmZXJbMF0gPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRCdWZmZXJbaSsxXSA9IGNvbnRlbnRBcnJheVtpXTtcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjayhyZXN1bHRCdWZmZXIuYnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIGZyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHsgdHlwZTogcGFja2V0LnR5cGUsIGRhdGE6IGZyLnJlc3VsdCB9LCBzdXBwb3J0c0JpbmFyeSwgdHJ1ZSwgY2FsbGJhY2spO1xuICB9O1xuICByZXR1cm4gZnIucmVhZEFzQXJyYXlCdWZmZXIocGFja2V0LmRhdGEpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVCbG9iKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoZG9udFNlbmRCbG9icykge1xuICAgIHJldHVybiBlbmNvZGVCbG9iQXNBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gIGxlbmd0aFswXSA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtsZW5ndGguYnVmZmVyLCBwYWNrZXQuZGF0YV0pO1xuXG4gIHJldHVybiBjYWxsYmFjayhibG9iKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIGEgcGFja2V0IHdpdGggYmluYXJ5IGRhdGEgaW4gYSBiYXNlNjQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCwgaGFzIGB0eXBlYCBhbmQgYGRhdGFgXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGJhc2U2NCBlbmNvZGVkIG1lc3NhZ2VcbiAqL1xuXG5leHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCwgY2FsbGJhY2spIHtcbiAgdmFyIG1lc3NhZ2UgPSAnYicgKyBleHBvcnRzLnBhY2tldHNbcGFja2V0LnR5cGVdO1xuICBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHBhY2tldC5kYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgZnIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYjY0ID0gZnIucmVzdWx0LnNwbGl0KCcsJylbMV07XG4gICAgICBjYWxsYmFjayhtZXNzYWdlICsgYjY0KTtcbiAgICB9O1xuICAgIHJldHVybiBmci5yZWFkQXNEYXRhVVJMKHBhY2tldC5kYXRhKTtcbiAgfVxuXG4gIHZhciBiNjRkYXRhO1xuICB0cnkge1xuICAgIGI2NGRhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KHBhY2tldC5kYXRhKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpUGhvbmUgU2FmYXJpIGRvZXNuJ3QgbGV0IHlvdSBhcHBseSB3aXRoIHR5cGVkIGFycmF5c1xuICAgIHZhciB0eXBlZCA9IG5ldyBVaW50OEFycmF5KHBhY2tldC5kYXRhKTtcbiAgICB2YXIgYmFzaWMgPSBuZXcgQXJyYXkodHlwZWQubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBiYXNpY1tpXSA9IHR5cGVkW2ldO1xuICAgIH1cbiAgICBiNjRkYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBiYXNpYyk7XG4gIH1cbiAgbWVzc2FnZSArPSBidG9hKGI2NGRhdGEpO1xuICByZXR1cm4gY2FsbGJhY2sobWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIERlY29kZXMgYSBwYWNrZXQuIENoYW5nZXMgZm9ybWF0IHRvIEJsb2IgaWYgcmVxdWVzdGVkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBgdHlwZWAgYW5kIGBkYXRhYCAoaWYgYW55KVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVQYWNrZXQgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgdXRmOGRlY29kZSkge1xuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxuICAvLyBTdHJpbmcgZGF0YVxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGRhdGEuY2hhckF0KDApID09PSAnYicpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlY29kZUJhc2U2NFBhY2tldChkYXRhLnN1YnN0cigxKSwgYmluYXJ5VHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKHV0ZjhkZWNvZGUpIHtcbiAgICAgIGRhdGEgPSB0cnlEZWNvZGUoZGF0YSk7XG4gICAgICBpZiAoZGF0YSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHR5cGUgPSBkYXRhLmNoYXJBdCgwKTtcblxuICAgIGlmIChOdW1iZXIodHlwZSkgIT0gdHlwZSB8fCAhcGFja2V0c2xpc3RbdHlwZV0pIHtcbiAgICAgIHJldHVybiBlcnI7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0sIGRhdGE6IGRhdGEuc3Vic3RyaW5nKDEpIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIGFzQXJyYXkgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgdmFyIHR5cGUgPSBhc0FycmF5WzBdO1xuICB2YXIgcmVzdCA9IHNsaWNlQnVmZmVyKGRhdGEsIDEpO1xuICBpZiAoQmxvYiAmJiBiaW5hcnlUeXBlID09PSAnYmxvYicpIHtcbiAgICByZXN0ID0gbmV3IEJsb2IoW3Jlc3RdKTtcbiAgfVxuICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSwgZGF0YTogcmVzdCB9O1xufTtcblxuZnVuY3Rpb24gdHJ5RGVjb2RlKGRhdGEpIHtcbiAgdHJ5IHtcbiAgICBkYXRhID0gdXRmOC5kZWNvZGUoZGF0YSwgeyBzdHJpY3Q6IGZhbHNlIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIERlY29kZXMgYSBwYWNrZXQgZW5jb2RlZCBpbiBhIGJhc2U2NCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYmFzZTY0IGVuY29kZWQgbWVzc2FnZVxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGB0eXBlYCBhbmQgYGRhdGFgIChpZiBhbnkpXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVCYXNlNjRQYWNrZXQgPSBmdW5jdGlvbihtc2csIGJpbmFyeVR5cGUpIHtcbiAgdmFyIHR5cGUgPSBwYWNrZXRzbGlzdFttc2cuY2hhckF0KDApXTtcbiAgaWYgKCFiYXNlNjRlbmNvZGVyKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogdHlwZSwgZGF0YTogeyBiYXNlNjQ6IHRydWUsIGRhdGE6IG1zZy5zdWJzdHIoMSkgfSB9O1xuICB9XG5cbiAgdmFyIGRhdGEgPSBiYXNlNjRlbmNvZGVyLmRlY29kZShtc2cuc3Vic3RyKDEpKTtcblxuICBpZiAoYmluYXJ5VHlwZSA9PT0gJ2Jsb2InICYmIEJsb2IpIHtcbiAgICBkYXRhID0gbmV3IEJsb2IoW2RhdGFdKTtcbiAgfVxuXG4gIHJldHVybiB7IHR5cGU6IHR5cGUsIGRhdGE6IGRhdGEgfTtcbn07XG5cbi8qKlxuICogRW5jb2RlcyBtdWx0aXBsZSBtZXNzYWdlcyAocGF5bG9hZCkuXG4gKlxuICogICAgIDxsZW5ndGg+OmRhdGFcbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAxMTpoZWxsbyB3b3JsZDI6aGlcbiAqXG4gKiBJZiBhbnkgY29udGVudHMgYXJlIGJpbmFyeSwgdGhleSB3aWxsIGJlIGVuY29kZWQgYXMgYmFzZTY0IHN0cmluZ3MuIEJhc2U2NFxuICogZW5jb2RlZCBzdHJpbmdzIGFyZSBtYXJrZWQgd2l0aCBhIGIgYmVmb3JlIHRoZSBsZW5ndGggc3BlY2lmaWVyXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYXlsb2FkID0gZnVuY3Rpb24gKHBhY2tldHMsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQmluYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBzdXBwb3J0c0JpbmFyeTtcbiAgICBzdXBwb3J0c0JpbmFyeSA9IG51bGw7XG4gIH1cblxuICB2YXIgaXNCaW5hcnkgPSBoYXNCaW5hcnkocGFja2V0cyk7XG5cbiAgaWYgKHN1cHBvcnRzQmluYXJ5ICYmIGlzQmluYXJ5KSB7XG4gICAgaWYgKEJsb2IgJiYgIWRvbnRTZW5kQmxvYnMpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmVuY29kZVBheWxvYWRBc0Jsb2IocGFja2V0cywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBleHBvcnRzLmVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyKHBhY2tldHMsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmICghcGFja2V0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soJzA6Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMZW5ndGhIZWFkZXIobWVzc2FnZSkge1xuICAgIHJldHVybiBtZXNzYWdlLmxlbmd0aCArICc6JyArIG1lc3NhZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsICFpc0JpbmFyeSA/IGZhbHNlIDogc3VwcG9ydHNCaW5hcnksIGZhbHNlLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICBkb25lQ2FsbGJhY2sobnVsbCwgc2V0TGVuZ3RoSGVhZGVyKG1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHRzLmpvaW4oJycpKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEFzeW5jIGFycmF5IG1hcCB1c2luZyBhZnRlclxuICovXG5cbmZ1bmN0aW9uIG1hcChhcnksIGVhY2gsIGRvbmUpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShhcnkubGVuZ3RoKTtcbiAgdmFyIG5leHQgPSBhZnRlcihhcnkubGVuZ3RoLCBkb25lKTtcblxuICB2YXIgZWFjaFdpdGhJbmRleCA9IGZ1bmN0aW9uKGksIGVsLCBjYikge1xuICAgIGVhY2goZWwsIGZ1bmN0aW9uKGVycm9yLCBtc2cpIHtcbiAgICAgIHJlc3VsdFtpXSA9IG1zZztcbiAgICAgIGNiKGVycm9yLCByZXN1bHQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZWFjaFdpdGhJbmRleChpLCBhcnlbaV0sIG5leHQpO1xuICB9XG59XG5cbi8qXG4gKiBEZWNvZGVzIGRhdGEgd2hlbiBhIHBheWxvYWQgaXMgbWF5YmUgZXhwZWN0ZWQuIFBvc3NpYmxlIGJpbmFyeSBjb250ZW50cyBhcmVcbiAqIGRlY29kZWQgZnJvbSB0aGVpciBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSwgY2FsbGJhY2sgbWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb2RlUGF5bG9hZCA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZGVjb2RlUGF5bG9hZEFzQmluYXJ5KGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYmluYXJ5VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gYmluYXJ5VHlwZTtcbiAgICBiaW5hcnlUeXBlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBwYWNrZXQ7XG4gIGlmIChkYXRhID09PSAnJykge1xuICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSAnJywgbiwgbXNnO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY2hyID0gZGF0YS5jaGFyQXQoaSk7XG5cbiAgICBpZiAoY2hyICE9PSAnOicpIHtcbiAgICAgIGxlbmd0aCArPSBjaHI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobGVuZ3RoID09PSAnJyB8fCAobGVuZ3RoICE9IChuID0gTnVtYmVyKGxlbmd0aCkpKSkge1xuICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgfVxuXG4gICAgbXNnID0gZGF0YS5zdWJzdHIoaSArIDEsIG4pO1xuXG4gICAgaWYgKGxlbmd0aCAhPSBtc2cubGVuZ3RoKSB7XG4gICAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICB9XG5cbiAgICBpZiAobXNnLmxlbmd0aCkge1xuICAgICAgcGFja2V0ID0gZXhwb3J0cy5kZWNvZGVQYWNrZXQobXNnLCBiaW5hcnlUeXBlLCBmYWxzZSk7XG5cbiAgICAgIGlmIChlcnIudHlwZSA9PT0gcGFja2V0LnR5cGUgJiYgZXJyLmRhdGEgPT09IHBhY2tldC5kYXRhKSB7XG4gICAgICAgIC8vIHBhcnNlciBlcnJvciBpbiBpbmRpdmlkdWFsIHBhY2tldCAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXQgPSBjYWxsYmFjayhwYWNrZXQsIGkgKyBuLCBsKTtcbiAgICAgIGlmIChmYWxzZSA9PT0gcmV0KSByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWR2YW5jZSBjdXJzb3JcbiAgICBpICs9IG47XG4gICAgbGVuZ3RoID0gJyc7XG4gIH1cblxuICBpZiAobGVuZ3RoICE9PSAnJykge1xuICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgfVxuXG59O1xuXG4vKipcbiAqIEVuY29kZXMgbXVsdGlwbGUgbWVzc2FnZXMgKHBheWxvYWQpIGFzIGJpbmFyeS5cbiAqXG4gKiA8MSA9IGJpbmFyeSwgMCA9IHN0cmluZz48bnVtYmVyIGZyb20gMC05PjxudW1iZXIgZnJvbSAwLTk+Wy4uLl08bnVtYmVyXG4gKiAyNTU+PGRhdGE+XG4gKlxuICogRXhhbXBsZTpcbiAqIDEgMyAyNTUgMSAyIDMsIGlmIHRoZSBiaW5hcnkgY29udGVudHMgYXJlIGludGVycHJldGVkIGFzIDggYml0IGludGVnZXJzXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IGVuY29kZWQgcGF5bG9hZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKHBhY2tldHMsIGNhbGxiYWNrKSB7XG4gIGlmICghcGFja2V0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IEFycmF5QnVmZmVyKDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuY29kZU9uZShwYWNrZXQsIGRvbmVDYWxsYmFjaykge1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHBhY2tldCwgdHJ1ZSwgdHJ1ZSwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIGRvbmVDYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uKGVyciwgZW5jb2RlZFBhY2tldHMpIHtcbiAgICB2YXIgdG90YWxMZW5ndGggPSBlbmNvZGVkUGFja2V0cy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBwKSB7XG4gICAgICB2YXIgbGVuO1xuICAgICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJyl7XG4gICAgICAgIGxlbiA9IHAubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gcC5ieXRlTGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYyArIGxlbi50b1N0cmluZygpLmxlbmd0aCArIGxlbiArIDI7IC8vIHN0cmluZy9iaW5hcnkgaWRlbnRpZmllciArIHNlcGFyYXRvciA9IDJcbiAgICB9LCAwKTtcblxuICAgIHZhciByZXN1bHRBcnJheSA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcblxuICAgIHZhciBidWZmZXJJbmRleCA9IDA7XG4gICAgZW5jb2RlZFBhY2tldHMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgcCA9PT0gJ3N0cmluZyc7XG4gICAgICB2YXIgYWIgPSBwO1xuICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkocC5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2aWV3W2ldID0gcC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGFiID0gdmlldy5idWZmZXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0cmluZykgeyAvLyBub3QgdHJ1ZSBiaW5hcnlcbiAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSAwO1xuICAgICAgfSBlbHNlIHsgLy8gdHJ1ZSBiaW5hcnlcbiAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuU3RyID0gYWIuYnl0ZUxlbmd0aC50b1N0cmluZygpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5TdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSBwYXJzZUludChsZW5TdHJbaV0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSAyNTU7XG5cbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gdmlld1tpXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHRBcnJheS5idWZmZXIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGFzIEJsb2JcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBheWxvYWRBc0Jsb2IgPSBmdW5jdGlvbihwYWNrZXRzLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsIHRydWUsIHRydWUsIGZ1bmN0aW9uKGVuY29kZWQpIHtcbiAgICAgIHZhciBiaW5hcnlJZGVudGlmaWVyID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgICBiaW5hcnlJZGVudGlmaWVyWzBdID0gMTtcbiAgICAgIGlmICh0eXBlb2YgZW5jb2RlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShlbmNvZGVkLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZpZXdbaV0gPSBlbmNvZGVkLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RlZCA9IHZpZXcuYnVmZmVyO1xuICAgICAgICBiaW5hcnlJZGVudGlmaWVyWzBdID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbiA9IChlbmNvZGVkIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpXG4gICAgICAgID8gZW5jb2RlZC5ieXRlTGVuZ3RoXG4gICAgICAgIDogZW5jb2RlZC5zaXplO1xuXG4gICAgICB2YXIgbGVuU3RyID0gbGVuLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgbGVuZ3RoQXJ5ID0gbmV3IFVpbnQ4QXJyYXkobGVuU3RyLmxlbmd0aCArIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5TdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGVuZ3RoQXJ5W2ldID0gcGFyc2VJbnQobGVuU3RyW2ldKTtcbiAgICAgIH1cbiAgICAgIGxlbmd0aEFyeVtsZW5TdHIubGVuZ3RoXSA9IDI1NTtcblxuICAgICAgaWYgKEJsb2IpIHtcbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbYmluYXJ5SWRlbnRpZmllci5idWZmZXIsIGxlbmd0aEFyeS5idWZmZXIsIGVuY29kZWRdKTtcbiAgICAgICAgZG9uZUNhbGxiYWNrKG51bGwsIGJsb2IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbWFwKHBhY2tldHMsIGVuY29kZU9uZSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBCbG9iKHJlc3VsdHMpKTtcbiAgfSk7XG59O1xuXG4vKlxuICogRGVjb2RlcyBkYXRhIHdoZW4gYSBwYXlsb2FkIGlzIG1heWJlIGV4cGVjdGVkLiBTdHJpbmdzIGFyZSBkZWNvZGVkIGJ5XG4gKiBpbnRlcnByZXRpbmcgZWFjaCBieXRlIGFzIGEga2V5IGNvZGUgZm9yIGVudHJpZXMgbWFya2VkIHRvIHN0YXJ0IHdpdGggMC4gU2VlXG4gKiBkZXNjcmlwdGlvbiBvZiBlbmNvZGVQYXlsb2FkQXNCaW5hcnlcbiAqXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBkYXRhLCBjYWxsYmFjayBtZXRob2RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVQYXlsb2FkQXNCaW5hcnkgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBiaW5hcnlUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBiaW5hcnlUeXBlO1xuICAgIGJpbmFyeVR5cGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIGJ1ZmZlclRhaWwgPSBkYXRhO1xuICB2YXIgYnVmZmVycyA9IFtdO1xuXG4gIHdoaWxlIChidWZmZXJUYWlsLmJ5dGVMZW5ndGggPiAwKSB7XG4gICAgdmFyIHRhaWxBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlclRhaWwpO1xuICAgIHZhciBpc1N0cmluZyA9IHRhaWxBcnJheVswXSA9PT0gMDtcbiAgICB2YXIgbXNnTGVuZ3RoID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgOyBpKyspIHtcbiAgICAgIGlmICh0YWlsQXJyYXlbaV0gPT09IDI1NSkgYnJlYWs7XG5cbiAgICAgIC8vIDMxMCA9IGNoYXIgbGVuZ3RoIG9mIE51bWJlci5NQVhfVkFMVUVcbiAgICAgIGlmIChtc2dMZW5ndGgubGVuZ3RoID4gMzEwKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgfVxuXG4gICAgICBtc2dMZW5ndGggKz0gdGFpbEFycmF5W2ldO1xuICAgIH1cblxuICAgIGJ1ZmZlclRhaWwgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCAyICsgbXNnTGVuZ3RoLmxlbmd0aCk7XG4gICAgbXNnTGVuZ3RoID0gcGFyc2VJbnQobXNnTGVuZ3RoKTtcblxuICAgIHZhciBtc2cgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCAwLCBtc2dMZW5ndGgpO1xuICAgIGlmIChpc1N0cmluZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbXNnID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShtc2cpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaVBob25lIFNhZmFyaSBkb2Vzbid0IGxldCB5b3UgYXBwbHkgdG8gdHlwZWQgYXJyYXlzXG4gICAgICAgIHZhciB0eXBlZCA9IG5ldyBVaW50OEFycmF5KG1zZyk7XG4gICAgICAgIG1zZyA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbXNnICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodHlwZWRbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYnVmZmVycy5wdXNoKG1zZyk7XG4gICAgYnVmZmVyVGFpbCA9IHNsaWNlQnVmZmVyKGJ1ZmZlclRhaWwsIG1zZ0xlbmd0aCk7XG4gIH1cblxuICB2YXIgdG90YWwgPSBidWZmZXJzLmxlbmd0aDtcbiAgYnVmZmVycy5mb3JFYWNoKGZ1bmN0aW9uKGJ1ZmZlciwgaSkge1xuICAgIGNhbGxiYWNrKGV4cG9ydHMuZGVjb2RlUGFja2V0KGJ1ZmZlciwgYmluYXJ5VHlwZSwgdHJ1ZSksIGksIHRvdGFsKTtcbiAgfSk7XG59O1xuIiwiXG4vKipcbiAqIEdldHMgdGhlIGtleXMgZm9yIGFuIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0ga2V5c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzIChvYmope1xuICB2YXIgYXJyID0gW107XG4gIHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcy5jYWxsKG9iaiwgaSkpIHtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcbiIsIi8qISBodHRwczovL210aHMuYmUvdXRmOGpzIHYyLjEuMiBieSBAbWF0aGlhcyAqL1xuXG52YXIgc3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuLy8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcbmZ1bmN0aW9uIHVjczJkZWNvZGUoc3RyaW5nKSB7XG5cdHZhciBvdXRwdXQgPSBbXTtcblx0dmFyIGNvdW50ZXIgPSAwO1xuXHR2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblx0dmFyIHZhbHVlO1xuXHR2YXIgZXh0cmE7XG5cdHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdC8vIGhpZ2ggc3Vycm9nYXRlLCBhbmQgdGhlcmUgaXMgYSBuZXh0IGNoYXJhY3RlclxuXHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0b3V0cHV0LnB1c2goKCh2YWx1ZSAmIDB4M0ZGKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNGRikgKyAweDEwMDAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdC8vIGNvZGUgdW5pdCBpcyB0aGUgaGlnaCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpclxuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gb3V0cHV0O1xufVxuXG4vLyBUYWtlbiBmcm9tIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZVxuZnVuY3Rpb24gdWNzMmVuY29kZShhcnJheSkge1xuXHR2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXHR2YXIgaW5kZXggPSAtMTtcblx0dmFyIHZhbHVlO1xuXHR2YXIgb3V0cHV0ID0gJyc7XG5cdHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdFx0dmFsdWUgPSBhcnJheVtpbmRleF07XG5cdFx0aWYgKHZhbHVlID4gMHhGRkZGKSB7XG5cdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG5cdFx0XHR2YWx1ZSA9IDB4REMwMCB8IHZhbHVlICYgMHgzRkY7XG5cdFx0fVxuXHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUpO1xuXHR9XG5cdHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50LCBzdHJpY3QpIHtcblx0aWYgKGNvZGVQb2ludCA+PSAweEQ4MDAgJiYgY29kZVBvaW50IDw9IDB4REZGRikge1xuXHRcdGlmIChzdHJpY3QpIHtcblx0XHRcdHRocm93IEVycm9yKFxuXHRcdFx0XHQnTG9uZSBzdXJyb2dhdGUgVSsnICsgY29kZVBvaW50LnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0JyBpcyBub3QgYSBzY2FsYXIgdmFsdWUnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIHNoaWZ0KSB7XG5cdHJldHVybiBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gc2hpZnQpICYgMHgzRikgfCAweDgwKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlQ29kZVBvaW50KGNvZGVQb2ludCwgc3RyaWN0KSB7XG5cdGlmICgoY29kZVBvaW50ICYgMHhGRkZGRkY4MCkgPT0gMCkgeyAvLyAxLWJ5dGUgc2VxdWVuY2Vcblx0XHRyZXR1cm4gc3RyaW5nRnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG5cdH1cblx0dmFyIHN5bWJvbCA9ICcnO1xuXHRpZiAoKGNvZGVQb2ludCAmIDB4RkZGRkY4MDApID09IDApIHsgLy8gMi1ieXRlIHNlcXVlbmNlXG5cdFx0c3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDYpICYgMHgxRikgfCAweEMwKTtcblx0fVxuXHRlbHNlIGlmICgoY29kZVBvaW50ICYgMHhGRkZGMDAwMCkgPT0gMCkgeyAvLyAzLWJ5dGUgc2VxdWVuY2Vcblx0XHRpZiAoIWNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50LCBzdHJpY3QpKSB7XG5cdFx0XHRjb2RlUG9pbnQgPSAweEZGRkQ7XG5cdFx0fVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiAxMikgJiAweDBGKSB8IDB4RTApO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdH1cblx0ZWxzZSBpZiAoKGNvZGVQb2ludCAmIDB4RkZFMDAwMDApID09IDApIHsgLy8gNC1ieXRlIHNlcXVlbmNlXG5cdFx0c3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDE4KSAmIDB4MDcpIHwgMHhGMCk7XG5cdFx0c3ltYm9sICs9IGNyZWF0ZUJ5dGUoY29kZVBvaW50LCAxMik7XG5cdFx0c3ltYm9sICs9IGNyZWF0ZUJ5dGUoY29kZVBvaW50LCA2KTtcblx0fVxuXHRzeW1ib2wgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKChjb2RlUG9pbnQgJiAweDNGKSB8IDB4ODApO1xuXHRyZXR1cm4gc3ltYm9sO1xufVxuXG5mdW5jdGlvbiB1dGY4ZW5jb2RlKHN0cmluZywgb3B0cykge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblx0dmFyIHN0cmljdCA9IGZhbHNlICE9PSBvcHRzLnN0cmljdDtcblxuXHR2YXIgY29kZVBvaW50cyA9IHVjczJkZWNvZGUoc3RyaW5nKTtcblx0dmFyIGxlbmd0aCA9IGNvZGVQb2ludHMubGVuZ3RoO1xuXHR2YXIgaW5kZXggPSAtMTtcblx0dmFyIGNvZGVQb2ludDtcblx0dmFyIGJ5dGVTdHJpbmcgPSAnJztcblx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0XHRjb2RlUG9pbnQgPSBjb2RlUG9pbnRzW2luZGV4XTtcblx0XHRieXRlU3RyaW5nICs9IGVuY29kZUNvZGVQb2ludChjb2RlUG9pbnQsIHN0cmljdCk7XG5cdH1cblx0cmV0dXJuIGJ5dGVTdHJpbmc7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5mdW5jdGlvbiByZWFkQ29udGludWF0aW9uQnl0ZSgpIHtcblx0aWYgKGJ5dGVJbmRleCA+PSBieXRlQ291bnQpIHtcblx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdH1cblxuXHR2YXIgY29udGludWF0aW9uQnl0ZSA9IGJ5dGVBcnJheVtieXRlSW5kZXhdICYgMHhGRjtcblx0Ynl0ZUluZGV4Kys7XG5cblx0aWYgKChjb250aW51YXRpb25CeXRlICYgMHhDMCkgPT0gMHg4MCkge1xuXHRcdHJldHVybiBjb250aW51YXRpb25CeXRlICYgMHgzRjtcblx0fVxuXG5cdC8vIElmIHdlIGVuZCB1cCBoZXJlLCBpdOKAmXMgbm90IGEgY29udGludWF0aW9uIGJ5dGVcblx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlU3ltYm9sKHN0cmljdCkge1xuXHR2YXIgYnl0ZTE7XG5cdHZhciBieXRlMjtcblx0dmFyIGJ5dGUzO1xuXHR2YXIgYnl0ZTQ7XG5cdHZhciBjb2RlUG9pbnQ7XG5cblx0aWYgKGJ5dGVJbmRleCA+IGJ5dGVDb3VudCkge1xuXHRcdHRocm93IEVycm9yKCdJbnZhbGlkIGJ5dGUgaW5kZXgnKTtcblx0fVxuXG5cdGlmIChieXRlSW5kZXggPT0gYnl0ZUNvdW50KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gUmVhZCBmaXJzdCBieXRlXG5cdGJ5dGUxID0gYnl0ZUFycmF5W2J5dGVJbmRleF0gJiAweEZGO1xuXHRieXRlSW5kZXgrKztcblxuXHQvLyAxLWJ5dGUgc2VxdWVuY2UgKG5vIGNvbnRpbnVhdGlvbiBieXRlcylcblx0aWYgKChieXRlMSAmIDB4ODApID09IDApIHtcblx0XHRyZXR1cm4gYnl0ZTE7XG5cdH1cblxuXHQvLyAyLWJ5dGUgc2VxdWVuY2Vcblx0aWYgKChieXRlMSAmIDB4RTApID09IDB4QzApIHtcblx0XHRieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Y29kZVBvaW50ID0gKChieXRlMSAmIDB4MUYpIDw8IDYpIHwgYnl0ZTI7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDgwKSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBjb250aW51YXRpb24gYnl0ZScpO1xuXHRcdH1cblx0fVxuXG5cdC8vIDMtYnl0ZSBzZXF1ZW5jZSAobWF5IGluY2x1ZGUgdW5wYWlyZWQgc3Vycm9nYXRlcylcblx0aWYgKChieXRlMSAmIDB4RjApID09IDB4RTApIHtcblx0XHRieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Ynl0ZTMgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDBGKSA8PCAxMikgfCAoYnl0ZTIgPDwgNikgfCBieXRlMztcblx0XHRpZiAoY29kZVBvaW50ID49IDB4MDgwMCkge1xuXHRcdFx0cmV0dXJuIGNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50LCBzdHJpY3QpID8gY29kZVBvaW50IDogMHhGRkZEO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBjb250aW51YXRpb24gYnl0ZScpO1xuXHRcdH1cblx0fVxuXG5cdC8vIDQtYnl0ZSBzZXF1ZW5jZVxuXHRpZiAoKGJ5dGUxICYgMHhGOCkgPT0gMHhGMCkge1xuXHRcdGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRieXRlMyA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Ynl0ZTQgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDA3KSA8PCAweDEyKSB8IChieXRlMiA8PCAweDBDKSB8XG5cdFx0XHQoYnl0ZTMgPDwgMHgwNikgfCBieXRlNDtcblx0XHRpZiAoY29kZVBvaW50ID49IDB4MDEwMDAwICYmIGNvZGVQb2ludCA8PSAweDEwRkZGRikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHR9XG5cdH1cblxuXHR0aHJvdyBFcnJvcignSW52YWxpZCBVVEYtOCBkZXRlY3RlZCcpO1xufVxuXG52YXIgYnl0ZUFycmF5O1xudmFyIGJ5dGVDb3VudDtcbnZhciBieXRlSW5kZXg7XG5mdW5jdGlvbiB1dGY4ZGVjb2RlKGJ5dGVTdHJpbmcsIG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdHZhciBzdHJpY3QgPSBmYWxzZSAhPT0gb3B0cy5zdHJpY3Q7XG5cblx0Ynl0ZUFycmF5ID0gdWNzMmRlY29kZShieXRlU3RyaW5nKTtcblx0Ynl0ZUNvdW50ID0gYnl0ZUFycmF5Lmxlbmd0aDtcblx0Ynl0ZUluZGV4ID0gMDtcblx0dmFyIGNvZGVQb2ludHMgPSBbXTtcblx0dmFyIHRtcDtcblx0d2hpbGUgKCh0bXAgPSBkZWNvZGVTeW1ib2woc3RyaWN0KSkgIT09IGZhbHNlKSB7XG5cdFx0Y29kZVBvaW50cy5wdXNoKHRtcCk7XG5cdH1cblx0cmV0dXJuIHVjczJlbmNvZGUoY29kZVBvaW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHR2ZXJzaW9uOiAnMi4xLjInLFxuXHRlbmNvZGU6IHV0ZjhlbmNvZGUsXG5cdGRlY29kZTogdXRmOGRlY29kZVxufTtcbiIsIi8qIGdsb2JhbCBCbG9iIEZpbGUgKi9cblxuLypcbiAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gKi9cblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgd2l0aE5hdGl2ZUJsb2IgPSB0eXBlb2YgQmxvYiA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHRvU3RyaW5nLmNhbGwoQmxvYikgPT09ICdbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl0nO1xudmFyIHdpdGhOYXRpdmVGaWxlID0gdHlwZW9mIEZpbGUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBGaWxlICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEZpbGUpID09PSAnW29iamVjdCBGaWxlQ29uc3RydWN0b3JdJztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0JpbmFyeTtcblxuLyoqXG4gKiBDaGVja3MgZm9yIGJpbmFyeSBkYXRhLlxuICpcbiAqIFN1cHBvcnRzIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEJsb2IgYW5kIEZpbGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFueXRoaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGhhc0JpbmFyeSAob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhhc0JpbmFyeShvYmpbaV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgQnVmZmVyLmlzQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB8fFxuICAgICh0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8XG4gICAgKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgKHdpdGhOYXRpdmVGaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9oYXMtYmluYXJ5L3B1bGwvNFxuICBpZiAob2JqLnRvSlNPTiAmJiB0eXBlb2Ygb2JqLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGhhc0JpbmFyeShvYmoudG9KU09OKCksIHRydWUpO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmIGhhc0JpbmFyeShvYmpba2V5XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICpcbiAqIExvZ2ljIGJvcnJvd2VkIGZyb20gTW9kZXJuaXpyOlxuICpcbiAqICAgLSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY29ycy5qc1xuICovXG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xufSBjYXRjaCAoZXJyKSB7XG4gIC8vIGlmIFhNTEh0dHAgc3VwcG9ydCBpcyBkaXNhYmxlZCBpbiBJRSB0aGVuIGl0IHdpbGwgdGhyb3dcbiAgLy8gd2hlbiB0cnlpbmcgdG8gY3JlYXRlXG4gIG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJcbnZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChpbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvKiFcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjIuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0dmFyIHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IGZhbHNlO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCAoY29udmVydGVyKSB7XG5cdFx0ZnVuY3Rpb24gYXBpIChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXcml0ZVxuXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0YXR0cmlidXRlcyA9IGV4dGVuZCh7XG5cdFx0XHRcdFx0cGF0aDogJy8nXG5cdFx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdGV4cGlyZXMuc2V0TWlsbGlzZWNvbmRzKGV4cGlyZXMuZ2V0TWlsbGlzZWNvbmRzKCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGV4cGlyZXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSdyZSB1c2luZyBcImV4cGlyZXNcIiBiZWNhdXNlIFwibWF4LWFnZVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0XHRpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0aWYgKCFjb252ZXJ0ZXIud3JpdGUpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cblx0XHRcdFx0dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xuXG5cdFx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblx0XHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZWFkXG5cblx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cblx0XHRcdC8vIGNhbGxpbmcgXCJnZXQoKVwiXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2c7XG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gcGFydHNbMF0ucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvbnZlcnRlci5yZWFkID9cblx0XHRcdFx0XHRcdGNvbnZlcnRlci5yZWFkKGNvb2tpZSwgbmFtZSkgOiBjb252ZXJ0ZXIoY29va2llLCBuYW1lKSB8fFxuXHRcdFx0XHRcdFx0Y29va2llLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLmpzb24pIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gY29va2llO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFrZXkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtuYW1lXSA9IGNvb2tpZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0YXBpLnNldCA9IGFwaTtcblx0XHRhcGkuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGFwaS5jYWxsKGFwaSwga2V5KTtcblx0XHR9O1xuXHRcdGFwaS5nZXRKU09OID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGFwaS5hcHBseSh7XG5cdFx0XHRcdGpzb246IHRydWVcblx0XHRcdH0sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5cdFx0fTtcblx0XHRhcGkuZGVmYXVsdHMgPSB7fTtcblxuXHRcdGFwaS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRhcGkoa2V5LCAnJywgZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcblx0XHRcdFx0ZXhwaXJlczogLTFcblx0XHRcdH0pKTtcblx0XHR9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cbiIsIi8qKlxyXG4gKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXHJcbiAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIHZhciBzdHIgPSAnJztcclxuXHJcbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgaWYgKHN0ci5sZW5ndGgpIHN0ciArPSAnJic7XHJcbiAgICAgIHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdHI7XHJcbn07XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBxc1xyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKHFzKXtcclxuICB2YXIgcXJ5ID0ge307XHJcbiAgdmFyIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcclxuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xyXG4gICAgcXJ5W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XHJcbiAgfVxyXG4gIHJldHVybiBxcnk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBQYXJzZXMgYW4gVVJJXHJcbiAqXHJcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxudmFyIHJlID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoaHR0cHxodHRwc3x3c3x3c3MpOlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oKD86W2EtZjAtOV17MCw0fTopezIsN31bYS1mMC05XXswLDR9fFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XHJcblxyXG52YXIgcGFydHMgPSBbXHJcbiAgICAnc291cmNlJywgJ3Byb3RvY29sJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2FuY2hvcidcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2V1cmkoc3RyKSB7XHJcbiAgICB2YXIgc3JjID0gc3RyLFxyXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxyXG4gICAgICAgIGUgPSBzdHIuaW5kZXhPZignXScpO1xyXG5cclxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGIpICsgc3RyLnN1YnN0cmluZyhiLCBlKS5yZXBsYWNlKC86L2csICc7JykgKyBzdHIuc3Vic3RyaW5nKGUsIHN0ci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtID0gcmUuZXhlYyhzdHIgfHwgJycpLFxyXG4gICAgICAgIHVyaSA9IHt9LFxyXG4gICAgICAgIGkgPSAxNDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xyXG4gICAgICAgIHVyaS5zb3VyY2UgPSBzcmM7XHJcbiAgICAgICAgdXJpLmhvc3QgPSB1cmkuaG9zdC5zdWJzdHJpbmcoMSwgdXJpLmhvc3QubGVuZ3RoIC0gMSkucmVwbGFjZSgvOy9nLCAnOicpO1xyXG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XHJcbiAgICAgICAgdXJpLmlwdjZ1cmkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmk7XHJcbn07XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdXJsID0gcmVxdWlyZSgnLi91cmwnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudCcpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGxvb2t1cDtcblxuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuXG52YXIgY2FjaGUgPSBleHBvcnRzLm1hbmFnZXJzID0ge307XG5cbi8qKlxuICogTG9va3MgdXAgYW4gZXhpc3RpbmcgYE1hbmFnZXJgIGZvciBtdWx0aXBsZXhpbmcuXG4gKiBJZiB0aGUgdXNlciBzdW1tb25zOlxuICpcbiAqICAgYGlvKCdodHRwOi8vbG9jYWxob3N0L2EnKTtgXG4gKiAgIGBpbygnaHR0cDovL2xvY2FsaG9zdC9iJyk7YFxuICpcbiAqIFdlIHJldXNlIHRoZSBleGlzdGluZyBpbnN0YW5jZSBiYXNlZCBvbiBzYW1lIHNjaGVtZS9wb3J0L2hvc3QsXG4gKiBhbmQgd2UgaW5pdGlhbGl6ZSBzb2NrZXRzIGZvciBlYWNoIG5hbWVzcGFjZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvb2t1cCAodXJpLCBvcHRzKSB7XG4gIGlmICh0eXBlb2YgdXJpID09PSAnb2JqZWN0Jykge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgdmFyIHBhcnNlZCA9IHVybCh1cmkpO1xuICB2YXIgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgdmFyIGlkID0gcGFyc2VkLmlkO1xuICB2YXIgcGF0aCA9IHBhcnNlZC5wYXRoO1xuICB2YXIgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXS5uc3BzO1xuICB2YXIgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHwgb3B0c1snZm9yY2UgbmV3IGNvbm5lY3Rpb24nXSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fCBzYW1lTmFtZXNwYWNlO1xuXG4gIHZhciBpbztcblxuICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgIGRlYnVnKCdpZ25vcmluZyBzb2NrZXQgY2FjaGUgZm9yICVzJywgc291cmNlKTtcbiAgICBpbyA9IE1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgZGVidWcoJ25ldyBpbyBpbnN0YW5jZSBmb3IgJXMnLCBzb3VyY2UpO1xuICAgICAgY2FjaGVbaWRdID0gTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgIH1cbiAgICBpbyA9IGNhY2hlW2lkXTtcbiAgfVxuICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgb3B0cy5xdWVyeSA9IHBhcnNlZC5xdWVyeTtcbiAgfVxuICByZXR1cm4gaW8uc29ja2V0KHBhcnNlZC5wYXRoLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDtcblxuLyoqXG4gKiBgY29ubmVjdGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVyaVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmNvbm5lY3QgPSBsb29rdXA7XG5cbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuZXhwb3J0cy5Tb2NrZXQgPSByZXF1aXJlKCcuL3NvY2tldCcpO1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGVpbyA9IHJlcXVpcmUoJ2VuZ2luZS5pby1jbGllbnQnKTtcbnZhciBTb2NrZXQgPSByZXF1aXJlKCcuL3NvY2tldCcpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBvbiA9IHJlcXVpcmUoJy4vb24nKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnY29tcG9uZW50LWJpbmQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6bWFuYWdlcicpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCdpbmRleG9mJyk7XG52YXIgQmFja29mZiA9IHJlcXVpcmUoJ2JhY2tvMicpO1xuXG4vKipcbiAqIElFNisgaGFzT3duUHJvcGVydHlcbiAqL1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0c1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlcjtcblxuLyoqXG4gKiBgTWFuYWdlcmAgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGVuZ2luZSBpbnN0YW5jZSBvciBlbmdpbmUgdXJpL29wdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIE1hbmFnZXIgKHVyaSwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFuYWdlcikpIHJldHVybiBuZXcgTWFuYWdlcih1cmksIG9wdHMpO1xuICBpZiAodXJpICYmICgnb2JqZWN0JyA9PT0gdHlwZW9mIHVyaSkpIHtcbiAgICBvcHRzID0gdXJpO1xuICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgfVxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICBvcHRzLnBhdGggPSBvcHRzLnBhdGggfHwgJy9zb2NrZXQuaW8nO1xuICB0aGlzLm5zcHMgPSB7fTtcbiAgdGhpcy5zdWJzID0gW107XG4gIHRoaXMub3B0cyA9IG9wdHM7XG4gIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gIHRoaXMucmVjb25uZWN0aW9uRGVsYXkob3B0cy5yZWNvbm5lY3Rpb25EZWxheSB8fCAxMDAwKTtcbiAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gIHRoaXMuYmFja29mZiA9IG5ldyBCYWNrb2ZmKHtcbiAgICBtaW46IHRoaXMucmVjb25uZWN0aW9uRGVsYXkoKSxcbiAgICBtYXg6IHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgoKSxcbiAgICBqaXR0ZXI6IHRoaXMucmFuZG9taXphdGlvbkZhY3RvcigpXG4gIH0pO1xuICB0aGlzLnRpbWVvdXQobnVsbCA9PSBvcHRzLnRpbWVvdXQgPyAyMDAwMCA6IG9wdHMudGltZW91dCk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLnVyaSA9IHVyaTtcbiAgdGhpcy5jb25uZWN0aW5nID0gW107XG4gIHRoaXMubGFzdFBpbmcgPSBudWxsO1xuICB0aGlzLmVuY29kaW5nID0gZmFsc2U7XG4gIHRoaXMucGFja2V0QnVmZmVyID0gW107XG4gIHZhciBfcGFyc2VyID0gb3B0cy5wYXJzZXIgfHwgcGFyc2VyO1xuICB0aGlzLmVuY29kZXIgPSBuZXcgX3BhcnNlci5FbmNvZGVyKCk7XG4gIHRoaXMuZGVjb2RlciA9IG5ldyBfcGFyc2VyLkRlY29kZXIoKTtcbiAgdGhpcy5hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICBpZiAodGhpcy5hdXRvQ29ubmVjdCkgdGhpcy5vcGVuKCk7XG59XG5cbi8qKlxuICogUHJvcGFnYXRlIGdpdmVuIGV2ZW50IHRvIHNvY2tldHMgYW5kIGVtaXQgb24gYHRoaXNgXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuZW1pdEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIG5zcCBpbiB0aGlzLm5zcHMpIHtcbiAgICBpZiAoaGFzLmNhbGwodGhpcy5uc3BzLCBuc3ApKSB7XG4gICAgICB0aGlzLm5zcHNbbnNwXS5lbWl0LmFwcGx5KHRoaXMubnNwc1tuc3BdLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgYHNvY2tldC5pZGAgb2YgYWxsIHNvY2tldHNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTb2NrZXRJZHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIG5zcCBpbiB0aGlzLm5zcHMpIHtcbiAgICBpZiAoaGFzLmNhbGwodGhpcy5uc3BzLCBuc3ApKSB7XG4gICAgICB0aGlzLm5zcHNbbnNwXS5pZCA9IHRoaXMuZ2VuZXJhdGVJZChuc3ApO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBnZW5lcmF0ZSBgc29ja2V0LmlkYCBmb3IgdGhlIGdpdmVuIGBuc3BgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5zcFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIChuc3ApIHtcbiAgcmV0dXJuIChuc3AgPT09ICcvJyA/ICcnIDogKG5zcCArICcjJykpICsgdGhpcy5lbmdpbmUuaWQ7XG59O1xuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihNYW5hZ2VyLnByb3RvdHlwZSk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHJlY29ubmVjdGlvbmAgY29uZmlnLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJ1ZS9mYWxzZSBpZiBpdCBzaG91bGQgYXV0b21hdGljYWxseSByZWNvbm5lY3RcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uO1xuICB0aGlzLl9yZWNvbm5lY3Rpb24gPSAhIXY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSByZWNvbm5lY3Rpb24gYXR0ZW1wdHMgY29uZmlnLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggcmVjb25uZWN0aW9uIGF0dGVtcHRzIGJlZm9yZSBnaXZpbmcgdXBcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uQXR0ZW1wdHMgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSB2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZGVsYXkgYmV0d2VlbiByZWNvbm5lY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheVxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb25EZWxheSA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5O1xuICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheSA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0TWluKHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbk1hbmFnZXIucHJvdG90eXBlLnJhbmRvbWl6YXRpb25GYWN0b3IgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yO1xuICB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yID0gdjtcbiAgdGhpcy5iYWNrb2ZmICYmIHRoaXMuYmFja29mZi5zZXRKaXR0ZXIodik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXhpbXVtIGRlbGF5IGJldHdlZW4gcmVjb25uZWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uRGVsYXlNYXggPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heDtcbiAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldE1heCh2KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGNvbm5lY3Rpb24gdGltZW91dC4gYGZhbHNlYCB0byBkaXNhYmxlXG4gKlxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgdGhpcy5fdGltZW91dCA9IHY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdGFydHMgdHJ5aW5nIHRvIHJlY29ubmVjdCBpZiByZWNvbm5lY3Rpb24gaXMgZW5hYmxlZCBhbmQgd2UgaGF2ZSBub3RcbiAqIHN0YXJ0ZWQgcmVjb25uZWN0aW5nIHlldFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm1heWJlUmVjb25uZWN0T25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gIGlmICghdGhpcy5yZWNvbm5lY3RpbmcgJiYgdGhpcy5fcmVjb25uZWN0aW9uICYmIHRoaXMuYmFja29mZi5hdHRlbXB0cyA9PT0gMCkge1xuICAgIC8vIGtlZXBzIHJlY29ubmVjdGlvbiBmcm9tIGZpcmluZyB0d2ljZSBmb3IgdGhlIHNhbWUgcmVjb25uZWN0aW9uIGxvb3BcbiAgICB0aGlzLnJlY29ubmVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0IGBzb2NrZXRgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbmFsLCBjYWxsYmFja1xuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vcGVuID1cbk1hbmFnZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoZm4sIG9wdHMpIHtcbiAgZGVidWcoJ3JlYWR5U3RhdGUgJXMnLCB0aGlzLnJlYWR5U3RhdGUpO1xuICBpZiAofnRoaXMucmVhZHlTdGF0ZS5pbmRleE9mKCdvcGVuJykpIHJldHVybiB0aGlzO1xuXG4gIGRlYnVnKCdvcGVuaW5nICVzJywgdGhpcy51cmkpO1xuICB0aGlzLmVuZ2luZSA9IGVpbyh0aGlzLnVyaSwgdGhpcy5vcHRzKTtcbiAgdmFyIHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcbiAgdGhpcy5za2lwUmVjb25uZWN0ID0gZmFsc2U7XG5cbiAgLy8gZW1pdCBgb3BlbmBcbiAgdmFyIG9wZW5TdWIgPSBvbihzb2NrZXQsICdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25vcGVuKCk7XG4gICAgZm4gJiYgZm4oKTtcbiAgfSk7XG5cbiAgLy8gZW1pdCBgY29ubmVjdF9lcnJvcmBcbiAgdmFyIGVycm9yU3ViID0gb24oc29ja2V0LCAnZXJyb3InLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRlYnVnKCdjb25uZWN0X2Vycm9yJyk7XG4gICAgc2VsZi5jbGVhbnVwKCk7XG4gICAgc2VsZi5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gICAgc2VsZi5lbWl0QWxsKCdjb25uZWN0X2Vycm9yJywgZGF0YSk7XG4gICAgaWYgKGZuKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdDb25uZWN0aW9uIGVycm9yJyk7XG4gICAgICBlcnIuZGF0YSA9IGRhdGE7XG4gICAgICBmbihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbmx5IGRvIHRoaXMgaWYgdGhlcmUgaXMgbm8gZm4gdG8gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgc2VsZi5tYXliZVJlY29ubmVjdE9uT3BlbigpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gZW1pdCBgY29ubmVjdF90aW1lb3V0YFxuICBpZiAoZmFsc2UgIT09IHRoaXMuX3RpbWVvdXQpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgZGVidWcoJ2Nvbm5lY3QgYXR0ZW1wdCB3aWxsIHRpbWVvdXQgYWZ0ZXIgJWQnLCB0aW1lb3V0KTtcblxuICAgIC8vIHNldCB0aW1lclxuICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZGVidWcoJ2Nvbm5lY3QgYXR0ZW1wdCB0aW1lZCBvdXQgYWZ0ZXIgJWQnLCB0aW1lb3V0KTtcbiAgICAgIG9wZW5TdWIuZGVzdHJveSgpO1xuICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICBzb2NrZXQuZW1pdCgnZXJyb3InLCAndGltZW91dCcpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdjb25uZWN0X3RpbWVvdXQnLCB0aW1lb3V0KTtcbiAgICB9LCB0aW1lb3V0KTtcblxuICAgIHRoaXMuc3Vicy5wdXNoKHtcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuc3Vicy5wdXNoKG9wZW5TdWIpO1xuICB0aGlzLnN1YnMucHVzaChlcnJvclN1Yik7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBvcGVuLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ29wZW4nKTtcblxuICAvLyBjbGVhciBvbGQgc3Vic1xuICB0aGlzLmNsZWFudXAoKTtcblxuICAvLyBtYXJrIGFzIG9wZW5cbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICB0aGlzLmVtaXQoJ29wZW4nKTtcblxuICAvLyBhZGQgbmV3IHN1YnNcbiAgdmFyIHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdkYXRhJywgYmluZCh0aGlzLCAnb25kYXRhJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAncGluZycsIGJpbmQodGhpcywgJ29ucGluZycpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ3BvbmcnLCBiaW5kKHRoaXMsICdvbnBvbmcnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdlcnJvcicsIGJpbmQodGhpcywgJ29uZXJyb3InKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdjbG9zZScsIGJpbmQodGhpcywgJ29uY2xvc2UnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbih0aGlzLmRlY29kZXIsICdkZWNvZGVkJywgYmluZCh0aGlzLCAnb25kZWNvZGVkJykpKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBwaW5nLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sYXN0UGluZyA9IG5ldyBEYXRlKCk7XG4gIHRoaXMuZW1pdEFsbCgncGluZycpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbnBvbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdEFsbCgncG9uZycsIG5ldyBEYXRlKCkgLSB0aGlzLmxhc3RQaW5nKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggZGF0YS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmRlY29kZXIuYWRkKGRhdGEpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiBwYXJzZXIgZnVsbHkgZGVjb2RlcyBhIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmRlY29kZWQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIGRlYnVnKCdlcnJvcicsIGVycik7XG4gIHRoaXMuZW1pdEFsbCgnZXJyb3InLCBlcnIpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICpcbiAqIEByZXR1cm4ge1NvY2tldH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuc29ja2V0ID0gZnVuY3Rpb24gKG5zcCwgb3B0cykge1xuICB2YXIgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gIGlmICghc29ja2V0KSB7XG4gICAgc29ja2V0ID0gbmV3IFNvY2tldCh0aGlzLCBuc3AsIG9wdHMpO1xuICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3RpbmcnLCBvbkNvbm5lY3RpbmcpO1xuICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNvY2tldC5pZCA9IHNlbGYuZ2VuZXJhdGVJZChuc3ApO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYXV0b0Nvbm5lY3QpIHtcbiAgICAgIC8vIG1hbnVhbGx5IGNhbGwgaGVyZSBzaW5jZSBjb25uZWN0aW5nIGV2ZW50IGlzIGZpcmVkIGJlZm9yZSBsaXN0ZW5pbmdcbiAgICAgIG9uQ29ubmVjdGluZygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdGluZyAoKSB7XG4gICAgaWYgKCF+aW5kZXhPZihzZWxmLmNvbm5lY3RpbmcsIHNvY2tldCkpIHtcbiAgICAgIHNlbGYuY29ubmVjdGluZy5wdXNoKHNvY2tldCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNvY2tldDtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBzb2NrZXQgY2xvc2UuXG4gKlxuICogQHBhcmFtIHtTb2NrZXR9IHNvY2tldFxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoc29ja2V0KSB7XG4gIHZhciBpbmRleCA9IGluZGV4T2YodGhpcy5jb25uZWN0aW5nLCBzb2NrZXQpO1xuICBpZiAofmluZGV4KSB0aGlzLmNvbm5lY3Rpbmcuc3BsaWNlKGluZGV4LCAxKTtcbiAgaWYgKHRoaXMuY29ubmVjdGluZy5sZW5ndGgpIHJldHVybjtcblxuICB0aGlzLmNsb3NlKCk7XG59O1xuXG4vKipcbiAqIFdyaXRlcyBhIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIGRlYnVnKCd3cml0aW5nIHBhY2tldCAlaicsIHBhY2tldCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHBhY2tldC5xdWVyeSAmJiBwYWNrZXQudHlwZSA9PT0gMCkgcGFja2V0Lm5zcCArPSAnPycgKyBwYWNrZXQucXVlcnk7XG5cbiAgaWYgKCFzZWxmLmVuY29kaW5nKSB7XG4gICAgLy8gZW5jb2RlLCB0aGVuIHdyaXRlIHRvIGVuZ2luZSB3aXRoIHJlc3VsdFxuICAgIHNlbGYuZW5jb2RpbmcgPSB0cnVlO1xuICAgIHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0LCBmdW5jdGlvbiAoZW5jb2RlZFBhY2tldHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2VsZi5lbmdpbmUud3JpdGUoZW5jb2RlZFBhY2tldHNbaV0sIHBhY2tldC5vcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuZW5jb2RpbmcgPSBmYWxzZTtcbiAgICAgIHNlbGYucHJvY2Vzc1BhY2tldFF1ZXVlKCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7IC8vIGFkZCBwYWNrZXQgdG8gdGhlIHF1ZXVlXG4gICAgc2VsZi5wYWNrZXRCdWZmZXIucHVzaChwYWNrZXQpO1xuICB9XG59O1xuXG4vKipcbiAqIElmIHBhY2tldCBidWZmZXIgaXMgbm9uLWVtcHR5LCBiZWdpbnMgZW5jb2RpbmcgdGhlXG4gKiBuZXh0IHBhY2tldCBpbiBsaW5lLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnByb2Nlc3NQYWNrZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucGFja2V0QnVmZmVyLmxlbmd0aCA+IDAgJiYgIXRoaXMuZW5jb2RpbmcpIHtcbiAgICB2YXIgcGFjayA9IHRoaXMucGFja2V0QnVmZmVyLnNoaWZ0KCk7XG4gICAgdGhpcy5wYWNrZXQocGFjayk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2xlYW4gdXAgdHJhbnNwb3J0IHN1YnNjcmlwdGlvbnMgYW5kIHBhY2tldCBidWZmZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2NsZWFudXAnKTtcblxuICB2YXIgc3Vic0xlbmd0aCA9IHRoaXMuc3Vicy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHN1YiA9IHRoaXMuc3Vicy5zaGlmdCgpO1xuICAgIHN1Yi5kZXN0cm95KCk7XG4gIH1cblxuICB0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xuICB0aGlzLmVuY29kaW5nID0gZmFsc2U7XG4gIHRoaXMubGFzdFBpbmcgPSBudWxsO1xuXG4gIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG59O1xuXG4vKipcbiAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5jbG9zZSA9XG5NYW5hZ2VyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygnZGlzY29ubmVjdCcpO1xuICB0aGlzLnNraXBSZWNvbm5lY3QgPSB0cnVlO1xuICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBgb25jbG9zZWAgd2lsbCBub3QgZmlyZSBiZWNhdXNlXG4gICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgaWYgKHRoaXMuZW5naW5lKSB0aGlzLmVuZ2luZS5jbG9zZSgpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlbmdpbmUgY2xvc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgZGVidWcoJ29uY2xvc2UnKTtcblxuICB0aGlzLmNsZWFudXAoKTtcbiAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJywgcmVhc29uKTtcblxuICBpZiAodGhpcy5fcmVjb25uZWN0aW9uICYmICF0aGlzLnNraXBSZWNvbm5lY3QpIHtcbiAgICB0aGlzLnJlY29ubmVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIEF0dGVtcHQgYSByZWNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5yZWNvbm5lY3RpbmcgfHwgdGhpcy5za2lwUmVjb25uZWN0KSByZXR1cm4gdGhpcztcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgIGRlYnVnKCdyZWNvbm5lY3QgZmFpbGVkJyk7XG4gICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgdGhpcy5lbWl0QWxsKCdyZWNvbm5lY3RfZmFpbGVkJyk7XG4gICAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGVsYXkgPSB0aGlzLmJhY2tvZmYuZHVyYXRpb24oKTtcbiAgICBkZWJ1Zygnd2lsbCB3YWl0ICVkbXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0JywgZGVsYXkpO1xuXG4gICAgdGhpcy5yZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdCkgcmV0dXJuO1xuXG4gICAgICBkZWJ1ZygnYXR0ZW1wdGluZyByZWNvbm5lY3QnKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0X2F0dGVtcHQnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RpbmcnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuXG4gICAgICAvLyBjaGVjayBhZ2FpbiBmb3IgdGhlIGNhc2Ugc29ja2V0IGNsb3NlZCBpbiBhYm92ZSBldmVudHNcbiAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpIHJldHVybjtcblxuICAgICAgc2VsZi5vcGVuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGRlYnVnKCdyZWNvbm5lY3QgYXR0ZW1wdCBlcnJvcicpO1xuICAgICAgICAgIHNlbGYucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5yZWNvbm5lY3QoKTtcbiAgICAgICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdF9lcnJvcicsIGVyci5kYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1ZygncmVjb25uZWN0IHN1Y2Nlc3MnKTtcbiAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRlbGF5KTtcblxuICAgIHRoaXMuc3Vicy5wdXNoKHtcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbnJlY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGF0dGVtcHQgPSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHM7XG4gIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnVwZGF0ZVNvY2tldElkcygpO1xuICB0aGlzLmVtaXRBbGwoJ3JlY29ubmVjdCcsIGF0dGVtcHQpO1xufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uO1xuXG4vKipcbiAqIEhlbHBlciBmb3Igc3Vic2NyaXB0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxFdmVudEVtaXR0ZXJ9IG9iaiB3aXRoIGBFbWl0dGVyYCBtaXhpbiBvciBgRXZlbnRFbWl0dGVyYFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIG9uIChvYmosIGV2LCBmbikge1xuICBvYmoub24oZXYsIGZuKTtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICBvYmoucmVtb3ZlTGlzdGVuZXIoZXYsIGZuKTtcbiAgICB9XG4gIH07XG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIHRvQXJyYXkgPSByZXF1aXJlKCd0by1hcnJheScpO1xudmFyIG9uID0gcmVxdWlyZSgnLi9vbicpO1xudmFyIGJpbmQgPSByZXF1aXJlKCdjb21wb25lbnQtYmluZCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDpzb2NrZXQnKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xudmFyIGhhc0JpbiA9IHJlcXVpcmUoJ2hhcy1iaW5hcnkyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gU29ja2V0O1xuXG4vKipcbiAqIEludGVybmFsIGV2ZW50cyAoYmxhY2tsaXN0ZWQpLlxuICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIGV2ZW50cyA9IHtcbiAgY29ubmVjdDogMSxcbiAgY29ubmVjdF9lcnJvcjogMSxcbiAgY29ubmVjdF90aW1lb3V0OiAxLFxuICBjb25uZWN0aW5nOiAxLFxuICBkaXNjb25uZWN0OiAxLFxuICBlcnJvcjogMSxcbiAgcmVjb25uZWN0OiAxLFxuICByZWNvbm5lY3RfYXR0ZW1wdDogMSxcbiAgcmVjb25uZWN0X2ZhaWxlZDogMSxcbiAgcmVjb25uZWN0X2Vycm9yOiAxLFxuICByZWNvbm5lY3Rpbmc6IDEsXG4gIHBpbmc6IDEsXG4gIHBvbmc6IDFcbn07XG5cbi8qKlxuICogU2hvcnRjdXQgdG8gYEVtaXR0ZXIjZW1pdGAuXG4gKi9cblxudmFyIGVtaXQgPSBFbWl0dGVyLnByb3RvdHlwZS5lbWl0O1xuXG4vKipcbiAqIGBTb2NrZXRgIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gU29ja2V0IChpbywgbnNwLCBvcHRzKSB7XG4gIHRoaXMuaW8gPSBpbztcbiAgdGhpcy5uc3AgPSBuc3A7XG4gIHRoaXMuanNvbiA9IHRoaXM7IC8vIGNvbXBhdFxuICB0aGlzLmlkcyA9IDA7XG4gIHRoaXMuYWNrcyA9IHt9O1xuICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5mbGFncyA9IHt9O1xuICBpZiAob3B0cyAmJiBvcHRzLnF1ZXJ5KSB7XG4gICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gIH1cbiAgaWYgKHRoaXMuaW8uYXV0b0Nvbm5lY3QpIHRoaXMub3BlbigpO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihTb2NrZXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBTdWJzY3JpYmUgdG8gb3BlbiwgY2xvc2UgYW5kIHBhY2tldCBldmVudHNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnN1YkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc3VicykgcmV0dXJuO1xuXG4gIHZhciBpbyA9IHRoaXMuaW87XG4gIHRoaXMuc3VicyA9IFtcbiAgICBvbihpbywgJ29wZW4nLCBiaW5kKHRoaXMsICdvbm9wZW4nKSksXG4gICAgb24oaW8sICdwYWNrZXQnLCBiaW5kKHRoaXMsICdvbnBhY2tldCcpKSxcbiAgICBvbihpbywgJ2Nsb3NlJywgYmluZCh0aGlzLCAnb25jbG9zZScpKVxuICBdO1xufTtcblxuLyoqXG4gKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUub3BlbiA9XG5Tb2NrZXQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbm5lY3RlZCkgcmV0dXJuIHRoaXM7XG5cbiAgdGhpcy5zdWJFdmVudHMoKTtcbiAgdGhpcy5pby5vcGVuKCk7IC8vIGVuc3VyZSBvcGVuXG4gIGlmICgnb3BlbicgPT09IHRoaXMuaW8ucmVhZHlTdGF0ZSkgdGhpcy5vbm9wZW4oKTtcbiAgdGhpcy5lbWl0KCdjb25uZWN0aW5nJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgYXJncy51bnNoaWZ0KCdtZXNzYWdlJyk7XG4gIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlIGBlbWl0YC5cbiAqIElmIHRoZSBldmVudCBpcyBpbiBgZXZlbnRzYCwgaXQncyBlbWl0dGVkIG5vcm1hbGx5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBuYW1lXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2KSB7XG4gIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXYpKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gIHZhciBwYWNrZXQgPSB7XG4gICAgdHlwZTogKHRoaXMuZmxhZ3MuYmluYXJ5ICE9PSB1bmRlZmluZWQgPyB0aGlzLmZsYWdzLmJpbmFyeSA6IGhhc0JpbihhcmdzKSkgPyBwYXJzZXIuQklOQVJZX0VWRU5UIDogcGFyc2VyLkVWRU5ULFxuICAgIGRhdGE6IGFyZ3NcbiAgfTtcblxuICBwYWNrZXQub3B0aW9ucyA9IHt9O1xuICBwYWNrZXQub3B0aW9ucy5jb21wcmVzcyA9ICF0aGlzLmZsYWdzIHx8IGZhbHNlICE9PSB0aGlzLmZsYWdzLmNvbXByZXNzO1xuXG4gIC8vIGV2ZW50IGFjayBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSkge1xuICAgIGRlYnVnKCdlbWl0dGluZyBwYWNrZXQgd2l0aCBhY2sgaWQgJWQnLCB0aGlzLmlkcyk7XG4gICAgdGhpcy5hY2tzW3RoaXMuaWRzXSA9IGFyZ3MucG9wKCk7XG4gICAgcGFja2V0LmlkID0gdGhpcy5pZHMrKztcbiAgfVxuXG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIHRoaXMucGFja2V0KHBhY2tldCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZW5kQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgfVxuXG4gIHRoaXMuZmxhZ3MgPSB7fTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHBhY2tldC5uc3AgPSB0aGlzLm5zcDtcbiAgdGhpcy5pby5wYWNrZXQocGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZW5naW5lIGBvcGVuYC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3RyYW5zcG9ydCBpcyBvcGVuIC0gY29ubmVjdGluZycpO1xuXG4gIC8vIHdyaXRlIGNvbm5lY3QgcGFja2V0IGlmIG5lY2Vzc2FyeVxuICBpZiAoJy8nICE9PSB0aGlzLm5zcCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5KSB7XG4gICAgICB2YXIgcXVlcnkgPSB0eXBlb2YgdGhpcy5xdWVyeSA9PT0gJ29iamVjdCcgPyBwYXJzZXFzLmVuY29kZSh0aGlzLnF1ZXJ5KSA6IHRoaXMucXVlcnk7XG4gICAgICBkZWJ1Zygnc2VuZGluZyBjb25uZWN0IHBhY2tldCB3aXRoIHF1ZXJ5ICVzJywgcXVlcnkpO1xuICAgICAgdGhpcy5wYWNrZXQoe3R5cGU6IHBhcnNlci5DT05ORUNULCBxdWVyeTogcXVlcnl9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWNrZXQoe3R5cGU6IHBhcnNlci5DT05ORUNUfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByZWFzb25cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgZGVidWcoJ2Nsb3NlICglcyknLCByZWFzb24pO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gIGRlbGV0ZSB0aGlzLmlkO1xuICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnLCByZWFzb24pO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHZhciBzYW1lTmFtZXNwYWNlID0gcGFja2V0Lm5zcCA9PT0gdGhpcy5uc3A7XG4gIHZhciByb290TmFtZXNwYWNlRXJyb3IgPSBwYWNrZXQudHlwZSA9PT0gcGFyc2VyLkVSUk9SICYmIHBhY2tldC5uc3AgPT09ICcvJztcblxuICBpZiAoIXNhbWVOYW1lc3BhY2UgJiYgIXJvb3ROYW1lc3BhY2VFcnJvcikgcmV0dXJuO1xuXG4gIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICBjYXNlIHBhcnNlci5DT05ORUNUOlxuICAgICAgdGhpcy5vbmNvbm5lY3QoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuRVZFTlQ6XG4gICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuQklOQVJZX0VWRU5UOlxuICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkFDSzpcbiAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuQklOQVJZX0FDSzpcbiAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuRElTQ09OTkVDVDpcbiAgICAgIHRoaXMub25kaXNjb25uZWN0KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkVSUk9SOlxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHBhY2tldC5kYXRhKTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25ldmVudCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdmFyIGFyZ3MgPSBwYWNrZXQuZGF0YSB8fCBbXTtcbiAgZGVidWcoJ2VtaXR0aW5nIGV2ZW50ICVqJywgYXJncyk7XG5cbiAgaWYgKG51bGwgIT0gcGFja2V0LmlkKSB7XG4gICAgZGVidWcoJ2F0dGFjaGluZyBhY2sgY2FsbGJhY2sgdG8gZXZlbnQnKTtcbiAgICBhcmdzLnB1c2godGhpcy5hY2socGFja2V0LmlkKSk7XG4gIH1cblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICBlbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5wdXNoKGFyZ3MpO1xuICB9XG59O1xuXG4vKipcbiAqIFByb2R1Y2VzIGFuIGFjayBjYWxsYmFjayB0byBlbWl0IHdpdGggYW4gZXZlbnQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5hY2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2VudCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgIGlmIChzZW50KSByZXR1cm47XG4gICAgc2VudCA9IHRydWU7XG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gICAgZGVidWcoJ3NlbmRpbmcgYWNrICVqJywgYXJncyk7XG5cbiAgICBzZWxmLnBhY2tldCh7XG4gICAgICB0eXBlOiBoYXNCaW4oYXJncykgPyBwYXJzZXIuQklOQVJZX0FDSyA6IHBhcnNlci5BQ0ssXG4gICAgICBpZDogaWQsXG4gICAgICBkYXRhOiBhcmdzXG4gICAgfSk7XG4gIH07XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGFja25vd2xlZ2VtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25hY2sgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHZhciBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBhY2spIHtcbiAgICBkZWJ1ZygnY2FsbGluZyBhY2sgJXMgd2l0aCAlaicsIHBhY2tldC5pZCwgcGFja2V0LmRhdGEpO1xuICAgIGFjay5hcHBseSh0aGlzLCBwYWNrZXQuZGF0YSk7XG4gICAgZGVsZXRlIHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICB9IGVsc2Uge1xuICAgIGRlYnVnKCdiYWQgYWNrICVzJywgcGFja2V0LmlkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcbiAgdGhpcy5lbWl0QnVmZmVyZWQoKTtcbn07XG5cbi8qKlxuICogRW1pdCBidWZmZXJlZCBldmVudHMgKHJlY2VpdmVkIGFuZCBlbWl0dGVkKS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmVtaXRCdWZmZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLnJlY2VpdmVCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICBlbWl0LmFwcGx5KHRoaXMsIHRoaXMucmVjZWl2ZUJ1ZmZlcltpXSk7XG4gIH1cbiAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2VuZEJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucGFja2V0KHRoaXMuc2VuZEJ1ZmZlcltpXSk7XG4gIH1cbiAgdGhpcy5zZW5kQnVmZmVyID0gW107XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHNlcnZlciBkaXNjb25uZWN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Zygnc2VydmVyIGRpc2Nvbm5lY3QgKCVzKScsIHRoaXMubnNwKTtcbiAgdGhpcy5kZXN0cm95KCk7XG4gIHRoaXMub25jbG9zZSgnaW8gc2VydmVyIGRpc2Nvbm5lY3QnKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZm9yY2VkIGNsaWVudC9zZXJ2ZXIgc2lkZSBkaXNjb25uZWN0aW9ucyxcbiAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gKiB0aGF0IHJlY29ubmVjdGlvbnMgZG9uJ3QgZ2V0IHRyaWdnZXJlZCBmb3IgdGhpcy5cbiAqXG4gKiBAYXBpIHByaXZhdGUuXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdWJzKSB7XG4gICAgLy8gY2xlYW4gc3Vic2NyaXB0aW9ucyB0byBhdm9pZCByZWNvbm5lY3Rpb25zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3Vic1tpXS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuc3VicyA9IG51bGw7XG4gIH1cblxuICB0aGlzLmlvLmRlc3Ryb3kodGhpcyk7XG59O1xuXG4vKipcbiAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXQgbWFudWFsbHkuXG4gKlxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuY2xvc2UgPVxuU29ja2V0LnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICBkZWJ1ZygncGVyZm9ybWluZyBkaXNjb25uZWN0ICglcyknLCB0aGlzLm5zcCk7XG4gICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBwYXJzZXIuRElTQ09OTkVDVCB9KTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBzb2NrZXQgZnJvbSBwb29sXG4gIHRoaXMuZGVzdHJveSgpO1xuXG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIC8vIGZpcmUgZXZlbnRzXG4gICAgdGhpcy5vbmNsb3NlKCdpbyBjbGllbnQgZGlzY29ubmVjdCcpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjb21wcmVzcyBmbGFnLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaWYgYHRydWVgLCBjb21wcmVzc2VzIHRoZSBzZW5kaW5nIGRhdGFcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNvbXByZXNzID0gZnVuY3Rpb24gKGNvbXByZXNzKSB7XG4gIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGJpbmFyeSBmbGFnXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSB3aGV0aGVyIHRoZSBlbWl0dGVkIGRhdGEgY29udGFpbnMgYmluYXJ5XG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5iaW5hcnkgPSBmdW5jdGlvbiAoYmluYXJ5KSB7XG4gIHRoaXMuZmxhZ3MuYmluYXJ5ID0gYmluYXJ5O1xuICByZXR1cm4gdGhpcztcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2V1cmkgPSByZXF1aXJlKCdwYXJzZXVyaScpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDp1cmwnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVybDtcblxuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBBbiBvYmplY3QgbWVhbnQgdG8gbWltaWMgd2luZG93LmxvY2F0aW9uLlxuICogICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdXJsICh1cmksIGxvYykge1xuICB2YXIgb2JqID0gdXJpO1xuXG4gIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gIGxvYyA9IGxvYyB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhdGlvbik7XG4gIGlmIChudWxsID09IHVyaSkgdXJpID0gbG9jLnByb3RvY29sICsgJy8vJyArIGxvYy5ob3N0O1xuXG4gIC8vIHJlbGF0aXZlIHBhdGggc3VwcG9ydFxuICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB1cmkpIHtcbiAgICBpZiAoJy8nID09PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICBpZiAoJy8nID09PSB1cmkuY2hhckF0KDEpKSB7XG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVyaSA9IGxvYy5ob3N0ICsgdXJpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghL14oaHR0cHM/fHdzcz8pOlxcL1xcLy8udGVzdCh1cmkpKSB7XG4gICAgICBkZWJ1ZygncHJvdG9jb2wtbGVzcyB1cmwgJXMnLCB1cmkpO1xuICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbG9jKSB7XG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArICcvLycgKyB1cmk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmkgPSAnaHR0cHM6Ly8nICsgdXJpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHBhcnNlXG4gICAgZGVidWcoJ3BhcnNlICVzJywgdXJpKTtcbiAgICBvYmogPSBwYXJzZXVyaSh1cmkpO1xuICB9XG5cbiAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gIGlmICghb2JqLnBvcnQpIHtcbiAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgIG9iai5wb3J0ID0gJzgwJztcbiAgICB9IGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgb2JqLnBvcnQgPSAnNDQzJztcbiAgICB9XG4gIH1cblxuICBvYmoucGF0aCA9IG9iai5wYXRoIHx8ICcvJztcblxuICB2YXIgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHZhciBob3N0ID0gaXB2NiA/ICdbJyArIG9iai5ob3N0ICsgJ10nIDogb2JqLmhvc3Q7XG5cbiAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAnOicgKyBvYmoucG9ydDtcbiAgLy8gZGVmaW5lIGhyZWZcbiAgb2JqLmhyZWYgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAobG9jICYmIGxvYy5wb3J0ID09PSBvYmoucG9ydCA/ICcnIDogKCc6JyArIG9iai5wb3J0KSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VzID0gW107XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIHZhciBwcmV2VGltZTtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdmFyIGluZGV4ID0gZXhwb3J0cy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGV4cG9ydHMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIGk7XG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleHBvcnRzLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnN0YW5jZSA9IGV4cG9ydHMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCIvKmdsb2JhbCBCbG9iLEZpbGUqL1xuXG4vKipcbiAqIE1vZHVsZSByZXF1aXJlbWVudHNcbiAqL1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbnZhciBpc0J1ZiA9IHJlcXVpcmUoJy4vaXMtYnVmZmVyJyk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEJsb2IpID09PSAnW29iamVjdCBCbG9iQ29uc3RydWN0b3JdJyk7XG52YXIgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIEZpbGUgIT09ICd1bmRlZmluZWQnICYmIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09ICdbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl0nKTtcblxuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSBCdWZmZXIgfCBBcnJheUJ1ZmZlciBpbiBwYWNrZXQgd2l0aCBhIG51bWJlcmVkIHBsYWNlaG9sZGVyLlxuICogQW55dGhpbmcgd2l0aCBibG9icyBvciBmaWxlcyBzaG91bGQgYmUgZmVkIHRocm91Z2ggcmVtb3ZlQmxvYnMgYmVmb3JlIGNvbWluZ1xuICogaGVyZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gc29ja2V0LmlvIGV2ZW50IHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGRlY29uc3RydWN0ZWQgcGFja2V0IGFuZCBsaXN0IG9mIGJ1ZmZlcnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1xuICB2YXIgYnVmZmVycyA9IFtdO1xuICB2YXIgcGFja2V0RGF0YSA9IHBhY2tldC5kYXRhO1xuICB2YXIgcGFjayA9IHBhY2tldDtcbiAgcGFjay5kYXRhID0gX2RlY29uc3RydWN0UGFja2V0KHBhY2tldERhdGEsIGJ1ZmZlcnMpO1xuICBwYWNrLmF0dGFjaG1lbnRzID0gYnVmZmVycy5sZW5ndGg7IC8vIG51bWJlciBvZiBiaW5hcnkgJ2F0dGFjaG1lbnRzJ1xuICByZXR1cm4ge3BhY2tldDogcGFjaywgYnVmZmVyczogYnVmZmVyc307XG59O1xuXG5mdW5jdGlvbiBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICBpZiAoIWRhdGEpIHJldHVybiBkYXRhO1xuXG4gIGlmIChpc0J1ZihkYXRhKSkge1xuICAgIHZhciBwbGFjZWhvbGRlciA9IHsgX3BsYWNlaG9sZGVyOiB0cnVlLCBudW06IGJ1ZmZlcnMubGVuZ3RoIH07XG4gICAgYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfSBlbHNlIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgdmFyIG5ld0RhdGEgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbmV3RGF0YVtpXSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmICEoZGF0YSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgdmFyIG5ld0RhdGEgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgbmV3RGF0YVtrZXldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdEYXRhO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFJlY29uc3RydWN0cyBhIGJpbmFyeSBwYWNrZXQgZnJvbSBpdHMgcGxhY2Vob2xkZXIgcGFja2V0IGFuZCBidWZmZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICogQHBhcmFtIHtBcnJheX0gYnVmZmVycyAtIGJpbmFyeSBidWZmZXJzIHRvIHB1dCBpbiBwbGFjZWhvbGRlciBwb3NpdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCwgYnVmZmVycykge1xuICBwYWNrZXQuZGF0YSA9IF9yZWNvbnN0cnVjdFBhY2tldChwYWNrZXQuZGF0YSwgYnVmZmVycyk7XG4gIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICByZXR1cm4gcGFja2V0O1xufTtcblxuZnVuY3Rpb24gX3JlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgaWYgKCFkYXRhKSByZXR1cm4gZGF0YTtcblxuICBpZiAoZGF0YSAmJiBkYXRhLl9wbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBidWZmZXJzW2RhdGEubnVtXTsgLy8gYXBwcm9wcmlhdGUgYnVmZmVyIChzaG91bGQgYmUgbmF0dXJhbCBvcmRlciBhbnl3YXkpXG4gIH0gZWxzZSBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YVtpXSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIGRhdGFba2V5XSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHJlbW92ZXMgQmxvYnMgb3IgRmlsZXMgZnJvbSBkYXRhIHZpYVxuICogRmlsZVJlYWRlcidzIHJlYWRBc0FycmF5QnVmZmVyIG1ldGhvZC4gVXNlZCBiZWZvcmUgZW5jb2RpbmdcbiAqIGRhdGEgYXMgbXNncGFjay4gQ2FsbHMgY2FsbGJhY2sgd2l0aCB0aGUgYmxvYmxlc3MgZGF0YS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmVtb3ZlQmxvYnMgPSBmdW5jdGlvbihkYXRhLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBfcmVtb3ZlQmxvYnMob2JqLCBjdXJLZXksIGNvbnRhaW5pbmdPYmplY3QpIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIG9iajtcblxuICAgIC8vIGNvbnZlcnQgYW55IGJsb2JcbiAgICBpZiAoKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSkge1xuICAgICAgcGVuZGluZ0Jsb2JzKys7XG5cbiAgICAgIC8vIGFzeW5jIGZpbGVyZWFkZXJcbiAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7IC8vIHRoaXMucmVzdWx0ID09IGFycmF5YnVmZmVyXG4gICAgICAgIGlmIChjb250YWluaW5nT2JqZWN0KSB7XG4gICAgICAgICAgY29udGFpbmluZ09iamVjdFtjdXJLZXldID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYmxvYmxlc3NEYXRhID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3RoaW5nIHBlbmRpbmcgaXRzIGNhbGxiYWNrIHRpbWVcbiAgICAgICAgaWYoISAtLXBlbmRpbmdCbG9icykge1xuICAgICAgICAgIGNhbGxiYWNrKGJsb2JsZXNzRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIob2JqKTsgLy8gYmxvYiAtPiBhcnJheWJ1ZmZlclxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7IC8vIGhhbmRsZSBhcnJheVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtpXSwgaSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFpc0J1ZihvYmopKSB7IC8vIGFuZCBvYmplY3RcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHBlbmRpbmdCbG9icyA9IDA7XG4gIHZhciBibG9ibGVzc0RhdGEgPSBkYXRhO1xuICBfcmVtb3ZlQmxvYnMoYmxvYmxlc3NEYXRhKTtcbiAgaWYgKCFwZW5kaW5nQmxvYnMpIHtcbiAgICBjYWxsYmFjayhibG9ibGVzc0RhdGEpO1xuICB9XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIGJpbmFyeSA9IHJlcXVpcmUoJy4vYmluYXJ5Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbnZhciBpc0J1ZiA9IHJlcXVpcmUoJy4vaXMtYnVmZmVyJyk7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucHJvdG9jb2wgPSA0O1xuXG4vKipcbiAqIFBhY2tldCB0eXBlcy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMudHlwZXMgPSBbXG4gICdDT05ORUNUJyxcbiAgJ0RJU0NPTk5FQ1QnLFxuICAnRVZFTlQnLFxuICAnQUNLJyxcbiAgJ0VSUk9SJyxcbiAgJ0JJTkFSWV9FVkVOVCcsXG4gICdCSU5BUllfQUNLJ1xuXTtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgY29ubmVjdGAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkNPTk5FQ1QgPSAwO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBkaXNjb25uZWN0YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRElTQ09OTkVDVCA9IDE7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGV2ZW50YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRVZFTlQgPSAyO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBhY2tgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5BQ0sgPSAzO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBlcnJvcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkVSUk9SID0gNDtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSAnYmluYXJ5IGV2ZW50J1xuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5CSU5BUllfRVZFTlQgPSA1O1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBiaW5hcnkgYWNrYC4gRm9yIGFja3Mgd2l0aCBiaW5hcnkgYXJndW1lbnRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5CSU5BUllfQUNLID0gNjtcblxuLyoqXG4gKiBFbmNvZGVyIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5FbmNvZGVyID0gRW5jb2RlcjtcblxuLyoqXG4gKiBEZWNvZGVyIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5EZWNvZGVyID0gRGVjb2RlcjtcblxuLyoqXG4gKiBBIHNvY2tldC5pbyBFbmNvZGVyIGluc3RhbmNlXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbmNvZGVyKCkge31cblxudmFyIEVSUk9SX1BBQ0tFVCA9IGV4cG9ydHMuRVJST1IgKyAnXCJlbmNvZGUgZXJyb3JcIic7XG5cbi8qKlxuICogRW5jb2RlIGEgcGFja2V0IGFzIGEgc2luZ2xlIHN0cmluZyBpZiBub24tYmluYXJ5LCBvciBhcyBhXG4gKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gcGFja2V0IG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBoYW5kbGUgZW5jb2RpbmdzIChsaWtlbHkgZW5naW5lLndyaXRlKVxuICogQHJldHVybiBDYWxscyBjYWxsYmFjayB3aXRoIEFycmF5IG9mIGVuY29kaW5nc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihvYmosIGNhbGxiYWNrKXtcbiAgZGVidWcoJ2VuY29kaW5nIHBhY2tldCAlaicsIG9iaik7XG5cbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBvYmoudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IG9iai50eXBlKSB7XG4gICAgZW5jb2RlQXNCaW5hcnkob2JqLCBjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGVuY29kaW5nID0gZW5jb2RlQXNTdHJpbmcob2JqKTtcbiAgICBjYWxsYmFjayhbZW5jb2RpbmddKTtcbiAgfVxufTtcblxuLyoqXG4gKiBFbmNvZGUgcGFja2V0IGFzIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGVuY29kZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVuY29kZUFzU3RyaW5nKG9iaikge1xuXG4gIC8vIGZpcnN0IGlzIHR5cGVcbiAgdmFyIHN0ciA9ICcnICsgb2JqLnR5cGU7XG5cbiAgLy8gYXR0YWNobWVudHMgaWYgd2UgaGF2ZSB0aGVtXG4gIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gb2JqLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBvYmoudHlwZSkge1xuICAgIHN0ciArPSBvYmouYXR0YWNobWVudHMgKyAnLSc7XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gIC8vIHdlIGFwcGVuZCBpdCBmb2xsb3dlZCBieSBhIGNvbW1hIGAsYFxuICBpZiAob2JqLm5zcCAmJiAnLycgIT09IG9iai5uc3ApIHtcbiAgICBzdHIgKz0gb2JqLm5zcCArICcsJztcbiAgfVxuXG4gIC8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IHRoZSBpZFxuICBpZiAobnVsbCAhPSBvYmouaWQpIHtcbiAgICBzdHIgKz0gb2JqLmlkO1xuICB9XG5cbiAgLy8ganNvbiBkYXRhXG4gIGlmIChudWxsICE9IG9iai5kYXRhKSB7XG4gICAgdmFyIHBheWxvYWQgPSB0cnlTdHJpbmdpZnkob2JqLmRhdGEpO1xuICAgIGlmIChwYXlsb2FkICE9PSBmYWxzZSkge1xuICAgICAgc3RyICs9IHBheWxvYWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFUlJPUl9QQUNLRVQ7XG4gICAgfVxuICB9XG5cbiAgZGVidWcoJ2VuY29kZWQgJWogYXMgJXMnLCBvYmosIHN0cik7XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIHRyeVN0cmluZ2lmeShzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3RyKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmNvZGUgcGFja2V0IGFzICdidWZmZXIgc2VxdWVuY2UnIGJ5IHJlbW92aW5nIGJsb2JzLCBhbmRcbiAqIGRlY29uc3RydWN0aW5nIHBhY2tldCBpbnRvIG9iamVjdCB3aXRoIHBsYWNlaG9sZGVycyBhbmRcbiAqIGEgbGlzdCBvZiBidWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge0J1ZmZlcn0gZW5jb2RlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlQXNCaW5hcnkob2JqLCBjYWxsYmFjaykge1xuXG4gIGZ1bmN0aW9uIHdyaXRlRW5jb2RpbmcoYmxvYmxlc3NEYXRhKSB7XG4gICAgdmFyIGRlY29uc3RydWN0aW9uID0gYmluYXJ5LmRlY29uc3RydWN0UGFja2V0KGJsb2JsZXNzRGF0YSk7XG4gICAgdmFyIHBhY2sgPSBlbmNvZGVBc1N0cmluZyhkZWNvbnN0cnVjdGlvbi5wYWNrZXQpO1xuICAgIHZhciBidWZmZXJzID0gZGVjb25zdHJ1Y3Rpb24uYnVmZmVycztcblxuICAgIGJ1ZmZlcnMudW5zaGlmdChwYWNrKTsgLy8gYWRkIHBhY2tldCBpbmZvIHRvIGJlZ2lubmluZyBvZiBkYXRhIGxpc3RcbiAgICBjYWxsYmFjayhidWZmZXJzKTsgLy8gd3JpdGUgYWxsIHRoZSBidWZmZXJzXG4gIH1cblxuICBiaW5hcnkucmVtb3ZlQmxvYnMob2JqLCB3cml0ZUVuY29kaW5nKTtcbn1cblxuLyoqXG4gKiBBIHNvY2tldC5pbyBEZWNvZGVyIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBkZWNvZGVyXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIERlY29kZXIoKSB7XG4gIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYCB3aXRoIERlY29kZXIuXG4gKi9cblxuRW1pdHRlcihEZWNvZGVyLnByb3RvdHlwZSk7XG5cbi8qKlxuICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhY2tldCBzdHJpbmcgaW50byBwYWNrZXQgSlNPTi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIC0gZW5jb2RlZCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkRlY29kZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgcGFja2V0O1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICBwYWNrZXQgPSBkZWNvZGVTdHJpbmcob2JqKTtcbiAgICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IHBhY2tldC50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gcGFja2V0LnR5cGUpIHsgLy8gYmluYXJ5IHBhY2tldCdzIGpzb25cbiAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG5ldyBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCk7XG5cbiAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yLnJlY29uUGFjay5hdHRhY2htZW50cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG5vbi1iaW5hcnkgZnVsbCBwYWNrZXRcbiAgICAgIHRoaXMuZW1pdCgnZGVjb2RlZCcsIHBhY2tldCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQnVmKG9iaikgfHwgb2JqLmJhc2U2NCkgeyAvLyByYXcgYmluYXJ5IGRhdGFcbiAgICBpZiAoIXRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnb3QgYmluYXJ5IGRhdGEgd2hlbiBub3QgcmVjb25zdHJ1Y3RpbmcgYSBwYWNrZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFja2V0ID0gdGhpcy5yZWNvbnN0cnVjdG9yLnRha2VCaW5hcnlEYXRhKG9iaik7XG4gICAgICBpZiAocGFja2V0KSB7IC8vIHJlY2VpdmVkIGZpbmFsIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdHlwZTogJyArIG9iaik7XG4gIH1cbn07XG5cbi8qKlxuICogRGVjb2RlIGEgcGFja2V0IFN0cmluZyAoSlNPTiBkYXRhKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBkZWNvZGVTdHJpbmcoc3RyKSB7XG4gIHZhciBpID0gMDtcbiAgLy8gbG9vayB1cCB0eXBlXG4gIHZhciBwID0ge1xuICAgIHR5cGU6IE51bWJlcihzdHIuY2hhckF0KDApKVxuICB9O1xuXG4gIGlmIChudWxsID09IGV4cG9ydHMudHlwZXNbcC50eXBlXSkge1xuICAgIHJldHVybiBlcnJvcigndW5rbm93biBwYWNrZXQgdHlwZSAnICsgcC50eXBlKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAgYXR0YWNobWVudHMgaWYgdHlwZSBiaW5hcnlcbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBwLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBwLnR5cGUpIHtcbiAgICB2YXIgYnVmID0gJyc7XG4gICAgd2hpbGUgKHN0ci5jaGFyQXQoKytpKSAhPT0gJy0nKSB7XG4gICAgICBidWYgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChpID09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYnVmICE9IE51bWJlcihidWYpIHx8IHN0ci5jaGFyQXQoaSkgIT09ICctJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGF0dGFjaG1lbnRzJyk7XG4gICAgfVxuICAgIHAuYXR0YWNobWVudHMgPSBOdW1iZXIoYnVmKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAgbmFtZXNwYWNlIChpZiBhbnkpXG4gIGlmICgnLycgPT09IHN0ci5jaGFyQXQoaSArIDEpKSB7XG4gICAgcC5uc3AgPSAnJztcbiAgICB3aGlsZSAoKytpKSB7XG4gICAgICB2YXIgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAoJywnID09PSBjKSBicmVhaztcbiAgICAgIHAubnNwICs9IGM7XG4gICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aCkgYnJlYWs7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHAubnNwID0gJy8nO1xuICB9XG5cbiAgLy8gbG9vayB1cCBpZFxuICB2YXIgbmV4dCA9IHN0ci5jaGFyQXQoaSArIDEpO1xuICBpZiAoJycgIT09IG5leHQgJiYgTnVtYmVyKG5leHQpID09IG5leHQpIHtcbiAgICBwLmlkID0gJyc7XG4gICAgd2hpbGUgKCsraSkge1xuICAgICAgdmFyIGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKG51bGwgPT0gYyB8fCBOdW1iZXIoYykgIT0gYykge1xuICAgICAgICAtLWk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcC5pZCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgICBwLmlkID0gTnVtYmVyKHAuaWQpO1xuICB9XG5cbiAgLy8gbG9vayB1cCBqc29uIGRhdGFcbiAgaWYgKHN0ci5jaGFyQXQoKytpKSkge1xuICAgIHZhciBwYXlsb2FkID0gdHJ5UGFyc2Uoc3RyLnN1YnN0cihpKSk7XG4gICAgdmFyIGlzUGF5bG9hZFZhbGlkID0gcGF5bG9hZCAhPT0gZmFsc2UgJiYgKHAudHlwZSA9PT0gZXhwb3J0cy5FUlJPUiB8fCBpc0FycmF5KHBheWxvYWQpKTtcbiAgICBpZiAoaXNQYXlsb2FkVmFsaWQpIHtcbiAgICAgIHAuZGF0YSA9IHBheWxvYWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlcnJvcignaW52YWxpZCBwYXlsb2FkJyk7XG4gICAgfVxuICB9XG5cbiAgZGVidWcoJ2RlY29kZWQgJXMgYXMgJWonLCBzdHIsIHApO1xuICByZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2Uoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWFsbG9jYXRlcyBhIHBhcnNlcidzIHJlc291cmNlc1xuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRGVjb2Rlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICogZGVjb2RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCaW5hcnlSZWNvbnN0cnVjdG9yfSBpbml0aWFsaXplZCByZWNvbnN0cnVjdG9yXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCkge1xuICB0aGlzLnJlY29uUGFjayA9IHBhY2tldDtcbiAgdGhpcy5idWZmZXJzID0gW107XG59XG5cbi8qKlxuICogTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGJpbmFyeSBkYXRhIHJlY2VpdmVkIGZyb20gY29ubmVjdGlvblxuICogYWZ0ZXIgYSBCSU5BUllfRVZFTlQgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXlCdWZmZXJ9IGJpbkRhdGEgLSB0aGUgcmF3IGJpbmFyeSBkYXRhIHJlY2VpdmVkXG4gKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSByZXR1cm5zIG51bGwgaWYgbW9yZSBiaW5hcnkgZGF0YSBpcyBleHBlY3RlZCBvclxuICogICBhIHJlY29uc3RydWN0ZWQgcGFja2V0IG9iamVjdCBpZiBhbGwgYnVmZmVycyBoYXZlIGJlZW4gcmVjZWl2ZWQuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5CaW5hcnlSZWNvbnN0cnVjdG9yLnByb3RvdHlwZS50YWtlQmluYXJ5RGF0YSA9IGZ1bmN0aW9uKGJpbkRhdGEpIHtcbiAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09PSB0aGlzLnJlY29uUGFjay5hdHRhY2htZW50cykgeyAvLyBkb25lIHdpdGggYnVmZmVyIGxpc3RcbiAgICB2YXIgcGFja2V0ID0gYmluYXJ5LnJlY29uc3RydWN0UGFja2V0KHRoaXMucmVjb25QYWNrLCB0aGlzLmJ1ZmZlcnMpO1xuICAgIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgIHJldHVybiBwYWNrZXQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIENsZWFucyB1cCBiaW5hcnkgcGFja2V0IHJlY29uc3RydWN0aW9uIHZhcmlhYmxlcy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5CaW5hcnlSZWNvbnN0cnVjdG9yLnByb3RvdHlwZS5maW5pc2hlZFJlY29uc3RydWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVjb25QYWNrID0gbnVsbDtcbiAgdGhpcy5idWZmZXJzID0gW107XG59O1xuXG5mdW5jdGlvbiBlcnJvcihtc2cpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBleHBvcnRzLkVSUk9SLFxuICAgIGRhdGE6ICdwYXJzZXIgZXJyb3I6ICcgKyBtc2dcbiAgfTtcbn1cbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZjtcblxudmFyIHdpdGhOYXRpdmVCdWZmZXIgPSB0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBCdWZmZXIuaXNCdWZmZXIgPT09ICdmdW5jdGlvbic7XG52YXIgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nO1xuXG52YXIgaXNWaWV3ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopIDogKG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBvYmogaXMgYSBidWZmZXIgb3IgYW4gYXJyYXlidWZmZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNCdWYob2JqKSB7XG4gIHJldHVybiAod2l0aE5hdGl2ZUJ1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIob2JqKSkgfHxcbiAgICAgICAgICAod2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmIChvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcob2JqKSkpO1xufVxuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsXG4gICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJyxcbiAgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLFxuICAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsXG4gICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJyxcbiAgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLFxuICAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsXG4gICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJyxcbiAgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLFxuICAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsXG4gICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0cy5pbnN0YW5jZXMgPSBbXTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuICByZXR1cm4gZGVidWc7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB2YXIgaW5kZXggPSBleHBvcnRzLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgZXhwb3J0cy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgaTtcbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4cG9ydHMuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGluc3RhbmNlID0gZXhwb3J0cy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgaWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0b0FycmF5XG5cbmZ1bmN0aW9uIHRvQXJyYXkobGlzdCwgaW5kZXgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXVxuXG4gICAgaW5kZXggPSBpbmRleCB8fCAwXG5cbiAgICBmb3IgKHZhciBpID0gaW5kZXggfHwgMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXlbaSAtIGluZGV4XSA9IGxpc3RbaV1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJylcbiAgLCBsZW5ndGggPSA2NFxuICAsIG1hcCA9IHt9XG4gICwgc2VlZCA9IDBcbiAgLCBpID0gMFxuICAsIHByZXY7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgdmFyIGVuY29kZWQgPSAnJztcblxuICBkbyB7XG4gICAgZW5jb2RlZCA9IGFscGhhYmV0W251bSAlIGxlbmd0aF0gKyBlbmNvZGVkO1xuICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbnRlZ2VyIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgdmFyIGRlY29kZWQgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBkZWNvZGVkID0gZGVjb2RlZCAqIGxlbmd0aCArIG1hcFtzdHIuY2hhckF0KGkpXTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG4vKipcbiAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB5ZWFzdCgpIHtcbiAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgaWYgKG5vdyAhPT0gcHJldikgcmV0dXJuIHNlZWQgPSAwLCBwcmV2ID0gbm93O1xuICByZXR1cm4gbm93ICsnLicrIGVuY29kZShzZWVkKyspO1xufVxuXG4vL1xuLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbi8vXG5mb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgYHllYXN0YCwgYGVuY29kZWAgYW5kIGBkZWNvZGVgIGZ1bmN0aW9ucy5cbi8vXG55ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG55ZWFzdC5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==