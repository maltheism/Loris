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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/media/jsx/mediaIndex.js");
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

/***/ "./jsx/ProgressBar.js":
/*!****************************!*\
  !*** ./jsx/ProgressBar.js ***!
  \****************************/
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * React ProgressBar.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Updates UI automatically when passed a progress value between 0 and 100.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * To hide progress bar before/after upload, set value to -1.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Note: This component relies on Bootstrap 3 progress-bar classes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (http://getbootstrap.com/components/#progress)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ProgressBar = function (_Component) {
  _inherits(ProgressBar, _Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: 'render',
    value: function render() {
      var progressStyle = {
        display: this.props.value < 0 ? 'none' : 'block',
        backgroundColor: '#d3d3d3',
        height: '30px',
        position: 'relative'
      };

      var labelStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1000,
        width: '100%',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '30px',
        fontWeight: '600'
      };

      return _react2.default.createElement(
        'div',
        { className: 'progress', style: progressStyle },
        _react2.default.createElement('div', {
          className: 'progress-bar progress-bar-striped active',
          role: 'progressbar',
          'aria-valuemin': '0',
          'aria-valuemax': '100',
          'aria-valuenow': this.props.value,
          style: { width: this.props.value + '%' }
        }),
        _react2.default.createElement(
          'span',
          { style: labelStyle },
          this.props.value,
          '%'
        )
      );
    }
  }]);

  return ProgressBar;
}(_react.Component);

ProgressBar.propTypes = {
  value: _propTypes2.default.number
};
ProgressBar.defaultProps = {
  value: 0
};

exports.default = ProgressBar;

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

/***/ "./jsx/TriggerableModal.js":
/*!*********************************!*\
  !*** ./jsx/TriggerableModal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Modal = __webpack_require__(/*! Modal */ "./jsx/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file contains the React Component for a Triggerable Modal Window.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Henri Rabalais
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Triggerable Modal Component.
 * React wrapper for a Triggerable Modal Window.
 * Allows to dynamically toggle a Modal window through a rendered trigger.
 *
 * ================================================
 * Usage:
 * - Wrap the contents to be displayed by the Modal Window by the
 *   Triggerable Modal Component.
 * - Use the 'title' prop to set a title for the Modal Component.
 * - Use the 'trigger' prop to set the component that will act as a trigger to
 *   open the Modal window.
 * - Use the 'onSubmit' prop to set a submission promise object for the Modal's contents.
 * - Use the 'onClose' prop to set a function to be triggered when the Modal is
 *   closed.
 * - Use the 'throwWarning' prop to throw a warning upon closure of the Modal Window.
 * =================================================
 *
 */
var TriggerableModal = function (_Component) {
  _inherits(TriggerableModal, _Component);

  function TriggerableModal() {
    _classCallCheck(this, TriggerableModal);

    var _this = _possibleConstructorReturn(this, (TriggerableModal.__proto__ || Object.getPrototypeOf(TriggerableModal)).call(this));

    _this.state = { open: false };
    _this.close = _this.close.bind(_this);
    return _this;
  }

  _createClass(TriggerableModal, [{
    key: 'close',
    value: function close() {
      this.setState({ open: false });
      if (this.props.onClose instanceof Function) this.props.onClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          _onUserInput = _props.onUserInput;


      var trigger = _react2.default.createElement(CTA, { label: label, onUserInput: function onUserInput() {
          if (_onUserInput instanceof Function) _onUserInput();
          _this2.setState({ open: true });
        } });

      return _react2.default.createElement(
        'div',
        null,
        trigger,
        _react2.default.createElement(_Modal2.default, _extends({}, this.props, { show: this.state.open, onClose: this.close }))
      );
    }
  }]);

  return TriggerableModal;
}(_react.Component);

TriggerableModal.propTypes = {
  label: _propTypes2.default.string.isRequired,
  onClose: _propTypes2.default.func
};

exports.default = TriggerableModal;

/***/ }),

/***/ "./modules/media/jsx/editForm.js":
/*!***************************************!*\
  !*** ./modules/media/jsx/editForm.js ***!
  \***************************************/
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* exported RMediaEditForm */

/**
 * Media Edit Form
 *
 * Fetches data corresponding to a given file from Loris backend and
 * displays a form allowing meta information of the media file
 *
 * @author Alex Ilea
 * @version 1.0.0
 *
 * */


var MediaEditForm = function (_Component) {
  _inherits(MediaEditForm, _Component);

  function MediaEditForm(props) {
    _classCallCheck(this, MediaEditForm);

    var _this = _possibleConstructorReturn(this, (MediaEditForm.__proto__ || Object.getPrototypeOf(MediaEditForm)).call(this, props));

    _this.state = {
      Data: {},
      formData: {},
      uploadResult: null,
      isLoaded: false,
      loadedData: 0
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.setFormData = _this.setFormData.bind(_this);
    return _this;
  }

  _createClass(MediaEditForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      $.ajax(this.props.DataURL, {
        dataType: 'json',
        success: function success(data) {
          var formData = {
            idMediaFile: data.mediaData.id,
            forSite: data.mediaData.forSite,
            dateTaken: data.mediaData.dateTaken,
            comments: data.mediaData.comments,
            hideFile: data.mediaData.hideFile
          };

          self.setState({
            Data: data,
            isLoaded: true,
            mediaData: data.mediaData,
            formData: formData
          });
        },
        error: function error(_error, errorCode, errorMsg) {
          console.error(_error, errorCode, errorMsg);
          self.setState({
            error: 'An error occurred when loading the form!'
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // Data loading error
      if (this.state.error !== undefined) {
        return _react2.default.createElement(
          'div',
          { className: 'alert alert-danger text-center' },
          _react2.default.createElement(
            'strong',
            null,
            this.state.error
          )
        );
      }

      // Waiting for data to load
      if (!this.state.isLoaded) {
        return _react2.default.createElement(
          'button',
          { className: 'btn-info has-spinner' },
          'Loading',
          _react2.default.createElement('span', {
            className: 'glyphicon glyphicon-refresh glyphicon-refresh-animate' })
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          FormElement,
          {
            name: 'mediaEdit',
            onSubmit: this.handleSubmit,
            ref: 'form'
          },
          _react2.default.createElement(SelectElement, {
            name: 'pscid',
            label: 'PSCID',
            options: this.state.Data.candidates,
            onUserInput: this.setFormData,
            ref: 'pscid',
            required: true,
            disabled: true,
            value: this.state.mediaData.pscid
          }),
          _react2.default.createElement(SelectElement, {
            name: 'visitLabel',
            label: 'Visit Label',
            options: this.state.Data.visits,
            onUserInput: this.setFormData,
            ref: 'visitLabel',
            required: true,
            disabled: true,
            value: this.state.mediaData.visitLabel
          }),
          _react2.default.createElement(SelectElement, {
            name: 'forSite',
            label: 'Site',
            options: this.state.Data.sites,
            onUserInput: this.setFormData,
            ref: 'forSite',
            disabled: true,
            value: this.state.mediaData.forSite
          }),
          _react2.default.createElement(SelectElement, {
            name: 'instrument',
            label: 'Instrument',
            options: this.state.Data.instruments,
            onUserInput: this.setFormData,
            ref: 'instrument',
            disabled: true,
            value: this.state.mediaData.instrument
          }),
          _react2.default.createElement(DateElement, {
            name: 'dateTaken',
            label: 'Date of Administration',
            minYear: '2000',
            maxYear: '2017',
            onUserInput: this.setFormData,
            ref: 'dateTaken',
            value: this.state.formData.dateTaken
          }),
          _react2.default.createElement(TextareaElement, {
            name: 'comments',
            label: 'Comments',
            onUserInput: this.setFormData,
            ref: 'comments',
            value: this.state.formData.comments
          }),
          _react2.default.createElement(FileElement, {
            name: 'file',
            id: 'mediaEditEl',
            onUserInput: this.setFormData,
            required: true,
            disabled: true,
            ref: 'file',
            label: 'Uploaded file',
            value: this.state.mediaData.fileName
          }),
          _react2.default.createElement(SelectElement, {
            name: 'hideFile',
            label: 'Hide File',
            emptyOption: false,
            options: ['No', 'Yes'],
            onUserInput: this.setFormData,
            ref: 'hideFile',
            value: this.state.formData.hideFile
          }),
          _react2.default.createElement(ButtonElement, { label: 'Update File' })
        )
      );
    }

    /**
     * Handles form submission
     * @param {event} e - Form submission event
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      var self = this;
      var myFormData = this.state.formData;

      $('#mediaEditEl').hide();
      $('#file-progress').removeClass('hide');

      $.ajax({
        type: 'POST',
        url: self.props.action,
        data: JSON.stringify(myFormData),
        cache: false,
        contentType: false,
        processData: false,
        xhr: function xhr() {
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener('progress', function (evt) {
            if (evt.lengthComputable) {
              var progressbar = $('#progressbar');
              var progresslabel = $('#progresslabel');
              var percent = Math.round(evt.loaded / evt.total * 100);
              $(progressbar).width(percent + '%');
              $(progresslabel).html(percent + '%');
              progressbar.attr('aria-valuenow', percent);
            }
          }, false);
          return xhr;
        },
        success: function success(data) {
          $('#file-progress').addClass('hide');
          (0, _sweetalert2.default)('Upload Successful!', '', 'success');
          _this2.props.fetchData();
        },
        error: function error(err) {
          (0, _sweetalert2.default)('Upload Error!', '', 'error');
          console.error(err);
        }
      });
    }

    /**
     * Set the form data based on state values of child elements/components
     *
     * @param {string} formElement - name of the selected element
     * @param {string} value - selected value for corresponding form element
     */

  }, {
    key: 'setFormData',
    value: function setFormData(formElement, value) {
      var formData = this.state.formData;

      if (value === '') {
        formData[formElement] = null;
      } else {
        formData[formElement] = value;
      }

      this.setState({
        formData: formData
      });
    }
  }]);

  return MediaEditForm;
}(_react.Component);

MediaEditForm.propTypes = {
  DataURL: _propTypes2.default.string.isRequired,
  action: _propTypes2.default.string.isRequired
};

exports.default = MediaEditForm;

/***/ }),

/***/ "./modules/media/jsx/mediaIndex.js":
/*!*****************************************!*\
  !*** ./modules/media/jsx/mediaIndex.js ***!
  \*****************************************/
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

var _TriggerableModal = __webpack_require__(/*! TriggerableModal */ "./jsx/TriggerableModal.js");

var _TriggerableModal2 = _interopRequireDefault(_TriggerableModal);

var _uploadForm = __webpack_require__(/*! ./uploadForm */ "./modules/media/jsx/uploadForm.js");

var _uploadForm2 = _interopRequireDefault(_uploadForm);

var _editForm = __webpack_require__(/*! ./editForm */ "./modules/media/jsx/editForm.js");

var _editForm2 = _interopRequireDefault(_editForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaIndex = function (_Component) {
  _inherits(MediaIndex, _Component);

  function MediaIndex(props) {
    _classCallCheck(this, MediaIndex);

    var _this = _possibleConstructorReturn(this, (MediaIndex.__proto__ || Object.getPrototypeOf(MediaIndex)).call(this, props));

    _this.state = {
      data: {},
      error: false,
      isLoaded: false
    };

    _this.fetchData = _this.fetchData.bind(_this);
    _this.formatColumn = _this.formatColumn.bind(_this);
    return _this;
  }

  _createClass(MediaIndex, [{
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
      // Set class to 'bg-danger' if file is hidden.
      var style = row['File Visibility'] === '1' ? 'bg-danger' : '';
      var result = _react2.default.createElement(
        'td',
        { className: style },
        cell
      );
      switch (column) {
        case 'File Name':
          if (this.props.hasPermission('media_write')) {
            var downloadURL = loris.BaseURL + '/media/ajax/FileDownload.php?File=' + encodeURIComponent(row['File Name']);
            result = _react2.default.createElement(
              'td',
              { className: style },
              _react2.default.createElement(
                'a',
                { href: downloadURL, target: '_blank', download: row['File Name'] },
                cell
              )
            );
          }
          break;
        case 'Visit Label':
          if (row['CandID'] !== null && row['SessionID']) {
            var sessionURL = loris.BaseURL + '/instrument_list/?candID=' + row['CandID'] + '&sessionID=' + row['SessionID'];
            result = _react2.default.createElement(
              'td',
              { className: style },
              _react2.default.createElement(
                'a',
                { href: sessionURL },
                cell
              )
            );
          }
          break;
        case 'Edit Metadata':
          var editButton = _react2.default.createElement(
            _TriggerableModal2.default,
            { title: 'Edit Media File', label: 'Edit' },
            _react2.default.createElement(_editForm2.default, {
              DataURL: loris.BaseURL + '/media/ajax/FileUpload.php?action=getData&idMediaFile=' + row['Edit Metadata'],
              action: loris.BaseURL + '/media/ajax/FileUpload.php?action=edit',
              fetchData: this.fetchData /* this should be passed to onSubmit function
                                        upon refactoring editForm.js*/
            })
          );
          result = _react2.default.createElement(
            'td',
            { className: style },
            editButton
          );
          break;
      }

      return result;
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

      /**
       * XXX: Currently, the order of these fields MUST match the order of the
       * queried columns in _setupVariables() in media.class.inc
       */
      var options = this.state.data.fieldOptions;
      var fields = [{ label: 'File Name', show: true, filter: {
          name: 'fileName',
          type: 'text'
        } }, { label: 'PSCID', show: true, filter: {
          name: 'pscid',
          type: 'text'
        } }, { label: 'Visit Label', show: true, filter: {
          name: 'visitLabel',
          type: 'select',
          options: options.visits
        } }, { label: 'Language', show: true, filter: {
          name: 'language',
          type: 'select',
          options: options.languages
        } }, { label: 'Instrument', show: true, filter: {
          name: 'instrument',
          type: 'select',
          options: options.instruments
        } }, { label: 'Site', show: true, filter: {
          name: 'site',
          type: 'select',
          options: options.sites
        } }, { label: 'Uploaded By', show: true, filter: {
          name: 'uploadedBy',
          type: 'text'
        } }, { label: 'Date Taken', show: true }, { label: 'Comments', show: true }, { label: 'Date Uploaded', show: true }, { label: 'File Type', show: false, filter: {
          name: 'fileType',
          type: 'select',
          options: options.fileTypes
        } }, { label: 'CandID', show: false }, { label: 'SessionID', show: false }, { label: 'File Visibility', show: false, filter: {
          name: 'fileVisibility',
          type: 'select',
          options: options.hidden,
          hide: !this.props.hasPermission('superUser')
        } }, { label: 'Edit Metadata', show: true }];
      var tabs = [{ id: 'browse', label: 'Browse' }];
      var uploadTab = function uploadTab() {
        if (_this4.props.hasPermission('media_write')) {
          tabs.push({ id: 'upload', label: 'Upload' });
          return _react2.default.createElement(
            _Tabs.TabPane,
            { TabId: tabs[1].id },
            _react2.default.createElement(_uploadForm2.default, {
              DataURL: loris.BaseURL + '/media/ajax/FileUpload.php?action=getData',
              action: loris.BaseURL + '/media/ajax/FileUpload.php?action=upload',
              maxUploadSize: _this4.state.data.maxUploadSize
            })
          );
        }
      };

      return _react2.default.createElement(
        _Tabs.Tabs,
        { tabs: tabs, defaultTab: 'browse', updateURL: true },
        _react2.default.createElement(
          _Tabs.TabPane,
          { TabId: tabs[0].id },
          _react2.default.createElement(_FilterableDataTable2.default, {
            name: 'media',
            data: this.state.data.Data,
            fields: fields,
            getFormattedCell: this.formatColumn
          })
        ),
        uploadTab()
      );
    }
  }]);

  return MediaIndex;
}(_react.Component);

MediaIndex.propTypes = {
  dataURL: _propTypes2.default.string.isRequired,
  hasPermission: _propTypes2.default.func.isRequired
};

window.addEventListener('load', function () {
  ReactDOM.render(_react2.default.createElement(MediaIndex, {
    dataURL: loris.BaseURL + '/media/?format=json',
    hasPermission: loris.userHasPermission
  }), document.getElementById('lorisworkspace'));
});

/***/ }),

/***/ "./modules/media/jsx/uploadForm.js":
/*!*****************************************!*\
  !*** ./modules/media/jsx/uploadForm.js ***!
  \*****************************************/
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

var _ProgressBar = __webpack_require__(/*! ProgressBar */ "./jsx/ProgressBar.js");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _Loader = __webpack_require__(/*! jsx/Loader */ "./jsx/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Media Upload Form
 *
 * Fetches data from Loris backend and displays a form allowing
 * to upload a media file attached to a specific instrument
 *
 * @author Alex Ilea
 * @version 1.0.0
 *
 * */
var MediaUploadForm = function (_Component) {
  _inherits(MediaUploadForm, _Component);

  function MediaUploadForm(props) {
    _classCallCheck(this, MediaUploadForm);

    var _this = _possibleConstructorReturn(this, (MediaUploadForm.__proto__ || Object.getPrototypeOf(MediaUploadForm)).call(this, props));

    _this.state = {
      Data: {},
      formData: {},
      uploadResult: null,
      errorMessage: null,
      isLoaded: false,
      loadedData: 0,
      uploadProgress: -1
    };

    _this.getValidFileName = _this.getValidFileName.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.isValidFileName = _this.isValidFileName.bind(_this);
    _this.isValidForm = _this.isValidForm.bind(_this);
    _this.setFormData = _this.setFormData.bind(_this);
    _this.uploadFile = _this.uploadFile.bind(_this);
    return _this;
  }

  _createClass(MediaUploadForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      $.ajax(this.props.DataURL, {
        dataType: 'json',
        success: function success(data) {
          self.setState({
            Data: data,
            isLoaded: true
          });
        },
        error: function error(data, errorCode, errorMsg) {
          console.error(data, errorCode, errorMsg);
          self.setState({
            error: 'An error occurred when loading the form!'
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // Data loading error
      if (this.state.error !== undefined) {
        return _react2.default.createElement(
          'div',
          { className: 'alert alert-danger text-center' },
          _react2.default.createElement(
            'strong',
            null,
            this.state.error
          )
        );
      }

      // Waiting for data to load
      if (!this.state.isLoaded) {
        return _react2.default.createElement(_Loader2.default, null);
      }

      var helpText = _react2.default.createElement(
        'span',
        null,
        'File name must begin with ',
        _react2.default.createElement(
          'b',
          null,
          '[PSCID]_[Visit Label]_[Instrument]'
        ),
        _react2.default.createElement('br', null),
        'For example, for candidate ',
        _react2.default.createElement(
          'i',
          null,
          'ABC123'
        ),
        ', visit ',
        _react2.default.createElement(
          'i',
          null,
          'V1'
        ),
        ' for',
        _react2.default.createElement(
          'i',
          null,
          'Body Mass Index'
        ),
        ' the file name should be prefixed by:',
        _react2.default.createElement(
          'b',
          null,
          ' ABC123_V1_Body_Mass_Index'
        ),
        _react2.default.createElement('br', null),
        'File cannot exceed ',
        this.props.maxUploadSize
      );

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-8 col-lg-7' },
          _react2.default.createElement(
            FormElement,
            {
              name: 'mediaUpload',
              fileUpload: true,
              onSubmit: this.handleSubmit,
              ref: 'form'
            },
            _react2.default.createElement(
              'h3',
              null,
              'Upload a media file'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(StaticElement, {
              label: 'Note',
              text: helpText
            }),
            _react2.default.createElement(SelectElement, {
              name: 'pscid',
              label: 'PSCID',
              options: this.state.Data.candidates,
              onUserInput: this.setFormData,
              ref: 'pscid',
              hasError: false,
              required: true,
              value: this.state.formData.pscid
            }),
            _react2.default.createElement(SelectElement, {
              name: 'visitLabel',
              label: 'Visit Label',
              options: this.state.Data.visits,
              onUserInput: this.setFormData,
              ref: 'visitLabel',
              required: true,
              value: this.state.formData.visitLabel
            }),
            _react2.default.createElement(SearchableDropdown, {
              name: 'forSite',
              label: 'Site',
              placeHolder: 'Search for site',
              options: this.state.Data.sites,
              strictSearch: true,
              onUserInput: this.setFormData,
              ref: 'forSite',
              required: true,
              value: this.state.formData.forSite
            }),
            _react2.default.createElement(SelectElement, {
              name: 'instrument',
              label: 'Instrument',
              options: this.state.Data.instruments,
              onUserInput: this.setFormData,
              ref: 'instrument',
              value: this.state.formData.instrument
            }),
            _react2.default.createElement(DateElement, {
              name: 'dateTaken',
              label: 'Date of Administration',
              minYear: '2000',
              maxYear: '2017',
              onUserInput: this.setFormData,
              ref: 'dateTaken',
              value: this.state.formData.dateTaken
            }),
            _react2.default.createElement(TextareaElement, {
              name: 'comments',
              label: 'Comments',
              onUserInput: this.setFormData,
              ref: 'comments',
              value: this.state.formData.comments
            }),
            _react2.default.createElement(SelectElement, {
              name: 'language',
              label: 'Document\'s Language',
              options: this.state.Data.language,
              onUserInput: this.setFormData,
              ref: 'language',
              required: false,
              value: this.state.formData.language
            }),
            _react2.default.createElement(FileElement, {
              name: 'file',
              id: 'mediaUploadEl',
              onUserInput: this.setFormData,
              ref: 'file',
              label: 'File to upload',
              required: true,
              value: this.state.formData.file
            }),
            _react2.default.createElement(ButtonElement, { label: 'Upload File' }),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-9 col-sm-offset-3' },
                _react2.default.createElement(_ProgressBar2.default, { value: this.state.uploadProgress })
              )
            )
          )
        )
      );
    }

    /** *******************************************************************************
     *                      ******     Helper methods     *******
     *********************************************************************************/

    /**
     * Returns a valid name for the file to be uploaded
     *
     * @param {string} pscid - PSCID selected from the dropdown
     * @param {string} visitLabel - Visit label selected from the dropdown
     * @param {string} instrument - Instrument selected from the dropdown
     * @return {string} - Generated valid filename for the current selection
     */

  }, {
    key: 'getValidFileName',
    value: function getValidFileName(pscid, visitLabel, instrument) {
      var fileName = pscid + '_' + visitLabel;
      if (instrument) fileName += '_' + instrument;

      return fileName;
    }

    /**
     * Handle form submission
     * @param {object} e - Form submission event
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();

      var formData = this.state.formData;
      var formRefs = this.refs;
      var mediaFiles = this.state.Data.mediaFiles ? this.state.Data.mediaFiles : [];

      // Validate the form
      if (!this.isValidForm(formRefs, formData)) {
        return;
      }

      // Validate uploaded file name
      var instrument = formData.instrument ? formData.instrument : null;
      var fileName = formData.file ? formData.file.name.replace(/\s+/g, '_') : null;
      var requiredFileName = this.getValidFileName(formData.pscid, formData.visitLabel, instrument);
      if (!this.isValidFileName(requiredFileName, fileName)) {
        swal('Invalid file name!', 'File name should begin with: ' + requiredFileName, 'error');
        return;
      }

      // Check for duplicate file names
      var isDuplicate = mediaFiles.indexOf(fileName);
      if (isDuplicate >= 0) {
        swal({
          title: 'Are you sure?',
          text: 'A file with this name already exists!\n Would you like to override existing file?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, I am sure!',
          cancelButtonText: 'No, cancel it!'
        }, function (isConfirm) {
          if (isConfirm) {
            this.uploadFile();
          } else {
            swal('Cancelled', 'Your imaginary file is safe :)', 'error');
          }
        }.bind(this));
      } else {
        this.uploadFile();
      }
    }

    /*
     * Uploads the file to the server
     */

  }, {
    key: 'uploadFile',
    value: function uploadFile() {
      // Set form data and upload the media file
      var formData = this.state.formData;
      var formObj = new FormData();
      for (var key in formData) {
        if (formData[key] !== '') {
          formObj.append(key, formData[key]);
        }
      }

      $.ajax({
        type: 'POST',
        url: this.props.action,
        data: formObj,
        cache: false,
        contentType: false,
        processData: false,
        xhr: function () {
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener('progress', function (evt) {
            if (evt.lengthComputable) {
              var percentage = Math.round(evt.loaded / evt.total * 100);
              this.setState({ uploadProgress: percentage });
            }
          }.bind(this), false);
          return xhr;
        }.bind(this),
        success: function () {
          // Add git pfile to the list of exiting files
          var mediaFiles = JSON.parse(JSON.stringify(this.state.Data.mediaFiles));
          mediaFiles.push(formData.file.name);

          // Trigger an update event to update all observers (i.e DataTable)
          var event = new CustomEvent('update-datatable');
          window.dispatchEvent(event);

          this.setState({
            mediaFiles: mediaFiles,
            formData: {}, // reset form data after successful file upload
            uploadProgress: -1
          });
          swal('Upload Successful!', '', 'success');
        }.bind(this),
        error: function (err) {
          console.error(err);
          var msg = err.responseJSON ? err.responseJSON.message : 'Upload error!';
          this.setState({
            errorMessage: msg,
            uploadProgress: -1
          });
          swal(msg, '', 'error');
        }.bind(this)
      });
    }

    /**
     * Checks if the inputted file name is valid
     *
     * @param {string} requiredFileName - Required file name
     * @param {string} fileName - Provided file name
     * @return {boolean} - true if fileName starts with requiredFileName, false
     *   otherwise
     */

  }, {
    key: 'isValidFileName',
    value: function isValidFileName(requiredFileName, fileName) {
      if (fileName === null || requiredFileName === null) {
        return false;
      }

      return fileName.indexOf(requiredFileName) === 0;
    }

    /**
     * Validate the form
     *
     * @param {object} formRefs - Object containing references to React form elements
     * @param {object} formData - Object containing form data inputed by user
     * @return {boolean} - true if all required fields are filled, false otherwise
     */

  }, {
    key: 'isValidForm',
    value: function isValidForm(formRefs, formData) {
      var isValidForm = true;

      var requiredFields = {
        pscid: null,
        visitLabel: null,
        file: null
      };

      Object.keys(requiredFields).map(function (field) {
        if (formData[field]) {
          requiredFields[field] = formData[field];
        } else if (formRefs[field]) {
          formRefs[field].props.hasError = true;
          isValidForm = false;
        }
      });
      this.forceUpdate();

      return isValidForm;
    }

    /**
     * Set the form data based on state values of child elements/componenets
     *
     * @param {string} formElement - name of the selected element
     * @param {string} value - selected value for corresponding form element
     */

  }, {
    key: 'setFormData',
    value: function setFormData(formElement, value) {
      // Only display visits and sites available for the current pscid
      var visitLabel = this.state.formData.visitLabel;
      var pscid = this.state.formData.pscid;

      if (formElement === 'pscid' && value !== '') {
        this.state.Data.visits = this.state.Data.sessionData[value].visits;
        this.state.Data.sites = this.state.Data.sessionData[value].sites;
        if (visitLabel) {
          this.state.Data.instruments = this.state.Data.sessionData[value].instruments[visitLabel];
        } else {
          this.state.Data.instruments = this.state.Data.sessionData[value].instruments.all;
        }
      }

      if (formElement === 'visitLabel' && value !== '' && pscid) {
        this.state.Data.instruments = this.state.Data.sessionData[pscid].instruments[value];
      }

      var formData = this.state.formData;
      formData[formElement] = value;

      this.setState({
        formData: formData
      });
    }
  }]);

  return MediaUploadForm;
}(_react.Component);

MediaUploadForm.propTypes = {
  DataURL: _propTypes2.default.string.isRequired,
  action: _propTypes2.default.string.isRequired
};

