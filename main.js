(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t.link,this._name=t.name,this._cardId=t._id,this._ownerId=t.owner._id,this._likes=t.likes,this._userId=o,this._openImagePopup=r,this._templateSelector=n,this._handleCardLike=i,this._handleCardDelete=u}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_openImageButton",value:function(){this._openImagePopup(this._name,this._link)}},{key:"switchLike",value:function(){this._likeButton.classList.toggle("card__like_active")}},{key:"_isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"_showStatusLike",value:function(){this._isLiked()&&this._likeButton.classList.add("card__like_active")}},{key:"showLikeCount",value:function(e){this._likeCount.textContent=e}},{key:"solidLikeStatus",value:function(e){this._likes=e}},{key:"deteleCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleCardLike(e,e._isLiked(),e._cardId)})),this._cardImage.addEventListener("click",(function(){e._openImageButton()})),this._deleteCardButton.addEventListener("click",(function(){e._handleCardDelete(e,e._cardId)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".card__title").textContent=this._name,this._likeButton=this._element.querySelector(".card__like"),this._deleteCardButton=this._element.querySelector(".card__delete"),this._cardImage=this._element.querySelector(".card__image"),this._likeCount=this._element.querySelector(".card__like-number"),this._cardImage.alt=this._name,this._cardImage.src=this._link,this.showLikeCount(this._likes.length),this._showStatusLike(),this._userId!==this._ownerId&&this._deleteCardButton.remove(),this._setEventListeners(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),r=document.querySelector(".profile__edit"),o=document.querySelector(".popup__input_type_name"),i=document.querySelector(".popup__input_type_description"),u=document.querySelector(".popup_profile"),a=document.querySelector(".profile__add-content"),c=document.querySelector(".element"),s=(document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".profile__avatar"),document.querySelector(".popup_profile"),document.querySelector(".popup__profile-form")),l=document.querySelector(".popup_image"),f=document.querySelector(".popup_card"),p=document.querySelector(".popup_delete"),y=document.querySelector(".profile__avatar-button"),d=document.querySelector(".popup_avatar"),h=document.querySelector(".popup__card-form"),v=document.querySelector(".popup__avatar-form"),m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var g=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),t.classList.add(this._config.errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListener",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"activateValidation",value:function(){this._setEventListener()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this.toggleButtonState()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var w=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=r}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._photo=t._popup.querySelector(".popup__image-photo"),t._title=t._popup.querySelector(".popup__image-description"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._photo.src=n,this._photo.alt=t,this._title.textContent=t,C(q(u.prototype),"open",this).call(this)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(j);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._button=n._form.querySelector(".popup__submit"),n._submitButtonText=n._button.textContent,n._handleSubmitForm=t,console.log(n._handleSubmitForm),n}return t=u,n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){this._form.reset(),B(A(u.prototype),"close",this).call(this)}},{key:"setInput",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._button.textContent=e?t:this._submitButtonText}},{key:"setEventListeners",value:function(){var e=this;B(A(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}}],n&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(j);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var N=function(){function e(t){var n=t.nameProfile,r=t.infoProfile,o=t._id,i=t.avatarProfile;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProf=document.querySelector(n),this._infoProf=document.querySelector(r),this._id=o,this._avatar=document.querySelector(i)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameProf.textContent,about:this._infoProf.textContent}}},{key:"setUserInfo",value:function(e){this._nameProf.textContent=e.name,this._infoProf.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}},{key:"getUserId",value:function(){return this._id}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==F(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}var z=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getInfoAboutUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(M)}},{key:"getCardsUser",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(M)}},{key:"setInfoAboutUser",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(M)}},{key:"setAddUserCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(M)}},{key:"setLikes",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(M)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(M)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(M)}},{key:"setUserAvatarProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(M)}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),M=function(e){if(e.ok){var t=e.json();return console.log(t),t}return Promise.reject(new Error("Ошибка"))};function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==G(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}function Q(){return Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},Q.apply(this,arguments)}function W(e,t){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},W(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}var Z,$=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(o){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return X(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitHandlerDeleteCard=t.bind(X(n)),n._form=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"open",value:function(e,t){Q(Y(u.prototype),"open",this).call(this),this._card=e,this._cardId=t}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandlerDeleteCard(e._card)})),Q(Y(u.prototype),"setEventListeners",this).call(this)}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(j),ee=new N({nameProfile:".profile__name",infoProfile:".profile__description",avatarProfile:".profile__avatar"}),te=new z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"cc77f94d-b1ef-42c0-9cc3-7185b7071d0e","Content-Type":"application/json"}});Promise.all([te.getInfoAboutUser(),te.getCardsUser()]).then((function(e){var t=e[0],n=e[1];ee.setUserInfo(t),ee.getUserId(t._id),Z=t._id,ee.setUserAvatar(t.avatar),oe.renderItems(n)})).catch((function(e){console.log("Ошибка ".concat(e))}));var ne=new D(u,(function(e){ne.renderLoading(!0),te.setInfoAboutUser(e).then((function(e){ee.setUserInfo(e),ne.close()})).catch((function(e){console.log("Ошибка ".concat(e))})).finally((function(){ne.renderLoading(!1)}))}));r.addEventListener("click",(function(){ne.open();var e=ee.getUserInfo();o.value=e.name,i.value=e.about,pe.activateValidation(),pe.resetValidation()})),ne.setEventListeners();var re=new D(f,(function(e){re.renderLoading(!0),te.setAddUserCard(e.name,e.link).then((function(e){var t=ie(e);oe.addItem(t),re.close()})).catch((function(e){console.log("Ошибка ".concat(e))})).finally((function(){re.renderLoading(!1)}))})),oe=new w({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){oe.addItem(ie(e))}},c);function ie(e){return new n(e,"#template-cards",le,Z,ce,ae).generateCard()}re.setEventListeners(),a.addEventListener("click",(function(){return re.open(),void ye.resetValidation()}));var ue=new $(p,(function(e){te.deleteCard(e._cardId).then((function(){e.deteleCard(),ue.close()})).catch((function(e){console.log("Ошибка ".concat(e))}))}));function ae(e,t){ue.open(e,t)}function ce(e,t,n){t?te.deleteLike(n).then((function(t){e.showLikeCount(t.likes.length),e.solidLikeStatus(t.likes),e.switchLike(),addCardPopup.close()})).catch((function(e){console.log("Ошибка ".concat(e))})):te.setLikes(n).then((function(t){e.showLikeCount(t.likes.length),e.solidLikeStatus(t.likes),e.switchLike()})).catch((function(e){console.log("Ошибка ".concat(e))}))}ue.setEventListeners();var se=new T(l);function le(e,t){se.open({name:e,link:t})}se.setEventListeners();var fe=new D(d,(function(e){fe.renderLoading(!0),te.setUserAvatarProfile(e).then((function(e){ee.setUserAvatar(e.avatar),fe.close()})).catch((function(e){console.log("Ошибка ".concat(e))})).finally((function(){fe.renderLoading(!1)}))}));fe.setEventListeners(),y.addEventListener("click",(function(){fe.open(),de.resetValidation()}));var pe=new g(m,s),ye=new g(m,h),de=new g(m,v);pe.activateValidation(),ye.activateValidation(),de.activateValidation()})();