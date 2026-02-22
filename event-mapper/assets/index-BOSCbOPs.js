(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))_(l);new MutationObserver(l=>{for(const S of l)if(S.type==="childList")for(const w of S.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&_(w)}).observe(document,{childList:!0,subtree:!0});function c(l){const S={};return l.integrity&&(S.integrity=l.integrity),l.referrerPolicy&&(S.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?S.credentials="include":l.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function _(l){if(l.ep)return;l.ep=!0;const S=c(l);fetch(l.href,S)}})();function ar(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $e={exports:{}};var lr=$e.exports,oo;function cr(){return oo||(oo=1,(function(s,f){(function(c,_){_(f)})(lr,(function(c){var _="1.9.4";function l(t){var e,n,i,o;for(n=1,i=arguments.length;n<i;n++){o=arguments[n];for(e in o)t[e]=o[e]}return t}var S=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function w(t,e){var n=Array.prototype.slice;if(t.bind)return t.bind.apply(t,n.call(arguments,1));var i=n.call(arguments,2);return function(){return t.apply(e,i.length?i.concat(n.call(arguments)):arguments)}}var G=0;function h(t){return"_leaflet_id"in t||(t._leaflet_id=++G),t._leaflet_id}function H(t,e,n){var i,o,r,a;return a=function(){i=!1,o&&(r.apply(n,o),o=!1)},r=function(){i?o=arguments:(t.apply(n,arguments),setTimeout(a,e),i=!0)},r}function O(t,e,n){var i=e[1],o=e[0],r=i-o;return t===i&&n?t:((t-o)%r+r)%r+o}function C(){return!1}function z(t,e){if(e===!1)return t;var n=Math.pow(10,e===void 0?6:e);return Math.round(t*n)/n}function F(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function tt(t){return F(t).split(/\s+/)}function E(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?S(t.options):{});for(var n in e)t.options[n]=e[n];return t.options}function ht(t,e,n){var i=[];for(var o in t)i.push(encodeURIComponent(n?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(!e||e.indexOf("?")===-1?"?":"&")+i.join("&")}var V=/\{ *([\w_ -]+) *\}/g;function et(t,e){return t.replace(V,function(n,i){var o=e[i];if(o===void 0)throw new Error("No value provided for variable "+n);return typeof o=="function"&&(o=o(e)),o})}var $=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function Et(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1}var dt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function St(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var Mt=0;function kt(t){var e=+new Date,n=Math.max(0,16-(e-Mt));return Mt=e+n,window.setTimeout(t,n)}var v=window.requestAnimationFrame||St("RequestAnimationFrame")||kt,P=window.cancelAnimationFrame||St("CancelAnimationFrame")||St("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function R(t,e,n){if(n&&v===kt)t.call(e);else return v.call(window,w(t,e))}function y(t){t&&P.call(window,t)}var U={__proto__:null,extend:l,create:S,bind:w,get lastId(){return G},stamp:h,throttle:H,wrapNum:O,falseFn:C,formatNum:z,trim:F,splitWords:tt,setOptions:E,getParamString:ht,template:et,isArray:$,indexOf:Et,emptyImageUrl:dt,requestFn:v,cancelFn:P,requestAnimFrame:R,cancelAnimFrame:y};function D(){}D.extend=function(t){var e=function(){E(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,i=S(n);i.constructor=e,e.prototype=i;for(var o in this)Object.prototype.hasOwnProperty.call(this,o)&&o!=="prototype"&&o!=="__super__"&&(e[o]=this[o]);return t.statics&&l(e,t.statics),t.includes&&(q(t.includes),l.apply(null,[i].concat(t.includes))),l(i,t),delete i.statics,delete i.includes,i.options&&(i.options=n.options?S(n.options):{},l(i.options,t.options)),i._initHooks=[],i.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var r=0,a=i._initHooks.length;r<a;r++)i._initHooks[r].call(this)}},e},D.include=function(t){var e=this.prototype.options;return l(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},D.mergeOptions=function(t){return l(this.prototype.options,t),this},D.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),n=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};function q(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=$(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var W={on:function(t,e,n){if(typeof t=="object")for(var i in t)this._on(i,t[i],e);else{t=tt(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,n)}return this},off:function(t,e,n){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var i in t)this._off(i,t[i],e);else{t=tt(t);for(var o=arguments.length===1,r=0,a=t.length;r<a;r++)o?this._off(t[r]):this._off(t[r],e,n)}return this},_on:function(t,e,n,i){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,n)===!1){n===this&&(n=void 0);var o={fn:e,ctx:n};i&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,n){var i,o,r;if(this._events&&(i=this._events[t],!!i)){if(arguments.length===1){if(this._firingCount)for(o=0,r=i.length;o<r;o++)i[o].fn=C;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var a=this._listens(t,e,n);if(a!==!1){var u=i[a];this._firingCount&&(u.fn=C,this._events[t]=i=i.slice()),i.splice(a,1)}}},fire:function(t,e,n){if(!this.listens(t,n))return this;var i=l({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var r=0,a=o.length;r<a;r++){var u=o[r],d=u.fn;u.once&&this.off(t,d,u.ctx),d.call(u.ctx||this,i)}this._firingCount--}}return n&&this._propagateEvent(i),this},listens:function(t,e,n,i){typeof t!="string"&&console.warn('"string" type argument expected');var o=e;typeof e!="function"&&(i=!!e,o=void 0,n=void 0);var r=this._events&&this._events[t];if(r&&r.length&&this._listens(t,o,n)!==!1)return!0;if(i){for(var a in this._eventParents)if(this._eventParents[a].listens(t,e,n,i))return!0}return!1},_listens:function(t,e,n){if(!this._events)return!1;var i=this._events[t]||[];if(!e)return!!i.length;n===this&&(n=void 0);for(var o=0,r=i.length;o<r;o++)if(i[o].fn===e&&i[o].ctx===n)return o;return!1},once:function(t,e,n){if(typeof t=="object")for(var i in t)this._on(i,t[i],e,!0);else{t=tt(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,n,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[h(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[h(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,l({layer:t.target,propagatedFrom:t.target},t),!0)}};W.addEventListener=W.on,W.removeEventListener=W.clearAllEventListeners=W.off,W.addOneTimeEventListener=W.once,W.fireEvent=W.fire,W.hasEventListeners=W.listens;var at=D.extend(W);function B(t,e,n){this.x=n?Math.round(t):t,this.y=n?Math.round(e):e}var rt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};B.prototype={clone:function(){return new B(this.x,this.y)},add:function(t){return this.clone()._add(k(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(k(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new B(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new B(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=rt(this.x),this.y=rt(this.y),this},distanceTo:function(t){t=k(t);var e=t.x-this.x,n=t.y-this.y;return Math.sqrt(e*e+n*n)},equals:function(t){return t=k(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=k(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+z(this.x)+", "+z(this.y)+")"}};function k(t,e,n){return t instanceof B?t:$(t)?new B(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new B(t.x,t.y):new B(t,e,n)}function Z(t,e){if(t)for(var n=e?[t,e]:t,i=0,o=n.length;i<o;i++)this.extend(n[i])}Z.prototype={extend:function(t){var e,n;if(!t)return this;if(t instanceof B||typeof t[0]=="number"||"x"in t)e=n=k(t);else if(t=nt(t),e=t.min,n=t.max,!e||!n)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=n.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)),this},getCenter:function(t){return k((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return k(this.min.x,this.max.y)},getTopRight:function(){return k(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,n;return typeof t[0]=="number"||t instanceof B?t=k(t):t=nt(t),t instanceof Z?(e=t.min,n=t.max):e=n=t,e.x>=this.min.x&&n.x<=this.max.x&&e.y>=this.min.y&&n.y<=this.max.y},intersects:function(t){t=nt(t);var e=this.min,n=this.max,i=t.min,o=t.max,r=o.x>=e.x&&i.x<=n.x,a=o.y>=e.y&&i.y<=n.y;return r&&a},overlaps:function(t){t=nt(t);var e=this.min,n=this.max,i=t.min,o=t.max,r=o.x>e.x&&i.x<n.x,a=o.y>e.y&&i.y<n.y;return r&&a},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,n=this.max,i=Math.abs(e.x-n.x)*t,o=Math.abs(e.y-n.y)*t;return nt(k(e.x-i,e.y-o),k(n.x+i,n.y+o))},equals:function(t){return t?(t=nt(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function nt(t,e){return!t||t instanceof Z?t:new Z(t,e)}function ot(t,e){if(t)for(var n=e?[t,e]:t,i=0,o=n.length;i<o;i++)this.extend(n[i])}ot.prototype={extend:function(t){var e=this._southWest,n=this._northEast,i,o;if(t instanceof g)i=t,o=t;else if(t instanceof ot){if(i=t._southWest,o=t._northEast,!i||!o)return this}else return t?this.extend(b(t)||x(t)):this;return!e&&!n?(this._southWest=new g(i.lat,i.lng),this._northEast=new g(o.lat,o.lng)):(e.lat=Math.min(i.lat,e.lat),e.lng=Math.min(i.lng,e.lng),n.lat=Math.max(o.lat,n.lat),n.lng=Math.max(o.lng,n.lng)),this},pad:function(t){var e=this._southWest,n=this._northEast,i=Math.abs(e.lat-n.lat)*t,o=Math.abs(e.lng-n.lng)*t;return new ot(new g(e.lat-i,e.lng-o),new g(n.lat+i,n.lng+o))},getCenter:function(){return new g((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new g(this.getNorth(),this.getWest())},getSouthEast:function(){return new g(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof g||"lat"in t?t=b(t):t=x(t);var e=this._southWest,n=this._northEast,i,o;return t instanceof ot?(i=t.getSouthWest(),o=t.getNorthEast()):i=o=t,i.lat>=e.lat&&o.lat<=n.lat&&i.lng>=e.lng&&o.lng<=n.lng},intersects:function(t){t=x(t);var e=this._southWest,n=this._northEast,i=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>=e.lat&&i.lat<=n.lat,a=o.lng>=e.lng&&i.lng<=n.lng;return r&&a},overlaps:function(t){t=x(t);var e=this._southWest,n=this._northEast,i=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>e.lat&&i.lat<n.lat,a=o.lng>e.lng&&i.lng<n.lng;return r&&a},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=x(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function x(t,e){return t instanceof ot?t:new ot(t,e)}function g(t,e,n){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,n!==void 0&&(this.alt=+n)}g.prototype={equals:function(t,e){if(!t)return!1;t=b(t);var n=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return n<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+z(this.lat,t)+", "+z(this.lng,t)+")"},distanceTo:function(t){return ft.distance(this,b(t))},wrap:function(){return ft.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,n=e/Math.cos(Math.PI/180*this.lat);return x([this.lat-e,this.lng-n],[this.lat+e,this.lng+n])},clone:function(){return new g(this.lat,this.lng,this.alt)}};function b(t,e,n){return t instanceof g?t:$(t)&&typeof t[0]!="object"?t.length===3?new g(t[0],t[1],t[2]):t.length===2?new g(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new g(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new g(t,e,n)}var lt={latLngToPoint:function(t,e){var n=this.projection.project(t),i=this.scale(e);return this.transformation._transform(n,i)},pointToLatLng:function(t,e){var n=this.scale(e),i=this.transformation.untransform(t,n);return this.projection.unproject(i)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,n=this.scale(t),i=this.transformation.transform(e.min,n),o=this.transformation.transform(e.max,n);return new Z(i,o)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?O(t.lng,this.wrapLng,!0):t.lng,n=this.wrapLat?O(t.lat,this.wrapLat,!0):t.lat,i=t.alt;return new g(n,e,i)},wrapLatLngBounds:function(t){var e=t.getCenter(),n=this.wrapLatLng(e),i=e.lat-n.lat,o=e.lng-n.lng;if(i===0&&o===0)return t;var r=t.getSouthWest(),a=t.getNorthEast(),u=new g(r.lat-i,r.lng-o),d=new g(a.lat-i,a.lng-o);return new ot(u,d)}},ft=l({},lt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var n=Math.PI/180,i=t.lat*n,o=e.lat*n,r=Math.sin((e.lat-t.lat)*n/2),a=Math.sin((e.lng-t.lng)*n/2),u=r*r+Math.cos(i)*Math.cos(o)*a*a,d=2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u));return this.R*d}}),Bt=6378137,Rt={R:Bt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,n=this.MAX_LATITUDE,i=Math.max(Math.min(n,t.lat),-n),o=Math.sin(i*e);return new B(this.R*t.lng*e,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var e=180/Math.PI;return new g((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=Bt*Math.PI;return new Z([-t,-t],[t,t])})()};function Ot(t,e,n,i){if($(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=n,this._d=i}Ot.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new B((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function Zt(t,e,n,i){return new Ot(t,e,n,i)}var zt=l({},ft,{code:"EPSG:3857",projection:Rt,transformation:(function(){var t=.5/(Math.PI*Rt.R);return Zt(t,.5,-t,.5)})()}),Ee=l({},zt,{code:"EPSG:900913"});function Ie(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ce(t,e){var n="",i,o,r,a,u,d;for(i=0,r=t.length;i<r;i++){for(u=t[i],o=0,a=u.length;o<a;o++)d=u[o],n+=(o?"L":"M")+d.x+" "+d.y;n+=e?M.svg?"z":"x":""}return n||"M0 0"}var fe=document.documentElement.style,se="ActiveXObject"in window,tn=se&&!document.addEventListener,Se="msLaunchUri"in navigator&&!("documentMode"in document),ie=Nt("webkit"),Me=Nt("android"),ke=Nt("android 2")||Nt("android 3"),en=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),nn=Me&&Nt("Google")&&en<537&&!("AudioNode"in window),me=!!window.opera,Be=!Se&&Nt("chrome"),on=Nt("gecko")&&!ie&&!me&&!se,zn=!Be&&Nt("safari"),rn=Nt("phantom"),sn="OTransition"in fe,An=navigator.platform.indexOf("Win")===0,an=se&&"transition"in fe,Oe="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ke,ln="MozPerspective"in fe,Rn=!window.L_DISABLE_3D&&(an||Oe||ln)&&!sn&&!rn,ae=typeof orientation<"u"||Nt("mobile"),Zn=ae&&ie,cn=ae&&Oe,hn=!window.PointerEvent&&window.MSPointerEvent,pe=!!(window.PointerEvent||hn),ze="ontouchstart"in window||!!window.TouchEvent,$t=!window.L_NO_TOUCH&&(ze||pe),Ae=ae&&me,Ft=ae&&on,Re=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,wt=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",C,e),window.removeEventListener("testPassiveEventSupport",C,e)}catch{}return t})(),It=(function(){return!!document.createElement("canvas").getContext})(),qt=!!(document.createElementNS&&Ie("svg").createSVGRect),Nn=!!qt&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Ze=!qt&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),Dn=navigator.platform.indexOf("Mac")===0,un=navigator.platform.indexOf("Linux")===0;function Nt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var M={ie:se,ielt9:tn,edge:Se,webkit:ie,android:Me,android23:ke,androidStock:nn,opera:me,chrome:Be,gecko:on,safari:zn,phantom:rn,opera12:sn,win:An,ie3d:an,webkit3d:Oe,gecko3d:ln,any3d:Rn,mobile:ae,mobileWebkit:Zn,mobileWebkit3d:cn,msPointer:hn,pointer:pe,touch:$t,touchNative:ze,mobileOpera:Ae,mobileGecko:Ft,retina:Re,passiveEvents:wt,canvas:It,svg:qt,vml:Ze,inlineSvg:Nn,mac:Dn,linux:un},Ne=M.msPointer?"MSPointerDown":"pointerdown",dn=M.msPointer?"MSPointerMove":"pointermove",fn=M.msPointer?"MSPointerUp":"pointerup",mn=M.msPointer?"MSPointerCancel":"pointercancel",m={touchstart:Ne,touchmove:dn,touchend:fn,touchcancel:mn},T={touchstart:ge,touchmove:pt,touchend:pt,touchcancel:pt},A={},K=!1;function J(t,e,n){return e==="touchstart"&&gt(),T[e]?(n=T[e].bind(this,n),t.addEventListener(m[e],n,!1),n):(console.warn("wrong event specified:",e),C)}function mt(t,e,n){if(!m[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(m[e],n,!1)}function Tt(t){A[t.pointerId]=t}function st(t){A[t.pointerId]&&(A[t.pointerId]=t)}function vt(t){delete A[t.pointerId]}function gt(){K||(document.addEventListener(Ne,Tt,!0),document.addEventListener(dn,st,!0),document.addEventListener(fn,vt,!0),document.addEventListener(mn,vt,!0),K=!0)}function pt(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var n in A)e.touches.push(A[n]);e.changedTouches=[e],t(e)}}function ge(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&Pt(e),pt(t,e)}function De(t){var e={},n,i;for(i in t)n=t[i],e[i]=n&&n.bind?n.bind(t):n;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Wn=200;function co(t,e){t.addEventListener("dblclick",e);var n=0,i;function o(r){if(r.detail!==1){i=r.detail;return}if(!(r.pointerType==="mouse"||r.sourceCapabilities&&!r.sourceCapabilities.firesTouchEvents)){var a=xi(r);if(!(a.some(function(d){return d instanceof HTMLLabelElement&&d.attributes.for})&&!a.some(function(d){return d instanceof HTMLInputElement||d instanceof HTMLSelectElement}))){var u=Date.now();u-n<=Wn?(i++,i===2&&e(De(r))):i=1,n=u}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}function ho(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var Hn=_n(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),We=_n(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),gi=We==="webkitTransition"||We==="OTransition"?We+"End":"transitionend";function _i(t){return typeof t=="string"?document.getElementById(t):t}function He(t,e){var n=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!n||n==="auto")&&document.defaultView){var i=document.defaultView.getComputedStyle(t,null);n=i?i[e]:null}return n==="auto"?null:n}function it(t,e,n){var i=document.createElement(t);return i.className=e||"",n&&n.appendChild(i),i}function ut(t){var e=t.parentNode;e&&e.removeChild(t)}function pn(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function _e(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ve(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function Fn(t,e){if(t.classList!==void 0)return t.classList.contains(e);var n=gn(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)}function j(t,e){if(t.classList!==void 0)for(var n=tt(e),i=0,o=n.length;i<o;i++)t.classList.add(n[i]);else if(!Fn(t,e)){var r=gn(t);Gn(t,(r?r+" ":"")+e)}}function _t(t,e){t.classList!==void 0?t.classList.remove(e):Gn(t,F((" "+gn(t)+" ").replace(" "+e+" "," ")))}function Gn(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function gn(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function Dt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&uo(t,e)}function uo(t,e){var n=!1,i="DXImageTransform.Microsoft.Alpha";try{n=t.filters.item(i)}catch{if(e===1)return}e=Math.round(e*100),n?(n.Enabled=e!==100,n.Opacity=e):t.style.filter+=" progid:"+i+"(opacity="+e+")"}function _n(t){for(var e=document.documentElement.style,n=0;n<t.length;n++)if(t[n]in e)return t[n];return!1}function le(t,e,n){var i=e||new B(0,0);t.style[Hn]=(M.ie3d?"translate("+i.x+"px,"+i.y+"px)":"translate3d("+i.x+"px,"+i.y+"px,0)")+(n?" scale("+n+")":"")}function yt(t,e){t._leaflet_pos=e,M.any3d?le(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function ce(t){return t._leaflet_pos||new B(0,0)}var Fe,Ge,Vn;if("onselectstart"in document)Fe=function(){Y(window,"selectstart",Pt)},Ge=function(){ct(window,"selectstart",Pt)};else{var Ve=_n(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Fe=function(){if(Ve){var t=document.documentElement.style;Vn=t[Ve],t[Ve]="none"}},Ge=function(){Ve&&(document.documentElement.style[Ve]=Vn,Vn=void 0)}}function Un(){Y(window,"dragstart",Pt)}function Yn(){ct(window,"dragstart",Pt)}var vn,qn;function jn(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(yn(),vn=t,qn=t.style.outlineStyle,t.style.outlineStyle="none",Y(window,"keydown",yn))}function yn(){vn&&(vn.style.outlineStyle=qn,vn=void 0,qn=void 0,ct(window,"keydown",yn))}function vi(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Xn(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var fo={__proto__:null,TRANSFORM:Hn,TRANSITION:We,TRANSITION_END:gi,get:_i,getStyle:He,create:it,remove:ut,empty:pn,toFront:_e,toBack:ve,hasClass:Fn,addClass:j,removeClass:_t,setClass:Gn,getClass:gn,setOpacity:Dt,testProp:_n,setTransform:le,setPosition:yt,getPosition:ce,get disableTextSelection(){return Fe},get enableTextSelection(){return Ge},disableImageDrag:Un,enableImageDrag:Yn,preventOutline:jn,restoreOutline:yn,getSizedParentNode:vi,getScale:Xn};function Y(t,e,n,i){if(e&&typeof e=="object")for(var o in e)Jn(t,o,e[o],n);else{e=tt(e);for(var r=0,a=e.length;r<a;r++)Jn(t,e[r],n,i)}return this}var jt="_leaflet_events";function ct(t,e,n,i){if(arguments.length===1)yi(t),delete t[jt];else if(e&&typeof e=="object")for(var o in e)$n(t,o,e[o],n);else if(e=tt(e),arguments.length===2)yi(t,function(u){return Et(e,u)!==-1});else for(var r=0,a=e.length;r<a;r++)$n(t,e[r],n,i);return this}function yi(t,e){for(var n in t[jt]){var i=n.split(/\d/)[0];(!e||e(i))&&$n(t,i,null,null,n)}}var Kn={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Jn(t,e,n,i){var o=e+h(n)+(i?"_"+h(i):"");if(t[jt]&&t[jt][o])return this;var r=function(u){return n.call(i||t,u||window.event)},a=r;!M.touchNative&&M.pointer&&e.indexOf("touch")===0?r=J(t,e,r):M.touch&&e==="dblclick"?r=co(t,r):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Kn[e]||e,r,M.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(r=function(u){u=u||window.event,ti(t,u)&&a(u)},t.addEventListener(Kn[e],r,!1)):t.addEventListener(e,a,!1):t.attachEvent("on"+e,r),t[jt]=t[jt]||{},t[jt][o]=r}function $n(t,e,n,i,o){o=o||e+h(n)+(i?"_"+h(i):"");var r=t[jt]&&t[jt][o];if(!r)return this;!M.touchNative&&M.pointer&&e.indexOf("touch")===0?mt(t,e,r):M.touch&&e==="dblclick"?ho(t,r):"removeEventListener"in t?t.removeEventListener(Kn[e]||e,r,!1):t.detachEvent("on"+e,r),t[jt][o]=null}function he(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Qn(t){return Jn(t,"wheel",he),this}function Ue(t){return Y(t,"mousedown touchstart dblclick contextmenu",he),t._leaflet_disable_click=!0,this}function Pt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function ue(t){return Pt(t),he(t),this}function xi(t){if(t.composedPath)return t.composedPath();for(var e=[],n=t.target;n;)e.push(n),n=n.parentNode;return e}function wi(t,e){if(!e)return new B(t.clientX,t.clientY);var n=Xn(e),i=n.boundingClientRect;return new B((t.clientX-i.left)/n.x-e.clientLeft,(t.clientY-i.top)/n.y-e.clientTop)}var mo=M.linux&&M.chrome?window.devicePixelRatio:M.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function bi(t){return M.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/mo:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function ti(t,e){var n=e.relatedTarget;if(!n)return!0;try{for(;n&&n!==t;)n=n.parentNode}catch{return!1}return n!==t}var po={__proto__:null,on:Y,off:ct,stopPropagation:he,disableScrollPropagation:Qn,disableClickPropagation:Ue,preventDefault:Pt,stop:ue,getPropagationPath:xi,getMousePosition:wi,getWheelDelta:bi,isExternalTarget:ti,addListener:Y,removeListener:ct},Ti=at.extend({run:function(t,e,n,i){this.stop(),this._el=t,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(i||.5,.2),this._startPos=ce(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=R(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,n=this._duration*1e3;e<n?this._runFrame(this._easeOut(e/n),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var n=this._startPos.add(this._offset.multiplyBy(t));e&&n._round(),yt(this._el,n),this.fire("step")},_complete:function(){y(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Q=at.extend({options:{crs:zt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=E(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=w(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(b(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=We&&M.any3d&&!M.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Y(this._proxy,gi,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(b(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==void 0&&(n.zoom=l({animate:n.animate},n.zoom),n.pan=l({animate:n.animate,duration:n.duration},n.pan));var i=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(i)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,n.pan&&n.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(M.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(M.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,n){var i=this.getZoomScale(e),o=this.getSize().divideBy(2),r=t instanceof B?t:this.latLngToContainerPoint(t),a=r.subtract(o).multiplyBy(1-1/i),u=this.containerPointToLatLng(o.add(a));return this.setView(u,e,{zoom:n})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():x(t);var n=k(e.paddingTopLeft||e.padding||[0,0]),i=k(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,n.add(i));if(o=typeof e.maxZoom=="number"?Math.min(e.maxZoom,o):o,o===1/0)return{center:t.getCenter(),zoom:o};var r=i.subtract(n).divideBy(2),a=this.project(t.getSouthWest(),o),u=this.project(t.getNorthEast(),o),d=this.unproject(a.add(u).divideBy(2).add(r),o);return{center:d,zoom:o}},fitBounds:function(t,e){if(t=x(t),!t.isValid())throw new Error("Bounds are not valid.");var n=this._getBoundsCenterZoom(t,e);return this.setView(n.center,n.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=k(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ti,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){j(this._mapPane,"leaflet-pan-anim");var n=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,n,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,n){if(n=n||{},n.animate===!1||!M.any3d)return this.setView(t,e,n);this._stop();var i=this.project(this.getCenter()),o=this.project(t),r=this.getSize(),a=this._zoom;t=b(t),e=e===void 0?a:e;var u=Math.max(r.x,r.y),d=u*this.getZoomScale(a,e),p=o.distanceTo(i)||1,I=1.42,N=I*I;function X(xt){var kn=xt?-1:1,ir=xt?d:u,or=d*d-u*u+kn*N*N*p*p,rr=2*ir*N*p,ui=or/rr,io=Math.sqrt(ui*ui+1)-ui,sr=io<1e-9?-18:Math.log(io);return sr}function Ct(xt){return(Math.exp(xt)-Math.exp(-xt))/2}function bt(xt){return(Math.exp(xt)+Math.exp(-xt))/2}function Ht(xt){return Ct(xt)/bt(xt)}var At=X(0);function Pe(xt){return u*(bt(At)/bt(At+I*xt))}function Qo(xt){return u*(bt(At)*Ht(At+I*xt)-Ct(At))/N}function tr(xt){return 1-Math.pow(1-xt,1.5)}var er=Date.now(),eo=(X(1)-At)/I,nr=n.duration?1e3*n.duration:1e3*eo*.8;function no(){var xt=(Date.now()-er)/nr,kn=tr(xt)*eo;xt<=1?(this._flyToFrame=R(no,this),this._move(this.unproject(i.add(o.subtract(i).multiplyBy(Qo(kn)/p)),a),this.getScaleZoom(u/Pe(kn),a),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),no.call(this),this},flyToBounds:function(t,e){var n=this._getBoundsCenterZoom(t,e);return this.flyTo(n.center,n.zoom,e)},setMaxBounds:function(t){return t=x(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var n=this.getCenter(),i=this._limitCenter(n,this._zoom,x(t));return n.equals(i)||this.panTo(i,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var n=k(e.paddingTopLeft||e.padding||[0,0]),i=k(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),r=this.project(t),a=this.getPixelBounds(),u=nt([a.min.add(n),a.max.subtract(i)]),d=u.getSize();if(!u.contains(r)){this._enforcingBounds=!0;var p=r.subtract(u.getCenter()),I=u.extend(r).getSize().subtract(d);o.x+=p.x<0?-I.x:I.x,o.y+=p.y<0?-I.y:I.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=l({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var n=this.getSize(),i=e.divideBy(2).round(),o=n.divideBy(2).round(),r=i.subtract(o);return!r.x&&!r.y?this:(t.animate&&t.pan?this.panBy(r):(t.pan&&this._rawPanBy(r),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(w(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:n}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=l({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=w(this._handleGeolocationResponse,this),n=w(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,n,t):navigator.geolocation.getCurrentPosition(e,n,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,n=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+n+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,n=t.coords.longitude,i=new g(e,n),o=i.toBounds(t.coords.accuracy*2),r=this._locateOptions;if(r.setView){var a=this.getBoundsZoom(o);this.setView(i,r.maxZoom?Math.min(a,r.maxZoom):a)}var u={latlng:i,bounds:o,timestamp:t.timestamp};for(var d in t.coords)typeof t.coords[d]=="number"&&(u[d]=t.coords[d]);this.fire("locationfound",u)}},addHandler:function(t,e){if(!e)return this;var n=this[t]=new e(this);return this._handlers.push(n),this.options[t]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),ut(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(y(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)ut(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var n="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i=it("div",n,e||this._mapPane);return t&&(this._panes[t]=i),i},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),n=this.unproject(t.getTopRight());return new ot(e,n)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,n){t=x(t),n=k(n||[0,0]);var i=this.getZoom()||0,o=this.getMinZoom(),r=this.getMaxZoom(),a=t.getNorthWest(),u=t.getSouthEast(),d=this.getSize().subtract(n),p=nt(this.project(u,i),this.project(a,i)).getSize(),I=M.any3d?this.options.zoomSnap:1,N=d.x/p.x,X=d.y/p.y,Ct=e?Math.max(N,X):Math.min(N,X);return i=this.getScaleZoom(Ct,i),I&&(i=Math.round(i/(I/100))*(I/100),i=e?Math.ceil(i/I)*I:Math.floor(i/I)*I),Math.max(o,Math.min(r,i))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var n=this._getTopLeftPoint(t,e);return new Z(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var n=this.options.crs;return e=e===void 0?this._zoom:e,n.scale(t)/n.scale(e)},getScaleZoom:function(t,e){var n=this.options.crs;e=e===void 0?this._zoom:e;var i=n.zoom(t*n.scale(e));return isNaN(i)?1/0:i},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(b(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(k(t),e)},layerPointToLatLng:function(t){var e=k(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(b(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(b(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(x(t))},distance:function(t,e){return this.options.crs.distance(b(t),b(e))},containerPointToLayerPoint:function(t){return k(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return k(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(k(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(b(t)))},mouseEventToContainerPoint:function(t){return wi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=_i(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Y(e,"scroll",this._onScroll,this),this._containerId=h(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&M.any3d,j(t,"leaflet-container"+(M.touch?" leaflet-touch":"")+(M.retina?" leaflet-retina":"")+(M.ielt9?" leaflet-oldie":"")+(M.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=He(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),yt(this._mapPane,new B(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(j(t.markerPane,"leaflet-zoom-hide"),j(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,n){yt(this._mapPane,new B(0,0));var i=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,n)._move(t,e)._moveEnd(o),this.fire("viewreset"),i&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,n,i){e===void 0&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),i?n&&n.pinch&&this.fire("zoom",n):((o||n&&n.pinch)&&this.fire("zoom",n),this.fire("move",n)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return y(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){yt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[h(this._container)]=this;var e=t?ct:Y;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),M.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){y(this._resizeRequest),this._resizeRequest=R(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var n=[],i,o=e==="mouseout"||e==="mouseover",r=t.target||t.srcElement,a=!1;r;){if(i=this._targets[h(r)],i&&(e==="click"||e==="preclick")&&this._draggableMoved(i)){a=!0;break}if(i&&i.listens(e,!0)&&(o&&!ti(r,t)||(n.push(i),o))||r===this._container)break;r=r.parentNode}return!n.length&&!a&&!o&&this.listens(e,!0)&&(n=[this]),n},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var n=t.type;n==="mousedown"&&jn(e),this._fireDOMEvent(t,n)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if(t.type==="click"){var i=l({},t);i.type="preclick",this._fireDOMEvent(i,i.type,n)}var o=this._findEventTargets(t,e);if(n){for(var r=[],a=0;a<n.length;a++)n[a].listens(e,!0)&&r.push(n[a]);o=r.concat(o)}if(o.length){e==="contextmenu"&&Pt(t);var u=o[0],d={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var p=u.getLatLng&&(!u._radius||u._radius<=10);d.containerPoint=p?this.latLngToContainerPoint(u.getLatLng()):this.mouseEventToContainerPoint(t),d.layerPoint=this.containerPointToLayerPoint(d.containerPoint),d.latlng=p?u.getLatLng():this.layerPointToLatLng(d.layerPoint)}for(a=0;a<o.length;a++)if(o[a].fire(e,d,!0),d.originalEvent._stopped||o[a].options.bubblingMouseEvents===!1&&Et(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return ce(this._mapPane)||new B(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var n=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return n.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var n=this.getSize()._divideBy(2);return this.project(t,e)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,n){var i=this._getNewPixelOrigin(n,e);return this.project(t,e)._subtract(i)},_latLngBoundsToNewLayerBounds:function(t,e,n){var i=this._getNewPixelOrigin(n,e);return nt([this.project(t.getSouthWest(),e)._subtract(i),this.project(t.getNorthWest(),e)._subtract(i),this.project(t.getSouthEast(),e)._subtract(i),this.project(t.getNorthEast(),e)._subtract(i)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,n){if(!n)return t;var i=this.project(t,e),o=this.getSize().divideBy(2),r=new Z(i.subtract(o),i.add(o)),a=this._getBoundsOffset(r,n,e);return Math.abs(a.x)<=1&&Math.abs(a.y)<=1?t:this.unproject(i.add(a),e)},_limitOffset:function(t,e){if(!e)return t;var n=this.getPixelBounds(),i=new Z(n.min.add(t),n.max.add(t));return t.add(this._getBoundsOffset(i,e))},_getBoundsOffset:function(t,e,n){var i=nt(this.project(e.getNorthEast(),n),this.project(e.getSouthWest(),n)),o=i.min.subtract(t.min),r=i.max.subtract(t.max),a=this._rebound(o.x,-r.x),u=this._rebound(o.y,-r.y);return new B(a,u)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),n=this.getMaxZoom(),i=M.any3d?this.options.zoomSnap:1;return i&&(t=Math.round(t/i)*i),Math.max(e,Math.min(n,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){_t(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var n=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,e),!0)},_createAnimProxy:function(){var t=this._proxy=it("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var n=Hn,i=this._proxy.style[n];le(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),i===this._proxy.style[n]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ut(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();le(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,n){if(this._animatingZoom)return!0;if(n=n||{},!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var i=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/i);return n.animate!==!0&&!this.getSize().contains(o)?!1:(R(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,n,i){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,j(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:i}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(w(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&_t(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function go(t,e){return new Q(t,e)}var Gt=D.extend({options:{position:"topright"},initialize:function(t){E(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),n=this.getPosition(),i=t._controlCorners[n];return j(e,"leaflet-control"),n.indexOf("bottom")!==-1?i.insertBefore(e,i.firstChild):i.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ut(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Ye=function(t){return new Gt(t)};Q.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",n=this._controlContainer=it("div",e+"control-container",this._container);function i(o,r){var a=e+o+" "+e+r;t[o+r]=it("div",a,n)}i("top","left"),i("top","right"),i("bottom","left"),i("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ut(this._controlCorners[t]);ut(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Pi=Gt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,n,i){return n<i?-1:i<n?1:0}},initialize:function(t,e,n){E(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var i in t)this._addLayer(t[i],i);for(i in e)this._addLayer(e[i],i,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Gt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(h(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){j(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(j(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):_t(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return _t(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=it("div",t),n=this.options.collapsed;e.setAttribute("aria-haspopup",!0),Ue(e),Qn(e);var i=this._section=it("section",t+"-list");n&&(this._map.on("click",this.collapse,this),Y(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=it("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),Y(o,{keydown:function(r){r.keyCode===13&&this._expandSafely()},click:function(r){Pt(r),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=it("div",t+"-base",i),this._separator=it("div",t+"-separator",i),this._overlaysList=it("div",t+"-overlays",i),e.appendChild(i)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&h(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:n}),this.options.sortLayers&&this._layers.sort(w(function(i,o){return this.options.sortFunction(i.layer,o.layer,i.name,o.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;pn(this._baseLayersList),pn(this._overlaysList),this._layerControlInputs=[];var t,e,n,i,o=0;for(n=0;n<this._layers.length;n++)i=this._layers[n],this._addItem(i),e=e||i.overlay,t=t||!i.overlay,o+=i.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(h(t.target)),n=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;n&&this._map.fire(n,e)},_createRadioElement:function(t,e){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",i=document.createElement("div");return i.innerHTML=n,i.firstChild},_addItem:function(t){var e=document.createElement("label"),n=this._map.hasLayer(t.layer),i;t.overlay?(i=document.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=n):i=this._createRadioElement("leaflet-base-layers_"+h(this),n),this._layerControlInputs.push(i),i.layerId=h(t.layer),Y(i,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var r=document.createElement("span");e.appendChild(r),r.appendChild(i),r.appendChild(o);var a=t.overlay?this._overlaysList:this._baseLayersList;return a.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,n,i=[],o=[];this._handlingClick=!0;for(var r=t.length-1;r>=0;r--)e=t[r],n=this._getLayer(e.layerId).layer,e.checked?i.push(n):e.checked||o.push(n);for(r=0;r<o.length;r++)this._map.hasLayer(o[r])&&this._map.removeLayer(o[r]);for(r=0;r<i.length;r++)this._map.hasLayer(i[r])||this._map.addLayer(i[r]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,n,i=this._map.getZoom(),o=t.length-1;o>=0;o--)e=t[o],n=this._getLayer(e.layerId).layer,e.disabled=n.options.minZoom!==void 0&&i<n.options.minZoom||n.options.maxZoom!==void 0&&i>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,Y(t,"click",Pt),this.expand();var e=this;setTimeout(function(){ct(t,"click",Pt),e._preventClick=!1})}}),_o=function(t,e,n){return new Pi(t,e,n)},ei=Gt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",n=it("div",e+" leaflet-bar"),i=this.options;return this._zoomInButton=this._createButton(i.zoomInText,i.zoomInTitle,e+"-in",n,this._zoomIn),this._zoomOutButton=this._createButton(i.zoomOutText,i.zoomOutTitle,e+"-out",n,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),n},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,n,i,o){var r=it("a",n,i);return r.innerHTML=t,r.href="#",r.title=e,r.setAttribute("role","button"),r.setAttribute("aria-label",e),Ue(r),Y(r,"click",ue),Y(r,"click",o,this),Y(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";_t(this._zoomInButton,e),_t(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(j(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(j(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});Q.mergeOptions({zoomControl:!0}),Q.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ei,this.addControl(this.zoomControl))});var vo=function(t){return new ei(t)},Li=Gt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",n=it("div",e),i=this.options;return this._addScales(i,e+"-line",n),t.on(i.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),n},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,n){t.metric&&(this._mScale=it("div",e,n)),t.imperial&&(this._iScale=it("div",e,n))},_update:function(){var t=this._map,e=t.getSize().y/2,n=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(n)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),n=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,n,e/t)},_updateImperial:function(t){var e=t*3.2808399,n,i,o;e>5280?(n=e/5280,i=this._getRoundNum(n),this._updateScale(this._iScale,i+" mi",i/n)):(o=this._getRoundNum(e),this._updateScale(this._iScale,o+" ft",o/e))},_updateScale:function(t,e,n){t.style.width=Math.round(this.options.maxWidth*n)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),n=t/e;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,e*n}}),yo=function(t){return new Li(t)},xo='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ni=Gt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(M.inlineSvg?xo+" ":"")+"Leaflet</a>"},initialize:function(t){E(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=it("div","leaflet-control-attribution"),Ue(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var n=[];this.options.prefix&&n.push(this.options.prefix),t.length&&n.push(t.join(", ")),this._container.innerHTML=n.join(' <span aria-hidden="true">|</span> ')}}});Q.mergeOptions({attributionControl:!0}),Q.addInitHook(function(){this.options.attributionControl&&new ni().addTo(this)});var wo=function(t){return new ni(t)};Gt.Layers=Pi,Gt.Zoom=ei,Gt.Scale=Li,Gt.Attribution=ni,Ye.layers=_o,Ye.zoom=vo,Ye.scale=yo,Ye.attribution=wo;var Xt=D.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Xt.addTo=function(t,e){return t.addHandler(e,this),this};var bo={Events:W},Ei=M.touch?"touchstart mousedown":"mousedown",oe=at.extend({options:{clickTolerance:3},initialize:function(t,e,n,i){E(this,i),this._element=t,this._dragStartTarget=e||t,this._preventOutline=n},enable:function(){this._enabled||(Y(this._dragStartTarget,Ei,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(oe._dragging===this&&this.finishDrag(!0),ct(this._dragStartTarget,Ei,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Fn(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){oe._dragging===this&&this.finishDrag();return}if(!(oe._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(oe._dragging=this,this._preventOutline&&jn(this._element),Un(),Fe(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,n=vi(this._element);this._startPoint=new B(e.clientX,e.clientY),this._startPos=ce(this._element),this._parentScale=Xn(n);var i=t.type==="mousedown";Y(document,i?"mousemove":"touchmove",this._onMove,this),Y(document,i?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,n=new B(e.clientX,e.clientY)._subtract(this._startPoint);!n.x&&!n.y||Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,Pt(t),this._moved||(this.fire("dragstart"),this._moved=!0,j(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),j(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),yt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){_t(document.body,"leaflet-dragging"),this._lastTarget&&(_t(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ct(document,"mousemove touchmove",this._onMove,this),ct(document,"mouseup touchend touchcancel",this._onUp,this),Yn(),Ge();var e=this._moved&&this._moving;this._moving=!1,oe._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Ii(t,e,n){var i,o=[1,4,2,8],r,a,u,d,p,I,N,X;for(r=0,I=t.length;r<I;r++)t[r]._code=de(t[r],e);for(u=0;u<4;u++){for(N=o[u],i=[],r=0,I=t.length,a=I-1;r<I;a=r++)d=t[r],p=t[a],d._code&N?p._code&N||(X=xn(p,d,N,e,n),X._code=de(X,e),i.push(X)):(p._code&N&&(X=xn(p,d,N,e,n),X._code=de(X,e),i.push(X)),i.push(d));t=i}return t}function Ci(t,e){var n,i,o,r,a,u,d,p,I;if(!t||t.length===0)throw new Error("latlngs not passed");Wt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var N=b([0,0]),X=x(t),Ct=X.getNorthWest().distanceTo(X.getSouthWest())*X.getNorthEast().distanceTo(X.getNorthWest());Ct<1700&&(N=ii(t));var bt=t.length,Ht=[];for(n=0;n<bt;n++){var At=b(t[n]);Ht.push(e.project(b([At.lat-N.lat,At.lng-N.lng])))}for(u=d=p=0,n=0,i=bt-1;n<bt;i=n++)o=Ht[n],r=Ht[i],a=o.y*r.x-r.y*o.x,d+=(o.x+r.x)*a,p+=(o.y+r.y)*a,u+=a*3;u===0?I=Ht[0]:I=[d/u,p/u];var Pe=e.unproject(k(I));return b([Pe.lat+N.lat,Pe.lng+N.lng])}function ii(t){for(var e=0,n=0,i=0,o=0;o<t.length;o++){var r=b(t[o]);e+=r.lat,n+=r.lng,i++}return b([e/i,n/i])}var To={__proto__:null,clipPolygon:Ii,polygonCenter:Ci,centroid:ii};function Si(t,e){if(!e||!t.length)return t.slice();var n=e*e;return t=Eo(t,n),t=Lo(t,n),t}function Mi(t,e,n){return Math.sqrt(qe(t,e,n,!0))}function Po(t,e,n){return qe(t,e,n)}function Lo(t,e){var n=t.length,i=typeof Uint8Array<"u"?Uint8Array:Array,o=new i(n);o[0]=o[n-1]=1,oi(t,o,e,0,n-1);var r,a=[];for(r=0;r<n;r++)o[r]&&a.push(t[r]);return a}function oi(t,e,n,i,o){var r=0,a,u,d;for(u=i+1;u<=o-1;u++)d=qe(t[u],t[i],t[o],!0),d>r&&(a=u,r=d);r>n&&(e[a]=1,oi(t,e,n,i,a),oi(t,e,n,a,o))}function Eo(t,e){for(var n=[t[0]],i=1,o=0,r=t.length;i<r;i++)Io(t[i],t[o])>e&&(n.push(t[i]),o=i);return o<r-1&&n.push(t[r-1]),n}var ki;function Bi(t,e,n,i,o){var r=i?ki:de(t,n),a=de(e,n),u,d,p;for(ki=a;;){if(!(r|a))return[t,e];if(r&a)return!1;u=r||a,d=xn(t,e,u,n,o),p=de(d,n),u===r?(t=d,r=p):(e=d,a=p)}}function xn(t,e,n,i,o){var r=e.x-t.x,a=e.y-t.y,u=i.min,d=i.max,p,I;return n&8?(p=t.x+r*(d.y-t.y)/a,I=d.y):n&4?(p=t.x+r*(u.y-t.y)/a,I=u.y):n&2?(p=d.x,I=t.y+a*(d.x-t.x)/r):n&1&&(p=u.x,I=t.y+a*(u.x-t.x)/r),new B(p,I,o)}function de(t,e){var n=0;return t.x<e.min.x?n|=1:t.x>e.max.x&&(n|=2),t.y<e.min.y?n|=4:t.y>e.max.y&&(n|=8),n}function Io(t,e){var n=e.x-t.x,i=e.y-t.y;return n*n+i*i}function qe(t,e,n,i){var o=e.x,r=e.y,a=n.x-o,u=n.y-r,d=a*a+u*u,p;return d>0&&(p=((t.x-o)*a+(t.y-r)*u)/d,p>1?(o=n.x,r=n.y):p>0&&(o+=a*p,r+=u*p)),a=t.x-o,u=t.y-r,i?a*a+u*u:new B(o,r)}function Wt(t){return!$(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Oi(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Wt(t)}function zi(t,e){var n,i,o,r,a,u,d,p;if(!t||t.length===0)throw new Error("latlngs not passed");Wt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var I=b([0,0]),N=x(t),X=N.getNorthWest().distanceTo(N.getSouthWest())*N.getNorthEast().distanceTo(N.getNorthWest());X<1700&&(I=ii(t));var Ct=t.length,bt=[];for(n=0;n<Ct;n++){var Ht=b(t[n]);bt.push(e.project(b([Ht.lat-I.lat,Ht.lng-I.lng])))}for(n=0,i=0;n<Ct-1;n++)i+=bt[n].distanceTo(bt[n+1])/2;if(i===0)p=bt[0];else for(n=0,r=0;n<Ct-1;n++)if(a=bt[n],u=bt[n+1],o=a.distanceTo(u),r+=o,r>i){d=(r-i)/o,p=[u.x-d*(u.x-a.x),u.y-d*(u.y-a.y)];break}var At=e.unproject(k(p));return b([At.lat+I.lat,At.lng+I.lng])}var Co={__proto__:null,simplify:Si,pointToSegmentDistance:Mi,closestPointOnSegment:Po,clipSegment:Bi,_getEdgeIntersection:xn,_getBitCode:de,_sqClosestPointOnSegment:qe,isFlat:Wt,_flat:Oi,polylineCenter:zi},ri={project:function(t){return new B(t.lng,t.lat)},unproject:function(t){return new g(t.y,t.x)},bounds:new Z([-180,-90],[180,90])},si={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Z([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,n=this.R,i=t.lat*e,o=this.R_MINOR/n,r=Math.sqrt(1-o*o),a=r*Math.sin(i),u=Math.tan(Math.PI/4-i/2)/Math.pow((1-a)/(1+a),r/2);return i=-n*Math.log(Math.max(u,1e-10)),new B(t.lng*e*n,i)},unproject:function(t){for(var e=180/Math.PI,n=this.R,i=this.R_MINOR/n,o=Math.sqrt(1-i*i),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),u=0,d=.1,p;u<15&&Math.abs(d)>1e-7;u++)p=o*Math.sin(a),p=Math.pow((1-p)/(1+p),o/2),d=Math.PI/2-2*Math.atan(r*p)-a,a+=d;return new g(a*e,t.x*e/n)}},So={__proto__:null,LonLat:ri,Mercator:si,SphericalMercator:Rt},Mo=l({},ft,{code:"EPSG:3395",projection:si,transformation:(function(){var t=.5/(Math.PI*si.R);return Zt(t,.5,-t,.5)})()}),Ai=l({},ft,{code:"EPSG:4326",projection:ri,transformation:Zt(1/180,1,-1/180,.5)}),ko=l({},lt,{projection:ri,transformation:Zt(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var n=e.lng-t.lng,i=e.lat-t.lat;return Math.sqrt(n*n+i*i)},infinite:!0});lt.Earth=ft,lt.EPSG3395=Mo,lt.EPSG3857=zt,lt.EPSG900913=Ee,lt.EPSG4326=Ai,lt.Simple=ko;var Vt=at.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[h(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[h(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var n=this.getEvents();e.on(n,this),this.once("remove",function(){e.off(n,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});Q.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=h(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=h(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return h(t)in this._layers},eachLayer:function(t,e){for(var n in this._layers)t.call(e,this._layers[n]);return this},_addLayers:function(t){t=t?$(t)?t:[t]:[];for(var e=0,n=t.length;e<n;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[h(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=h(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,n=this._getZoomSpan();for(var i in this._zoomBoundLayers){var o=this._zoomBoundLayers[i].options;t=o.minZoom===void 0?t:Math.min(t,o.minZoom),e=o.maxZoom===void 0?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ye=Vt.extend({initialize:function(t,e){E(this,e),this._layers={};var n,i;if(t)for(n=0,i=t.length;n<i;n++)this.addLayer(t[n])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),n,i;for(n in this._layers)i=this._layers[n],i[t]&&i[t].apply(i,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var n in this._layers)t.call(e,this._layers[n]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return h(t)}}),Bo=function(t,e){return new ye(t,e)},Qt=ye.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),ye.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),ye.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new ot;for(var e in this._layers){var n=this._layers[e];t.extend(n.getBounds?n.getBounds():n.getLatLng())}return t}}),Oo=function(t,e){return new Qt(t,e)},xe=D.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){E(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var n=this._getIconUrl(t);if(!n){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var i=this._createImg(n,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(i,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),i},_setIconStyles:function(t,e){var n=this.options,i=n[e+"Size"];typeof i=="number"&&(i=[i,i]);var o=k(i),r=k(e==="shadow"&&n.shadowAnchor||n.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(n.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return M.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function zo(t){return new xe(t)}var je=xe.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof je.imagePath!="string"&&(je.imagePath=this._detectIconPath()),(this.options.imagePath||je.imagePath)+xe.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(n,i,o){var r=i.exec(n);return r&&r[o]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=it("div","leaflet-default-icon-path",document.body),e=He(t,"background-image")||He(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var n=document.querySelector('link[href$="leaflet.css"]');return n?n.href.substring(0,n.href.length-11-1):""}}),Ri=Xt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new oe(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),j(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&_t(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,n=e._map,i=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,r=ce(e._icon),a=n.getPixelBounds(),u=n.getPixelOrigin(),d=nt(a.min._subtract(u).add(o),a.max._subtract(u).subtract(o));if(!d.contains(r)){var p=k((Math.max(d.max.x,r.x)-d.max.x)/(a.max.x-d.max.x)-(Math.min(d.min.x,r.x)-d.min.x)/(a.min.x-d.min.x),(Math.max(d.max.y,r.y)-d.max.y)/(a.max.y-d.max.y)-(Math.min(d.min.y,r.y)-d.min.y)/(a.min.y-d.min.y)).multiplyBy(i);n.panBy(p,{animate:!1}),this._draggable._newPos._add(p),this._draggable._startPos._add(p),yt(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=R(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(y(this._panRequest),this._panRequest=R(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,n=e._shadow,i=ce(e._icon),o=e._map.layerPointToLatLng(i);n&&yt(n,i),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){y(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),wn=Vt.extend({options:{icon:new je,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){E(this,e),this._latlng=b(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=b(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),n=t.icon.createIcon(this._icon),i=!1;n!==this._icon&&(this._icon&&this._removeIcon(),i=!0,t.title&&(n.title=t.title),n.tagName==="IMG"&&(n.alt=t.alt||"")),j(n,e),t.keyboard&&(n.tabIndex="0",n.setAttribute("role","button")),this._icon=n,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Y(n,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),r=!1;o!==this._shadow&&(this._removeShadow(),r=!0),o&&(j(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),i&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&r&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ct(this._icon,"focus",this._panOnFocus,this),ut(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ut(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&yt(this._icon,t),this._shadow&&yt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(j(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ri)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ri(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Dt(this._icon,t),this._shadow&&Dt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,n=e.iconSize?k(e.iconSize):k(0,0),i=e.iconAnchor?k(e.iconAnchor):k(0,0);t.panInside(this._latlng,{paddingTopLeft:i,paddingBottomRight:n.subtract(i)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Ao(t,e){return new wn(t,e)}var re=Vt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return E(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),bn=re.extend({options:{fill:!0,radius:10},initialize:function(t,e){E(this,e),this._latlng=b(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=b(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return re.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,n=this._clickTolerance(),i=[t+n,e+n];this._pxBounds=new Z(this._point.subtract(i),this._point.add(i))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Ro(t,e){return new bn(t,e)}var ai=bn.extend({initialize:function(t,e,n){if(typeof e=="number"&&(e=l({},n,{radius:e})),E(this,e),this._latlng=b(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new ot(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:re.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,n=this._map,i=n.options.crs;if(i.distance===ft.distance){var o=Math.PI/180,r=this._mRadius/ft.R/o,a=n.project([e+r,t]),u=n.project([e-r,t]),d=a.add(u).divideBy(2),p=n.unproject(d).lat,I=Math.acos((Math.cos(r*o)-Math.sin(e*o)*Math.sin(p*o))/(Math.cos(e*o)*Math.cos(p*o)))/o;(isNaN(I)||I===0)&&(I=r/Math.cos(Math.PI/180*e)),this._point=d.subtract(n.getPixelOrigin()),this._radius=isNaN(I)?0:d.x-n.project([p,t-I]).x,this._radiusY=d.y-a.y}else{var N=i.unproject(i.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(N).x}this._updateBounds()}});function Zo(t,e,n){return new ai(t,e,n)}var te=re.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){E(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,n=null,i=qe,o,r,a=0,u=this._parts.length;a<u;a++)for(var d=this._parts[a],p=1,I=d.length;p<I;p++){o=d[p-1],r=d[p];var N=i(t,o,r,!0);N<e&&(e=N,n=i(t,o,r))}return n&&(n.distance=Math.sqrt(e)),n},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return zi(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=b(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new ot,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return Wt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],n=Wt(t),i=0,o=t.length;i<o;i++)n?(e[i]=b(t[i]),this._bounds.extend(e[i])):e[i]=this._convertLatLngs(t[i]);return e},_project:function(){var t=new Z;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new B(t,t);this._rawPxBounds&&(this._pxBounds=new Z([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,n){var i=t[0]instanceof g,o=t.length,r,a;if(i){for(a=[],r=0;r<o;r++)a[r]=this._map.latLngToLayerPoint(t[r]),n.extend(a[r]);e.push(a)}else for(r=0;r<o;r++)this._projectLatlngs(t[r],e,n)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,n,i,o,r,a,u,d;for(n=0,o=0,r=this._rings.length;n<r;n++)for(d=this._rings[n],i=0,a=d.length;i<a-1;i++)u=Bi(d[i],d[i+1],t,i,!0),u&&(e[o]=e[o]||[],e[o].push(u[0]),(u[1]!==d[i+1]||i===a-2)&&(e[o].push(u[1]),o++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,n=0,i=t.length;n<i;n++)t[n]=Si(t[n],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var n,i,o,r,a,u,d=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(n=0,r=this._parts.length;n<r;n++)for(u=this._parts[n],i=0,a=u.length,o=a-1;i<a;o=i++)if(!(!e&&i===0)&&Mi(t,u[o],u[i])<=d)return!0;return!1}});function No(t,e){return new te(t,e)}te._flat=Oi;var we=te.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ci(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=te.prototype._convertLatLngs.call(this,t),n=e.length;return n>=2&&e[0]instanceof g&&e[0].equals(e[n-1])&&e.pop(),e},_setLatLngs:function(t){te.prototype._setLatLngs.call(this,t),Wt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Wt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,n=new B(e,e);if(t=new Z(t.min.subtract(n),t.max.add(n)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var i=0,o=this._rings.length,r;i<o;i++)r=Ii(this._rings[i],t,!0),r.length&&this._parts.push(r)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,n,i,o,r,a,u,d,p;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(r=0,d=this._parts.length;r<d;r++)for(n=this._parts[r],a=0,p=n.length,u=p-1;a<p;u=a++)i=n[a],o=n[u],i.y>t.y!=o.y>t.y&&t.x<(o.x-i.x)*(t.y-i.y)/(o.y-i.y)+i.x&&(e=!e);return e||te.prototype._containsPoint.call(this,t,!0)}});function Do(t,e){return new we(t,e)}var ee=Qt.extend({initialize:function(t,e){E(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=$(t)?t:t.features,n,i,o;if(e){for(n=0,i=e.length;n<i;n++)o=e[n],(o.geometries||o.geometry||o.features||o.coordinates)&&this.addData(o);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var a=Tn(t,r);return a?(a.feature=En(t),a.defaultOptions=a.options,this.resetStyle(a),r.onEachFeature&&r.onEachFeature(t,a),this.addLayer(a)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=l({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Tn(t,e){var n=t.type==="Feature"?t.geometry:t,i=n?n.coordinates:null,o=[],r=e&&e.pointToLayer,a=e&&e.coordsToLatLng||li,u,d,p,I;if(!i&&!n)return null;switch(n.type){case"Point":return u=a(i),Zi(r,t,u,e);case"MultiPoint":for(p=0,I=i.length;p<I;p++)u=a(i[p]),o.push(Zi(r,t,u,e));return new Qt(o);case"LineString":case"MultiLineString":return d=Pn(i,n.type==="LineString"?0:1,a),new te(d,e);case"Polygon":case"MultiPolygon":return d=Pn(i,n.type==="Polygon"?1:2,a),new we(d,e);case"GeometryCollection":for(p=0,I=n.geometries.length;p<I;p++){var N=Tn({geometry:n.geometries[p],type:"Feature",properties:t.properties},e);N&&o.push(N)}return new Qt(o);case"FeatureCollection":for(p=0,I=n.features.length;p<I;p++){var X=Tn(n.features[p],e);X&&o.push(X)}return new Qt(o);default:throw new Error("Invalid GeoJSON object.")}}function Zi(t,e,n,i){return t?t(e,n):new wn(n,i&&i.markersInheritOptions&&i)}function li(t){return new g(t[1],t[0],t[2])}function Pn(t,e,n){for(var i=[],o=0,r=t.length,a;o<r;o++)a=e?Pn(t[o],e-1,n):(n||li)(t[o]),i.push(a);return i}function ci(t,e){return t=b(t),t.alt!==void 0?[z(t.lng,e),z(t.lat,e),z(t.alt,e)]:[z(t.lng,e),z(t.lat,e)]}function Ln(t,e,n,i){for(var o=[],r=0,a=t.length;r<a;r++)o.push(e?Ln(t[r],Wt(t[r])?0:e-1,n,i):ci(t[r],i));return!e&&n&&o.length>0&&o.push(o[0].slice()),o}function be(t,e){return t.feature?l({},t.feature,{geometry:e}):En(e)}function En(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var hi={toGeoJSON:function(t){return be(this,{type:"Point",coordinates:ci(this.getLatLng(),t)})}};wn.include(hi),ai.include(hi),bn.include(hi),te.include({toGeoJSON:function(t){var e=!Wt(this._latlngs),n=Ln(this._latlngs,e?1:0,!1,t);return be(this,{type:(e?"Multi":"")+"LineString",coordinates:n})}}),we.include({toGeoJSON:function(t){var e=!Wt(this._latlngs),n=e&&!Wt(this._latlngs[0]),i=Ln(this._latlngs,n?2:e?1:0,!0,t);return e||(i=[i]),be(this,{type:(n?"Multi":"")+"Polygon",coordinates:i})}}),ye.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(n){e.push(n.toGeoJSON(t).geometry.coordinates)}),be(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var n=e==="GeometryCollection",i=[];return this.eachLayer(function(o){if(o.toGeoJSON){var r=o.toGeoJSON(t);if(n)i.push(r.geometry);else{var a=En(r);a.type==="FeatureCollection"?i.push.apply(i,a.features):i.push(a)}}}),n?be(this,{geometries:i,type:"GeometryCollection"}):{type:"FeatureCollection",features:i}}});function Ni(t,e){return new ee(t,e)}var Wo=Ni,In=Vt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,n){this._url=t,this._bounds=x(e),E(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(j(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ut(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&_e(this._image),this},bringToBack:function(){return this._map&&ve(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=x(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:it("img");if(j(e,"leaflet-image-layer"),this._zoomAnimated&&j(e,"leaflet-zoom-animated"),this.options.className&&j(e,this.options.className),e.onselectstart=C,e.onmousemove=C,e.onload=w(this.fire,this,"load"),e.onerror=w(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;le(this._image,n,e)},_reset:function(){var t=this._image,e=new Z(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=e.getSize();yt(t,e.min),t.style.width=n.x+"px",t.style.height=n.y+"px"},_updateOpacity:function(){Dt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Ho=function(t,e,n){return new In(t,e,n)},Di=In.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:it("video");if(j(e,"leaflet-image-layer"),this._zoomAnimated&&j(e,"leaflet-zoom-animated"),this.options.className&&j(e,this.options.className),e.onselectstart=C,e.onmousemove=C,e.onloadeddata=w(this.fire,this,"load"),t){for(var n=e.getElementsByTagName("source"),i=[],o=0;o<n.length;o++)i.push(n[o].src);this._url=n.length>0?i:[e.src];return}$(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var r=0;r<this._url.length;r++){var a=it("source");a.src=this._url[r],e.appendChild(a)}}});function Fo(t,e,n){return new Di(t,e,n)}var Wi=In.extend({_initImage:function(){var t=this._image=this._url;j(t,"leaflet-image-layer"),this._zoomAnimated&&j(t,"leaflet-zoom-animated"),this.options.className&&j(t,this.options.className),t.onselectstart=C,t.onmousemove=C}});function Go(t,e,n){return new Wi(t,e,n)}var Kt=Vt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof g||$(t))?(this._latlng=b(t),E(this,e)):(E(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Dt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Dt(this._container,1),this.bringToFront(),this.options.interactive&&(j(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Dt(this._container,0),this._removeTimeout=setTimeout(w(ut,void 0,this._container),200)):ut(this._container),this.options.interactive&&(_t(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=b(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&_e(this._container),this},bringToBack:function(){return this._map&&ve(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof Qt){e=null;var n=this._source._layers;for(var i in n)if(n[i]._map){e=n[i];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=k(this.options.offset),n=this._getAnchor();this._zoomAnimated?yt(this._container,t.add(n)):e=e.add(t).add(n);var i=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=i+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});Q.include({_initOverlay:function(t,e,n,i){var o=e;return o instanceof t||(o=new t(i).setContent(e)),n&&o.setLatLng(n),o}}),Vt.include({_initOverlay:function(t,e,n,i){var o=n;return o instanceof t?(E(o,i),o._source=this):(o=e&&!i?e:new t(i,this),o.setContent(n)),o}});var Cn=Kt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Kt.prototype.openOn.call(this,t)},onAdd:function(t){Kt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof re||this._source.on("preclick",he))},onRemove:function(t){Kt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof re||this._source.off("preclick",he))},getEvents:function(){var t=Kt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=it("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),n=this._wrapper=it("div",t+"-content-wrapper",e);if(this._contentNode=it("div",t+"-content",n),Ue(e),Qn(this._contentNode),Y(e,"contextmenu",he),this._tipContainer=it("div",t+"-tip-container",e),this._tip=it("div",t+"-tip",this._tipContainer),this.options.closeButton){var i=this._closeButton=it("a",t+"-close-button",e);i.setAttribute("role","button"),i.setAttribute("aria-label","Close popup"),i.href="#close",i.innerHTML='<span aria-hidden="true">&#215;</span>',Y(i,"click",function(o){Pt(o),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var n=t.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),e.width=n+1+"px",e.whiteSpace="",e.height="";var i=t.offsetHeight,o=this.options.maxHeight,r="leaflet-popup-scrolled";o&&i>o?(e.height=o+"px",j(t,r)):_t(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),n=this._getAnchor();yt(this._container,e.add(n))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(He(this._container,"marginBottom"),10)||0,n=this._container.offsetHeight+e,i=this._containerWidth,o=new B(this._containerLeft,-n-this._containerBottom);o._add(ce(this._container));var r=t.layerPointToContainerPoint(o),a=k(this.options.autoPanPadding),u=k(this.options.autoPanPaddingTopLeft||a),d=k(this.options.autoPanPaddingBottomRight||a),p=t.getSize(),I=0,N=0;r.x+i+d.x>p.x&&(I=r.x+i-p.x+d.x),r.x-I-u.x<0&&(I=r.x-u.x),r.y+n+d.y>p.y&&(N=r.y+n-p.y+d.y),r.y-N-u.y<0&&(N=r.y-u.y),(I||N)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([I,N]))}},_getAnchor:function(){return k(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Vo=function(t,e){return new Cn(t,e)};Q.mergeOptions({closePopupOnClick:!0}),Q.include({openPopup:function(t,e,n){return this._initOverlay(Cn,t,e,n).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),Vt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Cn,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof Qt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){ue(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof re)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Sn=Kt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Kt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Kt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Kt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=it("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,n,i=this._map,o=this._container,r=i.latLngToContainerPoint(i.getCenter()),a=i.layerPointToContainerPoint(t),u=this.options.direction,d=o.offsetWidth,p=o.offsetHeight,I=k(this.options.offset),N=this._getAnchor();u==="top"?(e=d/2,n=p):u==="bottom"?(e=d/2,n=0):u==="center"?(e=d/2,n=p/2):u==="right"?(e=0,n=p/2):u==="left"?(e=d,n=p/2):a.x<r.x?(u="right",e=0,n=p/2):(u="left",e=d+(I.x+N.x)*2,n=p/2),t=t.subtract(k(e,n,!0)).add(I).add(N),_t(o,"leaflet-tooltip-right"),_t(o,"leaflet-tooltip-left"),_t(o,"leaflet-tooltip-top"),_t(o,"leaflet-tooltip-bottom"),j(o,"leaflet-tooltip-"+u),yt(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Dt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return k(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Uo=function(t,e){return new Sn(t,e)};Q.include({openTooltip:function(t,e,n){return this._initOverlay(Sn,t,e,n).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),Vt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Sn,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[e](n),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof Qt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(Y(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),Y(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,n,i;this._tooltip.options.sticky&&t.originalEvent&&(n=this._map.mouseEventToContainerPoint(t.originalEvent),i=this._map.containerPointToLayerPoint(n),e=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(e)}});var Hi=xe.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),n=this.options;if(n.html instanceof Element?(pn(e),e.appendChild(n.html)):e.innerHTML=n.html!==!1?n.html:"",n.bgPos){var i=k(n.bgPos);e.style.backgroundPosition=-i.x+"px "+-i.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Yo(t){return new Hi(t)}xe.Default=je;var Xe=Vt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:M.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){E(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ut(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(_e(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ve(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=H(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof B?t:new B(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,n=-t(-1/0,1/0),i=0,o=e.length,r;i<o;i++)r=e[i].style.zIndex,e[i]!==this._container&&r&&(n=t(n,+r));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!M.ielt9){Dt(this._container,this.options.opacity);var t=+new Date,e=!1,n=!1;for(var i in this._tiles){var o=this._tiles[i];if(!(!o.current||!o.loaded)){var r=Math.min(1,(t-o.loaded)/200);Dt(o.el,r),r<1?e=!0:(o.active?n=!0:this._onOpaqueTile(o),o.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),e&&(y(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this))}},_onOpaqueTile:C,_initContainer:function(){this._container||(this._container=it("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===t?(this._levels[n].el.style.zIndex=e-Math.abs(t-n),this._onUpdateLevel(n)):(ut(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var i=this._levels[t],o=this._map;return i||(i=this._levels[t]={},i.el=it("div","leaflet-tile-container leaflet-zoom-animated",this._container),i.el.style.zIndex=e,i.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),i.zoom=t,this._setZoomTransform(i,o.getCenter(),o.getZoom()),C(i.el.offsetWidth),this._onCreateLevel(i)),this._level=i,i}},_onUpdateLevel:C,_onRemoveLevel:C,_onCreateLevel:C,_pruneTiles:function(){if(this._map){var t,e,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var i=e.coords;this._retainParent(i.x,i.y,i.z,i.z-5)||this._retainChildren(i.x,i.y,i.z,i.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ut(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,n,i){var o=Math.floor(t/2),r=Math.floor(e/2),a=n-1,u=new B(+o,+r);u.z=+a;var d=this._tileCoordsToKey(u),p=this._tiles[d];return p&&p.active?(p.retain=!0,!0):(p&&p.loaded&&(p.retain=!0),a>i?this._retainParent(o,r,a,i):!1)},_retainChildren:function(t,e,n,i){for(var o=2*t;o<2*t+2;o++)for(var r=2*e;r<2*e+2;r++){var a=new B(o,r);a.z=n+1;var u=this._tileCoordsToKey(a),d=this._tiles[u];if(d&&d.active){d.retain=!0;continue}else d&&d.loaded&&(d.retain=!0);n+1<i&&this._retainChildren(o,r,n+1,i)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,n,i){var o=Math.round(e);this.options.maxZoom!==void 0&&o>this.options.maxZoom||this.options.minZoom!==void 0&&o<this.options.minZoom?o=void 0:o=this._clampZoom(o);var r=this.options.updateWhenZooming&&o!==this._tileZoom;(!i||r)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),o!==void 0&&this._update(t),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var n in this._levels)this._setZoomTransform(this._levels[n],t,e)},_setZoomTransform:function(t,e,n){var i=this._map.getZoomScale(n,t.zoom),o=t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e,n)).round();M.any3d?le(t.el,o,i):yt(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,n=this._tileSize=this.getTileSize(),i=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],i).x/n.x),Math.ceil(t.project([0,e.wrapLng[1]],i).x/n.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],i).y/n.x),Math.ceil(t.project([e.wrapLat[1],0],i).y/n.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,n=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),i=e.getZoomScale(n,this._tileZoom),o=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(i*2);return new Z(o.subtract(r),o.add(r))},_update:function(t){var e=this._map;if(e){var n=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var i=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(i),r=o.getCenter(),a=[],u=this.options.keepBuffer,d=new Z(o.getBottomLeft().subtract([u,-u]),o.getTopRight().add([u,-u]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var p in this._tiles){var I=this._tiles[p].coords;(I.z!==this._tileZoom||!d.contains(new B(I.x,I.y)))&&(this._tiles[p].current=!1)}if(Math.abs(n-this._tileZoom)>1){this._setView(t,n);return}for(var N=o.min.y;N<=o.max.y;N++)for(var X=o.min.x;X<=o.max.x;X++){var Ct=new B(X,N);if(Ct.z=this._tileZoom,!!this._isValidTile(Ct)){var bt=this._tiles[this._tileCoordsToKey(Ct)];bt?bt.current=!0:a.push(Ct)}}if(a.sort(function(At,Pe){return At.distanceTo(r)-Pe.distanceTo(r)}),a.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ht=document.createDocumentFragment();for(X=0;X<a.length;X++)this._addTile(a[X],Ht);this._level.el.appendChild(Ht)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var n=this._globalTileRange;if(!e.wrapLng&&(t.x<n.min.x||t.x>n.max.x)||!e.wrapLat&&(t.y<n.min.y||t.y>n.max.y))return!1}if(!this.options.bounds)return!0;var i=this._tileCoordsToBounds(t);return x(this.options.bounds).overlaps(i)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,n=this.getTileSize(),i=t.scaleBy(n),o=i.add(n),r=e.unproject(i,t.z),a=e.unproject(o,t.z);return[r,a]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),n=new ot(e[0],e[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),n=new B(+e[0],+e[1]);return n.z=+e[2],n},_removeTile:function(t){var e=this._tiles[t];e&&(ut(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){j(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=C,t.onmousemove=C,M.ielt9&&this.options.opacity<1&&Dt(t,this.options.opacity)},_addTile:function(t,e){var n=this._getTilePos(t),i=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),w(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&R(w(this._tileReady,this,t,null,o)),yt(o,n),this._tiles[i]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,n){e&&this.fire("tileerror",{error:e,tile:n,coords:t});var i=this._tileCoordsToKey(t);n=this._tiles[i],n&&(n.loaded=+new Date,this._map._fadeAnimated?(Dt(n.el,0),y(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),e||(j(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),M.ielt9||!this._map._fadeAnimated?R(this._pruneTiles,this):setTimeout(w(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new B(this._wrapX?O(t.x,this._wrapX):t.x,this._wrapY?O(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new Z(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function qo(t){return new Xe(t)}var Te=Xe.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=E(this,e),e.detectRetina&&M.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var n=document.createElement("img");return Y(n,"load",w(this._tileOnLoad,this,e,n)),Y(n,"error",w(this._tileOnError,this,e,n)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(n.referrerPolicy=this.options.referrerPolicy),n.alt="",n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:M.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return et(this._url,l(e,this.options))},_tileOnLoad:function(t,e){M.ielt9?setTimeout(w(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,n){var i=this.options.errorTileUrl;i&&e.getAttribute("src")!==i&&(e.src=i),t(n,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,n=this.options.zoomReverse,i=this.options.zoomOffset;return n&&(t=e-t),t+i},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=C,e.onerror=C,!e.complete)){e.src=dt;var n=this._tiles[t].coords;ut(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:n})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",dt),Xe.prototype._removeTile.call(this,t)},_tileReady:function(t,e,n){if(!(!this._map||n&&n.getAttribute("src")===dt))return Xe.prototype._tileReady.call(this,t,e,n)}});function Fi(t,e){return new Te(t,e)}var Gi=Te.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=l({},this.defaultWmsParams);for(var i in e)i in this.options||(n[i]=e[i]);e=E(this,e);var o=e.detectRetina&&M.retina?2:1,r=this.getTileSize();n.width=r.x*o,n.height=r.y*o,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Te.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),n=this._crs,i=nt(n.project(e[0]),n.project(e[1])),o=i.min,r=i.max,a=(this._wmsVersion>=1.3&&this._crs===Ai?[o.y,o.x,r.y,r.x]:[o.x,o.y,r.x,r.y]).join(","),u=Te.prototype.getTileUrl.call(this,t);return u+ht(this.wmsParams,u,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+a},setParams:function(t,e){return l(this.wmsParams,t),e||this.redraw(),this}});function jo(t,e){return new Gi(t,e)}Te.WMS=Gi,Fi.wms=jo;var ne=Vt.extend({options:{padding:.1},initialize:function(t){E(this,t),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),j(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var n=this._map.getZoomScale(e,this._zoom),i=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),r=i.multiplyBy(-n).add(o).subtract(this._map._getNewPixelOrigin(t,e));M.any3d?le(this._container,r,n):yt(this._container,r)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),n=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new Z(n,n.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Vi=ne.extend({options:{tolerance:0},getEvents:function(){var t=ne.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ne.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");Y(t,"mousemove",this._onMouseMove,this),Y(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Y(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){y(this._redrawRequest),delete this._ctx,ut(this._container),ct(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ne.prototype._update.call(this);var t=this._bounds,e=this._container,n=t.getSize(),i=M.retina?2:1;yt(e,t.min),e.width=i*n.x,e.height=i*n.y,e.style.width=n.x+"px",e.style.height=n.y+"px",M.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){ne.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[h(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,n=e.next,i=e.prev;n?n.prev=i:this._drawLast=i,i?i.next=n:this._drawFirst=n,delete t._order,delete this._layers[h(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),n=[],i,o;for(o=0;o<e.length;o++){if(i=Number(e[o]),isNaN(i))return;n.push(i)}t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||R(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Z,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var n=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var i=this._drawFirst;i;i=i.next)t=i.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var n,i,o,r,a=t._parts,u=a.length,d=this._ctx;if(u){for(d.beginPath(),n=0;n<u;n++){for(i=0,o=a[n].length;i<o;i++)r=a[n][i],d[i?"lineTo":"moveTo"](r.x,r.y);e&&d.closePath()}this._fillStroke(d,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,n=this._ctx,i=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||i)/i;o!==1&&(n.save(),n.scale(1,o)),n.beginPath(),n.arc(e.x,e.y/o,i,0,Math.PI*2,!1),o!==1&&n.restore(),this._fillStroke(n,t)}},_fillStroke:function(t,e){var n=e.options;n.fill&&(t.globalAlpha=n.fillOpacity,t.fillStyle=n.fillColor||n.color,t.fill(n.fillRule||"evenodd")),n.stroke&&n.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=n.opacity,t.lineWidth=n.weight,t.strokeStyle=n.color,t.lineCap=n.lineCap,t.lineJoin=n.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),n,i,o=this._drawFirst;o;o=o.next)n=o.layer,n.options.interactive&&n._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(n))&&(i=n);this._fireEvent(i?[i]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(_t(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var n,i,o=this._drawFirst;o;o=o.next)n=o.layer,n.options.interactive&&n._containsPoint(e)&&(i=n);i!==this._hoveredLayer&&(this._handleMouseOut(t),i&&(j(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseover"),this._hoveredLayer=i)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(w(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,n){this._map._fireDOMEvent(e,n||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var n=e.next,i=e.prev;if(n)n.prev=i;else return;i?i.next=n:n&&(this._drawFirst=n),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var n=e.next,i=e.prev;if(i)i.next=n;else return;n?n.prev=i:i&&(this._drawLast=i),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function Ui(t){return M.canvas?new Vi(t):null}var Ke=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Xo={_initContainer:function(){this._container=it("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ne.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Ke("shape");j(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Ke("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;ut(e),t.removeInteractiveTarget(e),delete this._layers[h(t)]},_updateStyle:function(t){var e=t._stroke,n=t._fill,i=t.options,o=t._container;o.stroked=!!i.stroke,o.filled=!!i.fill,i.stroke?(e||(e=t._stroke=Ke("stroke")),o.appendChild(e),e.weight=i.weight+"px",e.color=i.color,e.opacity=i.opacity,i.dashArray?e.dashStyle=$(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=i.lineCap.replace("butt","flat"),e.joinstyle=i.lineJoin):e&&(o.removeChild(e),t._stroke=null),i.fill?(n||(n=t._fill=Ke("fill")),o.appendChild(n),n.color=i.fillColor||i.color,n.opacity=i.fillOpacity):n&&(o.removeChild(n),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),n=Math.round(t._radius),i=Math.round(t._radiusY||n);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+n+","+i+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){_e(t._container)},_bringToBack:function(t){ve(t._container)}},Mn=M.vml?Ke:Ie,Je=ne.extend({_initContainer:function(){this._container=Mn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Mn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ut(this._container),ct(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ne.prototype._update.call(this);var t=this._bounds,e=t.getSize(),n=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,n.setAttribute("width",e.x),n.setAttribute("height",e.y)),yt(n,t.min),n.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=Mn("path");t.options.className&&j(e,t.options.className),t.options.interactive&&j(e,"leaflet-interactive"),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ut(t._path),t.removeInteractiveTarget(t._path),delete this._layers[h(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,n=t.options;e&&(n.stroke?(e.setAttribute("stroke",n.color),e.setAttribute("stroke-opacity",n.opacity),e.setAttribute("stroke-width",n.weight),e.setAttribute("stroke-linecap",n.lineCap),e.setAttribute("stroke-linejoin",n.lineJoin),n.dashArray?e.setAttribute("stroke-dasharray",n.dashArray):e.removeAttribute("stroke-dasharray"),n.dashOffset?e.setAttribute("stroke-dashoffset",n.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),n.fill?(e.setAttribute("fill",n.fillColor||n.color),e.setAttribute("fill-opacity",n.fillOpacity),e.setAttribute("fill-rule",n.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Ce(t._parts,e))},_updateCircle:function(t){var e=t._point,n=Math.max(Math.round(t._radius),1),i=Math.max(Math.round(t._radiusY),1)||n,o="a"+n+","+i+" 0 1,0 ",r=t._empty()?"M0 0":"M"+(e.x-n)+","+e.y+o+n*2+",0 "+o+-n*2+",0 ";this._setPath(t,r)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){_e(t._path)},_bringToBack:function(t){ve(t._path)}});M.vml&&Je.include(Xo);function Yi(t){return M.svg||M.vml?new Je(t):null}Q.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&Ui(t)||Yi(t)}});var qi=we.extend({initialize:function(t,e){we.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=x(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Ko(t,e){return new qi(t,e)}Je.create=Mn,Je.pointsToPath=Ce,ee.geometryToLayer=Tn,ee.coordsToLatLng=li,ee.coordsToLatLngs=Pn,ee.latLngToCoords=ci,ee.latLngsToCoords=Ln,ee.getFeature=be,ee.asFeature=En,Q.mergeOptions({boxZoom:!0});var ji=Xt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){Y(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ct(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ut(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Fe(),Un(),this._startPoint=this._map.mouseEventToContainerPoint(t),Y(document,{contextmenu:ue,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=it("div","leaflet-zoom-box",this._container),j(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new Z(this._point,this._startPoint),n=e.getSize();yt(this._box,e.min),this._box.style.width=n.x+"px",this._box.style.height=n.y+"px"},_finish:function(){this._moved&&(ut(this._box),_t(this._container,"leaflet-crosshair")),Ge(),Yn(),ct(document,{contextmenu:ue,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(w(this._resetState,this),0);var e=new ot(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Q.addInitHook("addHandler","boxZoom",ji),Q.mergeOptions({doubleClickZoom:!0});var Xi=Xt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,n=e.getZoom(),i=e.options.zoomDelta,o=t.originalEvent.shiftKey?n-i:n+i;e.options.doubleClickZoom==="center"?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});Q.addInitHook("addHandler","doubleClickZoom",Xi),Q.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ki=Xt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new oe(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}j(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){_t(this._map._container,"leaflet-grab"),_t(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=x(this._map.options.maxBounds);this._offsetLimit=nt(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),n=this._initialWorldOffset,i=this._draggable._newPos.x,o=(i-e+n)%t+e-n,r=(i+e+n)%t-e-n,a=Math.abs(o+n)<Math.abs(r+n)?o:r;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,n=e.options,i=!n.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),i)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,a=n.easeLinearity,u=o.multiplyBy(a/r),d=u.distanceTo([0,0]),p=Math.min(n.inertiaMaxSpeed,d),I=u.multiplyBy(p/d),N=p/(n.inertiaDeceleration*a),X=I.multiplyBy(-N/2).round();!X.x&&!X.y?e.fire("moveend"):(X=e._limitOffset(X,e.options.maxBounds),R(function(){e.panBy(X,{duration:N,easeLinearity:a,noMoveStart:!0,animate:!0})}))}}});Q.addInitHook("addHandler","dragging",Ki),Q.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Ji=Xt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),Y(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ct(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,n=t.scrollTop||e.scrollTop,i=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(i,n)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},n=this.keyCodes,i,o;for(i=0,o=n.left.length;i<o;i++)e[n.left[i]]=[-1*t,0];for(i=0,o=n.right.length;i<o;i++)e[n.right[i]]=[t,0];for(i=0,o=n.down.length;i<o;i++)e[n.down[i]]=[0,t];for(i=0,o=n.up.length;i<o;i++)e[n.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},n=this.keyCodes,i,o;for(i=0,o=n.zoomIn.length;i<o;i++)e[n.zoomIn[i]]=t;for(i=0,o=n.zoomOut.length;i<o;i++)e[n.zoomOut[i]]=-t},_addHooks:function(){Y(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ct(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,n=this._map,i;if(e in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress)if(i=this._panKeys[e],t.shiftKey&&(i=k(i).multiplyBy(3)),n.options.maxBounds&&(i=n._limitOffset(k(i),n.options.maxBounds)),n.options.worldCopyJump){var o=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(i)));n.panTo(o)}else n.panBy(i)}else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&n._popup&&n._popup.options.closeOnEscapeKey)n.closePopup();else return;ue(t)}}});Q.addInitHook("addHandler","keyboard",Ji),Q.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var $i=Xt.extend({addHooks:function(){Y(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ct(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=bi(t),n=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(w(this._performZoom,this),i),ue(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),n=this._map.options.zoomSnap||0;t._stop();var i=this._delta/(this._map.options.wheelPxPerZoomLevel*4),o=4*Math.log(2/(1+Math.exp(-Math.abs(i))))/Math.LN2,r=n?Math.ceil(o/n)*n:o,a=t._limitZoom(e+(this._delta>0?r:-r))-e;this._delta=0,this._startTime=null,a&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+a):t.setZoomAround(this._lastMousePos,e+a))}});Q.addInitHook("addHandler","scrollWheelZoom",$i);var Jo=600;Q.mergeOptions({tapHold:M.touchNative&&M.safari&&M.mobile,tapTolerance:15});var Qi=Xt.extend({addHooks:function(){Y(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ct(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new B(e.clientX,e.clientY),this._holdTimeout=setTimeout(w(function(){this._cancel(),this._isTapValid()&&(Y(document,"touchend",Pt),Y(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),Jo),Y(document,"touchend touchcancel contextmenu",this._cancel,this),Y(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){ct(document,"touchend",Pt),ct(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),ct(document,"touchend touchcancel contextmenu",this._cancel,this),ct(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new B(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var n=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});n._simulated=!0,e.target.dispatchEvent(n)}});Q.addInitHook("addHandler","tapHold",Qi),Q.mergeOptions({touchZoom:M.touch,bounceAtZoomLimits:!0});var to=Xt.extend({addHooks:function(){j(this._map._container,"leaflet-touch-zoom"),Y(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){_t(this._map._container,"leaflet-touch-zoom"),ct(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var n=e.mouseEventToContainerPoint(t.touches[0]),i=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(n.add(i)._divideBy(2))),this._startDist=n.distanceTo(i),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),Y(document,"touchmove",this._onTouchMove,this),Y(document,"touchend touchcancel",this._onTouchEnd,this),Pt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,n=e.mouseEventToContainerPoint(t.touches[0]),i=e.mouseEventToContainerPoint(t.touches[1]),o=n.distanceTo(i)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,o===1)return}else{var r=n._add(i)._divideBy(2)._subtract(this._centerPoint);if(o===1&&r.x===0&&r.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),y(this._animRequest);var a=w(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=R(a,this,!0),Pt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,y(this._animRequest),ct(document,"touchmove",this._onTouchMove,this),ct(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Q.addInitHook("addHandler","touchZoom",to),Q.BoxZoom=ji,Q.DoubleClickZoom=Xi,Q.Drag=Ki,Q.Keyboard=Ji,Q.ScrollWheelZoom=$i,Q.TapHold=Qi,Q.TouchZoom=to,c.Bounds=Z,c.Browser=M,c.CRS=lt,c.Canvas=Vi,c.Circle=ai,c.CircleMarker=bn,c.Class=D,c.Control=Gt,c.DivIcon=Hi,c.DivOverlay=Kt,c.DomEvent=po,c.DomUtil=fo,c.Draggable=oe,c.Evented=at,c.FeatureGroup=Qt,c.GeoJSON=ee,c.GridLayer=Xe,c.Handler=Xt,c.Icon=xe,c.ImageOverlay=In,c.LatLng=g,c.LatLngBounds=ot,c.Layer=Vt,c.LayerGroup=ye,c.LineUtil=Co,c.Map=Q,c.Marker=wn,c.Mixin=bo,c.Path=re,c.Point=B,c.PolyUtil=To,c.Polygon=we,c.Polyline=te,c.Popup=Cn,c.PosAnimation=Ti,c.Projection=So,c.Rectangle=qi,c.Renderer=ne,c.SVG=Je,c.SVGOverlay=Wi,c.TileLayer=Te,c.Tooltip=Sn,c.Transformation=Ot,c.Util=U,c.VideoOverlay=Di,c.bind=w,c.bounds=nt,c.canvas=Ui,c.circle=Zo,c.circleMarker=Ro,c.control=Ye,c.divIcon=Yo,c.extend=l,c.featureGroup=Oo,c.geoJSON=Ni,c.geoJson=Wo,c.gridLayer=qo,c.icon=zo,c.imageOverlay=Ho,c.latLng=b,c.latLngBounds=x,c.layerGroup=Bo,c.map=go,c.marker=Ao,c.point=k,c.polygon=Do,c.polyline=No,c.popup=Vo,c.rectangle=Ko,c.setOptions=E,c.stamp=h,c.svg=Yi,c.svgOverlay=Go,c.tileLayer=Fi,c.tooltip=Uo,c.transformation=Zt,c.version=_,c.videoOverlay=Fo;var $o=window.L;c.noConflict=function(){return window.L=$o,this},window.L=c}))})($e,$e.exports)),$e.exports}var hr=cr();const Bn=ar(hr);function ur(){const s=document.getElementById("map");if(!s)throw new Error("Map container #map not found");const f=Bn.map(s,{center:[0,0],zoom:16,zoomControl:!0,attributionControl:!0});Bn.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:20,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(f);let c=null;function _(){const V=document.querySelectorAll(".leaflet-overlay-pane .leaflet-interactive")||[];return Array.from(V)}function l(V={}){return{color:V.overlayStrokeColor||"#22c55e",weight:V.overlayStrokeWidth||2,opacity:.9,fillColor:V.overlayBackgroundColor||"#000000",fillOpacity:(V.overlayOpacity||0)/100}}function S(V,et,$){c&&f.removeLayer(c);const Et=l($);c=Bn.geoJSON(V,{style:Et}).addTo(f),$&&setTimeout(()=>{const dt=_();w(dt,$)},10);try{if(et&&Array.isArray(et)&&et.length===4){const[dt,St,Mt,kt]=et,v=Bn.latLngBounds([dt,Mt],[St,kt]);f.fitBounds(v,{padding:[40,40]})}else{const dt=c.getBounds();dt&&dt.isValid()&&f.fitBounds(dt,{padding:[40,40]})}}catch(dt){console.error("Failed to fit map to venue bounds",dt)}}function w(V,et){et&&V.forEach($=>{const Et=et.overlayShadowBlur||0,dt=et.overlayGlowIntensity||0,St=et.overlayBorderRadius||0;let Mt=[];if(Et>0||dt>0){const kt=Et*.5,v=Et,P=et.overlayGlowColor||"#000000",R=dt/100,y=parseInt(P.slice(1,3),16),U=parseInt(P.slice(3,5),16),D=parseInt(P.slice(5,7),16);Mt.push(`drop-shadow(${kt}px ${v}px ${Et}px rgba(${y}, ${U}, ${D}, ${R}))`)}if(St>0){const kt=Math.min(St/5,4),v=Math.max(20-St/2.5,1);Mt.push(`blur(${kt}px) contrast(${v})`)}else Mt.push("blur(0.5px) contrast(20)");$.style.filter=Mt.join(" ")||"none"})}function G(V){if(!c)return;const et=l(V);c.setStyle(et);const $=_();w($,V)}function h(V,et){return f.latLngToContainerPoint([V,et])}function H(V,et){const $=f.containerPointToLatLng([V,et]);return{lat:$.lat,lng:$.lng}}function O(){return f.getZoom()}function C(){const V=f.getSize();return{width:V.x,height:V.y}}function z(V){const et=f.getZoom();return f.getZoomScale(et,V)}function F(V,et){f.on(V,et)}function tt(V,et){f.off(V,et)}function E(){f.invalidateSize()}function ht(){if(c)try{const V=c.getBounds();V&&V.isValid()&&f.fitBounds(V,{padding:[40,40]})}catch(V){console.error("Failed to fit map to venue bounds",V)}}return window.addEventListener("resize",()=>{E()}),{map:f,setVenueGeoJSON:S,updateVenueLayerStyle:G,latLngToContainerPoint:h,containerPointToLatLng:H,getZoom:O,getSize:C,getZoomScale:z,on:F,off:tt,invalidateSize:E,fitToVenue:ht}}const On=18;function ao(s,f){return!f||f<=0?s:{x:Math.round(s.x/f)*f,y:Math.round(s.y/f)*f}}function Qe(s,f){const c=s.latLngToContainerPoint(f.lat,f.lng),_=s.getZoomScale(On),l=f.width*_,S=f.height*_;return{cx:c.x,cy:c.y,width:l,height:S}}function dr(s,f,c,_){const l=Qe(s,f),S=(f.rotation||0)*Math.PI/180,w=c-l.cx,G=_-l.cy,h=Math.cos(-S),H=Math.sin(-S),O=w*h-G*H,C=w*H+G*h,z=l.width/2,F=l.height/2;if(f.type==="ellipse"){const tt=O/z,E=C/F;return tt*tt+E*E<=1}if(f.type==="polygon"&&Array.isArray(f.points)&&f.points.length>=3){const tt=f.points.map(E=>s.latLngToContainerPoint(E.lat,E.lng));return fr({x:c,y:_},tt)}return Math.abs(O)<=z&&Math.abs(C)<=F}function fr(s,f){let c=!1;for(let _=0,l=f.length-1;_<f.length;l=_++){const S=f[_].x,w=f[_].y,G=f[l].x,h=f[l].y;w>s.y!=h>s.y&&s.x<(G-S)*(s.y-w)/(h-w+Number.EPSILON)+S&&(c=!c)}return c}function mr(s,f){const c=document.getElementById("map-canvas"),_=document.getElementById("map-container");if(!c||!_)throw new Error("Canvas or map container not found");const l=c.getContext("2d"),S=new Map;let w=null;function G(v,P=100){const R=v.replace("#",""),y=parseInt(R.substring(0,2),16),U=parseInt(R.substring(2,4),16),D=parseInt(R.substring(4,6),16),q=Math.max(0,Math.min(100,P))/100;return`rgba(${y}, ${U}, ${D}, ${q})`}const h={dragging:!1,dragOffset:{x:0,y:0},activeElementId:null,mode:"idle",lastPointer:{x:0,y:0}};h.resizing=!1,h.resizeHandle=null,h.startPointer=null,h.startWidth=0,h.startHeight=0,h.drawing=!1,h.drawPoints=[];let H=f.settings.interactionMode||"edit";function O(){H==="navigate"?(c.style.pointerEvents="none",c.classList.remove("grabbing"),c.classList.remove("pointer")):c.style.pointerEvents="auto"}function C(v){H=v==="navigate"?"navigate":"edit",f.settings.interactionMode=H,O()}function z(){const v=_.getBoundingClientRect(),P=window.devicePixelRatio||1;c.width=v.width*P,c.height=v.height*P,c.style.width=`${v.width}px`,c.style.height=`${v.height}px`,l.setTransform(P,0,0,P,0,0)}function F(){if(!f.settings.showGrid)return;const{gridSize:v}=f.settings;if(!v||v<=0)return;const{width:P,height:R}=s.getSize();l.save(),l.strokeStyle="rgba(148, 163, 184, 0.2)",l.lineWidth=1;for(let y=0;y<P;y+=v)l.beginPath(),l.moveTo(y,0),l.lineTo(y,R),l.stroke();for(let y=0;y<R;y+=v)l.beginPath(),l.moveTo(0,y),l.lineTo(P,y),l.stroke();l.restore()}function tt(v){const P=Qe(s,v),R=(v.rotation||0)*Math.PI/180;l.save(),l.translate(P.cx,P.cy),l.rotate(R);const y=v.color||"#22c55e",U=v.textColor||"#0f172a",D=v.borderColor||"#0f172a",q=v.borderWidth||1.5,W=v.colorOpacity!==void 0?v.colorOpacity:100,at=v.showFill!==void 0?v.showFill:!0,B=v.showBorder!==void 0?v.showBorder:!0,rt=Math.max(0,Math.min(v.radius||0,Math.min(P.width,P.height)/2));l.shadowColor=y,l.shadowBlur=8,l.shadowOffsetX=0,l.shadowOffsetY=0,l.fillStyle=G(y,W),l.strokeStyle=D,l.lineWidth=q;const k=()=>{at&&l.fill(),B&&l.stroke()};if(v.type==="image"){const x=P.width/2,g=P.height/2;if(l.beginPath(),rt>0){const b=rt;l.moveTo(-x+b,-g),l.lineTo(x-b,-g),l.quadraticCurveTo(x,-g,x,-g+b),l.lineTo(x,g-b),l.quadraticCurveTo(x,g,x-b,g),l.lineTo(-x+b,g),l.quadraticCurveTo(-x,g,-x,g-b),l.lineTo(-x,-g+b),l.quadraticCurveTo(-x,-g,-x+b,-g)}else l.rect(-x,-g,P.width,P.height);k()}else if(v.type==="ellipse")l.beginPath(),l.ellipse(0,0,P.width/2,P.height/2,0,0,Math.PI*2),k();else if(v.type==="polygon"&&Array.isArray(v.points)&&v.points.length>=3){const x=v.points.map(g=>s.latLngToContainerPoint(g.lat,g.lng));l.setTransform(1,0,0,1,0,0),l.beginPath(),x.forEach((g,b)=>{b===0?l.moveTo(g.x,g.y):l.lineTo(g.x,g.y)}),l.closePath(),k()}else{const x=P.width/2,g=P.height/2;if(l.beginPath(),rt>0){const b=rt;l.moveTo(-x+b,-g),l.lineTo(x-b,-g),l.quadraticCurveTo(x,-g,x,-g+b),l.lineTo(x,g-b),l.quadraticCurveTo(x,g,x-b,g),l.lineTo(-x+b,g),l.quadraticCurveTo(-x,g,-x,g-b),l.lineTo(-x,-g+b),l.quadraticCurveTo(-x,-g,-x+b,-g)}else l.rect(-x,-g,P.width,P.height);k()}l.shadowColor="transparent",l.shadowBlur=0,v.locked&&(l.fillStyle="rgba(15, 23, 42, 0.35)",l.fillRect(-P.width/2,-P.height/2,P.width,P.height));const Z=v.name||v.tier||v.type,nt=window.devicePixelRatio||1,ot=x=>{if(!x||!x.width||!x.height)return;const g=Math.max(4,Math.min(12,Math.min(P.width,P.height)*.08)),b=P.width-g*2,lt=P.height-g*2,ft=x.width/x.height,Bt=b/lt;let Rt=b,Ot=lt;ft>Bt?Ot=b/ft:Rt=lt*ft;const Zt=-Rt/2,zt=-Ot/2;try{l.drawImage(x,Zt,zt,Rt,Ot)}catch{}};if(v.logo){let x=S.get(v.logo);if(!x){const g=new Image;g.crossOrigin="Anonymous",x={img:g,loaded:!1},g.onload=()=>{x.loaded=!0,E()},g.onerror=()=>{x.loaded=!1},x.img.src=v.logo,S.set(v.logo,x)}if(x&&x.loaded)l.save(),l.translate(0,0),ot(x.img),l.restore();else if(v.type!=="image"&&Z){l.fillStyle=U,l.font=`${Math.max(10,Math.floor(P.height/5))}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,l.textAlign="center",l.textBaseline="middle";const g=Z.length>24?`${Z.slice(0,21)}…`:Z;l.fillText(g,0,0,Math.max(24,P.width-8))}}else if(Z){const x=`svg:${Z}:${Math.round(P.width*nt)}x${Math.round(P.height*nt)}:${U}`;let g=S.get(x);if(!g){const b=Math.max(64,Math.round(P.width*nt)),lt=Math.max(24,Math.round(P.height*nt)),ft=Math.max(12,Math.round(lt*.36)),Bt=String(Z).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Rt=`<?xml version="1.0" encoding="utf-8"?>
<svg xmlns='http://www.w3.org/2000/svg' width='${b}' height='${lt}' viewBox='0 0 ${b} ${lt}'>
  <style>
    .t{fill:${U}; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-weight: 600; font-size:${ft}px}
  </style>
  <rect x='0' y='0' width='100%' height='100%' fill='none'/>
  <text x='50%' y='50%' text-anchor='middle' dominant-baseline='central' class='t'>${Bt}</text>
</svg>`,Ot=new Image,Zt="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(Rt);g={img:Ot,loaded:!1},Ot.onload=()=>{g.loaded=!0,E()},Ot.onerror=()=>{g.loaded=!1},Ot.src=Zt,S.set(x,g)}if(g&&g.loaded)l.save(),l.translate(0,0),ot(g.img),l.restore();else{l.fillStyle=U,l.font=`${Math.max(10,Math.floor(P.height/5))}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,l.textAlign="center",l.textBaseline="middle";const b=Z.length>24?`${Z.slice(0,21)}…`:Z;l.fillText(b,0,0,Math.max(24,P.width-8))}}l.restore()}function E(){const{width:v,height:P}=s.getSize();l.clearRect(0,0,v,P),F(),[...f.layout].sort((y,U)=>(y.zIndex||0)-(U.zIndex||0)).forEach(y=>{tt(y),y.id===f.selectedElementId&&ht(y)}),h.drawing&&h.drawPoints&&h.drawPoints.length>0&&(l.save(),l.strokeStyle="rgba(96,165,250,0.9)",l.fillStyle="rgba(96,165,250,0.2)",l.lineWidth=2,l.beginPath(),h.drawPoints.forEach((y,U)=>{U===0?l.moveTo(y.x,y.y):l.lineTo(y.x,y.y)}),l.stroke(),l.restore())}function ht(v){const P=Qe(s,v),R=(v.rotation||0)*Math.PI/180;l.save(),l.translate(P.cx,P.cy),l.rotate(R),l.strokeStyle="#fbbf24",l.lineWidth=1.5,l.setLineDash([4,4]),l.strokeRect(-P.width/2,-P.height/2,P.width,P.height);const y=8,U=P.width/2,D=P.height/2,q=y/2;l.setLineDash([]),l.fillStyle="#0f172a",l.strokeStyle="#60a5fa",l.fillRect(-U-q,-D-q,y,y),l.strokeRect(-U-q,-D-q,y,y),l.fillRect(U-q,-D-q,y,y),l.strokeRect(U-q,-D-q,y,y),l.fillRect(-U-q,D-q,y,y),l.strokeRect(-U-q,D-q,y,y),l.fillRect(U-q,D-q,y,y),l.strokeRect(U-q,D-q,y,y);const W=-D-18;l.beginPath(),l.arc(0,W,6,0,Math.PI*2),l.fill(),l.stroke(),l.restore()}function V(v,P,R){const y=Qe(s,v),U=y.width/2,D=y.height/2,q=(v.rotation||0)*Math.PI/180,W=Math.cos(q),at=Math.sin(q),B=(g,b)=>{const lt=g*W-b*at,ft=g*at+b*W;return{x:y.cx+lt,y:y.cy+ft}},rt={nw:{x:-U,y:-D},ne:{x:U,y:-D},sw:{x:-U,y:D},se:{x:U,y:D}},k=12;for(const g of Object.keys(rt)){const b=rt[g],lt=B(b.x,b.y),ft=P-lt.x,Bt=R-lt.y;if(ft*ft+Bt*Bt<=k*k)return g}const Z={x:0,y:-D-18},nt=B(Z.x,Z.y),ot=P-nt.x,x=R-nt.y;return ot*ot+x*x<=100?"rotate":null}function et(){E(),w=window.requestAnimationFrame(et)}function $(){z(),w==null&&(w=window.requestAnimationFrame(et));try{s&&s.map&&typeof s.map.whenReady=="function"&&s.map.whenReady(()=>{setTimeout(()=>{z(),E()},50)})}catch{}try{s&&s.map&&typeof s.map.on=="function"&&s.map.on("moveend zoomend",()=>{setTimeout(()=>{z(),E()},40)})}catch{}}function Et(){w!=null&&(window.cancelAnimationFrame(w),w=null)}function dt(v,P){const R=[...f.layout].filter(y=>!y.hidden).sort((y,U)=>(U.zIndex||0)-(y.zIndex||0));for(const y of R)if(dr(s,y,v,P))return y;return null}function St(v){if(f.mode!=="mapping"||H!=="edit")return;const P=c.getBoundingClientRect(),R=v.clientX-P.left,y=v.clientY-P.top;if(h.lastPointer={x:R,y},f.currentTool==="free-draw"){h.drawing=!0,h.drawPoints=[{x:R,y}];return}const U=[...f.layout].filter(W=>!W.hidden).sort((W,at)=>(at.zIndex||0)-(W.zIndex||0));let D=!1;for(const W of U){if(W.locked)continue;const at=V(W,R,y);if(at){f.selectedElementId=W.id;try{window.dispatchEvent(new CustomEvent("app-selection-changed",{detail:W.id}))}catch{}h.resizing=!0,h.resizeHandle=at,h.activeElementId=W.id,h.startPointer={x:R,y};const B=Qe(s,W);h.startWidth=B.width,h.startHeight=B.height;try{s.map.dragging.disable()}catch{}c.classList.add("grabbing");try{typeof v.pointerId=="number"&&c.setPointerCapture&&(c.setPointerCapture(v.pointerId),h.pointerId=v.pointerId)}catch{}E(),D=!0;break}}if(D)return;const q=dt(R,y);if(q&&!q.locked){f.selectedElementId=q.id;try{window.dispatchEvent(new CustomEvent("app-selection-changed",{detail:q.id}))}catch{}h.dragging=!0,h.mode="move",h.activeElementId=q.id;const W=s.latLngToContainerPoint(q.lat,q.lng);h.dragOffset={x:R-W.x,y:y-W.y},c.classList.add("grabbing");try{typeof v.pointerId=="number"&&c.setPointerCapture&&(c.setPointerCapture(v.pointerId),h.pointerId=v.pointerId)}catch{}}else{f.selectedElementId=null;try{window.dispatchEvent(new CustomEvent("app-selection-changed",{detail:null}))}catch{}h.dragging=!1,h.activeElementId=null}}function Mt(v){if(f.mode!=="mapping"||H!=="edit")return;if(h.drawing){const W=c.getBoundingClientRect(),at=v.clientX-W.left,B=v.clientY-W.top,rt=h.drawPoints[h.drawPoints.length-1],k=at-rt.x,Z=B-rt.y;Math.sqrt(k*k+Z*Z)>4&&h.drawPoints.push({x:at,y:B}),E();return}if(h.resizing){const W=c.getBoundingClientRect(),at=v.clientX-W.left,B=v.clientY-W.top,rt=f.layout.find(g=>g.id===h.activeElementId);if(!rt)return;const k=s.getZoomScale(rt.baseZoom||On),Z=at-h.startPointer.x,nt=B-h.startPointer.y;let ot=h.startWidth,x=h.startHeight;switch(h.resizeHandle){case"se":ot=Math.max(8,h.startWidth+Z),x=Math.max(8,h.startHeight+nt);break;case"sw":ot=Math.max(8,h.startWidth-Z),x=Math.max(8,h.startHeight+nt);break;case"ne":ot=Math.max(8,h.startWidth+Z),x=Math.max(8,h.startHeight-nt);break;case"nw":ot=Math.max(8,h.startWidth-Z),x=Math.max(8,h.startHeight-nt);break;case"rotate":{const g=s.latLngToContainerPoint(rt.lat,rt.lng),b=Math.atan2(B-g.y,at-g.x);rt.rotation=(b*180/Math.PI+90+360)%360,E();return}}rt.width=Math.max(4,ot/k),rt.height=Math.max(4,x/k),E();return}if(!h.dragging||h.mode!=="move")return;const P=c.getBoundingClientRect(),R=v.clientX-P.left,y=v.clientY-P.top;h.lastPointer={x:R,y};const U=f.layout.find(W=>W.id===h.activeElementId);if(!U||U.locked)return;let D={x:R-h.dragOffset.x,y:y-h.dragOffset.y};f.settings.snapToGrid&&(D=ao(D,f.settings.gridSize));const q=s.containerPointToLatLng(D.x,D.y);U.lat=q.lat,U.lng=q.lng}function kt(){if(h.dragging&&c.classList.remove("grabbing"),h.resizing){h.resizing=!1,h.resizeHandle=null,h.startPointer=null,h.startWidth=0,h.startHeight=0;try{s.map.dragging.enable()}catch{}c.classList.remove("grabbing");try{window.dispatchEvent(new CustomEvent("app-element-updated",{detail:{id:h.activeElementId}}))}catch{}}try{h.pointerId&&c.releasePointerCapture&&c.releasePointerCapture(h.pointerId)}catch{}h.pointerId=null,h.dragging=!1,h.mode="idle",h.activeElementId=null}return c.addEventListener("pointerdown",St),c.addEventListener("dblclick",v=>{if(!h.drawing)return;const P=h.drawPoints.map(R=>s.containerPointToLatLng(R.x,R.y));try{window.dispatchEvent(new CustomEvent("app-free-draw-complete",{detail:{points:P}}))}catch{}h.drawing=!1,h.drawPoints=[],E()}),window.addEventListener("pointermove",Mt),window.addEventListener("pointerup",kt),window.addEventListener("pointercancel",kt),window.addEventListener("resize",z),s.on("move zoom",z),O(),$(),{start:$,stop:Et,resize:z,findTopElementAt:dt,setInteractionMode:C,drawAll:E}}const pr=[{name:"Diamond",defaultWidth:80,defaultHeight:60,defaultColor:"#22c55e",defaultTextColor:"#0f172a"},{name:"Gold",defaultWidth:70,defaultHeight:55,defaultColor:"#eab308",defaultTextColor:"#0f172a"},{name:"Silver",defaultWidth:60,defaultHeight:50,defaultColor:"#38bdf8",defaultTextColor:"#0f172a"}];function gr(s,f){(!Array.isArray(s.tiers)||s.tiers.length===0)&&(s.tiers=[...pr]);function c(){return s.tiers}function _(h){return s.tiers.find(H=>H.name===h)||null}function l(){return s.tiers[0]}function S(h){s.tiers.some(O=>O.name.toLowerCase()===h.name.toLowerCase())||(s.tiers.push(h),f.saveToStorage())}function w(h){s.tiers=s.tiers.filter(H=>H.name!==h),f.saveToStorage()}function G(h,H){const O=s.tiers.findIndex(C=>C.name===h);O!==-1&&(s.tiers[O]={...s.tiers[O],...H},f.saveToStorage())}return{getTiers:c,getTierByName:_,getDefaultTier:l,addTier:S,removeTier:w,updateTier:G}}let _r=1;function vr(s,f){function c(){return`el-${Date.now().toString(36)}-${_r++}`}function _({type:C,lat:z,lng:F,tierName:tt}){const E=f.getTierByName(tt)||f.getDefaultTier(),ht=s.layout.length===0?1:Math.max(...s.layout.map(V=>V.zIndex||1))+1;return{id:c(),name:"",type:C,tier:E.name,lat:z,lng:F,width:E.defaultWidth,height:E.defaultHeight,rotation:0,color:E.defaultColor,colorOpacity:100,textColor:E.defaultTextColor,borderColor:"#0f172a",borderWidth:1.5,showFill:!0,showBorder:!0,logo:"",locked:!1,radius:0,zIndex:ht,notes:"",baseZoom:On}}function l({lat:C,lng:z,tierName:F}){return _({type:"rectangle",lat:C,lng:z,tierName:F})}function S({lat:C,lng:z,tierName:F}){return _({type:"ellipse",lat:C,lng:z,tierName:F})}function w({points:C,tierName:z}){const F=f.getTierByName(z)||f.getDefaultTier(),tt=s.layout.length===0?1:Math.max(...s.layout.map($=>$.zIndex||1))+1,E=C.map($=>$.lat),ht=C.map($=>$.lng),V=(Math.min(...E)+Math.max(...E))/2,et=(Math.min(...ht)+Math.max(...ht))/2;return{id:c(),name:"",type:"polygon",tier:F.name,lat:V,lng:et,width:F.defaultWidth,height:F.defaultHeight,rotation:0,color:F.defaultColor,textColor:F.defaultTextColor,logo:"",locked:!1,zIndex:tt,notes:"",baseZoom:On,points:C}}function G({lat:C,lng:z,tierName:F}){return _({type:"image",lat:C,lng:z,tierName:F})}function h(C){const z=JSON.parse(JSON.stringify(C));return z.id=c(),z.name=C.name?`${C.name} Copy`:"",z.zIndex=s.layout.length===0?1:Math.max(...s.layout.map(F=>F.zIndex||1))+1,z}function H(C,z){const F=s.layout.findIndex(tt=>tt.id===C);return F===-1?null:(s.layout[F]={...s.layout[F],...z},s.layout[F])}function O(C){const z=s.layout.findIndex(F=>F.id===C);z!==-1&&s.layout.splice(z,1)}return{createRectangle:l,createEllipse:S,createPolygon:w,createImage:G,duplicateElement:h,updateElement:H,removeElement:O}}const di="event-venue-mapper:project-v1";function yr(s){function f(){return{venue:s.venue||null,layout:s.layout||[],tiers:s.tiers||[],settings:s.settings||{},history:[]}}function c(h){!h||typeof h!="object"||(s.venue=h.venue||null,s.layout=Array.isArray(h.layout)?h.layout:[],s.tiers=Array.isArray(h.tiers)?h.tiers:s.tiers,s.settings={showGrid:typeof h.settings?.showGrid=="boolean"?h.settings.showGrid:s.settings.showGrid,snapToGrid:typeof h.settings?.snapToGrid=="boolean"?h.settings.snapToGrid:s.settings.snapToGrid,gridSize:typeof h.settings?.gridSize=="number"?h.settings.gridSize:s.settings.gridSize,interactionMode:typeof h.settings?.interactionMode=="string"?h.settings.interactionMode:s.settings.interactionMode,overlayBackgroundColor:typeof h.settings?.overlayBackgroundColor=="string"?h.settings.overlayBackgroundColor:s.settings.overlayBackgroundColor,overlayOpacity:typeof h.settings?.overlayOpacity=="number"?h.settings.overlayOpacity:s.settings.overlayOpacity,overlayStrokeColor:typeof h.settings?.overlayStrokeColor=="string"?h.settings.overlayStrokeColor:s.settings.overlayStrokeColor,overlayStrokeWidth:typeof h.settings?.overlayStrokeWidth=="number"?h.settings.overlayStrokeWidth:s.settings.overlayStrokeWidth,overlayGlowColor:typeof h.settings?.overlayGlowColor=="string"?h.settings.overlayGlowColor:s.settings.overlayGlowColor,overlayGlowIntensity:typeof h.settings?.overlayGlowIntensity=="number"?h.settings.overlayGlowIntensity:s.settings.overlayGlowIntensity,overlayShadowBlur:typeof h.settings?.overlayShadowBlur=="number"?h.settings.overlayShadowBlur:s.settings.overlayShadowBlur,overlayBorderRadius:typeof h.settings?.overlayBorderRadius=="number"?h.settings.overlayBorderRadius:s.settings.overlayBorderRadius})}function _(){try{const h=f();localStorage.setItem(di,JSON.stringify(h))}catch{}}function l(){try{const h=localStorage.getItem(di);if(!h)return;const H=JSON.parse(h);c(H)}catch{}}function S(){try{localStorage.removeItem(di)}catch{}}function w(){return f()}function G(h,{overwrite:H=!0}={}){!h||typeof h!="object"||(H?c(h):(s.layout=h.layout||s.layout,s.tiers=h.tiers||s.tiers,s.settings={...s.settings,...h.settings||{}},s.venue=h.venue||s.venue),_())}return{saveToStorage:_,loadFromStorage:l,clearStorage:S,exportProject:w,importProject:G}}function xr(s,f){const c={past:[],future:[]};function _(){return{venue:s.venue,layout:JSON.parse(JSON.stringify(s.layout)),tiers:JSON.parse(JSON.stringify(s.tiers)),settings:JSON.parse(JSON.stringify(s.settings))}}function l(){c.past.push(_()),c.future=[],f.saveToStorage()}function S(){return c.past.length>0}function w(){return c.future.length>0}function G(){if(!S())return;const O=_(),C=c.past.pop();c.future.push(O),H(C)}function h(){if(!w())return;const O=_(),C=c.future.pop();c.past.push(O),H(C)}function H(O){O&&(s.venue=O.venue,s.layout=O.layout,s.tiers=O.tiers,s.settings=O.settings,f.saveToStorage())}return{record:l,undo:G,redo:h,canUndo:S,canRedo:w}}const fi="event-venue-mapper:venue";function wr(s,f){function c(G){s.venue=G;try{localStorage.setItem(fi,JSON.stringify(G))}catch{}f.saveToStorage()}function _(){return s.venue}function l(){return!!s.venue}function S(){s.venue=null;try{localStorage.removeItem(fi)}catch{}f.saveToStorage()}function w(){if(!s.venue)try{const G=localStorage.getItem(fi);G&&(s.venue=JSON.parse(G))}catch{}}return w(),{setVenue:c,getVenue:_,hasVenue:l,clearVenue:S}}const br="https://nominatim.openstreetmap.org/search";function Tr(s,f){const c=document.createElement("button");c.type="button",c.className="w-full text-left px-3 py-2 hover:bg-slate-800/80 transition flex flex-col gap-0.5";const _=document.createElement("div");_.className="text-sm font-medium text-slate-100",_.textContent=s.display_name?.split(",")[0]||s.name||"Unknown place";const l=document.createElement("div");return l.className="text-[11px] text-slate-400 line-clamp-2",l.textContent=s.display_name||"",c.appendChild(_),c.appendChild(l),c.addEventListener("click",()=>{f(s)}),c}function Pr({venueStore:s,appState:f,uiController:c,venueLoader:_}){const l=document.getElementById("venue-search-input"),S=document.getElementById("venue-search-results"),w=document.getElementById("venue-search-loading");if(!l||!S||!w)return;let G=null;async function h(H){if(!H||H.length<3){S.innerHTML='<div class="px-3 py-2 text-xs text-slate-500">Type at least 3 characters to search.</div>';return}w.classList.remove("hidden"),S.innerHTML="";try{const O=new URL(br);O.searchParams.set("q",H),O.searchParams.set("format","json"),O.searchParams.set("polygon_geojson","1"),O.searchParams.set("addressdetails","1"),O.searchParams.set("limit","8");const C=await fetch(O.toString(),{headers:{"Accept-Language":"en","X-Requested-With":"Event-Venue-Mapper-Admin-Tool"}});if(!C.ok)throw new Error("Search failed");const z=await C.json();if(S.innerHTML="",!Array.isArray(z)||z.length===0){S.innerHTML='<div class="px-3 py-2 text-xs text-slate-500">No results found. Try a different query.</div>';return}z.forEach(F=>{if(!F.geojson)return;const tt=Tr(F,async E=>{const ht=await _.loadVenueFromNominatim(E);s.setVenue(ht),f.venue=ht,c.enterMappingMode(),c.updateVenueName(),c.refreshAll()});S.appendChild(tt)})}catch(O){console.error("Nominatim search error",O),S.innerHTML='<div class="px-3 py-2 text-xs text-rose-300">Failed to search venues. Please try again.</div>'}finally{w.classList.add("hidden")}}l.addEventListener("input",()=>{const H=l.value.trim();G&&clearTimeout(G),G=setTimeout(()=>h(H),400)})}function Lr({appState:s,mapEngine:f,venueStore:c,storageManager:_,uiController:l}){async function S(G){const{osm_id:h,osm_type:H,display_name:O,boundingbox:C,geojson:z,name:F}=G,tt=Array.isArray(C)?C.map(ht=>parseFloat(ht)):null,E={id:`${H}-${h}`,osm_type:H,osm_id:h,name:F||(O?O.split(",")[0]:"Selected Venue"),display_name:O||"",bounding_box:tt,geojson:z};return s.venue=E,c.setVenue(E),E.geojson&&f.setVenueGeoJSON(E.geojson,E.bounding_box,s.settings),_.saveToStorage(),l.updateVenueName(),E}function w(){const G=c.getVenue();G&&G.geojson&&f.setVenueGeoJSON(G.geojson,G.bounding_box||null,s.settings)}return w(),{loadVenueFromNominatim:S,rehydrateVenueOnLoad:w}}function Er(s,f){const c=URL.createObjectURL(f),_=document.createElement("a");_.href=c,_.download=s,document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(c)}function Ir({venue:s,layout:f,tiers:c,settings:_={}}){const l=s||null,S=Array.isArray(f)?f:[],w=Array.isArray(c)?c:[],G=_||{},h=JSON.stringify(l),H=JSON.stringify(S),O=JSON.stringify(w),C=JSON.stringify(G),z=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Event Layout Viewer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Public viewer for event venue layout." />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      crossorigin=""
    />
    <script src="https://cdn.tailwindcss.com"><\/script>
    <style>
      html, body, #viewer-root {
        height: 100%;
      }
      body {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background-color: rgb(15, 23, 42);
        color: rgb(226, 232, 240);
      }
      #viewer-map {
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 0;
      }
      #viewer-canvas {
        position: absolute;
        inset: 0;
        /* Let map capture all mouse/touch events for smooth pan/zoom */
        pointer-events: none;
        z-index: 1000;
      }
      
      /* Booth Details Pop-up */
      #booth-popup {
        position: fixed;
        background: linear-gradient(135deg, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%);
        border: 1px solid rgb(71, 85, 105);
        border-radius: 12px;
        padding: 16px;
        min-width: 320px;
        max-width: 400px;
        box-shadow: 
          0 20px 25px -5px rgba(0, 0, 0, 0.5),
          0 0 40px rgba(34, 197, 94, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        z-index: 2000;
        backdrop-filter: blur(12px);
        pointer-events: auto;
        animation: popupEnter 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        perspective: 1000px;
      }
      
      @keyframes popupEnter {
        from {
          opacity: 0;
          transform: scale(0.85) translateY(10px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      
      #booth-popup.hidden {
        display: none;
      }
      
      .booth-popup-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 12px;
      }
      
      .booth-popup-title {
        font-weight: 600;
        font-size: 16px;
        color: rgb(226, 232, 240);
        word-break: break-word;
        flex: 1;
      }
      
      .booth-popup-close {
        background: none;
        border: none;
        color: rgb(148, 163, 184);
        cursor: pointer;
        font-size: 20px;
        padding: 0;
        margin-left: 8px;
        transition: color 0.2s;
      }
      
      .booth-popup-close:hover {
        color: rgb(226, 232, 240);
      }
      
      .booth-popup-content {
        font-size: 12px;
        line-height: 1.5;
        margin-bottom: 12px;
        color: rgb(203, 213, 225);
      }
      
      .booth-popup-tier {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border-radius: 20px;
        border: 1px solid;
        padding: 4px 8px;
        font-size: 11px;
        margin-bottom: 8px;
      }
      
      .booth-popup-logo {
        width: 100%;
        height: 64px;
        object-fit: contain;
        margin-bottom: 8px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.2);
        display: none;
      }
      
      .booth-popup-logo.visible {
        display: block;
      }
      
      .booth-popup-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      
      .booth-popup-btn {
        flex: 1;
        min-width: 80px;
        padding: 8px 12px;
        border: 1px solid rgb(71, 85, 105);
        border-radius: 8px;
        background: rgba(71, 85, 105, 0.3);
        color: rgb(203, 213, 225);
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
        transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      
      .booth-popup-btn:hover {
        background: rgba(71, 85, 105, 0.6);
        border-color: rgb(100, 116, 139);
        color: rgb(226, 232, 240);
      }
      
      .booth-popup-btn.active {
        background: rgb(34, 197, 94);
        border-color: rgb(34, 197, 94);
        color: rgb(5, 46, 22);
      }
      
      .booth-popup-rating {
        display: flex;
        gap: 4px;
        align-items: center;
      }
      
      .booth-popup-star {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        padding: 0;
        transition: transform 0.2s;
        color: rgb(148, 163, 184);
      }
      
      .booth-popup-star:hover,
      .booth-popup-star.filled {
        color: rgb(251, 191, 36);
        transform: scale(1.1);
      }
      #viewer-map > div.leaflet-control-container > div.leaflet-top.leaflet-left > div,
      #viewer-map > div.leaflet-control-container > div.leaflet-bottom.leaflet-right {
        display: none;
      }
    </style>
  </head>
  <body class="bg-slate-950 text-slate-100">
    <div id="viewer-root" class="flex flex-col">
      <header class="flex items-center justify-between gap-2 border-b border-slate-800 bg-slate-950/90 px-3 py-2 md:px-4">
        <div class="flex items-center gap-2 min-w-0">
          <div class="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
            <span class="text-xs font-semibold text-emerald-300">EV</span>
          </div>
          <div class="leading-tight min-w-0">
            <div class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Event Layout Viewer
            </div>
            <div class="text-sm font-medium truncate" id="viewer-venue-name"></div>
          </div>
        </div>
        <div class="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
          <span class="inline-flex items-center gap-1">
            <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Read-only
          </span>
        </div>
      </header>
      <main class="flex-1 min-h-0 relative bg-slate-900">
        <div id="viewer-map-container" class="absolute inset-0">
          <div id="viewer-map"></div>
          <canvas id="viewer-canvas"></canvas>
        </div>
        <!-- Booth Details Pop-up -->
        <div id="booth-popup" class="hidden">
          <div class="booth-popup-header">
            <div class="booth-popup-title" id="popup-name">Booth Name</div>
            <button class="booth-popup-close" id="popup-close">✕</button>
          </div>
          <img id="popup-logo" class="booth-popup-logo" alt="Booth logo" />
          <div class="booth-popup-tier" id="popup-tier">Tier</div>
          <div class="booth-popup-content">
            <div style="margin-bottom: 8px;">
              <span style="color: rgb(148, 163, 184);">Type:</span> <span id="popup-type">N/A</span>
            </div>
            <div id="popup-notes" style="margin-bottom: 8px; white-space: pre-wrap; color: rgb(203, 213, 225);"></div>
          </div>
          <div style="margin-bottom: 12px;">
            <div style="font-size: 11px; color: rgb(148, 163, 184); margin-bottom: 4px;">Rate</div>
            <div class="booth-popup-rating" id="popup-rating"></div>
          </div>
          <div class="booth-popup-actions">
            <button class="booth-popup-btn" id="btn-favorite" title="Mark as favorite">
              <span id="favorite-icon">♡</span> Favorite
            </button>
            <button class="booth-popup-btn" id="btn-visited" title="Mark as visited">
              <span id="visited-icon">✓</span> Visited
            </button>
          </div>
        </div>
        <!-- Routing Panel -->
        <div id="routing-panel" class="hidden" style="position: fixed; bottom: 20px; left: 20px; background: linear-gradient(135deg, rgba(30, 41, 59, 0.97) 0%, rgba(15, 23, 42, 0.97) 100%); border: 1px solid rgb(71, 85, 105); border-radius: 12px; padding: 12px 14px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); z-index: 1500; backdrop-filter: blur(12px); pointer-events: auto; cursor: grab; user-select: none; touch-action: none;">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <div style="cursor: grab; padding: 4px; color: rgb(148, 163, 184);">☰</div>
            <select id="routing-from" style="padding: 6px 8px; background: rgba(71, 85, 105, 0.4); border: 1px solid rgb(71, 85, 105); border-radius: 4px; color: rgb(226, 232, 240); font-size: 11px; cursor: pointer; min-width: 100px;">
              <option value="">From</option>
            </select>
            <span style="color: rgb(148, 163, 184); font-size: 12px;">→</span>
            <select id="routing-to" style="padding: 6px 8px; background: rgba(71, 85, 105, 0.4); border: 1px solid rgb(71, 85, 105); border-radius: 4px; color: rgb(226, 232, 240); font-size: 11px; cursor: pointer; min-width: 100px;">
              <option value="">To</option>
            </select>
            <button id="routing-find" style="padding: 6px 12px; background: rgb(34, 197, 94); border: none; border-radius: 4px; color: rgb(5, 46, 22); cursor: pointer; font-weight: 600; font-size: 11px; white-space: nowrap;">
              Route
            </button>
            <button id="routing-close" style="background: none; border: none; color: rgb(148, 163, 184); cursor: pointer; font-size: 16px; padding: 0 4px; margin-left: auto; flex-shrink: 0;">✕</button>
          </div>
        </div>
      </main>
    </div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""><\/script>
    <script>
      const VENUE = ${h};
      const LAYOUT = ${H};
      const TIERS = ${O};
      const SETTINGS = ${C};

      const BASE_ZOOM = 18;
      const STORAGE_KEY_RATINGS = 'viewer_booth_ratings';
      const STORAGE_KEY_FAVORITES = 'viewer_booth_favorites';
      const STORAGE_KEY_VISITED = 'viewer_booth_visited';
      const STORAGE_KEY_MAP_STATE = 'viewer_map_state';

      // localStorage utility functions
      function saveRatings(ratings) {
        try {
          const obj = Object.fromEntries(ratings);
          localStorage.setItem(STORAGE_KEY_RATINGS, JSON.stringify(obj));
        } catch (e) {
          console.warn('Failed to save ratings:', e);
        }
      }

      function loadRatings() {
        try {
          const data = localStorage.getItem(STORAGE_KEY_RATINGS);
          if (data) {
            const obj = JSON.parse(data);
            return new Map(Object.entries(obj).map(([k, v]) => [k, parseInt(v, 10)]));
          }
        } catch (e) {
          console.warn('Failed to load ratings:', e);
        }
        return new Map();
      }

      function saveFavorites(favorites) {
        try {
          localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(Array.from(favorites)));
        } catch (e) {
          console.warn('Failed to save favorites:', e);
        }
      }

      function loadFavorites() {
        try {
          const data = localStorage.getItem(STORAGE_KEY_FAVORITES);
          if (data) {
            return new Set(JSON.parse(data));
          }
        } catch (e) {
          console.warn('Failed to load favorites:', e);
        }
        return new Set();
      }

      function saveVisited(visited) {
        try {
          localStorage.setItem(STORAGE_KEY_VISITED, JSON.stringify(Array.from(visited)));
        } catch (e) {
          console.warn('Failed to save visited:', e);
        }
      }

      function loadVisited() {
        try {
          const data = localStorage.getItem(STORAGE_KEY_VISITED);
          if (data) {
            return new Set(JSON.parse(data));
          }
        } catch (e) {
          console.warn('Failed to load visited:', e);
        }
        return new Set();
      }

      function saveMapState(center, zoom) {
        try {
          const state = { center: { lat: center.lat, lng: center.lng }, zoom };
          localStorage.setItem(STORAGE_KEY_MAP_STATE, JSON.stringify(state));
        } catch (e) {
          console.warn('Failed to save map state:', e);
        }
      }

      function loadMapState() {
        try {
          const data = localStorage.getItem(STORAGE_KEY_MAP_STATE);
          if (data) {
            return JSON.parse(data);
          }
        } catch (e) {
          console.warn('Failed to load map state:', e);
        }
        return null;
      }

      function getTierByName(name) {
        return TIERS.find(t => t.name === name) || null;
      }

      // Pathfinding utilities
      class PathfindingGrid {
        constructor(bounds, resolution) {
          this.bounds = bounds;
          this.resolution = resolution;
          this.width = Math.ceil((bounds.maxX - bounds.minX) / resolution);
          this.height = Math.ceil((bounds.maxY - bounds.minY) / resolution);
          this.grid = Array(this.width * this.height).fill(0); // 0 = walkable, 1 = obstacle
        }

        addObstacle(element, screenRect) {
          this.addObstacleWithMargin(element, screenRect, 15);
        }

        addObstacleWithMargin(element, screenRect, margin) {
          const x1 = Math.max(0, Math.floor((screenRect.cx - screenRect.width/2 - margin - this.bounds.minX) / this.resolution));
          const y1 = Math.max(0, Math.floor((screenRect.cy - screenRect.height/2 - margin - this.bounds.minY) / this.resolution));
          const x2 = Math.min(this.width - 1, Math.ceil((screenRect.cx + screenRect.width/2 + margin - this.bounds.minX) / this.resolution));
          const y2 = Math.min(this.height - 1, Math.ceil((screenRect.cy + screenRect.height/2 + margin - this.bounds.minY) / this.resolution));

          for (let y = y1; y <= y2; y++) {
            for (let x = x1; x <= x2; x++) {
              this.grid[y * this.width + x] = 1;
            }
          }
        }

        isWalkable(x, y) {
          if (x < 0 || x >= this.width || y < 0 || y >= this.height) return false;
          return this.grid[y * this.width + x] === 0;
        }

        gridToScreen(gx, gy) {
          return {
            x: this.bounds.minX + gx * this.resolution + this.resolution / 2,
            y: this.bounds.minY + gy * this.resolution + this.resolution / 2
          };
        }

        screenToGrid(x, y) {
          return {
            x: Math.floor((x - this.bounds.minX) / this.resolution),
            y: Math.floor((y - this.bounds.minY) / this.resolution)
          };
        }
      }

      function findPath(start, goal, grid, preference = 'shortest') {
        const openSet = [start];
        const cameFrom = new Map();
        const gScore = new Map();
        const fScore = new Map();

        const key = (p) => p.x + ',' + p.y;
        const heuristic = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
        const distance = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

        gScore.set(key(start), 0);
        fScore.set(key(start), heuristic(start, goal));

        while (openSet.length > 0) {
          let current = openSet[0];
          let currentIdx = 0;
          for (let i = 1; i < openSet.length; i++) {
            if (fScore.get(key(openSet[i])) < fScore.get(key(current))) {
              current = openSet[i];
              currentIdx = i;
            }
          }

          if (current.x === goal.x && current.y === goal.y) {
            const path = [];
            let curr = current;
            while (cameFrom.has(key(curr))) {
              path.unshift(curr);
              curr = cameFrom.get(key(curr));
            }
            path.unshift(start);
            return path;
          }

          openSet.splice(currentIdx, 1);

          const neighbors = [
            { x: current.x + 1, y: current.y },
            { x: current.x - 1, y: current.y },
            { x: current.x, y: current.y + 1 },
            { x: current.x, y: current.y - 1 },
            // Diagonals for "safest" path (longer but less constrained)
            { x: current.x + 1, y: current.y + 1 },
            { x: current.x + 1, y: current.y - 1 },
            { x: current.x - 1, y: current.y + 1 },
            { x: current.x - 1, y: current.y - 1 }
          ];

          for (const neighbor of neighbors) {
            if (!grid.isWalkable(neighbor.x, neighbor.y)) continue;

            const tentativeGScore = gScore.get(key(current)) + 
              (preference === 'safest' && Math.abs(neighbor.x - current.x) + Math.abs(neighbor.y - current.y) === 2 ? 1.5 : 1);

            if (!gScore.has(key(neighbor)) || tentativeGScore < gScore.get(key(neighbor))) {
              cameFrom.set(key(neighbor), current);
              gScore.set(key(neighbor), tentativeGScore);
              fScore.set(key(neighbor), tentativeGScore + heuristic(neighbor, goal));

              if (!openSet.some(p => p.x === neighbor.x && p.y === neighbor.y)) {
                openSet.push(neighbor);
              }
            }
          }
        }

        return null; // No path found
      }

      function initViewer() {
        const mapEl = document.getElementById('viewer-map');
        const canvas = document.getElementById('viewer-canvas');
        const container = document.getElementById('viewer-map-container');
  const ctx = canvas.getContext('2d');
  const imageCache = new Map();

        const venueNameEl = document.getElementById('viewer-venue-name');
        if (VENUE) {
          venueNameEl.textContent = VENUE.name || VENUE.display_name || 'Selected Venue';
        } else {
          venueNameEl.textContent = 'Event Venue';
        }

        // Load saved map state or use defaults
        const savedMapState = loadMapState();
        const initialCenter = savedMapState ? [savedMapState.center.lat, savedMapState.center.lng] : [20, 0];
        const initialZoom = savedMapState ? savedMapState.zoom : 2;

        const map = L.map(mapEl, {
          center: initialCenter,
          zoom: initialZoom,
          zoomControl: true,
          attributionControl: true
        });

        // Track venue bounds for routing constraint
        let venueBounds = null;

        // Use detectRetina so high-DPI devices request higher-resolution tiles when available.
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 20,
          detectRetina: true,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        if (VENUE && VENUE.geojson) {
          const venueLayer = L.geoJSON(VENUE.geojson, {
            style: {
              color: '#22c55e',
              weight: 2,
              opacity: 0.9,
              fillOpacity: 0.08
            }
          }).addTo(map);
          try {
            let bounds = null;
            if (VENUE.bounding_box && VENUE.bounding_box.length === 4) {
              const [south, north, west, east] = VENUE.bounding_box;
              bounds = L.latLngBounds(
                [south, west],
                [north, east]
              );
            } else {
              const b = venueLayer.getBounds();
              if (b && b.isValid()) {
                bounds = b;
              }
            }

            if (bounds) {
              venueBounds = bounds;
              // Only fit bounds if this is a fresh load (no saved map state)
              // If user has saved zoom/pan, respect their preferences
              if (!savedMapState) {
                map.fitBounds(bounds, { padding: [40, 40] });
              }
              try {
                map.setMaxBounds(bounds);
              } catch (err) {
                // older leaflet versions may not support setMaxBounds reliably; ignore
              }
            }
          } catch (err) {
            console.error('Failed to fit bounds', err);
          }
        }

        function applyOverlaySettings() {
          if (!SETTINGS) return;
          
          const leafletPaths = document.querySelectorAll('.leaflet-interactive');
          const bgColor = SETTINGS.overlayBackgroundColor || '#000000';
          const opacity = (SETTINGS.overlayOpacity || 0) / 100;
          const strokeColor = SETTINGS.overlayStrokeColor || '#ffffff';
          const strokeWidth = SETTINGS.overlayStrokeWidth || 1;
          const shadowBlur = SETTINGS.overlayShadowBlur || 0;
          const glowIntensity = SETTINGS.overlayGlowIntensity || 0;
          const borderRadius = SETTINGS.overlayBorderRadius || 0;
          
          leafletPaths.forEach((path) => {
            path.style.fill = bgColor;
            path.style.fillOpacity = opacity.toString();
            path.style.stroke = strokeColor;
            path.style.strokeWidth = strokeWidth.toString();
            
            // Build filter effects
            let filterEffects = [];
            
            // Add shadow blur + glow intensity effect
            if (shadowBlur > 0 || glowIntensity > 0) {
              const offsetX = shadowBlur * 0.5;
              const offsetY = shadowBlur;
              const glowColor = SETTINGS.overlayGlowColor || '#000000';
              // Convert glow intensity (0-100) to opacity for the shadow
              const glowOpacity = glowIntensity / 100;
              filterEffects.push(\`drop-shadow(\${offsetX}px \${offsetY}px \${shadowBlur}px rgba(\${parseInt(glowColor.slice(1, 3), 16)}, \${parseInt(glowColor.slice(3, 5), 16)}, \${parseInt(glowColor.slice(5, 7), 16)}, \${glowOpacity}))\`);
            }
            
            // Add blur + contrast for radius effect (default applied)
            if (borderRadius > 0) {
              const blurAmount = Math.min(borderRadius / 5, 4); // Scale blur based on radius (max 4px)
              const contrastAmount = Math.max(20 - borderRadius / 2.5, 1); // Higher radius = lower contrast
              filterEffects.push(\`blur(\${blurAmount}px) contrast(\${contrastAmount})\`);
            } else {
              // Default: subtle blur + contrast for softening
              filterEffects.push('blur(0.5px) contrast(20)');
            }
            
            path.style.filter = filterEffects.join(' ') || 'none';
          });
        }

        function resizeCanvas() {
          const rect = container.getBoundingClientRect();
          const dpr = window.devicePixelRatio || 1;
          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;
          canvas.style.width = rect.width + 'px';
          canvas.style.height = rect.height + 'px';
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function elementToScreenRect(element) {
          const center = map.latLngToContainerPoint([element.lat, element.lng]);
          const scale = map.getZoomScale(map.getZoom(), element.baseZoom || BASE_ZOOM);
          const width = element.width * scale;
          const height = element.height * scale;
          return {
            cx: center.x,
            cy: center.y,
            width,
            height
          };
        }

        // Helper to convert hex color to rgba with opacity
        function hexToRgba(hex, opacity = 100) {
          const cleanHex = hex.replace('#', '');
          const r = parseInt(cleanHex.substring(0, 2), 16);
          const g = parseInt(cleanHex.substring(2, 4), 16);
          const b = parseInt(cleanHex.substring(4, 6), 16);
          const alpha = Math.max(0, Math.min(100, opacity)) / 100;
          return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }

        function drawElement(element) {
          const rect = elementToScreenRect(element);
          const angle = ((element.rotation || 0) * Math.PI) / 180;
          const color = element.color || (getTierByName(element.tier)?.defaultColor) || '#22c55e';
          const colorOpacity = (element.colorOpacity !== undefined) ? element.colorOpacity : 100;
          const textColor = element.textColor || (getTierByName(element.tier)?.defaultTextColor) || '#0f172a';
          const borderColor = element.borderColor || '#0f172a';
          const borderWidth = element.borderWidth || 1.5;
          const radius = Math.max(0, Math.min(element.radius || 0, Math.min(rect.width, rect.height) / 2));
          const showFill = (element.showFill !== undefined) ? element.showFill : true;
          const showBorder = (element.showBorder !== undefined) ? element.showBorder : true;

          ctx.save();
          ctx.translate(rect.cx, rect.cy);
          ctx.rotate(angle);

          // Add futuristic glow effect
          ctx.shadowColor = color;
          ctx.shadowBlur = 8;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;

          ctx.fillStyle = hexToRgba(color, colorOpacity);
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = borderWidth;

          // Helper to conditionally fill and stroke based on element settings
          const finalizePath = () => {
            if (showFill) ctx.fill();
            if (showBorder) ctx.stroke();
          };

          if (element.type === 'ellipse') {
            ctx.beginPath();
            ctx.ellipse(0, 0, rect.width / 2, rect.height / 2, 0, 0, Math.PI * 2);
            finalizePath();
          } else if (element.type === 'polygon' && Array.isArray(element.points) && element.points.length >= 3) {
            ctx.restore();
            const pts = element.points.map(p => map.latLngToContainerPoint([p.lat, p.lng]));
            ctx.beginPath();
            pts.forEach((pt, i) => {
              if (i === 0) ctx.moveTo(pt.x, pt.y);
              else ctx.lineTo(pt.x, pt.y);
            });
            ctx.closePath();
            ctx.fillStyle = hexToRgba(color, colorOpacity);
            ctx.strokeStyle = 'rgba(15,23,42,0.9)';
            finalizePath();
            return;
          } else {
            // Rectangle with rounded corners
            const halfW = rect.width / 2;
            const halfH = rect.height / 2;
            ctx.beginPath();
            
            if (radius > 0) {
              const r = radius;
              ctx.moveTo(-halfW + r, -halfH);
              ctx.lineTo(halfW - r, -halfH);
              ctx.quadraticCurveTo(halfW, -halfH, halfW, -halfH + r);
              ctx.lineTo(halfW, halfH - r);
              ctx.quadraticCurveTo(halfW, halfH, halfW - r, halfH);
              ctx.lineTo(-halfW + r, halfH);
              ctx.quadraticCurveTo(-halfW, halfH, -halfW, halfH - r);
              ctx.lineTo(-halfW, -halfH + r);
              ctx.quadraticCurveTo(-halfW, -halfH, -halfW + r, -halfH);
            } else {
              ctx.rect(-halfW, -halfH, rect.width, rect.height);
            }
            finalizePath();
          }

          // Reset shadow
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;

          // Render label: logo image if available, otherwise element name as simple text
          const label = element.name || element.tier || element.type;

          // If a logo URL is provided, render it. Otherwise render the name as text.
          if (element.logo) {
            let cache = imageCache.get(element.logo);
            if (!cache) {
              const img = new Image();
              img.crossOrigin = 'Anonymous';
              cache = { img, loaded: false };
              img.onload = () => { 
                cache.loaded = true; 
                try { drawAll(); } catch (e) {}
              };
              img.onerror = () => { cache.loaded = false; };
              img.src = element.logo;
              imageCache.set(element.logo, cache);
            }
            // Draw logo if loaded, otherwise show loading placeholder
            if (cache && cache.loaded) {
              const padding = 4;
              const targetW = rect.width - padding * 2;
              const targetH = rect.height - padding * 2;
              const imgRatio = cache.img.width / cache.img.height;
              const targetRatio = targetW / targetH;
              let drawW = targetW;
              let drawH = targetH;
              if (imgRatio > targetRatio) {
                drawH = targetW / imgRatio;
              } else {
                drawW = targetH * imgRatio;
              }
              try {
                ctx.drawImage(cache.img, -drawW / 2, -drawH / 2, drawW, drawH);
              } catch (e) {}
            } else if (label) {
              // Fallback: show name while logo is loading
              ctx.fillStyle = textColor;
              ctx.font = Math.max(10, Math.floor(rect.height / 5)) + 'px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              const trimmed = label.length > 24 ? label.slice(0, 21) + '…' : label;
              ctx.fillText(trimmed, 0, 0, Math.max(24, rect.width - 8));
            }
          } else if (label) {
            // No logo: render name as simple text
            ctx.fillStyle = textColor;
            ctx.font = Math.max(10, Math.floor(rect.height / 5)) + 'px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const trimmed = label.length > 24 ? label.slice(0, 21) + '…' : label;
            ctx.fillText(trimmed, 0, 0, Math.max(24, rect.width - 8));
          }

          ctx.restore();
        }

        function drawAll() {
          try {
            const size = map.getSize();
            if (!size || size.x <= 0 || size.y <= 0) return; // map not ready
            ctx.clearRect(0, 0, size.x, size.y);
            const elements = [...LAYOUT].sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0));
            elements.forEach(el => {
              try { drawElement(el); } catch (e) { console.error('drawElement failed:', e); }
            });
            // Draw animated path if present
            if (routePath && routePath.length > 0) {
              drawPath(routePath);
            }
            // draw selection if present
            if (selectedElementId) {
              const sel = LAYOUT.find(e => e.id === selectedElementId);
              if (sel) drawSelectionOutline(sel);
            }
          } catch (e) {
            console.error('drawAll failed:', e);
          }
        }

        // Routing variables
        let routePath = null;
        let pathAnimationTime = 0;
        let sourceBoothId = null;
        let destBoothId = null;

        function drawPath(path) {
          if (!sourceBoothId || !destBoothId) return;

          const sourceBooth = LAYOUT.find(el => el.id === sourceBoothId);
          const destBooth = LAYOUT.find(el => el.id === destBoothId);
          
          if (!sourceBooth || !destBooth) return;

          const startRect = elementToScreenRect(sourceBooth);
          const endRect = elementToScreenRect(destBooth);

          const progress = (pathAnimationTime % 3000) / 3000; // 3 second loop
          
          // Check if booths are aligned (North/South/East/West)
          const dx = Math.abs(endRect.cx - startRect.cx);
          const dy = Math.abs(endRect.cy - startRect.cy);
          const threshold = 100; // pixels of tolerance for alignment
          
          // Determine if aligned: if one axis is much smaller than the other, booths are aligned
          const isAligned = (dx < threshold) || (dy < threshold);
          
          // Use waypoints only if booths are NOT aligned and path exists
          const useWaypoints = !isAligned && path && path.length > 0;
          
          // Build waypoints
          let waypoints = [];
          waypoints.push({ x: startRect.cx, y: startRect.cy }); // Start at source booth
          
          if (useWaypoints) {
            waypoints.push(...path); // Add pathfinding waypoints only if needed
          }
          
          waypoints.push({ x: endRect.cx, y: endRect.cy }); // End at destination booth

          // Calculate total distance across all waypoints
          let totalDistance = 0;
          for (let i = 1; i < waypoints.length; i++) {
            const dx = waypoints[i].x - waypoints[i-1].x;
            const dy = waypoints[i].y - waypoints[i-1].y;
            totalDistance += Math.sqrt(dx * dx + dy * dy);
          }

          if (totalDistance === 0) return;

          ctx.save();
          ctx.strokeStyle = 'rgb(34, 197, 94)';
          ctx.lineWidth = 4;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          // Draw main path with animation
          let distanceCovered = 0;
          const targetDistance = totalDistance * progress;
          
          ctx.beginPath();
          let pathStarted = false;

          for (let i = 1; i < waypoints.length; i++) {
            const from = waypoints[i - 1];
            const to = waypoints[i];
            const segmentDistance = Math.sqrt(
              Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)
            );

            if (distanceCovered + segmentDistance <= targetDistance) {
              // Fully draw this segment
              if (!pathStarted) {
                ctx.moveTo(from.x, from.y);
                pathStarted = true;
              }
              ctx.lineTo(to.x, to.y);
              distanceCovered += segmentDistance;
            } else if (distanceCovered < targetDistance) {
              // Partially draw this segment
              if (!pathStarted) {
                ctx.moveTo(from.x, from.y);
                pathStarted = true;
              }
              const remainingDistance = targetDistance - distanceCovered;
              const ratio = remainingDistance / segmentDistance;
              const partialX = from.x + (to.x - from.x) * ratio;
              const partialY = from.y + (to.y - from.y) * ratio;
              ctx.lineTo(partialX, partialY);
              break;
            }
          }
          ctx.stroke();

          // Draw glow effect
          ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
          ctx.lineWidth = 12;

          distanceCovered = 0;
          ctx.beginPath();
          pathStarted = false;

          for (let i = 1; i < waypoints.length; i++) {
            const from = waypoints[i - 1];
            const to = waypoints[i];
            const segmentDistance = Math.sqrt(
              Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)
            );

            if (distanceCovered + segmentDistance <= targetDistance) {
              if (!pathStarted) {
                ctx.moveTo(from.x, from.y);
                pathStarted = true;
              }
              ctx.lineTo(to.x, to.y);
              distanceCovered += segmentDistance;
            } else if (distanceCovered < targetDistance) {
              if (!pathStarted) {
                ctx.moveTo(from.x, from.y);
                pathStarted = true;
              }
              const remainingDistance = targetDistance - distanceCovered;
              const ratio = remainingDistance / segmentDistance;
              const partialX = from.x + (to.x - from.x) * ratio;
              const partialY = from.y + (to.y - from.y) * ratio;
              ctx.lineTo(partialX, partialY);
              break;
            }
          }
          ctx.stroke();

          // Draw moving dot along the path
          if (progress > 0 && progress < 1) {
            distanceCovered = 0;
            for (let i = 1; i < waypoints.length; i++) {
              const from = waypoints[i - 1];
              const to = waypoints[i];
              const segmentDistance = Math.sqrt(
                Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)
              );

              if (distanceCovered + segmentDistance <= targetDistance) {
                distanceCovered += segmentDistance;
              } else {
                const remainingDistance = targetDistance - distanceCovered;
                const ratio = remainingDistance / segmentDistance;
                const dotX = from.x + (to.x - from.x) * ratio;
                const dotY = from.y + (to.y - from.y) * ratio;

                ctx.fillStyle = 'rgb(34, 197, 94)';
                ctx.beginPath();
                ctx.arc(dotX, dotY, 6, 0, Math.PI * 2);
                ctx.fill();

                // Pulsing effect
                const pulse = Math.sin(pathAnimationTime / 200) * 0.3 + 0.7;
                ctx.strokeStyle = 'rgba(34, 197, 94, ' + pulse + ')';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
                ctx.stroke();
                break;
              }
            }
          }

          // Draw start marker (green) at booth position
          ctx.fillStyle = 'rgb(34, 197, 94)';
          ctx.beginPath();
          ctx.arc(startRect.cx, startRect.cy, 8, 0, Math.PI * 2);
          ctx.fill();

          // Draw end marker (blue) at booth position
          ctx.fillStyle = 'rgb(59, 130, 246)';
          ctx.beginPath();
          ctx.arc(endRect.cx, endRect.cy, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }

        // Selection and resize visuals
        let selectedElementId = null;

        function drawSelectionOutline(element) {
          if (!element) return;
          const rect = elementToScreenRect(element);
          const angle = ((element.rotation || 0) * Math.PI) / 180;
          const color = element.color || (getTierByName(element.tier)?.defaultColor) || '#22c55e';

          ctx.save();
          ctx.translate(rect.cx, rect.cy);
          ctx.rotate(angle);
          
          // Modern glow effect for active state
          ctx.shadowColor = color;
          ctx.shadowBlur = 16;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.setLineDash([]);
          ctx.strokeRect(-rect.width / 2, -rect.height / 2, rect.width, rect.height);
          
          // Secondary glow layer
          ctx.shadowBlur = 24;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.5;
          ctx.strokeRect(-rect.width / 2, -rect.height / 2, rect.width, rect.height);
          ctx.globalAlpha = 1;

          ctx.restore();
        }

        function hitTestElement(element, x, y) {
          if (element.type === 'polygon' && Array.isArray(element.points) && element.points.length >= 3) {
            const pts = element.points.map(p => map.latLngToContainerPoint([p.lat, p.lng]));
            return pointInPolygon({ x, y }, pts);
          }
          const rect = elementToScreenRect(element);
          const angle = ((element.rotation || 0) * Math.PI) / 180;
          const dx = x - rect.cx;
          const dy = y - rect.cy;
          const cos = Math.cos(-angle);
          const sin = Math.sin(-angle);
          const localX = dx * cos - dy * sin;
          const localY = dx * sin + dy * cos;
          const halfW = rect.width / 2;
          const halfH = rect.height / 2;
          if (element.type === 'ellipse') {
            const nx = localX / halfW;
            const ny = localY / halfH;
            return nx * nx + ny * ny <= 1;
          }
          return Math.abs(localX) <= halfW && Math.abs(localY) <= halfH;
        }

        function pointInPolygon(point, vertices) {
          let inside = false;
          for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
            const xi = vertices[i].x;
            const yi = vertices[i].y;
            const xj = vertices[j].x;
            const yj = vertices[j].y;
            const intersect =
              yi > point.y !== yj > point.y &&
              point.x < ((xj - xi) * (point.y - yi)) / (yj - yi + Number.EPSILON) + xi;
            if (intersect) inside = !inside;
          }
          return inside;
        }

        function findTopElementAt(x, y) {
          const elements = [...LAYOUT].sort((a, b) => (b.zIndex || 0) - (a.zIndex || 0));
          for (const el of elements) {
            if (hitTestElement(el, x, y)) return el;
          }
          return null;
        }

        function getHandleAtPoint(element, x, y) {
          // returns 'nw','ne','sw','se' or null
          const rect = elementToScreenRect(element);
          const corners = {
            nw: { x: rect.cx - rect.width / 2, y: rect.cy - rect.height / 2 },
            ne: { x: rect.cx + rect.width / 2, y: rect.cy - rect.height / 2 },
            sw: { x: rect.cx - rect.width / 2, y: rect.cy + rect.height / 2 },
            se: { x: rect.cx + rect.width / 2, y: rect.cy + rect.height / 2 }
          };
          const hitRadius = 10; // pixels
          for (const k of Object.keys(corners)) {
            const c = corners[k];
            const dx = x - c.x;
            const dy = y - c.y;
            if (dx * dx + dy * dy <= hitRadius * hitRadius) return k;
          }
          return null;
        }

        function toContainerPointFromEvent(ev) {
          const r = container.getBoundingClientRect();
          return { x: ev.clientX - r.left, y: ev.clientY - r.top };
        }

        // Pop-up management
        let selectedElement = null;
        let popupRating = 0;
        let boothRatings = loadRatings();
        let favorites = loadFavorites();
        let visited = loadVisited();

        function showPopup(element) {
          selectedElement = element;
          const popup = document.getElementById('booth-popup');
          const rect = elementToScreenRect(element);
          
          // Update content
          document.getElementById('popup-name').textContent = element.name || '(Untitled Booth)';
          document.getElementById('popup-type').textContent = element.type || 'Unknown';
          document.getElementById('popup-notes').textContent = element.notes || 'No additional information.';
          
          // Tier styling
          const tier = getTierByName(element.tier);
          const tierEl = document.getElementById('popup-tier');
          tierEl.textContent = element.tier || 'Unassigned';
          tierEl.style.borderColor = tier?.defaultColor || '#64748b';
          tierEl.style.color = tier?.defaultColor || '#e2e8f0';
          
          // Logo
          const logoImg = document.getElementById('popup-logo');
          if (element.logo) {
            logoImg.src = element.logo;
            logoImg.classList.add('visible');
          } else {
            logoImg.classList.remove('visible');
          }
          
          // Load saved rating for this booth
          popupRating = boothRatings.get(element.id) || 0;
          
          // Rating stars
          const ratingDiv = document.getElementById('popup-rating');
          ratingDiv.innerHTML = '';
          for (let i = 0; i < 5; i++) {
            const btn = document.createElement('button');
            btn.className = 'booth-popup-star' + (i < popupRating ? ' filled' : '');
            btn.textContent = '★';
            btn.addEventListener('click', () => {
              popupRating = i + 1;
              boothRatings.set(element.id, popupRating);
              saveRatings(boothRatings);
              updateRatingStars();
            });
            ratingDiv.appendChild(btn);
          }
          
          // Buttons
          const favBtn = document.getElementById('btn-favorite');
          const visitedBtn = document.getElementById('btn-visited');
          favBtn.classList.toggle('active', favorites.has(element.id));
          visitedBtn.classList.toggle('active', visited.has(element.id));
          
          // Position pop-up near booth (above it)
          const popupWidth = 320;
          const popupHeight = 360;
          let x = rect.cx - popupWidth / 2;
          let y = rect.cy - rect.height / 2 - popupHeight - 16;
          
          // Clamp to container bounds
          const bounds = container.getBoundingClientRect();
          if (x < 0) x = 8;
          if (x + popupWidth > bounds.width) x = bounds.width - popupWidth - 8;
          if (y < 0) y = rect.cy + rect.height / 2 + 16;
          if (y + popupHeight > bounds.height) y = Math.max(0, bounds.height - popupHeight - 8);
          
          popup.style.left = x + 'px';
          popup.style.top = y + 'px';
          popup.classList.remove('hidden');
        }

        function hidePopup() {
          const popup = document.getElementById('booth-popup');
          popup.classList.add('hidden');
          selectedElement = null;
          selectedElementId = null;
          drawAll();
        }

        function updateRatingStars() {
          const ratingDiv = document.getElementById('popup-rating');
          const stars = ratingDiv.querySelectorAll('.booth-popup-star');
          stars.forEach((star, i) => {
            star.classList.toggle('filled', i < popupRating);
          });
        }

        function onContainerPointerDown(ev) {
          const pt = toContainerPointFromEvent(ev);
          const el = findTopElementAt(pt.x, pt.y);
          
          if (!el) {
            hidePopup();
            return;
          }

          // select element and show pop-up
          selectedElementId = el.id;
          showPopup(el);
          drawAll();
        }

        // Attach pointerdown to the map container so we can intercept clicks without breaking pan/zoom
        map.getContainer().addEventListener('pointerdown', onContainerPointerDown);

        // Pop-up button event listeners
        document.getElementById('popup-close').addEventListener('click', hidePopup);
        
        document.getElementById('btn-favorite').addEventListener('click', () => {
          if (!selectedElement) return;
          if (favorites.has(selectedElement.id)) {
            favorites.delete(selectedElement.id);
          } else {
            favorites.add(selectedElement.id);
          }
          saveFavorites(favorites);
          document.getElementById('btn-favorite').classList.toggle('active');
        });
        
        document.getElementById('btn-visited').addEventListener('click', () => {
          if (!selectedElement) return;
          if (visited.has(selectedElement.id)) {
            visited.delete(selectedElement.id);
          } else {
            visited.add(selectedElement.id);
          }
          saveVisited(visited);
          document.getElementById('btn-visited').classList.toggle('active');
        });

        // Routing UI initialization
        const routingPanel = document.getElementById('routing-panel');
        const routingFrom = document.getElementById('routing-from');
        const routingTo = document.getElementById('routing-to');
        const routingFind = document.getElementById('routing-find');
        const routingClose = document.getElementById('routing-close');
        const routingInfo = document.getElementById('routing-info');

        // Populate booth dropdowns
        const boothElements = LAYOUT.filter(el => el.name && el.name.length > 0);
        boothElements.forEach(booth => {
          const option1 = document.createElement('option');
          option1.value = booth.id;
          option1.textContent = booth.name;
          routingFrom.appendChild(option1);

          const option2 = document.createElement('option');
          option2.value = booth.id;
          option2.textContent = booth.name;
          routingTo.appendChild(option2);
        });

        // Routing button handlers
        routingClose.addEventListener('click', () => {
          routingPanel.classList.add('hidden');
          routePath = null;
          drawAll();
        });

        routingFind.addEventListener('click', () => {
          const fromId = routingFrom.value;
          const toId = routingTo.value;

          if (!fromId || !toId || fromId === toId) {
            routingInfo.textContent = 'Select different starting and destination booths';
            routingInfo.style.display = 'block';
            return;
          }

          const fromBooth = LAYOUT.find(el => el.id === fromId);
          const toBooth = LAYOUT.find(el => el.id === toId);

          if (!fromBooth || !toBooth) {
            routingInfo.textContent = 'Booth not found';
            routingInfo.style.display = 'block';
            return;
          }

          // Get path preference (default to 'shortest' since radio buttons removed from simplified UI)
          const preferenceElement = document.querySelector('input[name="path-preference"]:checked');
          const preference = preferenceElement ? preferenceElement.value : 'shortest';

          // Calculate bounds - constrain to venue bounds if available
          let boundsX = [0, map.getSize().x];
          let boundsY = [0, map.getSize().y];

          if (venueBounds) {
            const nw = map.latLngToContainerPoint(venueBounds.getNorthWest());
            const se = map.latLngToContainerPoint(venueBounds.getSouthEast());
            boundsX = [Math.max(0, nw.x), Math.min(map.getSize().x, se.x)];
            boundsY = [Math.max(0, nw.y), Math.min(map.getSize().y, se.y)];
          }

          const bounds = {
            minX: boundsX[0],
            minY: boundsY[0],
            maxX: boundsX[1],
            maxY: boundsY[1]
          };

          // Create pathfinding grid
          const resolution = 20;
          const grid = new PathfindingGrid(bounds, resolution);

          // Detect gaps between booths for smarter pathfinding
          function getGapBetweenBooths(booth1Rect, booth2Rect) {
            // Calculate horizontal and vertical gaps
            const hGap = Math.min(
              Math.abs(booth2Rect.cx - booth1Rect.cx) - (booth1Rect.width / 2 + booth2Rect.width / 2),
              Math.max(0, booth2Rect.cx - (booth1Rect.cx + booth1Rect.width / 2))
            );
            
            const vGap = Math.min(
              Math.abs(booth2Rect.cy - booth1Rect.cy) - (booth1Rect.height / 2 + booth2Rect.height / 2),
              Math.max(0, booth2Rect.cy - (booth1Rect.cy + booth1Rect.height / 2))
            );
            
            return { horizontal: Math.max(0, hGap), vertical: Math.max(0, vGap) };
          }

          // Add all elements as obstacles - EXCEPT the destination booth
          // Use dynamic margins based on gaps between booths
          const baseObstacleMargin = 8;
          const minGapThreshold = 20; // Minimum gap size to consider as a passable path
          
          const toBoothRect = elementToScreenRect(toBooth);
          
          LAYOUT.forEach(el => {
            // Skip the destination booth so path can reach it
            if (el.id === toId) return;
            
            const rect = elementToScreenRect(el);
            
            // Check gaps to destination booth
            const gap = getGapBetweenBooths(rect, toBoothRect);
            const hasSmallGap = gap.horizontal < minGapThreshold || gap.vertical < minGapThreshold;
            
            // If there's a tight space between this booth and destination, use smaller margin
            const obstacleMargin = hasSmallGap && (gap.horizontal > 0 || gap.vertical > 0) ? 3 : baseObstacleMargin;
            
            grid.addObstacleWithMargin(el, rect, obstacleMargin);
          });

          // Convert screen coordinates to grid
          const fromScreenRect = elementToScreenRect(fromBooth);
          const toScreenRect = elementToScreenRect(toBooth);

          const startGrid = grid.screenToGrid(fromScreenRect.cx, fromScreenRect.cy);
          const goalGrid = grid.screenToGrid(toScreenRect.cx, toScreenRect.cy);

          // Make sure start and goal are walkable
          if (!grid.isWalkable(startGrid.x, startGrid.y) || !grid.isWalkable(goalGrid.x, goalGrid.y)) {
            // Find nearest walkable point
            let foundStart = false, foundGoal = false;
            for (let r = 1; r < Math.max(grid.width, grid.height); r++) {
              if (!foundStart) {
                for (let dx = -r; dx <= r; dx++) {
                  for (let dy = -r; dy <= r; dy++) {
                    if (Math.abs(dx) === r || Math.abs(dy) === r) {
                      const nx = startGrid.x + dx, ny = startGrid.y + dy;
                      if (grid.isWalkable(nx, ny)) {
                        startGrid.x = nx;
                        startGrid.y = ny;
                        foundStart = true;
                        break;
                      }
                    }
                  }
                  if (foundStart) break;
                }
              }
              if (!foundGoal) {
                for (let dx = -r; dx <= r; dx++) {
                  for (let dy = -r; dy <= r; dy++) {
                    if (Math.abs(dx) === r || Math.abs(dy) === r) {
                      const nx = goalGrid.x + dx, ny = goalGrid.y + dy;
                      if (grid.isWalkable(nx, ny)) {
                        goalGrid.x = nx;
                        goalGrid.y = ny;
                        foundGoal = true;
                        break;
                      }
                    }
                  }
                  if (foundGoal) break;
                }
              }
              if (foundStart && foundGoal) break;
            }
          }

          // Find path
          const gridPath = findPath(startGrid, goalGrid, grid, preference);

          if (!gridPath || gridPath.length === 0) {
            routingInfo.textContent = 'No path found - booths may be blocked';
            routingInfo.style.display = 'block';
            return;
          }

          // Convert grid path back to screen coordinates
          routePath = gridPath.map(gp => grid.gridToScreen(gp.x, gp.y));

          // Smooth the path
          routePath = smoothPath(routePath);

          sourceBoothId = fromId;
          destBoothId = toId;

          // Start animation
          pathAnimationTime = 0;
          drawAll();
        });

        // Drag functionality for routing panel
        let isDragging = false;
        let dragOffsetX = 0;
        let dragOffsetY = 0;

        routingPanel.addEventListener('mousedown', (e) => {
          // Only drag from the hamburger menu handle
          if (e.target.textContent !== '☰') return;
          isDragging = true;
          dragOffsetX = e.clientX - routingPanel.getBoundingClientRect().left;
          dragOffsetY = e.clientY - routingPanel.getBoundingClientRect().top;
          routingPanel.style.cursor = 'grabbing';
        });

        routingPanel.addEventListener('touchstart', (e) => {
          // Only drag from the hamburger menu handle
          if (e.target.textContent !== '☰') return;
          isDragging = true;
          const touch = e.touches[0];
          dragOffsetX = touch.clientX - routingPanel.getBoundingClientRect().left;
          dragOffsetY = touch.clientY - routingPanel.getBoundingClientRect().top;
          routingPanel.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          const x = e.clientX - dragOffsetX;
          const y = e.clientY - dragOffsetY;
          routingPanel.style.left = Math.max(0, Math.min(x, window.innerWidth - routingPanel.offsetWidth)) + 'px';
          routingPanel.style.bottom = 'auto';
          routingPanel.style.top = Math.max(0, Math.min(y, window.innerHeight - routingPanel.offsetHeight)) + 'px';
        });

        document.addEventListener('touchmove', (e) => {
          if (!isDragging) return;
          const touch = e.touches[0];
          const x = touch.clientX - dragOffsetX;
          const y = touch.clientY - dragOffsetY;
          routingPanel.style.left = Math.max(0, Math.min(x, window.innerWidth - routingPanel.offsetWidth)) + 'px';
          routingPanel.style.bottom = 'auto';
          routingPanel.style.top = Math.max(0, Math.min(y, window.innerHeight - routingPanel.offsetHeight)) + 'px';
        });

        document.addEventListener('mouseup', () => {
          isDragging = false;
          routingPanel.style.cursor = 'grab';
        });

        document.addEventListener('touchend', () => {
          isDragging = false;
          routingPanel.style.cursor = 'grab';
        });

        // Add routing button to booth popup
        const showRoutingBtn = document.createElement('button');
        showRoutingBtn.className = 'booth-popup-btn';
        showRoutingBtn.textContent = '→ Get Directions';
        showRoutingBtn.id = 'btn-routing';

        function calculatePathDistance(path) {
          let distance = 0;
          for (let i = 1; i < path.length; i++) {
            const dx = path[i].x - path[i-1].x;
            const dy = path[i].y - path[i-1].y;
            distance += Math.sqrt(dx*dx + dy*dy);
          }
          return distance;
        }

        function smoothPath(path) {
          if (path.length < 2) return path;
          if (path.length === 2) return path; // Don't smooth 2-point paths
          
          const smooth = [];
          smooth.push(path[0]); // Always include first point
          
          // Use Catmull-Rom spline for smooth curves that pass through original points
          for (let i = 0; i < path.length - 1; i++) {
            const p0 = i > 0 ? path[i - 1] : path[0];
            const p1 = path[i];
            const p2 = path[i + 1];
            const p3 = i + 2 < path.length ? path[i + 2] : path[path.length - 1];
            
            // Generate 2 intermediate points between p1 and p2
            for (let t = 0.25; t < 1; t += 0.25) {
              const t2 = t * t;
              const t3 = t2 * t;
              
              const q = 0.5 * (
                (2 * p1.x) +
                (-p0.x + p2.x) * t +
                (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
                (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3
              );
              
              const r = 0.5 * (
                (2 * p1.y) +
                (-p0.y + p2.y) * t +
                (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
                (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3
              );
              
              smooth.push({ x: q, y: r });
            }
            
            // Include the next original point
            if (i + 1 < path.length - 1) {
              smooth.push(path[i + 1]);
            }
          }
          
          smooth.push(path[path.length - 1]); // Always include last point
          return smooth;
        }

        // Animation loop
        let lastFrameTime = Date.now();
        function animate() {
          const now = Date.now();
          const delta = now - lastFrameTime;
          lastFrameTime = now;
          pathAnimationTime += delta;
          if (routePath) {
            drawAll();
          }
          requestAnimationFrame(animate);
        }
        animate();

        map.on('move zoom', drawAll);
        map.on('moveend', () => {
          const center = map.getCenter();
          const zoom = map.getZoom();
          saveMapState(center, zoom);
        });
        window.addEventListener('resize', () => {
          try { map.invalidateSize(); } catch (e) {}
          try { resizeCanvas(); } catch (e) {}
          try { drawAll(); } catch (e) {}
        });

        // Show routing panel when clicking a booth
        const originalShowPopup = showPopup;
        showPopup = function(element) {
          originalShowPopup(element);
          
          // Add routing button to popup actions
          const actionsDiv = document.querySelector('.booth-popup-actions');
          let routingBtn = document.getElementById('btn-routing');
          if (!routingBtn) {
            routingBtn = document.createElement('button');
            routingBtn.className = 'booth-popup-btn';
            routingBtn.textContent = '→ Route';
            routingBtn.id = 'btn-routing';
            routingBtn.addEventListener('click', () => {
              routingPanel.classList.remove('hidden');
              routingTo.value = element.id;
              hidePopup();
            });
            actionsDiv.appendChild(routingBtn);
          } else {
            routingBtn.onclick = () => {
              routingPanel.classList.remove('hidden');
              routingTo.value = element.id;
              hidePopup();
            };
          }
        };

        // Ensure canvas and map rendering happen after Leaflet is fully ready.
        // Multiple timeouts help account for CSS layout, tile loading, and DOM settling.
        resizeCanvas();
        try {
          map.whenReady(() => {
            // Apply overlay settings
            applyOverlaySettings();
            // First redraw: map is initialized
            setTimeout(() => {
              try { resizeCanvas(); } catch (e) {}
              try { drawAll(); } catch (e) {}
            }, 100);
            // Second redraw: give tiles time to request
            setTimeout(() => {
              try { map.invalidateSize(); } catch (e) {}
              try { resizeCanvas(); } catch (e) {}
              try { drawAll(); } catch (e) {}
            }, 300);
          });
        } catch (e) {}
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initViewer);
      } else {
        initViewer();
      }
    <\/script>
  </body>
</html>
`,F=new Blob([z],{type:"text/html;charset=utf-8"});Er("event-layout-viewer.html",F)}function ro(s,f){const c=new Blob([JSON.stringify(f,null,2)],{type:"application/json;charset=utf-8"}),_=URL.createObjectURL(c),l=document.createElement("a");l.href=_,l.download=s,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(_)}function Cr(s,f,c,_){function l(){const h={venue:s.venue,layout:s.layout,tiers:s.tiers,settings:s.settings,history:[]};ro("event-venue-project.json",h)}function S(){ro("event-venue-tiers.json",_.getTiers())}function w(){const h=document.getElementById("map-container"),H=document.getElementById("map-canvas");if(!h||!H)return;const O=document.createElement("canvas"),C=h.getBoundingClientRect(),z=window.devicePixelRatio||1;O.width=C.width*z,O.height=C.height*z;const F=O.getContext("2d");F.fillStyle="#020617",F.fillRect(0,0,O.width,O.height),F.drawImage(H,0,0,O.width,O.height),O.toBlob(tt=>{if(!tt)return;const E=URL.createObjectURL(tt),ht=document.createElement("a");ht.href=E,ht.download="event-layout-snapshot.png",document.body.appendChild(ht),ht.click(),document.body.removeChild(ht),URL.revokeObjectURL(E)},"image/png",.92)}function G(){Ir({venue:s.venue,layout:s.layout,tiers:s.tiers,settings:s.settings})}return{exportFullProject:l,exportTiers:S,exportPngSnapshot:w,generateViewer:G}}function Sr({appState:s,mapEngine:f,canvasEngine:c,storageManager:_,historyManager:l,tierManager:S,elementModel:w,venueStore:G,exportManager:h}){const H=document.getElementById("venue-selection-screen"),O=document.getElementById("admin-app"),C=document.getElementById("mapping-disabled-overlay"),z=document.getElementById("navbar-venue-name"),F=document.getElementById("tool-add-rect"),tt=document.getElementById("tool-add-ellipse"),E=document.getElementById("tool-add-polygon"),ht=document.getElementById("tool-add-image"),V=document.getElementById("btn-undo"),et=document.getElementById("btn-redo"),$=document.getElementById("btn-clear-project"),Et=document.getElementById("tier-list"),dt=document.getElementById("tier-form"),St=document.getElementById("tier-name-input"),Mt=document.getElementById("tier-width-input"),kt=document.getElementById("tier-height-input"),v=document.getElementById("tier-color-input"),P=document.getElementById("grid-toggle"),R=document.getElementById("snap-toggle"),y=document.getElementById("grid-size-input"),U=document.getElementById("layers-panel"),D=document.getElementById("map-mode-toggle"),q=document.getElementById("overlay-background-input"),W=document.getElementById("overlay-opacity-input"),at=document.getElementById("overlay-opacity-value"),B=document.getElementById("overlay-stroke-input"),rt=document.getElementById("overlay-stroke-width-input"),k=document.getElementById("overlay-stroke-width-value"),Z=document.getElementById("overlay-glow-color-input"),nt=document.getElementById("overlay-glow-intensity-input"),ot=document.getElementById("overlay-glow-intensity-value"),x=document.getElementById("overlay-shadow-blur-input"),g=document.getElementById("overlay-shadow-blur-value"),b=document.getElementById("overlay-border-radius-input"),lt=document.getElementById("overlay-border-radius-value"),ft=document.getElementById("no-selection-panel"),Bt=document.getElementById("element-form"),Rt=document.getElementById("element-id"),Ot=document.getElementById("element-type-label"),Zt=document.getElementById("element-name-input"),zt=document.getElementById("element-tier-select"),Ee=document.getElementById("element-width-input"),Ie=document.getElementById("element-height-input"),Ce=document.getElementById("element-rotation-input"),fe=document.getElementById("element-radius-input"),se=document.getElementById("element-locked-input"),tn=document.getElementById("element-color-input"),Se=document.getElementById("element-show-fill-input"),ie=document.getElementById("element-opacity-input"),Me=document.getElementById("element-opacity-value"),ke=document.getElementById("element-border-color-input"),en=document.getElementById("element-show-border-input"),nn=document.getElementById("element-text-color-input"),me=document.getElementById("element-logo-input"),Be=document.getElementById("element-notes-input"),on=document.getElementById("btn-duplicate-element"),zn=document.getElementById("btn-delete-element"),rn=document.getElementById("btn-layer-forward"),sn=document.getElementById("btn-layer-backward"),An=document.getElementById("btn-recenter-map"),an=document.getElementById("btn-change-venue"),Oe=document.getElementById("btn-import-project"),ln=document.getElementById("btn-export-project"),Rn=document.getElementById("btn-export-tiers"),ae=document.getElementById("btn-export-png"),Zn=document.getElementById("btn-generate-viewer");function cn(){s.mode="venue-selection",H.classList.remove("hidden"),O.classList.add("hidden")}function hn(){s.mode="mapping",H.classList.add("hidden"),O.classList.remove("hidden"),C.classList.add("pointer-events-none"),C.classList.add("hidden"),ze(),f.invalidateSize();try{c&&typeof c.resize=="function"&&(c.resize(),setTimeout(()=>{f.invalidateSize(),c.resize()},120))}catch{}}function pe(){z&&(s.venue?z.textContent=s.venue.name||s.venue.display_name||"Selected Venue":z.textContent="No venue selected")}function ze(){const m=s.mode==="mapping"&&!!s.venue;[F,tt,E,V,et,$].forEach(T=>{T&&(T.disabled=!m)})}function $t(m){if(console.log("Ensuring hex format for color:",m),!m)return"#000000";if(typeof m=="string"&&m.startsWith("#"))return m.length===4?"#"+m[1]+m[1]+m[2]+m[2]+m[3]+m[3]:m.length===7?m:"#000000";const T=m.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);if(T){const A=parseInt(T[1],10).toString(16).padStart(2,"0"),K=parseInt(T[2],10).toString(16).padStart(2,"0"),J=parseInt(T[3],10).toString(16).padStart(2,"0");return`#${A}${K}${J}`}return"#000000"}function Ae(){if(!D)return;(s.settings.interactionMode||"edit")==="navigate"?(D.textContent="Map: Navigate",D.classList.add("bg-slate-800"),D.classList.remove("bg-slate-900/80")):(D.textContent="Map: Edit Layout",D.classList.add("bg-slate-900/80"),D.classList.remove("bg-slate-800"))}function Ft(){const m=document.querySelectorAll(".leaflet-overlay-pane .leaflet-interactive"),T=s.settings.overlayBackgroundColor||"#000000",A=(s.settings.overlayOpacity||0)/100,K=s.settings.overlayStrokeColor||"#ffffff",J=s.settings.overlayStrokeWidth||1,mt=s.settings.overlayShadowBlur||0,Tt=s.settings.overlayGlowIntensity||0,st=s.settings.overlayBorderRadius||0;m.forEach(vt=>{vt.style.fill=T,vt.style.fillOpacity=A.toString(),vt.style.stroke=K,vt.style.strokeWidth=J.toString();let gt=[];if(mt>0||Tt>0){const pt=mt*.5,ge=mt,De=s.settings.overlayGlowColor||"#000000",Wn=Tt/100;gt.push(`drop-shadow(${pt}px ${ge}px ${mt}px rgba(${parseInt(De.slice(1,3),16)}, ${parseInt(De.slice(3,5),16)}, ${parseInt(De.slice(5,7),16)}, ${Wn}))`)}if(st>0){const pt=Math.min(st/5,4),ge=Math.max(20-st/2.5,1);gt.push(`blur(${pt}px) contrast(${ge})`)}else gt.push("blur(0.5px) contrast(20)");vt.style.filter=gt.join(" ")||"none"}),typeof f.updateVenueLayerStyle=="function"&&f.updateVenueLayerStyle(s.settings)}function Re(){if(!Et)return;const m=S.getTiers();Et.innerHTML="",m.forEach(T=>{const A=document.createElement("button");A.type="button",A.className="w-full flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/70 px-2 py-1.5 text-left text-xs mb-1",A.innerHTML=`
        <div class="flex items-center gap-2">
          <span class="inline-block h-3 w-3 rounded-full" style="background:${T.defaultColor};"></span>
          <span class="font-medium text-slate-100">${T.name}</span>
        </div>
        <span class="text-[10px] text-slate-400">${T.defaultWidth}×${T.defaultHeight}</span>
      `,A.addEventListener("click",()=>{zt.value=T.name}),Et.appendChild(A)}),zt&&(zt.innerHTML="",m.forEach(T=>{const A=document.createElement("option");A.value=T.name,A.textContent=T.name,zt.appendChild(A)}))}function wt(){if(!U)return;const m=[...s.layout].sort((T,A)=>(A.zIndex||0)-(T.zIndex||0));if(U.innerHTML="",m.length===0){U.innerHTML='<div class="px-2 py-2 text-[11px] text-slate-500">No elements yet.</div>';return}m.forEach(T=>{const A=document.createElement("button");A.type="button",A.className="w-full flex items-center justify-between px-2 py-1.5 text-left text-[11px] hover:bg-slate-800/80",T.id===s.selectedElementId&&A.classList.add("bg-slate-800/80"),A.innerHTML=`
        <div class="flex items-center gap-2">
          <span class="inline-block h-2.5 w-2.5 rounded-full border border-slate-700" style="background:${T.color||"#22c55e"};"></span>
          <span class="font-medium text-slate-100 truncate max-w-[120px]">${T.name||"(Untitled)"}</span>
        </div>
        <span class="text-[10px] text-slate-400">${T.tier||""}</span>
      `,A.addEventListener("click",()=>{s.selectedElementId=T.id,It(),wt()}),U.appendChild(A)})}function It(){const m=s.layout.find(J=>J.id===s.selectedElementId);if(!m){ft.classList.remove("hidden"),Bt.classList.add("hidden");return}ft.classList.add("hidden"),Bt.classList.remove("hidden"),Rt.value=m.id;const T=m.type==="rectangle"?"Rectangle (Booth)":m.type==="ellipse"?"Ellipse (Booth)":m.type==="polygon"?"Polygon (Area)":m.type==="image"?"Image Layer":m.type;Ot.textContent=T;const A=Bt.querySelector("label:has(#element-logo-input) span");A&&(A.textContent=m.type==="image"?"Image URL":"Logo URL"),Zt.value=m.name||"",zt.value=m.tier||S.getDefaultTier().name,Ee.value=m.width,Ie.value=m.height,Ce.value=m.rotation||0,fe.value=m.radius||0,se.checked=!!m.locked,tn.value=$t(m.color||"#22c55e"),Se.checked=m.showFill!==void 0?m.showFill:!0;const K=m.colorOpacity!==void 0?m.colorOpacity:100;ie.value=K,Me.textContent=`${K}%`,ke.value=$t(m.borderColor||"#0f172a"),en.checked=m.showBorder!==void 0?m.showBorder:!0,nn.value=$t(m.textColor||"#0f172a"),me.value=m.logo||"",Be.value=m.notes||""}function qt({dx:m=0,dy:T=0,dRotation:A=0}){const K=s.selectedElementId;if(!K)return;const J=s.layout.find(Tt=>Tt.id===K);if(!J||J.locked)return;let mt=!1;if(m!==0||T!==0){const Tt=f.latLngToContainerPoint(J.lat,J.lng);let st={x:Tt.x+m,y:Tt.y+T};s.settings.snapToGrid&&(st=ao(st,s.settings.gridSize));const vt=f.containerPointToLatLng(st.x,st.y);J.lat=vt.lat,J.lng=vt.lng,mt=!0}if(A!==0){let st=(typeof J.rotation=="number"?J.rotation:0)+A;st=(st%360+360)%360,J.rotation=st,mt=!0}mt&&(fn(),_.saveToStorage(),It(),wt())}function Nn(){const m=Rt.value;if(!m)return;const T=parseFloat(Ee.value)||40,A=parseFloat(Ie.value)||40,K=parseFloat(Ce.value)||0,J=parseFloat(fe.value)||0,mt=parseFloat(ie.value)||100;w.updateElement(m,{name:Zt.value||"",tier:zt.value||S.getDefaultTier().name,width:T,height:A,rotation:K,radius:J,locked:se.checked,color:tn.value||"#22c55e",showFill:Se.checked,colorOpacity:mt,borderColor:ke.value||"#0f172a",showBorder:en.checked,textColor:nn.value||"#0f172a",logo:me.value||"",notes:Be.value||""}),l.record(),_.saveToStorage(),wt()}function Ze(m){if(!s.venue)return;const T=f.map.getCenter(),A=zt.value||S.getDefaultTier().name;let K;if(m==="rectangle")K=w.createRectangle({lat:T.lat,lng:T.lng,tierName:A});else if(m==="ellipse")K=w.createEllipse({lat:T.lat,lng:T.lng,tierName:A});else if(m==="image")K=w.createImage({lat:T.lat,lng:T.lng,tierName:A});else if(m==="polygon"){const mt=[{lat:T.lat+1e-4,lng:T.lng-1e-4},{lat:T.lat+1e-4,lng:T.lng+1e-4},{lat:T.lat-1e-4,lng:T.lng}];K=w.createPolygon({points:mt,tierName:A})}K&&(l.record(),s.layout.push(K),s.selectedElementId=K.id,_.saveToStorage(),It(),wt())}function Dn(){window.confirm("Clear current project? This will remove all elements.")&&(s.layout=[],s.selectedElementId=null,_.saveToStorage(),wt(),It())}F?.addEventListener("click",()=>Ze("rectangle")),tt?.addEventListener("click",()=>Ze("ellipse")),ht?.addEventListener("click",()=>Ze("image")),E?.addEventListener("click",()=>{s.currentTool==="free-draw"?(s.currentTool=null,E.classList.remove("bg-slate-800")):(s.currentTool="free-draw",E.classList.add("bg-slate-800"))}),window.addEventListener("app-selection-changed",m=>{s.selectedElementId=m.detail,It(),wt()}),window.addEventListener("app-element-updated",m=>{m.detail?.id&&(l.record(),_.saveToStorage(),It(),wt())}),window.addEventListener("app-free-draw-complete",m=>{const T=m.detail?.points;if(!Array.isArray(T)||T.length<3)return;l.record();const A=zt.value||S.getDefaultTier().name,K=w.createPolygon({points:T,tierName:A});s.layout.push(K),s.selectedElementId=K.id,s.currentTool=null,E&&E.classList.remove("bg-slate-800"),_.saveToStorage(),It(),wt()}),V?.addEventListener("click",()=>{l.undo(),wt(),It(),typeof c.drawAll=="function"&&c.drawAll()}),et?.addEventListener("click",()=>{l.redo(),wt(),It(),typeof c.drawAll=="function"&&c.drawAll()}),$?.addEventListener("click",Dn),D?.addEventListener("click",()=>{const T=(s.settings.interactionMode||"edit")==="edit"?"navigate":"edit";s.settings.interactionMode=T,_.saveToStorage(),c&&typeof c.setInteractionMode=="function"&&c.setInteractionMode(T),Ae()}),dt?.addEventListener("submit",m=>{m.preventDefault();const T=(St.value||"").trim();if(!T)return;const A=parseFloat(Mt.value)||60,K=parseFloat(kt.value)||50,J=v.value||"#22c55e",mt={name:T,defaultWidth:A,defaultHeight:K,defaultColor:J,defaultTextColor:"#0f172a"};l.record(),S.addTier(mt),St.value="",Mt.value="",kt.value="",_.saveToStorage(),Re()}),P?.addEventListener("change",()=>{s.settings.showGrid=P.checked,_.saveToStorage()}),R?.addEventListener("change",()=>{s.settings.snapToGrid=R.checked,_.saveToStorage()}),y?.addEventListener("change",()=>{const m=parseInt(y.value,10)||16;s.settings.gridSize=Math.min(Math.max(m,4),128),y.value=s.settings.gridSize,_.saveToStorage()});let un=null;const Nt=500;function M(){clearTimeout(un),un=setTimeout(()=>{l.record()},Nt)}q?.addEventListener("change",()=>{s.settings.overlayBackgroundColor=q.value,Ft(),M(),_.saveToStorage()}),W?.addEventListener("input",()=>{const m=parseInt(W.value,10)||0;s.settings.overlayOpacity=m,at.textContent=`${m}%`,Ft(),M(),_.saveToStorage()}),B?.addEventListener("change",()=>{s.settings.overlayStrokeColor=B.value,Ft(),M(),_.saveToStorage()}),rt?.addEventListener("input",()=>{const m=parseFloat(rt.value)||1;s.settings.overlayStrokeWidth=m,k.textContent=`${m}px`,Ft(),M(),_.saveToStorage()}),Z?.addEventListener("change",()=>{s.settings.overlayGlowColor=Z.value,Ft(),M(),_.saveToStorage()}),nt?.addEventListener("input",()=>{const m=parseInt(nt.value,10)||0;s.settings.overlayGlowIntensity=m,ot.textContent=`${m}%`,Ft(),M(),_.saveToStorage()}),x?.addEventListener("input",()=>{const m=parseInt(x.value,10)||0;s.settings.overlayShadowBlur=m,g.textContent=`${m}px`,Ft(),M(),_.saveToStorage()}),b?.addEventListener("input",()=>{const m=parseInt(b.value,10)||0;s.settings.overlayBorderRadius=m,lt.textContent=`${m}px`,Ft(),M(),_.saveToStorage()}),Bt?.addEventListener("input",()=>{Nn()}),ie?.addEventListener("input",()=>{const m=parseInt(ie.value,10)||100;Me.textContent=`${m}%`}),on?.addEventListener("click",()=>{if(!s.selectedElementId)return;const m=s.layout.find(A=>A.id===s.selectedElementId);if(!m)return;l.record();const T=w.duplicateElement(m);s.layout.push(T),s.selectedElementId=T.id,_.saveToStorage(),It(),wt()}),zn?.addEventListener("click",()=>{s.selectedElementId&&(l.record(),w.removeElement(s.selectedElementId),s.selectedElementId=null,_.saveToStorage(),It(),wt())}),rn?.addEventListener("click",()=>{const m=s.selectedElementId;if(!m)return;const T=s.layout.find(A=>A.id===m);T&&(l.record(),T.zIndex=(T.zIndex||1)+1,_.saveToStorage(),wt())}),sn?.addEventListener("click",()=>{const m=s.selectedElementId;if(!m)return;const T=s.layout.find(A=>A.id===m);T&&(l.record(),T.zIndex=Math.max(1,(T.zIndex||1)-1),_.saveToStorage(),wt())});let Ne=0;const dn=300;function fn(){const m=Date.now();m-Ne>=dn&&(l.record(),Ne=m)}window.addEventListener("keydown",m=>{if(s.mode!=="mapping")return;const T=document.activeElement;if(T&&["INPUT","TEXTAREA","SELECT"].includes(T.tagName))return;const A=!!s.settings.snapToGrid,K=Math.max(4,s.settings.gridSize||16);let J=A?K:4;m.shiftKey&&(J*=4),(m.ctrlKey||m.metaKey)&&(J=Math.max(1,Math.floor(J/4)));const mt=(s.settings.interactionMode||"edit")==="navigate",Tt=!!s.selectedElementId;if(m.code==="Space"){const gt=mt?"edit":"navigate";s.settings.interactionMode=gt,_.saveToStorage(),c&&typeof c.setInteractionMode=="function"&&c.setInteractionMode(gt),Ae(),m.preventDefault();return}let st=!1;const vt=(gt,pt)=>{try{f&&f.map&&typeof f.map.panBy=="function"&&f.map.panBy([gt,pt])}catch{}};switch(m.key){case"ArrowUp":{const pt=-J;mt||!Tt?vt(0,pt):qt({dx:0,dy:pt}),st=!0;break}case"ArrowDown":{const pt=J;mt||!Tt?vt(0,pt):qt({dx:0,dy:pt}),st=!0;break}case"ArrowLeft":{const gt=-J,pt=0;mt||!Tt?vt(gt,pt):qt({dx:gt,dy:pt}),st=!0;break}case"ArrowRight":{const gt=J,pt=0;mt||!Tt?vt(gt,pt):qt({dx:gt,dy:pt}),st=!0;break}case"q":case"Q":Tt&&(qt({dRotation:-5}),st=!0);break;case"e":case"E":Tt&&(qt({dRotation:5}),st=!0);break;case"w":case"W":vt(0,-J),st=!0;break;case"s":case"S":vt(0,J),st=!0;break;case"a":case"A":vt(-J,0),st=!0;break;case"d":case"D":vt(J,0),st=!0;break;case"+":case"=":try{f&&f.map&&f.map.zoomIn(),st=!0}catch{}break;case"-":try{f&&f.map&&f.map.zoomOut(),st=!0}catch{}break;case"c":case"C":m.altKey&&typeof f.fitToVenue=="function"&&(f.fitToVenue(),st=!0);break}st&&m.preventDefault()}),An?.addEventListener("click",()=>{typeof f.fitToVenue=="function"&&f.fitToVenue()}),an?.addEventListener("click",()=>{window.confirm("Change venue? Current layout will remain but be associated with a new venue.")&&cn()}),Oe?.addEventListener("click",async()=>{const m=document.createElement("input");m.type="file",m.accept="application/json",m.addEventListener("change",async()=>{const T=m.files?.[0];if(!T)return;const A=await T.text();try{const K=JSON.parse(A);K.venue&&s.venue&&K.venue.id!==s.venue.id&&(window.confirm("Imported project venue does not match current venue. Override current venue with imported one?")||(K.venue=s.venue)),_.importProject(K,{overwrite:!0}),s.mode="mapping",pe(),Re(),wt(),It()}catch(K){console.error("Failed to import project",K),window.alert("Failed to import project JSON.")}}),m.click()}),ln?.addEventListener("click",()=>{h.exportFullProject()}),Rn?.addEventListener("click",()=>{h.exportTiers()}),ae?.addEventListener("click",()=>{h.exportPngSnapshot()}),Zn?.addEventListener("click",()=>{if(!s.venue){window.alert("Select a venue before generating a viewer.");return}h.generateViewer()});function mn(){pe(),ze(),Re(),wt(),It()}return console.log({appState:s,overlayBackgroundColor:s?.settings?.overlayBackgroundColor,hext:$t(s.settings.overlayBackgroundColor||"#000000")}),P&&(P.checked=s.settings.showGrid),R&&(R.checked=s.settings.snapToGrid),y&&(y.value=s.settings.gridSize),q&&(q.value=$t(s.settings.overlayBackgroundColor||"#000000")),W&&(W.value=s.settings.overlayOpacity||0),at&&(at.textContent=`${s.settings.overlayOpacity||0}%`),B&&(B.value=$t(s.settings.overlayStrokeColor||"#ffffff")),rt&&(rt.value=s.settings.overlayStrokeWidth||1),k&&(k.textContent=`${s.settings.overlayStrokeWidth||1}px`),Z&&(Z.value=$t(s.settings.overlayGlowColor||"#ffffff")),nt&&(nt.value=s.settings.overlayGlowIntensity||0),ot&&(ot.textContent=`${s.settings.overlayGlowIntensity||0}%`),x&&(x.value=s.settings.overlayShadowBlur||0),g&&(g.textContent=`${s.settings.overlayShadowBlur||0}px`),b&&(b.value=s.settings.overlayBorderRadius||0),lt&&(lt.textContent=`${s.settings.overlayBorderRadius||0}px`),Ae(),Ft(),c&&typeof c.setInteractionMode=="function"&&c.setInteractionMode(s.settings.interactionMode||"edit"),{enterVenueSelectionMode:cn,enterMappingMode:hn,updateVenueName:pe,refreshAll:mn}}const lo="app-theme-preference",Yt={LIGHT:"light",DARK:"dark",SYSTEM:"system"};let Le=Yt.SYSTEM,Jt={};function Mr(){kr(),Jt={light:document.getElementById("btn-theme-light"),dark:document.getElementById("btn-theme-dark"),system:document.getElementById("btn-theme-system")},Jt.light&&Jt.light.addEventListener("click",()=>mi(Yt.LIGHT)),Jt.dark&&Jt.dark.addEventListener("click",()=>mi(Yt.DARK)),Jt.system&&Jt.system.addEventListener("click",()=>mi(Yt.SYSTEM)),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addListener(f=>{Le===Yt.SYSTEM&&pi(Le)}),pi(Le)}function kr(){Le=localStorage.getItem(lo)||Yt.SYSTEM}function mi(s){if(!Object.values(Yt).includes(s)){console.error("Invalid theme:",s);return}Le=s,localStorage.setItem(lo,s),pi(s)}function pi(s){const f=document.documentElement;let c=s;s===Yt.SYSTEM&&(c=window.matchMedia("(prefers-color-scheme: dark)").matches?Yt.DARK:Yt.LIGHT),c===Yt.DARK?f.setAttribute("data-theme","dark"):f.removeAttribute("data-theme"),Br()}function Br(){if(!Jt.light)return;Object.values(Jt).forEach(f=>{f&&(f.classList.remove("bg-emerald-500","text-emerald-950","shadow-md"),f.classList.add("bg-slate-800","text-slate-100"))});const s=Jt[Le];s&&(s.classList.remove("bg-slate-800","text-slate-100"),s.classList.add("bg-emerald-500","text-emerald-950","shadow-md"))}function Or(){try{const f=localStorage.getItem("event-venue-mapper:project-v1");if(f)return JSON.parse(f)}catch(s){console.warn("Failed to load persisted state from localStorage:",s)}return null}const Lt=Or(),Ut={venue:Lt?.venue||null,layout:Array.isArray(Lt?.layout)?Lt.layout:[],tiers:Array.isArray(Lt?.tiers)?Lt.tiers:[],settings:{showGrid:Lt?.settings?.showGrid??!0,snapToGrid:Lt?.settings?.snapToGrid??!0,gridSize:Lt?.settings?.gridSize??16,interactionMode:Lt?.settings?.interactionMode??"edit",overlayBackgroundColor:Lt?.settings?.overlayBackgroundColor??"#000000",overlayOpacity:Lt?.settings?.overlayOpacity??0,overlayStrokeColor:Lt?.settings?.overlayStrokeColor??"#ffffff",overlayStrokeWidth:Lt?.settings?.overlayStrokeWidth??1,overlayGlowColor:Lt?.settings?.overlayGlowColor??"#ffffff",overlayGlowIntensity:Lt?.settings?.overlayGlowIntensity??0,overlayShadowBlur:Lt?.settings?.overlayShadowBlur??0,overlayBorderRadius:Lt?.settings?.overlayBorderRadius??0},selectedElementId:null,mode:"venue-selection"};function so(){Mr();const s=ur(),f=mr(s,Ut),c=yr(Ut),_=xr(Ut,c),l=gr(Ut,c),S=vr(Ut,l),w=wr(Ut,c),G=Cr(Ut,s,f,l),h=Sr({appState:Ut,mapEngine:s,canvasEngine:f,storageManager:c,historyManager:_,tierManager:l,elementModel:S,venueStore:w,exportManager:G});Pr({venueStore:w,appState:Ut,uiController:h,venueLoader:Lr({appState:Ut,mapEngine:s,venueStore:w,storageManager:c,uiController:h})}),Ut.venue?(h.enterMappingMode(),h.updateVenueName()):h.enterVenueSelectionMode(),h.refreshAll()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",so):so();
