/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
var __ID = 100;
// 获取一个唯一的标识码
function getId() {
	return __ID += 1;
}

/**
 * 获取impex的最顶端组件模型
 */
impex.$top = function() {
	if (!this.__topModel) {
		var coms = impex.findAll("*");
		for (var i = coms.length; i--;) {
			if ("C_0" === coms[i].__id) {
				this.__topModel = coms[i];
			}
		}
	}
	return this.__topModel;
}

/**
 * 验证
 */
impex.validate = {
	// 自定义验证
	directive: function(name, validateFn) {
		impex.directive(name, {
			onCreate: function() {
				_setupValidate(this);
			},
			validate: function() {
				validateFn(this);
			}
		});
	}
}

/**
 * 查找组件实例，并返回符合条件的所有实例
 * @param  {string} name       组件名，可以使用通配符*
 * @param  {Object} conditions 查询条件，JSON对象
 * @return {Array}  
 */
impex.findAll = function(name, conditions) {
	name = name.toLowerCase();
	var rs = [];
	var ks = Object.keys(this._cs);
	for(var i=ks.length;i--;){
		var comp = this._cs[ks[i]];
		if(name != '*' && comp.name != name)continue;
		var matchAll = true;
		if(conditions) {
			for(var k in conditions){
				if(comp.data[k] != conditions[k]){
					matchAll = false;
					break;
				}
			}
		}
		if(matchAll){
			rs.push(comp);
		}
		
	}
	return rs;
}

/**
 * 根据id查找组件实例
 * @param  {string} id 组件id
 * @return 组件实例
 */
impex.cget = function(id) {
	var all = this.findAll("*", {id: id});
	if (all.length > 0) return all[0];
	return null;
}

/**
 * 获取指定组件的子组件,找不到则创建
 * @param  {string || Object} com 组件id或组件实例
 */
impex.child = function(com) {
	var args = [];
	if (arguments.length > 2) {
		for (var i = 2; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
	}
	
	var comp;
	if (_.isString(com)) {
		comp = this.cget(com);
		if (!comp) return;
	}else{
		comp = com;
	}

	var subComs = comp.find("*");
	if (subComs.length > 0) {
		return subComs[0];
	}

	return comp.createSubComponent({});
}

/**
 * 获取表单元素所在的form对象，dom对象
 * @param  {Object} el 表单form对象
 */
function getForm(el) {
	var a = el;
	var parent = a.parentNode; 
	while (null != parent && parent.tagName !== "FORM") {
		parent = parent.parentNode;
	}
	return parent;
}

/**
 * 获取含有for属性的父类元素
 * @param  {Object} el 表单form对象
 */
function getForElement(el) {
	var a = el;
	var parent = a.parentNode; 
	while (parent != null && !parent.getAttribute("for")) {
		parent = parent.parentNode;
	}
	return parent;
}

/**
 * 根据路径获取对象
 * @param  {Object} obj 对象
 * @param  {String} path 查询路径
 * @param  {Int} type 查询类型 1:对象，2：函数
 */
function getObjByPath(obj, path, type) {
	var ps = path.split(".");
	var sobj = obj;
	for (var i = 0; i < ps.length; i++) {
		if (i > 0) {
			sobj = sobj[ps[i]];
		}else{
			sobj = type == 1 ? sobj.data[ps[i]] : sobj["$" + ps[i]];
		}
		if (!sobj) return null;
	}
	return sobj;
}

/**
 * 遮罩层
 */
var MaskLayer = {
	show: function(forId) {
		var body = document.body;
		
		// 创建遮罩层
		var createLayer = function(zIndex) {
			var div = document.createElement("div");
			div.className = "impex-mask-layer";
			div.style.zIndex = zIndex;
			if (_.isString(forId)) {
				div.id = forId + "_layer";
				div.setAttribute("for", forId);
				var forEl = document.getElementById(forId);
				if (null != forEl) forEl.style.zIndex = zIndex + 1;
			}
			body.appendChild(div);
		}
		
		var maxZIndex = 1000;
		var existsLayer = null;
		var ls = body.querySelectorAll(".impex-mask-layer");
		if (ls.length != 0) {
			for (var i = ls.length; i--;) {
				if (_.isString(forId) && ls[i].getAttribute("for") == forId) {
					existsLayer = ls[i];
					continue;
				}
				if (maxZIndex <= ls[i].style.zIndex) maxZIndex = parseInt(ls[i].style.zIndex) + 2;
			}
		}
		if (null != existsLayer) body.removeChild(existsLayer);
		createLayer(maxZIndex);
		body.style.overflow = "hidden";
	},
	hide: function(forId) {
		var body = document.body;
		if (_.isString(forId)) {
			var id = forId + "_layer";
			document.body.removeChild(document.getElementById(id));
			var ls = body.querySelectorAll(".impex-mask-layer");
			if (ls.length == 0) body.style.overflow = "";
		}else{
			var ls = body.querySelectorAll(".impex-mask-layer");
			for (var i = ls.length; i--;) {
				if (!ls[i].id) {
					body.removeChild(ls[i]);
				}
			}
			body.style.overflow = "";
		}
	}
}

/**
 * 在自定义组件中，根据路径获取data对象中的属性
 */
function getData(comModel, path) {
	var model = null;
	if (_.isString(path)) {
		var p = comModel.parent;
		while(null != p) {
			model = getObjByPath(p, path, 1);
			if (null == model) {
				p = p.parent;
			}else{
				break;
			}
		}
	}
	return model;
}

/**
 * 在自定义组件中，根据路径获取methods中的方法
 */
function getFn(comModel, path) {
	var model = null;
	if (_.isString(path)) {
		var p = comModel.parent;
		while(null != p) {
			model = getObjByPath(p, path, 2);
			if (null == model) {
				p = p.parent;
			}else{
				break;
			}
		}
	}
	return model;
}

/**
 * 根据路径查询父模型
 */
function getParentModel(comModel, path) {
	if (_.isString(path)) {
		var p = comModel.parent;
		while(null != p) {
			if (null != getObjByPath(p, path, 1)) {
				return p;
			}else{
				p = p.parent;
			}
		}
	}
	return null;
}

/**
 * 查找具有valid属性的对象
 * @param  {Object} obj 对象
 */
function getObjectHasValid(obj, rsAry) {
	if (!is.object(obj)) return;
	for (var k in obj) {
		if (k.indexOf("_") == 0 || k.indexOf("$") == 0 || !k || k.indexOf(".") != -1) continue;
		if (is.object(obj[k])) {
			if (obj[k].hasOwnProperty("valid")) {
				rsAry.push(obj);
			}else{
				getObjectHasValid(obj[k], rsAry);
			}
		}
	}
}

/**
 * 给dom绑定事件
 * @param  {Object} obj dom对象
 * @param  {String} type 事件类型
 * @param  {handle} handle 事件处理函数
 */
function addEvent(obj,type,handle){
    try {  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type,handle,false);
    }catch(e){
        try{  // IE8.0及其以下版本
            obj.attachEvent('on' + type,handle);
        }catch(e){  // 早期浏览器
            obj['on' + type] = handle;
        }
    }
}

/**
 * 给dom元素添加样式
 * @param  {Object} obj dom对象
 * @param  {String} className 样式
 */
function addClass(obj, className) {
	var cname = obj.className;
	var cs;
	if (_.isEmpty(cname)) {
		cs = [];
	}else{
		cs = cname.split(" ");
	}
	var addCss = className.split(" ");
	for (var i = 0; i < addCss.length; i++) {
		cs.push(addCss[i]);
	}
	obj.className = _.uniq(cs).join(" ");
}

/**
 * 移除dom元素样式
 * @param  {Object} obj dom对象
 * @param  {String} className 样式
 */
function removeClass(obj, className) {
	var cname = obj.className;
	var cs;
	if (_.isEmpty(cname)) {
		cs = [];
	}else{
		cs = cname.split(" ");
	}
	var addCss = className.split(" ");
	for (var i = 0; i < addCss.length; i++) {
		for (var j = cs.length; j--;) {
			if (addCss[i] == cs[j]) {
				cs.splice(j, 1);
				break;
			}
		}
	}
	obj.className = cs.join(" ");
}

/**
 * 根据指令名称查找指令模型
 * @param  {Object} name 指令名称
 * @param  {String} view 匹配模型
 */
impex.findByName = function(name, view) {
	var top = impex.$top();
	var qs = top.find(name);
	if (!view) return qs;
	for (var i = qs.length; i--;) {
		if (qs[i].view === view) {
			return qs[i];
		}
	}
	return null;
}

/**
 * 安装验证
 * @param  com  	组件模型
 */
var _setupValidate = function(com) {
	var comName = com.$name;
	comName = comName.substring(comName.indexOf("-") + 1, comName.length);
	com.$view.on("input", "validate()");
	var form = getForm(com.view.el);
	if (null == form) {
		setTimeout(function() {
			_setupValidate(com);
		}, 20);
		return;
	}
	var formName = form.getAttribute("name");
	var top = impex.$top();
	if (!top[formName]) {
		top[formName] = {valid: true, invalid: false, __coms: []};
	}else{
		if (!top[formName].hasOwnProperty("valid")) {
			top[formName].valid = true;
			top[formName].invalid = false;
			top[formName].__coms = [];
		}
	}
	top[formName].__coms.push(com);
	var name = com.view.attr("name");
	if (name.indexOf(".") != -1) {
		var names = name.split(".");
		var n1 = names[0], n2 = names[1];
		if (!top[formName][n1]) top[formName][n1] = {};
		top[formName][n1][n2] = {
			invalid: false,
			valid: true,
			validTypes: {}
		}
	}else{
		if (!top[formName][name]) {
			top[formName][name] = {
				invalid: false,
				valid: true,
				validTypes: {}
			}
		}
	}
	
	var fobj = top[formName];
	var vobj = getObjByPath(fobj, name);
	vobj.validTypes[comName] = true;
	com.setValidity = function(value) {
		var comName = this.$name;
		comName = comName.substring(comName.indexOf("-") + 1, comName.length);
		var form = getForm(this.view.el);
		var formName = form.getAttribute("name");
		var name = this.view.attr("name");
		var top = impex.$top();
		var fobj = top[formName];
		var vobj = getObjByPath(fobj, name);
		if (fobj.__initCheck) {	// 初始化时，先进行form验证
			if (fobj.valid) {
				fobj.valid = value;
				fobj.invalid = !value;
			}
			return;
		}
		
		vobj.validTypes[comName] = value;
		var rs = true;
		for (var k in vobj.validTypes) {
			if (!vobj.validTypes[k]) {
				rs = false;
				break;
			}
		}

		vobj.valid = rs;
		vobj.invalid = !rs;
		var frs = true;
		for (var i = fobj.__coms.length; i--;) {
			var com = fobj.__coms[i];
			var elName = com.view.attr("name");
			var fel = getObjByPath(fobj, elName);
			if (!fel.valid) {
				frs = false;
				break;
			}
		}
		fobj.valid = frs;
		fobj.invalid = !frs;
	}
}

/**
 * 最小长度
 */

impex.validate.directive("minlength", function(com) {
	var view = com.view;
	var value = view.el.value;
	if (value == "") {
		com.setValidity(true);
		return;
	}
	var len = value.length;
	var max = parseInt(com.$value);
	com.setValidity(len >= max);
});

/**
 * 最大长度
 */
impex.validate.directive("maxlength", function(com) {
	var view = com.view;
	var value = view.el.value;
	if (value == "") {
		com.setValidity(true);
		return;
	}
	var len = value.length;
	var max = parseInt(com.$value);
	com.setValidity(len <= max);
});

/**
 * 模式匹配
 */
impex.validate.directive('pattern', function(com) {
	var view = com.view;
	var value = view.el.value;
	if (value == "") {
		com.setValidity(true);
		return;
	}
	var regStr = "/^" + com.$value + "$/";
	com.setValidity(eval(regStr + ".test('"+ value +"')"));
});

/**
 * 非空
 */
impex.validate.directive('required', function(com) {
	var view = com.view;
	var value = view.el.value;
	com.setValidity(value != "");
});

/**
 * 表单提交
 */
impex.directive('submit',{
	form: null,
	onCreate: function() {
		this.view.on("submit", "submit($event)");
	},
	onInit: function() {
		var fname = this.view.attr("name");
		var top = impex.$top();
		if (!top[fname]) top[fname] = {};
		var form = top[fname];
		if (!form.hasOwnProperty("valid")) {
			form.valid = true;
			form.invalid = false;
			form.__coms = [];
		}
		if (!form.clear) {
			// 清除表单验证
			form.clear = function() {
				for (var i = this.__coms.length; i--;) {
					var com = this.__coms[i];
					var elName = com.view.attr("name");
					var fel = getObjByPath(this, elName);
					fel.valid = true;
					fel.invalid = false;
				}
				this.__initCheck = true;
				var that = this;
				setTimeout(function() {
					that.validate();
				}, 20);
			}
		}
		this.form = form;
		// 表单初始化验证标记
		form.__initCheck = true;
		form.validate = function(delay) {
			var dy = delay || 0;
			var that = this;
			setTimeout(function() {
				var coms = that.__coms;
				if (!coms) {
					that.__initCheck = false;
					return;
				}
				for (var i = coms.length;i--;) {
					coms[i].validate();
				}
				that.__initCheck = false;
			}, dy);
		}
		setTimeout(function() {
			form.validate();
		}, 20);
	},
	submit: function(e) {
		this.form.validate();
		var that = this;
		var obj = that.closest(that.$value);
		if (obj && is.function(obj[that.$value])) obj[that.$value](this);

		// 阻止浏览器默认提交行为
		if (is.ie()) {
			window.event.returnValue = false;
		}else{
			e.preventDefault();
		}
	}
});

/**
 * 可用性
 */
impex.directive("disabled", {
	observe: function(rs) {
		var that = this;
		setTimeout(function() {
			var obj = that.closest(that.$value);
			var v = that.$value;
			var vs = v.split(".");
			var o = obj;
			for (var i = 0; i <= vs.length; i++) {
				if (!o) {
					that.view.removeAttr("disabled");
					return;
				}
				if (vs[i]) {
					o = o[vs[i]];
				}
			}
			if (o) {
				that.view.attr("disabled", true);
			}else{
				that.view.removeAttr("disabled");
			}
		}, 10);
	}
});

/**
 * 消息
 */
impex.directive("messages", {
	observe: function(rs) {
		if (rs) {
			this.view.show();
		}else{
			this.view.hide();
		}
	}
});

/**
 * 消息
 */
impex.directive("message", {
	onCreate: function() {
		this.create();
	},
	create: function() {
		this.view.hide();
		var el = this.view.el;
		var form = getForm(el);
		if (null == form) {
			var that = this;
			setTimeout(function() {
				that.create();
			}, 20);
			return;
		}
		var fname = form.getAttribute("name");
		// 监控的表单dom
		var forEl = getForElement(el);
		var iname = forEl.getAttribute("for");
		// 是否显示多个校验结果
		var multiple = forEl.hasAttribute("multiple");
		var obj = this.closest(iname + "." + "validTypes." + this.$value);
		var vp = fname + "." + iname + "." + "validTypes";
		var path = vp + "." + this.$value;
		var top = impex.$top();
		var form = top[fname];
		if (!form) form = {};
		if (!form.__showMessage) {
			// 处理只显示单条验证信息
			form.__showMessage = function(path) {
				var vp = path.substring(0, path.lastIndexOf("."));
				var fvp = form[vp];
				var allHide = false;
				for (var i = 0; i < fvp.length; i++) {
					if (!fvp[i].result && !allHide) {
						allHide = true;
						fvp[i].view.show();
					}else{
						fvp[i].view.hide();
					}
				}
			}
		}
		if (!form[vp]) form[vp] = [];
		var fvp = form[vp];
		fvp.push({view: this.view, result: true, path: path});
		this.watch(path, function(type, newValue) {
			if (multiple) {	// 如果是多条显示
				if (newValue) {
					this.view.hide();
				}else{
					this.view.show();
				}
				return;
			}
			
			// 显示单条验证
			for (var i = fvp.length; i--;) {
				if (fvp[i].path == path) {
					fvp[i].result = newValue;
				}
			}
			form.__showMessage(path);
		});
	}
});

/**
 * 排序
 */
impex.directive("order", {
	onCreate: function() {
		var view = this.view;
		view.addClass("x-order");
		var el = view.el;

		var top = impex.$top();
		if (!top.data) top.data = {};
		if (!top.data[this.value]) top.data[this.value] = {key: "", dir: ""};
		var that = this;
		setTimeout(function() {
			var cns = el.children;
			for (var i = cns.length; i--;) {
				if (cns[i].hasAttribute("order")) {
					var order = cns[i].getAttribute("order");
					if (order == '') continue;
					addClass(cns[i], "sorticon");
					addEvent(cns[i], "click", function() {
						that.order(this);
					});
				}
			}
		}, 20);		
	},
	order: function(dom) {
		var order = dom.getAttribute("order");
		var top = impex.$top();
		var orderObj = top.data[this.value];
		if (orderObj.key != order) {
			orderObj.dir = "asc";
		}else{
			orderObj.dir = orderObj.dir == "asc" ? "desc" : "asc";
		}
		var el = this.view.el;
		orderObj.key = order;
		var desc_els = el.querySelectorAll(".sorticon-desc");
		var asc_els = el.querySelectorAll(".sorticon-asc");
		for (var i = desc_els.length; i--;) {
			removeClass(desc_els[i], "sorticon-desc");
		}
		for (var i = asc_els.length; i--;) {
			removeClass(asc_els[i], "sorticon-asc");
		}
		addClass(dom, "sorticon-" + orderObj.dir);
	}
});

/**
 * 自定义验证函数
 */
impex.validate.directive('validate', function(com) {
	var view = com.view;
	var value = view.el.value;
	
	var el = view.el;
	var form = getForm(el);
	var elements = form.elements;
	var values = {};
	for (var i = elements.length;i--;) {
		if (elements[i].hasAttribute("name")) {
			values[elements[i].getAttribute("name")] = elements[i].value;			
		}
	}
	var p = com.closest(com.$value);
	if (p != null) {
		com.setValidity(p[com.$value](view, values));
	}else{
		com.setValidity(true);
	}
});

/**
 * 自定义checkbox选中指令
 */
impex.directive("checked", {
	observe: function(rs) {
		this.view.el.checked = rs;
	}
})
/**
 * 格式为数值类型类型
 */
impex.filter('number', {
	to:function(place) {
		if (null === this.value || "" === this.value || undefined === this.value) {
			return "";
		}
		place = place || null;
		var m = formatMoney(this.value, place, "");
		if (m.indexOf(".") != -1) {
			if (parseInt(m.split(".")[1]) === 0) {
				return m.split(".")[0];
			}
		}
		return m;
	}
});

//保留2位小数
impex.filter('toFixed', {
    to: function(reChar){
    	var v = this.$value;
    	reChar = reChar || '2';
    	if (v != undefined && null != v && "" !== v && "null" !== v) {
    		v = v.toFixed(reChar);
    	}	
    	return v;
    }
});

