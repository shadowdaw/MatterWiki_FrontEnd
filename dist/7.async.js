webpackJsonp([7],{703:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,i=a(142),u=l(i),d=a(63),c=l(d),s=a(64),o=l(s),f=a(88),m=l(f),p=a(89),h=l(p),E=a(6),_=l(E),v=a(367),y=a(844),g=l(y),N=a(372),k=l(N),b=a(370),w=(n=(0,v.connect)(function(e){return{article:e.article}}))(r=function(e){function t(){var e,a,l,n;(0,c.default)(this,t);for(var r=arguments.length,i=Array(r),d=0;d<r;d++)i[d]=arguments[d];return a=l=(0,m.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(i))),l.state={mounted:!1},n=a,(0,m.default)(l,n)}return(0,h.default)(t,e),(0,o.default)(t,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"article/getArticleDetail",payload:{id:this.props.match.params.id}})}},{key:"render",value:function(){var e=this.props.article,t=e.detail;return e.loading?_.default.createElement(k.default,null):t&&t.topic&&t.user?_.default.createElement("div",{className:g.default.mainarea},_.default.createElement("div",{className:"article-heading"},_.default.createElement("h1",{className:"single-article-title"},t.title,_.default.createElement("div",{className:"pull-right"},this.state.isguest?"":_.default.createElement(b.Link,{to:"/article/edit/"+t.id},_.default.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})),_.default.createElement(b.Link,{to:"/article/history/"+t.id},_.default.createElement("i",{className:"fa fa-history","aria-hidden":"true"})),1==window.localStorage.getItem("userId")?_.default.createElement("i",{className:"fa fa-trash-o",onClick:this.deleteArticle}):"")),_.default.createElement("div",{className:"single-article-meta"},"\u5206\u7c7b:",_.default.createElement("span",{className:"single-article-topic"},t.topic.name),_.default.createElement("span",null,"\u6700\u540e\u66f4\u65b0:  ",t.updated_at," By:  ",t.user.name," (",t.user.about,")"))),_.default.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.body}})):_.default.createElement(k.default,null)}}]),t}(E.Component))||r;t.default=w,e.exports=t.default},844:function(e,t){e.exports={mainarea:"mainarea___KXdnH"}}});