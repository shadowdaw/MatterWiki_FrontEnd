webpackJsonp([9],{705:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,n=a(142),d=l(n),c=a(63),u=l(c),s=a(64),o=l(s),f=a(88),m=l(f),p=a(89),_=l(p),h=a(6),E=l(h),v=a(367),y=a(831),N=l(y),g=a(371),k=l(g),M=a(369),b=(i=(0,v.connect)(function(e){return{article:e.article}}))(r=function(e){function t(){var e,a,l,i;(0,u.default)(this,t);for(var r=arguments.length,n=Array(r),c=0;c<r;c++)n[c]=arguments[c];return a=l=(0,m.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(n))),l.state={mounted:!1},i=a,(0,m.default)(l,i)}return(0,_.default)(t,e),(0,o.default)(t,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"article/getArticleDetail",payload:{id:this.props.match.params.id}})}},{key:"render",value:function(){var e=this.props.article,t=e.detail;return e.loading?E.default.createElement(k.default,null):t&&t.topic&&t.user?E.default.createElement("div",{className:N.default.mainarea},E.default.createElement("div",null,E.default.createElement("h1",{className:N.default.title},t.title,E.default.createElement("div",{className:"pull-right"},this.state.isguest?"":E.default.createElement(M.Link,{to:"/article/edit/"+t.id},E.default.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})),E.default.createElement(M.Link,{to:"/article/history/"+t.id},E.default.createElement("i",{className:"fa fa-history","aria-hidden":"true"})),1==window.localStorage.getItem("userId")?E.default.createElement("i",{className:"fa fa-trash-o",onClick:this.deleteArticle}):"")),E.default.createElement("div",{className:N.default.articleMeta},"\u5206\u7c7b : ",E.default.createElement("span",{className:N.default.articleTopic},t.topic.name),E.default.createElement("span",{className:N.default.articleUpdateTime},"\u6700\u540e\u66f4\u65b0:  ",t.updated_at," By:  ",t.user.name," (",t.user.about,")"))),E.default.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.body}})):E.default.createElement(k.default,null)}}]),t}(h.Component))||r;t.default=b,e.exports=t.default},831:function(e,t){e.exports={mainarea:"mainarea___KXdnH",hidden:"hidden___1k894",articleMeta:"articleMeta___3Icir",title:"title___1Gt8-",fa:"fa___2PU6e",articleTopic:"articleTopic___37Qo6"}}});