exports.default = MediaUploadForm;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanN4L0RhdGFUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9qc3gvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2pzeC9GaWx0ZXJhYmxlRGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL2pzeC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanN4L01vZGFsLmpzIiwid2VicGFjazovLy8uL2pzeC9QYWdpbmF0aW9uTGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vanN4L1BhbmVsLmpzIiwid2VicGFjazovLy8uL2pzeC9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly8vLi9qc3gvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9qc3gvVHJpZ2dlcmFibGVNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lZGlhL2pzeC9lZGl0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lZGlhL2pzeC9tZWRpYUluZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVkaWEvanN4L3VwbG9hZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jcmVhdGUtZnJhZ21lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIl0sIm5hbWVzIjpbIkRhdGFUYWJsZSIsInByb3BzIiwic3RhdGUiLCJQYWdlTnVtYmVyIiwiU29ydENvbHVtbiIsIlNvcnRPcmRlciIsIlJvd3NQZXJQYWdlIiwiSGlkZSIsImNoYW5nZVBhZ2UiLCJiaW5kIiwic2V0U29ydENvbHVtbiIsImNoYW5nZVJvd3NQZXJQYWdlIiwiZG93bmxvYWRDU1YiLCJjb3VudEZpbHRlcmVkUm93cyIsImdldFNvcnRlZFJvd3MiLCJoYXNGaWx0ZXJLZXl3b3JkIiwicmVuZGVyQWN0aW9ucyIsImpRdWVyeSIsImZuIiwiRHluYW1pY1RhYmxlIiwiZnJlZXplQ29sdW1uIiwiJCIsImRlZmF1bHRDb2x1bW4iLCJmaW5kIiwiaGlkZSIsIm1vZHVsZVByZWZzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvcmlzIiwiVGVzdE5hbWUiLCJ1bmRlZmluZWQiLCJyb3dzUGVyUGFnZSIsInNldFN0YXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25Tb3J0IiwiaW5kZXgiLCJoZWFkZXJMaXN0IiwiZmllbGRzIiwibWFwIiwiZmllbGQiLCJsYWJlbCIsImRhdGEiLCJwYWdlTm8iLCJjb2xOdW1iZXIiLCJlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY3N2RGF0YSIsImNzdndvcmtlciIsIldvcmtlciIsIkJhc2VVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YVVSTCIsImRhdGFEYXRlIiwibGluayIsImNtZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm1lc3NhZ2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsInR5cGUiLCJocmVmIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInBvc3RNZXNzYWdlIiwiaGVhZGVycyIsImlkZW50aWZpZXJzIiwiUm93TmFtZU1hcCIsInVzZUtleXdvcmQiLCJmaWx0ZXJNYXRjaENvdW50IiwiZmlsdGVyVmFsdWVzQ291bnQiLCJmaWx0ZXIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidGFibGVEYXRhIiwiZmllbGREYXRhIiwia2V5d29yZCIsImkiLCJoZWFkZXJDb3VudCIsImtleXdvcmRNYXRjaCIsImoiLCJuYW1lIiwiaGFzRmlsdGVycyIsImlzU3RyaW5nIiwiU3RyaW5nIiwiaXNOdW1iZXIiLCJpc05hTiIsIk51bWJlciIsInRvTG93ZXJDYXNlIiwicHVzaCIsIlJvd0lkeCIsIlZhbHVlIiwiQ29udGVudCIsInNvcnQiLCJhIiwiYiIsImZpbHRlckRhdGEiLCJleGFjdE1hdGNoIiwicmVzdWx0Iiwic2VhcmNoS2V5Iiwic2VhcmNoU3RyaW5nIiwiaW50RGF0YSIsInBhcnNlSW50Iiwic2VhcmNoQXJyYXkiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJtYXRjaCIsImFjdGlvbnMiLCJhY3Rpb24iLCJrZXkiLCJSb3dOdW1MYWJlbCIsInNob3ciLCJjb2xJbmRleCIsInJvd3MiLCJjdXJSb3ciLCJtYXRjaGVzRm91bmQiLCJmaWx0ZXJlZFJvd3MiLCJjdXJyZW50UGFnZVJvdyIsImZpbHRlcmVkRGF0YSIsImZpbHRlckxlbmd0aCIsImdldEZvcm1hdHRlZENlbGwiLCJyb3ciLCJmb3JFYWNoIiwiayIsInJvd0luZGV4IiwiUm93c1BlclBhZ2VEcm9wZG93biIsImhlYWRlciIsIm1hcmdpblRvcCIsImZvb3RlciIsIm1hcmdpbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJGaWx0ZXIiLCJvbkZpZWxkVXBkYXRlIiwicmVuZGVyRmlsdGVyRmllbGRzIiwiaWQiLCJ1cGRhdGVGaWx0ZXIiLCJyZWR1Y2UiLCJlbGVtZW50Iiwib3B0aW9ucyIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwib25Vc2VySW5wdXQiLCJjb2x1bW5zIiwidGl0bGUiLCJjbGVhckZpbHRlciIsImNvbnNvbGUiLCJ3YXJuIiwiRmlsdGVyYWJsZURhdGFUYWJsZSIsIm51bWJlciIsIkxvYWRlciIsIndpZHRoIiwic2l6ZSIsImhlaWdodCIsIk1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJ0aHJvd1dhcm5pbmciLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJvblN1Ym1pdCIsImhlYWRlclN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJmb250U2l6ZSIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJnbHlwaFN0eWxlIiwibWFyZ2luTGVmdCIsImN1cnNvciIsImJvZHlTdHlsZSIsIm1vZGFsQ29udGFpbmVyIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJwYWRkaW5nVG9wIiwibGVmdCIsInRvcCIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwidmlzaWJpbGl0eSIsIm1vZGFsQ29udGVudCIsIm9wYWNpdHkiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwicmVuZGVyQ2hpbGRyZW4iLCJmb290ZXJTdHlsZSIsImJvcmRlclRvcCIsInN1Ym1pdFN0eWxlIiwibWFyZ2luUmlnaHQiLCJzdWJtaXRCdXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJib29sIiwiUGFnaW5hdGlvbkxpbmtzIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZVBhZ2UiLCJwYWdlTGlua3MiLCJjbGFzc0xpc3QiLCJsYXN0UGFnZSIsIk1hdGgiLCJjZWlsIiwiVG90YWwiLCJzdGFydFBhZ2UiLCJtYXgiLCJBY3RpdmUiLCJsYXN0U2hvd25QYWdlIiwibWluIiwidG9TdHJpbmciLCJSUGFnaW5hdGlvbkxpbmtzIiwiY3JlYXRlRmFjdG9yeSIsIlBhbmVsIiwiY29sbGFwc2VkIiwiaW5pdENvbGxhcHNlZCIsInBhbmVsQ2xhc3MiLCJ0b2dnbGVDb2xsYXBzZWQiLCJnbHlwaENsYXNzIiwicGFuZWxIZWFkaW5nIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzc1N0eWxlIiwibGFiZWxTdHlsZSIsImNvbG9yIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJUYWJzIiwiaGFzaCIsImxvY2F0aW9uIiwiYWN0aXZlVGFiIiwidXBkYXRlVVJMIiwic3Vic3RyIiwiZGVmYXVsdFRhYiIsInRhYnMiLCJoYW5kbGVDbGljayIsImdldFRhYnMiLCJnZXRUYWJQYW5lcyIsInRhYklkIiwib25UYWJDaGFuZ2UiLCJzY3JvbGxEaXN0YW5jZSIsInNjcm9sbFRvcCIsInRhYiIsInRhYkNsYXNzIiwidGFiSUQiLCJ0YWJQYW5lcyIsIkNoaWxkcmVuIiwiY2hpbGQiLCJ0YWJTdHlsZSIsIm1hcmdpbkJvdHRvbSIsIlZlcnRpY2FsVGFicyIsIlRhYlBhbmUiLCJUYWJJZCIsIlRpdGxlIiwiVHJpZ2dlcmFibGVNb2RhbCIsIm9wZW4iLCJjbG9zZSIsIkZ1bmN0aW9uIiwidHJpZ2dlciIsIk1lZGlhRWRpdEZvcm0iLCJEYXRhIiwiZm9ybURhdGEiLCJ1cGxvYWRSZXN1bHQiLCJpc0xvYWRlZCIsImxvYWRlZERhdGEiLCJoYW5kbGVTdWJtaXQiLCJzZXRGb3JtRGF0YSIsInNlbGYiLCJhamF4IiwiRGF0YVVSTCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImlkTWVkaWFGaWxlIiwibWVkaWFEYXRhIiwiZm9yU2l0ZSIsImRhdGVUYWtlbiIsImNvbW1lbnRzIiwiaGlkZUZpbGUiLCJlcnJvciIsImVycm9yQ29kZSIsImVycm9yTXNnIiwiY2FuZGlkYXRlcyIsInBzY2lkIiwidmlzaXRzIiwidmlzaXRMYWJlbCIsInNpdGVzIiwiaW5zdHJ1bWVudHMiLCJpbnN0cnVtZW50IiwiZmlsZU5hbWUiLCJteUZvcm1EYXRhIiwicmVtb3ZlQ2xhc3MiLCJ1cmwiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInVwbG9hZCIsImxlbmd0aENvbXB1dGFibGUiLCJwcm9ncmVzc2JhciIsInByb2dyZXNzbGFiZWwiLCJwZXJjZW50Iiwicm91bmQiLCJsb2FkZWQiLCJ0b3RhbCIsImh0bWwiLCJhdHRyIiwiYWRkQ2xhc3MiLCJmZXRjaERhdGEiLCJlcnIiLCJmb3JtRWxlbWVudCIsIk1lZGlhSW5kZXgiLCJmb3JtYXRDb2x1bW4iLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwicmVzcCIsImpzb24iLCJjYXRjaCIsImNvbHVtbiIsImNlbGwiLCJzdHlsZSIsImhhc1Blcm1pc3Npb24iLCJkb3dubG9hZFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlc3Npb25VUkwiLCJlZGl0QnV0dG9uIiwiZmllbGRPcHRpb25zIiwibGFuZ3VhZ2VzIiwiZmlsZVR5cGVzIiwiaGlkZGVuIiwidXBsb2FkVGFiIiwibWF4VXBsb2FkU2l6ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwidXNlckhhc1Blcm1pc3Npb24iLCJnZXRFbGVtZW50QnlJZCIsIk1lZGlhVXBsb2FkRm9ybSIsImVycm9yTWVzc2FnZSIsInVwbG9hZFByb2dyZXNzIiwiZ2V0VmFsaWRGaWxlTmFtZSIsImlzVmFsaWRGaWxlTmFtZSIsImlzVmFsaWRGb3JtIiwidXBsb2FkRmlsZSIsImhlbHBUZXh0IiwibGFuZ3VhZ2UiLCJmaWxlIiwiZm9ybVJlZnMiLCJyZWZzIiwibWVkaWFGaWxlcyIsInJlcGxhY2UiLCJyZXF1aXJlZEZpbGVOYW1lIiwic3dhbCIsImlzRHVwbGljYXRlIiwiaXNDb25maXJtIiwiZm9ybU9iaiIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicGVyY2VudGFnZSIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwibXNnIiwicmVzcG9uc2VKU09OIiwicmVxdWlyZWRGaWVsZHMiLCJoYXNFcnJvciIsImZvcmNlVXBkYXRlIiwic2Vzc2lvbkRhdGEiLCJhbGwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVhBOzs7Ozs7OztBQWFBOzs7O0lBSU1BLFM7OztBQUNK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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsYUFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsd0ZBQXdGLFNBQU07QUFDekk7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsdUZBQTJCO0FBQ3RELENBQUMsTUFBTSxFQUlOOzs7Ozs7Ozs7Ozs7O0FDM0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsNENBQU87O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyx3RUFBd0I7QUFDcEQsZ0JBQWdCLG1CQUFPLENBQUMsZ0VBQW9CO0FBQzVDLGNBQWMsbUJBQU8sQ0FBQyw0REFBa0I7O0FBRXhDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlDQUF5QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFlBQVk7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLElBQXFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdB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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxh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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQSx3RUFBd0U7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0U7O0FBRXRFO0FBQ0EsK0NBQStDO0FBQy9DLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLHlCQUF5Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRyxhQUFhOzs7QUFHaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsVUFBVSxpQkFBaUIsZUFBZSwwREFBMEQ7QUFDcEcsVUFBVSxnQkFBZ0IsZUFBZSx5REFBeUQ7QUFDbEc7QUFDQTtBQUNBLGtDQUFrQyx3Q0FBd0M7QUFDMUUsVUFBVSxpQkFBaUI7QUFDM0IsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4Qzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQsS0FBSztBQUNoRSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHNEQUFzRCxNQUFNLFFBQVEsS0FBSztBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnSEFBZ0g7O0FBRWhIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQixzQkFBc0I7O0FBRXRCLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSCw4QkFBOEI7O0FBRTlCLHFCQUFxQjs7QUFFckIsc0JBQXNCOztBQUV0Qix3QkFBd0I7O0FBRXhCLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsY0FBYzs7QUFFZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFOztBQUU1RTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYixXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSw0RUFBNEU7O0FBRTVFLHNCQUFzQiwrQkFBK0I7QUFDckQsa0NBQWtDOztBQUVsQztBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQixPQUFPO0FBQ1A7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxTQUFTO0FBQ1Q7QUFDQSxTQUFTOztBQUVULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87OztBQUdQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxHQUFHO0FBQ0g7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0JBQW9COztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUUsYUFB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QkFBeUIsVUFBVSxzREFBc0QsY0FBYyxrQkFBa0IsZUFBZSxxQkFBcUIseUJBQXlCLFVBQVUsa0VBQWtFLFlBQVksWUFBWSxlQUFlLGdDQUFnQyx3QkFBd0IsbUVBQW1FLFlBQVksV0FBVyxlQUFlLGlDQUFpQyx5QkFBeUIscUJBQXFCLG1CQUFtQixrQkFBa0IsVUFBVSxnQkFBZ0Isd0JBQXdCLHFCQUFxQixrQkFBa0IsMkNBQTJDLFVBQVUsV0FBVyxrQkFBa0IsbUJBQW1CLFdBQVcsZ0JBQWdCLGtCQUFrQixXQUFXLHVEQUF1RCxjQUFjLHNEQUFzRCxlQUFlLG9FQUFvRSxtQkFBbUIsMEZBQTBGLG1CQUFtQix3RkFBd0YsbUJBQW1CLHlDQUF5QyxZQUFZLFlBQVksY0FBYyxtQkFBbUIsV0FBVyxlQUFlLHdDQUF3QyxZQUFZLGlDQUFpQyx5QkFBeUIsOEJBQThCLHVCQUF1QixlQUFlLFlBQVksMkNBQTJDLG1DQUFtQyw4QkFBOEIsdUJBQXVCLGVBQWUsd0JBQXdCLFdBQVcsT0FBTyxvREFBb0Qsc0RBQXNELDhDQUE4QyxxREFBcUQsdURBQXVELCtDQUErQywrREFBK0QsbUVBQW1FLDJEQUEyRCwwQkFBMEIsK0NBQStDLHVDQUF1Qyx3Q0FBd0MsaURBQWlELHlDQUF5Qyx3Q0FBd0MsR0FBRyw0QkFBNEIsb0JBQW9CLEtBQUssaUNBQWlDLDBCQUEwQixnQ0FBZ0MsR0FBRyw0QkFBNEIsb0JBQW9CLEtBQUssaUNBQWlDLDBCQUEwQixhQUFhLGlFQUFpRSw0QkFBNEIsb0ZBQW9GLGFBQWEsa0ZBQWtGLDRCQUE0QixHIiwiZmlsZSI6Ii4vbW9kdWxlcy9tZWRpYS9qcy9tZWRpYUluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tb2R1bGVzL21lZGlhL2pzeC9tZWRpYUluZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgUmVhY3QgY29tcG9uZW50IGZvciBEYXRhIFRhYmxlXG4gKlxuICogQGF1dGhvciBMb3JpcyBUZWFtXG4gKiBAdmVyc2lvbiAxLjAuMFxuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUGFnaW5hdGlvbkxpbmtzIGZyb20gJ2pzeC9QYWdpbmF0aW9uTGlua3MnO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gJ3JlYWN0LWFkZG9ucy1jcmVhdGUtZnJhZ21lbnQnO1xuXG4vKipcbiAqIERhdGEgVGFibGUgY29tcG9uZW50XG4gKiBEaXNwbGF5cyBhIHNldCBvZiBkYXRhIHRoYXQgaXMgcmVjZWl2ZXMgdmlhIHByb3BzLlxuICovXG5jbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBQYWdlTnVtYmVyOiAxLFxuICAgICAgU29ydENvbHVtbjogLTEsXG4gICAgICBTb3J0T3JkZXI6ICdBU0MnLFxuICAgICAgUm93c1BlclBhZ2U6IDIwLFxuICAgICAgSGlkZTogdGhpcy5wcm9wcy5IaWRlLFxuICAgIH07XG5cbiAgICB0aGlzLmNoYW5nZVBhZ2UgPSB0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFNvcnRDb2x1bW4gPSB0aGlzLnNldFNvcnRDb2x1bW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVJvd3NQZXJQYWdlID0gdGhpcy5jaGFuZ2VSb3dzUGVyUGFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG93bmxvYWRDU1YgPSB0aGlzLmRvd25sb2FkQ1NWLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb3VudEZpbHRlcmVkUm93cyA9IHRoaXMuY291bnRGaWx0ZXJlZFJvd3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFNvcnRlZFJvd3MgPSB0aGlzLmdldFNvcnRlZFJvd3MuYmluZCh0aGlzKTsvL1xuICAgIHRoaXMuaGFzRmlsdGVyS2V5d29yZCA9IHRoaXMuaGFzRmlsdGVyS2V5d29yZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyQWN0aW9ucyA9IHRoaXMucmVuZGVyQWN0aW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGpRdWVyeS5mbi5EeW5hbWljVGFibGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZyZWV6ZUNvbHVtbikge1xuICAgICAgICAkKCcjZHluYW1pY3RhYmxlJykuRHluYW1pY1RhYmxlKHtcbiAgICAgICAgICBmcmVlemVDb2x1bW46IHRoaXMucHJvcHMuZnJlZXplQ29sdW1uLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNkeW5hbWljdGFibGUnKS5EeW5hbWljVGFibGUoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLkhpZGUuZGVmYXVsdENvbHVtbikge1xuICAgICAgICAkKCcjZHluYW1pY3RhYmxlJykuZmluZCgndGJvZHkgdGQ6ZXEoMCknKS5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgbW9kdWxlIHByZWZlcmVuY2VzXG4gICAgbGV0IG1vZHVsZVByZWZzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kdWxlUHJlZnMnKSk7XG5cbiAgICAvLyBJbml0IG1vZHVsZVByZWZzIG9iamVjdFxuICAgIGlmIChtb2R1bGVQcmVmcyA9PT0gbnVsbCkge1xuICAgICAgbW9kdWxlUHJlZnMgPSB7fTtcbiAgICB9XG5cbiAgICAvLyBJbml0IG1vZHVsZVByZWZzIGZvciBjdXJyZW50IG1vZHVsZVxuICAgIGlmIChtb2R1bGVQcmVmc1tsb3Jpcy5UZXN0TmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgbW9kdWxlUHJlZnNbbG9yaXMuVGVzdE5hbWVdID0ge307XG4gICAgICBtb2R1bGVQcmVmc1tsb3Jpcy5UZXN0TmFtZV0ucm93c1BlclBhZ2UgPSB0aGlzLnN0YXRlLlJvd3NQZXJQYWdlO1xuICAgIH1cblxuICAgIC8vIFNldCByb3dzIHBlciBwYWdlXG4gICAgbGV0IHJvd3NQZXJQYWdlID0gbW9kdWxlUHJlZnNbbG9yaXMuVGVzdE5hbWVdLnJvd3NQZXJQYWdlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgUm93c1BlclBhZ2U6IHJvd3NQZXJQYWdlLFxuICAgIH0pO1xuXG4gICAgLy8gTWFrZSBwcmVmcyBhY2Nlc2libGUgd2l0aGluIGNvbXBvbmVudFxuICAgIHRoaXMubW9kdWxlUHJlZnMgPSBtb2R1bGVQcmVmcztcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChqUXVlcnkuZm4uRHluYW1pY1RhYmxlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5mcmVlemVDb2x1bW4pIHtcbiAgICAgICAgJCgnI2R5bmFtaWN0YWJsZScpLkR5bmFtaWNUYWJsZSh7XG4gICAgICAgICAgZnJlZXplQ29sdW1uOiB0aGlzLnByb3BzLmZyZWV6ZUNvbHVtbixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjZHluYW1pY3RhYmxlJykuRHluYW1pY1RhYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uU29ydCAmJlxuICAgICAgKHRoaXMuc3RhdGUuU29ydENvbHVtbiAhPT0gcHJldlN0YXRlLlNvcnRDb2x1bW4gfHxcbiAgICAgICAgdGhpcy5zdGF0ZS5Tb3J0T3JkZXIgIT09IHByZXZTdGF0ZS5Tb3J0T3JkZXIpXG4gICAgKSB7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmdldFNvcnRlZFJvd3MoKTtcbiAgICAgIGNvbnN0IGhlYWRlckxpc3QgPSB0aGlzLnByb3BzLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCk7XG4gICAgICB0aGlzLnByb3BzLm9uU29ydChpbmRleCwgdGhpcy5wcm9wcy5kYXRhLCBoZWFkZXJMaXN0KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VQYWdlKHBhZ2VObykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgUGFnZU51bWJlcjogcGFnZU5vLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U29ydENvbHVtbihjb2xOdW1iZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuU29ydENvbHVtbiA9PT0gY29sTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIFNvcnRPcmRlcjogdGhpcy5zdGF0ZS5Tb3J0T3JkZXIgPT09ICdBU0MnID8gJ0RFU0MnIDogJ0FTQycsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgU29ydENvbHVtbjogY29sTnVtYmVyLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlUm93c1BlclBhZ2UodmFsKSB7XG4gICAgbGV0IHJvd3NQZXJQYWdlID0gdmFsLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgbW9kdWxlUHJlZnMgPSB0aGlzLm1vZHVsZVByZWZzO1xuXG4gICAgLy8gU2F2ZSBjdXJyZW50IHNlbGVjdGlvblxuICAgIG1vZHVsZVByZWZzW2xvcmlzLlRlc3ROYW1lXS5yb3dzUGVyUGFnZSA9IHJvd3NQZXJQYWdlO1xuXG4gICAgLy8gVXBkYXRlIGxvY2Fsc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2R1bGVQcmVmcycsIEpTT04uc3RyaW5naWZ5KG1vZHVsZVByZWZzKSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFJvd3NQZXJQYWdlOiByb3dzUGVyUGFnZSxcbiAgICAgIFBhZ2VOdW1iZXI6IDEsXG4gICAgfSk7XG4gIH1cblxuICBkb3dubG9hZENTVihjc3ZEYXRhKSB7XG4gICAgbGV0IGNzdndvcmtlciA9IG5ldyBXb3JrZXIobG9yaXMuQmFzZVVSTCArICcvanMvd29ya2Vycy9zYXZlY3N2LmpzJyk7XG5cbiAgICBjc3Z3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBkYXRhVVJMO1xuICAgICAgbGV0IGRhdGFEYXRlO1xuICAgICAgbGV0IGxpbms7XG4gICAgICBpZiAoZS5kYXRhLmNtZCA9PT0gJ1NhdmVDU1YnKSB7XG4gICAgICAgIGRhdGFEYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICBkYXRhVVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rLmRvd25sb2FkID0gJ2RhdGEtJyArIGRhdGFEYXRlICsgJy5jc3YnO1xuICAgICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3YnO1xuICAgICAgICBsaW5rLmhyZWYgPSBkYXRhVVJMO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAkKGxpbmspWzBdLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVyTGlzdCA9IHRoaXMucHJvcHMuZmllbGRzLm1hcCgoZmllbGQpID0+IGZpZWxkLmxhYmVsKTtcbiAgICBjc3Z3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgY21kOiAnU2F2ZUZpbGUnLFxuICAgICAgZGF0YTogY3N2RGF0YSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlckxpc3QsXG4gICAgICBpZGVudGlmaWVyczogdGhpcy5wcm9wcy5Sb3dOYW1lTWFwLFxuICAgIH0pO1xuICB9XG5cbiAgY291bnRGaWx0ZXJlZFJvd3MoKSB7XG4gICAgbGV0IHVzZUtleXdvcmQgPSBmYWxzZTtcbiAgICBsZXQgZmlsdGVyTWF0Y2hDb3VudCA9IDA7XG4gICAgbGV0IGZpbHRlclZhbHVlc0NvdW50ID0gKHRoaXMucHJvcHMuZmlsdGVyID9cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5maWx0ZXIpLmxlbmd0aCA6XG4gICAgICAgIDBcbiAgICApO1xuICAgIGxldCB0YWJsZURhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgbGV0IGZpZWxkRGF0YSA9IHRoaXMucHJvcHMuZmllbGRzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyLmtleXdvcmQpIHtcbiAgICAgIHVzZUtleXdvcmQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh1c2VLZXl3b3JkKSB7XG4gICAgICBmaWx0ZXJWYWx1ZXNDb3VudCAtPSAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaGVhZGVyQ291bnQgPSAwO1xuICAgICAgbGV0IGtleXdvcmRNYXRjaCA9IDA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpZWxkRGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgZGF0YSA9IHRhYmxlRGF0YVtpXSA/IHRhYmxlRGF0YVtpXVtqXSA6IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcktleXdvcmQoKGZpZWxkRGF0YVtqXS5maWx0ZXIgfHwge30pLm5hbWUsIGRhdGEpKSB7XG4gICAgICAgICAgaGVhZGVyQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlS2V5d29yZCkge1xuICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcktleXdvcmQoJ2tleXdvcmQnLCBkYXRhKSkge1xuICAgICAgICAgICAga2V5d29yZE1hdGNoKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWFkZXJDb3VudCA9PT0gZmlsdGVyVmFsdWVzQ291bnQgJiZcbiAgICAgICAgKCh1c2VLZXl3b3JkID09PSB0cnVlICYmIGtleXdvcmRNYXRjaCA+IDApIHx8XG4gICAgICAgICAgKHVzZUtleXdvcmQgPT09IGZhbHNlICYmIGtleXdvcmRNYXRjaCA9PT0gMCkpKSB7XG4gICAgICAgIGZpbHRlck1hdGNoQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaGFzRmlsdGVycyA9IChmaWx0ZXJWYWx1ZXNDb3VudCAhPT0gMCk7XG4gICAgaWYgKGZpbHRlck1hdGNoQ291bnQgPT09IDAgJiYgaGFzRmlsdGVycykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChmaWx0ZXJNYXRjaENvdW50ID09PSAwKSA/IHRhYmxlRGF0YS5sZW5ndGggOiBmaWx0ZXJNYXRjaENvdW50O1xuICB9XG5cbiAgZ2V0U29ydGVkUm93cygpIHtcbiAgICBjb25zdCBpbmRleCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCB2YWwgPSB0aGlzLnByb3BzLmRhdGFbaV1bdGhpcy5zdGF0ZS5Tb3J0Q29sdW1uXSB8fCB1bmRlZmluZWQ7XG4gICAgICAvLyBJZiBTb3J0Q29sdW1uIGlzIGVxdWFsIHRvIGRlZmF1bHQgTm8uIGNvbHVtbiwgc2V0IHZhbHVlIHRvIGJlXG4gICAgICAvLyBpbmRleCArIDFcbiAgICAgIGlmICh0aGlzLnN0YXRlLlNvcnRDb2x1bW4gPT09IC0xKSB7XG4gICAgICAgIHZhbCA9IGkgKyAxO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNTdHJpbmcgPSAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nKTtcbiAgICAgIGNvbnN0IGlzTnVtYmVyID0gIWlzTmFOKHZhbCkgJiYgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCc7XG5cbiAgICAgIGlmICh2YWwgPT09ICcuJykge1xuICAgICAgICAvLyBoYWNrIHRvIGhhbmRsZSBub24tZXhpc3RlbnQgaXRlbXMgaW4gRFFUXG4gICAgICAgIHZhbCA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKSB7XG4gICAgICAgIC8vIHBlcmZvcm0gdHlwZSBjb252ZXJzaW9uIChmcm9tIHN0cmluZyB0byBpbnQvZmxvYXQpXG4gICAgICAgIHZhbCA9IE51bWJlcih2YWwpO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cmluZykge1xuICAgICAgICAvLyBpZiBzdHJpbmcgd2l0aCB0ZXh0IGNvbnZlcnQgdG8gbG93ZXJjYXNlXG4gICAgICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5Sb3dOYW1lTWFwKSB7XG4gICAgICAgIGluZGV4LnB1c2goe1Jvd0lkeDogaSwgVmFsdWU6IHZhbCwgQ29udGVudDogdGhpcy5wcm9wcy5Sb3dOYW1lTWFwW2ldfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleC5wdXNoKHtSb3dJZHg6IGksIFZhbHVlOiB2YWwsIENvbnRlbnQ6IGkgKyAxfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXguc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5Tb3J0T3JkZXIgPT09ICdBU0MnKSB7XG4gICAgICAgIGlmIChhLlZhbHVlID09PSBiLlZhbHVlKSB7XG4gICAgICAgICAgLy8gSWYgYWxsIHZhbHVlcyBhcmUgZXF1YWwsIHNvcnQgYnkgcm93bnVtXG4gICAgICAgICAgaWYgKGEuUm93SWR4IDwgYi5Sb3dJZHgpIHJldHVybiAtMTtcbiAgICAgICAgICBpZiAoYS5Sb3dJZHggPiBiLlJvd0lkeCkgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgbnVsbCB2YWx1ZXNcbiAgICAgICAgaWYgKGEuVmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGEuVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChiLlZhbHVlID09PSBudWxsIHx8IHR5cGVvZiBiLlZhbHVlID09PSAndW5kZWZpbmVkJykgcmV0dXJuIDE7XG5cbiAgICAgICAgLy8gU29ydCBieSB2YWx1ZVxuICAgICAgICBpZiAoYS5WYWx1ZSA8IGIuVmFsdWUpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGEuVmFsdWUgPiBiLlZhbHVlKSByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhLlZhbHVlID09PSBiLlZhbHVlKSB7XG4gICAgICAgICAgLy8gSWYgYWxsIHZhbHVlcyBhcmUgZXF1YWwsIHNvcnQgYnkgcm93bnVtXG4gICAgICAgICAgaWYgKGEuUm93SWR4IDwgYi5Sb3dJZHgpIHJldHVybiAxO1xuICAgICAgICAgIGlmIChhLlJvd0lkeCA+IGIuUm93SWR4KSByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgbnVsbCB2YWx1ZXNcbiAgICAgICAgaWYgKGEuVmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGEuVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGIuVmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIGIuVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gLTE7XG5cbiAgICAgICAgLy8gU29ydCBieSB2YWx1ZVxuICAgICAgICBpZiAoYS5WYWx1ZSA8IGIuVmFsdWUpIHJldHVybiAxO1xuICAgICAgICBpZiAoYS5WYWx1ZSA+IGIuVmFsdWUpIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIC8vIFRoZXkncmUgZXF1YWwuLlxuICAgICAgcmV0dXJuIDA7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIHRoZSBmaWx0ZXIga2V5d29yZCBpbiB0aGUgY29sdW1uIGNlbGxcbiAgICpcbiAgICogTm90ZTogU2VhcmNoIGlzIGNhc2UtaW5zZW5zaXRpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIGZpZWxkIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgc2VhcmNoIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlLCBpZiBmaWx0ZXIgdmFsdWUgaXMgZm91bmQgdG8gYmUgYSBzdWJzdHJpbmdcbiAgICogb2Ygb25lIG9mIHRoZSBjb2x1bW4gdmFsdWVzLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBoYXNGaWx0ZXJLZXl3b3JkKG5hbWUsIGRhdGEpIHtcbiAgICBsZXQgZmlsdGVyRGF0YSA9IG51bGw7XG4gICAgbGV0IGV4YWN0TWF0Y2ggPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgbGV0IHNlYXJjaEtleSA9IG51bGw7XG4gICAgbGV0IHNlYXJjaFN0cmluZyA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXJbbmFtZV0pIHtcbiAgICAgIGZpbHRlckRhdGEgPSB0aGlzLnByb3BzLmZpbHRlcltuYW1lXS52YWx1ZTtcbiAgICAgIGV4YWN0TWF0Y2ggPSB0aGlzLnByb3BzLmZpbHRlcltuYW1lXS5leGFjdE1hdGNoO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBudWxsIGlucHV0c1xuICAgIGlmIChmaWx0ZXJEYXRhID09PSBudWxsIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgbnVtZXJpYyBpbnB1dHNcbiAgICBpZiAodHlwZW9mIGZpbHRlckRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXQgaW50RGF0YSA9IE51bWJlci5wYXJzZUludChkYXRhLCAxMCk7XG4gICAgICByZXN1bHQgPSAoZmlsdGVyRGF0YSA9PT0gaW50RGF0YSk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHN0cmluZyBpbnB1dHNcbiAgICBpZiAodHlwZW9mIGZpbHRlckRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWFyY2hLZXkgPSBmaWx0ZXJEYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgICBzd2l0Y2ggKHR5cGVvZiBkYXRhKSB7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgLy8gSGFuZGxlcyB0aGUgY2FzZSB3aGVyZSB0aGUgZGF0YSBpcyBhbiBhcnJheSAodHlwZW9mICdvYmplY3QnKVxuICAgICAgICAgIC8vIGFuZCB5b3Ugd2FudCB0byBzZWFyY2ggdGhyb3VnaCBpdCBmb3JcbiAgICAgICAgICAvLyB0aGUgc3RyaW5nIHlvdSBhcmUgZmlsdGVyaW5nIGJ5XG4gICAgICAgICAgbGV0IHNlYXJjaEFycmF5ID0gZGF0YS5tYXAoKGUpID0+IGUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgaWYgKGV4YWN0TWF0Y2gpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHNlYXJjaEFycmF5LmluY2x1ZGVzKHNlYXJjaEtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IChzZWFyY2hBcnJheS5maW5kKChlKSA9PiAoZS5pbmRleE9mKHNlYXJjaEtleSkgPiAtMSkpKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZyA9IGRhdGEudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChleGFjdE1hdGNoKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IChzZWFyY2hTdHJpbmcgPT09IHNlYXJjaEtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQgPSAoc2VhcmNoU3RyaW5nLmluZGV4T2Yoc2VhcmNoS2V5KSA+IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYXJyYXkgaW5wdXRzIGZvciBtdWx0aXNlbGVjdHNcbiAgICBpZiAodHlwZW9mIGZpbHRlckRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzZWFyY2hLZXkgPSBmaWx0ZXJEYXRhW2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlYXJjaFN0cmluZyA9IGRhdGEudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBtYXRjaCA9IChzZWFyY2hTdHJpbmcuaW5kZXhPZihzZWFyY2hLZXkpID4gLTEpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJlbmRlckFjdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aW9ucy5tYXAoKGFjdGlvbiwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENUQVxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBsYWJlbD17YWN0aW9uLmxhYmVsfVxuICAgICAgICAgICAgb25Vc2VySW5wdXQ9e2FjdGlvbi5hY3Rpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhID09PSBudWxsIHx8IHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvIG5vLXJlc3VsdC1mb3VuZC1wYW5lbCc+XG4gICAgICAgICAgPHN0cm9uZz5ObyByZXN1bHQgZm91bmQuPC9zdHJvbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgbGV0IHJvd3NQZXJQYWdlID0gdGhpcy5zdGF0ZS5Sb3dzUGVyUGFnZTtcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuc3RhdGUuSGlkZS5kZWZhdWx0Q29sdW1uID09PSB0cnVlID8gW10gOiBbXG4gICAgICA8dGgga2V5PSd0aF9jb2xfMCcgb25DbGljaz17dGhpcy5zZXRTb3J0Q29sdW1uKC0xKS5iaW5kKHRoaXMpfT5cbiAgICAgICAge3RoaXMucHJvcHMuUm93TnVtTGFiZWx9XG4gICAgICA8L3RoPixcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmZpZWxkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzW2ldLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgbGV0IGNvbEluZGV4ID0gaSArIDE7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkc1tpXS5mcmVlemVDb2x1bW4gPT09IHRydWUpIHtcbiAgICAgICAgICBoZWFkZXJzLnB1c2goXG4gICAgICAgICAgICA8dGgga2V5PXsndGhfY29sXycgKyBjb2xJbmRleH0gaWQ9e3RoaXMucHJvcHMuZnJlZXplQ29sdW1ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0U29ydENvbHVtbihpKS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmllbGRzW2ldLmxhYmVsfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhlYWRlcnMucHVzaChcbiAgICAgICAgICAgIDx0aCBrZXk9eyd0aF9jb2xfJyArIGNvbEluZGV4fSBvbkNsaWNrPXt0aGlzLnNldFNvcnRDb2x1bW4oaSkuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZpZWxkc1tpXS5sYWJlbH1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCBjdXJSb3cgPSBbXTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmdldFNvcnRlZFJvd3MoKTtcbiAgICBsZXQgbWF0Y2hlc0ZvdW5kID0gMDsgLy8gS2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgcm93cyB3aGVyZSBkaXNwbGF5ZWQgc28gZmFyIGFjcm9zcyBhbGwgcGFnZXNcbiAgICBsZXQgZmlsdGVyZWRSb3dzID0gdGhpcy5jb3VudEZpbHRlcmVkUm93cygpO1xuICAgIGxldCBjdXJyZW50UGFnZVJvdyA9IChyb3dzUGVyUGFnZSAqICh0aGlzLnN0YXRlLlBhZ2VOdW1iZXIgLSAxKSk7XG4gICAgbGV0IGZpbHRlcmVkRGF0YSA9IFtdO1xuICAgIGxldCB1c2VLZXl3b3JkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIua2V5d29yZCkge1xuICAgICAgdXNlS2V5d29yZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUHVzaCByb3dzIHRvIGRhdGEgdGFibGVcbiAgICBmb3IgKGxldCBpID0gMDtcbiAgICAgICAgIChpIDwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkgJiYgKHJvd3MubGVuZ3RoIDwgcm93c1BlclBhZ2UpO1xuICAgICAgICAgaSsrXG4gICAgKSB7XG4gICAgICBjdXJSb3cgPSBbXTtcblxuICAgICAgLy8gQ291bnRzIGZpbHRlciBtYXRjaGVzXG4gICAgICBsZXQgZmlsdGVyTWF0Y2hDb3VudCA9IDA7XG4gICAgICBsZXQga2V5d29yZE1hdGNoID0gMDtcbiAgICAgIGxldCBmaWx0ZXJMZW5ndGggPSAwO1xuXG4gICAgICAvLyBJdGVyYXRlcyB0aHJvdWdoIGhlYWRlcnMgdG8gcG9wdWxhdGUgcm93IGNvbHVtbnNcbiAgICAgIC8vIHdpdGggY29ycmVzcG9uZGluZyBkYXRhXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucHJvcHMuZmllbGRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGxldCBkYXRhID0gJ1Vua25vd24nO1xuXG4gICAgICAgIC8vIFNldCBjb2x1bW4gZGF0YVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhW2luZGV4W2ldLlJvd0lkeF0pIHtcbiAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5kYXRhW2luZGV4W2ldLlJvd0lkeF1bal07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWVsZHNbal0uZmlsdGVyKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyS2V5d29yZCh0aGlzLnByb3BzLmZpZWxkc1tqXS5maWx0ZXIubmFtZSwgZGF0YSkpIHtcbiAgICAgICAgICAgIGZpbHRlck1hdGNoQ291bnQrKztcbiAgICAgICAgICAgIGZpbHRlcmVkRGF0YS5wdXNoKHRoaXMucHJvcHMuZGF0YVtpbmRleFtpXS5Sb3dJZHhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlS2V5d29yZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGZpbHRlckxlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZmlsdGVyKS5sZW5ndGggLSAxO1xuICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcktleXdvcmQoJ2tleXdvcmQnLCBkYXRhKSkge1xuICAgICAgICAgICAga2V5d29yZE1hdGNoKys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlckxlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZmlsdGVyKS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5ID0gJ3RkX2NvbF8nICsgajtcblxuICAgICAgICAvLyBHZXQgY3VzdG9tIGNlbGwgZm9ybWF0dGluZyBpZiBhdmFpbGFibGVcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ2V0Rm9ybWF0dGVkQ2VsbCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkc1tqXS5zaG93ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGF0YSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBtYXBwaW5nIGJldHdlZW4gcm93SGVhZGVycyBhbmQgcm93RGF0YSBpbiBhIHJvdyBPYmplY3RcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWVsZHMuZm9yRWFjaCgoZmllbGQsIGspID0+IHtcbiAgICAgICAgICAgICAgcm93W2ZpZWxkLmxhYmVsXSA9IHRoaXMucHJvcHMuZGF0YVtpbmRleFtpXS5Sb3dJZHhdW2tdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5nZXRGb3JtYXR0ZWRDZWxsKFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpZWxkc1tqXS5sYWJlbCxcbiAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gTm90ZTogQ2FuJ3QgY3VycmVudGx5IHBhc3MgYSBrZXksIG5lZWQgdG8gdXBkYXRlIGNvbHVtbkZvcm1hdHRlclxuICAgICAgICAgICAgLy8gdG8gbm90IHJldHVybiBhIDx0ZD4gbm9kZS4gVXNpbmcgY3JlYXRlRnJhZ21lbnQgaW5zdGVhZC5cbiAgICAgICAgICAgIGN1clJvdy5wdXNoKGNyZWF0ZUZyYWdtZW50KHtkYXRhfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJSb3cucHVzaCg8dGQga2V5PXtrZXl9PntkYXRhfTwvdGQ+KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGRpc3BsYXkgYSByb3cgaWYgYWxsIGZpbHRlciB2YWx1ZXMgaGF2ZSBiZWVuIG1hdGNoZWRcbiAgICAgIGlmICgoZmlsdGVyTGVuZ3RoID09PSBmaWx0ZXJNYXRjaENvdW50KSAmJlxuICAgICAgICAoKHVzZUtleXdvcmQgPT09IHRydWUgJiYga2V5d29yZE1hdGNoID4gMCkgfHxcbiAgICAgICAgICAodXNlS2V5d29yZCA9PT0gZmFsc2UgJiYga2V5d29yZE1hdGNoID09PSAwKSkpIHtcbiAgICAgICAgbWF0Y2hlc0ZvdW5kKys7XG4gICAgICAgIGlmIChtYXRjaGVzRm91bmQgPiBjdXJyZW50UGFnZVJvdykge1xuICAgICAgICAgIGNvbnN0IHJvd0luZGV4ID0gaW5kZXhbaV0uQ29udGVudDtcbiAgICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICA8dHIga2V5PXsndHJfJyArIHJvd0luZGV4fSBjb2xTcGFuPXtoZWFkZXJzLmxlbmd0aH0+XG4gICAgICAgICAgICAgIDx0ZD57cm93SW5kZXh9PC90ZD5cbiAgICAgICAgICAgICAge2N1clJvd31cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBSb3dzUGVyUGFnZURyb3Bkb3duID0gKFxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1zbSBwZXJQYWdlXCJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlUm93c1BlclBhZ2V9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLlJvd3NQZXJQYWdlfVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uPjIwPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24+NTA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj4xMDA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj4xMDAwPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24+NTAwMDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPjEwMDAwPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICApO1xuXG4gICAgLy8gSW5jbHVkZSBvbmx5IGZpbHRlcmVkIGRhdGEgaWYgZmlsdGVycyB3ZXJlIGFwcGxpZWRcbiAgICBsZXQgY3N2RGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgJiYgZmlsdGVyZWREYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNzdkRhdGEgPSBmaWx0ZXJlZERhdGE7XG4gICAgfVxuXG4gICAgbGV0IGhlYWRlciA9IHRoaXMuc3RhdGUuSGlkZS5yb3dzUGVyUGFnZSA9PT0gdHJ1ZSA/ICcnIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cm93cy5sZW5ndGh9IHJvd3MgZGlzcGxheWVkIG9mIHtmaWx0ZXJlZFJvd3N9LlxuICAgICAgICAgICAgKE1heGltdW0gcm93cyBwZXIgcGFnZToge1Jvd3NQZXJQYWdlRHJvcGRvd259KVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTQzcHgnfX0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJBY3Rpb25zKCl9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZG93bmxvYWRDU1YuYmluZChudWxsLCBjc3ZEYXRhKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG93bmxvYWQgVGFibGUgYXMgQ1NWXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uTGlua3NcbiAgICAgICAgICAgICAgVG90YWw9e2ZpbHRlcmVkUm93c31cbiAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXt0aGlzLmNoYW5nZVBhZ2V9XG4gICAgICAgICAgICAgIFJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cbiAgICAgICAgICAgICAgQWN0aXZlPXt0aGlzLnN0YXRlLlBhZ2VOdW1iZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBsZXQgZm9vdGVyID0gdGhpcy5zdGF0ZS5IaWRlLmRvd25sb2FkQ1NWID09PSB0cnVlID8gJycgOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJUZXh0XCI+XG4gICAgICAgICAgICAgIHtyb3dzLmxlbmd0aH0gcm93cyBkaXNwbGF5ZWQgb2Yge2ZpbHRlcmVkUm93c30uXG4gICAgICAgICAgICAgIChNYXhpbXVtIHJvd3MgcGVyIHBhZ2U6IHtSb3dzUGVyUGFnZURyb3Bkb3dufSlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICctMjNweCd9fT5cbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25MaW5rc1xuICAgICAgICAgICAgICAgIFRvdGFsPXtmaWx0ZXJlZFJvd3N9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXt0aGlzLmNoYW5nZVBhZ2V9XG4gICAgICAgICAgICAgICAgUm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuICAgICAgICAgICAgICAgIEFjdGl2ZT17dGhpcy5zdGF0ZS5QYWdlTnVtYmVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMTRweCd9fT5cbiAgICAgICAge2hlYWRlcn1cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXByaW1hcnkgdGFibGUtYm9yZGVyZWRcIiBpZD1cImR5bmFtaWN0YWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJpbmZvXCI+e2hlYWRlcnN9PC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtmb290ZXJ9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5EYXRhVGFibGUucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgUm93TnVtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vIEZ1bmN0aW9uIG9mIHdoaWNoIHJldHVybnMgYSBKU1ggZWxlbWVudCBmb3IgYSB0YWJsZSBjZWxsLCB0YWtlc1xuICAvLyBwYXJhbWV0ZXJzIG9mIHRoZSBmb3JtOiBmdW5jKENvbHVtbk5hbWUsIENlbGxEYXRhLCBFbnRpcmVSb3dEYXRhKVxuICBnZXRGb3JtYXR0ZWRDZWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgSGlkZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5EYXRhVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICBSb3dOdW1MYWJlbDogJ05vLicsXG4gIGZpbHRlcjoge30sXG4gIEhpZGU6IHtcbiAgICByb3dzUGVyUGFnZTogZmFsc2UsXG4gICAgZG93bmxvYWRDU1Y6IGZhbHNlLFxuICAgIGRlZmF1bHRDb2x1bW46IGZhbHNlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEZpbHRlciBjb21wb25lbnQuXG4gKiBBIHdyYXBwZXIgZm9yIGZvcm0gZWxlbWVudHMgaW5zaWRlIGEgc2VsZWN0aW9uIGZpbHRlci5cbiAqXG4gKiBDb25zdHJ1Y3RzIGZpbHRlciBmaWVsZHMgYmFzZWQgb24gdGhpcy5wcm9wcy5maWVsZHMgY29uZmlndXJhdGlvbiBvYmplY3RcbiAqXG4gKiBBbHRlcnMgdGhlIGZpbHRlciBvYmplY3QgYW5kIHNlbmRzIGl0IHRvIHBhcmVudCBvbiBldmVyeSB1cGRhdGUuXG4gKlxuICovXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uRmllbGRVcGRhdGUgPSB0aGlzLm9uRmllbGRVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckZpbHRlckZpZWxkcyA9IHRoaXMucmVuZGVyRmlsdGVyRmllbGRzLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmaWx0ZXIgb2JqZWN0IHRvIHJlZmxlY3QgdmFsdWVzIG9mIGlucHV0IGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBmb3JtIGVsZW1lbnQgdHlwZSAoaS5lIGNvbXBvbmVudCBuYW1lKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIGlkIG9mIHRoZSBmb3JtIGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSB0eXBlIG9mIHRoZSBmb3JtIGVsZW1lbnRcbiAgICovXG4gIG9uRmllbGRVcGRhdGUobmFtZSwgdmFsdWUsIGlkLCB0eXBlKSB7XG4gICAgY29uc3QgZmlsdGVyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmZpbHRlcikpO1xuICAgIGNvbnN0IGV4YWN0TWF0Y2ggPSB0eXBlID09PSAndGV4dGJveCcgPyBmYWxzZSA6IHRydWU7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgZGVsZXRlIGZpbHRlcltuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyW25hbWVdID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGV4YWN0TWF0Y2g6IGV4YWN0TWF0Y2gsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMudXBkYXRlRmlsdGVyKGZpbHRlcik7XG4gIH1cblxuICByZW5kZXJGaWx0ZXJGaWVsZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZmllbGRzLnJlZHVjZSgocmVzdWx0LCBmaWVsZCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyID0gZmllbGQuZmlsdGVyO1xuICAgICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIuaGlkZSAhPT0gdHJ1ZSkge1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgc3dpdGNoIChmaWx0ZXIudHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICBlbGVtZW50ID0gPFRleHRib3hFbGVtZW50IGtleT17ZmlsdGVyLm5hbWV9Lz47XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgZWxlbWVudCA9IDxTZWxlY3RFbGVtZW50IGtleT17ZmlsdGVyLm5hbWV9IG9wdGlvbnM9e2ZpbHRlci5vcHRpb25zfS8+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtdWx0aXNlbGVjdCc6XG4gICAgICAgICAgZWxlbWVudCA9IDxTZWxlY3RFbGVtZW50IGtleT17ZmlsdGVyLm5hbWV9IG9wdGlvbnM9e2ZpbHRlci5vcHRpb25zfSBtdWx0aXBsZT17dHJ1ZX0vPjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgZWxlbWVudCA9IDxEYXRlRWxlbWVudCBrZXk9e2ZpbHRlci5uYW1lfS8+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGVsZW1lbnQgPSA8VGV4dGJveEVsZW1lbnQga2V5PXtmaWx0ZXIubmFtZX0vPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IGZpbHRlci5uYW1lLFxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgdmFsdWU6ICh0aGlzLnByb3BzLmZpbHRlcltmaWx0ZXIubmFtZV0gfHwge30pLnZhbHVlLFxuICAgICAgICAgICAgb25Vc2VySW5wdXQ6IHRoaXMub25GaWVsZFVwZGF0ZSxcbiAgICAgICAgICB9XG4gICAgICAgICkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50XG4gICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICA+XG4gICAgICAgIDxGaWVsZHNldEVsZW1lbnRcbiAgICAgICAgICBjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9XG4gICAgICAgICAgbGVnZW5kPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyRmlsdGVyRmllbGRzKCl9XG4gICAgICAgICAgPEJ1dHRvbkVsZW1lbnRcbiAgICAgICAgICAgIGxhYmVsPVwiQ2xlYXIgRmlsdGVyc1wiXG4gICAgICAgICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMucHJvcHMuY2xlYXJGaWx0ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZHNldEVsZW1lbnQ+XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6IG51bGwsXG4gIGNsZWFyRmlsdGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLndhcm4oJ29uVXBkYXRlKCkgY2FsbGJhY2sgaXMgbm90IHNldCEnKTtcbiAgfSxcbiAgY29sdW1uczogMSxcbn07XG5GaWx0ZXIucHJvcFR5cGVzID0ge1xuICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2xlYXJGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQYW5lbCBmcm9tICdqc3gvUGFuZWwnO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdqc3gvRGF0YVRhYmxlJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnanN4L0ZpbHRlcic7XG5cbi8qKlxuICogRmlsdGVyYWJsZURhdGFUYWJsZSBjb21wb25lbnQuXG4gKiBBIHdyYXBwZXIgZm9yIGFsbCBkYXRhdGFibGVzIHRoYXQgaGFuZGxlcyBmaWx0ZXJpbmcuXG4gKlxuICogSGFuZGxlcyB0aGUgdXBkYXRpbmcgYW5kIGNsZWFyaW5nIG9mIHRoZSBmaWx0ZXIgc3RhdGUgYmFzZWQgb24gY2hhbmdlcyBzZW50XG4gKiBmcm9tIHRoZSBGaXRsZXJGb3JtLlxuICpcbiAqIFBhc3NlcyB0aGUgRmlsdGVyIHRvIHRoZSBEYXRhdGFibGUuXG4gKlxuICogRGVwcmVjYXRlcyBGaWx0ZXIgRm9ybS5cbiAqL1xuY2xhc3MgRmlsdGVyYWJsZURhdGFUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWx0ZXI6IHt9LFxuICAgIH07XG4gICAgdGhpcy51cGRhdGVGaWx0ZXIgPSB0aGlzLnVwZGF0ZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xlYXJGaWx0ZXIgPSB0aGlzLmNsZWFyRmlsdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBmaWx0ZXIgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciBwYXNzZWQgZnJvbSBGaWx0ZXJGb3JtXG4gICAqL1xuICB1cGRhdGVGaWx0ZXIoZmlsdGVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGaWx0ZXIgdG8gZW1wdHkgb2JqZWN0XG4gICAqL1xuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcih7fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lbFxuICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgID5cbiAgICAgICAgPEZpbHRlclxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSArICdfZmlsdGVyJ31cbiAgICAgICAgICBpZD17dGhpcy5wcm9wcy5uYW1lICsgJ19maWx0ZXInfVxuICAgICAgICAgIHRpdGxlPSdTZWxlY3Rpb24gRmlsdGVyJ1xuICAgICAgICAgIGNvbHVtbnM9e3RoaXMucHJvcHMuY29sdW1uc31cbiAgICAgICAgICBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgIGZpZWxkcz17dGhpcy5wcm9wcy5maWVsZHN9XG4gICAgICAgICAgdXBkYXRlRmlsdGVyPXt0aGlzLnVwZGF0ZUZpbHRlcn1cbiAgICAgICAgICBjbGVhckZpbHRlcj17dGhpcy5jbGVhckZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPERhdGFUYWJsZVxuICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICBmaWVsZHM9e3RoaXMucHJvcHMuZmllbGRzfVxuICAgICAgICAgIGZpbHRlcj17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgZ2V0Rm9ybWF0dGVkQ2VsbD17dGhpcy5wcm9wcy5nZXRGb3JtYXR0ZWRDZWxsfVxuICAgICAgICAgIGFjdGlvbnM9e3RoaXMucHJvcHMuYWN0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvUGFuZWw+XG4gICAgKTtcbiAgfVxufVxuXG5GaWx0ZXJhYmxlRGF0YVRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sdW1uczogMyxcbn07XG5cbkZpbHRlcmFibGVEYXRhVGFibGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZpbHRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmaWVsZHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29sdW1uczogUHJvcFR5cGVzLm51bWJlcixcbiAgZ2V0Rm9ybWF0dGVkQ2VsbDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJhYmxlRGF0YVRhYmxlO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIFJlYWN0IGNvbXBvbmVudCBmb3IgTG9hZGVyXG4gKlxuICogQGF1dGhvciBIZW5yaSBSYWJhbGFpc1xuICogQHZlcnNpb24gMS4wLjBcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIExvYWRlciBjb21wb25lbnRcbiAqL1xuY2xhc3MgTG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdsb2FkZXInXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6IHBhcnNlSW50KHRoaXMucHJvcHMuc2l6ZSksIGhlaWdodDogcGFyc2VJbnQodGhpcy5wcm9wcy5zaXplKX19XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuTG9hZGVyLnByb3BUeXBlcyA9IHtzaXplOiBQcm9wVHlwZXMuc3RyaW5nfTtcbkxvYWRlci5kZWZhdWx0UHJvcHMgPSB7c2l6ZTogJzEyMCd9O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgUmVhY3QgQ29tcG9uZW50IGZvciBhIE1vZGFsIFdpbmRvdy5cbiAqXG4gKiBAYXV0aG9yIEhlbnJpIFJhYmFsYWlzXG4gKiBAdmVyc2lvbiAxLjEuMFxuICpcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vKipcbiAqIE1vZGFsIENvbXBvbmVudC5cbiAqIFJlYWN0IHdyYXBwZXIgZm9yIGEgTW9kYWwgV2luZG93LiBBbGxvd3MgdG8gZHluYW1pY2FsbHkgdG9nZ2xlIGEgTW9kYWxcbiAqIHdpbmRvdy5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFVzYWdlOlxuICogLSBXcmFwIHRoZSBjb250ZW50cyB0byBiZSBkaXNwbGF5ZWQgYnkgdGhlIE1vZGFsIFdpbmRvdyBieSB0aGVcbiAqICAgTW9kYWwgQ29tcG9uZW50LlxuICogLSBVc2UgdGhlICd0aXRsZScgcHJvcCB0byBzZXQgYSB0aXRsZSBmb3IgdGhlIE1vZGFsIENvbXBvbmVudC5cbiAqIC0gVXNlIHRoZSAnb25TdWJtaXQnIHByb3AgdG8gc2V0IGEgc3VibWlzc2lvbiAqcHJvbWlzZSogb2JqZWN0IGZvciB0aGVcbiAqICAgTW9kYWwncyBjb250ZW50cy5cbiAqIC0gVXNlIHRoZSAnb25DbG9zZScgcHJvcCB0byBzZXQgYSBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIHVwb24gTW9kYWwgY2xvc3VyZS5cbiAqIC0gVXNlIHRoZSAndGhyb3dXYXJuaW5nJyBwcm9wIHRvIHRocm93IGEgd2FybmluZyB1cG9uIGNsb3N1cmUgb2YgdGhlXG4gKiAgIE1vZGFsIFdpbmRvdy5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKi9cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlID0gdGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudGhyb3dXYXJuaW5nKSB7XG4gICAgICBzd2FsKHtcbiAgICAgICAgdGl0bGU6ICdBcmUgWW91IFN1cmU/JyxcbiAgICAgICAgdGV4dDogJ0xlYXZpbmcgdGhlIGZvcm0gd2lsbCByZXN1bHQgaW4gdGhlIGxvc3Mgb2YgYW55IGluZm9ybWF0aW9uICcgK1xuICAgICAgICAgICdlbnRlcmVkLicsXG4gICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdQcm9jZWVkJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC52YWx1ZSAmJiB0aGlzLnByb3BzLm9uQ2xvc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7c2hvdywgY2hpbGRyZW4sIG9uU3VibWl0LCB0aXRsZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaGVhZGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzEwJyxcbiAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgIHBhZGRpbmc6IDM1LFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREREREQnLFxuICAgIH07XG5cbiAgICBjb25zdCBnbHlwaFN0eWxlID0ge1xuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfTtcblxuICAgIGNvbnN0IGJvZHlTdHlsZSA9IHtcbiAgICAgIHBhZGRpbmc6IDE1LFxuICAgIH07XG5cbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgIHBhZGRpbmdUb3A6ICcxMDBweCcsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC43KScsXG4gICAgICB2aXNpYmlsaXR5OiBzaG93ID8gJ3Zpc2libGUnIDogJ2hpZGRlbicsXG4gICAgfTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IHtcbiAgICAgIG9wYWNpdHk6IHNob3cgPyAxIDogMCxcbiAgICAgIHRvcDogc2hvdyA/IDAgOiAnLTMwMHB4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZlZmVmZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc3cHgnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM4ODgnLFxuICAgICAgd2lkdGg6ICc3MDBweCcsXG4gICAgICBib3hTaGFkb3c6ICcwIDRweCA4cHggMCByYmdhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpJyxcbiAgICAgIHRyYW5zaXRpb246ICd0b3AgMC40cywgb3BhY2l0eSAwLjRzJyxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSAoKSA9PiBzaG93ICYmIGNoaWxkcmVuO1xuXG4gICAgY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI0RERERERCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICBwYWRkaW5nOiAnMzVweCAzNXB4IDIwcHggMzVweCcsXG4gICAgfTtcblxuICAgIGNvbnN0IHN1Ym1pdFN0eWxlID0ge1xuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgaWYgKG9uU3VibWl0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0U3R5bGV9PlxuICAgICAgICAgICAgPEJ1dHRvbkVsZW1lbnRcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdWJtaXRcIlxuICAgICAgICAgICAgICBvblVzZXJJbnB1dD17KCkgPT4gb25TdWJtaXQoKS50aGVuKCgpID0+IHRoaXMucHJvcHMub25DbG9zZSgpKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXttb2RhbENvbnRhaW5lcn0gb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17bW9kYWxDb250ZW50fVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2dseXBoU3R5bGV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICB7cmVuZGVyQ2hpbGRyZW4oKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtmb290ZXJTdHlsZX0+XG4gICAgICAgICAgICB7c3VibWl0QnV0dG9uKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdGhyb3dXYXJuaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGhyb3dXYXJuaW5nOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiLyogZXhwb3J0ZWQgUlBhZ2luYXRpb25MaW5rcyAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFBhZ2luYXRpb25MaW5rcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VQYWdlID0gdGhpcy5jaGFuZ2VQYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGFuZ2VQYWdlKGkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAvLyBEb24ndCBqdW1wIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2UoaSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzUGVyUGFnZSA9IHRoaXMucHJvcHMuUm93c1BlclBhZ2U7XG4gICAgbGV0IHBhZ2VMaW5rcyA9IFtdO1xuICAgIGxldCBjbGFzc0xpc3Q7XG4gICAgbGV0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRoaXMucHJvcHMuVG90YWwgLyByb3dzUGVyUGFnZSk7XG4gICAgbGV0IHN0YXJ0UGFnZSA9IE1hdGgubWF4KDEsIHRoaXMucHJvcHMuQWN0aXZlIC0gMyk7XG4gICAgbGV0IGxhc3RTaG93blBhZ2UgPSBNYXRoLm1pbih0aGlzLnByb3BzLkFjdGl2ZSArIDMsIGxhc3RQYWdlKTtcblxuICAgIGlmICh0aGlzLnByb3BzLlRvdGFsID09PSAwKSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuVG90YWwgPCB0aGlzLnByb3BzLlJvd3NQZXJQYWdlKSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9XG5cbiAgICBpZiAoKGxhc3RTaG93blBhZ2UgLSBzdGFydFBhZ2UpIDw9IDcpIHtcbiAgICAgIGxhc3RTaG93blBhZ2UgPSBzdGFydFBhZ2UgKyA2O1xuICAgICAgaWYgKGxhc3RTaG93blBhZ2UgPiBsYXN0UGFnZSkge1xuICAgICAgICBsYXN0U2hvd25QYWdlID0gbGFzdFBhZ2U7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGxhc3RQYWdlIC0gNjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhcnRQYWdlID4gMSkge1xuICAgICAgcGFnZUxpbmtzLnB1c2goXG4gICAgICAgIDxsaSBrZXk9eyd0YWJsZV9wYWdlX2JlZ2lubmluZ18nICsgc3RhcnRQYWdlLnRvU3RyaW5nKCl9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFnZSgxKX0+PGEgaHJlZj0nIyc+JmxhcXVvOzwvYT48L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0UGFnZSA8IDEpIHtcbiAgICAgIHN0YXJ0UGFnZSA9IDE7XG4gICAgfVxuICAgIGlmIChsYXN0U2hvd25QYWdlIDwgMSkge1xuICAgICAgbGFzdFNob3duUGFnZSA9IDE7XG4gICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9ubHkgMSBwYWdlLCBkb24ndCBkaXNwbGF5IHBhZ2luYXRpb24gbGlua3NcbiAgICBpZiAoc3RhcnRQYWdlID09PSBsYXN0U2hvd25QYWdlKSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRQYWdlOyBpIDw9IGxhc3RTaG93blBhZ2U7IGkgKz0gMSkge1xuICAgICAgY2xhc3NMaXN0ID0gJyc7XG4gICAgICBpZiAodGhpcy5wcm9wcy5BY3RpdmUgPT09IGkpIHtcbiAgICAgICAgY2xhc3NMaXN0ID0gJ2FjdGl2ZSc7XG4gICAgICB9XG4gICAgICBwYWdlTGlua3MucHVzaChcbiAgICAgICAgPGxpIGtleT17J3RhYmxlX3BhZ2VfJyArIGkudG9TdHJpbmcoKX0gb25DbGljaz17dGhpcy5jaGFuZ2VQYWdlKGkpfSBjbGFzc05hbWU9e2NsYXNzTGlzdH0+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj57aX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobGFzdFNob3duUGFnZSAhPT0gbGFzdFBhZ2UpIHtcbiAgICAgIHBhZ2VMaW5rcy5wdXNoKFxuICAgICAgICA8bGkga2V5PXsndGFibGVfcGFnZV9tb3JlXycgKyBsYXN0U2hvd25QYWdlLnRvU3RyaW5nKCl9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFnZShsYXN0UGFnZSl9PlxuICAgICAgICAgIDxhIGhyZWY9JyMnPiZyYXF1bzs8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPSdwYWdpbmF0aW9uIHBhZ2luYXRpb24tdGFibGUnPlxuICAgICAgICAgIHtwYWdlTGlua3N9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn1cblBhZ2luYXRpb25MaW5rcy5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlUGFnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIFRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuUGFnaW5hdGlvbkxpbmtzLmRlZmF1bHRQcm9wcyA9IHtcbiAgUm93c1BlclBhZ2U6IDEwLFxuICBBY3RpdmU6IDEsXG59O1xuXG5sZXQgUlBhZ2luYXRpb25MaW5rcyA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUGFnaW5hdGlvbkxpbmtzKTtcblxud2luZG93LlBhZ2luYXRpb25MaW5rcyA9IFBhZ2luYXRpb25MaW5rcztcbndpbmRvdy5SUGFnaW5hdGlvbkxpbmtzID0gUlBhZ2luYXRpb25MaW5rcztcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbkxpbmtzO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgUmVhY3QgY29tcG9uZW50IGZvciBQYW5lbFxuICpcbiAqIEBhdXRob3IgQWxleCBJLlxuICogQHZlcnNpb24gMS4wLjBcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIFBhbmVsIGNvbXBvbmVudFxuICogV3JhcHMgY2hpbGRyZW4gaW4gYSBjb2xsYXBzaWJsZSBib290c3RyYXAgcGFuZWxcbiAqL1xuY2xhc3MgUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb2xsYXBzZWQ6IHRoaXMucHJvcHMuaW5pdENvbGxhcHNlZCxcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBwYW5lbCBjbGFzcyBiYXNlZCBvbiBjb2xsYXBzZWQgc3RhdHVzXG4gICAgdGhpcy5wYW5lbENsYXNzID0gKFxuICAgICAgdGhpcy5wcm9wcy5pbml0Q29sbGFwc2VkID9cbiAgICAgICAgJ3BhbmVsLWNvbGxhcHNlIGNvbGxhcHNlJyA6XG4gICAgICAgICdwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZSBpbidcbiAgICApO1xuXG4gICAgdGhpcy50b2dnbGVDb2xsYXBzZWQgPSB0aGlzLnRvZ2dsZUNvbGxhcHNlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlQ29sbGFwc2VkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxhcHNlZDogIXRoaXMuc3RhdGUuY29sbGFwc2VkfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gQ2hhbmdlIGFycm93IGRpcmVjdGlvbiBiYXNlZCBvbiBjb2xsYXBzZSBzdGF0dXNcbiAgICBsZXQgZ2x5cGhDbGFzcyA9IChcbiAgICAgIHRoaXMuc3RhdGUuY29sbGFwc2VkID9cbiAgICAgICAgJ2dseXBoaWNvbiBwdWxsLXJpZ2h0IGdseXBoaWNvbi1jaGV2cm9uLWRvd24nIDpcbiAgICAgICAgJ2dseXBoaWNvbiBwdWxsLXJpZ2h0IGdseXBoaWNvbi1jaGV2cm9uLXVwJ1xuICAgICk7XG5cbiAgICAvLyBBZGQgcGFuZWwgaGVhZGVyLCBpZiB0aXRsZSBpcyBzZXRcbiAgICBjb25zdCBwYW5lbEhlYWRpbmcgPSB0aGlzLnByb3BzLnRpdGxlID8gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCJcbiAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZWR9XG4gICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICBkYXRhLXRhcmdldD17JyMnICsgdGhpcy5wcm9wcy5pZH1cbiAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2dseXBoQ2xhc3N9Pjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICkgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLXByaW1hcnlcIj5cbiAgICAgICAge3BhbmVsSGVhZGluZ31cbiAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXt0aGlzLnBhbmVsQ2xhc3N9IHJvbGU9XCJ0YWJwYW5lbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiIHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodH19PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QYW5lbC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblBhbmVsLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdENvbGxhcHNlZDogZmFsc2UsXG4gIGlkOiAnZGVmYXVsdC1wYW5lbCcsXG4gIGhlaWdodDogJzEwMCUnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFuZWw7XG4iLCIvKipcbiAqIFJlYWN0IFByb2dyZXNzQmFyLlxuICpcbiAqIFVwZGF0ZXMgVUkgYXV0b21hdGljYWxseSB3aGVuIHBhc3NlZCBhIHByb2dyZXNzIHZhbHVlIGJldHdlZW4gMCBhbmQgMTAwLlxuICogVG8gaGlkZSBwcm9ncmVzcyBiYXIgYmVmb3JlL2FmdGVyIHVwbG9hZCwgc2V0IHZhbHVlIHRvIC0xLlxuICpcbiAqIE5vdGU6IFRoaXMgY29tcG9uZW50IHJlbGllcyBvbiBCb290c3RyYXAgMyBwcm9ncmVzcy1iYXIgY2xhc3Nlc1xuICogKGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2NvbXBvbmVudHMvI3Byb2dyZXNzKVxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvZ3Jlc3NTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICh0aGlzLnByb3BzLnZhbHVlIDwgMCA/ICdub25lJyA6ICdibG9jaycpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2QzZDNkMycsXG4gICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgekluZGV4OiAxMDAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxuICAgICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgc3R5bGU9e3Byb2dyZXNzU3R5bGV9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIGFjdGl2ZVwiXG4gICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgYXJpYS12YWx1ZW5vdz17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBzdHlsZT17e3dpZHRoOiAodGhpcy5wcm9wcy52YWx1ZSArICclJyl9fVxuICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+e3RoaXMucHJvcHMudmFsdWV9JTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhbHVlOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBSZWFjdCBjb21wb25lbnRzIGZvciBUYWJzIGNvbXBvbmVudC5cbiAqXG4gKiBAYXV0aG9yIExvcmlzIFRlYW1cbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBUYWJzIENvbXBvbmVudC5cbiAqIFJlYWN0IHdyYXBwZXIgZm9yIEJvb3RzdHJhcCB0YWJzLiBBbGxvd3MgdG8gZHluYW1pY2FsbHkgcmVuZGVyIHRhYnNcbiAqIGFuZCBjb3JyZXNwb25kaW5nIHRhYiBwYW5lcy5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFVzYWdlOlxuICpcbiAqIDEuIERlZmluZSBhbiBhcnJheSBvZiB0YWJzIHdpdGggSURzIGFuZCBsYWJlbHNcbiAqXG4gKiBgbGV0IHRhYkxpc3QgPSBbe2lkOiBcInRhYjFcIiwgbGFiZWw6IFwiVGhpcyBpcyB0YWIgdGl0bGVcIn1dO2BcbiAqXG4gKiAyLiBQYXNzIHRhYkxpc3QgYXMgPFRhYj4gcHJvcGVydHkgYW5kIDxUYWJQYW5lPiBhcyBjaGlsZFxuICogIGBgYFxuICogPFRhYnMgdGFicz17dGFiTGlzdH0gZGVmYXVsdFRhYj1cInRhYjFcIj5cbiAqICAgPFRhYlBhbmUgVGFiSWQ9e3RhYkxpc3RbMF0uaWR9PlxuICogICAgIC8vIFRhYiBjb250ZW50IGdvZXMgaGVyZVxuICogICA8L1RhYlBhbmU+XG4gKiA8L1RhYnM+XG4gKiBgYGBcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKi9cbmNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBsZXQgYWN0aXZlVGFiID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgdGhlIGluaXRpYWwgYWN0aXZlIHRhYiBpbiB0aGlzIG9yZGVyXG4gICAgICogMS4gVHJ5IHRvIGluZmVyIGZyb20gdGhlIFVSTCwgb3RoZXJ3aXNlXG4gICAgICogMi4gVHJ5IHRvIGluZmVyIGZyb20gdGhlIGRlZmF1bHRUYWIgcHJvcCwgb3RoZXJ3aXNlXG4gICAgICogMy4gU2V0IHRvIGJlIHRoZSBmaXJzdCB0YWIgb2YgdGhlIGxpc3RcbiAgICAgKi9cbiAgICBpZiAodGhpcy5wcm9wcy51cGRhdGVVUkwgJiYgaGFzaCkge1xuICAgICAgYWN0aXZlVGFiID0gaGFzaC5zdWJzdHIoMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmRlZmF1bHRUYWIpIHtcbiAgICAgIGFjdGl2ZVRhYiA9IHRoaXMucHJvcHMuZGVmYXVsdFRhYjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudGFicy5sZW5ndGggPiAwKSB7XG4gICAgICBhY3RpdmVUYWIgPSB0aGlzLnByb3BzLnRhYnNbMF0uaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVRhYjogYWN0aXZlVGFiLFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VGFicyA9IHRoaXMuZ2V0VGFicy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VGFiUGFuZXMgPSB0aGlzLmdldFRhYlBhbmVzLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayh0YWJJZCwgZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogdGFiSWR9KTtcbiAgICB0aGlzLnByb3BzLm9uVGFiQ2hhbmdlKHRhYklkKTtcblxuICAgIC8vIEFkZCB0YWIgaHJlZiB0byBVUkwgcXVlcnlzdHJpbmcgYW5kIHNjcm9sbCB0aGUgcGFnZSB0byB0b3BcbiAgICBpZiAodGhpcy5wcm9wcy51cGRhdGVVUkwpIHtcbiAgICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gJCgnYm9keScpLnNjcm9sbFRvcCgpIHx8ICQoJ2h0bWwnKS5zY3JvbGxUb3AoKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gZS50YXJnZXQuaGFzaDtcbiAgICAgICQoJ2h0bWwsYm9keScpLnNjcm9sbFRvcChzY3JvbGxEaXN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFicygpIHtcbiAgICBsZXQgdGFicyA9ICh0aGlzLnByb3BzLnRhYnMpLm1hcChmdW5jdGlvbih0YWIpIHtcbiAgICAgIGxldCB0YWJDbGFzcyA9IHRoaXMuc3RhdGUuYWN0aXZlVGFiID09PSB0YWIuaWQgPyAnYWN0aXZlJyA6IG51bGw7XG4gICAgICBsZXQgaHJlZiA9ICcjJyArIHRhYi5pZDtcbiAgICAgIGxldCB0YWJJRCA9ICd0YWItJyArIHRhYi5pZDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGFiQ2xhc3N9XG4gICAgICAgICAga2V5PXt0YWIuaWR9XG4gICAgICAgID5cbiAgICAgICAgICA8YSBpZD17dGFiSUR9XG4gICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXG4gICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKG51bGwsIHRhYi5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RhYi5sYWJlbH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gdGFicztcbiAgfVxuXG4gIGdldFRhYlBhbmVzKCkge1xuICAgIGxldCB0YWJQYW5lcyA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCwga2V5KSB7XG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgIGFjdGl2ZVRhYjogdGhpcy5zdGF0ZS5hY3RpdmVUYWIsXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gdGFiUGFuZXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHRhYnMgPSB0aGlzLmdldFRhYnMoKTtcbiAgICBsZXQgdGFiUGFuZXMgPSB0aGlzLmdldFRhYlBhbmVzKCk7XG4gICAgbGV0IHRhYlN0eWxlID0ge1xuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIiBzdHlsZT17dGFiU3R5bGV9PlxuICAgICAgICAgIHt0YWJzfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAge3RhYlBhbmVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblRhYnMucHJvcFR5cGVzID0ge1xuICB0YWJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZGVmYXVsdFRhYjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXBkYXRlVVJMOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5UYWJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25UYWJDaGFuZ2U6IGZ1bmN0aW9uKCkge30sXG4gIC8vIFNldCB1cGRhdGVVUkwgdG8gZGVmYXVsdCB0byB0cnVlIGJ1dCBhbGxvdyBmb3IgY2hhbmdlXG4gIC8vIE5lc3RlZCB0YWJzIHNob3VsZCBzZXQgdGhpcyB2YXJpYWJsZSB0byBmYWxzZVxuICB1cGRhdGVVUkw6IHRydWUsXG59O1xuXG4vKipcbiAqIEFsbG93cyB0byBkeW5hbWljYWxseSByZW5kZXIgdmVydGljYWwgdGFicyBjb3JyZXNwb25kaW5nIHRvIHRhYiBwYW5lcy5cbiAqL1xuXG5jbGFzcyBWZXJ0aWNhbFRhYnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBsZXQgYWN0aXZlVGFiID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgdGhlIGluaXRpYWwgYWN0aXZlIHRhYiBpbiB0aGlzIG9yZGVyXG4gICAgICogMS4gVHJ5IHRvIGluZmVyIGZyb20gdGhlIFVSTCwgb3RoZXJ3aXNlXG4gICAgICogMi4gVHJ5IHRvIGluZmVyIGZyb20gdGhlIGRlZmF1bHRUYWIgcHJvcCwgb3RoZXJ3aXNlXG4gICAgICogMy4gU2V0IHRvIGJlIHRoZSBmaXJzdCB0YWIgb2YgdGhlIGxpc3RcbiAgICAgKi9cbiAgICBpZiAodGhpcy5wcm9wcy51cGRhdGVVUkwgJiYgaGFzaCkge1xuICAgICAgYWN0aXZlVGFiID0gaGFzaC5zdWJzdHIoMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmRlZmF1bHRUYWIpIHtcbiAgICAgIGFjdGl2ZVRhYiA9IHRoaXMucHJvcHMuZGVmYXVsdFRhYjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudGFicy5sZW5ndGggPiAwKSB7XG4gICAgICBhY3RpdmVUYWIgPSB0aGlzLnByb3BzLnRhYnNbMF0uaWQ7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVRhYjogYWN0aXZlVGFiLFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VGFicyA9IHRoaXMuZ2V0VGFicy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VGFiUGFuZXMgPSB0aGlzLmdldFRhYlBhbmVzLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayh0YWJJZCwgZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogdGFiSWR9KTtcbiAgICB0aGlzLnByb3BzLm9uVGFiQ2hhbmdlKHRhYklkKTtcblxuICAgIC8vIEFkZCB0YWIgaHJlZiB0byBVUkwgcXVlcnlzdHJpbmcgYW5kIHNjcm9sbCB0aGUgcGFnZSB0byB0b3BcbiAgICBpZiAodGhpcy5wcm9wcy51cGRhdGVVUkwpIHtcbiAgICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gJCgnYm9keScpLnNjcm9sbFRvcCgpIHx8ICQoJ2h0bWwnKS5zY3JvbGxUb3AoKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gZS50YXJnZXQuaGFzaDtcbiAgICAgICQoJ2h0bWwsYm9keScpLnNjcm9sbFRvcChzY3JvbGxEaXN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFicygpIHtcbiAgICBsZXQgdGFicyA9ICh0aGlzLnByb3BzLnRhYnMpLm1hcChmdW5jdGlvbih0YWIpIHtcbiAgICAgIGxldCB0YWJDbGFzcyA9IHRoaXMuc3RhdGUuYWN0aXZlVGFiID09PSB0YWIuaWQgPyAnYWN0aXZlJyA6IG51bGw7XG4gICAgICBsZXQgaHJlZiA9ICcjJyArIHRhYi5pZDtcbiAgICAgIGxldCB0YWJJRCA9ICd0YWItJyArIHRhYi5pZDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGFiQ2xhc3N9XG4gICAgICAgICAga2V5PXt0YWIuaWR9XG4gICAgICAgID5cbiAgICAgICAgICA8YSBpZD17dGFiSUR9XG4gICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXG4gICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKG51bGwsIHRhYi5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RhYi5sYWJlbH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gdGFicztcbiAgfVxuXG4gIGdldFRhYlBhbmVzKCkge1xuICAgIGxldCB0YWJQYW5lcyA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCwga2V5KSB7XG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgIGFjdGl2ZVRhYjogdGhpcy5zdGF0ZS5hY3RpdmVUYWIsXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gdGFiUGFuZXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHRhYnMgPSB0aGlzLmdldFRhYnMoKTtcbiAgICBsZXQgdGFiUGFuZXMgPSB0aGlzLmdldFRhYlBhbmVzKCk7XG4gICAgbGV0IHRhYlN0eWxlID0ge1xuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmJhYmxlIGNvbC1tZC0zIGNvbC1zbS0zXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHMgbmF2LXN0YWNrZWRcIiByb2xlPVwidGFibGlzdFwiIHN0eWxlPXt0YWJTdHlsZX0+XG4gICAgICAgICAgICB7dGFic31cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudCBjb2wtbWQtOSBjb2wtc20tOVwiPlxuICAgICAgICAgIHt0YWJQYW5lc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5WZXJ0aWNhbFRhYnMucHJvcFR5cGVzID0ge1xuICB0YWJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZGVmYXVsdFRhYjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXBkYXRlVVJMOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5WZXJ0aWNhbFRhYnMuZGVmYXVsdFByb3BzID0ge1xuICBvblRhYkNoYW5nZTogZnVuY3Rpb24oKSB7fSxcbiAgLy8gU2V0IHVwZGF0ZVVSTCB0byBkZWZhdWx0IHRvIHRydWUgYnV0IGFsbG93IGZvciBjaGFuZ2VcbiAgLy8gTmVzdGVkIHRhYnMgc2hvdWxkIHNldCB0aGlzIHZhcmlhYmxlIHRvIGZhbHNlXG4gIHVwZGF0ZVVSTDogdHJ1ZSxcbn07XG5cbi8qXG4gKiBUYWJQYW5lIGNvbXBvbmVudC5cbiAqIFVzZWQgdG8gd3JhcCBjb250ZW50IGZvciBldmVyeSB0YWIuXG4gKi9cbmNsYXNzIFRhYlBhbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzTGlzdCA9ICd0YWItcGFuZSc7XG4gICAgbGV0IHRpdGxlO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuVGFiSWQgPT09IHRoaXMucHJvcHMuYWN0aXZlVGFiKSB7XG4gICAgICBjbGFzc0xpc3QgKz0gJyBhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5UaXRsZSkge1xuICAgICAgdGl0bGUgPSA8aDE+e3RoaXMucHJvcHMuVGl0bGV9PC9oMT47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3NOYW1lPXtjbGFzc0xpc3R9IGlkPXt0aGlzLnByb3BzLlRhYklkfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblRhYlBhbmUucHJvcFR5cGVzID0ge1xuICBUYWJJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlVGFiOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IHtcbiAgVGFicyxcbiAgVmVydGljYWxUYWJzLFxuICBUYWJQYW5lLFxufTtcbiIsIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBSZWFjdCBDb21wb25lbnQgZm9yIGEgVHJpZ2dlcmFibGUgTW9kYWwgV2luZG93LlxuICpcbiAqIEBhdXRob3IgSGVucmkgUmFiYWxhaXNcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNb2RhbCBmcm9tICdNb2RhbCc7XG5cbi8qKlxuICogVHJpZ2dlcmFibGUgTW9kYWwgQ29tcG9uZW50LlxuICogUmVhY3Qgd3JhcHBlciBmb3IgYSBUcmlnZ2VyYWJsZSBNb2RhbCBXaW5kb3cuXG4gKiBBbGxvd3MgdG8gZHluYW1pY2FsbHkgdG9nZ2xlIGEgTW9kYWwgd2luZG93IHRocm91Z2ggYSByZW5kZXJlZCB0cmlnZ2VyLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogVXNhZ2U6XG4gKiAtIFdyYXAgdGhlIGNvbnRlbnRzIHRvIGJlIGRpc3BsYXllZCBieSB0aGUgTW9kYWwgV2luZG93IGJ5IHRoZVxuICogICBUcmlnZ2VyYWJsZSBNb2RhbCBDb21wb25lbnQuXG4gKiAtIFVzZSB0aGUgJ3RpdGxlJyBwcm9wIHRvIHNldCBhIHRpdGxlIGZvciB0aGUgTW9kYWwgQ29tcG9uZW50LlxuICogLSBVc2UgdGhlICd0cmlnZ2VyJyBwcm9wIHRvIHNldCB0aGUgY29tcG9uZW50IHRoYXQgd2lsbCBhY3QgYXMgYSB0cmlnZ2VyIHRvXG4gKiAgIG9wZW4gdGhlIE1vZGFsIHdpbmRvdy5cbiAqIC0gVXNlIHRoZSAnb25TdWJtaXQnIHByb3AgdG8gc2V0IGEgc3VibWlzc2lvbiBwcm9taXNlIG9iamVjdCBmb3IgdGhlIE1vZGFsJ3MgY29udGVudHMuXG4gKiAtIFVzZSB0aGUgJ29uQ2xvc2UnIHByb3AgdG8gc2V0IGEgZnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIE1vZGFsIGlzXG4gKiAgIGNsb3NlZC5cbiAqIC0gVXNlIHRoZSAndGhyb3dXYXJuaW5nJyBwcm9wIHRvIHRocm93IGEgd2FybmluZyB1cG9uIGNsb3N1cmUgb2YgdGhlIE1vZGFsIFdpbmRvdy5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKi9cbmNsYXNzIFRyaWdnZXJhYmxlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7b3BlbjogZmFsc2V9O1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UgaW5zdGFuY2VvZiBGdW5jdGlvbikgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2xhYmVsLCBvblVzZXJJbnB1dH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdHJpZ2dlciA9IChcbiAgICAgIDxDVEEgbGFiZWw9e2xhYmVsfSBvblVzZXJJbnB1dD17KCkgPT4ge1xuICAgICAgICBpZiAob25Vc2VySW5wdXQgaW5zdGFuY2VvZiBGdW5jdGlvbikgb25Vc2VySW5wdXQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgICAgfX0vPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RyaWdnZXJ9XG4gICAgICAgIDxNb2RhbCB7Li4udGhpcy5wcm9wc30gc2hvdz17dGhpcy5zdGF0ZS5vcGVufSBvbkNsb3NlPXt0aGlzLmNsb3NlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRyaWdnZXJhYmxlTW9kYWwucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXJhYmxlTW9kYWw7XG4iLCIvKiBleHBvcnRlZCBSTWVkaWFFZGl0Rm9ybSAqL1xuXG4vKipcbiAqIE1lZGlhIEVkaXQgRm9ybVxuICpcbiAqIEZldGNoZXMgZGF0YSBjb3JyZXNwb25kaW5nIHRvIGEgZ2l2ZW4gZmlsZSBmcm9tIExvcmlzIGJhY2tlbmQgYW5kXG4gKiBkaXNwbGF5cyBhIGZvcm0gYWxsb3dpbmcgbWV0YSBpbmZvcm1hdGlvbiBvZiB0aGUgbWVkaWEgZmlsZVxuICpcbiAqIEBhdXRob3IgQWxleCBJbGVhXG4gKiBAdmVyc2lvbiAxLjAuMFxuICpcbiAqICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbmNsYXNzIE1lZGlhRWRpdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBEYXRhOiB7fSxcbiAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgIHVwbG9hZFJlc3VsdDogbnVsbCxcbiAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgIGxvYWRlZERhdGE6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEZvcm1EYXRhID0gdGhpcy5zZXRGb3JtRGF0YS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICQuYWpheCh0aGlzLnByb3BzLkRhdGFVUkwsIHtcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IHtcbiAgICAgICAgICBpZE1lZGlhRmlsZTogZGF0YS5tZWRpYURhdGEuaWQsXG4gICAgICAgICAgZm9yU2l0ZTogZGF0YS5tZWRpYURhdGEuZm9yU2l0ZSxcbiAgICAgICAgICBkYXRlVGFrZW46IGRhdGEubWVkaWFEYXRhLmRhdGVUYWtlbixcbiAgICAgICAgICBjb21tZW50czogZGF0YS5tZWRpYURhdGEuY29tbWVudHMsXG4gICAgICAgICAgaGlkZUZpbGU6IGRhdGEubWVkaWFEYXRhLmhpZGVGaWxlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgIERhdGE6IGRhdGEsXG4gICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXG4gICAgICAgICAgbWVkaWFEYXRhOiBkYXRhLm1lZGlhRGF0YSxcbiAgICAgICAgICBmb3JtRGF0YTogZm9ybURhdGEsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvciwgZXJyb3JDb2RlLCBlcnJvck1zZykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLCBlcnJvckNvZGUsIGVycm9yTXNnKTtcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3I6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGVuIGxvYWRpbmcgdGhlIGZvcm0hJyxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIERhdGEgbG9hZGluZyBlcnJvclxuICAgIGlmICh0aGlzLnN0YXRlLmVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1kYW5nZXIgdGV4dC1jZW50ZXInPlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvcn1cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFdhaXRpbmcgZm9yIGRhdGEgdG8gbG9hZFxuICAgIGlmICghdGhpcy5zdGF0ZS5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1pbmZvIGhhcy1zcGlubmVyJz5cbiAgICAgICAgICBMb2FkaW5nXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIGdseXBoaWNvbi1yZWZyZXNoLWFuaW1hdGUnPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgICBuYW1lPSdtZWRpYUVkaXQnXG4gICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgIHJlZj0nZm9ybSdcbiAgICAgICAgPlxuICAgICAgICAgIDxTZWxlY3RFbGVtZW50XG4gICAgICAgICAgICBuYW1lPSdwc2NpZCdcbiAgICAgICAgICAgIGxhYmVsPSdQU0NJRCdcbiAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuRGF0YS5jYW5kaWRhdGVzfVxuICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMuc2V0Rm9ybURhdGF9XG4gICAgICAgICAgICByZWY9J3BzY2lkJ1xuICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1lZGlhRGF0YS5wc2NpZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTZWxlY3RFbGVtZW50XG4gICAgICAgICAgICBuYW1lPSd2aXNpdExhYmVsJ1xuICAgICAgICAgICAgbGFiZWw9J1Zpc2l0IExhYmVsJ1xuICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5EYXRhLnZpc2l0c31cbiAgICAgICAgICAgIG9uVXNlcklucHV0PXt0aGlzLnNldEZvcm1EYXRhfVxuICAgICAgICAgICAgcmVmPSd2aXNpdExhYmVsJ1xuICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1lZGlhRGF0YS52aXNpdExhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlbGVjdEVsZW1lbnRcbiAgICAgICAgICAgIG5hbWU9J2ZvclNpdGUnXG4gICAgICAgICAgICBsYWJlbD0nU2l0ZSdcbiAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuRGF0YS5zaXRlc31cbiAgICAgICAgICAgIG9uVXNlcklucHV0PXt0aGlzLnNldEZvcm1EYXRhfVxuICAgICAgICAgICAgcmVmPSdmb3JTaXRlJ1xuICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tZWRpYURhdGEuZm9yU2l0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTZWxlY3RFbGVtZW50XG4gICAgICAgICAgICBuYW1lPSdpbnN0cnVtZW50J1xuICAgICAgICAgICAgbGFiZWw9J0luc3RydW1lbnQnXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLkRhdGEuaW5zdHJ1bWVudHN9XG4gICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5zZXRGb3JtRGF0YX1cbiAgICAgICAgICAgIHJlZj0naW5zdHJ1bWVudCdcbiAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVkaWFEYXRhLmluc3RydW1lbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGF0ZUVsZW1lbnRcbiAgICAgICAgICAgIG5hbWU9J2RhdGVUYWtlbidcbiAgICAgICAgICAgIGxhYmVsPSdEYXRlIG9mIEFkbWluaXN0cmF0aW9uJ1xuICAgICAgICAgICAgbWluWWVhcj0nMjAwMCdcbiAgICAgICAgICAgIG1heFllYXI9JzIwMTcnXG4gICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5zZXRGb3JtRGF0YX1cbiAgICAgICAgICAgIHJlZj0nZGF0ZVRha2VuJ1xuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybURhdGEuZGF0ZVRha2VufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRhcmVhRWxlbWVudFxuICAgICAgICAgICAgbmFtZT0nY29tbWVudHMnXG4gICAgICAgICAgICBsYWJlbD0nQ29tbWVudHMnXG4gICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5zZXRGb3JtRGF0YX1cbiAgICAgICAgICAgIHJlZj0nY29tbWVudHMnXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtRGF0YS5jb21tZW50c31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGaWxlRWxlbWVudFxuICAgICAgICAgICAgbmFtZT0nZmlsZSdcbiAgICAgICAgICAgIGlkPSdtZWRpYUVkaXRFbCdcbiAgICAgICAgICAgIG9uVXNlcklucHV0PXt0aGlzLnNldEZvcm1EYXRhfVxuICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgIHJlZj0nZmlsZSdcbiAgICAgICAgICAgIGxhYmVsPSdVcGxvYWRlZCBmaWxlJ1xuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVkaWFEYXRhLmZpbGVOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlbGVjdEVsZW1lbnRcbiAgICAgICAgICAgIG5hbWU9J2hpZGVGaWxlJ1xuICAgICAgICAgICAgbGFiZWw9J0hpZGUgRmlsZSdcbiAgICAgICAgICAgIGVtcHR5T3B0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e1snTm8nLCAnWWVzJ119XG4gICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5zZXRGb3JtRGF0YX1cbiAgICAgICAgICAgIHJlZj0naGlkZUZpbGUnXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtRGF0YS5oaWRlRmlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25FbGVtZW50IGxhYmVsPSdVcGRhdGUgRmlsZScvPlxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge2V2ZW50fSBlIC0gRm9ybSBzdWJtaXNzaW9uIGV2ZW50XG4gICAqL1xuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgbXlGb3JtRGF0YSA9IHRoaXMuc3RhdGUuZm9ybURhdGE7XG5cbiAgICAkKCcjbWVkaWFFZGl0RWwnKS5oaWRlKCk7XG4gICAgJCgnI2ZpbGUtcHJvZ3Jlc3MnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogc2VsZi5wcm9wcy5hY3Rpb24sXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShteUZvcm1EYXRhKSxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgIHhocjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc2JhciA9ICQoJyNwcm9ncmVzc2JhcicpO1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzbGFiZWwgPSAkKCcjcHJvZ3Jlc3NsYWJlbCcpO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKChldnQubG9hZGVkIC8gZXZ0LnRvdGFsKSAqIDEwMCk7XG4gICAgICAgICAgICAkKHByb2dyZXNzYmFyKS53aWR0aChwZXJjZW50ICsgJyUnKTtcbiAgICAgICAgICAgICQocHJvZ3Jlc3NsYWJlbCkuaHRtbChwZXJjZW50ICsgJyUnKTtcbiAgICAgICAgICAgIHByb2dyZXNzYmFyLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHhocjtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAkKCcjZmlsZS1wcm9ncmVzcycpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgIHN3YWwoJ1VwbG9hZCBTdWNjZXNzZnVsIScsICcnLCAnc3VjY2VzcycpO1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoRGF0YSgpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgc3dhbCgnVXBsb2FkIEVycm9yIScsICcnLCAnZXJyb3InKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZvcm0gZGF0YSBiYXNlZCBvbiBzdGF0ZSB2YWx1ZXMgb2YgY2hpbGQgZWxlbWVudHMvY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybUVsZW1lbnQgLSBuYW1lIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHNlbGVjdGVkIHZhbHVlIGZvciBjb3JyZXNwb25kaW5nIGZvcm0gZWxlbWVudFxuICAgKi9cbiAgc2V0Rm9ybURhdGEoZm9ybUVsZW1lbnQsIHZhbHVlKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gdGhpcy5zdGF0ZS5mb3JtRGF0YTtcblxuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIGZvcm1EYXRhW2Zvcm1FbGVtZW50XSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1EYXRhW2Zvcm1FbGVtZW50XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybURhdGE6IGZvcm1EYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbk1lZGlhRWRpdEZvcm0ucHJvcFR5cGVzID0ge1xuICBEYXRhVVJMOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFFZGl0Rm9ybTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtUYWJzLCBUYWJQYW5lfSBmcm9tICdUYWJzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnTG9hZGVyJztcbmltcG9ydCBGaWx0ZXJhYmxlRGF0YVRhYmxlIGZyb20gJ0ZpbHRlcmFibGVEYXRhVGFibGUnO1xuaW1wb3J0IFRyaWdnZXJhYmxlTW9kYWwgZnJvbSAnVHJpZ2dlcmFibGVNb2RhbCc7XG5cbmltcG9ydCBNZWRpYVVwbG9hZEZvcm0gZnJvbSAnLi91cGxvYWRGb3JtJztcbmltcG9ydCBNZWRpYUVkaXRGb3JtIGZyb20gJy4vZWRpdEZvcm0nO1xuXG5jbGFzcyBNZWRpYUluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMuZmV0Y2hEYXRhID0gdGhpcy5mZXRjaERhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvcm1hdENvbHVtbiA9IHRoaXMuZm9ybWF0Q29sdW1uLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoRGF0YSgpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldFN0YXRlKHtpc0xvYWRlZDogdHJ1ZX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBkYXRhIGZyb20gdGhlIHByb3ZpZGVkIFVSTCBhbmQgc2F2ZSBpdCBpbiBzdGF0ZVxuICAgKiBBZGRpdGlvbmFsbHkgYWRkIGhpZGRlbkhlYWRlcnMgdG8gZ2xvYmFsIGxvcmlzIHZhcmlhYmxlXG4gICAqIGZvciBlYXN5IGFjY2VzcyBieSBjb2x1bW5Gb3JtYXR0ZXIuXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIGZldGNoRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2godGhpcy5wcm9wcy5kYXRhVVJMLCB7Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbid9KVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHRoaXMuc2V0U3RhdGUoe2RhdGF9KSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RpZnkgYmVoYXZpb3VyIG9mIHNwZWNpZmllZCBjb2x1bW4gY2VsbHMgaW4gdGhlIERhdGEgVGFibGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2x1bW4gLSBjb2x1bW4gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2VsbCAtIGNlbGwgY29udGVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gcm93IC0gcm93IGNvbnRlbnQgaW5kZXhlZCBieSBjb2x1bW5cbiAgICpcbiAgICogQHJldHVybiB7Kn0gYSBmb3JtYXRlZCB0YWJsZSBjZWxsIGZvciBhIGdpdmVuIGNvbHVtblxuICAgKi9cbiAgZm9ybWF0Q29sdW1uKGNvbHVtbiwgY2VsbCwgcm93KSB7XG4gICAgLy8gU2V0IGNsYXNzIHRvICdiZy1kYW5nZXInIGlmIGZpbGUgaXMgaGlkZGVuLlxuICAgIGNvbnN0IHN0eWxlID0gKHJvd1snRmlsZSBWaXNpYmlsaXR5J10gPT09ICcxJykgPyAnYmctZGFuZ2VyJyA6ICcnO1xuICAgIGxldCByZXN1bHQgPSA8dGQgY2xhc3NOYW1lPXtzdHlsZX0+e2NlbGx9PC90ZD47XG4gICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICBjYXNlICdGaWxlIE5hbWUnOlxuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzUGVybWlzc2lvbignbWVkaWFfd3JpdGUnKSkge1xuICAgICAgICBjb25zdCBkb3dubG9hZFVSTCA9IGxvcmlzLkJhc2VVUkwgKyAnL21lZGlhL2FqYXgvRmlsZURvd25sb2FkLnBocD9GaWxlPScgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChyb3dbJ0ZpbGUgTmFtZSddKTtcbiAgICAgICAgcmVzdWx0ID0gKFxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2Rvd25sb2FkVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIiBkb3dubG9hZD17cm93WydGaWxlIE5hbWUnXX0+XG4gICAgICAgICAgICAgIHtjZWxsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdWaXNpdCBMYWJlbCc6XG4gICAgICBpZiAocm93WydDYW5kSUQnXSAhPT0gbnVsbCAmJiByb3dbJ1Nlc3Npb25JRCddKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb25VUkwgPSBsb3Jpcy5CYXNlVVJMICsgJy9pbnN0cnVtZW50X2xpc3QvP2NhbmRJRD0nICtcbiAgICAgICAgICByb3dbJ0NhbmRJRCddICsgJyZzZXNzaW9uSUQ9JyArIHJvd1snU2Vzc2lvbklEJ107XG4gICAgICAgIHJlc3VsdCA9IDx0ZCBjbGFzc05hbWU9e3N0eWxlfT48YSBocmVmPXtzZXNzaW9uVVJMfT57Y2VsbH08L2E+PC90ZD47XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFZGl0IE1ldGFkYXRhJzpcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSAoXG4gICAgICAgIDxUcmlnZ2VyYWJsZU1vZGFsIHRpdGxlPVwiRWRpdCBNZWRpYSBGaWxlXCIgbGFiZWw9XCJFZGl0XCI+XG4gICAgICAgICAgPE1lZGlhRWRpdEZvcm1cbiAgICAgICAgICAgIERhdGFVUkw9e2Ake2xvcmlzLkJhc2VVUkx9L21lZGlhL2FqYXgvRmlsZVVwbG9hZC5waHA/YWN0aW9uPWdldERhdGEmaWRNZWRpYUZpbGU9JHtyb3dbJ0VkaXQgTWV0YWRhdGEnXX1gfVxuICAgICAgICAgICAgYWN0aW9uPXtgJHtsb3Jpcy5CYXNlVVJMfS9tZWRpYS9hamF4L0ZpbGVVcGxvYWQucGhwP2FjdGlvbj1lZGl0YH1cbiAgICAgICAgICAgIGZldGNoRGF0YT17dGhpcy5mZXRjaERhdGEgLyogdGhpcyBzaG91bGQgYmUgcGFzc2VkIHRvIG9uU3VibWl0IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgdXBvbiByZWZhY3RvcmluZyBlZGl0Rm9ybS5qcyovfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVHJpZ2dlcmFibGVNb2RhbD5cbiAgICAgICk7XG4gICAgICByZXN1bHQgPSA8dGQgY2xhc3NOYW1lPXtzdHlsZX0+e2VkaXRCdXR0b259PC90ZD47XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIElmIGVycm9yIG9jY3VycywgcmV0dXJuIGEgbWVzc2FnZS5cbiAgICAvLyBYWFg6IFJlcGxhY2UgdGhpcyB3aXRoIGEgVUkgY29tcG9uZW50IGZvciA1MDAgZXJyb3JzLlxuICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XG4gICAgICByZXR1cm4gPGgzPkFuIGVycm9yIG9jY3VyZWQgd2hpbGUgbG9hZGluZyB0aGUgcGFnZS48L2gzPjtcbiAgICB9XG5cbiAgICAvLyBXYWl0aW5nIGZvciBhc3luYyBkYXRhIHRvIGxvYWRcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybiA8TG9hZGVyLz47XG4gICAgfVxuXG4gICAvKipcbiAgICAqIFhYWDogQ3VycmVudGx5LCB0aGUgb3JkZXIgb2YgdGhlc2UgZmllbGRzIE1VU1QgbWF0Y2ggdGhlIG9yZGVyIG9mIHRoZVxuICAgICogcXVlcmllZCBjb2x1bW5zIGluIF9zZXR1cFZhcmlhYmxlcygpIGluIG1lZGlhLmNsYXNzLmluY1xuICAgICovXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RhdGUuZGF0YS5maWVsZE9wdGlvbnM7XG4gICAgY29uc3QgZmllbGRzID0gW1xuICAgICAge2xhYmVsOiAnRmlsZSBOYW1lJywgc2hvdzogdHJ1ZSwgZmlsdGVyOiB7XG4gICAgICAgIG5hbWU6ICdmaWxlTmFtZScsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIH19LFxuICAgICAge2xhYmVsOiAnUFNDSUQnLCBzaG93OiB0cnVlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ3BzY2lkJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgfX0sXG4gICAgICB7bGFiZWw6ICdWaXNpdCBMYWJlbCcsIHNob3c6IHRydWUsIGZpbHRlcjoge1xuICAgICAgICBuYW1lOiAndmlzaXRMYWJlbCcsXG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLnZpc2l0cyxcbiAgICAgIH19LFxuICAgICAge2xhYmVsOiAnTGFuZ3VhZ2UnLCBzaG93OiB0cnVlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ2xhbmd1YWdlJyxcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMubGFuZ3VhZ2VzLFxuICAgICAgfX0sXG4gICAgICB7bGFiZWw6ICdJbnN0cnVtZW50Jywgc2hvdzogdHJ1ZSwgZmlsdGVyOiB7XG4gICAgICAgIG5hbWU6ICdpbnN0cnVtZW50JyxcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMuaW5zdHJ1bWVudHMsXG4gICAgICB9fSxcbiAgICAgIHtsYWJlbDogJ1NpdGUnLCBzaG93OiB0cnVlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ3NpdGUnLFxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucy5zaXRlcyxcbiAgICAgIH19LFxuICAgICAge2xhYmVsOiAnVXBsb2FkZWQgQnknLCBzaG93OiB0cnVlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ3VwbG9hZGVkQnknLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH19LFxuICAgICAge2xhYmVsOiAnRGF0ZSBUYWtlbicsIHNob3c6IHRydWV9LFxuICAgICAge2xhYmVsOiAnQ29tbWVudHMnLCBzaG93OiB0cnVlfSxcbiAgICAgIHtsYWJlbDogJ0RhdGUgVXBsb2FkZWQnLCBzaG93OiB0cnVlfSxcbiAgICAgIHtsYWJlbDogJ0ZpbGUgVHlwZScsIHNob3c6IGZhbHNlLCBmaWx0ZXI6IHtcbiAgICAgICAgbmFtZTogJ2ZpbGVUeXBlJyxcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMuZmlsZVR5cGVzLFxuICAgICAgfX0sXG4gICAgICB7bGFiZWw6ICdDYW5kSUQnLCBzaG93OiBmYWxzZX0sXG4gICAgICB7bGFiZWw6ICdTZXNzaW9uSUQnLCBzaG93OiBmYWxzZX0sXG4gICAgICB7bGFiZWw6ICdGaWxlIFZpc2liaWxpdHknLCBzaG93OiBmYWxzZSwgZmlsdGVyOiB7XG4gICAgICAgIG5hbWU6ICdmaWxlVmlzaWJpbGl0eScsXG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLmhpZGRlbixcbiAgICAgICAgaGlkZTogIXRoaXMucHJvcHMuaGFzUGVybWlzc2lvbignc3VwZXJVc2VyJyksXG4gICAgICB9fSxcbiAgICAgIHtsYWJlbDogJ0VkaXQgTWV0YWRhdGEnLCBzaG93OiB0cnVlfSxcbiAgICBdO1xuICAgIGNvbnN0IHRhYnMgPSBbe2lkOiAnYnJvd3NlJywgbGFiZWw6ICdCcm93c2UnfV07XG4gICAgY29uc3QgdXBsb2FkVGFiID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzUGVybWlzc2lvbignbWVkaWFfd3JpdGUnKSkge1xuICAgICAgICB0YWJzLnB1c2goe2lkOiAndXBsb2FkJywgbGFiZWw6ICdVcGxvYWQnfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRhYlBhbmUgVGFiSWQ9e3RhYnNbMV0uaWR9PlxuICAgICAgICAgICAgPE1lZGlhVXBsb2FkRm9ybVxuICAgICAgICAgICAgICBEYXRhVVJMPXtgJHtsb3Jpcy5CYXNlVVJMfS9tZWRpYS9hamF4L0ZpbGVVcGxvYWQucGhwP2FjdGlvbj1nZXREYXRhYH1cbiAgICAgICAgICAgICAgYWN0aW9uPXtgJHtsb3Jpcy5CYXNlVVJMfS9tZWRpYS9hamF4L0ZpbGVVcGxvYWQucGhwP2FjdGlvbj11cGxvYWRgfVxuICAgICAgICAgICAgICBtYXhVcGxvYWRTaXplPXt0aGlzLnN0YXRlLmRhdGEubWF4VXBsb2FkU2l6ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYnMgdGFicz17dGFic30gZGVmYXVsdFRhYj1cImJyb3dzZVwiIHVwZGF0ZVVSTD17dHJ1ZX0+XG4gICAgICAgIDxUYWJQYW5lIFRhYklkPXt0YWJzWzBdLmlkfT5cbiAgICAgICAgICA8RmlsdGVyYWJsZURhdGFUYWJsZVxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcbiAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YS5EYXRhfVxuICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICBnZXRGb3JtYXR0ZWRDZWxsPXt0aGlzLmZvcm1hdENvbHVtbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgIHt1cGxvYWRUYWIoKX1cbiAgICAgIDwvVGFicz5cbiAgICApO1xuICB9XG59XG5cbk1lZGlhSW5kZXgucHJvcFR5cGVzID0ge1xuICBkYXRhVVJMOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhc1Blcm1pc3Npb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxNZWRpYUluZGV4XG4gICAgICBkYXRhVVJMPXtgJHtsb3Jpcy5CYXNlVVJMfS9tZWRpYS8/Zm9ybWF0PWpzb25gfVxuICAgICAgaGFzUGVybWlzc2lvbj17bG9yaXMudXNlckhhc1Blcm1pc3Npb259XG4gICAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvcmlzd29ya3NwYWNlJylcbiAgKTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJ1Byb2dyZXNzQmFyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnanN4L0xvYWRlcic7XG5cbi8qKlxuICogTWVkaWEgVXBsb2FkIEZvcm1cbiAqXG4gKiBGZXRjaGVzIGRhdGEgZnJvbSBMb3JpcyBiYWNrZW5kIGFuZCBkaXNwbGF5cyBhIGZvcm0gYWxsb3dpbmdcbiAqIHRvIHVwbG9hZCBhIG1lZGlhIGZpbGUgYXR0YWNoZWQgdG8gYSBzcGVjaWZpYyBpbnN0cnVtZW50XG4gKlxuICogQGF1dGhvciBBbGV4IElsZWFcbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKlxuICogKi9cbmNsYXNzIE1lZGlhVXBsb2FkRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIERhdGE6IHt9LFxuICAgICAgZm9ybURhdGE6IHt9LFxuICAgICAgdXBsb2FkUmVzdWx0OiBudWxsLFxuICAgICAgZXJyb3JNZXNzYWdlOiBudWxsLFxuICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgbG9hZGVkRGF0YTogMCxcbiAgICAgIHVwbG9hZFByb2dyZXNzOiAtMSxcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRWYWxpZEZpbGVOYW1lID0gdGhpcy5nZXRWYWxpZEZpbGVOYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaXNWYWxpZEZpbGVOYW1lID0gdGhpcy5pc1ZhbGlkRmlsZU5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzVmFsaWRGb3JtID0gdGhpcy5pc1ZhbGlkRm9ybS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Rm9ybURhdGEgPSB0aGlzLnNldEZvcm1EYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGxvYWRGaWxlID0gdGhpcy51cGxvYWRGaWxlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgJC5hamF4KHRoaXMucHJvcHMuRGF0YVVSTCwge1xuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgRGF0YTogZGF0YSxcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIGVycm9yQ29kZSwgZXJyb3JNc2cpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhLCBlcnJvckNvZGUsIGVycm9yTXNnKTtcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3I6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGVuIGxvYWRpbmcgdGhlIGZvcm0hJyxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIERhdGEgbG9hZGluZyBlcnJvclxuICAgIGlmICh0aGlzLnN0YXRlLmVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1kYW5nZXIgdGV4dC1jZW50ZXInPlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvcn1cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFdhaXRpbmcgZm9yIGRhdGEgdG8gbG9hZFxuICAgIGlmICghdGhpcy5zdGF0ZS5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRlci8+XG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBoZWxwVGV4dCA9IChcbiAgICAgIDxzcGFuPlxuICAgICAgICBGaWxlIG5hbWUgbXVzdCBiZWdpbiB3aXRoIDxiPltQU0NJRF1fW1Zpc2l0IExhYmVsXV9bSW5zdHJ1bWVudF08L2I+PGJyLz5cbiAgICAgICAgRm9yIGV4YW1wbGUsIGZvciBjYW5kaWRhdGUgPGk+QUJDMTIzPC9pPiwgdmlzaXQgPGk+VjE8L2k+IGZvclxuICAgICAgICA8aT5Cb2R5IE1hc3MgSW5kZXg8L2k+IHRoZSBmaWxlIG5hbWUgc2hvdWxkIGJlIHByZWZpeGVkIGJ5OlxuICAgICAgICA8Yj4gQUJDMTIzX1YxX0JvZHlfTWFzc19JbmRleDwvYj48YnIvPlxuICAgICAgICBGaWxlIGNhbm5vdCBleGNlZWQge3RoaXMucHJvcHMubWF4VXBsb2FkU2l6ZX1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTggY29sLWxnLTcnPlxuICAgICAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICAgICAgbmFtZT0nbWVkaWFVcGxvYWQnXG4gICAgICAgICAgICBmaWxlVXBsb2FkPXt0cnVlfVxuICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgcmVmPSdmb3JtJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5VcGxvYWQgYSBtZWRpYSBmaWxlPC9oMz48YnIvPlxuICAgICAgICAgICAgPFN0YXRpY0VsZW1lbnRcbiAgICAgICAgICAgICAgbGFiZWw9J05vdGUnXG4gICAgICAgICAgICAgIHRleHQ9e2hlbHBUZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTZWxlY3RFbGVtZW50XG4gICAgICAgICAgICAgIG5hbWU9J3BzY2lkJ1xuICAgICAgICAgICAgICBsYWJlbD0nUFNDSUQnXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuRGF0YS5jYW5kaWRhdGVzfVxuICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5zZXRGb3JtRGF0YX1cbiAgICAgICAgICAgICAgcmVmPSdwc2NpZCdcbiAgICAgICAgICAgICAgaGFzRXJyb3I9e2ZhbHNlfVxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybURhdGEucHNjaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNlbGVjdEVsZW1lbnRcbiAgICAgICAgICAgICAgbmFtZT0ndmlzaXRMYWJlbCdcbiAgICAgICAgICAgICAgbGFiZWw9J1Zpc2l0IExhYmVsJ1xuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLkRhdGEudmlzaXRzfVxuICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5zZXRGb3JtRGF0YX1cbiAgICAgICAgICAgICAgcmVmPSd2aXNpdExhYmVsJ1xuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybURhdGEudmlzaXRMYWJlbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2VhcmNoYWJsZURyb3Bkb3duXG4gICAgICAgICAgICAgIG5hbWU9J2ZvclNpdGUnXG4gICAgICAgICAgICAgIGxhYmVsPSdTaXRlJ1xuICAgICAgICAgICAgICBwbGFjZUhvbGRlcj0nU2VhcmNoIGZvciBzaXRlJ1xuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLkRhdGEuc2l0ZXN9XG4gICAgICAgICAgICAgIHN0cmljdFNlYXJjaD17dHJ1ZX1cbiAgICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMuc2V0Rm9ybURhdGF9XG4gICAgICAgICAgICAgIHJlZj0nZm9yU2l0ZSdcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1EYXRhLmZvclNpdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNlbGVjdEVsZW1lbnRcbiAgICAgICAgICAgICAgbmFtZT0naW5zdHJ1bWVudCdcbiAgICAgICAgICAgICAgbGFiZWw9J0luc3RydW1lbnQnXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuRGF0YS5pbnN0cnVtZW50c31cbiAgICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMuc2V0Rm9ybURhdGF9XG4gICAgICAgICAgICAgIHJlZj0naW5zdHJ1bWVudCdcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybURhdGEuaW5zdHJ1bWVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RGF0ZUVsZW1lbnRcbiAgICAgICAgICAgICAgbmFtZT0nZGF0ZVRha2VuJ1xuICAgICAgICAgICAgICBsYWJlbD0nRGF0ZSBvZiBBZG1pbmlzdHJhdGlvbidcbiAgICAgICAgICAgICAgbWluWWVhcj0nMjAwMCdcbiAgICAgICAgICAgICAgbWF4WWVhcj0nMjAxNydcbiAgICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMuc2V0Rm9ybURhdGF9XG4gICAgICAgICAgICAgIHJlZj0nZGF0ZVRha2VuJ1xuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtRGF0YS5kYXRlVGFrZW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRhcmVhRWxlbWVudFxuICAgICAgICAgICAgICBuYW1lPSdjb21tZW50cydcbiAgICAgICAgICAgICAgbGFiZWw9J0NvbW1lbnRzJ1xuICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5zZXRGb3JtRGF0YX1cbiAgICAgICAgICAgICAgcmVmPSdjb21tZW50cydcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybURhdGEuY29tbWVudHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNlbGVjdEVsZW1lbnRcbiAgICAgICAgICAgICAgbmFtZT0nbGFuZ3VhZ2UnXG4gICAgICAgICAgICAgIGxhYmVsPXsnRG9jdW1lbnRcXCdzIExhbmd1YWdlJ31cbiAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5EYXRhLmxhbmd1YWdlfVxuICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5zZXRGb3JtRGF0YX1cbiAgICAgICAgICAgICAgcmVmPSdsYW5ndWFnZSdcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtRGF0YS5sYW5ndWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmlsZUVsZW1lbnRcbiAgICAgICAgICAgICAgbmFtZT0nZmlsZSdcbiAgICAgICAgICAgICAgaWQ9J21lZGlhVXBsb2FkRWwnXG4gICAgICAgICAgICAgIG9uVXNlcklucHV0PXt0aGlzLnNldEZvcm1EYXRhfVxuICAgICAgICAgICAgICByZWY9J2ZpbGUnXG4gICAgICAgICAgICAgIGxhYmVsPSdGaWxlIHRvIHVwbG9hZCdcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1EYXRhLmZpbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbkVsZW1lbnQgbGFiZWw9J1VwbG9hZCBGaWxlJy8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS05IGNvbC1zbS1vZmZzZXQtMyc+XG4gICAgICAgICAgICAgICAgPFByb2dyZXNzQmFyIHZhbHVlPXt0aGlzLnN0YXRlLnVwbG9hZFByb2dyZXNzfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgICAgICAgICAgICAgICAgICAgICAqKioqKiogICAgIEhlbHBlciBtZXRob2RzICAgICAqKioqKioqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmFsaWQgbmFtZSBmb3IgdGhlIGZpbGUgdG8gYmUgdXBsb2FkZWRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBzY2lkIC0gUFNDSUQgc2VsZWN0ZWQgZnJvbSB0aGUgZHJvcGRvd25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZpc2l0TGFiZWwgLSBWaXNpdCBsYWJlbCBzZWxlY3RlZCBmcm9tIHRoZSBkcm9wZG93blxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5zdHJ1bWVudCAtIEluc3RydW1lbnQgc2VsZWN0ZWQgZnJvbSB0aGUgZHJvcGRvd25cbiAgICogQHJldHVybiB7c3RyaW5nfSAtIEdlbmVyYXRlZCB2YWxpZCBmaWxlbmFtZSBmb3IgdGhlIGN1cnJlbnQgc2VsZWN0aW9uXG4gICAqL1xuICBnZXRWYWxpZEZpbGVOYW1lKHBzY2lkLCB2aXNpdExhYmVsLCBpbnN0cnVtZW50KSB7XG4gICAgbGV0IGZpbGVOYW1lID0gcHNjaWQgKyAnXycgKyB2aXNpdExhYmVsO1xuICAgIGlmIChpbnN0cnVtZW50KSBmaWxlTmFtZSArPSAnXycgKyBpbnN0cnVtZW50O1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IGUgLSBGb3JtIHN1Ym1pc3Npb24gZXZlbnRcbiAgICovXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGZvcm1EYXRhID0gdGhpcy5zdGF0ZS5mb3JtRGF0YTtcbiAgICBsZXQgZm9ybVJlZnMgPSB0aGlzLnJlZnM7XG4gICAgbGV0IG1lZGlhRmlsZXMgPSB0aGlzLnN0YXRlLkRhdGEubWVkaWFGaWxlcyA/IHRoaXMuc3RhdGUuRGF0YS5tZWRpYUZpbGVzIDogW107XG5cbiAgICAvLyBWYWxpZGF0ZSB0aGUgZm9ybVxuICAgIGlmICghdGhpcy5pc1ZhbGlkRm9ybShmb3JtUmVmcywgZm9ybURhdGEpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgdXBsb2FkZWQgZmlsZSBuYW1lXG4gICAgbGV0IGluc3RydW1lbnQgPSBmb3JtRGF0YS5pbnN0cnVtZW50ID8gZm9ybURhdGEuaW5zdHJ1bWVudCA6IG51bGw7XG4gICAgbGV0IGZpbGVOYW1lID0gZm9ybURhdGEuZmlsZSA/IGZvcm1EYXRhLmZpbGUubmFtZS5yZXBsYWNlKC9cXHMrL2csICdfJykgOiBudWxsO1xuICAgIGxldCByZXF1aXJlZEZpbGVOYW1lID0gdGhpcy5nZXRWYWxpZEZpbGVOYW1lKFxuICAgICAgZm9ybURhdGEucHNjaWQsIGZvcm1EYXRhLnZpc2l0TGFiZWwsIGluc3RydW1lbnRcbiAgICApO1xuICAgIGlmICghdGhpcy5pc1ZhbGlkRmlsZU5hbWUocmVxdWlyZWRGaWxlTmFtZSwgZmlsZU5hbWUpKSB7XG4gICAgICBzd2FsKFxuICAgICAgICAnSW52YWxpZCBmaWxlIG5hbWUhJyxcbiAgICAgICAgJ0ZpbGUgbmFtZSBzaG91bGQgYmVnaW4gd2l0aDogJyArIHJlcXVpcmVkRmlsZU5hbWUsXG4gICAgICAgICdlcnJvcidcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGR1cGxpY2F0ZSBmaWxlIG5hbWVzXG4gICAgbGV0IGlzRHVwbGljYXRlID0gbWVkaWFGaWxlcy5pbmRleE9mKGZpbGVOYW1lKTtcbiAgICBpZiAoaXNEdXBsaWNhdGUgPj0gMCkge1xuICAgICAgc3dhbCh7XG4gICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXG4gICAgICAgIHRleHQ6ICdBIGZpbGUgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMhXFxuIFdvdWxkIHlvdSBsaWtlIHRvIG92ZXJyaWRlIGV4aXN0aW5nIGZpbGU/JyxcbiAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgSSBhbSBzdXJlIScsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdObywgY2FuY2VsIGl0IScsXG4gICAgICB9LCBmdW5jdGlvbihpc0NvbmZpcm0pIHtcbiAgICAgICAgaWYgKGlzQ29uZmlybSkge1xuICAgICAgICAgIHRoaXMudXBsb2FkRmlsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3YWwoJ0NhbmNlbGxlZCcsICdZb3VyIGltYWdpbmFyeSBmaWxlIGlzIHNhZmUgOiknLCAnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGxvYWRGaWxlKCk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogVXBsb2FkcyB0aGUgZmlsZSB0byB0aGUgc2VydmVyXG4gICAqL1xuICB1cGxvYWRGaWxlKCkge1xuICAgIC8vIFNldCBmb3JtIGRhdGEgYW5kIHVwbG9hZCB0aGUgbWVkaWEgZmlsZVxuICAgIGxldCBmb3JtRGF0YSA9IHRoaXMuc3RhdGUuZm9ybURhdGE7XG4gICAgbGV0IGZvcm1PYmogPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gZm9ybURhdGEpIHtcbiAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSAnJykge1xuICAgICAgICBmb3JtT2JqLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6IHRoaXMucHJvcHMuYWN0aW9uLFxuICAgICAgZGF0YTogZm9ybU9iaixcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgIHhocjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIGxldCBwZXJjZW50YWdlID0gTWF0aC5yb3VuZCgoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkgKiAxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXBsb2FkUHJvZ3Jlc3M6IHBlcmNlbnRhZ2V9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4geGhyO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEFkZCBnaXQgcGZpbGUgdG8gdGhlIGxpc3Qgb2YgZXhpdGluZyBmaWxlc1xuICAgICAgICBsZXQgbWVkaWFGaWxlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5EYXRhLm1lZGlhRmlsZXMpKTtcbiAgICAgICAgbWVkaWFGaWxlcy5wdXNoKGZvcm1EYXRhLmZpbGUubmFtZSk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBhbiB1cGRhdGUgZXZlbnQgdG8gdXBkYXRlIGFsbCBvYnNlcnZlcnMgKGkuZSBEYXRhVGFibGUpXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndXBkYXRlLWRhdGF0YWJsZScpO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVkaWFGaWxlczogbWVkaWFGaWxlcyxcbiAgICAgICAgICBmb3JtRGF0YToge30sIC8vIHJlc2V0IGZvcm0gZGF0YSBhZnRlciBzdWNjZXNzZnVsIGZpbGUgdXBsb2FkXG4gICAgICAgICAgdXBsb2FkUHJvZ3Jlc3M6IC0xLFxuICAgICAgICB9KTtcbiAgICAgICAgc3dhbCgnVXBsb2FkIFN1Y2Nlc3NmdWwhJywgJycsICdzdWNjZXNzJyk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgbGV0IG1zZyA9IGVyci5yZXNwb25zZUpTT04gPyBlcnIucmVzcG9uc2VKU09OLm1lc3NhZ2UgOiAnVXBsb2FkIGVycm9yISc7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yTWVzc2FnZTogbXNnLFxuICAgICAgICAgIHVwbG9hZFByb2dyZXNzOiAtMSxcbiAgICAgICAgfSk7XG4gICAgICAgIHN3YWwobXNnLCAnJywgJ2Vycm9yJyk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBpbnB1dHRlZCBmaWxlIG5hbWUgaXMgdmFsaWRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVpcmVkRmlsZU5hbWUgLSBSZXF1aXJlZCBmaWxlIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIC0gUHJvdmlkZWQgZmlsZSBuYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gdHJ1ZSBpZiBmaWxlTmFtZSBzdGFydHMgd2l0aCByZXF1aXJlZEZpbGVOYW1lLCBmYWxzZVxuICAgKiAgIG90aGVyd2lzZVxuICAgKi9cbiAgaXNWYWxpZEZpbGVOYW1lKHJlcXVpcmVkRmlsZU5hbWUsIGZpbGVOYW1lKSB7XG4gICAgaWYgKGZpbGVOYW1lID09PSBudWxsIHx8IHJlcXVpcmVkRmlsZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGZpbGVOYW1lLmluZGV4T2YocmVxdWlyZWRGaWxlTmFtZSkgPT09IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBmb3JtXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmb3JtUmVmcyAtIE9iamVjdCBjb250YWluaW5nIHJlZmVyZW5jZXMgdG8gUmVhY3QgZm9ybSBlbGVtZW50c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZm9ybURhdGEgLSBPYmplY3QgY29udGFpbmluZyBmb3JtIGRhdGEgaW5wdXRlZCBieSB1c2VyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gdHJ1ZSBpZiBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZSBmaWxsZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgaXNWYWxpZEZvcm0oZm9ybVJlZnMsIGZvcm1EYXRhKSB7XG4gICAgbGV0IGlzVmFsaWRGb3JtID0gdHJ1ZTtcblxuICAgIGxldCByZXF1aXJlZEZpZWxkcyA9IHtcbiAgICAgIHBzY2lkOiBudWxsLFxuICAgICAgdmlzaXRMYWJlbDogbnVsbCxcbiAgICAgIGZpbGU6IG51bGwsXG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKHJlcXVpcmVkRmllbGRzKS5tYXAoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIGlmIChmb3JtRGF0YVtmaWVsZF0pIHtcbiAgICAgICAgcmVxdWlyZWRGaWVsZHNbZmllbGRdID0gZm9ybURhdGFbZmllbGRdO1xuICAgICAgfSBlbHNlIGlmIChmb3JtUmVmc1tmaWVsZF0pIHtcbiAgICAgICAgZm9ybVJlZnNbZmllbGRdLnByb3BzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgaXNWYWxpZEZvcm0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG5cbiAgICByZXR1cm4gaXNWYWxpZEZvcm07XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmb3JtIGRhdGEgYmFzZWQgb24gc3RhdGUgdmFsdWVzIG9mIGNoaWxkIGVsZW1lbnRzL2NvbXBvbmVuZXRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRWxlbWVudCAtIG5hbWUgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gc2VsZWN0ZWQgdmFsdWUgZm9yIGNvcnJlc3BvbmRpbmcgZm9ybSBlbGVtZW50XG4gICAqL1xuICBzZXRGb3JtRGF0YShmb3JtRWxlbWVudCwgdmFsdWUpIHtcbiAgICAvLyBPbmx5IGRpc3BsYXkgdmlzaXRzIGFuZCBzaXRlcyBhdmFpbGFibGUgZm9yIHRoZSBjdXJyZW50IHBzY2lkXG4gICAgbGV0IHZpc2l0TGFiZWwgPSB0aGlzLnN0YXRlLmZvcm1EYXRhLnZpc2l0TGFiZWw7XG4gICAgbGV0IHBzY2lkID0gdGhpcy5zdGF0ZS5mb3JtRGF0YS5wc2NpZDtcblxuICAgIGlmIChmb3JtRWxlbWVudCA9PT0gJ3BzY2lkJyAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuc3RhdGUuRGF0YS52aXNpdHMgPSB0aGlzLnN0YXRlLkRhdGEuc2Vzc2lvbkRhdGFbdmFsdWVdLnZpc2l0cztcbiAgICAgIHRoaXMuc3RhdGUuRGF0YS5zaXRlcyA9IHRoaXMuc3RhdGUuRGF0YS5zZXNzaW9uRGF0YVt2YWx1ZV0uc2l0ZXM7XG4gICAgICBpZiAodmlzaXRMYWJlbCkge1xuICAgICAgICB0aGlzLnN0YXRlLkRhdGEuaW5zdHJ1bWVudHMgPVxuICAgICAgICAgIHRoaXMuc3RhdGUuRGF0YS5zZXNzaW9uRGF0YVt2YWx1ZV0uaW5zdHJ1bWVudHNbdmlzaXRMYWJlbF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLkRhdGEuaW5zdHJ1bWVudHMgPVxuICAgICAgICAgIHRoaXMuc3RhdGUuRGF0YS5zZXNzaW9uRGF0YVt2YWx1ZV0uaW5zdHJ1bWVudHMuYWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmb3JtRWxlbWVudCA9PT0gJ3Zpc2l0TGFiZWwnICYmIHZhbHVlICE9PSAnJyAmJiBwc2NpZCkge1xuICAgICAgdGhpcy5zdGF0ZS5EYXRhLmluc3RydW1lbnRzID1cbiAgICAgICAgdGhpcy5zdGF0ZS5EYXRhLnNlc3Npb25EYXRhW3BzY2lkXS5pbnN0cnVtZW50c1t2YWx1ZV07XG4gICAgfVxuXG4gICAgbGV0IGZvcm1EYXRhID0gdGhpcy5zdGF0ZS5mb3JtRGF0YTtcbiAgICBmb3JtRGF0YVtmb3JtRWxlbWVudF0gPSB2YWx1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybURhdGE6IGZvcm1EYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbk1lZGlhVXBsb2FkRm9ybS5wcm9wVHlwZXMgPSB7XG4gIERhdGFVUkw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWRpYVVwbG9hZEZvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZzsiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApXG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID1cbiAgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvciAmJiBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gIDB4ZWFjNztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgdmFyIGl0ZXJhdG9yRm4gPVxuICAgIG1heWJlSXRlcmFibGUgJiZcbiAgICAoKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0pIHx8XG4gICAgICBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpdGVyYXRvckZuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuXG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKGNvbXBvbmVudCAmJiB0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKFxuICBjaGlsZHJlbixcbiAgbmFtZVNvRmFyLFxuICBjYWxsYmFjayxcbiAgdHJhdmVyc2VDb250ZXh0XG4pIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIGlmIChcbiAgICBjaGlsZHJlbiA9PT0gbnVsbCB8fFxuICAgIHR5cGUgPT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyBUaGUgZm9sbG93aW5nIGlzIGlubGluZWQgZnJvbSBSZWFjdEVsZW1lbnQuIFRoaXMgbWVhbnMgd2UgY2FuIG9wdGltaXplXG4gICAgLy8gc29tZSBjaGVja3MuIFJlYWN0IEZpYmVyIGFsc28gaW5saW5lcyB0aGlzIGxvZ2ljIGZvciBzaW1pbGFyIHB1cnBvc2VzLlxuICAgICh0eXBlID09PSAnb2JqZWN0JyAmJiBjaGlsZHJlbi4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKVxuICApIHtcbiAgICBjYWxsYmFjayhcbiAgICAgIHRyYXZlcnNlQ29udGV4dCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0ZhclxuICAgICk7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dE5hbWUsXG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICB0cmF2ZXJzZUNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzLFxuICAgICAgICAgICAgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgbGlrZWx5IHlpZWxkICcgK1xuICAgICAgICAgICAgICAndW5leHBlY3RlZCByZXN1bHRzLiBDb252ZXJ0IGl0IHRvIGEgc2VxdWVuY2UvaXRlcmFibGUgb2Yga2V5ZWQgJyArXG4gICAgICAgICAgICAgICdSZWFjdEVsZW1lbnRzIGluc3RlYWQuJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKFxuICAgICAgICAgIGNoaWxkLFxuICAgICAgICAgIG5leHROYW1lLFxuICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgIHRyYXZlcnNlQ29udGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYWRkZW5kdW0gPVxuICAgICAgICAgICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICtcbiAgICAgICAgICAnaW5zdGVhZCBvciB3cmFwIHRoZSBvYmplY3QgdXNpbmcgY3JlYXRlRnJhZ21lbnQob2JqZWN0KSBmcm9tIHRoZSAnICtcbiAgICAgICAgICAnUmVhY3QgYWRkLW9ucy4nO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcbiAgICAgIGludmFyaWFudChcbiAgICAgICAgZmFsc2UsXG4gICAgICAgICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsXG4gICAgICAgIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJ1xuICAgICAgICAgID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9J1xuICAgICAgICAgIDogY2hpbGRyZW5TdHJpbmcsXG4gICAgICAgIGFkZGVuZHVtXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgIG9sZEVsZW1lbnQsXG4gICAge2tleTogbmV3S2V5fSxcbiAgICBvbGRFbGVtZW50LnByb3BzICE9PSB1bmRlZmluZWQgPyBvbGRFbGVtZW50LnByb3BzLmNoaWxkcmVuIDogdW5kZWZpbmVkXG4gICk7XG59XG5cbnZhciBERUZBVUxUX1BPT0xfU0laRSA9IDEwO1xudmFyIERFRkFVTFRfUE9PTEVSID0gb25lQXJndW1lbnRQb29sZXI7XG5cbnZhciBvbmVBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uKGNvcHlGaWVsZHNGcm9tKSB7XG4gIHZhciBLbGFzcyA9IHRoaXM7XG4gIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIGluc3RhbmNlID0gS2xhc3MuaW5zdGFuY2VQb29sLnBvcCgpO1xuICAgIEtsYXNzLmNhbGwoaW5zdGFuY2UsIGNvcHlGaWVsZHNGcm9tKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBLbGFzcyhjb3B5RmllbGRzRnJvbSk7XG4gIH1cbn07XG5cbnZhciBhZGRQb29saW5nVG8gPSBmdW5jdGlvbiBhZGRQb29saW5nVG8oQ29weUNvbnN0cnVjdG9yLCBwb29sZXIpIHtcbiAgLy8gQ2FzdGluZyBhcyBhbnkgc28gdGhhdCBmbG93IGlnbm9yZXMgdGhlIGFjdHVhbCBpbXBsZW1lbnRhdGlvbiBhbmQgdHJ1c3RzXG4gIC8vIGl0IHRvIG1hdGNoIHRoZSB0eXBlIHdlIGRlY2xhcmVkXG4gIHZhciBOZXdLbGFzcyA9IENvcHlDb25zdHJ1Y3RvcjtcbiAgTmV3S2xhc3MuaW5zdGFuY2VQb29sID0gW107XG4gIE5ld0tsYXNzLmdldFBvb2xlZCA9IHBvb2xlciB8fCBERUZBVUxUX1BPT0xFUjtcbiAgaWYgKCFOZXdLbGFzcy5wb29sU2l6ZSkge1xuICAgIE5ld0tsYXNzLnBvb2xTaXplID0gREVGQVVMVF9QT09MX1NJWkU7XG4gIH1cbiAgTmV3S2xhc3MucmVsZWFzZSA9IHN0YW5kYXJkUmVsZWFzZXI7XG4gIHJldHVybiBOZXdLbGFzcztcbn07XG5cbnZhciBzdGFuZGFyZFJlbGVhc2VyID0gZnVuY3Rpb24gc3RhbmRhcmRSZWxlYXNlcihpbnN0YW5jZSkge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICBpbnZhcmlhbnQoXG4gICAgaW5zdGFuY2UgaW5zdGFuY2VvZiBLbGFzcyxcbiAgICAnVHJ5aW5nIHRvIHJlbGVhc2UgYW4gaW5zdGFuY2UgaW50byBhIHBvb2wgb2YgYSBkaWZmZXJlbnQgdHlwZS4nXG4gICk7XG4gIGluc3RhbmNlLmRlc3RydWN0b3IoKTtcbiAgaWYgKEtsYXNzLmluc3RhbmNlUG9vbC5sZW5ndGggPCBLbGFzcy5wb29sU2l6ZSkge1xuICAgIEtsYXNzLmluc3RhbmNlUG9vbC5wdXNoKGluc3RhbmNlKTtcbiAgfVxufTtcblxudmFyIGZvdXJBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uIGZvdXJBcmd1bWVudFBvb2xlcihhMSwgYTIsIGEzLCBhNCkge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgS2xhc3MoYTEsIGEyLCBhMywgYTQpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBNYXBCb29rS2VlcGluZyhtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgdGhpcy5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gIHRoaXMua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICB0aGlzLmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgdGhpcy5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgdGhpcy5jb3VudCA9IDA7XG59XG5NYXBCb29rS2VlcGluZy5wcm90b3R5cGUuZGVzdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gIHRoaXMua2V5UHJlZml4ID0gbnVsbDtcbiAgdGhpcy5mdW5jID0gbnVsbDtcbiAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgdGhpcy5jb3VudCA9IDA7XG59O1xuYWRkUG9vbGluZ1RvKE1hcEJvb2tLZWVwaW5nLCBmb3VyQXJndW1lbnRQb29sZXIpO1xuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdDtcbiAgdmFyIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeDtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jO1xuICB2YXIgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChcbiAgICAgIG1hcHBlZENoaWxkLFxuICAgICAgcmVzdWx0LFxuICAgICAgY2hpbGRLZXksXG4gICAgICBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnRcbiAgICApO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShcbiAgICAgICAgbWFwcGVkQ2hpbGQsXG4gICAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBrZXlQcmVmaXggK1xuICAgICAgICAgIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSlcbiAgICAgICAgICAgID8gZXNjYXBlVXNlclByb3ZpZGVkS2V5KG1hcHBlZENoaWxkLmtleSkgKyAnLydcbiAgICAgICAgICAgIDogJycpICtcbiAgICAgICAgICBjaGlsZEtleVxuICAgICAgKTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBNYXBCb29rS2VlcGluZy5nZXRQb29sZWQoXG4gICAgYXJyYXksXG4gICAgZXNjYXBlZFByZWZpeCxcbiAgICBmdW5jLFxuICAgIGNvbnRleHRcbiAgKTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgTWFwQm9va0tlZXBpbmcucmVsZWFzZSh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG52YXIgbnVtZXJpY1Byb3BlcnR5UmVnZXggPSAvXlxcZCskLztcblxudmFyIHdhcm5lZEFib3V0TnVtZXJpYyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdEZyYWdtZW50KG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcgfHwgIW9iamVjdCB8fCBBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgZmFsc2UsXG4gICAgICAnUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50IG9ubHkgYWNjZXB0cyBhIHNpbmdsZSBvYmplY3QuIEdvdDogJXMnLFxuICAgICAgb2JqZWN0XG4gICAgKTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChvYmplY3QpKSB7XG4gICAgd2FybmluZyhcbiAgICAgIGZhbHNlLFxuICAgICAgJ1JlYWN0LmFkZG9ucy5jcmVhdGVGcmFnbWVudCBkb2VzIG5vdCBhY2NlcHQgYSBSZWFjdEVsZW1lbnQgJyArXG4gICAgICAgICd3aXRob3V0IGEgd3JhcHBlciBvYmplY3QuJ1xuICAgICk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGludmFyaWFudChcbiAgICBvYmplY3Qubm9kZVR5cGUgIT09IDEsXG4gICAgJ1JlYWN0LmFkZG9ucy5jcmVhdGVGcmFnbWVudCguLi4pOiBFbmNvdW50ZXJlZCBhbiBpbnZhbGlkIGNoaWxkOyBET00gJyArXG4gICAgICAnZWxlbWVudHMgYXJlIG5vdCB2YWxpZCBjaGlsZHJlbiBvZiBSZWFjdCBjb21wb25lbnRzLidcbiAgKTtcblxuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIXdhcm5lZEFib3V0TnVtZXJpYyAmJiBudW1lcmljUHJvcGVydHlSZWdleC50ZXN0KGtleSkpIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAnUmVhY3QuYWRkb25zLmNyZWF0ZUZyYWdtZW50KC4uLik6IENoaWxkIG9iamVjdHMgc2hvdWxkIGhhdmUgJyArXG4gICAgICAgICAgICAnbm9uLW51bWVyaWMga2V5cyBzbyBvcmRlcmluZyBpcyBwcmVzZXJ2ZWQuJ1xuICAgICAgICApO1xuICAgICAgICB3YXJuZWRBYm91dE51bWVyaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKFxuICAgICAgb2JqZWN0W2tleV0sXG4gICAgICByZXN1bHQsXG4gICAgICBrZXksXG4gICAgICBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnRcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSZWFjdEZyYWdtZW50O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi42LjFcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi42LjMnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcblxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGVuYWJsZUhvb2tzID0gZmFsc2U7XG4vLyBIZWxwcyBpZGVudGlmeSBzaWRlIGVmZmVjdHMgaW4gYmVnaW4tcGhhc2UgbGlmZWN5Y2xlIGhvb2tzIGFuZCBzZXRTdGF0ZSByZWR1Y2VyczpcblxuXG4vLyBJbiBzb21lIGNhc2VzLCBTdHJpY3RNb2RlIHNob3VsZCBhbHNvIGRvdWJsZS1yZW5kZXIgbGlmZWN5Y2xlcy5cbi8vIFRoaXMgY2FuIGJlIGNvbmZ1c2luZyBmb3IgdGVzdHMgdGhvdWdoLFxuLy8gQW5kIGl0IGNhbiBiZSBiYWQgZm9yIHBlcmZvcm1hbmNlIGluIHByb2R1Y3Rpb24uXG4vLyBUaGlzIGZlYXR1cmUgZmxhZyBjYW4gYmUgdXNlZCB0byBjb250cm9sIHRoZSBiZWhhdmlvcjpcblxuXG4vLyBUbyBwcmVzZXJ2ZSB0aGUgXCJQYXVzZSBvbiBjYXVnaHQgZXhjZXB0aW9uc1wiIGJlaGF2aW9yIG9mIHRoZSBkZWJ1Z2dlciwgd2Vcbi8vIHJlcGxheSB0aGUgYmVnaW4gcGhhc2Ugb2YgYSBmYWlsZWQgY29tcG9uZW50IGluc2lkZSBpbnZva2VHdWFyZGVkQ2FsbGJhY2suXG5cblxuLy8gV2FybiBhYm91dCBkZXByZWNhdGVkLCBhc3luYy11bnNhZmUgbGlmZWN5Y2xlczsgcmVsYXRlcyB0byBSRkMgIzY6XG5cblxuLy8gR2F0aGVyIGFkdmFuY2VkIHRpbWluZyBtZXRyaWNzIGZvciBQcm9maWxlciBzdWJ0cmVlcy5cblxuXG4vLyBUcmFjZSB3aGljaCBpbnRlcmFjdGlvbnMgdHJpZ2dlciBlYWNoIGNvbW1pdC5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBSZWFjdCBGaXJlOiBwcmV2ZW50IHRoZSB2YWx1ZSBhbmQgY2hlY2tlZCBhdHRyaWJ1dGVzIGZyb20gc3luY2luZ1xuLy8gd2l0aCB0aGVpciByZWxhdGVkIERPTSBwcm9wZXJ0aWVzXG5cblxuLy8gVGhlc2UgQVBJcyB3aWxsIG5vIGxvbmdlciBiZSBcInVuc3RhYmxlXCIgaW4gdGhlIHVwY29taW5nIDE2LjcgcmVsZWFzZSxcbi8vIENvbnRyb2wgdGhpcyBiZWhhdmlvciB3aXRoIGEgZmxhZyB0byBzdXBwb3J0IDE2LjYgbWlub3IgcmVsZWFzZXMgaW4gdGhlIG1lYW53aGlsZS5cbnZhciBlbmFibGVTdGFibGVDb25jdXJyZW50TW9kZUFQSXMgPSBmYWxzZTtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvciA9IHZvaWQgMDtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLy8gUmVseWluZyBvbiB0aGUgYGludmFyaWFudCgpYCBpbXBsZW1lbnRhdGlvbiBsZXRzIHVzXG4vLyBwcmVzZXJ2ZSB0aGUgZm9ybWF0IGFuZCBwYXJhbXMgaW4gdGhlIHd3dyBidWlsZHMuXG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmdXaXRob3V0U3RhY2soY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgIC8vIENoZWNrIGJlZm9yZSB0aGUgY29uZGl0aW9uIHRvIGNhdGNoIHZpb2xhdGlvbnMgZWFybHkuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhcm5pbmdXaXRob3V0U3RhY2soKSBjdXJyZW50bHkgc3VwcG9ydHMgYXQgbW9zdCA4IGFyZ3VtZW50cy4nKTtcbiAgICB9XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgICAgfSk7XG4gICAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTtcblxuICAgICAgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUuZXJyb3IsIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2skMSA9IHdhcm5pbmdXaXRob3V0U3RhY2s7XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKSA6IHZvaWQgMDtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbi8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsLFxuICBjdXJyZW50RGlzcGF0Y2hlcjogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5cbnZhciBkZXNjcmliZUNvbXBvbmVudEZyYW1lID0gZnVuY3Rpb24gKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gIHZhciBzb3VyY2VJbmZvID0gJyc7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAge1xuICAgICAgLy8gSW4gREVWLCBpbmNsdWRlIGNvZGUgZm9yIGEgY29tbW9uIHNwZWNpYWwgY2FzZTpcbiAgICAgIC8vIHByZWZlciBcImZvbGRlci9pbmRleC5qc1wiIGluc3RlYWQgb2YganVzdCBcImluZGV4LmpzXCIuXG4gICAgICBpZiAoL15pbmRleFxcLi8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChCRUZPUkVfU0xBU0hfUkUpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgcGF0aEJlZm9yZVNsYXNoID0gbWF0Y2hbMV07XG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VJbmZvID0gJyAoYXQgJyArIGZpbGVOYW1lICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKSc7XG4gIH0gZWxzZSBpZiAob3duZXJOYW1lKSB7XG4gICAgc291cmNlSW5mbyA9ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJztcbiAgfVxuICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIHNvdXJjZUluZm87XG59O1xuXG52YXIgUmVzb2x2ZWQgPSAxO1xuXG5cbmZ1bmN0aW9uIHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudChsYXp5Q29tcG9uZW50KSB7XG4gIHJldHVybiBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFJlc29sdmVkID8gbGF6eUNvbXBvbmVudC5fcmVzdWx0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArICcoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdDb25jdXJyZW50TW9kZSc7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuQ29uc3VtZXInO1xuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcbiAgICAgICAgICB2YXIgcmVzb2x2ZWRUaGVuYWJsZSA9IHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCh0aGVuYWJsZSk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcblxudmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG5cbiAgICAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQudHlwZSk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIudHlwZSkpO1xuICAgIH1cblxuICAgIC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdFNoYXJlZEludGVybmFscywge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gd2FybmluZ1dpdGhvdXRTdGFjayQxO1xuXG57XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvd2FybmluZy1hbmQtaW52YXJpYW50LWFyZ3NcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxLmFwcGx5KHVuZGVmaW5lZCwgW2ZhbHNlLCBmb3JtYXQgKyAnJXMnXS5jb25jYXQoYXJncywgW3N0YWNrXSkpO1xuICB9O1xufVxuXG52YXIgd2FybmluZyQxID0gd2FybmluZztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdm9pZCAwO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcblxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTtcblxuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICAgIC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTtcbiAgICAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIHByb3BzID0ge307XG5cbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7XG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgUmVhY3RFbGVtZW50cyBvZiBhIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWZhY3RvcnlcbiAqL1xuXG5cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkICVzLicsIGVsZW1lbnQpIDogdm9pZCAwO1xuXG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHZvaWQgMDtcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuXG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcblxuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cblxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHZvaWQgMDtcbiAgdmFyIG5leHROYW1lID0gdm9pZCAwO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgIWRpZFdhcm5BYm91dE1hcHMgPyB3YXJuaW5nJDEoZmFsc2UsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIHVuc3VwcG9ydGVkIGFuZCB3aWxsIGxpa2VseSB5aWVsZCAnICsgJ3VuZXhwZWN0ZWQgcmVzdWx0cy4gQ29udmVydCBpdCB0byBhIHNlcXVlbmNlL2l0ZXJhYmxlIG9mIGtleWVkICcgKyAnUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcCA9IHZvaWQgMDtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyArIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJywgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nLCBhZGRlbmR1bSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sICcnLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG5cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpIDogdm9pZCAwO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICAhKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSBudWxsIHx8IHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykgOiB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcblxuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG5cbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07XG4gICAgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG4gICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX2N0b3I6IGN0b3IsXG4gICAgLy8gUmVhY3QgdXNlcyB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAhKFxuICAgICAgLy8gRG8gbm90IHdhcm4gZm9yIDAgYXJndW1lbnRzIGJlY2F1c2UgaXQgY291bGQgYmUgZHVlIHRvIHVzYWdlIG9mIHRoZSAnYXJndW1lbnRzJyBvYmplY3RcbiAgICAgIHJlbmRlci5sZW5ndGggPT09IDAgfHwgcmVuZGVyLmxlbmd0aCA9PT0gMikgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJykgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICAhKHJlbmRlci5kZWZhdWx0UHJvcHMgPT0gbnVsbCAmJiByZW5kZXIucHJvcFR5cGVzID09IG51bGwpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50RGlzcGF0Y2hlcjtcbiAgIShkaXNwYXRjaGVyICE9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ0hvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuJykgOiB2b2lkIDA7XG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIG9ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHtcbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDtcbiAgICAgIC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCBvYnNlcnZlZEJpdHMpO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgaW5pdGlhbEFjdGlvbikge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0aWFsQWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbkVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU11dGF0aW9uRWZmZWN0KGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVNZXRob2RzKHJlZiwgY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlTWV0aG9kcyhyZWYsIGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuLyoqXG4gKiBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgcHJvdmlkZXMgYSB3cmFwcGVyIGFyb3VuZCBhIGVsZW1lbnQgZmFjdG9yeVxuICogd2hpY2ggdmFsaWRhdGVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmVcbiAqIHVzZWQgb25seSBpbiBERVYgYW5kIGNvdWxkIGJlIHJlcGxhY2VkIGJ5IGEgc3RhdGljIHR5cGUgY2hlY2tlciBmb3IgbGFuZ3VhZ2VzXG4gKiB0aGF0IHN1cHBvcnQgaXQuXG4gKi9cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRQcm9wcy5fX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHNvdXJjZSA9IGVsZW1lbnRQcm9wcy5fX3NvdXJjZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gJ1xcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPCcgKyBwYXJlbnROYW1lICsgJz4uJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG5cbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7XG5cbiAgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9ICcgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gJyArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyAnLic7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0VhY2ggY2hpbGQgaW4gYW4gYXJyYXkgb3IgaXRlcmF0b3Igc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG4gIH1cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIHZhciBuYW1lID0gdm9pZCAwLFxuICAgICAgcHJvcFR5cGVzID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBDbGFzcyBvciBmdW5jdGlvbiBjb21wb25lbnRcbiAgICBuYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XG4gICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSkge1xuICAgIC8vIEZvcndhcmRSZWZcbiAgICB2YXIgZnVuY3Rpb25OYW1lID0gdHlwZS5yZW5kZXIuZGlzcGxheU5hbWUgfHwgdHlwZS5yZW5kZXIubmFtZSB8fCAnJztcbiAgICBuYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/ICdGb3J3YXJkUmVmKCcgKyBmdW5jdGlvbk5hbWUgKyAnKScgOiAnRm9yd2FyZFJlZicpO1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpO1xuXG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJzwnICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgJyAvPic7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgY3JlYXRlUmVmOiBjcmVhdGVSZWYsXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIGZvcndhcmRSZWY6IGZvcndhcmRSZWYsXG4gIGxhenk6IGxhenksXG4gIG1lbW86IG1lbW8sXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIFN1c3BlbnNlOiBSRUFDVF9TVVNQRU5TRV9UWVBFLFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uLFxuICBpc1ZhbGlkRWxlbWVudDogaXNWYWxpZEVsZW1lbnQsXG5cbiAgdmVyc2lvbjogUmVhY3RWZXJzaW9uLFxuXG4gIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOiBSZWFjdFNoYXJlZEludGVybmFsc1xufTtcblxuaWYgKGVuYWJsZVN0YWJsZUNvbmN1cnJlbnRNb2RlQVBJcykge1xuICBSZWFjdC5Db25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xuICBSZWFjdC5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59IGVsc2Uge1xuICBSZWFjdC51bnN0YWJsZV9Db25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xuICBSZWFjdC51bnN0YWJsZV9Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5cbmlmIChlbmFibGVIb29rcykge1xuICBSZWFjdC51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuICBSZWFjdC51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbiAgUmVhY3QudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuICBSZWFjdC51c2VJbXBlcmF0aXZlTWV0aG9kcyA9IHVzZUltcGVyYXRpdmVNZXRob2RzO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG4gIFJlYWN0LnVzZU1lbW8gPSB1c2VNZW1vO1xuICBSZWFjdC51c2VNdXRhdGlvbkVmZmVjdCA9IHVzZU11dGF0aW9uRWZmZWN0O1xuICBSZWFjdC51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbiAgUmVhY3QudXNlUmVmID0gdXNlUmVmO1xuICBSZWFjdC51c2VTdGF0ZSA9IHVzZVN0YXRlO1xufVxuXG5cblxudmFyIFJlYWN0JDIgPSBPYmplY3QuZnJlZXplKHtcblx0ZGVmYXVsdDogUmVhY3Rcbn0pO1xuXG52YXIgUmVhY3QkMyA9ICggUmVhY3QkMiAmJiBSZWFjdCApIHx8IFJlYWN0JDI7XG5cbi8vIFRPRE86IGRlY2lkZSBvbiB0aGUgdG9wLWxldmVsIGV4cG9ydCBmb3JtLlxuLy8gVGhpcyBpcyBoYWNreSBidXQgbWFrZXMgaXQgd29yayB3aXRoIGJvdGggUm9sbHVwIGFuZCBKZXN0LlxudmFyIHJlYWN0ID0gUmVhY3QkMy5kZWZhdWx0IHx8IFJlYWN0JDM7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3Q7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qIVxuKiBzd2VldGFsZXJ0MiB2Ny4yOS4yXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuU3dlZXRhbGVydDIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbnZhciBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG4vKipcbiAqIEZpbHRlciB0aGUgdW5pcXVlIHZhbHVlcyBpbnRvIGEgbmV3IGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKi9cblxudmFyIHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXkoYXJyKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXN1bHQuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogQ29udmVydCBOb2RlTGlzdCB0byBBcnJheVxuICogQHBhcmFtIG5vZGVMaXN0XG4gKi9cblxudmFyIHRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KG5vZGVMaXN0KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyBgaW5wdXRPcHRpb25zYCBpbnRvIGFuIGFycmF5IG9mIGBbdmFsdWUsIGxhYmVsXWBzXG4gKiBAcGFyYW0gaW5wdXRPcHRpb25zXG4gKi9cblxudmFyIGZvcm1hdElucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dE9wdGlvbnMgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgaW5wdXRPcHRpb25zW2tleV1dKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBTdGFuZGFyZGlzZSBjb25zb2xlIHdhcm5pbmdzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciB3YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG4vKipcbiAqIFByaXZhdGUgZ2xvYmFsIHN0YXRlIGZvciBgd2Fybk9uY2VgXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMgPSBbXTtcbi8qKlxuICogU2hvdyBhIGNvbnNvbGUgd2FybmluZywgYnV0IG9ubHkgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBzaG93blxuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xuXG52YXIgd2Fybk9uY2UgPSBmdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gIGlmICghKHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpICE9PSAtMSkpIHtcbiAgICBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB3YXJuKG1lc3NhZ2UpO1xuICB9XG59O1xuLyoqXG4gKiBJZiBgYXJnYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0ICh3aXRoIG5vIGFyZ3VtZW50cyBvciBjb250ZXh0KSBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gKiBPdGhlcndpc2UsIGp1c3QgcGFzcyB0aGUgdmFsdWUgdGhyb3VnaFxuICogQHBhcmFtIGFyZ1xuICovXG5cbnZhciBjYWxsSWZGdW5jdGlvbiA9IGZ1bmN0aW9uIGNhbGxJZkZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZygpIDogYXJnO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gaXNUaGVuYWJsZShhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiBfdHlwZW9mKGFyZykgPT09ICdvYmplY3QnICYmIHR5cGVvZiBhcmcudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBEaXNtaXNzUmVhc29uID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGNhbmNlbDogJ2NhbmNlbCcsXG4gIGJhY2tkcm9wOiAnb3ZlcmxheScsXG4gIGNsb3NlOiAnY2xvc2UnLFxuICBlc2M6ICdlc2MnLFxuICB0aW1lcjogJ3RpbWVyJ1xufSk7XG5cbnZhciBhcmdzVG9QYXJhbXMgPSBmdW5jdGlvbiBhcmdzVG9QYXJhbXMoYXJncykge1xuICB2YXIgcGFyYW1zID0ge307XG5cbiAgc3dpdGNoIChfdHlwZW9mKGFyZ3NbMF0pKSB7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIF9leHRlbmRzKHBhcmFtcywgYXJnc1swXSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIFsndGl0bGUnLCAnaHRtbCcsICd0eXBlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgc3dpdGNoIChfdHlwZW9mKGFyZ3NbaW5kZXhdKSkge1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBwYXJhbXNbbmFtZV0gPSBhcmdzW2luZGV4XTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIFwiLmNvbmNhdChuYW1lLCBcIiEgRXhwZWN0ZWQgXFxcInN0cmluZ1xcXCIsIGdvdCBcIikuY29uY2F0KF90eXBlb2YoYXJnc1tpbmRleF0pKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn07XG5cbi8qKlxuICogQWRhcHQgYSBsZWdhY3kgaW5wdXRWYWxpZGF0b3IgZm9yIHVzZSB3aXRoIGV4cGVjdFJlamVjdGlvbnM9ZmFsc2VcbiAqL1xudmFyIGFkYXB0SW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiBhZGFwdElucHV0VmFsaWRhdG9yKGxlZ2FjeVZhbGlkYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gYWRhcHRlZElucHV0VmFsaWRhdG9yKGlucHV0VmFsdWUsIGV4dHJhUGFyYW1zKSB7XG4gICAgcmV0dXJuIGxlZ2FjeVZhbGlkYXRvci5jYWxsKHRoaXMsIGlucHV0VmFsdWUsIGV4dHJhUGFyYW1zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSwgZnVuY3Rpb24gKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgfSk7XG4gIH07XG59O1xuXG52YXIgc3dhbFByZWZpeCA9ICdzd2FsMi0nO1xudmFyIHByZWZpeCA9IGZ1bmN0aW9uIHByZWZpeChpdGVtcykge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBpdGVtcykge1xuICAgIHJlc3VsdFtpdGVtc1tpXV0gPSBzd2FsUHJlZml4ICsgaXRlbXNbaV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBzd2FsQ2xhc3NlcyA9IHByZWZpeChbJ2NvbnRhaW5lcicsICdzaG93bicsICdoZWlnaHQtYXV0bycsICdpb3NmaXgnLCAncG9wdXAnLCAnbW9kYWwnLCAnbm8tYmFja2Ryb3AnLCAndG9hc3QnLCAndG9hc3Qtc2hvd24nLCAndG9hc3QtY29sdW1uJywgJ2ZhZGUnLCAnc2hvdycsICdoaWRlJywgJ25vYW5pbWF0aW9uJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2hlYWRlcicsICdjb250ZW50JywgJ2FjdGlvbnMnLCAnY29uZmlybScsICdjYW5jZWwnLCAnZm9vdGVyJywgJ2ljb24nLCAnaWNvbi10ZXh0JywgJ2ltYWdlJywgJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2xhYmVsJywgJ3RleHRhcmVhJywgJ2lucHV0ZXJyb3InLCAndmFsaWRhdGlvbi1tZXNzYWdlJywgJ3Byb2dyZXNzc3RlcHMnLCAnYWN0aXZlcHJvZ3Jlc3NzdGVwJywgJ3Byb2dyZXNzY2lyY2xlJywgJ3Byb2dyZXNzbGluZScsICdsb2FkaW5nJywgJ3N0eWxlZCcsICd0b3AnLCAndG9wLXN0YXJ0JywgJ3RvcC1lbmQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2NlbnRlcicsICdjZW50ZXItc3RhcnQnLCAnY2VudGVyLWVuZCcsICdjZW50ZXItbGVmdCcsICdjZW50ZXItcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdib3R0b20tZW5kJywgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICdncm93LXJvdycsICdncm93LWNvbHVtbicsICdncm93LWZ1bGxzY3JlZW4nLCAncnRsJ10pO1xudmFyIGljb25UeXBlcyA9IHByZWZpeChbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdpbmZvJywgJ3F1ZXN0aW9uJywgJ2Vycm9yJ10pO1xuXG52YXIgc3RhdGVzID0ge1xuICBwcmV2aW91c0JvZHlQYWRkaW5nOiBudWxsXG59O1xudmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufTtcbnZhciBmb2N1c0lucHV0ID0gZnVuY3Rpb24gZm9jdXNJbnB1dChpbnB1dCkge1xuICBpbnB1dC5mb2N1cygpOyAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuXG4gIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzQ1OTE1XG4gICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgaW5wdXQudmFsdWUgPSB2YWw7XG4gIH1cbn07XG5cbnZhciBhZGRPclJlbW92ZUNsYXNzID0gZnVuY3Rpb24gYWRkT3JSZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgYWRkKSB7XG4gIGlmICghdGFyZ2V0IHx8ICFjbGFzc0xpc3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICBjbGFzc0xpc3QgPSBjbGFzc0xpc3Quc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG4gIH1cblxuICBjbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHRhcmdldC5mb3JFYWNoKSB7XG4gICAgICB0YXJnZXQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBhZGQgPyBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZCA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCkge1xuICBhZGRPclJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCB0cnVlKTtcbn07XG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCkge1xuICBhZGRPclJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCBmYWxzZSk7XG59O1xudmFyIGdldENoaWxkQnlDbGFzcyA9IGZ1bmN0aW9uIGdldENoaWxkQnlDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaGFzQ2xhc3MoZWxlbS5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gZWxlbS5jaGlsZE5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyhlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBlbGVtLmlkID09PSBzd2FsQ2xhc3Nlcy5jb250ZW50ID8gJ2Jsb2NrJyA6ICdmbGV4Jztcbn07XG52YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZWxlbSkge1xuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTsgLy8gYm9ycm93ZWQgZnJvbSBqcXVlcnkgJChlbGVtKS5pcygnOnZpc2libGUnKSBpbXBsZW1lbnRhdGlvblxuXG52YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0gJiYgKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59O1xuXG52YXIgZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmNvbnRhaW5lcik7XG59O1xuXG52YXIgZWxlbWVudEJ5Q2xhc3MgPSBmdW5jdGlvbiBlbGVtZW50QnlDbGFzcyhjbGFzc05hbWUpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICByZXR1cm4gY29udGFpbmVyID8gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgY2xhc3NOYW1lKSA6IG51bGw7XG59O1xuXG52YXIgZ2V0UG9wdXAgPSBmdW5jdGlvbiBnZXRQb3B1cCgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnBvcHVwKTtcbn07XG52YXIgZ2V0SWNvbnMgPSBmdW5jdGlvbiBnZXRJY29ucygpIHtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgcmV0dXJuIHRvQXJyYXkocG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLicgKyBzd2FsQ2xhc3Nlcy5pY29uKSk7XG59O1xudmFyIGdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy50aXRsZSk7XG59O1xudmFyIGdldENvbnRlbnQgPSBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY29udGVudCk7XG59O1xudmFyIGdldEltYWdlID0gZnVuY3Rpb24gZ2V0SW1hZ2UoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pbWFnZSk7XG59O1xudmFyIGdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucHJvZ3Jlc3NzdGVwcyk7XG59O1xudmFyIGdldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xufTtcbnZhciBnZXRDb25maXJtQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbmZpcm0pO1xufTtcbnZhciBnZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiBnZXRDYW5jZWxCdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jYW5jZWwpO1xufTtcbi8qIEBkZXByZWNhdGVkICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciBnZXRCdXR0b25zV3JhcHBlciA9IGZ1bmN0aW9uIGdldEJ1dHRvbnNXcmFwcGVyKCkge1xuICB3YXJuT25jZShcInN3YWwuZ2V0QnV0dG9uc1dyYXBwZXIoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZSwgdXNlIHN3YWwuZ2V0QWN0aW9ucygpIGluc3RlYWRcIik7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKTtcbn07XG52YXIgZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKTtcbn07XG52YXIgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gZ2V0Rm9vdGVyKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuZm9vdGVyKTtcbn07XG52YXIgZ2V0Q2xvc2VCdXR0b24gPSBmdW5jdGlvbiBnZXRDbG9zZUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNsb3NlKTtcbn07XG52YXIgZ2V0Rm9jdXNhYmxlRWxlbWVudHMgPSBmdW5jdGlvbiBnZXRGb2N1c2FibGVFbGVtZW50cygpIHtcbiAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4ID0gdG9BcnJheShnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKSkgLy8gc29ydCBhY2NvcmRpbmcgdG8gdGFiaW5kZXhcbiAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBhID0gcGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuICAgIGIgPSBwYXJzZUludChiLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG5cbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4gIHZhciBvdGhlckZvY3VzYWJsZUVsZW1lbnRzID0gdG9BcnJheShnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsIFt0YWJpbmRleD1cIjBcIl0sIFtjb250ZW50ZWRpdGFibGVdLCBhdWRpb1tjb250cm9sc10sIHZpZGVvW2NvbnRyb2xzXScpKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAhPT0gJy0xJztcbiAgfSk7XG4gIHJldHVybiB1bmlxdWVBcnJheShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50cykpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gaXNWaXNpYmxlKGVsKTtcbiAgfSk7XG59O1xudmFyIGlzTW9kYWwgPSBmdW5jdGlvbiBpc01vZGFsKCkge1xuICByZXR1cm4gIWlzVG9hc3QoKSAmJiAhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xufTtcbnZhciBpc1RvYXN0ID0gZnVuY3Rpb24gaXNUb2FzdCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbn07XG52YXIgaXNMb2FkaW5nID0gZnVuY3Rpb24gaXNMb2FkaW5nKCkge1xuICByZXR1cm4gZ2V0UG9wdXAoKS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xufTtcblxuLy8gRGV0ZWN0IE5vZGUgZW52XG52YXIgaXNOb2RlRW52ID0gZnVuY3Rpb24gaXNOb2RlRW52KCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJztcbn07XG5cbnZhciBzd2VldEhUTUwgPSBcIlxcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cXFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaGVhZGVyLCBcIlxcXCI+XFxuICAgICA8dWwgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucHJvZ3Jlc3NzdGVwcywgXCJcXFwiPjwvdWw+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLmVycm9yLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XFxcIj48L3NwYW4+PC9zcGFuPlxcbiAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLnF1ZXN0aW9uLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydpY29uLXRleHQnXSwgXCJcXFwiPj88L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLndhcm5pbmcsIFwiXFxcIj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2ljb24tdGV4dCddLCBcIlxcXCI+ITwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuaW5mbywgXCJcXFwiPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi10ZXh0J10sIFwiXFxcIj5pPC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5zdWNjZXNzLCBcIlxcXCI+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXFxcIj48L3NwYW4+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtcmluZ1xcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtZml4XFxcIj48L2Rpdj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XFxcIj48L2Rpdj5cXG4gICAgIDwvZGl2PlxcbiAgICAgPGltZyBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbWFnZSwgXCJcXFwiIC8+XFxuICAgICA8aDIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiPjwvaDI+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2xvc2UsIFwiXFxcIj5cXHhENzwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiPlxcbiAgICAgPGRpdiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCI+PC9kaXY+XFxuICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaW5wdXQsIFwiXFxcIiAvPlxcbiAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZpbGUsIFwiXFxcIiAvPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCJcXFwiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIC8+XFxuICAgICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxzZWxlY3QgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuc2VsZWN0LCBcIlxcXCI+PC9zZWxlY3Q+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8bGFiZWwgZm9yPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5sYWJlbCwgXCJcXFwiPjwvc3Bhbj5cXG4gICAgIDwvbGFiZWw+XFxuICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGV4dGFyZWEsIFwiXFxcIj48L3RleHRhcmVhPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiXFxcIj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtLCBcIlxcXCI+T0s8L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jYW5jZWwsIFwiXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZvb3RlciwgXCJcXFwiPlxcbiAgIDwvZGl2PlxcbiA8L2Rpdj5cXG5cIikucmVwbGFjZSgvKF58XFxuKVxccyovZywgJycpO1xuLypcbiAqIEFkZCBtb2RhbCArIGJhY2tkcm9wIHRvIERPTVxuICovXG5cbnZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChwYXJhbXMpIHtcbiAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBwb3B1cCBpZiBpdCBleGlzdHNcbiAgdmFyIGMgPSBnZXRDb250YWluZXIoKTtcblxuICBpZiAoYykge1xuICAgIGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTtcbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ2hhcy1jb2x1bW4nXV0pO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG5cbiAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXI7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzd2VldEhUTUw7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7XG4gIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHZhciBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIHZhciBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICB2YXIgcmFuZ2UgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG4gIHZhciByYW5nZU91dHB1dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIG91dHB1dFwiKSk7XG4gIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgdmFyIGNoZWNrYm94ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMudGV4dGFyZWEpOyAvLyBhMTF5XG5cbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdyb2xlJywgcGFyYW1zLnRvYXN0ID8gJ2FsZXJ0JyA6ICdkaWFsb2cnKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwYXJhbXMudG9hc3QgPyAncG9saXRlJyA6ICdhc3NlcnRpdmUnKTtcblxuICBpZiAoIXBhcmFtcy50b2FzdCkge1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsICd0cnVlJyk7XG4gIH0gLy8gUlRMXG5cblxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0RWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpO1xuICB9XG5cbiAgdmFyIG9sZElucHV0VmFsOyAvLyBJRTExIHdvcmthcm91bmQsIHNlZSAjMTEwOSBmb3IgZGV0YWlsc1xuXG4gIHZhciByZXNldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKSB7XG4gICAgaWYgKFN3YWwuaXNWaXNpYmxlKCkgJiYgb2xkSW5wdXRWYWwgIT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBTd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBvbGRJbnB1dFZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICB9O1xuXG4gIGlucHV0Lm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgc2VsZWN0Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgY2hlY2tib3gub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcblxuICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpO1xuICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSk7XG4gICAgcmFuZ2UubmV4dFNpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcblxuICByZXR1cm4gcG9wdXA7XG59O1xuXG52YXIgcGFyc2VIdG1sVG9Db250YWluZXIgPSBmdW5jdGlvbiBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbSwgdGFyZ2V0KSB7XG4gIGlmICghcGFyYW0pIHtcbiAgICByZXR1cm4gaGlkZSh0YXJnZXQpO1xuICB9XG5cbiAgaWYgKF90eXBlb2YocGFyYW0pID09PSAnb2JqZWN0Jykge1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcblxuICAgIGlmICgwIGluIHBhcmFtKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSBpbiBwYXJhbTsgaSsrKSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbVtpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyYW0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocGFyYW0pIHtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gcGFyYW07XG4gIH1cblxuICBzaG93KHRhcmdldCk7XG59O1xuXG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCdcbiAgfTtcblxuICBmb3IgKHZhciBpIGluIHRyYW5zRW5kRXZlbnROYW1lcykge1xuICAgIGlmICh0cmFuc0VuZEV2ZW50TmFtZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgdHlwZW9mIHRlc3RFbC5zdHlsZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0cmFuc0VuZEV2ZW50TmFtZXNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSgpO1xuXG4vLyBNZWFzdXJlIHdpZHRoIG9mIHNjcm9sbGJhclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL21vZGFsLmpzI0wyNzktTDI4NlxudmFyIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICB2YXIgc3VwcG9ydHNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cztcblxuICBpZiAoc3VwcG9ydHNUb3VjaCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG59O1xuXG52YXIgcmVuZGVyQWN0aW9ucyA9IGZ1bmN0aW9uIHJlbmRlckFjdGlvbnMocGFyYW1zKSB7XG4gIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpOyAvLyBBY3Rpb25zIChidXR0b25zKSB3cmFwcGVyXG5cbiAgaWYgKCFwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gJiYgIXBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgaGlkZShhY3Rpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93KGFjdGlvbnMpO1xuICB9IC8vIENhbmNlbCBidXR0b25cblxuXG4gIGlmIChwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjYW5jZWxCdXR0b24pO1xuICB9IC8vIENvbmZpcm0gYnV0dG9uXG5cblxuICBpZiAocGFyYW1zLnNob3dDb25maXJtQnV0dG9uKSB7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY29uZmlybUJ1dHRvbik7XG4gIH0gLy8gRWRpdCB0ZXh0IG9uIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG5cblxuICBjb25maXJtQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jb25maXJtQnV0dG9uVGV4dDtcbiAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jYW5jZWxCdXR0b25UZXh0OyAvLyBBUklBIGxhYmVscyBmb3IgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcblxuICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jb25maXJtQnV0dG9uQXJpYUxhYmVsKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jYW5jZWxCdXR0b25BcmlhTGFiZWwpOyAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuXG4gIGNvbmZpcm1CdXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29uZmlybTtcbiAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgcGFyYW1zLmNvbmZpcm1CdXR0b25DbGFzcyk7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jYW5jZWw7XG4gIGFkZENsYXNzKGNhbmNlbEJ1dHRvbiwgcGFyYW1zLmNhbmNlbEJ1dHRvbkNsYXNzKTsgLy8gQnV0dG9ucyBzdHlsaW5nXG5cbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGFkZENsYXNzKFtjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpOyAvLyBCdXR0b25zIGJhY2tncm91bmQgY29sb3JzXG5cbiAgICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3IpIHtcbiAgICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3I7XG4gICAgfSAvLyBMb2FkaW5nIHN0YXRlXG5cblxuICAgIHZhciBjb25maXJtQnV0dG9uQmFja2dyb3VuZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29uZmlybUJ1dHRvbikuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvcjtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBjb25maXJtQnV0dG9uQmFja2dyb3VuZENvbG9yO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2FuY2VsQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gIH1cbn07XG5cbnZhciByZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gcmVuZGVyQ29udGVudChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCkucXVlcnlTZWxlY3RvcignIycgKyBzd2FsQ2xhc3Nlcy5jb250ZW50KTsgLy8gQ29udGVudCBhcyBIVE1MXG5cbiAgaWYgKHBhcmFtcy5odG1sKSB7XG4gICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmh0bWwsIGNvbnRlbnQpOyAvLyBDb250ZW50IGFzIHBsYWluIHRleHRcbiAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dDtcbiAgICBzaG93KGNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY29udGVudCk7XG4gIH1cbn07XG5cbnZhciByZW5kZXJJY29uID0gZnVuY3Rpb24gcmVuZGVySWNvbihwYXJhbXMpIHtcbiAgdmFyIGljb25zID0gZ2V0SWNvbnMoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaGlkZShpY29uc1tpXSk7XG4gIH1cblxuICBpZiAocGFyYW1zLnR5cGUpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoaWNvblR5cGVzKS5pbmRleE9mKHBhcmFtcy50eXBlKSAhPT0gLTEpIHtcbiAgICAgIHZhciBpY29uID0gU3dhbC5nZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiLlwiKS5jb25jYXQoaWNvblR5cGVzW3BhcmFtcy50eXBlXSkpO1xuICAgICAgc2hvdyhpY29uKTsgLy8gQW5pbWF0ZSBpY29uXG5cbiAgICAgIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgICAgIGFkZENsYXNzKGljb24sIFwic3dhbDItYW5pbWF0ZS1cIi5jb25jYXQocGFyYW1zLnR5cGUsIFwiLWljb25cIikpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcihcIlVua25vd24gdHlwZSEgRXhwZWN0ZWQgXFxcInN1Y2Nlc3NcXFwiLCBcXFwiZXJyb3JcXFwiLCBcXFwid2FybmluZ1xcXCIsIFxcXCJpbmZvXFxcIiBvciBcXFwicXVlc3Rpb25cXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChwYXJhbXMudHlwZSwgXCJcXFwiXCIpKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciByZW5kZXJJbWFnZSA9IGZ1bmN0aW9uIHJlbmRlckltYWdlKHBhcmFtcykge1xuICB2YXIgaW1hZ2UgPSBnZXRJbWFnZSgpO1xuXG4gIGlmIChwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQpO1xuICAgIHNob3coaW1hZ2UpO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZVdpZHRoKSB7XG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcGFyYW1zLmltYWdlV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5pbWFnZUhlaWdodCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBwYXJhbXMuaW1hZ2VIZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgIH1cblxuICAgIGltYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmltYWdlO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZUNsYXNzKSB7XG4gICAgICBhZGRDbGFzcyhpbWFnZSwgcGFyYW1zLmltYWdlQ2xhc3MpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoaWRlKGltYWdlKTtcbiAgfVxufTtcblxudmFyIHJlbmRlclByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiByZW5kZXJQcm9ncmVzc1N0ZXBzKHBhcmFtcykge1xuICB2YXIgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lciA9IGdldFByb2dyZXNzU3RlcHMoKTtcbiAgdmFyIGN1cnJlbnRQcm9ncmVzc1N0ZXAgPSBwYXJzZUludChwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCA9PT0gbnVsbCA/IFN3YWwuZ2V0UXVldWVTdGVwKCkgOiBwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCwgMTApO1xuXG4gIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwcyAmJiBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICBzaG93KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoY3VycmVudFByb2dyZXNzU3RlcCA+PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICAgIHdhcm4oJ0ludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggJyArICcoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKScpO1xuICAgIH1cblxuICAgIHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGFkZENsYXNzKGNpcmNsZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NjaXJjbGUpO1xuICAgICAgY2lyY2xlLmlubmVySFRNTCA9IHN0ZXA7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudFByb2dyZXNzU3RlcCkge1xuICAgICAgICBhZGRDbGFzcyhjaXJjbGUsIHN3YWxDbGFzc2VzLmFjdGl2ZXByb2dyZXNzc3RlcCk7XG4gICAgICB9XG5cbiAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcblxuICAgICAgaWYgKGluZGV4ICE9PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgYWRkQ2xhc3MobGluZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NsaW5lKTtcblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSkge1xuICAgICAgICAgIGxpbmUuc3R5bGUud2lkdGggPSBwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICB9XG59O1xuXG52YXIgcmVuZGVyVGl0bGUgPSBmdW5jdGlvbiByZW5kZXJUaXRsZShwYXJhbXMpIHtcbiAgdmFyIHRpdGxlID0gZ2V0VGl0bGUoKTtcblxuICBpZiAocGFyYW1zLnRpdGxlVGV4dCkge1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHQ7XG4gIH0gZWxzZSBpZiAocGFyYW1zLnRpdGxlKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMudGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJhbXMudGl0bGUgPSBwYXJhbXMudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxiciAvPicpO1xuICAgIH1cblxuICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy50aXRsZSwgdGl0bGUpO1xuICB9XG59O1xuXG52YXIgZml4U2Nyb2xsYmFyID0gZnVuY3Rpb24gZml4U2Nyb2xsYmFyKCkge1xuICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG5cblxuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgKyBtZWFzdXJlU2Nyb2xsYmFyKCkgKyAncHgnO1xuICB9XG59O1xudmFyIHVuZG9TY3JvbGxiYXIgPSBmdW5jdGlvbiB1bmRvU2Nyb2xsYmFyKCkge1xuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nO1xuICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbDtcbiAgfVxufTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIGlPU2ZpeCA9IGZ1bmN0aW9uIGlPU2ZpeCgpIHtcbiAgdmFyIGlPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW07XG5cbiAgaWYgKGlPUyAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IG9mZnNldCAqIC0xICsgJ3B4JztcbiAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICB9XG59O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIHVuZG9JT1NmaXggPSBmdW5jdGlvbiB1bmRvSU9TZml4KCkge1xuICBpZiAoaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IG9mZnNldCAqIC0xO1xuICB9XG59O1xuXG52YXIgaXNJRTExID0gZnVuY3Rpb24gaXNJRTExKCkge1xuICByZXR1cm4gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG59OyAvLyBGaXggSUUxMSBjZW50ZXJpbmcgc3dlZXRhbGVydDIvaXNzdWVzLzkzM1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbnZhciBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUgPSBmdW5jdGlvbiBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUoKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgY29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdhbGlnbi1pdGVtcycpO1xuXG4gIGlmIChwb3B1cC5vZmZzZXRUb3AgPCAwKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSAnZmxleC1zdGFydCc7XG4gIH1cbn07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbnZhciBJRWZpeCA9IGZ1bmN0aW9uIElFZml4KCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJRTExKCkpIHtcbiAgICBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4VmVydGljYWxQb3NpdGlvbklFKTtcbiAgfVxufTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciB1bmRvSUVmaXggPSBmdW5jdGlvbiB1bmRvSUVmaXgoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0lFMTEoKSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpO1xuICB9XG59O1xuXG4vLyBBZGRpbmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdG8gZWxlbWVudHMgb3V0c2lkZSBvZiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyBlbnN1cmVzIHRoYXRcbi8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4vLyByZWFkZXLigJlzIGxpc3Qgb2YgZWxlbWVudHMgKGhlYWRpbmdzLCBmb3JtIGNvbnRyb2xzLCBsYW5kbWFya3MsIGV0Yy4pIGluIHRoZSBkb2N1bWVudC5cblxudmFyIHNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiBzZXRBcmlhSGlkZGVuKCkge1xuICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsID09PSBnZXRDb250YWluZXIoKSB8fCBlbC5jb250YWlucyhnZXRDb250YWluZXIoKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpO1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9KTtcbn07XG52YXIgdW5zZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gdW5zZXRBcmlhSGlkZGVuKCkge1xuICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMDtcblxudmFyIGdsb2JhbFN0YXRlID0ge307XG52YXIgcmVzdG9yZUFjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiByZXN0b3JlQWN0aXZlRWxlbWVudCgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIHggPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICB2YXIgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIFJFU1RPUkVfRk9DVVNfVElNRU9VVCk7IC8vIGlzc3Vlcy85MDBcblxuICAgIGlmICh0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBJRSBkb2Vzbid0IGhhdmUgc2Nyb2xsWC9zY3JvbGxZIHN1cHBvcnRcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KTtcbiAgICB9XG4gIH0pO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbG9zZSBzd2VldEFsZXJ0XG4gKi9cblxudmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2Uob25DbG9zZSwgb25BZnRlckNsb3NlKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICBpZiAoIXBvcHVwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG9uQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIG9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvbkNsb3NlKHBvcHVwKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5zaG93KTtcbiAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpO1xuXG4gIHZhciByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUgPSBmdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoKSB7XG4gICAgaWYgKCFpc1RvYXN0KCkpIHtcbiAgICAgIHJlc3RvcmVBY3RpdmVFbGVtZW50KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyT25BZnRlckNsb3NlKG9uQWZ0ZXJDbG9zZSk7XG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmlnZ2VyT25BZnRlckNsb3NlKG9uQWZ0ZXJDbG9zZSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXMuc2hvd24sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXV0pO1xuXG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgdW5kb1Njcm9sbGJhcigpO1xuICAgICAgdW5kb0lPU2ZpeCgpO1xuICAgICAgdW5kb0lFZml4KCk7XG4gICAgICB1bnNldEFyaWFIaWRkZW4oKTtcbiAgICB9XG4gIH07IC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcblxuXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcblxuICAgICAgaWYgKGhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBpbW1lZGlhdGVseVxuICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSgpO1xuICB9XG59O1xuXG52YXIgdHJpZ2dlck9uQWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uIHRyaWdnZXJPbkFmdGVyQ2xvc2Uob25BZnRlckNsb3NlKSB7XG4gIGlmIChvbkFmdGVyQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIG9uQWZ0ZXJDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25BZnRlckNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHN3YWwyIHBvcHVwIGlzIHNob3duXG4gKi9cblxudmFyIGlzVmlzaWJsZSQxID0gZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xuICByZXR1cm4gISFnZXRQb3B1cCgpO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICovXG5cbnZhciBjbGlja0NvbmZpcm0gPSBmdW5jdGlvbiBjbGlja0NvbmZpcm0oKSB7XG4gIHJldHVybiBnZXRDb25maXJtQnV0dG9uKCkuY2xpY2soKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICovXG5cbnZhciBjbGlja0NhbmNlbCA9IGZ1bmN0aW9uIGNsaWNrQ2FuY2VsKCkge1xuICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCkuY2xpY2soKTtcbn07XG5cbmZ1bmN0aW9uIGZpcmUoKSB7XG4gIHZhciBTd2FsID0gdGhpcztcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QoU3dhbCwgYXJncyk7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBhIFN3YWwgY2xhc3MgbWFraW5nIGl0IGFibGUgdG8gYmUgaW5zdGFudGlhdGVkIHdpdGhvdXQgdGhlIGBuZXdgIGtleXdvcmQgKGFuZCB0aHVzIHdpdGhvdXQgYFN3YWwuZmlyZWApXG4gKiBAcGFyYW0gUGFyZW50U3dhbFxuICogQHJldHVybnMge05vTmV3S2V5d29yZFN3YWx9XG4gKi9cbmZ1bmN0aW9uIHdpdGhOb05ld0tleXdvcmQoUGFyZW50U3dhbCkge1xuICB2YXIgTm9OZXdLZXl3b3JkU3dhbCA9IGZ1bmN0aW9uIE5vTmV3S2V5d29yZFN3YWwoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOb05ld0tleXdvcmRTd2FsKSkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoTm9OZXdLZXl3b3JkU3dhbCwgYXJncyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKE5vTmV3S2V5d29yZFN3YWwpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIE5vTmV3S2V5d29yZFN3YWwucHJvdG90eXBlID0gX2V4dGVuZHMoT2JqZWN0LmNyZWF0ZShQYXJlbnRTd2FsLnByb3RvdHlwZSksIHtcbiAgICBjb25zdHJ1Y3RvcjogTm9OZXdLZXl3b3JkU3dhbFxuICB9KTtcblxuICBpZiAodHlwZW9mIE9iamVjdC5zZXRQcm90b3R5cGVPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihOb05ld0tleXdvcmRTd2FsLCBQYXJlbnRTd2FsKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBbmRyb2lkIDQuNFxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBOb05ld0tleXdvcmRTd2FsLl9fcHJvdG9fXyA9IFBhcmVudFN3YWw7XG4gIH1cblxuICByZXR1cm4gTm9OZXdLZXl3b3JkU3dhbDtcbn1cblxudmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gIHRpdGxlOiAnJyxcbiAgdGl0bGVUZXh0OiAnJyxcbiAgdGV4dDogJycsXG4gIGh0bWw6ICcnLFxuICBmb290ZXI6ICcnLFxuICB0eXBlOiBudWxsLFxuICB0b2FzdDogZmFsc2UsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgdGFyZ2V0OiAnYm9keScsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBhbmltYXRpb246IHRydWUsXG4gIGhlaWdodEF1dG86IHRydWUsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgc3RvcEtleWRvd25Qcm9wYWdhdGlvbjogdHJ1ZSxcbiAga2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTogZmFsc2UsXG4gIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgcHJlQ29uZmlybTogbnVsbCxcbiAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjb25maXJtQnV0dG9uQ29sb3I6IG51bGwsXG4gIGNvbmZpcm1CdXR0b25DbGFzczogbnVsbCxcbiAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNhbmNlbEJ1dHRvbkNvbG9yOiBudWxsLFxuICBjYW5jZWxCdXR0b25DbGFzczogbnVsbCxcbiAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gIHJldmVyc2VCdXR0b25zOiBmYWxzZSxcbiAgZm9jdXNDb25maXJtOiB0cnVlLFxuICBmb2N1c0NhbmNlbDogZmFsc2UsXG4gIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgdGhpcyBkaWFsb2cnLFxuICBzaG93TG9hZGVyT25Db25maXJtOiBmYWxzZSxcbiAgaW1hZ2VVcmw6IG51bGwsXG4gIGltYWdlV2lkdGg6IG51bGwsXG4gIGltYWdlSGVpZ2h0OiBudWxsLFxuICBpbWFnZUFsdDogJycsXG4gIGltYWdlQ2xhc3M6IG51bGwsXG4gIHRpbWVyOiBudWxsLFxuICB3aWR0aDogbnVsbCxcbiAgcGFkZGluZzogbnVsbCxcbiAgYmFja2dyb3VuZDogbnVsbCxcbiAgaW5wdXQ6IG51bGwsXG4gIGlucHV0UGxhY2Vob2xkZXI6ICcnLFxuICBpbnB1dFZhbHVlOiAnJyxcbiAgaW5wdXRPcHRpb25zOiB7fSxcbiAgaW5wdXRBdXRvVHJpbTogdHJ1ZSxcbiAgaW5wdXRDbGFzczogbnVsbCxcbiAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgaW5wdXRWYWxpZGF0b3I6IG51bGwsXG4gIHZhbGlkYXRpb25NZXNzYWdlOiBudWxsLFxuICBncm93OiBmYWxzZSxcbiAgcG9zaXRpb246ICdjZW50ZXInLFxuICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgY3VycmVudFByb2dyZXNzU3RlcDogbnVsbCxcbiAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiBudWxsLFxuICBvbkJlZm9yZU9wZW46IG51bGwsXG4gIG9uQWZ0ZXJDbG9zZTogbnVsbCxcbiAgb25PcGVuOiBudWxsLFxuICBvbkNsb3NlOiBudWxsLFxuICB1c2VSZWplY3Rpb25zOiBmYWxzZSxcbiAgZXhwZWN0UmVqZWN0aW9uczogZmFsc2Vcbn07XG52YXIgZGVwcmVjYXRlZFBhcmFtcyA9IFsndXNlUmVqZWN0aW9ucycsICdleHBlY3RSZWplY3Rpb25zJywgJ2V4dHJhUGFyYW1zJ107XG52YXIgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMgPSBbJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2FsbG93RW50ZXJLZXknLCAnYmFja2Ryb3AnLCAnZm9jdXNDb25maXJtJywgJ2ZvY3VzQ2FuY2VsJywgJ2hlaWdodEF1dG8nLCAna2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSddO1xuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZWZhdWx0UGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtTmFtZSkgfHwgcGFyYW1OYW1lID09PSAnZXh0cmFQYXJhbXMnO1xufTtcbi8qKlxuICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNEZXByZWNhdGVkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtcy5pbmRleE9mKHBhcmFtTmFtZSkgIT09IC0xO1xufTtcbi8qKlxuICogU2hvdyByZWxldmFudCB3YXJuaW5ncyBmb3IgZ2l2ZW4gcGFyYW1zXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICovXG5cbnZhciBzaG93V2FybmluZ3NGb3JQYXJhbXMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JQYXJhbXMocGFyYW1zKSB7XG4gIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oXCJVbmtub3duIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudG9hc3QgJiYgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMuaW5kZXhPZihwYXJhbSkgIT09IC0xKSB7XG4gICAgICB3YXJuKFwiVGhlIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2Fybk9uY2UoXCJUaGUgcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cIikpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGRlcHJlY2F0aW9uV2FybmluZyA9IFwiXFxcInNldERlZmF1bHRzXFxcIiAmIFxcXCJyZXNldERlZmF1bHRzXFxcIiBtZXRob2RzIGFyZSBkZXByZWNhdGVkIGluIGZhdm9yIG9mIFxcXCJtaXhpblxcXCIgbWV0aG9kIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gRm9yIG5ldyBwcm9qZWN0cywgdXNlIFxcXCJtaXhpblxcXCIuIEZvciBwYXN0IHByb2plY3RzIGFscmVhZHkgdXNpbmcgXFxcInNldERlZmF1bHRzXFxcIiwgc3VwcG9ydCB3aWxsIGJlIHByb3ZpZGVkIHRocm91Z2ggYW4gYWRkaXRpb25hbCBwYWNrYWdlLlwiO1xudmFyIGRlZmF1bHRzID0ge307XG5mdW5jdGlvbiB3aXRoR2xvYmFsRGVmYXVsdHMoUGFyZW50U3dhbCkge1xuICB2YXIgU3dhbFdpdGhHbG9iYWxEZWZhdWx0cyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9QYXJlbnRTd2FsKSB7XG4gICAgX2luaGVyaXRzKFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMsIF9QYXJlbnRTd2FsKTtcblxuICAgIGZ1bmN0aW9uIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dhbFdpdGhHbG9iYWxEZWZhdWx0cyk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU3dhbFdpdGhHbG9iYWxEZWZhdWx0cykuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMsIFt7XG4gICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMucHJvdG90eXBlKSwgXCJfbWFpblwiLCB0aGlzKS5jYWxsKHRoaXMsIF9leHRlbmRzKHt9LCBkZWZhdWx0cywgcGFyYW1zKSk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwic2V0RGVmYXVsdHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0cyhwYXJhbXMpIHtcbiAgICAgICAgd2Fybk9uY2UoZGVwcmVjYXRpb25XYXJuaW5nKTtcblxuICAgICAgICBpZiAoIXBhcmFtcyB8fCBfdHlwZW9mKHBhcmFtcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU3dlZXRBbGVydDI6IFRoZSBhcmd1bWVudCBmb3Igc2V0RGVmYXVsdHMoKSBpcyByZXF1aXJlZCBhbmQgaGFzIHRvIGJlIGEgb2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzaG93V2FybmluZ3NGb3JQYXJhbXMocGFyYW1zKTsgLy8gYXNzaWduIHZhbGlkIHBhcmFtcyBmcm9tIGBwYXJhbXNgIHRvIGBkZWZhdWx0c2BcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgaWYgKFBhcmVudFN3YWwuaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgICAgICAgIGRlZmF1bHRzW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIHdhcm5PbmNlKGRlcHJlY2F0aW9uV2FybmluZyk7XG4gICAgICAgIGRlZmF1bHRzID0ge307XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHM7XG4gIH0oUGFyZW50U3dhbCk7IC8vIFNldCBkZWZhdWx0IHBhcmFtcyBpZiBgd2luZG93Ll9zd2FsRGVmYXVsdHNgIGlzIGFuIG9iamVjdFxuXG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIF90eXBlb2Yod2luZG93Ll9zd2FsRGVmYXVsdHMpID09PSAnb2JqZWN0Jykge1xuICAgIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMuc2V0RGVmYXVsdHMod2luZG93Ll9zd2FsRGVmYXVsdHMpO1xuICB9XG5cbiAgcmV0dXJuIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICogVXNlZnVsIGZvciByZXVzaW5nIFN3YWwgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBCZWZvcmU6XG4gKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBTd2FsKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JyB9KVxuICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBTd2FsKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nIH0pXG4gKlxuICogQWZ0ZXI6XG4gKiBjb25zdCBUZXh0UHJvbXB0ID0gU3dhbC5taXhpbih7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfSlcbiAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycpXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JylcbiAqXG4gKiBAcGFyYW0gbWl4aW5QYXJhbXNcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihtaXhpblBhcmFtcykge1xuICByZXR1cm4gd2l0aE5vTmV3S2V5d29yZChcbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX3RoaXMpIHtcbiAgICBfaW5oZXJpdHMoTWl4aW5Td2FsLCBfdGhpcyk7XG5cbiAgICBmdW5jdGlvbiBNaXhpblN3YWwoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWl4aW5Td2FsKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNaXhpblN3YWwpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNaXhpblN3YWwsIFt7XG4gICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1peGluU3dhbC5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIG1peGluUGFyYW1zLCBwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWl4aW5Td2FsO1xuICB9KHRoaXMpKTtcbn1cblxuLy8gcHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIHRoZSBxdWV1ZSBmZWF0dXJlXG52YXIgY3VycmVudFN0ZXBzID0gW107XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IHBvcHVwc1xuICovXG5cbnZhciBxdWV1ZSA9IGZ1bmN0aW9uIHF1ZXVlKHN0ZXBzKSB7XG4gIHZhciBzd2FsID0gdGhpcztcbiAgY3VycmVudFN0ZXBzID0gc3RlcHM7XG5cbiAgdmFyIHJlc2V0UXVldWUgPSBmdW5jdGlvbiByZXNldFF1ZXVlKCkge1xuICAgIGN1cnJlbnRTdGVwcyA9IFtdO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbiAgfTtcblxuICB2YXIgcXVldWVSZXN1bHQgPSBbXTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgKGZ1bmN0aW9uIHN0ZXAoaSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChpIDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJywgaSk7XG4gICAgICAgIHN3YWwoY3VycmVudFN0ZXBzW2ldKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHF1ZXVlUmVzdWx0LnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIHN0ZXAoaSArIDEsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGRpc21pc3M6IHJlc3VsdC5kaXNtaXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogcXVldWVSZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkoMCk7XG4gIH0pO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGluZGV4IG9mIGN1cnJlbnQgcG9wdXAgaW4gcXVldWVcbiAqL1xuXG52YXIgZ2V0UXVldWVTdGVwID0gZnVuY3Rpb24gZ2V0UXVldWVTdGVwKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGluc2VydGluZyBhIHBvcHVwIHRvIHRoZSBxdWV1ZVxuICovXG5cbnZhciBpbnNlcnRRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBpbnNlcnRRdWV1ZVN0ZXAoc3RlcCwgaW5kZXgpIHtcbiAgaWYgKGluZGV4ICYmIGluZGV4IDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgIHJldHVybiBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50U3RlcHMucHVzaChzdGVwKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBkZWxldGluZyBhIHBvcHVwIGZyb20gdGhlIHF1ZXVlXG4gKi9cblxudmFyIGRlbGV0ZVF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGRlbGV0ZVF1ZXVlU3RlcChpbmRleCkge1xuICBpZiAodHlwZW9mIGN1cnJlbnRTdGVwc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3VycmVudFN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbi8qKlxuICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICovXG5cbnZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uIHNob3dMb2FkaW5nKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmICghcG9wdXApIHtcbiAgICBTd2FsKCcnKTtcbiAgfVxuXG4gIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gIHNob3coYWN0aW9ucyk7XG4gIHNob3coY29uZmlybUJ1dHRvbik7XG4gIGFkZENsYXNzKFtwb3B1cCwgYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCB0cnVlKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWJ1c3knLCB0cnVlKTtcbiAgcG9wdXAuZm9jdXMoKTtcbn07XG5cbi8qKlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXMgc2V0LCByZXR1cm5zIG51bWJlciBvcyBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBPdGhlcndpc2UsIHJldHVybnMgbnVsbC5cbiAqL1xuXG52YXIgZ2V0VGltZXJMZWZ0ID0gZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmdldFRpbWVyTGVmdCgpO1xufTtcblxuXG5cbnZhciBzdGF0aWNNZXRob2RzID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGlzVmFsaWRQYXJhbWV0ZXI6IGlzVmFsaWRQYXJhbWV0ZXIsXG5cdGlzRGVwcmVjYXRlZFBhcmFtZXRlcjogaXNEZXByZWNhdGVkUGFyYW1ldGVyLFxuXHRhcmdzVG9QYXJhbXM6IGFyZ3NUb1BhcmFtcyxcblx0YWRhcHRJbnB1dFZhbGlkYXRvcjogYWRhcHRJbnB1dFZhbGlkYXRvcixcblx0Y2xvc2U6IGNsb3NlLFxuXHRjbG9zZVBvcHVwOiBjbG9zZSxcblx0Y2xvc2VNb2RhbDogY2xvc2UsXG5cdGNsb3NlVG9hc3Q6IGNsb3NlLFxuXHRpc1Zpc2libGU6IGlzVmlzaWJsZSQxLFxuXHRjbGlja0NvbmZpcm06IGNsaWNrQ29uZmlybSxcblx0Y2xpY2tDYW5jZWw6IGNsaWNrQ2FuY2VsLFxuXHRnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcblx0Z2V0UG9wdXA6IGdldFBvcHVwLFxuXHRnZXRUaXRsZTogZ2V0VGl0bGUsXG5cdGdldENvbnRlbnQ6IGdldENvbnRlbnQsXG5cdGdldEltYWdlOiBnZXRJbWFnZSxcblx0Z2V0SWNvbnM6IGdldEljb25zLFxuXHRnZXRDbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24sXG5cdGdldEJ1dHRvbnNXcmFwcGVyOiBnZXRCdXR0b25zV3JhcHBlcixcblx0Z2V0QWN0aW9uczogZ2V0QWN0aW9ucyxcblx0Z2V0Q29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbixcblx0Z2V0Q2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24sXG5cdGdldEZvb3RlcjogZ2V0Rm9vdGVyLFxuXHRnZXRGb2N1c2FibGVFbGVtZW50czogZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG5cdGdldFZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSxcblx0aXNMb2FkaW5nOiBpc0xvYWRpbmcsXG5cdGZpcmU6IGZpcmUsXG5cdG1peGluOiBtaXhpbixcblx0cXVldWU6IHF1ZXVlLFxuXHRnZXRRdWV1ZVN0ZXA6IGdldFF1ZXVlU3RlcCxcblx0aW5zZXJ0UXVldWVTdGVwOiBpbnNlcnRRdWV1ZVN0ZXAsXG5cdGRlbGV0ZVF1ZXVlU3RlcDogZGVsZXRlUXVldWVTdGVwLFxuXHRzaG93TG9hZGluZzogc2hvd0xvYWRpbmcsXG5cdGVuYWJsZUxvYWRpbmc6IHNob3dMb2FkaW5nLFxuXHRnZXRUaW1lckxlZnQ6IGdldFRpbWVyTGVmdFxufSk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9SaWltL3N5bWJvbC1wb2x5ZmlsbC9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIF9TeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nID8gU3ltYm9sIDogZnVuY3Rpb24gKCkge1xuICB2YXIgaWRDb3VudGVyID0gMDtcblxuICBmdW5jdGlvbiBfU3ltYm9sKGtleSkge1xuICAgIHJldHVybiAnX18nICsga2V5ICsgJ18nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU5KSArICdfJyArICsraWRDb3VudGVyICsgJ19fJztcbiAgfVxuXG4gIF9TeW1ib2wuaXRlcmF0b3IgPSBfU3ltYm9sKCdTeW1ib2wuaXRlcmF0b3InKTtcbiAgcmV0dXJuIF9TeW1ib2w7XG59KCk7XG5cbi8vIFdlYWtNYXAgcG9seWZpbGwsIG5lZWRlZCBmb3IgQW5kcm9pZCA0LjRcbi8vIFJlbGF0ZWQgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTA3MVxuLy8gaHR0cDovL3dlYnJlZmxlY3Rpb24uYmxvZ3Nwb3QuZmkvMjAxNS8wNC9hLXdlYWttYXAtcG9seWZpbGwtaW4tMjAtbGluZXMtb2YtY29kZS5odG1sXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgV2Vha01hcCQxID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogZnVuY3Rpb24gKHMsIGRQLCBoT1ApIHtcbiAgZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgICBkUCh0aGlzLCBzLCB7XG4gICAgICB2YWx1ZTogX1N5bWJvbCgnV2Vha01hcCcpXG4gICAgfSk7XG4gIH1cblxuICBXZWFrTWFwLnByb3RvdHlwZSA9IHtcbiAgICAnZGVsZXRlJzogZnVuY3Rpb24gZGVsKG8pIHtcbiAgICAgIGRlbGV0ZSBvW3RoaXNbc11dO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQobykge1xuICAgICAgcmV0dXJuIG9bdGhpc1tzXV07XG4gICAgfSxcbiAgICBoYXM6IGZ1bmN0aW9uIGhhcyhvKSB7XG4gICAgICByZXR1cm4gaE9QLmNhbGwobywgdGhpc1tzXSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvLCB2KSB7XG4gICAgICBkUChvLCB0aGlzW3NdLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFdlYWtNYXA7XG59KF9TeW1ib2woJ1dlYWtNYXAnKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5LCB7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgc3dhbGAgaGFzLlxuICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAqL1xudmFyIHByaXZhdGVQcm9wcyA9IHtcbiAgcHJvbWlzZTogbmV3IFdlYWtNYXAkMSgpLFxuICBpbm5lclBhcmFtczogbmV3IFdlYWtNYXAkMSgpLFxuICBkb21DYWNoZTogbmV3IFdlYWtNYXAkMSgpXG59O1xuXG4vKipcbiAqIEVuYWJsZXMgYnV0dG9ucyBhbmQgaGlkZSBsb2FkZXIuXG4gKi9cblxuZnVuY3Rpb24gaGlkZUxvYWRpbmcoKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG5cbiAgaWYgKCFpbm5lclBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgIGhpZGUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbik7XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUuYWN0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoW2RvbUNhY2hlLnBvcHVwLCBkb21DYWNoZS5hY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0KGlucHV0VHlwZSkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBpbnB1dFR5cGUgPSBpbnB1dFR5cGUgfHwgaW5uZXJQYXJhbXMuaW5wdXQ7XG5cbiAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgY2FzZSAnZmlsZSc6XG4gICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzW2lucHV0VHlwZV0pO1xuXG4gICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgcmV0dXJuIGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIiBpbnB1dFwiKSk7XG5cbiAgICBjYXNlICdyYWRpbyc6XG4gICAgICByZXR1cm4gZG9tQ2FjaGUucG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiIGlucHV0OmNoZWNrZWRcIikpIHx8IGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpmaXJzdC1jaGlsZFwiKSk7XG5cbiAgICBjYXNlICdyYW5nZSc6XG4gICAgICByZXR1cm4gZG9tQ2FjaGUucG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIGlucHV0XCIpKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlQ29uZmlybUJ1dHRvbigpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gZGlzYWJsZUNvbmZpcm1CdXR0b24oKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICB2YXIgcmFkaW9zQ29udGFpbmVyID0gaW5wdXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYWRpb3NbaV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpbnB1dCAmJiBpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgcmFkaW9zID0gcmFkaW9zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dWYWxpZGF0aW9uTWVzc2FnZShlcnJvciQkMSkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZS5pbm5lckhUTUwgPSBlcnJvciQkMTtcbiAgdmFyIHBvcHVwQ29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbUNhY2hlLnBvcHVwKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2Uuc3R5bGUubWFyZ2luTGVmdCA9IFwiLVwiLmNvbmNhdChwb3B1cENvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JykpO1xuICBkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiLVwiLmNvbmNhdChwb3B1cENvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcbiAgc2hvdyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSk7XG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScsIHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG4gICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICB9XG59IC8vIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcblxuZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcblxuICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICBoaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgfVxuXG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScpO1xuICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgfVxufSAvLyBAZGVwcmVjYXRlZFxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5mdW5jdGlvbiByZXNldFZhbGlkYXRpb25FcnJvcigpIHtcbiAgd2Fybk9uY2UoXCJTd2FsLnJlc2V0VmFsaWRhdGlvbkVycm9yKCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UsIHVzZSBTd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSBpbnN0ZWFkXCIpO1xuICByZXNldFZhbGlkYXRpb25NZXNzYWdlLmJpbmQodGhpcykoKTtcbn0gLy8gQGRlcHJlY2F0ZWRcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuZnVuY3Rpb24gc2hvd1ZhbGlkYXRpb25FcnJvcihlcnJvciQkMSkge1xuICB3YXJuT25jZShcIlN3YWwuc2hvd1ZhbGlkYXRpb25FcnJvcigpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLCB1c2UgU3dhbC5zaG93VmFsaWRhdGlvbk1lc3NhZ2UoKSBpbnN0ZWFkXCIpO1xuICBzaG93VmFsaWRhdGlvbk1lc3NhZ2UuYmluZCh0aGlzKShlcnJvciQkMSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2dyZXNzU3RlcHMkMSgpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgcmV0dXJuIGlubmVyUGFyYW1zLnByb2dyZXNzU3RlcHM7XG59XG5mdW5jdGlvbiBzZXRQcm9ncmVzc1N0ZXBzKHByb2dyZXNzU3RlcHMpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICB2YXIgdXBkYXRlZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBpbm5lclBhcmFtcywge1xuICAgIHByb2dyZXNzU3RlcHM6IHByb2dyZXNzU3RlcHNcbiAgfSk7XG5cbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyh1cGRhdGVkUGFyYW1zKTtcbn1cbmZ1bmN0aW9uIHNob3dQcm9ncmVzc1N0ZXBzKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBzaG93KGRvbUNhY2hlLnByb2dyZXNzU3RlcHMpO1xufVxuZnVuY3Rpb24gaGlkZVByb2dyZXNzU3RlcHMoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGhpZGUoZG9tQ2FjaGUucHJvZ3Jlc3NTdGVwcyk7XG59XG5cbnZhciBUaW1lciA9IGZ1bmN0aW9uIFRpbWVyKGNhbGxiYWNrLCBkZWxheSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXIpO1xuXG4gIHZhciBpZCwgc3RhcnRlZCwgcnVubmluZztcbiAgdmFyIHJlbWFpbmluZyA9IGRlbGF5O1xuXG4gIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcnVubmluZyA9IHRydWU7XG4gICAgc3RhcnRlZCA9IG5ldyBEYXRlKCk7XG4gICAgaWQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCByZW1haW5pbmcpO1xuICB9O1xuXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICByZW1haW5pbmcgLT0gbmV3IERhdGUoKSAtIHN0YXJ0ZWQ7XG4gIH07XG5cbiAgdGhpcy5nZXRUaW1lckxlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHJldHVybiByZW1haW5pbmc7XG4gIH07XG5cbiAgdGhpcy5zdGFydCgpO1xufTtcblxudmFyIGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMgPSB7XG4gIGVtYWlsOiBmdW5jdGlvbiBlbWFpbChzdHJpbmcsIGV4dHJhUGFyYW1zKSB7XG4gICAgcmV0dXJuIC9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVowLTktXXsyLDI0fSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoZXh0cmFQYXJhbXMgJiYgZXh0cmFQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UgPyBleHRyYVBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSA6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKTtcbiAgfSxcbiAgdXJsOiBmdW5jdGlvbiB1cmwoc3RyaW5nLCBleHRyYVBhcmFtcykge1xuICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4MDk0MzUgd2l0aCBhIHNtYWxsIGNoYW5nZSBmcm9tICMxMzA2XG4gICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDYzfVxcYihbLWEtekEtWjAtOUA6JV8rLn4jPyYvLz1dKikkLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVqZWN0KGV4dHJhUGFyYW1zICYmIGV4dHJhUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlID8gZXh0cmFQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UgOiAnSW52YWxpZCBVUkwnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBwb3B1cFxuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbmZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gIC8vIFVzZSBkZWZhdWx0IGBpbnB1dFZhbGlkYXRvcmAgZm9yIHN1cHBvcnRlZCBpbnB1dCB0eXBlcyBpZiBub3QgcHJvdmlkZWRcbiAgaWYgKCFwYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICBPYmplY3Qua2V5cyhkZWZhdWx0SW5wdXRWYWxpZGF0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09IGtleSkge1xuICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBwYXJhbXMuZXhwZWN0UmVqZWN0aW9ucyA/IGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XSA6IFN3YWwuYWRhcHRJbnB1dFZhbGlkYXRvcihkZWZhdWx0SW5wdXRWYWxpZGF0b3JzW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9IC8vIHBhcmFtcy5leHRyYVBhcmFtcyBpcyBAZGVwcmVjYXRlZFxuXG5cbiAgaWYgKHBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgIGlmIChfdHlwZW9mKHBhcmFtcy5leHRyYVBhcmFtcykgIT09ICdvYmplY3QnKSB7XG4gICAgICBwYXJhbXMuZXh0cmFQYXJhbXMgPSB7fTtcbiAgICB9XG5cbiAgICBwYXJhbXMuZXh0cmFQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UgPSBwYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2U7XG4gIH0gLy8gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgaXMgdmFsaWRcblxuXG4gIGlmICghcGFyYW1zLnRhcmdldCB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgIT09ICdzdHJpbmcnICYmICFwYXJhbXMudGFyZ2V0LmFwcGVuZENoaWxkKSB7XG4gICAgd2FybignVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKTtcbiAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICB9IC8vIEFuaW1hdGlvblxuXG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMuYW5pbWF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFyYW1zLmFuaW1hdGlvbiA9IHBhcmFtcy5hbmltYXRpb24uY2FsbCgpO1xuICB9XG5cbiAgdmFyIHBvcHVwO1xuICB2YXIgb2xkUG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0OyAvLyBJZiB0aGUgbW9kZWwgdGFyZ2V0IGhhcyBjaGFuZ2VkLCByZWZyZXNoIHRoZSBwb3B1cFxuXG4gIGlmIChvbGRQb3B1cCAmJiB0YXJnZXRFbGVtZW50ICYmIG9sZFBvcHVwLnBhcmVudE5vZGUgIT09IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHBvcHVwID0gaW5pdChwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIHBvcHVwID0gb2xkUG9wdXAgfHwgaW5pdChwYXJhbXMpO1xuICB9IC8vIFNldCBwb3B1cCB3aWR0aFxuXG5cbiAgaWYgKHBhcmFtcy53aWR0aCkge1xuICAgIHBvcHVwLnN0eWxlLndpZHRoID0gdHlwZW9mIHBhcmFtcy53aWR0aCA9PT0gJ251bWJlcicgPyBwYXJhbXMud2lkdGggKyAncHgnIDogcGFyYW1zLndpZHRoO1xuICB9IC8vIFNldCBwb3B1cCBwYWRkaW5nXG5cblxuICBpZiAocGFyYW1zLnBhZGRpbmcpIHtcbiAgICBwb3B1cC5zdHlsZS5wYWRkaW5nID0gdHlwZW9mIHBhcmFtcy5wYWRkaW5nID09PSAnbnVtYmVyJyA/IHBhcmFtcy5wYWRkaW5nICsgJ3B4JyA6IHBhcmFtcy5wYWRkaW5nO1xuICB9IC8vIFNldCBwb3B1cCBiYWNrZ3JvdW5kXG5cblxuICBpZiAocGFyYW1zLmJhY2tncm91bmQpIHtcbiAgICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIH1cblxuICB2YXIgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICB2YXIgc3VjY2Vzc0ljb25QYXJ0cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwb3B1cEJhY2tncm91bmRDb2xvcjtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIGNsb3NlQnV0dG9uID0gZ2V0Q2xvc2VCdXR0b24oKTtcbiAgdmFyIGZvb3RlciA9IGdldEZvb3RlcigpOyAvLyBUaXRsZVxuXG4gIHJlbmRlclRpdGxlKHBhcmFtcyk7IC8vIENvbnRlbnRcblxuICByZW5kZXJDb250ZW50KHBhcmFtcyk7IC8vIEJhY2tkcm9wXG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMuYmFja2Ryb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgZ2V0Q29udGFpbmVyKCkuc3R5bGUuYmFja2dyb3VuZCA9IHBhcmFtcy5iYWNrZHJvcDtcbiAgfSBlbHNlIGlmICghcGFyYW1zLmJhY2tkcm9wKSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgfVxuXG4gIGlmICghcGFyYW1zLmJhY2tkcm9wICYmIHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgIHdhcm4oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpO1xuICB9IC8vIFBvc2l0aW9uXG5cblxuICBpZiAocGFyYW1zLnBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twYXJhbXMucG9zaXRpb25dKTtcbiAgfSBlbHNlIHtcbiAgICB3YXJuKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuY2VudGVyKTtcbiAgfSAvLyBHcm93XG5cblxuICBpZiAocGFyYW1zLmdyb3cgJiYgdHlwZW9mIHBhcmFtcy5ncm93ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBncm93Q2xhc3MgPSAnZ3Jvdy0nICsgcGFyYW1zLmdyb3c7XG5cbiAgICBpZiAoZ3Jvd0NsYXNzIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pO1xuICAgIH1cbiAgfSAvLyBDbG9zZSBidXR0b25cblxuXG4gIGlmIChwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbiAgICBzaG93KGNsb3NlQnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNsb3NlQnV0dG9uKTtcbiAgfSAvLyBEZWZhdWx0IENsYXNzXG5cblxuICBwb3B1cC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5wb3B1cDtcblxuICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudG9hc3QpO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gIH0gLy8gQ3VzdG9tIENsYXNzXG5cblxuICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5jdXN0b21DbGFzcyk7XG4gIH0gLy8gUHJvZ3Jlc3Mgc3RlcHNcblxuXG4gIHJlbmRlclByb2dyZXNzU3RlcHMocGFyYW1zKTsgLy8gSWNvblxuXG4gIHJlbmRlckljb24ocGFyYW1zKTsgLy8gSW1hZ2VcblxuICByZW5kZXJJbWFnZShwYXJhbXMpOyAvLyBBY3Rpb25zIChidXR0b25zKVxuXG4gIHJlbmRlckFjdGlvbnMocGFyYW1zKTsgLy8gRm9vdGVyXG5cbiAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKTsgLy8gQ1NTIGFuaW1hdGlvblxuXG4gIGlmIChwYXJhbXMuYW5pbWF0aW9uID09PSB0cnVlKSB7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pO1xuICB9IC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuXG5cbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgIHdhcm4oJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgKyAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgKyAnaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2FqYXgtcmVxdWVzdCcpO1xuICB9XG59XG5cbi8qKlxuICogT3BlbiBwb3B1cCwgYWRkIG5lY2Vzc2FyeSBjbGFzc2VzIGFuZCBzdHlsZXMsIGZpeCBzY3JvbGxiYXJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXNcbiAqL1xuXG52YXIgb3BlblBvcHVwID0gZnVuY3Rpb24gb3BlblBvcHVwKHBhcmFtcykge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKHBhcmFtcy5vbkJlZm9yZU9wZW4gIT09IG51bGwgJiYgdHlwZW9mIHBhcmFtcy5vbkJlZm9yZU9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMub25CZWZvcmVPcGVuKHBvcHVwKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuZmFkZSk7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgfVxuXG4gIHNob3cocG9wdXApOyAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG5cbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfVxuXG4gIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHksIGNvbnRhaW5lcl0sIHN3YWxDbGFzc2VzLnNob3duKTtcblxuICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICB9XG5cbiAgaWYgKGlzTW9kYWwoKSkge1xuICAgIGZpeFNjcm9sbGJhcigpO1xuICAgIGlPU2ZpeCgpO1xuICAgIElFZml4KCk7XG4gICAgc2V0QXJpYUhpZGRlbigpOyAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0N1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghaXNUb2FzdCgpICYmICFnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgaWYgKHBhcmFtcy5vbk9wZW4gIT09IG51bGwgJiYgdHlwZW9mIHBhcmFtcy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhcmFtcy5vbk9wZW4ocG9wdXApO1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfbWFpbih1c2VyUGFyYW1zKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgc2hvd1dhcm5pbmdzRm9yUGFyYW1zKHVzZXJQYXJhbXMpO1xuXG4gIHZhciBpbm5lclBhcmFtcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zLCB1c2VyUGFyYW1zKTtcblxuICBzZXRQYXJhbWV0ZXJzKGlubmVyUGFyYW1zKTtcbiAgT2JqZWN0LmZyZWV6ZShpbm5lclBhcmFtcyk7XG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgaW5uZXJQYXJhbXMpOyAvLyBjbGVhciB0aGUgcHJldmlvdXMgdGltZXJcblxuICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICB9IC8vIGNsZWFyIHRoZSByZXN0b3JlIGZvY3VzIHRpbWVvdXRcblxuXG4gIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0KTtcbiAgdmFyIGRvbUNhY2hlID0ge1xuICAgIHBvcHVwOiBnZXRQb3B1cCgpLFxuICAgIGNvbnRhaW5lcjogZ2V0Q29udGFpbmVyKCksXG4gICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgIGFjdGlvbnM6IGdldEFjdGlvbnMoKSxcbiAgICBjb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uKCksXG4gICAgY2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24oKSxcbiAgICBjbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSxcbiAgICBwcm9ncmVzc1N0ZXBzOiBnZXRQcm9ncmVzc1N0ZXBzKClcbiAgfTtcbiAgcHJpdmF0ZVByb3BzLmRvbUNhY2hlLnNldCh0aGlzLCBkb21DYWNoZSk7XG4gIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gZnVuY3Rpb25zIHRvIGhhbmRsZSBhbGwgcmVzb2x2aW5nL3JlamVjdGluZy9zZXR0bGluZ1xuICAgIHZhciBzdWNjZWVkV2l0aCA9IGZ1bmN0aW9uIHN1Y2NlZWRXaXRoKHZhbHVlKSB7XG4gICAgICBjb25zdHJ1Y3Rvci5jbG9zZVBvcHVwKGlubmVyUGFyYW1zLm9uQ2xvc2UsIGlubmVyUGFyYW1zLm9uQWZ0ZXJDbG9zZSk7IC8vIFRPRE86IG1ha2UgY2xvc2VQb3B1cCBhbiAqaW5zdGFuY2UqIG1ldGhvZFxuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMudXNlUmVqZWN0aW9ucykge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGRpc21pc3NXaXRoID0gZnVuY3Rpb24gZGlzbWlzc1dpdGgoZGlzbWlzcykge1xuICAgICAgY29uc3RydWN0b3IuY2xvc2VQb3B1cChpbm5lclBhcmFtcy5vbkNsb3NlLCBpbm5lclBhcmFtcy5vbkFmdGVyQ2xvc2UpO1xuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMudXNlUmVqZWN0aW9ucykge1xuICAgICAgICByZWplY3QoZGlzbWlzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBkaXNtaXNzOiBkaXNtaXNzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZXJyb3JXaXRoID0gZnVuY3Rpb24gZXJyb3JXaXRoKGVycm9yJCQxKSB7XG4gICAgICBjb25zdHJ1Y3Rvci5jbG9zZVBvcHVwKGlubmVyUGFyYW1zLm9uQ2xvc2UsIGlubmVyUGFyYW1zLm9uQWZ0ZXJDbG9zZSk7XG4gICAgICByZWplY3QoZXJyb3IkJDEpO1xuICAgIH07IC8vIENsb3NlIG9uIHRpbWVyXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy50aW1lcikge1xuICAgICAgZ2xvYmFsU3RhdGUudGltZW91dCA9IG5ldyBUaW1lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc21pc3NXaXRoKCd0aW1lcicpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICAgIH0sIGlubmVyUGFyYW1zLnRpbWVyKTtcbiAgICB9IC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIHBvcHVwIGlucHV0XG5cblxuICAgIHZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0KCk7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG5cbiAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiBudWxsO1xuXG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5maWxlcy5sZW5ndGggPyBpbnB1dC5maWxlc1swXSA6IG51bGw7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMuaW5wdXRBdXRvVHJpbSA/IGlucHV0LnZhbHVlLnRyaW0oKSA6IGlucHV0LnZhbHVlO1xuICAgICAgfVxuICAgIH07IC8vIGlucHV0IGF1dG9mb2N1c1xuXG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSBfdGhpcy5nZXRJbnB1dCgpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlybSA9IGZ1bmN0aW9uIGNvbmZpcm0odmFsdWUpIHtcbiAgICAgIGlmIChpbm5lclBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yLnNob3dMb2FkaW5nKCk7IC8vIFRPRE86IG1ha2Ugc2hvd0xvYWRpbmcgYW4gKmluc3RhbmNlKiBtZXRob2RcbiAgICAgIH1cblxuICAgICAgaWYgKGlubmVyUGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICAgICAgX3RoaXMucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXG4gICAgICAgIHZhciBwcmVDb25maXJtUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5wcmVDb25maXJtKHZhbHVlLCBpbm5lclBhcmFtcy5leHRyYVBhcmFtcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpbm5lclBhcmFtcy5leHBlY3RSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcHJlQ29uZmlybVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlQ29uZmlybVZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VjY2VlZFdpdGgocHJlQ29uZmlybVZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgICBfdGhpcy5zaG93VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZUNvbmZpcm1Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByZUNvbmZpcm1WYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGlzVmlzaWJsZShkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSkgfHwgcHJlQ29uZmlybVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3VjY2VlZFdpdGgocHJlQ29uZmlybVZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcldpdGgoZXJyb3IkJDEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWNjZWVkV2l0aCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfTsgLy8gTW91c2UgaW50ZXJhY3Rpb25zXG5cblxuICAgIHZhciBvbkJ1dHRvbkV2ZW50ID0gZnVuY3Rpb24gb25CdXR0b25FdmVudChlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGRvbUNhY2hlLmNvbmZpcm1CdXR0b24sXG4gICAgICAgICAgY2FuY2VsQnV0dG9uID0gZG9tQ2FjaGUuY2FuY2VsQnV0dG9uO1xuICAgICAgdmFyIHRhcmdldGVkQ29uZmlybSA9IGNvbmZpcm1CdXR0b24gJiYgKGNvbmZpcm1CdXR0b24gPT09IHRhcmdldCB8fCBjb25maXJtQnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpO1xuICAgICAgdmFyIHRhcmdldGVkQ2FuY2VsID0gY2FuY2VsQnV0dG9uICYmIChjYW5jZWxCdXR0b24gPT09IHRhcmdldCB8fCBjYW5jZWxCdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG5cbiAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAvLyBDbGlja2VkICdjb25maXJtJ1xuICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0gJiYgY29uc3RydWN0b3IuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IGdldElucHV0VmFsdWUoKTtcblxuICAgICAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kaXNhYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKGlucHV0VmFsdWUsIGlubmVyUGFyYW1zLmV4dHJhUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5leHBlY3RSZWplY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUlucHV0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaG93VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUlucHV0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25maXJtKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yV2l0aChlcnJvciQkMSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIV90aGlzLmdldElucHV0KCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25maXJtKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25maXJtKHRydWUpO1xuICAgICAgICAgICAgfSAvLyBDbGlja2VkICdjYW5jZWwnXG5cbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsICYmIGNvbnN0cnVjdG9yLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNhYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICBkaXNtaXNzV2l0aChjb25zdHJ1Y3Rvci5EaXNtaXNzUmVhc29uLmNhbmNlbCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbnMgPSBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgYnV0dG9uc1tpXS5vbmNsaWNrID0gb25CdXR0b25FdmVudDtcbiAgICAgIGJ1dHRvbnNbaV0ub25tb3VzZW92ZXIgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlb3V0ID0gb25CdXR0b25FdmVudDtcbiAgICAgIGJ1dHRvbnNbaV0ub25tb3VzZWRvd24gPSBvbkJ1dHRvbkV2ZW50O1xuICAgIH0gLy8gQ2xvc2luZyBwb3B1cCBieSBjbG9zZSBidXR0b25cblxuXG4gICAgZG9tQ2FjaGUuY2xvc2VCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uY2xvc2UpO1xuICAgIH07XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIC8vIENsb3NpbmcgcG9wdXAgYnkgaW50ZXJuYWwgY2xpY2tcbiAgICAgIGRvbUNhY2hlLnBvcHVwLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbm5lclBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDbG9zZUJ1dHRvbiB8fCBpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uY2xvc2UpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlOyAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgcG9wdXAgYnV0IG1vdXNldXAgb24gdGhlIGNvbnRhaW5lclxuICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSBzbGlkZXJcblxuICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSB1bmRlZmluZWQ7IC8vIFdlIG9ubHkgY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgYmVjYXVzZSB1c3VhbGx5IGl0IGRvZXNuJ3RcbiAgICAgICAgICAvLyBoYXZlIGFueSBvdGhlciBkaXJlY3QgY2hpbGRyZW4gYXNpZGUgb2YgdGhlIHBvcHVwXG5cbiAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9OyAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgY29udGFpbmVyIGJ1dCBtb3VzZXVwIG9uIHRoZSBwb3B1cFxuXG5cbiAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSB1bmRlZmluZWQ7IC8vIFdlIGFsc28gbmVlZCB0byBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgYSBjaGlsZCBvZiB0aGUgcG9wdXBcblxuICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUucG9wdXAgfHwgZG9tQ2FjaGUucG9wdXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGlnbm9yZU91dHNpZGVDbGljaykge1xuICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSkge1xuICAgICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uYmFja2Ryb3ApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gLy8gUmV2ZXJzZSBidXR0b25zIChDb25maXJtIG9uIHRoZSByaWdodCBzaWRlKVxuXG5cbiAgICBpZiAoaW5uZXJQYXJhbXMucmV2ZXJzZUJ1dHRvbnMpIHtcbiAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLCBkb21DYWNoZS5jb25maXJtQnV0dG9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb21DYWNoZS5jb25maXJtQnV0dG9uLCBkb21DYWNoZS5jYW5jZWxCdXR0b24pO1xuICAgIH0gLy8gRm9jdXMgaGFuZGxpbmdcblxuXG4gICAgdmFyIHNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoaW5kZXgsIGluY3JlbWVudCkge1xuICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwpOyAvLyBzZWFyY2ggZm9yIHZpc2libGUgZWxlbWVudHMgYW5kIHNlbGVjdCB0aGUgbmV4dCBwb3NzaWJsZSBtYXRjaFxuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggKyBpbmNyZW1lbnQ7IC8vIHJvbGxvdmVyIHRvIGZpcnN0IGl0ZW1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGluZGV4ID0gMDsgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XS5mb2N1cygpO1xuICAgICAgfSAvLyBubyB2aXNpYmxlIGZvY3VzYWJsZSBlbGVtZW50cywgZm9jdXMgdGhlIHBvcHVwXG5cblxuICAgICAgZG9tQ2FjaGUucG9wdXAuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgdmFyIGtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24ga2V5ZG93bkhhbmRsZXIoZSwgaW5uZXJQYXJhbXMpIHtcbiAgICAgIGlmIChpbm5lclBhcmFtcy5zdG9wS2V5ZG93blByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcnJvd0tleXMgPSBbJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgJ0xlZnQnLCAnUmlnaHQnLCAnVXAnLCAnRG93bicgLy8gSUUxMVxuICAgICAgXTtcblxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmICFlLmlzQ29tcG9zaW5nKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiBfdGhpcy5nZXRJbnB1dCgpICYmIGUudGFyZ2V0Lm91dGVySFRNTCA9PT0gX3RoaXMuZ2V0SW5wdXQoKS5vdXRlckhUTUwpIHtcbiAgICAgICAgICBpZiAoWyd0ZXh0YXJlYScsICdmaWxlJ10uaW5kZXhPZihpbm5lclBhcmFtcy5pbnB1dCkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIGRvIG5vdCBzdWJtaXRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdHJ1Y3Rvci5jbGlja0NvbmZpcm0oKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gLy8gVEFCXG5cbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsKTtcbiAgICAgICAgdmFyIGJ0bkluZGV4ID0gLTE7XG5cbiAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50ID09PSBmb2N1c2FibGVFbGVtZW50c1tfaTJdKSB7XG4gICAgICAgICAgICBidG5JbmRleCA9IF9pMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgIC8vIEN5Y2xlIHRvIHRoZSBuZXh0IGJ1dHRvblxuICAgICAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDeWNsZSB0byB0aGUgcHJldiBidXR0b25cbiAgICAgICAgICBzZXRGb2N1cyhidG5JbmRleCwgLTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBBUlJPV1MgLSBzd2l0Y2ggZm9jdXMgYmV0d2VlbiBidXR0b25zXG4gICAgICB9IGVsc2UgaWYgKGFycm93S2V5cy5pbmRleE9mKGUua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgLy8gZm9jdXMgQ2FuY2VsIGJ1dHRvbiBpZiBDb25maXJtIGJ1dHRvbiBpcyBjdXJyZW50bHkgZm9jdXNlZFxuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9tQ2FjaGUuY29uZmlybUJ1dHRvbiAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5mb2N1cygpOyAvLyBhbmQgdmljZSB2ZXJzYVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvbUNhY2hlLmNhbmNlbEJ1dHRvbiAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbikpIHtcbiAgICAgICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIH0gLy8gRVNDXG5cbiAgICAgIH0gZWxzZSBpZiAoKGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycpICYmIGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RXNjYXBlS2V5KSA9PT0gdHJ1ZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uZXNjKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGtleWRvd25IYW5kbGVyKGUsIGlubmVyUGFyYW1zKTtcbiAgICAgIH07XG5cbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID8gd2luZG93IDogZG9tQ2FjaGUucG9wdXA7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID0gaW5uZXJQYXJhbXMua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgX3RoaXMuZW5hYmxlQnV0dG9ucygpO1xuXG4gICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIF90aGlzLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCAmJiAoaW5uZXJQYXJhbXMuaW5wdXQgfHwgaW5uZXJQYXJhbXMuZm9vdGVyIHx8IGlubmVyUGFyYW1zLnNob3dDbG9zZUJ1dHRvbikpIHtcbiAgICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXSk7XG4gICAgfSAvLyBpbnB1dHNcblxuXG4gICAgdmFyIGlucHV0VHlwZXMgPSBbJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ107XG5cbiAgICB2YXIgc2V0SW5wdXRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQpIHtcbiAgICAgIGlmICghaW5wdXQucGxhY2Vob2xkZXIgfHwgaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBpbnB1dDtcblxuICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IGlucHV0VHlwZXMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgdmFyIGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVzW19pM11dO1xuICAgICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIGlucHV0Q2xhc3MpO1xuICAgICAgaW5wdXQgPSBfdGhpcy5nZXRJbnB1dChpbnB1dFR5cGVzW19pM10pOyAvLyBzZXQgYXR0cmlidXRlc1xuXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgZm9yICh2YXIgaiBpbiBpbnB1dC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIHZhciBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbal0ubmFtZTtcblxuICAgICAgICAgICAgaWYgKGF0dHJOYW1lICE9PSAndHlwZScgJiYgYXR0ck5hbWUgIT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBhdHRyIGluIGlubmVyUGFyYW1zLmlucHV0QXR0cmlidXRlcykge1xuICAgICAgICAgIC8vIERvIG5vdCBzZXQgYSBwbGFjZWhvbGRlciBmb3IgPGlucHV0IHR5cGU9XCJyYW5nZVwiPlxuICAgICAgICAgIC8vIGl0J2xsIGNyYXNoIEVkZ2UsICMxMjk4XG4gICAgICAgICAgaWYgKGlucHV0VHlwZXNbX2kzXSA9PT0gJ3JhbmdlJyAmJiBhdHRyID09PSAncGxhY2Vob2xkZXInKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0ciwgaW5uZXJQYXJhbXMuaW5wdXRBdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBzZXQgY2xhc3NcblxuXG4gICAgICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBpbnB1dENsYXNzO1xuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRDbGFzcykge1xuICAgICAgICBhZGRDbGFzcyhpbnB1dENvbnRhaW5lciwgaW5uZXJQYXJhbXMuaW5wdXRDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGhpZGUoaW5wdXRDb250YWluZXIpO1xuICAgIH1cblxuICAgIHZhciBwb3B1bGF0ZUlucHV0T3B0aW9ucztcblxuICAgIHN3aXRjaCAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3RlbCc6XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICB7XG4gICAgICAgICAgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBpbm5lclBhcmFtcy5pbnB1dFZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FybihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dFZhbHVlISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiBvciBcXFwibnVtYmVyXFxcIiwgZ290IFxcXCJcIi5jb25jYXQoX3R5cGVvZihpbm5lclBhcmFtcy5pbnB1dFZhbHVlKSwgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0KTtcbiAgICAgICAgICBpbnB1dC50eXBlID0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHtcbiAgICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgICAgICAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0KTtcbiAgICAgICAgICBpbnB1dC50eXBlID0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHJhbmdlID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLnJhbmdlKTtcbiAgICAgICAgICB2YXIgcmFuZ2VJbnB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgdmFyIHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0Jyk7XG4gICAgICAgICAgcmFuZ2VJbnB1dC52YWx1ZSA9IGlubmVyUGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgICAgcmFuZ2VJbnB1dC50eXBlID0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgICAgICAgcmFuZ2VPdXRwdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIHNob3cocmFuZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gICAgICAgICAgc2VsZWN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcG9wdWxhdGVJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRPcHRpb24pIHtcbiAgICAgICAgICAgICAgdmFyIG9wdGlvblZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICAgICAgICAgIHZhciBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xuICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gb3B0aW9uTGFiZWw7XG5cbiAgICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gb3B0aW9uVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2hvdyhzZWxlY3QpO1xuICAgICAgICAgICAgc2VsZWN0LmZvY3VzKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciByYWRpbyA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgICAgICAgcmFkaW8uaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICAgICAgICAgIHZhciByYWRpb1ZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICAgICAgICAgIHZhciByYWRpb0xhYmVsID0gaW5wdXRPcHRpb25bMV07XG4gICAgICAgICAgICAgIHZhciByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgdmFyIHJhZGlvTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW87XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSByYWRpb1ZhbHVlO1xuXG4gICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IHJhZGlvVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IHJhZGlvTGFiZWw7XG4gICAgICAgICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmxhYmVsO1xuICAgICAgICAgICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcbiAgICAgICAgICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICByYWRpby5hcHBlbmRDaGlsZChyYWRpb0xhYmVsRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNob3cocmFkaW8pO1xuICAgICAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIGlmIChyYWRpb3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJhZGlvc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgY2hlY2tib3ggPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMuY2hlY2tib3gpO1xuXG4gICAgICAgICAgdmFyIGNoZWNrYm94SW5wdXQgPSBfdGhpcy5nZXRJbnB1dCgnY2hlY2tib3gnKTtcblxuICAgICAgICAgIGNoZWNrYm94SW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgY2hlY2tib3hJbnB1dC52YWx1ZSA9IDE7XG4gICAgICAgICAgY2hlY2tib3hJbnB1dC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94O1xuICAgICAgICAgIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IEJvb2xlYW4oaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgdmFyIGxhYmVsID0gY2hlY2tib3gucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgICAgc2hvdyhjaGVja2JveCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IGlubmVyUGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgICAgc2V0SW5wdXRQbGFjZWhvbGRlcih0ZXh0YXJlYSk7XG4gICAgICAgICAgc2hvdyh0ZXh0YXJlYSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFxcXCJ0ZXh0XFxcIiwgXFxcImVtYWlsXFxcIiwgXFxcInBhc3N3b3JkXFxcIiwgXFxcIm51bWJlclxcXCIsIFxcXCJ0ZWxcXFwiLCBcXFwic2VsZWN0XFxcIiwgXFxcInJhZGlvXFxcIiwgXFxcImNoZWNrYm94XFxcIiwgXFxcInRleHRhcmVhXFxcIiwgXFxcImZpbGVcXFwiIG9yIFxcXCJ1cmxcXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChpbm5lclBhcmFtcy5pbnB1dCwgXCJcXFwiXCIpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGlubmVyUGFyYW1zLmlucHV0ID09PSAnc2VsZWN0JyB8fCBpbm5lclBhcmFtcy5pbnB1dCA9PT0gJ3JhZGlvJykge1xuICAgICAgdmFyIHByb2Nlc3NJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICByZXR1cm4gcG9wdWxhdGVJbnB1dE9wdGlvbnMoZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykpO1xuICAgICAgfTtcblxuICAgICAgaWYgKGlzVGhlbmFibGUoaW5uZXJQYXJhbXMuaW5wdXRPcHRpb25zKSkge1xuICAgICAgICBjb25zdHJ1Y3Rvci5zaG93TG9hZGluZygpO1xuICAgICAgICBpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMudGhlbihmdW5jdGlvbiAoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgICAgICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKF90eXBlb2YoaW5uZXJQYXJhbXMuaW5wdXRPcHRpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3QsIE1hcCBvciBQcm9taXNlLCBnb3QgXCIuY29uY2F0KF90eXBlb2YoaW5uZXJQYXJhbXMuaW5wdXRPcHRpb25zKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoWyd0ZXh0JywgJ2VtYWlsJywgJ251bWJlcicsICd0ZWwnLCAndGV4dGFyZWEnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEgJiYgaXNUaGVuYWJsZShpbm5lclBhcmFtcy5pbnB1dFZhbHVlKSkge1xuICAgICAgY29uc3RydWN0b3Iuc2hvd0xvYWRpbmcoKTtcbiAgICAgIGhpZGUoaW5wdXQpO1xuICAgICAgaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZS50aGVuKGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gaW5uZXJQYXJhbXMuaW5wdXQgPT09ICdudW1iZXInID8gcGFyc2VGbG9hdChpbnB1dFZhbHVlKSB8fCAwIDogaW5wdXRWYWx1ZSArICcnO1xuICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBlcnJvcignRXJyb3IgaW4gaW5wdXRWYWx1ZSBwcm9taXNlOiAnICsgZXJyKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW5Qb3B1cChpbm5lclBhcmFtcyk7XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBpZiAoIWNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RW50ZXJLZXkpKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHR5cGVvZiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGb2N1cygtMSwgMSk7XG4gICAgICB9XG4gICAgfSAvLyBmaXggc2Nyb2xsXG5cblxuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICB9KTtcbn1cblxuXG5cbnZhciBpbnN0YW5jZU1ldGhvZHMgPSBPYmplY3QuZnJlZXplKHtcblx0aGlkZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuXHRkaXNhYmxlTG9hZGluZzogaGlkZUxvYWRpbmcsXG5cdGdldElucHV0OiBnZXRJbnB1dCxcblx0ZW5hYmxlQnV0dG9uczogZW5hYmxlQnV0dG9ucyxcblx0ZGlzYWJsZUJ1dHRvbnM6IGRpc2FibGVCdXR0b25zLFxuXHRlbmFibGVDb25maXJtQnV0dG9uOiBlbmFibGVDb25maXJtQnV0dG9uLFxuXHRkaXNhYmxlQ29uZmlybUJ1dHRvbjogZGlzYWJsZUNvbmZpcm1CdXR0b24sXG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdHNob3dWYWxpZGF0aW9uTWVzc2FnZTogc2hvd1ZhbGlkYXRpb25NZXNzYWdlLFxuXHRyZXNldFZhbGlkYXRpb25NZXNzYWdlOiByZXNldFZhbGlkYXRpb25NZXNzYWdlLFxuXHRyZXNldFZhbGlkYXRpb25FcnJvcjogcmVzZXRWYWxpZGF0aW9uRXJyb3IsXG5cdHNob3dWYWxpZGF0aW9uRXJyb3I6IHNob3dWYWxpZGF0aW9uRXJyb3IsXG5cdGdldFByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMkMSxcblx0c2V0UHJvZ3Jlc3NTdGVwczogc2V0UHJvZ3Jlc3NTdGVwcyxcblx0c2hvd1Byb2dyZXNzU3RlcHM6IHNob3dQcm9ncmVzc1N0ZXBzLFxuXHRoaWRlUHJvZ3Jlc3NTdGVwczogaGlkZVByb2dyZXNzU3RlcHMsXG5cdF9tYWluOiBfbWFpblxufSk7XG5cbnZhciBjdXJyZW50SW5zdGFuY2U7IC8vIFN3ZWV0QWxlcnQgY29uc3RydWN0b3JcblxuZnVuY3Rpb24gU3dlZXRBbGVydCgpIHtcbiAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIFByb21pc2VcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuXG4gIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlcnJvcignVGhpcyBwYWNrYWdlIHJlcXVpcmVzIGEgUHJvbWlzZSBsaWJyYXJ5LCBwbGVhc2UgaW5jbHVkZSBhIHNoaW0gdG8gZW5hYmxlIGl0IGluIHRoaXMgYnJvd3NlciAoU2VlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydCknKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICBlcnJvcignQXQgbGVhc3QgMSBhcmd1bWVudCBpcyBleHBlY3RlZCEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuICB2YXIgb3V0ZXJQYXJhbXMgPSBPYmplY3QuZnJlZXplKHRoaXMuY29uc3RydWN0b3IuYXJnc1RvUGFyYW1zKGFyZ3MpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHBhcmFtczoge1xuICAgICAgdmFsdWU6IG91dGVyUGFyYW1zLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHByb21pc2UgPSB0aGlzLl9tYWluKHRoaXMucGFyYW1zKTtcblxuICBwcml2YXRlUHJvcHMucHJvbWlzZS5zZXQodGhpcywgcHJvbWlzZSk7XG59IC8vIGBjYXRjaGAgY2Fubm90IGJlIHRoZSBuYW1lIG9mIGEgbW9kdWxlIGV4cG9ydCwgc28gd2UgZGVmaW5lIG91ciB0aGVuYWJsZSBtZXRob2RzIGhlcmUgaW5zdGVhZFxuXG5cblN3ZWV0QWxlcnQucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gIHJldHVybiBwcm9taXNlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xufTtcblxuU3dlZXRBbGVydC5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgcmV0dXJuIHByb21pc2UuY2F0Y2gob25SZWplY3RlZCk7XG59O1xuXG5Td2VldEFsZXJ0LnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgcmV0dXJuIHByb21pc2UuZmluYWxseShvbkZpbmFsbHkpO1xufTsgLy8gQXNzaWduIGluc3RhbmNlIG1ldGhvZHMgZnJvbSBzcmMvaW5zdGFuY2VNZXRob2RzLyouanMgdG8gcHJvdG90eXBlXG5cblxuX2V4dGVuZHMoU3dlZXRBbGVydC5wcm90b3R5cGUsIGluc3RhbmNlTWV0aG9kcyk7IC8vIEFzc2lnbiBzdGF0aWMgbWV0aG9kcyBmcm9tIHNyYy9zdGF0aWNNZXRob2RzLyouanMgdG8gY29uc3RydWN0b3JcblxuXG5fZXh0ZW5kcyhTd2VldEFsZXJ0LCBzdGF0aWNNZXRob2RzKTsgLy8gUHJveHkgdG8gaW5zdGFuY2UgbWV0aG9kcyB0byBjb25zdHJ1Y3RvciwgZm9yIG5vdywgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cblxuT2JqZWN0LmtleXMoaW5zdGFuY2VNZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgU3dlZXRBbGVydFtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50SW5zdGFuY2UpIHtcbiAgICAgIHZhciBfY3VycmVudEluc3RhbmNlO1xuXG4gICAgICByZXR1cm4gKF9jdXJyZW50SW5zdGFuY2UgPSBjdXJyZW50SW5zdGFuY2UpW2tleV0uYXBwbHkoX2N1cnJlbnRJbnN0YW5jZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59KTtcblN3ZWV0QWxlcnQuRGlzbWlzc1JlYXNvbiA9IERpc21pc3NSZWFzb247XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5Td2VldEFsZXJ0Lm5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxudmFyIFN3YWwgPSB3aXRoTm9OZXdLZXl3b3JkKHdpdGhHbG9iYWxEZWZhdWx0cyhTd2VldEFsZXJ0KSk7XG5Td2FsLmRlZmF1bHQgPSBTd2FsO1xuXG5yZXR1cm4gU3dhbDtcblxufSkpKTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuU3dlZXRhbGVydDIpeyAgd2luZG93LlN3ZWV0YWxlcnQyLnZlcnNpb24gPSAnNy4yOS4yJzsgIHdpbmRvdy5zd2FsID0gd2luZG93LnN3ZWV0QWxlcnQgPSB3aW5kb3cuU3dhbCA9IHdpbmRvdy5Td2VldEFsZXJ0ID0gd2luZG93LlN3ZWV0YWxlcnQyfVxuXG5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aWYoZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobiksbi5zdHlsZVNoZWV0KW4uc3R5bGVTaGVldC5kaXNhYmxlZHx8KG4uc3R5bGVTaGVldC5jc3NUZXh0PXQpO2Vsc2UgdHJ5e24uaW5uZXJIVE1MPXR9Y2F0Y2goZSl7bi5pbm5lclRleHQ9dH19KGRvY3VtZW50LFwiQC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXNob3d7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjcpO3RyYW5zZm9ybTpzY2FsZSguNyl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzd2FsMi1zaG93ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43KTt0cmFuc2Zvcm06c2NhbGUoLjcpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1oaWRlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItaGlkZXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDoxLjE4NzVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOjEuMDYyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDoyLjE4NzVlbTtsZWZ0Oi0uMzc1ZW07d2lkdGg6My4xMjVlbX04NCV7dG9wOjNlbTtsZWZ0OjEuMzEyNWVtO3dpZHRoOjEuMDYyNWVtfTEwMCV7dG9wOjIuODEyNWVtO2xlZnQ6Ljg3NWVtO3dpZHRoOjEuNTYyNWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6MS4xODc1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDoxLjA2MjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6Mi4xODc1ZW07bGVmdDotLjM3NWVtO3dpZHRoOjMuMTI1ZW19ODQle3RvcDozZW07bGVmdDoxLjMxMjVlbTt3aWR0aDoxLjA2MjVlbX0xMDAle3RvcDoyLjgxMjVlbTtsZWZ0Oi44NzVlbTt3aWR0aDoxLjU2MjVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTY1JXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9ODQle3RvcDoyLjE4NzVlbTtyaWdodDowO3dpZHRoOjMuNDM3NWVtfTEwMCV7dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH02NSV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTg0JXt0b3A6Mi4xODc1ZW07cmlnaHQ6MDt3aWR0aDozLjQzNzVlbX0xMDAle3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW19fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH01MCV7bWFyZ2luLXRvcDoxLjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH04MCV7bWFyZ2luLXRvcDotLjM3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KX0xMDAle21hcmdpbi10b3A6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrezAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9NTAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LS4zNzVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDApO3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwKTt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHR7dG9wOjA7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG99Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnR7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnR7dG9wOjUwJTtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e3RvcDo1MCU7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG87LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydHt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTowO2xlZnQ6MH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOjA7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0e3RvcDphdXRvO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDphdXRvfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdHtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaH1ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnN7ZmxleDoxO2FsaWduLXNlbGY6c3RyZXRjaDtoZWlnaHQ6Mi4yZW07bWFyZ2luLXRvcDouMzEyNWVtfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZ3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXR7aGVpZ2h0OjJlbTttYXJnaW46LjMxMjVlbSBhdXRvO2ZvbnQtc2l6ZToxZW19Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3R7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDphdXRvO3BhZGRpbmc6LjYyNWVtO2JveC1zaGFkb3c6MCAwIC42MjVlbSAjZDlkOWQ5O292ZXJmbG93LXk6aGlkZGVufS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVye2ZsZXgtZGlyZWN0aW9uOnJvd30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXRpdGxle2ZsZXgtZ3JvdzoxO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O21hcmdpbjowIC42ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWZvb3RlcnttYXJnaW46LjVlbSAwIDA7cGFkZGluZzouNWVtIDAgMDtmb250LXNpemU6LjhlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNsb3Nle3Bvc2l0aW9uOmluaXRpYWw7d2lkdGg6LjhlbTtoZWlnaHQ6LjhlbTtsaW5lLWhlaWdodDouOH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb257d2lkdGg6MmVtO21pbi13aWR0aDoyZW07aGVpZ2h0OjJlbTttYXJnaW46MH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24tdGV4dHtmb250LXNpemU6MmVtO2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17dG9wOi44NzVlbTt3aWR0aDoxLjM3NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25ze2hlaWdodDphdXRvO21hcmdpbjowIC4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWR7bWFyZ2luOjAgLjMxMjVlbTtwYWRkaW5nOi4zMTI1ZW0gLjYyNWVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWQ6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMDYyNWVtICNmZmYsMCAwIDAgLjEyNWVtIHJnYmEoNTAsMTAwLDE1MCwuNCl9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MmVtO2hlaWdodDoyLjgxMjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JvcmRlci1yYWRpdXM6NTAlfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotLjI1ZW07bGVmdDotLjkzNzVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjJlbSAyZW07dHJhbnNmb3JtLW9yaWdpbjoyZW0gMmVtO2JvcmRlci1yYWRpdXM6NGVtIDAgMCA0ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRde3RvcDotLjI1ZW07bGVmdDouOTM3NWVtOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDJlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMmVtO2JvcmRlci1yYWRpdXM6MCA0ZW0gNGVtIDB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHt0b3A6MDtsZWZ0Oi40Mzc1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6Mi42ODc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtoZWlnaHQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLXNob3d7LXdlYmtpdC1hbmltYXRpb246c2hvd1N3ZWV0VG9hc3QgLjVzO2FuaW1hdGlvbjpzaG93U3dlZXRUb2FzdCAuNXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246aGlkZVN3ZWV0VG9hc3QgLjJzIGZvcndhcmRzO2FuaW1hdGlvbjpoaWRlU3dlZXRUb2FzdCAuMnMgZm9yd2FyZHN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcHstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwIC43NXM7YW5pbWF0aW9uOmFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjphbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyAuNzVzO2FuaW1hdGlvbjphbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyAuNzVzfUAtd2Via2l0LWtleWZyYW1lcyBzaG93U3dlZXRUb2FzdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTtvcGFjaXR5OjB9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7b3BhY2l0eTouNX02NiV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7b3BhY2l0eTouN30xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyBzaG93U3dlZXRUb2FzdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTtvcGFjaXR5OjB9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7b3BhY2l0eTouNX02NiV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7b3BhY2l0eTouN30xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGhpZGVTd2VldFRvYXN0ezAle29wYWNpdHk6MX0zMyV7b3BhY2l0eTouNX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGhpZGVTd2VldFRvYXN0ezAle29wYWNpdHk6MX0zMyV7b3BhY2l0eTouNX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LS4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUBrZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LS4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZ3swJXt0b3A6MS42MjVlbTtyaWdodDoxLjM3NWVtO3dpZHRoOjB9NjUle3RvcDoxLjI1ZW07cmlnaHQ6LjkzNzVlbTt3aWR0aDowfTg0JXt0b3A6LjkzNzVlbTtyaWdodDowO3dpZHRoOjEuMTI1ZW19MTAwJXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19fUBrZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93OmhpZGRlbn1ib2R5LnN3YWwyLWhlaWdodC1hdXRve2hlaWdodDphdXRvIWltcG9ydGFudH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bnt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duPi5zd2FsMi1tb2RhbHtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcHt0b3A6MDtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1sZWZ0LGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1zdGFydHt0b3A6MDtsZWZ0OjB9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9wLWVuZCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3AtcmlnaHR7dG9wOjA7cmlnaHQ6MH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLXN0YXJ0e3RvcDo1MCU7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItcmlnaHR7dG9wOjUwJTtyaWdodDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9te2JvdHRvbTowO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLXN0YXJ0e2JvdHRvbTowO2xlZnQ6MH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1yaWdodHtyaWdodDowO2JvdHRvbTowfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjEwcHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt6LWluZGV4OjEwNjA7b3ZlcmZsb3cteDpoaWRkZW47LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXthbGlnbi1pdGVtczpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHthbGlnbi1pdGVtczpmbGV4LWVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLXNlbGY6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3c+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbntmbGV4OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9we2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lcjpub3QoLnN3YWwyLXRvcCk6bm90KC5zd2FsMi10b3Atc3RhcnQpOm5vdCguc3dhbDItdG9wLWVuZCk6bm90KC5zd2FsMi10b3AtbGVmdCk6bm90KC5zd2FsMi10b3AtcmlnaHQpOm5vdCguc3dhbDItY2VudGVyLXN0YXJ0KTpub3QoLnN3YWwyLWNlbnRlci1lbmQpOm5vdCguc3dhbDItY2VudGVyLWxlZnQpOm5vdCguc3dhbDItY2VudGVyLXJpZ2h0KTpub3QoLnN3YWwyLWJvdHRvbSk6bm90KC5zd2FsMi1ib3R0b20tc3RhcnQpOm5vdCguc3dhbDItYm90dG9tLWVuZCk6bm90KC5zd2FsMi1ib3R0b20tbGVmdCk6bm90KC5zd2FsMi1ib3R0b20tcmlnaHQpOm5vdCguc3dhbDItZ3Jvdy1mdWxsc2NyZWVuKT4uc3dhbDItbW9kYWx7bWFyZ2luOmF1dG99QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFse21hcmdpbjowIWltcG9ydGFudH19LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1mYWRle3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXN9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQpfS5zd2FsMi1wb3B1cHtkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MzJlbTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjEuMjVlbTtib3JkZXItcmFkaXVzOi4zMTI1ZW07YmFja2dyb3VuZDojZmZmO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFyZW07Ym94LXNpemluZzpib3JkZXItYm94fS5zd2FsMi1wb3B1cDpmb2N1c3tvdXRsaW5lOjB9LnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmd7b3ZlcmZsb3cteTpoaWRkZW59LnN3YWwyLXBvcHVwIC5zd2FsMi1oZWFkZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXJ9LnN3YWwyLXBvcHVwIC5zd2FsMi10aXRsZXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21heC13aWR0aDoxMDAlO21hcmdpbjowIDAgLjRlbTtwYWRkaW5nOjA7Y29sb3I6IzU5NTk1OTtmb250LXNpemU6MS44NzVlbTtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06bm9uZTt3b3JkLXdyYXA6YnJlYWstd29yZH0uc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnN7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjEuMjVlbSBhdXRvIDA7ei1pbmRleDoxfS5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRde29wYWNpdHk6LjR9LnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDpob3ZlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC4xKSxyZ2JhKDAsMCwwLC4xKSl9LnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuMikscmdiYSgwLDAsMCwuMikpfS5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybXt3aWR0aDoyLjVlbTtoZWlnaHQ6Mi41ZW07bWFyZ2luOi40Njg3NWVtO3BhZGRpbmc6MDtib3JkZXI6LjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtjb2xvcjp0cmFuc3BhcmVudDtjdXJzb3I6ZGVmYXVsdDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2Vse21hcmdpbi1yaWdodDozMHB4O21hcmdpbi1sZWZ0OjMwcHh9LnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOjphZnRlcntkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O21hcmdpbi1sZWZ0OjVweDtib3JkZXI6M3B4IHNvbGlkICM5OTk7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6MXB4IDFweCAxcHggI2ZmZjtjb250ZW50OicnOy13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDthbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVke21hcmdpbjouMzEyNWVtO3BhZGRpbmc6LjYyNWVtIDJlbTtmb250LXdlaWdodDo1MDA7Ym94LXNoYWRvdzpub25lfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJte2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6IzMwODVkNjtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxLjA2MjVlbX0uc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWx7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojYWFhO2NvbG9yOiNmZmY7Zm9udC1zaXplOjEuMDYyNWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIDJweCAjZmZmLDAgMCAwIDRweCByZ2JhKDUwLDEwMCwxNTAsLjQpfS5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zd2FsMi1wb3B1cCAuc3dhbDItZm9vdGVye2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjEuMjVlbSAwIDA7cGFkZGluZzoxZW0gMCAwO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWU7Y29sb3I6IzU0NTQ1NDtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cCAuc3dhbDItaW1hZ2V7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjEuMjVlbSBhdXRvfS5zd2FsMi1wb3B1cCAuc3dhbDItY2xvc2V7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEuMmVtO2hlaWdodDoxLjJlbTtwYWRkaW5nOjA7dHJhbnNpdGlvbjpjb2xvciAuMXMgZWFzZS1vdXQ7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQ6MCAwO2NvbG9yOiNjY2M7Zm9udC1mYW1pbHk6c2VyaWY7Zm9udC1zaXplOjIuNWVtO2xpbmUtaGVpZ2h0OjEuMjtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW59LnN3YWwyLXBvcHVwIC5zd2FsMi1jbG9zZTpob3Zlcnstd2Via2l0LXRyYW5zZm9ybTpub25lO3RyYW5zZm9ybTpub25lO2NvbG9yOiNmMjc0NzR9LnN3YWwyLXBvcHVwPi5zd2FsMi1jaGVja2JveCwuc3dhbDItcG9wdXA+LnN3YWwyLWZpbGUsLnN3YWwyLXBvcHVwPi5zd2FsMi1pbnB1dCwuc3dhbDItcG9wdXA+LnN3YWwyLXJhZGlvLC5zd2FsMi1wb3B1cD4uc3dhbDItc2VsZWN0LC5zd2FsMi1wb3B1cD4uc3dhbDItdGV4dGFyZWF7ZGlzcGxheTpub25lfS5zd2FsMi1wb3B1cCAuc3dhbDItY29udGVudHtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjowO3BhZGRpbmc6MDtjb2xvcjojNTQ1NDU0O2ZvbnQtc2l6ZToxLjEyNWVtO2ZvbnQtd2VpZ2h0OjMwMDtsaW5lLWhlaWdodDpub3JtYWw7ei1pbmRleDoxO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1wb3B1cCAjc3dhbDItY29udGVudHt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94LC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZSwuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8sLnN3YWwyLXBvcHVwIC5zd2FsMi1zZWxlY3QsLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYXttYXJnaW46MWVtIGF1dG99LnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQsLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYXt3aWR0aDoxMDAlO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4zcyxib3gtc2hhZG93IC4zcztib3JkZXI6MXB4IHNvbGlkICNkOWQ5ZDk7Ym9yZGVyLXJhZGl1czouMTg3NWVtO2ZvbnQtc2l6ZToxLjEyNWVtO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA2KTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWEuc3dhbDItaW5wdXRlcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDAgMnB4ICNmMjc0NzQhaW1wb3J0YW50fS5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTpmb2N1cywuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0OmZvY3VzLC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6Zm9jdXN7Ym9yZGVyOjFweCBzb2xpZCAjYjRkYmVkO291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAzcHggI2M0ZTZmNX0uc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6OnBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6OnBsYWNlaG9sZGVyLC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6OnBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDo4MCV9LnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBvdXRwdXR7d2lkdGg6MjAlO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIGlucHV0LC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0e2hlaWdodDoyLjYyNWVtO21hcmdpbjoxZW0gYXV0bztwYWRkaW5nOjA7Zm9udC1zaXplOjEuMTI1ZW07bGluZS1oZWlnaHQ6Mi42MjVlbX0uc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MCAuNzVlbX0uc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0W3R5cGU9bnVtYmVyXXttYXgtd2lkdGg6MTBlbX0uc3dhbDItcG9wdXAgLnN3YWwyLWZpbGV7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYXtoZWlnaHQ6Ni43NWVtO3BhZGRpbmc6Ljc1ZW19LnN3YWwyLXBvcHVwIC5zd2FsMi1zZWxlY3R7bWluLXdpZHRoOjUwJTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVlbSAuNjI1ZW07Y29sb3I6IzU0NTQ1NDtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94LC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW97YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLXBvcHVwIC5zd2FsMi1jaGVja2JveCBsYWJlbCwuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvIGxhYmVse21hcmdpbjowIC42ZW07Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLXBvcHVwIC5zd2FsMi1jaGVja2JveCBpbnB1dCwuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvIGlucHV0e21hcmdpbjowIC40ZW19LnN3YWwyLXBvcHVwIC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6LjYyNWVtO2JhY2tncm91bmQ6I2YwZjBmMDtjb2xvcjojNjY2O2ZvbnQtc2l6ZToxZW07Zm9udC13ZWlnaHQ6MzAwO292ZXJmbG93OmhpZGRlbn0uc3dhbDItcG9wdXAgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZTo6YmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO21pbi13aWR0aDoxLjVlbTtoZWlnaHQ6MS41ZW07bWFyZ2luOjAgLjYyNWVtO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjVlbTt0ZXh0LWFsaWduOmNlbnRlcjtjb250ZW50OichJzt6b29tOm5vcm1hbH1Ac3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKXsuc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6MTAwJSFpbXBvcnRhbnR9LnN3YWwyLXJhbmdlIG91dHB1dHtkaXNwbGF5Om5vbmV9fUBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKSwoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsuc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6MTAwJSFpbXBvcnRhbnR9LnN3YWwyLXJhbmdlIG91dHB1dHtkaXNwbGF5Om5vbmV9fUAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKXsuc3dhbDItY2xvc2U6Zm9jdXN7b3V0bGluZToycHggc29saWQgcmdiYSg1MCwxMDAsMTUwLC40KX19LnN3YWwyLWljb257cG9zaXRpb246cmVsYXRpdmU7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDo1ZW07aGVpZ2h0OjVlbTttYXJnaW46MS4yNWVtIGF1dG8gMS44NzVlbTtib3JkZXI6LjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCU7bGluZS1oZWlnaHQ6NWVtO2N1cnNvcjpkZWZhdWx0O2JveC1zaXppbmc6Y29udGVudC1ib3g7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3pvb206bm9ybWFsfS5zd2FsMi1pY29uLXRleHR7Zm9udC1zaXplOjMuNzVlbX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NH0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJre3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXgtZ3JvdzoxfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjIuMzEyNWVtO3dpZHRoOjIuOTM3NWVtO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NH0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDoxLjA2MjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6MWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5ne2JvcmRlci1jb2xvcjojZmFjZWE4O2NvbG9yOiNmOGJiODZ9LnN3YWwyLWljb24uc3dhbDItaW5mb3tib3JkZXItY29sb3I6IzlkZTBmNjtjb2xvcjojM2ZjM2VlfS5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9ue2JvcmRlci1jb2xvcjojYzlkYWUxO2NvbG9yOiM4N2FkYmR9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozLjc1ZW07aGVpZ2h0OjcuNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotLjQzNzVlbTtsZWZ0Oi0yLjA2MzVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjMuNzVlbSAzLjc1ZW07dHJhbnNmb3JtLW9yaWdpbjozLjc1ZW0gMy43NWVtO2JvcmRlci1yYWRpdXM6Ny41ZW0gMCAwIDcuNWVtfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0uNjg3NWVtO2xlZnQ6MS44NzVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMy43NWVtO3RyYW5zZm9ybS1vcmlnaW46MCAzLjc1ZW07Ym9yZGVyLXJhZGl1czowIDcuNWVtIDcuNWVtIDB9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDotLjI1ZW07bGVmdDotLjI1ZW07d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6LjI1ZW0gc29saWQgcmdiYSgxNjUsMjIwLDEzNCwuMyk7Ym9yZGVyLXJhZGl1czo1MCU7ei1pbmRleDoyO2JveC1zaXppbmc6Y29udGVudC1ib3h9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXh7cG9zaXRpb246YWJzb2x1dGU7dG9wOi41ZW07bGVmdDoxLjYyNWVtO3dpZHRoOi40Mzc1ZW07aGVpZ2h0OjUuNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3otaW5kZXg6MX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2E1ZGM4Njt6LWluZGV4OjJ9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjIuODc1ZW07bGVmdDouODc1ZW07d2lkdGg6MS41NjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9bG9uZ117dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnN3YWwyLXByb2dyZXNzc3RlcHN7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjowIDAgMS4yNWVtO3BhZGRpbmc6MDtmb250LXdlaWdodDo2MDB9LnN3YWwyLXByb2dyZXNzc3RlcHMgbGl7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xle3dpZHRoOjJlbTtoZWlnaHQ6MmVtO2JvcmRlci1yYWRpdXM6MmVtO2JhY2tncm91bmQ6IzMwODVkNjtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjJlbTt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjIwfS5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowfS5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXB7YmFja2dyb3VuZDojMzA4NWQ2fS5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXB+LnN3YWwyLXByb2dyZXNzY2lyY2xle2JhY2tncm91bmQ6I2FkZDhlNn0uc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NjaXJjbGUuc3dhbDItYWN0aXZlcHJvZ3Jlc3NzdGVwfi5zd2FsMi1wcm9ncmVzc2xpbmV7YmFja2dyb3VuZDojYWRkOGU2fS5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2xpbmV7d2lkdGg6Mi41ZW07aGVpZ2h0Oi40ZW07bWFyZ2luOjAgLTFweDtiYWNrZ3JvdW5kOiMzMDg1ZDY7ei1pbmRleDoxMH1bY2xhc3NePXN3YWwyXXstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9LnN3YWwyLXNob3d7LXdlYmtpdC1hbmltYXRpb246c3dhbDItc2hvdyAuM3M7YW5pbWF0aW9uOnN3YWwyLXNob3cgLjNzfS5zd2FsMi1zaG93LnN3YWwyLW5vYW5pbWF0aW9uey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzO2FuaW1hdGlvbjpzd2FsMi1oaWRlIC4xNXMgZm9yd2FyZHN9LnN3YWwyLWhpZGUuc3dhbDItbm9hbmltYXRpb257LXdlYmtpdC1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX0uc3dhbDItcnRsIC5zd2FsMi1jbG9zZXtyaWdodDphdXRvO2xlZnQ6MH0uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXB7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIC43NXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzfS5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXN9LnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHR7LXdlYmtpdC1hbmltYXRpb246c3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWluO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW59LnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfS5zd2FsMi1hbmltYXRlLWVycm9yLWljb24gLnN3YWwyLXgtbWFya3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41c31ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBtZWRpYSBwcmludHtib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93LXk6c2Nyb2xsIWltcG9ydGFudH1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pPlthcmlhLWhpZGRlbj10cnVlXXtkaXNwbGF5Om5vbmV9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVye3Bvc2l0aW9uOmluaXRpYWwhaW1wb3J0YW50fX1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==