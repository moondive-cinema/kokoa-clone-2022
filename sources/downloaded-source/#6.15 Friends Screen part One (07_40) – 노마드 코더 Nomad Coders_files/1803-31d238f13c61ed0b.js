(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1803,1664,329,7718,8174,5783],{48418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,i=(a=t(67294))&&a.__esModule?a:{default:a},u=t(76273),l=t(90387),c=t(57190);var s={};function d(e,r,t,n){if(e&&u.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var r=o(u.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?u.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),f=a.href,v=a.as,p=e.children,y=e.replace,h=e.shallow,b=e.scroll,g=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var m=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),k=w[0],E=w[1],P=i.default.useCallback((function(e){k(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,k]);i.default.useEffect((function(){var e=E&&t&&u.isLocalURL(f),r="undefined"!==typeof g?g:n&&n.locale,o=s[f+"%"+v+(r?"%"+r:"")];e&&!o&&d(n,f,v,{locale:r})}),[v,f,E,g,t,n]);var C={ref:P,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:i}))}(e,n,f,v,y,h,b,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u.isLocalURL(f)&&d(n,f,v,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var M="undefined"!==typeof g?g:n&&n.locale,S=n&&n.isLocaleDomain&&u.getDomainLocale(v,M,n&&n.locales,n&&n.domainLocales);C.href=S||u.addBasePath(u.addLocale(v,M,n&&n.defaultLocale))}return i.default.cloneElement(r,C)};r.default=f},57190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!u,n=a.useRef(),c=o(a.useState(!1),2),s=c[0],d=c[1],f=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),t||s||e&&e.tagName&&(n.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=l.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,s]);return a.useEffect((function(){if(!u&&!s){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[f,s]};var a=t(67294),i=t(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map},41664:function(e,r,t){e.exports=t(48418)},50319:function(e,r,t){"use strict";t.d(r,{D:function(){return s}});var n=t(70655),o=t(67294),a=t(28291),i=t(82152),u=t(14692),l=t(30990),c=t(66252);function s(e,r){var t=(0,c.x)(null===r||void 0===r?void 0:r.client);(0,u.Vp)(e,u.n_.Mutation);var s=(0,o.useState)({called:!1,loading:!1,client:t}),d=s[0],f=s[1],v=(0,o.useRef)({result:d,mutationId:0,isMounted:!0,client:t,mutation:e,options:r});Object.assign(v.current,{client:t,options:r,mutation:e});var p=(0,o.useCallback)((function(e){void 0===e&&(e={});var r=v.current,t=r.client,o=r.options,u=r.mutation,c=(0,n.pi)((0,n.pi)({},o),{mutation:u});v.current.result.loading||c.ignoreResults||f(v.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var s=++v.current.mutationId,d=(0,a.J)(c,e);return t.mutate(d).then((function(r){var n,o,a=r.data,u=r.errors,p=u&&u.length>0?new l.c({graphQLErrors:u}):void 0;if(s===v.current.mutationId&&!d.ignoreResults){var y={called:!0,loading:!1,data:a,error:p,client:t};v.current.isMounted&&!(0,i.D)(v.current.result,y)&&f(v.current.result=y)}return null===(n=c.onCompleted)||void 0===n||n.call(c,r.data),null===(o=e.onCompleted)||void 0===o||o.call(e,r.data),r})).catch((function(r){var n,o;if(s===v.current.mutationId&&v.current.isMounted){var a={loading:!1,error:r,data:void 0,called:!0,client:t};(0,i.D)(v.current.result,a)||f(v.current.result=a)}if(c.onError||d.onError)return null===(n=c.onError)||void 0===n||n.call(c,r),null===(o=e.onError)||void 0===o||o.call(e,r),{data:void 0,errors:r};throw r}))}),[]),y=(0,o.useCallback)((function(){f({called:!1,loading:!1,client:t})}),[]);return(0,o.useEffect)((function(){return function(){v.current.isMounted=!1}}),[]),[p,(0,n.pi)({reset:y},d)]}},71641:function(e,r,t){"use strict";t.d(r,{a:function(){return f}});var n=t(70655),o=t(67294),a=t(82152),i=t(28291),u=t(85317),l=t(30990),c=t(1644),s=t(14692),d=t(66252);function f(e,r){var t,i=(0,o.useContext)((0,u.K)()),f=(0,d.x)(null===r||void 0===r?void 0:r.client),p=f.defaultOptions.watchQuery;(0,s.Vp)(e,s.n_.Query);var y,h=(0,o.useState)((function(){var t=v(e,r,p),n=null;return i.renderPromises&&(n=i.renderPromises.getSSRObservable(t)),n||(n=f.watchQuery(t),i.renderPromises&&i.renderPromises.registerSSRObservable(n,t)),i.renderPromises&&!1!==(null===r||void 0===r?void 0:r.ssr)&&!(null===r||void 0===r?void 0:r.skip)&&n.getCurrentResult().loading&&i.renderPromises.addQueryPromise({getOptions:function(){return v(e,r,p)},fetchData:function(){return new Promise((function(e){var r=n.subscribe({next:function(t){t.loading||(e(),r.unsubscribe())},error:function(){e(),r.unsubscribe()},complete:function(){e()}})}))}},(function(){return null})),n})),b=h[0],g=h[1],m=(0,o.useState)((function(){var e,t,n=b.getCurrentResult();return!n.loading&&r&&(n.error?null===(e=r.onError)||void 0===e||e.call(r,n.error):n.data&&(null===(t=r.onCompleted)||void 0===t||t.call(r,n.data))),n})),w=m[0],k=m[1],E=(0,o.useRef)({client:f,query:e,options:r,result:w,previousData:void 0,watchQueryOptions:v(e,r,p)});(0,o.useEffect)((function(){var t,n,o,i=v(e,r,p);if(E.current.client===f&&(0,a.D)(E.current.query,e))(0,a.D)(E.current.watchQueryOptions,i)||(b.setOptions(i).catch((function(){})),o=b.getCurrentResult(),E.current.watchQueryOptions=i);else{var u=f.watchQuery(i);g(u),o=u.getCurrentResult()}if(o){var l=E.current.result;l.data&&(E.current.previousData=l.data),k(E.current.result=o),!o.loading&&r&&(o.error?null===(t=r.onError)||void 0===t||t.call(r,o.error):o.data&&(null===(n=r.onCompleted)||void 0===n||n.call(r,o.data)))}Object.assign(E.current,{client:f,query:e})}),[b,f,e,r]),(0,o.useEffect)((function(){if(!i.renderPromises){var e=b.subscribe(r,(function t(n){var o,i,u=b.last;e.unsubscribe();try{b.resetLastResults(),e=b.subscribe(r,t)}finally{b.last=u}if(!n.hasOwnProperty("graphQLErrors"))throw n;var l=E.current.result;(l&&l.loading||!(0,a.D)(n,l.error))&&(k(E.current.result={data:l.data,error:n,loading:!1,networkStatus:c.I.error}),null===(i=null===(o=E.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,n))}));return function(){return e.unsubscribe()}}function r(){var e,r,t=E.current.result,n=b.getCurrentResult();t&&t.loading===n.loading&&t.networkStatus===n.networkStatus&&(0,a.D)(t.data,n.data)||(t.data&&(E.current.previousData=t.data),k(E.current.result=n),n.loading||null===(r=null===(e=E.current.options)||void 0===e?void 0:e.onCompleted)||void 0===r||r.call(e,n.data))}}),[b,i.renderPromises,f.disableNetworkFetches]),y=(t=w).partial,w=(0,n._T)(t,["partial"]),!y||!(null===r||void 0===r?void 0:r.partialRefetch)||w.loading||w.data&&0!==Object.keys(w.data).length||"cache-only"===b.options.fetchPolicy||(w=(0,n.pi)((0,n.pi)({},w),{loading:!0,networkStatus:c.I.refetch}),b.refetch()),i.renderPromises&&!1!==(null===r||void 0===r?void 0:r.ssr)&&!(null===r||void 0===r?void 0:r.skip)&&w.loading&&b.setOptions(v(e,r,p)).catch((function(){})),Object.assign(E.current,{options:r}),(i.renderPromises||f.disableNetworkFetches)&&!1===(null===r||void 0===r?void 0:r.ssr)?w=E.current.result={loading:!0,data:void 0,error:void 0,networkStatus:c.I.loading}:((null===r||void 0===r?void 0:r.skip)||"standby"===(null===r||void 0===r?void 0:r.fetchPolicy))&&(w={loading:!1,data:void 0,error:void 0,networkStatus:c.I.ready}),w.errors&&w.errors.length&&(w=(0,n.pi)((0,n.pi)({},w),{error:w.error||new l.c({graphQLErrors:w.errors})}));var P=(0,o.useMemo)((function(){return{refetch:b.refetch.bind(b),fetchMore:b.fetchMore.bind(b),updateQuery:b.updateQuery.bind(b),startPolling:b.startPolling.bind(b),stopPolling:b.stopPolling.bind(b),subscribeToMore:b.subscribeToMore.bind(b)}}),[b]);return(0,n.pi)((0,n.pi)((0,n.pi)({},P),{variables:v(e,r,p).variables,client:f,called:!0,previousData:E.current.previousData}),w)}function v(e,r,t){var o;void 0===r&&(r={});var a=r.skip,u=(r.ssr,r.onCompleted,r.onError,r.displayName,(0,n._T)(r,["skip","ssr","onCompleted","onError","displayName"])),l=(0,n.pi)({query:e},u);return t&&(l=(0,i.J)(t,l)),a?l.fetchPolicy="standby":(!(null===(o=l.context)||void 0===o?void 0:o.renderPromises)||"network-only"!==l.fetchPolicy&&"cache-and-network"!==l.fetchPolicy)&&l.fetchPolicy||(l.fetchPolicy="cache-first"),l.variables||(l.variables={}),l}}}]);