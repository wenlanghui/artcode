webpackJsonp([66],{316:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e){return c.default.createElement(f,{style:{marginBottom:0},label:e.label,labelCol:{span:3}},c.default.createElement("span",{className:""},e.value))}Object.defineProperty(t,"__esModule",{value:!0});var n=(a(25),a(24)),u=l(n);t.FormItemSpan=r;var o=a(1),c=l(o),d=a(2),s=l(d),f=u.default.Item;r.propTypes={label:s.default.string.isRequired,value:s.default.any}},872:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=l(r),u=a(4),o=l(u),c=a(6),d=l(c),s=a(5),f=l(s),m=a(1),i=l(m),p=a(2),b=l(p),v=a(16),_=a(14),h=l(_),E=a(78),k=a(59),I=a(316),F=function(e){function t(){(0,o.default)(this,t);for(var a=arguments.length,l=Array(a),r=0;r<a;r++)l[r]=arguments[r];return(0,d.default)(this,e.call.apply(e,[this].concat(l)))}return(0,f.default)(t,e),t.prototype.render=function(){var e=this.props.books_toc_table.result,t=function(e){return(0,h.default)(e).format("YYYY-MM-DD hh:mm:ss")},a=E.apiHost+"/toc/"+e._id+"?view=chapters";return i.default.createElement("div",{className:"content-inner"},i.default.createElement("div",null,i.default.createElement(I.FormItemSpan,{label:"\u4e66\u540d",value:e.book&&e.book.title}),i.default.createElement(I.FormItemSpan,{label:"\u6765\u81ea",value:i.default.createElement("a",{href:e.link,target:"_blank"},e.link)}),i.default.createElement(I.FormItemSpan,{label:"\u7ae0\u8282\u6570",value:e.chaptersCount}),i.default.createElement(I.FormItemSpan,{label:"\u6700\u65b0\u7ae0\u8282",value:e.lastChapter}),i.default.createElement(I.FormItemSpan,{label:"\u66f4\u65b0\u65f6\u95f4",value:t(e.updated)}),i.default.createElement(I.FormItemSpan,{label:"\u66f4\u65b0\u9891\u7387",value:{1:"\u6bcf10\u5206\u949f",2:"\u6bcf\u5929",3:"\u6bcf\u5468",4:"\u4e0d\u66f4\u65b0"}[e.updateLv]}),i.default.createElement(I.FormItemSpan,{label:"\u9996\u53d1\u7ad9",value:e.isFirsthand?"\u662f":"\u5426"}),i.default.createElement(I.FormItemSpan,{label:"API",value:i.default.createElement("a",{href:a,target:"_blank"},a)})),i.default.createElement(k.BooksTocTable,(0,n.default)({},this.props,this.props.books_toc_table)))},t}(i.default.Component);F.propTypes={dispatch:b.default.func.isRequired,books_toc_table:b.default.object.isRequired},t.default=(0,v.connect)(function(e){var t=e.books_toc_table;return{books_toc_table:t}})(F),e.exports=t.default}});