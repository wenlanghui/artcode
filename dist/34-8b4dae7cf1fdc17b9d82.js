webpackJsonp([34],{76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(175);t.default=a.Col,e.exports=t.default},77:131,207:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(n(25),n(24)),i=a(l),r=(n(131),n(130)),d=a(r),u=(n(77),n(76)),o=a(u),s=(n(11),n(10)),f=a(s),c=n(1),p=a(c),m=n(2),h=a(m),E=function(e){var t=e.onAdd;return p.default.createElement(d.default,{type:"flex",justify:"end",style:{marginBottom:15}},p.default.createElement(o.default,null,p.default.createElement(f.default,{style:{marginLeft:20},size:"large",type:"ghost",onClick:t},"\u6dfb\u52a0")))};E.propTypes={onAdd:h.default.func.isRequired},t.default=i.default.create()(E),e.exports=t.default},367:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(3),i=a(l),r=(n(30),n(29)),d=a(r),u=n(4),o=a(u),s=n(6),f=a(s),c=n(5),p=a(c),m=n(1),h=a(m),E=n(2),y=a(E),_=(n(79),n(21)),R=function(e){function t(n){return(0,o.default)(this,t),(0,f.default)(this,e.call(this,n))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,n=e.dataSource,a=e.permission,l=e.onDeleteItem,r=e.onEditItem,u=e.highlightAdministrator,o=e.highlightRole,s=a.resourceToRole,f=[{title:"ID",dataIndex:"_id",key:"_id",width:200},{title:"\u540d\u79f0",dataIndex:"name",key:"name",width:200}];return this.props.isChild||(f.push({title:"\u89d2\u8272",dataIndex:"roles",key:"roles",width:200,render:function(e,t){var n=s[t._id],a=n?n.roles:[];return h.default.createElement("div",null,a.map(function(e){return e.role===o?h.default.createElement("span",{style:{color:"red"}},h.default.createElement("b",null," "+e.role+" ")):h.default.createElement("span",null," "+e.role+" ")}))}}),f.push({title:"\u7ba1\u7406\u5458",dataIndex:"administrators",key:"administrators",width:300,render:function(e,t){var n=s[t._id],a=n?n.administrators:[];return h.default.createElement("div",null,a.map(function(e){var t=e.name;return t===u?h.default.createElement("span",{style:{color:"red"}},h.default.createElement("b",null," "+t+" ")):h.default.createElement("span",null," "+t+" ")}))}}),f.push({title:"\u64cd\u4f5c",key:"operation",width:100,render:function(e,t){return h.default.createElement("p",null,h.default.createElement("a",{onClick:function(){return r(t)},style:{marginRight:4}},"\u7f16\u8f91"),h.default.createElement(d.default,{title:"\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",onConfirm:function(){return l(t._id)}},h.default.createElement("a",null,"\u5220\u9664")))}})),h.default.createElement("div",null,h.default.createElement(_.ExtExtTable,(0,i.default)({},this.props,{columns:f,dataSource:n,loading:t,pagination:!1})))},t}(h.default.Component);t.default=R,R.propTypes={loading:y.default.bool.isRequired,dataSource:y.default.array.isRequired,permission:y.default.object.isRequired,onDeleteItem:y.default.func.isRequired,onEditItem:y.default.func.isRequired,highlightAdministrator:y.default.string,highlightRole:y.default.string},e.exports=t.default},824:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.RoleEditModal=void 0;var l=n(4),i=a(l),r=n(6),d=a(r),u=n(5),o=a(u),s=n(1),f=a(s),c=n(2),p=a(c),m=n(32),h=t.RoleEditModal=function(e){function t(){(0,i.default)(this,t);for(var n=arguments.length,a=Array(n),l=0;l<n;l++)a[l]=arguments[l];return(0,d.default)(this,e.call.apply(e,[this].concat(a)))}return(0,o.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.item,n=e.visible,a=e.onOk,l=e.onCancel,i={EditUserInfo:{key:"EditUserInfo",title:"\u7f16\u8f91\u89d2\u8272\u4fe1\u606f",fields:[{label:"ID",key:"_id",required:!0,disabled:t._id},{label:"\u540d\u79f0",key:"name",required:!0}]}};return f.default.createElement(m.FormModal,{item:t,defaultTab:"EditUserInfo",tabs:i,title:"\u7f16\u8f91\u89d2\u8272\u4fe1\u606f",visible:n,onOk:a,onCancel:l})},t}(f.default.Component);h.propTypes={item:p.default.object.isRequired,location:p.default.object.isRequired,visible:p.default.bool.isRequired,onOk:p.default.func.isRequired,onCancel:p.default.func.isRequired}},825:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(3),i=a(l),r=(n(30),n(29)),d=a(r),u=n(4),o=a(u),s=n(6),f=a(s),c=n(5),p=a(c),m=n(1),h=a(m),E=n(2),y=a(E),_=n(79),R=n(21),v=n(367),g=a(v),b=function(e){function t(n){return(0,o.default)(this,t),(0,f.default)(this,e.call(this,n))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.loading,a=t.dataSource,l=t.permission,r=t.onDeleteItem,u=t.onEditItem,o=l.roleToResource,s=l.roleGroup,f=[{title:"ID",dataIndex:"_id",key:"_id",width:100},{title:"\u540d\u79f0",dataIndex:"name",key:"name",width:100},{title:"\u7ba1\u7406\u5458",dataIndex:"administrator",key:"administrator",width:300,render:function(e,t){var n=s[t._id],a=n?n.administrators:[];return(0,_.map)(a,"name").join(", ")}},{title:"\u64cd\u4f5c",key:"operation",width:100,render:function(e,t){return h.default.createElement("p",null,h.default.createElement("a",{onClick:function(){return u(t)},style:{marginRight:4}},"\u7f16\u8f91"),h.default.createElement(d.default,{title:"\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",onConfirm:function(){return r(t._id)}},h.default.createElement("a",null,"\u5220\u9664")))}}],c=function(t){var n=o[t._id],a=n?n.resources:[];return h.default.createElement(g.default,(0,i.default)({isChild:!0},e.props,{rowKey:function(e){return e.role+"-"+e._id+"-"+(0,_.uniqueId)()},dataSource:a,highlightRole:t._id}))};return h.default.createElement("div",null,h.default.createElement(R.ExtExtTable,(0,i.default)({},this.props,{expandedRowRender:c,columns:f,dataSource:a,loading:n,pagination:!1})))},t}(h.default.Component);t.default=b,b.propTypes={loading:y.default.bool.isRequired,dataSource:y.default.array.isRequired,permission:y.default.object.isRequired,onDeleteItem:y.default.func.isRequired,onEditItem:y.default.func.isRequired},e.exports=t.default},899:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.location,n=e.dispatch,a=e.permission,l=a.loading,i=a.editModalVisible,d=a.pagination,u=a.roles,o=a.currentRole,f=(0,h.warpDispatch)(n,m.namespace,{location:t}),E={location:t,dispatch:n,roles:u,item:o,visible:i,onOk:function(e){f(o._id?"updateRole":"createRole",{data:e})},onCancel:function(){return f("updateState",{editModalVisible:!1})}},y={location:t,loading:l,pagination:d,permission:a,dataSource:u,onDeleteItem:function(e){return f("deleteRole",{id:e})},onEditItem:function(e){return f("showModal",{currentRole:e})}},_={onAdd:function(){return f("updateState",{editModalVisible:!0})}};return r.default.createElement("div",{className:"content-inner"},r.default.createElement(s.default,_),r.default.createElement(c.default,y),r.default.createElement(p.RoleEditModal,E))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i),d=n(2),u=a(d),o=n(207),s=a(o),f=n(825),c=a(f),p=n(824),m=n(348),h=n(91);l.propTypes={permission:u.default.object.isRequired,location:u.default.object.isRequired,dispatch:u.default.func.isRequired},t.default=(0,h.connectNamespaces)(m.namespace)(l),e.exports=t.default}});