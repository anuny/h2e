/**
 * h2e v0.0.1
 * Copyright 2017 Anuny
 * Released under the MIT License
 * http://yangfei.name
 */
!function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.h2e=t()}(window,function(){function e(e){var t=n.split(" "),r=e.createDocumentFragment();if(r.createElement)for(;t.length;)r.createElement(t.pop());return r}function t(e,t){var r=e.length,a=0;if("number"==typeof t.length)for(var o=t.length;a<o;a++)e[r++]=t[a];else for(;void 0!==t[a];)e[r++]=t[a++];return e.length=r,e}var r=/<([\w:]+)/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,o={option:[1,'<select multiple="multiple">',"</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},n="abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",l=e(document);return function(n,i){var d,u,c,f,p,m,s=[],i=i||document;if(!n&&""!==n)return[];var b=a.exec(n);if(b)return[i.createElement(b[1])];if(!/<|&#?\w+;/.test(n))return[i.createTextNode(n)];for(d=i===document&&l||e(i),c=i.createElement("div"),d.appendChild(c),n=n.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>"),f=(r.exec(n)||["",""])[1].toLowerCase(),m=(p=o[f]||o._default)[0],c.innerHTML=p[1]+n+p[2];m--;)c=c.lastChild;return u=c.childNodes,c.parentNode.removeChild(c),u.nodeType?s.push(u):t(s,u),u=c=d=null,s}});