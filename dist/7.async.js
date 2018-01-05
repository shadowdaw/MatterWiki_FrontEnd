webpackJsonp([7],{695:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(15),o=r(i),a=n(372),s=r(a),c=n(747),u=n(369);t.default={namespace:"article",state:{loading:!1,detail:[]},effects:{getArticleDetail:s.default.mark(function e(t,n){var r,i=t.payload,o=n.call,a=n.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"changeLoading",payload:!0});case 2:return e.next=4,o(c.queryArticleDetail,i);case 4:return r=e.sent,e.next=7,a({type:"refreshState",payload:{detail:r.data}});case 7:return e.next=9,a({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),saveArticle:s.default.mark(function e(t,n){var r,i=t.payload,o=n.call,a=n.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"changeLoading",payload:!0});case 2:return e.next=4,o(c.saveArticle,i);case 4:if(r=e.sent,r.error.error){e.next=8;break}return e.next=8,a(u.routerRedux.push("/article/"+r.data.id));case 8:return e.next=10,a({type:"changeLoading",payload:!1});case 10:case"end":return e.stop()}},e,this)}),updateArticle:s.default.mark(function e(t,n){var r,i=t.payload,o=n.call,a=n.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"changeLoading",payload:!0});case 2:return e.next=4,o(c.updateArticle,i);case 4:if(r=e.sent,r.error.error){e.next=8;break}return e.next=8,a(u.routerRedux.push("/article/"+r.data.id));case 8:return e.next=10,a({type:"changeLoading",payload:!1});case 10:case"end":return e.stop()}},e,this)})},reducers:{refreshState:function(e,t){return(0,o.default)({},e,t.payload)},changeLoading:function(e,t){return(0,o.default)({},e,{loading:t.payload})}}},e.exports=t.default},706:function(e,t,n){var r,i;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===i)for(var a in r)o.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(r=[],void 0!==(i=function(){return n}.apply(t,r))&&(e.exports=i))}()},707:function(e,t,n){"use strict";t.__esModule=!0;var r=n(368),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e,t,n){return t in e?(0,i.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},710:function(e,t){},711:function(e,t,n){"use strict";function r(e,t){for(var n=o()({},e),r=0;r<t.length;r++){delete n[t[r]]}return n}var i=n(15),o=n.n(i);t.a=r},712:function(e,t){e.exports=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}},713:function(e,t,n){"use strict";var r={isAppearSupported:function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},isEnterSupported:function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},isLeaveSupported:function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},allowAppearCallback:function(e){return e.transitionAppear||e.animation.appear},allowEnterCallback:function(e){return e.transitionEnter||e.animation.enter},allowLeaveCallback:function(e){return e.transitionLeave||e.animation.leave}};t.a=r},714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),i=n.n(r),o=n(707),a=n.n(o),s=n(6),c=(n.n(s),n(706)),u=n.n(c),l=n(711),f=function(e){var t=e.type,n=e.className,r=void 0===n?"":n,o=e.spin,c=u()(a()({anticon:!0,"anticon-spin":!!o||"loading"===t},"anticon-"+t,!0),r);return s.createElement("i",i()({},Object(l.a)(e,["type","spin"]),{className:c}))};t.default=f},715:function(e,t,n){"use strict";function r(e){var t=e.children;return b.a.isValidElement(t)&&!t.key?b.a.cloneElement(t,{key:k}):t}function i(){}var o=n(15),a=n.n(o),s=n(707),c=n.n(s),u=n(63),l=n.n(u),f=n(64),p=n.n(f),d=n(88),h=n.n(d),y=n(89),m=n.n(y),v=n(6),b=n.n(v),E=n(10),g=n.n(E),w=n(719),A=n(720),T=n(713),k="rc_animate_"+Date.now(),x=function(e){function t(e){l()(this,t);var n=h()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return _.call(n),n.currentlyAnimatingKeys={},n.keysToEnter=[],n.keysToLeave=[],n.state={children:Object(w.e)(r(n.props))},n.childrenRefs={},n}return m()(t,e),p()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter(function(e){return!!e.props[t]})),n.forEach(function(t){t&&e.performAppear(t.key)})}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.nextProps=e;var n=Object(w.e)(r(e)),i=this.props;i.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach(function(e){t.stop(e)});var o=i.showProp,a=this.currentlyAnimatingKeys,s=i.exclusive?Object(w.e)(r(i)):this.state.children,u=[];o?(s.forEach(function(e){var t=e&&Object(w.a)(n,e.key),r=void 0;(r=t&&t.props[o]||!e.props[o]?t:b.a.cloneElement(t||e,c()({},o,!0)))&&u.push(r)}),n.forEach(function(e){e&&Object(w.a)(s,e.key)||u.push(e)})):u=Object(w.d)(s,n),this.setState({children:u}),n.forEach(function(e){var n=e&&e.key;if(!e||!a[n]){var r=e&&Object(w.a)(s,n);if(o){var i=e.props[o];if(r){!Object(w.b)(s,n,o)&&i&&t.keysToEnter.push(n)}else i&&t.keysToEnter.push(n)}else r||t.keysToEnter.push(n)}}),s.forEach(function(e){var r=e&&e.key;if(!e||!a[r]){var i=e&&Object(w.a)(n,r);if(o){var s=e.props[o];if(i){!Object(w.b)(n,r,o)&&s&&t.keysToLeave.push(r)}else s&&t.keysToLeave.push(r)}else i||t.keysToLeave.push(r)}})}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?Object(w.b)(e,t,n):Object(w.a)(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,t=this.props;this.nextProps=t;var n=this.state.children,r=null;n&&(r=n.map(function(n){if(null===n||void 0===n)return n;if(!n.key)throw new Error("must set key for <rc-animate> children");return b.a.createElement(A.a,{key:n.key,ref:function(t){return e.childrenRefs[n.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},n)}));var i=t.component;if(i){var o=t;return"string"==typeof i&&(o=a()({className:t.className,style:t.style},t.componentProps)),b.a.createElement(i,o,r)}return r[0]||null}}]),t}(b.a.Component);x.propTypes={component:g.a.any,componentProps:g.a.object,animation:g.a.object,transitionName:g.a.oneOfType([g.a.string,g.a.object]),transitionEnter:g.a.bool,transitionAppear:g.a.bool,exclusive:g.a.bool,transitionLeave:g.a.bool,onEnd:g.a.func,onEnter:g.a.func,onLeave:g.a.func,onAppear:g.a.func,showProp:g.a.string},x.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:i,onEnter:i,onLeave:i,onAppear:i};var _=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var i=e.props;if(delete e.currentlyAnimatingKeys[t],!i.exclusive||i===e.nextProps){var o=Object(w.e)(r(i));e.isValidChildByKey(o,t)?"appear"===n?T.a.allowAppearCallback(i)&&(i.onAppear(t),i.onEnd(t,!0)):T.a.allowEnterCallback(i)&&(i.onEnter(t),i.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var i=Object(w.e)(r(n));if(e.isValidChildByKey(i,t))e.performEnter(t);else{var o=function(){T.a.allowLeaveCallback(n)&&(n.onLeave(t),n.onEnd(t,!1))};Object(w.c)(e.state.children,i,n.showProp)?o():e.setState({children:i},o)}}}};t.a=x},717:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},718:function(e,t,n){function r(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}try{var i=n(712)}catch(e){var i=n(712)}var o=/\s+/,a=Object.prototype.toString;e.exports=function(e){return new r(e)},r.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~i(t,e)||t.push(e),this.el.className=t.join(" "),this},r.prototype.remove=function(e){if("[object RegExp]"==a.call(e))return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=i(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},r.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this},r.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},r.prototype.array=function(){var e=this.el.getAttribute("class")||"",t=e.replace(/^\s+|\s+$/g,""),n=t.split(o);return""===n[0]&&n.shift(),n},r.prototype.has=r.prototype.contains=function(e){return this.list?this.list.contains(e):!!~i(this.array(),e)}},719:function(e,t,n){"use strict";function r(e){var t=[];return u.a.Children.forEach(e,function(e){t.push(e)}),t}function i(e,t){var n=null;return e&&e.forEach(function(e){n||e&&e.key===t&&(n=e)}),n}function o(e,t,n){var r=null;return e&&e.forEach(function(e){if(e&&e.key===t&&e.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=e}}),r}function a(e,t,n){var r=e.length===t.length;return r&&e.forEach(function(e,i){var o=t[i];e&&o&&(e&&!o||!e&&o?r=!1:e.key!==o.key?r=!1:n&&e.props[n]!==o.props[n]&&(r=!1))}),r}function s(e,t){var n=[],r={},o=[];return e.forEach(function(e){e&&i(t,e.key)?o.length&&(r[e.key]=o,o=[]):o.push(e)}),t.forEach(function(e){e&&r.hasOwnProperty(e.key)&&(n=n.concat(r[e.key])),n.push(e)}),n=n.concat(o)}t.e=r,t.a=i,t.b=o,t.c=a,t.d=s;var c=n(6),u=n.n(c)},720:function(e,t,n){"use strict";var r=n(43),i=n.n(r),o=n(63),a=n.n(o),s=n(64),c=n.n(s),u=n(88),l=n.n(u),f=n(89),p=n.n(f),d=n(6),h=n.n(d),y=n(366),m=n.n(y),v=n(10),b=n.n(v),E=n(721),g=n(713),w={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},A=function(e){function t(){return a()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),c()(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){g.a.isEnterSupported(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){g.a.isAppearSupported(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){g.a.isLeaveSupported(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,r=m.a.findDOMNode(this),o=this.props,a=o.transitionName,s="object"===(void 0===a?"undefined":i()(a));this.stop();var c=function(){n.stopper=null,t()};if((E.b||!o.animation[e])&&a&&o[w[e]]){var u=s?a[e]:a+"-"+e,l=u+"-active";s&&a[e+"Active"]&&(l=a[e+"Active"]),this.stopper=Object(E.a)(r,{name:u,active:l},c)}else this.stopper=o.animation[e](r,c)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(h.a.Component);A.propTypes={children:b.a.any},t.a=A},721:function(e,t,n){"use strict";function r(e,t){for(var n=window.getComputedStyle(e,null),r="",i=0;i<d.length&&!(r=n.getPropertyValue(d[i]+t));i++);return r}function i(e){if(f){var t=parseFloat(r(e,"transition-delay"))||0,n=parseFloat(r(e,"transition-duration"))||0,i=parseFloat(r(e,"animation-delay"))||0,o=parseFloat(r(e,"animation-duration"))||0,a=Math.max(n+t,o+i);e.rcEndAnimTimeout=setTimeout(function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()},1e3*a+200)}}function o(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}n.d(t,"b",function(){return f});var a=n(43),s=n.n(a),c=n(722),u=n(718),l=n.n(u),f=0!==c.a.endEvents.length,p=["Webkit","Moz","O","ms"],d=["-webkit-","-moz-","-o-","ms-",""],h=function(e,t,n){var r="object"===(void 0===t?"undefined":s()(t)),a=r?t.name:t,u=r?t.active:t+"-active",f=n,p=void 0,d=void 0,h=l()(e);return n&&"[object Object]"===Object.prototype.toString.call(n)&&(f=n.end,p=n.start,d=n.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),o(e),h.remove(a),h.remove(u),c.a.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,f&&f())},c.a.addEndEventListener(e,e.rcEndListener),p&&p(),h.add(a),e.rcAnimTimeout=setTimeout(function(){e.rcAnimTimeout=null,h.add(u),d&&setTimeout(d,0),i(e)},30),{stop:function(){e.rcEndListener&&e.rcEndListener()}}};h.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),o(e),c.a.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},c.a.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout(function(){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n]);e.rcAnimTimeout=null,i(e)},0)},h.setTransition=function(e,t,n){var r=t,i=n;void 0===n&&(i=r,r=""),r=r||"",p.forEach(function(t){e.style[t+"Transition"+r]=i})},h.isCssAnimationSupported=f,t.a=h},722:function(e,t,n){"use strict";function r(e,t,n){e.addEventListener(t,n,!1)}function i(e,t,n){e.removeEventListener(t,n,!1)}var o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},a=[];"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||delete o.animationend.animation,"TransitionEvent"in window||delete o.transitionend.transition;for(var n in o)if(o.hasOwnProperty(n)){var r=o[n];for(var i in r)if(i in t){a.push(r[i]);break}}}();var s={addEndEventListener:function(e,t){if(0===a.length)return void window.setTimeout(t,0);a.forEach(function(n){r(e,n,t)})},endEvents:a,removeEndEventListener:function(e,t){0!==a.length&&a.forEach(function(n){i(e,n,t)})}};t.a=s},723:function(e,t,n){"use strict";function r(){var e=[].slice.call(arguments,0);return 1===e.length?e[0]:function(){for(var t=0;t<e.length;t++)e[t]&&e[t].apply&&e[t].apply(this,arguments)}}t.a=r},729:function(e,t,n){"use strict";var r=n(730);t.a=r.a},730:function(e,t,n){"use strict";function r(){return"rcNotification_"+P+"_"+j++}var i=n(717),o=n.n(i),a=n(707),s=n.n(a),c=n(15),u=n.n(c),l=n(63),f=n.n(l),p=n(64),d=n.n(p),h=n(88),y=n.n(h),m=n(89),v=n.n(m),b=n(6),E=n.n(b),g=n(10),w=n.n(g),A=n(366),T=n.n(A),k=n(715),x=n(723),_=n(706),O=n.n(_),L=n(731),j=0,P=Date.now(),C=function(e){function t(){var e,n,i,o;f()(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=i=y()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={notices:[]},i.add=function(e){var t=e.key=e.key||r();i.setState(function(n){var r=n.notices;if(!r.filter(function(e){return e.key===t}).length)return{notices:r.concat(e)}})},i.remove=function(e){i.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==e})}})},o=n,y()(i,o)}return v()(t,e),d()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,r=this.state.notices.map(function(e){var r=Object(x.a)(t.remove.bind(t,e.key),e.onClose);return E.a.createElement(L.a,u()({prefixCls:n.prefixCls},e,{onClose:r}),e.content)}),i=(e={},s()(e,n.prefixCls,1),s()(e,n.className,!!n.className),e);return E.a.createElement("div",{className:O()(i),style:n.style},E.a.createElement(k.a,{transitionName:this.getTransitionName()},r))}}]),t}(b.Component);C.propTypes={prefixCls:w.a.string,transitionName:w.a.string,animation:w.a.oneOfType([w.a.string,w.a.object]),style:w.a.object},C.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},C.newInstance=function(e,t){function n(e){c||(c=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){T.a.unmountComponentAtNode(s),i||document.body.removeChild(s)}}))}var r=e||{},i=r.getContainer,a=o()(r,["getContainer"]),s=void 0;i?s=i():(s=document.createElement("div"),document.body.appendChild(s));var c=!1;T.a.render(E.a.createElement(C,u()({},a,{ref:n})),s)},t.a=C},731:function(e,t,n){"use strict";var r=n(707),i=n.n(r),o=n(63),a=n.n(o),s=n(64),c=n.n(s),u=n(88),l=n.n(u),f=n(89),p=n.n(f),d=n(6),h=n.n(d),y=n(706),m=n.n(y),v=n(10),b=n.n(v),E=function(e){function t(){var e,n,r,i;a()(this,t);for(var o=arguments.length,s=Array(o),c=0;c<o;c++)s[c]=arguments[c];return n=r=l()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.close=function(){r.clearCloseTimer(),r.props.onClose()},r.startCloseTimer=function(){r.props.duration&&(r.closeTimer=setTimeout(function(){r.close()},1e3*r.props.duration))},r.clearCloseTimer=function(){r.closeTimer&&(clearTimeout(r.closeTimer),r.closeTimer=null)},i=n,l()(r,i)}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",r=(e={},i()(e,""+n,1),i()(e,n+"-closable",t.closable),i()(e,t.className,!!t.className),e);return h.a.createElement("div",{className:m()(r),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer},h.a.createElement("div",{className:n+"-content"},t.children),t.closable?h.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},h.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(d.Component);E.propTypes={duration:b.a.number,onClose:b.a.func,children:b.a.any},E.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},t.a=E},747:function(e,t,n){"use strict";function r(e){return(0,l.default)("/api/authenticate",{method:"POST",body:e})}function i(){return(0,l.default)("/api/topics",{})}function o(e){return null==e.topicId?(0,l.default)("/api/articles",{}):(0,l.default)("/api/topic/"+e.topicId+"/articles",{})}function a(e){return(0,l.default)("/api/articles/",{method:"PUT",body:e})}function s(e){return(0,l.default)("/api/articles/",{method:"POST",body:e})}function c(e){return(0,l.default)("/api/articles/"+e.id,{})}Object.defineProperty(t,"__esModule",{value:!0}),t.dologin=r,t.queryTopic=i,t.queryArticles=o,t.updateArticle=a,t.saveArticle=s,t.queryArticleDetail=c;var u=n(748),l=function(e){return e&&e.__esModule?e:{default:e}}(u)},748:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e.status>=200&&e.status<300)return e;c.default.error({message:"\u8bf7\u6c42\u9519\u8bef "+e.status+": "+e.url,description:e.statusText});var t=new Error(e.statusText);throw t.response=e,t}function o(e){if(e.code==v){m.default.push("/login");var t=new Error(e.error.message);throw t.code=v,t.message=e.error.message,t.description="\u8bf7\u91cd\u65b0\u767b\u5f55",t}return e}function a(e,t){var n={credentials:"include"},r=(0,p.default)({},n,t);return"POST"!==r.method&&"PUT"!==r.method||(r.headers=(0,p.default)({Accept:"application/json","Content-Type":"application/json; charset=utf-8","x-access-token":window.localStorage.getItem("userToken")},r.headers),r.body=(0,l.default)(r.body)),(0,h.default)(e,r).then(i).then(function(e){return e.json()}).then(o).catch(function(t){return t.code?c.default.error({message:t.message,description:t.description}):"stack"in t&&"message"in t&&c.default.error({message:"\u8bf7\u6c42\u9519\u8bef: "+e,description:t.message}),t})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(749),c=r(s),u=n(750),l=r(u),f=n(15),p=r(f);t.default=a,n(752);var d=n(754),h=r(d),y=n(373),m=r(y),v="B101";e.exports=t.default},749:function(e,t,n){"use strict";function r(e){var t=e.duration,n=e.placement,r=e.bottom,i=e.top,o=e.getContainer;void 0!==t&&(d=t),void 0!==n&&(m=n),void 0!==r&&(y=r),void 0!==i&&(h=i),void 0!==o&&(v=o)}function i(e){var t=void 0;switch(e){case"topLeft":t={left:0,top:h,bottom:"auto"};break;case"topRight":t={right:0,top:h,bottom:"auto"};break;case"bottomLeft":t={left:0,top:"auto",bottom:y};break;default:t={right:0,top:"auto",bottom:y}}return t}function o(e,t,n){var r=e+"-"+t;if(p[r])return void n(p[r]);l.a.newInstance({prefixCls:e,className:e+"-"+t,style:i(t),getContainer:v},function(e){p[r]=e,n(e)})}function a(e){var t=e.prefixCls||"ant-notification",n=t+"-notice",r=void 0===e.duration?d:e.duration,i=null;if(e.icon)i=u.createElement("span",{className:n+"-icon"},e.icon);else if(e.type){var a=b[e.type];i=u.createElement(f.default,{className:n+"-icon "+n+"-icon-"+e.type,type:a})}var s=!e.description&&i?u.createElement("span",{className:n+"-message-single-line-auto-margin"}):null;o(t,e.placement||m,function(t){t.notice({content:u.createElement("div",{className:i?n+"-with-icon":""},i,u.createElement("div",{className:n+"-message"},s,e.message),u.createElement("div",{className:n+"-description"},e.description),e.btn?u.createElement("span",{className:n+"-btn"},e.btn):null),duration:r,closable:!0,onClose:e.onClose,key:e.key,style:e.style||{},className:e.className})})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(15),c=n.n(s),u=n(6),l=(n.n(u),n(729)),f=n(714),p={},d=4.5,h=24,y=24,m="topRight",v=void 0,b={success:"check-circle-o",info:"info-circle-o",error:"cross-circle-o",warning:"exclamation-circle-o"},E={open:a,close:function(e){Object.keys(p).forEach(function(t){return p[t].removeNotice(e)})},config:r,destroy:function(){Object.keys(p).forEach(function(e){p[e].destroy(),delete p[e]})}};["success","info","warning","error"].forEach(function(e){E[e]=function(t){return E.open(c()({},t,{type:e}))}}),E.warn=E.warning,t.default=E},750:function(e,t,n){e.exports={default:n(751),__esModule:!0}},751:function(e,t,n){var r=n(9),i=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},752:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(710),i=(n.n(r),n(753));n.n(i)},753:function(e,t){},754:function(e,t,n){e.exports=n(755)},755:function(e,t,n){n(756),e.exports=self.fetch.bind(self)},756:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return v.iterable&&(t[Symbol.iterator]=function(){return t}),t}function i(e){this.map={},e instanceof i?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function o(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader,n=a(t);return t.readAsArrayBuffer(e),n}function c(e){var t=new FileReader,n=a(t);return t.readAsText(e),n}function u(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function l(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(v.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(v.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(v.arrayBuffer&&v.blob&&E(e))this._bodyArrayBuffer=l(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?o(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var n=t.body;if(e instanceof d){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new i(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new i(t.headers)),this.method=p(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}}),t}function y(e){var t=new i;return e.split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}}),t}function m(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new i(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var v={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(v.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],E=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&b.indexOf(Object.prototype.toString.call(e))>-1};i.prototype.append=function(e,r){e=t(e),r=n(r);var i=this.map[e];this.map[e]=i?i+","+r:r},i.prototype.delete=function(e){delete this.map[t(e)]},i.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},i.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},i.prototype.set=function(e,r){this.map[t(e)]=n(r)},i.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},i.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},i.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},i.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},v.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},f.call(d.prototype),f.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var A=[301,302,303,307,308];m.redirect=function(e,t){if(-1===A.indexOf(t))throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})},e.Headers=i,e.Request=d,e.Response=m,e.fetch=function(e,t){return new Promise(function(n,r){var i=new d(e,t),o=new XMLHttpRequest;o.onload=function(){var e={status:o.status,statusText:o.statusText,headers:y(o.getAllResponseHeaders()||"")};e.url="responseURL"in o?o.responseURL:e.headers.get("X-Request-URL");var t="response"in o?o.response:o.responseText;n(new m(t,e))},o.onerror=function(){r(new TypeError("Network request failed"))},o.ontimeout=function(){r(new TypeError("Network request failed"))},o.open(i.method,i.url,!0),"include"===i.credentials&&(o.withCredentials=!0),"responseType"in o&&v.blob&&(o.responseType="blob"),i.headers.forEach(function(e,t){o.setRequestHeader(t,e)}),o.send(void 0===i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}});