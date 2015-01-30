/**
*
* @license Guriddo jqGrid JS - v4.7.1 - 2015-01-30
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
* 
* License: http://guriddo.net/?page_id=103334
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.fmatter={},a.extend(a.fmatter,{isBoolean:function(a){return"boolean"==typeof a},isObject:function(b){return b&&("object"==typeof b||a.isFunction(b))||!1},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a&&isFinite(a)},isValue:function(a){return this.isObject(a)||this.isString(a)||this.isNumber(a)||this.isBoolean(a)},isEmpty:function(b){return!this.isString(b)&&this.isValue(b)?!1:this.isValue(b)?(b=a.trim(b).replace(/\&nbsp\;/gi,"").replace(/\&#160\;/gi,""),""===b):!0}}),a.fn.fmatter=function(b,c,d,e,f){var g=c;d=a.extend({},a.jgrid.formatter,d);try{g=a.fn.fmatter[b].call(this,c,d,e,f)}catch(h){}return g},a.fmatter.util={NumberFormat:function(b,c){if(a.fmatter.isNumber(b)||(b*=1),a.fmatter.isNumber(b)){var d,e=0>b,f=String(b),g=c.decimalSeparator||".";if(a.fmatter.isNumber(c.decimalPlaces)){var h=c.decimalPlaces,i=Math.pow(10,h);if(f=String(Math.round(b*i)/i),d=f.lastIndexOf("."),h>0)for(0>d?(f+=g,d=f.length-1):"."!==g&&(f=f.replace(".",g));f.length-1-d<h;)f+="0"}if(c.thousandsSeparator){var j=c.thousandsSeparator;d=f.lastIndexOf(g),d=d>-1?d:f.length;var k,l=f.substring(d),m=-1;for(k=d;k>0;k--)m++,m%3===0&&k!==d&&(!e||k>1)&&(l=j+l),l=f.charAt(k-1)+l;f=l}return f=c.prefix?c.prefix+f:f,f=c.suffix?f+c.suffix:f}return b}},a.fn.fmatter.defaultFormat=function(b,c){return a.fmatter.isValue(b)&&""!==b?b:c.defaultValue||"&#160;"},a.fn.fmatter.email=function(b,c){return a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):'<a href="mailto:'+b+'">'+b+"</a>"},a.fn.fmatter.checkbox=function(b,c){var d,e=a.extend({},c.checkbox);void 0!==c.colModel&&void 0!==c.colModel.formatoptions&&(e=a.extend({},e,c.colModel.formatoptions)),d=e.disabled===!0?'disabled="disabled"':"",(a.fmatter.isEmpty(b)||void 0===b)&&(b=a.fn.fmatter.defaultFormat(b,e)),b=String(b),b=(b+"").toLowerCase();var f=b.search(/(false|f|0|no|n|off|undefined)/i)<0?" checked='checked' ":"";return'<input type="checkbox" '+f+' value="'+b+'" offval="no" '+d+"/>"},a.fn.fmatter.link=function(b,c){var d={target:c.target},e="";return void 0!==c.colModel&&void 0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),d.target&&(e="target="+d.target),a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):"<a "+e+' href="'+b+'">'+b+"</a>"},a.fn.fmatter.showlink=function(b,c){var d,e={baseLinkUrl:c.baseLinkUrl,showAction:c.showAction,addParam:c.addParam||"",target:c.target,idName:c.idName},f="";return void 0!==c.colModel&&void 0!==c.colModel.formatoptions&&(e=a.extend({},e,c.colModel.formatoptions)),e.target&&(f="target="+e.target),d=e.baseLinkUrl+e.showAction+"?"+e.idName+"="+c.rowId+e.addParam,a.fmatter.isString(b)||a.fmatter.isNumber(b)?"<a "+f+' href="'+d+'">'+b+"</a>":a.fn.fmatter.defaultFormat(b,c)},a.fn.fmatter.integer=function(b,c){var d=a.extend({},c.integer);return void 0!==c.colModel&&void 0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),a.fmatter.isEmpty(b)?d.defaultValue:a.fmatter.util.NumberFormat(b,d)},a.fn.fmatter.number=function(b,c){var d=a.extend({},c.number);return void 0!==c.colModel&&void 0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),a.fmatter.isEmpty(b)?d.defaultValue:a.fmatter.util.NumberFormat(b,d)},a.fn.fmatter.currency=function(b,c){var d=a.extend({},c.currency);return void 0!==c.colModel&&void 0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),a.fmatter.isEmpty(b)?d.defaultValue:a.fmatter.util.NumberFormat(b,d)},a.fn.fmatter.date=function(b,c,d,e){var f=a.extend({},c.date);return void 0!==c.colModel&&void 0!==c.colModel.formatoptions&&(f=a.extend({},f,c.colModel.formatoptions)),f.reformatAfterEdit||"edit"!==e?a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):a.jgrid.parseDate(f.srcformat,b,f.newformat,f):a.fn.fmatter.defaultFormat(b,c)},a.fn.fmatter.select=function(b,c){b=String(b);var d,e,f=!1,g=[];if(void 0!==c.colModel.formatoptions?(f=c.colModel.formatoptions.value,d=void 0===c.colModel.formatoptions.separator?":":c.colModel.formatoptions.separator,e=void 0===c.colModel.formatoptions.delimiter?";":c.colModel.formatoptions.delimiter):void 0!==c.colModel.editoptions&&(f=c.colModel.editoptions.value,d=void 0===c.colModel.editoptions.separator?":":c.colModel.editoptions.separator,e=void 0===c.colModel.editoptions.delimiter?";":c.colModel.editoptions.delimiter),f){var h,i=(null!=c.colModel.editoptions&&c.colModel.editoptions.multiple===!0)==!0?!0:!1,j=[];if(i&&(j=b.split(","),j=a.map(j,function(b){return a.trim(b)})),a.fmatter.isString(f)){var k,l=f.split(e),m=0;for(k=0;k<l.length;k++)if(h=l[k].split(d),h.length>2&&(h[1]=a.map(h,function(a,b){return b>0?a:void 0}).join(d)),i)a.inArray(h[0],j)>-1&&(g[m]=h[1],m++);else if(a.trim(h[0])===a.trim(b)){g[0]=h[1];break}}else a.fmatter.isObject(f)&&(i?g=a.map(j,function(a){return f[a]}):g[0]=f[b]||"")}return b=g.join(", "),""===b?a.fn.fmatter.defaultFormat(b,c):b},a.fn.fmatter.rowactions=function(b){var c=a(this).closest("tr.jqgrow"),d=c.attr("id"),e=a(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),f=a("#"+e),g=f[0],h=g.p,i=h.colModel[a.jgrid.getCellIndex(this)],j=i.frozen?a("tr#"+d+" td:eq("+a.jgrid.getCellIndex(this)+") > div",f):a(this).parent(),k={extraparam:{}},l=function(b,c){a.isFunction(k.afterSave)&&k.afterSave.call(g,b,c),j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide()},m=function(b){a.isFunction(k.afterRestore)&&k.afterRestore.call(g,b),j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide()};void 0!==i.formatoptions&&(k=a.extend(k,i.formatoptions)),void 0!==h.editOptions&&(k.editOptions=h.editOptions),void 0!==h.delOptions&&(k.delOptions=h.delOptions),c.hasClass("jqgrid-new-row")&&(k.extraparam[h.prmNames.oper]=h.prmNames.addoper);var n={keys:k.keys,oneditfunc:k.onEdit,successfunc:k.onSuccess,url:k.url,extraparam:k.extraparam,aftersavefunc:l,errorfunc:k.onError,afterrestorefunc:m,restoreAfterError:k.restoreAfterError,mtype:k.mtype};switch(b){case"edit":f.jqGrid("editRow",d,n),j.find("div.ui-inline-edit,div.ui-inline-del").hide(),j.find("div.ui-inline-save,div.ui-inline-cancel").show(),f.triggerHandler("jqGridAfterGridComplete");break;case"save":f.jqGrid("saveRow",d,n)&&(j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide(),f.triggerHandler("jqGridAfterGridComplete"));break;case"cancel":f.jqGrid("restoreRow",d,m),j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide(),f.triggerHandler("jqGridAfterGridComplete");break;case"del":f.jqGrid("delGridRow",d,k.delOptions);break;case"formedit":f.jqGrid("setSelection",d),f.jqGrid("editGridRow",d,k.editOptions)}},a.fn.fmatter.actions=function(b,c){var d,e={keys:!1,editbutton:!0,delbutton:!0,editformbutton:!1},f=c.rowId,g="";return void 0!==c.colModel.formatoptions&&(e=a.extend(e,c.colModel.formatoptions)),void 0===f||a.fmatter.isEmpty(f)?"":(e.editformbutton?(d="id='jEditButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ",g+="<div title='"+a.jgrid.nav.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+d+"><span class='ui-icon ui-icon-pencil'></span></div>"):e.editbutton&&(d="id='jEditButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover') ",g+="<div title='"+a.jgrid.nav.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+d+"><span class='ui-icon ui-icon-pencil'></span></div>"),e.delbutton&&(d="id='jDeleteButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ",g+="<div title='"+a.jgrid.nav.deltitle+"' style='float:left;margin-left:5px;' class='ui-pg-div ui-inline-del' "+d+"><span class='ui-icon ui-icon-trash'></span></div>"),d="id='jSaveButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ",g+="<div title='"+a.jgrid.edit.bSubmit+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' "+d+"><span class='ui-icon ui-icon-disk'></span></div>",d="id='jCancelButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ",g+="<div title='"+a.jgrid.edit.bCancel+"' style='float:left;display:none;margin-left:5px;' class='ui-pg-div ui-inline-cancel' "+d+"><span class='ui-icon ui-icon-cancel'></span></div>","<div style='margin-left:8px;'>"+g+"</div>")},a.unformat=function(b,c,d,e){var f,g,h=c.colModel.formatter,i=c.colModel.formatoptions||{},j=/([\.\*\_\'\(\)\{\}\+\?\\])/g,k=c.colModel.unformat||a.fn.fmatter[h]&&a.fn.fmatter[h].unformat;if(void 0!==k&&a.isFunction(k))f=k.call(this,a(b).text(),c,b);else if(void 0!==h&&a.fmatter.isString(h)){var l,m=a.jgrid.formatter||{};switch(h){case"integer":i=a.extend({},m.integer,i),g=i.thousandsSeparator.replace(j,"\\$1"),l=new RegExp(g,"g"),f=a(b).text().replace(l,"");break;case"number":i=a.extend({},m.number,i),g=i.thousandsSeparator.replace(j,"\\$1"),l=new RegExp(g,"g"),f=a(b).text().replace(l,"").replace(i.decimalSeparator,".");break;case"currency":i=a.extend({},m.currency,i),g=i.thousandsSeparator.replace(j,"\\$1"),l=new RegExp(g,"g"),f=a(b).text(),i.prefix&&i.prefix.length&&(f=f.substr(i.prefix.length)),i.suffix&&i.suffix.length&&(f=f.substr(0,f.length-i.suffix.length)),f=f.replace(l,"").replace(i.decimalSeparator,".");break;case"checkbox":var n=c.colModel.editoptions?c.colModel.editoptions.value.split(":"):["Yes","No"];f=a("input",b).is(":checked")?n[0]:n[1];break;case"select":f=a.unformat.select(b,c,d,e);break;case"actions":return"";default:f=a(b).text()}}return void 0!==f?f:e===!0?a(b).text():a.jgrid.htmlDecode(a(b).html())},a.unformat.select=function(b,c,d,e){var f=[],g=a(b).text();if(e===!0)return g;var h=a.extend({},void 0!==c.colModel.formatoptions?c.colModel.formatoptions:c.colModel.editoptions),i=void 0===h.separator?":":h.separator,j=void 0===h.delimiter?";":h.delimiter;if(h.value){var k,l=h.value,m=h.multiple===!0?!0:!1,n=[];if(m&&(n=g.split(","),n=a.map(n,function(b){return a.trim(b)})),a.fmatter.isString(l)){var o,p=l.split(j),q=0;for(o=0;o<p.length;o++)if(k=p[o].split(i),k.length>2&&(k[1]=a.map(k,function(a,b){return b>0?a:void 0}).join(i)),m)a.inArray(k[1],n)>-1&&(f[q]=k[0],q++);else if(a.trim(k[1])===a.trim(g)){f[0]=k[0];break}}else(a.fmatter.isObject(l)||a.isArray(l))&&(m||(n[0]=g),f=a.map(n,function(b){var c;return a.each(l,function(a,d){return d===b?(c=a,!1):void 0}),void 0!==c?c:void 0}));return f.join(", ")}return g||""},a.unformat.date=function(b,c){var d=a.jgrid.formatter.date||{};return void 0!==c.formatoptions&&(d=a.extend({},d,c.formatoptions)),a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):a.jgrid.parseDate(d.newformat,b,d.srcformat,d)}});