impex.filter('orderBy',{
    to:function(key,dir){
        if(!key && !dir)return this.value;
        if(!(this.value instanceof Array)){
            LOGGER.warn('can only filter array');
            return this.value;
        }
		
		var vls = this.value;
		var vs = [], vs1 = [];
		for (var i = vls.length;i--;) {
			if (vls[i][key] != null && vls[i][key] != undefined) {
				vs.push(vls[i]);
			}else{
				vs1.push(vls[i]);
			}
		}
        vs.sort(function(a,b){
            var x = key?a[key]:a,
                y = key?b[key]:b;

			if (x == undefined || x == null) return 0;
			if (y == undefined || y == null) return 1;

            if(typeof x === "string"){
                return x.localeCompare(y);
            }else if(typeof x === "number"){
                return x - y;
            }else{
                return (x+'').localeCompare(y);
            }
        });
		
        if(dir === 'desc'){
           vs.reverse();
        }
		vs = vs.concat(vs1);
        return vs;
    }
});
// 中国省市县数据
var _impex_areaList = [{"p":"北京","c":[{"n":"东城区"},{"n":"西城区"},{"n":"崇文区"},{"n":"宣武区"},{"n":"朝阳区"},{"n":"丰台区"},{"n":"石景山区"},{"n":"海淀区"},{"n":"门头沟区"},{"n":"房山区"},{"n":"通州区"},{"n":"顺义区"},{"n":"昌平区"},{"n":"大兴区"},{"n":"平谷区"},{"n":"怀柔区"},{"n":"密云县"},{"n":"延庆县"}]},{"p":"天津","c":[{"n":"和平区"},{"n":"河东区"},{"n":"河西区"},{"n":"南开区"},{"n":"河北区"},{"n":"红挢区"},{"n":"滨海新区"},{"n":"东丽区"},{"n":"西青区"},{"n":"津南区"},{"n":"北辰区"},{"n":"宁河区"},{"n":"武清区"},{"n":"静海县"},{"n":"宝坻区"},{"n":"蓟县"}]},{"p":"河北","c":[{"n":"石家庄","a":[{"s":"长安区"},{"s":"桥东区"},{"s":"桥西区"},{"s":"新华区"},{"s":"井陉矿区"},{"s":"裕华区"},{"s":"井陉县"},{"s":"正定县"},{"s":"栾城县"},{"s":"行唐县"},{"s":"灵寿县"},{"s":"高邑县"},{"s":"深泽县"},{"s":"赞皇县"},{"s":"无极县"},{"s":"平山县"},{"s":"元氏县"},{"s":"赵县"},{"s":"辛集市"},{"s":"藁城市"},{"s":"晋州市"},{"s":"新乐市"},{"s":"鹿泉市"}]},{"n":"唐山","a":[{"s":"路南区"},{"s":"路北区"},{"s":"古冶区"},{"s":"开平区"},{"s":"丰南区"},{"s":"丰润区"},{"s":"滦县"},{"s":"滦南县"},{"s":"乐亭县"},{"s":"迁西县"},{"s":"玉田县"},{"s":"唐海县"},{"s":"遵化市"},{"s":"迁安市"}]},{"n":"秦皇岛","a":[{"s":"海港区"},{"s":"山海关区"},{"s":"北戴河区"},{"s":"青龙满族自治县"},{"s":"昌黎县"},{"s":"抚宁县"},{"s":"卢龙县"}]},{"n":"邯郸","a":[{"s":"邯山区"},{"s":"丛台区"},{"s":"复兴区"},{"s":"峰峰矿区"},{"s":"邯郸县"},{"s":"临漳县"},{"s":"成安县"},{"s":"大名县"},{"s":"涉县"},{"s":"磁县"},{"s":"肥乡县"},{"s":"永年县"},{"s":"邱县"},{"s":"鸡泽县"},{"s":"广平县"},{"s":"馆陶县"},{"s":"魏县"},{"s":"曲周县"},{"s":"武安市"}]},{"n":"邢台","a":[{"s":"桥东区"},{"s":"桥西区"},{"s":"邢台县"},{"s":"临城县"},{"s":"内丘县"},{"s":"柏乡县"},{"s":"隆尧县"},{"s":"任县"},{"s":"南和县"},{"s":"宁晋县"},{"s":"巨鹿县"},{"s":"新河县"},{"s":"广宗县"},{"s":"平乡县"},{"s":"威县"},{"s":"清河县"},{"s":"临西县"},{"s":"南宫市"},{"s":"沙河市"}]},{"n":"保定","a":[{"s":"新市区"},{"s":"北市区"},{"s":"南市区"},{"s":"满城县"},{"s":"清苑县"},{"s":"涞水县"},{"s":"阜平县"},{"s":"徐水县"},{"s":"定兴县"},{"s":"唐县"},{"s":"高阳县"},{"s":"容城县"},{"s":"涞源县"},{"s":"望都县"},{"s":"安新县"},{"s":"易县"},{"s":"曲阳县"},{"s":"蠡县"},{"s":"顺平县"},{"s":"博野县"},{"s":"雄县"},{"s":"涿州市"},{"s":"定州市"},{"s":"安国市"},{"s":"高碑店市"}]},{"n":"张家口","a":[{"s":"桥东区"},{"s":"桥西区"},{"s":"宣化区"},{"s":"下花园区"},{"s":"宣化县"},{"s":"张北县"},{"s":"康保县"},{"s":"沽源县"},{"s":"尚义县"},{"s":"蔚县"},{"s":"阳原县"},{"s":"怀安县"},{"s":"万全县"},{"s":"怀来县"},{"s":"涿鹿县"},{"s":"赤城县"},{"s":"崇礼县"}]},{"n":"承德","a":[{"s":"双桥区"},{"s":"双滦区"},{"s":"鹰手营子矿区"},{"s":"承德县"},{"s":"兴隆县"},{"s":"平泉县"},{"s":"滦平县"},{"s":"隆化县"},{"s":"丰宁满族自治县"},{"s":"宽城满族自治县"},{"s":"围场满族蒙古族自治县"}]},{"n":"沧州","a":[{"s":"新华区"},{"s":"运河区"},{"s":"沧县"},{"s":"青县"},{"s":"东光县"},{"s":"海兴县"},{"s":"盐山县"},{"s":"肃宁县"},{"s":"南皮县"},{"s":"吴桥县"},{"s":"献县"},{"s":"孟村回族自治县"},{"s":"泊头市"},{"s":"任丘市"},{"s":"黄骅市"},{"s":"河间市"}]},{"n":"廊坊","a":[{"s":"安次区"},{"s":"广阳区"},{"s":"固安县"},{"s":"永清县"},{"s":"香河县"},{"s":"大城县"},{"s":"文安县"},{"s":"大厂回族自治县"},{"s":"霸州市"},{"s":"三河市"}]},{"n":"衡水","a":[{"s":"桃城区"},{"s":"枣强县"},{"s":"武邑县"},{"s":"武强县"},{"s":"饶阳县"},{"s":"安平县"},{"s":"故城县"},{"s":"景县"},{"s":"阜城县"},{"s":"冀州市"},{"s":"深州市"}]}]},{"p":"山西","c":[{"n":"太原","a":[{"s":"小店区"},{"s":"迎泽区"},{"s":"杏花岭区"},{"s":"尖草坪区"},{"s":"万柏林区"},{"s":"晋源区"},{"s":"清徐县"},{"s":"阳曲县"},{"s":"娄烦县"},{"s":"古交市"}]},{"n":"大同","a":[{"s":"城区"},{"s":"矿区"},{"s":"南郊区"},{"s":"新荣区"},{"s":"阳高县"},{"s":"天镇县"},{"s":"广灵县"},{"s":"灵丘县"},{"s":"浑源县"},{"s":"左云县"},{"s":"大同县"}]},{"n":"阳泉","a":[{"s":"城区"},{"s":"矿区"},{"s":"郊区"},{"s":"平定县"},{"s":"盂县"}]},{"n":"长治","a":[{"s":"城区"},{"s":"郊区"},{"s":"长治县"},{"s":"襄垣县"},{"s":"屯留县"},{"s":"平顺县"},{"s":"黎城县"},{"s":"壶关县"},{"s":"长子县"},{"s":"武乡县"},{"s":"沁县"},{"s":"沁源县"},{"s":"潞城市"}]},{"n":"晋城","a":[{"s":"城区"},{"s":"沁水县"},{"s":"阳城县"},{"s":"陵川县"},{"s":"泽州县"},{"s":"高平市"}]},{"n":"朔州","a":[{"s":"朔城区"},{"s":"平鲁区"},{"s":"山阴县"},{"s":"应县"},{"s":"右玉县"},{"s":"怀仁县"}]},{"n":"晋中","a":[{"s":"榆次区"},{"s":"榆社县"},{"s":"左权县"},{"s":"和顺县"},{"s":"昔阳县"},{"s":"寿阳县"},{"s":"太谷县"},{"s":"祁县"},{"s":"平遥县"},{"s":"灵石县"},{"s":"介休市"}]},{"n":"运城","a":[{"s":"盐湖区"},{"s":"临猗县"},{"s":"万荣县"},{"s":"闻喜县"},{"s":"稷山县"},{"s":"新绛县"},{"s":"绛县"},{"s":"垣曲县"},{"s":"夏县"},{"s":"平陆县"},{"s":"芮城县"},{"s":"永济市"},{"s":"河津市"}]},{"n":"忻州","a":[{"s":"忻府区"},{"s":"定襄县"},{"s":"五台县"},{"s":"代县"},{"s":"繁峙县"},{"s":"宁武县"},{"s":"静乐县"},{"s":"神池县"},{"s":"五寨县"},{"s":"岢岚县"},{"s":"河曲县"},{"s":"保德县"},{"s":"偏关县"},{"s":"原平市"}]},{"n":"临汾","a":[{"s":"尧都区"},{"s":"曲沃县"},{"s":"翼城县"},{"s":"襄汾县"},{"s":"洪洞县"},{"s":"古县"},{"s":"安泽县"},{"s":"浮山县"},{"s":"吉县"},{"s":"乡宁县"},{"s":"大宁县"},{"s":"隰县"},{"s":"永和县"},{"s":"蒲县"},{"s":"汾西县"},{"s":"侯马市"},{"s":"霍州市"}]},{"n":"吕梁","a":[{"s":"离石区"},{"s":"文水县"},{"s":"交城县"},{"s":"兴县"},{"s":"临县"},{"s":"柳林县"},{"s":"石楼县"},{"s":"岚县"},{"s":"方山县"},{"s":"中阳县"},{"s":"交口县"},{"s":"孝义市"},{"s":"汾阳市"}]}]},{"p":"内蒙古","c":[{"n":"呼和浩特","a":[{"s":"新城区"},{"s":"回民区"},{"s":"玉泉区"},{"s":"玉泉区"},{"s":"赛罕区"},{"s":"土默特左旗"},{"s":"托克托县"},{"s":"和林格尔县"},{"s":"清水河县"},{"s":"武川县"}]},{"n":"包头","a":[{"s":"东河区"},{"s":"昆都仑区"},{"s":"青山区"},{"s":"石拐区"},{"s":"白云矿区"},{"s":"九原区"},{"s":"土默特右旗"},{"s":"固阳县"},{"s":"达尔罕茂明安联合旗"}]},{"n":"乌海","a":[{"s":"海勃湾区"},{"s":"海南区"},{"s":"乌达区"}]},{"n":"赤峰","a":[{"s":"红山区"},{"s":"元宝山区"},{"s":"松山区"},{"s":"阿鲁科尔沁旗"},{"s":"巴林左旗"},{"s":"巴林右旗"},{"s":"林西县"},{"s":"克什克腾旗"},{"s":"翁牛特旗"},{"s":"喀喇沁旗"},{"s":"宁城县"},{"s":"敖汉旗"}]},{"n":"通辽","a":[{"s":"科尔沁区"},{"s":"科尔沁左翼中旗"},{"s":"科尔沁左翼后旗"},{"s":"开鲁县"},{"s":"库伦旗"},{"s":"奈曼旗"},{"s":"扎鲁特旗"},{"s":"霍林郭勒市"}]},{"n":"鄂尔多斯","a":[{"s":"东胜区"},{"s":"达拉特旗"},{"s":"准格尔旗"},{"s":"鄂托克前旗"},{"s":"鄂托克旗"},{"s":"杭锦旗"},{"s":"乌审旗"},{"s":"伊金霍洛旗"}]},{"n":"呼伦贝尔","a":[{"s":"海拉尔区"},{"s":"阿荣旗"},{"s":"莫力达瓦达斡尔族自治旗"},{"s":"鄂伦春自治旗"},{"s":"鄂温克族自治旗"},{"s":"陈巴尔虎旗"},{"s":"新巴尔虎左旗"},{"s":"新巴尔虎右旗"},{"s":"满洲里市"},{"s":"牙克石市"},{"s":"扎兰屯市"},{"s":"额尔古纳市"},{"s":"根河市"}]},{"n":"巴彦淖尔","a":[{"s":"临河区"},{"s":"五原县"},{"s":"磴口县"},{"s":"乌拉特前旗"},{"s":"乌拉特中旗"},{"s":"乌拉特后旗"},{"s":"杭锦后旗"}]},{"n":"乌兰察布","a":[{"s":"集宁区"},{"s":"卓资县"},{"s":"化德县"},{"s":"商都县"},{"s":"兴和县"},{"s":"凉城县"},{"s":"察哈尔右翼前旗"},{"s":"察哈尔右翼中旗"},{"s":"察哈尔右翼后旗"},{"s":"四子王旗"},{"s":"丰镇市"}]},{"n":"兴安","a":[{"s":"乌兰浩特市"},{"s":"阿尔山市"},{"s":"科尔沁右翼前旗"},{"s":"科尔沁右翼中旗"},{"s":"扎赉特旗"},{"s":"突泉县"}]},{"n":"锡林郭勒","a":[{"s":"二连浩特市"},{"s":"锡林浩特市"},{"s":"阿巴嘎旗"},{"s":"苏尼特左旗"},{"s":"苏尼特右旗"},{"s":"东乌珠穆沁旗"},{"s":"西乌珠穆沁旗"},{"s":"太仆寺旗"},{"s":"镶黄旗"},{"s":"正镶白旗"},{"s":"正蓝旗"},{"s":"多伦县"}]},{"n":"阿拉善","a":[{"s":"阿拉善左旗"},{"s":"阿拉善右旗"},{"s":"额济纳旗"}]}]},{"p":"辽宁","c":[{"n":"沈阳","a":[{"s":"和平区"},{"s":"沈河区"},{"s":"大东区"},{"s":"皇姑区"},{"s":"铁西区"},{"s":"苏家屯区"},{"s":"东陵区"},{"s":"新城子区"},{"s":"于洪区"},{"s":"辽中县"},{"s":"康平县"},{"s":"法库县"},{"s":"新民市"}]},{"n":"大连","a":[{"s":"中山区"},{"s":"西岗区"},{"s":"沙河口区"},{"s":"甘井子区"},{"s":"旅顺口区"},{"s":"金州区"},{"s":"长海县"},{"s":"瓦房店市"},{"s":"普兰店市"},{"s":"庄河市"}]},{"n":"鞍山","a":[{"s":"铁东区"},{"s":"铁西区"},{"s":"立山区"},{"s":"千山区"},{"s":"台安县"},{"s":"210323"},{"s":"海城市"}]},{"n":"抚顺","a":[{"s":"新抚区"},{"s":"东洲区"},{"s":"望花区"},{"s":"顺城区"},{"s":"抚顺县"},{"s":"新宾满族自治县"},{"s":"清原满族自治县"}]},{"n":"本溪","a":[{"s":"平山区"},{"s":"溪湖区"},{"s":"明山区"},{"s":"南芬区"},{"s":"本溪满族自治县"},{"s":"桓仁满族自治县"}]},{"n":"丹东","a":[{"s":"元宝区"},{"s":"振兴区"},{"s":"振安区"},{"s":"宽甸满族自治县"},{"s":"东港市"},{"s":"凤城市"}]},{"n":"锦州","a":[{"s":"古塔区"},{"s":"凌河区"},{"s":"太和区"},{"s":"黑山县"},{"s":"义县"},{"s":"凌海市"},{"s":"北镇市"}]},{"n":"营口","a":[{"s":"站前区"},{"s":"西市区"},{"s":"鲅鱼圈区"},{"s":"老边区"},{"s":"盖州市"},{"s":"大石桥市"}]},{"n":"阜新","a":[{"s":"海州区"},{"s":"新邱区"},{"s":"太平区"},{"s":"清河门区"},{"s":"细河区"},{"s":"阜新蒙古族自治县"},{"s":"彰武县"}]},{"n":"辽阳","a":[{"s":"白塔区"},{"s":"文圣区"},{"s":"宏伟区"},{"s":"弓长岭区"},{"s":"太子河区"},{"s":"辽阳县"},{"s":"灯塔市"}]},{"n":"盘锦","a":[{"s":"双台子区"},{"s":"兴隆台区"},{"s":"大洼县"},{"s":"盘山县"}]},{"n":"铁岭","a":[{"s":"银州区"},{"s":"清河区"},{"s":"铁岭县"},{"s":"西丰县"},{"s":"昌图县"},{"s":"调兵山市"},{"s":"开原市"}]},{"n":"朝阳","a":[{"s":"双塔区"},{"s":"龙城区"},{"s":"朝阳县"},{"s":"建平县"},{"s":"喀喇沁左翼蒙古族自治县"},{"s":"北票市"},{"s":"凌源市"}]},{"n":"葫芦岛","a":[{"s":"连山区"},{"s":"龙港区"},{"s":"南票区"},{"s":"绥中县"},{"s":"建昌县"},{"s":"兴城市"}]}]},{"p":"吉林","c":[{"n":"长春","a":[{"s":"南关区"},{"s":"宽城区"},{"s":"朝阳区"},{"s":"二道区"},{"s":"绿园区"},{"s":"双阳区"},{"s":"农安县"},{"s":"九台市"},{"s":"榆树市"},{"s":"德惠市"}]},{"n":"吉林","a":[{"s":"昌邑区"},{"s":"龙潭区"},{"s":"船营区"},{"s":"丰满区"},{"s":"永吉县"},{"s":"蛟河市"},{"s":"桦甸市"},{"s":"舒兰市"},{"s":"磐石市"}]},{"n":"四平","a":[{"s":"铁西区"},{"s":"铁东区"},{"s":"梨树县"},{"s":"伊通满族自治县"},{"s":"公主岭市"},{"s":"双辽市"}]},{"n":"辽源","a":[{"s":"龙山区"},{"s":"西安区"},{"s":"东丰县"},{"s":"东辽县"}]},{"n":"通化","a":[{"s":"东昌区"},{"s":"二道江区"},{"s":"通化县"},{"s":"辉南县"},{"s":"柳河县"},{"s":"梅河口市"},{"s":"集安市"}]},{"n":"白山","a":[{"s":"八道江区"},{"s":"江源区"},{"s":"抚松县"},{"s":"靖宇县"},{"s":"长白朝鲜族自治县"},{"s":"临江市"}]},{"n":"松原","a":[{"s":"宁江区"},{"s":"前郭尔罗斯蒙古族自治县"},{"s":"长岭县"},{"s":"乾安县"},{"s":"扶余县"}]},{"n":"白城","a":[{"s":"洮北区"},{"s":"镇赉县"},{"s":"通榆县"},{"s":"洮南市"},{"s":"大安市"}]},{"n":"延边","a":[{"s":"延吉市"},{"s":"图们市"},{"s":"敦化市"},{"s":"珲春市"},{"s":"龙井市"},{"s":"和龙市"},{"s":"汪清县"},{"s":"安图县"}]}]},{"p":"黑龙江","c":[{"n":"哈尔滨","a":[{"s":"道里区"},{"s":"南岗区"},{"s":"道外区"},{"s":"平房区"},{"s":"松北区"},{"s":"香坊区"},{"s":"呼兰区"},{"s":"阿城区"},{"s":"依兰县"},{"s":"方正县"},{"s":"宾县"},{"s":"巴彦县"},{"s":"木兰县"},{"s":"通河县"},{"s":"延寿县"},{"s":"双城市"},{"s":"尚志市"},{"s":"五常市"}]},{"n":"齐齐哈尔","a":[{"s":"龙沙区"},{"s":"建华区"},{"s":"铁锋区"},{"s":"昂昂溪区"},{"s":"富拉尔基区"},{"s":"碾子山区"},{"s":"梅里斯达斡尔族区"},{"s":"龙江县"},{"s":"依安县"},{"s":"泰来县"},{"s":"甘南县"},{"s":"富裕县"},{"s":"克山县"},{"s":"克东县"},{"s":"拜泉县"},{"s":"讷河市"}]},{"n":"鸡西","a":[{"s":"鸡冠区"},{"s":"恒山区"},{"s":"滴道区"},{"s":"梨树区"},{"s":"城子河区"},{"s":"麻山区"},{"s":"鸡东县"},{"s":"虎林市"},{"s":"密山市"}]},{"n":"鹤岗","a":[{"s":"向阳区"},{"s":"工农区"},{"s":"南山区"},{"s":"兴安区"},{"s":"东山区"},{"s":"兴山区"},{"s":"萝北县"},{"s":"绥滨县"}]},{"n":"双鸭山","a":[{"s":"尖山区"},{"s":"岭东区"},{"s":"四方台区"},{"s":"宝山区"},{"s":"集贤县"},{"s":"友谊县"},{"s":"宝清县"},{"s":"饶河县"}]},{"n":"大庆","a":[{"s":"萨尔图区"},{"s":"龙凤区"},{"s":"让胡路区"},{"s":"红岗区"},{"s":"大同区"},{"s":"肇州县"},{"s":"肇源县"},{"s":"林甸县"},{"s":"杜尔伯特蒙古族自治县"}]},{"n":"伊春","a":[{"s":"伊春区"},{"s":"南岔区"},{"s":"友好区"},{"s":"西林区"},{"s":"翠峦区"},{"s":"新青区"},{"s":"美溪区"},{"s":"金山屯区"},{"s":"五营区"},{"s":"乌马河区"},{"s":"汤旺河区"},{"s":"带岭区"},{"s":"乌伊岭区"},{"s":"红星区"},{"s":"上甘岭区"},{"s":"嘉荫县"},{"s":"铁力市"}]},{"n":"佳木斯","a":[{"s":"向阳区"},{"s":"前进区"},{"s":"东风区"},{"s":"郊区"},{"s":"桦南县"},{"s":"桦川县"},{"s":"汤原县"},{"s":"抚远县"},{"s":"同江市"},{"s":"富锦市"}]},{"n":"七台河","a":[{"s":"新兴区"},{"s":"桃山区"},{"s":"茄子河区"},{"s":"勃利县"}]},{"n":"牡丹江","a":[{"s":"东安区"},{"s":"阳明区"},{"s":"爱民区"},{"s":"西安区"},{"s":"东宁县"},{"s":"林口县"},{"s":"绥芬河市"},{"s":"海林市"},{"s":"宁安市"},{"s":"穆棱市"}]},{"n":"黑河","a":[{"s":"爱辉区"},{"s":"嫩江县"},{"s":"逊克县"},{"s":"孙吴县"},{"s":"北安市"},{"s":"五大连池市"}]},{"n":"绥化","a":[{"s":"北林区"},{"s":"望奎县"},{"s":"兰西县"},{"s":"青冈县"},{"s":"庆安县"},{"s":"明水县"},{"s":"绥棱县"},{"s":"安达市"},{"s":"肇东市"},{"s":"海伦市"}]},{"n":"大兴安岭","a":[{"s":"加格达奇区"},{"s":"松岭区"},{"s":"新林区"},{"s":"呼中区"},{"s":"呼玛县"},{"s":"塔河县"},{"s":"漠河县"}]}]},{"p":"上海","c":[{"n":"黄浦区"},{"n":"卢湾区"},{"n":"徐汇区"},{"n":"长宁区"},{"n":"静安区"},{"n":"普陀区"},{"n":"闸北区"},{"n":"虹口区"},{"n":"杨浦区"},{"n":"闵行区"},{"n":"宝山区"},{"n":"嘉定区"},{"n":"浦东新区"},{"n":"金山区"},{"n":"松江区"},{"n":"奉贤区"},{"n":"青浦区"},{"n":"崇明县"}]},{"p":"江苏","c":[{"n":"南京","a":[{"s":"玄武区"},{"s":"白下区"},{"s":"秦淮区"},{"s":"建邺区"},{"s":"鼓楼区"},{"s":"下关区"},{"s":"浦口区"},{"s":"栖霞区"},{"s":"雨花台区"},{"s":"江宁区"},{"s":"六合区"},{"s":"溧水县"},{"s":"高淳县"}]},{"n":"无锡","a":[{"s":"崇安区"},{"s":"南长区"},{"s":"北塘区"},{"s":"锡山区"},{"s":"惠山区"},{"s":"滨湖区"},{"s":"江阴市"},{"s":"宜兴市"}]},{"n":"徐州","a":[{"s":"鼓楼区"},{"s":"云龙区"},{"s":"九里区"},{"s":"贾汪区"},{"s":"泉山区"},{"s":"丰县"},{"s":"沛县"},{"s":"铜山县"},{"s":"睢宁县"},{"s":"新沂市"},{"s":"邳州市"}]},{"n":"常州","a":[{"s":"天宁区"},{"s":"钟楼区"},{"s":"戚墅堰区"},{"s":"新北区"},{"s":"武进区"},{"s":"溧阳市"},{"s":"金坛市"}]},{"n":"苏州","a":[{"s":"沧浪区"},{"s":"平江区"},{"s":"金阊区"},{"s":"虎丘区"},{"s":"吴中区"},{"s":"相城区"},{"s":"常熟市"},{"s":"张家港市"},{"s":"昆山市"},{"s":"吴江市"},{"s":"太仓市"}]},{"n":"南通","a":[{"s":"崇川区"},{"s":"港闸区"},{"s":"海安县"},{"s":"如东县"},{"s":"启东市"},{"s":"如皋市"},{"s":"通州市"},{"s":"海门市"}]},{"n":"连云港","a":[{"s":"连云区"},{"s":"新浦区"},{"s":"海州区"},{"s":"赣榆县"},{"s":"东海县"},{"s":"灌云县"},{"s":"灌南县"}]},{"n":"淮安","a":[{"s":"清河区"},{"s":"楚州区"},{"s":"淮阴区"},{"s":"清浦区"},{"s":"涟水县"},{"s":"洪泽县"},{"s":"盱眙县"},{"s":"金湖县"}]},{"n":"盐城","a":[{"s":"亭湖区"},{"s":"盐都区"},{"s":"响水县"},{"s":"滨海县"},{"s":"阜宁县"},{"s":"射阳县"},{"s":"建湖县"},{"s":"东台市"},{"s":"大丰市"}]},{"n":"扬州","a":[{"s":"广陵区"},{"s":"邗江区"},{"s":"维扬区"},{"s":"宝应县"},{"s":"仪征市"},{"s":"高邮市"},{"s":"江都市"}]},{"n":"镇江","a":[{"s":"京口区"},{"s":"润州区"},{"s":"丹徒区"},{"s":"丹阳市"},{"s":"扬中市"},{"s":"句容市"}]},{"n":"泰州","a":[{"s":"海陵区"},{"s":"高港区"},{"s":"兴化市"},{"s":"靖江市"},{"s":"泰兴市"},{"s":"姜堰市"}]},{"n":"宿迁","a":[{"s":"宿城区"},{"s":"宿豫区"},{"s":"沭阳县"},{"s":"泗阳县"},{"s":"泗洪县"}]}]},{"p":"浙江","c":[{"n":"杭州","a":[{"s":"上城区"},{"s":"下城区"},{"s":"江干区"},{"s":"拱墅区"},{"s":"西湖区"},{"s":"滨江区"},{"s":"萧山区"},{"s":"余杭区"},{"s":"桐庐县"},{"s":"淳安县"},{"s":"建德市"},{"s":"富阳市"},{"s":"临安市"}]},{"n":"宁波","a":[{"s":"海曙区"},{"s":"江东区"},{"s":"江北区"},{"s":"北仑区"},{"s":"镇海区"},{"s":"鄞州区"},{"s":"象山县"},{"s":"宁海县"},{"s":"余姚市"},{"s":"慈溪市"},{"s":"奉化市"}]},{"n":"温州","a":[{"s":"鹿城区"},{"s":"龙湾区"},{"s":"瓯海区"},{"s":"洞头县"},{"s":"永嘉县"},{"s":"平阳县"},{"s":"苍南县"},{"s":"文成县"},{"s":"泰顺县"},{"s":"瑞安市"},{"s":"乐清市"}]},{"n":"嘉兴","a":[{"s":"南湖区"},{"s":"秀洲区"},{"s":"嘉善县"},{"s":"海盐县"},{"s":"海宁市"},{"s":"平湖市"},{"s":"桐乡市"}]},{"n":"湖州","a":[{"s":"吴兴区"},{"s":"南浔区"},{"s":"德清县"},{"s":"长兴县"},{"s":"安吉县"}]},{"n":"绍兴","a":[{"s":"越城区"},{"s":"绍兴县"},{"s":"新昌县"},{"s":"诸暨市"},{"s":"上虞市"},{"s":"嵊州市"}]},{"n":"金华","a":[{"s":"婺城区"},{"s":"金东区"},{"s":"武义县"},{"s":"浦江县"},{"s":"磐安县"},{"s":"兰溪市"},{"s":"义乌市"},{"s":"东阳市"},{"s":"永康市"}]},{"n":"衢州","a":[{"s":"柯城区"},{"s":"衢江区"},{"s":"常山县"},{"s":"开化县"},{"s":"龙游县"},{"s":"江山市"}]},{"n":"舟山","a":[{"s":"定海区"},{"s":"普陀区"},{"s":"岱山县"},{"s":"嵊泗县"}]},{"n":"台州","a":[{"s":"椒江区"},{"s":"黄岩区"},{"s":"路桥区"},{"s":"玉环县"},{"s":"三门县"},{"s":"天台县"},{"s":"仙居县"},{"s":"温岭市"},{"s":"临海市"}]},{"n":"丽水","a":[{"s":"莲都区"},{"s":"青田县"},{"s":"缙云县"},{"s":"遂昌县"},{"s":"松阳县"},{"s":"云和县"},{"s":"庆元县"},{"s":"景宁畲族自治县"},{"s":"龙泉市"}]}]},{"p":"安徽","c":[{"n":"合肥","a":[{"s":"瑶海区"},{"s":"庐阳区"},{"s":"蜀山区"},{"s":"包河区"},{"s":"长丰县"},{"s":"肥东县"},{"s":"肥西县"}]},{"n":"芜湖","a":[{"s":"镜湖区"},{"s":"弋江区"},{"s":"鸠江区"},{"s":"三山区"},{"s":"芜湖县"},{"s":"繁昌县"},{"s":"南陵县"}]},{"n":"蚌埠","a":[{"s":"龙子湖区"},{"s":"蚌山区"},{"s":"禹会区"},{"s":"淮上区"},{"s":"怀远县"},{"s":"五河县"},{"s":"固镇县"}]},{"n":"淮南","a":[{"s":"大通区"},{"s":"田家庵区"},{"s":"谢家集区"},{"s":"八公山区"},{"s":"潘集区"},{"s":"凤台县"}]},{"n":"马鞍山","a":[{"s":"金家庄区"},{"s":"花山区"},{"s":"雨山区"},{"s":"当涂县"}]},{"n":"淮北","a":[{"s":"杜集区"},{"s":"相山区"},{"s":"烈山区"},{"s":"濉溪县"}]},{"n":"铜陵","a":[{"s":"铜官山区"},{"s":"狮子山区"},{"s":"郊区"},{"s":"铜陵县"}]},{"n":"安庆","a":[{"s":"迎江区"},{"s":"大观区"},{"s":"宜秀区"},{"s":"怀宁县"},{"s":"枞阳县"},{"s":"潜山县"},{"s":"太湖县"},{"s":"宿松县"},{"s":"望江县"},{"s":"岳西县"},{"s":"桐城市"}]},{"n":"黄山","a":[{"s":"屯溪区"},{"s":"黄山区"},{"s":"徽州区"},{"s":"歙县"},{"s":"休宁县"},{"s":"黟县"},{"s":"祁门县"}]},{"n":"滁州","a":[{"s":"琅琊区"},{"s":"南谯区"},{"s":"来安县"},{"s":"全椒县"},{"s":"定远县"},{"s":"凤阳县"},{"s":"天长市"},{"s":"明光市"}]},{"n":"阜阳","a":[{"s":"颍州区"},{"s":"颍东区"},{"s":"颍泉区"},{"s":"临泉县"},{"s":"太和县"},{"s":"阜南县"},{"s":"颍上县"},{"s":"界首市"}]},{"n":"宿州","a":[{"s":"埇桥区"},{"s":"砀山县"},{"s":"萧县"},{"s":"灵璧县"},{"s":"泗县"}]},{"n":"巢湖","a":[{"s":"居巢区"},{"s":"庐江县"},{"s":"无为县"},{"s":"含山县"},{"s":"和县"}]},{"n":"六安","a":[{"s":"金安区"},{"s":"裕安区"},{"s":"寿县"},{"s":"霍邱县"},{"s":"舒城县"},{"s":"金寨县"},{"s":"霍山县"}]},{"n":"亳州","a":[{"s":"谯城区"},{"s":"涡阳县"},{"s":"蒙城县"},{"s":"利辛县"}]},{"n":"池州","a":[{"s":"贵池区"},{"s":"东至县"},{"s":"石台县"},{"s":"青阳县"}]},{"n":"宣城","a":[{"s":"宣州区"},{"s":"郎溪县"},{"s":"广德县"},{"s":"泾县"},{"s":"绩溪县"},{"s":"旌德县"},{"s":"宁国市"}]}]},{"p":"福建","c":[{"n":"福州","a":[{"s":"鼓楼区"},{"s":"台江区"},{"s":"仓山区"},{"s":"马尾区"},{"s":"晋安区"},{"s":"闽侯县"},{"s":"连江县"},{"s":"罗源县"},{"s":"闽清县"},{"s":"永泰县"},{"s":"平潭县"},{"s":"福清市"},{"s":"长乐市"}]},{"n":"厦门","a":[{"s":"思明区"},{"s":"海沧区"},{"s":"湖里区"},{"s":"集美区"},{"s":"同安区"},{"s":"翔安区"}]},{"n":"莆田","a":[{"s":"城厢区"},{"s":"涵江区"},{"s":"荔城区"},{"s":"秀屿区"},{"s":"仙游县"}]},{"n":"三明","a":[{"s":"梅列区"},{"s":"三元区"},{"s":"明溪县"},{"s":"清流县"},{"s":"宁化县"},{"s":"大田县"},{"s":"尤溪县"},{"s":"沙县"},{"s":"将乐县"},{"s":"泰宁县"},{"s":"建宁县"},{"s":"永安市"}]},{"n":"泉州","a":[{"s":"鲤城区"},{"s":"丰泽区"},{"s":"洛江区"},{"s":"泉港区"},{"s":"惠安县"},{"s":"安溪县"},{"s":"永春县"},{"s":"德化县"},{"s":"金门县"},{"s":"石狮市"},{"s":"晋江市"},{"s":"南安市"}]},{"n":"漳州","a":[{"s":"芗城区"},{"s":"龙文区"},{"s":"云霄县"},{"s":"漳浦县"},{"s":"诏安县"},{"s":"长泰县"},{"s":"东山县"},{"s":"南靖县"},{"s":"平和县"},{"s":"华安县"},{"s":"龙海市"}]},{"n":"南平","a":[{"s":"延平区"},{"s":"顺昌县"},{"s":"浦城县"},{"s":"光泽县"},{"s":"松溪县"},{"s":"政和县"},{"s":"邵武市"},{"s":"武夷山市"},{"s":"建瓯市"},{"s":"建阳市"}]},{"n":"龙岩","a":[{"s":"新罗区"},{"s":"长汀县"},{"s":"永定县"},{"s":"上杭县"},{"s":"武平县"},{"s":"连城县"},{"s":"漳平市"}]},{"n":"宁德","a":[{"s":"蕉城区"},{"s":"霞浦县"},{"s":"古田县"},{"s":"屏南县"},{"s":"寿宁县"},{"s":"周宁县"},{"s":"柘荣县"},{"s":"福安市"},{"s":"福鼎市"}]}]},{"p":"江西","c":[{"n":"南昌","a":[{"s":"东湖区"},{"s":"西湖区"},{"s":"青云谱区"},{"s":"湾里区"},{"s":"青山湖区"},{"s":"南昌县"},{"s":"新建县"},{"s":"安义县"},{"s":"进贤县"}]},{"n":"景德镇","a":[{"s":"昌江区"},{"s":"珠山区"},{"s":"浮梁县"},{"s":"乐平市"}]},{"n":"萍乡","a":[{"s":"安源区"},{"s":"湘东区"},{"s":"莲花县"},{"s":"上栗县"},{"s":"芦溪县"}]},{"n":"九江","a":[{"s":"庐山区"},{"s":"浔阳区"},{"s":"九江县"},{"s":"武宁县"},{"s":"修水县"},{"s":"永修县"},{"s":"德安县"},{"s":"星子县"},{"s":"都昌县"},{"s":"湖口县"},{"s":"彭泽县"},{"s":"瑞昌市"}]},{"n":"新余","a":[{"s":"渝水区"},{"s":"分宜县"}]},{"n":"鹰潭","a":[{"s":"月湖区"},{"s":"余江县"},{"s":"贵溪市"}]},{"n":"赣州","a":[{"s":"章贡区"},{"s":"赣县"},{"s":"信丰县"},{"s":"大余县"},{"s":"上犹县"},{"s":"崇义县"},{"s":"安远县"},{"s":"龙南县"},{"s":"定南县"},{"s":"全南县"},{"s":"宁都县"},{"s":"于都县"},{"s":"兴国县"},{"s":"会昌县"},{"s":"寻乌县"},{"s":"石城县"},{"s":"瑞金市"},{"s":"南康市"}]},{"n":"吉安","a":[{"s":"吉州区"},{"s":"青原区"},{"s":"吉安县"},{"s":"吉水县"},{"s":"峡江县"},{"s":"新干县"},{"s":"永丰县"},{"s":"泰和县"},{"s":"遂川县"},{"s":"万安县"},{"s":"安福县"},{"s":"永新县"},{"s":"井冈山市"}]},{"n":"宜春","a":[{"s":"袁州区"},{"s":"奉新县"},{"s":"万载县"},{"s":"上高县"},{"s":"宜丰县"},{"s":"靖安县"},{"s":"铜鼓县"},{"s":"丰城市"},{"s":"樟树市"},{"s":"高安市"}]},{"n":"抚州","a":[{"s":"临川区"},{"s":"南城县"},{"s":"黎川县"},{"s":"南丰县"},{"s":"崇仁县"},{"s":"乐安县"},{"s":"宜黄县"},{"s":"金溪县"},{"s":"资溪县"},{"s":"东乡县"},{"s":"广昌县"}]},{"n":"上饶","a":[{"s":"信州区"},{"s":"上饶县"},{"s":"广丰县"},{"s":"玉山县"},{"s":"铅山县"},{"s":"横峰县"},{"s":"弋阳县"},{"s":"余干县"},{"s":"鄱阳县"},{"s":"万年县"},{"s":"婺源县"},{"s":"德兴市"}]}]},{"p":"山东","c":[{"n":"济南","a":[{"s":"历下区"},{"s":"市中区"},{"s":"槐荫区"},{"s":"天桥区"},{"s":"历城区"},{"s":"长清区"},{"s":"平阴县"},{"s":"济阳县"},{"s":"商河县"},{"s":"章丘市"}]},{"n":"青岛","a":[{"s":"市南区"},{"s":"市北区"},{"s":"四方区"},{"s":"黄岛区"},{"s":"崂山区"},{"s":"李沧区"},{"s":"城阳区"},{"s":"胶州市"},{"s":"即墨市"},{"s":"平度市"},{"s":"胶南市"},{"s":"莱西市"}]},{"n":"淄博","a":[{"s":"淄川区"},{"s":"张店区"},{"s":"博山区"},{"s":"临淄区"},{"s":"周村区"},{"s":"桓台县"},{"s":"高青县"},{"s":"沂源县"}]},{"n":"枣庄","a":[{"s":"市中区"},{"s":"薛城区"},{"s":"峄城区"},{"s":"台儿庄区"},{"s":"山亭区"},{"s":"滕州市"}]},{"n":"东营","a":[{"s":"东营区"},{"s":"河口区"},{"s":"垦利县"},{"s":"利津县"},{"s":"广饶县"}]},{"n":"烟台","a":[{"s":"芝罘区"},{"s":"福山区"},{"s":"牟平区"},{"s":"莱山区"},{"s":"长岛县"},{"s":"龙口市"},{"s":"莱阳市"},{"s":"莱州市"},{"s":"蓬莱市"},{"s":"招远市"},{"s":"栖霞市"},{"s":"海阳市"}]},{"n":"潍坊","a":[{"s":"潍城区"},{"s":"寒亭区"},{"s":"坊子区"},{"s":"奎文区"},{"s":"临朐县"},{"s":"昌乐县"},{"s":"青州市"},{"s":"诸城市"},{"s":"寿光市"},{"s":"安丘市"},{"s":"高密市"},{"s":"昌邑市"}]},{"n":"济宁","a":[{"s":"市中区"},{"s":"任城区"},{"s":"微山县"},{"s":"鱼台县"},{"s":"金乡县"},{"s":"嘉祥县"},{"s":"汶上县"},{"s":"泗水县"},{"s":"梁山县"},{"s":"曲阜市"},{"s":"兖州市"},{"s":"邹城市"}]},{"n":"泰安","a":[{"s":"泰山区"},{"s":"岱岳区"},{"s":"宁阳县"},{"s":"东平县"},{"s":"新泰市"},{"s":"肥城市"}]},{"n":"威海","a":[{"s":"环翠区"},{"s":"文登市"},{"s":"荣成市"},{"s":"乳山市"}]},{"n":"日照","a":[{"s":"东港区"},{"s":"岚山区"},{"s":"五莲县"},{"s":"莒县"}]},{"n":"莱芜","a":[{"s":"莱城区"},{"s":"钢城区"}]},{"n":"临沂","a":[{"s":"兰山区"},{"s":"罗庄区"},{"s":"河东区"},{"s":"沂南县"},{"s":"郯城县"},{"s":"沂水县"},{"s":"苍山县"},{"s":"费县"},{"s":"平邑县"},{"s":"莒南县"},{"s":"蒙阴县"},{"s":"临沭县"}]},{"n":"德州","a":[{"s":"德城区"},{"s":"陵县"},{"s":"宁津县"},{"s":"庆云县"},{"s":"临邑县"},{"s":"齐河县"},{"s":"平原县"},{"s":"夏津县"},{"s":"武城县"},{"s":"乐陵市"},{"s":"禹城市"}]},{"n":"聊城","a":[{"s":"东昌府区"},{"s":"阳谷县"},{"s":"莘县"},{"s":"茌平县"},{"s":"东阿县"},{"s":"冠县"},{"s":"高唐县"},{"s":"临清市"}]},{"n":"滨州","a":[{"s":"滨城区"},{"s":"惠民县"},{"s":"阳信县"},{"s":"无棣县"},{"s":"沾化县"},{"s":"博兴县"},{"s":"邹平县"}]},{"n":"菏泽","a":[{"s":"牡丹区"},{"s":"曹县"},{"s":"单县"},{"s":"成武县"},{"s":"巨野县"},{"s":"郓城县"},{"s":"鄄城县"},{"s":"定陶县"},{"s":"东明县"}]}]},{"p":"河南","c":[{"n":"郑州","a":[{"s":"中原区"},{"s":"二七区"},{"s":"管城回族区"},{"s":"金水区"},{"s":"上街区"},{"s":"惠济区"},{"s":"中牟县"},{"s":"巩义市"},{"s":"荥阳市"},{"s":"新密市"},{"s":"新郑市"},{"s":"登封市"}]},{"n":"开封","a":[{"s":"龙亭区"},{"s":"顺河回族区"},{"s":"鼓楼区"},{"s":"禹王台区"},{"s":"金明区"},{"s":"杞县"},{"s":"通许县"},{"s":"尉氏县"},{"s":"开封县"},{"s":"兰考县"}]},{"n":"洛阳","a":[{"s":"老城区"},{"s":"西工区"},{"s":"廛河回族区"},{"s":"涧西区"},{"s":"吉利区"},{"s":"洛龙区"},{"s":"孟津县"},{"s":"新安县"},{"s":"栾川县"},{"s":"嵩县"},{"s":"汝阳县"},{"s":"宜阳县"},{"s":"洛宁县"},{"s":"伊川县"},{"s":"偃师市"}]},{"n":"平顶山","a":[{"s":"新华区"},{"s":"卫东区"},{"s":"石龙区"},{"s":"湛河区"},{"s":"宝丰县"},{"s":"叶县"},{"s":"鲁山县"},{"s":"郏县"},{"s":"舞钢市"},{"s":"汝州市"}]},{"n":"安阳","a":[{"s":"文峰区"},{"s":"北关区"},{"s":"殷都区"},{"s":"龙安区"},{"s":"安阳县"},{"s":"汤阴县"},{"s":"滑县"},{"s":"内黄县"},{"s":"林州市"}]},{"n":"鹤壁","a":[{"s":"鹤山区"},{"s":"山城区"},{"s":"淇滨区"},{"s":"浚县"},{"s":"淇县"}]},{"n":"新乡","a":[{"s":"红旗区"},{"s":"卫滨区"},{"s":"凤泉区"},{"s":"牧野区"},{"s":"新乡县"},{"s":"获嘉县"},{"s":"原阳县"},{"s":"延津县"},{"s":"封丘县"},{"s":"长垣县"},{"s":"卫辉市"},{"s":"辉县市"}]},{"n":"焦作","a":[{"s":"解放区"},{"s":"中站区"},{"s":"马村区"},{"s":"山阳区"},{"s":"修武县"},{"s":"博爱县"},{"s":"武陟县"},{"s":"温县"},{"s":"沁阳市"},{"s":"孟州市"}]},{"n":"濮阳","a":[{"s":"华龙区"},{"s":"清丰县"},{"s":"南乐县"},{"s":"范县"},{"s":"台前县"},{"s":"濮阳县"}]},{"n":"许昌","a":[{"s":"魏都区"},{"s":"许昌县"},{"s":"鄢陵县"},{"s":"襄城县"},{"s":"禹州市"},{"s":"长葛市"}]},{"n":"漯河","a":[{"s":"源汇区"},{"s":"郾城区"},{"s":"召陵区"},{"s":"舞阳县"},{"s":"临颍县"}]},{"n":"三门峡","a":[{"s":"湖滨区"},{"s":"渑池县"},{"s":"陕县"},{"s":"卢氏县"},{"s":"义马市"},{"s":"灵宝市"}]},{"n":"南阳","a":[{"s":"宛城区"},{"s":"卧龙区"},{"s":"南召县"},{"s":"方城县"},{"s":"西峡县"},{"s":"镇平县"},{"s":"内乡县"},{"s":"淅川县"},{"s":"社旗县"},{"s":"唐河县"},{"s":"新野县"},{"s":"桐柏县"},{"s":"邓州市"}]},{"n":"商丘","a":[{"s":"梁园区"},{"s":"睢阳区"},{"s":"民权县"},{"s":"睢县"},{"s":"宁陵县"},{"s":"柘城县"},{"s":"虞城县"},{"s":"夏邑县"},{"s":"永城市"}]},{"n":"信阳","a":[{"s":"浉河区"},{"s":"平桥区"},{"s":"罗山县"},{"s":"光山县"},{"s":"新县"},{"s":"商城县"},{"s":"固始县"},{"s":"潢川县"},{"s":"淮滨县"},{"s":"息县"}]},{"n":"周口","a":[{"s":"川汇区"},{"s":"扶沟县"},{"s":"西华县"},{"s":"商水县"},{"s":"沈丘县"},{"s":"郸城县"},{"s":"淮阳县"},{"s":"太康县"},{"s":"鹿邑县"},{"s":"项城市"}]},{"n":"驻马店","a":[{"s":"驿城区"},{"s":"西平县"},{"s":"上蔡县"},{"s":"平舆县"},{"s":"正阳县"},{"s":"确山县"},{"s":"泌阳县"},{"s":"汝南县"},{"s":"遂平县"},{"s":"新蔡县"}]},{"n":"济源","a":[{"s":"济源"}]}]},{"p":"湖北","c":[{"n":"武汉","a":[{"s":"江岸区"},{"s":"江汉区"},{"s":"硚口区"},{"s":"汉阳区"},{"s":"武昌区"},{"s":"青山区"},{"s":"洪山区"},{"s":"东西湖区"},{"s":"汉南区"},{"s":"蔡甸区"},{"s":"江夏区"},{"s":"黄陂区"},{"s":"新洲区"}]},{"n":"黄石","a":[{"s":"黄石港区"},{"s":"西塞山区"},{"s":"下陆区"},{"s":"铁山区"},{"s":"阳新县"},{"s":"大冶市"}]},{"n":"十堰","a":[{"s":"茅箭区"},{"s":"张湾区"},{"s":"郧县"},{"s":"郧西县"},{"s":"竹山县"},{"s":"竹溪县"},{"s":"房县"},{"s":"丹江口市"}]},{"n":"宜昌","a":[{"s":"西陵区"},{"s":"伍家岗区"},{"s":"点军区"},{"s":"猇亭区"},{"s":"夷陵区"},{"s":"远安县"},{"s":"兴山县"},{"s":"秭归县"},{"s":"长阳土家族自治县"},{"s":"五峰土家族自治县"},{"s":"宜都市"},{"s":"当阳市"},{"s":"枝江市"}]},{"n":"襄樊","a":[{"s":"襄城区"},{"s":"樊城区"},{"s":"襄阳区"},{"s":"南漳县"},{"s":"谷城县"},{"s":"保康县"},{"s":"老河口市"},{"s":"枣阳市"},{"s":"宜城市"}]},{"n":"鄂州","a":[{"s":"梁子湖区"},{"s":"华容区"},{"s":"鄂城区"}]},{"n":"荆门","a":[{"s":"东宝区"},{"s":"掇刀区"},{"s":"京山县"},{"s":"沙洋县"},{"s":"钟祥市"}]},{"n":"孝感","a":[{"s":"孝南区"},{"s":"孝昌县"},{"s":"大悟县"},{"s":"云梦县"},{"s":"应城市"},{"s":"安陆市"},{"s":"汉川市"}]},{"n":"荆州","a":[{"s":"沙市区"},{"s":"荆州区"},{"s":"公安县"},{"s":"监利县"},{"s":"江陵县"},{"s":"石首市"},{"s":"洪湖市"},{"s":"松滋市"}]},{"n":"黄冈","a":[{"s":"黄州区"},{"s":"团风县"},{"s":"红安县"},{"s":"罗田县"},{"s":"英山县"},{"s":"浠水县"},{"s":"蕲春县"},{"s":"黄梅县"},{"s":"麻城市"},{"s":"武穴市"}]},{"n":"咸宁","a":[{"s":"咸安区"},{"s":"嘉鱼县"},{"s":"通城县"},{"s":"崇阳县"},{"s":"通山县"},{"s":"赤壁市"}]},{"n":"随州","a":[{"s":"曾都区"},{"s":"随县"},{"s":"广水市"}]},{"n":"恩施","a":[{"s":"恩施市"},{"s":"利川市"},{"s":"建始县"},{"s":"巴东县"},{"s":"宣恩县"},{"s":"咸丰县"},{"s":"来凤县"},{"s":"鹤峰县"}]},{"n":"仙桃","a":[{"s":"仙桃"}]},{"n":"潜江","a":[{"s":"潜江"}]},{"n":"天门","a":[{"s":"天门"}]},{"n":"神农架","a":[{"s":"神农架"}]}]},{"p":"湖南","c":[{"n":"长沙","a":[{"s":"芙蓉区"},{"s":"天心区"},{"s":"岳麓区"},{"s":"开福区"},{"s":"雨花区"},{"s":"长沙县"},{"s":"望城县"},{"s":"宁乡县"},{"s":"浏阳市"}]},{"n":"株洲","a":[{"s":"荷塘区"},{"s":"芦淞区"},{"s":"石峰区"},{"s":"天元区"},{"s":"株洲县"},{"s":"攸县"},{"s":"茶陵县"},{"s":"炎陵县"},{"s":"醴陵市"}]},{"n":"湘潭","a":[{"s":"雨湖区"},{"s":"岳塘区"},{"s":"湘潭县"},{"s":"湘乡市"},{"s":"韶山市"}]},{"n":"衡阳","a":[{"s":"珠晖区"},{"s":"雁峰区"},{"s":"石鼓区"},{"s":"蒸湘区"},{"s":"南岳区"},{"s":"衡阳县"},{"s":"衡南县"},{"s":"衡山县"},{"s":"衡东县"},{"s":"祁东县"},{"s":"耒阳市"},{"s":"常宁市"}]},{"n":"邵阳","a":[{"s":"双清区"},{"s":"大祥区"},{"s":"北塔区"},{"s":"邵东县"},{"s":"新邵县"},{"s":"邵阳县"},{"s":"隆回县"},{"s":"洞口县"},{"s":"绥宁县"},{"s":"新宁县"},{"s":"城步苗族自治县"},{"s":"武冈市"}]},{"n":"岳阳","a":[{"s":"岳阳楼区"},{"s":"云溪区"},{"s":"君山区"},{"s":"岳阳县"},{"s":"华容县"},{"s":"湘阴县"},{"s":"平江县"},{"s":"汨罗市"},{"s":"临湘市"}]},{"n":"常德","a":[{"s":"武陵区"},{"s":"鼎城区"},{"s":"安乡县"},{"s":"汉寿县"},{"s":"澧县"},{"s":"临澧县"},{"s":"桃源县"},{"s":"石门县"},{"s":"津市市"}]},{"n":"张家界","a":[{"s":"永定区"},{"s":"武陵源区"},{"s":"慈利县"},{"s":"桑植县"}]},{"n":"益阳","a":[{"s":"资阳区"},{"s":"赫山区"},{"s":"南县"},{"s":"桃江县"},{"s":"安化县"},{"s":"沅江市"}]},{"n":"郴州","a":[{"s":"北湖区"},{"s":"苏仙区"},{"s":"桂阳县"},{"s":"宜章县"},{"s":"永兴县"},{"s":"嘉禾县"},{"s":"临武县"},{"s":"汝城县"},{"s":"桂东县"},{"s":"安仁县"},{"s":"资兴市"}]},{"n":"永州","a":[{"s":"零陵区"},{"s":"冷水滩区"},{"s":"祁阳县"},{"s":"东安县"},{"s":"双牌县"},{"s":"道县"},{"s":"江永县"},{"s":"宁远县"},{"s":"蓝山县"},{"s":"新田县"},{"s":"江华瑶族自治县"}]},{"n":"怀化","a":[{"s":"鹤城区"},{"s":"中方县"},{"s":"沅陵县"},{"s":"辰溪县"},{"s":"溆浦县"},{"s":"会同县"},{"s":"麻阳苗族自治县"},{"s":"新晃侗族自治县"},{"s":"芷江侗族自治县"},{"s":"靖州苗族侗族自治县"},{"s":"通道侗族自治县"},{"s":"洪江市"}]},{"n":"娄底","a":[{"s":"娄星区"},{"s":"双峰县"},{"s":"新化县"},{"s":"冷水江市"},{"s":"涟源市"}]},{"n":"湘西","a":[{"s":"吉首市"},{"s":"泸溪县"},{"s":"凤凰县"},{"s":"花垣县"},{"s":"保靖县"},{"s":"古丈县"},{"s":"永顺县"},{"s":"龙山县"}]}]},{"p":"广东","c":[{"n":"广州","a":[{"s":"荔湾区"},{"s":"越秀区"},{"s":"海珠区"},{"s":"天河区"},{"s":"白云区"},{"s":"黄埔区"},{"s":"番禺区"},{"s":"花都区"},{"s":"南沙区"},{"s":"萝岗区"},{"s":"增城市"},{"s":"从化市"}]},{"n":"韶关","a":[{"s":"武江区"},{"s":"浈江区"},{"s":"曲江区"},{"s":"始兴县"},{"s":"仁化县"},{"s":"翁源县"},{"s":"乳源瑶族自治县"},{"s":"新丰县"},{"s":"乐昌市"},{"s":"南雄市"}]},{"n":"深圳","a":[{"s":"罗湖区"},{"s":"福田区"},{"s":"南山区"},{"s":"宝安区"},{"s":"龙岗区"},{"s":"盐田区"}]},{"n":"珠海","a":[{"s":"香洲区"},{"s":"斗门区"},{"s":"金湾区"}]},{"n":"汕头","a":[{"s":"龙湖区"},{"s":"金平区"},{"s":"濠江区"},{"s":"潮阳区"},{"s":"潮南区"},{"s":"澄海区"},{"s":"南澳县"}]},{"n":"佛山","a":[{"s":"禅城区"},{"s":"南海区"},{"s":"顺德区"},{"s":"三水区"},{"s":"高明区"}]},{"n":"江门","a":[{"s":"蓬江区"},{"s":"江海区"},{"s":"新会区"},{"s":"台山市"},{"s":"开平市"},{"s":"鹤山市"},{"s":"恩平市"}]},{"n":"湛江","a":[{"s":"赤坎区"},{"s":"霞山区"},{"s":"坡头区"},{"s":"麻章区"},{"s":"遂溪县"},{"s":"徐闻县"},{"s":"廉江市"},{"s":"雷州市"},{"s":"吴川市"}]},{"n":"茂名","a":[{"s":"茂南区"},{"s":"茂港区"},{"s":"电白县"},{"s":"高州市"},{"s":"化州市"},{"s":"信宜市"}]},{"n":"肇庆","a":[{"s":"端州区"},{"s":"鼎湖区"},{"s":"广宁县"},{"s":"怀集县"},{"s":"封开县"},{"s":"德庆县"},{"s":"高要市"},{"s":"四会市"}]},{"n":"惠州","a":[{"s":"惠城区"},{"s":"惠阳区"},{"s":"博罗县"},{"s":"惠东县"},{"s":"龙门县"}]},{"n":"梅州","a":[{"s":"梅江区"},{"s":"梅县"},{"s":"大埔县"},{"s":"丰顺县"},{"s":"五华县"},{"s":"平远县"},{"s":"蕉岭县"},{"s":"兴宁市"}]},{"n":"汕尾","a":[{"s":"城区"},{"s":"海丰县"},{"s":"陆河县"},{"s":"陆丰市"}]},{"n":"河源","a":[{"s":"源城区"},{"s":"紫金县"},{"s":"龙川县"},{"s":"连平县"},{"s":"和平县"},{"s":"东源县"}]},{"n":"阳江","a":[{"s":"江城区"},{"s":"阳西县"},{"s":"阳东县"},{"s":"阳春市"}]},{"n":"清远","a":[{"s":"清城区"},{"s":"佛冈县"},{"s":"阳山县"},{"s":"连山壮族瑶族自治县"},{"s":"连南瑶族自治县"},{"s":"清新县"},{"s":"英德市"},{"s":"连州市"}]},{"n":"东莞","a":[{"s":"东莞市"}]},{"n":"中山","a":[{"s":"中山市"}]},{"n":"潮州","a":[{"s":"湘桥区"},{"s":"潮安县"},{"s":"饶平县"}]},{"n":"揭阳","a":[{"s":"榕城区"},{"s":"揭东县"},{"s":"揭西县"},{"s":"惠来县"},{"s":"普宁市"}]},{"n":"云浮","a":[{"s":"云城区"},{"s":"新兴县"},{"s":"郁南县"},{"s":"云安县"},{"s":"罗定市"}]}]},{"p":"广西","c":[{"n":"南宁","a":[{"s":"兴宁区"},{"s":"青秀区"},{"s":"江南区"},{"s":"西乡塘区"},{"s":"良庆区"},{"s":"邕宁区"},{"s":"武鸣县"},{"s":"隆安县"},{"s":"马山县"},{"s":"上林县"},{"s":"宾阳县"},{"s":"横县"}]},{"n":"柳州","a":[{"s":"城中区"},{"s":"鱼峰区"},{"s":"柳南区"},{"s":"柳北区"},{"s":"柳江县"},{"s":"柳城县"},{"s":"鹿寨县"},{"s":"融安县"},{"s":"融水苗族自治县"},{"s":"三江侗族自治县"}]},{"n":"桂林","a":[{"s":"秀峰区"},{"s":"叠彩区"},{"s":"象山区"},{"s":"七星区"},{"s":"雁山区"},{"s":"阳朔县"},{"s":"临桂县"},{"s":"灵川县"},{"s":"全州县"},{"s":"兴安县"},{"s":"永福县"},{"s":"灌阳县"},{"s":"龙胜各族自治县"},{"s":"资源县"},{"s":"平乐县"},{"s":"荔蒲县"},{"s":"恭城瑶族自治县"}]},{"n":"梧州","a":[{"s":"万秀区"},{"s":"蝶山区"},{"s":"长洲区"},{"s":"苍梧县"},{"s":"藤县"},{"s":"蒙山县"},{"s":"岑溪市"}]},{"n":"北海","a":[{"s":"海城区"},{"s":"银海区"},{"s":"铁山港区"},{"s":"合浦县"}]},{"n":"防城港","a":[{"s":"港口区"},{"s":"防城区"},{"s":"上思县"},{"s":"东兴市"}]},{"n":"钦州","a":[{"s":"钦南区"},{"s":"钦北区"},{"s":"灵山县"},{"s":"浦北县"}]},{"n":"贵港","a":[{"s":"港北区"},{"s":"港南区"},{"s":"覃塘区"},{"s":"平南县"},{"s":"桂平市"}]},{"n":"玉林","a":[{"s":"玉州区"},{"s":"容县"},{"s":"陆川县"},{"s":"博白县"},{"s":"兴业县"},{"s":"北流市"}]},{"n":"百色","a":[{"s":"右江区"},{"s":"田阳县"},{"s":"田东县"},{"s":"平果县"},{"s":"德保县"},{"s":"靖西县"},{"s":"那坡县"},{"s":"凌云县"},{"s":"乐业县"},{"s":"田林县"},{"s":"西林县"},{"s":"隆林各族自治县"}]},{"n":"贺州","a":[{"s":"八步区"},{"s":"昭平县"},{"s":"钟山县"},{"s":"富川瑶族自治县"}]},{"n":"河池","a":[{"s":"金城江区"},{"s":"南丹县"},{"s":"天峨县"},{"s":"凤山县"},{"s":"东兰县"},{"s":"罗城仫佬族自治县"},{"s":"环江毛南族自治县"},{"s":"巴马瑶族自治县"},{"s":"都安瑶族自治县"},{"s":"大化瑶族自治县"},{"s":"宜州市"}]},{"n":"来宾","a":[{"s":"兴宾区"},{"s":"忻城县"},{"s":"象州县"},{"s":"武宣县"},{"s":"金秀瑶族自治县"},{"s":"合山市"}]},{"n":"崇左","a":[{"s":"江洲区"},{"s":"扶绥县"},{"s":"宁明县"},{"s":"龙州县"},{"s":"大新县"},{"s":"天等县"},{"s":"凭祥市"}]}]},{"p":"海南","c":[{"n":"海口","a":[{"s":"秀英区"},{"s":"龙华区"},{"s":"琼山区"},{"s":"美兰区"}]},{"n":"三亚","a":[{"s":"三亚市"}]},{"n":"五指山","a":[{"s":"五指山"}]},{"n":"琼海","a":[{"s":"琼海"}]},{"n":"儋州","a":[{"s":"儋州"}]},{"n":"文昌","a":[{"s":"文昌"}]},{"n":"万宁","a":[{"s":"万宁"}]},{"n":"东方","a":[{"s":"东方"}]}]},{"p":"重庆","c":[{"n":"万州区"},{"n":"涪陵区"},{"n":"渝中区"},{"n":"大渡口区"},{"n":"江北区"},{"n":"沙坪坝区"},{"n":"九龙坡区"},{"n":"南岸区"},{"n":"北碚区"},{"n":"万盛区"},{"n":"双挢区"},{"n":"渝北区"},{"n":"巴南区"},{"n":"长寿区"},{"n":"綦江县"},{"n":"潼南县"},{"n":"铜梁县"},{"n":"大足县"},{"n":"荣昌县"},{"n":"壁山县"},{"n":"梁平县"},{"n":"城口县"},{"n":"丰都县"},{"n":"垫江县"},{"n":"武隆县"},{"n":"忠县"},{"n":"开县"},{"n":"云阳县"},{"n":"奉节县"},{"n":"巫山县"},{"n":"巫溪县"},{"n":"黔江区"},{"n":"石柱土家族自治县"},{"n":"秀山土家族苗族自治县"},{"n":"酉阳土家族苗族自治县"},{"n":"彭水苗族土家族自治县"},{"n":"江津区"},{"n":"合川区"},{"n":"永川区"},{"n":"南川区"}]},{"p":"四川","c":[{"n":"成都","a":[{"s":"锦江区"},{"s":"青羊区"},{"s":"金牛区"},{"s":"武侯区"},{"s":"成华区"},{"s":"龙泉驿区"},{"s":"青白江区"},{"s":"新都区"},{"s":"温江区"},{"s":"金堂县"},{"s":"双流县"},{"s":"郫县"},{"s":"大邑县"},{"s":"蒲江县"},{"s":"新津县"},{"s":"都江堰市"},{"s":"彭州市"},{"s":"邛崃市"},{"s":"崇州市"}]},{"n":"自贡","a":[{"s":"自流井区"},{"s":"贡井区"},{"s":"大安区"},{"s":"沿滩区"},{"s":"荣县"},{"s":"富顺县"}]},{"n":"攀枝花","a":[{"s":"东区"},{"s":"西区"},{"s":"仁和区"},{"s":"米易县"},{"s":"盐边县"}]},{"n":"泸州","a":[{"s":"江阳区"},{"s":"纳溪区"},{"s":"龙马潭区"},{"s":"泸县"},{"s":"合江县"},{"s":"叙永县"},{"s":"古蔺县"}]},{"n":"德阳","a":[{"s":"旌阳区"},{"s":"中江县"},{"s":"罗江县"},{"s":"广汉市"},{"s":"什邡市"},{"s":"绵竹市"}]},{"n":"绵阳","a":[{"s":"涪城区"},{"s":"游仙区"},{"s":"三台县"},{"s":"盐亭县"},{"s":"安县"},{"s":"梓潼县"},{"s":"北川羌族自治县"},{"s":"平武县"},{"s":"江油市"}]},{"n":"广元","a":[{"s":"利州区"},{"s":"元坝区"},{"s":"朝天区"},{"s":"旺苍县"},{"s":"青川县"},{"s":"剑阁县"},{"s":"苍溪县"}]},{"n":"遂宁","a":[{"s":"船山区"},{"s":">安居区"},{"s":">蓬溪县"},{"s":">射洪县"},{"s":">大英县"}]},{"n":"内江","a":[{"s":"市中区"},{"s":"东兴区"},{"s":"威远县"},{"s":"资中县"},{"s":"隆昌县"}]},{"n":"乐山","a":[{"s":"市中区"},{"s":"沙湾区"},{"s":"五通桥区"},{"s":"金口河区"},{"s":"犍为县"},{"s":"井研县"},{"s":"夹江县"},{"s":"沐川县"},{"s":"峨边彝族自治县"},{"s":"马边彝族自治县"},{"s":"峨眉山市"}]},{"n":"南充","a":[{"s":"顺庆区"},{"s":"高坪区"},{"s":"嘉陵区"},{"s":"南部县"},{"s":"营山县"},{"s":"蓬安县"},{"s":"仪陇县"},{"s":"西充县"},{"s":"阆中市"}]},{"n":"眉山","a":[{"s":"东坡区"},{"s":"仁寿县"},{"s":"彭山县"},{"s":"洪雅县"},{"s":"丹棱县"},{"s":"青神县"}]},{"n":"宜宾","a":[{"s":"翠屏区"},{"s":"宜宾县"},{"s":"南溪县"},{"s":"江安县"},{"s":"长宁县"},{"s":"高县"},{"s":"珙县"},{"s":"筠连县"},{"s":"兴文县"},{"s":"屏山县"}]},{"n":"广安","a":[{"s":"广安区"},{"s":"岳池县"},{"s":"武胜县"},{"s":"邻水县"},{"s":"华蓥市"}]},{"n":"达川","a":[{"s":"通川区"},{"s":"达县"},{"s":"宣汉县"},{"s":"开江县"},{"s":"大竹县"},{"s":"渠县"},{"s":"万源市"}]},{"n":"雅安","a":[{"s":"雨城区"},{"s":"名山县"},{"s":"荥经县"},{"s":"汉源县"},{"s":"石棉县"},{"s":"天全县"},{"s":"芦山县"},{"s":"宝兴县"}]},{"n":"巴中","a":[{"s":"巴州区"},{"s":"通江县"},{"s":"南江县"},{"s":"平昌县"}]},{"n":"资阳","a":[{"s":"雁江区"},{"s":"安岳县"},{"s":"乐至县"},{"s":"简阳市"}]},{"n":"阿坝","a":[{"s":"汶川县"},{"s":"理县"},{"s":"茂县"},{"s":"松潘县"},{"s":"九寨沟县"},{"s":"金川县"},{"s":"小金县"},{"s":"黑水县"},{"s":"马尔康县"},{"s":"壤塘县"},{"s":"阿坝县"},{"s":"若尔盖县"},{"s":"红原县"}]},{"n":"甘孜","a":[{"s":"康定县"},{"s":"泸定县"},{"s":"丹巴县"},{"s":"九龙县"},{"s":"雅江县"},{"s":"道孚县"},{"s":"炉霍县"},{"s":"甘孜县"},{"s":"新龙县"},{"s":"德格县"},{"s":"白玉县"},{"s":"石渠县"},{"s":"色达县"},{"s":"理塘县"},{"s":"巴塘县"},{"s":"乡城县"},{"s":"稻城县"},{"s":"得荣县"}]},{"n":"凉山","a":[{"s":"西昌市"},{"s":"木里藏族自治县"},{"s":"盐源县"},{"s":"德昌县"},{"s":"会理县"},{"s":"会东县"},{"s":"宁南县"},{"s":"普格县"},{"s":"布拖县"},{"s":"金阳县"},{"s":"昭觉县"},{"s":"喜德县"},{"s":"冕宁县"},{"s":"越西县"},{"s":"甘洛县"},{"s":"美姑县"},{"s":"雷波县"}]}]},{"p":"贵州","c":[{"n":"贵阳","a":[{"s":"南明区"},{"s":"云岩区"},{"s":"花溪区"},{"s":"乌当区"},{"s":"白云区"},{"s":"小河区"},{"s":"开阳县"},{"s":"息烽县"},{"s":"修文县"},{"s":"清镇市"}]},{"n":"六盘水","a":[{"s":"钟山区"},{"s":"六枝特区"},{"s":"水城县"},{"s":"盘县"}]},{"n":"遵义","a":[{"s":"红花岗区"},{"s":"汇川区"},{"s":"遵义县"},{"s":"桐梓县"},{"s":"绥阳县"},{"s":"正安县"},{"s":"道真仡佬族苗族自治县"},{"s":"务川仡佬族苗族自治县"},{"s":"凤冈县"},{"s":"湄潭县"},{"s":"余庆县"},{"s":"习水县"},{"s":"赤水市"},{"s":"仁怀市"}]},{"n":"安顺","a":[{"s":"西秀区"},{"s":"平坝县"},{"s":"普定县"},{"s":"镇宁布依族苗族自治县"},{"s":"关岭布依族苗族自治县"},{"s":"紫云苗族布依族自治县"}]},{"n":"铜仁","a":[{"s":"铜仁市"},{"s":"江口县"},{"s":"玉屏侗族自治县"},{"s":"石阡县"},{"s":"思南县"},{"s":"印江土家族苗族自治县"},{"s":"德江县"},{"s":"沿河土家族自治县"},{"s":"松桃苗族自治县"},{"s":"万山特区"}]},{"n":"黔西南","a":[{"s":"兴义市"},{"s":"兴仁县"},{"s":"普安县"},{"s":"晴隆县"},{"s":"贞丰县"},{"s":"望谟县"},{"s":"册亨县"},{"s":"安龙县"}]},{"n":"毕节","a":[{"s":"毕节市"},{"s":"大方县"},{"s":"黔西县"},{"s":"金沙县"},{"s":"织金县"},{"s":"纳雍县"},{"s":"威宁彝族回族苗族自治县"},{"s":"赫章县"}]},{"n":"黔东南","a":[{"s":"凯里市"},{"s":"黄平县"},{"s":"施秉县"},{"s":"三穗县"},{"s":"镇远县"},{"s":"岑巩县"},{"s":"天柱县"},{"s":"锦屏县"},{"s":"剑河县"},{"s":"台江县"},{"s":"黎平县"},{"s":"榕江县"},{"s":"从江县"},{"s":"雷山县"},{"s":"麻江县"},{"s":"丹寨县"}]},{"n":"黔南","a":[{"s":"都匀市"},{"s":"福泉市"},{"s":"荔波县"},{"s":"贵定县"},{"s":"瓮安县"},{"s":"独山县"},{"s":"平塘县"},{"s":"罗甸县"},{"s":"长顺县"},{"s":"龙里县"},{"s":"惠水县"},{"s":"三都水族自治县"}]}]},{"p":"云南","c":[{"n":"昆明","a":[{"s":"五华区"},{"s":"盘龙区"},{"s":"官渡区"},{"s":"西山区"},{"s":"东川区"},{"s":"呈贡县"},{"s":"晋宁县"},{"s":"富民县"},{"s":"宜良县"},{"s":"石林彝族自治县"},{"s":"嵩明县"},{"s":"禄劝彝族苗族自治县"},{"s":"寻甸回族彝族自治县"},{"s":"安宁市"}]},{"n":"曲靖","a":[{"s":"麒麟区"},{"s":"马龙县"},{"s":"陆良县"},{"s":"师宗县"},{"s":"罗平县"},{"s":"富源县"},{"s":"会泽县"},{"s":"沾益县"},{"s":"宣威市"}]},{"n":"玉溪","a":[{"s":"红塔区"},{"s":"江川县"},{"s":"澄江县"},{"s":"通海县"},{"s":"华宁县"},{"s":"易门县"},{"s":"峨山彝族自治县"},{"s":"新平彝族傣族自治县"},{"s":"元江哈尼族彝族傣族自治县"}]},{"n":"保山","a":[{"s":"隆阳区"},{"s":"施甸县"},{"s":"腾冲县"},{"s":"龙陵县"},{"s":"昌宁县"}]},{"n":"昭通","a":[{"s":"昭阳区"},{"s":"鲁甸县"},{"s":"巧家县"},{"s":"盐津县"},{"s":"大关县"},{"s":"永善县"},{"s":"绥江县"},{"s":"镇雄县"},{"s":"彝良县"},{"s":"威信县"},{"s":"水富县"}]},{"n":"丽江","a":[{"s":"古城区"},{"s":"玉龙纳西族自治县"},{"s":"永胜县"},{"s":"华坪县"},{"s":"宁蒗彝族自治县"}]},{"n":"普洱","a":[{"s":"思茅区"},{"s":"宁洱镇"},{"s":"墨江哈尼族自治县"},{"s":"景东彝族自治县"},{"s":"景谷傣族彝族自治县"},{"s":"镇沅彝族哈尼族拉祜族自治县"},{"s":"江城哈尼族彝族自治县"},{"s":"孟连傣族拉祜族佤族自治县"},{"s":"澜沧拉祜族自治县"},{"s":"西盟佤族自治县"}]},{"n":"临沧","a":[{"s":"临翔区"},{"s":"凤庆县"},{"s":"云县"},{"s":"永德县"},{"s":"镇康县"},{"s":"双江拉祜族佤族布朗族傣族自治县"},{"s":"耿马傣族佤族自治县"},{"s":"沧源佤族自治县"}]},{"n":"楚雄","a":[{"s":"楚雄市"},{"s":"双柏县"},{"s":"牟定县"},{"s":"南华县"},{"s":"姚安县"},{"s":"大姚县"},{"s":"永仁县"},{"s":"元谋县"},{"s":"武定县"},{"s":"禄丰县"}]},{"n":"红河","a":[{"s":"个旧市"},{"s":"开远市"},{"s":"蒙自县"},{"s":"屏边苗族自治县"},{"s":"建水县"},{"s":"石屏县"},{"s":"弥勒县"},{"s":"泸西县"},{"s":"元阳县"},{"s":"红河县"},{"s":"金平苗族瑶族傣族自治县"},{"s":"绿春县"},{"s":"河口瑶族自治县"}]},{"n":"文山","a":[{"s":"文山县"},{"s":"砚山县"},{"s":"西畴县"},{"s":"麻栗坡县"},{"s":"马关县"},{"s":"丘北县"},{"s":"广南县"},{"s":"富宁县"}]},{"n":"西双版纳","a":[{"s":"景洪市"},{"s":"勐海县"},{"s":"勐腊县"}]},{"n":"大理","a":[{"s":"大理市"},{"s":"漾濞彝族自治县"},{"s":"祥云县"},{"s":"宾川县"},{"s":"弥渡县"},{"s":"南涧彝族自治县"},{"s":"巍山彝族回族自治县"},{"s":"永平县"},{"s":"云龙县"},{"s":"洱源县"},{"s":"剑川县"},{"s":"鹤庆县"}]},{"n":"德宏","a":[{"s":"瑞丽市"},{"s":"潞西市"},{"s":"梁河县"},{"s":"盈江县"},{"s":"陇川县"}]},{"n":"怒江傈","a":[{"s":"泸水县"},{"s":"福贡县"},{"s":"贡山独龙族怒族自治县"},{"s":"兰坪白族普米族自治县"}]},{"n":"迪庆","a":[{"s":"香格里拉县"},{"s":"德钦县"},{"s":"维西傈僳族自治县"}]}]},{"p":"西藏","c":[{"n":"拉萨","a":[{"s":"城关区"},{"s":"林周县"},{"s":"当雄县"},{"s":"尼木县"},{"s":"曲水县"},{"s":"堆龙德庆县"},{"s":"达孜县"},{"s":"墨竹工卡县"}]},{"n":"昌都","a":[{"s":"昌都县"},{"s":"江达县"},{"s":"贡觉县"},{"s":"类乌齐县"},{"s":"丁青县"},{"s":"察雅县"},{"s":"八宿县"},{"s":"左贡县"},{"s":"芒康县"},{"s":"洛隆县"},{"s":"边坝县"}]},{"n":"山南","a":[{"s":"乃东县"},{"s":"扎囊县"},{"s":"贡嘎县"},{"s":"桑日县"},{"s":"琼结县"},{"s":"曲松县"},{"s":"措美县"},{"s":"洛扎县"},{"s":"加查县"},{"s":"隆子县"},{"s":"错那县"},{"s":"浪卡子县"}]},{"n":"日喀则","a":[{"s":"日喀则市"},{"s":"南木林县"},{"s":"江孜县"},{"s":"定日县"},{"s":"萨迦县"},{"s":"拉孜县"},{"s":"昂仁县"},{"s":"谢通门县"},{"s":"白朗县"},{"s":"仁布县"},{"s":"康马县"},{"s":"定结县"},{"s":"仲巴县"},{"s":"亚东县"},{"s":"吉隆县"},{"s":"聂拉木县"},{"s":"萨嘎县"},{"s":"岗巴县"}]},{"n":"那曲","a":[{"s":"那曲县"},{"s":"嘉黎县"},{"s":"比如县"},{"s":"聂荣县"},{"s":"安多县"},{"s":"申扎县"},{"s":"索县"},{"s":"班戈县"},{"s":"巴青县"},{"s":"尼玛县"}]},{"n":"阿里","a":[{"s":"普兰县"},{"s":"札达县"},{"s":"噶尔县"},{"s":"日土县"},{"s":"革吉县"},{"s":"改则县"},{"s":"措勤县"}]},{"n":"林芝","a":[{"s":"林芝县"},{"s":"工布江达县"},{"s":"米林县"},{"s":"墨脱县"},{"s":"波密县"},{"s":"察隅县"},{"s":"朗县"}]}]},{"p":"陕西","c":[{"n":"西安","a":[{"s":"新城区"},{"s":"碑林区"},{"s":"莲湖区"},{"s":"灞桥区"},{"s":"未央区"},{"s":"雁塔区"},{"s":"阎良区"},{"s":"临潼区"},{"s":"长安区"},{"s":"蓝田县"},{"s":"周至县"},{"s":"户县"},{"s":"高陵县"}]},{"n":"铜川","a":[{"s":"王益区"},{"s":"印台区"},{"s":"耀州区"},{"s":"宜君县"}]},{"n":"宝鸡","a":[{"s":"渭滨区"},{"s":"金台区"},{"s":"陈仓区"},{"s":"凤翔县"},{"s":"岐山县"},{"s":"扶风县"},{"s":"眉县"},{"s":"陇县"},{"s":"千阳县"},{"s":"麟游县"},{"s":"凤县"},{"s":"太白县"}]},{"n":"咸阳","a":[{"s":"秦都区"},{"s":"杨凌区"},{"s":"渭城区"},{"s":"三原县"},{"s":"泾阳县"},{"s":"乾县"},{"s":"礼泉县"},{"s":"永寿县"},{"s":"彬县"},{"s":"长武县"},{"s":"旬邑县"},{"s":"淳化县"},{"s":"武功县"},{"s":"兴平市"}]},{"n":"渭南","a":[{"s":"临渭区"},{"s":"华县"},{"s":"潼关县"},{"s":"大荔县"},{"s":"合阳县"},{"s":"澄城县"},{"s":"蒲城县"},{"s":"白水县"},{"s":"富平县"},{"s":"韩城市"},{"s":"华阴市"}]},{"n":"延安","a":[{"s":"宝塔区"},{"s":"延长县"},{"s":"延川县"},{"s":"子长县"},{"s":"安塞县"},{"s":"志丹县"},{"s":"吴起县"},{"s":"甘泉县"},{"s":"富县"},{"s":"洛川县"},{"s":"宜川县"},{"s":"黄龙县"},{"s":"黄陵县"}]},{"n":"汉中","a":[{"s":"汉台区"},{"s":"南郑县"},{"s":"城固县"},{"s":"洋县"},{"s":"西乡县"},{"s":"勉县"},{"s":"宁强县"},{"s":"略阳县"},{"s":"镇巴县"},{"s":"留坝县"},{"s":"佛坪县"}]},{"n":"榆林","a":[{"s":"榆阳区"},{"s":"神木县"},{"s":"府谷县"},{"s":"横山县"},{"s":"靖边县"},{"s":"定边县"},{"s":"绥德县"},{"s":"米脂县"},{"s":"佳县"},{"s":"吴堡县"},{"s":"清涧县"},{"s":"子洲县"}]},{"n":"安康","a":[{"s":"汉滨区"},{"s":"汉阴县"},{"s":"石泉县"},{"s":"宁陕县"},{"s":"紫阳县"},{"s":"岚皋县"},{"s":"平利县"},{"s":"镇坪县"},{"s":"旬阳县"},{"s":"白河县"}]},{"n":"商洛","a":[{"s":"商州区"},{"s":"洛南县"},{"s":"丹凤县"},{"s":"商南县"},{"s":"山阳县"},{"s":"镇安县"},{"s":"柞水县"}]}]},{"p":"甘肃","c":[{"n":"兰州","a":[{"s":"区(县)"},{"s":"城关区"},{"s":"七里河区"},{"s":"西固区"},{"s":"安宁区"},{"s":"红古区"},{"s":"永登县"},{"s":"皋兰县"},{"s":"榆中县"}]},{"n":"嘉峪关","a":[{"s":"嘉峪关市"}]},{"n":"金昌","a":[{"s":"金川区"},{"s":"永昌县"}]},{"n":"白银","a":[{"s":"白银区"},{"s":"平川区"},{"s":"靖远县"},{"s":"会宁县"},{"s":"景泰县"}]},{"n":"天水","a":[{"s":"秦城区"},{"s":"麦积区"},{"s":"清水县"},{"s":"秦安县"},{"s":"甘谷县"},{"s":"武山县"},{"s":"张家川回族自治县"}]},{"n":"武威","a":[{"s":"凉州区"},{"s":"民勤县"},{"s":"古浪县"},{"s":"天祝藏族自治县"}]},{"n":"张掖","a":[{"s":"甘州区"},{"s":"肃南裕固族自治县"},{"s":"民乐县"},{"s":"临泽县"},{"s":"高台县"},{"s":"山丹县"}]},{"n":"平凉","a":[{"s":"崆峒区"},{"s":"泾川县"},{"s":"灵台县"},{"s":"崇信县"},{"s":"华亭县"},{"s":"庄浪县"},{"s":"静宁县"}]},{"n":"酒泉","a":[{"s":"肃州区"},{"s":"金塔县"},{"s":"瓜州县"},{"s":"肃北蒙古族自治县"},{"s":"阿克塞哈萨克族自治县"},{"s":"玉门市"},{"s":"敦煌市"}]},{"n":"庆阳","a":[{"s":"西峰区"},{"s":"庆城县"},{"s":"环县"},{"s":"华池县"},{"s":"合水县"},{"s":"正宁县"},{"s":"宁县"},{"s":"镇原县"}]},{"n":"定西","a":[{"s":"安定区"},{"s":"通渭县"},{"s":"陇西县"},{"s":"渭源县"},{"s":"临洮县"},{"s":"漳县"},{"s":"岷县"}]},{"n":"陇南","a":[{"s":"武都区"},{"s":"成县"},{"s":"文县"},{"s":"宕昌县"},{"s":"康县"},{"s":"西和县"},{"s":"礼县"},{"s":"徽县"},{"s":"两当县"}]},{"n":"临夏","a":[{"s":"临夏市"},{"s":"临夏县"},{"s":"康乐县"},{"s":"永靖县"},{"s":"广河县"},{"s":"和政县"},{"s":"东乡族自治县"},{"s":"积石山保安族东乡族撒拉族自治县"}]},{"n":"甘南","a":[{"s":"合作市"},{"s":"临潭县"},{"s":"卓尼县"},{"s":"舟曲县"},{"s":"迭部县"},{"s":"玛曲县"},{"s":"碌曲县"},{"s":"夏河县"}]}]},{"p":"青海","c":[{"n":"西宁","a":[{"s":"城东区"},{"s":"城中区"},{"s":"城西区"},{"s":"城北区"},{"s":"大通回族土族自治县"},{"s":"湟中县"},{"s":"湟源县"}]},{"n":"海东","a":[{"s":"平安县"},{"s":"民和回族土族自治县"},{"s":"乐都县"},{"s":"互助土族自治县"},{"s":"化隆回族自治县"},{"s":"循化撒拉族自治县"}]},{"n":"海北","a":[{"s":"门源回族自治县"},{"s":"祁连县"},{"s":"海晏县"},{"s":"刚察县"}]},{"n":"黄南","a":[{"s":"同仁县"},{"s":"尖扎县"},{"s":"泽库县"},{"s":"河南蒙古族自治县"}]},{"n":"海南","a":[{"s":"共和县"},{"s":"同德县"},{"s":"贵德县"},{"s":"兴海县"},{"s":"贵南县"}]},{"n":"果洛","a":[{"s":"玛沁县"},{"s":"班玛县"},{"s":"甘德县"},{"s":"达日县"},{"s":"久治县"},{"s":"玛多县"}]},{"n":"玉树","a":[{"s":"玉树县"},{"s":"杂多县"},{"s":"称多县"},{"s":"治多县"},{"s":"囊谦县"},{"s":"曲麻莱县"}]},{"n":"梅西","a":[{"s":"格尔木市"},{"s":"德令哈市"},{"s":"乌兰县"},{"s":"都兰县"},{"s":"天峻县"}]}]},{"p":"宁夏","c":[{"n":"银川","a":[{"s":"兴庆区"},{"s":"西夏区"},{"s":"金凤区"},{"s":"永宁县"},{"s":"贺兰县"},{"s":"灵武市"}]},{"n":"石嘴山","a":[{"s":"大武口区"},{"s":"惠农区"},{"s":"平罗县"}]},{"n":"吴忠","a":[{"s":"利通区"},{"s":"红寺堡区"},{"s":"盐池县"},{"s":"同心县"},{"s":"青铜峡市"}]},{"n":"固原","a":[{"s":"原州区"},{"s":"西吉县"},{"s":"隆德县"},{"s":"泾源县"},{"s":"彭阳县"}]},{"n":"中卫","a":[{"s":"沙坡头区"},{"s":"中宁县"},{"s":"海原县"}]}]},{"p":"新疆","c":[{"n":"乌鲁木齐","a":[{"s":"天山区"},{"s":"沙依巴克区"},{"s":"新市区"},{"s":"水磨沟区"},{"s":"头屯河区"},{"s":"达坂城区"},{"s":"米东区"},{"s":"乌鲁木齐县"}]},{"n":"克拉玛依","a":[{"s":"独山子区"},{"s":"克拉玛依区"},{"s":"白碱滩区"},{"s":"乌尔禾区"}]},{"n":"吐鲁番","a":[{"s":"吐鲁番市"},{"s":"鄯善县"},{"s":"托克逊县"}]},{"n":"哈密","a":[{"s":"哈密市"},{"s":"巴里坤哈萨克自治县"},{"s":"伊吾县"}]},{"n":"昌吉","a":[{"s":"昌吉市"},{"s":"阜康市"},{"s":"呼图壁县"},{"s":"玛纳斯县"},{"s":"奇台县"},{"s":"吉木萨尔县"},{"s":"木垒哈萨克自治县"}]},{"n":"博尔塔拉","a":[{"s":"博乐市"},{"s":"精河县"},{"s":"温泉县"}]},{"n":"巴音郭楞","a":[{"s":"库尔勒市"},{"s":"轮台县"},{"s":"尉犁县"},{"s":"若羌县"},{"s":"且末县"},{"s":"焉耆回族自治县"},{"s":"和静县"},{"s":"和硕县"},{"s":"博湖县"}]},{"n":"阿克苏","a":[{"s":"阿克苏市"},{"s":"温宿县"},{"s":"库车县"},{"s":"沙雅县"},{"s":"新和县"},{"s":"拜城县"},{"s":"乌什县"},{"s":"阿瓦提县"},{"s":"柯坪县"}]},{"n":"克孜勒苏","a":[{"s":"阿图什市"},{"s":"阿克陶县"},{"s":"阿合奇县"},{"s":"乌恰县"}]},{"n":"喀什","a":[{"s":"喀什市"},{"s":"疏附县"},{"s":"疏勒县"},{"s":"英吉沙县"},{"s":"泽普县"},{"s":"莎车县"},{"s":"叶城县"},{"s":"麦盖提县"},{"s":"岳普湖县"},{"s":"伽师县"},{"s":"巴楚县"},{"s":"塔什库尔干县塔吉克自治"}]},{"n":"和田","a":[{"s":"和田市"},{"s":"和田县"},{"s":"墨玉县"},{"s":"皮山县"},{"s":"洛浦县"},{"s":"策勒县"},{"s":"于田县"},{"s":"民丰县"}]},{"n":"伊犁","a":[{"s":"伊宁市"},{"s":"奎屯市"},{"s":"伊宁县"},{"s":"察布查尔锡伯自治县"},{"s":"霍城县"},{"s":"巩留县"},{"s":"新源县"},{"s":"昭苏县"},{"s":"特克斯县"},{"s":"尼勒克县"}]},{"n":"塔城","a":[{"s":"塔城市"},{"s":"乌苏市"},{"s":"额敏县"},{"s":"沙湾县"},{"s":"托里县"},{"s":"裕民县"},{"s":"和布克赛尔蒙古自治县"}]},{"n":"阿勒泰","a":[{"s":"阿勒泰市"},{"s":"布尔津县"},{"s":"富蕴县"},{"s":"福海县"},{"s":"哈巴河县"},{"s":"青河县"},{"s":"吉木乃县"}]},{"n":"石河子","a":[{"s":"石河子"}]},{"n":"阿拉尔","a":[{"s":"阿拉尔"}]},{"n":"图木舒克","a":[{"s":"图木舒克"}]},{"n":"五家渠","a":[{"s":"五家渠"}]}]},{"p":"香港","c":[{"n":"中西区"},{"n":"东区"},{"n":"九龙城区"},{"n":"观塘区"},{"n":"南区"},{"n":"深水区"},{"n":"湾仔区"},{"n":"黄大仙区"},{"n":"油尖旺区"},{"n":"离岛区"},{"n":"葵青区"},{"n":"北区"},{"n":"西贡区"},{"n":"沙田区"},{"n":"屯门区"},{"n":"大埔区"},{"n":"荃湾区"},{"n":"元朗区"}]},{"p":"澳门","c":[{"n":"花地玛堂区"},{"n":"圣安多尼堂区"},{"n":"大堂区"},{"n":"望德堂区"},{"n":"风顺堂区"},{"n":"嘉模堂区"},{"n":"圣方济各堂区"}]},{"p":"台湾","c":[{"n":"台北市"},{"n":"高雄市"},{"n":"基隆市"},{"n":"台中市"},{"n":"台南市"},{"n":"新竹市"},{"n":"嘉义市"},{"n":"台北县"},{"n":"宜兰县"},{"n":"新竹县"},{"n":"桃园县"},{"n":"苗栗县"},{"n":"台中县"},{"n":"彰化县"},{"n":"南投县"},{"n":"嘉义县"},{"n":"云林县"},{"n":"台南县"},{"n":"高雄县"},{"n":"屏东县"},{"n":"台东县"},{"n":"花莲县"},{"n":"澎湖县"}]},{"p":"国外"}];
/**
 * 分页列表，监听oms.table.refresh 刷新列表内容广播
 * 
 * @event  oms.table.goto 点击分页切换时触发
 *         
 * @param  {[type]} 
 */
