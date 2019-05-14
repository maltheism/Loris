/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/user_accounts/jsx/userAccountsIndex.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jsx/DataTable.js":
/*!**************************!*\
  !*** ./jsx/DataTable.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PaginationLinks = __webpack_require__(/*! jsx/PaginationLinks */ "./jsx/PaginationLinks.js");

var _PaginationLinks2 = _interopRequireDefault(_PaginationLinks);

var _reactAddonsCreateFragment = __webpack_require__(/*! react-addons-create-fragment */ "./node_modules/react-addons-create-fragment/index.js");

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file contains React component for Data Table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Loris Team
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Data Table component
 * Displays a set of data that is receives via props.
 */
var DataTable = function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable(props) {
    _classCallCheck(this, DataTable);

    var _this = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

    _this.state = {
      PageNumber: 1,
      SortColumn: -1,
      SortOrder: 'ASC',
      RowsPerPage: 20,
      Hide: _this.props.Hide
    };

    _this.changePage = _this.changePage.bind(_this);
    _this.setSortColumn = _this.setSortColumn.bind(_this);
    _this.changeRowsPerPage = _this.changeRowsPerPage.bind(_this);
    _this.downloadCSV = _this.downloadCSV.bind(_this);
    _this.countFilteredRows = _this.countFilteredRows.bind(_this);
    _this.getSortedRows = _this.getSortedRows.bind(_this); //
    _this.hasFilterKeyword = _this.hasFilterKeyword.bind(_this);
    _this.renderActions = _this.renderActions.bind(_this);
    return _this;
  }

  _createClass(DataTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (jQuery.fn.DynamicTable) {
        if (this.props.freezeColumn) {
          $('#dynamictable').DynamicTable({
            freezeColumn: this.props.freezeColumn
          });
        } else {
          $('#dynamictable').DynamicTable();
        }
        if (this.state.Hide.defaultColumn) {
          $('#dynamictable').find('tbody td:eq(0)').hide();
        }
      }

      // Retrieve module preferences
      var modulePrefs = JSON.parse(localStorage.getItem('modulePrefs'));

      // Init modulePrefs object
      if (modulePrefs === null) {
        modulePrefs = {};
      }

      // Init modulePrefs for current module
      if (modulePrefs[loris.TestName] === undefined) {
        modulePrefs[loris.TestName] = {};
        modulePrefs[loris.TestName].rowsPerPage = this.state.RowsPerPage;
      }

      // Set rows per page
      var rowsPerPage = modulePrefs[loris.TestName].rowsPerPage;
      this.setState({
        RowsPerPage: rowsPerPage
      });

      // Make prefs accesible within component
      this.modulePrefs = modulePrefs;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (jQuery.fn.DynamicTable) {
        if (this.props.freezeColumn) {
          $('#dynamictable').DynamicTable({
            freezeColumn: this.props.freezeColumn
          });
        } else {
          $('#dynamictable').DynamicTable();
        }
      }
      if (this.props.onSort && (this.state.SortColumn !== prevState.SortColumn || this.state.SortOrder !== prevState.SortOrder)) {
        var index = this.getSortedRows();
        var headerList = this.props.fields.map(function (field) {
          return field.label;
        });
        this.props.onSort(index, this.props.data, headerList);
      }
    }
  }, {
    key: 'changePage',
    value: function changePage(pageNo) {
      this.setState({
        PageNumber: pageNo
      });
    }
  }, {
    key: 'setSortColumn',
    value: function setSortColumn(colNumber) {
      return function (e) {
        if (this.state.SortColumn === colNumber) {
          this.setState({
            SortOrder: this.state.SortOrder === 'ASC' ? 'DESC' : 'ASC'
          });
        } else {
          this.setState({
            SortColumn: colNumber
          });
        }
      };
    }
  }, {
    key: 'changeRowsPerPage',
    value: function changeRowsPerPage(val) {
      var rowsPerPage = val.target.value;
      var modulePrefs = this.modulePrefs;

      // Save current selection
      modulePrefs[loris.TestName].rowsPerPage = rowsPerPage;

      // Update localstorage
      localStorage.setItem('modulePrefs', JSON.stringify(modulePrefs));

      this.setState({
        RowsPerPage: rowsPerPage,
        PageNumber: 1
      });
    }
  }, {
    key: 'downloadCSV',
    value: function downloadCSV(csvData) {
      var csvworker = new Worker(loris.BaseURL + '/js/workers/savecsv.js');

      csvworker.addEventListener('message', function (e) {
        var dataURL = void 0;
        var dataDate = void 0;
        var link = void 0;
        if (e.data.cmd === 'SaveCSV') {
          dataDate = new Date().toISOString();
          dataURL = window.URL.createObjectURL(e.data.message);
          link = document.createElement('a');
          link.download = 'data-' + dataDate + '.csv';
          link.type = 'text/csv';
          link.href = dataURL;
          document.body.appendChild(link);
          $(link)[0].click();
          document.body.removeChild(link);
        }
      });
      var headerList = this.props.fields.map(function (field) {
        return field.label;
      });
      csvworker.postMessage({
        cmd: 'SaveFile',
        data: csvData,
        headers: headerList,
        identifiers: this.props.RowNameMap
      });
    }
  }, {
    key: 'countFilteredRows',
    value: function countFilteredRows() {
      var useKeyword = false;
      var filterMatchCount = 0;
      var filterValuesCount = this.props.filter ? Object.keys(this.props.filter).length : 0;
      var tableData = this.props.data;
      var fieldData = this.props.fields;

      if (this.props.filter.keyword) {
        useKeyword = true;
      }

      if (useKeyword) {
        filterValuesCount -= 1;
      }

      for (var i = 0; i < tableData.length; i++) {
        var headerCount = 0;
        var keywordMatch = 0;
        for (var j = 0; j < fieldData.length; j++) {
          var data = tableData[i] ? tableData[i][j] : null;
          if (this.hasFilterKeyword((fieldData[j].filter || {}).name, data)) {
            headerCount++;
          }
          if (useKeyword) {
            if (this.hasFilterKeyword('keyword', data)) {
              keywordMatch++;
            }
          }
        }

        if (headerCount === filterValuesCount && (useKeyword === true && keywordMatch > 0 || useKeyword === false && keywordMatch === 0)) {
          filterMatchCount++;
        }
      }

      var hasFilters = filterValuesCount !== 0;
      if (filterMatchCount === 0 && hasFilters) {
        return 0;
      }

      return filterMatchCount === 0 ? tableData.length : filterMatchCount;
    }
  }, {
    key: 'getSortedRows',
    value: function getSortedRows() {
      var index = [];

      for (var i = 0; i < this.props.data.length; i += 1) {
        var val = this.props.data[i][this.state.SortColumn] || undefined;
        // If SortColumn is equal to default No. column, set value to be
        // index + 1
        if (this.state.SortColumn === -1) {
          val = i + 1;
        }
        var isString = typeof val === 'string' || val instanceof String;
        var isNumber = !isNaN(val) && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object';

        if (val === '.') {
          // hack to handle non-existent items in DQT
          val = null;
        } else if (isNumber) {
          // perform type conversion (from string to int/float)
          val = Number(val);
        } else if (isString) {
          // if string with text convert to lowercase
          val = val.toLowerCase();
        } else {
          val = undefined;
        }

        if (this.props.RowNameMap) {
          index.push({ RowIdx: i, Value: val, Content: this.props.RowNameMap[i] });
        } else {
          index.push({ RowIdx: i, Value: val, Content: i + 1 });
        }
      }

      index.sort(function (a, b) {
        if (this.state.SortOrder === 'ASC') {
          if (a.Value === b.Value) {
            // If all values are equal, sort by rownum
            if (a.RowIdx < b.RowIdx) return -1;
            if (a.RowIdx > b.RowIdx) return 1;
          }
          // Check if null values
          if (a.Value === null || typeof a.Value === 'undefined') return -1;
          if (b.Value === null || typeof b.Value === 'undefined') return 1;

          // Sort by value
          if (a.Value < b.Value) return -1;
          if (a.Value > b.Value) return 1;
        } else {
          if (a.Value === b.Value) {
            // If all values are equal, sort by rownum
            if (a.RowIdx < b.RowIdx) return 1;
            if (a.RowIdx > b.RowIdx) return -1;
          }
          // Check if null values
          if (a.Value === null || typeof a.Value === 'undefined') return 1;
          if (b.Value === null || typeof b.Value === 'undefined') return -1;

          // Sort by value
          if (a.Value < b.Value) return 1;
          if (a.Value > b.Value) return -1;
        }
        // They're equal..
        return 0;
      }.bind(this));
      return index;
    }

    /**
     * Searches for the filter keyword in the column cell
     *
     * Note: Search is case-insensitive.
     *
     * @param {string} name field name
     * @param {string} data search string
     * @return {boolean} true, if filter value is found to be a substring
     * of one of the column values, false otherwise.
     */

  }, {
    key: 'hasFilterKeyword',
    value: function hasFilterKeyword(name, data) {
      var filterData = null;
      var exactMatch = false;
      var result = false;
      var searchKey = null;
      var searchString = null;

      if (this.props.filter[name]) {
        filterData = this.props.filter[name].value;
        exactMatch = this.props.filter[name].exactMatch;
      }

      // Handle null inputs
      if (filterData === null || data === null) {
        return false;
      }

      // Handle numeric inputs
      if (typeof filterData === 'number') {
        var intData = Number.parseInt(data, 10);
        result = filterData === intData;
      }

      // Handle string inputs
      if (typeof filterData === 'string') {
        searchKey = filterData.toLowerCase();
        switch (typeof data === 'undefined' ? 'undefined' : _typeof(data)) {
          case 'object':
            // Handles the case where the data is an array (typeof 'object')
            // and you want to search through it for
            // the string you are filtering by
            var searchArray = data.map(function (e) {
              return e.toLowerCase();
            });
            if (exactMatch) {
              result = searchArray.includes(searchKey);
            } else {
              result = searchArray.find(function (e) {
                return e.indexOf(searchKey) > -1;
              }) !== undefined;
            }
            break;
          default:
            searchString = data.toLowerCase();
            if (exactMatch) {
              result = searchString === searchKey;
            } else {
              result = searchString.indexOf(searchKey) > -1;
            }
            break;
        }
      }

      // Handle array inputs for multiselects
      if ((typeof filterData === 'undefined' ? 'undefined' : _typeof(filterData)) === 'object') {
        var match = false;
        for (var i = 0; i < filterData.length; i += 1) {
          searchKey = filterData[i].toLowerCase();
          searchString = data.toLowerCase();

          match = searchString.indexOf(searchKey) > -1;
          if (match) {
            result = true;
          }
        }
      }

      return result;
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      if (this.props.actions) {
        return this.props.actions.map(function (action, key) {
          return _react2.default.createElement(CTA, {
            key: key,
            label: action.label,
            onUserInput: action.action
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.data === null || this.props.data.length === 0) {
        return _react2.default.createElement(
          'div',
          { className: 'alert alert-info no-result-found-panel' },
          _react2.default.createElement(
            'strong',
            null,
            'No result found.'
          )
        );
      }
      var rowsPerPage = this.state.RowsPerPage;
      var headers = this.state.Hide.defaultColumn === true ? [] : [_react2.default.createElement(
        'th',
        { key: 'th_col_0', onClick: this.setSortColumn(-1).bind(this) },
        this.props.RowNumLabel
      )];

      for (var i = 0; i < this.props.fields.length; i += 1) {
        if (this.props.fields[i].show === true) {
          var colIndex = i + 1;
          if (this.props.fields[i].freezeColumn === true) {
            headers.push(_react2.default.createElement(
              'th',
              { key: 'th_col_' + colIndex, id: this.props.freezeColumn,
                onClick: this.setSortColumn(i).bind(this) },
              this.props.fields[i].label
            ));
          } else {
            headers.push(_react2.default.createElement(
              'th',
              { key: 'th_col_' + colIndex, onClick: this.setSortColumn(i).bind(this) },
              this.props.fields[i].label
            ));
          }
        }
      }
      var rows = [];
      var curRow = [];
      var index = this.getSortedRows();
      var matchesFound = 0; // Keeps track of how many rows where displayed so far across all pages
      var filteredRows = this.countFilteredRows();
      var currentPageRow = rowsPerPage * (this.state.PageNumber - 1);
      var filteredData = [];
      var useKeyword = false;

      if (this.props.filter.keyword) {
        useKeyword = true;
      }

      // Push rows to data table

      var _loop = function _loop(_i) {
        curRow = [];

        // Counts filter matches
        var filterMatchCount = 0;
        var keywordMatch = 0;
        var filterLength = 0;

        // Iterates through headers to populate row columns
        // with corresponding data
        for (var j = 0; j < _this2.props.fields.length; j += 1) {
          var data = 'Unknown';

          // Set column data
          if (_this2.props.data[index[_i].RowIdx]) {
            data = _this2.props.data[index[_i].RowIdx][j];
          }

          if (_this2.props.fields[j].filter) {
            if (_this2.hasFilterKeyword(_this2.props.fields[j].filter.name, data)) {
              filterMatchCount++;
              filteredData.push(_this2.props.data[index[_i].RowIdx]);
            }
          }

          if (useKeyword === true) {
            filterLength = Object.keys(_this2.props.filter).length - 1;
            if (_this2.hasFilterKeyword('keyword', data)) {
              keywordMatch++;
            }
          } else {
            filterLength = Object.keys(_this2.props.filter).length;
          }

          var key = 'td_col_' + j;

          // Get custom cell formatting if available
          if (_this2.props.getFormattedCell) {
            if (_this2.props.fields[j].show === false) {
              data = null;
            } else {
              (function () {
                // create mapping between rowHeaders and rowData in a row Object
                var row = {};
                _this2.props.fields.forEach(function (field, k) {
                  row[field.label] = _this2.props.data[index[_i].RowIdx][k];
                });
                data = _this2.props.getFormattedCell(_this2.props.fields[j].label, data, row);
              })();
            }
            if (data !== null) {
              // Note: Can't currently pass a key, need to update columnFormatter
              // to not return a <td> node. Using createFragment instead.
              curRow.push((0, _reactAddonsCreateFragment2.default)({ data: data }));
            }
          } else {
            curRow.push(_react2.default.createElement(
              'td',
              { key: key },
              data
            ));
          }
        }

        // Only display a row if all filter values have been matched
        if (filterLength === filterMatchCount && (useKeyword === true && keywordMatch > 0 || useKeyword === false && keywordMatch === 0)) {
          matchesFound++;
          if (matchesFound > currentPageRow) {
            var rowIndex = index[_i].Content;
            rows.push(_react2.default.createElement(
              'tr',
              { key: 'tr_' + rowIndex, colSpan: headers.length },
              _react2.default.createElement(
                'td',
                null,
                rowIndex
              ),
              curRow
            ));
          }
        }
      };

      for (var _i = 0; _i < this.props.data.length && rows.length < rowsPerPage; _i++) {
        _loop(_i);
      }

      var RowsPerPageDropdown = _react2.default.createElement(
        'select',
        {
          className: 'input-sm perPage',
          onChange: this.changeRowsPerPage,
          value: this.state.RowsPerPage
        },
        _react2.default.createElement(
          'option',
          null,
          '20'
        ),
        _react2.default.createElement(
          'option',
          null,
          '50'
        ),
        _react2.default.createElement(
          'option',
          null,
          '100'
        ),
        _react2.default.createElement(
          'option',
          null,
          '1000'
        ),
        _react2.default.createElement(
          'option',
          null,
          '5000'
        ),
        _react2.default.createElement(
          'option',
          null,
          '10000'
        )
      );

      // Include only filtered data if filters were applied
      var csvData = this.props.data;
      if (this.props.filter && filteredData.length > 0) {
        csvData = filteredData;
      }

      var header = this.state.Hide.rowsPerPage === true ? '' : _react2.default.createElement(
        'div',
        { className: 'table-header' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'div',
              null,
              rows.length,
              ' rows displayed of ',
              filteredRows,
              '. (Maximum rows per page: ',
              RowsPerPageDropdown,
              ')'
            ),
            _react2.default.createElement(
              'div',
              { className: 'pull-right', style: { marginTop: '-43px' } },
              this.renderActions(),
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-primary',
                  onClick: this.downloadCSV.bind(null, csvData)
                },
                'Download Table as CSV'
              ),
              _react2.default.createElement(_PaginationLinks2.default, {
                Total: filteredRows,
                onChangePage: this.changePage,
                RowsPerPage: rowsPerPage,
                Active: this.state.PageNumber
              })
            )
          )
        )
      );

      var footer = this.state.Hide.downloadCSV === true ? '' : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12', style: { marginTop: '10px' } },
            _react2.default.createElement(
              'div',
              { className: 'footerText' },
              rows.length,
              ' rows displayed of ',
              filteredRows,
              '. (Maximum rows per page: ',
              RowsPerPageDropdown,
              ')'
            ),
            _react2.default.createElement(
              'div',
              { className: 'pull-right', style: { marginTop: '-23px' } },
              _react2.default.createElement(_PaginationLinks2.default, {
                Total: filteredRows,
                onChangePage: this.changePage,
                RowsPerPage: rowsPerPage,
                Active: this.state.PageNumber
              })
            )
          )
        )
      );

      return _react2.default.createElement(
        'div',
        { style: { margin: '14px' } },
        header,
        _react2.default.createElement(
          'table',
          { className: 'table table-hover table-primary table-bordered', id: 'dynamictable' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              { className: 'info' },
              headers
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            rows
          )
        ),
        footer
      );
    }
  }]);

  return DataTable;
}(_react.Component);

