(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=35)})({0:function(module,exports){module.exports=React},1:function(module,exports,__webpack_require__){if(false){var throwOnDirectAccess,isValidElement,REACT_ELEMENT_TYPE}else{module.exports=__webpack_require__(2)()}},2:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__(3);function emptyFunction(){}module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){return}var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use PropTypes.checkPropTypes() to call them. "+"Read more at http://fb.me/use-check-prop-types");err.name="Invariant Violation";throw err}shim.isRequired=shim;function getShim(){return shim}var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};ReactPropTypes.checkPropTypes=emptyFunction;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes}},3:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=ReactPropTypesSecret},35:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _passwordExpiry=__webpack_require__(36);var _passwordExpiry2=_interopRequireDefault(_passwordExpiry);var _requestAccount=__webpack_require__(37);var _requestAccount2=_interopRequireDefault(_requestAccount);var _resetPassword=__webpack_require__(38);var _resetPassword2=_interopRequireDefault(_resetPassword);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);var _Loader=__webpack_require__(6);var _Loader2=_interopRequireDefault(_Loader);var _Panel=__webpack_require__(5);var _Panel2=_interopRequireDefault(_Panel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Login=function(_Component){_inherits(Login,_Component);function Login(props){_classCallCheck(this,Login);var _this=_possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,props));_this.state={url:"",study:{logo:"",title:"",links:[],description:""},form:{value:{username:"",password:""},error:{toggle:false,message:""}},mode:"login",component:{requestAccount:null,expiredPassword:null},isLoaded:false};_this.fetchInitializerData=_this.fetchInitializerData.bind(_this);_this.handleSubmit=_this.handleSubmit.bind(_this);_this.setForm=_this.setForm.bind(_this);_this.setMode=_this.setMode.bind(_this);return _this}_createClass(Login,[{key:"componentDidMount",value:function componentDidMount(){this.fetchInitializerData()}},{key:"urlSearchParams",value:function urlSearchParams(json){return Object.keys(json).map(function(key){return encodeURIComponent(key)+"="+encodeURIComponent(json[key])}).join("&")}},{key:"fetchInitializerData",value:function fetchInitializerData(){var _this2=this;var url=window.location.origin+"/login/AjaxLogin";var send=this.urlSearchParams({command:"initialize"});fetch(url,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/x-www-form-urlencoded"},body:send}).then(function(response){return response.json()}).then(function(data){var state=Object.assign({},_this2.state);state.study.description=data.login.description;state.study.title=data.login.title;state.study.logo=window.location.origin+"/"+data.login.logo;state.component.requestAccount=data.requestAccount;state.isLoaded=true;_this2.setState(state)}).catch(function(error){})}},{key:"setForm",value:function setForm(formElement,value){var state=Object.assign({},this.state);state.form.value[formElement]=value;this.setState(state)}},{key:"handleSubmit",value:function handleSubmit(e){var _this3=this;var state=Object.assign({},this.state);var url=window.location.origin+"/login/AjaxLogin";var send=this.urlSearchParams({login:true,command:"login",username:state.form.value.username,password:state.form.value.password});fetch(url,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/x-www-form-urlencoded"},body:send}).then(function(response){return response.json()}).then(function(data){if(data.expired){var _state=Object.assign({},_this3.state);_state.component.expiredPassword={message:data.error,username:_state.form.value.username};_state.mode="expired";_this3.setState(_state)}if(data.error){var _state2=Object.assign({},_this3.state);_state2.form.error.toggle=true;_state2.form.error.message=data.error;_this3.setState(_state2)}else{window.location.href=window.location.origin}}).catch(function(error){})}},{key:"setMode",value:function setMode(mode){var state=Object.assign({},this.state);state.mode=mode;this.setState(state)}},{key:"render",value:function render(){var _this4=this;if(!this.state.isLoaded){return _react2.default.createElement(_Loader2.default,null)}if(this.state.mode==="login"){var study=_react2.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.study.description}});var error=this.state.form.error.toggle?_react2.default.createElement(StaticElement,{text:this.state.form.error.message,class:"col-xs-12 col-sm-12 col-md-12 text-danger"}):null;var login=_react2.default.createElement("div",null,_react2.default.createElement("section",{className:"study-logo"},_react2.default.createElement("img",{src:this.state.study.logo,alt:this.state.study.title})),_react2.default.createElement(FormElement,{action:"",fileUpload:"false",onSubmit:this.handleSubmit},_react2.default.createElement(TextboxElement,{name:"username",value:this.state.form.value.username,onUserInput:this.setForm,placeholder:"Username",class:"col-sm-12",required:true}),_react2.default.createElement(TextboxElement,{name:"password",value:this.state.form.value.password,onUserInput:this.setForm,placeholder:"Password",class:"col-sm-12",required:true,type:"password"}),error,_react2.default.createElement(ButtonElement,{label:"Login",type:"submit",name:"login",id:"login",columnSize:"col-sm-12",buttonClass:"btn btn-primary btn-block"})),_react2.default.createElement("div",{className:"help-links"},_react2.default.createElement("a",{onClick:function onClick(){return _this4.setMode("reset")},style:{cursor:"pointer"}},"Forgot your password?"),_react2.default.createElement("br",null),_react2.default.createElement("a",{onClick:function onClick(){return _this4.setMode("request")},style:{cursor:"pointer"}},"Request Account")),_react2.default.createElement("div",{className:"help-text"},"A WebGL-compatible browser is required for full functionality (Mozilla Firefox, Google Chrome)"));return _react2.default.createElement("div",{className:"container"},_react2.default.createElement("div",{className:"row"},_react2.default.createElement("section",{className:"col-md-4 col-md-push-8"},_react2.default.createElement(_Panel2.default,{title:"Login to LORIS",class:"panel-default login-panel",collapsing:false},login)),_react2.default.createElement("section",{className:"col-md-8 col-md-pull-4"},_react2.default.createElement(_Panel2.default,{title:this.state.study.title,class:"panel-default login-panel",collapsing:false},study))))}if(this.state.mode==="reset"){return _react2.default.createElement(_resetPassword2.default,{module:"reset",setMode:this.setMode})}if(this.state.mode==="request"){return _react2.default.createElement(_requestAccount2.default,{module:"reset",setMode:this.setMode,data:this.state.component.requestAccount})}if(this.state.mode==="expired"){return _react2.default.createElement(_passwordExpiry2.default,{module:"expired",setMode:this.setMode,data:this.state.component.expiredPassword})}}}]);return Login}(_react.Component);Login.propTypes={module:_propTypes2.default.string};window.addEventListener("load",function(){ReactDOM.render(_react2.default.createElement(Login,{module:"login"}),document.getElementsByClassName("main-content")[0])})},36:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);var _Panel=__webpack_require__(5);var _Panel2=_interopRequireDefault(_Panel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var PasswordExpired=function(_Component){_inherits(PasswordExpired,_Component);function PasswordExpired(props){_classCallCheck(this,PasswordExpired);var _this=_possibleConstructorReturn(this,(PasswordExpired.__proto__||Object.getPrototypeOf(PasswordExpired)).call(this,props));_this.state={form:{value:{username:_this.props.data.username,password:"",confirm:""},error:{toggle:false,message:""}},success:false};_this.setForm=_this.setForm.bind(_this);_this.handleSubmit=_this.handleSubmit.bind(_this);return _this}_createClass(PasswordExpired,[{key:"setForm",value:function setForm(formElement,value){var state=Object.assign({},this.state);state.form.value[formElement]=value;this.setState(state)}},{key:"urlSearchParams",value:function urlSearchParams(json){return Object.keys(json).map(function(key){return encodeURIComponent(key)+"="+encodeURIComponent(json[key])}).join("&")}},{key:"handleSubmit",value:function handleSubmit(e){var _this2=this;var state=Object.assign({},this.state);var url=window.location.origin+"/login/AjaxLogin";var send=this.urlSearchParams({command:"expired",login:true,username:state.form.value.username,password:state.form.value.password,confirm:state.form.value.confirm});fetch(url,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/x-www-form-urlencoded"},body:send}).then(function(response){return response.json()}).then(function(data){if(data.error){var _state=Object.assign({},_this2.state);_state.form.error.toggle=true;_state.form.error.message=data.error;_this2.setState(_state)}else{window.location.href=window.location.origin}}).catch(function(error){})}},{key:"render",value:function render(){var error=this.state.form.error.toggle?_react2.default.createElement(StaticElement,{text:this.state.form.error.message,class:"col-xs-12 col-sm-12 col-md-12 text-danger"}):null;var success=!this.state.request?_react2.default.createElement("div",null,_react2.default.createElement("div",null,_react2.default.createElement("p",null,_react2.default.createElement("b",null,"Password Strength Rules")),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,"The password must be at least 8 characters long"),_react2.default.createElement("li",null,"The password must contain at least 1 letter, 1 number and 1 character from !@#$%^*()"),_react2.default.createElement("li",null,"The password and the user name must not be the same"),_react2.default.createElement("li",null,"The password and the email address must not be the same"))),_react2.default.createElement(FormElement,{name:"form1",action:"",id:"form",fileUpload:"false",onSubmit:this.handleSubmit},_react2.default.createElement(TextboxElement,{name:"password",value:this.state.form.value.password,onUserInput:this.setForm,class:"col-sm-12",required:true,type:"password",placeholder:"New Password"}),_react2.default.createElement(TextboxElement,{name:"confirm",value:this.state.form.value.confirm,onUserInput:this.setForm,class:"col-sm-12",required:true,type:"password",placeholder:"Confirm Password"}),error,_react2.default.createElement(ButtonElement,{label:"Save",type:"submit",columnSize:"col-sm-12",buttonClass:"btn btn-primary btn-block"})),_react2.default.createElement("a",{onClick:function onClick(){return window.location.href=window.location.origin},style:{cursor:"pointer"}},"Back to login page")):_react2.default.createElement("div",{className:"success-message"},_react2.default.createElement("h1",null,"Thank you!"),_react2.default.createElement("p",null,"Your request for an account has been received successfully."),_react2.default.createElement("a",{onClick:function onClick(){return window.location.href=window.location.origin},style:{cursor:"pointer"}},"Return to Login Page"));return _react2.default.createElement("div",{className:"container"},_react2.default.createElement(_Panel2.default,{title:"Update Password",class:"panel-default panel-center",collapsing:false},success))}}]);return PasswordExpired}(_react.Component);PasswordExpired.propTypes={module:_propTypes2.default.string,setMode:_propTypes2.default.func,data:_propTypes2.default.object};exports.default=PasswordExpired},37:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);var _Panel=__webpack_require__(5);var _Panel2=_interopRequireDefault(_Panel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var RequestAccount=function(_Component){_inherits(RequestAccount,_Component);function RequestAccount(props){_classCallCheck(this,RequestAccount);var _this=_possibleConstructorReturn(this,(RequestAccount.__proto__||Object.getPrototypeOf(RequestAccount)).call(this,props));_this.state={form:{value:{firstname:"",lastname:"",email:"",site:_this.props.data.site?Object.keys(_this.props.data.site)[0]:"",examiner:false,radiologist:false},captcha:_this.props.data.captcha?_this.props.data.captcha:"",error:""},request:false};_this.setForm=_this.setForm.bind(_this);_this.handleSubmit=_this.handleSubmit.bind(_this);if(_this.props.data.captcha){_this.loadGoogleCaptcha()}return _this}_createClass(RequestAccount,[{key:"setForm",value:function setForm(formElement,value){var state=Object.assign({},this.state);state.form.value[formElement]=value;this.setState(state)}},{key:"urlSearchParams",value:function urlSearchParams(json){return Object.keys(json).map(function(key){return encodeURIComponent(key)+"="+encodeURIComponent(json[key])}).join("&")}},{key:"handleSubmit",value:function handleSubmit(e){var _this2=this;var state=Object.assign({},this.state);var url=window.location.origin+"/login/AjaxLogin";var send=this.urlSearchParams({command:"request",firstname:state.form.value.firstname,lastname:state.form.value.lastname,email:state.form.value.email,site:state.form.value.site,examiner:state.form.value.examiner,radiologist:state.form.value.radiologist});fetch(url,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/x-www-form-urlencoded"},body:send}).then(function(response){return response.json()}).then(function(data){_this2.setState({request:true})}).catch(function(error){_this2.setState({request:true})})}},{key:"loadGoogleCaptcha",value:function loadGoogleCaptcha(){function loadScript(url){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.type="text/javascript";script.src=url;head.appendChild(script)}loadScript("https://www.google.com/recaptcha/api.js")}},{key:"render",value:function render(){var _this3=this;var captcha=this.state.form.captcha?_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("div",{className:"g-recaptcha","data-sitekey":this.state.form.captcha}),_react2.default.createElement("span",{id:"helpBlock",className:"help-block"},_react2.default.createElement("b",{className:"text-danger"},"Please complete the reCaptcha!"))):null;var request=!this.state.request?_react2.default.createElement("div",null,_react2.default.createElement(FormElement,{name:"form1",action:"",id:"form",fileUpload:"false",onSubmit:this.handleSubmit},_react2.default.createElement(StaticElement,{text:"Please fill in the form below to request a LORIS account. "+"We will contact you once your account has been approved.",class:"col-sm-12",textClass:"text-center"}),_react2.default.createElement(TextboxElement,{name:"firstname",value:this.state.form.value.firstname,onUserInput:this.setForm,class:"col-sm-12",required:true,type:"text",placeholder:"First name"}),_react2.default.createElement(TextboxElement,{name:"lastname",value:this.state.form.value.lastname,onUserInput:this.setForm,class:"col-sm-12",required:true,type:"text",placeholder:"Last name"}),_react2.default.createElement(TextboxElement,{name:"email",value:this.state.form.value.email,onUserInput:this.setForm,class:"col-sm-12",required:true,type:"text",placeholder:"Email address"}),_react2.default.createElement(SelectElement,{name:"site",options:this.props.data.site,value:this.state.form.value.site,onUserInput:this.setForm,class:"col-sm-12",emptyOption:false,required:true}),_react2.default.createElement(CheckboxElement,{name:"examiner",label:"Examiner role",class:"row form-group",value:this.state.form.value.examiner,onUserInput:this.setForm}),_react2.default.createElement(CheckboxElement,{name:"radiologist",label:"Radiologist",class:"row form-group",value:this.state.form.value.radiologist,onUserInput:this.setForm,offset:"col-sm-offset-2"}),captcha,_react2.default.createElement(ButtonElement,{label:"Request Account",type:"submit",columnSize:"col-sm-12",buttonClass:"btn btn-primary btn-block"})),_react2.default.createElement("a",{onClick:function onClick(){return _this3.props.setMode("login")},style:{cursor:"pointer"}},"Back to login page")):_react2.default.createElement("div",{className:"success-message"},_react2.default.createElement("h1",null,"Thank you!"),_react2.default.createElement("p",null,"Your request for an account has been received successfully."),_react2.default.createElement("p",null,"Please contact your project administrator to activate this account."),_react2.default.createElement("a",{onClick:function onClick(){return window.location.href=window.location.origin},style:{cursor:"pointer"}},"Return to Login Page"));return _react2.default.createElement("div",{className:"container"},_react2.default.createElement(_Panel2.default,{title:"Request Account",class:"panel-default panel-center",collapsing:false},request))}}]);return RequestAccount}(_react.Component);RequestAccount.propTypes={module:_propTypes2.default.string,setMode:_propTypes2.default.func,data:_propTypes2.default.object};exports.default=RequestAccount},38:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);var _Panel=__webpack_require__(5);var _Panel2=_interopRequireDefault(_Panel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var ResetPassword=function(_Component){_inherits(ResetPassword,_Component);function ResetPassword(props){_classCallCheck(this,ResetPassword);var _this=_possibleConstructorReturn(this,(ResetPassword.__proto__||Object.getPrototypeOf(ResetPassword)).call(this,props));_this.state={form:{value:{username:""},error:""},reset:false};_this.setForm=_this.setForm.bind(_this);_this.handleSubmit=_this.handleSubmit.bind(_this);return _this}_createClass(ResetPassword,[{key:"setForm",value:function setForm(formElement,value){var state=Object.assign({},this.state);state.form.value[formElement]=value;this.setState(state)}},{key:"urlSearchParams",value:function urlSearchParams(json){return Object.keys(json).map(function(key){return encodeURIComponent(key)+"="+encodeURIComponent(json[key])}).join("&")}},{key:"handleSubmit",value:function handleSubmit(e){var _this2=this;var state=Object.assign({},this.state);var url=window.location.origin+"/login/AjaxLogin";var send=this.urlSearchParams({command:"reset",username:state.form.value.username});fetch(url,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/x-www-form-urlencoded"},body:send}).then(function(response){return response.json()}).then(function(data){_this2.setState({reset:true})}).catch(function(error){_this2.setState({reset:true})})}},{key:"render",value:function render(){var _this3=this;var reset=!this.state.reset?_react2.default.createElement("div",null,_react2.default.createElement(FormElement,{name:"reset",action:"",id:"form",fileUpload:"false",onSubmit:this.handleSubmit},_react2.default.createElement(StaticElement,{text:"Please enter your username below, "+"and a new password will be sent to you.",class:"col-sm-12",textClass:"text-center"}),_react2.default.createElement(TextboxElement,{name:"username",value:this.state.form.value.username,onUserInput:this.setForm,class:"col-sm-12",required:true,type:"text"}),_react2.default.createElement(ButtonElement,{label:"Reset",type:"submit",columnSize:"col-sm-12",buttonClass:"btn btn-primary btn-block"})),_react2.default.createElement("a",{onClick:function onClick(){return _this3.props.setMode("login")},style:{cursor:"pointer"}},"Back to login page")):_react2.default.createElement("div",{className:"success-message"},_react2.default.createElement("h1",null,"Thank you!"),_react2.default.createElement("p",null,"Password reset. You should receive an email within a few minutes."),_react2.default.createElement("a",{onClick:function onClick(){return window.location.href=window.location.origin},style:{cursor:"pointer"}},"Return to Login Page"));return _react2.default.createElement("div",{className:"container"},_react2.default.createElement(_Panel2.default,{title:"Reset Password",class:"panel-default panel-center",collapsing:false},reset))}}]);return ResetPassword}(_react.Component);ResetPassword.propTypes={module:_propTypes2.default.string,setMode:_propTypes2.default.func};exports.default=ResetPassword},5:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Panel=function(_Component){_inherits(Panel,_Component);function Panel(props){_classCallCheck(this,Panel);var _this=_possibleConstructorReturn(this,(Panel.__proto__||Object.getPrototypeOf(Panel)).call(this,props));_this.state={collapsed:_this.props.initCollapsed};_this.panelClass=_this.props.initCollapsed?"panel-collapse collapse":"panel-collapse collapse in";_this.toggleCollapsed=_this.toggleCollapsed.bind(_this);return _this}_createClass(Panel,[{key:"toggleCollapsed",value:function toggleCollapsed(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function render(){var glyphClass=this.state.collapsed?"glyphicon pull-right glyphicon-chevron-down":"glyphicon pull-right glyphicon-chevron-up";var panelHeading=this.props.title?_react2.default.createElement("div",{className:"panel-heading",onClick:this.toggleCollapsed,"data-toggle":this.props.collapsing?"collapse":"","data-target":"#"+this.props.id,style:this.props.collapsing?{cursor:"pointer"}:{cursor:"default"}},_react2.default.createElement("h3",{className:"panel-title"},this.props.title),this.props.collapsing?_react2.default.createElement("span",{className:glyphClass}):""):"";return _react2.default.createElement("div",{className:"panel "+this.props.class},panelHeading,_react2.default.createElement("div",{id:this.props.id,className:this.panelClass,role:"tabpanel"},_react2.default.createElement("div",{className:"panel-body",style:{height:this.props.height}},this.props.children)))}}]);return Panel}(_react.Component);Panel.propTypes={id:_propTypes2.default.string,height:_propTypes2.default.string,title:_propTypes2.default.string,class:_propTypes2.default.string,collapsing:_propTypes2.default.bool};Panel.defaultProps={initCollapsed:false,id:"default-panel",height:"100%",class:"panel-primary",collapsing:true};exports.default=Panel},6:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Loader=function(_Component){_inherits(Loader,_Component);function Loader(props){_classCallCheck(this,Loader);return _possibleConstructorReturn(this,(Loader.__proto__||Object.getPrototypeOf(Loader)).call(this,props))}_createClass(Loader,[{key:"render",value:function render(){return _react2.default.createElement("div",{className:"loader",style:{width:parseInt(this.props.size),height:parseInt(this.props.size)}})}}]);return Loader}(_react.Component);Loader.propTypes={size:_propTypes2.default.string};Loader.defaultProps={size:"120"};exports.default=Loader}});
//# sourceMappingURL=loginIndex.js.map