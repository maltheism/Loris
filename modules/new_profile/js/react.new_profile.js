!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),NewProfileApp=function(_React$Component){function NewProfileApp(props){_classCallCheck(this,NewProfileApp);var _this=_possibleConstructorReturn(this,(NewProfileApp.__proto__||Object.getPrototypeOf(NewProfileApp)).call(this,props));return _this.state={isLoaded:!1,showCandidate:!1,user:{guid:{name:{first:"",middle:"",last:""},dob:{value:"",confirmation:"",city:""},gender:"Female"},psc:"",pscid:"",edc:{value:"",confirmation:""}},setup:null,div:{input:{dob:{value:document.getElementById("dob1"),confirmation:document.getElementById("dob2")},edc:{value:document.getElementById("edc1"),confirmation:document.getElementById("edc2")}},message:{error:{dob:{value:document.getElementById("dob1_error_message"),confirmation:document.getElementById("dob2_error_message")},edc:{value:document.getElementById("edc1_error_message"),confirmation:document.getElementById("edc2_error_message")},submission:document.getElementById("submission_error_message")}}}},_this.fetchData=_this.fetchData.bind(_this),_this.handlePersonalIdentification=_this.handlePersonalIdentification.bind(_this),_this.handleEdcChange=_this.handleEdcChange(_this),_this.handleEdcConfirmationChange=_this.handleEdcConfirmationChange(_this),_this.handlePscChange=_this.handlePscChange.bind(_this),_this.handlePscidChange=_this.handlePscidChange.bind(_this),_this.handleDateChange=_this.handleDateChange.bind(_this),_this.handleDateConfirmChange=_this.handleDateConfirmChange.bind(_this),_this.handleGenderChange=_this.handleGenderChange.bind(_this),_this.handleSubmit=_this.handleSubmit.bind(_this),_this}return _inherits(NewProfileApp,_React$Component),_createClass(NewProfileApp,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(prevProps,prevState){this.state.div.input.dob.value=document.getElementById("dob1"),this.state.div.input.dob.confirmation=document.getElementById("dob2"),this.state.div.input.edc.value=document.getElementById("edc1"),this.state.div.input.edc.confirmation=document.getElementById("edc2"),this.state.div.message.error.dob.value=document.getElementById("dob1_error_message"),this.state.div.message.error.dob.confirmation=document.getElementById("dob2_error_message"),this.state.div.message.error.edc.value=document.getElementById("edc1_error_message"),this.state.div.message.error.edc.confirmation=document.getElementById("edc2_error_message"),this.state.div.message.error.submission=document.getElementById("submission_error_message")}},{key:"fetchData",value:function(){$.ajax(loris.BaseURL+"/new_profile/ajax/getCandidateOptions.php",{method:"GET",dataType:"json",success:function(data){var _this2=this;console.log("ajax (get) - success!"),this.getState(function(appState){appState.setup={data:data},appState.isLoaded=!0,_this2.setState(appState),console.log(JSON.stringify(appState))})}.bind(this),error:function(_error){console.log("ajax (get) - error!"),console.log(JSON.stringify(_error))}})}},{key:"handlePersonalIdentification",value:function(name,value){var _this3=this;this.resetSubmissionError(),"guid_first_name"===name?this.getState(function(appState){appState.user.guid.name.first=value,_this3.setState(appState)}):"guid_middle_name"===name?this.getState(function(appState){appState.user.guid.name.middle=value,_this3.setState(appState)}):"guid_last_name"===name?this.getState(function(appState){appState.user.guid.name.last=value,_this3.setState(appState)}):"guid_city_of_birth"===name&&this.getState(function(appState){appState.user.guid.dob.city=value,_this3.setState(appState)})}},{key:"handleEdcChange",value:function(name,value){var _this4=this;this.resetSubmissionError();var edc1=this.state.div.input.edc.value;edc1&&(edc1.checkValidity()?this.state.div.message.error.edc.value.innerHTML="":this.state.div.message.error.edc.value.innerHTML=edc1.validationMessage,this.getState(function(appState){appState.user.edc.value=value,_this4.setState(appState)}))}},{key:"handleEdcConfirmationChange",value:function(name,value){var _this5=this;this.resetSubmissionError();var edc2=this.state.div.input.edc.confirmation;edc2&&(edc2.checkValidity()?this.state.div.message.error.edc.confirmation.innerHTML="":this.state.div.message.error.edc.confirmation.innerHTML=edc2.validationMessage,this.getState(function(appState){appState.user.edc.confirmation=value,_this5.setState(appState)}))}},{key:"handlePscChange",value:function(name,value){var _this6=this;this.resetSubmissionError(),this.getState(function(appState){appState.user.psc=value,_this6.setState(appState)})}},{key:"handlePscidChange",value:function(name,value){var _this7=this;this.resetSubmissionError(),this.getState(function(appState){appState.user.pscid=value,_this7.setState(appState)})}},{key:"handleDateChange",value:function(name,value){var _this8=this;this.resetSubmissionError();var dob1=this.state.div.input.dob.value;dob1.checkValidity()?this.state.div.message.error.dob.value.innerHTML="":this.state.div.message.error.dob.value.innerHTML=dob1.validationMessage,this.getState(function(appState){appState.user.guid.dob.value=value,_this8.setState(appState)})}},{key:"handleDateConfirmChange",value:function(name,value){var _this9=this;this.resetSubmissionError();var dob2=this.state.div.input.dob.confirmation;dob2.checkValidity()?this.state.div.message.error.dob.confirmation.innerHTML="":this.state.div.message.error.dob.confirmation.innerHTML=dob2.validationMessage,this.getState(function(appState){appState.user.guid.dob.confirmation=value,_this9.setState(appState)})}},{key:"handleGenderChange",value:function(name,value){var _this10=this;this.resetSubmissionError(),this.getState(function(appState){appState.user.guid.gender=value,_this10.setState(appState)})}},{key:"handleSubmit",value:function(e){e.preventDefault();var send={dob1:this.state.user.guid.dob.value,dob2:this.state.user.guid.dob.confirmation,gender:this.state.user.guid.gender,identification:""};if(console.log(JSON.stringify(send)),""===send.dob1||""===send.dob2||send.dob1!==send.dob2)this.state.div.message.error.submission.innerHTML="Please correct the Date of Birth.";else if(""===send.gender)this.state.div.message.error.submission.innerHTML="Please select a valid Gender";else{var id=new osi.OpenScienceIdentity({gender:this.state.user.guid.gender,first_name:this.state.user.guid.name.first,middle_name:this.state.user.guid.name.middle,last_name:this.state.user.guid.name.last,birth_day:this.state.user.guid.dob.value,city_of_birth:this.state.user.guid.dob.city});console.log(JSON.stringify(id)),id.valid()?(send.identification=id.toSignature(),$.ajax({url:loris.BaseURL+"/new_profile/ajax/createCandidate.php",type:"POST",dataType:"json",data:send,success:function(data){if(console.log("success"),console.log("data is: "+JSON.stringify(data)),data.error)document.getElementById("submission_error_message").innerHTML=data.error;else if(data.success){document.getElementById("new_profile").style.display="none";var info="New candidate created. DCCID: "+data.success.candID+" PSCID: "+data.success.PSCID;document.getElementById("candidate_info").innerHTML=info;var access='<a href="/'+data.success.candID+'/">Access this candidate</a><br>';document.getElementById("candidate_access").innerHTML=access,document.getElementById("another_profile").innerHTML='<a href="/new_profile/"> Recruit another candidate</a>',document.getElementById("candidate").style.display="block"}},error:function(_error2){console.log("error: "+JSON.stringify(_error2))}})):this.state.div.message.error.submission.innerHTML="Personal Identification has incomplete or invalid field(s)!"}}},{key:"resetSubmissionError",value:function(){var submission=this.state.div.message.error.submission;submission&&(this.state.div.message.error.submission.innerHTML="")}},{key:"getState",value:function(callback){this.setState(function(prevState){callback(prevState)})}},{key:"render",value:function(){if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var element={edc:"",psc:"",pscid:"",candidate:""};return this.state.isLoaded&&this.state.setup.data.hasOwnProperty("edc")&&(element.edc=React.createElement("div",null,React.createElement(DateElement,{id:"edc1",name:"edc1",min:this.state.setup.data.edc.options.minYear,max:this.state.setup.data.edc.options.maxYear,label:"Expected Date of Confinement",onUserInput:this.handleEdcChange,value:this.state.user.edc.value}),React.createElement("div",{id:"edc1_error_message",className:"form-group col-sm-12",style:{color:"red"}}),React.createElement(DateElement,{id:"edc2",name:"edc2",min:this.state.setup.data.edc.options.minYear,max:this.state.setup.data.edc.options.maxYear,label:"Confirm EDC",onUserInput:this.handleEdcConfirmationChange,value:this.state.user.edc.confirmation}),React.createElement("div",{id:"edc2_error_message",className:"form-group col-sm-12",style:{color:"red"}}))),this.state.isLoaded&&this.state.setup.data.hasOwnProperty("psc")&&(element.psc=React.createElement("div",null,React.createElement(SelectElement,{id:"psc",name:"psc",label:"Site",class:"form-control input-sm",options:this.state.setup.data.psc.options,required:!0,hasError:!1,value:this.state.user.psc,emptyOption:!1,onUserInput:this.handlePscChange}))),this.state.isLoaded&&this.state.setup.data.hasOwnProperty("PSCID")&&(element.pscid=React.createElement("div",null,React.createElement(TextboxElement,{id:"pscid",name:"PSCID",label:"PSCID",value:"",onUserInput:this.handlePscidChange}))),element.candidate=React.createElement("div",{id:"candidate",style:{display:"none"}},React.createElement("div",{id:"candidate_info"}),React.createElement("div",{id:"candidate_access"}),React.createElement("div",{id:"another_profile"})),React.createElement("div",null,React.createElement("div",{id:"lorisworkspace"},element.candidate,React.createElement("div",{id:"new_profile"},React.createElement("h2",{style:{color:"#064785"}},"Personal Identification:"),React.createElement(FormElement,{id:"private_info_form",name:"private_info_form",class:"form-inline"},React.createElement(TextboxElement,{id:"guid_first_name",name:"guid_first_name",label:"First name",required:!0,value:this.state.user.guid.name.first,onUserInput:this.handlePersonalIdentification}),React.createElement(TextboxElement,{id:"guid_middle_name",name:"guid_middle_name",label:"Middle name",value:this.state.user.guid.name.middle,onUserInput:this.handlePersonalIdentification}),React.createElement(TextboxElement,{id:"guid_last_name",name:"guid_last_name",label:"Last name",required:!0,value:this.state.user.guid.name.last,onUserInput:this.handlePersonalIdentification}),React.createElement(TextboxElement,{id:"guid_city_of_birth",name:"guid_city_of_birth",label:"City of birth",required:!0,value:this.state.user.guid.dob.city,onUserInput:this.handlePersonalIdentification})),React.createElement("br",null),React.createElement("h2",{style:{color:"#850608"}},"Information Saved:"),React.createElement(FormElement,{name:"new_profile_form",id:"new_profile_form",method:"POST",class:"form-inline"},React.createElement(DateElement,{id:"dob1",name:"dob1",min:this.state.setup.data.dob.options.minYear,max:this.state.setup.data.dob.options.maxYear,label:"Date of Birth",onUserInput:this.handleDateChange,value:this.state.user.guid.dob.value,required:!0}),React.createElement("div",{id:"dob1_error_message",className:"form-group col-sm-12",style:{color:"red"}}),React.createElement(DateElement,{id:"dob2",name:"dob2",min:this.state.setup.data.dob.options.minYear,max:this.state.setup.data.dob.options.maxYear,label:"Confirm Date of Birth",onUserInput:this.handleDateConfirmChange,value:this.state.user.guid.dob.confirmation,required:!0}),React.createElement("div",{id:"dob2_error_message",className:"form-group col-sm-12",style:{color:"red"}}),React.createElement(SelectElement,{id:"gender",name:"gender",label:"Gender",class:"form-control input-sm",options:this.state.setup.data.gender.options,required:!0,hasError:!1,value:this.state.user.guid.gender,emptyOption:!1,onUserInput:this.handleGenderChange}),element.edc,element.psc,element.pscid,React.createElement(ButtonElement,{name:"fire_away",label:"Create",type:"submit",onUserInput:this.handleSubmit}),React.createElement("div",{id:"submission_error_message",className:"form-group col-sm-12",style:{color:"red"}})))))}}]),NewProfileApp}(React.Component);NewProfileApp.propTypes={module:React.PropTypes.string.isRequired},NewProfileApp.defaultProps={module:""},window.onload=function(){var newProfile=React.createElement(NewProfileApp,{module:"newProfile"}),NewProfileAppDOM=document.createElement("div");NewProfileAppDOM.id="newProfile";var rootDOM=document.getElementById("lorisworkspace");rootDOM.appendChild(NewProfileAppDOM),ReactDOM.render(newProfile,document.getElementById("newProfile"))}}]);
//# sourceMappingURL=react.new_profile.js.map