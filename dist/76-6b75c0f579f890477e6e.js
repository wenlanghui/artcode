webpackJsonp([76],{900:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u,r,d=(a(11),a(10)),o=l(d),s=(a(46),a(42)),f=l(s),p=a(3),c=l(p),i=(a(17),a(19)),m=l(i),y=(a(72),a(71)),w=l(y),h=a(4),v=l(h),E=a(6),g=l(E),b=a(5),K=l(b),C=(a(25),a(24)),O=l(C),k=a(1),F=l(k),_=a(2),I=(l(_),a(16)),V=(n=(0,I.connect)(function(e){var t=e.posts;return{posts:t}}),u=O.default.create({mapPropsToFields:function(e){return{type:{value:e.posts.banType},words:{value:e.posts.banKeywords}}}}),n(r=u(r=function(e){function t(){(0,v.default)(this,t);for(var a=arguments.length,l=Array(a),n=0;n<a;n++)l[n]=arguments[n];var u=(0,g.default)(this,e.call.apply(e,[this].concat(l)));return u.showKeyword=function(e){u.props.dispatch({type:"posts/getBanKeyword",payload:{type:u.props.form.getFieldValue("type")}})},u.updateKeyword=function(){var e=u;w.default.confirm({title:"\u8bf7\u8f93\u5165\u66f4\u65b0\u53e3\u4ee4",content:F.default.createElement(m.default,{onChange:e.passwordChange}),onOk:function(){e.props.dispatch({type:"posts/updateBanKeyword",payload:(0,c.default)({},e.props.form.getFieldsValue(),{password:e.password})})}})},u.passwordChange=function(e){u.password=e.target.value},u.password="",u}return(0,K.default)(t,e),t.prototype.render=function(){var e=this.props.form.getFieldDecorator;return F.default.createElement("div",{className:"content-inner"},F.default.createElement(O.default,null,F.default.createElement(O.default.Item,null,e("type",{initialValue:"ban"})(F.default.createElement(f.default,{style:{width:120}},F.default.createElement(f.default.Option,{value:"ban"},"\u7981\u8bcd"),F.default.createElement(f.default.Option,{value:"bad"},"\u4f4e\u4fd7\u8bed"),F.default.createElement(f.default.Option,{value:"ad"},"\u5e7f\u544a\u8bcd"),F.default.createElement(f.default.Option,{value:"userName"},"\u4eba\u540d")))),F.default.createElement(O.default.Item,null,e("words")(F.default.createElement(m.default,{style:{width:"50%"},type:"textarea",rows:20}))),F.default.createElement(O.default.Item,null,F.default.createElement(o.default,{onClick:this.showKeyword},"\u67e5\u770b"),F.default.createElement(o.default,{onClick:this.updateKeyword},"\u66f4\u65b0"))))},t}(F.default.Component))||r)||r);t.default=V,e.exports=t.default}});