DataTable.propTypes = {
  data: _propTypes2.default.array.isRequired,
  RowNumLabel: _propTypes2.default.string,
  // Function of which returns a JSX element for a table cell, takes
  // parameters of the form: func(ColumnName, CellData, EntireRowData)
  getFormattedCell: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  Hide: _propTypes2.default.object,
  actions: _propTypes2.default.object
};
DataTable.defaultProps = {
  RowNumLabel: 'No.',
  filter: {},
  Hide: {
    rowsPerPage: false,
    downloadCSV: false,
    defaultColumn: false
  }
};

exports.default = DataTable;

/***/ }),

/***/ "./jsx/Filter.js":
/*!***********************!*\
  !*** ./jsx/Filter.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Filter component.
 * A wrapper for form elements inside a selection filter.
 *
 * Constructs filter fields based on this.props.fields configuration object
 *
 * Alters the filter object and sends it to parent on every update.
 *
 */
var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

    _this.onFieldUpdate = _this.onFieldUpdate.bind(_this);
    _this.renderFilterFields = _this.renderFilterFields.bind(_this);
    return _this;
  }

  /**
   * Sets filter object to reflect values of input fields.
   *
   * @param {string} name - form element type (i.e component name)
   * @param {string} value - the name of the form element
   * @param {string} id - id of the form element
   * @param {string} type - type of the form element
   */


  _createClass(Filter, [{
    key: 'onFieldUpdate',
    value: function onFieldUpdate(name, value, id, type) {
      var filter = JSON.parse(JSON.stringify(this.props.filter));
      var exactMatch = type === 'textbox' ? false : true;
      if (value === null || value === '') {
        delete filter[name];
      } else {
        filter[name] = {
          value: value,
          exactMatch: exactMatch
        };
      }

      this.props.updateFilter(filter);
    }
  }, {
    key: 'renderFilterFields',
    value: function renderFilterFields() {
      var _this2 = this;

      return this.props.fields.reduce(function (result, field) {
        var filter = field.filter;
        if (filter && filter.hide !== true) {
          var element = void 0;
          switch (filter.type) {
            case 'text':
              element = _react2.default.createElement(TextboxElement, { key: filter.name });
              break;
            case 'select':
              element = _react2.default.createElement(SelectElement, { key: filter.name, options: filter.options });
              break;
            case 'multiselect':
              element = _react2.default.createElement(SelectElement, { key: filter.name, options: filter.options, multiple: true });
              break;
            case 'date':
              element = _react2.default.createElement(DateElement, { key: filter.name });
              break;
            default:
              element = _react2.default.createElement(TextboxElement, { key: filter.name });
          }

          result.push(_react2.default.cloneElement(element, {
            name: filter.name,
            label: field.label,
            value: (_this2.props.filter[filter.name] || {}).value,
            onUserInput: _this2.onFieldUpdate
          }));
        }

        return result;
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        FormElement,
        {
          id: this.props.id,
          name: this.props.name
        },
        _react2.default.createElement(
          FieldsetElement,
          {
            columns: this.props.columns,
            legend: this.props.title
          },
          this.renderFilterFields(),
          _react2.default.createElement(ButtonElement, {
            label: 'Clear Filters',
            type: 'reset',
            onUserInput: this.props.clearFilter
          })
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

Filter.defaultProps = {
  id: null,
  clearFilter: function clearFilter() {
    console.warn('onUpdate() callback is not set!');
  },
  columns: 1
};
Filter.propTypes = {
  filter: _propTypes2.default.object.isRequired,
  clearFilter: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  columns: _propTypes2.default.string,
  title: _propTypes2.default.string,
  fields: _propTypes2.default.object.isRequired
};

exports.default = Filter;

/***/ }),

/***/ "./jsx/FilterableDataTable.js":
/*!************************************!*\
  !*** ./jsx/FilterableDataTable.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Panel = __webpack_require__(/*! jsx/Panel */ "./jsx/Panel.js");

var _Panel2 = _interopRequireDefault(_Panel);

var _DataTable = __webpack_require__(/*! jsx/DataTable */ "./jsx/DataTable.js");

var _DataTable2 = _interopRequireDefault(_DataTable);

var _Filter = __webpack_require__(/*! jsx/Filter */ "./jsx/Filter.js");

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * FilterableDataTable component.
 * A wrapper for all datatables that handles filtering.
 *
 * Handles the updating and clearing of the filter state based on changes sent
 * from the FitlerForm.
 *
 * Passes the Filter to the Datatable.
 *
 * Deprecates Filter Form.
 */
var FilterableDataTable = function (_Component) {
  _inherits(FilterableDataTable, _Component);

  function FilterableDataTable(props) {
    _classCallCheck(this, FilterableDataTable);

    var _this = _possibleConstructorReturn(this, (FilterableDataTable.__proto__ || Object.getPrototypeOf(FilterableDataTable)).call(this, props));

    _this.state = {
      filter: {}
    };
    _this.updateFilter = _this.updateFilter.bind(_this);
    _this.clearFilter = _this.clearFilter.bind(_this);
    return _this;
  }

  /**
   * Updates filter state
   *
   * @param {object} filter passed from FilterForm
   */


  _createClass(FilterableDataTable, [{
    key: 'updateFilter',
    value: function updateFilter(filter) {
      this.setState({ filter: filter });
    }

    /**
     * Sets Filter to empty object
     */

  }, {
    key: 'clearFilter',
    value: function clearFilter() {
      this.updateFilter({});
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Panel2.default,
        {
          title: this.props.title
        },
        _react2.default.createElement(_Filter2.default, {
          name: this.props.name + '_filter',
          id: this.props.name + '_filter',
          title: 'Selection Filter',
          columns: this.props.columns,
          filter: this.state.filter,
          fields: this.props.fields,
          updateFilter: this.updateFilter,
          clearFilter: this.clearFilter
        }),
        _react2.default.createElement(_DataTable2.default, {
          data: this.props.data,
          fields: this.props.fields,
          filter: this.state.filter,
          getFormattedCell: this.props.getFormattedCell,
          actions: this.props.actions
        })
      );
    }
  }]);

  return FilterableDataTable;
}(_react.Component);

FilterableDataTable.defaultProps = {
  columns: 3
};

FilterableDataTable.propTypes = {
  name: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  data: _propTypes2.default.object.isRequired,
  filter: _propTypes2.default.object.isRequired,
  fields: _propTypes2.default.object.isRequired,
  columns: _propTypes2.default.number,
  getFormattedCell: _propTypes2.default.func,
  actions: _propTypes2.default.object
};

exports.default = FilterableDataTable;

/***/ }),

/***/ "./jsx/Loader.js":
/*!***********************!*\
  !*** ./jsx/Loader.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file contains the React component for Loader
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Henri Rabalais
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Loader component
 */
var Loader = function (_Component) {
  _inherits(Loader, _Component);

  function Loader(props) {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'loader',
        style: { width: parseInt(this.props.size), height: parseInt(this.props.size) }
      });
    }
  }]);

  return Loader;
}(_react.Component);

Loader.propTypes = { size: _propTypes2.default.string };
Loader.defaultProps = { size: '120' };

exports.default = Loader;

/***/ }),

/***/ "./jsx/PaginationLinks.js":
/*!********************************!*\
  !*** ./jsx/PaginationLinks.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* exported RPaginationLinks */

var PaginationLinks = function (_Component) {
  _inherits(PaginationLinks, _Component);

  function PaginationLinks(props) {
    _classCallCheck(this, PaginationLinks);

    var _this = _possibleConstructorReturn(this, (PaginationLinks.__proto__ || Object.getPrototypeOf(PaginationLinks)).call(this, props));

    _this.state = {};
    _this.changePage = _this.changePage.bind(_this);
    return _this;
  }

  _createClass(PaginationLinks, [{
    key: 'changePage',
    value: function changePage(i) {
      return function (evt) {
        // Don't jump to the top of the page
        evt.preventDefault();

        if (this.props.onChangePage) {
          this.props.onChangePage(i);
        }
      }.bind(this);
    }
  }, {
    key: 'render',
    value: function render() {
      var rowsPerPage = this.props.RowsPerPage;
      var pageLinks = [];
      var classList = void 0;
      var lastPage = Math.ceil(this.props.Total / rowsPerPage);
      var startPage = Math.max(1, this.props.Active - 3);
      var lastShownPage = Math.min(this.props.Active + 3, lastPage);

      if (this.props.Total === 0) {
        return _react2.default.createElement('div', null);
      }
      if (this.props.Total < this.props.RowsPerPage) {
        return _react2.default.createElement('div', null);
      }

      if (lastShownPage - startPage <= 7) {
        lastShownPage = startPage + 6;
        if (lastShownPage > lastPage) {
          lastShownPage = lastPage;
          startPage = lastPage - 6;
        }
      }

      if (startPage > 1) {
        pageLinks.push(_react2.default.createElement(
          'li',
          { key: 'table_page_beginning_' + startPage.toString(), onClick: this.changePage(1) },
          _react2.default.createElement(
            'a',
            { href: '#' },
            '\xAB'
          )
        ));
      }
      if (startPage < 1) {
        startPage = 1;
      }
      if (lastShownPage < 1) {
        lastShownPage = 1;
      }

      // If there is only 1 page, don't display pagination links
      if (startPage === lastShownPage) {
        return _react2.default.createElement('div', null);
      }

      for (var i = startPage; i <= lastShownPage; i += 1) {
        classList = '';
        if (this.props.Active === i) {
          classList = 'active';
        }
        pageLinks.push(_react2.default.createElement(
          'li',
          { key: 'table_page_' + i.toString(), onClick: this.changePage(i), className: classList },
          _react2.default.createElement(
            'a',
            { href: '#' },
            i
          )
        ));
      }
      if (lastShownPage !== lastPage) {
        pageLinks.push(_react2.default.createElement(
          'li',
          { key: 'table_page_more_' + lastShownPage.toString(), onClick: this.changePage(lastPage) },
          _react2.default.createElement(
            'a',
            { href: '#' },
            '\xBB'
          )
        ));
      }

      return _react2.default.createElement(
        'ul',
        { className: 'pagination pagination-table' },
        pageLinks
      );
    }
  }]);

  return PaginationLinks;
}(_react.Component);

PaginationLinks.propTypes = {
  onChangePage: _propTypes2.default.func,
  Total: _propTypes2.default.number.isRequired
};
PaginationLinks.defaultProps = {
  RowsPerPage: 10,
  Active: 1
};

var RPaginationLinks = _react2.default.createFactory(PaginationLinks);

window.PaginationLinks = PaginationLinks;
window.RPaginationLinks = RPaginationLinks;

exports.default = PaginationLinks;

/***/ }),

/***/ "./jsx/Panel.js":
/*!**********************!*\
  !*** ./jsx/Panel.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file contains React component for Panel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Alex I.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Panel component
 * Wraps children in a collapsible bootstrap panel
 */
var Panel = function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

    _this.state = {
      collapsed: _this.props.initCollapsed
    };

    // Initialize panel class based on collapsed status
    _this.panelClass = _this.props.initCollapsed ? 'panel-collapse collapse' : 'panel-collapse collapse in';

    _this.toggleCollapsed = _this.toggleCollapsed.bind(_this);
    return _this;
  }

  _createClass(Panel, [{
    key: 'toggleCollapsed',
    value: function toggleCollapsed() {
      this.setState({ collapsed: !this.state.collapsed });
    }
  }, {
    key: 'render',
    value: function render() {
      // Change arrow direction based on collapse status
      var glyphClass = this.state.collapsed ? 'glyphicon pull-right glyphicon-chevron-down' : 'glyphicon pull-right glyphicon-chevron-up';

      // Add panel header, if title is set
      var panelHeading = this.props.title ? _react2.default.createElement(
        'div',
        {
          className: 'panel-heading',
          onClick: this.toggleCollapsed,
          'data-toggle': 'collapse',
          'data-target': '#' + this.props.id,
          style: { cursor: 'pointer' }
        },
        this.props.title,
        _react2.default.createElement('span', { className: glyphClass })
      ) : '';

      return _react2.default.createElement(
        'div',
        { className: 'panel panel-primary' },
        panelHeading,
        _react2.default.createElement(
          'div',
          { id: this.props.id, className: this.panelClass, role: 'tabpanel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body', style: { height: this.props.height } },
            this.props.children
          )
        )
      );
    }
  }]);

  return Panel;
}(_react.Component);

Panel.propTypes = {
  id: _propTypes2.default.string,
  height: _propTypes2.default.string,
  title: _propTypes2.default.string
};
Panel.defaultProps = {
  initCollapsed: false,
  id: 'default-panel',
  height: '100%'
};

exports.default = Panel;

/***/ }),

/***/ "./modules/user_accounts/jsx/userAccountsIndex.js":
/*!********************************************************!*\
  !*** ./modules/user_accounts/jsx/userAccountsIndex.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Loader = __webpack_require__(/*! Loader */ "./jsx/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _FilterableDataTable = __webpack_require__(/*! FilterableDataTable */ "./jsx/FilterableDataTable.js");

var _FilterableDataTable2 = _interopRequireDefault(_FilterableDataTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserAccountsIndex = function (_Component) {
  _inherits(UserAccountsIndex, _Component);

  function UserAccountsIndex(props) {
    _classCallCheck(this, UserAccountsIndex);

    var _this = _possibleConstructorReturn(this, (UserAccountsIndex.__proto__ || Object.getPrototypeOf(UserAccountsIndex)).call(this, props));

    _this.state = {
      data: {},
      error: false,
      isLoaded: false
    };

    _this.fetchData = _this.fetchData.bind(_this);
    _this.formatColumn = _this.formatColumn.bind(_this);
    _this.addUser = _this.addUser.bind(_this);
    return _this;
  }

  _createClass(UserAccountsIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.fetchData().then(function () {
        return _this2.setState({ isLoaded: true });
      });
    }

    /**
     * Retrieve data from the provided URL and save it in state
     * Additionally add hiddenHeaders to global loris variable
     * for easy access by columnFormatter.
     *
     * @return {object}
     */

  }, {
    key: 'fetchData',
    value: function fetchData() {
      var _this3 = this;

      return fetch(this.props.dataURL, { credentials: 'same-origin' }).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        // Convert concatenated string of sites to array
        data.Data = data.Data.map(function (row) {
          row[0] = row[0].split('; ');
          return row;
        });
        _this3.setState({ data: data });
      }).catch(function (error) {
        _this3.setState({ error: true });
        console.error(error);
      });
    }

    /**
     * Modify behaviour of specified column cells in the Data Table component
     *
     * @param {string} column - column name
     * @param {string} cell - cell content
     * @param {object} row - row content indexed by column
     *
     * @return {*} a formated table cell for a given column
     */

  }, {
    key: 'formatColumn',
    value: function formatColumn(column, cell, row) {
      var url = void 0;
      var result = _react2.default.createElement(
        'td',
        null,
        cell
      );
      switch (column) {
        case 'Site':
          // If user has multiple sites, join array of sites into string
          result = _react2.default.createElement(
            'td',
            null,
            cell.join('; ')
          );
          break;
        case 'Username':
          url = loris.BaseURL + '/user_accounts/edit_user/' + row.Username;
          result = _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'a',
              { href: url },
              cell
            )
          );
          break;
        case 'Active':
          if (row.Active === 'Y') {
            result = _react2.default.createElement(
              'td',
              null,
              'Yes'
            );
          } else if (row.Active === 'N') {
            result = _react2.default.createElement(
              'td',
              null,
              'No'
            );
          }
          break;
        case 'Pending Approval':
          if (row['Pending Approval'] === 'Y') {
            result = _react2.default.createElement(
              'td',
              null,
              'Yes'
            );
          } else if (row['Pending Approval'] === 'N') {
            result = _react2.default.createElement(
              'td',
              null,
              'No'
            );
          }
          break;
      }
      return result;
    }
  }, {
    key: 'addUser',
    value: function addUser() {
      location.href = '/user_accounts/edit_user/';
    }
  }, {
    key: 'render',
    value: function render() {
      // If error occurs, return a message.
      // XXX: Replace this with a UI component for 500 errors.
      if (this.state.error) {
        return _react2.default.createElement(
          'h3',
          null,
          'An error occured while loading the page.'
        );
      }

      // Waiting for async data to load
      if (!this.state.isLoaded) {
        return _react2.default.createElement(_Loader2.default, null);
      }

      /**
       * XXX: Currently, the order of these fields MUST match the order of the
       * queried columns in _setupVariables() in userAccounts.class.inc
       */
      var options = this.state.data.fieldOptions;
      var fields = [{ label: 'Site', show: true, filter: {
          name: 'site',
          type: 'select',
          options: options.sites
        } }, { label: 'Username', show: true, filter: {
          name: 'username',
          type: 'text'
        } }, { label: 'Full Name', show: true, filter: {
          name: 'fullName',
          type: 'text'
        } }, { label: 'Email', show: true, filter: {
          name: 'email',
          type: 'text'
        } }, { label: 'Active', show: true, filter: {
          name: 'active',
          type: 'select',
          options: options.actives
        } }, { label: 'Pending Approval', show: true, filter: {
          name: 'pendingApproval',
          type: 'select',
          options: options.pendingApprovals
        } }];
      var actions = [{ label: 'Add User', action: this.addUser }];

      return _react2.default.createElement(_FilterableDataTable2.default, {
        name: 'userAccounts',
        title: 'User Accounts',
        data: this.state.data.Data,
        fields: fields,
        getFormattedCell: this.formatColumn,
        actions: actions
      });
    }
  }]);

  return UserAccountsIndex;
}(_react.Component);