impex.component('impex-table-page',{
    $template:'<div {{=BINDPROPS}} class="impexs-component-tabe-page"><div style="text-align: right;">\
    	当前显示 {{(index-1)*pageSize + 1}} - {{(index*pageSize) > recordNum ? recordNum : (index*pageSize)}} 条, 共 {{recordNum}} 条\
    	</div>\
    	<div align="center" class="row">\
    		<ul class="pagination">\
    			<li class="select">\
    				每页\
    				<select x-value="pageSize" :change="changePageCount(this)">\
    					<option value="10">10</option>\
    					<option value="20">20</option>\
    					<option value="50">50</option>\
    					<option value="100">100</option>\
    				</select>\
    				条\
    			</li>\
    			<li class="{{index===1?\'disabled\':\'\'}}"\
    				:click="goto(index - 1,this);">上一页</li>\
    			<li x-if="index-2>0" :click="goto(1,this);">1</li>\
    			<li x-if="index-3>0">...</li>\
    			<li class="{{i===0?\'active\':\'\'}}"\
    				x-each="[-1,0,1] as i"\
    				x-if="index + i>0 && index + i<=pageCount"\
    				:click="goto(index + i,this);">\
    				{{index + i}}\
    			</li>\
    			<li x-if="pageCount - index > 2">...\
    			</li>\
    			<li x-if="pageCount - index >= 2" :click="goto(pageCount,this);">{{pageCount}}</li>\
    			<li class="{{index===pageCount?\'disabled\':\'\'}}" :click="goto(index + 1,this);">下一页</li>\
    			<li class="goto">\
    				到第 <input value="{{fastGotoNumber > pageCount ? pageCount : fastGotoNumber}}" x-model="fastGotoNumber" type="text"/> 页\
    				<button :click="fastGoto(this)" class="btn btn-default btn-sm">确定</button>\
    			</li>\
    		</ul>\
    	</div></div> ',
    pagetool: true,
	pageid:"",
    //pagination:{
	index:1,
	pageSize:10,
	recordNum:0,
	pageCount:0,
	fastGotoNumber: 2,
	goto:function(i,ot){
		//if(this.id != this.pageid) return;
		if(i<1)return;
		if(i>this.pageCount)return;
		if(i === this.index + "")return;

		this.index = i;
		this.fastGotoNumber = (i == this.pageCount) ? this.pageCount : (i　+ 1);
		ot.emit('impex.table.goto'+(this.id?("."+this.id):""),i, this.pageSize,this.id);
       // }
    },
    onInit: function() {
  		//this.pagination = $.extend({}, this.pagination);
		impex.top = this;
		this.pageid = this.id;
    },
    fastGoto: function(ot) {
		//if(this.id!=this.pageid) return;
		var that = this;
    	var type = event.type;
    	//var pagination = this.pagination;
    	var fastGotoNumber = that.fastGotoNumber;
    	var reg = /^([1-9]\d*)$/;
    	if (!reg.test(fastGotoNumber)) {
    		that.fastGotoNumber = that.pageCount > 1 ? 2 : 1;
    		that.goto(1, ot);
    		return;
    	}
    	
    	if (fastGotoNumber > that.pageCount) {
    		that.fastGotoNumber = that.pageCount; 
    	}
    	
    	if (("keydown" === type && event.keyCode === 13) || "click" === type) {
    		that.goto(parseInt(that.fastGotoNumber), ot);
    	}
    },
    changePageCount: function(com) {
		//if(this.id!=this.pageid) return;
		var that = this;
    	//var pagination = this.pagination;
    	that.pageSize = com.$view.el.value;
    	com.emit("impex.table.goto"+(this.id?("."+this.id):""), 1, that.pageSize,this.id);
    },
    refresh:function(pagination,pageid){
		
        if(pagination && this.id==pageid) {
        	for(var k in pagination){
                this[k] = pagination[k];
            }
        	var pi = pagination.index + 1;
        	if (pi > pagination.pageCount) pi = pagination.index;
        	this.fastGotoNumber = pi;
        }
    },
    onCreate:function(){
		var that = this;
        this.on('impex.table.refresh',function(target,pagination,pageid){			
			that.pageid = pageid;
			if(that.id!=that.pageid) return;
			that.pageCount = pagination.pageCount;
			that.recordNum = pagination.recordNum;
			that.index = pagination.index;
            that.refresh(pagination,pageid);
        });
    },
});





