webpackJsonp([69],{802:function(e,t,a){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(3),u=n(d),o=a(4),i=n(o),l=a(6),c=n(l),p=a(5),f=n(p),s=a(1),m=n(s),h=a(2),y=(n(h),a(21)),x=a(26),_=r(x),v=a(122),I=function(e){function t(a){return(0,i.default)(this,t),(0,c.default)(this,e.call(this,a))}return(0,f.default)(t,e),t.prototype.render=function(){var e=[{title:"\u4e66\u7c4did",dataIndex:"_id",key:"_id",width:200,render:v.columnBookIdRender},{title:"\u6765\u6e90",dataIndex:"source",key:"source",width:100},{title:"cpId",dataIndex:"remoteId",key:"remoteId",width:100},{title:"cp\u4e66\u540d",dataIndex:"remoteTitle",key:"remoteTitle",width:200},{title:"\u4f5c\u8005",dataIndex:"remoteAuthor",key:"remoteAuthor",width:200},{title:"\u5165\u5e93\u65f6\u95f4",dataIndex:"created",key:"created",width:200,render:_.formatColumnDatetime("created")},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updated",key:"updated",width:200,render:_.formatColumnDatetime("updated")}];return m.default.createElement(y.ExtExtTable,(0,u.default)({},this.props,{columns:e}))},t}(m.default.Component);I.propTypes={},t.default=I,e.exports=t.default},875:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.location,a=e.dispatch,r=e.cpsourcemap,n=r.loading,d=r.list,u=r.pagination,i={location:t,dispatch:a,dataSource:d,loading:n,pagination:u,onPageChange:function(e){var r=t.query,n=t.pathname;a(f.routerRedux.push({pathname:n,query:(0,o.default)({},r,{page:e.current,pageSize:e.pageSize})}))}};return l.default.createElement("div",{className:"content-inner"},l.default.createElement(h.default,i))}function d(e){var t=e.cpsourcemap;return{cpsourcemap:t}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(3),o=r(u),i=a(1),l=r(i),c=a(2),p=r(c),f=a(75),s=a(16),m=a(802),h=r(m);n.propTypes={allow:p.default.object,location:p.default.object,dispatch:p.default.func},t.default=(0,s.connect)(d)(n),e.exports=t.default}});