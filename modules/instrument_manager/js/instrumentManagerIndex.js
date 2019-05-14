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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/instrument_manager/jsx/instrumentManagerIndex.js");
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

/***/ "./jsx/Tabs.js":
/*!*********************!*\
  !*** ./jsx/Tabs.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPane = exports.VerticalTabs = exports.Tabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file contains React components for Tabs component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Loris Team
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Tabs Component.
 * React wrapper for Bootstrap tabs. Allows to dynamically render tabs
 * and corresponding tab panes.
 *
 * ================================================
 * Usage:
 *
 * 1. Define an array of tabs with IDs and labels
 *
 * `let tabList = [{id: "tab1", label: "This is tab title"}];`
 *
 * 2. Pass tabList as <Tab> property and <TabPane> as child
 *  ```
 * <Tabs tabs={tabList} defaultTab="tab1">
 *   <TabPane TabId={tabList[0].id}>
 *     // Tab content goes here
 *   </TabPane>
 * </Tabs>
 * ```
 * =================================================
 *
 */
var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    var hash = window.location.hash;
    var activeTab = '';

    /**
     * Determine the initial active tab in this order
     * 1. Try to infer from the URL, otherwise
     * 2. Try to infer from the defaultTab prop, otherwise
     * 3. Set to be the first tab of the list
     */
    if (_this.props.updateURL && hash) {
      activeTab = hash.substr(1);
    } else if (_this.props.defaultTab) {
      activeTab = _this.props.defaultTab;
    } else if (_this.props.tabs.length > 0) {
      activeTab = _this.props.tabs[0].id;
    }

    _this.state = {
      activeTab: activeTab
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.getTabs = _this.getTabs.bind(_this);
    _this.getTabPanes = _this.getTabPanes.bind(_this);
    return _this;
  }

  _createClass(Tabs, [{
    key: 'handleClick',
    value: function handleClick(tabId, e) {
      this.setState({ activeTab: tabId });
      this.props.onTabChange(tabId);

      // Add tab href to URL querystring and scroll the page to top
      if (this.props.updateURL) {
        var scrollDistance = $('body').scrollTop() || $('html').scrollTop();
        window.location.hash = e.target.hash;
        $('html,body').scrollTop(scrollDistance);
      }
    }
  }, {
    key: 'getTabs',
    value: function getTabs() {
      var tabs = this.props.tabs.map(function (tab) {
        var tabClass = this.state.activeTab === tab.id ? 'active' : null;
        var href = '#' + tab.id;
        var tabID = 'tab-' + tab.id;
        return _react2.default.createElement(
          'li',
          {
            role: 'presentation',
            className: tabClass,
            key: tab.id
          },
          _react2.default.createElement(
            'a',
            { id: tabID,
              href: href,
              role: 'tab',
              'data-toggle': 'tab',
              onClick: this.handleClick.bind(null, tab.id)
            },
            tab.label
          )
        );
      }.bind(this));

      return tabs;
    }
  }, {
    key: 'getTabPanes',
    value: function getTabPanes() {
      var tabPanes = _react2.default.Children.map(this.props.children, function (child, key) {
        if (child) {
          return _react2.default.cloneElement(child, {
            activeTab: this.state.activeTab,
            key: key
          });
        }
      }.bind(this));

      return tabPanes;
    }
  }, {
    key: 'render',
    value: function render() {
      var tabs = this.getTabs();
      var tabPanes = this.getTabPanes();
      var tabStyle = {
        marginLeft: 0,
        marginBottom: '5px'
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'nav nav-tabs', role: 'tablist', style: tabStyle },
          tabs
        ),
        _react2.default.createElement(
          'div',
          { className: 'tab-content' },
          tabPanes
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  tabs: _propTypes2.default.array.isRequired,
  defaultTab: _propTypes2.default.string,
  updateURL: _propTypes2.default.bool
};
Tabs.defaultProps = {
  onTabChange: function onTabChange() {},
  // Set updateURL to default to true but allow for change
  // Nested tabs should set this variable to false
  updateURL: true
};

/**
 * Allows to dynamically render vertical tabs corresponding to tab panes.
 */

var VerticalTabs = function (_Component2) {
  _inherits(VerticalTabs, _Component2);

  function VerticalTabs(props) {
    _classCallCheck(this, VerticalTabs);

    var _this2 = _possibleConstructorReturn(this, (VerticalTabs.__proto__ || Object.getPrototypeOf(VerticalTabs)).call(this, props));

    var hash = window.location.hash;
    var activeTab = '';

    /**
     * Determine the initial active tab in this order
     * 1. Try to infer from the URL, otherwise
     * 2. Try to infer from the defaultTab prop, otherwise
     * 3. Set to be the first tab of the list
     */
    if (_this2.props.updateURL && hash) {
      activeTab = hash.substr(1);
    } else if (_this2.props.defaultTab) {
      activeTab = _this2.props.defaultTab;
    } else if (_this2.props.tabs.length > 0) {
      activeTab = _this2.props.tabs[0].id;
    }

    _this2.state = {
      activeTab: activeTab
    };

    _this2.handleClick = _this2.handleClick.bind(_this2);
    _this2.getTabs = _this2.getTabs.bind(_this2);
    _this2.getTabPanes = _this2.getTabPanes.bind(_this2);
    return _this2;
  }

  _createClass(VerticalTabs, [{
    key: 'handleClick',
    value: function handleClick(tabId, e) {
      this.setState({ activeTab: tabId });
      this.props.onTabChange(tabId);

      // Add tab href to URL querystring and scroll the page to top
      if (this.props.updateURL) {
        var scrollDistance = $('body').scrollTop() || $('html').scrollTop();
        window.location.hash = e.target.hash;
        $('html,body').scrollTop(scrollDistance);
      }
    }
  }, {
    key: 'getTabs',
    value: function getTabs() {
      var tabs = this.props.tabs.map(function (tab) {
        var tabClass = this.state.activeTab === tab.id ? 'active' : null;
        var href = '#' + tab.id;
        var tabID = 'tab-' + tab.id;
        return _react2.default.createElement(
          'li',
          {
            role: 'presentation',
            className: tabClass,
            key: tab.id
          },
          _react2.default.createElement(
            'a',
            { id: tabID,
              href: href,
              role: 'tab',
              'data-toggle': 'tab',
              onClick: this.handleClick.bind(null, tab.id)
            },
            tab.label
          )
        );
      }.bind(this));

      return tabs;
    }
  }, {
    key: 'getTabPanes',
    value: function getTabPanes() {
      var tabPanes = _react2.default.Children.map(this.props.children, function (child, key) {
        if (child) {
          return _react2.default.cloneElement(child, {
            activeTab: this.state.activeTab,
            key: key
          });
        }
      }.bind(this));

      return tabPanes;
    }
  }, {
    key: 'render',
    value: function render() {
      var tabs = this.getTabs();
      var tabPanes = this.getTabPanes();
      var tabStyle = {
        marginLeft: 0,
        marginBottom: '5px'
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'tabbable col-md-3 col-sm-3' },
          _react2.default.createElement(
            'ul',
            { className: 'nav nav-pills nav-stacked', role: 'tablist', style: tabStyle },
            tabs
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tab-content col-md-9 col-sm-9' },
          tabPanes
        )
      );
    }
  }]);

  return VerticalTabs;
}(_react.Component);

VerticalTabs.propTypes = {
  tabs: _propTypes2.default.array.isRequired,
  defaultTab: _propTypes2.default.string,
  updateURL: _propTypes2.default.bool
};
VerticalTabs.defaultProps = {
  onTabChange: function onTabChange() {},
  // Set updateURL to default to true but allow for change
  // Nested tabs should set this variable to false
  updateURL: true
};

/*
 * TabPane component.
 * Used to wrap content for every tab.
 */

var TabPane = function (_Component3) {
  _inherits(TabPane, _Component3);

  function TabPane() {
    _classCallCheck(this, TabPane);

    return _possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));
  }

  _createClass(TabPane, [{
    key: 'render',
    value: function render() {
      var classList = 'tab-pane';
      var title = void 0;

      if (this.props.TabId === this.props.activeTab) {
        classList += ' active';
      }
      if (this.props.Title) {
        title = _react2.default.createElement(
          'h1',
          null,
          this.props.Title
        );
      }

      return _react2.default.createElement(
        'div',
        { role: 'tabpanel', className: classList, id: this.props.TabId },
        title,
        this.props.children
      );
    }
  }]);

  return TabPane;
}(_react.Component);

TabPane.propTypes = {
  TabId: _propTypes2.default.string.isRequired,
  Title: _propTypes2.default.string,
  activeTab: _propTypes2.default.string
};

exports.Tabs = Tabs;
exports.VerticalTabs = VerticalTabs;
exports.TabPane = TabPane;

/***/ }),

/***/ "./modules/instrument_manager/jsx/instrumentManagerIndex.js":
/*!******************************************************************!*\
  !*** ./modules/instrument_manager/jsx/instrumentManagerIndex.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tabs = __webpack_require__(/*! Tabs */ "./jsx/Tabs.js");

var _Loader = __webpack_require__(/*! Loader */ "./jsx/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _FilterableDataTable = __webpack_require__(/*! FilterableDataTable */ "./jsx/FilterableDataTable.js");

var _FilterableDataTable2 = _interopRequireDefault(_FilterableDataTable);

var _uploadForm = __webpack_require__(/*! ./uploadForm */ "./modules/instrument_manager/jsx/uploadForm.js");

var _uploadForm2 = _interopRequireDefault(_uploadForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InstrumentManagerIndex = function (_Component) {
  _inherits(InstrumentManagerIndex, _Component);

  function InstrumentManagerIndex(props) {
    _classCallCheck(this, InstrumentManagerIndex);

    var _this = _possibleConstructorReturn(this, (InstrumentManagerIndex.__proto__ || Object.getPrototypeOf(InstrumentManagerIndex)).call(this, props));

    _this.state = {
      data: {},
      error: false,
      isLoaded: false
    };

    _this.fetchData = _this.fetchData.bind(_this);
    _this.formatColumn = _this.formatColumn.bind(_this);
    return _this;
  }

  _createClass(InstrumentManagerIndex, [{
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
        return _this3.setState({ data: data });
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
      return _react2.default.createElement(
        'td',
        null,
        cell
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

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

      var fields = [{ label: 'Instrument', show: true, filter: {
          name: 'instrument',
          type: 'text'
        } }, { label: 'Instrument Type', show: true, filter: {
          name: 'instrumentType',
          type: 'select',
          options: {
            'Instrument Builder': 'Instrument Builder',
            'PHP': 'PHP',
            'Missing': 'Missing'
          }
        } }, { label: 'Table Installed', show: true, filter: {
          name: 'tableInstalled',
          type: 'select',
          options: {
            'Exists': 'Exists',
            'Missing': 'Missing'
          }
        } }, { label: 'Table Valid', show: true, filter: {
          name: 'tableValid',
          type: 'text'
        } }, { label: 'Pages Valid', show: true, filter: {
          name: 'pagesValid',
          type: 'text'
        } }];

      var tabs = [{ id: 'browse', label: 'Browse' }, { id: 'upload', label: 'Upload' }];

      var feedback = function feedback() {
        if (!_this4.state.data.caninstall) {
          return _react2.default.createElement(
            'div',
            { className: 'alert alert-warning' },
            'Instrument installation is not possible given the current server configuration; the LORIS \'quatUser\' is not configured properly. File upload is still possible but instruments will need to be installed manually'
          );
        }
      };

      var uploadTab = function uploadTab() {
        var content = null;
        if (_this4.state.data.writable) {
          var url = loris.BaseURL.concat('/instrument_manager/?format=json');
          content = _react2.default.createElement(_uploadForm2.default, { action: url });
        } else {
          content = _react2.default.createElement(
            'div',
            { className: 'alert alert-warning' },
            'Installation is not possible given the current server configuration. Please contact your administrator if you require this functionality'
          );
        }
        return content;
      };

      return _react2.default.createElement(
        _Tabs.Tabs,
        { tabs: tabs, defaultTab: 'browse', updateURL: true },
        _react2.default.createElement(
          _Tabs.TabPane,
          { TabId: tabs[0].id },
          _react2.default.createElement(_FilterableDataTable2.default, {
            name: 'instrument_manager',
            data: this.state.data.Data,
            fields: fields,
            getFormattedCell: this.formatColumn
          })
        ),
        _react2.default.createElement(
          _Tabs.TabPane,
          { TabId: 'upload' },
          feedback(),
          uploadTab()
        )
      );
    }
  }]);

  return InstrumentManagerIndex;
}(_react.Component);

InstrumentManagerIndex.propTypes = {
  dataURL: _propTypes2.default.string.isRequired,
  hasPermission: _propTypes2.default.func.isRequired
};

window.addEventListener('load', function () {
  ReactDOM.render(_react2.default.createElement(InstrumentManagerIndex, {
    dataURL: loris.BaseURL + '/instrument_manager/?format=json',
    hasPermission: loris.userHasPermission
  }), document.getElementById('lorisworkspace'));
});

/***/ }),

/***/ "./modules/instrument_manager/jsx/uploadForm.js":
/*!******************************************************!*\
  !*** ./modules/instrument_manager/jsx/uploadForm.js ***!
  \******************************************************/
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

