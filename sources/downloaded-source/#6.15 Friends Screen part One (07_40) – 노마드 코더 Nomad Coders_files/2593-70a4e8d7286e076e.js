(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2593,1664,329,1346,454,1350,6180,5158,7423,7718,8174],{48418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,u=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(l){u=!0,i=l}finally{try{s||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,s=(o=r(67294))&&o.__esModule?o:{default:o},u=r(76273),l=r(90387),a=r(57190);var c={};function d(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(i?"%"+i:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),o=s.default.useMemo((function(){var t=i(u.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),f=o.href,h=o.as,p=e.children,v=e.replace,y=e.shallow,m=e.scroll,_=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var g=(t=s.default.Children.only(p))&&"object"===typeof t&&t.ref,S=i(a.useIntersection({rootMargin:"200px"}),2),b=S[0],w=S[1],R=s.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);s.default.useEffect((function(){var e=w&&r&&u.isLocalURL(f),t="undefined"!==typeof _?_:n&&n.locale,i=c[f+"%"+h+(t?"%"+t:"")];e&&!i&&d(n,f,h,{locale:t})}),[h,f,w,_,r,n]);var C={ref:R,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](r,n,{shallow:o,locale:l,scroll:s}))}(e,n,f,h,v,y,m,_)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(f)&&d(n,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof _?_:n&&n.locale,j=n&&n.isLocaleDomain&&u.getDomainLocale(h,k,n&&n.locales,n&&n.domainLocales);C.href=j||u.addBasePath(u.addLocale(h,k,n&&n.defaultLocale))}return s.default.cloneElement(t,C)};t.default=f},57190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,u=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(l){u=!0,i=l}finally{try{s||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!u,n=o.useRef(),a=i(o.useState(!1),2),c=a[0],d=a[1],f=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||c||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,s=n.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,c]);return o.useEffect((function(){if(!u&&!c){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[c]),[f,c]};var o=r(67294),s=r(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map},41664:function(e,t,r){e.exports=r(48418)},69887:function(e){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},39035:function(e,t,r){"use strict";t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;o[n]||(o[n]="jsx-"+(0,i.default)(e+"-"+r));return o[n]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;o[r]||(o[r]=t.replace(/__jsx-style-dynamic-selector/g,e));return o[r]};var n,i=(n=r(69887))&&n.__esModule?n:{default:n};var o={}},44287:function(e,t,r){"use strict";var n=r(34155);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var o="undefined"!==typeof n&&n.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},u=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,u=void 0===i?o:i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;l(s(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",l("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,r,n,u=e.prototype;return u.setOptimizeForSpeed=function(e){l("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(l(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(i){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];l(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];l(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&l(s(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(r=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,r),n&&i(t,n),e}();function l(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=u},27884:function(e,t,r){"use strict";t.default=a;var n,i=(n=r(67294))&&n.__esModule?n:{default:n},o=r(28122),s=r(39035);var u=i.default.useInsertionEffect||i.default.useLayoutEffect,l="undefined"!==typeof window?(0,o.createStyleRegistry)():void 0;function a(e){var t=l||(0,o.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(u((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}a.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return(0,s.computeId)(t,r)})).join(" ")}},28122:function(e,t,r){"use strict";t.__esModule=!0,t.createStyleRegistry=c,t.StyleRegistry=function(e){var t=e.registry,r=e.children,n=(0,i.useContext)(a),o=(0,i.useState)((function(){return n||t||c()}))[0];return i.default.createElement(a.Provider,{value:o},r)},t.useStyleRegistry=function(){return(0,i.useContext)(a)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(67294)),o=(n=r(44287))&&n.__esModule?n:{default:n},s=r(39035);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var l=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var r=e[0],n=e[1];return i.default.createElement("style",{id:"__"+r,key:"__"+r,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var i=(0,s.computeId)(n,r);return{styleId:i,rules:Array.isArray(t)?t.map((function(e){return(0,s.computeSelector)(i,e)})):[(0,s.computeSelector)(i,t)]}}return{styleId:(0,s.computeId)(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=l;var a=(0,i.createContext)(null);function c(){return new l}t.StyleSheetContext=a},65988:function(e,t,r){e.exports=r(27884)},71641:function(e,t,r){"use strict";r.d(t,{a:function(){return f}});var n=r(70655),i=r(67294),o=r(82152),s=r(28291),u=r(85317),l=r(30990),a=r(1644),c=r(14692),d=r(66252);function f(e,t){var r,s=(0,i.useContext)((0,u.K)()),f=(0,d.x)(null===t||void 0===t?void 0:t.client),p=f.defaultOptions.watchQuery;(0,c.Vp)(e,c.n_.Query);var v,y=(0,i.useState)((function(){var r=h(e,t,p),n=null;return s.renderPromises&&(n=s.renderPromises.getSSRObservable(r)),n||(n=f.watchQuery(r),s.renderPromises&&s.renderPromises.registerSSRObservable(n,r)),s.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&n.getCurrentResult().loading&&s.renderPromises.addQueryPromise({getOptions:function(){return h(e,t,p)},fetchData:function(){return new Promise((function(e){var t=n.subscribe({next:function(r){r.loading||(e(),t.unsubscribe())},error:function(){e(),t.unsubscribe()},complete:function(){e()}})}))}},(function(){return null})),n})),m=y[0],_=y[1],g=(0,i.useState)((function(){var e,r,n=m.getCurrentResult();return!n.loading&&t&&(n.error?null===(e=t.onError)||void 0===e||e.call(t,n.error):n.data&&(null===(r=t.onCompleted)||void 0===r||r.call(t,n.data))),n})),S=g[0],b=g[1],w=(0,i.useRef)({client:f,query:e,options:t,result:S,previousData:void 0,watchQueryOptions:h(e,t,p)});(0,i.useEffect)((function(){var r,n,i,s=h(e,t,p);if(w.current.client===f&&(0,o.D)(w.current.query,e))(0,o.D)(w.current.watchQueryOptions,s)||(m.setOptions(s).catch((function(){})),i=m.getCurrentResult(),w.current.watchQueryOptions=s);else{var u=f.watchQuery(s);_(u),i=u.getCurrentResult()}if(i){var l=w.current.result;l.data&&(w.current.previousData=l.data),b(w.current.result=i),!i.loading&&t&&(i.error?null===(r=t.onError)||void 0===r||r.call(t,i.error):i.data&&(null===(n=t.onCompleted)||void 0===n||n.call(t,i.data)))}Object.assign(w.current,{client:f,query:e})}),[m,f,e,t]),(0,i.useEffect)((function(){if(!s.renderPromises){var e=m.subscribe(t,(function r(n){var i,s,u=m.last;e.unsubscribe();try{m.resetLastResults(),e=m.subscribe(t,r)}finally{m.last=u}if(!n.hasOwnProperty("graphQLErrors"))throw n;var l=w.current.result;(l&&l.loading||!(0,o.D)(n,l.error))&&(b(w.current.result={data:l.data,error:n,loading:!1,networkStatus:a.I.error}),null===(s=null===(i=w.current.options)||void 0===i?void 0:i.onError)||void 0===s||s.call(i,n))}));return function(){return e.unsubscribe()}}function t(){var e,t,r=w.current.result,n=m.getCurrentResult();r&&r.loading===n.loading&&r.networkStatus===n.networkStatus&&(0,o.D)(r.data,n.data)||(r.data&&(w.current.previousData=r.data),b(w.current.result=n),n.loading||null===(t=null===(e=w.current.options)||void 0===e?void 0:e.onCompleted)||void 0===t||t.call(e,n.data))}}),[m,s.renderPromises,f.disableNetworkFetches]),v=(r=S).partial,S=(0,n._T)(r,["partial"]),!v||!(null===t||void 0===t?void 0:t.partialRefetch)||S.loading||S.data&&0!==Object.keys(S.data).length||"cache-only"===m.options.fetchPolicy||(S=(0,n.pi)((0,n.pi)({},S),{loading:!0,networkStatus:a.I.refetch}),m.refetch()),s.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&S.loading&&m.setOptions(h(e,t,p)).catch((function(){})),Object.assign(w.current,{options:t}),(s.renderPromises||f.disableNetworkFetches)&&!1===(null===t||void 0===t?void 0:t.ssr)?S=w.current.result={loading:!0,data:void 0,error:void 0,networkStatus:a.I.loading}:((null===t||void 0===t?void 0:t.skip)||"standby"===(null===t||void 0===t?void 0:t.fetchPolicy))&&(S={loading:!1,data:void 0,error:void 0,networkStatus:a.I.ready}),S.errors&&S.errors.length&&(S=(0,n.pi)((0,n.pi)({},S),{error:S.error||new l.c({graphQLErrors:S.errors})}));var R=(0,i.useMemo)((function(){return{refetch:m.refetch.bind(m),fetchMore:m.fetchMore.bind(m),updateQuery:m.updateQuery.bind(m),startPolling:m.startPolling.bind(m),stopPolling:m.stopPolling.bind(m),subscribeToMore:m.subscribeToMore.bind(m)}}),[m]);return(0,n.pi)((0,n.pi)((0,n.pi)({},R),{variables:h(e,t,p).variables,client:f,called:!0,previousData:w.current.previousData}),S)}function h(e,t,r){var i;void 0===t&&(t={});var o=t.skip,u=(t.ssr,t.onCompleted,t.onError,t.displayName,(0,n._T)(t,["skip","ssr","onCompleted","onError","displayName"])),l=(0,n.pi)({query:e},u);return r&&(l=(0,s.J)(r,l)),o?l.fetchPolicy="standby":(!(null===(i=l.context)||void 0===i?void 0:i.renderPromises)||"network-only"!==l.fetchPolicy&&"cache-and-network"!==l.fetchPolicy)&&l.fetchPolicy||(l.fetchPolicy="cache-first"),l.variables||(l.variables={}),l}}}]);