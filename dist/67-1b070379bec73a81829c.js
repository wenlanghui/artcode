webpackJsonp([67],{316:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return s.default.createElement(f,{style:{marginBottom:0},label:e.label,labelCol:{span:3}},s.default.createElement("span",{className:""},e.value))}Object.defineProperty(t,"__esModule",{value:!0});var r=(a(25),a(24)),u=l(r);t.FormItemSpan=n;var o=a(1),s=l(o),c=a(2),d=l(c),f=u.default.Item;n.propTypes={label:d.default.string.isRequired,value:d.default.any}},871:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=l(n),u=a(4),o=l(u),s=a(6),c=l(s),d=a(5),f=l(d),i=a(1),p=l(i),m=a(2),b=l(m),v=a(16),_=a(14),h=l(_),y=a(59),E=a(316),k=function(e){return(0,h.default)(e).format("YYYY-MM-DD hh:mm:ss")},M=function(e){function t(){(0,o.default)(this,t);for(var a=arguments.length,l=Array(a),n=0;n<a;n++)l[n]=arguments[n];return(0,c.default)(this,e.call.apply(e,[this].concat(l)))}return(0,f.default)(t,e),t.prototype.render=function(){var e=this.props.books_toc.result;return e?p.default.createElement("div",{className:"content-inner"},p.default.createElement("div",null,p.default.createElement(E.FormItemSpan,{label:"\u6821\u51c6\u76ee\u5f55\u66f4\u65b0\u65f6\u95f4",value:k(e.chaptersUpdated)}),p.default.createElement(E.FormItemSpan,{label:"\u6df7\u5408\u76ee\u5f55\u66f4\u65b0\u65f6\u95f4",value:k(e.updated)})),p.default.createElement(y.BooksTocTable,(0,r.default)({},this.props,this.props.books_toc))):p.default.createElement("div",{className:"content-inner"},"\u65e0\u5185\u5bb9")},t}(p.default.Component);M.propTypes={dispatch:b.default.func.isRequired,books_toc:b.default.object.isRequired},t.default=(0,v.connect)(function(e){var t=e.books_toc;return{books_toc:t}})(M),e.exports=t.default}});