var InstrumentUploadForm = function (_Component) {
  _inherits(InstrumentUploadForm, _Component);

  function InstrumentUploadForm(props) {
    _classCallCheck(this, InstrumentUploadForm);

    var _this = _possibleConstructorReturn(this, (InstrumentUploadForm.__proto__ || Object.getPrototypeOf(InstrumentUploadForm)).call(this, props));

    _this.state = {
      data: {},
      selectedFile: null
    };

    _this.fileSelected = _this.fileSelected.bind(_this);
    _this.upload = _this.upload.bind(_this);
    return _this;
  }

  _createClass(InstrumentUploadForm, [{
    key: 'fileSelected',
    value: function fileSelected(element, file) {
      this.setState({
        selectedFile: file
      });
    }
  }, {
    key: 'upload',
    value: function upload() {
      var _this2 = this;

      var data = new FormData();
      data.append('install_file', this.state.selectedFile);

      fetch(this.props.action, {
        method: 'POST',
        credentials: 'same-origin',
        body: data
      }).then(function (resp) {
        if (resp.status == 201) {
          swal({
            title: 'Installation Successful!',
            type: 'success'
          }, function () {
            window.location.assign(loris.BaseURL + '/instrument_manager/');
          });
        }
        return resp.json();
      }).then(function (data) {
        if (data.message) {
          swal({
            title: 'Upload Successful!',
            type: 'success',
            text: data.message
          }, function () {
            window.location.assign(loris.BaseURL + '/instrument_manager/');
          });
        }
        if (data.error) {
          swal({
            title: 'An error occured',
            type: 'error',
            text: data.error
          });
        }
      }).catch(function (error) {
        _this2.setState({ error: true });
        console.error(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var disabled = function disabled() {
        return _this3.state.selectedFile === null;
      };

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-4' },
          _react2.default.createElement(
            'div',
            { className: 'panel panel-primary' },
            _react2.default.createElement(
              'div',
              { className: 'panel-heading' },
              'Upload Instrument'
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel-body' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12' },
                _react2.default.createElement(FileElement, {
                  name: 'install_file',
                  label: 'Instrument file',
                  onUserInput: this.fileSelected,
                  value: this.state.selectedFile
                }),
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.upload, disabled: disabled() },
                  'Install'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return InstrumentUploadForm;
}(_react.Component);

InstrumentUploadForm.propTypes = {
  action: _propTypes2.default.string.isRequired
};

exports.default = InstrumentUploadForm;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanN4L0RhdGFUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9qc3gvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2pzeC9GaWx0ZXJhYmxlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2pzeC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanN4L1BhZ2luYXRpb25MaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9qc3gvUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vanN4L1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9pbnN0cnVtZW50X21hbmFnZXIvanN4L2luc3RydW1lbnRNYW5hZ2VySW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9pbnN0cnVtZW50X21hbmFnZXIvanN4L3VwbG9hZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jcmVhdGUtZnJhZ21lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiXSwibmFtZXMiOlsiRGF0YVRhYmxlIiwicHJvcHMiLCJzdGF0ZSIsIlBhZ2VOdW1iZXIiLCJTb3J0Q29sdW1uIiwiU29ydE9yZGVyIiwiUm93c1BlclBhZ2UiLCJIaWRlIiwiY2hhbmdlUGFnZSIsImJpbmQiLCJzZXRTb3J0Q29sdW1uIiwiY2hhbmdlUm93c1BlclBhZ2UiLCJkb3dubG9hZENTViIsImNvdW50RmlsdGVyZWRSb3dzIiwiZ2V0U29ydGVkUm93cyIsImhhc0ZpbHRlcktleXdvcmQiLCJyZW5kZXJBY3Rpb25zIiwialF1ZXJ5IiwiZm4iLCJEeW5hbWljVGFibGUiLCJmcmVlemVDb2x1bW4iLCIkIiwiZGVmYXVsdENvbHVtbiIsImZpbmQiLCJoaWRlIiwibW9kdWxlUHJlZnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9yaXMiLCJUZXN0TmFtZSIsInVuZGVmaW5lZCIsInJvd3NQZXJQYWdlIiwic2V0U3RhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJvblNvcnQiLCJpbmRleCIsImhlYWRlckxpc3QiLCJmaWVsZHMiLCJtYXAiLCJmaWVsZCIsImxhYmVsIiwiZGF0YSIsInBhZ2VObyIsImNvbE51bWJlciIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjc3ZEYXRhIiwiY3N2d29ya2VyIiwiV29ya2VyIiwiQmFzZVVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhVVJMIiwiZGF0YURhdGUiLCJsaW5rIiwiY21kIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibWVzc2FnZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRvd25sb2FkIiwidHlwZSIsImhyZWYiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwicG9zdE1lc3NhZ2UiLCJoZWFkZXJzIiwiaWRlbnRpZmllcnMiLCJSb3dOYW1lTWFwIiwidXNlS2V5d29yZCIsImZpbHRlck1hdGNoQ291bnQiLCJmaWx0ZXJWYWx1ZXNDb3VudCIsImZpbHRlciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0YWJsZURhdGEiLCJmaWVsZERhdGEiLCJrZXl3b3JkIiwiaSIsImhlYWRlckNvdW50Iiwia2V5d29yZE1hdGNoIiwiaiIsIm5hbWUiLCJoYXNGaWx0ZXJzIiwiaXNTdHJpbmciLCJTdHJpbmciLCJpc051bWJlciIsImlzTmFOIiwiTnVtYmVyIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwiUm93SWR4IiwiVmFsdWUiLCJDb250ZW50Iiwic29ydCIsImEiLCJiIiwiZmlsdGVyRGF0YSIsImV4YWN0TWF0Y2giLCJyZXN1bHQiLCJzZWFyY2hLZXkiLCJzZWFyY2hTdHJpbmciLCJpbnREYXRhIiwicGFyc2VJbnQiLCJzZWFyY2hBcnJheSIsImluY2x1ZGVzIiwiaW5kZXhPZiIsIm1hdGNoIiwiYWN0aW9ucyIsImFjdGlvbiIsImtleSIsIlJvd051bUxhYmVsIiwic2hvdyIsImNvbEluZGV4Iiwicm93cyIsImN1clJvdyIsIm1hdGNoZXNGb3VuZCIsImZpbHRlcmVkUm93cyIsImN1cnJlbnRQYWdlUm93IiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyTGVuZ3RoIiwiZ2V0Rm9ybWF0dGVkQ2VsbCIsInJvdyIsImZvckVhY2giLCJrIiwicm93SW5kZXgiLCJSb3dzUGVyUGFnZURyb3Bkb3duIiwiaGVhZGVyIiwibWFyZ2luVG9wIiwiZm9vdGVyIiwibWFyZ2luIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIkZpbHRlciIsIm9uRmllbGRVcGRhdGUiLCJyZW5kZXJGaWx0ZXJGaWVsZHMiLCJpZCIsInVwZGF0ZUZpbHRlciIsInJlZHVjZSIsImVsZW1lbnQiLCJvcHRpb25zIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJvblVzZXJJbnB1dCIsImNvbHVtbnMiLCJ0aXRsZSIsImNsZWFyRmlsdGVyIiwiY29uc29sZSIsIndhcm4iLCJGaWx0ZXJhYmxlRGF0YVRhYmxlIiwibnVtYmVyIiwiTG9hZGVyIiwid2lkdGgiLCJzaXplIiwiaGVpZ2h0IiwiUGFnaW5hdGlvbkxpbmtzIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTGlua3MiLCJjbGFzc0xpc3QiLCJsYXN0UGFnZSIsIk1hdGgiLCJjZWlsIiwiVG90YWwiLCJzdGFydFBhZ2UiLCJtYXgiLCJBY3RpdmUiLCJsYXN0U2hvd25QYWdlIiwibWluIiwidG9TdHJpbmciLCJSUGFnaW5hdGlvbkxpbmtzIiwiY3JlYXRlRmFjdG9yeSIsIlBhbmVsIiwiY29sbGFwc2VkIiwiaW5pdENvbGxhcHNlZCIsInBhbmVsQ2xhc3MiLCJ0b2dnbGVDb2xsYXBzZWQiLCJnbHlwaENsYXNzIiwicGFuZWxIZWFkaW5nIiwiY3Vyc29yIiwiY2hpbGRyZW4iLCJUYWJzIiwiaGFzaCIsImxvY2F0aW9uIiwiYWN0aXZlVGFiIiwidXBkYXRlVVJMIiwic3Vic3RyIiwiZGVmYXVsdFRhYiIsInRhYnMiLCJoYW5kbGVDbGljayIsImdldFRhYnMiLCJnZXRUYWJQYW5lcyIsInRhYklkIiwib25UYWJDaGFuZ2UiLCJzY3JvbGxEaXN0YW5jZSIsInNjcm9sbFRvcCIsInRhYiIsInRhYkNsYXNzIiwidGFiSUQiLCJ0YWJQYW5lcyIsIkNoaWxkcmVuIiwiY2hpbGQiLCJ0YWJTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJib29sIiwiVmVydGljYWxUYWJzIiwiVGFiUGFuZSIsIlRhYklkIiwiVGl0bGUiLCJJbnN0cnVtZW50TWFuYWdlckluZGV4IiwiZXJyb3IiLCJpc0xvYWRlZCIsImZldGNoRGF0YSIsImZvcm1hdENvbHVtbiIsInRoZW4iLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwicmVzcCIsImpzb24iLCJjYXRjaCIsImNvbHVtbiIsImNlbGwiLCJmZWVkYmFjayIsImNhbmluc3RhbGwiLCJ1cGxvYWRUYWIiLCJjb250ZW50Iiwid3JpdGFibGUiLCJ1cmwiLCJjb25jYXQiLCJEYXRhIiwiaGFzUGVybWlzc2lvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwidXNlckhhc1Blcm1pc3Npb24iLCJnZXRFbGVtZW50QnlJZCIsIkluc3RydW1lbnRVcGxvYWRGb3JtIiwic2VsZWN0ZWRGaWxlIiwiZmlsZVNlbGVjdGVkIiwidXBsb2FkIiwiZmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwic3RhdHVzIiwic3dhbCIsImFzc2lnbiIsInRleHQiLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyx1RkFBMkI7QUFDdEQsQ0FBQyxNQUFNLEVBSU47Ozs7Ozs7Ozs7Ozs7QUMzQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFM0I7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLHdFQUF3QjtBQUNwRCxnQkFBZ0IsbUJBQU8sQ0FBQyxnRUFBb0I7QUFDNUMsY0FBYyxtQkFBTyxDQUFDLDREQUFrQjs7QUFFeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseUNBQXlDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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YW5hZ2VyL2pzL2luc3RydW1lbnRNYW5hZ2VySW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vZHVsZXMvaW5zdHJ1bWVudF9tYW5hZ2VyL2pzeC9pbnN0cnVtZW50TWFuYWdlckluZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgUmVhY3QgY29tcG9uZW50IGZvciBEYXRhIFRhYmxlXG4gKlxuICogQGF1dGhvciBMb3JpcyBUZWFtXG4gKiBAdmVyc2lvbiAxLjAuMFxuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUGFnaW5hdGlvbkxpbmtzIGZyb20gJ2pzeC9QYWdpbmF0aW9uTGlua3MnO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gJ3JlYWN0LWFkZG9ucy1jcmVhdGUtZnJhZ21lbnQnO1xuXG4vKipcbiAqIERhdGEgVGFibGUgY29tcG9uZW50XG4gKiBEaXNwbGF5cyBhIHNldCBvZiBkYXRhIHRoYXQgaXMgcmVjZWl2ZXMgdmlhIHByb3BzLlxuICovXG5jbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBQYWdlTnVtYmVyOiAxLFxuICAgICAgU29ydENvbHVtbjogLTEsXG4gICAgICBTb3J0T3JkZXI6ICdBU0MnLFxuICAgICAgUm93c1BlclBhZ2U6IDIwLFxuICAgICAgSGlkZTogdGhpcy5wcm9wcy5IaWRlLFxuICAgIH07XG5cbiAgICB0aGlzLmNoYW5nZVBhZ2UgPSB0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFNvcnRDb2x1bW4gPSB0aGlzLnNldFNvcnRDb2x1bW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVJvd3NQZXJQYWdlID0gdGhpcy5jaGFuZ2VSb3dzUGVyUGFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG93bmxvYWRDU1YgPSB0aGlzLmRvd25sb2FkQ1NWLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb3VudEZpbHRlcmVkUm93cyA9IHRoaXMuY291bnRGaWx0ZXJlZFJvd3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFNvcnRlZFJvd3MgPSB0aGlzLmdldFNvcnRlZFJvd3MuYmluZCh0aGlzKTsvL1xuICAgIHRoaXMuaGFzRmlsdGVyS2V5d29yZCA9IHRoaXMuaGFzRmlsdGVyS2V5d29yZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyQWN0aW9ucyA9IHRoaXMucmVuZGVyQWN0aW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGpRdWVyeS5mbi5EeW5hbWljVGFibGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZyZWV6ZUNvbHVtbikge1xuICAgICAgICAkKCcjZHluYW1pY3RhYmxlJykuRHluYW1pY1RhYmxlKHtcbiAgICAgICAgICBmcmVlemVDb2x1bW46IHRoaXMucHJvcHMuZnJlZXplQ29sdW1uLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNkeW5hbWljdGFibGUnKS5EeW5hbWljVGFibGUoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLkhpZGUuZGVmYXVsdENvbHVtbikge1xuICAgICAgICAkKCcjZHluYW1pY3RhYmxlJykuZmluZCgndGJvZHkgdGQ6ZXEoMCknKS5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgbW9kdWxlIHByZWZlcmVuY2VzXG4gICAgbGV0IG1vZHVsZVByZWZzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kdWxlUHJlZnMnKSk7XG5cbiAgICAvLyBJbml0IG1vZHVsZVByZWZzIG9iamVjdFxuICAgIGlmIChtb2R1bGVQcmVmcyA9PT0gbnVsbCkge1xuICAgICAgbW9kdWxlUHJlZnMgPSB7fTtcbiAgICB9XG5cbiAgICAvLyBJbml0IG1vZHVsZVByZWZzIGZvciBjdXJyZW50IG1vZHVsZVxuICAgIGlmIChtb2R1bGVQcmVmc1tsb3Jpcy5UZXN0TmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgbW9kdWxlUHJlZnNbbG9yaXMuVGVzdE5hbWVdID0ge307XG4gICAgICBtb2R1bGVQcmVmc1tsb3Jpcy5UZXN0TmFtZV0ucm93c1BlclBhZ2UgPSB0aGlzLnN0YXRlLlJvd3NQZXJQYWdlO1xuICAgIH1cblxuICAgIC8vIFNldCByb3dzIHBlciBwYWdlXG4gICAgbGV0IHJvd3NQZXJQYWdlID0gbW9kdWxlUHJlZnNbbG9yaXMuVGVzdE5hbWVdLnJvd3NQZXJQYWdlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgUm93c1BlclBhZ2U6IHJvd3NQZXJQYWdlLFxuICAgIH0pO1xuXG4gICAgLy8gTWFrZSBwcmVmcyBhY2Nlc2libGUgd2l0aGluIGNvbXBvbmVudFxuICAgIHRoaXMubW9kdWxlUHJlZnMgPSBtb2R1bGVQcmVmcztcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChqUXVlcnkuZm4uRHluYW1pY1RhYmxlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5mcmVlemVDb2x1bW4pIHtcbiAgICAgICAgJCgnI2R5bmFtaWN0YWJsZScpLkR5bmFtaWNUYWJsZSh7XG4gICAgICAgICAgZnJlZXplQ29sdW1uOiB0aGlzLnByb3BzLmZyZWV6ZUNvbHVtbixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjZHluYW1pY3RhYmxlJykuRHluYW1pY1RhYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uU29ydCAmJlxuICAgICAgKHRoaXMuc3RhdGUuU29ydENvbHVtbiAhPT0gcHJldlN0YXRlLlNvcnRDb2x1bW4gfHxcbiAgICAgICAgdGhpcy5zdGF0ZS5Tb3J0T3JkZXIgIT09IHByZXZTdGF0ZS5Tb3J0T3JkZXIpXG4gICAgKSB7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmdldFNvcnRlZFJvd3MoKTtcbiAgICAgIGNvbnN0IGhlYWRlckxpc3QgPSB0aGlzLnByb3BzLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCk7XG4gICAgICB0aGlzLnByb3BzLm9uU29ydChpbmRleCwgdGhpcy5wcm9wcy5kYXRhLCBoZWFkZXJMaXN0KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VQYWdlKHBhZ2VObykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgUGFnZU51bWJlcjogcGFnZU5vLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U29ydENvbHVtbihjb2xOdW1iZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuU29ydENvbHVtbiA9PT0gY29sTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIFNvcnRPcmRlcjogdGhpcy5zdGF0ZS5Tb3J0T3JkZXIgPT09ICdBU0MnID8gJ0RFU0MnIDogJ0FTQycsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgU29ydENvbHVtbjogY29sTnVtYmVyLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlUm93c1BlclBhZ2UodmFsKSB7XG4gICAgbGV0IHJvd3NQZXJQYWdlID0gdmFsLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgbW9kdWxlUHJlZnMgPSB0aGlzLm1vZHVsZVByZWZzO1xuXG4gICAgLy8gU2F2ZSBjdXJyZW50IHNlbGVjdGlvblxuICAgIG1vZHVsZVByZWZzW2xvcmlzLlRlc3ROYW1lXS5yb3dzUGVyUGFnZSA9IHJvd3NQZXJQYWdlO1xuXG4gICAgLy8gVXBkYXRlIGxvY2Fsc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2R1bGVQcmVmcycsIEpTT04uc3RyaW5naWZ5KG1vZHVsZVByZWZzKSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFJvd3NQZXJQYWdlOiByb3dzUGVyUGFnZSxcbiAgICAgIFBhZ2VOdW1iZXI6IDEsXG4gICAgfSk7XG4gIH1cblxuICBkb3dubG9hZENTVihjc3ZEYXRhKSB7XG4gICAgbGV0IGNzdndvcmtlciA9IG5ldyBXb3JrZXIobG9yaXMuQmFzZVVSTCArICcvanMvd29ya2Vycy9zYXZlY3N2LmpzJyk7XG5cbiAgICBjc3Z3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBkYXRhVVJMO1xuICAgICAgbGV0IGRhdGFEYXRlO1xuICAgICAgbGV0IGxpbms7XG4gICAgICBpZiAoZS5kYXRhLmNtZCA9PT0gJ1NhdmVDU1YnKSB7XG4gICAgICAgIGRhdGFEYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICBkYXRhVVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rLmRvd25sb2FkID0gJ2RhdGEtJyArIGRhdGFEYXRlICsgJy5jc3YnO1xuICAgICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3YnO1xuICAgICAgICBsaW5rLmhyZWYgPSBkYXRhVVJMO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAkKGxpbmspWzBdLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVyTGlzdCA9IHRoaXMucHJvcHMuZmllbGRzLm1hcCgoZmllbGQpID0+IGZpZWxkLmxhYmVsKTtcbiAgICBjc3Z3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgY21kOiAnU2F2ZUZpbGUnLFxuICAgICAgZGF0YTogY3N2RGF0YSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlckxpc3QsXG4gICAgICBpZGVudGlmaWVyczogdGhpcy5wcm9wcy5Sb3dOYW1lTWFwLFxuICAgIH0pO1xuICB9XG5cbiAgY291bnRGaWx0ZXJlZFJvd3MoKSB7XG4gICAgbGV0IHVzZUtleXdvcmQgPSBmYWxzZTtcbiAgICBsZXQgZmlsdGVyTWF0Y2hDb3VudCA9IDA7XG4gICAgbGV0IGZpbHRlclZhbHVlc0NvdW50ID0gKHRoaXMucHJvcHMuZmlsdGVyID9cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5maWx0ZXIpLmxlbmd0aCA6XG4gICAgICAgIDBcbiAgICApO1xuICAgIGxldCB0YWJsZURhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgbGV0IGZpZWxkRGF0YSA9IHRoaXMucHJvcHMuZmllbGRzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyLmtleXdvcmQpIHtcbiAgICAgIHVzZUtleXdvcmQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh1c2VLZXl3b3JkKSB7XG4gICAgICBmaWx0ZXJWYWx1ZXNDb3VudCAtPSAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaGVhZGVyQ291bnQgPSAwO1xuICAgICAgbGV0IGtleXdvcmRNYXRjaCA9IDA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpZWxkRGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgZGF0YSA9IHRhYmxlRGF0YVtpXSA/IHRhYmxlRGF0YVtpXVtqXSA6IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcktleXdvcmQoKGZpZWxkRGF0YVtqXS5maWx0ZXIgfHwge30pLm5hbWUsIGRhdGEpKSB7XG4gICAgICAgICAgaGVhZGVyQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlS2V5d29yZCkge1xuICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcktleXdvcmQoJ2tleXdvcmQnLCBkYXRhKSkge1xuICAgICAgICAgICAga2V5d29yZE1hdGNoKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWFkZXJDb3VudCA9PT0gZmlsdGVyVmFsdWVzQ291bnQgJiZcbiAgICAgICAgKCh1c2VLZXl3b3JkID09PSB0cnVlICYmIGtleXdvcmRNYXRjaCA+IDApIHx8XG4gICAgICAgICAgKHVzZUtleXdvcmQgPT09IGZhbHNlICYmIGtleXdvcmRNYXRjaCA9PT0gMCkpKSB7XG4gICAgICAgIGZpbHRlck1hdGNoQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaGFzRmlsdGVycyA9IChmaWx0ZXJWYWx1ZXNDb3VudCAhPT0gMCk7XG4gICAgaWYgKGZpbHRlck1hdGNoQ291bnQgPT09IDAgJiYgaGFzRmlsdGVycykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChmaWx0ZXJNYXRjaENvdW50ID09PSAwKSA/IHRhYmxlRGF0YS5sZW5ndGggOiBmaWx0ZXJNYXRjaENvdW50O1xuICB9XG5cbiAgZ2V0U29ydGVkUm93cygpIHtcbiAgICBjb25zdCBpbmRleCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCB2YWwgPSB0aGlzLnByb3BzLmRhdGFbaV1bdGhpcy5zdGF0ZS5Tb3J0Q29sdW1uXSB8fCB1bmRlZmluZWQ7XG4gICAgICAvLyBJZiBTb3J0Q29sdW1uIGlzIGVxdWFsIHRvIGRlZmF1bHQgTm8uIGNvbHVtbiwgc2V0IHZhbHVlIHRvIGJlXG4gICAgICAvLyBpbmRleCArIDFcbiAgICAgIGlmICh0aGlzLnN0YXRlLlNvcnRDb2x1bW4gPT09IC0xKSB7XG4gICAgICAgIHZhbCA9IGkgKyAxO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNTdHJpbmcgPSAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nKTtcbiAgICAgIGNvbnN0IGlzTnVtYmVyID0gIWlzTmFOKHZhbCkgJiYgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCc7XG5cbiAgICAgIGlmICh2YWwgPT09ICcuJykge1xuICAgICAgICAvLyBoYWNrIHRvIGhhbmRsZSBub24tZXhpc3RlbnQgaXRlbXMgaW4gRFFUXG4gICAgICAgIHZhbCA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKSB7XG4gICAgICAgIC8vIHBlcmZvcm0gdHlwZSBjb252ZXJzaW9uIChmcm9tIHN0cmluZyB0byBpbnQvZmxvYXQpXG4gICAgICAgIHZhbCA9IE51bWJlcih2YWwpO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cmluZykge1xuICAgICAgICAvLyBpZiBzdHJpbmcgd2l0aCB0ZXh0IGNvbnZlcnQgdG8gbG93ZXJjYXNlXG4gICAgICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5Sb3dOYW1lTWFwKSB7XG4gICAgICAgIGluZGV4LnB1c2goe1Jvd0lkeDogaSwgVmFsdWU6IHZhbCwgQ29udGVudDogdGhpcy5wcm9wcy5Sb3dOYW1lTWFwW2ldfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleC5wdXNoKHtSb3dJZHg6IGksIFZhbHVlOiB2YWwsIENvbnRlbnQ6IGkgKyAxfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXguc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5Tb3J0T3JkZXIgPT09ICdBU0MnKSB7XG4gICAgICAgIGlmIChhLlZhbHVlID09PSBiLlZhbHVlKSB7XG4gICAgICAgICAgLy8gSWYgYWxsIHZhbHVlcyBhcmUgZXF1YWwsIHNvcnQgYnkgcm93bnVtXG4gICAgICAgICAgaWYgKGEuUm93SWR4IDwgYi5Sb3dJZHgpIHJldHVybiAtMTtcbiAgICAgICAgICBpZiAoYS5Sb3dJZHggPiBiLlJvd0lkeCkgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgbnVsbCB2YWx1ZXNcbiAgICAgICAgaWYgKGEuVmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGEuVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChiLlZhbHVlID09PSBudWxsIHx8IHR5cGVvZiBiLlZhbHVlID09PSAndW5kZWZpbmVkJykgcmV0dXJuIDE7XG5cbiAgICAgICAgLy8gU29ydCBieSB2YWx1ZVxuICAgICAgICBpZiAoYS5WYWx1ZSA8IGIuVmFsdWUpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGEuVmFsdWUgPiBiLlZhbHVlKSByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhLlZhbHVlID09PSBiLlZhbHVlKSB7XG4gICAgICAgICAgLy8gSWYgYWxsIHZhbHVlcyBhcmUgZXF1YWwsIHNvcnQgYnkgcm93bnVtXG4gICAgICAgICAgaWYgKGEuUm93SWR4IDwgYi5Sb3dJZHgpIHJldHVybiAxO1xuICAgICAgICAgIGlmIChhLlJvd0lkeCA+IGIuUm93SWR4KSByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgbnVsbCB2YWx1ZXNcbiAgICAgICAgaWYgKGEuVmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGEuVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGIuVmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGIuVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gLTE7XG5cbiAgICAgICAgLy8gU29ydCBieSB2YWx1ZVxuICAgICAgICBpZiAoYS5WYWx1ZSA8IGIuVmFsdWUpIHJldHVybiAxO1xuICAgICAgICBpZiAoYS5WYWx1ZSA+IGIuVmFsdWUpIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIC8vIFRoZXkncmUgZXF1YWwuLlxuICAgICAgcmV0dXJuIDA7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIHRoZSBmaWx0ZXIga2V5d29yZCBpbiB0aGUgY29sdW1uIGNlbGxcbiAgICpcbiAgICogTm90ZTogU2VhcmNoIGlzIGNhc2UtaW5zZW5zaXRpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIGZpZWxkIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgc2VhcmNoIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlLCBpZiBmaWx0ZXIgdmFsdWUgaXMgZm91bmQgdG8gYmUgYSBzdWJzdHJpbmdcbiAgICogb2Ygb25lIG9mIHRoZSBjb2x1bW4gdmFsdWVzLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBoYXNGaWx0ZXJLZXl3b3JkKG5hbWUsIGRhdGEpIHtcbiAgICBsZXQgZmlsdGVyRGF0YSA9IG51bGw7XG4gICAgbGV0IGV4YWN0TWF0Y2ggPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgbGV0IHNlYXJjaEtleSA9IG51bGw7XG4gICAgbGV0IHNlYXJjaFN0cmluZyA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXJbbmFtZV0pIHtcbiAgICAgIGZpbHRlckRhdGEgPSB0aGlzLnByb3BzLmZpbHRlcltuYW1lXS52YWx1ZTtcbiAgICAgIGV4YWN0TWF0Y2ggPSB0aGlzLnByb3BzLmZpbHRlcltuYW1lXS5leGFjdE1hdGNoO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBudWxsIGlucHV0c1xuICAgIGlmIChmaWx0ZXJEYXRhID09PSBudWxsIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgbnVtZXJpYyBpbnB1dHNcbiAgICBpZiAodHlwZW9mIGZpbHRlckRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXQgaW50RGF0YSA9IE51bWJlci5wYXJzZUludChkYXRhLCAxMCk7XG4gICAgICByZXN1bHQgPSAoZmlsdGVyRGF0YSA9PT0gaW50RGF0YSk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHN0cmluZyBpbnB1dHNcbiAgICBpZiAodHlwZW9mIGZpbHRlckRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWFyY2hLZXkgPSBmaWx0ZXJEYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgICBzd2l0Y2ggKHR5cGVvZiBkYXRhKSB7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgLy8gSGFuZGxlcyB0aGUgY2FzZSB3aGVyZSB0aGUgZGF0YSBpcyBhbiBhcnJheSAodHlwZW9mICdvYmplY3QnKVxuICAgICAgICAgIC8vIGFuZCB5b3Ugd2FudCB0byBzZWFyY2ggdGhyb3VnaCBpdCBmb3JcbiAgICAgICAgICAvLyB0aGUgc3RyaW5nIHlvdSBhcmUgZmlsdGVyaW5nIGJ5XG4gICAgICAgICAgbGV0IHNlYXJjaEFycmF5ID0gZGF0YS5tYXAoKGUpID0+IGUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgaWYgKGV4YWN0TWF0Y2gpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHNlYXJjaEFycmF5LmluY2x1ZGVzKHNlYXJjaEtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IChzZWFyY2hBcnJheS5maW5kKChlKSA9PiAoZS5pbmRleE9mKHNlYXJjaEtleSkgPiAtMSkpKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZyA9IGRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChleGFjdE1hdGNoKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IChzZWFyY2hTdHJpbmcgPT09IHNlYXJjaEtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQgPSAoc2VhcmNoU3RyaW5nLmluZGV4T2Yoc2VhcmNoS2V5KSA+IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYXJyYXkgaW5wdXRzIGZvciBtdWx0aXNlbGVjdHNcbiAgICBpZiAodHlwZW9mIGZpbHRlckRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzZWFyY2hLZXkgPSBmaWx0ZXJEYXRhW2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlYXJjaFN0cmluZyA9IGRhdGEudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBtYXRjaCA9IChzZWFyY2hTdHJpbmcuaW5kZXhPZihzZWFyY2hLZXkpID4gLTEpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJlbmRlckFjdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aW9ucy5tYXAoKGFjdGlvbiwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENUQVxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBsYWJlbD17YWN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgb25Vc2VySW5wdXQ9e2FjdGlvbi5hY3Rpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhID09PSBudWxsIHx8IHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvIG5vLXJlc3VsdC1mb3VuZC1wYW5lbCc+XG4gICAgICAgICAgPHN0cm9uZz5ObyByZXN1bHQgZm91bmQuPC9zdHJvbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgbGV0IHJvd3NQZXJQYWdlID0gdGhpcy5zdGF0ZS5Sb3dzUGVyUGFnZTtcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuc3RhdGUuSGlkZS5kZWZhdWx0Q29sdW1uID09PSB0cnVlID8gW10gOiBbXG4gICAgICA8dGgga2V5PSd0aF9jb2xfMCcgb25DbGljaz17dGhpcy5zZXRTb3J0Q29sdW1uKC0xKS5iaW5kKHRoaXMpfT5cbiAgICAgICAge3RoaXMucHJvcHMuUm93TnVtTGFiZWx9XG4gICAgICA8L3RoPixcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmZpZWxkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzW2ldLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gaSArIDE7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkc1tpXS5mcmVlemVDb2x1bW4gPT09IHRydWUpIHtcbiAgICAgICAgICBoZWFkZXJzLnB1c2goXG4gICAgICAgICAgICA8dGgga2V5PXsndGhfY29sXycgKyBjb2xJbmRleH0gaWQ9e3RoaXMucHJvcHMuZnJlZXplQ29sdW1ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0U29ydENvbHVtbihpKS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmllbGRzW2ldLmxhYmVsfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhlYWRlcnMucHVzaChcbiAgICAgICAgICAgIDx0aCBrZXk9eyd0aF9jb2xfJyArIGNvbEluZGV4fSBvbkNsaWNrPXt0aGlzLnNldFNvcnRDb2x1bW4oaSkuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZpZWxkc1tpXS5sYWJlbH1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCBjdXJSb3cgPSBbXTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmdldFNvcnRlZFJvd3MoKTtcbiAgICBsZXQgbWF0Y2hlc0ZvdW5kID0gMDsgLy8gS2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgcm93cyB3aGVyZSBkaXNwbGF5ZWQgc28gZmFyIGFjcm9zcyBhbGwgcGFnZXNcbiAgICBsZXQgZmlsdGVyZWRSb3dzID0gdGhpcy5jb3VudEZpbHRlcmVkUm93cygpO1xuICAgIGxldCBjdXJyZW50UGFnZVJvdyA9IChyb3dzUGVyUGFnZSAqICh0aGlzLnN0YXRlLlBhZ2VOdW1iZXIgLSAxKSk7XG4gICAgbGV0IGZpbHRlcmVkRGF0YSA9IFtdO1xuICAgIGxldCB1c2VLZXl3b3JkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIua2V5d29yZCkge1xuICAgICAgdXNlS2V5d29yZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUHVzaCByb3dzIHRvIGRhdGEgdGFibGVcbiAgICBmb3IgKGxldCBpID0gMDtcbiAgICAgICAgIChpIDwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkgJiYgKHJvd3MubGVuZ3RoIDwgcm93c1BlclBhZ2UpO1xuICAgICAgICAgaSsrXG4gICAgKSB7XG4gICAgICBjdXJSb3cgPSBbXTtcblxuICAgICAgLy8gQ291bnRzIGZpbHRlciBtYXRjaGVzXG4gICAgICBsZXQgZmlsdGVyTWF0Y2hDb3VudCA9IDA7XG4gICAgICBsZXQga2V5d29yZE1hdGNoID0gMDtcbiAgICAgIGxldCBmaWx0ZXJMZW5ndGggPSAwO1xuXG4gICAgICAvLyBJdGVyYXRlcyB0aHJvdWdoIGhlYWRlcnMgdG8gcG9wdWxhdGUgcm93IGNvbHVtbnNcbiAgICAgIC8vIHdpdGggY29ycmVzcG9uZGluZyBkYXRhXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucHJvcHMuZmllbGRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGxldCBkYXRhID0gJ1Vua25vd24nO1xuXG4gICAgICAgIC8vIFNldCBjb2x1bW4gZGF0YVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhW2luZGV4W2ldLlJvd0lkeF0pIHtcbiAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5kYXRhW2luZGV4W2ldLlJvd0lkeF1bal07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWVsZHNbal0uZmlsdGVyKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyS2V5d29yZCh0aGlzLnByb3BzLmZpZWxkc1tqXS5maWx0ZXIubmFtZSwgZGF0YSkpIHtcbiAgICAgICAgICAgIGZpbHRlck1hdGNoQ291bnQrKztcbiAgICAgICAgICAgIGZpbHRlcmVkRGF0YS5wdXNoKHRoaXMucHJvcHMuZGF0YVtpbmRleFtpXS5Sb3dJZHhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlS2V5d29yZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGZpbHRlckxlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZmlsdGVyKS5sZW5ndGggLSAxO1xuICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcktleXdvcmQoJ2tleXdvcmQnLCBkYXRhKSkge1xuICAgICAgICAgICAga2V5d29yZE1hdGNoKys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlckxlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZmlsdGVyKS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5ID0gJ3RkX2NvbF8nICsgajtcblxuICAgICAgICAvLyBHZXQgY3VzdG9tIGNlbGwgZm9ybWF0dGluZyBpZiBhdmFpbGFibGVcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ2V0Rm9ybWF0dGVkQ2VsbCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkc1tqXS5zaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGF0YSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBtYXBwaW5nIGJldHdlZW4gcm93SGVhZGVycyBhbmQgcm93RGF0YSBpbiBhIHJvdyBPYmplY3RcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWVsZHMuZm9yRWFjaCgoZmllbGQsIGspID0+IHtcbiAgICAgICAgICAgICAgcm93W2ZpZWxkLmxhYmVsXSA9IHRoaXMucHJvcHMuZGF0YVtpbmRleFtpXS5Sb3dJZHhdW2tdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5nZXRGb3JtYXR0ZWRDZWxsKFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpZWxkc1tqXS5sYWJlbCxcbiAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gTm90ZTogQ2FuJ3QgY3VycmVudGx5IHBhc3MgYSBrZXksIG5lZWQgdG8gdXBkYXRlIGNvbHVtbkZvcm1hdHRlclxuICAgICAgICAgICAgLy8gdG8gbm90IHJldHVybiBhIDx0ZD4gbm9kZS4gVXNpbmcgY3JlYXRlRnJhZ21lbnQgaW5zdGVhZC5cbiAgICAgICAgICAgIGN1clJvdy5wdXNoKGNyZWF0ZUZyYWdtZW50KHtkYXRhfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJSb3cucHVzaCg8dGQga2V5PXtrZXl9PntkYXRhfTwvdGQ+KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGRpc3BsYXkgYSByb3cgaWYgYWxsIGZpbHRlciB2YWx1ZXMgaGF2ZSBiZWVuIG1hdGNoZWRcbiAgICAgIGlmICgoZmlsdGVyTGVuZ3RoID09PSBmaWx0ZXJNYXRjaENvdW50KSAmJlxuICAgICAgICAoKHVzZUtleXdvcmQgPT09IHRydWUgJiYga2V5d29yZE1hdGNoID4gMCkgfHxcbiAgICAgICAgICAodXNlS2V5d29yZCA9PT0gZmFsc2UgJiYga2V5d29yZE1hdGNoID09PSAwKSkpIHtcbiAgICAgICAgbWF0Y2hlc0ZvdW5kKys7XG4gICAgICAgIGlmIChtYXRjaGVzRm91bmQgPiBjdXJyZW50UGFnZVJvdykge1xuICAgICAgICAgIGNvbnN0IHJvd0luZGV4ID0gaW5kZXhbaV0uQ29udGVudDtcbiAgICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICA8dHIga2V5PXsndHJfJyArIHJvd0luZGV4fSBjb2xTcGFuPXtoZWFkZXJzLmxlbmd0aH0+XG4gICAgICAgICAgICAgIDx0ZD57cm93SW5kZXh9PC90ZD5cbiAgICAgICAgICAgICAge2N1clJvd31cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBSb3dzUGVyUGFnZURyb3Bkb3duID0gKFxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1zbSBwZXJQYWdlXCJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlUm93c1BlclBhZ2V9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLlJvd3NQZXJQYWdlfVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uPjIwPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24+NTA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj4xMDA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj4xMDAwPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24+NTAwMDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPjEwMDAwPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICApO1xuXG4gICAgLy8gSW5jbHVkZSBvbmx5IGZpbHRlcmVkIGRhdGEgaWYgZmlsdGVycyB3ZXJlIGFwcGxpZWRcbiAgICBsZXQgY3N2RGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgJiYgZmlsdGVyZWREYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNzdkRhdGEgPSBmaWx0ZXJlZERhdGE7XG4gICAgfVxuXG4gICAgbGV0IGhlYWRlciA9IHRoaXMuc3RhdGUuSGlkZS5yb3dzUGVyUGFnZSA9PT0gdHJ1ZSA/ICcnIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cm93cy5sZW5ndGh9IHJvd3MgZGlzcGxheWVkIG9mIHtmaWx0ZXJlZFJvd3N9LlxuICAgICAgICAgICAgKE1heGltdW0gcm93cyBwZXIgcGFnZToge1Jvd3NQZXJQYWdlRHJvcGRvd259KVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTQzcHgnfX0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJBY3Rpb25zKCl9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZG93bmxvYWRDU1YuYmluZChudWxsLCBjc3ZEYXRhKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG93bmxvYWQgVGFibGUgYXMgQ1NWXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uTGlua3NcbiAgICAgICAgICAgICAgVG90YWw9e2ZpbHRlcmVkUm93c31cbiAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXt0aGlzLmNoYW5nZVBhZ2V9XG4gICAgICAgICAgICAgIFJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cbiAgICAgICAgICAgICAgQWN0aXZlPXt0aGlzLnN0YXRlLlBhZ2VOdW1iZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBsZXQgZm9vdGVyID0gdGhpcy5zdGF0ZS5IaWRlLmRvd25sb2FkQ1NWID09PSB0cnVlID8gJycgOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJUZXh0XCI+XG4gICAgICAgICAgICAgIHtyb3dzLmxlbmd0aH0gcm93cyBkaXNwbGF5ZWQgb2Yge2ZpbHRlcmVkUm93c30uXG4gICAgICAgICAgICAgIChNYXhpbXVtIHJvd3MgcGVyIHBhZ2U6IHtSb3dzUGVyUGFnZURyb3Bkb3dufSlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICctMjNweCd9fT5cbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25MaW5rc1xuICAgICAgICAgICAgICAgIFRvdGFsPXtmaWx0ZXJlZFJvd3N9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXt0aGlzLmNoYW5nZVBhZ2V9XG4gICAgICAgICAgICAgICAgUm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuICAgICAgICAgICAgICAgIEFjdGl2ZT17dGhpcy5zdGF0ZS5QYWdlTnVtYmVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMTRweCd9fT5cbiAgICAgICAge2hlYWRlcn1cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXByaW1hcnkgdGFibGUtYm9yZGVyZWRcIiBpZD1cImR5bmFtaWN0YWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJpbmZvXCI+e2hlYWRlcnN9PC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtmb290ZXJ9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5EYXRhVGFibGUucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgUm93TnVtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vIEZ1bmN0aW9uIG9mIHdoaWNoIHJldHVybnMgYSBKU1ggZWxlbWVudCBmb3IgYSB0YWJsZSBjZWxsLCB0YWtlc1xuICAvLyBwYXJhbWV0ZXJzIG9mIHRoZSBmb3JtOiBmdW5jKENvbHVtbk5hbWUsIENlbGxEYXRhLCBFbnRpcmVSb3dEYXRhKVxuICBnZXRGb3JtYXR0ZWRDZWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgSGlkZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5EYXRhVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICBSb3dOdW1MYWJlbDogJ05vLicsXG4gIGZpbHRlcjoge30sXG4gIEhpZGU6IHtcbiAgICByb3dzUGVyUGFnZTogZmFsc2UsXG4gICAgZG93bmxvYWRDU1Y6IGZhbHNlLFxuICAgIGRlZmF1bHRDb2x1bW46IGZhbHNlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEZpbHRlciBjb21wb25lbnQuXG4gKiBBIHdyYXBwZXIgZm9yIGZvcm0gZWxlbWVudHMgaW5zaWRlIGEgc2VsZWN0aW9uIGZpbHRlci5cbiAqXG4gKiBDb25zdHJ1Y3RzIGZpbHRlciBmaWVsZHMgYmFzZWQgb24gdGhpcy5wcm9wcy5maWVsZHMgY29uZmlndXJhdGlvbiBvYmplY3RcbiAqXG4gKiBBbHRlcnMgdGhlIGZpbHRlciBvYmplY3QgYW5kIHNlbmRzIGl0IHRvIHBhcmVudCBvbiBldmVyeSB1cGRhdGUuXG4gKlxuICovXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uRmllbGRVcGRhdGUgPSB0aGlzLm9uRmllbGRVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckZpbHRlckZpZWxkcyA9IHRoaXMucmVuZGVyRmlsdGVyRmllbGRzLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmaWx0ZXIgb2JqZWN0IHRvIHJlZmxlY3QgdmFsdWVzIG9mIGlucHV0IGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBmb3JtIGVsZW1lbnQgdHlwZSAoaS5lIGNvbXBvbmVudCBuYW1lKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIGlkIG9mIHRoZSBmb3JtIGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSB0eXBlIG9mIHRoZSBmb3JtIGVsZW1lbnRcbiAgICovXG4gIG9uRmllbGRVcGRhdGUobmFtZSwgdmFsdWUsIGlkLCB0eXBlKSB7XG4gICAgY29uc3QgZmlsdGVyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmZpbHRlcikpO1xuICAgIGNvbnN0IGV4YWN0TWF0Y2ggPSB0eXBlID09PSAndGV4dGJveCcgPyBmYWxzZSA6IHRydWU7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgZGVsZXRlIGZpbHRlcltuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyW25hbWVdID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGV4YWN0TWF0Y2g6IGV4YWN0TWF0Y2gsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMudXBkYXRlRmlsdGVyKGZpbHRlcik7XG4gIH1cblxuICByZW5kZXJGaWx0ZXJGaWVsZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZmllbGRzLnJlZHVjZSgocmVzdWx0LCBmaWVsZCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyID0gZmllbGQuZmlsdGVyO1xuICAgICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIuaGlkZSAhPT0gdHJ1ZSkge1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgc3dpdGNoIChmaWx0ZXIudHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICBlbGVtZW50ID0gPFRleHRib3hFbGVtZW50IGtleT17ZmlsdGVyLm5hbWV9Lz47XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgZWxlbWVudCA9IDxTZWxlY3RFbGVtZW50IGtleT17ZmlsdGVyLm5hbWV9IG9wdGlvbnM9e2ZpbHRlci5vcHRpb25zfS8+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtdWx0aXNlbGVjdCc6XG4gICAgICAgICAgZWxlbWVudCA9IDxTZWxlY3RFbGVtZW50IGtleT17ZmlsdGVyLm5hbWV9IG9wdGlvbnM9e2ZpbHRlci5vcHRpb25zfSBtdWx0aXBsZT17dHJ1ZX0vPjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgZWxlbWVudCA9IDxEYXRlRWxlbWVudCBrZXk9e2ZpbHRlci5uYW1lfS8+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGVsZW1lbnQgPSA8VGV4dGJveEVsZW1lbnQga2V5PXtmaWx0ZXIubmFtZX0vPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IGZpbHRlci5uYW1lLFxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgdmFsdWU6ICh0aGlzLnByb3BzLmZpbHRlcltmaWx0ZXIubmFtZV0gfHwge30pLnZhbHVlLFxuICAgICAgICAgICAgb25Vc2VySW5wdXQ6IHRoaXMub25GaWVsZFVwZGF0ZSxcbiAgICAgICAgICB9XG4gICAgICAgICkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50XG4gICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICA+XG4gICAgICAgIDxGaWVsZHNldEVsZW1lbnRcbiAgICAgICAgICBjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9XG4gICAgICAgICAgbGVnZW5kPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyRmlsdGVyRmllbGRzKCl9XG4gICAgICAgICAgPEJ1dHRvbkVsZW1lbnRcbiAgICAgICAgICAgIGxhYmVsPVwiQ2xlYXIgRmlsdGVyc1wiXG4gICAgICAgICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMucHJvcHMuY2xlYXJGaWx0ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZHNldEVsZW1lbnQ+XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6IG51bGwsXG4gIGNsZWFyRmlsdGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLndhcm4oJ29uVXBkYXRlKCkgY2FsbGJhY2sgaXMgbm90IHNldCEnKTtcbiAgfSxcbiAgY29sdW1uczogMSxcbn07XG5GaWx0ZXIucHJvcFR5cGVzID0ge1xuICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xlYXJGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQYW5lbCBmcm9tICdqc3gvUGFuZWwnO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdqc3gvRGF0YVRhYmxlJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnanN4L0ZpbHRlcic7XG5cbi8qKlxuICogRmlsdGVyYWJsZURhdGFUYWJsZSBjb21wb25lbnQuXG4gKiBBIHdyYXBwZXIgZm9yIGFsbCBkYXRhdGFibGVzIHRoYXQgaGFuZGxlcyBmaWx0ZXJpbmcuXG4gKlxuICogSGFuZGxlcyB0aGUgdXBkYXRpbmcgYW5kIGNsZWFyaW5nIG9mIHRoZSBmaWx0ZXIgc3RhdGUgYmFzZWQgb24gY2hhbmdlcyBzZW50XG4gKiBmcm9tIHRoZSBGaXRsZXJGb3JtLlxuICpcbiAqIFBhc3NlcyB0aGUgRmlsdGVyIHRvIHRoZSBEYXRhdGFibGUuXG4gKlxuICogRGVwcmVjYXRlcyBGaWx0ZXIgRm9ybS5cbiAqL1xuY2xhc3MgRmlsdGVyYWJsZURhdGFUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWx0ZXI6IHt9LFxuICAgIH07XG4gICAgdGhpcy51cGRhdGVGaWx0ZXIgPSB0aGlzLnVwZGF0ZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xlYXJGaWx0ZXIgPSB0aGlzLmNsZWFyRmlsdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBmaWx0ZXIgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciBwYXNzZWQgZnJvbSBGaWx0ZXJGb3JtXG4gICAqL1xuICB1cGRhdGVGaWx0ZXIoZmlsdGVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGaWx0ZXIgdG8gZW1wdHkgb2JqZWN0XG4gICAqL1xuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcih7fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lbFxuICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgID5cbiAgICAgICAgPEZpbHRlclxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSArICdfZmlsdGVyJ31cbiAgICAgICAgICBpZD17dGhpcy5wcm9wcy5uYW1lICsgJ19maWx0ZXInfVxuICAgICAgICAgIHRpdGxlPSdTZWxlY3Rpb24gRmlsdGVyJ1xuICAgICAgICAgIGNvbHVtbnM9e3RoaXMucHJvcHMuY29sdW1uc31cbiAgICAgICAgICBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgIGZpZWxkcz17dGhpcy5wcm9wcy5maWVsZHN9XG4gICAgICAgICAgdXBkYXRlRmlsdGVyPXt0aGlzLnVwZGF0ZUZpbHRlcn1cbiAgICAgICAgICBjbGVhckZpbHRlcj17dGhpcy5jbGVhckZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPERhdGFUYWJsZVxuICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICBmaWVsZHM9e3RoaXMucHJvcHMuZmllbGRzfVxuICAgICAgICAgIGZpbHRlcj17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgZ2V0Rm9ybWF0dGVkQ2VsbD17dGhpcy5wcm9wcy5nZXRGb3JtYXR0ZWRDZWxsfVxuICAgICAgICAgIGFjdGlvbnM9e3RoaXMucHJvcHMuYWN0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvUGFuZWw+XG4gICAgKTtcbiAgfVxufVxuXG5GaWx0ZXJhYmxlRGF0YVRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sdW1uczogMyxcbn07XG5cbkZpbHRlcmFibGVEYXRhVGFibGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmaWVsZHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLm51bWJlcixcbiAgZ2V0Rm9ybWF0dGVkQ2VsbDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJhYmxlRGF0YVRhYmxlO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIFJlYWN0IGNvbXBvbmVudCBmb3IgTG9hZGVyXG4gKlxuICogQGF1dGhvciBIZW5yaSBSYWJhbGFpc1xuICogQHZlcnNpb24gMS4wLjBcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIExvYWRlciBjb21wb25lbnRcbiAqL1xuY2xhc3MgTG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdsb2FkZXInXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6IHBhcnNlSW50KHRoaXMucHJvcHMuc2l6ZSksIGhlaWdodDogcGFyc2VJbnQodGhpcy5wcm9wcy5zaXplKX19XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuTG9hZGVyLnByb3BUeXBlcyA9IHtzaXplOiBQcm9wVHlwZXMuc3RyaW5nfTtcbkxvYWRlci5kZWZhdWx0UHJvcHMgPSB7c2l6ZTogJzEyMCd9O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCIvKiBleHBvcnRlZCBSUGFnaW5hdGlvbkxpbmtzICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUGFnaW5hdGlvbkxpbmtzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVBhZ2UgPSB0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVBhZ2UoaSkge1xuICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgIC8vIERvbid0IGp1bXAgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlUGFnZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlUGFnZShpKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHJvd3NQZXJQYWdlID0gdGhpcy5wcm9wcy5Sb3dzUGVyUGFnZTtcbiAgICBsZXQgcGFnZUxpbmtzID0gW107XG4gICAgbGV0IGNsYXNzTGlzdDtcbiAgICBsZXQgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodGhpcy5wcm9wcy5Ub3RhbCAvIHJvd3NQZXJQYWdlKTtcbiAgICBsZXQgc3RhcnRQYWdlID0gTWF0aC5tYXgoMSwgdGhpcy5wcm9wcy5BY3RpdmUgLSAzKTtcbiAgICBsZXQgbGFzdFNob3duUGFnZSA9IE1hdGgubWluKHRoaXMucHJvcHMuQWN0aXZlICsgMywgbGFzdFBhZ2UpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuVG90YWwgPT09IDApIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5Ub3RhbCA8IHRoaXMucHJvcHMuUm93c1BlclBhZ2UpIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cblxuICAgIGlmICgobGFzdFNob3duUGFnZSAtIHN0YXJ0UGFnZSkgPD0gNykge1xuICAgICAgbGFzdFNob3duUGFnZSA9IHN0YXJ0UGFnZSArIDY7XG4gICAgICBpZiAobGFzdFNob3duUGFnZSA+IGxhc3RQYWdlKSB7XG4gICAgICAgIGxhc3RTaG93blBhZ2UgPSBsYXN0UGFnZTtcbiAgICAgICAgc3RhcnRQYWdlID0gbGFzdFBhZ2UgLSA2O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XG4gICAgICBwYWdlTGlua3MucHVzaChcbiAgICAgICAgPGxpIGtleT17J3RhYmxlX3BhZ2VfYmVnaW5uaW5nXycgKyBzdGFydFBhZ2UudG9TdHJpbmcoKX0gb25DbGljaz17dGhpcy5jaGFuZ2VQYWdlKDEpfT48YSBocmVmPScjJz4mbGFxdW87PC9hPjwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoc3RhcnRQYWdlIDwgMSkge1xuICAgICAgc3RhcnRQYWdlID0gMTtcbiAgICB9XG4gICAgaWYgKGxhc3RTaG93blBhZ2UgPCAxKSB7XG4gICAgICBsYXN0U2hvd25QYWdlID0gMTtcbiAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25seSAxIHBhZ2UsIGRvbid0IGRpc3BsYXkgcGFnaW5hdGlvbiBsaW5rc1xuICAgIGlmIChzdGFydFBhZ2UgPT09IGxhc3RTaG93blBhZ2UpIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPD0gbGFzdFNob3duUGFnZTsgaSArPSAxKSB7XG4gICAgICBjbGFzc0xpc3QgPSAnJztcbiAgICAgIGlmICh0aGlzLnByb3BzLkFjdGl2ZSA9PT0gaSkge1xuICAgICAgICBjbGFzc0xpc3QgPSAnYWN0aXZlJztcbiAgICAgIH1cbiAgICAgIHBhZ2VMaW5rcy5wdXNoKFxuICAgICAgICA8bGkga2V5PXsndGFibGVfcGFnZV8nICsgaS50b1N0cmluZygpfSBvbkNsaWNrPXt0aGlzLmNoYW5nZVBhZ2UoaSl9IGNsYXNzTmFtZT17Y2xhc3NMaXN0fT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPntpfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsYXN0U2hvd25QYWdlICE9PSBsYXN0UGFnZSkge1xuICAgICAgcGFnZUxpbmtzLnB1c2goXG4gICAgICAgIDxsaSBrZXk9eyd0YWJsZV9wYWdlX21vcmVfJyArIGxhc3RTaG93blBhZ2UudG9TdHJpbmcoKX0gb25DbGljaz17dGhpcy5jaGFuZ2VQYWdlKGxhc3RQYWdlKX0+XG4gICAgICAgICAgPGEgaHJlZj0nIyc+JnJhcXVvOzwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9J3BhZ2luYXRpb24gcGFnaW5hdGlvbi10YWJsZSc+XG4gICAgICAgICAge3BhZ2VMaW5rc31cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuUGFnaW5hdGlvbkxpbmtzLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2VQYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgVG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5QYWdpbmF0aW9uTGlua3MuZGVmYXVsdFByb3BzID0ge1xuICBSb3dzUGVyUGFnZTogMTAsXG4gIEFjdGl2ZTogMSxcbn07XG5cbmxldCBSUGFnaW5hdGlvbkxpbmtzID0gUmVhY3QuY3JlYXRlRmFjdG9yeShQYWdpbmF0aW9uTGlua3MpO1xuXG53aW5kb3cuUGFnaW5hdGlvbkxpbmtzID0gUGFnaW5hdGlvbkxpbmtzO1xud2luZG93LlJQYWdpbmF0aW9uTGlua3MgPSBSUGFnaW5hdGlvbkxpbmtzO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uTGlua3M7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBSZWFjdCBjb21wb25lbnQgZm9yIFBhbmVsXG4gKlxuICogQGF1dGhvciBBbGV4IEkuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogUGFuZWwgY29tcG9uZW50XG4gKiBXcmFwcyBjaGlsZHJlbiBpbiBhIGNvbGxhcHNpYmxlIGJvb3RzdHJhcCBwYW5lbFxuICovXG5jbGFzcyBQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbGxhcHNlZDogdGhpcy5wcm9wcy5pbml0Q29sbGFwc2VkLFxuICAgIH07XG5cbiAgICAvLyBJbml0aWFsaXplIHBhbmVsIGNsYXNzIGJhc2VkIG9uIGNvbGxhcHNlZCBzdGF0dXNcbiAgICB0aGlzLnBhbmVsQ2xhc3MgPSAoXG4gICAgICB0aGlzLnByb3BzLmluaXRDb2xsYXBzZWQgP1xuICAgICAgICAncGFuZWwtY29sbGFwc2UgY29sbGFwc2UnIDpcbiAgICAgICAgJ3BhbmVsLWNvbGxhcHNlIGNvbGxhcHNlIGluJ1xuICAgICk7XG5cbiAgICB0aGlzLnRvZ2dsZUNvbGxhcHNlZCA9IHRoaXMudG9nZ2xlQ29sbGFwc2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29sbGFwc2VkOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBDaGFuZ2UgYXJyb3cgZGlyZWN0aW9uIGJhc2VkIG9uIGNvbGxhcHNlIHN0YXR1c1xuICAgIGxldCBnbHlwaENsYXNzID0gKFxuICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZWQgP1xuICAgICAgICAnZ2x5cGhpY29uIHB1bGwtcmlnaHQgZ2x5cGhpY29uLWNoZXZyb24tZG93bicgOlxuICAgICAgICAnZ2x5cGhpY29uIHB1bGwtcmlnaHQgZ2x5cGhpY29uLWNoZXZyb24tdXAnXG4gICAgKTtcblxuICAgIC8vIEFkZCBwYW5lbCBoZWFkZXIsIGlmIHRpdGxlIGlzIHNldFxuICAgIGNvbnN0IHBhbmVsSGVhZGluZyA9IHRoaXMucHJvcHMudGl0bGUgPyAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH1cbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtdGFyZ2V0PXsnIycgKyB0aGlzLnByb3BzLmlkfVxuICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Z2x5cGhDbGFzc30+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKSA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtcHJpbWFyeVwiPlxuICAgICAgICB7cGFuZWxIZWFkaW5nfVxuICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e3RoaXMucGFuZWxDbGFzc30gcm9sZT1cInRhYnBhbmVsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCIgc3R5bGU9e3toZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0fX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBhbmVsLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuUGFuZWwuZGVmYXVsdFByb3BzID0ge1xuICBpbml0Q29sbGFwc2VkOiBmYWxzZSxcbiAgaWQ6ICdkZWZhdWx0LXBhbmVsJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYW5lbDtcbiIsIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIFJlYWN0IGNvbXBvbmVudHMgZm9yIFRhYnMgY29tcG9uZW50LlxuICpcbiAqIEBhdXRob3IgTG9yaXMgVGVhbVxuICogQHZlcnNpb24gMS4xLjBcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIFRhYnMgQ29tcG9uZW50LlxuICogUmVhY3Qgd3JhcHBlciBmb3IgQm9vdHN0cmFwIHRhYnMuIEFsbG93cyB0byBkeW5hbWljYWxseSByZW5kZXIgdGFic1xuICogYW5kIGNvcnJlc3BvbmRpbmcgdGFiIHBhbmVzLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogVXNhZ2U6XG4gKlxuICogMS4gRGVmaW5lIGFuIGFycmF5IG9mIHRhYnMgd2l0aCBJRHMgYW5kIGxhYmVsc1xuICpcbiAqIGBsZXQgdGFiTGlzdCA9IFt7aWQ6IFwidGFiMVwiLCBsYWJlbDogXCJUaGlzIGlzIHRhYiB0aXRsZVwifV07YFxuICpcbiAqIDIuIFBhc3MgdGFiTGlzdCBhcyA8VGFiPiBwcm9wZXJ0eSBhbmQgPFRhYlBhbmU+IGFzIGNoaWxkXG4gKiAgYGBgXG4gKiA8VGFicyB0YWJzPXt0YWJMaXN0fSBkZWZhdWx0VGFiPVwidGFiMVwiPlxuICogICA8VGFiUGFuZSBUYWJJZD17dGFiTGlzdFswXS5pZH0+XG4gKiAgICAgLy8gVGFiIGNvbnRlbnQgZ29lcyBoZXJlXG4gKiAgIDwvVGFiUGFuZT5cbiAqIDwvVGFicz5cbiAqIGBgYFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqL1xuY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIGxldCBhY3RpdmVUYWIgPSAnJztcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB0aGUgaW5pdGlhbCBhY3RpdmUgdGFiIGluIHRoaXMgb3JkZXJcbiAgICAgKiAxLiBUcnkgdG8gaW5mZXIgZnJvbSB0aGUgVVJMLCBvdGhlcndpc2VcbiAgICAgKiAyLiBUcnkgdG8gaW5mZXIgZnJvbSB0aGUgZGVmYXVsdFRhYiBwcm9wLCBvdGhlcndpc2VcbiAgICAgKiAzLiBTZXQgdG8gYmUgdGhlIGZpcnN0IHRhYiBvZiB0aGUgbGlzdFxuICAgICAqL1xuICAgIGlmICh0aGlzLnByb3BzLnVwZGF0ZVVSTCAmJiBoYXNoKSB7XG4gICAgICBhY3RpdmVUYWIgPSBoYXNoLnN1YnN0cigxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFRhYikge1xuICAgICAgYWN0aXZlVGFiID0gdGhpcy5wcm9wcy5kZWZhdWx0VGFiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50YWJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGFjdGl2ZVRhYiA9IHRoaXMucHJvcHMudGFic1swXS5pZDtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlVGFiOiBhY3RpdmVUYWIsXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUYWJzID0gdGhpcy5nZXRUYWJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUYWJQYW5lcyA9IHRoaXMuZ2V0VGFiUGFuZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHRhYklkLCBlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiB0YWJJZH0pO1xuICAgIHRoaXMucHJvcHMub25UYWJDaGFuZ2UodGFiSWQpO1xuXG4gICAgLy8gQWRkIHRhYiBocmVmIHRvIFVSTCBxdWVyeXN0cmluZyBhbmQgc2Nyb2xsIHRoZSBwYWdlIHRvIHRvcFxuICAgIGlmICh0aGlzLnByb3BzLnVwZGF0ZVVSTCkge1xuICAgICAgY29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSAkKCdib2R5Jykuc2Nyb2xsVG9wKCkgfHwgJCgnaHRtbCcpLnNjcm9sbFRvcCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBlLnRhcmdldC5oYXNoO1xuICAgICAgJCgnaHRtbCxib2R5Jykuc2Nyb2xsVG9wKHNjcm9sbERpc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBnZXRUYWJzKCkge1xuICAgIGxldCB0YWJzID0gKHRoaXMucHJvcHMudGFicykubWFwKGZ1bmN0aW9uKHRhYikge1xuICAgICAgbGV0IHRhYkNsYXNzID0gdGhpcy5zdGF0ZS5hY3RpdmVUYWIgPT09IHRhYi5pZCA/ICdhY3RpdmUnIDogbnVsbDtcbiAgICAgIGxldCBocmVmID0gJyMnICsgdGFiLmlkO1xuICAgICAgbGV0IHRhYklEID0gJ3RhYi0nICsgdGFiLmlkO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0YWJDbGFzc31cbiAgICAgICAgICBrZXk9e3RhYi5pZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxhIGlkPXt0YWJJRH1cbiAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQobnVsbCwgdGFiLmlkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGFiLmxhYmVsfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0YWJzO1xuICB9XG5cbiAgZ2V0VGFiUGFuZXMoKSB7XG4gICAgbGV0IHRhYlBhbmVzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkLCBrZXkpIHtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgYWN0aXZlVGFiOiB0aGlzLnN0YXRlLmFjdGl2ZVRhYixcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0YWJQYW5lcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFicygpO1xuICAgIGxldCB0YWJQYW5lcyA9IHRoaXMuZ2V0VGFiUGFuZXMoKTtcbiAgICBsZXQgdGFiU3R5bGUgPSB7XG4gICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiIHN0eWxlPXt0YWJTdHlsZX0+XG4gICAgICAgICAge3RhYnN9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICB7dGFiUGFuZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuVGFicy5wcm9wVHlwZXMgPSB7XG4gIHRhYnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBkZWZhdWx0VGFiOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1cGRhdGVVUkw6IFByb3BUeXBlcy5ib29sLFxufTtcblRhYnMuZGVmYXVsdFByb3BzID0ge1xuICBvblRhYkNoYW5nZTogZnVuY3Rpb24oKSB7fSxcbiAgLy8gU2V0IHVwZGF0ZVVSTCB0byBkZWZhdWx0IHRvIHRydWUgYnV0IGFsbG93IGZvciBjaGFuZ2VcbiAgLy8gTmVzdGVkIHRhYnMgc2hvdWxkIHNldCB0aGlzIHZhcmlhYmxlIHRvIGZhbHNlXG4gIHVwZGF0ZVVSTDogdHJ1ZSxcbn07XG5cbi8qKlxuICogQWxsb3dzIHRvIGR5bmFtaWNhbGx5IHJlbmRlciB2ZXJ0aWNhbCB0YWJzIGNvcnJlc3BvbmRpbmcgdG8gdGFiIHBhbmVzLlxuICovXG5cbmNsYXNzIFZlcnRpY2FsVGFicyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIGxldCBhY3RpdmVUYWIgPSAnJztcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB0aGUgaW5pdGlhbCBhY3RpdmUgdGFiIGluIHRoaXMgb3JkZXJcbiAgICAgKiAxLiBUcnkgdG8gaW5mZXIgZnJvbSB0aGUgVVJMLCBvdGhlcndpc2VcbiAgICAgKiAyLiBUcnkgdG8gaW5mZXIgZnJvbSB0aGUgZGVmYXVsdFRhYiBwcm9wLCBvdGhlcndpc2VcbiAgICAgKiAzLiBTZXQgdG8gYmUgdGhlIGZpcnN0IHRhYiBvZiB0aGUgbGlzdFxuICAgICAqL1xuICAgIGlmICh0aGlzLnByb3BzLnVwZGF0ZVVSTCAmJiBoYXNoKSB7XG4gICAgICBhY3RpdmVUYWIgPSBoYXNoLnN1YnN0cigxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFRhYikge1xuICAgICAgYWN0aXZlVGFiID0gdGhpcy5wcm9wcy5kZWZhdWx0VGFiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50YWJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGFjdGl2ZVRhYiA9IHRoaXMucHJvcHMudGFic1swXS5pZDtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlVGFiOiBhY3RpdmVUYWIsXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUYWJzID0gdGhpcy5nZXRUYWJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUYWJQYW5lcyA9IHRoaXMuZ2V0VGFiUGFuZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHRhYklkLCBlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiB0YWJJZH0pO1xuICAgIHRoaXMucHJvcHMub25UYWJDaGFuZ2UodGFiSWQpO1xuXG4gICAgLy8gQWRkIHRhYiBocmVmIHRvIFVSTCBxdWVyeXN0cmluZyBhbmQgc2Nyb2xsIHRoZSBwYWdlIHRvIHRvcFxuICAgIGlmICh0aGlzLnByb3BzLnVwZGF0ZVVSTCkge1xuICAgICAgY29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSAkKCdib2R5Jykuc2Nyb2xsVG9wKCkgfHwgJCgnaHRtbCcpLnNjcm9sbFRvcCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBlLnRhcmdldC5oYXNoO1xuICAgICAgJCgnaHRtbCxib2R5Jykuc2Nyb2xsVG9wKHNjcm9sbERpc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBnZXRUYWJzKCkge1xuICAgIGxldCB0YWJzID0gKHRoaXMucHJvcHMudGFicykubWFwKGZ1bmN0aW9uKHRhYikge1xuICAgICAgbGV0IHRhYkNsYXNzID0gdGhpcy5zdGF0ZS5hY3RpdmVUYWIgPT09IHRhYi5pZCA/ICdhY3RpdmUnIDogbnVsbDtcbiAgICAgIGxldCBocmVmID0gJyMnICsgdGFiLmlkO1xuICAgICAgbGV0IHRhYklEID0gJ3RhYi0nICsgdGFiLmlkO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0YWJDbGFzc31cbiAgICAgICAgICBrZXk9e3RhYi5pZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxhIGlkPXt0YWJJRH1cbiAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQobnVsbCwgdGFiLmlkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGFiLmxhYmVsfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0YWJzO1xuICB9XG5cbiAgZ2V0VGFiUGFuZXMoKSB7XG4gICAgbGV0IHRhYlBhbmVzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkLCBrZXkpIHtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgYWN0aXZlVGFiOiB0aGlzLnN0YXRlLmFjdGl2ZVRhYixcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0YWJQYW5lcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFicygpO1xuICAgIGxldCB0YWJQYW5lcyA9IHRoaXMuZ2V0VGFiUGFuZXMoKTtcbiAgICBsZXQgdGFiU3R5bGUgPSB7XG4gICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiYmFibGUgY29sLW1kLTMgY29sLXNtLTNcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscyBuYXYtc3RhY2tlZFwiIHJvbGU9XCJ0YWJsaXN0XCIgc3R5bGU9e3RhYlN0eWxlfT5cbiAgICAgICAgICAgIHt0YWJzfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50IGNvbC1tZC05IGNvbC1zbS05XCI+XG4gICAgICAgICAge3RhYlBhbmVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblZlcnRpY2FsVGFicy5wcm9wVHlwZXMgPSB7XG4gIHRhYnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBkZWZhdWx0VGFiOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1cGRhdGVVUkw6IFByb3BUeXBlcy5ib29sLFxufTtcblZlcnRpY2FsVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uVGFiQ2hhbmdlOiBmdW5jdGlvbigpIHt9LFxuICAvLyBTZXQgdXBkYXRlVVJMIHRvIGRlZmF1bHQgdG8gdHJ1ZSBidXQgYWxsb3cgZm9yIGNoYW5nZVxuICAvLyBOZXN0ZWQgdGFicyBzaG91bGQgc2V0IHRoaXMgdmFyaWFibGUgdG8gZmFsc2VcbiAgdXBkYXRlVVJMOiB0cnVlLFxufTtcblxuLypcbiAqIFRhYlBhbmUgY29tcG9uZW50LlxuICogVXNlZCB0byB3cmFwIGNvbnRlbnQgZm9yIGV2ZXJ5IHRhYi5cbiAqL1xuY2xhc3MgVGFiUGFuZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2xhc3NMaXN0ID0gJ3RhYi1wYW5lJztcbiAgICBsZXQgdGl0bGU7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5UYWJJZCA9PT0gdGhpcy5wcm9wcy5hY3RpdmVUYWIpIHtcbiAgICAgIGNsYXNzTGlzdCArPSAnIGFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLlRpdGxlKSB7XG4gICAgICB0aXRsZSA9IDxoMT57dGhpcy5wcm9wcy5UaXRsZX08L2gxPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzc05hbWU9e2NsYXNzTGlzdH0gaWQ9e3RoaXMucHJvcHMuVGFiSWR9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuVGFiUGFuZS5wcm9wVHlwZXMgPSB7XG4gIFRhYklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmVUYWI6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQge1xuICBUYWJzLFxuICBWZXJ0aWNhbFRhYnMsXG4gIFRhYlBhbmUsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge1RhYnMsIFRhYlBhbmV9IGZyb20gJ1RhYnMnO1xuaW1wb3J0IExvYWRlciBmcm9tICdMb2FkZXInO1xuaW1wb3J0IEZpbHRlcmFibGVEYXRhVGFibGUgZnJvbSAnRmlsdGVyYWJsZURhdGFUYWJsZSc7XG5cbmltcG9ydCBJbnN0cnVtZW50VXBsb2FkRm9ybSBmcm9tICcuL3VwbG9hZEZvcm0nO1xuXG5jbGFzcyBJbnN0cnVtZW50TWFuYWdlckluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgfTtcblxuICAgdGhpcy5mZXRjaERhdGEgPSB0aGlzLmZldGNoRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybWF0Q29sdW1uID0gdGhpcy5mb3JtYXRDb2x1bW4uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hEYXRhKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0U3RhdGUoe2lzTG9hZGVkOiB0cnVlfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGRhdGEgZnJvbSB0aGUgcHJvdmlkZWQgVVJMIGFuZCBzYXZlIGl0IGluIHN0YXRlXG4gICAqIEFkZGl0aW9uYWxseSBhZGQgaGlkZGVuSGVhZGVycyB0byBnbG9iYWwgbG9yaXMgdmFyaWFibGVcbiAgICogZm9yIGVhc3kgYWNjZXNzIGJ5IGNvbHVtbkZvcm1hdHRlci5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgZmV0Y2hEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnByb3BzLmRhdGFVUkwsIHtjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ30pXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gdGhpcy5zZXRTdGF0ZSh7ZGF0YX0pKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmeSBiZWhhdmlvdXIgb2Ygc3BlY2lmaWVkIGNvbHVtbiBjZWxscyBpbiB0aGUgRGF0YSBUYWJsZSBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbHVtbiAtIGNvbHVtbiBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjZWxsIC0gY2VsbCBjb250ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSByb3cgLSByb3cgY29udGVudCBpbmRleGVkIGJ5IGNvbHVtblxuICAgKlxuICAgKiBAcmV0dXJuIHsqfSBhIGZvcm1hdGVkIHRhYmxlIGNlbGwgZm9yIGEgZ2l2ZW4gY29sdW1uXG4gICAqL1xuICBmb3JtYXRDb2x1bW4oY29sdW1uLCBjZWxsLCByb3cpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRkPntjZWxsfTwvdGQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBJZiBlcnJvciBvY2N1cnMsIHJldHVybiBhIG1lc3NhZ2UuXG4gICAgLy8gWFhYOiBSZXBsYWNlIHRoaXMgd2l0aCBhIFVJIGNvbXBvbmVudCBmb3IgNTAwIGVycm9ycy5cbiAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgcmV0dXJuIDxoMz5BbiBlcnJvciBvY2N1cmVkIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2UuPC9oMz47XG4gICAgfVxuXG4gICAgLy8gV2FpdGluZyBmb3IgYXN5bmMgZGF0YSB0byBsb2FkXG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm4gPExvYWRlci8+O1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkcyA9IFtcbiAgICAgIHtsYWJlbDogJ0luc3RydW1lbnQnLCBzaG93OiB0cnVlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ2luc3RydW1lbnQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB9fSxcbiAgICAgIHtsYWJlbDogJ0luc3RydW1lbnQgVHlwZScsIHNob3c6IHRydWUsIGZpbHRlcjoge1xuICAgICAgICBuYW1lOiAnaW5zdHJ1bWVudFR5cGUnLFxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICdJbnN0cnVtZW50IEJ1aWxkZXInOiAnSW5zdHJ1bWVudCBCdWlsZGVyJyxcbiAgICAgICAgICAnUEhQJzogJ1BIUCcsXG4gICAgICAgICAgJ01pc3NpbmcnOiAnTWlzc2luZycsXG4gICAgICAgIH0sXG4gICAgICB9fSxcbiAgICAgIHtsYWJlbDogJ1RhYmxlIEluc3RhbGxlZCcsIHNob3c6IHRydWUsIGZpbHRlcjoge1xuICAgICAgICBuYW1lOiAndGFibGVJbnN0YWxsZWQnLFxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICdFeGlzdHMnOiAnRXhpc3RzJyxcbiAgICAgICAgICAnTWlzc2luZyc6ICdNaXNzaW5nJyxcbiAgICAgICAgfSxcbiAgICAgIH19LFxuICAgICAge2xhYmVsOiAnVGFibGUgVmFsaWQnLCBzaG93OiB0cnVlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ3RhYmxlVmFsaWQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB9fSxcbiAgICAgIHtsYWJlbDogJ1BhZ2VzIFZhbGlkJywgc2hvdzogdHJ1ZSwgZmlsdGVyOiB7XG4gICAgICAgIG5hbWU6ICdwYWdlc1ZhbGlkJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgfX0sXG4gICAgXTtcblxuICAgIGNvbnN0IHRhYnMgPSBbXG4gICAgICB7aWQ6ICdicm93c2UnLCBsYWJlbDogJ0Jyb3dzZSd9LFxuICAgICAge2lkOiAndXBsb2FkJywgbGFiZWw6ICdVcGxvYWQnfSxcbiAgICBdO1xuXG4gICAgY29uc3QgZmVlZGJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YS5jYW5pbnN0YWxsKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXdhcm5pbmcnPlxuICAgICAgICAgICAgSW5zdHJ1bWVudCBpbnN0YWxsYXRpb24gaXMgbm90IHBvc3NpYmxlIGdpdmVuIHRoZSBjdXJyZW50IHNlcnZlclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjsgdGhlIExPUklTICdxdWF0VXNlcicgaXMgbm90IGNvbmZpZ3VyZWQgcHJvcGVybHkuXG4gICAgICAgICAgICBGaWxlIHVwbG9hZCBpcyBzdGlsbCBwb3NzaWJsZSBidXQgaW5zdHJ1bWVudHMgd2lsbCBuZWVkIHRvIGJlXG4gICAgICAgICAgICBpbnN0YWxsZWQgbWFudWFsbHlcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdXBsb2FkVGFiID0gKCkgPT4ge1xuICAgICAgbGV0IGNvbnRlbnQgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS53cml0YWJsZSkge1xuICAgICAgICBsZXQgdXJsID0gbG9yaXMuQmFzZVVSTC5jb25jYXQoJy9pbnN0cnVtZW50X21hbmFnZXIvP2Zvcm1hdD1qc29uJyk7XG4gICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgPEluc3RydW1lbnRVcGxvYWRGb3JtIGFjdGlvbj17dXJsfS8+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC13YXJuaW5nJz5cbiAgICAgICAgICAgIEluc3RhbGxhdGlvbiBpcyBub3QgcG9zc2libGUgZ2l2ZW4gdGhlIGN1cnJlbnQgc2VydmVyIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAgICBQbGVhc2UgY29udGFjdCB5b3VyIGFkbWluaXN0cmF0b3IgaWYgeW91IHJlcXVpcmUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJzIHRhYnM9e3RhYnN9IGRlZmF1bHRUYWI9XCJicm93c2VcIiB1cGRhdGVVUkw9e3RydWV9PlxuICAgICAgICA8VGFiUGFuZSBUYWJJZD17dGFic1swXS5pZH0+XG4gICAgICAgICAgPEZpbHRlcmFibGVEYXRhVGFibGVcbiAgICAgICAgICAgIG5hbWU9XCJpbnN0cnVtZW50X21hbmFnZXJcIlxuICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhLkRhdGF9XG4gICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgIGdldEZvcm1hdHRlZENlbGw9e3RoaXMuZm9ybWF0Q29sdW1ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgPFRhYlBhbmUgVGFiSWQ9J3VwbG9hZCc+XG4gICAgICAgICAge2ZlZWRiYWNrKCl9XG4gICAgICAgICAge3VwbG9hZFRhYigpfVxuICAgICAgICA8L1RhYlBhbmU+XG4gICAgICA8L1RhYnM+XG4gICAgKTtcbiAgfVxufVxuXG5JbnN0cnVtZW50TWFuYWdlckluZGV4LnByb3BUeXBlcyA9IHtcbiAgZGF0YVVSTDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYXNQZXJtaXNzaW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8SW5zdHJ1bWVudE1hbmFnZXJJbmRleFxuICAgICAgZGF0YVVSTD17YCR7bG9yaXMuQmFzZVVSTH0vaW5zdHJ1bWVudF9tYW5hZ2VyLz9mb3JtYXQ9anNvbmB9XG4gICAgICBoYXNQZXJtaXNzaW9uPXtsb3Jpcy51c2VySGFzUGVybWlzc2lvbn1cbiAgICAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9yaXN3b3Jrc3BhY2UnKVxuICApO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEluc3RydW1lbnRVcGxvYWRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBzZWxlY3RlZEZpbGU6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMuZmlsZVNlbGVjdGVkID0gdGhpcy5maWxlU2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwbG9hZCA9IHRoaXMudXBsb2FkLmJpbmQodGhpcyk7XG4gIH1cblxuICBmaWxlU2VsZWN0ZWQoZWxlbWVudCwgZmlsZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRGaWxlOiBmaWxlLFxuICAgIH0pO1xuICB9XG5cbiAgdXBsb2FkKCkge1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBkYXRhLmFwcGVuZCgnaW5zdGFsbF9maWxlJywgdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUpO1xuXG4gICAgZmV0Y2godGhpcy5wcm9wcy5hY3Rpb24sIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBib2R5OiBkYXRhLFxuICAgIH0pXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwLnN0YXR1cyA9PSAyMDEpIHtcbiAgICAgICAgc3dhbCh7XG4gICAgICAgICAgdGl0bGU6ICdJbnN0YWxsYXRpb24gU3VjY2Vzc2Z1bCEnLFxuICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihsb3Jpcy5CYXNlVVJMICsgJy9pbnN0cnVtZW50X21hbmFnZXIvJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgIHN3YWwoe1xuICAgICAgICAgIHRpdGxlOiAnVXBsb2FkIFN1Y2Nlc3NmdWwhJyxcbiAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgdGV4dDogZGF0YS5tZXNzYWdlLFxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGxvcmlzLkJhc2VVUkwgKyAnL2luc3RydW1lbnRfbWFuYWdlci8nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgdGl0bGU6ICdBbiBlcnJvciBvY2N1cmVkJyxcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgIHRleHQ6IGRhdGEuZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gKCkgPT4gdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUgPT09IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtcHJpbWFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+VXBsb2FkIEluc3RydW1lbnQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgIDxGaWxlRWxlbWVudFxuICAgICAgICAgICAgICAgICAgbmFtZT0naW5zdGFsbF9maWxlJ1xuICAgICAgICAgICAgICAgICAgbGFiZWw9J0luc3RydW1lbnQgZmlsZSdcbiAgICAgICAgICAgICAgICAgIG9uVXNlcklucHV0PXt0aGlzLmZpbGVTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy51cGxvYWR9IGRpc2FibGVkPXtkaXNhYmxlZCgpfT5JbnN0YWxsPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5JbnN0cnVtZW50VXBsb2FkRm9ybS5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1bWVudFVwbG9hZEZvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZzsiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApXG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID1cbiAgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvciAmJiBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gIDB4ZWFjNztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgdmFyIGl0ZXJhdG9yRm4gPVxuICAgIG1heWJlSXRlcmFibGUgJiZcbiAgICAoKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0pIHx8XG4gICAgICBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpdGVyYXRvckZuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuXG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKGNvbXBvbmVudCAmJiB0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKFxuICBjaGlsZHJlbixcbiAgbmFtZVNvRmFyLFxuICBjYWxsYmFjayxcbiAgdHJhdmVyc2VDb250ZXh0XG4pIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIGlmIChcbiAgICBjaGlsZHJlbiA9PT0gbnVsbCB8fFxuICAgIHR5cGUgPT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyBUaGUgZm9sbG93aW5nIGlzIGlubGluZWQgZnJvbSBSZWFjdEVsZW1lbnQuIFRoaXMgbWVhbnMgd2UgY2FuIG9wdGltaXplXG4gICAgLy8gc29tZSBjaGVja3MuIFJlYWN0IEZpYmVyIGFsc28gaW5saW5lcyB0aGlzIGxvZ2ljIGZvciBzaW1pbGFyIHB1cnBvc2VzLlxuICAgICh0eXBlID09PSAnb2JqZWN0JyAmJiBjaGlsZHJlbi4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKVxuICApIHtcbiAgICBjYWxsYmFjayhcbiAgICAgIHRyYXZlcnNlQ29udGV4dCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0ZhclxuICAgICk7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dE5hbWUsXG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICB0cmF2ZXJzZUNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzLFxuICAgICAgICAgICAgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgbGlrZWx5IHlpZWxkICcgK1xuICAgICAgICAgICAgICAndW5leHBlY3RlZCByZXN1bHRzLiBDb252ZXJ0IGl0IHRvIGEgc2VxdWVuY2UvaXRlcmFibGUgb2Yga2V5ZWQgJyArXG4gICAgICAgICAgICAgICdSZWFjdEVsZW1lbnRzIGluc3RlYWQuJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKFxuICAgICAgICAgIGNoaWxkLFxuICAgICAgICAgIG5leHROYW1lLFxuICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgIHRyYXZlcnNlQ29udGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYWRkZW5kdW0gPVxuICAgICAgICAgICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICtcbiAgICAgICAgICAnaW5zdGVhZCBvciB3cmFwIHRoZSBvYmplY3QgdXNpbmcgY3JlYXRlRnJhZ21lbnQob2JqZWN0KSBmcm9tIHRoZSAnICtcbiAgICAgICAgICAnUmVhY3QgYWRkLW9ucy4nO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcbiAgICAgIGludmFyaWFudChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsXG4gICAgICAgIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJ1xuICAgICAgICAgID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9J1xuICAgICAgICAgIDogY2hpbGRyZW5TdHJpbmcsXG4gICAgICAgIGFkZGVuZHVtXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgIG9sZEVsZW1lbnQsXG4gICAge2tleTogbmV3S2V5fSxcbiAgICBvbGRFbGVtZW50LnByb3BzICE9PSB1bmRlZmluZWQgPyBvbGRFbGVtZW50LnByb3BzLmNoaWxkcmVuIDogdW5kZWZpbmVkXG4gICk7XG59XG5cbnZhciBERUZBVUxUX1BPT0xfU0laRSA9IDEwO1xudmFyIERFRkFVTFRfUE9PTEVSID0gb25lQXJndW1lbnRQb29sZXI7XG5cbnZhciBvbmVBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uKGNvcHlGaWVsZHNGcm9tKSB7XG4gIHZhciBLbGFzcyA9IHRoaXM7XG4gIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIGluc3RhbmNlID0gS2xhc3MuaW5zdGFuY2VQb29sLnBvcCgpO1xuICAgIEtsYXNzLmNhbGwoaW5zdGFuY2UsIGNvcHlGaWVsZHNGcm9tKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBLbGFzcyhjb3B5RmllbGRzRnJvbSk7XG4gIH1cbn07XG5cbnZhciBhZGRQb29saW5nVG8gPSBmdW5jdGlvbiBhZGRQb29saW5nVG8oQ29weUNvbnN0cnVjdG9yLCBwb29sZXIpIHtcbiAgLy8gQ2FzdGluZyBhcyBhbnkgc28gdGhhdCBmbG93IGlnbm9yZXMgdGhlIGFjdHVhbCBpbXBsZW1lbnRhdGlvbiBhbmQgdHJ1c3RzXG4gIC8vIGl0IHRvIG1hdGNoIHRoZSB0eXBlIHdlIGRlY2xhcmVkXG4gIHZhciBOZXdLbGFzcyA9IENvcHlDb25zdHJ1Y3RvcjtcbiAgTmV3S2xhc3MuaW5zdGFuY2VQb29sID0gW107XG4gIE5ld0tsYXNzLmdldFBvb2xlZCA9IHBvb2xlciB8fCBERUZBVUxUX1BPT0xFUjtcbiAgaWYgKCFOZXdLbGFzcy5wb29sU2l6ZSkge1xuICAgIE5ld0tsYXNzLnBvb2xTaXplID0gREVGQVVMVF9QT09MX1NJWkU7XG4gIH1cbiAgTmV3S2xhc3MucmVsZWFzZSA9IHN0YW5kYXJkUmVsZWFzZXI7XG4gIHJldHVybiBOZXdLbGFzcztcbn07XG5cbnZhciBzdGFuZGFyZFJlbGVhc2VyID0gZnVuY3Rpb24gc3RhbmRhcmRSZWxlYXNlcihpbnN0YW5jZSkge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICBpbnZhcmlhbnQoXG4gICAgaW5zdGFuY2UgaW5zdGFuY2VvZiBLbGFzcyxcbiAgICAnVHJ5aW5nIHRvIHJlbGVhc2UgYW4gaW5zdGFuY2UgaW50byBhIHBvb2wgb2YgYSBkaWZmZXJlbnQgdHlwZS4nXG4gICk7XG4gIGluc3RhbmNlLmRlc3RydWN0b3IoKTtcbiAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGggPCBLbGFzcy5wb29sU2l6ZSkge1xuICAgIEtsYXNzLmluc3RhbmNlUG9vbC5wdXNoKGluc3RhbmNlKTtcbiAgfVxufTtcblxudmFyIGZvdXJBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uIGZvdXJBcmd1bWVudFBvb2xlcihhMSwgYTIsIGEzLCBhNCkge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgS2xhc3MoYTEsIGEyLCBhMywgYTQpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBNYXBCb29rS2VlcGluZyhtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgdGhpcy5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gIHRoaXMua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICB0aGlzLmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgdGhpcy5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgdGhpcy5jb3VudCA9IDA7XG59XG5NYXBCb29rS2VlcGluZy5wcm90b3R5cGUuZGVzdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gIHRoaXMua2V5UHJlZml4ID0gbnVsbDtcbiAgdGhpcy5mdW5jID0gbnVsbDtcbiAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgdGhpcy5jb3VudCA9IDA7XG59O1xuYWRkUG9vbGluZ1RvKE1hcEJvb2tLZWVwaW5nLCBmb3VyQXJndW1lbnRQb29sZXIpO1xuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdDtcbiAgdmFyIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeDtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jO1xuICB2YXIgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChcbiAgICAgIG1hcHBlZENoaWxkLFxuICAgICAgcmVzdWx0LFxuICAgICAgY2hpbGRLZXksXG4gICAgICBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnRcbiAgICApO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShcbiAgICAgICAgbWFwcGVkQ2hpbGQsXG4gICAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBrZXlQcmVmaXggK1xuICAgICAgICAgIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSlcbiAgICAgICAgICAgID8gZXNjYXBlVXNlclByb3ZpZGVkS2V5KG1hcHBlZENoaWxkLmtleSkgKyAnLydcbiAgICAgICAgICAgIDogJycpICtcbiAgICAgICAgICBjaGlsZEtleVxuICAgICAgKTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBNYXBCb29rS2VlcGluZy5nZXRQb29sZWQoXG4gICAgYXJyYXksXG4gICAgZXNjYXBlZFByZWZpeCxcbiAgICBmdW5jLFxuICAgIGNvbnRleHRcbiAgKTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgTWFwQm9va0tlZXBpbmcucmVsZWFzZSh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG52YXIgbnVtZXJpY1Byb3BlcnR5UmVnZXggPSAvXlxcZCskLztcblxudmFyIHdhcm5lZEFib3V0TnVtZXJpYyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdEZyYWdtZW50KG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcgfHwgIW9iamVjdCB8fCBBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgZmFsc2UsXG4gICAgICAnUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50IG9ubHkgYWNjZXB0cyBhIHNpbmdsZSBvYmplY3QuIEdvdDogJXMnLFxuICAgICAgb2JqZWN0XG4gICAgKTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChvYmplY3QpKSB7XG4gICAgd2FybmluZyhcbiAgICAgIGZhbHNlLFxuICAgICAgJ1JlYWN0LmFkZG9ucy5jcmVhdGVGcmFnbWVudCBkb2VzIG5vdCBhY2NlcHQgYSBSZWFjdEVsZW1lbnQgJyArXG4gICAgICAgICd3aXRob3V0IGEgd3JhcHBlciBvYmplY3QuJ1xuICAgICk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGludmFyaWFudChcbiAgICBvYmplY3Qubm9kZVR5cGUgIT09IDEsXG4gICAgJ1JlYWN0LmFkZG9ucy5jcmVhdGVGcmFnbWVudCguLi4pOiBFbmNvdW50ZXJlZCBhbiBpbnZhbGlkIGNoaWxkOyBET00gJyArXG4gICAgICAnZWxlbWVudHMgYXJlIG5vdCB2YWxpZCBjaGlsZHJlbiBvZiBSZWFjdCBjb21wb25lbnRzLidcbiAgKTtcblxuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIXdhcm5lZEFib3V0TnVtZXJpYyAmJiBudW1lcmljUHJvcGVydHlSZWdleC50ZXN0KGtleSkpIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAnUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50KC4uLik6IENoaWxkIG9iamVjdHMgc2hvdWxkIGhhdmUgJyArXG4gICAgICAgICAgICAnbm9uLW51bWVyaWMga2V5cyBzbyBvcmRlcmluZyBpcyBwcmVzZXJ2ZWQuJ1xuICAgICAgICApO1xuICAgICAgICB3YXJuZWRBYm91dE51bWVyaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKFxuICAgICAgb2JqZWN0W2tleV0sXG4gICAgICByZXN1bHQsXG4gICAgICBrZXksXG4gICAgICBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnRcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSZWFjdEZyYWdtZW50O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi42LjFcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi42LjMnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcblxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGVuYWJsZUhvb2tzID0gZmFsc2U7XG4vLyBIZWxwcyBpZGVudGlmeSBzaWRlIGVmZmVjdHMgaW4gYmVnaW4tcGhhc2UgbGlmZWN5Y2xlIGhvb2tzIGFuZCBzZXRTdGF0ZSByZWR1Y2VyczpcblxuXG4vLyBJbiBzb21lIGNhc2VzLCBTdHJpY3RNb2RlIHNob3VsZCBhbHNvIGRvdWJsZS1yZW5kZXIgbGlmZWN5Y2xlcy5cbi8vIFRoaXMgY2FuIGJlIGNvbmZ1c2luZyBmb3IgdGVzdHMgdGhvdWdoLFxuLy8gQW5kIGl0IGNhbiBiZSBiYWQgZm9yIHBlcmZvcm1hbmNlIGluIHByb2R1Y3Rpb24uXG4vLyBUaGlzIGZlYXR1cmUgZmxhZyBjYW4gYmUgdXNlZCB0byBjb250cm9sIHRoZSBiZWhhdmlvcjpcblxuXG4vLyBUbyBwcmVzZXJ2ZSB0aGUgXCJQYXVzZSBvbiBjYXVnaHQgZXhjZXB0aW9uc1wiIGJlaGF2aW9yIG9mIHRoZSBkZWJ1Z2dlciwgd2Vcbi8vIHJlcGxheSB0aGUgYmVnaW4gcGhhc2Ugb2YgYSBmYWlsZWQgY29tcG9uZW50IGluc2lkZSBpbnZva2VHdWFyZGVkQ2FsbGJhY2suXG5cblxuLy8gV2FybiBhYm91dCBkZXByZWNhdGVkLCBhc3luYy11bnNhZmUgbGlmZWN5Y2xlczsgcmVsYXRlcyB0byBSRkMgIzY6XG5cblxuLy8gR2F0aGVyIGFkdmFuY2VkIHRpbWluZyBtZXRyaWNzIGZvciBQcm9maWxlciBzdWJ0cmVlcy5cblxuXG4vLyBUcmFjZSB3aGljaCBpbnRlcmFjdGlvbnMgdHJpZ2dlciBlYWNoIGNvbW1pdC5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBSZWFjdCBGaXJlOiBwcmV2ZW50IHRoZSB2YWx1ZSBhbmQgY2hlY2tlZCBhdHRyaWJ1dGVzIGZyb20gc3luY2luZ1xuLy8gd2l0aCB0aGVpciByZWxhdGVkIERPTSBwcm9wZXJ0aWVzXG5cblxuLy8gVGhlc2UgQVBJcyB3aWxsIG5vIGxvbmdlciBiZSBcInVuc3RhYmxlXCIgaW4gdGhlIHVwY29taW5nIDE2LjcgcmVsZWFzZSxcbi8vIENvbnRyb2wgdGhpcyBiZWhhdmlvciB3aXRoIGEgZmxhZyB0byBzdXBwb3J0IDE2LjYgbWlub3IgcmVsZWFzZXMgaW4gdGhlIG1lYW53aGlsZS5cbnZhciBlbmFibGVTdGFibGVDb25jdXJyZW50TW9kZUFQSXMgPSBmYWxzZTtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvciA9IHZvaWQgMDtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLy8gUmVseWluZyBvbiB0aGUgYGludmFyaWFudCgpYCBpbXBsZW1lbnRhdGlvbiBsZXRzIHVzXG4vLyBwcmVzZXJ2ZSB0aGUgZm9ybWF0IGFuZCBwYXJhbXMgaW4gdGhlIHd3dyBidWlsZHMuXG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmdXaXRob3V0U3RhY2soY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgIC8vIENoZWNrIGJlZm9yZSB0aGUgY29uZGl0aW9uIHRvIGNhdGNoIHZpb2xhdGlvbnMgZWFybHkuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhcm5pbmdXaXRob3V0U3RhY2soKSBjdXJyZW50bHkgc3VwcG9ydHMgYXQgbW9zdCA4IGFyZ3VtZW50cy4nKTtcbiAgICB9XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgICAgfSk7XG4gICAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTtcblxuICAgICAgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUuZXJyb3IsIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2skMSA9IHdhcm5pbmdXaXRob3V0U3RhY2s7XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKSA6IHZvaWQgMDtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbi8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsLFxuICBjdXJyZW50RGlzcGF0Y2hlcjogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5cbnZhciBkZXNjcmliZUNvbXBvbmVudEZyYW1lID0gZnVuY3Rpb24gKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gIHZhciBzb3VyY2VJbmZvID0gJyc7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAge1xuICAgICAgLy8gSW4gREVWLCBpbmNsdWRlIGNvZGUgZm9yIGEgY29tbW9uIHNwZWNpYWwgY2FzZTpcbiAgICAgIC8vIHByZWZlciBcImZvbGRlci9pbmRleC5qc1wiIGluc3RlYWQgb2YganVzdCBcImluZGV4LmpzXCIuXG4gICAgICBpZiAoL15pbmRleFxcLi8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChCRUZPUkVfU0xBU0hfUkUpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgcGF0aEJlZm9yZVNsYXNoID0gbWF0Y2hbMV07XG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VJbmZvID0gJyAoYXQgJyArIGZpbGVOYW1lICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKSc7XG4gIH0gZWxzZSBpZiAob3duZXJOYW1lKSB7XG4gICAgc291cmNlSW5mbyA9ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJztcbiAgfVxuICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIHNvdXJjZUluZm87XG59O1xuXG52YXIgUmVzb2x2ZWQgPSAxO1xuXG5cbmZ1bmN0aW9uIHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudChsYXp5Q29tcG9uZW50KSB7XG4gIHJldHVybiBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFJlc29sdmVkID8gbGF6eUNvbXBvbmVudC5fcmVzdWx0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArICcoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdDb25jdXJyZW50TW9kZSc7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuQ29uc3VtZXInO1xuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcbiAgICAgICAgICB2YXIgcmVzb2x2ZWRUaGVuYWJsZSA9IHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCh0aGVuYWJsZSk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcblxudmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG5cbiAgICAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQudHlwZSk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIudHlwZSkpO1xuICAgIH1cblxuICAgIC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdFNoYXJlZEludGVybmFscywge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gd2FybmluZ1dpdGhvdXRTdGFjayQxO1xuXG57XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvd2FybmluZy1hbmQtaW52YXJpYW50LWFyZ3NcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxLmFwcGx5KHVuZGVmaW5lZCwgW2ZhbHNlLCBmb3JtYXQgKyAnJXMnXS5jb25jYXQoYXJncywgW3N0YWNrXSkpO1xuICB9O1xufVxuXG52YXIgd2FybmluZyQxID0gd2FybmluZztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdm9pZCAwO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcblxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTtcblxuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICAgIC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTtcbiAgICAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIHByb3BzID0ge307XG5cbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7XG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgUmVhY3RFbGVtZW50cyBvZiBhIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWZhY3RvcnlcbiAqL1xuXG5cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkICVzLicsIGVsZW1lbnQpIDogdm9pZCAwO1xuXG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHZvaWQgMDtcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuXG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcblxuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cblxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHZvaWQgMDtcbiAgdmFyIG5leHROYW1lID0gdm9pZCAwO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgIWRpZFdhcm5BYm91dE1hcHMgPyB3YXJuaW5nJDEoZmFsc2UsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIHVuc3VwcG9ydGVkIGFuZCB3aWxsIGxpa2VseSB5aWVsZCAnICsgJ3VuZXhwZWN0ZWQgcmVzdWx0cy4gQ29udmVydCBpdCB0byBhIHNlcXVlbmNlL2l0ZXJhYmxlIG9mIGtleWVkICcgKyAnUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcCA9IHZvaWQgMDtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyArIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJywgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nLCBhZGRlbmR1bSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sICcnLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG5cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpIDogdm9pZCAwO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICAhKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSBudWxsIHx8IHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykgOiB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcblxuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG5cbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07XG4gICAgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG4gICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX2N0b3I6IGN0b3IsXG4gICAgLy8gUmVhY3QgdXNlcyB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAhKFxuICAgICAgLy8gRG8gbm90IHdhcm4gZm9yIDAgYXJndW1lbnRzIGJlY2F1c2UgaXQgY291bGQgYmUgZHVlIHRvIHVzYWdlIG9mIHRoZSAnYXJndW1lbnRzJyBvYmplY3RcbiAgICAgIHJlbmRlci5sZW5ndGggPT09IDAgfHwgcmVuZGVyLmxlbmd0aCA9PT0gMikgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJykgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICAhKHJlbmRlci5kZWZhdWx0UHJvcHMgPT0gbnVsbCAmJiByZW5kZXIucHJvcFR5cGVzID09IG51bGwpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50RGlzcGF0Y2hlcjtcbiAgIShkaXNwYXRjaGVyICE9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ0hvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuJykgOiB2b2lkIDA7XG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIG9ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHtcbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDtcbiAgICAgIC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCBvYnNlcnZlZEJpdHMpO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgaW5pdGlhbEFjdGlvbikge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0aWFsQWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbkVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU11dGF0aW9uRWZmZWN0KGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVNZXRob2RzKHJlZiwgY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlTWV0aG9kcyhyZWYsIGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuLyoqXG4gKiBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgcHJvdmlkZXMgYSB3cmFwcGVyIGFyb3VuZCBhIGVsZW1lbnQgZmFjdG9yeVxuICogd2hpY2ggdmFsaWRhdGVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmVcbiAqIHVzZWQgb25seSBpbiBERVYgYW5kIGNvdWxkIGJlIHJlcGxhY2VkIGJ5IGEgc3RhdGljIHR5cGUgY2hlY2tlciBmb3IgbGFuZ3VhZ2VzXG4gKiB0aGF0IHN1cHBvcnQgaXQuXG4gKi9cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRQcm9wcy5fX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHNvdXJjZSA9IGVsZW1lbnRQcm9wcy5fX3NvdXJjZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gJ1xcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPCcgKyBwYXJlbnROYW1lICsgJz4uJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG5cbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7XG5cbiAgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9ICcgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gJyArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyAnLic7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0VhY2ggY2hpbGQgaW4gYW4gYXJyYXkgb3IgaXRlcmF0b3Igc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG4gIH1cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIHZhciBuYW1lID0gdm9pZCAwLFxuICAgICAgcHJvcFR5cGVzID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBDbGFzcyBvciBmdW5jdGlvbiBjb21wb25lbnRcbiAgICBuYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XG4gICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSkge1xuICAgIC8vIEZvcndhcmRSZWZcbiAgICB2YXIgZnVuY3Rpb25OYW1lID0gdHlwZS5yZW5kZXIuZGlzcGxheU5hbWUgfHwgdHlwZS5yZW5kZXIubmFtZSB8fCAnJztcbiAgICBuYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/ICdGb3J3YXJkUmVmKCcgKyBmdW5jdGlvbk5hbWUgKyAnKScgOiAnRm9yd2FyZFJlZicpO1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpO1xuXG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJzwnICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgJyAvPic7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgY3JlYXRlUmVmOiBjcmVhdGVSZWYsXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIGZvcndhcmRSZWY6IGZvcndhcmRSZWYsXG4gIGxhenk6IGxhenksXG4gIG1lbW86IG1lbW8sXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIFN1c3BlbnNlOiBSRUFDVF9TVVNQRU5TRV9UWVBFLFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uLFxuICBpc1ZhbGlkRWxlbWVudDogaXNWYWxpZEVsZW1lbnQsXG5cbiAgdmVyc2lvbjogUmVhY3RWZXJzaW9uLFxuXG4gIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOiBSZWFjdFNoYXJlZEludGVybmFsc1xufTtcblxuaWYgKGVuYWJsZVN0YWJsZUNvbmN1cnJlbnRNb2RlQVBJcykge1xuICBSZWFjdC5Db25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xuICBSZWFjdC5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59IGVsc2Uge1xuICBSZWFjdC51bnN0YWJsZV9Db25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xuICBSZWFjdC51bnN0YWJsZV9Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5cbmlmIChlbmFibGVIb29rcykge1xuICBSZWFjdC51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuICBSZWFjdC51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbiAgUmVhY3QudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuICBSZWFjdC51c2VJbXBlcmF0aXZlTWV0aG9kcyA9IHVzZUltcGVyYXRpdmVNZXRob2RzO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG4gIFJlYWN0LnVzZU1lbW8gPSB1c2VNZW1vO1xuICBSZWFjdC51c2VNdXRhdGlvbkVmZmVjdCA9IHVzZU11dGF0aW9uRWZmZWN0O1xuICBSZWFjdC51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbiAgUmVhY3QudXNlUmVmID0gdXNlUmVmO1xuICBSZWFjdC51c2VTdGF0ZSA9IHVzZVN0YXRlO1xufVxuXG5cblxudmFyIFJlYWN0JDIgPSBPYmplY3QuZnJlZXplKHtcblx0ZGVmYXVsdDogUmVhY3Rcbn0pO1xuXG52YXIgUmVhY3QkMyA9ICggUmVhY3QkMiAmJiBSZWFjdCApIHx8IFJlYWN0JDI7XG5cbi8vIFRPRE86IGRlY2lkZSBvbiB0aGUgdG9wLWxldmVsIGV4cG9ydCBmb3JtLlxuLy8gVGhpcyBpcyBoYWNreSBidXQgbWFrZXMgaXQgd29yayB3aXRoIGJvdGggUm9sbHVwIGFuZCBKZXN0LlxudmFyIHJlYWN0ID0gUmVhY3QkMy5kZWZhdWx0IHx8IFJlYWN0JDM7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3Q7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=