!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _DataIntegrityFlag=__webpack_require__(81),_DataIntegrityFlag2=_interopRequireDefault(_DataIntegrityFlag);$(function(){var dataURL=loris.BaseURL+"/data_integrity_flag/?format=json",dataIntegrity=React.createElement("div",{id:"page-data-integrity"},React.createElement(_DataIntegrityFlag2.default,{Module:"data_integrity_flag",DataURL:dataURL}));ReactDOM.render(dataIntegrity,document.getElementById("lorisworkspace"))})},3:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Panel=__webpack_require__(4),_Panel2=_interopRequireDefault(_Panel),FilterForm=function(_React$Component){function FilterForm(props){_classCallCheck(this,FilterForm);var _this=_possibleConstructorReturn(this,(FilterForm.__proto__||Object.getPrototypeOf(FilterForm)).call(this,props));return _this.clearFilter=_this.clearFilter.bind(_this),_this.getFormChildren=_this.getFormChildren.bind(_this),_this.setFilter=_this.setFilter.bind(_this),_this.onElementUpdate=_this.onElementUpdate.bind(_this),_this.queryString=QueryString.get(),_this}return _inherits(FilterForm,_React$Component),_createClass(FilterForm,[{key:"componentDidMount",value:function(){var filter={},queryString=this.queryString;Object.keys(queryString).forEach(function(key){var filterKey="candidateID"===key?"candID":key;filter[filterKey]={value:queryString[key],exactMatch:!1}}),this.props.onUpdate(filter)}},{key:"clearFilter",value:function(){this.queryString=QueryString.clear(this.props.Module),this.props.onUpdate({})}},{key:"getFormChildren",value:function(){var formChildren=[];return React.Children.forEach(this.props.children,function(child,key){if(React.isValidElement(child)&&"function"==typeof child.type&&child.props.onUserInput){var callbackFunc=child.props.onUserInput,callbackName=callbackFunc.name,elementName=child.type.displayName,queryFieldName="candID"===child.props.name?"candidateID":child.props.name,filterValue=this.queryString[queryFieldName];"onUserInput"===callbackName&&(callbackFunc="ButtonElement"===elementName&&"reset"===child.props.type?this.clearFilter:this.onElementUpdate.bind(null,elementName)),formChildren.push(React.cloneElement(child,{onUserInput:callbackFunc,value:filterValue?filterValue:"",key:key})),this.setFilter(elementName,child.props.name,filterValue)}else formChildren.push(React.cloneElement(child,{key:key}))}.bind(this)),formChildren}},{key:"setFilter",value:function(type,key,value){var filter={};return this.props.filter&&(filter=JSON.parse(JSON.stringify(this.props.filter))),key&&value?(filter[key]={},filter[key].value=value,filter[key].exactMatch="SelectElement"===type):filter&&key&&""===value&&delete filter[key],filter}},{key:"onElementUpdate",value:function(type,fieldName,fieldValue){if("string"==typeof fieldName&&"string"==typeof fieldValue){var queryFieldName="candID"===fieldName?"candidateID":fieldName;this.queryString=QueryString.set(this.queryString,queryFieldName,fieldValue);var filter=this.setFilter(type,fieldName,fieldValue);this.props.onUpdate(filter)}}},{key:"render",value:function(){var formChildren=this.getFormChildren(),formElements=this.props.formElements;return formElements&&Object.keys(formElements).forEach(function(fieldName){var queryFieldName="candID"===fieldName?"candidateID":fieldName;formElements[fieldName].onUserInput=this.onElementUpdate.bind(null,fieldName),formElements[fieldName].value=this.queryString[queryFieldName]}.bind(this)),React.createElement(_Panel2.default,{id:this.props.id,height:this.props.height,title:this.props.title},React.createElement(FormElement,this.props,formChildren))}}]),FilterForm}(React.Component);FilterForm.defaultProps={id:"selection-filter",height:"100%",title:"Selection Filter",onUpdate:function(){console.warn("onUpdate() callback is not set!")}},FilterForm.propTypes={Module:React.PropTypes.string.isRequired,filter:React.PropTypes.object.isRequired,id:React.PropTypes.string,height:React.PropTypes.string,title:React.PropTypes.string,onUpdate:React.PropTypes.func},exports.default=FilterForm},4:function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Panel=function(_React$Component){function Panel(props){_classCallCheck(this,Panel);var _this=_possibleConstructorReturn(this,(Panel.__proto__||Object.getPrototypeOf(Panel)).call(this,props));return _this.state={collapsed:_this.props.initCollapsed},_this.panelClass=_this.props.initCollapsed?"panel-collapse collapse":"panel-collapse collapse in",_this.toggleCollapsed=_this.toggleCollapsed.bind(_this),_this}return _inherits(Panel,_React$Component),_createClass(Panel,[{key:"toggleCollapsed",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var glyphClass=this.state.collapsed?"glyphicon pull-right glyphicon-chevron-down":"glyphicon pull-right glyphicon-chevron-up",panelHeading=this.props.title?React.createElement("div",{className:"panel-heading",onClick:this.toggleCollapsed,"data-toggle":"collapse","data-target":"#"+this.props.id,style:{cursor:"pointer"}},this.props.title,React.createElement("span",{className:glyphClass})):"";return React.createElement("div",{className:"panel panel-primary"},panelHeading,React.createElement("div",{id:this.props.id,className:this.panelClass,role:"tabpanel"},React.createElement("div",{className:"panel-body",style:{height:this.props.height}},this.props.children)))}}]),Panel}(React.Component);Panel.propTypes={id:React.PropTypes.string,height:React.PropTypes.string,title:React.PropTypes.string},Panel.defaultProps={initCollapsed:!1,id:"default-panel",height:"100%"},exports.default=Panel},14:function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Tabs=function(_React$Component){function Tabs(props){_classCallCheck(this,Tabs);var _this=_possibleConstructorReturn(this,(Tabs.__proto__||Object.getPrototypeOf(Tabs)).call(this,props)),hash=window.location.hash,activeTab="";return _this.props.updateURL&&hash?activeTab=hash.substr(1):_this.props.defaultTab?activeTab=_this.props.defaultTab:_this.props.tabs.length>0&&(activeTab=_this.props.tabs[0].id),_this.state={activeTab:activeTab},_this.handleClick=_this.handleClick.bind(_this),_this.getTabs=_this.getTabs.bind(_this),_this.getTabPanes=_this.getTabPanes.bind(_this),_this}return _inherits(Tabs,_React$Component),_createClass(Tabs,[{key:"handleClick",value:function(tabId,e){if(this.setState({activeTab:tabId}),this.props.onTabChange(tabId),this.props.updateURL){var scrollDistance=$("body").scrollTop()||$("html").scrollTop();window.location.hash=e.target.hash,$("html,body").scrollTop(scrollDistance)}}},{key:"getTabs",value:function(){var tabs=this.props.tabs.map(function(tab){var tabClass=this.state.activeTab===tab.id?"active":null,href="#"+tab.id,tabID="tab-"+tab.id;return React.createElement("li",{role:"presentation",className:tabClass,key:tab.id},React.createElement("a",{id:tabID,href:href,role:"tab","data-toggle":"tab",onClick:this.handleClick.bind(null,tab.id)},tab.label))}.bind(this));return tabs}},{key:"getTabPanes",value:function(){var tabPanes=React.Children.map(this.props.children,function(child,key){if(child)return React.cloneElement(child,{activeTab:this.state.activeTab,key:key})}.bind(this));return tabPanes}},{key:"render",value:function(){var tabs=this.getTabs(),tabPanes=this.getTabPanes(),tabStyle={marginLeft:0,marginBottom:"5px"};return React.createElement("div",null,React.createElement("ul",{className:"nav nav-tabs",role:"tablist",style:tabStyle},tabs),React.createElement("div",{className:"tab-content"},tabPanes))}}]),Tabs}(React.Component);Tabs.propTypes={tabs:React.PropTypes.array.isRequired,defaultTab:React.PropTypes.string,updateURL:React.PropTypes.bool},Tabs.defaultProps={onTabChange:function(){},updateURL:!1};var TabPane=function(_React$Component2){function TabPane(){return _classCallCheck(this,TabPane),_possibleConstructorReturn(this,(TabPane.__proto__||Object.getPrototypeOf(TabPane)).apply(this,arguments))}return _inherits(TabPane,_React$Component2),_createClass(TabPane,[{key:"render",value:function(){var classList="tab-pane",title=void 0;return this.props.TabId===this.props.activeTab&&(classList+=" active"),this.props.Title&&(title=React.createElement("h1",null,this.props.Title)),React.createElement("div",{role:"tabpanel",className:classList,id:this.props.TabId},title,this.props.children)}}]),TabPane}(React.Component);TabPane.propTypes={TabId:React.PropTypes.string.isRequired,Title:React.PropTypes.string,activeTab:React.PropTypes.string},exports.Tabs=Tabs,exports.TabPane=TabPane},81:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_SetFlagForm=__webpack_require__(82),_SetFlagForm2=_interopRequireDefault(_SetFlagForm),_columnFormatter=__webpack_require__(83),_columnFormatter2=_interopRequireDefault(_columnFormatter),_Tabs=__webpack_require__(14),_FilterForm=__webpack_require__(3),_FilterForm2=_interopRequireDefault(_FilterForm),DataIntegrityFlag=function(_React$Component){function DataIntegrityFlag(props){_classCallCheck(this,DataIntegrityFlag);var _this=_possibleConstructorReturn(this,(DataIntegrityFlag.__proto__||Object.getPrototypeOf(DataIntegrityFlag)).call(this,props));return _this.state={isLoaded:!1,filter:{},formData:{}},_this.fetchData=_this.fetchData.bind(_this),_this.updateFilter=_this.updateFilter.bind(_this),_this}return _inherits(DataIntegrityFlag,_React$Component),_createClass(DataIntegrityFlag,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var _this2=this;$.getJSON(this.props.DataURL,function(data){loris.flagStatusList=data.flagStatusList,_this2.setState({Data:data,isLoaded:!0})}).error(function(error){console.error(error)})}},{key:"updateFilter",value:function(filter){this.setState({filter:filter})}},{key:"render",value:function(){if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var tabList=[{id:"browse",label:"Browse"},{id:"setflag",label:"Update"}];return React.createElement(_Tabs.Tabs,{tabs:tabList,defaultTab:"browse",updateURL:!0},React.createElement(_Tabs.TabPane,{TabId:tabList[0].id},React.createElement(_FilterForm2.default,{Module:this.props.Module,name:"data_integrity_filter",id:"data_integrity_filter",columns:2,onUpdate:this.updateFilter,filter:this.state.filter},React.createElement(SelectElement,{name:"visitLabel",label:"Visit Label",options:this.state.Data.visits}),React.createElement(SelectElement,{name:"instrument",label:"Instrument",options:this.state.Data.instruments}),React.createElement(SelectElement,{name:"userID",label:"User",options:this.state.Data.users}),React.createElement(SelectElement,{name:"flagStatus",label:"Flag Status",options:this.state.Data.flagStatusList}),React.createElement(ButtonElement,{label:"Clear Filters",type:"reset"})),React.createElement(StaticDataTable,{Data:this.state.Data.Data,Headers:this.state.Data.Headers,Filter:this.state.filter,getFormattedCell:_columnFormatter2.default})),React.createElement(_Tabs.TabPane,{TabId:tabList[1].id},React.createElement(_SetFlagForm2.default,{visits:this.state.Data.visits,instruments:this.state.Data.instruments,flagStatusList:this.state.Data.flagStatusList,updateData:this.fetchData})))}}]),DataIntegrityFlag}(React.Component);exports.default=DataIntegrityFlag},82:function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),SetFlagForm=function(_React$Component){function SetFlagForm(props){_classCallCheck(this,SetFlagForm);var _this=_possibleConstructorReturn(this,(SetFlagForm.__proto__||Object.getPrototypeOf(SetFlagForm)).call(this,props));return _this.state={formData:{}},_this.setFormData=_this.setFormData.bind(_this),_this.handleSubmit=_this.handleSubmit.bind(_this),_this}return _inherits(SetFlagForm,_React$Component),_createClass(SetFlagForm,[{key:"setFormData",value:function(formElement,value){var formData=JSON.parse(JSON.stringify(this.state.formData));formData[formElement]=value,this.setState({formData:formData})}},{key:"handleSubmit",value:function(e){e.preventDefault(),$.ajax({type:"POST",url:"/data_integrity_flag/",data:JSON.stringify(this.state.formData),cache:!1,contentType:!1,processData:!1,success:function(data){swal({title:"Success!",type:"success"}),this.props.updateData(),this.setState({formData:{}})}.bind(this),error:function(err){console.error(err),swal({title:"Error!",type:"error",content:err.statusText})}})}},{key:"render",value:function(){return React.createElement("div",{className:"col-md-8 col-lg-6"},React.createElement(FormElement,{name:"flag_form",onSubmit:this.handleSubmit},React.createElement("h3",{className:"text-center"},"Update Instrument Status"),React.createElement("br",null),React.createElement(SelectElement,{name:"visitLabel",label:"Visit Label",options:this.props.visits,onUserInput:this.setFormData,value:this.state.formData.visitLabel,required:!0}),React.createElement(SelectElement,{name:"instrument",label:"Instrument",options:this.props.instruments,onUserInput:this.setFormData,value:this.state.formData.instrument,required:!0}),React.createElement(DateElement,{name:"date",label:"Date",onUserInput:this.setFormData,value:this.state.formData.date,required:!0}),React.createElement(SelectElement,{name:"flagStatus",label:"Flag Status",options:this.props.flagStatusList,onUserInput:this.setFormData,value:this.state.formData.flagStatus,required:!0}),React.createElement(TextareaElement,{name:"comment",label:"Comment",onUserInput:this.setFormData,value:this.state.formData.comment}),React.createElement(ButtonElement,{label:"Update"})))}}]),SetFlagForm}(React.Component);SetFlagForm.propTypes={},SetFlagForm.defaultProps={},exports.default=SetFlagForm},83:function(module,exports){"use strict";function formatColumn(column,cell,rowData,rowHeaders){if(loris.hiddenHeaders.indexOf(column)>-1)return null;var row={};if(rowHeaders.forEach(function(header,index){row[header]=rowData[index]},this),"Instrument"===column){var url=loris.BaseURL+"/data_team_helper/?visit_label="+row["Visit Label"]+"&instrument="+row.Instrument;return React.createElement("td",null,React.createElement("a",{href:url},cell))}if("Flag Status"===column){var statusList=loris.flagStatusList;return Object.keys(statusList).length>0&&statusList[cell]?React.createElement("td",null,statusList[cell]):React.createElement("td",null,cell)}return React.createElement("td",null,cell)}Object.defineProperty(exports,"__esModule",{value:!0}),loris.hiddenHeaders=[],exports.default=formatColumn}});
//# sourceMappingURL=index.js.map