!function(n,e,r,t,o,i,a,c,s){for(var u=s,f=0;f<document.scripts.length;f++)if(document.scripts[f].src.indexOf(i)>-1){u&&"no"===document.scripts[f].getAttribute("data-lazy")&&(u=!1);break}var p=[];function l(n){return"e"in n}function d(n){return"p"in n}function _(n){return"f"in n}var v=[];function y(n){u&&(l(n)||d(n)||_(n)&&n.f.indexOf("capture")>-1||_(n)&&n.f.indexOf("showReportDialog")>-1)&&L(),v.push(n)}function h(){y({e:[].slice.call(arguments)})}function g(n){y({p:n})}function E(){try{n.SENTRY_SDK_SOURCE="loader";var e=n[o],i=e.init;e.init=function(o){n.removeEventListener(r,h),n.removeEventListener(t,g);var a=c;for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(a[s]=o[s]);!function(n,e){var r=n.integrations||[];if(!Array.isArray(r))return;var t=r.map((function(n){return n.name}));n.tracesSampleRate&&-1===t.indexOf("BrowserTracing")&&(e.browserTracingIntegration?r.push(e.browserTracingIntegration({enableInp:!0})):e.BrowserTracing&&r.push(new e.BrowserTracing));(n.replaysSessionSampleRate||n.replaysOnErrorSampleRate)&&-1===t.indexOf("Replay")&&(e.replayIntegration?r.push(e.replayIntegration()):e.Replay&&r.push(new e.Replay));n.integrations=r}(a,e),i(a)},setTimeout((function(){return function(e){try{"function"==typeof n.sentryOnLoad&&(n.sentryOnLoad(),n.sentryOnLoad=void 0)}catch(n){console.error("Error while calling `sentryOnLoad` handler:"),console.error(n)}try{for(var r=0;r<p.length;r++)"function"==typeof p[r]&&p[r]();p.splice(0);for(r=0;r<v.length;r++){_(i=v[r])&&"init"===i.f&&e.init.apply(e,i.a)}m()||e.init();var t=n.onerror,o=n.onunhandledrejection;for(r=0;r<v.length;r++){var i;if(_(i=v[r])){if("init"===i.f)continue;e[i.f].apply(e,i.a)}else l(i)&&t?t.apply(n,i.e):d(i)&&o&&o.apply(n,[i.p])}}catch(n){console.error(n)}}(e)}))}catch(n){console.error(n)}}var O=!1;function L(){if(!O){O=!0;var n=e.scripts[0],r=e.createElement("script");r.src=a,r.crossOrigin="anonymous",r.addEventListener("load",E,{once:!0,passive:!0}),n.parentNode.insertBefore(r,n)}}function m(){var e=n.__SENTRY__,r=void 0!==e&&e.version;return r?!!e[r]:!(void 0===e||!e.hub||!e.hub.getClient())}n[o]=n[o]||{},n[o].onLoad=function(n){m()?n():p.push(n)},n[o].forceLoad=function(){setTimeout((function(){L()}))},["init","addBreadcrumb","captureMessage","captureException","captureEvent","configureScope","withScope","showReportDialog"].forEach((function(e){n[o][e]=function(){y({f:e,a:arguments})}})),n.addEventListener(r,h),n.addEventListener(t,g),u||setTimeout((function(){L()}))}
(
  window,
  document,
  'error',
  'unhandledrejection',
  'Sentry',
  'loader.js',
  __LOADER_BUNDLE__,
  __LOADER_OPTIONS__,
  __LOADER_LAZY__,
);
