webpackJsonp([82],{861:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a,d=(n(93),n(92)),o=r(d),u=n(4),l=r(u),c=n(6),f=r(c),s=n(5),k=r(s),p=n(1),g=r(p),h=n(2),y=(r(h),n(16)),b=(i=(0,y.connect)(function(e){var t=e.ranking,n=e.loading;return{ranking:t,loading:n.models.ranking}}),i(a=function(e){function t(){(0,l.default)(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(0,f.default)(this,e.call.apply(e,[this].concat(r)))}return(0,k.default)(t,e),t.prototype.render=function(){var e=this.props.ranking.rankings,t=[{title:"\u540d\u5b57",dataIndex:"title",key:"title",width:260,render:function(e,t){return g.default.createElement("a",{href:"#/activities/ranking/"+t._id},t.title)}},{title:"\u4e66\u7c4d\u6570\u91cf",dataIndex:"books",key:"books",width:100,render:function(e,t){return t.books&&t.books.length}},{title:"\u6743\u91cd",dataIndex:"priority",key:"priority",width:120},{title:"\u6027\u522b",dataIndex:"gender",width:100,key:"gender"},{title:"\u662f\u5426\u6298\u53e0",key:"isSub",width:160,render:function(e,t){return t.isSub?"\u6298\u53e0":"\u4e0d\u6298\u53e0"}},{title:"\u64cd\u4f5c",key:"operation",width:100,render:function(e,t,n){return g.default.createElement("a",{href:"#/activities/ranking/"+t._id+"/edit"},"\u7f16\u8f91")}}];return g.default.createElement("div",{className:"content-inner"},g.default.createElement(o.default,{bordered:!0,columns:t,dataSource:e,rowKey:function(e){return e._id},loading:this.props.loading}))},t}(g.default.Component))||a);t.default=b,e.exports=t.default}});