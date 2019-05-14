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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/examiner/jsx/examinerIndex.js");
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

/***/ "./jsx/Modal.js":
/*!**********************!*\
  !*** ./jsx/Modal.js ***!
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

var _sweetalert = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file contains the React Component for a Modal Window.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Henri Rabalais
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Modal Component.
 * React wrapper for a Modal Window. Allows to dynamically toggle a Modal
 * window.
 *
 * ================================================
 * Usage:
 * - Wrap the contents to be displayed by the Modal Window by the
 *   Modal Component.
 * - Use the 'title' prop to set a title for the Modal Component.
 * - Use the 'onSubmit' prop to set a submission *promise* object for the
 *   Modal's contents.
 * - Use the 'onClose' prop to set a function that triggers upon Modal closure.
 * - Use the 'throwWarning' prop to throw a warning upon closure of the
 *   Modal Window.
 * =================================================
 *
 */
var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'handleClose',
    value: function handleClose() {
      var _this2 = this;

      if (this.props.throwWarning) {
        (0, _sweetalert2.default)({
          title: 'Are You Sure?',
          text: 'Leaving the form will result in the loss of any information ' + 'entered.',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Proceed',
          cancelButtonText: 'Cancel'
        }).then(function (result) {
          return result.value && _this2.props.onClose();
        });
      } else {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          show = _props.show,
          children = _props.children,
          onSubmit = _props.onSubmit,
          title = _props.title;


      var headerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '40px',
        borderTopRightRadius: '10',
        fontSize: 24,
        padding: 35,
        borderBottom: '1px solid #DDDDDD'
      };

      var glyphStyle = {
        marginLeft: 'auto',
        cursor: 'pointer'
      };

      var bodyStyle = {
        padding: 15
      };

      var modalContainer = {
        display: 'block',
        position: 'fixed',
        zIndex: 9999,
        paddingTop: '100px',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.7)',
        visibility: show ? 'visible' : 'hidden'
      };

      var modalContent = {
        opacity: show ? 1 : 0,
        top: show ? 0 : '-300px',
        position: 'relative',
        backgroundColor: '#fefefe',
        borderRadius: '7px',
        margin: 'auto',
        padding: 0,
        border: '1px solid #888',
        width: '700px',
        boxShadow: '0 4px 8px 0 rbga(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        transition: 'top 0.4s, opacity 0.4s'
      };

      var renderChildren = function renderChildren() {
        return show && children;
      };

      var footerStyle = {
        borderTop: '1px solid #DDDDDD',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '40px',
        padding: '35px 35px 20px 35px'
      };

      var submitStyle = {
        marginLeft: 'auto',
        marginRight: '20px'
      };

      var submitButton = function submitButton() {
        if (onSubmit) {
          return _react2.default.createElement(
            'div',
            { style: submitStyle },
            _react2.default.createElement(ButtonElement, {
              label: 'Submit',
              onUserInput: function onUserInput() {
                return onSubmit().then(function () {
                  return _this3.props.onClose();
                });
              }
            })
          );
        }
      };

      return _react2.default.createElement(
        'div',
        { style: modalContainer, onClick: this.handleClose },
        _react2.default.createElement(
          'div',
          {
            style: modalContent,
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          },
          _react2.default.createElement(
            'div',
            { style: headerStyle },
            title,
            _react2.default.createElement(
              'span',
              { style: glyphStyle, onClick: this.handleClose },
              '\xD7'
            )
          ),
          _react2.default.createElement(
            'div',
            { style: bodyStyle },
            renderChildren()
          ),
          _react2.default.createElement(
            'div',
            { style: footerStyle },
            submitButton()
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  title: _propTypes2.default.string,
  onSubmit: _propTypes2.default.object,
  onClose: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool.isRequired,
  throwWarning: _propTypes2.default.bool
};

Modal.defaultProps = {
  throwWarning: false
};

exports.default = Modal;

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

/***/ "./modules/examiner/jsx/examinerIndex.js":
/*!***********************************************!*\
  !*** ./modules/examiner/jsx/examinerIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sweetalert = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _Modal = __webpack_require__(/*! Modal */ "./jsx/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _Loader = __webpack_require__(/*! Loader */ "./jsx/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _FilterableDataTable = __webpack_require__(/*! FilterableDataTable */ "./jsx/FilterableDataTable.js");

var _FilterableDataTable2 = _interopRequireDefault(_FilterableDataTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Examiner Module Page.
 *
 * Serves as an entry-point to the module, rendering the whole react
 * component page on load.
 *
 * Renders Examiner main page consisting of FilterableDataTable and FormElement.
 *
 * @author Victoria Foing, Zaliqa Rosli
 * @version 1.0.0
 *
 */
var ExaminerIndex = function (_Component) {
  _inherits(ExaminerIndex, _Component);

  function ExaminerIndex(props) {
    _classCallCheck(this, ExaminerIndex);

    var _this = _possibleConstructorReturn(this, (ExaminerIndex.__proto__ || Object.getPrototypeOf(ExaminerIndex)).call(this, props));

    _this.state = {
      data: {},
      error: false,
      isLoaded: false,
      formData: {
        addName: null,
        addRadiologist: false,
        addSite: null
      },
      showModal: false
    };

    _this.fetchData = _this.fetchData.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.setFormData = _this.setFormData.bind(_this);
    _this.formatColumn = _this.formatColumn.bind(_this);
    _this.renderAddExaminerForm = _this.renderAddExaminerForm.bind(_this);
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(ExaminerIndex, [{
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
     * Store the value of the element in this.state.formData
     *
     * @param {string} formElement - name of the form element
     * @param {string} value - value of the form element
     */

  }, {
    key: 'setFormData',
    value: function setFormData(formElement, value) {
      var formData = this.state.formData;
      formData[formElement] = value;
      this.setState({
        formData: formData
      });
    }

    /**
     * Handles the submission of the Add Examiner form
     *
     * @param {event} e - event of the form
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this4 = this;

      var formData = this.state.formData;
      var formObject = new FormData();
      for (var key in formData) {
        if (formData[key] !== '') {
          formObject.append(key, formData[key]);
        }
      }
      formObject.append('fire_away', 'Add');

      fetch(this.props.submitURL, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: formObject
      }).then(function (resp) {
        if (resp.ok && resp.status === 200) {
          (0, _sweetalert2.default)('Success!', 'Examiner added.', 'success').then(function (result) {
            if (result.value) {
              _this4.fetchData();
            }
          });
        } else {
          resp.text().then(function (message) {
            (0, _sweetalert2.default)('Error!', message, 'error');
          });
        }
      }).catch(function (error) {
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
      var result = _react2.default.createElement(
        'td',
        null,
        cell
      );

      switch (column) {
        case 'Examiner':
          var url = loris.BaseURL + '/examiner/editExaminer/?identifier=' + row.ID;
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
        case 'Radiologist':
          if (row.Radiologist === '1') {
            result = _react2.default.createElement(
              'td',
              null,
              'Yes'
            );
          } else if (row.Radiologist === '0') {
            result = _react2.default.createElement(
              'td',
              null,
              'No'
            );
          }
          break;
        case 'Certification':
          if (row.Certification === null) {
            result = _react2.default.createElement(
              'td',
              null,
              'None'
            );
          }
          break;
      }
      return result;
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      this.setState({ showModal: true });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ showModal: false });
    }
  }, {
    key: 'renderAddExaminerForm',
    value: function renderAddExaminerForm() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          title: 'Add Examiner',
          onClose: this.closeModal,
          show: this.state.showModal
        },
        _react2.default.createElement(
          FormElement,
          {
            Module: 'examiner',
            name: 'addExaminer',
            id: 'addExaminerForm',
            onSubmit: this.handleSubmit,
            method: 'POST'
          },
          _react2.default.createElement(TextboxElement, {
            name: 'addName',
            label: 'Name',
            value: this.state.formData.addName,
            required: true,
            onUserInput: this.setFormData
          }),
          _react2.default.createElement(SelectElement, {
            name: 'addSite',
            options: this.state.data.fieldOptions.sites,
            label: 'Site',
            value: this.state.formData.addSite,
            required: true,
            onUserInput: this.setFormData
          }),
          _react2.default.createElement(CheckboxElement, {
            name: 'addRadiologist',
            label: 'Radiologist',
            id: 'checkRadiologist',
            value: this.state.formData.addRadiologist,
            onUserInput: this.setFormData
          }),
          _react2.default.createElement(ButtonElement, {
            name: 'fire_away',
            label: _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' }),
              ' Add'
            ),
            type: 'submit',
            buttonClass: 'btn btn-sm btn-success'
          })
        )
      );
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
       * queried columns in _setupVariables() in examiner.class.inc
       */
      var options = this.state.data.fieldOptions;
      var fields = [{ label: 'Examiner', show: true, filter: {
          name: 'examiner',
          type: 'text'
        } }, { label: 'ID', show: false }, { label: 'Site', show: true, filter: {
          name: 'site',
          type: 'select',
          options: options.sites
        } }, { label: 'Radiologist', show: true, filter: {
          name: 'radiologist',
          type: 'select',
          options: options.radiologists
        } }, { label: 'Certification', show: this.state.data.useCertification }];
      var actions = [{ name: 'addExaminer', label: 'Add Examiner', action: this.openModal }];

      return _react2.default.createElement(
        'div',
        null,
        this.renderAddExaminerForm(),
        _react2.default.createElement(_FilterableDataTable2.default, {
          name: 'examiner',
          title: 'Examiner',
          data: this.state.data.Data,
          fields: fields,
          getFormattedCell: this.formatColumn,
          actions: actions
        })
      );
    }
  }]);

  return ExaminerIndex;
}(_react.Component);

ExaminerIndex.propTypes = {
  dataURL: _propTypes2.default.string.isRequired,
  hasPermission: _propTypes2.default.func.isRequired
};

window.addEventListener('load', function () {
  ReactDOM.render(_react2.default.createElement(ExaminerIndex, {
    dataURL: loris.BaseURL + '/examiner/?format=json',
    submitURL: loris.BaseURL + '/examiner/',
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


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v7.29.2
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isThenable = function isThenable(arg) {
  return arg && _typeof(arg) === 'object' && typeof arg.then === 'function';
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationMessage) {
      return validationMessage;
    });
  };
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};
/* @deprecated */

/* istanbul ignore next */

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead");
  return elementByClass(swalClasses.actions);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses.progresssteps, "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">?</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">!</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">i</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">\xD7</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
/*
 * Add modal + backdrop to DOM
 */

var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();

  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
  }
  /* istanbul ignore if */


  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);
  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea); // a11y

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  } // RTL


  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  }

  if (_typeof(param) === 'object') {
    target.innerHTML = '';

    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  }

  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };

  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  } // Cancel button


  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  } // Confirm button


  if (params.showConfirmButton) {
    confirmButton.style.removeProperty('display');
  } else {
    hide(confirmButton);
  } // Edit text on confirm and cancel buttons


  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText; // ARIA labels for confirm and cancel buttons

  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel); // Add buttons custom classes

  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass); // Buttons styling

  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

var renderContent = function renderContent(params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }
};

var renderIcon = function renderIcon(params) {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }

  if (params.type) {
    if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
      var icon = Swal.getPopup().querySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
      show(icon); // Animate icon

      if (params.animation) {
        addClass(icon, "swal2-animate-".concat(params.type, "-icon"));
      }
    } else {
      error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
    }
  }
};

var renderImage = function renderImage(params) {
  var image = getImage();

  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;

    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }
};

var renderProgressSteps = function renderProgressSteps(params) {
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);

  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;

      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }

      progressStepsContainer.appendChild(circle);

      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);

        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }

        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }
};

var renderTitle = function renderTitle(params) {
  var title = getTitle();

  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    parseHtmlToContainer(params.title, title);
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};
/* istanbul ignore next */

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || el.contains(getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
        globalState.previousActiveElement.focus();
        globalState.previousActiveElement = null;
      } else if (document.body) {
        document.body.focus();
      }

      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/*
 * Global function to close sweetAlert
 */

var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();

  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement().then(function () {
        return triggerOnAfterClose(onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    } else {
      triggerOnAfterClose(onAfterClose);
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }

    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }
  }; // If animation is supported, animate


  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);

      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

var triggerOnAfterClose = function triggerOnAfterClose(onAfterClose) {
  if (onAfterClose !== null && typeof onAfterClose === 'function') {
    setTimeout(function () {
      onAfterClose();
    });
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */

var isVisible$1 = function isVisible() {
  return !!getPopup();
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword(ParentSwal) {
  var NoNewKeywordSwal = function NoNewKeywordSwal() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!(this instanceof NoNewKeywordSwal)) {
      return _construct(NoNewKeywordSwal, args);
    }

    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
  };

  NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), {
    constructor: NoNewKeywordSwal
  });

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
  } else {
    // Android 4.4

    /* istanbul ignore next */
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal;
  }

  return NoNewKeywordSwal;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};
var deprecatedParams = ['useRejections', 'expectRejections', 'extraParams'];
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */

var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }

    if (params.toast && toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }

    if (isDeprecatedParameter(param)) {
      warnOnce("The parameter \"".concat(param, "\" is deprecated and will be removed in the next major release."));
    }
  }
};

var deprecationWarning = "\"setDefaults\" & \"resetDefaults\" methods are deprecated in favor of \"mixin\" method and will be removed in the next major release. For new projects, use \"mixin\". For past projects already using \"setDefaults\", support will be provided through an additional package.";
var defaults = {};
function withGlobalDefaults(ParentSwal) {
  var SwalWithGlobalDefaults =
  /*#__PURE__*/
  function (_ParentSwal) {
    _inherits(SwalWithGlobalDefaults, _ParentSwal);

    function SwalWithGlobalDefaults() {
      _classCallCheck(this, SwalWithGlobalDefaults);

      return _possibleConstructorReturn(this, _getPrototypeOf(SwalWithGlobalDefaults).apply(this, arguments));
    }

    _createClass(SwalWithGlobalDefaults, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(SwalWithGlobalDefaults.prototype), "_main", this).call(this, _extends({}, defaults, params));
      }
    }], [{
      key: "setDefaults",
      value: function setDefaults(params) {
        warnOnce(deprecationWarning);

        if (!params || _typeof(params) !== 'object') {
          throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
        }

        showWarningsForParams(params); // assign valid params from `params` to `defaults`

        Object.keys(params).forEach(function (param) {
          if (ParentSwal.isValidParameter(param)) {
            defaults[param] = params[param];
          }
        });
      }
    }, {
      key: "resetDefaults",
      value: function resetDefaults() {
        warnOnce(deprecationWarning);
        defaults = {};
      }
    }]);

    return SwalWithGlobalDefaults;
  }(ParentSwal); // Set default params if `window._swalDefaults` is an object


  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
  }

  return SwalWithGlobalDefaults;
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */

function mixin(mixinParams) {
  return withNoNewKeyword(
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this));
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;

  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetQueue();
        resolve({
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * If `timer` parameter is set, returns number os milliseconds of timer remained.
 * Otherwise, returns null.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft
});

// https://github.com/Riim/symbol-polyfill/blob/master/index.js

/* istanbul ignore next */
var _Symbol = typeof Symbol === 'function' ? Symbol : function () {
  var idCounter = 0;

  function _Symbol(key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
  }

  _Symbol.iterator = _Symbol('Symbol.iterator');
  return _Symbol;
}();

// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
// http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
/* istanbul ignore next */

var WeakMap$1 = typeof WeakMap === 'function' ? WeakMap : function (s, dP, hOP) {
  function WeakMap() {
    dP(this, s, {
      value: _Symbol('WeakMap')
    });
  }

  WeakMap.prototype = {
    'delete': function del(o) {
      delete o[this[s]];
    },
    get: function get(o) {
      return o[this[s]];
    },
    has: function has(o) {
      return hOP.call(o, this[s]);
    },
    set: function set(o, v) {
      dP(o, this[s], {
        configurable: true,
        value: v
      });
    }
  };
  return WeakMap;
}(_Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap$1(),
  innerParams: new WeakMap$1(),
  domCache: new WeakMap$1()
};

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;

  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);

    case 'checkbox':
      return domCache.popup.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return domCache.popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || domCache.popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return domCache.popup.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}
function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}
function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}
function enableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}
function disableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

function showValidationMessage(error$$1) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error$$1;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
} // @deprecated

/* istanbul ignore next */

function resetValidationError() {
  warnOnce("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead");
  resetValidationMessage.bind(this)();
} // @deprecated

/* istanbul ignore next */

function showValidationError(error$$1) {
  warnOnce("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead");
  showValidationMessage.bind(this)(error$$1);
}

function getProgressSteps$1() {
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  privateProps.innerParams.set(this, updatedParams);
  renderProgressSteps(updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer = function Timer(callback, delay) {
  _classCallCheck(this, Timer);

  var id, started, running;
  var remaining = delay;

  this.start = function () {
    running = true;
    started = new Date();
    id = setTimeout(callback, remaining);
  };

  this.stop = function () {
    running = false;
    clearTimeout(id);
    remaining -= new Date() - started;
  };

  this.getTimerLeft = function () {
    if (running) {
      this.stop();
      this.start();
    }

    return remaining;
  };

  this.start();
};

var defaultInputValidators = {
  email: function email(string, extraParams) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address');
  },
  url: function url(string, extraParams) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL');
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */

function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  } // params.extraParams is @deprecated


  if (params.validationMessage) {
    if (_typeof(params.extraParams) !== 'object') {
      params.extraParams = {};
    }

    params.extraParams.validationMessage = params.validationMessage;
  } // Determine if the custom target element is valid


  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  } // Animation


  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  var popup;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target; // If the model target has changed, refresh the popup

  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  } // Set popup width


  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  } // Set popup padding


  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  } // Set popup background


  if (params.background) {
    popup.style.background = params.background;
  }

  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var closeButton = getCloseButton();
  var footer = getFooter(); // Title

  renderTitle(params); // Content

  renderContent(params); // Backdrop

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  } // Position


  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  } // Grow


  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  } // Close button


  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom Class


  if (params.customClass) {
    addClass(popup, params.customClass);
  } // Progress steps


  renderProgressSteps(params); // Icon

  renderIcon(params); // Image

  renderImage(params); // Actions (buttons)

  renderActions(params); // Footer

  parseHtmlToContainer(params.footer, footer); // CSS animation

  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  } // showLoaderOnConfirm && preConfirm


  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */

var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }

  show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  container.style.overflowY = 'hidden';

  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    fixScrollbar();
    iOSfix();
    IEfix();
    setAriaHidden(); // sweetalert2/issues/1247

    setTimeout(function () {
      container.scrollTop = 0;
    });
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);
  var constructor = this.constructor;
  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method

      if (innerParams.useRejections) {
        resolve(value);
      } else {
        resolve({
          value: value
        });
      }
    };

    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);

      if (innerParams.useRejections) {
        reject(dismiss);
      } else {
        resolve({
          dismiss: dismiss
        });
      }
    };

    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      reject(error$$1);
    }; // Close on timer


    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    var getInputValue = function getInputValue() {
      var input = _this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();

        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationMessage();

        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.extraParams);
        });

        if (innerParams.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationMessage) {
            _this.hideLoading();

            if (validationMessage) {
              _this.showValidationMessage(validationMessage);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationMessage) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    var onButtonEvent = function onButtonEvent(e) {
      var target = e.target;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();

            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();

                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.extraParams);
                });

                if (innerParams.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();

                    _this.enableInput();

                    confirm(inputValue);
                  }, function (validationMessage) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationMessage) {
                      _this.showValidationMessage(validationMessage);
                    }
                  });
                } else {
                  validationPromise.then(function (validationMessage) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationMessage) {
                      _this.showValidationMessage(validationMessage);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else if (!_this.getInput().checkValidity()) {
                _this.enableButtons();

                _this.showValidationMessage(innerParams.validationMessage);
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();

            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function () {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        var targetElement = e.target;
        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1;

        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        e.preventDefault();
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();

    _this.hideLoading();

    _this.resetValidationMessage();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    } // inputs


    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

    var setInputPlaceholder = function setInputPlaceholder(input) {
      if (!input.placeholder || innerParams.inputPlaceholder) {
        input.placeholder = innerParams.inputPlaceholder;
      }
    };

    var input;

    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]); // set attributes

      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;

            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }

        for (var attr in innerParams.inputAttributes) {
          // Do not set a placeholder for <input type="range">
          // it'll crash Edge, #1298
          if (inputTypes[_i3] === 'range' && attr === 'placeholder') {
            continue;
          }

          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      } // set class


      inputContainer.className = inputClass;

      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions;

    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        {
          input = getChildByClass(domCache.content, swalClasses.input);

          if (typeof innerParams.inputValue === 'string' || typeof innerParams.inputValue === 'number') {
            input.value = innerParams.inputValue;
          } else {
            warn("Unexpected type of inputValue! Expected \"string\" or \"number\", got \"".concat(_typeof(innerParams.inputValue), "\""));
          }

          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'file':
        {
          input = getChildByClass(domCache.content, swalClasses.file);
          setInputPlaceholder(input);
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'range':
        {
          var range = getChildByClass(domCache.content, swalClasses.range);
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = innerParams.inputValue;
          rangeInput.type = innerParams.input;
          rangeOutput.value = innerParams.inputValue;
          show(range);
          break;
        }

      case 'select':
        {
          var select = getChildByClass(domCache.content, swalClasses.select);
          select.innerHTML = '';

          if (innerParams.inputPlaceholder) {
            var placeholder = document.createElement('option');
            placeholder.innerHTML = innerParams.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1];
              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;

              if (innerParams.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }

              select.appendChild(option);
            });
            show(select);
            select.focus();
          };

          break;
        }

      case 'radio':
        {
          var radio = getChildByClass(domCache.content, swalClasses.radio);
          radio.innerHTML = '';

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (innerParams.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              label.innerHTML = radioLabel;
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            show(radio);
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          };

          break;
        }

      case 'checkbox':
        {
          var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);

          var checkboxInput = _this.getInput('checkbox');

          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = swalClasses.checkbox;
          checkboxInput.checked = Boolean(innerParams.inputValue);
          var label = checkbox.querySelector('span');
          label.innerHTML = innerParams.inputPlaceholder;
          show(checkbox);
          break;
        }

      case 'textarea':
        {
          var textarea = getChildByClass(domCache.content, swalClasses.textarea);
          textarea.value = innerParams.inputValue;
          setInputPlaceholder(textarea);
          show(textarea);
          break;
        }

      case null:
        {
          break;
        }

      default:
        error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(innerParams.input, "\""));
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };

      if (isThenable(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();

          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(innerParams.inputOptions)));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isThenable(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        input.focus();

        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        input.focus();

        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage,
	resetValidationError: resetValidationError,
	showValidationError: showValidationError,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    error('At least 1 argument is expected!');
    return false;
  }

  currentInstance = this;
  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled, onRejected);
};

SweetAlert.prototype.catch = function (onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.catch(onRejected);
};

SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
/* istanbul ignore next */

SweetAlert.noop = function () {};

