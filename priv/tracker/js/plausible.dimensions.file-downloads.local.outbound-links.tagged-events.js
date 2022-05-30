!function(){"use strict";var o=window.location,p=window.document,s=p.currentScript,c=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function t(t,e){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var a={};a.n=t,a.u=o.href,a.d=s.getAttribute("data-domain"),a.r=p.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var i=s.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),r=a.p||{};i.forEach(function(t){var e=t.replace("event-",""),a=s.getAttribute(t);r[e]=r[e]||a}),a.p=r;var n=new XMLHttpRequest;n.open("POST",c,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback()}}}function e(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.host&&e.host!==o.host&&((a||i)&&plausible("Outbound Link: Click",{props:{url:e.href}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}p.addEventListener("click",e),p.addEventListener("auxclick",e);var a=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],i=s.getAttribute("file-types"),r=s.getAttribute("add-file-types"),l=i&&i.split(",")||r&&r.split(",").concat(a)||a;function n(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var r,n=e&&e.href&&e.href.split("?")[0];n&&(r=n.split(".").pop(),l.some(function(t){return t===r}))&&((a||i)&&plausible("File Download",{props:{url:n}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function u(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,i="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.getAttribute("data-event-name")&&((a||i)&&d(e),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!i||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}function d(t){var e=t.getAttribute("data-event-name"),a=function(t){for(var e={},a=0;a<t.length;a++){var i,r=t[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(i=r.replace("data-event-",""),e[i]=t[a].value)}return e}(t.attributes);t.href&&(a.url=t.href),plausible(e,{props:a})}p.addEventListener("click",n),p.addEventListener("auxclick",n),p.addEventListener("submit",function(t){t.target.getAttribute("data-event-name")&&(t.preventDefault(),d(t.target),setTimeout(function(){t.target.submit()},150))}),p.addEventListener("click",u),p.addEventListener("auxclick",u);var f=window.plausible&&window.plausible.q||[];window.plausible=t;for(var v,h=0;h<f.length;h++)t.apply(this,f[h]);function g(){v!==o.pathname&&(v=o.pathname,t("pageview"))}var w,m=window.history;m.pushState&&(w=m.pushState,m.pushState=function(){w.apply(this,arguments),g()},window.addEventListener("popstate",g)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){v||"visible"!==p.visibilityState||g()}):g()}();