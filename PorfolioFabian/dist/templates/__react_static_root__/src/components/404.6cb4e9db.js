(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var r=t(9),o=t.n(r),c=t(11),u=t.n(c),i=t(13),a=t.n(i),f=t(14),l=t.n(f),s=t(8),p=t.n(s),d=t(0),v=t.n(d);function y(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=p()(n);if(e){var o=p()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return l()(this,t)}}var h=function(n){a()(t,n);var e=y(t);function t(){return o()(this,t),e.apply(this,arguments)}return u()(t,[{key:"render",value:function(){return v.a.createElement("p",null,"404 - not found")}},{key:"removeLoadingScreen",value:function(){try{var n=document.querySelector("#loadingScreen");n.animate([{opacity:1},{opacity:0}],{duration:300,delay:1400,iterations:1,easing:"linear"}).onfinish=function(){return n.remove()}}catch(e){console.error("this should not happen; Loading screen couldn't be removed")}}},{key:"componentDidMount",value:function(){this.removeLoadingScreen()}}]),t}(d.Component);e.default=h}}]);