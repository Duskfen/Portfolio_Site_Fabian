(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var o=t(11),r=t.n(o),c=t(12),u=t.n(c),i=t(13),a=t.n(i),f=t(14),s=t.n(f),l=t(7),p=t.n(l),d=t(0),v=t.n(d);function h(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=p()(n);if(e){var r=p()(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return s()(this,t)}}var y=function(n){a()(t,n);var e=h(t);function t(){return r()(this,t),e.apply(this,arguments)}return u()(t,[{key:"render",value:function(){return v.a.createElement("p",null,"404 - not found")}},{key:"removeLoadingScreen",value:function(){try{var n=document.querySelector("#loadingScreen");n.animate([{opacity:1},{opacity:0}],{duration:600,iterations:1,easing:"ease-out"}).onfinish=function(){return n.remove()}}catch(e){console.error("this should not happen; Loading screen couldn't be removed")}}},{key:"componentDidMount",value:function(){this.removeLoadingScreen()}}]),t}(d.Component);e.default=y}}]);