UserAccountsIndex.propTypes = {
  dataURL: _propTypes2.default.string.isRequired,
  hasPermission: _propTypes2.default.func.isRequired
};

window.addEventListener('load', function () {
  ReactDOM.render(_react2.default.createElement(UserAccountsIndex, {
    dataURL: loris.BaseURL + '/user_accounts/?format=json',
    hasPermission: loris.userHasPermission
  }), document.getElementById('lorisworkspace'));
});

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-addons-create-fragment/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-addons-create-fragment/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var REACT_ELEMENT_TYPE =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) ||
  0xeac7;

var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

var didWarnAboutMaps = false;

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

function getIteratorFn(maybeIterable) {
  var iteratorFn =
    maybeIterable &&
    ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
      maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function(match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function traverseAllChildrenImpl(
  children,
  nameSoFar,
  callback,
  traverseContext
) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (
    children === null ||
    type === 'string' ||
    type === 'number' ||
    // The following is inlined from ReactElement. This means we can optimize
    // some checks. React Fiber also inlines this logic for similar purposes.
    (type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE)
  ) {
    callback(
      traverseContext,
      children,
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows.
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
    );
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(
        child,
        nextName,
        callback,
        traverseContext
      );
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      if (true) {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning(
            didWarnAboutMaps,
            'Using Maps as children is unsupported and will likely yield ' +
              'unexpected results. Convert it to a sequence/iterable of keyed ' +
              'ReactElements instead.'
          );
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(
          child,
          nextName,
          callback,
          traverseContext
        );
      }
    } else if (type === 'object') {
      var addendum = '';
      if (true) {
        addendum =
          ' If you meant to render a collection of children, use an array ' +
          'instead or wrap the object using createFragment(object) from the ' +
          'React add-ons.';
      }
      var childrenString = '' + children;
      invariant(
        false,
        'Objects are not valid as a React child (found: %s).%s',
        childrenString === '[object Object]'
          ? 'object with keys {' + Object.keys(children).join(', ') + '}'
          : childrenString,
        addendum
      );
    }
  }

  return subtreeCount;
}

function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

function cloneAndReplaceKey(oldElement, newKey) {
  return React.cloneElement(
    oldElement,
    {key: newKey},
    oldElement.props !== undefined ? oldElement.props.children : undefined
  );
}

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

