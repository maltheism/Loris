!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),NewProfileApp=function(_React$Component){function NewProfileApp(props){_classCallCheck(this,NewProfileApp);var _this=_possibleConstructorReturn(this,(NewProfileApp.__proto__||Object.getPrototypeOf(NewProfileApp)).call(this,props));return _this.state={isLoaded:!1,user:{guid:{name:{first:"",middle:"",last:""},dob:{date:"",date_confirm:"",city:""},gender:"Female"},edc:""},setup:null},_this.fetchData=_this.fetchData.bind(_this),_this.handleDateChange=_this.handleDateChange.bind(_this),_this.handleDateConfirmChange=_this.handleDateConfirmChange.bind(_this),_this.handleGenderChange=_this.handleGenderChange.bind(_this),_this.handleSubmit=_this.handleSubmit.bind(_this),_this}return _inherits(NewProfileApp,_React$Component),_createClass(NewProfileApp,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){$.ajax(loris.BaseURL+"/new_profile/ajax/getCandidateOptions.php",{method:"GET",dataType:"json",success:function(data){var _this2=this;console.log("ajax (get) - success!"),this.getState(function(appState){appState.setup={data:data},appState.isLoaded=!0,_this2.setState(appState),console.log(JSON.stringify(appState))})}.bind(this),error:function(_error){console.log("ajax (get) - error!"),console.log(JSON.stringify(_error))}})}},{key:"handleDateChange",value:function(name,value){var _this3=this;this.getState(function(appState){appState.user.guid.dob.date=value,_this3.setState(appState),console.log(JSON.stringify(appState))})}},{key:"handleDateConfirmChange",value:function(name,value){var _this4=this;this.getState(function(appState){appState.user.guid.dob.date_confirm=value,_this4.setState(appState),console.log(JSON.stringify(appState))})}},{key:"handleGenderChange",value:function(name,value){var _this5=this;this.getState(function(appState){appState.user.guid.gender=value,_this5.setState(appState),console.log(JSON.stringify(appState))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("TODO: submit data..");var send={dob1:document.getElementById("dob1").value,dob2:document.getElementById("dob2").value,gender:document.getElementById("gender").value};console.log(JSON.stringify(send)),$.ajax({url:loris.BaseURL+"/new_profile/ajax/createCandidate.php",type:"POST",dataType:"json",data:send,success:function(data){console.log("success"),console.log("data is: "+JSON.stringify(data))},error:function(_error2){console.log("error")}})}},{key:"getState",value:function(callback){this.setState(function(prevState){callback(prevState)})}},{key:"render",value:function(){return this.state.isLoaded?React.createElement("div",null,React.createElement("div",{id:"lorisworkspace"},React.createElement(FormElement,{name:"new_profile",id:"new_profile",method:"POST",class:"form-inline",onUserInput:this.test},React.createElement(DateElement,{id:"dob1",name:"dob1",min:this.state.setup.data.dob.options.minYear,max:this.state.setup.data.dob.options.maxYear,label:"Date of Birth",onUserInput:this.handleDateChange,value:this.state.user.guid.dob.date}),React.createElement(DateElement,{id:"dob2",name:"dob2",min:this.state.setup.data.dob.options.minYear,max:this.state.setup.data.dob.options.maxYear,label:"Confirm Date of Birth",onUserInput:this.handleDateConfirmChange,value:this.state.user.guid.dob.date_confirm}),React.createElement(SelectElement,{id:"gender",name:"gender",label:"Gender",class:"form-control input-sm",options:this.state.setup.data.gender.options,required:!0,hasError:!1,value:this.state.user.guid.gender,emptyOption:!1,onUserInput:this.handleGenderChange}),React.createElement(ButtonElement,{name:"fire_away",label:"Create",type:"submit",onUserInput:this.handleSubmit})))):React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}))}}]),NewProfileApp}(React.Component);NewProfileApp.propTypes={module:React.PropTypes.string.isRequired,user:React.PropTypes.object.isRequired},NewProfileApp.defaultProps={module:""},window.onload=function(){var newProfile=React.createElement(NewProfileApp,{module:"newProfile"}),NewProfileAppDOM=document.createElement("div");NewProfileAppDOM.id="newProfile";var rootDOM=document.getElementById("lorisworkspace");rootDOM.appendChild(NewProfileAppDOM),ReactDOM.render(newProfile,document.getElementById("newProfile"))}}]);
//# sourceMappingURL=react.new_profile.js.map