/**
 * oms-form组件
 */
impex.component('impex-form', {
	$template: '<form {{=BINDPROPS}} x-submit="onsubmitt">{{=CONTENT}}\
				<div id="modalFooter" class="modal-footer" style="text-align:center;">\
						<button id="submitbtn" class="btn btn-primary" type="submit" x-disabled="studentForm.invalid" >&nbsp;&nbsp;保 存&nbsp;&nbsp;</button>\
						<button id="cancelbtn" class="btn btn-primary" :click="cancel();">&nbsp;&nbsp;关 闭&nbsp;&nbsp;</button> \
				</div>\
				</form>',   
	onInit: function() {
		
	},	
	onsubmitt: function() {
		console.log("1");
		try{
			if(this.onsubmit!=undefined){
				this.$parent.closest(this.onsubmit)[this.onsubmit](this.$view.el);
			}
		}catch(e){
			console.log("调用onsubmit函数出错");
		}
	}
});

/**
 * oms-area组件
 */
var _impex_areaList = [{"p":"北京","c":[{"n":"东城区"},{"n":"西城区"},{"n":"崇文区"},{"n":"宣武区"},{"n":"朝阳区"},{"n":"丰台区"},{"n":"石景山区"},{"n":"海淀区"},{"n":"门头沟区"},{"n":"房山区"},{"n":"通州区"},{"n":"顺义区"},{"n":"昌平区"},{"n":"大兴区"},{"n":"平谷区"},{"n":"怀柔区"},{"n":"密云县"},{"n":"延庆县"}]},{"p":"天津","c":[{"n":"和平区"},{"n":"河东区"},{"n":"河西区"},{"n":"南开区"},{"n":"河北区"},{"n":"红挢区"},{"n":"滨海新区"},{"n":"东丽区"},{"n":"西青区"},{"n":"津南区"},{"n":"北辰区"},{"n":"宁河区"},{"n":"武清区"},{"n":"静海县"},{"n":"宝坻区"},{"n":"蓟县"}]},{"p":"河北","c":[{"n":"石家庄","a":[{"s":"长安区"},{"s":"桥东区"},{"s":"桥西区"},{"s":"新华区"},{"s":"井陉矿区"},{"s":"裕华区"},{"s":"井陉县"},{"s":"正定县"},{"s":"栾城县"},{"s":"行唐县"},{"s":"灵寿县"},{"s":"高邑县"},{"s":"深泽县"},{"s":"赞皇县"},{"s":"无极县"},{"s":"平山县"},{"s":"元氏县"},{"s":"赵县"},{"s":"辛集市"},{"s":"藁城市"},{"s":"晋州市"},{"s":"新乐市"},{"s":"鹿泉市"}]},{"n":"唐山","a":[{"s":"路南区"},{"s":"路北区"},{"s":"古冶区"},{"s":"开平区"},{"s":"丰南区"},{"s":"丰润区"},{"s":"滦县"},{"s":"滦南县"},{"s":"乐亭县"},{"s":"迁西县"},{"s":"玉田县"},{"s":"唐海县"},{"s":"遵化市"},{"s":"迁安市"}]},{"n":"秦皇岛","a":[{"s":"海港区"},{"s":"山海关区"},{"s":"北戴河区"},{"s":"青龙满族自治县"},{"s":"昌黎县"},{"s":"抚宁县"},{"s":"卢龙县"}]},{"n":"邯郸","a":[{"s":"邯山区"},{"s":"丛台区"},{"s":"复兴区"},{"s":"峰峰矿区"},{"s":"邯郸县"},{"s":"临漳县"},{"s":"成安县"},{"s":"大名县"},{"s":"涉县"},{"s":"磁县"},{"s":"肥乡县"},{"s":"永年县"},{"s":"邱县"},{"s":"鸡泽县"},{"s":"广平县"},{"s":"馆陶县"},{"s":"魏县"},{"s":"曲周县"},{"s":"武安市"}]},{"n":"邢台","a":[{"s":"桥东区"},{"s":"桥西区"},{"s":"邢台县"},{"s":"临城县"},{"s":"内丘县"},{"s":"柏乡县"},{"s":"隆尧县"},{"s":"任县"},{"s":"南和县"},{"s":"宁晋县"},{"s":"巨鹿县"},{"s":"新河县"},{"s":"广宗县"},{"s":"平乡县"},{"s":"威县"},{"s":"清河县"},{"s":"临西县"},{"s":"南宫市"},{"s":"沙河市"}]},{"n":"保定","a":[{"s":"新市区"},{"s":"北市区"},{"s":"南市区"},{"s":"满城县"},{"s":"清苑县"},{"s":"涞水县"},{"s":"阜平县"},{"s":"徐水县"},{"s":"定兴县"},{"s":"唐县"},{"s":"高阳县"},{"s":"容城县"},{"s":"涞源县"},{"s":"望都县"},{"s":"安新县"},{"s":"易县"},{"s":"曲阳县"},{"s":"蠡县"},{"s":"顺平县"},{"s":"博野县"},{"s":"雄县"},{"s":"涿州市"},{"s":"定州市"},{"s":"安国市"},{"s":"高碑店市"}]},{"n":"张家口","a":[{"s":"桥东区"},{"s":"桥西区"},{"s":"宣化区"},{"s":"下花园区"},{"s":"宣化县"},{"s":"张北县"},{"s":"康保县"},{"s":"沽源县"},{"s":"尚义县"},{"s":"蔚县"},{"s":"阳原县"},{"s":"怀安县"},{"s":"万全县"},{"s":"怀来县"},{"s":"涿鹿县"},{"s":"赤城县"},{"s":"崇礼县"}]},{"n":"承德","a":[{"s":"双桥区"},{"s":"双滦区"},{"s":"鹰手营子矿区"},{"s":"承德县"},{"s":"兴隆县"},{"s":"平泉县"},{"s":"滦平县"},{"s":"隆化县"},{"s":"丰宁满族自治县"},{"s":"宽城满族自治县"},{"s":"围场满族蒙古族自治县"}]},{"n":"沧州","a":[{"s":"新华区"},{"s":"运河区"},{"s":"沧县"},{"s":"青县"},{"s":"东光县"},{"s":"海兴县"},{"s":"盐山县"},{"s":"肃宁县"},{"s":"南皮县"},{"s":"吴桥县"},{"s":"献县"},{"s":"孟村回族自治县"},{"s":"泊头市"},{"s":"任丘市"},{"s":"黄骅市"},{"s":"河间市"}]},{"n":"廊坊","a":[{"s":"安次区"},{"s":"广阳区"},{"s":"固安县"},{"s":"永清县"},{"s":"香河县"},{"s":"大城县"},{"s":"文安县"},{"s":"大厂回族自治县"},{"s":"霸州市"},{"s":"三河市"}]},{"n":"衡水","a":[{"s":"桃城区"},{"s":"枣强县"},{"s":"武邑县"},{"s":"武强县"},{"s":"饶阳县"},{"s":"安平县"},{"s":"故城县"},{"s":"景县"},{"s":"阜城县"},{"s":"冀州市"},{"s":"深州市"}]}]},{"p":"山西","c":[{"n":"太原","a":[{"s":"小店区"},{"s":"迎泽区"},{"s":"杏花岭区"},{"s":"尖草坪区"},{"s":"万柏林区"},{"s":"晋源区"},{"s":"清徐县"},{"s":"阳曲县"},{"s":"娄烦县"},{"s":"古交市"}]},{"n":"大同","a":[{"s":"城区"},{"s":"矿区"},{"s":"南郊区"},{"s":"新荣区"},{"s":"阳高县"},{"s":"天镇县"},{"s":"广灵县"},{"s":"灵丘县"},{"s":"浑源县"},{"s":"左云县"},{"s":"大同县"}]},{"n":"阳泉","a":[{"s":"城区"},{"s":"矿区"},{"s":"郊区"},{"s":"平定县"},{"s":"盂县"}]},{"n":"长治","a":[{"s":"城区"},{"s":"郊区"},{"s":"长治县"},{"s":"襄垣县"},{"s":"屯留县"},{"s":"平顺县"},{"s":"黎城县"},{"s":"壶关县"},{"s":"长子县"},{"s":"武乡县"},{"s":"沁县"},{"s":"沁源县"},{"s":"潞城市"}]},{"n":"晋城","a":[{"s":"城区"},{"s":"沁水县"},{"s":"阳城县"},{"s":"陵川县"},{"s":"泽州县"},{"s":"高平市"}]},{"n":"朔州","a":[{"s":"朔城区"},{"s":"平鲁区"},{"s":"山阴县"},{"s":"应县"},{"s":"右玉县"},{"s":"怀仁县"}]},{"n":"晋中","a":[{"s":"榆次区"},{"s":"榆社县"},{"s":"左权县"},{"s":"和顺县"},{"s":"昔阳县"},{"s":"寿阳县"},{"s":"太谷县"},{"s":"祁县"},{"s":"平遥县"},{"s":"灵石县"},{"s":"介休市"}]},{"n":"运城","a":[{"s":"盐湖区"},{"s":"临猗县"},{"s":"万荣县"},{"s":"闻喜县"},{"s":"稷山县"},{"s":"新绛县"},{"s":"绛县"},{"s":"垣曲县"},{"s":"夏县"},{"s":"平陆县"},{"s":"芮城县"},{"s":"永济市"},{"s":"河津市"}]},{"n":"忻州","a":[{"s":"忻府区"},{"s":"定襄县"},{"s":"五台县"},{"s":"代县"},{"s":"繁峙县"},{"s":"宁武县"},{"s":"静乐县"},{"s":"神池县"},{"s":"五寨县"},{"s":"岢岚县"},{"s":"河曲县"},{"s":"保德县"},{"s":"偏关县"},{"s":"原平市"}]},{"n":"临汾","a":[{"s":"尧都区"},{"s":"曲沃县"},{"s":"翼城县"},{"s":"襄汾县"},{"s":"洪洞县"},{"s":"古县"},{"s":"安泽县"},{"s":"浮山县"},{"s":"吉县"},{"s":"乡宁县"},{"s":"大宁县"},{"s":"隰县"},{"s":"永和县"},{"s":"蒲县"},{"s":"汾西县"},{"s":"侯马市"},{"s":"霍州市"}]},{"n":"吕梁","a":[{"s":"离石区"},{"s":"文水县"},{"s":"交城县"},{"s":"兴县"},{"s":"临县"},{"s":"柳林县"},{"s":"石楼县"},{"s":"岚县"},{"s":"方山县"},{"s":"中阳县"},{"s":"交口县"},{"s":"孝义市"},{"s":"汾阳市"}]}]},{"p":"内蒙古","c":[{"n":"呼和浩特","a":[{"s":"新城区"},{"s":"回民区"},{"s":"玉泉区"},{"s":"玉泉区"},{"s":"赛罕区"},{"s":"土默特左旗"},{"s":"托克托县"},{"s":"和林格尔县"},{"s":"清水河县"},{"s":"武川县"}]},{"n":"包头","a":[{"s":"东河区"},{"s":"昆都仑区"},{"s":"青山区"},{"s":"石拐区"},{"s":"白云矿区"},{"s":"九原区"},{"s":"土默特右旗"},{"s":"固阳县"},{"s":"达尔罕茂明安联合旗"}]},{"n":"乌海","a":[{"s":"海勃湾区"},{"s":"海南区"},{"s":"乌达区"}]},{"n":"赤峰","a":[{"s":"红山区"},{"s":"元宝山区"},{"s":"松山区"},{"s":"阿鲁科尔沁旗"},{"s":"巴林左旗"},{"s":"巴林右旗"},{"s":"林西县"},{"s":"克什克腾旗"},{"s":"翁牛特旗"},{"s":"喀喇沁旗"},{"s":"宁城县"},{"s":"敖汉旗"}]},{"n":"通辽","a":[{"s":"科尔沁区"},{"s":"科尔沁左翼中旗"},{"s":"科尔沁左翼后旗"},{"s":"开鲁县"},{"s":"库伦旗"},{"s":"奈曼旗"},{"s":"扎鲁特旗"},{"s":"霍林郭勒市"}]},{"n":"鄂尔多斯","a":[{"s":"东胜区"},{"s":"达拉特旗"},{"s":"准格尔旗"},{"s":"鄂托克前旗"},{"s":"鄂托克旗"},{"s":"杭锦旗"},{"s":"乌审旗"},{"s":"伊金霍洛旗"}]},{"n":"呼伦贝尔","a":[{"s":"海拉尔区"},{"s":"阿荣旗"},{"s":"莫力达瓦达斡尔族自治旗"},{"s":"鄂伦春自治旗"},{"s":"鄂温克族自治旗"},{"s":"陈巴尔虎旗"},{"s":"新巴尔虎左旗"},{"s":"新巴尔虎右旗"},{"s":"满洲里市"},{"s":"牙克石市"},{"s":"扎兰屯市"},{"s":"额尔古纳市"},{"s":"根河市"}]},{"n":"巴彦淖尔","a":[{"s":"临河区"},{"s":"五原县"},{"s":"磴口县"},{"s":"乌拉特前旗"},{"s":"乌拉特中旗"},{"s":"乌拉特后旗"},{"s":"杭锦后旗"}]},{"n":"乌兰察布","a":[{"s":"集宁区"},{"s":"卓资县"},{"s":"化德县"},{"s":"商都县"},{"s":"兴和县"},{"s":"凉城县"},{"s":"察哈尔右翼前旗"},{"s":"察哈尔右翼中旗"},{"s":"察哈尔右翼后旗"},{"s":"四子王旗"},{"s":"丰镇市"}]},{"n":"兴安","a":[{"s":"乌兰浩特市"},{"s":"阿尔山市"},{"s":"科尔沁右翼前旗"},{"s":"科尔沁右翼中旗"},{"s":"扎赉特旗"},{"s":"突泉县"}]},{"n":"锡林郭勒","a":[{"s":"二连浩特市"},{"s":"锡林浩特市"},{"s":"阿巴嘎旗"},{"s":"苏尼特左旗"},{"s":"苏尼特右旗"},{"s":"东乌珠穆沁旗"},{"s":"西乌珠穆沁旗"},{"s":"太仆寺旗"},{"s":"镶黄旗"},{"s":"正镶白旗"},{"s":"正蓝旗"},{"s":"多伦县"}]},{"n":"阿拉善","a":[{"s":"阿拉善左旗"},{"s":"阿拉善右旗"},{"s":"额济纳旗"}]}]},{"p":"辽宁","c":[{"n":"沈阳","a":[{"s":"和平区"},{"s":"沈河区"},{"s":"大东区"},{"s":"皇姑区"},{"s":"铁西区"},{"s":"苏家屯区"},{"s":"东陵区"},{"s":"新城子区"},{"s":"于洪区"},{"s":"辽中县"},{"s":"康平县"},{"s":"法库县"},{"s":"新民市"}]},{"n":"大连","a":[{"s":"中山区"},{"s":"西岗区"},{"s":"沙河口区"},{"s":"甘井子区"},{"s":"旅顺口区"},{"s":"金州区"},{"s":"长海县"},{"s":"瓦房店市"},{"s":"普兰店市"},{"s":"庄河市"}]},{"n":"鞍山","a":[{"s":"铁东区"},{"s":"铁西区"},{"s":"立山区"},{"s":"千山区"},{"s":"台安县"},{"s":"210323"},{"s":"海城市"}]},{"n":"抚顺","a":[{"s":"新抚区"},{"s":"东洲区"},{"s":"望花区"},{"s":"顺城区"},{"s":"抚顺县"},{"s":"新宾满族自治县"},{"s":"清原满族自治县"}]},{"n":"本溪","a":[{"s":"平山区"},{"s":"溪湖区"},{"s":"明山区"},{"s":"南芬区"},{"s":"本溪满族自治县"},{"s":"桓仁满族自治县"}]},{"n":"丹东","a":[{"s":"元宝区"},{"s":"振兴区"},{"s":"振安区"},{"s":"宽甸满族自治县"},{"s":"东港市"},{"s":"凤城市"}]},{"n":"锦州","a":[{"s":"古塔区"},{"s":"凌河区"},{"s":"太和区"},{"s":"黑山县"},{"s":"义县"},{"s":"凌海市"},{"s":"北镇市"}]},{"n":"营口","a":[{"s":"站前区"},{"s":"西市区"},{"s":"鲅鱼圈区"},{"s":"老边区"},{"s":"盖州市"},{"s":"大石桥市"}]},{"n":"阜新","a":[{"s":"海州区"},{"s":"新邱区"},{"s":"太平区"},{"s":"清河门区"},{"s":"细河区"},{"s":"阜新蒙古族自治县"},{"s":"彰武县"}]},{"n":"辽阳","a":[{"s":"白塔区"},{"s":"文圣区"},{"s":"宏伟区"},{"s":"弓长岭区"},{"s":"太子河区"},{"s":"辽阳县"},{"s":"灯塔市"}]},{"n":"盘锦","a":[{"s":"双台子区"},{"s":"兴隆台区"},{"s":"大洼县"},{"s":"盘山县"}]},{"n":"铁岭","a":[{"s":"银州区"},{"s":"清河区"},{"s":"铁岭县"},{"s":"西丰县"},{"s":"昌图县"},{"s":"调兵山市"},{"s":"开原市"}]},{"n":"朝阳","a":[{"s":"双塔区"},{"s":"龙城区"},{"s":"朝阳县"},{"s":"建平县"},{"s":"喀喇沁左翼蒙古族自治县"},{"s":"北票市"},{"s":"凌源市"}]},{"n":"葫芦岛","a":[{"s":"连山区"},{"s":"龙港区"},{"s":"南票区"},{"s":"绥中县"},{"s":"建昌县"},{"s":"兴城市"}]}]},{"p":"吉林","c":[{"n":"长春","a":[{"s":"南关区"},{"s":"宽城区"},{"s":"朝阳区"},{"s":"二道区"},{"s":"绿园区"},{"s":"双阳区"},{"s":"农安县"},{"s":"九台市"},{"s":"榆树市"},{"s":"德惠市"}]},{"n":"吉林","a":[{"s":"昌邑区"},{"s":"龙潭区"},{"s":"船营区"},{"s":"丰满区"},{"s":"永吉县"},{"s":"蛟河市"},{"s":"桦甸市"},{"s":"舒兰市"},{"s":"磐石市"}]},{"n":"四平","a":[{"s":"铁西区"},{"s":"铁东区"},{"s":"梨树县"},{"s":"伊通满族自治县"},{"s":"公主岭市"},{"s":"双辽市"}]},{"n":"辽源","a":[{"s":"龙山区"},{"s":"西安区"},{"s":"东丰县"},{"s":"东辽县"}]},{"n":"通化","a":[{"s":"东昌区"},{"s":"二道江区"},{"s":"通化县"},{"s":"辉南县"},{"s":"柳河县"},{"s":"梅河口市"},{"s":"集安市"}]},{"n":"白山","a":[{"s":"八道江区"},{"s":"江源区"},{"s":"抚松县"},{"s":"靖宇县"},{"s":"长白朝鲜族自治县"},{"s":"临江市"}]},{"n":"松原","a":[{"s":"宁江区"},{"s":"前郭尔罗斯蒙古族自治县"},{"s":"长岭县"},{"s":"乾安县"},{"s":"扶余县"}]},{"n":"白城","a":[{"s":"洮北区"},{"s":"镇赉县"},{"s":"通榆县"},{"s":"洮南市"},{"s":"大安市"}]},{"n":"延边","a":[{"s":"延吉市"},{"s":"图们市"},{"s":"敦化市"},{"s":"珲春市"},{"s":"龙井市"},{"s":"和龙市"},{"s":"汪清县"},{"s":"安图县"}]}]},{"p":"黑龙江","c":[{"n":"哈尔滨","a":[{"s":"道里区"},{"s":"南岗区"},{"s":"道外区"},{"s":"平房区"},{"s":"松北区"},{"s":"香坊区"},{"s":"呼兰区"},{"s":"阿城区"},{"s":"依兰县"},{"s":"方正县"},{"s":"宾县"},{"s":"巴彦县"},{"s":"木兰县"},{"s":"通河县"},{"s":"延寿县"},{"s":"双城市"},{"s":"尚志市"},{"s":"五常市"}]},{"n":"齐齐哈尔","a":[{"s":"龙沙区"},{"s":"建华区"},{"s":"铁锋区"},{"s":"昂昂溪区"},{"s":"富拉尔基区"},{"s":"碾子山区"},{"s":"梅里斯达斡尔族区"},{"s":"龙江县"},{"s":"依安县"},{"s":"泰来县"},{"s":"甘南县"},{"s":"富裕县"},{"s":"克山县"},{"s":"克东县"},{"s":"拜泉县"},{"s":"讷河市"}]},{"n":"鸡西","a":[{"s":"鸡冠区"},{"s":"恒山区"},{"s":"滴道区"},{"s":"梨树区"},{"s":"城子河区"},{"s":"麻山区"},{"s":"鸡东县"},{"s":"虎林市"},{"s":"密山市"}]},{"n":"鹤岗","a":[{"s":"向阳区"},{"s":"工农区"},{"s":"南山区"},{"s":"兴安区"},{"s":"东山区"},{"s":"兴山区"},{"s":"萝北县"},{"s":"绥滨县"}]},{"n":"双鸭山","a":[{"s":"尖山区"},{"s":"岭东区"},{"s":"四方台区"},{"s":"宝山区"},{"s":"集贤县"},{"s":"友谊县"},{"s":"宝清县"},{"s":"饶河县"}]},{"n":"大庆","a":[{"s":"萨尔图区"},{"s":"龙凤区"},{"s":"让胡路区"},{"s":"红岗区"},{"s":"大同区"},{"s":"肇州县"},{"s":"肇源县"},{"s":"林甸县"},{"s":"杜尔伯特蒙古族自治县"}]},{"n":"伊春","a":[{"s":"伊春区"},{"s":"南岔区"},{"s":"友好区"},{"s":"西林区"},{"s":"翠峦区"},{"s":"新青区"},{"s":"美溪区"},{"s":"金山屯区"},{"s":"五营区"},{"s":"乌马河区"},{"s":"汤旺河区"},{"s":"带岭区"},{"s":"乌伊岭区"},{"s":"红星区"},{"s":"上甘岭区"},{"s":"嘉荫县"},{"s":"铁力市"}]},{"n":"佳木斯","a":[{"s":"向阳区"},{"s":"前进区"},{"s":"东风区"},{"s":"郊区"},{"s":"桦南县"},{"s":"桦川县"},{"s":"汤原县"},{"s":"抚远县"},{"s":"同江市"},{"s":"富锦市"}]},{"n":"七台河","a":[{"s":"新兴区"},{"s":"桃山区"},{"s":"茄子河区"},{"s":"勃利县"}]},{"n":"牡丹江","a":[{"s":"东安区"},{"s":"阳明区"},{"s":"爱民区"},{"s":"西安区"},{"s":"东宁县"},{"s":"林口县"},{"s":"绥芬河市"},{"s":"海林市"},{"s":"宁安市"},{"s":"穆棱市"}]},{"n":"黑河","a":[{"s":"爱辉区"},{"s":"嫩江县"},{"s":"逊克县"},{"s":"孙吴县"},{"s":"北安市"},{"s":"五大连池市"}]},{"n":"绥化","a":[{"s":"北林区"},{"s":"望奎县"},{"s":"兰西县"},{"s":"青冈县"},{"s":"庆安县"},{"s":"明水县"},{"s":"绥棱县"},{"s":"安达市"},{"s":"肇东市"},{"s":"海伦市"}]},{"n":"大兴安岭","a":[{"s":"加格达奇区"},{"s":"松岭区"},{"s":"新林区"},{"s":"呼中区"},{"s":"呼玛县"},{"s":"塔河县"},{"s":"漠河县"}]}]},{"p":"上海","c":[{"n":"黄浦区"},{"n":"卢湾区"},{"n":"徐汇区"},{"n":"长宁区"},{"n":"静安区"},{"n":"普陀区"},{"n":"闸北区"},{"n":"虹口区"},{"n":"杨浦区"},{"n":"闵行区"},{"n":"宝山区"},{"n":"嘉定区"},{"n":"浦东新区"},{"n":"金山区"},{"n":"松江区"},{"n":"奉贤区"},{"n":"青浦区"},{"n":"崇明县"}]},{"p":"江苏","c":[{"n":"南京","a":[{"s":"玄武区"},{"s":"白下区"},{"s":"秦淮区"},{"s":"建邺区"},{"s":"鼓楼区"},{"s":"下关区"},{"s":"浦口区"},{"s":"栖霞区"},{"s":"雨花台区"},{"s":"江宁区"},{"s":"六合区"},{"s":"溧水县"},{"s":"高淳县"}]},{"n":"无锡","a":[{"s":"崇安区"},{"s":"南长区"},{"s":"北塘区"},{"s":"锡山区"},{"s":"惠山区"},{"s":"滨湖区"},{"s":"江阴市"},{"s":"宜兴市"}]},{"n":"徐州","a":[{"s":"鼓楼区"},{"s":"云龙区"},{"s":"九里区"},{"s":"贾汪区"},{"s":"泉山区"},{"s":"丰县"},{"s":"沛县"},{"s":"铜山县"},{"s":"睢宁县"},{"s":"新沂市"},{"s":"邳州市"}]},{"n":"常州","a":[{"s":"天宁区"},{"s":"钟楼区"},{"s":"戚墅堰区"},{"s":"新北区"},{"s":"武进区"},{"s":"溧阳市"},{"s":"金坛市"}]},{"n":"苏州","a":[{"s":"沧浪区"},{"s":"平江区"},{"s":"金阊区"},{"s":"虎丘区"},{"s":"吴中区"},{"s":"相城区"},{"s":"常熟市"},{"s":"张家港市"},{"s":"昆山市"},{"s":"吴江市"},{"s":"太仓市"}]},{"n":"南通","a":[{"s":"崇川区"},{"s":"港闸区"},{"s":"海安县"},{"s":"如东县"},{"s":"启东市"},{"s":"如皋市"},{"s":"通州市"},{"s":"海门市"}]},{"n":"连云港","a":[{"s":"连云区"},{"s":"新浦区"},{"s":"海州区"},{"s":"赣榆县"},{"s":"东海县"},{"s":"灌云县"},{"s":"灌南县"}]},{"n":"淮安","a":[{"s":"清河区"},{"s":"楚州区"},{"s":"淮阴区"},{"s":"清浦区"},{"s":"涟水县"},{"s":"洪泽县"},{"s":"盱眙县"},{"s":"金湖县"}]},{"n":"盐城","a":[{"s":"亭湖区"},{"s":"盐都区"},{"s":"响水县"},{"s":"滨海县"},{"s":"阜宁县"},{"s":"射阳县"},{"s":"建湖县"},{"s":"东台市"},{"s":"大丰市"}]},{"n":"扬州","a":[{"s":"广陵区"},{"s":"邗江区"},{"s":"维扬区"},{"s":"宝应县"},{"s":"仪征市"},{"s":"高邮市"},{"s":"江都市"}]},{"n":"镇江","a":[{"s":"京口区"},{"s":"润州区"},{"s":"丹徒区"},{"s":"丹阳市"},{"s":"扬中市"},{"s":"句容市"}]},{"n":"泰州","a":[{"s":"海陵区"},{"s":"高港区"},{"s":"兴化市"},{"s":"靖江市"},{"s":"泰兴市"},{"s":"姜堰市"}]},{"n":"宿迁","a":[{"s":"宿城区"},{"s":"宿豫区"},{"s":"沭阳县"},{"s":"泗阳县"},{"s":"泗洪县"}]}]},{"p":"浙江","c":[{"n":"杭州","a":[{"s":"上城区"},{"s":"下城区"},{"s":"江干区"},{"s":"拱墅区"},{"s":"西湖区"},{"s":"滨江区"},{"s":"萧山区"},{"s":"余杭区"},{"s":"桐庐县"},{"s":"淳安县"},{"s":"建德市"},{"s":"富阳市"},{"s":"临安市"}]},{"n":"宁波","a":[{"s":"海曙区"},{"s":"江东区"},{"s":"江北区"},{"s":"北仑区"},{"s":"镇海区"},{"s":"鄞州区"},{"s":"象山县"},{"s":"宁海县"},{"s":"余姚市"},{"s":"慈溪市"},{"s":"奉化市"}]},{"n":"温州","a":[{"s":"鹿城区"},{"s":"龙湾区"},{"s":"瓯海区"},{"s":"洞头县"},{"s":"永嘉县"},{"s":"平阳县"},{"s":"苍南县"},{"s":"文成县"},{"s":"泰顺县"},{"s":"瑞安市"},{"s":"乐清市"}]},{"n":"嘉兴","a":[{"s":"南湖区"},{"s":"秀洲区"},{"s":"嘉善县"},{"s":"海盐县"},{"s":"海宁市"},{"s":"平湖市"},{"s":"桐乡市"}]},{"n":"湖州","a":[{"s":"吴兴区"},{"s":"南浔区"},{"s":"德清县"},{"s":"长兴县"},{"s":"安吉县"}]},{"n":"绍兴","a":[{"s":"越城区"},{"s":"绍兴县"},{"s":"新昌县"},{"s":"诸暨市"},{"s":"上虞市"},{"s":"嵊州市"}]},{"n":"金华","a":[{"s":"婺城区"},{"s":"金东区"},{"s":"武义县"},{"s":"浦江县"},{"s":"磐安县"},{"s":"兰溪市"},{"s":"义乌市"},{"s":"东阳市"},{"s":"永康市"}]},{"n":"衢州","a":[{"s":"柯城区"},{"s":"衢江区"},{"s":"常山县"},{"s":"开化县"},{"s":"龙游县"},{"s":"江山市"}]},{"n":"舟山","a":[{"s":"定海区"},{"s":"普陀区"},{"s":"岱山县"},{"s":"嵊泗县"}]},{"n":"台州","a":[{"s":"椒江区"},{"s":"黄岩区"},{"s":"路桥区"},{"s":"玉环县"},{"s":"三门县"},{"s":"天台县"},{"s":"仙居县"},{"s":"温岭市"},{"s":"临海市"}]},{"n":"丽水","a":[{"s":"莲都区"},{"s":"青田县"},{"s":"缙云县"},{"s":"遂昌县"},{"s":"松阳县"},{"s":"云和县"},{"s":"庆元县"},{"s":"景宁畲族自治县"},{"s":"龙泉市"}]}]},{"p":"安徽","c":[{"n":"合肥","a":[{"s":"瑶海区"},{"s":"庐阳区"},{"s":"蜀山区"},{"s":"包河区"},{"s":"长丰县"},{"s":"肥东县"},{"s":"肥西县"}]},{"n":"芜湖","a":[{"s":"镜湖区"},{"s":"弋江区"},{"s":"鸠江区"},{"s":"三山区"},{"s":"芜湖县"},{"s":"繁昌县"},{"s":"南陵县"}]},{"n":"蚌埠","a":[{"s":"龙子湖区"},{"s":"蚌山区"},{"s":"禹会区"},{"s":"淮上区"},{"s":"怀远县"},{"s":"五河县"},{"s":"固镇县"}]},{"n":"淮南","a":[{"s":"大通区"},{"s":"田家庵区"},{"s":"谢家集区"},{"s":"八公山区"},{"s":"潘集区"},{"s":"凤台县"}]},{"n":"马鞍山","a":[{"s":"金家庄区"},{"s":"花山区"},{"s":"雨山区"},{"s":"当涂县"}]},{"n":"淮北","a":[{"s":"杜集区"},{"s":"相山区"},{"s":"烈山区"},{"s":"濉溪县"}]},{"n":"铜陵","a":[{"s":"铜官山区"},{"s":"狮子山区"},{"s":"郊区"},{"s":"铜陵县"}]},{"n":"安庆","a":[{"s":"迎江区"},{"s":"大观区"},{"s":"宜秀区"},{"s":"怀宁县"},{"s":"枞阳县"},{"s":"潜山县"},{"s":"太湖县"},{"s":"宿松县"},{"s":"望江县"},{"s":"岳西县"},{"s":"桐城市"}]},{"n":"黄山","a":[{"s":"屯溪区"},{"s":"黄山区"},{"s":"徽州区"},{"s":"歙县"},{"s":"休宁县"},{"s":"黟县"},{"s":"祁门县"}]},{"n":"滁州","a":[{"s":"琅琊区"},{"s":"南谯区"},{"s":"来安县"},{"s":"全椒县"},{"s":"定远县"},{"s":"凤阳县"},{"s":"天长市"},{"s":"明光市"}]},{"n":"阜阳","a":[{"s":"颍州区"},{"s":"颍东区"},{"s":"颍泉区"},{"s":"临泉县"},{"s":"太和县"},{"s":"阜南县"},{"s":"颍上县"},{"s":"界首市"}]},{"n":"宿州","a":[{"s":"埇桥区"},{"s":"砀山县"},{"s":"萧县"},{"s":"灵璧县"},{"s":"泗县"}]},{"n":"巢湖","a":[{"s":"居巢区"},{"s":"庐江县"},{"s":"无为县"},{"s":"含山县"},{"s":"和县"}]},{"n":"六安","a":[{"s":"金安区"},{"s":"裕安区"},{"s":"寿县"},{"s":"霍邱县"},{"s":"舒城县"},{"s":"金寨县"},{"s":"霍山县"}]},{"n":"亳州","a":[{"s":"谯城区"},{"s":"涡阳县"},{"s":"蒙城县"},{"s":"利辛县"}]},{"n":"池州","a":[{"s":"贵池区"},{"s":"东至县"},{"s":"石台县"},{"s":"青阳县"}]},{"n":"宣城","a":[{"s":"宣州区"},{"s":"郎溪县"},{"s":"广德县"},{"s":"泾县"},{"s":"绩溪县"},{"s":"旌德县"},{"s":"宁国市"}]}]},{"p":"福建","c":[{"n":"福州","a":[{"s":"鼓楼区"},{"s":"台江区"},{"s":"仓山区"},{"s":"马尾区"},{"s":"晋安区"},{"s":"闽侯县"},{"s":"连江县"},{"s":"罗源县"},{"s":"闽清县"},{"s":"永泰县"},{"s":"平潭县"},{"s":"福清市"},{"s":"长乐市"}]},{"n":"厦门","a":[{"s":"思明区"},{"s":"海沧区"},{"s":"湖里区"},{"s":"集美区"},{"s":"同安区"},{"s":"翔安区"}]},{"n":"莆田","a":[{"s":"城厢区"},{"s":"涵江区"},{"s":"荔城区"},{"s":"秀屿区"},{"s":"仙游县"}]},{"n":"三明","a":[{"s":"梅列区"},{"s":"三元区"},{"s":"明溪县"},{"s":"清流县"},{"s":"宁化县"},{"s":"大田县"},{"s":"尤溪县"},{"s":"沙县"},{"s":"将乐县"},{"s":"泰宁县"},{"s":"建宁县"},{"s":"永安市"}]},{"n":"泉州","a":[{"s":"鲤城区"},{"s":"丰泽区"},{"s":"洛江区"},{"s":"泉港区"},{"s":"惠安县"},{"s":"安溪县"},{"s":"永春县"},{"s":"德化县"},{"s":"金门县"},{"s":"石狮市"},{"s":"晋江市"},{"s":"南安市"}]},{"n":"漳州","a":[{"s":"芗城区"},{"s":"龙文区"},{"s":"云霄县"},{"s":"漳浦县"},{"s":"诏安县"},{"s":"长泰县"},{"s":"东山县"},{"s":"南靖县"},{"s":"平和县"},{"s":"华安县"},{"s":"龙海市"}]},{"n":"南平","a":[{"s":"延平区"},{"s":"顺昌县"},{"s":"浦城县"},{"s":"光泽县"},{"s":"松溪县"},{"s":"政和县"},{"s":"邵武市"},{"s":"武夷山市"},{"s":"建瓯市"},{"s":"建阳市"}]},{"n":"龙岩","a":[{"s":"新罗区"},{"s":"长汀县"},{"s":"永定县"},{"s":"上杭县"},{"s":"武平县"},{"s":"连城县"},{"s":"漳平市"}]},{"n":"宁德","a":[{"s":"蕉城区"},{"s":"霞浦县"},{"s":"古田县"},{"s":"屏南县"},{"s":"寿宁县"},{"s":"周宁县"},{"s":"柘荣县"},{"s":"福安市"},{"s":"福鼎市"}]}]},{"p":"江西","c":[{"n":"南昌","a":[{"s":"东湖区"},{"s":"西湖区"},{"s":"青云谱区"},{"s":"湾里区"},{"s":"青山湖区"},{"s":"南昌县"},{"s":"新建县"},{"s":"安义县"},{"s":"进贤县"}]},{"n":"景德镇","a":[{"s":"昌江区"},{"s":"珠山区"},{"s":"浮梁县"},{"s":"乐平市"}]},{"n":"萍乡","a":[{"s":"安源区"},{"s":"湘东区"},{"s":"莲花县"},{"s":"上栗县"},{"s":"芦溪县"}]},{"n":"九江","a":[{"s":"庐山区"},{"s":"浔阳区"},{"s":"九江县"},{"s":"武宁县"},{"s":"修水县"},{"s":"永修县"},{"s":"德安县"},{"s":"星子县"},{"s":"都昌县"},{"s":"湖口县"},{"s":"彭泽县"},{"s":"瑞昌市"}]},{"n":"新余","a":[{"s":"渝水区"},{"s":"分宜县"}]},{"n":"鹰潭","a":[{"s":"月湖区"},{"s":"余江县"},{"s":"贵溪市"}]},{"n":"赣州","a":[{"s":"章贡区"},{"s":"赣县"},{"s":"信丰县"},{"s":"大余县"},{"s":"上犹县"},{"s":"崇义县"},{"s":"安远县"},{"s":"龙南县"},{"s":"定南县"},{"s":"全南县"},{"s":"宁都县"},{"s":"于都县"},{"s":"兴国县"},{"s":"会昌县"},{"s":"寻乌县"},{"s":"石城县"},{"s":"瑞金市"},{"s":"南康市"}]},{"n":"吉安","a":[{"s":"吉州区"},{"s":"青原区"},{"s":"吉安县"},{"s":"吉水县"},{"s":"峡江县"},{"s":"新干县"},{"s":"永丰县"},{"s":"泰和县"},{"s":"遂川县"},{"s":"万安县"},{"s":"安福县"},{"s":"永新县"},{"s":"井冈山市"}]},{"n":"宜春","a":[{"s":"袁州区"},{"s":"奉新县"},{"s":"万载县"},{"s":"上高县"},{"s":"宜丰县"},{"s":"靖安县"},{"s":"铜鼓县"},{"s":"丰城市"},{"s":"樟树市"},{"s":"高安市"}]},{"n":"抚州","a":[{"s":"临川区"},{"s":"南城县"},{"s":"黎川县"},{"s":"南丰县"},{"s":"崇仁县"},{"s":"乐安县"},{"s":"宜黄县"},{"s":"金溪县"},{"s":"资溪县"},{"s":"东乡县"},{"s":"广昌县"}]},{"n":"上饶","a":[{"s":"信州区"},{"s":"上饶县"},{"s":"广丰县"},{"s":"玉山县"},{"s":"铅山县"},{"s":"横峰县"},{"s":"弋阳县"},{"s":"余干县"},{"s":"鄱阳县"},{"s":"万年县"},{"s":"婺源县"},{"s":"德兴市"}]}]},{"p":"山东","c":[{"n":"济南","a":[{"s":"历下区"},{"s":"市中区"},{"s":"槐荫区"},{"s":"天桥区"},{"s":"历城区"},{"s":"长清区"},{"s":"平阴县"},{"s":"济阳县"},{"s":"商河县"},{"s":"章丘市"}]},{"n":"青岛","a":[{"s":"市南区"},{"s":"市北区"},{"s":"四方区"},{"s":"黄岛区"},{"s":"崂山区"},{"s":"李沧区"},{"s":"城阳区"},{"s":"胶州市"},{"s":"即墨市"},{"s":"平度市"},{"s":"胶南市"},{"s":"莱西市"}]},{"n":"淄博","a":[{"s":"淄川区"},{"s":"张店区"},{"s":"博山区"},{"s":"临淄区"},{"s":"周村区"},{"s":"桓台县"},{"s":"高青县"},{"s":"沂源县"}]},{"n":"枣庄","a":[{"s":"市中区"},{"s":"薛城区"},{"s":"峄城区"},{"s":"台儿庄区"},{"s":"山亭区"},{"s":"滕州市"}]},{"n":"东营","a":[{"s":"东营区"},{"s":"河口区"},{"s":"垦利县"},{"s":"利津县"},{"s":"广饶县"}]},{"n":"烟台","a":[{"s":"芝罘区"},{"s":"福山区"},{"s":"牟平区"},{"s":"莱山区"},{"s":"长岛县"},{"s":"龙口市"},{"s":"莱阳市"},{"s":"莱州市"},{"s":"蓬莱市"},{"s":"招远市"},{"s":"栖霞市"},{"s":"海阳市"}]},{"n":"潍坊","a":[{"s":"潍城区"},{"s":"寒亭区"},{"s":"坊子区"},{"s":"奎文区"},{"s":"临朐县"},{"s":"昌乐县"},{"s":"青州市"},{"s":"诸城市"},{"s":"寿光市"},{"s":"安丘市"},{"s":"高密市"},{"s":"昌邑市"}]},{"n":"济宁","a":[{"s":"市中区"},{"s":"任城区"},{"s":"微山县"},{"s":"鱼台县"},{"s":"金乡县"},{"s":"嘉祥县"},{"s":"汶上县"},{"s":"泗水县"},{"s":"梁山县"},{"s":"曲阜市"},{"s":"兖州市"},{"s":"邹城市"}]},{"n":"泰安","a":[{"s":"泰山区"},{"s":"岱岳区"},{"s":"宁阳县"},{"s":"东平县"},{"s":"新泰市"},{"s":"肥城市"}]},{"n":"威海","a":[{"s":"环翠区"},{"s":"文登市"},{"s":"荣成市"},{"s":"乳山市"}]},{"n":"日照","a":[{"s":"东港区"},{"s":"岚山区"},{"s":"五莲县"},{"s":"莒县"}]},{"n":"莱芜","a":[{"s":"莱城区"},{"s":"钢城区"}]},{"n":"临沂","a":[{"s":"兰山区"},{"s":"罗庄区"},{"s":"河东区"},{"s":"沂南县"},{"s":"郯城县"},{"s":"沂水县"},{"s":"苍山县"},{"s":"费县"},{"s":"平邑县"},{"s":"莒南县"},{"s":"蒙阴县"},{"s":"临沭县"}]},{"n":"德州","a":[{"s":"德城区"},{"s":"陵县"},{"s":"宁津县"},{"s":"庆云县"},{"s":"临邑县"},{"s":"齐河县"},{"s":"平原县"},{"s":"夏津县"},{"s":"武城县"},{"s":"乐陵市"},{"s":"禹城市"}]},{"n":"聊城","a":[{"s":"东昌府区"},{"s":"阳谷县"},{"s":"莘县"},{"s":"茌平县"},{"s":"东阿县"},{"s":"冠县"},{"s":"高唐县"},{"s":"临清市"}]},{"n":"滨州","a":[{"s":"滨城区"},{"s":"惠民县"},{"s":"阳信县"},{"s":"无棣县"},{"s":"沾化县"},{"s":"博兴县"},{"s":"邹平县"}]},{"n":"菏泽","a":[{"s":"牡丹区"},{"s":"曹县"},{"s":"单县"},{"s":"成武县"},{"s":"巨野县"},{"s":"郓城县"},{"s":"鄄城县"},{"s":"定陶县"},{"s":"东明县"}]}]},{"p":"河南","c":[{"n":"郑州","a":[{"s":"中原区"},{"s":"二七区"},{"s":"管城回族区"},{"s":"金水区"},{"s":"上街区"},{"s":"惠济区"},{"s":"中牟县"},{"s":"巩义市"},{"s":"荥阳市"},{"s":"新密市"},{"s":"新郑市"},{"s":"登封市"}]},{"n":"开封","a":[{"s":"龙亭区"},{"s":"顺河回族区"},{"s":"鼓楼区"},{"s":"禹王台区"},{"s":"金明区"},{"s":"杞县"},{"s":"通许县"},{"s":"尉氏县"},{"s":"开封县"},{"s":"兰考县"}]},{"n":"洛阳","a":[{"s":"老城区"},{"s":"西工区"},{"s":"廛河回族区"},{"s":"涧西区"},{"s":"吉利区"},{"s":"洛龙区"},{"s":"孟津县"},{"s":"新安县"},{"s":"栾川县"},{"s":"嵩县"},{"s":"汝阳县"},{"s":"宜阳县"},{"s":"洛宁县"},{"s":"伊川县"},{"s":"偃师市"}]},{"n":"平顶山","a":[{"s":"新华区"},{"s":"卫东区"},{"s":"石龙区"},{"s":"湛河区"},{"s":"宝丰县"},{"s":"叶县"},{"s":"鲁山县"},{"s":"郏县"},{"s":"舞钢市"},{"s":"汝州市"}]},{"n":"安阳","a":[{"s":"文峰区"},{"s":"北关区"},{"s":"殷都区"},{"s":"龙安区"},{"s":"安阳县"},{"s":"汤阴县"},{"s":"滑县"},{"s":"内黄县"},{"s":"林州市"}]},{"n":"鹤壁","a":[{"s":"鹤山区"},{"s":"山城区"},{"s":"淇滨区"},{"s":"浚县"},{"s":"淇县"}]},{"n":"新乡","a":[{"s":"红旗区"},{"s":"卫滨区"},{"s":"凤泉区"},{"s":"牧野区"},{"s":"新乡县"},{"s":"获嘉县"},{"s":"原阳县"},{"s":"延津县"},{"s":"封丘县"},{"s":"长垣县"},{"s":"卫辉市"},{"s":"辉县市"}]},{"n":"焦作","a":[{"s":"解放区"},{"s":"中站区"},{"s":"马村区"},{"s":"山阳区"},{"s":"修武县"},{"s":"博爱县"},{"s":"武陟县"},{"s":"温县"},{"s":"沁阳市"},{"s":"孟州市"}]},{"n":"濮阳","a":[{"s":"华龙区"},{"s":"清丰县"},{"s":"南乐县"},{"s":"范县"},{"s":"台前县"},{"s":"濮阳县"}]},{"n":"许昌","a":[{"s":"魏都区"},{"s":"许昌县"},{"s":"鄢陵县"},{"s":"襄城县"},{"s":"禹州市"},{"s":"长葛市"}]},{"n":"漯河","a":[{"s":"源汇区"},{"s":"郾城区"},{"s":"召陵区"},{"s":"舞阳县"},{"s":"临颍县"}]},{"n":"三门峡","a":[{"s":"湖滨区"},{"s":"渑池县"},{"s":"陕县"},{"s":"卢氏县"},{"s":"义马市"},{"s":"灵宝市"}]},{"n":"南阳","a":[{"s":"宛城区"},{"s":"卧龙区"},{"s":"南召县"},{"s":"方城县"},{"s":"西峡县"},{"s":"镇平县"},{"s":"内乡县"},{"s":"淅川县"},{"s":"社旗县"},{"s":"唐河县"},{"s":"新野县"},{"s":"桐柏县"},{"s":"邓州市"}]},{"n":"商丘","a":[{"s":"梁园区"},{"s":"睢阳区"},{"s":"民权县"},{"s":"睢县"},{"s":"宁陵县"},{"s":"柘城县"},{"s":"虞城县"},{"s":"夏邑县"},{"s":"永城市"}]},{"n":"信阳","a":[{"s":"浉河区"},{"s":"平桥区"},{"s":"罗山县"},{"s":"光山县"},{"s":"新县"},{"s":"商城县"},{"s":"固始县"},{"s":"潢川县"},{"s":"淮滨县"},{"s":"息县"}]},{"n":"周口","a":[{"s":"川汇区"},{"s":"扶沟县"},{"s":"西华县"},{"s":"商水县"},{"s":"沈丘县"},{"s":"郸城县"},{"s":"淮阳县"},{"s":"太康县"},{"s":"鹿邑县"},{"s":"项城市"}]},{"n":"驻马店","a":[{"s":"驿城区"},{"s":"西平县"},{"s":"上蔡县"},{"s":"平舆县"},{"s":"正阳县"},{"s":"确山县"},{"s":"泌阳县"},{"s":"汝南县"},{"s":"遂平县"},{"s":"新蔡县"}]},{"n":"济源","a":[{"s":"济源"}]}]},{"p":"湖北","c":[{"n":"武汉","a":[{"s":"江岸区"},{"s":"江汉区"},{"s":"硚口区"},{"s":"汉阳区"},{"s":"武昌区"},{"s":"青山区"},{"s":"洪山区"},{"s":"东西湖区"},{"s":"汉南区"},{"s":"蔡甸区"},{"s":"江夏区"},{"s":"黄陂区"},{"s":"新洲区"}]},{"n":"黄石","a":[{"s":"黄石港区"},{"s":"西塞山区"},{"s":"下陆区"},{"s":"铁山区"},{"s":"阳新县"},{"s":"大冶市"}]},{"n":"十堰","a":[{"s":"茅箭区"},{"s":"张湾区"},{"s":"郧县"},{"s":"郧西县"},{"s":"竹山县"},{"s":"竹溪县"},{"s":"房县"},{"s":"丹江口市"}]},{"n":"宜昌","a":[{"s":"西陵区"},{"s":"伍家岗区"},{"s":"点军区"},{"s":"猇亭区"},{"s":"夷陵区"},{"s":"远安县"},{"s":"兴山县"},{"s":"秭归县"},{"s":"长阳土家族自治县"},{"s":"五峰土家族自治县"},{"s":"宜都市"},{"s":"当阳市"},{"s":"枝江市"}]},{"n":"襄樊","a":[{"s":"襄城区"},{"s":"樊城区"},{"s":"襄阳区"},{"s":"南漳县"},{"s":"谷城县"},{"s":"保康县"},{"s":"老河口市"},{"s":"枣阳市"},{"s":"宜城市"}]},{"n":"鄂州","a":[{"s":"梁子湖区"},{"s":"华容区"},{"s":"鄂城区"}]},{"n":"荆门","a":[{"s":"东宝区"},{"s":"掇刀区"},{"s":"京山县"},{"s":"沙洋县"},{"s":"钟祥市"}]},{"n":"孝感","a":[{"s":"孝南区"},{"s":"孝昌县"},{"s":"大悟县"},{"s":"云梦县"},{"s":"应城市"},{"s":"安陆市"},{"s":"汉川市"}]},{"n":"荆州","a":[{"s":"沙市区"},{"s":"荆州区"},{"s":"公安县"},{"s":"监利县"},{"s":"江陵县"},{"s":"石首市"},{"s":"洪湖市"},{"s":"松滋市"}]},{"n":"黄冈","a":[{"s":"黄州区"},{"s":"团风县"},{"s":"红安县"},{"s":"罗田县"},{"s":"英山县"},{"s":"浠水县"},{"s":"蕲春县"},{"s":"黄梅县"},{"s":"麻城市"},{"s":"武穴市"}]},{"n":"咸宁","a":[{"s":"咸安区"},{"s":"嘉鱼县"},{"s":"通城县"},{"s":"崇阳县"},{"s":"通山县"},{"s":"赤壁市"}]},{"n":"随州","a":[{"s":"曾都区"},{"s":"随县"},{"s":"广水市"}]},{"n":"恩施","a":[{"s":"恩施市"},{"s":"利川市"},{"s":"建始县"},{"s":"巴东县"},{"s":"宣恩县"},{"s":"咸丰县"},{"s":"来凤县"},{"s":"鹤峰县"}]},{"n":"仙桃","a":[{"s":"仙桃"}]},{"n":"潜江","a":[{"s":"潜江"}]},{"n":"天门","a":[{"s":"天门"}]},{"n":"神农架","a":[{"s":"神农架"}]}]},{"p":"湖南","c":[{"n":"长沙","a":[{"s":"芙蓉区"},{"s":"天心区"},{"s":"岳麓区"},{"s":"开福区"},{"s":"雨花区"},{"s":"长沙县"},{"s":"望城县"},{"s":"宁乡县"},{"s":"浏阳市"}]},{"n":"株洲","a":[{"s":"荷塘区"},{"s":"芦淞区"},{"s":"石峰区"},{"s":"天元区"},{"s":"株洲县"},{"s":"攸县"},{"s":"茶陵县"},{"s":"炎陵县"},{"s":"醴陵市"}]},{"n":"湘潭","a":[{"s":"雨湖区"},{"s":"岳塘区"},{"s":"湘潭县"},{"s":"湘乡市"},{"s":"韶山市"}]},{"n":"衡阳","a":[{"s":"珠晖区"},{"s":"雁峰区"},{"s":"石鼓区"},{"s":"蒸湘区"},{"s":"南岳区"},{"s":"衡阳县"},{"s":"衡南县"},{"s":"衡山县"},{"s":"衡东县"},{"s":"祁东县"},{"s":"耒阳市"},{"s":"常宁市"}]},{"n":"邵阳","a":[{"s":"双清区"},{"s":"大祥区"},{"s":"北塔区"},{"s":"邵东县"},{"s":"新邵县"},{"s":"邵阳县"},{"s":"隆回县"},{"s":"洞口县"},{"s":"绥宁县"},{"s":"新宁县"},{"s":"城步苗族自治县"},{"s":"武冈市"}]},{"n":"岳阳","a":[{"s":"岳阳楼区"},{"s":"云溪区"},{"s":"君山区"},{"s":"岳阳县"},{"s":"华容县"},{"s":"湘阴县"},{"s":"平江县"},{"s":"汨罗市"},{"s":"临湘市"}]},{"n":"常德","a":[{"s":"武陵区"},{"s":"鼎城区"},{"s":"安乡县"},{"s":"汉寿县"},{"s":"澧县"},{"s":"临澧县"},{"s":"桃源县"},{"s":"石门县"},{"s":"津市市"}]},{"n":"张家界","a":[{"s":"永定区"},{"s":"武陵源区"},{"s":"慈利县"},{"s":"桑植县"}]},{"n":"益阳","a":[{"s":"资阳区"},{"s":"赫山区"},{"s":"南县"},{"s":"桃江县"},{"s":"安化县"},{"s":"沅江市"}]},{"n":"郴州","a":[{"s":"北湖区"},{"s":"苏仙区"},{"s":"桂阳县"},{"s":"宜章县"},{"s":"永兴县"},{"s":"嘉禾县"},{"s":"临武县"},{"s":"汝城县"},{"s":"桂东县"},{"s":"安仁县"},{"s":"资兴市"}]},{"n":"永州","a":[{"s":"零陵区"},{"s":"冷水滩区"},{"s":"祁阳县"},{"s":"东安县"},{"s":"双牌县"},{"s":"道县"},{"s":"江永县"},{"s":"宁远县"},{"s":"蓝山县"},{"s":"新田县"},{"s":"江华瑶族自治县"}]},{"n":"怀化","a":[{"s":"鹤城区"},{"s":"中方县"},{"s":"沅陵县"},{"s":"辰溪县"},{"s":"溆浦县"},{"s":"会同县"},{"s":"麻阳苗族自治县"},{"s":"新晃侗族自治县"},{"s":"芷江侗族自治县"},{"s":"靖州苗族侗族自治县"},{"s":"通道侗族自治县"},{"s":"洪江市"}]},{"n":"娄底","a":[{"s":"娄星区"},{"s":"双峰县"},{"s":"新化县"},{"s":"冷水江市"},{"s":"涟源市"}]},{"n":"湘西","a":[{"s":"吉首市"},{"s":"泸溪县"},{"s":"凤凰县"},{"s":"花垣县"},{"s":"保靖县"},{"s":"古丈县"},{"s":"永顺县"},{"s":"龙山县"}]}]},{"p":"广东","c":[{"n":"广州","a":[{"s":"荔湾区"},{"s":"越秀区"},{"s":"海珠区"},{"s":"天河区"},{"s":"白云区"},{"s":"黄埔区"},{"s":"番禺区"},{"s":"花都区"},{"s":"南沙区"},{"s":"萝岗区"},{"s":"增城市"},{"s":"从化市"}]},{"n":"韶关","a":[{"s":"武江区"},{"s":"浈江区"},{"s":"曲江区"},{"s":"始兴县"},{"s":"仁化县"},{"s":"翁源县"},{"s":"乳源瑶族自治县"},{"s":"新丰县"},{"s":"乐昌市"},{"s":"南雄市"}]},{"n":"深圳","a":[{"s":"罗湖区"},{"s":"福田区"},{"s":"南山区"},{"s":"宝安区"},{"s":"龙岗区"},{"s":"盐田区"}]},{"n":"珠海","a":[{"s":"香洲区"},{"s":"斗门区"},{"s":"金湾区"}]},{"n":"汕头","a":[{"s":"龙湖区"},{"s":"金平区"},{"s":"濠江区"},{"s":"潮阳区"},{"s":"潮南区"},{"s":"澄海区"},{"s":"南澳县"}]},{"n":"佛山","a":[{"s":"禅城区"},{"s":"南海区"},{"s":"顺德区"},{"s":"三水区"},{"s":"高明区"}]},{"n":"江门","a":[{"s":"蓬江区"},{"s":"江海区"},{"s":"新会区"},{"s":"台山市"},{"s":"开平市"},{"s":"鹤山市"},{"s":"恩平市"}]},{"n":"湛江","a":[{"s":"赤坎区"},{"s":"霞山区"},{"s":"坡头区"},{"s":"麻章区"},{"s":"遂溪县"},{"s":"徐闻县"},{"s":"廉江市"},{"s":"雷州市"},{"s":"吴川市"}]},{"n":"茂名","a":[{"s":"茂南区"},{"s":"茂港区"},{"s":"电白县"},{"s":"高州市"},{"s":"化州市"},{"s":"信宜市"}]},{"n":"肇庆","a":[{"s":"端州区"},{"s":"鼎湖区"},{"s":"广宁县"},{"s":"怀集县"},{"s":"封开县"},{"s":"德庆县"},{"s":"高要市"},{"s":"四会市"}]},{"n":"惠州","a":[{"s":"惠城区"},{"s":"惠阳区"},{"s":"博罗县"},{"s":"惠东县"},{"s":"龙门县"}]},{"n":"梅州","a":[{"s":"梅江区"},{"s":"梅县"},{"s":"大埔县"},{"s":"丰顺县"},{"s":"五华县"},{"s":"平远县"},{"s":"蕉岭县"},{"s":"兴宁市"}]},{"n":"汕尾","a":[{"s":"城区"},{"s":"海丰县"},{"s":"陆河县"},{"s":"陆丰市"}]},{"n":"河源","a":[{"s":"源城区"},{"s":"紫金县"},{"s":"龙川县"},{"s":"连平县"},{"s":"和平县"},{"s":"东源县"}]},{"n":"阳江","a":[{"s":"江城区"},{"s":"阳西县"},{"s":"阳东县"},{"s":"阳春市"}]},{"n":"清远","a":[{"s":"清城区"},{"s":"佛冈县"},{"s":"阳山县"},{"s":"连山壮族瑶族自治县"},{"s":"连南瑶族自治县"},{"s":"清新县"},{"s":"英德市"},{"s":"连州市"}]},{"n":"东莞","a":[{"s":"东莞市"}]},{"n":"中山","a":[{"s":"中山市"}]},{"n":"潮州","a":[{"s":"湘桥区"},{"s":"潮安县"},{"s":"饶平县"}]},{"n":"揭阳","a":[{"s":"榕城区"},{"s":"揭东县"},{"s":"揭西县"},{"s":"惠来县"},{"s":"普宁市"}]},{"n":"云浮","a":[{"s":"云城区"},{"s":"新兴县"},{"s":"郁南县"},{"s":"云安县"},{"s":"罗定市"}]}]},{"p":"广西","c":[{"n":"南宁","a":[{"s":"兴宁区"},{"s":"青秀区"},{"s":"江南区"},{"s":"西乡塘区"},{"s":"良庆区"},{"s":"邕宁区"},{"s":"武鸣县"},{"s":"隆安县"},{"s":"马山县"},{"s":"上林县"},{"s":"宾阳县"},{"s":"横县"}]},{"n":"柳州","a":[{"s":"城中区"},{"s":"鱼峰区"},{"s":"柳南区"},{"s":"柳北区"},{"s":"柳江县"},{"s":"柳城县"},{"s":"鹿寨县"},{"s":"融安县"},{"s":"融水苗族自治县"},{"s":"三江侗族自治县"}]},{"n":"桂林","a":[{"s":"秀峰区"},{"s":"叠彩区"},{"s":"象山区"},{"s":"七星区"},{"s":"雁山区"},{"s":"阳朔县"},{"s":"临桂县"},{"s":"灵川县"},{"s":"全州县"},{"s":"兴安县"},{"s":"永福县"},{"s":"灌阳县"},{"s":"龙胜各族自治县"},{"s":"资源县"},{"s":"平乐县"},{"s":"荔蒲县"},{"s":"恭城瑶族自治县"}]},{"n":"梧州","a":[{"s":"万秀区"},{"s":"蝶山区"},{"s":"长洲区"},{"s":"苍梧县"},{"s":"藤县"},{"s":"蒙山县"},{"s":"岑溪市"}]},{"n":"北海","a":[{"s":"海城区"},{"s":"银海区"},{"s":"铁山港区"},{"s":"合浦县"}]},{"n":"防城港","a":[{"s":"港口区"},{"s":"防城区"},{"s":"上思县"},{"s":"东兴市"}]},{"n":"钦州","a":[{"s":"钦南区"},{"s":"钦北区"},{"s":"灵山县"},{"s":"浦北县"}]},{"n":"贵港","a":[{"s":"港北区"},{"s":"港南区"},{"s":"覃塘区"},{"s":"平南县"},{"s":"桂平市"}]},{"n":"玉林","a":[{"s":"玉州区"},{"s":"容县"},{"s":"陆川县"},{"s":"博白县"},{"s":"兴业县"},{"s":"北流市"}]},{"n":"百色","a":[{"s":"右江区"},{"s":"田阳县"},{"s":"田东县"},{"s":"平果县"},{"s":"德保县"},{"s":"靖西县"},{"s":"那坡县"},{"s":"凌云县"},{"s":"乐业县"},{"s":"田林县"},{"s":"西林县"},{"s":"隆林各族自治县"}]},{"n":"贺州","a":[{"s":"八步区"},{"s":"昭平县"},{"s":"钟山县"},{"s":"富川瑶族自治县"}]},{"n":"河池","a":[{"s":"金城江区"},{"s":"南丹县"},{"s":"天峨县"},{"s":"凤山县"},{"s":"东兰县"},{"s":"罗城仫佬族自治县"},{"s":"环江毛南族自治县"},{"s":"巴马瑶族自治县"},{"s":"都安瑶族自治县"},{"s":"大化瑶族自治县"},{"s":"宜州市"}]},{"n":"来宾","a":[{"s":"兴宾区"},{"s":"忻城县"},{"s":"象州县"},{"s":"武宣县"},{"s":"金秀瑶族自治县"},{"s":"合山市"}]},{"n":"崇左","a":[{"s":"江洲区"},{"s":"扶绥县"},{"s":"宁明县"},{"s":"龙州县"},{"s":"大新县"},{"s":"天等县"},{"s":"凭祥市"}]}]},{"p":"海南","c":[{"n":"海口","a":[{"s":"秀英区"},{"s":"龙华区"},{"s":"琼山区"},{"s":"美兰区"}]},{"n":"三亚","a":[{"s":"三亚市"}]},{"n":"五指山","a":[{"s":"五指山"}]},{"n":"琼海","a":[{"s":"琼海"}]},{"n":"儋州","a":[{"s":"儋州"}]},{"n":"文昌","a":[{"s":"文昌"}]},{"n":"万宁","a":[{"s":"万宁"}]},{"n":"东方","a":[{"s":"东方"}]}]},{"p":"重庆","c":[{"n":"万州区"},{"n":"涪陵区"},{"n":"渝中区"},{"n":"大渡口区"},{"n":"江北区"},{"n":"沙坪坝区"},{"n":"九龙坡区"},{"n":"南岸区"},{"n":"北碚区"},{"n":"万盛区"},{"n":"双挢区"},{"n":"渝北区"},{"n":"巴南区"},{"n":"长寿区"},{"n":"綦江县"},{"n":"潼南县"},{"n":"铜梁县"},{"n":"大足县"},{"n":"荣昌县"},{"n":"壁山县"},{"n":"梁平县"},{"n":"城口县"},{"n":"丰都县"},{"n":"垫江县"},{"n":"武隆县"},{"n":"忠县"},{"n":"开县"},{"n":"云阳县"},{"n":"奉节县"},{"n":"巫山县"},{"n":"巫溪县"},{"n":"黔江区"},{"n":"石柱土家族自治县"},{"n":"秀山土家族苗族自治县"},{"n":"酉阳土家族苗族自治县"},{"n":"彭水苗族土家族自治县"},{"n":"江津区"},{"n":"合川区"},{"n":"永川区"},{"n":"南川区"}]},{"p":"四川","c":[{"n":"成都","a":[{"s":"锦江区"},{"s":"青羊区"},{"s":"金牛区"},{"s":"武侯区"},{"s":"成华区"},{"s":"龙泉驿区"},{"s":"青白江区"},{"s":"新都区"},{"s":"温江区"},{"s":"金堂县"},{"s":"双流县"},{"s":"郫县"},{"s":"大邑县"},{"s":"蒲江县"},{"s":"新津县"},{"s":"都江堰市"},{"s":"彭州市"},{"s":"邛崃市"},{"s":"崇州市"}]},{"n":"自贡","a":[{"s":"自流井区"},{"s":"贡井区"},{"s":"大安区"},{"s":"沿滩区"},{"s":"荣县"},{"s":"富顺县"}]},{"n":"攀枝花","a":[{"s":"东区"},{"s":"西区"},{"s":"仁和区"},{"s":"米易县"},{"s":"盐边县"}]},{"n":"泸州","a":[{"s":"江阳区"},{"s":"纳溪区"},{"s":"龙马潭区"},{"s":"泸县"},{"s":"合江县"},{"s":"叙永县"},{"s":"古蔺县"}]},{"n":"德阳","a":[{"s":"旌阳区"},{"s":"中江县"},{"s":"罗江县"},{"s":"广汉市"},{"s":"什邡市"},{"s":"绵竹市"}]},{"n":"绵阳","a":[{"s":"涪城区"},{"s":"游仙区"},{"s":"三台县"},{"s":"盐亭县"},{"s":"安县"},{"s":"梓潼县"},{"s":"北川羌族自治县"},{"s":"平武县"},{"s":"江油市"}]},{"n":"广元","a":[{"s":"利州区"},{"s":"元坝区"},{"s":"朝天区"},{"s":"旺苍县"},{"s":"青川县"},{"s":"剑阁县"},{"s":"苍溪县"}]},{"n":"遂宁","a":[{"s":"船山区"},{"s":">安居区"},{"s":">蓬溪县"},{"s":">射洪县"},{"s":">大英县"}]},{"n":"内江","a":[{"s":"市中区"},{"s":"东兴区"},{"s":"威远县"},{"s":"资中县"},{"s":"隆昌县"}]},{"n":"乐山","a":[{"s":"市中区"},{"s":"沙湾区"},{"s":"五通桥区"},{"s":"金口河区"},{"s":"犍为县"},{"s":"井研县"},{"s":"夹江县"},{"s":"沐川县"},{"s":"峨边彝族自治县"},{"s":"马边彝族自治县"},{"s":"峨眉山市"}]},{"n":"南充","a":[{"s":"顺庆区"},{"s":"高坪区"},{"s":"嘉陵区"},{"s":"南部县"},{"s":"营山县"},{"s":"蓬安县"},{"s":"仪陇县"},{"s":"西充县"},{"s":"阆中市"}]},{"n":"眉山","a":[{"s":"东坡区"},{"s":"仁寿县"},{"s":"彭山县"},{"s":"洪雅县"},{"s":"丹棱县"},{"s":"青神县"}]},{"n":"宜宾","a":[{"s":"翠屏区"},{"s":"宜宾县"},{"s":"南溪县"},{"s":"江安县"},{"s":"长宁县"},{"s":"高县"},{"s":"珙县"},{"s":"筠连县"},{"s":"兴文县"},{"s":"屏山县"}]},{"n":"广安","a":[{"s":"广安区"},{"s":"岳池县"},{"s":"武胜县"},{"s":"邻水县"},{"s":"华蓥市"}]},{"n":"达川","a":[{"s":"通川区"},{"s":"达县"},{"s":"宣汉县"},{"s":"开江县"},{"s":"大竹县"},{"s":"渠县"},{"s":"万源市"}]},{"n":"雅安","a":[{"s":"雨城区"},{"s":"名山县"},{"s":"荥经县"},{"s":"汉源县"},{"s":"石棉县"},{"s":"天全县"},{"s":"芦山县"},{"s":"宝兴县"}]},{"n":"巴中","a":[{"s":"巴州区"},{"s":"通江县"},{"s":"南江县"},{"s":"平昌县"}]},{"n":"资阳","a":[{"s":"雁江区"},{"s":"安岳县"},{"s":"乐至县"},{"s":"简阳市"}]},{"n":"阿坝","a":[{"s":"汶川县"},{"s":"理县"},{"s":"茂县"},{"s":"松潘县"},{"s":"九寨沟县"},{"s":"金川县"},{"s":"小金县"},{"s":"黑水县"},{"s":"马尔康县"},{"s":"壤塘县"},{"s":"阿坝县"},{"s":"若尔盖县"},{"s":"红原县"}]},{"n":"甘孜","a":[{"s":"康定县"},{"s":"泸定县"},{"s":"丹巴县"},{"s":"九龙县"},{"s":"雅江县"},{"s":"道孚县"},{"s":"炉霍县"},{"s":"甘孜县"},{"s":"新龙县"},{"s":"德格县"},{"s":"白玉县"},{"s":"石渠县"},{"s":"色达县"},{"s":"理塘县"},{"s":"巴塘县"},{"s":"乡城县"},{"s":"稻城县"},{"s":"得荣县"}]},{"n":"凉山","a":[{"s":"西昌市"},{"s":"木里藏族自治县"},{"s":"盐源县"},{"s":"德昌县"},{"s":"会理县"},{"s":"会东县"},{"s":"宁南县"},{"s":"普格县"},{"s":"布拖县"},{"s":"金阳县"},{"s":"昭觉县"},{"s":"喜德县"},{"s":"冕宁县"},{"s":"越西县"},{"s":"甘洛县"},{"s":"美姑县"},{"s":"雷波县"}]}]},{"p":"贵州","c":[{"n":"贵阳","a":[{"s":"南明区"},{"s":"云岩区"},{"s":"花溪区"},{"s":"乌当区"},{"s":"白云区"},{"s":"小河区"},{"s":"开阳县"},{"s":"息烽县"},{"s":"修文县"},{"s":"清镇市"}]},{"n":"六盘水","a":[{"s":"钟山区"},{"s":"六枝特区"},{"s":"水城县"},{"s":"盘县"}]},{"n":"遵义","a":[{"s":"红花岗区"},{"s":"汇川区"},{"s":"遵义县"},{"s":"桐梓县"},{"s":"绥阳县"},{"s":"正安县"},{"s":"道真仡佬族苗族自治县"},{"s":"务川仡佬族苗族自治县"},{"s":"凤冈县"},{"s":"湄潭县"},{"s":"余庆县"},{"s":"习水县"},{"s":"赤水市"},{"s":"仁怀市"}]},{"n":"安顺","a":[{"s":"西秀区"},{"s":"平坝县"},{"s":"普定县"},{"s":"镇宁布依族苗族自治县"},{"s":"关岭布依族苗族自治县"},{"s":"紫云苗族布依族自治县"}]},{"n":"铜仁","a":[{"s":"铜仁市"},{"s":"江口县"},{"s":"玉屏侗族自治县"},{"s":"石阡县"},{"s":"思南县"},{"s":"印江土家族苗族自治县"},{"s":"德江县"},{"s":"沿河土家族自治县"},{"s":"松桃苗族自治县"},{"s":"万山特区"}]},{"n":"黔西南","a":[{"s":"兴义市"},{"s":"兴仁县"},{"s":"普安县"},{"s":"晴隆县"},{"s":"贞丰县"},{"s":"望谟县"},{"s":"册亨县"},{"s":"安龙县"}]},{"n":"毕节","a":[{"s":"毕节市"},{"s":"大方县"},{"s":"黔西县"},{"s":"金沙县"},{"s":"织金县"},{"s":"纳雍县"},{"s":"威宁彝族回族苗族自治县"},{"s":"赫章县"}]},{"n":"黔东南","a":[{"s":"凯里市"},{"s":"黄平县"},{"s":"施秉县"},{"s":"三穗县"},{"s":"镇远县"},{"s":"岑巩县"},{"s":"天柱县"},{"s":"锦屏县"},{"s":"剑河县"},{"s":"台江县"},{"s":"黎平县"},{"s":"榕江县"},{"s":"从江县"},{"s":"雷山县"},{"s":"麻江县"},{"s":"丹寨县"}]},{"n":"黔南","a":[{"s":"都匀市"},{"s":"福泉市"},{"s":"荔波县"},{"s":"贵定县"},{"s":"瓮安县"},{"s":"独山县"},{"s":"平塘县"},{"s":"罗甸县"},{"s":"长顺县"},{"s":"龙里县"},{"s":"惠水县"},{"s":"三都水族自治县"}]}]},{"p":"云南","c":[{"n":"昆明","a":[{"s":"五华区"},{"s":"盘龙区"},{"s":"官渡区"},{"s":"西山区"},{"s":"东川区"},{"s":"呈贡县"},{"s":"晋宁县"},{"s":"富民县"},{"s":"宜良县"},{"s":"石林彝族自治县"},{"s":"嵩明县"},{"s":"禄劝彝族苗族自治县"},{"s":"寻甸回族彝族自治县"},{"s":"安宁市"}]},{"n":"曲靖","a":[{"s":"麒麟区"},{"s":"马龙县"},{"s":"陆良县"},{"s":"师宗县"},{"s":"罗平县"},{"s":"富源县"},{"s":"会泽县"},{"s":"沾益县"},{"s":"宣威市"}]},{"n":"玉溪","a":[{"s":"红塔区"},{"s":"江川县"},{"s":"澄江县"},{"s":"通海县"},{"s":"华宁县"},{"s":"易门县"},{"s":"峨山彝族自治县"},{"s":"新平彝族傣族自治县"},{"s":"元江哈尼族彝族傣族自治县"}]},{"n":"保山","a":[{"s":"隆阳区"},{"s":"施甸县"},{"s":"腾冲县"},{"s":"龙陵县"},{"s":"昌宁县"}]},{"n":"昭通","a":[{"s":"昭阳区"},{"s":"鲁甸县"},{"s":"巧家县"},{"s":"盐津县"},{"s":"大关县"},{"s":"永善县"},{"s":"绥江县"},{"s":"镇雄县"},{"s":"彝良县"},{"s":"威信县"},{"s":"水富县"}]},{"n":"丽江","a":[{"s":"古城区"},{"s":"玉龙纳西族自治县"},{"s":"永胜县"},{"s":"华坪县"},{"s":"宁蒗彝族自治县"}]},{"n":"普洱","a":[{"s":"思茅区"},{"s":"宁洱镇"},{"s":"墨江哈尼族自治县"},{"s":"景东彝族自治县"},{"s":"景谷傣族彝族自治县"},{"s":"镇沅彝族哈尼族拉祜族自治县"},{"s":"江城哈尼族彝族自治县"},{"s":"孟连傣族拉祜族佤族自治县"},{"s":"澜沧拉祜族自治县"},{"s":"西盟佤族自治县"}]},{"n":"临沧","a":[{"s":"临翔区"},{"s":"凤庆县"},{"s":"云县"},{"s":"永德县"},{"s":"镇康县"},{"s":"双江拉祜族佤族布朗族傣族自治县"},{"s":"耿马傣族佤族自治县"},{"s":"沧源佤族自治县"}]},{"n":"楚雄","a":[{"s":"楚雄市"},{"s":"双柏县"},{"s":"牟定县"},{"s":"南华县"},{"s":"姚安县"},{"s":"大姚县"},{"s":"永仁县"},{"s":"元谋县"},{"s":"武定县"},{"s":"禄丰县"}]},{"n":"红河","a":[{"s":"个旧市"},{"s":"开远市"},{"s":"蒙自县"},{"s":"屏边苗族自治县"},{"s":"建水县"},{"s":"石屏县"},{"s":"弥勒县"},{"s":"泸西县"},{"s":"元阳县"},{"s":"红河县"},{"s":"金平苗族瑶族傣族自治县"},{"s":"绿春县"},{"s":"河口瑶族自治县"}]},{"n":"文山","a":[{"s":"文山县"},{"s":"砚山县"},{"s":"西畴县"},{"s":"麻栗坡县"},{"s":"马关县"},{"s":"丘北县"},{"s":"广南县"},{"s":"富宁县"}]},{"n":"西双版纳","a":[{"s":"景洪市"},{"s":"勐海县"},{"s":"勐腊县"}]},{"n":"大理","a":[{"s":"大理市"},{"s":"漾濞彝族自治县"},{"s":"祥云县"},{"s":"宾川县"},{"s":"弥渡县"},{"s":"南涧彝族自治县"},{"s":"巍山彝族回族自治县"},{"s":"永平县"},{"s":"云龙县"},{"s":"洱源县"},{"s":"剑川县"},{"s":"鹤庆县"}]},{"n":"德宏","a":[{"s":"瑞丽市"},{"s":"潞西市"},{"s":"梁河县"},{"s":"盈江县"},{"s":"陇川县"}]},{"n":"怒江傈","a":[{"s":"泸水县"},{"s":"福贡县"},{"s":"贡山独龙族怒族自治县"},{"s":"兰坪白族普米族自治县"}]},{"n":"迪庆","a":[{"s":"香格里拉县"},{"s":"德钦县"},{"s":"维西傈僳族自治县"}]}]},{"p":"西藏","c":[{"n":"拉萨","a":[{"s":"城关区"},{"s":"林周县"},{"s":"当雄县"},{"s":"尼木县"},{"s":"曲水县"},{"s":"堆龙德庆县"},{"s":"达孜县"},{"s":"墨竹工卡县"}]},{"n":"昌都","a":[{"s":"昌都县"},{"s":"江达县"},{"s":"贡觉县"},{"s":"类乌齐县"},{"s":"丁青县"},{"s":"察雅县"},{"s":"八宿县"},{"s":"左贡县"},{"s":"芒康县"},{"s":"洛隆县"},{"s":"边坝县"}]},{"n":"山南","a":[{"s":"乃东县"},{"s":"扎囊县"},{"s":"贡嘎县"},{"s":"桑日县"},{"s":"琼结县"},{"s":"曲松县"},{"s":"措美县"},{"s":"洛扎县"},{"s":"加查县"},{"s":"隆子县"},{"s":"错那县"},{"s":"浪卡子县"}]},{"n":"日喀则","a":[{"s":"日喀则市"},{"s":"南木林县"},{"s":"江孜县"},{"s":"定日县"},{"s":"萨迦县"},{"s":"拉孜县"},{"s":"昂仁县"},{"s":"谢通门县"},{"s":"白朗县"},{"s":"仁布县"},{"s":"康马县"},{"s":"定结县"},{"s":"仲巴县"},{"s":"亚东县"},{"s":"吉隆县"},{"s":"聂拉木县"},{"s":"萨嘎县"},{"s":"岗巴县"}]},{"n":"那曲","a":[{"s":"那曲县"},{"s":"嘉黎县"},{"s":"比如县"},{"s":"聂荣县"},{"s":"安多县"},{"s":"申扎县"},{"s":"索县"},{"s":"班戈县"},{"s":"巴青县"},{"s":"尼玛县"}]},{"n":"阿里","a":[{"s":"普兰县"},{"s":"札达县"},{"s":"噶尔县"},{"s":"日土县"},{"s":"革吉县"},{"s":"改则县"},{"s":"措勤县"}]},{"n":"林芝","a":[{"s":"林芝县"},{"s":"工布江达县"},{"s":"米林县"},{"s":"墨脱县"},{"s":"波密县"},{"s":"察隅县"},{"s":"朗县"}]}]},{"p":"陕西","c":[{"n":"西安","a":[{"s":"新城区"},{"s":"碑林区"},{"s":"莲湖区"},{"s":"灞桥区"},{"s":"未央区"},{"s":"雁塔区"},{"s":"阎良区"},{"s":"临潼区"},{"s":"长安区"},{"s":"蓝田县"},{"s":"周至县"},{"s":"户县"},{"s":"高陵县"}]},{"n":"铜川","a":[{"s":"王益区"},{"s":"印台区"},{"s":"耀州区"},{"s":"宜君县"}]},{"n":"宝鸡","a":[{"s":"渭滨区"},{"s":"金台区"},{"s":"陈仓区"},{"s":"凤翔县"},{"s":"岐山县"},{"s":"扶风县"},{"s":"眉县"},{"s":"陇县"},{"s":"千阳县"},{"s":"麟游县"},{"s":"凤县"},{"s":"太白县"}]},{"n":"咸阳","a":[{"s":"秦都区"},{"s":"杨凌区"},{"s":"渭城区"},{"s":"三原县"},{"s":"泾阳县"},{"s":"乾县"},{"s":"礼泉县"},{"s":"永寿县"},{"s":"彬县"},{"s":"长武县"},{"s":"旬邑县"},{"s":"淳化县"},{"s":"武功县"},{"s":"兴平市"}]},{"n":"渭南","a":[{"s":"临渭区"},{"s":"华县"},{"s":"潼关县"},{"s":"大荔县"},{"s":"合阳县"},{"s":"澄城县"},{"s":"蒲城县"},{"s":"白水县"},{"s":"富平县"},{"s":"韩城市"},{"s":"华阴市"}]},{"n":"延安","a":[{"s":"宝塔区"},{"s":"延长县"},{"s":"延川县"},{"s":"子长县"},{"s":"安塞县"},{"s":"志丹县"},{"s":"吴起县"},{"s":"甘泉县"},{"s":"富县"},{"s":"洛川县"},{"s":"宜川县"},{"s":"黄龙县"},{"s":"黄陵县"}]},{"n":"汉中","a":[{"s":"汉台区"},{"s":"南郑县"},{"s":"城固县"},{"s":"洋县"},{"s":"西乡县"},{"s":"勉县"},{"s":"宁强县"},{"s":"略阳县"},{"s":"镇巴县"},{"s":"留坝县"},{"s":"佛坪县"}]},{"n":"榆林","a":[{"s":"榆阳区"},{"s":"神木县"},{"s":"府谷县"},{"s":"横山县"},{"s":"靖边县"},{"s":"定边县"},{"s":"绥德县"},{"s":"米脂县"},{"s":"佳县"},{"s":"吴堡县"},{"s":"清涧县"},{"s":"子洲县"}]},{"n":"安康","a":[{"s":"汉滨区"},{"s":"汉阴县"},{"s":"石泉县"},{"s":"宁陕县"},{"s":"紫阳县"},{"s":"岚皋县"},{"s":"平利县"},{"s":"镇坪县"},{"s":"旬阳县"},{"s":"白河县"}]},{"n":"商洛","a":[{"s":"商州区"},{"s":"洛南县"},{"s":"丹凤县"},{"s":"商南县"},{"s":"山阳县"},{"s":"镇安县"},{"s":"柞水县"}]}]},{"p":"甘肃","c":[{"n":"兰州","a":[{"s":"区(县)"},{"s":"城关区"},{"s":"七里河区"},{"s":"西固区"},{"s":"安宁区"},{"s":"红古区"},{"s":"永登县"},{"s":"皋兰县"},{"s":"榆中县"}]},{"n":"嘉峪关","a":[{"s":"嘉峪关市"}]},{"n":"金昌","a":[{"s":"金川区"},{"s":"永昌县"}]},{"n":"白银","a":[{"s":"白银区"},{"s":"平川区"},{"s":"靖远县"},{"s":"会宁县"},{"s":"景泰县"}]},{"n":"天水","a":[{"s":"秦城区"},{"s":"麦积区"},{"s":"清水县"},{"s":"秦安县"},{"s":"甘谷县"},{"s":"武山县"},{"s":"张家川回族自治县"}]},{"n":"武威","a":[{"s":"凉州区"},{"s":"民勤县"},{"s":"古浪县"},{"s":"天祝藏族自治县"}]},{"n":"张掖","a":[{"s":"甘州区"},{"s":"肃南裕固族自治县"},{"s":"民乐县"},{"s":"临泽县"},{"s":"高台县"},{"s":"山丹县"}]},{"n":"平凉","a":[{"s":"崆峒区"},{"s":"泾川县"},{"s":"灵台县"},{"s":"崇信县"},{"s":"华亭县"},{"s":"庄浪县"},{"s":"静宁县"}]},{"n":"酒泉","a":[{"s":"肃州区"},{"s":"金塔县"},{"s":"瓜州县"},{"s":"肃北蒙古族自治县"},{"s":"阿克塞哈萨克族自治县"},{"s":"玉门市"},{"s":"敦煌市"}]},{"n":"庆阳","a":[{"s":"西峰区"},{"s":"庆城县"},{"s":"环县"},{"s":"华池县"},{"s":"合水县"},{"s":"正宁县"},{"s":"宁县"},{"s":"镇原县"}]},{"n":"定西","a":[{"s":"安定区"},{"s":"通渭县"},{"s":"陇西县"},{"s":"渭源县"},{"s":"临洮县"},{"s":"漳县"},{"s":"岷县"}]},{"n":"陇南","a":[{"s":"武都区"},{"s":"成县"},{"s":"文县"},{"s":"宕昌县"},{"s":"康县"},{"s":"西和县"},{"s":"礼县"},{"s":"徽县"},{"s":"两当县"}]},{"n":"临夏","a":[{"s":"临夏市"},{"s":"临夏县"},{"s":"康乐县"},{"s":"永靖县"},{"s":"广河县"},{"s":"和政县"},{"s":"东乡族自治县"},{"s":"积石山保安族东乡族撒拉族自治县"}]},{"n":"甘南","a":[{"s":"合作市"},{"s":"临潭县"},{"s":"卓尼县"},{"s":"舟曲县"},{"s":"迭部县"},{"s":"玛曲县"},{"s":"碌曲县"},{"s":"夏河县"}]}]},{"p":"青海","c":[{"n":"西宁","a":[{"s":"城东区"},{"s":"城中区"},{"s":"城西区"},{"s":"城北区"},{"s":"大通回族土族自治县"},{"s":"湟中县"},{"s":"湟源县"}]},{"n":"海东","a":[{"s":"平安县"},{"s":"民和回族土族自治县"},{"s":"乐都县"},{"s":"互助土族自治县"},{"s":"化隆回族自治县"},{"s":"循化撒拉族自治县"}]},{"n":"海北","a":[{"s":"门源回族自治县"},{"s":"祁连县"},{"s":"海晏县"},{"s":"刚察县"}]},{"n":"黄南","a":[{"s":"同仁县"},{"s":"尖扎县"},{"s":"泽库县"},{"s":"河南蒙古族自治县"}]},{"n":"海南","a":[{"s":"共和县"},{"s":"同德县"},{"s":"贵德县"},{"s":"兴海县"},{"s":"贵南县"}]},{"n":"果洛","a":[{"s":"玛沁县"},{"s":"班玛县"},{"s":"甘德县"},{"s":"达日县"},{"s":"久治县"},{"s":"玛多县"}]},{"n":"玉树","a":[{"s":"玉树县"},{"s":"杂多县"},{"s":"称多县"},{"s":"治多县"},{"s":"囊谦县"},{"s":"曲麻莱县"}]},{"n":"梅西","a":[{"s":"格尔木市"},{"s":"德令哈市"},{"s":"乌兰县"},{"s":"都兰县"},{"s":"天峻县"}]}]},{"p":"宁夏","c":[{"n":"银川","a":[{"s":"兴庆区"},{"s":"西夏区"},{"s":"金凤区"},{"s":"永宁县"},{"s":"贺兰县"},{"s":"灵武市"}]},{"n":"石嘴山","a":[{"s":"大武口区"},{"s":"惠农区"},{"s":"平罗县"}]},{"n":"吴忠","a":[{"s":"利通区"},{"s":"红寺堡区"},{"s":"盐池县"},{"s":"同心县"},{"s":"青铜峡市"}]},{"n":"固原","a":[{"s":"原州区"},{"s":"西吉县"},{"s":"隆德县"},{"s":"泾源县"},{"s":"彭阳县"}]},{"n":"中卫","a":[{"s":"沙坡头区"},{"s":"中宁县"},{"s":"海原县"}]}]},{"p":"新疆","c":[{"n":"乌鲁木齐","a":[{"s":"天山区"},{"s":"沙依巴克区"},{"s":"新市区"},{"s":"水磨沟区"},{"s":"头屯河区"},{"s":"达坂城区"},{"s":"米东区"},{"s":"乌鲁木齐县"}]},{"n":"克拉玛依","a":[{"s":"独山子区"},{"s":"克拉玛依区"},{"s":"白碱滩区"},{"s":"乌尔禾区"}]},{"n":"吐鲁番","a":[{"s":"吐鲁番市"},{"s":"鄯善县"},{"s":"托克逊县"}]},{"n":"哈密","a":[{"s":"哈密市"},{"s":"巴里坤哈萨克自治县"},{"s":"伊吾县"}]},{"n":"昌吉","a":[{"s":"昌吉市"},{"s":"阜康市"},{"s":"呼图壁县"},{"s":"玛纳斯县"},{"s":"奇台县"},{"s":"吉木萨尔县"},{"s":"木垒哈萨克自治县"}]},{"n":"博尔塔拉","a":[{"s":"博乐市"},{"s":"精河县"},{"s":"温泉县"}]},{"n":"巴音郭楞","a":[{"s":"库尔勒市"},{"s":"轮台县"},{"s":"尉犁县"},{"s":"若羌县"},{"s":"且末县"},{"s":"焉耆回族自治县"},{"s":"和静县"},{"s":"和硕县"},{"s":"博湖县"}]},{"n":"阿克苏","a":[{"s":"阿克苏市"},{"s":"温宿县"},{"s":"库车县"},{"s":"沙雅县"},{"s":"新和县"},{"s":"拜城县"},{"s":"乌什县"},{"s":"阿瓦提县"},{"s":"柯坪县"}]},{"n":"克孜勒苏","a":[{"s":"阿图什市"},{"s":"阿克陶县"},{"s":"阿合奇县"},{"s":"乌恰县"}]},{"n":"喀什","a":[{"s":"喀什市"},{"s":"疏附县"},{"s":"疏勒县"},{"s":"英吉沙县"},{"s":"泽普县"},{"s":"莎车县"},{"s":"叶城县"},{"s":"麦盖提县"},{"s":"岳普湖县"},{"s":"伽师县"},{"s":"巴楚县"},{"s":"塔什库尔干县塔吉克自治"}]},{"n":"和田","a":[{"s":"和田市"},{"s":"和田县"},{"s":"墨玉县"},{"s":"皮山县"},{"s":"洛浦县"},{"s":"策勒县"},{"s":"于田县"},{"s":"民丰县"}]},{"n":"伊犁","a":[{"s":"伊宁市"},{"s":"奎屯市"},{"s":"伊宁县"},{"s":"察布查尔锡伯自治县"},{"s":"霍城县"},{"s":"巩留县"},{"s":"新源县"},{"s":"昭苏县"},{"s":"特克斯县"},{"s":"尼勒克县"}]},{"n":"塔城","a":[{"s":"塔城市"},{"s":"乌苏市"},{"s":"额敏县"},{"s":"沙湾县"},{"s":"托里县"},{"s":"裕民县"},{"s":"和布克赛尔蒙古自治县"}]},{"n":"阿勒泰","a":[{"s":"阿勒泰市"},{"s":"布尔津县"},{"s":"富蕴县"},{"s":"福海县"},{"s":"哈巴河县"},{"s":"青河县"},{"s":"吉木乃县"}]},{"n":"石河子","a":[{"s":"石河子"}]},{"n":"阿拉尔","a":[{"s":"阿拉尔"}]},{"n":"图木舒克","a":[{"s":"图木舒克"}]},{"n":"五家渠","a":[{"s":"五家渠"}]}]},{"p":"香港","c":[{"n":"中西区"},{"n":"东区"},{"n":"九龙城区"},{"n":"观塘区"},{"n":"南区"},{"n":"深水区"},{"n":"湾仔区"},{"n":"黄大仙区"},{"n":"油尖旺区"},{"n":"离岛区"},{"n":"葵青区"},{"n":"北区"},{"n":"西贡区"},{"n":"沙田区"},{"n":"屯门区"},{"n":"大埔区"},{"n":"荃湾区"},{"n":"元朗区"}]},{"p":"澳门","c":[{"n":"花地玛堂区"},{"n":"圣安多尼堂区"},{"n":"大堂区"},{"n":"望德堂区"},{"n":"风顺堂区"},{"n":"嘉模堂区"},{"n":"圣方济各堂区"}]},{"p":"台湾","c":[{"n":"台北市"},{"n":"高雄市"},{"n":"基隆市"},{"n":"台中市"},{"n":"台南市"},{"n":"新竹市"},{"n":"嘉义市"},{"n":"台北县"},{"n":"宜兰县"},{"n":"新竹县"},{"n":"桃园县"},{"n":"苗栗县"},{"n":"台中县"},{"n":"彰化县"},{"n":"南投县"},{"n":"嘉义县"},{"n":"云林县"},{"n":"台南县"},{"n":"高雄县"},{"n":"屏东县"},{"n":"台东县"},{"n":"花莲县"},{"n":"澎湖县"}]},{"p":"国外"}];
impex.component('impex-area', {
	ps: [],
	cs: [],
	as: [],
	class: "",
	scss: "",
	value: "",
	id: "",
	$template: '<div class="impex-area {{=class}}" id="{{=id}}">\
				<select class="{{scss}}" name="{{=pname}}" :change="pchange(this)">\
					<option x-each="ps as p" value="{{p.p}}">{{p.p}}</option>\
				</select>\
				<select class="{{scss}}" name="{{=cname}}" :change="cchange(this)">\
					<option x-each="cs as c" value="{{c.n}}">{{c.n}}</option>\
				</select>\
				<select class="{{scss}}" name="{{=aname}}" :change="achange(this)" x-show="as.length > 0">\
					<option x-each="as as a" value="{{a.s}}">{{a.s}}</option>\
				</select>\
				<input x-if="name" type="hidden" name="{{=name}}" value="{{value}}">\
				</div>', 
	onInit: function() {
		this.ps = _impex_areaList;
		this.cs = this.ps[0].c;
		as = this.cs[0].a || [];
		this.setHiddenValue(0 , 0, 0);
	},
	// 设置隐藏域值
	setHiddenValue: function(a, b, c) {
		if (this.name) {
			var v = "";
			v += this.ps[a].p;
			if (this.cs.length > 0) {
				v += "," + this.cs[b].n;
			}
			if (this.as.length > 0) {
				v += "," + this.as[c].s;
			}
		}
		this.value = v;
	},
	pchange: function(com) {
		var v = "";
		if (com.$view) {
			v = com.$view.el.selectedIndex;
		}else{
			v = com;
		}
		this.cs = this.ps[v].c || [];
		this.as = this.cs[0].a || [];
		var el = this.$view.el;
		setTimeout(function() {
			var ss = el.querySelectorAll("select");
			var pselect = ss[0];
			var cselect = ss[1];
			var aselect = ss[2];
			if (cselect.options.length != 0) cselect.options[0].selected = true;
			if (aselect.options.length != 0) aselect.options[0].selected = true;
		}, 10);
		this.setHiddenValue(v, 0, 0);
	},
	cchange: function(com) {
		var v = com.$view.el.selectedIndex;
		this.as = this.cs[v].a || [];
		var el = this.$view.el;
		var ss = el.querySelectorAll("select");
		setTimeout(function() {
			var aselect = ss[2];
			aselect.options[0].selected = true;
		}, 10);
		this.setHiddenValue(ss[0].selectedIndex, v, 0);
	},
	achange: function(com) {
		var el = this.$view.el;
		var ss = el.querySelectorAll("select");
		var v = com.$view.el.selectedIndex;
		this.setHiddenValue(ss[0].selectedIndex, ss[1].selectedIndex, v);
	},
	setValue: function(p, c, a) {
		var ss = this.$view.el.querySelectorAll("select");
		var pselect = ss[0];
		
		var pv, po;
		for (var i = this.ps.length; i--;) {
			if (this.ps[i].p == p) {
				pv = i;
				po = this.ps[i];
			}
		}
		if (!pv) {
			pselect.options[0].selected = true;
			po = this.ps[0];
		}else{
			pselect.options[pv].selected = true;
		}
		
		
		if (!po) {
			this.cs = [];
		}else{
			this.cs = po.c || [];
		}
		var cv, co;
		for (var i = this.cs.length; i--;) {
			if (this.cs[i].n == c) {
				cv = i;
				co = this.cs[i];
			}
		}

		if (!co) {
			this.as = [];
		}else{
			this.as = co.a || [];
		}
		var av;
		for (var i = this.as.length; i--;) {
			if (this.as[i].s == a) {
				av = i;
			}
		}
		
		var el = this.$view.el;
		setTimeout(function() {
			var ss = el.querySelectorAll("select");
			var cselect = ss[1];
			var aselect = ss[2];
			if (cselect.options.length != 0) cselect.options[cv].selected = true;
			if (aselect.options.length != 0) aselect.options[av].selected = true;
		}, 10);
		this.setHiddenValue(pv, cv, av);
	}
});
!function(a,b){"function"==typeof define&&define.amd?define(["is"],function(c){return a.is=b(c)}):"object"==typeof exports?module.exports=b(require("is_js")):a.is=b(a.is)}(this,function(a){function b(a){return function(){return!a.apply(null,j.call(arguments))}}function c(b){return function(){var c=j.call(arguments),d=c.length;1===d&&a.array(c[0])&&(c=c[0],d=c.length);for(var e=[],f=0;d>f;f++)e.push(b.call(null,c[f]));for(f=0;f<e.length;f++)if(!e[f])return!1;return!0}}function d(b){return function(){var c=j.call(arguments),d=c.length;1===d&&a.array(c[0])&&(c=c[0],d=c.length);for(var e=[],f=0;d>f;f++)e.push(b.call(null,c[f]));for(f=0;f<e.length;f++)if(e[f])return!0;return!1}}function e(b,c){a[b]=function(a){return c[b].test(a)}}function f(){var e=a;for(var f in e)if(k.call(e,f)&&a["function"](e[f]))for(var g=e[f].api||["not","all","any"],h=0;h<g.length;h++)"not"===g[h]&&(a.not[f]=b(a[f])),"all"===g[h]&&(a.all[f]=c(a[f])),"any"===g[h]&&(a.any[f]=d(a[f]))}var g=this,h=g.is;a={},a.VERSION="0.2.3",a.not={},a.all={},a.any={};var i=Object.prototype.toString,j=Array.prototype.slice,k=Object.prototype.hasOwnProperty;a.arguments=function(b){return a.not["null"](b)&&("[object Arguments]"===i.call(b)||"object"==typeof b&&"callee"in b)},a.array=Array.isArray||function(a){return"[object Array]"===i.call(a)},a["boolean"]=function(a){return a===!0||a===!1||"[object Boolean]"===i.call(a)},a.date=function(a){return"[object Date]"===i.call(a)},a.error=function(a){return"[object Error]"===i.call(a)},a["function"]=function(a){return"[object Function]"===i.call(a)||"function"==typeof a},a.nan=function(b){return a.number(b)&&b!==b},a["null"]=function(a){return null===a||"[object Null]"===i.call(a)},a.number=function(a){return"[object Number]"===i.call(a)},a.object=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a},a.regexp=function(a){return"[object RegExp]"===i.call(a)},a.sameType=function(b,c){return a.nan(b)||a.nan(c)?a.nan(b)===a.nan(c):i.call(b)===i.call(c)},a.sameType.api=["not"],a.string=function(a){return"[object String]"===i.call(a)},a["char"]=function(b){return a.string(b)&&1===b.length},a.undefined=function(a){return void 0===a},a.empty=function(b){if(a.object(b)){var c=Object.getOwnPropertyNames(b).length;return 0===c||1===c&&a.array(b)||2===c&&a.arguments(b)?!0:!1}return""===b},a.existy=function(a){return null!==a&&void 0!==a},a.truthy=function(b){return a.existy(b)&&b!==!1&&a.not.nan(b)&&""!==b&&0!==b},a.falsy=b(a.truthy),a.space=function(b){if(a.string(b)){var c=b.charCodeAt(0);return c>8&&14>c||32===c}return!1},a.equal=function(b,c){return a.all.number(b,c)?b===c&&1/b===1/c:a.all.string(b,c)||a.all.regexp(b,c)?""+b==""+c:a.all["boolean"](b,c)?b===c:!1},a.equal.api=["not"],a.even=function(b){return a.number(b)&&b%2===0},a.odd=function(b){return a.number(b)&&b%2!==0},a.positive=function(b){return a.number(b)&&b>0},a.negative=function(b){return a.number(b)&&0>b},a.above=function(b,c){return a.all.number(b,c)&&b>c},a.above.api=["not"],a.under=function(b,c){return a.all.number(b,c)&&c>b},a.under.api=["not"],a.within=function(b,c,d){return a.all.number(b,c,d)&&b>c&&d>b},a.within.api=["not"],a.decimal=function(b){return a.number(b)&&b%1!==0},a.integer=function(b){return a.number(b)&&b%1===0},a.finite=isFinite||function(b){return 1/0!==b&&b!==-1/0&&a.not.nan(b)},a.infinite=b(a.finite);var l={url:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,creditCard:/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,alphaNumeric:/^[A-Za-z0-9]+$/,timeString:/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,dateString:/^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,usZipCode:/^[0-9]{5}(?:-[0-9]{4})?$/,caPostalCode:/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]?[0-9][A-Z][0-9]$/,ukPostCode:/^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,nanpPhone:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,eppPhone:/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,socialSecurityNumber:/^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,affirmative:/^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/};for(var m in l)l.hasOwnProperty(m)&&e(m,l);a.include=String.prototype.includes||function(a,b){return a.indexOf(b)>-1},a.include.api=["not"],a.upperCase=function(b){return a.string(b)&&b===b.toUpperCase()},a.lowerCase=function(b){return a.string(b)&&b===b.toLowerCase()},a.startWith=function(b,c){return a.string(b)&&0===b.indexOf(c)},a.startWith.api=["not"],a.endWith=function(b,c){return a.string(b)&&b.indexOf(c)===b.length-c.length},a.endWith.api=["not"],a.capitalized=function(b){if(a.not.string(b))return!1;for(var c=b.split(" "),d=[],e=0;e<c.length;e++)d.push(c[e][0]===c[e][0].toUpperCase());return a.all.truthy.apply(null,d)};var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=["january","february","march","april","may","june","july","august","september","october","november","december"];if(a.today=function(b){var c=new Date,d=c.toDateString();return a.date(b)&&b.toDateString()===d},a.yesterday=function(b){var c=new Date,d=new Date(c.setDate(c.getDate()-1)).toDateString();return a.date(b)&&b.toDateString()===d},a.tomorrow=function(b){var c=new Date,d=new Date(c.setDate(c.getDate()+1)).toDateString();return a.date(b)&&b.toDateString()===d},a.past=function(b){var c=new Date;return a.date(b)&&b.getTime()<c.getTime()},a.future=b(a.past),a.day=function(b,c){return a.date(b)&&c.toLowerCase()===n[b.getDay()]},a.day.api=["not"],a.month=function(b,c){return a.date(b)&&c.toLowerCase()===o[b.getMonth()]},a.month.api=["not"],a.year=function(b,c){return a.date(b)&&a.number(c)&&c===b.getFullYear()},a.year.api=["not"],a.weekend=function(b){return a.date(b)&&(6===b.getDay()||0===b.getDay())},a.weekday=b(a.weekend),a.inDateRange=function(b,c,d){if(a.not.date(b)||a.not.date(c)||a.not.date(d))return!1;var e=b.getTime(),f=c.getTime(),g=d.getTime();return e>f&&g>e},a.inDateRange.api=["not"],a.inLastWeek=function(b){return a.inDateRange(b,new Date((new Date).setDate((new Date).getDate()-7)),new Date)},a.inLastMonth=function(b){return a.inDateRange(b,new Date((new Date).setMonth((new Date).getMonth()-1)),new Date)},a.inLastYear=function(b){return a.inDateRange(b,new Date((new Date).setFullYear((new Date).getFullYear()-1)),new Date)},a.inNextWeek=function(b){return a.inDateRange(b,new Date,new Date((new Date).setDate((new Date).getDate()+7)))},a.inNextMonth=function(b){return a.inDateRange(b,new Date,new Date((new Date).setMonth((new Date).getMonth()+1)))},a.inNextYear=function(b){return a.inDateRange(b,new Date,new Date((new Date).setFullYear((new Date).getFullYear()+1)))},a.quarterOfYear=function(b,c){return a.date(b)&&a.number(c)&&c===Math.floor((b.getMonth()+3)/3)},a.quarterOfYear.api=["not"],a.dayLightSavingTime=function(a){var b=new Date(a.getFullYear(),0,1),c=new Date(a.getFullYear(),6,1),d=Math.max(b.getTimezoneOffset(),c.getTimezoneOffset());return a.getTimezoneOffset()<d},"undefined"!=typeof window){var p="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",q="navigator"in window&&"vendor"in navigator&&navigator.vendor.toLowerCase()||"",r="navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"";a.chrome=function(){return/chrome|chromium/i.test(p)&&/google inc/.test(q)},a.chrome.api=["not"],a.firefox=function(){return/firefox/i.test(p)},a.firefox.api=["not"],a.ie=function(a){return a?new RegExp("msie "+a).test(p):/msie/i.test(p)},a.ie.api=["not"],a.opera=function(){return/opr/i.test(p)},a.opera.api=["not"],a.safari=function(){return/safari/i.test(p)&&/apple computer/i.test(q)},a.safari.api=["not"],a.ios=function(){return a.iphone()||a.ipad()||a.ipod()},a.ios.api=["not"],a.iphone=function(){return/iphone/i.test(p)},a.iphone.api=["not"],a.ipad=function(){return/ipad/i.test(p)},a.ipad.api=["not"],a.ipod=function(){return/ipod/i.test(p)},a.ipod.api=["not"],a.android=function(){return/android/i.test(p)},a.android.api=["not"],a.androidPhone=function(){return/android/i.test(p)&&/mobile/i.test(p)},a.androidPhone.api=["not"],a.androidTablet=function(){return/android/i.test(p)&&!/mobile/i.test(p)},a.androidTablet.api=["not"],a.blackberry=function(){return/blackberry/i.test(p)},a.blackberry.api=["not"],a.desktop=function(){return a.not.mobile()&&a.not.tablet()},a.desktop.api=["not"],a.linux=function(){return/linux/i.test(r)},a.linux.api=["not"],a.mac=function(){return/mac/i.test(r)},a.mac.api=["not"],a.windows=function(){return/win/i.test(r)},a.windows.api=["not"],a.windowsPhone=function(){return a.windows()&&/phone/i.test(p)},a.windowsPhone.api=["not"],a.windowsTablet=function(){return a.windows()&&a.not.windowsPhone()&&/touch/i.test(p)},a.windowsTablet.api=["not"],a.mobile=function(){return a.iphone()||a.ipod()||a.androidPhone()||a.blackberry()||a.windowsPhone()},a.mobile.api=["not"],a.tablet=function(){return a.ipad()||a.androidTablet()||a.windowsTablet()},a.tablet.api=["not"],a.online=function(){return navigator.onLine},a.online.api=["not"],a.offline=b(a.online),a.offline.api=["not"]}return a.propertyCount=function(b,c){if(!a.object(b)||!a.number(c))return!1;if(Object.keys)return Object.keys(b).length===c;var d,e=[];for(d in b)k.call(b,d)&&e.push(d);return e.length===c},a.propertyCount.api=["not"],a.propertyDefined=function(b,c){return a.object(b)&&a.string(c)&&c in b},a.propertyDefined.api=["not"],a.windowObject=function(a){return"object"==typeof a&&"setInterval"in a},a.inArray=function(b,c){if(a.not.array(c))return!1;for(var d=0;d<c.length;d++)if(c[d]===b)return!0;return!1},a.inArray.api=["not"],a.sorted=function(b){if(a.not.array(b))return!1;for(var c=0;c<b.length;c++)if(b[c]>b[c+1])return!1;return!0},f(),a.setRegexp=function(a,b){for(var c in l)k.call(l,c)&&b===c&&(l[c]=a)},a.setNamespace=function(){return g.is=h,this},a});
//     Underscore.js 1.8.2
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=d(e,i,4);var o=!w(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=b(r,e);for(var u=null!=t&&t.length,i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t){var r=S.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||o,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=S[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var e=this,u=e._,i=Array.prototype,o=Object.prototype,a=Function.prototype,c=i.push,l=i.slice,f=o.toString,s=o.hasOwnProperty,p=Array.isArray,h=Object.keys,v=a.bind,g=Object.create,y=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):e._=m,m.VERSION="1.8.2";var d=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},b=function(n,t,r){return null==n?m.identity:m.isFunction(n)?d(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return b(n,t,1/0)};var x=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var l=o[c];t&&r[l]!==void 0||(r[l]=i[l])}return r}},_=function(n){if(!m.isObject(n))return{};if(g)return g(n);y.prototype=n;var t=new y;return y.prototype=null,t},j=Math.pow(2,53)-1,w=function(n){var t=n&&n.length;return"number"==typeof t&&t>=0&&j>=t};m.each=m.forEach=function(n,t,r){t=d(t,r);var e,u;if(w(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=b(t,r);for(var e=!w(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=w(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=b(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(b(t)),r)},m.every=m.all=function(n,t,r){t=b(t,r);for(var e=!w(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=b(t,r);for(var e=!w(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r){return w(n)||(n=m.values(n)),m.indexOf(n,t,"number"==typeof r&&r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=w(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=b(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=w(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=b(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=w(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(w(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=b(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var A=function(n){return function(t,r,e){var u={};return r=b(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=A(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=A(function(n,t,r){n[r]=t}),m.countBy=A(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):w(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:w(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=b(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var k=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=n&&n.length;a>o;o++){var c=n[o];if(w(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=k(c,t,r));var l=0,f=c.length;for(u.length+=f;f>l;)u[i++]=c[l++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return k(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){if(null==n)return[];m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=b(r,e));for(var u=[],i=[],o=0,a=n.length;a>o;o++){var c=n[o],l=r?r(c,o,n):c;t?(o&&i===l||u.push(c),i=l):r?m.contains(i,l)||(i.push(l),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(k(arguments,!0,!0))},m.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=k(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,"length").length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=n&&n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.indexOf=function(n,t,r){var e=0,u=n&&n.length;if("number"==typeof r)e=0>r?Math.max(0,u+r):r;else if(r&&u)return e=m.sortedIndex(n,t),n[e]===t?e:-1;if(t!==t)return m.findIndex(l.call(n,e),m.isNaN);for(;u>e;e++)if(n[e]===t)return e;return-1},m.lastIndexOf=function(n,t,r){var e=n?n.length:0;if("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1)),t!==t)return m.findLastIndex(l.call(n,0,e),m.isNaN);for(;--e>=0;)if(n[e]===t)return e;return-1},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=b(r,e,1);for(var u=r(t),i=0,o=n.length;o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var O=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=_(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(v&&n.bind===v)return v.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return O(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return O(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var l=m.now();a||r.leading!==!1||(a=l);var f=t-(l-a);return e=this,u=arguments,0>=f||f>t?(o&&(clearTimeout(o),o=null),a=l,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,f)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var l=m.now()-o;t>l&&l>=0?e=setTimeout(c,t-l):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var F=!{toString:null}.propertyIsEnumerable("toString"),S=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(h)return h(n);var t=[];for(var e in n)m.has(n,e)&&t.push(e);return F&&r(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var e in n)t.push(e);return F&&r(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=b(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=x(m.allKeys),m.extendOwn=m.assign=x(m.keys),m.findKey=function(n,t,r){t=b(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=d(t,r)):(u=k(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var l=u[a],f=o[l];e(f,l,o)&&(i[l]=f)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(k(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=x(m.allKeys,!0),m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var E=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=f.call(n);if(u!==f.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!E(n[c],t[c],r,e))return!1}else{var l,s=m.keys(n);if(c=s.length,m.keys(t).length!==c)return!1;for(;c--;)if(l=s[c],!m.has(t,l)||!E(n[l],t[l],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return E(n,t)},m.isEmpty=function(n){return null==n?!0:w(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=p||function(n){return"[object Array]"===f.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return f.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===f.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&s.call(n,t)},m.noConflict=function(){return e._=u,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=function(n){return function(t){return null==t?void 0:t[n]}},m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=d(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},N=m.invert(M),I=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=I(M),m.unescape=I(N),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var B=0;m.uniqueId=function(n){var t=++B+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},q=/\\|'|\r|\n|\u2028|\u2029/g,K=function(n){return"\\"+R[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(q,K),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},l=t.variable||"obj";return c.source="function("+l+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var z=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return c.apply(n,arguments),z(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=i[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],z(this,r)}}),m.each(["concat","join","slice"],function(n){var t=i[n];m.prototype[n]=function(){return z(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
/*! alertify - v0.3.11 - 2013-10-08 */
!function(a,b){"use strict";var c,d=a.document;c=function(){var c,e,f,g,h,i,j,k,l,m,n,o,p,q={},r={},s=!1,t={ENTER:13,ESC:27,SPACE:32},u=[];return r={buttons:{holder:'<nav class="alertify-buttons">{{buttons}}</nav>',submit:'<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',ok:'<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',cancel:'<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'},input:'<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',message:'<p class="alertify-message">{{message}}</p>',log:'<article class="alertify-log{{class}}">{{message}}</article>'},p=function(){var a,c,e=!1,f=d.createElement("fakeelement"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"};for(a in g)if(f.style[a]!==b){c=g[a],e=!0;break}return{type:c,supported:e}},c=function(a){return d.getElementById(a)},q={labels:{ok:"OK",cancel:"Cancel"},delay:5e3,buttonReverse:!1,buttonFocus:"ok",transition:b,addListeners:function(a){var b,c,i,j,k,l="undefined"!=typeof f,m="undefined"!=typeof e,n="undefined"!=typeof o,p="",q=this;b=function(b){return"undefined"!=typeof b.preventDefault&&b.preventDefault(),i(b),"undefined"!=typeof o&&(p=o.value),"function"==typeof a&&("undefined"!=typeof o?a(!0,p):a(!0)),!1},c=function(b){return"undefined"!=typeof b.preventDefault&&b.preventDefault(),i(b),"function"==typeof a&&a(!1),!1},i=function(){q.hide(),q.unbind(d.body,"keyup",j),q.unbind(g,"focus",k),l&&q.unbind(f,"click",b),m&&q.unbind(e,"click",c)},j=function(a){var d=a.keyCode;(d===t.SPACE&&!n||n&&d===t.ENTER)&&b(a),d===t.ESC&&m&&c(a)},k=function(){n?o.focus():!m||q.buttonReverse?f.focus():e.focus()},this.bind(g,"focus",k),this.bind(h,"focus",k),l&&this.bind(f,"click",b),m&&this.bind(e,"click",c),this.bind(d.body,"keyup",j),this.transition.supported||this.setFocus()},bind:function(a,b,c){"function"==typeof a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},handleErrors:function(){if("undefined"!=typeof a.onerror){var b=this;return a.onerror=function(a,c,d){b.error("["+a+" on line "+d+" of "+c+"]",0)},!0}return!1},appendButtons:function(a,b){return this.buttonReverse?b+a:a+b},build:function(a){var b="",c=a.type,d=a.message,e=a.cssClass||"";switch(b+='<div class="alertify-dialog">',b+='<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>',"none"===q.buttonFocus&&(b+='<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'),"prompt"===c&&(b+='<div id="alertify-form">'),b+='<article class="alertify-inner">',b+=r.message.replace("{{message}}",d),"prompt"===c&&(b+=r.input),b+=r.buttons.holder,b+="</article>","prompt"===c&&(b+="</div>"),b+='<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>',b+="</div>",c){case"confirm":b=b.replace("{{buttons}}",this.appendButtons(r.buttons.cancel,r.buttons.ok)),b=b.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"prompt":b=b.replace("{{buttons}}",this.appendButtons(r.buttons.cancel,r.buttons.submit)),b=b.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"alert":b=b.replace("{{buttons}}",r.buttons.ok),b=b.replace("{{ok}}",this.labels.ok)}return l.className="alertify alertify-"+c+" "+e,k.className="alertify-cover",b},close:function(a,b){var c,d,e=b&&!isNaN(b)?+b:this.delay,f=this;this.bind(a,"click",function(){c(a)}),d=function(a){a.stopPropagation(),f.unbind(this,f.transition.type,d),m.removeChild(this),m.hasChildNodes()||(m.className+=" alertify-logs-hidden")},c=function(a){"undefined"!=typeof a&&a.parentNode===m&&(f.transition.supported?(f.bind(a,f.transition.type,d),a.className+=" alertify-log-hide"):(m.removeChild(a),m.hasChildNodes()||(m.className+=" alertify-logs-hidden")))},0!==b&&setTimeout(function(){c(a)},e)},dialog:function(a,b,c,e,f){j=d.activeElement;var g=function(){m&&null!==m.scrollTop&&k&&null!==k.scrollTop||g()};if("string"!=typeof a)throw new Error("message must be a string");if("string"!=typeof b)throw new Error("type must be a string");if("undefined"!=typeof c&&"function"!=typeof c)throw new Error("fn must be a function");return this.init(),g(),u.push({type:b,message:a,callback:c,placeholder:e,cssClass:f}),s||this.setup(),this},extend:function(a){if("string"!=typeof a)throw new Error("extend method must have exactly one paramter");return function(b,c){return this.log(b,a,c),this}},hide:function(){var a,b=this;u.splice(0,1),u.length>0?this.setup(!0):(s=!1,a=function(c){c.stopPropagation(),b.unbind(l,b.transition.type,a)},this.transition.supported?(this.bind(l,this.transition.type,a),l.className="alertify alertify-hide alertify-hidden"):l.className="alertify alertify-hide alertify-hidden alertify-isHidden",k.className="alertify-cover alertify-cover-hidden",j.focus())},init:function(){d.createElement("nav"),d.createElement("article"),d.createElement("section"),null==c("alertify-cover")&&(k=d.createElement("div"),k.setAttribute("id","alertify-cover"),k.className="alertify-cover alertify-cover-hidden",d.body.appendChild(k)),null==c("alertify")&&(s=!1,u=[],l=d.createElement("section"),l.setAttribute("id","alertify"),l.className="alertify alertify-hidden",d.body.appendChild(l)),null==c("alertify-logs")&&(m=d.createElement("section"),m.setAttribute("id","alertify-logs"),m.className="alertify-logs alertify-logs-hidden",d.body.appendChild(m)),d.body.setAttribute("tabindex","0"),this.transition=p()},log:function(a,b,c){var d=function(){m&&null!==m.scrollTop||d()};return this.init(),d(),m.className="alertify-logs",this.notify(a,b,c),this},notify:function(a,b,c){var e=d.createElement("article");e.className="alertify-log"+("string"==typeof b&&""!==b?" alertify-log-"+b:""),e.innerHTML=a,m.appendChild(e),setTimeout(function(){e.className=e.className+" alertify-log-show"},50),this.close(e,c)},set:function(a){var b;if("object"!=typeof a&&a instanceof Array)throw new Error("args must be an object");for(b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},setFocus:function(){o?(o.focus(),o.select()):i.focus()},setup:function(a){var d,j=u[0],k=this;s=!0,d=function(a){a.stopPropagation(),k.setFocus(),k.unbind(l,k.transition.type,d)},this.transition.supported&&!a&&this.bind(l,this.transition.type,d),l.innerHTML=this.build(j),g=c("alertify-resetFocus"),h=c("alertify-resetFocusBack"),f=c("alertify-ok")||b,e=c("alertify-cancel")||b,i="cancel"===q.buttonFocus?e:"none"===q.buttonFocus?c("alertify-noneFocus"):f,o=c("alertify-text")||b,n=c("alertify-form")||b,"string"==typeof j.placeholder&&""!==j.placeholder&&(o.value=j.placeholder),a&&this.setFocus(),this.addListeners(j.callback)},unbind:function(a,b,c){"function"==typeof a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}},{alert:function(a,b,c){return q.dialog(a,"alert",b,"",c),this},confirm:function(a,b,c){return q.dialog(a,"confirm",b,"",c),this},extend:q.extend,init:q.init,log:function(a,b,c){return q.log(a,b,c),this},prompt:function(a,b,c,d){return q.dialog(a,"prompt",b,c,d),this},success:function(a,b){return q.log(a,"success",b),this},error:function(a,b){return q.log(a,"error",b),this},set:function(a){q.set(a)},labels:q.labels,debug:q.handleErrors}},"function"==typeof define?define([],function(){return new c}):"undefined"==typeof a.alertify&&(a.alertify=new c)}(this);