var oneArgumentPooler = function(copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var standardReleaser = function standardReleaser(instance) {
  var Klass = this;
  invariant(
    instance instanceof Klass,
    'Trying to release an instance into a pool of a different type.'
  );
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function() {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result;
  var keyPrefix = bookKeeping.keyPrefix;
  var func = bookKeeping.func;
  var context = bookKeeping.context;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(
      mappedChild,
      result,
      childKey,
      emptyFunction.thatReturnsArgument
    );
  } else if (mappedChild != null) {
    if (React.isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(
        mappedChild,
        // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        keyPrefix +
          (mappedChild.key && (!child || child.key !== mappedChild.key)
            ? escapeUserProvidedKey(mappedChild.key) + '/'
            : '') +
          childKey
      );
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(
    array,
    escapedPrefix,
    func,
    context
  );
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

var numericPropertyRegex = /^\d+$/;

var warnedAboutNumeric = false;

function createReactFragment(object) {
  if (typeof object !== 'object' || !object || Array.isArray(object)) {
    warning(
      false,
      'React.addons.createFragment only accepts a single object. Got: %s',
      object
    );
    return object;
  }
  if (React.isValidElement(object)) {
    warning(
      false,
      'React.addons.createFragment does not accept a ReactElement ' +
        'without a wrapper object.'
    );
    return object;
  }

  invariant(
    object.nodeType !== 1,
    'React.addons.createFragment(...): Encountered an invalid child; DOM ' +
      'elements are not valid children of React components.'
  );

  var result = [];

  for (var key in object) {
    if (true) {
      if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
        warning(
          false,
          'React.addons.createFragment(...): Child objects should have ' +
            'non-numeric keys so ordering is preserved.'
        );
        warnedAboutNumeric = true;
      }
    }
    mapIntoWithKeyPrefixInternal(
      object[key],
      result,
      key,
      emptyFunction.thatReturnsArgument
    );
  }

  return result;
}

module.exports = createReactFragment;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.6.3';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

var enableHooks = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null,
  currentDispatcher: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentOwner.currentDispatcher;
  !(dispatcher !== null) ? invariant(false, 'Hooks can only be called inside the body of a function component.') : void 0;
  return dispatcher;
}

function useContext(Context, observedBits) {
  var dispatcher = resolveDispatcher();
  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialState, initialAction) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialState, initialAction);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useMutationEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMutationEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeMethods(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeMethods(ref, create, inputs);
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  var name = void 0,
      propTypes = void 0;
  if (typeof type === 'function') {
    // Class or function component
    name = type.displayName || type.name;
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
    // ForwardRef
    var functionName = type.render.displayName || type.render.name || '';
    name = type.displayName || (functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef');
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
} else {
  React.unstable_ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.unstable_Profiler = REACT_PROFILER_TYPE;
}

if (enableHooks) {
  React.useCallback = useCallback;
  React.useContext = useContext;
  React.useEffect = useEffect;
  React.useImperativeMethods = useImperativeMethods;
  React.useLayoutEffect = useLayoutEffect;
  React.useMemo = useMemo;
  React.useMutationEffect = useMutationEffect;
  React.useReducer = useReducer;
  React.useRef = useRef;
  React.useState = useState;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanN4L0RhdGFUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9qc3gvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2pzeC9GaWx0ZXJhYmxlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2pzeC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanN4L1BhZ2luYXRpb25MaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9qc3gvUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2VyX2FjY291bnRzL2pzeC91c2VyQWNjb3VudHNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNyZWF0ZS1mcmFnbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJEYXRhVGFibGUiLCJwcm9wcyIsInN0YXRlIiwiUGFnZU51bWJlciIsIlNvcnRDb2x1bW4iLCJTb3J0T3JkZXIiLCJSb3dzUGVyUGFnZSIsIkhpZGUiLCJjaGFuZ2VQYWdlIiwiYmluZCIsInNldFNvcnRDb2x1bW4iLCJjaGFuZ2VSb3dzUGVyUGFnZSIsImRvd25sb2FkQ1NWIiwiY291bnRGaWx0ZXJlZFJvd3MiLCJnZXRTb3J0ZWRSb3dzIiwiaGFzRmlsdGVyS2V5d29yZCIsInJlbmRlckFjdGlvbnMiLCJqUXVlcnkiLCJmbiIsIkR5bmFtaWNUYWJsZSIsImZyZWV6ZUNvbHVtbiIsIiQiLCJkZWZhdWx0Q29sdW1uIiwiZmluZCIsImhpZGUiLCJtb2R1bGVQcmVmcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb3JpcyIsIlRlc3ROYW1lIiwidW5kZWZpbmVkIiwicm93c1BlclBhZ2UiLCJzZXRTdGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIm9uU29ydCIsImluZGV4IiwiaGVhZGVyTGlzdCIsImZpZWxkcyIsIm1hcCIsImZpZWxkIiwibGFiZWwiLCJkYXRhIiwicGFnZU5vIiwiY29sTnVtYmVyIiwiZSIsInZhbCIsInRhcmdldCIsInZhbHVlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNzdkRhdGEiLCJjc3Z3b3JrZXIiLCJXb3JrZXIiLCJCYXNlVVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGFVUkwiLCJkYXRhRGF0ZSIsImxpbmsiLCJjbWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJtZXNzYWdlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJ0eXBlIiwiaHJlZiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJwb3N0TWVzc2FnZSIsImhlYWRlcnMiLCJpZGVudGlmaWVycyIsIlJvd05hbWVNYXAiLCJ1c2VLZXl3b3JkIiwiZmlsdGVyTWF0Y2hDb3VudCIsImZpbHRlclZhbHVlc0NvdW50IiwiZmlsdGVyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRhYmxlRGF0YSIsImZpZWxkRGF0YSIsImtleXdvcmQiLCJpIiwiaGVhZGVyQ291bnQiLCJrZXl3b3JkTWF0Y2giLCJqIiwibmFtZSIsImhhc0ZpbHRlcnMiLCJpc1N0cmluZyIsIlN0cmluZyIsImlzTnVtYmVyIiwiaXNOYU4iLCJOdW1iZXIiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJSb3dJZHgiLCJWYWx1ZSIsIkNvbnRlbnQiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXJEYXRhIiwiZXhhY3RNYXRjaCIsInJlc3VsdCIsInNlYXJjaEtleSIsInNlYXJjaFN0cmluZyIsImludERhdGEiLCJwYXJzZUludCIsInNlYXJjaEFycmF5IiwiaW5jbHVkZXMiLCJpbmRleE9mIiwibWF0Y2giLCJhY3Rpb25zIiwiYWN0aW9uIiwia2V5IiwiUm93TnVtTGFiZWwiLCJzaG93IiwiY29sSW5kZXgiLCJyb3dzIiwiY3VyUm93IiwibWF0Y2hlc0ZvdW5kIiwiZmlsdGVyZWRSb3dzIiwiY3VycmVudFBhZ2VSb3ciLCJmaWx0ZXJlZERhdGEiLCJmaWx0ZXJMZW5ndGgiLCJnZXRGb3JtYXR0ZWRDZWxsIiwicm93IiwiZm9yRWFjaCIsImsiLCJyb3dJbmRleCIsIlJvd3NQZXJQYWdlRHJvcGRvd24iLCJoZWFkZXIiLCJtYXJnaW5Ub3AiLCJmb290ZXIiLCJtYXJnaW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiRmlsdGVyIiwib25GaWVsZFVwZGF0ZSIsInJlbmRlckZpbHRlckZpZWxkcyIsImlkIiwidXBkYXRlRmlsdGVyIiwicmVkdWNlIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIm9uVXNlcklucHV0IiwiY29sdW1ucyIsInRpdGxlIiwiY2xlYXJGaWx0ZXIiLCJjb25zb2xlIiwid2FybiIsIkZpbHRlcmFibGVEYXRhVGFibGUiLCJudW1iZXIiLCJMb2FkZXIiLCJ3aWR0aCIsInNpemUiLCJoZWlnaHQiLCJQYWdpbmF0aW9uTGlua3MiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlUGFnZSIsInBhZ2VMaW5rcyIsImNsYXNzTGlzdCIsImxhc3RQYWdlIiwiTWF0aCIsImNlaWwiLCJUb3RhbCIsInN0YXJ0UGFnZSIsIm1heCIsIkFjdGl2ZSIsImxhc3RTaG93blBhZ2UiLCJtaW4iLCJ0b1N0cmluZyIsIlJQYWdpbmF0aW9uTGlua3MiLCJjcmVhdGVGYWN0b3J5IiwiUGFuZWwiLCJjb2xsYXBzZWQiLCJpbml0Q29sbGFwc2VkIiwicGFuZWxDbGFzcyIsInRvZ2dsZUNvbGxhcHNlZCIsImdseXBoQ2xhc3MiLCJwYW5lbEhlYWRpbmciLCJjdXJzb3IiLCJjaGlsZHJlbiIsIlVzZXJBY2NvdW50c0luZGV4IiwiZXJyb3IiLCJpc0xvYWRlZCIsImZldGNoRGF0YSIsImZvcm1hdENvbHVtbiIsImFkZFVzZXIiLCJ0aGVuIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInJlc3AiLCJqc29uIiwiRGF0YSIsInNwbGl0IiwiY2F0Y2giLCJjb2x1bW4iLCJjZWxsIiwidXJsIiwiam9pbiIsIlVzZXJuYW1lIiwibG9jYXRpb24iLCJmaWVsZE9wdGlvbnMiLCJzaXRlcyIsImFjdGl2ZXMiLCJwZW5kaW5nQXBwcm92YWxzIiwiaGFzUGVybWlzc2lvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwidXNlckhhc1Blcm1pc3Npb24iLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsYUFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsd0ZBQXdGLFNBQU07QUFDekk7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDL3lEYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyxpRkFBNEI7QUFDdkQiLCJmaWxlIjoiLi9tb2R1bGVzL3VzZXJfYWNjb3VudHMvanMvdXNlckFjY291bnRzSW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vZHVsZXMvdXNlcl9hY2NvdW50cy9qc3gvdXNlckFjY291bnRzSW5kZXguanNcIik7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBSZWFjdCBjb21wb25lbnQgZm9yIERhdGEgVGFibGVcbiAqXG4gKiBAYXV0aG9yIExvcmlzIFRlYW1cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBQYWdpbmF0aW9uTGlua3MgZnJvbSAnanN4L1BhZ2luYXRpb25MaW5rcyc7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSAncmVhY3QtYWRkb25zLWNyZWF0ZS1mcmFnbWVudCc7XG5cbi8qKlxuICogRGF0YSBUYWJsZSBjb21wb25lbnRcbiAqIERpc3BsYXlzIGEgc2V0IG9mIGRhdGEgdGhhdCBpcyByZWNlaXZlcyB2aWEgcHJvcHMuXG4gKi9cbmNsYXNzIERhdGFUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIFBhZ2VOdW1iZXI6IDEsXG4gICAgICBTb3J0Q29sdW1uOiAtMSxcbiAgICAgIFNvcnRPcmRlcjogJ0FTQycsXG4gICAgICBSb3dzUGVyUGFnZTogMjAsXG4gICAgICBIaWRlOiB0aGlzLnByb3BzLkhpZGUsXG4gICAgfTtcblxuICAgIHRoaXMuY2hhbmdlUGFnZSA9IHRoaXMuY2hhbmdlUGFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U29ydENvbHVtbiA9IHRoaXMuc2V0U29ydENvbHVtbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlUm93c1BlclBhZ2UgPSB0aGlzLmNoYW5nZVJvd3NQZXJQYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb3dubG9hZENTViA9IHRoaXMuZG93bmxvYWRDU1YuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvdW50RmlsdGVyZWRSb3dzID0gdGhpcy5jb3VudEZpbHRlcmVkUm93cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0U29ydGVkUm93cyA9IHRoaXMuZ2V0U29ydGVkUm93cy5iaW5kKHRoaXMpOy8vXG4gICAgdGhpcy5oYXNGaWx0ZXJLZXl3b3JkID0gdGhpcy5oYXNGaWx0ZXJLZXl3b3JkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJBY3Rpb25zID0gdGhpcy5yZW5kZXJBY3Rpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoalF1ZXJ5LmZuLkR5bmFtaWNUYWJsZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZnJlZXplQ29sdW1uKSB7XG4gICAgICAgICQoJyNkeW5hbWljdGFibGUnKS5EeW5hbWljVGFibGUoe1xuICAgICAgICAgIGZyZWV6ZUNvbHVtbjogdGhpcy5wcm9wcy5mcmVlemVDb2x1bW4sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI2R5bmFtaWN0YWJsZScpLkR5bmFtaWNUYWJsZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuSGlkZS5kZWZhdWx0Q29sdW1uKSB7XG4gICAgICAgICQoJyNkeW5hbWljdGFibGUnKS5maW5kKCd0Ym9keSB0ZDplcSgwKScpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBtb2R1bGUgcHJlZmVyZW5jZXNcbiAgICBsZXQgbW9kdWxlUHJlZnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2R1bGVQcmVmcycpKTtcblxuICAgIC8vIEluaXQgbW9kdWxlUHJlZnMgb2JqZWN0XG4gICAgaWYgKG1vZHVsZVByZWZzID09PSBudWxsKSB7XG4gICAgICBtb2R1bGVQcmVmcyA9IHt9O1xuICAgIH1cblxuICAgIC8vIEluaXQgbW9kdWxlUHJlZnMgZm9yIGN1cnJlbnQgbW9kdWxlXG4gICAgaWYgKG1vZHVsZVByZWZzW2xvcmlzLlRlc3ROYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtb2R1bGVQcmVmc1tsb3Jpcy5UZXN0TmFtZV0gPSB7fTtcbiAgICAgIG1vZHVsZVByZWZzW2xvcmlzLlRlc3ROYW1lXS5yb3dzUGVyUGFnZSA9IHRoaXMuc3RhdGUuUm93c1BlclBhZ2U7XG4gICAgfVxuXG4gICAgLy8gU2V0IHJvd3MgcGVyIHBhZ2VcbiAgICBsZXQgcm93c1BlclBhZ2UgPSBtb2R1bGVQcmVmc1tsb3Jpcy5UZXN0TmFtZV0ucm93c1BlclBhZ2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBSb3dzUGVyUGFnZTogcm93c1BlclBhZ2UsXG4gICAgfSk7XG5cbiAgICAvLyBNYWtlIHByZWZzIGFjY2VzaWJsZSB3aXRoaW4gY29tcG9uZW50XG4gICAgdGhpcy5tb2R1bGVQcmVmcyA9IG1vZHVsZVByZWZzO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKGpRdWVyeS5mbi5EeW5hbWljVGFibGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZyZWV6ZUNvbHVtbikge1xuICAgICAgICAkKCcjZHluYW1pY3RhYmxlJykuRHluYW1pY1RhYmxlKHtcbiAgICAgICAgICBmcmVlemVDb2x1bW46IHRoaXMucHJvcHMuZnJlZXplQ29sdW1uLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNkeW5hbWljdGFibGUnKS5EeW5hbWljVGFibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25Tb3J0ICYmXG4gICAgICAodGhpcy5zdGF0ZS5Tb3J0Q29sdW1uICE9PSBwcmV2U3RhdGUuU29ydENvbHVtbiB8fFxuICAgICAgICB0aGlzLnN0YXRlLlNvcnRPcmRlciAhPT0gcHJldlN0YXRlLlNvcnRPcmRlcilcbiAgICApIHtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0U29ydGVkUm93cygpO1xuICAgICAgY29uc3QgaGVhZGVyTGlzdCA9IHRoaXMucHJvcHMuZmllbGRzLm1hcCgoZmllbGQpID0+IGZpZWxkLmxhYmVsKTtcbiAgICAgIHRoaXMucHJvcHMub25Tb3J0KGluZGV4LCB0aGlzLnByb3BzLmRhdGEsIGhlYWRlckxpc3QpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVBhZ2UocGFnZU5vKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBQYWdlTnVtYmVyOiBwYWdlTm8sXG4gICAgfSk7XG4gIH1cblxuICBzZXRTb3J0Q29sdW1uKGNvbE51bWJlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5Tb3J0Q29sdW1uID09PSBjb2xOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgU29ydE9yZGVyOiB0aGlzLnN0YXRlLlNvcnRPcmRlciA9PT0gJ0FTQycgPyAnREVTQycgOiAnQVNDJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBTb3J0Q29sdW1uOiBjb2xOdW1iZXIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VSb3dzUGVyUGFnZSh2YWwpIHtcbiAgICBsZXQgcm93c1BlclBhZ2UgPSB2YWwudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBtb2R1bGVQcmVmcyA9IHRoaXMubW9kdWxlUHJlZnM7XG5cbiAgICAvLyBTYXZlIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgbW9kdWxlUHJlZnNbbG9yaXMuVGVzdE5hbWVdLnJvd3NQZXJQYWdlID0gcm93c1BlclBhZ2U7XG5cbiAgICAvLyBVcGRhdGUgbG9jYWxzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vZHVsZVByZWZzJywgSlNPTi5zdHJpbmdpZnkobW9kdWxlUHJlZnMpKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgUm93c1BlclBhZ2U6IHJvd3NQZXJQYWdlLFxuICAgICAgUGFnZU51bWJlcjogMSxcbiAgICB9KTtcbiAgfVxuXG4gIGRvd25sb2FkQ1NWKGNzdkRhdGEpIHtcbiAgICBsZXQgY3N2d29ya2VyID0gbmV3IFdvcmtlcihsb3Jpcy5CYXNlVVJMICsgJy9qcy93b3JrZXJzL3NhdmVjc3YuanMnKTtcblxuICAgIGNzdndvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IGRhdGFVUkw7XG4gICAgICBsZXQgZGF0YURhdGU7XG4gICAgICBsZXQgbGluaztcbiAgICAgIGlmIChlLmRhdGEuY21kID09PSAnU2F2ZUNTVicpIHtcbiAgICAgICAgZGF0YURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIGRhdGFVUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSAnZGF0YS0nICsgZGF0YURhdGUgKyAnLmNzdic7XG4gICAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzdic7XG4gICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVUkw7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICQobGluaylbMF0uY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBoZWFkZXJMaXN0ID0gdGhpcy5wcm9wcy5maWVsZHMubWFwKChmaWVsZCkgPT4gZmllbGQubGFiZWwpO1xuICAgIGNzdndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICBjbWQ6ICdTYXZlRmlsZScsXG4gICAgICBkYXRhOiBjc3ZEYXRhLFxuICAgICAgaGVhZGVyczogaGVhZGVyTGlzdCxcbiAgICAgIGlkZW50aWZpZXJzOiB0aGlzLnByb3BzLlJvd05hbWVNYXAsXG4gICAgfSk7XG4gIH1cblxuICBjb3VudEZpbHRlcmVkUm93cygpIHtcbiAgICBsZXQgdXNlS2V5d29yZCA9IGZhbHNlO1xuICAgIGxldCBmaWx0ZXJNYXRjaENvdW50ID0gMDtcbiAgICBsZXQgZmlsdGVyVmFsdWVzQ291bnQgPSAodGhpcy5wcm9wcy5maWx0ZXIgP1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZpbHRlcikubGVuZ3RoIDpcbiAgICAgICAgMFxuICAgICk7XG4gICAgbGV0IHRhYmxlRGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICBsZXQgZmllbGREYXRhID0gdGhpcy5wcm9wcy5maWVsZHM7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIua2V5d29yZCkge1xuICAgICAgdXNlS2V5d29yZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHVzZUtleXdvcmQpIHtcbiAgICAgIGZpbHRlclZhbHVlc0NvdW50IC09IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBoZWFkZXJDb3VudCA9IDA7XG4gICAgICBsZXQga2V5d29yZE1hdGNoID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmllbGREYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGFibGVEYXRhW2ldID8gdGFibGVEYXRhW2ldW2pdIDogbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyS2V5d29yZCgoZmllbGREYXRhW2pdLmZpbHRlciB8fCB7fSkubmFtZSwgZGF0YSkpIHtcbiAgICAgICAgICBoZWFkZXJDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VLZXl3b3JkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyS2V5d29yZCgna2V5d29yZCcsIGRhdGEpKSB7XG4gICAgICAgICAgICBrZXl3b3JkTWF0Y2grKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGhlYWRlckNvdW50ID09PSBmaWx0ZXJWYWx1ZXNDb3VudCAmJlxuICAgICAgICAoKHVzZUtleXdvcmQgPT09IHRydWUgJiYga2V5d29yZE1hdGNoID4gMCkgfHxcbiAgICAgICAgICAodXNlS2V5d29yZCA9PT0gZmFsc2UgJiYga2V5d29yZE1hdGNoID09PSAwKSkpIHtcbiAgICAgICAgZmlsdGVyTWF0Y2hDb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBoYXNGaWx0ZXJzID0gKGZpbHRlclZhbHVlc0NvdW50ICE9PSAwKTtcbiAgICBpZiAoZmlsdGVyTWF0Y2hDb3VudCA9PT0gMCAmJiBoYXNGaWx0ZXJzKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gKGZpbHRlck1hdGNoQ291bnQgPT09IDApID8gdGFibGVEYXRhLmxlbmd0aCA6IGZpbHRlck1hdGNoQ291bnQ7XG4gIH1cblxuICBnZXRTb3J0ZWRSb3dzKCkge1xuICAgIGNvbnN0IGluZGV4ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHZhbCA9IHRoaXMucHJvcHMuZGF0YVtpXVt0aGlzLnN0YXRlLlNvcnRDb2x1bW5dIHx8IHVuZGVmaW5lZDtcbiAgICAgIC8vIElmIFNvcnRDb2x1bW4gaXMgZXF1YWwgdG8gZGVmYXVsdCBOby4gY29sdW1uLCBzZXQgdmFsdWUgdG8gYmVcbiAgICAgIC8vIGluZGV4ICsgMVxuICAgICAgaWYgKHRoaXMuc3RhdGUuU29ydENvbHVtbiA9PT0gLTEpIHtcbiAgICAgICAgdmFsID0gaSArIDE7XG4gICAgICB9XG4gICAgICBjb25zdCBpc1N0cmluZyA9ICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmcpO1xuICAgICAgY29uc3QgaXNOdW1iZXIgPSAhaXNOYU4odmFsKSAmJiB0eXBlb2YgdmFsICE9PSAnb2JqZWN0JztcblxuICAgICAgaWYgKHZhbCA9PT0gJy4nKSB7XG4gICAgICAgIC8vIGhhY2sgdG8gaGFuZGxlIG5vbi1leGlzdGVudCBpdGVtcyBpbiBEUVRcbiAgICAgICAgdmFsID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIpIHtcbiAgICAgICAgLy8gcGVyZm9ybSB0eXBlIGNvbnZlcnNpb24gKGZyb20gc3RyaW5nIHRvIGludC9mbG9hdClcbiAgICAgICAgdmFsID0gTnVtYmVyKHZhbCk7XG4gICAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgIC8vIGlmIHN0cmluZyB3aXRoIHRleHQgY29udmVydCB0byBsb3dlcmNhc2VcbiAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLlJvd05hbWVNYXApIHtcbiAgICAgICAgaW5kZXgucHVzaCh7Um93SWR4OiBpLCBWYWx1ZTogdmFsLCBDb250ZW50OiB0aGlzLnByb3BzLlJvd05hbWVNYXBbaV19KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4LnB1c2goe1Jvd0lkeDogaSwgVmFsdWU6IHZhbCwgQ29udGVudDogaSArIDF9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLlNvcnRPcmRlciA9PT0gJ0FTQycpIHtcbiAgICAgICAgaWYgKGEuVmFsdWUgPT09IGIuVmFsdWUpIHtcbiAgICAgICAgICAvLyBJZiBhbGwgdmFsdWVzIGFyZSBlcXVhbCwgc29ydCBieSByb3dudW1cbiAgICAgICAgICBpZiAoYS5Sb3dJZHggPCBiLlJvd0lkeCkgcmV0dXJuIC0xO1xuICAgICAgICAgIGlmIChhLlJvd0lkeCA+IGIuUm93SWR4KSByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBudWxsIHZhbHVlc1xuICAgICAgICBpZiAoYS5WYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYS5WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGIuVmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGIuVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gMTtcblxuICAgICAgICAvLyBTb3J0IGJ5IHZhbHVlXG4gICAgICAgIGlmIChhLlZhbHVlIDwgYi5WYWx1ZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYS5WYWx1ZSA+IGIuVmFsdWUpIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGEuVmFsdWUgPT09IGIuVmFsdWUpIHtcbiAgICAgICAgICAvLyBJZiBhbGwgdmFsdWVzIGFyZSBlcXVhbCwgc29ydCBieSByb3dudW1cbiAgICAgICAgICBpZiAoYS5Sb3dJZHggPCBiLlJvd0lkeCkgcmV0dXJuIDE7XG4gICAgICAgICAgaWYgKGEuUm93SWR4ID4gYi5Sb3dJZHgpIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBudWxsIHZhbHVlc1xuICAgICAgICBpZiAoYS5WYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYS5WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAxO1xuICAgICAgICBpZiAoYi5WYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYi5WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAtMTtcblxuICAgICAgICAvLyBTb3J0IGJ5IHZhbHVlXG4gICAgICAgIGlmIChhLlZhbHVlIDwgYi5WYWx1ZSkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhLlZhbHVlID4gYi5WYWx1ZSkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgLy8gVGhleSdyZSBlcXVhbC4uXG4gICAgICByZXR1cm4gMDtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3IgdGhlIGZpbHRlciBrZXl3b3JkIGluIHRoZSBjb2x1bW4gY2VsbFxuICAgKlxuICAgKiBOb3RlOiBTZWFyY2ggaXMgY2FzZS1pbnNlbnNpdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgZmllbGQgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBzZWFyY2ggc3RyaW5nXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUsIGlmIGZpbHRlciB2YWx1ZSBpcyBmb3VuZCB0byBiZSBhIHN1YnN0cmluZ1xuICAgKiBvZiBvbmUgb2YgdGhlIGNvbHVtbiB2YWx1ZXMsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGhhc0ZpbHRlcktleXdvcmQobmFtZSwgZGF0YSkge1xuICAgIGxldCBmaWx0ZXJEYXRhID0gbnVsbDtcbiAgICBsZXQgZXhhY3RNYXRjaCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICBsZXQgc2VhcmNoS2V5ID0gbnVsbDtcbiAgICBsZXQgc2VhcmNoU3RyaW5nID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcltuYW1lXSkge1xuICAgICAgZmlsdGVyRGF0YSA9IHRoaXMucHJvcHMuZmlsdGVyW25hbWVdLnZhbHVlO1xuICAgICAgZXhhY3RNYXRjaCA9IHRoaXMucHJvcHMuZmlsdGVyW25hbWVdLmV4YWN0TWF0Y2g7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIG51bGwgaW5wdXRzXG4gICAgaWYgKGZpbHRlckRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBudW1lcmljIGlucHV0c1xuICAgIGlmICh0eXBlb2YgZmlsdGVyRGF0YSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldCBpbnREYXRhID0gTnVtYmVyLnBhcnNlSW50KGRhdGEsIDEwKTtcbiAgICAgIHJlc3VsdCA9IChmaWx0ZXJEYXRhID09PSBpbnREYXRhKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgc3RyaW5nIGlucHV0c1xuICAgIGlmICh0eXBlb2YgZmlsdGVyRGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlYXJjaEtleSA9IGZpbHRlckRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICAgIHN3aXRjaCAodHlwZW9mIGRhdGEpIHtcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAvLyBIYW5kbGVzIHRoZSBjYXNlIHdoZXJlIHRoZSBkYXRhIGlzIGFuIGFycmF5ICh0eXBlb2YgJ29iamVjdCcpXG4gICAgICAgICAgLy8gYW5kIHlvdSB3YW50IHRvIHNlYXJjaCB0aHJvdWdoIGl0IGZvclxuICAgICAgICAgIC8vIHRoZSBzdHJpbmcgeW91IGFyZSBmaWx0ZXJpbmcgYnlcbiAgICAgICAgICBsZXQgc2VhcmNoQXJyYXkgPSBkYXRhLm1hcCgoZSkgPT4gZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICBpZiAoZXhhY3RNYXRjaCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gc2VhcmNoQXJyYXkuaW5jbHVkZXMoc2VhcmNoS2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gKHNlYXJjaEFycmF5LmZpbmQoKGUpID0+IChlLmluZGV4T2Yoc2VhcmNoS2V5KSA+IC0xKSkpICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc2VhcmNoU3RyaW5nID0gZGF0YS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGV4YWN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gKHNlYXJjaFN0cmluZyA9PT0gc2VhcmNoS2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IChzZWFyY2hTdHJpbmcuaW5kZXhPZihzZWFyY2hLZXkpID4gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhcnJheSBpbnB1dHMgZm9yIG11bHRpc2VsZWN0c1xuICAgIGlmICh0eXBlb2YgZmlsdGVyRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJEYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHNlYXJjaEtleSA9IGZpbHRlckRhdGFbaV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc2VhcmNoU3RyaW5nID0gZGF0YS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIG1hdGNoID0gKHNlYXJjaFN0cmluZy5pbmRleE9mKHNlYXJjaEtleSkgPiAtMSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmVuZGVyQWN0aW9ucygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3Rpb25zLm1hcCgoYWN0aW9uLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q1RBXG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGxhYmVsPXthY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICBvblVzZXJJbnB1dD17YWN0aW9uLmFjdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGEgPT09IG51bGwgfHwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWluZm8gbm8tcmVzdWx0LWZvdW5kLXBhbmVsJz5cbiAgICAgICAgICA8c3Ryb25nPk5vIHJlc3VsdCBmb3VuZC48L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgcm93c1BlclBhZ2UgPSB0aGlzLnN0YXRlLlJvd3NQZXJQYWdlO1xuICAgIGxldCBoZWFkZXJzID0gdGhpcy5zdGF0ZS5IaWRlLmRlZmF1bHRDb2x1bW4gPT09IHRydWUgPyBbXSA6IFtcbiAgICAgIDx0aCBrZXk9J3RoX2NvbF8wJyBvbkNsaWNrPXt0aGlzLnNldFNvcnRDb2x1bW4oLTEpLmJpbmQodGhpcyl9PlxuICAgICAgICB7dGhpcy5wcm9wcy5Sb3dOdW1MYWJlbH1cbiAgICAgIDwvdGg+LFxuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuZmllbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZHNbaV0uc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgY29sSW5kZXggPSBpICsgMTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzW2ldLmZyZWV6ZUNvbHVtbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGhlYWRlcnMucHVzaChcbiAgICAgICAgICAgIDx0aCBrZXk9eyd0aF9jb2xfJyArIGNvbEluZGV4fSBpZD17dGhpcy5wcm9wcy5mcmVlemVDb2x1bW59XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZXRTb3J0Q29sdW1uKGkpLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5maWVsZHNbaV0ubGFiZWx9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVhZGVycy5wdXNoKFxuICAgICAgICAgICAgPHRoIGtleT17J3RoX2NvbF8nICsgY29sSW5kZXh9IG9uQ2xpY2s9e3RoaXMuc2V0U29ydENvbHVtbihpKS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmllbGRzW2ldLmxhYmVsfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IGN1clJvdyA9IFtdO1xuICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0U29ydGVkUm93cygpO1xuICAgIGxldCBtYXRjaGVzRm91bmQgPSAwOyAvLyBLZWVwcyB0cmFjayBvZiBob3cgbWFueSByb3dzIHdoZXJlIGRpc3BsYXllZCBzbyBmYXIgYWNyb3NzIGFsbCBwYWdlc1xuICAgIGxldCBmaWx0ZXJlZFJvd3MgPSB0aGlzLmNvdW50RmlsdGVyZWRSb3dzKCk7XG4gICAgbGV0IGN1cnJlbnRQYWdlUm93ID0gKHJvd3NQZXJQYWdlICogKHRoaXMuc3RhdGUuUGFnZU51bWJlciAtIDEpKTtcbiAgICBsZXQgZmlsdGVyZWREYXRhID0gW107XG4gICAgbGV0IHVzZUtleXdvcmQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlci5rZXl3b3JkKSB7XG4gICAgICB1c2VLZXl3b3JkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQdXNoIHJvd3MgdG8gZGF0YSB0YWJsZVxuICAgIGZvciAobGV0IGkgPSAwO1xuICAgICAgICAgKGkgPCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSAmJiAocm93cy5sZW5ndGggPCByb3dzUGVyUGFnZSk7XG4gICAgICAgICBpKytcbiAgICApIHtcbiAgICAgIGN1clJvdyA9IFtdO1xuXG4gICAgICAvLyBDb3VudHMgZmlsdGVyIG1hdGNoZXNcbiAgICAgIGxldCBmaWx0ZXJNYXRjaENvdW50ID0gMDtcbiAgICAgIGxldCBrZXl3b3JkTWF0Y2ggPSAwO1xuICAgICAgbGV0IGZpbHRlckxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEl0ZXJhdGVzIHRocm91Z2ggaGVhZGVycyB0byBwb3B1bGF0ZSByb3cgY29sdW1uc1xuICAgICAgLy8gd2l0aCBjb3JyZXNwb25kaW5nIGRhdGFcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy5maWVsZHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgbGV0IGRhdGEgPSAnVW5rbm93bic7XG5cbiAgICAgICAgLy8gU2V0IGNvbHVtbiBkYXRhXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFbaW5kZXhbaV0uUm93SWR4XSkge1xuICAgICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmRhdGFbaW5kZXhbaV0uUm93SWR4XVtqXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkc1tqXS5maWx0ZXIpIHtcbiAgICAgICAgICBpZiAodGhpcy5oYXNGaWx0ZXJLZXl3b3JkKHRoaXMucHJvcHMuZmllbGRzW2pdLmZpbHRlci5uYW1lLCBkYXRhKSkge1xuICAgICAgICAgICAgZmlsdGVyTWF0Y2hDb3VudCsrO1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhLnB1c2godGhpcy5wcm9wcy5kYXRhW2luZGV4W2ldLlJvd0lkeF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VLZXl3b3JkID09PSB0cnVlKSB7XG4gICAgICAgICAgZmlsdGVyTGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5maWx0ZXIpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyS2V5d29yZCgna2V5d29yZCcsIGRhdGEpKSB7XG4gICAgICAgICAgICBrZXl3b3JkTWF0Y2grKztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyTGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5maWx0ZXIpLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXkgPSAndGRfY29sXycgKyBqO1xuXG4gICAgICAgIC8vIEdldCBjdXN0b20gY2VsbCBmb3JtYXR0aW5nIGlmIGF2YWlsYWJsZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5nZXRGb3JtYXR0ZWRDZWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzW2pdLnNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkYXRhID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY3JlYXRlIG1hcHBpbmcgYmV0d2VlbiByb3dIZWFkZXJzIGFuZCByb3dEYXRhIGluIGEgcm93IE9iamVjdFxuICAgICAgICAgICAgY29uc3Qgcm93ID0ge307XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpZWxkcy5mb3JFYWNoKChmaWVsZCwgaykgPT4ge1xuICAgICAgICAgICAgICByb3dbZmllbGQubGFiZWxdID0gdGhpcy5wcm9wcy5kYXRhW2luZGV4W2ldLlJvd0lkeF1ba107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmdldEZvcm1hdHRlZENlbGwoXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuZmllbGRzW2pdLmxhYmVsLFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBDYW4ndCBjdXJyZW50bHkgcGFzcyBhIGtleSwgbmVlZCB0byB1cGRhdGUgY29sdW1uRm9ybWF0dGVyXG4gICAgICAgICAgICAvLyB0byBub3QgcmV0dXJuIGEgPHRkPiBub2RlLiBVc2luZyBjcmVhdGVGcmFnbWVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgY3VyUm93LnB1c2goY3JlYXRlRnJhZ21lbnQoe2RhdGF9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1clJvdy5wdXNoKDx0ZCBrZXk9e2tleX0+e2RhdGF9PC90ZD4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgZGlzcGxheSBhIHJvdyBpZiBhbGwgZmlsdGVyIHZhbHVlcyBoYXZlIGJlZW4gbWF0Y2hlZFxuICAgICAgaWYgKChmaWx0ZXJMZW5ndGggPT09IGZpbHRlck1hdGNoQ291bnQpICYmXG4gICAgICAgICgodXNlS2V5d29yZCA9PT0gdHJ1ZSAmJiBrZXl3b3JkTWF0Y2ggPiAwKSB8fFxuICAgICAgICAgICh1c2VLZXl3b3JkID09PSBmYWxzZSAmJiBrZXl3b3JkTWF0Y2ggPT09IDApKSkge1xuICAgICAgICBtYXRjaGVzRm91bmQrKztcbiAgICAgICAgaWYgKG1hdGNoZXNGb3VuZCA+IGN1cnJlbnRQYWdlUm93KSB7XG4gICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBpbmRleFtpXS5Db250ZW50O1xuICAgICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgIDx0ciBrZXk9eyd0cl8nICsgcm93SW5kZXh9IGNvbFNwYW49e2hlYWRlcnMubGVuZ3RofT5cbiAgICAgICAgICAgICAgPHRkPntyb3dJbmRleH08L3RkPlxuICAgICAgICAgICAgICB7Y3VyUm93fVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IFJvd3NQZXJQYWdlRHJvcGRvd24gPSAoXG4gICAgICA8c2VsZWN0XG4gICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXNtIHBlclBhZ2VcIlxuICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VSb3dzUGVyUGFnZX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuUm93c1BlclBhZ2V9XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24+MjA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj41MDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPjEwMDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPjEwMDA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj41MDAwPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24+MTAwMDA8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgICk7XG5cbiAgICAvLyBJbmNsdWRlIG9ubHkgZmlsdGVyZWQgZGF0YSBpZiBmaWx0ZXJzIHdlcmUgYXBwbGllZFxuICAgIGxldCBjc3ZEYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlciAmJiBmaWx0ZXJlZERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY3N2RGF0YSA9IGZpbHRlcmVkRGF0YTtcbiAgICB9XG5cbiAgICBsZXQgaGVhZGVyID0gdGhpcy5zdGF0ZS5IaWRlLnJvd3NQZXJQYWdlID09PSB0cnVlID8gJycgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtyb3dzLmxlbmd0aH0gcm93cyBkaXNwbGF5ZWQgb2Yge2ZpbHRlcmVkUm93c30uXG4gICAgICAgICAgICAoTWF4aW11bSByb3dzIHBlciBwYWdlOiB7Um93c1BlclBhZ2VEcm9wZG93bn0pXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICctNDNweCd9fT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckFjdGlvbnMoKX1cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kb3dubG9hZENTVi5iaW5kKG51bGwsIGNzdkRhdGEpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb3dubG9hZCBUYWJsZSBhcyBDU1ZcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25MaW5rc1xuICAgICAgICAgICAgICBUb3RhbD17ZmlsdGVyZWRSb3dzfVxuICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e3RoaXMuY2hhbmdlUGFnZX1cbiAgICAgICAgICAgICAgUm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuICAgICAgICAgICAgICBBY3RpdmU9e3RoaXMuc3RhdGUuUGFnZU51bWJlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGxldCBmb290ZXIgPSB0aGlzLnN0YXRlLkhpZGUuZG93bmxvYWRDU1YgPT09IHRydWUgPyAnJyA6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIiBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclRleHRcIj5cbiAgICAgICAgICAgICAge3Jvd3MubGVuZ3RofSByb3dzIGRpc3BsYXllZCBvZiB7ZmlsdGVyZWRSb3dzfS5cbiAgICAgICAgICAgICAgKE1heGltdW0gcm93cyBwZXIgcGFnZToge1Jvd3NQZXJQYWdlRHJvcGRvd259KVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBzdHlsZT17e21hcmdpblRvcDogJy0yM3B4J319PlxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbkxpbmtzXG4gICAgICAgICAgICAgICAgVG90YWw9e2ZpbHRlcmVkUm93c31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e3RoaXMuY2hhbmdlUGFnZX1cbiAgICAgICAgICAgICAgICBSb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XG4gICAgICAgICAgICAgICAgQWN0aXZlPXt0aGlzLnN0YXRlLlBhZ2VOdW1iZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcxNHB4J319PlxuICAgICAgICB7aGVhZGVyfVxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtcHJpbWFyeSB0YWJsZS1ib3JkZXJlZFwiIGlkPVwiZHluYW1pY3RhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImluZm9cIj57aGVhZGVyc308L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3Jvd3N9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAge2Zvb3Rlcn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbkRhdGFUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBSb3dOdW1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gRnVuY3Rpb24gb2Ygd2hpY2ggcmV0dXJucyBhIEpTWCBlbGVtZW50IGZvciBhIHRhYmxlIGNlbGwsIHRha2VzXG4gIC8vIHBhcmFtZXRlcnMgb2YgdGhlIGZvcm06IGZ1bmMoQ29sdW1uTmFtZSwgQ2VsbERhdGEsIEVudGlyZVJvd0RhdGEpXG4gIGdldEZvcm1hdHRlZENlbGw6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBIaWRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbkRhdGFUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIFJvd051bUxhYmVsOiAnTm8uJyxcbiAgZmlsdGVyOiB7fSxcbiAgSGlkZToge1xuICAgIHJvd3NQZXJQYWdlOiBmYWxzZSxcbiAgICBkb3dubG9hZENTVjogZmFsc2UsXG4gICAgZGVmYXVsdENvbHVtbjogZmFsc2UsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGU7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRmlsdGVyIGNvbXBvbmVudC5cbiAqIEEgd3JhcHBlciBmb3IgZm9ybSBlbGVtZW50cyBpbnNpZGUgYSBzZWxlY3Rpb24gZmlsdGVyLlxuICpcbiAqIENvbnN0cnVjdHMgZmlsdGVyIGZpZWxkcyBiYXNlZCBvbiB0aGlzLnByb3BzLmZpZWxkcyBjb25maWd1cmF0aW9uIG9iamVjdFxuICpcbiAqIEFsdGVycyB0aGUgZmlsdGVyIG9iamVjdCBhbmQgc2VuZHMgaXQgdG8gcGFyZW50IG9uIGV2ZXJ5IHVwZGF0ZS5cbiAqXG4gKi9cbmNsYXNzIEZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25GaWVsZFVwZGF0ZSA9IHRoaXMub25GaWVsZFVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyRmlsdGVyRmllbGRzID0gdGhpcy5yZW5kZXJGaWx0ZXJGaWVsZHMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZpbHRlciBvYmplY3QgdG8gcmVmbGVjdCB2YWx1ZXMgb2YgaW5wdXQgZmllbGRzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIGZvcm0gZWxlbWVudCB0eXBlIChpLmUgY29tcG9uZW50IG5hbWUpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHRoZSBuYW1lIG9mIHRoZSBmb3JtIGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gaWQgb2YgdGhlIGZvcm0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIHR5cGUgb2YgdGhlIGZvcm0gZWxlbWVudFxuICAgKi9cbiAgb25GaWVsZFVwZGF0ZShuYW1lLCB2YWx1ZSwgaWQsIHR5cGUpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZmlsdGVyKSk7XG4gICAgY29uc3QgZXhhY3RNYXRjaCA9IHR5cGUgPT09ICd0ZXh0Ym94JyA/IGZhbHNlIDogdHJ1ZTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICBkZWxldGUgZmlsdGVyW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJbbmFtZV0gPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZXhhY3RNYXRjaDogZXhhY3RNYXRjaCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy51cGRhdGVGaWx0ZXIoZmlsdGVyKTtcbiAgfVxuXG4gIHJlbmRlckZpbHRlckZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5maWVsZHMucmVkdWNlKChyZXN1bHQsIGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWVsZC5maWx0ZXI7XG4gICAgICBpZiAoZmlsdGVyICYmIGZpbHRlci5oaWRlICE9PSB0cnVlKSB7XG4gICAgICAgIGxldCBlbGVtZW50O1xuICAgICAgICBzd2l0Y2ggKGZpbHRlci50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIGVsZW1lbnQgPSA8VGV4dGJveEVsZW1lbnQga2V5PXtmaWx0ZXIubmFtZX0vPjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICBlbGVtZW50ID0gPFNlbGVjdEVsZW1lbnQga2V5PXtmaWx0ZXIubmFtZX0gb3B0aW9ucz17ZmlsdGVyLm9wdGlvbnN9Lz47XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ211bHRpc2VsZWN0JzpcbiAgICAgICAgICBlbGVtZW50ID0gPFNlbGVjdEVsZW1lbnQga2V5PXtmaWx0ZXIubmFtZX0gb3B0aW9ucz17ZmlsdGVyLm9wdGlvbnN9IG11bHRpcGxlPXt0cnVlfS8+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICBlbGVtZW50ID0gPERhdGVFbGVtZW50IGtleT17ZmlsdGVyLm5hbWV9Lz47XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZWxlbWVudCA9IDxUZXh0Ym94RWxlbWVudCBrZXk9e2ZpbHRlci5uYW1lfS8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogZmlsdGVyLm5hbWUsXG4gICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICB2YWx1ZTogKHRoaXMucHJvcHMuZmlsdGVyW2ZpbHRlci5uYW1lXSB8fCB7fSkudmFsdWUsXG4gICAgICAgICAgICBvblVzZXJJbnB1dDogdGhpcy5vbkZpZWxkVXBkYXRlLFxuICAgICAgICAgIH1cbiAgICAgICAgKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgID5cbiAgICAgICAgPEZpZWxkc2V0RWxlbWVudFxuICAgICAgICAgIGNvbHVtbnM9e3RoaXMucHJvcHMuY29sdW1uc31cbiAgICAgICAgICBsZWdlbmQ9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGaWx0ZXJGaWVsZHMoKX1cbiAgICAgICAgICA8QnV0dG9uRWxlbWVudFxuICAgICAgICAgICAgbGFiZWw9XCJDbGVhciBGaWx0ZXJzXCJcbiAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5wcm9wcy5jbGVhckZpbHRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkc2V0RWxlbWVudD5cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBpZDogbnVsbCxcbiAgY2xlYXJGaWx0ZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUud2Fybignb25VcGRhdGUoKSBjYWxsYmFjayBpcyBub3Qgc2V0IScpO1xuICB9LFxuICBjb2x1bW5zOiAxLFxufTtcbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjbGVhckZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBhbmVsIGZyb20gJ2pzeC9QYW5lbCc7XG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ2pzeC9EYXRhVGFibGUnO1xuaW1wb3J0IEZpbHRlciBmcm9tICdqc3gvRmlsdGVyJztcblxuLyoqXG4gKiBGaWx0ZXJhYmxlRGF0YVRhYmxlIGNvbXBvbmVudC5cbiAqIEEgd3JhcHBlciBmb3IgYWxsIGRhdGF0YWJsZXMgdGhhdCBoYW5kbGVzIGZpbHRlcmluZy5cbiAqXG4gKiBIYW5kbGVzIHRoZSB1cGRhdGluZyBhbmQgY2xlYXJpbmcgb2YgdGhlIGZpbHRlciBzdGF0ZSBiYXNlZCBvbiBjaGFuZ2VzIHNlbnRcbiAqIGZyb20gdGhlIEZpdGxlckZvcm0uXG4gKlxuICogUGFzc2VzIHRoZSBGaWx0ZXIgdG8gdGhlIERhdGF0YWJsZS5cbiAqXG4gKiBEZXByZWNhdGVzIEZpbHRlciBGb3JtLlxuICovXG5jbGFzcyBGaWx0ZXJhYmxlRGF0YVRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlcjoge30sXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlciA9IHRoaXMudXBkYXRlRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGVhckZpbHRlciA9IHRoaXMuY2xlYXJGaWx0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGZpbHRlciBzdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIHBhc3NlZCBmcm9tIEZpbHRlckZvcm1cbiAgICovXG4gIHVwZGF0ZUZpbHRlcihmaWx0ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJ9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIEZpbHRlciB0byBlbXB0eSBvYmplY3RcbiAgICovXG4gIGNsZWFyRmlsdGVyKCkge1xuICAgIHRoaXMudXBkYXRlRmlsdGVyKHt9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsXG4gICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgPlxuICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lICsgJ19maWx0ZXInfVxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLm5hbWUgKyAnX2ZpbHRlcid9XG4gICAgICAgICAgdGl0bGU9J1NlbGVjdGlvbiBGaWx0ZXInXG4gICAgICAgICAgY29sdW1ucz17dGhpcy5wcm9wcy5jb2x1bW5zfVxuICAgICAgICAgIGZpbHRlcj17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgZmllbGRzPXt0aGlzLnByb3BzLmZpZWxkc31cbiAgICAgICAgICB1cGRhdGVGaWx0ZXI9e3RoaXMudXBkYXRlRmlsdGVyfVxuICAgICAgICAgIGNsZWFyRmlsdGVyPXt0aGlzLmNsZWFyRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgICA8RGF0YVRhYmxlXG4gICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgIGZpZWxkcz17dGhpcy5wcm9wcy5maWVsZHN9XG4gICAgICAgICAgZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlcn1cbiAgICAgICAgICBnZXRGb3JtYXR0ZWRDZWxsPXt0aGlzLnByb3BzLmdldEZvcm1hdHRlZENlbGx9XG4gICAgICAgICAgYWN0aW9ucz17dGhpcy5wcm9wcy5hY3Rpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9QYW5lbD5cbiAgICApO1xuICB9XG59XG5cbkZpbHRlcmFibGVEYXRhVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICBjb2x1bW5zOiAzLFxufTtcblxuRmlsdGVyYWJsZURhdGFUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZpZWxkczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxuICBnZXRGb3JtYXR0ZWRDZWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmFibGVEYXRhVGFibGU7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgUmVhY3QgY29tcG9uZW50IGZvciBMb2FkZXJcbiAqXG4gKiBAYXV0aG9yIEhlbnJpIFJhYmFsYWlzXG4gKiBAdmVyc2lvbiAxLjAuMFxuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogTG9hZGVyIGNvbXBvbmVudFxuICovXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2xvYWRlcidcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogcGFyc2VJbnQodGhpcy5wcm9wcy5zaXplKSwgaGVpZ2h0OiBwYXJzZUludCh0aGlzLnByb3BzLnNpemUpfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5Mb2FkZXIucHJvcFR5cGVzID0ge3NpemU6IFByb3BUeXBlcy5zdHJpbmd9O1xuTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtzaXplOiAnMTIwJ307XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsIi8qIGV4cG9ydGVkIFJQYWdpbmF0aW9uTGlua3MgKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBQYWdpbmF0aW9uTGlua3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlUGFnZSA9IHRoaXMuY2hhbmdlUGFnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlUGFnZShpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgLy8gRG9uJ3QganVtcCB0byB0aGUgdG9wIG9mIHRoZSBwYWdlXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2VQYWdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VQYWdlKGkpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93c1BlclBhZ2UgPSB0aGlzLnByb3BzLlJvd3NQZXJQYWdlO1xuICAgIGxldCBwYWdlTGlua3MgPSBbXTtcbiAgICBsZXQgY2xhc3NMaXN0O1xuICAgIGxldCBsYXN0UGFnZSA9IE1hdGguY2VpbCh0aGlzLnByb3BzLlRvdGFsIC8gcm93c1BlclBhZ2UpO1xuICAgIGxldCBzdGFydFBhZ2UgPSBNYXRoLm1heCgxLCB0aGlzLnByb3BzLkFjdGl2ZSAtIDMpO1xuICAgIGxldCBsYXN0U2hvd25QYWdlID0gTWF0aC5taW4odGhpcy5wcm9wcy5BY3RpdmUgKyAzLCBsYXN0UGFnZSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5Ub3RhbCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLlRvdGFsIDwgdGhpcy5wcm9wcy5Sb3dzUGVyUGFnZSkge1xuICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgfVxuXG4gICAgaWYgKChsYXN0U2hvd25QYWdlIC0gc3RhcnRQYWdlKSA8PSA3KSB7XG4gICAgICBsYXN0U2hvd25QYWdlID0gc3RhcnRQYWdlICsgNjtcbiAgICAgIGlmIChsYXN0U2hvd25QYWdlID4gbGFzdFBhZ2UpIHtcbiAgICAgICAgbGFzdFNob3duUGFnZSA9IGxhc3RQYWdlO1xuICAgICAgICBzdGFydFBhZ2UgPSBsYXN0UGFnZSAtIDY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcbiAgICAgIHBhZ2VMaW5rcy5wdXNoKFxuICAgICAgICA8bGkga2V5PXsndGFibGVfcGFnZV9iZWdpbm5pbmdfJyArIHN0YXJ0UGFnZS50b1N0cmluZygpfSBvbkNsaWNrPXt0aGlzLmNoYW5nZVBhZ2UoMSl9PjxhIGhyZWY9JyMnPiZsYXF1bzs8L2E+PC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChzdGFydFBhZ2UgPCAxKSB7XG4gICAgICBzdGFydFBhZ2UgPSAxO1xuICAgIH1cbiAgICBpZiAobGFzdFNob3duUGFnZSA8IDEpIHtcbiAgICAgIGxhc3RTaG93blBhZ2UgPSAxO1xuICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmx5IDEgcGFnZSwgZG9uJ3QgZGlzcGxheSBwYWdpbmF0aW9uIGxpbmtzXG4gICAgaWYgKHN0YXJ0UGFnZSA9PT0gbGFzdFNob3duUGFnZSkge1xuICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0UGFnZTsgaSA8PSBsYXN0U2hvd25QYWdlOyBpICs9IDEpIHtcbiAgICAgIGNsYXNzTGlzdCA9ICcnO1xuICAgICAgaWYgKHRoaXMucHJvcHMuQWN0aXZlID09PSBpKSB7XG4gICAgICAgIGNsYXNzTGlzdCA9ICdhY3RpdmUnO1xuICAgICAgfVxuICAgICAgcGFnZUxpbmtzLnB1c2goXG4gICAgICAgIDxsaSBrZXk9eyd0YWJsZV9wYWdlXycgKyBpLnRvU3RyaW5nKCl9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFnZShpKX0gY2xhc3NOYW1lPXtjbGFzc0xpc3R9PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e2l9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxhc3RTaG93blBhZ2UgIT09IGxhc3RQYWdlKSB7XG4gICAgICBwYWdlTGlua3MucHVzaChcbiAgICAgICAgPGxpIGtleT17J3RhYmxlX3BhZ2VfbW9yZV8nICsgbGFzdFNob3duUGFnZS50b1N0cmluZygpfSBvbkNsaWNrPXt0aGlzLmNoYW5nZVBhZ2UobGFzdFBhZ2UpfT5cbiAgICAgICAgICA8YSBocmVmPScjJz4mcmFxdW87PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT0ncGFnaW5hdGlvbiBwYWdpbmF0aW9uLXRhYmxlJz5cbiAgICAgICAgICB7cGFnZUxpbmtzfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5QYWdpbmF0aW9uTGlua3MucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZVBhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBUb3RhbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblBhZ2luYXRpb25MaW5rcy5kZWZhdWx0UHJvcHMgPSB7XG4gIFJvd3NQZXJQYWdlOiAxMCxcbiAgQWN0aXZlOiAxLFxufTtcblxubGV0IFJQYWdpbmF0aW9uTGlua3MgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KFBhZ2luYXRpb25MaW5rcyk7XG5cbndpbmRvdy5QYWdpbmF0aW9uTGlua3MgPSBQYWdpbmF0aW9uTGlua3M7XG53aW5kb3cuUlBhZ2luYXRpb25MaW5rcyA9IFJQYWdpbmF0aW9uTGlua3M7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25MaW5rcztcbiIsIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIFJlYWN0IGNvbXBvbmVudCBmb3IgUGFuZWxcbiAqXG4gKiBAYXV0aG9yIEFsZXggSS5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBQYW5lbCBjb21wb25lbnRcbiAqIFdyYXBzIGNoaWxkcmVuIGluIGEgY29sbGFwc2libGUgYm9vdHN0cmFwIHBhbmVsXG4gKi9cbmNsYXNzIFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29sbGFwc2VkOiB0aGlzLnByb3BzLmluaXRDb2xsYXBzZWQsXG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgcGFuZWwgY2xhc3MgYmFzZWQgb24gY29sbGFwc2VkIHN0YXR1c1xuICAgIHRoaXMucGFuZWxDbGFzcyA9IChcbiAgICAgIHRoaXMucHJvcHMuaW5pdENvbGxhcHNlZCA/XG4gICAgICAgICdwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZScgOlxuICAgICAgICAncGFuZWwtY29sbGFwc2UgY29sbGFwc2UgaW4nXG4gICAgKTtcblxuICAgIHRoaXMudG9nZ2xlQ29sbGFwc2VkID0gdGhpcy50b2dnbGVDb2xsYXBzZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIENoYW5nZSBhcnJvdyBkaXJlY3Rpb24gYmFzZWQgb24gY29sbGFwc2Ugc3RhdHVzXG4gICAgbGV0IGdseXBoQ2xhc3MgPSAoXG4gICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlZCA/XG4gICAgICAgICdnbHlwaGljb24gcHVsbC1yaWdodCBnbHlwaGljb24tY2hldnJvbi1kb3duJyA6XG4gICAgICAgICdnbHlwaGljb24gcHVsbC1yaWdodCBnbHlwaGljb24tY2hldnJvbi11cCdcbiAgICApO1xuXG4gICAgLy8gQWRkIHBhbmVsIGhlYWRlciwgaWYgdGl0bGUgaXMgc2V0XG4gICAgY29uc3QgcGFuZWxIZWFkaW5nID0gdGhpcy5wcm9wcy50aXRsZSA/IChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2VkfVxuICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgZGF0YS10YXJnZXQ9eycjJyArIHRoaXMucHJvcHMuaWR9XG4gICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtnbHlwaENsYXNzfT48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1wcmltYXJ5XCI+XG4gICAgICAgIHtwYW5lbEhlYWRpbmd9XG4gICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT17dGhpcy5wYW5lbENsYXNzfSByb2xlPVwidGFicGFuZWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIiBzdHlsZT17e2hlaWdodDogdGhpcy5wcm9wcy5oZWlnaHR9fT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFuZWwucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5QYW5lbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRDb2xsYXBzZWQ6IGZhbHNlLFxuICBpZDogJ2RlZmF1bHQtcGFuZWwnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJ0xvYWRlcic7XG5pbXBvcnQgRmlsdGVyYWJsZURhdGFUYWJsZSBmcm9tICdGaWx0ZXJhYmxlRGF0YVRhYmxlJztcblxuY2xhc3MgVXNlckFjY291bnRzSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5mZXRjaERhdGEgPSB0aGlzLmZldGNoRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybWF0Q29sdW1uID0gdGhpcy5mb3JtYXRDb2x1bW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZFVzZXIgPSB0aGlzLmFkZFVzZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hEYXRhKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0U3RhdGUoe2lzTG9hZGVkOiB0cnVlfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGRhdGEgZnJvbSB0aGUgcHJvdmlkZWQgVVJMIGFuZCBzYXZlIGl0IGluIHN0YXRlXG4gICAqIEFkZGl0aW9uYWxseSBhZGQgaGlkZGVuSGVhZGVycyB0byBnbG9iYWwgbG9yaXMgdmFyaWFibGVcbiAgICogZm9yIGVhc3kgYWNjZXNzIGJ5IGNvbHVtbkZvcm1hdHRlci5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgZmV0Y2hEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnByb3BzLmRhdGFVUkwsIHtjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ30pXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAvLyBDb252ZXJ0IGNvbmNhdGVuYXRlZCBzdHJpbmcgb2Ygc2l0ZXMgdG8gYXJyYXlcbiAgICAgICAgZGF0YS5EYXRhID0gZGF0YS5EYXRhLm1hcCgocm93KSA9PiB7XG4gICAgICAgICAgcm93WzBdID0gcm93WzBdLnNwbGl0KCc7ICcpO1xuICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmeSBiZWhhdmlvdXIgb2Ygc3BlY2lmaWVkIGNvbHVtbiBjZWxscyBpbiB0aGUgRGF0YSBUYWJsZSBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbHVtbiAtIGNvbHVtbiBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjZWxsIC0gY2VsbCBjb250ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSByb3cgLSByb3cgY29udGVudCBpbmRleGVkIGJ5IGNvbHVtblxuICAgKlxuICAgKiBAcmV0dXJuIHsqfSBhIGZvcm1hdGVkIHRhYmxlIGNlbGwgZm9yIGEgZ2l2ZW4gY29sdW1uXG4gICAqL1xuICBmb3JtYXRDb2x1bW4oY29sdW1uLCBjZWxsLCByb3cpIHtcbiAgICBsZXQgdXJsO1xuICAgIGxldCByZXN1bHQgPSA8dGQ+e2NlbGx9PC90ZD47XG4gICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgIGNhc2UgJ1NpdGUnOlxuICAgICAgICAvLyBJZiB1c2VyIGhhcyBtdWx0aXBsZSBzaXRlcywgam9pbiBhcnJheSBvZiBzaXRlcyBpbnRvIHN0cmluZ1xuICAgICAgICByZXN1bHQgPSA8dGQ+e2NlbGwuam9pbignOyAnKX08L3RkPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdVc2VybmFtZSc6XG4gICAgICAgIHVybCA9IGxvcmlzLkJhc2VVUkwgKyAnL3VzZXJfYWNjb3VudHMvZWRpdF91c2VyLycgKyByb3cuVXNlcm5hbWU7XG4gICAgICAgIHJlc3VsdCA9IDx0ZD48YSBocmVmID17dXJsfT57Y2VsbH08L2E+PC90ZD47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQWN0aXZlJzpcbiAgICAgICAgaWYgKHJvdy5BY3RpdmUgPT09ICdZJykge1xuICAgICAgICAgIHJlc3VsdCA9IDx0ZD5ZZXM8L3RkPjtcbiAgICAgICAgfSBlbHNlIGlmIChyb3cuQWN0aXZlID09PSAnTicpIHtcbiAgICAgICAgICByZXN1bHQgPSA8dGQ+Tm88L3RkPjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1BlbmRpbmcgQXBwcm92YWwnOlxuICAgICAgICBpZiAocm93WydQZW5kaW5nIEFwcHJvdmFsJ10gPT09ICdZJykge1xuICAgICAgICAgIHJlc3VsdCA9IDx0ZD5ZZXM8L3RkPjtcbiAgICAgICAgfSBlbHNlIGlmIChyb3dbJ1BlbmRpbmcgQXBwcm92YWwnXSA9PT0gJ04nKSB7XG4gICAgICAgICAgcmVzdWx0ID0gPHRkPk5vPC90ZD47XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhZGRVc2VyKCkge1xuICAgIGxvY2F0aW9uLmhyZWY9Jy91c2VyX2FjY291bnRzL2VkaXRfdXNlci8nO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIElmIGVycm9yIG9jY3VycywgcmV0dXJuIGEgbWVzc2FnZS5cbiAgICAvLyBYWFg6IFJlcGxhY2UgdGhpcyB3aXRoIGEgVUkgY29tcG9uZW50IGZvciA1MDAgZXJyb3JzLlxuICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XG4gICAgICByZXR1cm4gPGgzPkFuIGVycm9yIG9jY3VyZWQgd2hpbGUgbG9hZGluZyB0aGUgcGFnZS48L2gzPjtcbiAgICB9XG5cbiAgICAvLyBXYWl0aW5nIGZvciBhc3luYyBkYXRhIHRvIGxvYWRcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybiA8TG9hZGVyLz47XG4gICAgfVxuXG4gICAvKipcbiAgICAqIFhYWDogQ3VycmVudGx5LCB0aGUgb3JkZXIgb2YgdGhlc2UgZmllbGRzIE1VU1QgbWF0Y2ggdGhlIG9yZGVyIG9mIHRoZVxuICAgICogcXVlcmllZCBjb2x1bW5zIGluIF9zZXR1cFZhcmlhYmxlcygpIGluIHVzZXJBY2NvdW50cy5jbGFzcy5pbmNcbiAgICAqL1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0YXRlLmRhdGEuZmllbGRPcHRpb25zO1xuICAgIGNvbnN0IGZpZWxkcyA9IFtcbiAgICAgIHtsYWJlbDogJ1NpdGUnLCBzaG93OiB0cnVlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ3NpdGUnLFxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucy5zaXRlcyxcbiAgICAgIH19LFxuICAgICAge2xhYmVsOiAnVXNlcm5hbWUnLCBzaG93OiB0cnVlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ3VzZXJuYW1lJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgfX0sXG4gICAgICB7bGFiZWw6ICdGdWxsIE5hbWUnLCBzaG93OiB0cnVlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ2Z1bGxOYW1lJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgfX0sXG4gICAgICB7bGFiZWw6ICdFbWFpbCcsIHNob3c6IHRydWUsIGZpbHRlcjoge1xuICAgICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB9fSxcbiAgICAgIHtsYWJlbDogJ0FjdGl2ZScsIHNob3c6IHRydWUsIGZpbHRlcjoge1xuICAgICAgICBuYW1lOiAnYWN0aXZlJyxcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMuYWN0aXZlcyxcbiAgICAgIH19LFxuICAgICAge2xhYmVsOiAnUGVuZGluZyBBcHByb3ZhbCcsIHNob3c6IHRydWUsIGZpbHRlcjoge1xuICAgICAgICBuYW1lOiAncGVuZGluZ0FwcHJvdmFsJyxcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMucGVuZGluZ0FwcHJvdmFscyxcbiAgICAgIH19LFxuICAgIF07XG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIHtsYWJlbDogJ0FkZCBVc2VyJywgYWN0aW9uOiB0aGlzLmFkZFVzZXJ9LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZpbHRlcmFibGVEYXRhVGFibGVcbiAgICAgICAgbmFtZT1cInVzZXJBY2NvdW50c1wiXG4gICAgICAgIHRpdGxlPSdVc2VyIEFjY291bnRzJ1xuICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGEuRGF0YX1cbiAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgIGdldEZvcm1hdHRlZENlbGw9e3RoaXMuZm9ybWF0Q29sdW1ufVxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cblVzZXJBY2NvdW50c0luZGV4LnByb3BUeXBlcyA9IHtcbiAgZGF0YVVSTDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYXNQZXJtaXNzaW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8VXNlckFjY291bnRzSW5kZXhcbiAgICAgIGRhdGFVUkw9e2Ake2xvcmlzLkJhc2VVUkx9L3VzZXJfYWNjb3VudHMvP2Zvcm1hdD1qc29uYH1cbiAgICAgIGhhc1Blcm1pc3Npb249e2xvcmlzLnVzZXJIYXNQZXJtaXNzaW9ufVxuICAgIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3Jpc3dvcmtzcGFjZScpXG4gICk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nOyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgIClcblxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPVxuICAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yICYmIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgMHhlYWM3O1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICB2YXIgaXRlcmF0b3JGbiA9XG4gICAgbWF5YmVJdGVyYWJsZSAmJlxuICAgICgoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSkgfHxcbiAgICAgIG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gIH1cbn1cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAoY29tcG9uZW50ICYmIHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH1cbiAgLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoXG4gIGNoaWxkcmVuLFxuICBuYW1lU29GYXIsXG4gIGNhbGxiYWNrLFxuICB0cmF2ZXJzZUNvbnRleHRcbikge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgaWYgKFxuICAgIGNoaWxkcmVuID09PSBudWxsIHx8XG4gICAgdHlwZSA9PT0gJ3N0cmluZycgfHxcbiAgICB0eXBlID09PSAnbnVtYmVyJyB8fFxuICAgIC8vIFRoZSBmb2xsb3dpbmcgaXMgaW5saW5lZCBmcm9tIFJlYWN0RWxlbWVudC4gVGhpcyBtZWFucyB3ZSBjYW4gb3B0aW1pemVcbiAgICAvLyBzb21lIGNoZWNrcy4gUmVhY3QgRmliZXIgYWxzbyBpbmxpbmVzIHRoaXMgbG9naWMgZm9yIHNpbWlsYXIgcHVycG9zZXMuXG4gICAgKHR5cGUgPT09ICdvYmplY3QnICYmIGNoaWxkcmVuLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpXG4gICkge1xuICAgIGNhbGxiYWNrKFxuICAgICAgdHJhdmVyc2VDb250ZXh0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyXG4gICAgKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBuZXh0TmFtZSxcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIHRyYXZlcnNlQ29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMsXG4gICAgICAgICAgICAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArXG4gICAgICAgICAgICAgICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICtcbiAgICAgICAgICAgICAgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoXG4gICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgbmV4dE5hbWUsXG4gICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgdHJhdmVyc2VDb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhZGRlbmR1bSA9XG4gICAgICAgICAgJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgK1xuICAgICAgICAgICdpbnN0ZWFkIG9yIHdyYXAgdGhlIG9iamVjdCB1c2luZyBjcmVhdGVGcmFnbWVudChvYmplY3QpIGZyb20gdGhlICcgK1xuICAgICAgICAgICdSZWFjdCBhZGQtb25zLic7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50KFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJyxcbiAgICAgICAgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICAgICAgICAgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nXG4gICAgICAgICAgOiBjaGlsZHJlblN0cmluZyxcbiAgICAgICAgYWRkZW5kdW1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgb2xkRWxlbWVudCxcbiAgICB7a2V5OiBuZXdLZXl9LFxuICAgIG9sZEVsZW1lbnQucHJvcHMgIT09IHVuZGVmaW5lZCA/IG9sZEVsZW1lbnQucHJvcHMuY2hpbGRyZW4gOiB1bmRlZmluZWRcbiAgKTtcbn1cblxudmFyIERFRkFVTFRfUE9PTF9TSVpFID0gMTA7XG52YXIgREVGQVVMVF9QT09MRVIgPSBvbmVBcmd1bWVudFBvb2xlcjtcblxudmFyIG9uZUFyZ3VtZW50UG9vbGVyID0gZnVuY3Rpb24oY29weUZpZWxkc0Zyb20pIHtcbiAgdmFyIEtsYXNzID0gdGhpcztcbiAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBLbGFzcy5pbnN0YW5jZVBvb2wucG9wKCk7XG4gICAgS2xhc3MuY2FsbChpbnN0YW5jZSwgY29weUZpZWxkc0Zyb20pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEtsYXNzKGNvcHlGaWVsZHNGcm9tKTtcbiAgfVxufTtcblxudmFyIGFkZFBvb2xpbmdUbyA9IGZ1bmN0aW9uIGFkZFBvb2xpbmdUbyhDb3B5Q29uc3RydWN0b3IsIHBvb2xlcikge1xuICAvLyBDYXN0aW5nIGFzIGFueSBzbyB0aGF0IGZsb3cgaWdub3JlcyB0aGUgYWN0dWFsIGltcGxlbWVudGF0aW9uIGFuZCB0cnVzdHNcbiAgLy8gaXQgdG8gbWF0Y2ggdGhlIHR5cGUgd2UgZGVjbGFyZWRcbiAgdmFyIE5ld0tsYXNzID0gQ29weUNvbnN0cnVjdG9yO1xuICBOZXdLbGFzcy5pbnN0YW5jZVBvb2wgPSBbXTtcbiAgTmV3S2xhc3MuZ2V0UG9vbGVkID0gcG9vbGVyIHx8IERFRkFVTFRfUE9PTEVSO1xuICBpZiAoIU5ld0tsYXNzLnBvb2xTaXplKSB7XG4gICAgTmV3S2xhc3MucG9vbFNpemUgPSBERUZBVUxUX1BPT0xfU0laRTtcbiAgfVxuICBOZXdLbGFzcy5yZWxlYXNlID0gc3RhbmRhcmRSZWxlYXNlcjtcbiAgcmV0dXJuIE5ld0tsYXNzO1xufTtcblxudmFyIHN0YW5kYXJkUmVsZWFzZXIgPSBmdW5jdGlvbiBzdGFuZGFyZFJlbGVhc2VyKGluc3RhbmNlKSB7XG4gIHZhciBLbGFzcyA9IHRoaXM7XG4gIGludmFyaWFudChcbiAgICBpbnN0YW5jZSBpbnN0YW5jZW9mIEtsYXNzLFxuICAgICdUcnlpbmcgdG8gcmVsZWFzZSBhbiBpbnN0YW5jZSBpbnRvIGEgcG9vbCBvZiBhIGRpZmZlcmVudCB0eXBlLidcbiAgKTtcbiAgaW5zdGFuY2UuZGVzdHJ1Y3RvcigpO1xuICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCA8IEtsYXNzLnBvb2xTaXplKSB7XG4gICAgS2xhc3MuaW5zdGFuY2VQb29sLnB1c2goaW5zdGFuY2UpO1xuICB9XG59O1xuXG52YXIgZm91ckFyZ3VtZW50UG9vbGVyID0gZnVuY3Rpb24gZm91ckFyZ3VtZW50UG9vbGVyKGExLCBhMiwgYTMsIGE0KSB7XG4gIHZhciBLbGFzcyA9IHRoaXM7XG4gIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIGluc3RhbmNlID0gS2xhc3MuaW5zdGFuY2VQb29sLnBvcCgpO1xuICAgIEtsYXNzLmNhbGwoaW5zdGFuY2UsIGExLCBhMiwgYTMsIGE0KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBLbGFzcyhhMSwgYTIsIGEzLCBhNCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIE1hcEJvb2tLZWVwaW5nKG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICB0aGlzLnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgdGhpcy5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gIHRoaXMuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICB0aGlzLmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICB0aGlzLmNvdW50ID0gMDtcbn1cbk1hcEJvb2tLZWVwaW5nLnByb3RvdHlwZS5kZXN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgdGhpcy5rZXlQcmVmaXggPSBudWxsO1xuICB0aGlzLmZ1bmMgPSBudWxsO1xuICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICB0aGlzLmNvdW50ID0gMDtcbn07XG5hZGRQb29saW5nVG8oTWFwQm9va0tlZXBpbmcsIGZvdXJBcmd1bWVudFBvb2xlcik7XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0O1xuICB2YXIga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4O1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmM7XG4gIHZhciBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKFxuICAgICAgbWFwcGVkQ2hpbGQsXG4gICAgICByZXN1bHQsXG4gICAgICBjaGlsZEtleSxcbiAgICAgIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudFxuICAgICk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KFxuICAgICAgICBtYXBwZWRDaGlsZCxcbiAgICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGtleVByZWZpeCArXG4gICAgICAgICAgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KVxuICAgICAgICAgICAgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJ1xuICAgICAgICAgICAgOiAnJykgK1xuICAgICAgICAgIGNoaWxkS2V5XG4gICAgICApO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IE1hcEJvb2tLZWVwaW5nLmdldFBvb2xlZChcbiAgICBhcnJheSxcbiAgICBlc2NhcGVkUHJlZml4LFxuICAgIGZ1bmMsXG4gICAgY29udGV4dFxuICApO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICBNYXBCb29rS2VlcGluZy5yZWxlYXNlKHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbnZhciBudW1lcmljUHJvcGVydHlSZWdleCA9IC9eXFxkKyQvO1xuXG52YXIgd2FybmVkQWJvdXROdW1lcmljID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0RnJhZ21lbnQob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0JyB8fCAhb2JqZWN0IHx8IEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgIHdhcm5pbmcoXG4gICAgICBmYWxzZSxcbiAgICAgICdSZWFjdC5hZGRvbnMuY3JlYXRlRnJhZ21lbnQgb25seSBhY2NlcHRzIGEgc2luZ2xlIG9iamVjdC4gR290OiAlcycsXG4gICAgICBvYmplY3RcbiAgICApO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KG9iamVjdCkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgZmFsc2UsXG4gICAgICAnUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50IGRvZXMgbm90IGFjY2VwdCBhIFJlYWN0RWxlbWVudCAnICtcbiAgICAgICAgJ3dpdGhvdXQgYSB3cmFwcGVyIG9iamVjdC4nXG4gICAgKTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgaW52YXJpYW50KFxuICAgIG9iamVjdC5ub2RlVHlwZSAhPT0gMSxcbiAgICAnUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50KC4uLik6IEVuY291bnRlcmVkIGFuIGludmFsaWQgY2hpbGQ7IERPTSAnICtcbiAgICAgICdlbGVtZW50cyBhcmUgbm90IHZhbGlkIGNoaWxkcmVuIG9mIFJlYWN0IGNvbXBvbmVudHMuJ1xuICApO1xuXG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghd2FybmVkQWJvdXROdW1lcmljICYmIG51bWVyaWNQcm9wZXJ0eVJlZ2V4LnRlc3Qoa2V5KSkge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdSZWFjdC5hZGRvbnMuY3JlYXRlRnJhZ21lbnQoLi4uKTogQ2hpbGQgb2JqZWN0cyBzaG91bGQgaGF2ZSAnICtcbiAgICAgICAgICAgICdub24tbnVtZXJpYyBrZXlzIHNvIG9yZGVyaW5nIGlzIHByZXNlcnZlZC4nXG4gICAgICAgICk7XG4gICAgICAgIHdhcm5lZEFib3V0TnVtZXJpYyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoXG4gICAgICBvYmplY3Rba2V5XSxcbiAgICAgIHJlc3VsdCxcbiAgICAgIGtleSxcbiAgICAgIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJlYWN0RnJhZ21lbnQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjYuMVxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjYuMyc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xuXG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgZW5hYmxlSG9va3MgPSBmYWxzZTtcbi8vIEhlbHBzIGlkZW50aWZ5IHNpZGUgZWZmZWN0cyBpbiBiZWdpbi1waGFzZSBsaWZlY3ljbGUgaG9va3MgYW5kIHNldFN0YXRlIHJlZHVjZXJzOlxuXG5cbi8vIEluIHNvbWUgY2FzZXMsIFN0cmljdE1vZGUgc2hvdWxkIGFsc28gZG91YmxlLXJlbmRlciBsaWZlY3ljbGVzLlxuLy8gVGhpcyBjYW4gYmUgY29uZnVzaW5nIGZvciB0ZXN0cyB0aG91Z2gsXG4vLyBBbmQgaXQgY2FuIGJlIGJhZCBmb3IgcGVyZm9ybWFuY2UgaW4gcHJvZHVjdGlvbi5cbi8vIFRoaXMgZmVhdHVyZSBmbGFnIGNhbiBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yOlxuXG5cbi8vIFRvIHByZXNlcnZlIHRoZSBcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25zXCIgYmVoYXZpb3Igb2YgdGhlIGRlYnVnZ2VyLCB3ZVxuLy8gcmVwbGF5IHRoZSBiZWdpbiBwaGFzZSBvZiBhIGZhaWxlZCBjb21wb25lbnQgaW5zaWRlIGludm9rZUd1YXJkZWRDYWxsYmFjay5cblxuXG4vLyBXYXJuIGFib3V0IGRlcHJlY2F0ZWQsIGFzeW5jLXVuc2FmZSBsaWZlY3ljbGVzOyByZWxhdGVzIHRvIFJGQyAjNjpcblxuXG4vLyBHYXRoZXIgYWR2YW5jZWQgdGltaW5nIG1ldHJpY3MgZm9yIFByb2ZpbGVyIHN1YnRyZWVzLlxuXG5cbi8vIFRyYWNlIHdoaWNoIGludGVyYWN0aW9ucyB0cmlnZ2VyIGVhY2ggY29tbWl0LlxuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIFJlYWN0IEZpcmU6IHByZXZlbnQgdGhlIHZhbHVlIGFuZCBjaGVja2VkIGF0dHJpYnV0ZXMgZnJvbSBzeW5jaW5nXG4vLyB3aXRoIHRoZWlyIHJlbGF0ZWQgRE9NIHByb3BlcnRpZXNcblxuXG4vLyBUaGVzZSBBUElzIHdpbGwgbm8gbG9uZ2VyIGJlIFwidW5zdGFibGVcIiBpbiB0aGUgdXBjb21pbmcgMTYuNyByZWxlYXNlLFxuLy8gQ29udHJvbCB0aGlzIGJlaGF2aW9yIHdpdGggYSBmbGFnIHRvIHN1cHBvcnQgMTYuNiBtaW5vciByZWxlYXNlcyBpbiB0aGUgbWVhbndoaWxlLlxudmFyIGVuYWJsZVN0YWJsZUNvbmN1cnJlbnRNb2RlQVBJcyA9IGZhbHNlO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yID0gdm9pZCAwO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyBSZWx5aW5nIG9uIHRoZSBgaW52YXJpYW50KClgIGltcGxlbWVudGF0aW9uIGxldHMgdXNcbi8vIHByZXNlcnZlIHRoZSBmb3JtYXQgYW5kIHBhcmFtcyBpbiB0aGUgd3d3IGJ1aWxkcy5cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZ1dpdGhvdXRTdGFjayhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gOCkge1xuICAgICAgLy8gQ2hlY2sgYmVmb3JlIHRoZSBjb25kaXRpb24gdG8gY2F0Y2ggdmlvbGF0aW9ucyBlYXJseS5cbiAgICAgIHRocm93IG5ldyBFcnJvcignd2FybmluZ1dpdGhvdXRTdGFjaygpIGN1cnJlbnRseSBzdXBwb3J0cyBhdCBtb3N0IDggYXJndW1lbnRzLicpO1xuICAgIH1cbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpO1xuXG4gICAgICAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5lcnJvciwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayQxID0gd2FybmluZ1dpdGhvdXRTdGFjaztcblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBjYWxsZXJOYW1lO1xuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCBcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG5cbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogdm9pZCAwO1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcblxuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuXG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGwsXG4gIGN1cnJlbnREaXNwYXRjaGVyOiBudWxsXG59O1xuXG52YXIgQkVGT1JFX1NMQVNIX1JFID0gL14oLiopW1xcXFxcXC9dLztcblxudmFyIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgPSBmdW5jdGlvbiAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgdmFyIHNvdXJjZUluZm8gPSAnJztcbiAgaWYgKHNvdXJjZSkge1xuICAgIHZhciBwYXRoID0gc291cmNlLmZpbGVOYW1lO1xuICAgIHZhciBmaWxlTmFtZSA9IHBhdGgucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBwYXRoQmVmb3JlU2xhc2ggPSBtYXRjaFsxXTtcbiAgICAgICAgICBpZiAocGF0aEJlZm9yZVNsYXNoKSB7XG4gICAgICAgICAgICB2YXIgZm9sZGVyTmFtZSA9IHBhdGhCZWZvcmVTbGFzaC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgICAgICAgICAgZmlsZU5hbWUgPSBmb2xkZXJOYW1lICsgJy8nICsgZmlsZU5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgc291cmNlSW5mbztcbn07XG5cbnZhciBSZXNvbHZlZCA9IDE7XG5cblxuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgJygnICsgZnVuY3Rpb25OYW1lICsgJyknIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ0NvbmN1cnJlbnRNb2RlJztcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Db25zdW1lcic7XG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Qcm92aWRlcic7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgdGhlbmFibGUgPSB0eXBlO1xuICAgICAgICAgIHZhciByZXNvbHZlZFRoZW5hYmxlID0gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KHRoZW5hYmxlKTtcbiAgICAgICAgICBpZiAocmVzb2x2ZWRUaGVuYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUocmVzb2x2ZWRUaGVuYWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xuXG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxue1xuICAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJztcblxuICAgIC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcbiAgICBpZiAoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC50eXBlKTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lci50eXBlKSk7XG4gICAgfVxuXG4gICAgLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBfYXNzaWduKFJlYWN0U2hhcmVkSW50ZXJuYWxzLCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSB3YXJuaW5nV2l0aG91dFN0YWNrJDE7XG5cbntcbiAgd2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC93YXJuaW5nLWFuZC1pbnZhcmlhbnQtYXJnc1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEuYXBwbHkodW5kZWZpbmVkLCBbZmFsc2UsIGZvcm1hdCArICclcyddLmNvbmNhdChhcmdzLCBbc3RhY2tdKSk7XG4gIH07XG59XG5cbnZhciB3YXJuaW5nJDEgPSB3YXJuaW5nO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xuXG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgbm8gaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIgcHJvcHMgPSB7fTtcblxuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBSZWFjdEVsZW1lbnRzIG9mIGEgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZmFjdG9yeVxuICovXG5cblxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuXG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgJXMuJywgZWxlbWVudCkgOiB2b2lkIDA7XG5cbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjtcbiAgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmO1xuICAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTtcblxuICAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdm9pZCAwO1xuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG5cbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuXG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuXG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xuXG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxudmFyIFBPT0xfU0laRSA9IDEwO1xudmFyIHRyYXZlcnNlQ29udGV4dFBvb2wgPSBbXTtcbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbixcbiAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gdm9pZCAwO1xuICB2YXIgbmV4dE5hbWUgPSB2b2lkIDA7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICAhZGlkV2FybkFib3V0TWFwcyA/IHdhcm5pbmckMShmYWxzZSwgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgbGlrZWx5IHlpZWxkICcgKyAndW5leHBlY3RlZCByZXN1bHRzLiBDb252ZXJ0IGl0IHRvIGEgc2VxdWVuY2UvaXRlcmFibGUgb2Yga2V5ZWQgJyArICdSZWFjdEVsZW1lbnRzIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiAlcykuJXMnLCBjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcsIGFkZGVuZHVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsIGJ1dFxuICogbWlnaHQgYWxzbyBiZSBzcGVjaWZpZWQgdGhyb3VnaCBhdHRyaWJ1dGVzOlxuICpcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiwgLi4uKWBcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5sZWZ0UGFuZWxDaGlsZHJlbiwgLi4uKWBcbiAqXG4gKiBUaGUgYHRyYXZlcnNlQ29udGV4dGAgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGVcbiAqIGVudGlyZSB0cmF2ZXJzYWwuIEl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGFjY3VtdWxhdGlvbnMgb3IgYW55dGhpbmcgZWxzZSB0aGF0XG4gKiB0aGUgY2FsbGJhY2sgbWlnaHQgZmluZCByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIG9iamVjdC5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBUbyBpbnZva2UgdXBvbiB0cmF2ZXJzaW5nIGVhY2ggY2hpbGQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBmb3IgdHJhdmVyc2FsLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50ICE9PSBudWxsICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH1cbiAgLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobnVsbCwgbnVsbCwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0LFxuICAgICAga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4LFxuICAgICAgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuXG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwobWFwcGVkQ2hpbGQsIHJlc3VsdCwgY2hpbGRLZXksIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsXG4gICAgICAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICBrZXlQcmVmaXggKyAobWFwcGVkQ2hpbGQua2V5ICYmICghY2hpbGQgfHwgY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gZXNjYXBlVXNlclByb3ZpZGVkS2V5KG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG4gIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgIGVzY2FwZWRQcmVmaXggPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkocHJlZml4KSArICcvJztcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KGFycmF5LCBlc2NhcGVkUHJlZml4LCBmdW5jLCBjb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LCBudWxsKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAhaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJykgOiB2b2lkIDA7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgICEoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IG51bGwgfHwgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuXG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcblxuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTtcbiAgICAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG4gICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICEoXG4gICAgICAvLyBEbyBub3Qgd2FybiBmb3IgMCBhcmd1bWVudHMgYmVjYXVzZSBpdCBjb3VsZCBiZSBkdWUgdG8gdXNhZ2Ugb2YgdGhlICdhcmd1bWVudHMnIG9iamVjdFxuICAgICAgcmVuZGVyLmxlbmd0aCA9PT0gMCB8fCByZW5kZXIubGVuZ3RoID09PSAyKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgICEocmVuZGVyLmRlZmF1bHRQcm9wcyA9PSBudWxsICYmIHJlbmRlci5wcm9wVHlwZXMgPT0gbnVsbCkgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnREaXNwYXRjaGVyO1xuICAhKGRpc3BhdGNoZXIgIT09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAge1xuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0O1xuICAgICAgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIG9ic2VydmVkQml0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0aWFsQWN0aW9uKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGluaXRpYWxBY3Rpb24pO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uRWZmZWN0KGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTXV0YXRpb25FZmZlY3QoY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZU1ldGhvZHMocmVmLCBjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVNZXRob2RzKHJlZiwgY3JlYXRlLCBpbnB1dHMpO1xufVxuXG4vKipcbiAqIFJlYWN0RWxlbWVudFZhbGlkYXRvciBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIGEgZWxlbWVudCBmYWN0b3J5XG4gKiB3aGljaCB2YWxpZGF0ZXMgdGhlIHByb3BzIHBhc3NlZCB0byB0aGUgZWxlbWVudC4gVGhpcyBpcyBpbnRlbmRlZCB0byBiZVxuICogdXNlZCBvbmx5IGluIERFViBhbmQgY291bGQgYmUgcmVwbGFjZWQgYnkgYSBzdGF0aWMgdHlwZSBjaGVja2VyIGZvciBsYW5ndWFnZXNcbiAqIHRoYXQgc3VwcG9ydCBpdC5cbiAqL1xuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudFByb3BzLl9fc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgc291cmNlID0gZWxlbWVudFByb3BzLl9fc291cmNlO1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSAnXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArICcuJztcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhbiBhcnJheSBvciBpdGVyYXRvciBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcbiAgfVxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcCA9IHZvaWQgMDtcbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgdmFyIG5hbWUgPSB2b2lkIDAsXG4gICAgICBwcm9wVHlwZXMgPSB2b2lkIDA7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIENsYXNzIG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICAgIG5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZTtcbiAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKSB7XG4gICAgLy8gRm9yd2FyZFJlZlxuICAgIHZhciBmdW5jdGlvbk5hbWUgPSB0eXBlLnJlbmRlci5kaXNwbGF5TmFtZSB8fCB0eXBlLnJlbmRlci5uYW1lIHx8ICcnO1xuICAgIG5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gJ0ZvcndhcmRSZWYoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6ICdGb3J3YXJkUmVmJyk7XG4gICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9wVHlwZXMpIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKTtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBuYW1lIHx8ICdVbmtub3duJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7XG5cbiAgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0ocHJvcHMpO1xuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmcgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnPCcgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyAnIC8+JztcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuICAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG4gIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG52YXIgUmVhY3QgPSB7XG4gIENoaWxkcmVuOiB7XG4gICAgbWFwOiBtYXBDaGlsZHJlbixcbiAgICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gICAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gICAgdG9BcnJheTogdG9BcnJheSxcbiAgICBvbmx5OiBvbmx5Q2hpbGRcbiAgfSxcblxuICBjcmVhdGVSZWY6IGNyZWF0ZVJlZixcbiAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gIFB1cmVDb21wb25lbnQ6IFB1cmVDb21wb25lbnQsXG5cbiAgY3JlYXRlQ29udGV4dDogY3JlYXRlQ29udGV4dCxcbiAgZm9yd2FyZFJlZjogZm9yd2FyZFJlZixcbiAgbGF6eTogbGF6eSxcbiAgbWVtbzogbWVtbyxcblxuICBGcmFnbWVudDogUkVBQ1RfRlJBR01FTlRfVFlQRSxcbiAgU3RyaWN0TW9kZTogUkVBQ1RfU1RSSUNUX01PREVfVFlQRSxcbiAgU3VzcGVuc2U6IFJFQUNUX1NVU1BFTlNFX1RZUEUsXG5cbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24sXG4gIGlzVmFsaWRFbGVtZW50OiBpc1ZhbGlkRWxlbWVudCxcblxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb24sXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IFJlYWN0U2hhcmVkSW50ZXJuYWxzXG59O1xuXG5pZiAoZW5hYmxlU3RhYmxlQ29uY3VycmVudE1vZGVBUElzKSB7XG4gIFJlYWN0LkNvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG4gIFJlYWN0LlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn0gZWxzZSB7XG4gIFJlYWN0LnVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG4gIFJlYWN0LnVuc3RhYmxlX1Byb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cblxuaWYgKGVuYWJsZUhvb2tzKSB7XG4gIFJlYWN0LnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG4gIFJlYWN0LnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuICBSZWFjdC51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVNZXRob2RzID0gdXNlSW1wZXJhdGl2ZU1ldGhvZHM7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbiAgUmVhY3QudXNlTWVtbyA9IHVzZU1lbW87XG4gIFJlYWN0LnVzZU11dGF0aW9uRWZmZWN0ID0gdXNlTXV0YXRpb25FZmZlY3Q7XG4gIFJlYWN0LnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuICBSZWFjdC51c2VSZWYgPSB1c2VSZWY7XG4gIFJlYWN0LnVzZVN0YXRlID0gdXNlU3RhdGU7XG59XG5cblxuXG52YXIgUmVhY3QkMiA9IE9iamVjdC5mcmVlemUoe1xuXHRkZWZhdWx0OiBSZWFjdFxufSk7XG5cbnZhciBSZWFjdCQzID0gKCBSZWFjdCQyICYmIFJlYWN0ICkgfHwgUmVhY3QkMjtcblxuLy8gVE9ETzogZGVjaWRlIG9uIHRoZSB0b3AtbGV2ZWwgZXhwb3J0IGZvcm0uXG4vLyBUaGlzIGlzIGhhY2t5IGJ1dCBtYWtlcyBpdCB3b3JrIHdpdGggYm90aCBSb2xsdXAgYW5kIEplc3QuXG52YXIgcmVhY3QgPSBSZWFjdCQzLmRlZmF1bHQgfHwgUmVhY3QkMztcblxubW9kdWxlLmV4cG9ydHMgPSByZWFjdDtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==