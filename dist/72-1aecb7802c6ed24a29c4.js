webpackJsonp([72],{912:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r,d=(n(93),n(92)),i=a(d),o=(n(30),n(29)),u=a(o),s=n(4),c=a(s),f=n(6),m=a(f),p=n(5),y=a(p),E=n(1),h=a(E),v=n(2),g=(a(v),n(16)),k=n(14),x=a(k),I=n(78),Y=a(I),b=(l=(0,g.connect)(function(e){var t=e.recommendApp;return{recommendApp:t}}),l(r=function(e){function t(){return(0,c.default)(this,t),(0,m.default)(this,e.call(this))}return(0,y.default)(t,e),t.prototype.deleteIphone=function(e){var t=this.props.dispatch;t({type:"recommendApp/deleteIphone",payload:e})},t.prototype.render=function(){var e=this,t={display:"inline-block",verticalAlign:"middle"},n=[{title:"\u540d\u79f0",dataIndex:"name",key:"name",render:function(e,n){return h.default.createElement("div",null,h.default.createElement("img",{src:Y.default.staticsHost+n.icon,style:t}),h.default.createElement("span",{style:t},n.name),h.default.createElement("span",{style:t},"["+n.size+"]"))}},{title:"\u663e\u793a",dataIndex:"show",key:"show",render:function(e,t){return(t.settings.randomEnabled?"\u9875\u5c3e":"")+"\n                    "+(t.settings.wallEnabled?"\u5e94\u7528\u5899: "+t.settings.wallPriority:"")+"\n                    "+(t.settings.gameEnabled?"\u6e38\u620f\u4e2d\u5fc3: "+t.settings.gamePriority:"")+"\n                    "+(t.settings.mysteryBoxEnabled?"\u795e\u79d8\u76d2\u5b50: "+t.settings.mysteryBoxPriority:"")}},{title:"\u5185\u90e8\u94fe\u63a5",dataIndex:"insideLink",key:"insideLink"},{title:"\u65f6\u95f4",dataIndex:"date",key:"date",render:function(e,t){return h.default.createElement("div",null,h.default.createElement("div",null,(0,x.default)(t.start).format("YYYY-MM-DD HH:mm")),h.default.createElement("div",null,(0,x.default)(t.end).format("YYYY-MM-DD HH:mm")))}},{title:"\u7b80\u4ecb",dataIndex:"intro",key:"intro"},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",render:function(t,n){return h.default.createElement("span",null,h.default.createElement("a",{href:"#/recommend-app/iphone/"+n._id+"/edit"},"\u7f16\u8f91"),h.default.createElement("span",{className:"ant-divider"}),h.default.createElement(u.default,{title:"\u786e\u5b9a\u5220\u9664\uff1f",onConfirm:function(){return e.deleteIphone(n._id)}},h.default.createElement("a",{href:"#"},"\u5220\u9664")))}}],a=this.props.recommendApp.iphoneList;return h.default.createElement("div",{className:"content-inner"},h.default.createElement(i.default,{dataSource:a,columns:n,rowKey:function(e){return e._id}}))},t}(h.default.Component))||r);t.default=b,e.exports=t.default}});