var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.Sweetalert2.version = '7.29.2';  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{position:fixed;background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanN4L0RhdGFUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9qc3gvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2pzeC9GaWx0ZXJhYmxlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2pzeC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanN4L01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzeC9QYWdpbmF0aW9uTGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vanN4L1BhbmVsLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZXhhbWluZXIvanN4L2V4YW1pbmVySW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jcmVhdGUtZnJhZ21lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIl0sIm5hbWVzIjpbIkRhdGFUYWJsZSIsInByb3BzIiwic3RhdGUiLCJQYWdlTnVtYmVyIiwiU29ydENvbHVtbiIsIlNvcnRPcmRlciIsIlJvd3NQZXJQYWdlIiwiSGlkZSIsImNoYW5nZVBhZ2UiLCJiaW5kIiwic2V0U29ydENvbHVtbiIsImNoYW5nZVJvd3NQZXJQYWdlIiwiZG93bmxvYWRDU1YiLCJjb3VudEZpbHRlcmVkUm93cyIsImdldFNvcnRlZFJvd3MiLCJoYXNGaWx0ZXJLZXl3b3JkIiwicmVuZGVyQWN0aW9ucyIsImpRdWVyeSIsImZuIiwiRHluYW1pY1RhYmxlIiwiZnJlZXplQ29sdW1uIiwiJCIsImRlZmF1bHRDb2x1bW4iLCJmaW5kIiwiaGlkZSIsIm1vZHVsZVByZWZzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvcmlzIiwiVGVzdE5hbWUiLCJ1bmRlZmluZWQiLCJyb3dzUGVyUGFnZSIsInNldFN0YXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25Tb3J0IiwiaW5kZXgiLCJoZWFkZXJMaXN0IiwiZmllbGRzIiwibWFwIiwiZmllbGQiLCJsYWJlbCIsImRhdGEiLCJwYWdlTm8iLCJjb2xOdW1iZXIiLCJlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY3N2RGF0YSIsImNzdndvcmtlciIsIldvcmtlciIsIkJhc2VVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YVVSTCIsImRhdGFEYXRlIiwibGluayIsImNtZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm1lc3NhZ2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsInR5cGUiLCJocmVmIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInBvc3RNZXNzYWdlIiwiaGVhZGVycyIsImlkZW50aWZpZXJzIiwiUm93TmFtZU1hcCIsInVzZUtleXdvcmQiLCJmaWx0ZXJNYXRjaENvdW50IiwiZmlsdGVyVmFsdWVzQ291bnQiLCJmaWx0ZXIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidGFibGVEYXRhIiwiZmllbGREYXRhIiwia2V5d29yZCIsImkiLCJoZWFkZXJDb3VudCIsImtleXdvcmRNYXRjaCIsImoiLCJuYW1lIiwiaGFzRmlsdGVycyIsImlzU3RyaW5nIiwiU3RyaW5nIiwiaXNOdW1iZXIiLCJpc05hTiIsIk51bWJlciIsInRvTG93ZXJDYXNlIiwicHVzaCIsIlJvd0lkeCIsIlZhbHVlIiwiQ29udGVudCIsInNvcnQiLCJhIiwiYiIsImZpbHRlckRhdGEiLCJleGFjdE1hdGNoIiwicmVzdWx0Iiwic2VhcmNoS2V5Iiwic2VhcmNoU3RyaW5nIiwiaW50RGF0YSIsInBhcnNlSW50Iiwic2VhcmNoQXJyYXkiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJtYXRjaCIsImFjdGlvbnMiLCJhY3Rpb24iLCJrZXkiLCJSb3dOdW1MYWJlbCIsInNob3ciLCJjb2xJbmRleCIsInJvd3MiLCJjdXJSb3ciLCJtYXRjaGVzRm91bmQiLCJmaWx0ZXJlZFJvd3MiLCJjdXJyZW50UGFnZVJvdyIsImZpbHRlcmVkRGF0YSIsImZpbHRlckxlbmd0aCIsImdldEZvcm1hdHRlZENlbGwiLCJyb3ciLCJmb3JFYWNoIiwiayIsInJvd0luZGV4IiwiUm93c1BlclBhZ2VEcm9wZG93biIsImhlYWRlciIsIm1hcmdpblRvcCIsImZvb3RlciIsIm1hcmdpbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJGaWx0ZXIiLCJvbkZpZWxkVXBkYXRlIiwicmVuZGVyRmlsdGVyRmllbGRzIiwiaWQiLCJ1cGRhdGVGaWx0ZXIiLCJyZWR1Y2UiLCJlbGVtZW50Iiwib3B0aW9ucyIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwib25Vc2VySW5wdXQiLCJjb2x1bW5zIiwidGl0bGUiLCJjbGVhckZpbHRlciIsImNvbnNvbGUiLCJ3YXJuIiwiRmlsdGVyYWJsZURhdGFUYWJsZSIsIm51bWJlciIsIkxvYWRlciIsIndpZHRoIiwic2l6ZSIsImhlaWdodCIsIk1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJ0aHJvd1dhcm5pbmciLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJvblN1Ym1pdCIsImhlYWRlclN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJnbHlwaFN0eWxlIiwibWFyZ2luTGVmdCIsImN1cnNvciIsImJvZHlTdHlsZSIsIm1vZGFsQ29udGFpbmVyIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJwYWRkaW5nVG9wIiwibGVmdCIsInRvcCIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwidmlzaWJpbGl0eSIsIm1vZGFsQ29udGVudCIsIm9wYWNpdHkiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwicmVuZGVyQ2hpbGRyZW4iLCJmb290ZXJTdHlsZSIsImJvcmRlclRvcCIsInN1Ym1pdFN0eWxlIiwibWFyZ2luUmlnaHQiLCJzdWJtaXRCdXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJib29sIiwiUGFnaW5hdGlvbkxpbmtzIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTGlua3MiLCJjbGFzc0xpc3QiLCJsYXN0UGFnZSIsIk1hdGgiLCJjZWlsIiwiVG90YWwiLCJzdGFydFBhZ2UiLCJtYXgiLCJBY3RpdmUiLCJsYXN0U2hvd25QYWdlIiwibWluIiwidG9TdHJpbmciLCJSUGFnaW5hdGlvbkxpbmtzIiwiY3JlYXRlRmFjdG9yeSIsIlBhbmVsIiwiY29sbGFwc2VkIiwiaW5pdENvbGxhcHNlZCIsInBhbmVsQ2xhc3MiLCJ0b2dnbGVDb2xsYXBzZWQiLCJnbHlwaENsYXNzIiwicGFuZWxIZWFkaW5nIiwiRXhhbWluZXJJbmRleCIsImVycm9yIiwiaXNMb2FkZWQiLCJmb3JtRGF0YSIsImFkZE5hbWUiLCJhZGRSYWRpb2xvZ2lzdCIsImFkZFNpdGUiLCJzaG93TW9kYWwiLCJmZXRjaERhdGEiLCJoYW5kbGVTdWJtaXQiLCJzZXRGb3JtRGF0YSIsImZvcm1hdENvbHVtbiIsInJlbmRlckFkZEV4YW1pbmVyRm9ybSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwicmVzcCIsImpzb24iLCJjYXRjaCIsImZvcm1FbGVtZW50IiwiZm9ybU9iamVjdCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic3VibWl0VVJMIiwibWV0aG9kIiwiY2FjaGUiLCJvayIsInN0YXR1cyIsImNvbHVtbiIsImNlbGwiLCJ1cmwiLCJJRCIsIlJhZGlvbG9naXN0IiwiQ2VydGlmaWNhdGlvbiIsImZpZWxkT3B0aW9ucyIsInNpdGVzIiwicmFkaW9sb2dpc3RzIiwidXNlQ2VydGlmaWNhdGlvbiIsIkRhdGEiLCJoYXNQZXJtaXNzaW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJ1c2VySGFzUGVybWlzc2lvbiIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3pWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyw0REFBZTtBQUNyQyxxQkFBcUIsbUJBQU8sQ0FBQyw4RUFBMkI7O0FBRXhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBLGtE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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUMveURhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLGlGQUE0QjtBQUN2RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsS0FBNEQ7QUFDN0QsQ0FBQyxTQUNnQztBQUNqQyxDQUFDLHFCQUFxQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTs7QUFFaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdIO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBLHdFQUF3RTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRTs7QUFFdEU7QUFDQSwrQ0FBK0M7QUFDL0MsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FB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QUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNB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LHlCQUF5QjtBQUM5QztBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FB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OENBQThDLHFEQUFxRCx1REFBdUQsK0NBQStDLCtEQUErRCxtRUFBbUUsMkRBQTJELDBCQUEwQiwrQ0FBK0MsdUNBQXVDLHdDQUF3QyxpREFBaUQseUNBQXlDLHdDQUF3QyxHQUFHLDRCQUE0QixvQkFBb0IsS0FBSyxpQ0FBaUMsMEJBQTBCLGdDQUFnQyxHQUFHLDRCQUE0QixvQkFBb0IsS0FBSyxpQ0FBaUMsMEJBQTBCLGFBQWEsaUVBQWlFLDRCQUE0QixvRkFBb0YsYUFBYSxrRkFBa0YsNEJBQTRCLEciLCJmaWxlIjoiLi9tb2R1bGVzL2V4YW1pbmVyL2pzL2V4YW1pbmVySW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vZHVsZXMvZXhhbWluZXIvanN4L2V4YW1pbmVySW5kZXguanNcIik7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBSZWFjdCBjb21wb25lbnQgZm9yIERhdGEgVGFibGVcbiAqXG4gKiBAYXV0aG9yIExvcmlzIFRlYW1cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBQYWdpbmF0aW9uTGlua3MgZnJvbSAnanN4L1BhZ2luYXRpb25MaW5rcyc7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSAncmVhY3QtYWRkb25zLWNyZWF0ZS1mcmFnbWVudCc7XG5cbi8qKlxuICogRGF0YSBUYWJsZSBjb21wb25lbnRcbiAqIERpc3BsYXlzIGEgc2V0IG9mIGRhdGEgdGhhdCBpcyByZWNlaXZlcyB2aWEgcHJvcHMuXG4gKi9cbmNsYXNzIERhdGFUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIFBhZ2VOdW1iZXI6IDEsXG4gICAgICBTb3J0Q29sdW1uOiAtMSxcbiAgICAgIFNvcnRPcmRlcjogJ0FTQycsXG4gICAgICBSb3dzUGVyUGFnZTogMjAsXG4gICAgICBIaWRlOiB0aGlzLnByb3BzLkhpZGUsXG4gICAgfTtcblxuICAgIHRoaXMuY2hhbmdlUGFnZSA9IHRoaXMuY2hhbmdlUGFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U29ydENvbHVtbiA9IHRoaXMuc2V0U29ydENvbHVtbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlUm93c1BlclBhZ2UgPSB0aGlzLmNoYW5nZVJvd3NQZXJQYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb3dubG9hZENTViA9IHRoaXMuZG93bmxvYWRDU1YuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvdW50RmlsdGVyZWRSb3dzID0gdGhpcy5jb3VudEZpbHRlcmVkUm93cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0U29ydGVkUm93cyA9IHRoaXMuZ2V0U29ydGVkUm93cy5iaW5kKHRoaXMpOy8vXG4gICAgdGhpcy5oYXNGaWx0ZXJLZXl3b3JkID0gdGhpcy5oYXNGaWx0ZXJLZXl3b3JkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJBY3Rpb25zID0gdGhpcy5yZW5kZXJBY3Rpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoalF1ZXJ5LmZuLkR5bmFtaWNUYWJsZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZnJlZXplQ29sdW1uKSB7XG4gICAgICAgICQoJyNkeW5hbWljdGFibGUnKS5EeW5hbWljVGFibGUoe1xuICAgICAgICAgIGZyZWV6ZUNvbHVtbjogdGhpcy5wcm9wcy5mcmVlemVDb2x1bW4sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI2R5bmFtaWN0YWJsZScpLkR5bmFtaWNUYWJsZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuSGlkZS5kZWZhdWx0Q29sdW1uKSB7XG4gICAgICAgICQoJyNkeW5hbWljdGFibGUnKS5maW5kKCd0Ym9keSB0ZDplcSgwKScpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBtb2R1bGUgcHJlZmVyZW5jZXNcbiAgICBsZXQgbW9kdWxlUHJlZnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2R1bGVQcmVmcycpKTtcblxuICAgIC8vIEluaXQgbW9kdWxlUHJlZnMgb2JqZWN0XG4gICAgaWYgKG1vZHVsZVByZWZzID09PSBudWxsKSB7XG4gICAgICBtb2R1bGVQcmVmcyA9IHt9O1xuICAgIH1cblxuICAgIC8vIEluaXQgbW9kdWxlUHJlZnMgZm9yIGN1cnJlbnQgbW9kdWxlXG4gICAgaWYgKG1vZHVsZVByZWZzW2xvcmlzLlRlc3ROYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtb2R1bGVQcmVmc1tsb3Jpcy5UZXN0TmFtZV0gPSB7fTtcbiAgICAgIG1vZHVsZVByZWZzW2xvcmlzLlRlc3ROYW1lXS5yb3dzUGVyUGFnZSA9IHRoaXMuc3RhdGUuUm93c1BlclBhZ2U7XG4gICAgfVxuXG4gICAgLy8gU2V0IHJvd3MgcGVyIHBhZ2VcbiAgICBsZXQgcm93c1BlclBhZ2UgPSBtb2R1bGVQcmVmc1tsb3Jpcy5UZXN0TmFtZV0ucm93c1BlclBhZ2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBSb3dzUGVyUGFnZTogcm93c1BlclBhZ2UsXG4gICAgfSk7XG5cbiAgICAvLyBNYWtlIHByZWZzIGFjY2VzaWJsZSB3aXRoaW4gY29tcG9uZW50XG4gICAgdGhpcy5tb2R1bGVQcmVmcyA9IG1vZHVsZVByZWZzO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKGpRdWVyeS5mbi5EeW5hbWljVGFibGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZyZWV6ZUNvbHVtbikge1xuICAgICAgICAkKCcjZHluYW1pY3RhYmxlJykuRHluYW1pY1RhYmxlKHtcbiAgICAgICAgICBmcmVlemVDb2x1bW46IHRoaXMucHJvcHMuZnJlZXplQ29sdW1uLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNkeW5hbWljdGFibGUnKS5EeW5hbWljVGFibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25Tb3J0ICYmXG4gICAgICAodGhpcy5zdGF0ZS5Tb3J0Q29sdW1uICE9PSBwcmV2U3RhdGUuU29ydENvbHVtbiB8fFxuICAgICAgICB0aGlzLnN0YXRlLlNvcnRPcmRlciAhPT0gcHJldlN0YXRlLlNvcnRPcmRlcilcbiAgICApIHtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0U29ydGVkUm93cygpO1xuICAgICAgY29uc3QgaGVhZGVyTGlzdCA9IHRoaXMucHJvcHMuZmllbGRzLm1hcCgoZmllbGQpID0+IGZpZWxkLmxhYmVsKTtcbiAgICAgIHRoaXMucHJvcHMub25Tb3J0KGluZGV4LCB0aGlzLnByb3BzLmRhdGEsIGhlYWRlckxpc3QpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVBhZ2UocGFnZU5vKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBQYWdlTnVtYmVyOiBwYWdlTm8sXG4gICAgfSk7XG4gIH1cblxuICBzZXRTb3J0Q29sdW1uKGNvbE51bWJlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5Tb3J0Q29sdW1uID09PSBjb2xOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgU29ydE9yZGVyOiB0aGlzLnN0YXRlLlNvcnRPcmRlciA9PT0gJ0FTQycgPyAnREVTQycgOiAnQVNDJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBTb3J0Q29sdW1uOiBjb2xOdW1iZXIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VSb3dzUGVyUGFnZSh2YWwpIHtcbiAgICBsZXQgcm93c1BlclBhZ2UgPSB2YWwudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBtb2R1bGVQcmVmcyA9IHRoaXMubW9kdWxlUHJlZnM7XG5cbiAgICAvLyBTYXZlIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgbW9kdWxlUHJlZnNbbG9yaXMuVGVzdE5hbWVdLnJvd3NQZXJQYWdlID0gcm93c1BlclBhZ2U7XG5cbiAgICAvLyBVcGRhdGUgbG9jYWxzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vZHVsZVByZWZzJywgSlNPTi5zdHJpbmdpZnkobW9kdWxlUHJlZnMpKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgUm93c1BlclBhZ2U6IHJvd3NQZXJQYWdlLFxuICAgICAgUGFnZU51bWJlcjogMSxcbiAgICB9KTtcbiAgfVxuXG4gIGRvd25sb2FkQ1NWKGNzdkRhdGEpIHtcbiAgICBsZXQgY3N2d29ya2VyID0gbmV3IFdvcmtlcihsb3Jpcy5CYXNlVVJMICsgJy9qcy93b3JrZXJzL3NhdmVjc3YuanMnKTtcblxuICAgIGNzdndvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IGRhdGFVUkw7XG4gICAgICBsZXQgZGF0YURhdGU7XG4gICAgICBsZXQgbGluaztcbiAgICAgIGlmIChlLmRhdGEuY21kID09PSAnU2F2ZUNTVicpIHtcbiAgICAgICAgZGF0YURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIGRhdGFVUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSAnZGF0YS0nICsgZGF0YURhdGUgKyAnLmNzdic7XG4gICAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzdic7XG4gICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVUkw7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICQobGluaylbMF0uY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBoZWFkZXJMaXN0ID0gdGhpcy5wcm9wcy5maWVsZHMubWFwKChmaWVsZCkgPT4gZmllbGQubGFiZWwpO1xuICAgIGNzdndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICBjbWQ6ICdTYXZlRmlsZScsXG4gICAgICBkYXRhOiBjc3ZEYXRhLFxuICAgICAgaGVhZGVyczogaGVhZGVyTGlzdCxcbiAgICAgIGlkZW50aWZpZXJzOiB0aGlzLnByb3BzLlJvd05hbWVNYXAsXG4gICAgfSk7XG4gIH1cblxuICBjb3VudEZpbHRlcmVkUm93cygpIHtcbiAgICBsZXQgdXNlS2V5d29yZCA9IGZhbHNlO1xuICAgIGxldCBmaWx0ZXJNYXRjaENvdW50ID0gMDtcbiAgICBsZXQgZmlsdGVyVmFsdWVzQ291bnQgPSAodGhpcy5wcm9wcy5maWx0ZXIgP1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZpbHRlcikubGVuZ3RoIDpcbiAgICAgICAgMFxuICAgICk7XG4gICAgbGV0IHRhYmxlRGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICBsZXQgZmllbGREYXRhID0gdGhpcy5wcm9wcy5maWVsZHM7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIua2V5d29yZCkge1xuICAgICAgdXNlS2V5d29yZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHVzZUtleXdvcmQpIHtcbiAgICAgIGZpbHRlclZhbHVlc0NvdW50IC09IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBoZWFkZXJDb3VudCA9IDA7XG4gICAgICBsZXQga2V5d29yZE1hdGNoID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmllbGREYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGFibGVEYXRhW2ldID8gdGFibGVEYXRhW2ldW2pdIDogbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyS2V5d29yZCgoZmllbGREYXRhW2pdLmZpbHRlciB8fCB7fSkubmFtZSwgZGF0YSkpIHtcbiAgICAgICAgICBoZWFkZXJDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VLZXl3b3JkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyS2V5d29yZCgna2V5d29yZCcsIGRhdGEpKSB7XG4gICAgICAgICAgICBrZXl3b3JkTWF0Y2grKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGhlYWRlckNvdW50ID09PSBmaWx0ZXJWYWx1ZXNDb3VudCAmJlxuICAgICAgICAoKHVzZUtleXdvcmQgPT09IHRydWUgJiYga2V5d29yZE1hdGNoID4gMCkgfHxcbiAgICAgICAgICAodXNlS2V5d29yZCA9PT0gZmFsc2UgJiYga2V5d29yZE1hdGNoID09PSAwKSkpIHtcbiAgICAgICAgZmlsdGVyTWF0Y2hDb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBoYXNGaWx0ZXJzID0gKGZpbHRlclZhbHVlc0NvdW50ICE9PSAwKTtcbiAgICBpZiAoZmlsdGVyTWF0Y2hDb3VudCA9PT0gMCAmJiBoYXNGaWx0ZXJzKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gKGZpbHRlck1hdGNoQ291bnQgPT09IDApID8gdGFibGVEYXRhLmxlbmd0aCA6IGZpbHRlck1hdGNoQ291bnQ7XG4gIH1cblxuICBnZXRTb3J0ZWRSb3dzKCkge1xuICAgIGNvbnN0IGluZGV4ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHZhbCA9IHRoaXMucHJvcHMuZGF0YVtpXVt0aGlzLnN0YXRlLlNvcnRDb2x1bW5dIHx8IHVuZGVmaW5lZDtcbiAgICAgIC8vIElmIFNvcnRDb2x1bW4gaXMgZXF1YWwgdG8gZGVmYXVsdCBOby4gY29sdW1uLCBzZXQgdmFsdWUgdG8gYmVcbiAgICAgIC8vIGluZGV4ICsgMVxuICAgICAgaWYgKHRoaXMuc3RhdGUuU29ydENvbHVtbiA9PT0gLTEpIHtcbiAgICAgICAgdmFsID0gaSArIDE7XG4gICAgICB9XG4gICAgICBjb25zdCBpc1N0cmluZyA9ICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmcpO1xuICAgICAgY29uc3QgaXNOdW1iZXIgPSAhaXNOYU4odmFsKSAmJiB0eXBlb2YgdmFsICE9PSAnb2JqZWN0JztcblxuICAgICAgaWYgKHZhbCA9PT0gJy4nKSB7XG4gICAgICAgIC8vIGhhY2sgdG8gaGFuZGxlIG5vbi1leGlzdGVudCBpdGVtcyBpbiBEUVRcbiAgICAgICAgdmFsID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIpIHtcbiAgICAgICAgLy8gcGVyZm9ybSB0eXBlIGNvbnZlcnNpb24gKGZyb20gc3RyaW5nIHRvIGludC9mbG9hdClcbiAgICAgICAgdmFsID0gTnVtYmVyKHZhbCk7XG4gICAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgIC8vIGlmIHN0cmluZyB3aXRoIHRleHQgY29udmVydCB0byBsb3dlcmNhc2VcbiAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLlJvd05hbWVNYXApIHtcbiAgICAgICAgaW5kZXgucHVzaCh7Um93SWR4OiBpLCBWYWx1ZTogdmFsLCBDb250ZW50OiB0aGlzLnByb3BzLlJvd05hbWVNYXBbaV19KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4LnB1c2goe1Jvd0lkeDogaSwgVmFsdWU6IHZhbCwgQ29udGVudDogaSArIDF9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLlNvcnRPcmRlciA9PT0gJ0FTQycpIHtcbiAgICAgICAgaWYgKGEuVmFsdWUgPT09IGIuVmFsdWUpIHtcbiAgICAgICAgICAvLyBJZiBhbGwgdmFsdWVzIGFyZSBlcXVhbCwgc29ydCBieSByb3dudW1cbiAgICAgICAgICBpZiAoYS5Sb3dJZHggPCBiLlJvd0lkeCkgcmV0dXJuIC0xO1xuICAgICAgICAgIGlmIChhLlJvd0lkeCA+IGIuUm93SWR4KSByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBudWxsIHZhbHVlc1xuICAgICAgICBpZiAoYS5WYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYS5WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGIuVmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGIuVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gMTtcblxuICAgICAgICAvLyBTb3J0IGJ5IHZhbHVlXG4gICAgICAgIGlmIChhLlZhbHVlIDwgYi5WYWx1ZSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYS5WYWx1ZSA+IGIuVmFsdWUpIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGEuVmFsdWUgPT09IGIuVmFsdWUpIHtcbiAgICAgICAgICAvLyBJZiBhbGwgdmFsdWVzIGFyZSBlcXVhbCwgc29ydCBieSByb3dudW1cbiAgICAgICAgICBpZiAoYS5Sb3dJZHggPCBiLlJvd0lkeCkgcmV0dXJuIDE7XG4gICAgICAgICAgaWYgKGEuUm93SWR4ID4gYi5Sb3dJZHgpIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBudWxsIHZhbHVlc1xuICAgICAgICBpZiAoYS5WYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYS5WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAxO1xuICAgICAgICBpZiAoYi5WYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYi5WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAtMTtcblxuICAgICAgICAvLyBTb3J0IGJ5IHZhbHVlXG4gICAgICAgIGlmIChhLlZhbHVlIDwgYi5WYWx1ZSkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhLlZhbHVlID4gYi5WYWx1ZSkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgLy8gVGhleSdyZSBlcXVhbC4uXG4gICAgICByZXR1cm4gMDtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3IgdGhlIGZpbHRlciBrZXl3b3JkIGluIHRoZSBjb2x1bW4gY2VsbFxuICAgKlxuICAgKiBOb3RlOiBTZWFyY2ggaXMgY2FzZS1pbnNlbnNpdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgZmllbGQgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBzZWFyY2ggc3RyaW5nXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUsIGlmIGZpbHRlciB2YWx1ZSBpcyBmb3VuZCB0byBiZSBhIHN1YnN0cmluZ1xuICAgKiBvZiBvbmUgb2YgdGhlIGNvbHVtbiB2YWx1ZXMsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGhhc0ZpbHRlcktleXdvcmQobmFtZSwgZGF0YSkge1xuICAgIGxldCBmaWx0ZXJEYXRhID0gbnVsbDtcbiAgICBsZXQgZXhhY3RNYXRjaCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICBsZXQgc2VhcmNoS2V5ID0gbnVsbDtcbiAgICBsZXQgc2VhcmNoU3RyaW5nID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcltuYW1lXSkge1xuICAgICAgZmlsdGVyRGF0YSA9IHRoaXMucHJvcHMuZmlsdGVyW25hbWVdLnZhbHVlO1xuICAgICAgZXhhY3RNYXRjaCA9IHRoaXMucHJvcHMuZmlsdGVyW25hbWVdLmV4YWN0TWF0Y2g7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIG51bGwgaW5wdXRzXG4gICAgaWYgKGZpbHRlckRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBudW1lcmljIGlucHV0c1xuICAgIGlmICh0eXBlb2YgZmlsdGVyRGF0YSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldCBpbnREYXRhID0gTnVtYmVyLnBhcnNlSW50KGRhdGEsIDEwKTtcbiAgICAgIHJlc3VsdCA9IChmaWx0ZXJEYXRhID09PSBpbnREYXRhKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgc3RyaW5nIGlucHV0c1xuICAgIGlmICh0eXBlb2YgZmlsdGVyRGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlYXJjaEtleSA9IGZpbHRlckRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICAgIHN3aXRjaCAodHlwZW9mIGRhdGEpIHtcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAvLyBIYW5kbGVzIHRoZSBjYXNlIHdoZXJlIHRoZSBkYXRhIGlzIGFuIGFycmF5ICh0eXBlb2YgJ29iamVjdCcpXG4gICAgICAgICAgLy8gYW5kIHlvdSB3YW50IHRvIHNlYXJjaCB0aHJvdWdoIGl0IGZvclxuICAgICAgICAgIC8vIHRoZSBzdHJpbmcgeW91IGFyZSBmaWx0ZXJpbmcgYnlcbiAgICAgICAgICBsZXQgc2VhcmNoQXJyYXkgPSBkYXRhLm1hcCgoZSkgPT4gZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICBpZiAoZXhhY3RNYXRjaCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gc2VhcmNoQXJyYXkuaW5jbHVkZXMoc2VhcmNoS2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gKHNlYXJjaEFycmF5LmZpbmQoKGUpID0+IChlLmluZGV4T2Yoc2VhcmNoS2V5KSA+IC0xKSkpICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc2VhcmNoU3RyaW5nID0gZGF0YS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGV4YWN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gKHNlYXJjaFN0cmluZyA9PT0gc2VhcmNoS2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IChzZWFyY2hTdHJpbmcuaW5kZXhPZihzZWFyY2hLZXkpID4gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhcnJheSBpbnB1dHMgZm9yIG11bHRpc2VsZWN0c1xuICAgIGlmICh0eXBlb2YgZmlsdGVyRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJEYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHNlYXJjaEtleSA9IGZpbHRlckRhdGFbaV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc2VhcmNoU3RyaW5nID0gZGF0YS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIG1hdGNoID0gKHNlYXJjaFN0cmluZy5pbmRleE9mKHNlYXJjaEtleSkgPiAtMSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmVuZGVyQWN0aW9ucygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3Rpb25zLm1hcCgoYWN0aW9uLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q1RBXG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGxhYmVsPXthY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICBvblVzZXJJbnB1dD17YWN0aW9uLmFjdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGEgPT09IG51bGwgfHwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWluZm8gbm8tcmVzdWx0LWZvdW5kLXBhbmVsJz5cbiAgICAgICAgICA8c3Ryb25nPk5vIHJlc3VsdCBmb3VuZC48L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgcm93c1BlclBhZ2UgPSB0aGlzLnN0YXRlLlJvd3NQZXJQYWdlO1xuICAgIGxldCBoZWFkZXJzID0gdGhpcy5zdGF0ZS5IaWRlLmRlZmF1bHRDb2x1bW4gPT09IHRydWUgPyBbXSA6IFtcbiAgICAgIDx0aCBrZXk9J3RoX2NvbF8wJyBvbkNsaWNrPXt0aGlzLnNldFNvcnRDb2x1bW4oLTEpLmJpbmQodGhpcyl9PlxuICAgICAgICB7dGhpcy5wcm9wcy5Sb3dOdW1MYWJlbH1cbiAgICAgIDwvdGg+LFxuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuZmllbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZHNbaV0uc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgY29sSW5kZXggPSBpICsgMTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzW2ldLmZyZWV6ZUNvbHVtbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGhlYWRlcnMucHVzaChcbiAgICAgICAgICAgIDx0aCBrZXk9eyd0aF9jb2xfJyArIGNvbEluZGV4fSBpZD17dGhpcy5wcm9wcy5mcmVlemVDb2x1bW59XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZXRTb3J0Q29sdW1uKGkpLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5maWVsZHNbaV0ubGFiZWx9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVhZGVycy5wdXNoKFxuICAgICAgICAgICAgPHRoIGtleT17J3RoX2NvbF8nICsgY29sSW5kZXh9IG9uQ2xpY2s9e3RoaXMuc2V0U29ydENvbHVtbihpKS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmllbGRzW2ldLmxhYmVsfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IGN1clJvdyA9IFtdO1xuICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0U29ydGVkUm93cygpO1xuICAgIGxldCBtYXRjaGVzRm91bmQgPSAwOyAvLyBLZWVwcyB0cmFjayBvZiBob3cgbWFueSByb3dzIHdoZXJlIGRpc3BsYXllZCBzbyBmYXIgYWNyb3NzIGFsbCBwYWdlc1xuICAgIGxldCBmaWx0ZXJlZFJvd3MgPSB0aGlzLmNvdW50RmlsdGVyZWRSb3dzKCk7XG4gICAgbGV0IGN1cnJlbnRQYWdlUm93ID0gKHJvd3NQZXJQYWdlICogKHRoaXMuc3RhdGUuUGFnZU51bWJlciAtIDEpKTtcbiAgICBsZXQgZmlsdGVyZWREYXRhID0gW107XG4gICAgbGV0IHVzZUtleXdvcmQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlci5rZXl3b3JkKSB7XG4gICAgICB1c2VLZXl3b3JkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQdXNoIHJvd3MgdG8gZGF0YSB0YWJsZVxuICAgIGZvciAobGV0IGkgPSAwO1xuICAgICAgICAgKGkgPCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSAmJiAocm93cy5sZW5ndGggPCByb3dzUGVyUGFnZSk7XG4gICAgICAgICBpKytcbiAgICApIHtcbiAgICAgIGN1clJvdyA9IFtdO1xuXG4gICAgICAvLyBDb3VudHMgZmlsdGVyIG1hdGNoZXNcbiAgICAgIGxldCBmaWx0ZXJNYXRjaENvdW50ID0gMDtcbiAgICAgIGxldCBrZXl3b3JkTWF0Y2ggPSAwO1xuICAgICAgbGV0IGZpbHRlckxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEl0ZXJhdGVzIHRocm91Z2ggaGVhZGVycyB0byBwb3B1bGF0ZSByb3cgY29sdW1uc1xuICAgICAgLy8gd2l0aCBjb3JyZXNwb25kaW5nIGRhdGFcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy5maWVsZHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgbGV0IGRhdGEgPSAnVW5rbm93bic7XG5cbiAgICAgICAgLy8gU2V0IGNvbHVtbiBkYXRhXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFbaW5kZXhbaV0uUm93SWR4XSkge1xuICAgICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmRhdGFbaW5kZXhbaV0uUm93SWR4XVtqXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkc1tqXS5maWx0ZXIpIHtcbiAgICAgICAgICBpZiAodGhpcy5oYXNGaWx0ZXJLZXl3b3JkKHRoaXMucHJvcHMuZmllbGRzW2pdLmZpbHRlci5uYW1lLCBkYXRhKSkge1xuICAgICAgICAgICAgZmlsdGVyTWF0Y2hDb3VudCsrO1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhLnB1c2godGhpcy5wcm9wcy5kYXRhW2luZGV4W2ldLlJvd0lkeF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VLZXl3b3JkID09PSB0cnVlKSB7XG4gICAgICAgICAgZmlsdGVyTGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5maWx0ZXIpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyS2V5d29yZCgna2V5d29yZCcsIGRhdGEpKSB7XG4gICAgICAgICAgICBrZXl3b3JkTWF0Y2grKztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyTGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5maWx0ZXIpLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXkgPSAndGRfY29sXycgKyBqO1xuXG4gICAgICAgIC8vIEdldCBjdXN0b20gY2VsbCBmb3JtYXR0aW5nIGlmIGF2YWlsYWJsZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5nZXRGb3JtYXR0ZWRDZWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzW2pdLnNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkYXRhID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY3JlYXRlIG1hcHBpbmcgYmV0d2VlbiByb3dIZWFkZXJzIGFuZCByb3dEYXRhIGluIGEgcm93IE9iamVjdFxuICAgICAgICAgICAgY29uc3Qgcm93ID0ge307XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpZWxkcy5mb3JFYWNoKChmaWVsZCwgaykgPT4ge1xuICAgICAgICAgICAgICByb3dbZmllbGQubGFiZWxdID0gdGhpcy5wcm9wcy5kYXRhW2luZGV4W2ldLlJvd0lkeF1ba107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmdldEZvcm1hdHRlZENlbGwoXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuZmllbGRzW2pdLmxhYmVsLFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBDYW4ndCBjdXJyZW50bHkgcGFzcyBhIGtleSwgbmVlZCB0byB1cGRhdGUgY29sdW1uRm9ybWF0dGVyXG4gICAgICAgICAgICAvLyB0byBub3QgcmV0dXJuIGEgPHRkPiBub2RlLiBVc2luZyBjcmVhdGVGcmFnbWVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgY3VyUm93LnB1c2goY3JlYXRlRnJhZ21lbnQoe2RhdGF9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1clJvdy5wdXNoKDx0ZCBrZXk9e2tleX0+e2RhdGF9PC90ZD4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgZGlzcGxheSBhIHJvdyBpZiBhbGwgZmlsdGVyIHZhbHVlcyBoYXZlIGJlZW4gbWF0Y2hlZFxuICAgICAgaWYgKChmaWx0ZXJMZW5ndGggPT09IGZpbHRlck1hdGNoQ291bnQpICYmXG4gICAgICAgICgodXNlS2V5d29yZCA9PT0gdHJ1ZSAmJiBrZXl3b3JkTWF0Y2ggPiAwKSB8fFxuICAgICAgICAgICh1c2VLZXl3b3JkID09PSBmYWxzZSAmJiBrZXl3b3JkTWF0Y2ggPT09IDApKSkge1xuICAgICAgICBtYXRjaGVzRm91bmQrKztcbiAgICAgICAgaWYgKG1hdGNoZXNGb3VuZCA+IGN1cnJlbnRQYWdlUm93KSB7XG4gICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBpbmRleFtpXS5Db250ZW50O1xuICAgICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgIDx0ciBrZXk9eyd0cl8nICsgcm93SW5kZXh9IGNvbFNwYW49e2hlYWRlcnMubGVuZ3RofT5cbiAgICAgICAgICAgICAgPHRkPntyb3dJbmRleH08L3RkPlxuICAgICAgICAgICAgICB7Y3VyUm93fVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IFJvd3NQZXJQYWdlRHJvcGRvd24gPSAoXG4gICAgICA8c2VsZWN0XG4gICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXNtIHBlclBhZ2VcIlxuICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VSb3dzUGVyUGFnZX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuUm93c1BlclBhZ2V9XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24+MjA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj41MDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPjEwMDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPjEwMDA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj41MDAwPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24+MTAwMDA8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgICk7XG5cbiAgICAvLyBJbmNsdWRlIG9ubHkgZmlsdGVyZWQgZGF0YSBpZiBmaWx0ZXJzIHdlcmUgYXBwbGllZFxuICAgIGxldCBjc3ZEYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlciAmJiBmaWx0ZXJlZERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY3N2RGF0YSA9IGZpbHRlcmVkRGF0YTtcbiAgICB9XG5cbiAgICBsZXQgaGVhZGVyID0gdGhpcy5zdGF0ZS5IaWRlLnJvd3NQZXJQYWdlID09PSB0cnVlID8gJycgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtyb3dzLmxlbmd0aH0gcm93cyBkaXNwbGF5ZWQgb2Yge2ZpbHRlcmVkUm93c30uXG4gICAgICAgICAgICAoTWF4aW11bSByb3dzIHBlciBwYWdlOiB7Um93c1BlclBhZ2VEcm9wZG93bn0pXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICctNDNweCd9fT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckFjdGlvbnMoKX1cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kb3dubG9hZENTVi5iaW5kKG51bGwsIGNzdkRhdGEpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb3dubG9hZCBUYWJsZSBhcyBDU1ZcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25MaW5rc1xuICAgICAgICAgICAgICBUb3RhbD17ZmlsdGVyZWRSb3dzfVxuICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e3RoaXMuY2hhbmdlUGFnZX1cbiAgICAgICAgICAgICAgUm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuICAgICAgICAgICAgICBBY3RpdmU9e3RoaXMuc3RhdGUuUGFnZU51bWJlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGxldCBmb290ZXIgPSB0aGlzLnN0YXRlLkhpZGUuZG93bmxvYWRDU1YgPT09IHRydWUgPyAnJyA6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIiBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclRleHRcIj5cbiAgICAgICAgICAgICAge3Jvd3MubGVuZ3RofSByb3dzIGRpc3BsYXllZCBvZiB7ZmlsdGVyZWRSb3dzfS5cbiAgICAgICAgICAgICAgKE1heGltdW0gcm93cyBwZXIgcGFnZToge1Jvd3NQZXJQYWdlRHJvcGRvd259KVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBzdHlsZT17e21hcmdpblRvcDogJy0yM3B4J319PlxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbkxpbmtzXG4gICAgICAgICAgICAgICAgVG90YWw9e2ZpbHRlcmVkUm93c31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e3RoaXMuY2hhbmdlUGFnZX1cbiAgICAgICAgICAgICAgICBSb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XG4gICAgICAgICAgICAgICAgQWN0aXZlPXt0aGlzLnN0YXRlLlBhZ2VOdW1iZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcxNHB4J319PlxuICAgICAgICB7aGVhZGVyfVxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtcHJpbWFyeSB0YWJsZS1ib3JkZXJlZFwiIGlkPVwiZHluYW1pY3RhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImluZm9cIj57aGVhZGVyc308L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3Jvd3N9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAge2Zvb3Rlcn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbkRhdGFUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBSb3dOdW1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gRnVuY3Rpb24gb2Ygd2hpY2ggcmV0dXJucyBhIEpTWCBlbGVtZW50IGZvciBhIHRhYmxlIGNlbGwsIHRha2VzXG4gIC8vIHBhcmFtZXRlcnMgb2YgdGhlIGZvcm06IGZ1bmMoQ29sdW1uTmFtZSwgQ2VsbERhdGEsIEVudGlyZVJvd0RhdGEpXG4gIGdldEZvcm1hdHRlZENlbGw6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBIaWRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbkRhdGFUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIFJvd051bUxhYmVsOiAnTm8uJyxcbiAgZmlsdGVyOiB7fSxcbiAgSGlkZToge1xuICAgIHJvd3NQZXJQYWdlOiBmYWxzZSxcbiAgICBkb3dubG9hZENTVjogZmFsc2UsXG4gICAgZGVmYXVsdENvbHVtbjogZmFsc2UsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGU7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRmlsdGVyIGNvbXBvbmVudC5cbiAqIEEgd3JhcHBlciBmb3IgZm9ybSBlbGVtZW50cyBpbnNpZGUgYSBzZWxlY3Rpb24gZmlsdGVyLlxuICpcbiAqIENvbnN0cnVjdHMgZmlsdGVyIGZpZWxkcyBiYXNlZCBvbiB0aGlzLnByb3BzLmZpZWxkcyBjb25maWd1cmF0aW9uIG9iamVjdFxuICpcbiAqIEFsdGVycyB0aGUgZmlsdGVyIG9iamVjdCBhbmQgc2VuZHMgaXQgdG8gcGFyZW50IG9uIGV2ZXJ5IHVwZGF0ZS5cbiAqXG4gKi9cbmNsYXNzIEZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25GaWVsZFVwZGF0ZSA9IHRoaXMub25GaWVsZFVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyRmlsdGVyRmllbGRzID0gdGhpcy5yZW5kZXJGaWx0ZXJGaWVsZHMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZpbHRlciBvYmplY3QgdG8gcmVmbGVjdCB2YWx1ZXMgb2YgaW5wdXQgZmllbGRzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIGZvcm0gZWxlbWVudCB0eXBlIChpLmUgY29tcG9uZW50IG5hbWUpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHRoZSBuYW1lIG9mIHRoZSBmb3JtIGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gaWQgb2YgdGhlIGZvcm0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIHR5cGUgb2YgdGhlIGZvcm0gZWxlbWVudFxuICAgKi9cbiAgb25GaWVsZFVwZGF0ZShuYW1lLCB2YWx1ZSwgaWQsIHR5cGUpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZmlsdGVyKSk7XG4gICAgY29uc3QgZXhhY3RNYXRjaCA9IHR5cGUgPT09ICd0ZXh0Ym94JyA/IGZhbHNlIDogdHJ1ZTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICBkZWxldGUgZmlsdGVyW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJbbmFtZV0gPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZXhhY3RNYXRjaDogZXhhY3RNYXRjaCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy51cGRhdGVGaWx0ZXIoZmlsdGVyKTtcbiAgfVxuXG4gIHJlbmRlckZpbHRlckZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5maWVsZHMucmVkdWNlKChyZXN1bHQsIGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWVsZC5maWx0ZXI7XG4gICAgICBpZiAoZmlsdGVyICYmIGZpbHRlci5oaWRlICE9PSB0cnVlKSB7XG4gICAgICAgIGxldCBlbGVtZW50O1xuICAgICAgICBzd2l0Y2ggKGZpbHRlci50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIGVsZW1lbnQgPSA8VGV4dGJveEVsZW1lbnQga2V5PXtmaWx0ZXIubmFtZX0vPjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICBlbGVtZW50ID0gPFNlbGVjdEVsZW1lbnQga2V5PXtmaWx0ZXIubmFtZX0gb3B0aW9ucz17ZmlsdGVyLm9wdGlvbnN9Lz47XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ211bHRpc2VsZWN0JzpcbiAgICAgICAgICBlbGVtZW50ID0gPFNlbGVjdEVsZW1lbnQga2V5PXtmaWx0ZXIubmFtZX0gb3B0aW9ucz17ZmlsdGVyLm9wdGlvbnN9IG11bHRpcGxlPXt0cnVlfS8+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICBlbGVtZW50ID0gPERhdGVFbGVtZW50IGtleT17ZmlsdGVyLm5hbWV9Lz47XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZWxlbWVudCA9IDxUZXh0Ym94RWxlbWVudCBrZXk9e2ZpbHRlci5uYW1lfS8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogZmlsdGVyLm5hbWUsXG4gICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICB2YWx1ZTogKHRoaXMucHJvcHMuZmlsdGVyW2ZpbHRlci5uYW1lXSB8fCB7fSkudmFsdWUsXG4gICAgICAgICAgICBvblVzZXJJbnB1dDogdGhpcy5vbkZpZWxkVXBkYXRlLFxuICAgICAgICAgIH1cbiAgICAgICAgKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgID5cbiAgICAgICAgPEZpZWxkc2V0RWxlbWVudFxuICAgICAgICAgIGNvbHVtbnM9e3RoaXMucHJvcHMuY29sdW1uc31cbiAgICAgICAgICBsZWdlbmQ9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGaWx0ZXJGaWVsZHMoKX1cbiAgICAgICAgICA8QnV0dG9uRWxlbWVudFxuICAgICAgICAgICAgbGFiZWw9XCJDbGVhciBGaWx0ZXJzXCJcbiAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5wcm9wcy5jbGVhckZpbHRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkc2V0RWxlbWVudD5cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBpZDogbnVsbCxcbiAgY2xlYXJGaWx0ZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUud2Fybignb25VcGRhdGUoKSBjYWxsYmFjayBpcyBub3Qgc2V0IScpO1xuICB9LFxuICBjb2x1bW5zOiAxLFxufTtcbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjbGVhckZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBhbmVsIGZyb20gJ2pzeC9QYW5lbCc7XG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gJ2pzeC9EYXRhVGFibGUnO1xuaW1wb3J0IEZpbHRlciBmcm9tICdqc3gvRmlsdGVyJztcblxuLyoqXG4gKiBGaWx0ZXJhYmxlRGF0YVRhYmxlIGNvbXBvbmVudC5cbiAqIEEgd3JhcHBlciBmb3IgYWxsIGRhdGF0YWJsZXMgdGhhdCBoYW5kbGVzIGZpbHRlcmluZy5cbiAqXG4gKiBIYW5kbGVzIHRoZSB1cGRhdGluZyBhbmQgY2xlYXJpbmcgb2YgdGhlIGZpbHRlciBzdGF0ZSBiYXNlZCBvbiBjaGFuZ2VzIHNlbnRcbiAqIGZyb20gdGhlIEZpdGxlckZvcm0uXG4gKlxuICogUGFzc2VzIHRoZSBGaWx0ZXIgdG8gdGhlIERhdGF0YWJsZS5cbiAqXG4gKiBEZXByZWNhdGVzIEZpbHRlciBGb3JtLlxuICovXG5jbGFzcyBGaWx0ZXJhYmxlRGF0YVRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlcjoge30sXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlciA9IHRoaXMudXBkYXRlRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGVhckZpbHRlciA9IHRoaXMuY2xlYXJGaWx0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGZpbHRlciBzdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIHBhc3NlZCBmcm9tIEZpbHRlckZvcm1cbiAgICovXG4gIHVwZGF0ZUZpbHRlcihmaWx0ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJ9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIEZpbHRlciB0byBlbXB0eSBvYmplY3RcbiAgICovXG4gIGNsZWFyRmlsdGVyKCkge1xuICAgIHRoaXMudXBkYXRlRmlsdGVyKHt9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsXG4gICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgPlxuICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lICsgJ19maWx0ZXInfVxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLm5hbWUgKyAnX2ZpbHRlcid9XG4gICAgICAgICAgdGl0bGU9J1NlbGVjdGlvbiBGaWx0ZXInXG4gICAgICAgICAgY29sdW1ucz17dGhpcy5wcm9wcy5jb2x1bW5zfVxuICAgICAgICAgIGZpbHRlcj17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgZmllbGRzPXt0aGlzLnByb3BzLmZpZWxkc31cbiAgICAgICAgICB1cGRhdGVGaWx0ZXI9e3RoaXMudXBkYXRlRmlsdGVyfVxuICAgICAgICAgIGNsZWFyRmlsdGVyPXt0aGlzLmNsZWFyRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgICA8RGF0YVRhYmxlXG4gICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgIGZpZWxkcz17dGhpcy5wcm9wcy5maWVsZHN9XG4gICAgICAgICAgZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlcn1cbiAgICAgICAgICBnZXRGb3JtYXR0ZWRDZWxsPXt0aGlzLnByb3BzLmdldEZvcm1hdHRlZENlbGx9XG4gICAgICAgICAgYWN0aW9ucz17dGhpcy5wcm9wcy5hY3Rpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9QYW5lbD5cbiAgICApO1xuICB9XG59XG5cbkZpbHRlcmFibGVEYXRhVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICBjb2x1bW5zOiAzLFxufTtcblxuRmlsdGVyYWJsZURhdGFUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZpZWxkczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMubnVtYmVyLFxuICBnZXRGb3JtYXR0ZWRDZWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmFibGVEYXRhVGFibGU7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgUmVhY3QgY29tcG9uZW50IGZvciBMb2FkZXJcbiAqXG4gKiBAYXV0aG9yIEhlbnJpIFJhYmFsYWlzXG4gKiBAdmVyc2lvbiAxLjAuMFxuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogTG9hZGVyIGNvbXBvbmVudFxuICovXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2xvYWRlcidcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogcGFyc2VJbnQodGhpcy5wcm9wcy5zaXplKSwgaGVpZ2h0OiBwYXJzZUludCh0aGlzLnByb3BzLnNpemUpfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5Mb2FkZXIucHJvcFR5cGVzID0ge3NpemU6IFByb3BUeXBlcy5zdHJpbmd9O1xuTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtzaXplOiAnMTIwJ307XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBSZWFjdCBDb21wb25lbnQgZm9yIGEgTW9kYWwgV2luZG93LlxuICpcbiAqIEBhdXRob3IgSGVucmkgUmFiYWxhaXNcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbi8qKlxuICogTW9kYWwgQ29tcG9uZW50LlxuICogUmVhY3Qgd3JhcHBlciBmb3IgYSBNb2RhbCBXaW5kb3cuIEFsbG93cyB0byBkeW5hbWljYWxseSB0b2dnbGUgYSBNb2RhbFxuICogd2luZG93LlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogVXNhZ2U6XG4gKiAtIFdyYXAgdGhlIGNvbnRlbnRzIHRvIGJlIGRpc3BsYXllZCBieSB0aGUgTW9kYWwgV2luZG93IGJ5IHRoZVxuICogICBNb2RhbCBDb21wb25lbnQuXG4gKiAtIFVzZSB0aGUgJ3RpdGxlJyBwcm9wIHRvIHNldCBhIHRpdGxlIGZvciB0aGUgTW9kYWwgQ29tcG9uZW50LlxuICogLSBVc2UgdGhlICdvblN1Ym1pdCcgcHJvcCB0byBzZXQgYSBzdWJtaXNzaW9uICpwcm9taXNlKiBvYmplY3QgZm9yIHRoZVxuICogICBNb2RhbCdzIGNvbnRlbnRzLlxuICogLSBVc2UgdGhlICdvbkNsb3NlJyBwcm9wIHRvIHNldCBhIGZ1bmN0aW9uIHRoYXQgdHJpZ2dlcnMgdXBvbiBNb2RhbCBjbG9zdXJlLlxuICogLSBVc2UgdGhlICd0aHJvd1dhcm5pbmcnIHByb3AgdG8gdGhyb3cgYSB3YXJuaW5nIHVwb24gY2xvc3VyZSBvZiB0aGVcbiAqICAgTW9kYWwgV2luZG93LlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqL1xuY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlQ2xvc2UgPSB0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbG9zZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50aHJvd1dhcm5pbmcpIHtcbiAgICAgIHN3YWwoe1xuICAgICAgICB0aXRsZTogJ0FyZSBZb3UgU3VyZT8nLFxuICAgICAgICB0ZXh0OiAnTGVhdmluZyB0aGUgZm9ybSB3aWxsIHJlc3VsdCBpbiB0aGUgbG9zcyBvZiBhbnkgaW5mb3JtYXRpb24gJyArXG4gICAgICAgICAgJ2VudGVyZWQuJyxcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1Byb2NlZWQnLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LnZhbHVlICYmIHRoaXMucHJvcHMub25DbG9zZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtzaG93LCBjaGlsZHJlbiwgb25TdWJtaXQsIHRpdGxlfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnMTAnLFxuICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgcGFkZGluZzogMzUsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERERERCcsXG4gICAgfTtcblxuICAgIGNvbnN0IGdseXBoU3R5bGUgPSB7XG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9O1xuXG4gICAgY29uc3QgYm9keVN0eWxlID0ge1xuICAgICAgcGFkZGluZzogMTUsXG4gICAgfTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgcGFkZGluZ1RvcDogJzEwMHB4JyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjcpJyxcbiAgICAgIHZpc2liaWxpdHk6IHNob3cgPyAndmlzaWJsZScgOiAnaGlkZGVuJyxcbiAgICB9O1xuXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0ge1xuICAgICAgb3BhY2l0eTogc2hvdyA/IDEgOiAwLFxuICAgICAgdG9wOiBzaG93ID8gMCA6ICctMzAwcHgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmVmZWZlJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzdweCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzg4OCcsXG4gICAgICB3aWR0aDogJzcwMHB4JyxcbiAgICAgIGJveFNoYWRvdzogJzAgNHB4IDhweCAwIHJiZ2EoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSknLFxuICAgICAgdHJhbnNpdGlvbjogJ3RvcCAwLjRzLCBvcGFjaXR5IDAuNHMnLFxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJDaGlsZHJlbiA9ICgpID0+IHNob3cgJiYgY2hpbGRyZW47XG5cbiAgICBjb25zdCBmb290ZXJTdHlsZSA9IHtcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjREREREREJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgIHBhZGRpbmc6ICczNXB4IDM1cHggMjBweCAzNXB4JyxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3VibWl0U3R5bGUgPSB7XG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICBpZiAob25TdWJtaXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXRTdHlsZX0+XG4gICAgICAgICAgICA8QnV0dG9uRWxlbWVudFxuICAgICAgICAgICAgICBsYWJlbD1cIlN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uVXNlcklucHV0PXsoKSA9PiBvblN1Ym1pdCgpLnRoZW4oKCkgPT4gdGhpcy5wcm9wcy5vbkNsb3NlKCkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e21vZGFsQ29udGFpbmVyfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXttb2RhbENvbnRlbnR9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17Z2x5cGhTdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17Ym9keVN0eWxlfT5cbiAgICAgICAgICAgIHtyZW5kZXJDaGlsZHJlbigpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvb3RlclN0eWxlfT5cbiAgICAgICAgICAgIHtzdWJtaXRCdXR0b24oKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0aHJvd1dhcm5pbmc6IFByb3BUeXBlcy5ib29sLFxufTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICB0aHJvd1dhcm5pbmc6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCIvKiBleHBvcnRlZCBSUGFnaW5hdGlvbkxpbmtzICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUGFnaW5hdGlvbkxpbmtzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZVBhZ2UgPSB0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVBhZ2UoaSkge1xuICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgIC8vIERvbid0IGp1bXAgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlUGFnZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlUGFnZShpKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHJvd3NQZXJQYWdlID0gdGhpcy5wcm9wcy5Sb3dzUGVyUGFnZTtcbiAgICBsZXQgcGFnZUxpbmtzID0gW107XG4gICAgbGV0IGNsYXNzTGlzdDtcbiAgICBsZXQgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodGhpcy5wcm9wcy5Ub3RhbCAvIHJvd3NQZXJQYWdlKTtcbiAgICBsZXQgc3RhcnRQYWdlID0gTWF0aC5tYXgoMSwgdGhpcy5wcm9wcy5BY3RpdmUgLSAzKTtcbiAgICBsZXQgbGFzdFNob3duUGFnZSA9IE1hdGgubWluKHRoaXMucHJvcHMuQWN0aXZlICsgMywgbGFzdFBhZ2UpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuVG90YWwgPT09IDApIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5Ub3RhbCA8IHRoaXMucHJvcHMuUm93c1BlclBhZ2UpIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cblxuICAgIGlmICgobGFzdFNob3duUGFnZSAtIHN0YXJ0UGFnZSkgPD0gNykge1xuICAgICAgbGFzdFNob3duUGFnZSA9IHN0YXJ0UGFnZSArIDY7XG4gICAgICBpZiAobGFzdFNob3duUGFnZSA+IGxhc3RQYWdlKSB7XG4gICAgICAgIGxhc3RTaG93blBhZ2UgPSBsYXN0UGFnZTtcbiAgICAgICAgc3RhcnRQYWdlID0gbGFzdFBhZ2UgLSA2O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XG4gICAgICBwYWdlTGlua3MucHVzaChcbiAgICAgICAgPGxpIGtleT17J3RhYmxlX3BhZ2VfYmVnaW5uaW5nXycgKyBzdGFydFBhZ2UudG9TdHJpbmcoKX0gb25DbGljaz17dGhpcy5jaGFuZ2VQYWdlKDEpfT48YSBocmVmPScjJz4mbGFxdW87PC9hPjwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoc3RhcnRQYWdlIDwgMSkge1xuICAgICAgc3RhcnRQYWdlID0gMTtcbiAgICB9XG4gICAgaWYgKGxhc3RTaG93blBhZ2UgPCAxKSB7XG4gICAgICBsYXN0U2hvd25QYWdlID0gMTtcbiAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25seSAxIHBhZ2UsIGRvbid0IGRpc3BsYXkgcGFnaW5hdGlvbiBsaW5rc1xuICAgIGlmIChzdGFydFBhZ2UgPT09IGxhc3RTaG93blBhZ2UpIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPD0gbGFzdFNob3duUGFnZTsgaSArPSAxKSB7XG4gICAgICBjbGFzc0xpc3QgPSAnJztcbiAgICAgIGlmICh0aGlzLnByb3BzLkFjdGl2ZSA9PT0gaSkge1xuICAgICAgICBjbGFzc0xpc3QgPSAnYWN0aXZlJztcbiAgICAgIH1cbiAgICAgIHBhZ2VMaW5rcy5wdXNoKFxuICAgICAgICA8bGkga2V5PXsndGFibGVfcGFnZV8nICsgaS50b1N0cmluZygpfSBvbkNsaWNrPXt0aGlzLmNoYW5nZVBhZ2UoaSl9IGNsYXNzTmFtZT17Y2xhc3NMaXN0fT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPntpfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsYXN0U2hvd25QYWdlICE9PSBsYXN0UGFnZSkge1xuICAgICAgcGFnZUxpbmtzLnB1c2goXG4gICAgICAgIDxsaSBrZXk9eyd0YWJsZV9wYWdlX21vcmVfJyArIGxhc3RTaG93blBhZ2UudG9TdHJpbmcoKX0gb25DbGljaz17dGhpcy5jaGFuZ2VQYWdlKGxhc3RQYWdlKX0+XG4gICAgICAgICAgPGEgaHJlZj0nIyc+JnJhcXVvOzwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9J3BhZ2luYXRpb24gcGFnaW5hdGlvbi10YWJsZSc+XG4gICAgICAgICAge3BhZ2VMaW5rc31cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuUGFnaW5hdGlvbkxpbmtzLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2VQYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgVG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5QYWdpbmF0aW9uTGlua3MuZGVmYXVsdFByb3BzID0ge1xuICBSb3dzUGVyUGFnZTogMTAsXG4gIEFjdGl2ZTogMSxcbn07XG5cbmxldCBSUGFnaW5hdGlvbkxpbmtzID0gUmVhY3QuY3JlYXRlRmFjdG9yeShQYWdpbmF0aW9uTGlua3MpO1xuXG53aW5kb3cuUGFnaW5hdGlvbkxpbmtzID0gUGFnaW5hdGlvbkxpbmtzO1xud2luZG93LlJQYWdpbmF0aW9uTGlua3MgPSBSUGFnaW5hdGlvbkxpbmtzO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uTGlua3M7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBSZWFjdCBjb21wb25lbnQgZm9yIFBhbmVsXG4gKlxuICogQGF1dGhvciBBbGV4IEkuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogUGFuZWwgY29tcG9uZW50XG4gKiBXcmFwcyBjaGlsZHJlbiBpbiBhIGNvbGxhcHNpYmxlIGJvb3RzdHJhcCBwYW5lbFxuICovXG5jbGFzcyBQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbGxhcHNlZDogdGhpcy5wcm9wcy5pbml0Q29sbGFwc2VkLFxuICAgIH07XG5cbiAgICAvLyBJbml0aWFsaXplIHBhbmVsIGNsYXNzIGJhc2VkIG9uIGNvbGxhcHNlZCBzdGF0dXNcbiAgICB0aGlzLnBhbmVsQ2xhc3MgPSAoXG4gICAgICB0aGlzLnByb3BzLmluaXRDb2xsYXBzZWQgP1xuICAgICAgICAncGFuZWwtY29sbGFwc2UgY29sbGFwc2UnIDpcbiAgICAgICAgJ3BhbmVsLWNvbGxhcHNlIGNvbGxhcHNlIGluJ1xuICAgICk7XG5cbiAgICB0aGlzLnRvZ2dsZUNvbGxhcHNlZCA9IHRoaXMudG9nZ2xlQ29sbGFwc2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29sbGFwc2VkOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBDaGFuZ2UgYXJyb3cgZGlyZWN0aW9uIGJhc2VkIG9uIGNvbGxhcHNlIHN0YXR1c1xuICAgIGxldCBnbHlwaENsYXNzID0gKFxuICAgICAgdGhpcy5zdGF0ZS5jb2xsYXBzZWQgP1xuICAgICAgICAnZ2x5cGhpY29uIHB1bGwtcmlnaHQgZ2x5cGhpY29uLWNoZXZyb24tZG93bicgOlxuICAgICAgICAnZ2x5cGhpY29uIHB1bGwtcmlnaHQgZ2x5cGhpY29uLWNoZXZyb24tdXAnXG4gICAgKTtcblxuICAgIC8vIEFkZCBwYW5lbCBoZWFkZXIsIGlmIHRpdGxlIGlzIHNldFxuICAgIGNvbnN0IHBhbmVsSGVhZGluZyA9IHRoaXMucHJvcHMudGl0bGUgPyAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH1cbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtdGFyZ2V0PXsnIycgKyB0aGlzLnByb3BzLmlkfVxuICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Z2x5cGhDbGFzc30+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKSA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtcHJpbWFyeVwiPlxuICAgICAgICB7cGFuZWxIZWFkaW5nfVxuICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e3RoaXMucGFuZWxDbGFzc30gcm9sZT1cInRhYnBhbmVsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCIgc3R5bGU9e3toZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0fX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBhbmVsLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuUGFuZWwuZGVmYXVsdFByb3BzID0ge1xuICBpbml0Q29sbGFwc2VkOiBmYWxzZSxcbiAgaWQ6ICdkZWZhdWx0LXBhbmVsJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYW5lbDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IE1vZGFsIGZyb20gJ01vZGFsJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnTG9hZGVyJztcbmltcG9ydCBGaWx0ZXJhYmxlRGF0YVRhYmxlIGZyb20gJ0ZpbHRlcmFibGVEYXRhVGFibGUnO1xuXG4vKipcbiAqIEV4YW1pbmVyIE1vZHVsZSBQYWdlLlxuICpcbiAqIFNlcnZlcyBhcyBhbiBlbnRyeS1wb2ludCB0byB0aGUgbW9kdWxlLCByZW5kZXJpbmcgdGhlIHdob2xlIHJlYWN0XG4gKiBjb21wb25lbnQgcGFnZSBvbiBsb2FkLlxuICpcbiAqIFJlbmRlcnMgRXhhbWluZXIgbWFpbiBwYWdlIGNvbnNpc3Rpbmcgb2YgRmlsdGVyYWJsZURhdGFUYWJsZSBhbmQgRm9ybUVsZW1lbnQuXG4gKlxuICogQGF1dGhvciBWaWN0b3JpYSBGb2luZywgWmFsaXFhIFJvc2xpXG4gKiBAdmVyc2lvbiAxLjAuMFxuICpcbiAqL1xuY2xhc3MgRXhhbWluZXJJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgYWRkTmFtZTogbnVsbCxcbiAgICAgICAgYWRkUmFkaW9sb2dpc3Q6IGZhbHNlLFxuICAgICAgICBhZGRTaXRlOiBudWxsLFxuICAgICAgfSxcbiAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMuZmV0Y2hEYXRhID0gdGhpcy5mZXRjaERhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRGb3JtRGF0YSA9IHRoaXMuc2V0Rm9ybURhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvcm1hdENvbHVtbiA9IHRoaXMuZm9ybWF0Q29sdW1uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJBZGRFeGFtaW5lckZvcm0gPSB0aGlzLnJlbmRlckFkZEV4YW1pbmVyRm9ybS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hEYXRhKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0U3RhdGUoe2lzTG9hZGVkOiB0cnVlfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGRhdGEgZnJvbSB0aGUgcHJvdmlkZWQgVVJMIGFuZCBzYXZlIGl0IGluIHN0YXRlXG4gICAqIEFkZGl0aW9uYWxseSBhZGQgaGlkZGVuSGVhZGVycyB0byBnbG9iYWwgbG9yaXMgdmFyaWFibGVcbiAgICogZm9yIGVhc3kgYWNjZXNzIGJ5IGNvbHVtbkZvcm1hdHRlci5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgZmV0Y2hEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnByb3BzLmRhdGFVUkwsIHtjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ30pXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gdGhpcy5zZXRTdGF0ZSh7ZGF0YX0pKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCBpbiB0aGlzLnN0YXRlLmZvcm1EYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRWxlbWVudCAtIG5hbWUgb2YgdGhlIGZvcm0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB2YWx1ZSBvZiB0aGUgZm9ybSBlbGVtZW50XG4gICAqL1xuICBzZXRGb3JtRGF0YShmb3JtRWxlbWVudCwgdmFsdWUpIHtcbiAgICBsZXQgZm9ybURhdGEgPSB0aGlzLnN0YXRlLmZvcm1EYXRhO1xuICAgIGZvcm1EYXRhW2Zvcm1FbGVtZW50XSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybURhdGE6IGZvcm1EYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIHN1Ym1pc3Npb24gb2YgdGhlIEFkZCBFeGFtaW5lciBmb3JtXG4gICAqXG4gICAqIEBwYXJhbSB7ZXZlbnR9IGUgLSBldmVudCBvZiB0aGUgZm9ybVxuICAgKi9cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBsZXQgZm9ybURhdGEgPSB0aGlzLnN0YXRlLmZvcm1EYXRhO1xuICAgIGxldCBmb3JtT2JqZWN0ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9yIChsZXQga2V5IGluIGZvcm1EYXRhKSB7XG4gICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gJycpIHtcbiAgICAgICAgZm9ybU9iamVjdC5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9ybU9iamVjdC5hcHBlbmQoJ2ZpcmVfYXdheScsICdBZGQnKTtcblxuICAgIGZldGNoKHRoaXMucHJvcHMuc3VibWl0VVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBib2R5OiBmb3JtT2JqZWN0LFxuICAgIH0pXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwLm9rICYmIHJlc3Auc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgc3dhbCgnU3VjY2VzcyEnLCAnRXhhbWluZXIgYWRkZWQuJywgJ3N1Y2Nlc3MnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNwLnRleHQoKS50aGVuKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgc3dhbCgnRXJyb3IhJywgbWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW9kaWZ5IGJlaGF2aW91ciBvZiBzcGVjaWZpZWQgY29sdW1uIGNlbGxzIGluIHRoZSBEYXRhIFRhYmxlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29sdW1uIC0gY29sdW1uIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNlbGwgLSBjZWxsIGNvbnRlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IHJvdyAtIHJvdyBjb250ZW50IGluZGV4ZWQgYnkgY29sdW1uXG4gICAqXG4gICAqIEByZXR1cm4geyp9IGEgZm9ybWF0ZWQgdGFibGUgY2VsbCBmb3IgYSBnaXZlbiBjb2x1bW5cbiAgICovXG4gIGZvcm1hdENvbHVtbihjb2x1bW4sIGNlbGwsIHJvdykge1xuICAgIGxldCByZXN1bHQgPSA8dGQ+e2NlbGx9PC90ZD47XG5cbiAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgY2FzZSAnRXhhbWluZXInOlxuICAgICAgICBjb25zdCB1cmwgPSBsb3Jpcy5CYXNlVVJMICsgJy9leGFtaW5lci9lZGl0RXhhbWluZXIvP2lkZW50aWZpZXI9JyArXG4gICAgICAgICAgICAgICAgICByb3cuSUQ7XG4gICAgICAgIHJlc3VsdCA9IDx0ZD48YSBocmVmPXt1cmx9PntjZWxsfTwvYT48L3RkPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSYWRpb2xvZ2lzdCc6XG4gICAgICAgIGlmIChyb3cuUmFkaW9sb2dpc3QgPT09ICcxJykge1xuICAgICAgICAgIHJlc3VsdCA9IDx0ZD5ZZXM8L3RkPjtcbiAgICAgICAgfSBlbHNlIGlmIChyb3cuUmFkaW9sb2dpc3QgPT09ICcwJykge1xuICAgICAgICAgIHJlc3VsdCA9IDx0ZD5ObzwvdGQ+O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ2VydGlmaWNhdGlvbic6XG4gICAgICAgIGlmIChyb3cuQ2VydGlmaWNhdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdCA9IDx0ZD5Ob25lPC90ZD47XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiB0cnVlfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogZmFsc2V9KTtcbiAgfVxuXG4gIHJlbmRlckFkZEV4YW1pbmVyRm9ybSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIHRpdGxlPSdBZGQgRXhhbWluZXInXG4gICAgICAgIG9uQ2xvc2U9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG4gICAgICA+XG4gICAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICAgIE1vZHVsZT1cImV4YW1pbmVyXCJcbiAgICAgICAgICBuYW1lPVwiYWRkRXhhbWluZXJcIlxuICAgICAgICAgIGlkPVwiYWRkRXhhbWluZXJGb3JtXCJcbiAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dGJveEVsZW1lbnRcbiAgICAgICAgICAgIG5hbWU9XCJhZGROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtRGF0YS5hZGROYW1lfVxuICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5zZXRGb3JtRGF0YX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTZWxlY3RFbGVtZW50XG4gICAgICAgICAgICBuYW1lPVwiYWRkU2l0ZVwiXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmRhdGEuZmllbGRPcHRpb25zLnNpdGVzfVxuICAgICAgICAgICAgbGFiZWw9XCJTaXRlXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1EYXRhLmFkZFNpdGV9XG4gICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgIG9uVXNlcklucHV0PXt0aGlzLnNldEZvcm1EYXRhfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENoZWNrYm94RWxlbWVudFxuICAgICAgICAgICAgbmFtZT1cImFkZFJhZGlvbG9naXN0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiUmFkaW9sb2dpc3RcIlxuICAgICAgICAgICAgaWQ9XCJjaGVja1JhZGlvbG9naXN0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1EYXRhLmFkZFJhZGlvbG9naXN0fVxuICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMuc2V0Rm9ybURhdGF9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uRWxlbWVudFxuICAgICAgICAgICAgbmFtZT1cImZpcmVfYXdheVwiXG4gICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCIvPiBBZGRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBJZiBlcnJvciBvY2N1cnMsIHJldHVybiBhIG1lc3NhZ2UuXG4gICAgLy8gWFhYOiBSZXBsYWNlIHRoaXMgd2l0aCBhIFVJIGNvbXBvbmVudCBmb3IgNTAwIGVycm9ycy5cbiAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgcmV0dXJuIDxoMz5BbiBlcnJvciBvY2N1cmVkIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2UuPC9oMz47XG4gICAgfVxuXG4gICAgLy8gV2FpdGluZyBmb3IgYXN5bmMgZGF0YSB0byBsb2FkXG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm4gPExvYWRlci8+O1xuICAgIH1cblxuICAgLyoqXG4gICAgKiBYWFg6IEN1cnJlbnRseSwgdGhlIG9yZGVyIG9mIHRoZXNlIGZpZWxkcyBNVVNUIG1hdGNoIHRoZSBvcmRlciBvZiB0aGVcbiAgICAqIHF1ZXJpZWQgY29sdW1ucyBpbiBfc2V0dXBWYXJpYWJsZXMoKSBpbiBleGFtaW5lci5jbGFzcy5pbmNcbiAgICAqL1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0YXRlLmRhdGEuZmllbGRPcHRpb25zO1xuICAgIGNvbnN0IGZpZWxkcyA9IFtcbiAgICAgIHtsYWJlbDogJ0V4YW1pbmVyJywgc2hvdzogdHJ1ZSwgZmlsdGVyOiB7XG4gICAgICAgIG5hbWU6ICdleGFtaW5lcicsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIH19LFxuICAgICAge2xhYmVsOiAnSUQnLCBzaG93OiBmYWxzZX0sXG4gICAgICB7bGFiZWw6ICdTaXRlJywgc2hvdzogdHJ1ZSwgZmlsdGVyOiB7XG4gICAgICAgIG5hbWU6ICdzaXRlJyxcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMuc2l0ZXMsXG4gICAgICB9fSxcbiAgICAgIHtsYWJlbDogJ1JhZGlvbG9naXN0Jywgc2hvdzogdHJ1ZSwgZmlsdGVyOiB7XG4gICAgICAgIG5hbWU6ICdyYWRpb2xvZ2lzdCcsXG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLnJhZGlvbG9naXN0cyxcbiAgICAgIH19LFxuICAgICAge2xhYmVsOiAnQ2VydGlmaWNhdGlvbicsIHNob3c6IHRoaXMuc3RhdGUuZGF0YS51c2VDZXJ0aWZpY2F0aW9ufSxcbiAgICBdO1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICB7bmFtZTogJ2FkZEV4YW1pbmVyJywgbGFiZWw6ICdBZGQgRXhhbWluZXInLCBhY3Rpb246IHRoaXMub3Blbk1vZGFsfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckFkZEV4YW1pbmVyRm9ybSgpfVxuICAgICAgICA8RmlsdGVyYWJsZURhdGFUYWJsZVxuICAgICAgICAgIG5hbWU9J2V4YW1pbmVyJ1xuICAgICAgICAgIHRpdGxlPSdFeGFtaW5lcidcbiAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGEuRGF0YX1cbiAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICBnZXRGb3JtYXR0ZWRDZWxsPXt0aGlzLmZvcm1hdENvbHVtbn1cbiAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5FeGFtaW5lckluZGV4LnByb3BUeXBlcyA9IHtcbiAgZGF0YVVSTDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYXNQZXJtaXNzaW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8RXhhbWluZXJJbmRleFxuICAgICAgZGF0YVVSTD17YCR7bG9yaXMuQmFzZVVSTH0vZXhhbWluZXIvP2Zvcm1hdD1qc29uYH1cbiAgICAgIHN1Ym1pdFVSTD17YCR7bG9yaXMuQmFzZVVSTH0vZXhhbWluZXIvYH1cbiAgICAgIGhhc1Blcm1pc3Npb249e2xvcmlzLnVzZXJIYXNQZXJtaXNzaW9ufVxuICAgIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3Jpc3dvcmtzcGFjZScpXG4gICk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nOyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgIClcblxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPVxuICAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yICYmIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgMHhlYWM3O1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICB2YXIgaXRlcmF0b3JGbiA9XG4gICAgbWF5YmVJdGVyYWJsZSAmJlxuICAgICgoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSkgfHxcbiAgICAgIG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gIH1cbn1cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAoY29tcG9uZW50ICYmIHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH1cbiAgLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoXG4gIGNoaWxkcmVuLFxuICBuYW1lU29GYXIsXG4gIGNhbGxiYWNrLFxuICB0cmF2ZXJzZUNvbnRleHRcbikge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgaWYgKFxuICAgIGNoaWxkcmVuID09PSBudWxsIHx8XG4gICAgdHlwZSA9PT0gJ3N0cmluZycgfHxcbiAgICB0eXBlID09PSAnbnVtYmVyJyB8fFxuICAgIC8vIFRoZSBmb2xsb3dpbmcgaXMgaW5saW5lZCBmcm9tIFJlYWN0RWxlbWVudC4gVGhpcyBtZWFucyB3ZSBjYW4gb3B0aW1pemVcbiAgICAvLyBzb21lIGNoZWNrcy4gUmVhY3QgRmliZXIgYWxzbyBpbmxpbmVzIHRoaXMgbG9naWMgZm9yIHNpbWlsYXIgcHVycG9zZXMuXG4gICAgKHR5cGUgPT09ICdvYmplY3QnICYmIGNoaWxkcmVuLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpXG4gICkge1xuICAgIGNhbGxiYWNrKFxuICAgICAgdHJhdmVyc2VDb250ZXh0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyXG4gICAgKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBuZXh0TmFtZSxcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIHRyYXZlcnNlQ29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMsXG4gICAgICAgICAgICAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArXG4gICAgICAgICAgICAgICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICtcbiAgICAgICAgICAgICAgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoXG4gICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgbmV4dE5hbWUsXG4gICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgdHJhdmVyc2VDb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhZGRlbmR1bSA9XG4gICAgICAgICAgJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgK1xuICAgICAgICAgICdpbnN0ZWFkIG9yIHdyYXAgdGhlIG9iamVjdCB1c2luZyBjcmVhdGVGcmFnbWVudChvYmplY3QpIGZyb20gdGhlICcgK1xuICAgICAgICAgICdSZWFjdCBhZGQtb25zLic7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50KFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJyxcbiAgICAgICAgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICAgICAgICAgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nXG4gICAgICAgICAgOiBjaGlsZHJlblN0cmluZyxcbiAgICAgICAgYWRkZW5kdW1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgb2xkRWxlbWVudCxcbiAgICB7a2V5OiBuZXdLZXl9LFxuICAgIG9sZEVsZW1lbnQucHJvcHMgIT09IHVuZGVmaW5lZCA/IG9sZEVsZW1lbnQucHJvcHMuY2hpbGRyZW4gOiB1bmRlZmluZWRcbiAgKTtcbn1cblxudmFyIERFRkFVTFRfUE9PTF9TSVpFID0gMTA7XG52YXIgREVGQVVMVF9QT09MRVIgPSBvbmVBcmd1bWVudFBvb2xlcjtcblxudmFyIG9uZUFyZ3VtZW50UG9vbGVyID0gZnVuY3Rpb24oY29weUZpZWxkc0Zyb20pIHtcbiAgdmFyIEtsYXNzID0gdGhpcztcbiAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBLbGFzcy5pbnN0YW5jZVBvb2wucG9wKCk7XG4gICAgS2xhc3MuY2FsbChpbnN0YW5jZSwgY29weUZpZWxkc0Zyb20pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEtsYXNzKGNvcHlGaWVsZHNGcm9tKTtcbiAgfVxufTtcblxudmFyIGFkZFBvb2xpbmdUbyA9IGZ1bmN0aW9uIGFkZFBvb2xpbmdUbyhDb3B5Q29uc3RydWN0b3IsIHBvb2xlcikge1xuICAvLyBDYXN0aW5nIGFzIGFueSBzbyB0aGF0IGZsb3cgaWdub3JlcyB0aGUgYWN0dWFsIGltcGxlbWVudGF0aW9uIGFuZCB0cnVzdHNcbiAgLy8gaXQgdG8gbWF0Y2ggdGhlIHR5cGUgd2UgZGVjbGFyZWRcbiAgdmFyIE5ld0tsYXNzID0gQ29weUNvbnN0cnVjdG9yO1xuICBOZXdLbGFzcy5pbnN0YW5jZVBvb2wgPSBbXTtcbiAgTmV3S2xhc3MuZ2V0UG9vbGVkID0gcG9vbGVyIHx8IERFRkFVTFRfUE9PTEVSO1xuICBpZiAoIU5ld0tsYXNzLnBvb2xTaXplKSB7XG4gICAgTmV3S2xhc3MucG9vbFNpemUgPSBERUZBVUxUX1BPT0xfU0laRTtcbiAgfVxuICBOZXdLbGFzcy5yZWxlYXNlID0gc3RhbmRhcmRSZWxlYXNlcjtcbiAgcmV0dXJuIE5ld0tsYXNzO1xufTtcblxudmFyIHN0YW5kYXJkUmVsZWFzZXIgPSBmdW5jdGlvbiBzdGFuZGFyZFJlbGVhc2VyKGluc3RhbmNlKSB7XG4gIHZhciBLbGFzcyA9IHRoaXM7XG4gIGludmFyaWFudChcbiAgICBpbnN0YW5jZSBpbnN0YW5jZW9mIEtsYXNzLFxuICAgICdUcnlpbmcgdG8gcmVsZWFzZSBhbiBpbnN0YW5jZSBpbnRvIGEgcG9vbCBvZiBhIGRpZmZlcmVudCB0eXBlLidcbiAgKTtcbiAgaW5zdGFuY2UuZGVzdHJ1Y3RvcigpO1xuICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCA8IEtsYXNzLnBvb2xTaXplKSB7XG4gICAgS2xhc3MuaW5zdGFuY2VQb29sLnB1c2goaW5zdGFuY2UpO1xuICB9XG59O1xuXG52YXIgZm91ckFyZ3VtZW50UG9vbGVyID0gZnVuY3Rpb24gZm91ckFyZ3VtZW50UG9vbGVyKGExLCBhMiwgYTMsIGE0KSB7XG4gIHZhciBLbGFzcyA9IHRoaXM7XG4gIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIGluc3RhbmNlID0gS2xhc3MuaW5zdGFuY2VQb29sLnBvcCgpO1xuICAgIEtsYXNzLmNhbGwoaW5zdGFuY2UsIGExLCBhMiwgYTMsIGE0KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBLbGFzcyhhMSwgYTIsIGEzLCBhNCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIE1hcEJvb2tLZWVwaW5nKG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICB0aGlzLnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgdGhpcy5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gIHRoaXMuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICB0aGlzLmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICB0aGlzLmNvdW50ID0gMDtcbn1cbk1hcEJvb2tLZWVwaW5nLnByb3RvdHlwZS5kZXN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgdGhpcy5rZXlQcmVmaXggPSBudWxsO1xuICB0aGlzLmZ1bmMgPSBudWxsO1xuICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICB0aGlzLmNvdW50ID0gMDtcbn07XG5hZGRQb29saW5nVG8oTWFwQm9va0tlZXBpbmcsIGZvdXJBcmd1bWVudFBvb2xlcik7XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0O1xuICB2YXIga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4O1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmM7XG4gIHZhciBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKFxuICAgICAgbWFwcGVkQ2hpbGQsXG4gICAgICByZXN1bHQsXG4gICAgICBjaGlsZEtleSxcbiAgICAgIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudFxuICAgICk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KFxuICAgICAgICBtYXBwZWRDaGlsZCxcbiAgICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGtleVByZWZpeCArXG4gICAgICAgICAgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KVxuICAgICAgICAgICAgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJ1xuICAgICAgICAgICAgOiAnJykgK1xuICAgICAgICAgIGNoaWxkS2V5XG4gICAgICApO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IE1hcEJvb2tLZWVwaW5nLmdldFBvb2xlZChcbiAgICBhcnJheSxcbiAgICBlc2NhcGVkUHJlZml4LFxuICAgIGZ1bmMsXG4gICAgY29udGV4dFxuICApO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICBNYXBCb29rS2VlcGluZy5yZWxlYXNlKHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbnZhciBudW1lcmljUHJvcGVydHlSZWdleCA9IC9eXFxkKyQvO1xuXG52YXIgd2FybmVkQWJvdXROdW1lcmljID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0RnJhZ21lbnQob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0JyB8fCAhb2JqZWN0IHx8IEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgIHdhcm5pbmcoXG4gICAgICBmYWxzZSxcbiAgICAgICdSZWFjdC5hZGRvbnMuY3JlYXRlRnJhZ21lbnQgb25seSBhY2NlcHRzIGEgc2luZ2xlIG9iamVjdC4gR290OiAlcycsXG4gICAgICBvYmplY3RcbiAgICApO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KG9iamVjdCkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgZmFsc2UsXG4gICAgICAnUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50IGRvZXMgbm90IGFjY2VwdCBhIFJlYWN0RWxlbWVudCAnICtcbiAgICAgICAgJ3dpdGhvdXQgYSB3cmFwcGVyIG9iamVjdC4nXG4gICAgKTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgaW52YXJpYW50KFxuICAgIG9iamVjdC5ub2RlVHlwZSAhPT0gMSxcbiAgICAnUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50KC4uLik6IEVuY291bnRlcmVkIGFuIGludmFsaWQgY2hpbGQ7IERPTSAnICtcbiAgICAgICdlbGVtZW50cyBhcmUgbm90IHZhbGlkIGNoaWxkcmVuIG9mIFJlYWN0IGNvbXBvbmVudHMuJ1xuICApO1xuXG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghd2FybmVkQWJvdXROdW1lcmljICYmIG51bWVyaWNQcm9wZXJ0eVJlZ2V4LnRlc3Qoa2V5KSkge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdSZWFjdC5hZGRvbnMuY3JlYXRlRnJhZ21lbnQoLi4uKTogQ2hpbGQgb2JqZWN0cyBzaG91bGQgaGF2ZSAnICtcbiAgICAgICAgICAgICdub24tbnVtZXJpYyBrZXlzIHNvIG9yZGVyaW5nIGlzIHByZXNlcnZlZC4nXG4gICAgICAgICk7XG4gICAgICAgIHdhcm5lZEFib3V0TnVtZXJpYyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoXG4gICAgICBvYmplY3Rba2V5XSxcbiAgICAgIHJlc3VsdCxcbiAgICAgIGtleSxcbiAgICAgIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJlYWN0RnJhZ21lbnQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjYuMVxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjYuMyc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xuXG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgZW5hYmxlSG9va3MgPSBmYWxzZTtcbi8vIEhlbHBzIGlkZW50aWZ5IHNpZGUgZWZmZWN0cyBpbiBiZWdpbi1waGFzZSBsaWZlY3ljbGUgaG9va3MgYW5kIHNldFN0YXRlIHJlZHVjZXJzOlxuXG5cbi8vIEluIHNvbWUgY2FzZXMsIFN0cmljdE1vZGUgc2hvdWxkIGFsc28gZG91YmxlLXJlbmRlciBsaWZlY3ljbGVzLlxuLy8gVGhpcyBjYW4gYmUgY29uZnVzaW5nIGZvciB0ZXN0cyB0aG91Z2gsXG4vLyBBbmQgaXQgY2FuIGJlIGJhZCBmb3IgcGVyZm9ybWFuY2UgaW4gcHJvZHVjdGlvbi5cbi8vIFRoaXMgZmVhdHVyZSBmbGFnIGNhbiBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yOlxuXG5cbi8vIFRvIHByZXNlcnZlIHRoZSBcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25zXCIgYmVoYXZpb3Igb2YgdGhlIGRlYnVnZ2VyLCB3ZVxuLy8gcmVwbGF5IHRoZSBiZWdpbiBwaGFzZSBvZiBhIGZhaWxlZCBjb21wb25lbnQgaW5zaWRlIGludm9rZUd1YXJkZWRDYWxsYmFjay5cblxuXG4vLyBXYXJuIGFib3V0IGRlcHJlY2F0ZWQsIGFzeW5jLXVuc2FmZSBsaWZlY3ljbGVzOyByZWxhdGVzIHRvIFJGQyAjNjpcblxuXG4vLyBHYXRoZXIgYWR2YW5jZWQgdGltaW5nIG1ldHJpY3MgZm9yIFByb2ZpbGVyIHN1YnRyZWVzLlxuXG5cbi8vIFRyYWNlIHdoaWNoIGludGVyYWN0aW9ucyB0cmlnZ2VyIGVhY2ggY29tbWl0LlxuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIFJlYWN0IEZpcmU6IHByZXZlbnQgdGhlIHZhbHVlIGFuZCBjaGVja2VkIGF0dHJpYnV0ZXMgZnJvbSBzeW5jaW5nXG4vLyB3aXRoIHRoZWlyIHJlbGF0ZWQgRE9NIHByb3BlcnRpZXNcblxuXG4vLyBUaGVzZSBBUElzIHdpbGwgbm8gbG9uZ2VyIGJlIFwidW5zdGFibGVcIiBpbiB0aGUgdXBjb21pbmcgMTYuNyByZWxlYXNlLFxuLy8gQ29udHJvbCB0aGlzIGJlaGF2aW9yIHdpdGggYSBmbGFnIHRvIHN1cHBvcnQgMTYuNiBtaW5vciByZWxlYXNlcyBpbiB0aGUgbWVhbndoaWxlLlxudmFyIGVuYWJsZVN0YWJsZUNvbmN1cnJlbnRNb2RlQVBJcyA9IGZhbHNlO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yID0gdm9pZCAwO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyBSZWx5aW5nIG9uIHRoZSBgaW52YXJpYW50KClgIGltcGxlbWVudGF0aW9uIGxldHMgdXNcbi8vIHByZXNlcnZlIHRoZSBmb3JtYXQgYW5kIHBhcmFtcyBpbiB0aGUgd3d3IGJ1aWxkcy5cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZ1dpdGhvdXRTdGFjayhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gOCkge1xuICAgICAgLy8gQ2hlY2sgYmVmb3JlIHRoZSBjb25kaXRpb24gdG8gY2F0Y2ggdmlvbGF0aW9ucyBlYXJseS5cbiAgICAgIHRocm93IG5ldyBFcnJvcignd2FybmluZ1dpdGhvdXRTdGFjaygpIGN1cnJlbnRseSBzdXBwb3J0cyBhdCBtb3N0IDggYXJndW1lbnRzLicpO1xuICAgIH1cbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpO1xuXG4gICAgICAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5lcnJvciwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayQxID0gd2FybmluZ1dpdGhvdXRTdGFjaztcblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBjYWxsZXJOYW1lO1xuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCBcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG5cbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogdm9pZCAwO1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcblxuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuXG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGwsXG4gIGN1cnJlbnREaXNwYXRjaGVyOiBudWxsXG59O1xuXG52YXIgQkVGT1JFX1NMQVNIX1JFID0gL14oLiopW1xcXFxcXC9dLztcblxudmFyIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgPSBmdW5jdGlvbiAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgdmFyIHNvdXJjZUluZm8gPSAnJztcbiAgaWYgKHNvdXJjZSkge1xuICAgIHZhciBwYXRoID0gc291cmNlLmZpbGVOYW1lO1xuICAgIHZhciBmaWxlTmFtZSA9IHBhdGgucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBwYXRoQmVmb3JlU2xhc2ggPSBtYXRjaFsxXTtcbiAgICAgICAgICBpZiAocGF0aEJlZm9yZVNsYXNoKSB7XG4gICAgICAgICAgICB2YXIgZm9sZGVyTmFtZSA9IHBhdGhCZWZvcmVTbGFzaC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgICAgICAgICAgZmlsZU5hbWUgPSBmb2xkZXJOYW1lICsgJy8nICsgZmlsZU5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgc291cmNlSW5mbztcbn07XG5cbnZhciBSZXNvbHZlZCA9IDE7XG5cblxuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgJygnICsgZnVuY3Rpb25OYW1lICsgJyknIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ0NvbmN1cnJlbnRNb2RlJztcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Db25zdW1lcic7XG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Qcm92aWRlcic7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgdGhlbmFibGUgPSB0eXBlO1xuICAgICAgICAgIHZhciByZXNvbHZlZFRoZW5hYmxlID0gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KHRoZW5hYmxlKTtcbiAgICAgICAgICBpZiAocmVzb2x2ZWRUaGVuYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUocmVzb2x2ZWRUaGVuYWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xuXG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxue1xuICAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJztcblxuICAgIC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcbiAgICBpZiAoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC50eXBlKTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lci50eXBlKSk7XG4gICAgfVxuXG4gICAgLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBfYXNzaWduKFJlYWN0U2hhcmVkSW50ZXJuYWxzLCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSB3YXJuaW5nV2l0aG91dFN0YWNrJDE7XG5cbntcbiAgd2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC93YXJuaW5nLWFuZC1pbnZhcmlhbnQtYXJnc1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEuYXBwbHkodW5kZWZpbmVkLCBbZmFsc2UsIGZvcm1hdCArICclcyddLmNvbmNhdChhcmdzLCBbc3RhY2tdKSk7XG4gIH07XG59XG5cbnZhciB3YXJuaW5nJDEgPSB3YXJuaW5nO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xuXG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgbm8gaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIgcHJvcHMgPSB7fTtcblxuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBSZWFjdEVsZW1lbnRzIG9mIGEgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZmFjdG9yeVxuICovXG5cblxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuXG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgJXMuJywgZWxlbWVudCkgOiB2b2lkIDA7XG5cbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjtcbiAgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmO1xuICAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTtcblxuICAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdm9pZCAwO1xuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG5cbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuXG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuXG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xuXG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxudmFyIFBPT0xfU0laRSA9IDEwO1xudmFyIHRyYXZlcnNlQ29udGV4dFBvb2wgPSBbXTtcbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbixcbiAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gdm9pZCAwO1xuICB2YXIgbmV4dE5hbWUgPSB2b2lkIDA7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICAhZGlkV2FybkFib3V0TWFwcyA/IHdhcm5pbmckMShmYWxzZSwgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgbGlrZWx5IHlpZWxkICcgKyAndW5leHBlY3RlZCByZXN1bHRzLiBDb252ZXJ0IGl0IHRvIGEgc2VxdWVuY2UvaXRlcmFibGUgb2Yga2V5ZWQgJyArICdSZWFjdEVsZW1lbnRzIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiAlcykuJXMnLCBjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcsIGFkZGVuZHVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsIGJ1dFxuICogbWlnaHQgYWxzbyBiZSBzcGVjaWZpZWQgdGhyb3VnaCBhdHRyaWJ1dGVzOlxuICpcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiwgLi4uKWBcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5sZWZ0UGFuZWxDaGlsZHJlbiwgLi4uKWBcbiAqXG4gKiBUaGUgYHRyYXZlcnNlQ29udGV4dGAgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGVcbiAqIGVudGlyZSB0cmF2ZXJzYWwuIEl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGFjY3VtdWxhdGlvbnMgb3IgYW55dGhpbmcgZWxzZSB0aGF0XG4gKiB0aGUgY2FsbGJhY2sgbWlnaHQgZmluZCByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIG9iamVjdC5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBUbyBpbnZva2UgdXBvbiB0cmF2ZXJzaW5nIGVhY2ggY2hpbGQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBmb3IgdHJhdmVyc2FsLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50ICE9PSBudWxsICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH1cbiAgLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobnVsbCwgbnVsbCwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0LFxuICAgICAga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4LFxuICAgICAgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuXG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwobWFwcGVkQ2hpbGQsIHJlc3VsdCwgY2hpbGRLZXksIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsXG4gICAgICAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICBrZXlQcmVmaXggKyAobWFwcGVkQ2hpbGQua2V5ICYmICghY2hpbGQgfHwgY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gZXNjYXBlVXNlclByb3ZpZGVkS2V5KG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG4gIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgIGVzY2FwZWRQcmVmaXggPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkocHJlZml4KSArICcvJztcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KGFycmF5LCBlc2NhcGVkUHJlZml4LCBmdW5jLCBjb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LCBudWxsKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAhaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJykgOiB2b2lkIDA7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgICEoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IG51bGwgfHwgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuXG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcblxuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTtcbiAgICAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG4gICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICEoXG4gICAgICAvLyBEbyBub3Qgd2FybiBmb3IgMCBhcmd1bWVudHMgYmVjYXVzZSBpdCBjb3VsZCBiZSBkdWUgdG8gdXNhZ2Ugb2YgdGhlICdhcmd1bWVudHMnIG9iamVjdFxuICAgICAgcmVuZGVyLmxlbmd0aCA9PT0gMCB8fCByZW5kZXIubGVuZ3RoID09PSAyKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgICEocmVuZGVyLmRlZmF1bHRQcm9wcyA9PSBudWxsICYmIHJlbmRlci5wcm9wVHlwZXMgPT0gbnVsbCkgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnREaXNwYXRjaGVyO1xuICAhKGRpc3BhdGNoZXIgIT09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAge1xuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0O1xuICAgICAgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIG9ic2VydmVkQml0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0aWFsQWN0aW9uKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGluaXRpYWxBY3Rpb24pO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uRWZmZWN0KGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTXV0YXRpb25FZmZlY3QoY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZU1ldGhvZHMocmVmLCBjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVNZXRob2RzKHJlZiwgY3JlYXRlLCBpbnB1dHMpO1xufVxuXG4vKipcbiAqIFJlYWN0RWxlbWVudFZhbGlkYXRvciBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIGEgZWxlbWVudCBmYWN0b3J5XG4gKiB3aGljaCB2YWxpZGF0ZXMgdGhlIHByb3BzIHBhc3NlZCB0byB0aGUgZWxlbWVudC4gVGhpcyBpcyBpbnRlbmRlZCB0byBiZVxuICogdXNlZCBvbmx5IGluIERFViBhbmQgY291bGQgYmUgcmVwbGFjZWQgYnkgYSBzdGF0aWMgdHlwZSBjaGVja2VyIGZvciBsYW5ndWFnZXNcbiAqIHRoYXQgc3VwcG9ydCBpdC5cbiAqL1xuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudFByb3BzLl9fc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgc291cmNlID0gZWxlbWVudFByb3BzLl9fc291cmNlO1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSAnXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArICcuJztcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhbiBhcnJheSBvciBpdGVyYXRvciBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcbiAgfVxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcCA9IHZvaWQgMDtcbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgdmFyIG5hbWUgPSB2b2lkIDAsXG4gICAgICBwcm9wVHlwZXMgPSB2b2lkIDA7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIENsYXNzIG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICAgIG5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZTtcbiAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKSB7XG4gICAgLy8gRm9yd2FyZFJlZlxuICAgIHZhciBmdW5jdGlvbk5hbWUgPSB0eXBlLnJlbmRlci5kaXNwbGF5TmFtZSB8fCB0eXBlLnJlbmRlci5uYW1lIHx8ICcnO1xuICAgIG5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gJ0ZvcndhcmRSZWYoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6ICdGb3J3YXJkUmVmJyk7XG4gICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9wVHlwZXMpIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKTtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBuYW1lIHx8ICdVbmtub3duJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7XG5cbiAgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0ocHJvcHMpO1xuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmcgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnPCcgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyAnIC8+JztcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuICAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG4gIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG52YXIgUmVhY3QgPSB7XG4gIENoaWxkcmVuOiB7XG4gICAgbWFwOiBtYXBDaGlsZHJlbixcbiAgICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gICAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gICAgdG9BcnJheTogdG9BcnJheSxcbiAgICBvbmx5OiBvbmx5Q2hpbGRcbiAgfSxcblxuICBjcmVhdGVSZWY6IGNyZWF0ZVJlZixcbiAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gIFB1cmVDb21wb25lbnQ6IFB1cmVDb21wb25lbnQsXG5cbiAgY3JlYXRlQ29udGV4dDogY3JlYXRlQ29udGV4dCxcbiAgZm9yd2FyZFJlZjogZm9yd2FyZFJlZixcbiAgbGF6eTogbGF6eSxcbiAgbWVtbzogbWVtbyxcblxuICBGcmFnbWVudDogUkVBQ1RfRlJBR01FTlRfVFlQRSxcbiAgU3RyaWN0TW9kZTogUkVBQ1RfU1RSSUNUX01PREVfVFlQRSxcbiAgU3VzcGVuc2U6IFJFQUNUX1NVU1BFTlNFX1RZUEUsXG5cbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24sXG4gIGlzVmFsaWRFbGVtZW50OiBpc1ZhbGlkRWxlbWVudCxcblxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb24sXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IFJlYWN0U2hhcmVkSW50ZXJuYWxzXG59O1xuXG5pZiAoZW5hYmxlU3RhYmxlQ29uY3VycmVudE1vZGVBUElzKSB7XG4gIFJlYWN0LkNvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG4gIFJlYWN0LlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn0gZWxzZSB7XG4gIFJlYWN0LnVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG4gIFJlYWN0LnVuc3RhYmxlX1Byb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cblxuaWYgKGVuYWJsZUhvb2tzKSB7XG4gIFJlYWN0LnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG4gIFJlYWN0LnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuICBSZWFjdC51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVNZXRob2RzID0gdXNlSW1wZXJhdGl2ZU1ldGhvZHM7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbiAgUmVhY3QudXNlTWVtbyA9IHVzZU1lbW87XG4gIFJlYWN0LnVzZU11dGF0aW9uRWZmZWN0ID0gdXNlTXV0YXRpb25FZmZlY3Q7XG4gIFJlYWN0LnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuICBSZWFjdC51c2VSZWYgPSB1c2VSZWY7XG4gIFJlYWN0LnVzZVN0YXRlID0gdXNlU3RhdGU7XG59XG5cblxuXG52YXIgUmVhY3QkMiA9IE9iamVjdC5mcmVlemUoe1xuXHRkZWZhdWx0OiBSZWFjdFxufSk7XG5cbnZhciBSZWFjdCQzID0gKCBSZWFjdCQyICYmIFJlYWN0ICkgfHwgUmVhY3QkMjtcblxuLy8gVE9ETzogZGVjaWRlIG9uIHRoZSB0b3AtbGV2ZWwgZXhwb3J0IGZvcm0uXG4vLyBUaGlzIGlzIGhhY2t5IGJ1dCBtYWtlcyBpdCB3b3JrIHdpdGggYm90aCBSb2xsdXAgYW5kIEplc3QuXG52YXIgcmVhY3QgPSBSZWFjdCQzLmRlZmF1bHQgfHwgUmVhY3QkMztcblxubW9kdWxlLmV4cG9ydHMgPSByZWFjdDtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyohXG4qIHN3ZWV0YWxlcnQyIHY3LjI5LjJcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Td2VldGFsZXJ0MiA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxudmFyIGNvbnNvbGVQcmVmaXggPSAnU3dlZXRBbGVydDI6Jztcbi8qKlxuICogRmlsdGVyIHRoZSB1bmlxdWUgdmFsdWVzIGludG8gYSBuZXcgYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqL1xuXG52YXIgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheShhcnIpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlc3VsdC5pbmRleE9mKGFycltpXSkgPT09IC0xKSB7XG4gICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBDb252ZXJ0IE5vZGVMaXN0IHRvIEFycmF5XG4gKiBAcGFyYW0gbm9kZUxpc3RcbiAqL1xuXG52YXIgdG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkobm9kZUxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KTtcbn07XG4vKipcbiAqIENvbnZlcnRzIGBpbnB1dE9wdGlvbnNgIGludG8gYW4gYXJyYXkgb2YgYFt2YWx1ZSwgbGFiZWxdYHNcbiAqIEBwYXJhbSBpbnB1dE9wdGlvbnNcbiAqL1xuXG52YXIgZm9ybWF0SW5wdXRPcHRpb25zID0gZnVuY3Rpb24gZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmIGlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5rZXlzKGlucHV0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXN1bHQucHVzaChba2V5LCBpbnB1dE9wdGlvbnNba2V5XV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cblxudmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgY29uc29sZS53YXJuKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSBlcnJvcnNcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cblxudmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICBjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcbi8qKlxuICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcyA9IFtdO1xuLyoqXG4gKiBTaG93IGEgY29uc29sZSB3YXJuaW5nLCBidXQgb25seSBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNob3duXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciB3YXJuT25jZSA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgaWYgKCEocHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSkgIT09IC0xKSkge1xuICAgIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHdhcm4obWVzc2FnZSk7XG4gIH1cbn07XG4vKipcbiAqIElmIGBhcmdgIGlzIGEgZnVuY3Rpb24sIGNhbGwgaXQgKHdpdGggbm8gYXJndW1lbnRzIG9yIGNvbnRleHQpIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAqIE90aGVyd2lzZSwganVzdCBwYXNzIHRoZSB2YWx1ZSB0aHJvdWdoXG4gKiBAcGFyYW0gYXJnXG4gKi9cblxudmFyIGNhbGxJZkZ1bmN0aW9uID0gZnVuY3Rpb24gY2FsbElmRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKCkgOiBhcmc7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiBpc1RoZW5hYmxlKGFyZykge1xuICByZXR1cm4gYXJnICYmIF90eXBlb2YoYXJnKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGFyZy50aGVuID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIERpc21pc3NSZWFzb24gPSBPYmplY3QuZnJlZXplKHtcbiAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgYmFja2Ryb3A6ICdvdmVybGF5JyxcbiAgY2xvc2U6ICdjbG9zZScsXG4gIGVzYzogJ2VzYycsXG4gIHRpbWVyOiAndGltZXInXG59KTtcblxudmFyIGFyZ3NUb1BhcmFtcyA9IGZ1bmN0aW9uIGFyZ3NUb1BhcmFtcyhhcmdzKSB7XG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBzd2l0Y2ggKF90eXBlb2YoYXJnc1swXSkpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgX2V4dGVuZHMocGFyYW1zLCBhcmdzWzBdKTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgWyd0aXRsZScsICdodG1sJywgJ3R5cGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICBzd2l0Y2ggKF90eXBlb2YoYXJnc1tpbmRleF0pKSB7XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHBhcmFtc1tuYW1lXSA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgXCIuY29uY2F0KG5hbWUsIFwiISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiwgZ290IFwiKS5jb25jYXQoX3R5cGVvZihhcmdzW2luZGV4XSkpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zO1xufTtcblxuLyoqXG4gKiBBZGFwdCBhIGxlZ2FjeSBpbnB1dFZhbGlkYXRvciBmb3IgdXNlIHdpdGggZXhwZWN0UmVqZWN0aW9ucz1mYWxzZVxuICovXG52YXIgYWRhcHRJbnB1dFZhbGlkYXRvciA9IGZ1bmN0aW9uIGFkYXB0SW5wdXRWYWxpZGF0b3IobGVnYWN5VmFsaWRhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBhZGFwdGVkSW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpIHtcbiAgICByZXR1cm4gbGVnYWN5VmFsaWRhdG9yLmNhbGwodGhpcywgaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbnZhciBzd2FsUHJlZml4ID0gJ3N3YWwyLSc7XG52YXIgcHJlZml4ID0gZnVuY3Rpb24gcHJlZml4KGl0ZW1zKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIGl0ZW1zKSB7XG4gICAgcmVzdWx0W2l0ZW1zW2ldXSA9IHN3YWxQcmVmaXggKyBpdGVtc1tpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIHN3YWxDbGFzc2VzID0gcHJlZml4KFsnY29udGFpbmVyJywgJ3Nob3duJywgJ2hlaWdodC1hdXRvJywgJ2lvc2ZpeCcsICdwb3B1cCcsICdtb2RhbCcsICduby1iYWNrZHJvcCcsICd0b2FzdCcsICd0b2FzdC1zaG93bicsICd0b2FzdC1jb2x1bW4nLCAnZmFkZScsICdzaG93JywgJ2hpZGUnLCAnbm9hbmltYXRpb24nLCAnY2xvc2UnLCAndGl0bGUnLCAnaGVhZGVyJywgJ2NvbnRlbnQnLCAnYWN0aW9ucycsICdjb25maXJtJywgJ2NhbmNlbCcsICdmb290ZXInLCAnaWNvbicsICdpY29uLXRleHQnLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAnbGFiZWwnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICd2YWxpZGF0aW9uLW1lc3NhZ2UnLCAncHJvZ3Jlc3NzdGVwcycsICdhY3RpdmVwcm9ncmVzc3N0ZXAnLCAncHJvZ3Jlc3NjaXJjbGUnLCAncHJvZ3Jlc3NsaW5lJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3Atc3RhcnQnLCAndG9wLWVuZCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1zdGFydCcsICdjZW50ZXItZW5kJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbicsICdydGwnXSk7XG52YXIgaWNvblR5cGVzID0gcHJlZml4KFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2luZm8nLCAncXVlc3Rpb24nLCAnZXJyb3InXSk7XG5cbnZhciBzdGF0ZXMgPSB7XG4gIHByZXZpb3VzQm9keVBhZGRpbmc6IG51bGxcbn07XG52YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59O1xudmFyIGZvY3VzSW5wdXQgPSBmdW5jdGlvbiBmb2N1c0lucHV0KGlucHV0KSB7XG4gIGlucHV0LmZvY3VzKCk7IC8vIHBsYWNlIGN1cnNvciBhdCBlbmQgb2YgdGV4dCBpbiB0ZXh0IGlucHV0XG5cbiAgaWYgKGlucHV0LnR5cGUgIT09ICdmaWxlJykge1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNDU5MTVcbiAgICB2YXIgdmFsID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICBpbnB1dC52YWx1ZSA9IHZhbDtcbiAgfVxufTtcblxudmFyIGFkZE9yUmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiBhZGRPclJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCBhZGQpIHtcbiAgaWYgKCF0YXJnZXQgfHwgIWNsYXNzTGlzdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuXG4gIGNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAodGFyZ2V0LmZvckVhY2gpIHtcbiAgICAgIHRhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGFkZCA/IGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkID8gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpO1xufTtcbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGZhbHNlKTtcbn07XG52YXIgZ2V0Q2hpbGRCeUNsYXNzID0gZnVuY3Rpb24gZ2V0Q2hpbGRCeUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChoYXNDbGFzcyhlbGVtLmNoaWxkTm9kZXNbaV0sIGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiBlbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGVsZW0uaWQgPT09IHN3YWxDbGFzc2VzLmNvbnRlbnQgPyAnYmxvY2snIDogJ2ZsZXgnO1xufTtcbnZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59OyAvLyBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG5cbnZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWxlbSkge1xuICByZXR1cm4gZWxlbSAmJiAoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn07XG5cbnZhciBnZXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRDb250YWluZXIoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY29udGFpbmVyKTtcbn07XG5cbnZhciBlbGVtZW50QnlDbGFzcyA9IGZ1bmN0aW9uIGVsZW1lbnRCeUNsYXNzKGNsYXNzTmFtZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHJldHVybiBjb250YWluZXIgPyBjb250YWluZXIucXVlcnlTZWxlY3RvcignLicgKyBjbGFzc05hbWUpIDogbnVsbDtcbn07XG5cbnZhciBnZXRQb3B1cCA9IGZ1bmN0aW9uIGdldFBvcHVwKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucG9wdXApO1xufTtcbnZhciBnZXRJY29ucyA9IGZ1bmN0aW9uIGdldEljb25zKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICByZXR1cm4gdG9BcnJheShwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHN3YWxDbGFzc2VzLmljb24pKTtcbn07XG52YXIgZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnRpdGxlKTtcbn07XG52YXIgZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb250ZW50KTtcbn07XG52YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcbn07XG52YXIgZ2V0UHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIGdldFByb2dyZXNzU3RlcHMoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wcm9ncmVzc3N0ZXBzKTtcbn07XG52YXIgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG59O1xudmFyIGdldENvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiBnZXRDb25maXJtQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY29uZmlybSk7XG59O1xudmFyIGdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uIGdldENhbmNlbEJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNhbmNlbCk7XG59O1xuLyogQGRlcHJlY2F0ZWQgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIGdldEJ1dHRvbnNXcmFwcGVyID0gZnVuY3Rpb24gZ2V0QnV0dG9uc1dyYXBwZXIoKSB7XG4gIHdhcm5PbmNlKFwic3dhbC5nZXRCdXR0b25zV3JhcHBlcigpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLCB1c2Ugc3dhbC5nZXRBY3Rpb25zKCkgaW5zdGVhZFwiKTtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmFjdGlvbnMpO1xufTtcbnZhciBnZXRBY3Rpb25zID0gZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmFjdGlvbnMpO1xufTtcbnZhciBnZXRGb290ZXIgPSBmdW5jdGlvbiBnZXRGb290ZXIoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5mb290ZXIpO1xufTtcbnZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xufTtcbnZhciBnZXRGb2N1c2FibGVFbGVtZW50cyA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICB2YXIgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXggPSB0b0FycmF5KGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpKSAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGEgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG4gICAgYiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcblxuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9KTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2prdXAvZm9jdXNhYmxlL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5cbiAgdmFyIG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSB0b0FycmF5KGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4PVwiMFwiXSwgW2NvbnRlbnRlZGl0YWJsZV0sIGF1ZGlvW2NvbnRyb2xzXSwgdmlkZW9bY29udHJvbHNdJykpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9PSAnLTEnO1xuICB9KTtcbiAgcmV0dXJuIHVuaXF1ZUFycmF5KGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4LmNvbmNhdChvdGhlckZvY3VzYWJsZUVsZW1lbnRzKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBpc1Zpc2libGUoZWwpO1xuICB9KTtcbn07XG52YXIgaXNNb2RhbCA9IGZ1bmN0aW9uIGlzTW9kYWwoKSB7XG4gIHJldHVybiAhaXNUb2FzdCgpICYmICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG59O1xudmFyIGlzVG9hc3QgPSBmdW5jdGlvbiBpc1RvYXN0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xufTtcbnZhciBpc0xvYWRpbmcgPSBmdW5jdGlvbiBpc0xvYWRpbmcoKSB7XG4gIHJldHVybiBnZXRQb3B1cCgpLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG59O1xuXG4vLyBEZXRlY3QgTm9kZSBlbnZcbnZhciBpc05vZGVFbnYgPSBmdW5jdGlvbiBpc05vZGVFbnYoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIHN3ZWV0SFRNTCA9IFwiXFxuIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVxcXCJcIi5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCJcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5oZWFkZXIsIFwiXFxcIj5cXG4gICAgIDx1bCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5wcm9ncmVzc3N0ZXBzLCBcIlxcXCI+PC91bD5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuZXJyb3IsIFwiXFxcIj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFya1xcXCI+PHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLWxlZnRcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcXFwiPjwvc3Bhbj48L3NwYW4+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMucXVlc3Rpb24sIFwiXFxcIj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2ljb24tdGV4dCddLCBcIlxcXCI+Pzwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMud2FybmluZywgXCJcXFwiPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi10ZXh0J10sIFwiXFxcIj4hPC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5pbmZvLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydpY29uLXRleHQnXSwgXCJcXFwiPmk8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLnN1Y2Nlc3MsIFwiXFxcIj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcXFwiPjwvZGl2PlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcXFwiPjwvc3Bhbj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1yaW5nXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1maXhcXFwiPjwvZGl2PlxcbiAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcXFwiPjwvZGl2PlxcbiAgICAgPC9kaXY+XFxuICAgICA8aW1nIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmltYWdlLCBcIlxcXCIgLz5cXG4gICAgIDxoMiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCI+PC9oMj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jbG9zZSwgXCJcXFwiPlxceEQ3PC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCI+XFxuICAgICA8ZGl2IGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxpbnB1dCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbnB1dCwgXCJcXFwiIC8+XFxuICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZmlsZSwgXCJcXFwiIC8+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIlxcXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYW5nZVxcXCIgLz5cXG4gICAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICAgIDwvZGl2PlxcbiAgICAgPHNlbGVjdCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5zZWxlY3QsIFwiXFxcIj48L3NlbGVjdD5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxsYWJlbCBmb3I9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmxhYmVsLCBcIlxcXCI+PC9zcGFuPlxcbiAgICAgPC9sYWJlbD5cXG4gICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50ZXh0YXJlYSwgXCJcXFwiPjwvdGV4dGFyZWE+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCJcXFwiPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbmZpcm0sIFwiXFxcIj5PSzwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCwgXCJcXFwiPkNhbmNlbDwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZm9vdGVyLCBcIlxcXCI+XFxuICAgPC9kaXY+XFxuIDwvZGl2PlxcblwiKS5yZXBsYWNlKC8oXnxcXG4pXFxzKi9nLCAnJyk7XG4vKlxuICogQWRkIG1vZGFsICsgYmFja2Ryb3AgdG8gRE9NXG4gKi9cblxudmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHBhcmFtcykge1xuICAvLyBDbGVhbiB1cCB0aGUgb2xkIHBvcHVwIGlmIGl0IGV4aXN0c1xuICB2YXIgYyA9IGdldENvbnRhaW5lcigpO1xuXG4gIGlmIChjKSB7XG4gICAgYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpO1xuICAgIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLCBzd2FsQ2xhc3Nlc1snaGFzLWNvbHVtbiddXSk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cblxuICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbnRhaW5lcjtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHN3ZWV0SFRNTDtcbiAgdmFyIHRhcmdldEVsZW1lbnQgPSB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIDogcGFyYW1zLnRhcmdldDtcbiAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcbiAgdmFyIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgdmFyIGZpbGUgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gIHZhciByYW5nZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIGlucHV0XCIpKTtcbiAgdmFyIHJhbmdlT3V0cHV0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgb3V0cHV0XCIpKTtcbiAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICB2YXIgY2hlY2tib3ggPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIiBpbnB1dFwiKSk7XG4gIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7IC8vIGExMXlcblxuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBwYXJhbXMudG9hc3QgPyAnYWxlcnQnIDogJ2RpYWxvZycpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIHBhcmFtcy50b2FzdCA/ICdwb2xpdGUnIDogJ2Fzc2VydGl2ZScpO1xuXG4gIGlmICghcGFyYW1zLnRvYXN0KSB7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgfSAvLyBSVExcblxuXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRFbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgYWRkQ2xhc3MoZ2V0Q29udGFpbmVyKCksIHN3YWxDbGFzc2VzLnJ0bCk7XG4gIH1cblxuICB2YXIgb2xkSW5wdXRWYWw7IC8vIElFMTEgd29ya2Fyb3VuZCwgc2VlICMxMTA5IGZvciBkZXRhaWxzXG5cbiAgdmFyIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpIHtcbiAgICBpZiAoU3dhbC5pc1Zpc2libGUoKSAmJiBvbGRJbnB1dFZhbCAhPT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIFN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIG9sZElucHV0VmFsID0gZS50YXJnZXQudmFsdWU7XG4gIH07XG5cbiAgaW5wdXQub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gIGZpbGUub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICBzZWxlY3Qub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICBjaGVja2JveC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gIHRleHRhcmVhLm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuXG4gIHJhbmdlLm9uaW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSk7XG4gICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcblxuICByYW5nZS5vbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKTtcbiAgICByYW5nZS5uZXh0U2libGluZy52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICB9O1xuXG4gIHJldHVybiBwb3B1cDtcbn07XG5cbnZhciBwYXJzZUh0bWxUb0NvbnRhaW5lciA9IGZ1bmN0aW9uIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtLCB0YXJnZXQpIHtcbiAgaWYgKCFwYXJhbSkge1xuICAgIHJldHVybiBoaWRlKHRhcmdldCk7XG4gIH1cblxuICBpZiAoX3R5cGVvZihwYXJhbSkgPT09ICdvYmplY3QnKSB7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKDAgaW4gcGFyYW0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIGluIHBhcmFtOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmFtW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChwYXJhbSkge1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSBwYXJhbTtcbiAgfVxuXG4gIHNob3codGFyZ2V0KTtcbn07XG5cbnZhciBhbmltYXRpb25FbmRFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xuICAgICdXZWJraXRBbmltYXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAnT0FuaW1hdGlvbic6ICdvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQnLFxuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJ1xuICB9O1xuXG4gIGZvciAodmFyIGkgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgaWYgKHRyYW5zRW5kRXZlbnROYW1lcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiB0eXBlb2YgdGVzdEVsLnN0eWxlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRyYW5zRW5kRXZlbnROYW1lc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KCk7XG5cbi8vIE1lYXN1cmUgd2lkdGggb2Ygc2Nyb2xsYmFyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvanMvbW9kYWwuanMjTDI3OS1MMjg2XG52YXIgbWVhc3VyZVNjcm9sbGJhciA9IGZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gIHZhciBzdXBwb3J0c1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzO1xuXG4gIGlmIChzdXBwb3J0c1RvdWNoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn07XG5cbnZhciByZW5kZXJBY3Rpb25zID0gZnVuY3Rpb24gcmVuZGVyQWN0aW9ucyhwYXJhbXMpIHtcbiAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7IC8vIEFjdGlvbnMgKGJ1dHRvbnMpIHdyYXBwZXJcblxuICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBoaWRlKGFjdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHNob3coYWN0aW9ucyk7XG4gIH0gLy8gQ2FuY2VsIGJ1dHRvblxuXG5cbiAgaWYgKHBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNhbmNlbEJ1dHRvbik7XG4gIH0gLy8gQ29uZmlybSBidXR0b25cblxuXG4gIGlmIChwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjb25maXJtQnV0dG9uKTtcbiAgfSAvLyBFZGl0IHRleHQgb24gY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcblxuXG4gIGNvbmZpcm1CdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0O1xuICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNhbmNlbEJ1dHRvblRleHQ7IC8vIEFSSUEgbGFiZWxzIGZvciBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuXG4gIGNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNvbmZpcm1CdXR0b25BcmlhTGFiZWwpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNhbmNlbEJ1dHRvbkFyaWFMYWJlbCk7IC8vIEFkZCBidXR0b25zIGN1c3RvbSBjbGFzc2VzXG5cbiAgY29uZmlybUJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb25maXJtO1xuICBhZGRDbGFzcyhjb25maXJtQnV0dG9uLCBwYXJhbXMuY29uZmlybUJ1dHRvbkNsYXNzKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNhbmNlbDtcbiAgYWRkQ2xhc3MoY2FuY2VsQnV0dG9uLCBwYXJhbXMuY2FuY2VsQnV0dG9uQ2xhc3MpOyAvLyBCdXR0b25zIHN0eWxpbmdcblxuICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgYWRkQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7IC8vIEJ1dHRvbnMgYmFja2dyb3VuZCBjb2xvcnNcblxuICAgIGlmIChwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcikge1xuICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgICB9IC8vIExvYWRpbmcgc3RhdGVcblxuXG4gICAgdmFyIGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb25maXJtQnV0dG9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjb25maXJtQnV0dG9uQmFja2dyb3VuZENvbG9yO1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY2FuY2VsQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgfVxufTtcblxudmFyIHJlbmRlckNvbnRlbnQgPSBmdW5jdGlvbiByZW5kZXJDb250ZW50KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKS5xdWVyeVNlbGVjdG9yKCcjJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQpOyAvLyBDb250ZW50IGFzIEhUTUxcblxuICBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgY29udGVudCk7IC8vIENvbnRlbnQgYXMgcGxhaW4gdGV4dFxuICB9IGVsc2UgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgIHNob3coY29udGVudCk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjb250ZW50KTtcbiAgfVxufTtcblxudmFyIHJlbmRlckljb24gPSBmdW5jdGlvbiByZW5kZXJJY29uKHBhcmFtcykge1xuICB2YXIgaWNvbnMgPSBnZXRJY29ucygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaWNvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBoaWRlKGljb25zW2ldKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMudHlwZSkge1xuICAgIGlmIChPYmplY3Qua2V5cyhpY29uVHlwZXMpLmluZGV4T2YocGFyYW1zLnR5cGUpICE9PSAtMSkge1xuICAgICAgdmFyIGljb24gPSBTd2FsLmdldFBvcHVwKCkucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIuXCIpLmNvbmNhdChpY29uVHlwZXNbcGFyYW1zLnR5cGVdKSk7XG4gICAgICBzaG93KGljb24pOyAvLyBBbmltYXRlIGljb25cblxuICAgICAgaWYgKHBhcmFtcy5hbmltYXRpb24pIHtcbiAgICAgICAgYWRkQ2xhc3MoaWNvbiwgXCJzd2FsMi1hbmltYXRlLVwiLmNvbmNhdChwYXJhbXMudHlwZSwgXCItaWNvblwiKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yKFwiVW5rbm93biB0eXBlISBFeHBlY3RlZCBcXFwic3VjY2Vzc1xcXCIsIFxcXCJlcnJvclxcXCIsIFxcXCJ3YXJuaW5nXFxcIiwgXFxcImluZm9cXFwiIG9yIFxcXCJxdWVzdGlvblxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KHBhcmFtcy50eXBlLCBcIlxcXCJcIikpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHJlbmRlckltYWdlID0gZnVuY3Rpb24gcmVuZGVySW1hZ2UocGFyYW1zKSB7XG4gIHZhciBpbWFnZSA9IGdldEltYWdlKCk7XG5cbiAgaWYgKHBhcmFtcy5pbWFnZVVybCkge1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcGFyYW1zLmltYWdlVXJsKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBhcmFtcy5pbWFnZUFsdCk7XG4gICAgc2hvdyhpbWFnZSk7XG5cbiAgICBpZiAocGFyYW1zLmltYWdlV2lkdGgpIHtcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBwYXJhbXMuaW1hZ2VXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmltYWdlSGVpZ2h0KSB7XG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgfVxuXG4gICAgaW1hZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuaW1hZ2U7XG5cbiAgICBpZiAocGFyYW1zLmltYWdlQ2xhc3MpIHtcbiAgICAgIGFkZENsYXNzKGltYWdlLCBwYXJhbXMuaW1hZ2VDbGFzcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhpZGUoaW1hZ2UpO1xuICB9XG59O1xuXG52YXIgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzU3RlcHMocGFyYW1zKSB7XG4gIHZhciBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuICB2YXIgY3VycmVudFByb2dyZXNzU3RlcCA9IHBhcnNlSW50KHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwID09PSBudWxsID8gU3dhbC5nZXRRdWV1ZVN0ZXAoKSA6IHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwLCAxMCk7XG5cbiAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzICYmIHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGlmIChjdXJyZW50UHJvZ3Jlc3NTdGVwID49IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgICAgd2FybignSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICsgJyhjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApJyk7XG4gICAgfVxuXG4gICAgcGFyYW1zLnByb2dyZXNzU3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgYWRkQ2xhc3MoY2lyY2xlLCBzd2FsQ2xhc3Nlcy5wcm9ncmVzc2NpcmNsZSk7XG4gICAgICBjaXJjbGUuaW5uZXJIVE1MID0gc3RlcDtcblxuICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50UHJvZ3Jlc3NTdGVwKSB7XG4gICAgICAgIGFkZENsYXNzKGNpcmNsZSwgc3dhbENsYXNzZXMuYWN0aXZlcHJvZ3Jlc3NzdGVwKTtcbiAgICAgIH1cblxuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBhZGRDbGFzcyhsaW5lLCBzd2FsQ2xhc3Nlcy5wcm9ncmVzc2xpbmUpO1xuXG4gICAgICAgIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlKSB7XG4gICAgICAgICAgbGluZS5zdHlsZS53aWR0aCA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGhpZGUocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gIH1cbn07XG5cbnZhciByZW5kZXJUaXRsZSA9IGZ1bmN0aW9uIHJlbmRlclRpdGxlKHBhcmFtcykge1xuICB2YXIgdGl0bGUgPSBnZXRUaXRsZSgpO1xuXG4gIGlmIChwYXJhbXMudGl0bGVUZXh0KSB7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRpdGxlVGV4dDtcbiAgfSBlbHNlIGlmIChwYXJhbXMudGl0bGUpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy50aXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcy50aXRsZSA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gICAgfVxuXG4gICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLnRpdGxlLCB0aXRsZSk7XG4gIH1cbn07XG5cbnZhciBmaXhTY3JvbGxiYXIgPSBmdW5jdGlvbiBmaXhTY3JvbGxiYXIoKSB7XG4gIC8vIGZvciBxdWV1ZXMsIGRvIG5vdCBkbyB0aGlzIG1vcmUgdGhhbiBvbmNlXG4gIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiB0aGUgYm9keSBoYXMgb3ZlcmZsb3dcblxuXG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIC8vIGFkZCBwYWRkaW5nIHNvIHRoZSBjb250ZW50IGRvZXNuJ3Qgc2hpZnQgYWZ0ZXIgcmVtb3ZhbCBvZiBzY3JvbGxiYXJcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyArIG1lYXN1cmVTY3JvbGxiYXIoKSArICdweCc7XG4gIH1cbn07XG52YXIgdW5kb1Njcm9sbGJhciA9IGZ1bmN0aW9uIHVuZG9TY3JvbGxiYXIoKSB7XG4gIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmc7XG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBudWxsO1xuICB9XG59O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgaU9TZml4ID0gZnVuY3Rpb24gaU9TZml4KCkge1xuICB2YXIgaU9TID0gL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbTtcblxuICBpZiAoaU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgdmFyIG9mZnNldCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gb2Zmc2V0ICogLTEgKyAncHgnO1xuICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gIH1cbn07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgdW5kb0lPU2ZpeCA9IGZ1bmN0aW9uIHVuZG9JT1NmaXgoKSB7XG4gIGlmIChoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gb2Zmc2V0ICogLTE7XG4gIH1cbn07XG5cbnZhciBpc0lFMTEgPSBmdW5jdGlvbiBpc0lFMTEoKSB7XG4gIHJldHVybiAhIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcbn07IC8vIEZpeCBJRTExIGNlbnRlcmluZyBzd2VldGFsZXJ0Mi9pc3N1ZXMvOTMzXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxudmFyIGZpeFZlcnRpY2FsUG9zaXRpb25JRSA9IGZ1bmN0aW9uIGZpeFZlcnRpY2FsUG9zaXRpb25JRSgpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICBjb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2FsaWduLWl0ZW1zJyk7XG5cbiAgaWYgKHBvcHVwLm9mZnNldFRvcCA8IDApIHtcbiAgICBjb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0JztcbiAgfVxufTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxudmFyIElFZml4ID0gZnVuY3Rpb24gSUVmaXgoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0lFMTEoKSkge1xuICAgIGZpeFZlcnRpY2FsUG9zaXRpb25JRSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpO1xuICB9XG59O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIHVuZG9JRWZpeCA9IGZ1bmN0aW9uIHVuZG9JRWZpeCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlzSUUxMSgpKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFZlcnRpY2FsUG9zaXRpb25JRSk7XG4gIH1cbn07XG5cbi8vIEFkZGluZyBhcmlhLWhpZGRlbj1cInRydWVcIiB0byBlbGVtZW50cyBvdXRzaWRlIG9mIHRoZSBhY3RpdmUgbW9kYWwgZGlhbG9nIGVuc3VyZXMgdGhhdFxuLy8gZWxlbWVudHMgbm90IHdpdGhpbiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyB3aWxsIG5vdCBiZSBzdXJmYWNlZCBpZiBhIHVzZXIgb3BlbnMgYSBzY3JlZW5cbi8vIHJlYWRlcuKAmXMgbGlzdCBvZiBlbGVtZW50cyAoaGVhZGluZ3MsIGZvcm0gY29udHJvbHMsIGxhbmRtYXJrcywgZXRjLikgaW4gdGhlIGRvY3VtZW50LlxuXG52YXIgc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHNldEFyaWFIaWRkZW4oKSB7XG4gIHZhciBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICBib2R5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwgPT09IGdldENvbnRhaW5lcigpIHx8IGVsLmNvbnRhaW5zKGdldENvbnRhaW5lcigpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSk7XG4gICAgfVxuXG4gICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIH0pO1xufTtcbnZhciB1bnNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiB1bnNldEFyaWFIaWRkZW4oKSB7XG4gIHZhciBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICBib2R5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSk7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgUkVTVE9SRV9GT0NVU19USU1FT1VUID0gMTAwO1xuXG52YXIgZ2xvYmFsU3RhdGUgPSB7fTtcbnZhciByZXN0b3JlQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIHJlc3RvcmVBY3RpdmVFbGVtZW50KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB2YXIgeCA9IHdpbmRvdy5zY3JvbGxYO1xuICAgIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCAmJiBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgUkVTVE9SRV9GT0NVU19USU1FT1VUKTsgLy8gaXNzdWVzLzkwMFxuXG4gICAgaWYgKHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIElFIGRvZXNuJ3QgaGF2ZSBzY3JvbGxYL3Njcm9sbFkgc3VwcG9ydFxuICAgICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsb3NlIHN3ZWV0QWxlcnRcbiAqL1xuXG52YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZShvbkNsb3NlLCBvbkFmdGVyQ2xvc2UpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmICghcG9wdXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAob25DbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9uQ2xvc2UocG9wdXApO1xuICB9XG5cbiAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSk7XG5cbiAgdmFyIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSA9IGZ1bmN0aW9uIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSgpIHtcbiAgICBpZiAoIWlzVG9hc3QoKSkge1xuICAgICAgcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXJPbkFmdGVyQ2xvc2Uob25BZnRlckNsb3NlKTtcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaWdnZXJPbkFmdGVyQ2xvc2Uob25BZnRlckNsb3NlKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlcy5zaG93biwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddXSk7XG5cbiAgICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgICB1bmRvU2Nyb2xsYmFyKCk7XG4gICAgICB1bmRvSU9TZml4KCk7XG4gICAgICB1bmRvSUVmaXgoKTtcbiAgICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cbiAgfTsgLy8gSWYgYW5pbWF0aW9uIGlzIHN1cHBvcnRlZCwgYW5pbWF0ZVxuXG5cbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmICFoYXNDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pKSB7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gc3dhbENsb3NlRXZlbnRGaW5pc2hlZCgpIHtcbiAgICAgIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQpO1xuXG4gICAgICBpZiAoaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpKSB7XG4gICAgICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgcmVtb3ZlIGltbWVkaWF0ZWx5XG4gICAgcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKCk7XG4gIH1cbn07XG5cbnZhciB0cmlnZ2VyT25BZnRlckNsb3NlID0gZnVuY3Rpb24gdHJpZ2dlck9uQWZ0ZXJDbG9zZShvbkFmdGVyQ2xvc2UpIHtcbiAgaWYgKG9uQWZ0ZXJDbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25BZnRlckNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkFmdGVyQ2xvc2UoKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgc3dhbDIgcG9wdXAgaXMgc2hvd25cbiAqL1xuXG52YXIgaXNWaXNpYmxlJDEgPSBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gIHJldHVybiAhIWdldFBvcHVwKCk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ29uZmlybScgYnV0dG9uXG4gKi9cblxudmFyIGNsaWNrQ29uZmlybSA9IGZ1bmN0aW9uIGNsaWNrQ29uZmlybSgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1CdXR0b24oKS5jbGljaygpO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NhbmNlbCcgYnV0dG9uXG4gKi9cblxudmFyIGNsaWNrQ2FuY2VsID0gZnVuY3Rpb24gY2xpY2tDYW5jZWwoKSB7XG4gIHJldHVybiBnZXRDYW5jZWxCdXR0b24oKS5jbGljaygpO1xufTtcblxuZnVuY3Rpb24gZmlyZSgpIHtcbiAgdmFyIFN3YWwgPSB0aGlzO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdChTd2FsLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIGEgU3dhbCBjbGFzcyBtYWtpbmcgaXQgYWJsZSB0byBiZSBpbnN0YW50aWF0ZWQgd2l0aG91dCB0aGUgYG5ld2Aga2V5d29yZCAoYW5kIHRodXMgd2l0aG91dCBgU3dhbC5maXJlYClcbiAqIEBwYXJhbSBQYXJlbnRTd2FsXG4gKiBAcmV0dXJucyB7Tm9OZXdLZXl3b3JkU3dhbH1cbiAqL1xuZnVuY3Rpb24gd2l0aE5vTmV3S2V5d29yZChQYXJlbnRTd2FsKSB7XG4gIHZhciBOb05ld0tleXdvcmRTd2FsID0gZnVuY3Rpb24gTm9OZXdLZXl3b3JkU3dhbCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vTmV3S2V5d29yZFN3YWwpKSB7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdChOb05ld0tleXdvcmRTd2FsLCBhcmdzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTm9OZXdLZXl3b3JkU3dhbCkuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgTm9OZXdLZXl3b3JkU3dhbC5wcm90b3R5cGUgPSBfZXh0ZW5kcyhPYmplY3QuY3JlYXRlKFBhcmVudFN3YWwucHJvdG90eXBlKSwge1xuICAgIGNvbnN0cnVjdG9yOiBOb05ld0tleXdvcmRTd2FsXG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKE5vTmV3S2V5d29yZFN3YWwsIFBhcmVudFN3YWwpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFuZHJvaWQgNC40XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIE5vTmV3S2V5d29yZFN3YWwuX19wcm90b19fID0gUGFyZW50U3dhbDtcbiAgfVxuXG4gIHJldHVybiBOb05ld0tleXdvcmRTd2FsO1xufVxuXG52YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgdGl0bGU6ICcnLFxuICB0aXRsZVRleHQ6ICcnLFxuICB0ZXh0OiAnJyxcbiAgaHRtbDogJycsXG4gIGZvb3RlcjogJycsXG4gIHR5cGU6IG51bGwsXG4gIHRvYXN0OiBmYWxzZSxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICB0YXJnZXQ6ICdib2R5JyxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgaGVpZ2h0QXV0bzogdHJ1ZSxcbiAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGFsbG93RXNjYXBlS2V5OiB0cnVlLFxuICBhbGxvd0VudGVyS2V5OiB0cnVlLFxuICBzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiB0cnVlLFxuICBrZXlkb3duTGlzdGVuZXJDYXB0dXJlOiBmYWxzZSxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBwcmVDb25maXJtOiBudWxsLFxuICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNvbmZpcm1CdXR0b25Db2xvcjogbnVsbCxcbiAgY29uZmlybUJ1dHRvbkNsYXNzOiBudWxsLFxuICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY2FuY2VsQnV0dG9uQ29sb3I6IG51bGwsXG4gIGNhbmNlbEJ1dHRvbkNsYXNzOiBudWxsLFxuICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICBmb2N1c0NvbmZpcm06IHRydWUsXG4gIGZvY3VzQ2FuY2VsOiBmYWxzZSxcbiAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcbiAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlLFxuICBpbWFnZVVybDogbnVsbCxcbiAgaW1hZ2VXaWR0aDogbnVsbCxcbiAgaW1hZ2VIZWlnaHQ6IG51bGwsXG4gIGltYWdlQWx0OiAnJyxcbiAgaW1hZ2VDbGFzczogbnVsbCxcbiAgdGltZXI6IG51bGwsXG4gIHdpZHRoOiBudWxsLFxuICBwYWRkaW5nOiBudWxsLFxuICBiYWNrZ3JvdW5kOiBudWxsLFxuICBpbnB1dDogbnVsbCxcbiAgaW5wdXRQbGFjZWhvbGRlcjogJycsXG4gIGlucHV0VmFsdWU6ICcnLFxuICBpbnB1dE9wdGlvbnM6IHt9LFxuICBpbnB1dEF1dG9UcmltOiB0cnVlLFxuICBpbnB1dENsYXNzOiBudWxsLFxuICBpbnB1dEF0dHJpYnV0ZXM6IHt9LFxuICBpbnB1dFZhbGlkYXRvcjogbnVsbCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IG51bGwsXG4gIGdyb3c6IGZhbHNlLFxuICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gIHByb2dyZXNzU3RlcHM6IFtdLFxuICBjdXJyZW50UHJvZ3Jlc3NTdGVwOiBudWxsLFxuICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IG51bGwsXG4gIG9uQmVmb3JlT3BlbjogbnVsbCxcbiAgb25BZnRlckNsb3NlOiBudWxsLFxuICBvbk9wZW46IG51bGwsXG4gIG9uQ2xvc2U6IG51bGwsXG4gIHVzZVJlamVjdGlvbnM6IGZhbHNlLFxuICBleHBlY3RSZWplY3Rpb25zOiBmYWxzZVxufTtcbnZhciBkZXByZWNhdGVkUGFyYW1zID0gWyd1c2VSZWplY3Rpb25zJywgJ2V4cGVjdFJlamVjdGlvbnMnLCAnZXh0cmFQYXJhbXMnXTtcbnZhciB0b2FzdEluY29tcGF0aWJsZVBhcmFtcyA9IFsnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYWxsb3dFbnRlcktleScsICdiYWNrZHJvcCcsICdmb2N1c0NvbmZpcm0nLCAnZm9jdXNDYW5jZWwnLCAnaGVpZ2h0QXV0bycsICdrZXlkb3duTGlzdGVuZXJDYXB0dXJlJ107XG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5cbnZhciBpc1ZhbGlkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNWYWxpZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgcmV0dXJuIGRlZmF1bHRQYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW1OYW1lKSB8fCBwYXJhbU5hbWUgPT09ICdleHRyYVBhcmFtcyc7XG59O1xuLyoqXG4gKiBJcyBkZXByZWNhdGVkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5cbnZhciBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZXByZWNhdGVkUGFyYW1zLmluZGV4T2YocGFyYW1OYW1lKSAhPT0gLTE7XG59O1xuLyoqXG4gKiBTaG93IHJlbGV2YW50IHdhcm5pbmdzIGZvciBnaXZlbiBwYXJhbXNcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKi9cblxudmFyIHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IGZ1bmN0aW9uIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhwYXJhbXMpIHtcbiAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgaWYgKCFpc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybihcIlVua25vd24gcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50b2FzdCAmJiB0b2FzdEluY29tcGF0aWJsZVBhcmFtcy5pbmRleE9mKHBhcmFtKSAhPT0gLTEpIHtcbiAgICAgIHdhcm4oXCJUaGUgcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIiBpcyBpbmNvbXBhdGlibGUgd2l0aCB0b2FzdHNcIikpO1xuICAgIH1cblxuICAgIGlmIChpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuT25jZShcIlRoZSBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZGVwcmVjYXRpb25XYXJuaW5nID0gXCJcXFwic2V0RGVmYXVsdHNcXFwiICYgXFxcInJlc2V0RGVmYXVsdHNcXFwiIG1ldGhvZHMgYXJlIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgXFxcIm1peGluXFxcIiBtZXRob2QgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBGb3IgbmV3IHByb2plY3RzLCB1c2UgXFxcIm1peGluXFxcIi4gRm9yIHBhc3QgcHJvamVjdHMgYWxyZWFkeSB1c2luZyBcXFwic2V0RGVmYXVsdHNcXFwiLCBzdXBwb3J0IHdpbGwgYmUgcHJvdmlkZWQgdGhyb3VnaCBhbiBhZGRpdGlvbmFsIHBhY2thZ2UuXCI7XG52YXIgZGVmYXVsdHMgPSB7fTtcbmZ1bmN0aW9uIHdpdGhHbG9iYWxEZWZhdWx0cyhQYXJlbnRTd2FsKSB7XG4gIHZhciBTd2FsV2l0aEdsb2JhbERlZmF1bHRzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1BhcmVudFN3YWwpIHtcbiAgICBfaW5oZXJpdHMoU3dhbFdpdGhHbG9iYWxEZWZhdWx0cywgX1BhcmVudFN3YWwpO1xuXG4gICAgZnVuY3Rpb24gU3dhbFdpdGhHbG9iYWxEZWZhdWx0cygpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2FsV2l0aEdsb2JhbERlZmF1bHRzKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTd2FsV2l0aEdsb2JhbERlZmF1bHRzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3dhbFdpdGhHbG9iYWxEZWZhdWx0cywgW3tcbiAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWluKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoU3dhbFdpdGhHbG9iYWxEZWZhdWx0cy5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIGRlZmF1bHRzLCBwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHRzKHBhcmFtcykge1xuICAgICAgICB3YXJuT25jZShkZXByZWNhdGlvbldhcm5pbmcpO1xuXG4gICAgICAgIGlmICghcGFyYW1zIHx8IF90eXBlb2YocGFyYW1zKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTd2VldEFsZXJ0MjogVGhlIGFyZ3VtZW50IGZvciBzZXREZWZhdWx0cygpIGlzIHJlcXVpcmVkIGFuZCBoYXMgdG8gYmUgYSBvYmplY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhwYXJhbXMpOyAvLyBhc3NpZ24gdmFsaWQgcGFyYW1zIGZyb20gYHBhcmFtc2AgdG8gYGRlZmF1bHRzYFxuXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICBpZiAoUGFyZW50U3dhbC5pc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgICAgICAgZGVmYXVsdHNbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXNldERlZmF1bHRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXREZWZhdWx0cygpIHtcbiAgICAgICAgd2Fybk9uY2UoZGVwcmVjYXRpb25XYXJuaW5nKTtcbiAgICAgICAgZGVmYXVsdHMgPSB7fTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3dhbFdpdGhHbG9iYWxEZWZhdWx0cztcbiAgfShQYXJlbnRTd2FsKTsgLy8gU2V0IGRlZmF1bHQgcGFyYW1zIGlmIGB3aW5kb3cuX3N3YWxEZWZhdWx0c2AgaXMgYW4gb2JqZWN0XG5cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgX3R5cGVvZih3aW5kb3cuX3N3YWxEZWZhdWx0cykgPT09ICdvYmplY3QnKSB7XG4gICAgU3dhbFdpdGhHbG9iYWxEZWZhdWx0cy5zZXREZWZhdWx0cyh3aW5kb3cuX3N3YWxEZWZhdWx0cyk7XG4gIH1cblxuICByZXR1cm4gU3dhbFdpdGhHbG9iYWxEZWZhdWx0cztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGV4dGVuZGVkIHZlcnNpb24gb2YgYFN3YWxgIGNvbnRhaW5pbmcgYHBhcmFtc2AgYXMgZGVmYXVsdHMuXG4gKiBVc2VmdWwgZm9yIHJldXNpbmcgU3dhbCBjb25maWd1cmF0aW9uLlxuICpcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIEJlZm9yZTpcbiAqIGNvbnN0IHRleHRQcm9tcHRPcHRpb25zID0geyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH1cbiAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFN3YWwoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nIH0pXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFN3YWwoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycgfSlcbiAqXG4gKiBBZnRlcjpcbiAqIGNvbnN0IFRleHRQcm9tcHQgPSBTd2FsLm1peGluKHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9KVxuICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JylcbiAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nKVxuICpcbiAqIEBwYXJhbSBtaXhpblBhcmFtc1xuICovXG5cbmZ1bmN0aW9uIG1peGluKG1peGluUGFyYW1zKSB7XG4gIHJldHVybiB3aXRoTm9OZXdLZXl3b3JkKFxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfdGhpcykge1xuICAgIF9pbmhlcml0cyhNaXhpblN3YWwsIF90aGlzKTtcblxuICAgIGZ1bmN0aW9uIE1peGluU3dhbCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaXhpblN3YWwpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1peGluU3dhbCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1peGluU3dhbCwgW3tcbiAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWluKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWl4aW5Td2FsLnByb3RvdHlwZSksIFwiX21haW5cIiwgdGhpcykuY2FsbCh0aGlzLCBfZXh0ZW5kcyh7fSwgbWl4aW5QYXJhbXMsIHBhcmFtcykpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNaXhpblN3YWw7XG4gIH0odGhpcykpO1xufVxuXG4vLyBwcml2YXRlIGdsb2JhbCBzdGF0ZSBmb3IgdGhlIHF1ZXVlIGZlYXR1cmVcbnZhciBjdXJyZW50U3RlcHMgPSBbXTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGNoYWluaW5nIHN3ZWV0QWxlcnQgcG9wdXBzXG4gKi9cblxudmFyIHF1ZXVlID0gZnVuY3Rpb24gcXVldWUoc3RlcHMpIHtcbiAgdmFyIHN3YWwgPSB0aGlzO1xuICBjdXJyZW50U3RlcHMgPSBzdGVwcztcblxuICB2YXIgcmVzZXRRdWV1ZSA9IGZ1bmN0aW9uIHJlc2V0UXVldWUoKSB7XG4gICAgY3VycmVudFN0ZXBzID0gW107XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xuICB9O1xuXG4gIHZhciBxdWV1ZVJlc3VsdCA9IFtdO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAoZnVuY3Rpb24gc3RlcChpLCBjYWxsYmFjaykge1xuICAgICAgaWYgKGkgPCBjdXJyZW50U3RlcHMubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnLCBpKTtcbiAgICAgICAgc3dhbChjdXJyZW50U3RlcHNbaV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcXVldWVSZXN1bHQucHVzaChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgc3RlcChpICsgMSwgY2FsbGJhY2spO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNldFF1ZXVlKCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgZGlzbWlzczogcmVzdWx0LmRpc21pc3NcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNldFF1ZXVlKCk7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiBxdWV1ZVJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSgwKTtcbiAgfSk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgaW5kZXggb2YgY3VycmVudCBwb3B1cCBpbiBxdWV1ZVxuICovXG5cbnZhciBnZXRRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBnZXRRdWV1ZVN0ZXAoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgaW5zZXJ0aW5nIGEgcG9wdXAgdG8gdGhlIHF1ZXVlXG4gKi9cblxudmFyIGluc2VydFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGluc2VydFF1ZXVlU3RlcChzdGVwLCBpbmRleCkge1xuICBpZiAoaW5kZXggJiYgaW5kZXggPCBjdXJyZW50U3RlcHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGVwcy5zcGxpY2UoaW5kZXgsIDAsIHN0ZXApO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRTdGVwcy5wdXNoKHN0ZXApO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGRlbGV0aW5nIGEgcG9wdXAgZnJvbSB0aGUgcXVldWVcbiAqL1xuXG52YXIgZGVsZXRlUXVldWVTdGVwID0gZnVuY3Rpb24gZGVsZXRlUXVldWVTdGVwKGluZGV4KSB7XG4gIGlmICh0eXBlb2YgY3VycmVudFN0ZXBzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTaG93IHNwaW5uZXIgaW5zdGVhZCBvZiBDb25maXJtIGJ1dHRvbiBhbmQgZGlzYWJsZSBDYW5jZWwgYnV0dG9uXG4gKi9cblxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gc2hvd0xvYWRpbmcoKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKCFwb3B1cCkge1xuICAgIFN3YWwoJycpO1xuICB9XG5cbiAgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcbiAgc2hvdyhhY3Rpb25zKTtcbiAgc2hvdyhjb25maXJtQnV0dG9uKTtcbiAgYWRkQ2xhc3MoW3BvcHVwLCBhY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsIHRydWUpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsIHRydWUpO1xuICBwb3B1cC5mb2N1cygpO1xufTtcblxuLyoqXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpcyBzZXQsIHJldHVybnMgbnVtYmVyIG9zIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIE90aGVyd2lzZSwgcmV0dXJucyBudWxsLlxuICovXG5cbnZhciBnZXRUaW1lckxlZnQgPSBmdW5jdGlvbiBnZXRUaW1lckxlZnQoKSB7XG4gIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuZ2V0VGltZXJMZWZ0KCk7XG59O1xuXG5cblxudmFyIHN0YXRpY01ldGhvZHMgPSBPYmplY3QuZnJlZXplKHtcblx0aXNWYWxpZFBhcmFtZXRlcjogaXNWYWxpZFBhcmFtZXRlcixcblx0aXNEZXByZWNhdGVkUGFyYW1ldGVyOiBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIsXG5cdGFyZ3NUb1BhcmFtczogYXJnc1RvUGFyYW1zLFxuXHRhZGFwdElucHV0VmFsaWRhdG9yOiBhZGFwdElucHV0VmFsaWRhdG9yLFxuXHRjbG9zZTogY2xvc2UsXG5cdGNsb3NlUG9wdXA6IGNsb3NlLFxuXHRjbG9zZU1vZGFsOiBjbG9zZSxcblx0Y2xvc2VUb2FzdDogY2xvc2UsXG5cdGlzVmlzaWJsZTogaXNWaXNpYmxlJDEsXG5cdGNsaWNrQ29uZmlybTogY2xpY2tDb25maXJtLFxuXHRjbGlja0NhbmNlbDogY2xpY2tDYW5jZWwsXG5cdGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuXHRnZXRQb3B1cDogZ2V0UG9wdXAsXG5cdGdldFRpdGxlOiBnZXRUaXRsZSxcblx0Z2V0Q29udGVudDogZ2V0Q29udGVudCxcblx0Z2V0SW1hZ2U6IGdldEltYWdlLFxuXHRnZXRJY29uczogZ2V0SWNvbnMsXG5cdGdldENsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbixcblx0Z2V0QnV0dG9uc1dyYXBwZXI6IGdldEJ1dHRvbnNXcmFwcGVyLFxuXHRnZXRBY3Rpb25zOiBnZXRBY3Rpb25zLFxuXHRnZXRDb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uLFxuXHRnZXRDYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbixcblx0Z2V0Rm9vdGVyOiBnZXRGb290ZXIsXG5cdGdldEZvY3VzYWJsZUVsZW1lbnRzOiBnZXRGb2N1c2FibGVFbGVtZW50cyxcblx0Z2V0VmFsaWRhdGlvbk1lc3NhZ2U6IGdldFZhbGlkYXRpb25NZXNzYWdlLFxuXHRpc0xvYWRpbmc6IGlzTG9hZGluZyxcblx0ZmlyZTogZmlyZSxcblx0bWl4aW46IG1peGluLFxuXHRxdWV1ZTogcXVldWUsXG5cdGdldFF1ZXVlU3RlcDogZ2V0UXVldWVTdGVwLFxuXHRpbnNlcnRRdWV1ZVN0ZXA6IGluc2VydFF1ZXVlU3RlcCxcblx0ZGVsZXRlUXVldWVTdGVwOiBkZWxldGVRdWV1ZVN0ZXAsXG5cdHNob3dMb2FkaW5nOiBzaG93TG9hZGluZyxcblx0ZW5hYmxlTG9hZGluZzogc2hvd0xvYWRpbmcsXG5cdGdldFRpbWVyTGVmdDogZ2V0VGltZXJMZWZ0XG59KTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1JpaW0vc3ltYm9sLXBvbHlmaWxsL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgX1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgPyBTeW1ib2wgOiBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZENvdW50ZXIgPSAwO1xuXG4gIGZ1bmN0aW9uIF9TeW1ib2woa2V5KSB7XG4gICAgcmV0dXJuICdfXycgKyBrZXkgKyAnXycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTkpICsgJ18nICsgKytpZENvdW50ZXIgKyAnX18nO1xuICB9XG5cbiAgX1N5bWJvbC5pdGVyYXRvciA9IF9TeW1ib2woJ1N5bWJvbC5pdGVyYXRvcicpO1xuICByZXR1cm4gX1N5bWJvbDtcbn0oKTtcblxuLy8gV2Vha01hcCBwb2x5ZmlsbCwgbmVlZGVkIGZvciBBbmRyb2lkIDQuNFxuLy8gUmVsYXRlZCBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8xMDcxXG4vLyBodHRwOi8vd2VicmVmbGVjdGlvbi5ibG9nc3BvdC5maS8yMDE1LzA0L2Etd2Vha21hcC1wb2x5ZmlsbC1pbi0yMC1saW5lcy1vZi1jb2RlLmh0bWxcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciBXZWFrTWFwJDEgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBmdW5jdGlvbiAocywgZFAsIGhPUCkge1xuICBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgIGRQKHRoaXMsIHMsIHtcbiAgICAgIHZhbHVlOiBfU3ltYm9sKCdXZWFrTWFwJylcbiAgICB9KTtcbiAgfVxuXG4gIFdlYWtNYXAucHJvdG90eXBlID0ge1xuICAgICdkZWxldGUnOiBmdW5jdGlvbiBkZWwobykge1xuICAgICAgZGVsZXRlIG9bdGhpc1tzXV07XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldChvKSB7XG4gICAgICByZXR1cm4gb1t0aGlzW3NdXTtcbiAgICB9LFxuICAgIGhhczogZnVuY3Rpb24gaGFzKG8pIHtcbiAgICAgIHJldHVybiBoT1AuY2FsbChvLCB0aGlzW3NdKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG8sIHYpIHtcbiAgICAgIGRQKG8sIHRoaXNbc10sIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdlxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gV2Vha01hcDtcbn0oX1N5bWJvbCgnV2Vha01hcCcpLCBPYmplY3QuZGVmaW5lUHJvcGVydHksIHt9Lmhhc093blByb3BlcnR5KTtcblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWludHMgYFdlYWtNYXBgcyBmb3IgZWFjaCBlZmZlY3RpdmVseS1cInByaXZhdGUgIHByb3BlcnR5XCIgdGhhdCBhIGBzd2FsYCBoYXMuXG4gKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICogICB0aGVuIHdlIGNhbiB1c2UgdGhhdCBsYW5ndWFnZSBmZWF0dXJlLlxuICovXG52YXIgcHJpdmF0ZVByb3BzID0ge1xuICBwcm9taXNlOiBuZXcgV2Vha01hcCQxKCksXG4gIGlubmVyUGFyYW1zOiBuZXcgV2Vha01hcCQxKCksXG4gIGRvbUNhY2hlOiBuZXcgV2Vha01hcCQxKClcbn07XG5cbi8qKlxuICogRW5hYmxlcyBidXR0b25zIGFuZCBoaWRlIGxvYWRlci5cbiAqL1xuXG5mdW5jdGlvbiBoaWRlTG9hZGluZygpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcblxuICBpZiAoIWlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uKSB7XG4gICAgaGlkZShkb21DYWNoZS5jb25maXJtQnV0dG9uKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICAgaGlkZShkb21DYWNoZS5hY3Rpb25zKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVDbGFzcyhbZG9tQ2FjaGUucG9wdXAsIGRvbUNhY2hlLmFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWJ1c3knKTtcbiAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXQoaW5wdXRUeXBlKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGlucHV0VHlwZSA9IGlucHV0VHlwZSB8fCBpbm5lclBhcmFtcy5pbnB1dDtcblxuICBpZiAoIWlucHV0VHlwZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICBjYXNlICdzZWxlY3QnOlxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICBjYXNlICdmaWxlJzpcbiAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXNbaW5wdXRUeXBlXSk7XG5cbiAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICByZXR1cm4gZG9tQ2FjaGUucG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcblxuICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgIHJldHVybiBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Y2hlY2tlZFwiKSkgfHwgZG9tQ2FjaGUucG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiIGlucHV0OmZpcnN0LWNoaWxkXCIpKTtcblxuICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgIHJldHVybiBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgaW5wdXRcIikpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5mdW5jdGlvbiBkaXNhYmxlQnV0dG9ucygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG5mdW5jdGlvbiBlbmFibGVDb25maXJtQnV0dG9uKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5mdW5jdGlvbiBkaXNhYmxlQ29uZmlybUJ1dHRvbigpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG5mdW5jdGlvbiBlbmFibGVJbnB1dCgpIHtcbiAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJhZGlvc1tpXS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBkaXNhYmxlSW5wdXQoKSB7XG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlucHV0ICYmIGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICB2YXIgcmFkaW9zQ29udGFpbmVyID0gaW5wdXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYWRpb3NbaV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGVycm9yJCQxKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLmlubmVySFRNTCA9IGVycm9yJCQxO1xuICB2YXIgcG9wdXBDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tQ2FjaGUucG9wdXApO1xuICBkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCItXCIuY29uY2F0KHBvcHVwQ29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKSk7XG4gIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCItXCIuY29uY2F0KHBvcHVwQ29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICBzaG93KGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG4gIGlmIChpbnB1dCkge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgdHJ1ZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZEJ5Jywgc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKTtcbiAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gIH1cbn0gLy8gSGlkZSBibG9jayB3aXRoIHZhbGlkYXRpb24gbWVzc2FnZVxuXG5mdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gIGlmIChkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgIGhpZGUoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICB9XG5cbiAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG4gIGlmIChpbnB1dCkge1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJyk7XG4gICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZEJ5Jyk7XG4gICAgcmVtb3ZlQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICB9XG59IC8vIEBkZXByZWNhdGVkXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbmZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICB3YXJuT25jZShcIlN3YWwucmVzZXRWYWxpZGF0aW9uRXJyb3IoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZSwgdXNlIFN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpIGluc3RlYWRcIik7XG4gIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UuYmluZCh0aGlzKSgpO1xufSAvLyBAZGVwcmVjYXRlZFxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5mdW5jdGlvbiBzaG93VmFsaWRhdGlvbkVycm9yKGVycm9yJCQxKSB7XG4gIHdhcm5PbmNlKFwiU3dhbC5zaG93VmFsaWRhdGlvbkVycm9yKCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UsIHVzZSBTd2FsLnNob3dWYWxpZGF0aW9uTWVzc2FnZSgpIGluc3RlYWRcIik7XG4gIHNob3dWYWxpZGF0aW9uTWVzc2FnZS5iaW5kKHRoaXMpKGVycm9yJCQxKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcyQxKCkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICByZXR1cm4gaW5uZXJQYXJhbXMucHJvZ3Jlc3NTdGVwcztcbn1cbmZ1bmN0aW9uIHNldFByb2dyZXNzU3RlcHMocHJvZ3Jlc3NTdGVwcykge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gIHZhciB1cGRhdGVkUGFyYW1zID0gX2V4dGVuZHMoe30sIGlubmVyUGFyYW1zLCB7XG4gICAgcHJvZ3Jlc3NTdGVwczogcHJvZ3Jlc3NTdGVwc1xuICB9KTtcblxuICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICByZW5kZXJQcm9ncmVzc1N0ZXBzKHVwZGF0ZWRQYXJhbXMpO1xufVxuZnVuY3Rpb24gc2hvd1Byb2dyZXNzU3RlcHMoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIHNob3coZG9tQ2FjaGUucHJvZ3Jlc3NTdGVwcyk7XG59XG5mdW5jdGlvbiBoaWRlUHJvZ3Jlc3NTdGVwcygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgaGlkZShkb21DYWNoZS5wcm9ncmVzc1N0ZXBzKTtcbn1cblxudmFyIFRpbWVyID0gZnVuY3Rpb24gVGltZXIoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lcik7XG5cbiAgdmFyIGlkLCBzdGFydGVkLCBydW5uaW5nO1xuICB2YXIgcmVtYWluaW5nID0gZGVsYXk7XG5cbiAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICBzdGFydGVkID0gbmV3IERhdGUoKTtcbiAgICBpZCA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIHJlbWFpbmluZyk7XG4gIH07XG5cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIHJlbWFpbmluZyAtPSBuZXcgRGF0ZSgpIC0gc3RhcnRlZDtcbiAgfTtcblxuICB0aGlzLmdldFRpbWVyTGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbWFpbmluZztcbiAgfTtcblxuICB0aGlzLnN0YXJ0KCk7XG59O1xuXG52YXIgZGVmYXVsdElucHV0VmFsaWRhdG9ycyA9IHtcbiAgZW1haWw6IGZ1bmN0aW9uIGVtYWlsKHN0cmluZywgZXh0cmFQYXJhbXMpIHtcbiAgICByZXR1cm4gL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdChleHRyYVBhcmFtcyAmJiBleHRyYVBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSA/IGV4dHJhUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlIDogJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpO1xuICB9LFxuICB1cmw6IGZ1bmN0aW9uIHVybChzdHJpbmcsIGV4dHJhUGFyYW1zKSB7XG4gICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzgwOTQzNSB3aXRoIGEgc21hbGwgY2hhbmdlIGZyb20gIzEzMDZcbiAgICByZXR1cm4gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNjN9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoZXh0cmFQYXJhbXMgJiYgZXh0cmFQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UgPyBleHRyYVBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSA6ICdJbnZhbGlkIFVSTCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgLy8gVXNlIGRlZmF1bHQgYGlucHV0VmFsaWRhdG9yYCBmb3Igc3VwcG9ydGVkIGlucHV0IHR5cGVzIGlmIG5vdCBwcm92aWRlZFxuICBpZiAoIXBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0ga2V5KSB7XG4gICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IHBhcmFtcy5leHBlY3RSZWplY3Rpb25zID8gZGVmYXVsdElucHV0VmFsaWRhdG9yc1trZXldIDogU3dhbC5hZGFwdElucHV0VmFsaWRhdG9yKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gLy8gcGFyYW1zLmV4dHJhUGFyYW1zIGlzIEBkZXByZWNhdGVkXG5cblxuICBpZiAocGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgaWYgKF90eXBlb2YocGFyYW1zLmV4dHJhUGFyYW1zKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHBhcmFtcy5leHRyYVBhcmFtcyA9IHt9O1xuICAgIH1cblxuICAgIHBhcmFtcy5leHRyYVBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSA9IHBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZTtcbiAgfSAvLyBEZXRlcm1pbmUgaWYgdGhlIGN1c3RvbSB0YXJnZXQgZWxlbWVudCBpcyB2YWxpZFxuXG5cbiAgaWYgKCFwYXJhbXMudGFyZ2V0IHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICB3YXJuKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpO1xuICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSc7XG4gIH0gLy8gQW5pbWF0aW9uXG5cblxuICBpZiAodHlwZW9mIHBhcmFtcy5hbmltYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMuYW5pbWF0aW9uID0gcGFyYW1zLmFuaW1hdGlvbi5jYWxsKCk7XG4gIH1cblxuICB2YXIgcG9wdXA7XG4gIHZhciBvbGRQb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7IC8vIElmIHRoZSBtb2RlbCB0YXJnZXQgaGFzIGNoYW5nZWQsIHJlZnJlc2ggdGhlIHBvcHVwXG5cbiAgaWYgKG9sZFBvcHVwICYmIHRhcmdldEVsZW1lbnQgJiYgb2xkUG9wdXAucGFyZW50Tm9kZSAhPT0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcG9wdXAgPSBpbml0KHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgcG9wdXAgPSBvbGRQb3B1cCB8fCBpbml0KHBhcmFtcyk7XG4gIH0gLy8gU2V0IHBvcHVwIHdpZHRoXG5cblxuICBpZiAocGFyYW1zLndpZHRoKSB7XG4gICAgcG9wdXAuc3R5bGUud2lkdGggPSB0eXBlb2YgcGFyYW1zLndpZHRoID09PSAnbnVtYmVyJyA/IHBhcmFtcy53aWR0aCArICdweCcgOiBwYXJhbXMud2lkdGg7XG4gIH0gLy8gU2V0IHBvcHVwIHBhZGRpbmdcblxuXG4gIGlmIChwYXJhbXMucGFkZGluZykge1xuICAgIHBvcHVwLnN0eWxlLnBhZGRpbmcgPSB0eXBlb2YgcGFyYW1zLnBhZGRpbmcgPT09ICdudW1iZXInID8gcGFyYW1zLnBhZGRpbmcgKyAncHgnIDogcGFyYW1zLnBhZGRpbmc7XG4gIH0gLy8gU2V0IHBvcHVwIGJhY2tncm91bmRcblxuXG4gIGlmIChwYXJhbXMuYmFja2dyb3VuZCkge1xuICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgfVxuXG4gIHZhciBwb3B1cEJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBvcHVwKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIHZhciBzdWNjZXNzSWNvblBhcnRzID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXgnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Y2Nlc3NJY29uUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBvcHVwQmFja2dyb3VuZENvbG9yO1xuICB9XG5cbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuICB2YXIgZm9vdGVyID0gZ2V0Rm9vdGVyKCk7IC8vIFRpdGxlXG5cbiAgcmVuZGVyVGl0bGUocGFyYW1zKTsgLy8gQ29udGVudFxuXG4gIHJlbmRlckNvbnRlbnQocGFyYW1zKTsgLy8gQmFja2Ryb3BcblxuICBpZiAodHlwZW9mIHBhcmFtcy5iYWNrZHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICBnZXRDb250YWluZXIoKS5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tkcm9wO1xuICB9IGVsc2UgaWYgKCFwYXJhbXMuYmFja2Ryb3ApIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICB9XG5cbiAgaWYgKCFwYXJhbXMuYmFja2Ryb3AgJiYgcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgd2FybignXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJyk7XG4gIH0gLy8gUG9zaXRpb25cblxuXG4gIGlmIChwYXJhbXMucG9zaXRpb24gaW4gc3dhbENsYXNzZXMpIHtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW3BhcmFtcy5wb3NpdGlvbl0pO1xuICB9IGVsc2Uge1xuICAgIHdhcm4oJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5jZW50ZXIpO1xuICB9IC8vIEdyb3dcblxuXG4gIGlmIChwYXJhbXMuZ3JvdyAmJiB0eXBlb2YgcGFyYW1zLmdyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGdyb3dDbGFzcyA9ICdncm93LScgKyBwYXJhbXMuZ3JvdztcblxuICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSk7XG4gICAgfVxuICB9IC8vIENsb3NlIGJ1dHRvblxuXG5cbiAgaWYgKHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY2xvc2VCdXR0b25BcmlhTGFiZWwpO1xuICAgIHNob3coY2xvc2VCdXR0b24pO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY2xvc2VCdXR0b24pO1xuICB9IC8vIERlZmF1bHQgQ2xhc3NcblxuXG4gIHBvcHVwLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLnBvcHVwO1xuXG4gIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm1vZGFsKTtcbiAgfSAvLyBDdXN0b20gQ2xhc3NcblxuXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfSAvLyBQcm9ncmVzcyBzdGVwc1xuXG5cbiAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyhwYXJhbXMpOyAvLyBJY29uXG5cbiAgcmVuZGVySWNvbihwYXJhbXMpOyAvLyBJbWFnZVxuXG4gIHJlbmRlckltYWdlKHBhcmFtcyk7IC8vIEFjdGlvbnMgKGJ1dHRvbnMpXG5cbiAgcmVuZGVyQWN0aW9ucyhwYXJhbXMpOyAvLyBGb290ZXJcblxuICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuZm9vdGVyLCBmb290ZXIpOyAvLyBDU1MgYW5pbWF0aW9uXG5cbiAgaWYgKHBhcmFtcy5hbmltYXRpb24gPT09IHRydWUpIHtcbiAgICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbik7XG4gIH0gLy8gc2hvd0xvYWRlck9uQ29uZmlybSAmJiBwcmVDb25maXJtXG5cblxuICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgIXBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBPcGVuIHBvcHVwLCBhZGQgbmVjZXNzYXJ5IGNsYXNzZXMgYW5kIHN0eWxlcywgZml4IHNjcm9sbGJhclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc1xuICovXG5cbnZhciBvcGVuUG9wdXAgPSBmdW5jdGlvbiBvcGVuUG9wdXAocGFyYW1zKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICBpZiAocGFyYW1zLm9uQmVmb3JlT3BlbiAhPT0gbnVsbCAmJiB0eXBlb2YgcGFyYW1zLm9uQmVmb3JlT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhcmFtcy5vbkJlZm9yZU9wZW4ocG9wdXApO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5hbmltYXRpb24pIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmZhZGUpO1xuICB9XG5cbiAgc2hvdyhwb3B1cCk7IC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcblxuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG5cbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmICFoYXNDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pKSB7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gc3dhbENsb3NlRXZlbnRGaW5pc2hlZCgpIHtcbiAgICAgIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQpO1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICB9XG5cbiAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keSwgY29udGFpbmVyXSwgc3dhbENsYXNzZXMuc2hvd24pO1xuXG4gIGlmIChwYXJhbXMuaGVpZ2h0QXV0byAmJiBwYXJhbXMuYmFja2Ryb3AgJiYgIXBhcmFtcy50b2FzdCkge1xuICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snaGVpZ2h0LWF1dG8nXSk7XG4gIH1cblxuICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgZml4U2Nyb2xsYmFyKCk7XG4gICAgaU9TZml4KCk7XG4gICAgSUVmaXgoKTtcbiAgICBzZXRBcmlhSGlkZGVuKCk7IC8vIHN3ZWV0YWxlcnQyL2lzc3Vlcy8xMjQ3XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFpc1RvYXN0KCkgJiYgIWdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBpZiAocGFyYW1zLm9uT3BlbiAhPT0gbnVsbCAmJiB0eXBlb2YgcGFyYW1zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcGFyYW1zLm9uT3Blbihwb3B1cCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9tYWluKHVzZXJQYXJhbXMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBzaG93V2FybmluZ3NGb3JQYXJhbXModXNlclBhcmFtcyk7XG5cbiAgdmFyIGlubmVyUGFyYW1zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMsIHVzZXJQYXJhbXMpO1xuXG4gIHNldFBhcmFtZXRlcnMoaW5uZXJQYXJhbXMpO1xuICBPYmplY3QuZnJlZXplKGlubmVyUGFyYW1zKTtcbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCBpbm5lclBhcmFtcyk7IC8vIGNsZWFyIHRoZSBwcmV2aW91cyB0aW1lclxuXG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gIH0gLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuXG5cbiAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQpO1xuICB2YXIgZG9tQ2FjaGUgPSB7XG4gICAgcG9wdXA6IGdldFBvcHVwKCksXG4gICAgY29udGFpbmVyOiBnZXRDb250YWluZXIoKSxcbiAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgYWN0aW9uczogZ2V0QWN0aW9ucygpLFxuICAgIGNvbmZpcm1CdXR0b246IGdldENvbmZpcm1CdXR0b24oKSxcbiAgICBjYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbigpLFxuICAgIGNsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbigpLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFxuICAgIHByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMoKVxuICB9O1xuICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KHRoaXMsIGRvbUNhY2hlKTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBmdW5jdGlvbnMgdG8gaGFuZGxlIGFsbCByZXNvbHZpbmcvcmVqZWN0aW5nL3NldHRsaW5nXG4gICAgdmFyIHN1Y2NlZWRXaXRoID0gZnVuY3Rpb24gc3VjY2VlZFdpdGgodmFsdWUpIHtcbiAgICAgIGNvbnN0cnVjdG9yLmNsb3NlUG9wdXAoaW5uZXJQYXJhbXMub25DbG9zZSwgaW5uZXJQYXJhbXMub25BZnRlckNsb3NlKTsgLy8gVE9ETzogbWFrZSBjbG9zZVBvcHVwIGFuICppbnN0YW5jZSogbWV0aG9kXG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGlzbWlzc1dpdGggPSBmdW5jdGlvbiBkaXNtaXNzV2l0aChkaXNtaXNzKSB7XG4gICAgICBjb25zdHJ1Y3Rvci5jbG9zZVBvcHVwKGlubmVyUGFyYW1zLm9uQ2xvc2UsIGlubmVyUGFyYW1zLm9uQWZ0ZXJDbG9zZSk7XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgIHJlamVjdChkaXNtaXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGRpc21pc3M6IGRpc21pc3NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBlcnJvcldpdGggPSBmdW5jdGlvbiBlcnJvcldpdGgoZXJyb3IkJDEpIHtcbiAgICAgIGNvbnN0cnVjdG9yLmNsb3NlUG9wdXAoaW5uZXJQYXJhbXMub25DbG9zZSwgaW5uZXJQYXJhbXMub25BZnRlckNsb3NlKTtcbiAgICAgIHJlamVjdChlcnJvciQkMSk7XG4gICAgfTsgLy8gQ2xvc2Ugb24gdGltZXJcblxuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRpbWVyKSB7XG4gICAgICBnbG9iYWxTdGF0ZS50aW1lb3V0ID0gbmV3IFRpbWVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoJ3RpbWVyJyk7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgICAgfSwgaW5uZXJQYXJhbXMudGltZXIpO1xuICAgIH0gLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgcG9wdXAgaW5wdXRcblxuXG4gICAgdmFyIGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXQoKTtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyAxIDogMDtcblxuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmZpbGVzLmxlbmd0aCA/IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dEF1dG9UcmltID8gaW5wdXQudmFsdWUudHJpbSgpIDogaW5wdXQudmFsdWU7XG4gICAgICB9XG4gICAgfTsgLy8gaW5wdXQgYXV0b2ZvY3VzXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0KCk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybSh2YWx1ZSkge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICAgICAgY29uc3RydWN0b3Iuc2hvd0xvYWRpbmcoKTsgLy8gVE9ETzogbWFrZSBzaG93TG9hZGluZyBhbiAqaW5zdGFuY2UqIG1ldGhvZFxuICAgICAgfVxuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgICBfdGhpcy5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cbiAgICAgICAgdmFyIHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLnByZUNvbmZpcm0odmFsdWUsIGlubmVyUGFyYW1zLmV4dHJhUGFyYW1zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlubmVyUGFyYW1zLmV4cGVjdFJlamVjdGlvbnMpIHtcbiAgICAgICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWNjZWVkV2l0aChwcmVDb25maXJtVmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgICAgICAgIF90aGlzLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJlQ29uZmlybVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlQ29uZmlybVZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaXNWaXNpYmxlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKSB8fCBwcmVDb25maXJtVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWNjZWVkV2l0aChwcmVDb25maXJtVmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvciQkMSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yV2l0aChlcnJvciQkMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Y2NlZWRXaXRoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9OyAvLyBNb3VzZSBpbnRlcmFjdGlvbnNcblxuXG4gICAgdmFyIG9uQnV0dG9uRXZlbnQgPSBmdW5jdGlvbiBvbkJ1dHRvbkV2ZW50KGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIHZhciBjb25maXJtQnV0dG9uID0gZG9tQ2FjaGUuY29uZmlybUJ1dHRvbixcbiAgICAgICAgICBjYW5jZWxCdXR0b24gPSBkb21DYWNoZS5jYW5jZWxCdXR0b247XG4gICAgICB2YXIgdGFyZ2V0ZWRDb25maXJtID0gY29uZmlybUJ1dHRvbiAmJiAoY29uZmlybUJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNvbmZpcm1CdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG4gICAgICB2YXIgdGFyZ2V0ZWRDYW5jZWwgPSBjYW5jZWxCdXR0b24gJiYgKGNhbmNlbEJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNhbmNlbEJ1dHRvbi5jb250YWlucyh0YXJnZXQpKTtcblxuICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgIC8vIENsaWNrZWQgJ2NvbmZpcm0nXG4gICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBjb25zdHJ1Y3Rvci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgX3RoaXMuZGlzYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmRpc2FibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMuZXh0cmFQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmV4cGVjdFJlamVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25maXJtKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaG93VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvciQkMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JXaXRoKGVycm9yJCQxKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghX3RoaXMuZ2V0SW5wdXQoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmZpcm0odHJ1ZSk7XG4gICAgICAgICAgICB9IC8vIENsaWNrZWQgJ2NhbmNlbCdcblxuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwgJiYgY29uc3RydWN0b3IuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uY2FuY2VsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYnV0dG9ucyA9IGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25zW2ldLm9uY2xpY2sgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlb3ZlciA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdXQgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlZG93biA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgfSAvLyBDbG9zaW5nIHBvcHVwIGJ5IGNsb3NlIGJ1dHRvblxuXG5cbiAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgLy8gQ2xvc2luZyBwb3B1cCBieSBpbnRlcm5hbCBjbGlja1xuICAgICAgZG9tQ2FjaGUucG9wdXAub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uIHx8IGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7IC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBwb3B1cCBidXQgbW91c2V1cCBvbiB0aGUgY29udGFpbmVyXG4gICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuXG4gICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgICAgIC8vIGhhdmUgYW55IG90aGVyIGRpcmVjdCBjaGlsZHJlbiBhc2lkZSBvZiB0aGUgcG9wdXBcblxuICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07IC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBjb250YWluZXIgYnV0IG1vdXNldXAgb24gdGhlIHBvcHVwXG5cblxuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2UgYWxzbyBuZWVkIHRvIGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyBhIGNoaWxkIG9mIHRoZSBwb3B1cFxuXG4gICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5wb3B1cCB8fCBkb21DYWNoZS5wb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBkb21DYWNoZS5jb250YWluZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spKSB7XG4gICAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSAvLyBSZXZlcnNlIGJ1dHRvbnMgKENvbmZpcm0gb24gdGhlIHJpZ2h0IHNpZGUpXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb21DYWNoZS5jYW5jZWxCdXR0b24sIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24sIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbik7XG4gICAgfSAvLyBGb2N1cyBoYW5kbGluZ1xuXG5cbiAgICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbmRleCwgaW5jcmVtZW50KSB7XG4gICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCk7IC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDsgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgaW5kZXggPSAwOyAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICB9IC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcblxuXG4gICAgICBkb21DYWNoZS5wb3B1cC5mb2N1cygpO1xuICAgIH07XG5cbiAgICB2YXIga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihlLCBpbm5lclBhcmFtcykge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLnN0b3BLZXlkb3duUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFycm93S2V5cyA9IFsnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnTGVmdCcsICdSaWdodCcsICdVcCcsICdEb3duJyAvLyBJRTExXG4gICAgICBdO1xuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgIWUuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmIF90aGlzLmdldElucHV0KCkgJiYgZS50YXJnZXQub3V0ZXJIVE1MID09PSBfdGhpcy5nZXRJbnB1dCgpLm91dGVySFRNTCkge1xuICAgICAgICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0cnVjdG9yLmNsaWNrQ29uZmlybSgpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSAvLyBUQUJcblxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwpO1xuICAgICAgICB2YXIgYnRuSW5kZXggPSAtMTtcblxuICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW19pMl0pIHtcbiAgICAgICAgICAgIGJ0bkluZGV4ID0gX2kyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAtMSk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgICAgIH0gZWxzZSBpZiAoYXJyb3dLZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgICAgICAvLyBmb2N1cyBDYW5jZWwgYnV0dG9uIGlmIENvbmZpcm0gYnV0dG9uIGlzIGN1cnJlbnRseSBmb2N1c2VkXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb21DYWNoZS5jb25maXJtQnV0dG9uICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKCk7IC8vIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9tQ2FjaGUuY2FuY2VsQnV0dG9uICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgICAgfSAvLyBFU0NcblxuICAgICAgfSBlbHNlIGlmICgoZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJykgJiYgY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFc2NhcGVLZXkpID09PSB0cnVlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5lc2MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4ga2V5ZG93bkhhbmRsZXIoZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgfTtcblxuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBkb21DYWNoZS5wb3B1cDtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgX3RoaXMucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0ICYmIChpbm5lclBhcmFtcy5pbnB1dCB8fCBpbm5lclBhcmFtcy5mb290ZXIgfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSkge1xuICAgICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddKTtcbiAgICB9IC8vIGlucHV0c1xuXG5cbiAgICB2YXIgaW5wdXRUeXBlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXTtcblxuICAgIHZhciBzZXRJbnB1dFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCkge1xuICAgICAgaWYgKCFpbnB1dC5wbGFjZWhvbGRlciB8fCBpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGlucHV0O1xuXG4gICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgaW5wdXRUeXBlcy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZXNbX2kzXV07XG4gICAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgaW5wdXRDbGFzcyk7XG4gICAgICBpbnB1dCA9IF90aGlzLmdldElucHV0KGlucHV0VHlwZXNbX2kzXSk7IC8vIHNldCBhdHRyaWJ1dGVzXG5cbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBmb3IgKHZhciBqIGluIGlucHV0LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgdmFyIGF0dHJOYW1lID0gaW5wdXQuYXR0cmlidXRlc1tqXS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUgIT09ICd0eXBlJyAmJiBhdHRyTmFtZSAhPT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGF0dHIgaW4gaW5uZXJQYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgLy8gRG8gbm90IHNldCBhIHBsYWNlaG9sZGVyIGZvciA8aW5wdXQgdHlwZT1cInJhbmdlXCI+XG4gICAgICAgICAgLy8gaXQnbGwgY3Jhc2ggRWRnZSwgIzEyOThcbiAgICAgICAgICBpZiAoaW5wdXRUeXBlc1tfaTNdID09PSAncmFuZ2UnICYmIGF0dHIgPT09ICdwbGFjZWhvbGRlcicpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShhdHRyLCBpbm5lclBhcmFtcy5pbnB1dEF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIHNldCBjbGFzc1xuXG5cbiAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9IGlucHV0Q2xhc3M7XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dENsYXNzKSB7XG4gICAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBpbm5lclBhcmFtcy5pbnB1dENsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaGlkZShpbnB1dENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgdmFyIHBvcHVsYXRlSW5wdXRPcHRpb25zO1xuXG4gICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAndGVsJzpcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLmlucHV0VmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBpbm5lclBhcmFtcy5pbnB1dFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YXJuKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiIG9yIFxcXCJudW1iZXJcXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChfdHlwZW9mKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpLCBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQpO1xuICAgICAgICAgIGlucHV0LnR5cGUgPSBpbm5lclBhcmFtcy5pbnB1dDtcbiAgICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAge1xuICAgICAgICAgIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICAgICAgICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQpO1xuICAgICAgICAgIGlucHV0LnR5cGUgPSBpbm5lclBhcmFtcy5pbnB1dDtcbiAgICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgcmFuZ2UgPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMucmFuZ2UpO1xuICAgICAgICAgIHZhciByYW5nZUlucHV0ID0gcmFuZ2UucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICB2YXIgcmFuZ2VPdXRwdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKTtcbiAgICAgICAgICByYW5nZUlucHV0LnZhbHVlID0gaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgICByYW5nZUlucHV0LnR5cGUgPSBpbm5lclBhcmFtcy5pbnB1dDtcbiAgICAgICAgICByYW5nZU91dHB1dC52YWx1ZSA9IGlubmVyUGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgICAgc2hvdyhyYW5nZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgICAgICAgICB2YXIgb3B0aW9uVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgICAgICAgICAgdmFyIG9wdGlvbkxhYmVsID0gaW5wdXRPcHRpb25bMV07XG4gICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBvcHRpb25MYWJlbDtcblxuICAgICAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSBvcHRpb25WYWx1ZS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzaG93KHNlbGVjdCk7XG4gICAgICAgICAgICBzZWxlY3QuZm9jdXMoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHJhZGlvID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLnJhZGlvKTtcbiAgICAgICAgICByYWRpby5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcG9wdWxhdGVJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRPcHRpb24pIHtcbiAgICAgICAgICAgICAgdmFyIHJhZGlvVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgICAgICAgICAgdmFyIHJhZGlvTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgICAgICAgICAgdmFyIHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICB2YXIgcmFkaW9MYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICByYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBzd2FsQ2xhc3Nlcy5yYWRpbztcbiAgICAgICAgICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHJhZGlvVmFsdWU7XG5cbiAgICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gcmFkaW9WYWx1ZS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgcmFkaW9JbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gcmFkaW9MYWJlbDtcbiAgICAgICAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMubGFiZWw7XG4gICAgICAgICAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xuICAgICAgICAgICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgIHJhZGlvLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2hvdyhyYWRpbyk7XG4gICAgICAgICAgICB2YXIgcmFkaW9zID0gcmFkaW8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmFkaW9zWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBjaGVja2JveCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5jaGVja2JveCk7XG5cbiAgICAgICAgICB2YXIgY2hlY2tib3hJbnB1dCA9IF90aGlzLmdldElucHV0KCdjaGVja2JveCcpO1xuXG4gICAgICAgICAgY2hlY2tib3hJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICBjaGVja2JveElucHV0LnZhbHVlID0gMTtcbiAgICAgICAgICBjaGVja2JveElucHV0LmlkID0gc3dhbENsYXNzZXMuY2hlY2tib3g7XG4gICAgICAgICAgY2hlY2tib3hJbnB1dC5jaGVja2VkID0gQm9vbGVhbihpbm5lclBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICAgICAgICB2YXIgbGFiZWwgPSBjaGVja2JveC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICBzaG93KGNoZWNrYm94KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMudGV4dGFyZWEpO1xuICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKHRleHRhcmVhKTtcbiAgICAgICAgICBzaG93KHRleHRhcmVhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXFxcInRleHRcXFwiLCBcXFwiZW1haWxcXFwiLCBcXFwicGFzc3dvcmRcXFwiLCBcXFwibnVtYmVyXFxcIiwgXFxcInRlbFxcXCIsIFxcXCJzZWxlY3RcXFwiLCBcXFwicmFkaW9cXFwiLCBcXFwiY2hlY2tib3hcXFwiLCBcXFwidGV4dGFyZWFcXFwiLCBcXFwiZmlsZVxcXCIgb3IgXFxcInVybFxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KGlubmVyUGFyYW1zLmlucHV0LCBcIlxcXCJcIikpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnIHx8IGlubmVyUGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICB2YXIgcHJvY2Vzc0lucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoaXNUaGVuYWJsZShpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yLnNob3dMb2FkaW5nKCk7XG4gICAgICAgIGlubmVyUGFyYW1zLmlucHV0T3B0aW9ucy50aGVuKGZ1bmN0aW9uIChpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlubmVyUGFyYW1zLmlucHV0T3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCBcIi5jb25jYXQoX3R5cGVvZihpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLmluZGV4T2YoaW5uZXJQYXJhbXMuaW5wdXQpICE9PSAtMSAmJiBpc1RoZW5hYmxlKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICBjb25zdHJ1Y3Rvci5zaG93TG9hZGluZygpO1xuICAgICAgaGlkZShpbnB1dCk7XG4gICAgICBpbm5lclBhcmFtcy5pbnB1dFZhbHVlLnRoZW4oZnVuY3Rpb24gKGlucHV0VmFsdWUpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDAgOiBpbnB1dFZhbHVlICsgJyc7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGVycm9yKCdFcnJvciBpbiBpbnB1dFZhbHVlIHByb21pc2U6ICcgKyBlcnIpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChpbm5lclBhcmFtcy5mb2N1c0NvbmZpcm0gJiYgaXNWaXNpYmxlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZvY3VzKC0xLCAxKTtcbiAgICAgIH1cbiAgICB9IC8vIGZpeCBzY3JvbGxcblxuXG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gIH0pO1xufVxuXG5cblxudmFyIGluc3RhbmNlTWV0aG9kcyA9IE9iamVjdC5mcmVlemUoe1xuXHRoaWRlTG9hZGluZzogaGlkZUxvYWRpbmcsXG5cdGRpc2FibGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcblx0Z2V0SW5wdXQ6IGdldElucHV0LFxuXHRlbmFibGVCdXR0b25zOiBlbmFibGVCdXR0b25zLFxuXHRkaXNhYmxlQnV0dG9uczogZGlzYWJsZUJ1dHRvbnMsXG5cdGVuYWJsZUNvbmZpcm1CdXR0b246IGVuYWJsZUNvbmZpcm1CdXR0b24sXG5cdGRpc2FibGVDb25maXJtQnV0dG9uOiBkaXNhYmxlQ29uZmlybUJ1dHRvbixcblx0ZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuXHRkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcblx0c2hvd1ZhbGlkYXRpb25NZXNzYWdlOiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UsXG5cdHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U6IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG5cdHJlc2V0VmFsaWRhdGlvbkVycm9yOiByZXNldFZhbGlkYXRpb25FcnJvcixcblx0c2hvd1ZhbGlkYXRpb25FcnJvcjogc2hvd1ZhbGlkYXRpb25FcnJvcixcblx0Z2V0UHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcyQxLFxuXHRzZXRQcm9ncmVzc1N0ZXBzOiBzZXRQcm9ncmVzc1N0ZXBzLFxuXHRzaG93UHJvZ3Jlc3NTdGVwczogc2hvd1Byb2dyZXNzU3RlcHMsXG5cdGhpZGVQcm9ncmVzc1N0ZXBzOiBoaWRlUHJvZ3Jlc3NTdGVwcyxcblx0X21haW46IF9tYWluXG59KTtcblxudmFyIGN1cnJlbnRJbnN0YW5jZTsgLy8gU3dlZXRBbGVydCBjb25zdHJ1Y3RvclxuXG5mdW5jdGlvbiBTd2VldEFsZXJ0KCkge1xuICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb2YgUHJvbWlzZVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG5cbiAgaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIGVycm9yKCdUaGlzIHBhY2thZ2UgcmVxdWlyZXMgYSBQcm9taXNlIGxpYnJhcnksIHBsZWFzZSBpbmNsdWRlIGEgc2hpbSB0byBlbmFibGUgaXQgaW4gdGhpcyBicm93c2VyIChTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KScpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgIGVycm9yKCdBdCBsZWFzdCAxIGFyZ3VtZW50IGlzIGV4cGVjdGVkIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGN1cnJlbnRJbnN0YW5jZSA9IHRoaXM7XG4gIHZhciBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB2YWx1ZTogb3V0ZXJQYXJhbXMsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICB2YXIgcHJvbWlzZSA9IHRoaXMuX21haW4odGhpcy5wYXJhbXMpO1xuXG4gIHByaXZhdGVQcm9wcy5wcm9taXNlLnNldCh0aGlzLCBwcm9taXNlKTtcbn0gLy8gYGNhdGNoYCBjYW5ub3QgYmUgdGhlIG5hbWUgb2YgYSBtb2R1bGUgZXhwb3J0LCBzbyB3ZSBkZWZpbmUgb3VyIHRoZW5hYmxlIG1ldGhvZHMgaGVyZSBpbnN0ZWFkXG5cblxuU3dlZXRBbGVydC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgcmV0dXJuIHByb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG59O1xuXG5Td2VldEFsZXJ0LnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICByZXR1cm4gcHJvbWlzZS5jYXRjaChvblJlamVjdGVkKTtcbn07XG5cblN3ZWV0QWxlcnQucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICByZXR1cm4gcHJvbWlzZS5maW5hbGx5KG9uRmluYWxseSk7XG59OyAvLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcblxuXG5fZXh0ZW5kcyhTd2VldEFsZXJ0LnByb3RvdHlwZSwgaW5zdGFuY2VNZXRob2RzKTsgLy8gQXNzaWduIHN0YXRpYyBtZXRob2RzIGZyb20gc3JjL3N0YXRpY01ldGhvZHMvKi5qcyB0byBjb25zdHJ1Y3RvclxuXG5cbl9leHRlbmRzKFN3ZWV0QWxlcnQsIHN0YXRpY01ldGhvZHMpOyAvLyBQcm94eSB0byBpbnN0YW5jZSBtZXRob2RzIHRvIGNvbnN0cnVjdG9yLCBmb3Igbm93LCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuXG5PYmplY3Qua2V5cyhpbnN0YW5jZU1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBTd2VldEFsZXJ0W2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRJbnN0YW5jZSkge1xuICAgICAgdmFyIF9jdXJyZW50SW5zdGFuY2U7XG5cbiAgICAgIHJldHVybiAoX2N1cnJlbnRJbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZSlba2V5XS5hcHBseShfY3VycmVudEluc3RhbmNlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn0pO1xuU3dlZXRBbGVydC5EaXNtaXNzUmVhc29uID0gRGlzbWlzc1JlYXNvbjtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblN3ZWV0QWxlcnQubm9vcCA9IGZ1bmN0aW9uICgpIHt9O1xuXG52YXIgU3dhbCA9IHdpdGhOb05ld0tleXdvcmQod2l0aEdsb2JhbERlZmF1bHRzKFN3ZWV0QWxlcnQpKTtcblN3YWwuZGVmYXVsdCA9IFN3YWw7XG5cbnJldHVybiBTd2FsO1xuXG59KSkpO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5Td2VldGFsZXJ0Mil7ICB3aW5kb3cuU3dlZXRhbGVydDIudmVyc2lvbiA9ICc3LjI5LjInOyAgd2luZG93LnN3YWwgPSB3aW5kb3cuc3dlZXRBbGVydCA9IHdpbmRvdy5Td2FsID0gd2luZG93LlN3ZWV0QWxlcnQgPSB3aW5kb3cuU3dlZXRhbGVydDJ9XG5cblwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtpZihlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChuKSxuLnN0eWxlU2hlZXQpbi5zdHlsZVNoZWV0LmRpc2FibGVkfHwobi5zdHlsZVNoZWV0LmNzc1RleHQ9dCk7ZWxzZSB0cnl7bi5pbm5lckhUTUw9dH1jYXRjaChlKXtuLmlubmVyVGV4dD10fX0oZG9jdW1lbnQsXCJALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItc2hvd3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNyk7dHJhbnNmb3JtOnNjYWxlKC43KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHN3YWwyLXNob3d7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjcpO3RyYW5zZm9ybTpzY2FsZSguNyl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpO29wYWNpdHk6MH19QGtleWZyYW1lcyBzd2FsMi1oaWRlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOjEuMTg3NWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6MS4wNjI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOjIuMTg3NWVtO2xlZnQ6LS4zNzVlbTt3aWR0aDozLjEyNWVtfTg0JXt0b3A6M2VtO2xlZnQ6MS4zMTI1ZW07d2lkdGg6MS4wNjI1ZW19MTAwJXt0b3A6Mi44MTI1ZW07bGVmdDouODc1ZW07d2lkdGg6MS41NjI1ZW19fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDoxLjE4NzVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOjEuMDYyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDoyLjE4NzVlbTtsZWZ0Oi0uMzc1ZW07d2lkdGg6My4xMjVlbX04NCV7dG9wOjNlbTtsZWZ0OjEuMzEyNWVtO3dpZHRoOjEuMDYyNWVtfTEwMCV7dG9wOjIuODEyNWVtO2xlZnQ6Ljg3NWVtO3dpZHRoOjEuNTYyNWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9NjUle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH04NCV7dG9wOjIuMTg3NWVtO3JpZ2h0OjA7d2lkdGg6My40Mzc1ZW19MTAwJXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTY1JXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9ODQle3RvcDoyLjE4NzVlbTtyaWdodDowO3dpZHRoOjMuNDM3NWVtfTEwMCV7dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFya3swJXttYXJnaW4tdG9wOjEuNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTUwJXttYXJnaW4tdG9wOjEuNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTgwJXttYXJnaW4tdG9wOi0uMzc1ZW07LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpfTEwMCV7bWFyZ2luLXRvcDowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH01MCV7bWFyZ2luLXRvcDoxLjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH04MCV7bWFyZ2luLXRvcDotLjM3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KX0xMDAle21hcmdpbi10b3A6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMCk7dHJhbnNmb3JtOnJvdGF0ZVgoMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDApO3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXNob3due2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcHt0b3A6MDtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodHt0b3A6MDtyaWdodDowO2JvdHRvbTphdXRvO2xlZnQ6YXV0b31ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydHt0b3A6MDtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6MH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydHt0b3A6NTAlO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlcnt0b3A6NTAlO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7dG9wOjUwJTtyaWdodDowO2JvdHRvbTphdXRvO2xlZnQ6YXV0bzstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0e3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOjA7bGVmdDowfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b217dG9wOmF1dG87cmlnaHQ6YXV0bztib3R0b206MDtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHR7dG9wOmF1dG87cmlnaHQ6MDtib3R0b206MDtsZWZ0OmF1dG99Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0e2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNofWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9uc3tmbGV4OjE7YWxpZ24tc2VsZjpzdHJldGNoO2hlaWdodDoyLjJlbTttYXJnaW4tdG9wOi4zMTI1ZW19Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1sb2FkaW5ne2p1c3RpZnktY29udGVudDpjZW50ZXJ9Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dHtoZWlnaHQ6MmVtO21hcmdpbjouMzEyNWVtIGF1dG87Zm9udC1zaXplOjFlbX1ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZXtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdHtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOmF1dG87cGFkZGluZzouNjI1ZW07Ym94LXNoYWRvdzowIDAgLjYyNWVtICNkOWQ5ZDk7b3ZlcmZsb3cteTpoaWRkZW59LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1oZWFkZXJ7ZmxleC1kaXJlY3Rpb246cm93fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGV7ZmxleC1ncm93OjE7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7bWFyZ2luOjAgLjZlbTtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItZm9vdGVye21hcmdpbjouNWVtIDAgMDtwYWRkaW5nOi41ZW0gMCAwO2ZvbnQtc2l6ZTouOGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2V7cG9zaXRpb246aW5pdGlhbDt3aWR0aDouOGVtO2hlaWdodDouOGVtO2xpbmUtaGVpZ2h0Oi44fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY29udGVudHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbnt3aWR0aDoyZW07bWluLXdpZHRoOjJlbTtoZWlnaHQ6MmVtO21hcmdpbjowfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi10ZXh0e2ZvbnQtc2l6ZToyZW07Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3dpZHRoOjJlbTtoZWlnaHQ6MmVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXt0b3A6Ljg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnN7aGVpZ2h0OmF1dG87bWFyZ2luOjAgLjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZHttYXJnaW46MCAuMzEyNWVtO3BhZGRpbmc6LjMxMjVlbSAuNjI1ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIC4wNjI1ZW0gI2ZmZiwwIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMDAsMTUwLC40KX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyZW07aGVpZ2h0OjIuODEyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0uMjVlbTtsZWZ0Oi0uOTM3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTt0cmFuc2Zvcm0tb3JpZ2luOjJlbSAyZW07Ym9yZGVyLXJhZGl1czo0ZW0gMCAwIDRlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0uMjVlbTtsZWZ0Oi45Mzc1ZW07LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMmVtO3RyYW5zZm9ybS1vcmlnaW46MCAyZW07Ym9yZGVyLXJhZGl1czowIDRlbSA0ZW0gMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3RvcDowO2xlZnQ6LjQzNzVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDoyLjY4NzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzaG93U3dlZXRUb2FzdCAuNXM7YW5pbWF0aW9uOnNob3dTd2VldFRvYXN0IC41c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItaGlkZXstd2Via2l0LWFuaW1hdGlvbjpoaWRlU3dlZXRUb2FzdCAuMnMgZm9yd2FyZHM7YW5pbWF0aW9uOmhpZGVTd2VldFRvYXN0IC4ycyBmb3J3YXJkc30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAgLjc1czthbmltYXRpb246YW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCAuNzVzfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25ney13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIC43NXM7YW5pbWF0aW9uOmFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIC43NXN9QC13ZWJraXQta2V5ZnJhbWVzIHNob3dTd2VldFRvYXN0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjYyNWVtKSByb3RhdGVaKDJkZWcpO29wYWNpdHk6MH0zMyV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtvcGFjaXR5Oi41fTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLjMxMjVlbSkgcm90YXRlWigyZGVnKTtvcGFjaXR5Oi43fTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHNob3dTd2VldFRvYXN0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjYyNWVtKSByb3RhdGVaKDJkZWcpO29wYWNpdHk6MH0zMyV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtvcGFjaXR5Oi41fTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLjMxMjVlbSkgcm90YXRlWigyZGVnKTtvcGFjaXR5Oi43fTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCk7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgaGlkZVN3ZWV0VG9hc3R7MCV7b3BhY2l0eToxfTMzJXtvcGFjaXR5Oi41fTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWigxZGVnKTt0cmFuc2Zvcm06cm90YXRlWigxZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgaGlkZVN3ZWV0VG9hc3R7MCV7b3BhY2l0eToxfTMzJXtvcGFjaXR5Oi41fTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWigxZGVnKTt0cmFuc2Zvcm06cm90YXRlWigxZGVnKTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QGtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nezAle3RvcDoxLjYyNWVtO3JpZ2h0OjEuMzc1ZW07d2lkdGg6MH02NSV7dG9wOjEuMjVlbTtyaWdodDouOTM3NWVtO3dpZHRoOjB9ODQle3RvcDouOTM3NWVtO3JpZ2h0OjA7d2lkdGg6MS4xMjVlbX0xMDAle3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX19QGtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZ3swJXt0b3A6MS42MjVlbTtyaWdodDoxLjM3NWVtO3dpZHRoOjB9NjUle3RvcDoxLjI1ZW07cmlnaHQ6LjkzNzVlbTt3aWR0aDowfTg0JXt0b3A6LjkzNzVlbTtyaWdodDowO3dpZHRoOjEuMTI1ZW19MTAwJXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19fWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3c6aGlkZGVufWJvZHkuc3dhbDItaGVpZ2h0LWF1dG97aGVpZ2h0OmF1dG8haW1wb3J0YW50fWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3due3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDphdXRvO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24+LnN3YWwyLW1vZGFse2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuNCl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9we3RvcDowO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9wLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9wLXN0YXJ0e3RvcDowO2xlZnQ6MH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3AtZW5kLGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1yaWdodHt0b3A6MDtyaWdodDowfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlcnt0b3A6NTAlO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItbGVmdCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItc3RhcnR7dG9wOjUwJTtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItZW5kLGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1yaWdodHt0b3A6NTAlO3JpZ2h0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b217Ym90dG9tOjA7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tbGVmdCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tc3RhcnR7Ym90dG9tOjA7bGVmdDowfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1lbmQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLXJpZ2h0e3JpZ2h0OjA7Ym90dG9tOjB9LnN3YWwyLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MTBweDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3otaW5kZXg6MTA2MDtvdmVyZmxvdy14OmhpZGRlbjstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnR7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHR7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7YWxpZ24taXRlbXM6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnR7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodHthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnR7YWxpZ24taXRlbXM6ZmxleC1lbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctZnVsbHNjcmVlbj4uc3dhbDItbW9kYWx7ZGlzcGxheTpmbGV4IWltcG9ydGFudDtmbGV4OjE7YWxpZ24tc2VsZjpzdHJldGNoO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LXJvdz4uc3dhbDItbW9kYWx7ZGlzcGxheTpmbGV4IWltcG9ydGFudDtmbGV4OjE7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1ue2ZsZXg6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20sLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXIsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3B7YWxpZ24taXRlbXM6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1zdGFydCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXJpZ2h0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1yaWdodCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtcmlnaHR7YWxpZ24taXRlbXM6ZmxleC1lbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbj4uc3dhbDItbW9kYWx7ZGlzcGxheTpmbGV4IWltcG9ydGFudDtmbGV4OjE7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3dhbDItY29udGFpbmVyOm5vdCguc3dhbDItdG9wKTpub3QoLnN3YWwyLXRvcC1zdGFydCk6bm90KC5zd2FsMi10b3AtZW5kKTpub3QoLnN3YWwyLXRvcC1sZWZ0KTpub3QoLnN3YWwyLXRvcC1yaWdodCk6bm90KC5zd2FsMi1jZW50ZXItc3RhcnQpOm5vdCguc3dhbDItY2VudGVyLWVuZCk6bm90KC5zd2FsMi1jZW50ZXItbGVmdCk6bm90KC5zd2FsMi1jZW50ZXItcmlnaHQpOm5vdCguc3dhbDItYm90dG9tKTpub3QoLnN3YWwyLWJvdHRvbS1zdGFydCk6bm90KC5zd2FsMi1ib3R0b20tZW5kKTpub3QoLnN3YWwyLWJvdHRvbS1sZWZ0KTpub3QoLnN3YWwyLWJvdHRvbS1yaWdodCk6bm90KC5zd2FsMi1ncm93LWZ1bGxzY3JlZW4pPi5zd2FsMi1tb2RhbHttYXJnaW46YXV0b31AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6bm9uZSksKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7LnN3YWwyLWNvbnRhaW5lciAuc3dhbDItbW9kYWx7bWFyZ2luOjAhaW1wb3J0YW50fX0uc3dhbDItY29udGFpbmVyLnN3YWwyLWZhZGV7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xc30uc3dhbDItY29udGFpbmVyLnN3YWwyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNCl9LnN3YWwyLXBvcHVwe2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDozMmVtO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MS4yNWVtO2JvcmRlci1yYWRpdXM6LjMxMjVlbTtiYWNrZ3JvdW5kOiNmZmY7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MXJlbTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnN3YWwyLXBvcHVwOmZvY3Vze291dGxpbmU6MH0uc3dhbDItcG9wdXAuc3dhbDItbG9hZGluZ3tvdmVyZmxvdy15OmhpZGRlbn0uc3dhbDItcG9wdXAgLnN3YWwyLWhlYWRlcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItcG9wdXAgLnN3YWwyLXRpdGxle2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjAgMCAuNGVtO3BhZGRpbmc6MDtjb2xvcjojNTk1OTU5O2ZvbnQtc2l6ZToxLjg3NWVtO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9uc3tmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MS4yNWVtIGF1dG8gMDt6LWluZGV4OjF9LnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF17b3BhY2l0eTouNH0uc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmhvdmVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjEpLHJnYmEoMCwwLDAsLjEpKX0uc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmFjdGl2ZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC4yKSxyZ2JhKDAsMCwwLC4yKSl9LnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJte3dpZHRoOjIuNWVtO2hlaWdodDoyLjVlbTttYXJnaW46LjQ2ODc1ZW07cGFkZGluZzowO2JvcmRlcjouMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2NvbG9yOnRyYW5zcGFyZW50O2N1cnNvcjpkZWZhdWx0O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWx7bWFyZ2luLXJpZ2h0OjMwcHg7bWFyZ2luLWxlZnQ6MzBweH0uc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyA6bm90KC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNvbmZpcm06OmFmdGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjE1cHg7aGVpZ2h0OjE1cHg7bWFyZ2luLWxlZnQ6NXB4O2JvcmRlcjozcHggc29saWQgIzk5OTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzoxcHggMXB4IDFweCAjZmZmO2NvbnRlbnQ6Jyc7LXdlYmtpdC1hbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWx9LnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWR7bWFyZ2luOi4zMTI1ZW07cGFkZGluZzouNjI1ZW0gMmVtO2ZvbnQtd2VpZ2h0OjUwMDtib3gtc2hhZG93Om5vbmV9LnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQ6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm17Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojMzA4NWQ2O2NvbG9yOiNmZmY7Zm9udC1zaXplOjEuMDYyNWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbHtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiNhYWE7Y29sb3I6I2ZmZjtmb250LXNpemU6MS4wNjI1ZW19LnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQ6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgMnB4ICNmZmYsMCAwIDAgNHB4IHJnYmEoNTAsMTAwLDE1MCwuNCl9LnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwyLXBvcHVwIC5zd2FsMi1mb290ZXJ7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MS4yNWVtIDAgMDtwYWRkaW5nOjFlbSAwIDA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZTtjb2xvcjojNTQ1NDU0O2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwIC5zd2FsMi1pbWFnZXttYXgtd2lkdGg6MTAwJTttYXJnaW46MS4yNWVtIGF1dG99LnN3YWwyLXBvcHVwIC5zd2FsMi1jbG9zZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MS4yZW07aGVpZ2h0OjEuMmVtO3BhZGRpbmc6MDt0cmFuc2l0aW9uOmNvbG9yIC4xcyBlYXNlLW91dDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7YmFja2dyb3VuZDowIDA7Y29sb3I6I2NjYztmb250LWZhbWlseTpzZXJpZjtmb250LXNpemU6Mi41ZW07bGluZS1oZWlnaHQ6MS4yO2N1cnNvcjpwb2ludGVyO292ZXJmbG93OmhpZGRlbn0uc3dhbDItcG9wdXAgLnN3YWwyLWNsb3NlOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOm5vbmU7dHJhbnNmb3JtOm5vbmU7Y29sb3I6I2YyNzQ3NH0uc3dhbDItcG9wdXA+LnN3YWwyLWNoZWNrYm94LC5zd2FsMi1wb3B1cD4uc3dhbDItZmlsZSwuc3dhbDItcG9wdXA+LnN3YWwyLWlucHV0LC5zd2FsMi1wb3B1cD4uc3dhbDItcmFkaW8sLnN3YWwyLXBvcHVwPi5zd2FsMi1zZWxlY3QsLnN3YWwyLXBvcHVwPi5zd2FsMi10ZXh0YXJlYXtkaXNwbGF5Om5vbmV9LnN3YWwyLXBvcHVwIC5zd2FsMi1jb250ZW50e2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjA7cGFkZGluZzowO2NvbG9yOiM1NDU0NTQ7Zm9udC1zaXplOjEuMTI1ZW07Zm9udC13ZWlnaHQ6MzAwO2xpbmUtaGVpZ2h0Om5vcm1hbDt6LWluZGV4OjE7d29yZC13cmFwOmJyZWFrLXdvcmR9LnN3YWwyLXBvcHVwICNzd2FsMi1jb250ZW50e3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1wb3B1cCAuc3dhbDItY2hlY2tib3gsLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQsLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbywuc3dhbDItcG9wdXAgLnN3YWwyLXNlbGVjdCwuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhe21hcmdpbjoxZW0gYXV0b30uc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUsLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dCwuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhe3dpZHRoOjEwMCU7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjNzLGJveC1zaGFkb3cgLjNzO2JvcmRlcjoxcHggc29saWQgI2Q5ZDlkOTtib3JkZXItcmFkaXVzOi4xODc1ZW07Zm9udC1zaXplOjEuMTI1ZW07Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvciwuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0IWltcG9ydGFudDtib3gtc2hhZG93OjAgMCAycHggI2YyNzQ3NCFpbXBvcnRhbnR9LnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOmZvY3VzLC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6Zm9jdXMsLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTpmb2N1c3tib3JkZXI6MXB4IHNvbGlkICNiNGRiZWQ7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDNweCAjYzRlNmY1fS5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTo6cGxhY2Vob2xkZXIsLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIGlucHV0e3dpZHRoOjgwJX0uc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIG91dHB1dHt3aWR0aDoyMCU7Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2UgaW5wdXQsLnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBvdXRwdXR7aGVpZ2h0OjIuNjI1ZW07bWFyZ2luOjFlbSBhdXRvO3BhZGRpbmc6MDtmb250LXNpemU6MS4xMjVlbTtsaW5lLWhlaWdodDoyLjYyNWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowIC43NWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXRbdHlwZT1udW1iZXJde21heC13aWR0aDoxMGVtfS5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZXtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhe2hlaWdodDo2Ljc1ZW07cGFkZGluZzouNzVlbX0uc3dhbDItcG9wdXAgLnN3YWwyLXNlbGVjdHttaW4td2lkdGg6NTAlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6LjM3NWVtIC42MjVlbTtjb2xvcjojNTQ1NDU0O2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItY2hlY2tib3gsLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpb3thbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGxhYmVsLC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8gbGFiZWx7bWFyZ2luOjAgLjZlbTtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGlucHV0LC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8gaW5wdXR7bWFyZ2luOjAgLjRlbX0uc3dhbDItcG9wdXAgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZXtkaXNwbGF5Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzouNjI1ZW07YmFja2dyb3VuZDojZjBmMGYwO2NvbG9yOiM2NjY7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDozMDA7b3ZlcmZsb3c6aGlkZGVufS5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlOjpiZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MS41ZW07bWluLXdpZHRoOjEuNWVtO2hlaWdodDoxLjVlbTttYXJnaW46MCAuNjI1ZW07Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2NvbG9yOiNmZmY7Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0OjEuNWVtO3RleHQtYWxpZ246Y2VudGVyO2NvbnRlbnQ6JyEnO3pvb206bm9ybWFsfUBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpey5zd2FsMi1jbG9zZTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCByZ2JhKDUwLDEwMCwxNTAsLjQpfX0uc3dhbDItaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjVlbTtoZWlnaHQ6NWVtO21hcmdpbjoxLjI1ZW0gYXV0byAxLjg3NWVtO2JvcmRlcjouMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTtsaW5lLWhlaWdodDo1ZW07Y3Vyc29yOmRlZmF1bHQ7Ym94LXNpemluZzpjb250ZW50LWJveDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7em9vbTpub3JtYWx9LnN3YWwyLWljb24tdGV4dHtmb250LXNpemU6My43NWVtfS5zd2FsMi1pY29uLnN3YWwyLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZmxleC1ncm93OjF9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Mi4zMTI1ZW07d2lkdGg6Mi45Mzc1ZW07aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0OjEuMDYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XXtyaWdodDoxZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmd7Ym9yZGVyLWNvbG9yOiNmYWNlYTg7Y29sb3I6I2Y4YmI4Nn0uc3dhbDItaWNvbi5zd2FsMi1pbmZve2JvcmRlci1jb2xvcjojOWRlMGY2O2NvbG9yOiMzZmMzZWV9LnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb257Ym9yZGVyLWNvbG9yOiNjOWRhZTE7Y29sb3I6Izg3YWRiZH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMuNzVlbTtoZWlnaHQ6Ny41ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0uNDM3NWVtO2xlZnQ6LTIuMDYzNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46My43NWVtIDMuNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjMuNzVlbSAzLjc1ZW07Ym9yZGVyLXJhZGl1czo3LjVlbSAwIDAgNy41ZW19LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LS42ODc1ZW07bGVmdDoxLjg3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAzLjc1ZW07dHJhbnNmb3JtLW9yaWdpbjowIDMuNzVlbTtib3JkZXItcmFkaXVzOjAgNy41ZW0gNy41ZW0gMH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0uMjVlbTtsZWZ0Oi0uMjVlbTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDE2NSwyMjAsMTM0LC4zKTtib3JkZXItcmFkaXVzOjUwJTt6LWluZGV4OjI7Ym94LXNpemluZzpjb250ZW50LWJveH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LjVlbTtsZWZ0OjEuNjI1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6NS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7ei1pbmRleDoxfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojYTVkYzg2O3otaW5kZXg6Mn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6Mi44NzVlbTtsZWZ0Oi44NzVlbTt3aWR0aDoxLjU2MjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItcHJvZ3Jlc3NzdGVwc3thbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjAgMCAxLjI1ZW07cGFkZGluZzowO2ZvbnQtd2VpZ2h0OjYwMH0uc3dhbDItcHJvZ3Jlc3NzdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NjaXJjbGV7d2lkdGg6MmVtO2hlaWdodDoyZW07Ym9yZGVyLXJhZGl1czoyZW07YmFja2dyb3VuZDojMzA4NWQ2O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MmVtO3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MjB9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjB9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcHtiYWNrZ3JvdW5kOiMzMDg1ZDZ9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcH4uc3dhbDItcHJvZ3Jlc3NjaXJjbGV7YmFja2dyb3VuZDojYWRkOGU2fS5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXB+LnN3YWwyLXByb2dyZXNzbGluZXtiYWNrZ3JvdW5kOiNhZGQ4ZTZ9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzbGluZXt3aWR0aDoyLjVlbTtoZWlnaHQ6LjRlbTttYXJnaW46MCAtMXB4O2JhY2tncm91bmQ6IzMwODVkNjt6LWluZGV4OjEwfVtjbGFzc149c3dhbDJdey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0uc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1zaG93IC4zczthbmltYXRpb246c3dhbDItc2hvdyAuM3N9LnN3YWwyLXNob3cuc3dhbDItbm9hbmltYXRpb257LXdlYmtpdC1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX0uc3dhbDItaGlkZXstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1oaWRlIC4xNXMgZm9yd2FyZHM7YW5pbWF0aW9uOnN3YWwyLWhpZGUgLjE1cyBmb3J3YXJkc30uc3dhbDItaGlkZS5zd2FsMi1ub2FuaW1hdGlvbnstd2Via2l0LWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfS5zd2FsMi1ydGwgLnN3YWwyLWNsb3Nle3JpZ2h0OmF1dG87bGVmdDowfS5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcHstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1czthbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIC43NXN9LnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c30uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodHstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbn0uc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9LnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuc3dhbDIteC1tYXJrey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41czthbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzfUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZ3swJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZ3swJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QG1lZGlhIHByaW50e2JvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3cteTpzY3JvbGwhaW1wb3J0YW50fWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bik+W2FyaWEtaGlkZGVuPXRydWVde2Rpc3BsYXk6bm9uZX1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pIC5zd2FsMi1jb250YWluZXJ7cG9zaXRpb246aW5pdGlhbCFpbXBvcnRhbnR9fVwiKTsiXSwic291cmNlUm9vdCI6IiJ9