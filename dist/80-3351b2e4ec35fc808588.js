webpackJsonp([80],{864:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=(a(11),a(10)),l=n(r),u=(a(17),a(19)),o=n(u),c=a(4),s=n(c),f=a(6),d=n(f),i=a(5),h=n(i),p=(a(39),a(36)),v=n(p),y=a(1),g=n(y),m=a(2),C=(n(m),a(16)),k=a(23),E=a(187),b=v.default.Group,x=function(e){function t(){var a,n,r;(0,s.default)(this,t);for(var l=arguments.length,u=Array(l),o=0;o<l;o++)u[o]=arguments[o];return a=n=(0,d.default)(this,e.call.apply(e,[this].concat(u))),n.state={searchType:"",books:""},n.onSearchTypeRadioChange=function(e){n.setState({searchType:e.target.value})},n.onTextChange=function(e){n.setState({books:e.target.value})},n.exportButtonClick=function(){return(0,E.batchExport)((0,k.stringify)(n.state))},r=a,(0,d.default)(n,r)}return(0,h.default)(t,e),t.prototype.render=function(){var e="\n        \u8bf7\u8f93\u5165\u8981\u5bfc\u51fa\u4e66\u7c4d\u7684\u4fe1\u606f\uff0c\u7528 \u9017\u53f7(',\uff0c') \u5206\u9694\n\n        \u9ed8\u8ba4\u672a\u52fe\u9009\u53ef\u4ee5\u540c\u65f6\u6307\u660e \u3010\u4e66\u540d,\u4f5c\u8005\u3011\uff0c\u4f5c\u8005\u53ef\u4ee5\u7701\u7565\u3002\u5982\uff1a\n        \u6700\u5f3a\u6b66\u795e,\u4e48\u4e48\n        \u5251\u8bc0\n\n        \u52fe\u9009\u4e4b\u540e\u53ea\u6309\u6307\u5b9a\u7c7b\u578b\u5bfc\u51fa\n        ";return g.default.createElement("div",{className:"content-inner"},g.default.createElement(o.default,{value:this.state.books,onChange:this.onTextChange,type:"textarea",rows:20,placeholder:e}),g.default.createElement("div",{style:{marginTop:"20px"}},"\u67e5\u8be2\u6761\u4ef6 \xa0\xa0",g.default.createElement(b,{onChange:this.onSearchTypeRadioChange,value:this.state.searchType},g.default.createElement(v.default,{value:"s-title"},"\u4ec5\u67e5\u8be2\u4e66\u540d"),g.default.createElement(v.default,{value:"s-author"},"\u4ec5\u67e5\u8be2\u4f5c\u8005"),g.default.createElement(v.default,{value:"s-id"},"\u4ec5\u67e5\u8be2ID")),"\xa0\xa0",g.default.createElement(l.default,{onClick:this.exportButtonClick},"\u67e5\u8be2\u5e76\u5bfc\u51fa")))},t}(g.default.Component);t.default=(0,C.connect)(function(e){var t=e.books;return{books:t}})(x),e.exports=t.default}});