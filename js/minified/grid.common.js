!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./jqModal","./jqDnR"],e):e(jQuery)}(function(q){"use strict";q.extend(q.jgrid,{showModal:function(e){e.w.show()},closeModal:function(e){e.w.hide().attr("aria-hidden","true"),e.o&&e.o.remove()},hideModal:function(e,t){var i,a,o=!(!(t=q.extend({jqm:!0,gb:"",removemodal:!1,formprop:!1,form:""},t||{})).gb||"string"!=typeof t.gb||"#gbox_"!==t.gb.substr(0,6))&&q("#"+t.gb.substr(6))[0];if(t.onClose){var r=o?t.onClose.call(o,e):t.onClose(e);if("boolean"==typeof r&&!r)return}if(t.formprop&&o&&t.form&&("edit"===t.form?(i="#"+q.jgrid.jqID("FrmGrid_"+t.gb.substr(6)),a="formProp"):"view"===t.form&&(i="#"+q.jgrid.jqID("ViewGrid_"+t.gb.substr(6)),a="viewProp"),q(o).data(a,{top:q.jgrid.floatNum(q(e).css("top")),left:q.jgrid.floatNum(q(e).css("left")),width:q.jgrid.floatNum(q(e)[0].style.width),height:q.jgrid.floatNum(q(e)[0].style.height),dataheight:q(i).height(),datawidth:q(i).width()})),q.fn.jqm&&!0===t.jqm)q(e).attr("aria-hidden","true").jqmHide();else{if(""!==t.gb)try{q(t.gb).find(".jqgrid-overlay").first().hide()}catch(e){}try{q(".jqgrid-overlay-modal").hide()}catch(e){}q(e).hide().attr("aria-hidden","true")}t.removemodal&&q(e).remove()},findPos:function(e){e=q(e).offset();return[e.left,e.top]},createModal:function(i,e,a,t,o,r,n){a=q.extend(!0,{},q.jgrid.jqModal||{},a);var d=this,l="rtl"===q(a.gbox).attr("dir"),s=q.jgrid.styleUI[a.styleUI||"jQueryUI"].modal,u=q.jgrid.styleUI[a.styleUI||"jQueryUI"].common,c=document.createElement("div");n=q.extend({},n||{}),c.className="ui-jqdialog "+s.modal,c.id=i.themodal;var f=document.createElement("div");f.className="ui-jqdialog-titlebar "+s.header,f.id=i.modalhead,q(f).append("<span class='ui-jqdialog-title'>"+a.caption+"</span>");var m=q("<a class='ui-jqdialog-titlebar-close "+u.cornerall+"' aria-label='Close'></a>").hover(function(){m.addClass(u.hover)},function(){m.removeClass(u.hover)}).append("<span class='"+u.icon_base+" "+s.icon_close+"'></span>");q(f).append(m),l?(c.dir="rtl",q(".ui-jqdialog-title",f).css("float","right"),q(".ui-jqdialog-titlebar-close",f).css("left","0.3em")):(c.dir="ltr",q(".ui-jqdialog-title",f).css("float","left"),q(".ui-jqdialog-titlebar-close",f).css("right","0.3em"));var g=document.createElement("div");q(g).addClass("ui-jqdialog-content "+s.content).attr("id",i.modalcontent),q(g).append(e),c.appendChild(g),q(c).prepend(f),!0===r?q("body").append(c):"string"==typeof r?q(r).append(c):q(c).insertBefore(t),q(c).css(n),void 0===a.jqModal&&(a.jqModal=!0);g={};q.fn.jqm&&!0===a.jqModal?(0===a.left&&0===a.top&&a.overlay&&(n=[],n=q.jgrid.findPos(o),a.left=n[0]+4,a.top=n[1]+4),g.top=a.top+"px",g.left=a.left):0===a.left&&0===a.top||(g.left=a.left,g.top=a.top+"px"),q("a.ui-jqdialog-titlebar-close",f).click(function(){var e=q("#"+q.jgrid.jqID(i.themodal)).data("onClose")||a.onClose,t=q("#"+q.jgrid.jqID(i.themodal)).data("gbox")||a.gbox;return d.hideModal("#"+q.jgrid.jqID(i.themodal),{gb:t,jqm:a.jqModal,onClose:e,removemodal:a.removemodal||!1,formprop:!a.recreateForm||!1,form:a.form||""}),!1}),0!==a.width&&a.width||(a.width=300),0!==a.height&&a.height||(a.height=200),a.zIndex||(p=q(t).parents("*[role=dialog]").first().css("z-index"),a.zIndex=p?parseInt(p,10)+2:950);var p=0;if(l&&g.hasOwnProperty("left")&&!r&&(p=q(a.gbox).outerWidth()-(isNaN(a.width)?0:parseInt(a.width,10))+12,g.left=parseInt(g.left,10)+parseInt(p,10)),g.hasOwnProperty("left")&&(g.left+="px"),q(c).css(q.extend({width:isNaN(a.width)?"auto":a.width+"px",height:isNaN(a.height)?"auto":a.height+"px",zIndex:a.zIndex,overflow:"hidden"},g)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":i.modalhead,"aria-hidden":"true"}),void 0===a.drag&&(a.drag=!0),void 0===a.resize&&(a.resize=!0),a.drag)if(q(f).css("cursor","move"),q.fn.tinyDraggable)q(c).tinyDraggable({handle:"#"+q.jgrid.jqID(f.id)});else try{q(c).draggable({handle:q("#"+q.jgrid.jqID(f.id))})}catch(e){}if(a.resize)if(q.fn.jqResize)q(c).append("<div class='jqResize "+s.resizable+" "+u.icon_base+" "+s.icon_resizable+"'></div>"),q("#"+q.jgrid.jqID(i.themodal)).jqResize(".jqResize",!!i.scrollelm&&"#"+q.jgrid.jqID(i.scrollelm));else try{q(c).resizable({handles:"se, sw",alsoResize:!!i.scrollelm&&"#"+q.jgrid.jqID(i.scrollelm)})}catch(e){}!0===a.closeOnEscape&&q(c).keydown(function(e){27===e.which&&(e=q("#"+q.jgrid.jqID(i.themodal)).data("onClose")||a.onClose,d.hideModal("#"+q.jgrid.jqID(i.themodal),{gb:a.gbox,jqm:a.jqModal,onClose:e,removemodal:a.removemodal||!1,formprop:!a.recreateForm||!1,form:a.form||""}))})},viewModal:function(e,t){var i="";if((t=q.extend({toTop:!0,overlay:10,modal:!1,overlayClass:"ui-widget-overlay",onShow:q.jgrid.showModal,onHide:q.jgrid.closeModal,gbox:"",jqm:!0,jqM:!0},t||{})).gbox){var a=q("#"+t.gbox.substring(6))[0];try{i=q(a).jqGrid("getStyleUI",a.p.styleUI+".common","overlay",!1,"jqgrid-overlay-modal"),t.overlayClass=q(a).jqGrid("getStyleUI",a.p.styleUI+".common","overlay",!0)}catch(e){}}if(void 0===t.focusField&&(t.focusField=0),"number"==typeof t.focusField&&0<=t.focusField?t.focusField=parseInt(t.focusField,10):"boolean"!=typeof t.focusField||t.focusField?t.focusField=0:t.focusField=!1,q.fn.jqm&&!0===t.jqm)(t.jqM?q(e).attr("aria-hidden","false").jqm(t):q(e).attr("aria-hidden","false")).jqmShow();else if(""!==t.gbox&&(a=parseInt(q(e).css("z-index"))-1,t.modal?(q(".jqgrid-overlay-modal")[0]||q("body").prepend("<div "+i+"></div>"),q(".jqgrid-overlay-modal").css("z-index",a).show()):(q(t.gbox).find(".jqgrid-overlay").first().css("z-index",a).show(),q(e).data("gbox",t.gbox))),q(e).show().attr("aria-hidden","false"),0<=t.focusField)try{q(":input:visible",e)[t.focusField].focus()}catch(e){}},info_dialog:function(e,t,i,a){var o={width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1e3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]};q.extend(!0,o,q.jgrid.jqModal||{},{caption:"<b>"+e+"</b>"},a||{});var r=o.jqModal,n=this,e=q.jgrid.styleUI[o.styleUI||"jQueryUI"].modal,d=q.jgrid.styleUI[o.styleUI||"jQueryUI"].common;q.fn.jqm&&!r&&(r=!1);var l,s="";if(0<o.buttons.length)for(l=0;l<o.buttons.length;l++)void 0===o.buttons[l].id&&(o.buttons[l].id="info_button_"+l),s+="<a id='"+o.buttons[l].id+"' class='fm-button "+d.button+"'>"+o.buttons[l].text+"</a>";a="<div id='info_id'>";a+="<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+(isNaN(o.dataheight)?o.dataheight:o.dataheight+"px")+";"+("text-align:"+o.align+";")+"'>"+t+"</div>",a+=i?"<div class='"+e.content+"' style='text-align:"+o.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a id='closedialog' class='fm-button "+d.button+"'>"+i+"</a>"+s+"</div>":""!==s?"<div class='"+e.content+"' style='text-align:"+o.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+s+"</div>":"",a+="</div>";try{"false"===q("#info_dialog").attr("aria-hidden")&&q.jgrid.hideModal("#info_dialog",{jqm:r}),q("#info_dialog").remove()}catch(e){}e=q(".ui-jqgrid").css("font-size")||"11px";q.jgrid.createModal({themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",scrollelm:"infocnt"},a,o,"","",!0,{"font-size":e}),s&&q.each(o.buttons,function(e){q("#"+q.jgrid.jqID(this.id),"#info_id").on("click",function(){return o.buttons[e].onClick.call(q("#info_dialog")),!1})}),q("#closedialog","#info_id").on("click",function(){return n.hideModal("#info_dialog",{jqm:r,onClose:q("#info_dialog").data("onClose")||o.onClose,gb:q("#info_dialog").data("gbox")||o.gbox}),!1}),q(".fm-button","#info_dialog").hover(function(){q(this).addClass(d.hover)},function(){q(this).removeClass(d.hover)}),q.jgrid.isFunction(o.beforeOpen)&&o.beforeOpen(),q.jgrid.viewModal("#info_dialog",{onHide:function(e){e.w.hide().remove(),e.o&&e.o.remove()},modal:o.modal,jqm:r}),q.jgrid.isFunction(o.afterOpen)&&o.afterOpen();try{q("#info_dialog").focus()}catch(e){}},bindEv:function(e,t){q.jgrid.isFunction(t.dataInit)&&t.dataInit.call(this,e,t),t.dataEvents&&q.each(t.dataEvents,function(){void 0!==this.data?q(e).on(this.type,this.data,this.fn(event,t)):q(e).on(this.type,this.fn(event,t))})},createEl:function(e,t,i,a,o){var r,n="",c=this;function f(i,e,t){var a=(a=["dataInit","dataEvents","dataUrl","buildSelect","sopt","searchhidden","defaultValue","attr","custom_element","custom_value","oper"]).concat(["cacheUrlData","delimiter","separator"]);void 0!==t&&Array.isArray(t)&&q.merge(a,t),q.each(e,function(e,t){-1===q.inArray(e,a)&&q(i).attr(e,t)}),e.hasOwnProperty("id")||q(i).attr("id",q.jgrid.randId())}switch(e){case"textarea":n=document.createElement("textarea"),a?t.cols||q(n).css({width:"98%"}):t.cols||(t.cols=20),t.rows||(t.rows=2),("&nbsp;"===i||"&#160;"===i||1===i.length&&160===i.charCodeAt(0))&&(i=""),n.value=i,q(n).attr({role:"textbox",multiline:"true"}),f(n,t);break;case"checkbox":(n=document.createElement("input")).type="checkbox",t.value?(i===(r=t.value.split(":"))[0]&&(n.checked=!0,n.defaultChecked=!0),n.value=r[0],q(n).attr("offval",r[1])):((r=(i+"").toLowerCase()).search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==r?(n.checked=!0,n.defaultChecked=!0,n.value=i):n.value="on",q(n).attr("offval","off")),q(n).attr("role","checkbox"),f(n,t,["value"]);break;case"select":(n=document.createElement("select")).setAttribute("role","select");var d,l,s=[];if(!0===t.multiple?(d=!0,n.multiple="multiple",q(n).attr("aria-multiselectable","true")):d=!1,null!=t.dataUrl){var u=null,m=t.postData||o.postData;try{u=t.rowId}catch(e){}c.p&&c.p.idPrefix&&(u=q.jgrid.stripPref(c.p.idPrefix,u)),q.ajax(q.extend({url:q.jgrid.isFunction(t.dataUrl)?t.dataUrl.call(c,u,i,String(t.name)):t.dataUrl,type:"GET",dataType:"html",data:q.jgrid.isFunction(m)?m.call(c,u,i,String(t.name)):m,context:{elem:n,options:t,vl:i},success:function(e){var t,i,a=[],o=this.elem,r=this.vl,n=q.extend({},this.options),d=!0===n.multiple,l=!0===n.cacheUrlData,s="",u=[],e=q.jgrid.isFunction(n.buildSelect)?n.buildSelect.call(c,e):e;(e="string"==typeof e?q(q.jgrid.trim(e)).html():e)&&(q(o).append(e),f(o,n,m?["postData"]:void 0),void 0===n.size&&(n.size=d?3:1),d?(a=r.split(","),a=q.map(a,function(e){return q.jgrid.trim(e)})):a[0]=q.jgrid.trim(r),q("option",o).each(function(e){t=q(this).text(),r=q(this).val(),l&&(s+=(0!==e?";":"")+r+":"+t),0===e&&o.multiple&&(this.selected=!1),q(this).attr("role","option"),(-1<q.inArray(q.jgrid.trim(t),a)||-1<q.inArray(q.jgrid.trim(r),a))&&(this.selected="selected",u.push(r))}),n.hasOwnProperty("checkUpdate")&&n.checkUpdate&&(c.p.savedData[n.name]=u.join(",")),l&&("edit"===n.oper?q(c).jqGrid("setColProp",n.name,{editoptions:{buildSelect:null,dataUrl:null,value:s}}):"search"===n.oper?q(c).jqGrid("setColProp",n.name,{searchoptions:{dataUrl:null,value:s}}):"filter"===n.oper&&q("#fbox_"+c.p.id)[0].p&&(d=q("#fbox_"+c.p.id)[0].p.columns,q.each(d,function(e){if(i=this.index||this.name,n.name===i)return this.searchoptions.dataUrl=null,this.searchoptions.value=s,!1}))),q(c).triggerHandler("jqGridAddEditAfterSelectUrlComplete",[o]))}},o||{}))}else if(t.value){void 0===t.size&&(t.size=d?3:1),d&&(s=i.split(","),s=q.map(s,function(e){return q.jgrid.trim(e)})),"function"==typeof t.value&&(t.value=t.value());var g,p,h,j,v,F,b=void 0===t.separator?":":t.separator,u=void 0===t.delimiter?";":t.delimiter;if("string"==typeof t.value)for(g=t.value.split(u),l=0;l<g.length;l++)2<(p=g[l].split(b)).length&&(p[1]=q.map(p,function(e,t){if(0<t)return e}).join(b)),(h=document.createElement("option")).setAttribute("role","option"),h.value=p[0],h.innerHTML=p[1],n.appendChild(h),d||q.jgrid.trim(p[0])!==q.jgrid.trim(i)&&q.jgrid.trim(p[1])!==q.jgrid.trim(i)||(h.selected="selected"),d&&(-1<q.inArray(q.jgrid.trim(p[1]),s)||-1<q.inArray(q.jgrid.trim(p[0]),s))&&(h.selected="selected");else if("[object Array]"===Object.prototype.toString.call(t.value))for(j=t.value,l=0;l<j.length;l++)2===j[l].length&&(v=j[l][0],F=j[l][1],(h=document.createElement("option")).setAttribute("role","option"),h.value=v,h.innerHTML=F,n.appendChild(h),d||q.jgrid.trim(v)!==q.jgrid.trim(i)&&q.jgrid.trim(F)!==q.jgrid.trim(i)||(h.selected="selected"),d&&(-1<q.inArray(q.jgrid.trim(F),s)||-1<q.inArray(q.jgrid.trim(v),s))&&(h.selected="selected"));else if("object"==typeof t.value)for(v in j=t.value)j.hasOwnProperty(v)&&((h=document.createElement("option")).setAttribute("role","option"),h.value=v,h.innerHTML=j[v],n.appendChild(h),d||q.jgrid.trim(v)!==q.jgrid.trim(i)&&q.jgrid.trim(j[v])!==q.jgrid.trim(i)||(h.selected="selected"),d&&(-1<q.inArray(q.jgrid.trim(j[v]),s)||-1<q.inArray(q.jgrid.trim(v),s))&&(h.selected="selected"));f(n,t,["value"])}else f(n,t);break;case"image":case"file":(n=document.createElement("input")).type=e,f(n,t);break;case"custom":n=document.createElement("span");try{if(!q.jgrid.isFunction(t.custom_element))throw"e1";var y=t.custom_element.call(c,i,t);if(!y)throw"e2";y=q(y).addClass("customelement").attr({id:t.id,name:t.name}),q(n).empty().append(y)}catch(e){var y=q.jgrid.getRegional(c,"errors"),x=q.jgrid.getRegional(c,"edit");"e1"===e?q.jgrid.info_dialog(y.errcap,"function 'custom_element' "+x.msg.nodefined,x.bClose,{styleUI:c.p.styleUI}):"e2"===e?q.jgrid.info_dialog(y.errcap,"function 'custom_element' "+x.msg.novalue,x.bClose,{styleUI:c.p.styleUI}):q.jgrid.info_dialog(y.errcap,"string"==typeof e?e:e.message,x.bClose,{styleUI:c.p.styleUI})}break;default:x="button"===e?"button":"textbox";(n=document.createElement("input")).type=e,n.value=i,"button"!==e&&(a?t.size||q(n).css({width:"96%"}):t.size||(t.size=20)),q(n).attr("role",x),f(n,t)}return n},checkDate:function(e,t){var i={},a=-1!==(e=e.toLowerCase()).indexOf("/")?"/":-1!==e.indexOf("-")?"-":-1!==e.indexOf(".")?".":"/";if(e=e.split(a),3!==(t=t.split(a)).length)return!1;for(var o=-1,r=-1,n=-1,d=0;d<e.length;d++){var l=isNaN(t[d])?0:parseInt(t[d],10);i[e[d]]=l,-1!==(u=e[d]).indexOf("y")&&(o=d),-1!==u.indexOf("m")&&(n=d),-1!==u.indexOf("d")&&(r=d)}var s,u="y"===e[o]||"yyyy"===e[o]?4:"yy"===e[o]?2:-1;return-1!==o&&(a=i[e[o]].toString(),2===u&&1===a.length&&(u=1),a.length===u&&(0!==i[e[o]]||"00"===t[o])&&(-1!==n&&(!((a=i[e[n]].toString()).length<1||i[e[n]]<1||12<i[e[n]])&&(-1!==r&&!((a=i[e[r]].toString()).length<1||i[e[r]]<1||31<i[e[r]]||2===i[e[n]]&&i[e[r]]>((s=i[e[o]])%4!=0||s%100==0&&s%400!=0?28:29)||i[e[r]]>[0,31,29,31,30,31,30,31,31,30,31,30,31][i[e[n]]])))))},isEmpty:function(e){return!(void 0!==e&&!e.match(/^\s+$/)&&""!==e)},checkTime:function(e){if(!q.jgrid.isEmpty(e)){if(!(e=e.match(/^(\d{1,2}):(\d{2})([apAP][Mm])?$/)))return!1;if(e[3]){if(e[1]<1||12<e[1])return!1}else if(23<e[1])return!1;if(59<e[2])return!1}return!0},checkValues:function(e,t,i,a){var o,r,n,d,l,s=this,u=s.p.colModel,c=q.jgrid.getRegional(this,"edit.msg"),f=function(e){var t,i,e=e.toString();if(2<=e.length&&("-"===e[0]?(t=e[1],e[2]&&(i=e[2])):(t=e[0],e[1]&&(i=e[1])),"0"===t&&"."!==i))return!1;return"number"==typeof parseFloat(e)&&isFinite(e)};if(void 0===i)if("string"==typeof t){for(r=0,l=u.length;r<l;r++)if(u[r].name===t){o=u[r].editrules,null!=u[t=r].formoptions&&(n=u[r].formoptions.label);break}}else 0<=t&&(o=u[t].editrules);else o=i,n=void 0===a?"_":a;if(o){if(n=n||(null!=s.p.colNames?s.p.colNames[t]:u[t].label),!0===o.required&&q.jgrid.isEmpty(e))return[!1,n+": "+c.required,""];a=!1!==o.required;if(!0===o.number&&!(!1==a&&q.jgrid.isEmpty(e)||f(e)))return[!1,n+": "+c.number,""];if(void 0!==o.minValue&&!isNaN(o.minValue)&&parseFloat(e)<parseFloat(o.minValue))return[!1,n+": "+c.minValue+" "+o.minValue,""];if(void 0!==o.maxValue&&!isNaN(o.maxValue)&&parseFloat(e)>parseFloat(o.maxValue))return[!1,n+": "+c.maxValue+" "+o.maxValue,""];if(!0===o.email&&!(!1==a&&q.jgrid.isEmpty(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)))return[!1,n+": "+c.email,""];if(!0===o.integer&&(!1!=a||!q.jgrid.isEmpty(e))){if(!f(e))return[!1,n+": "+c.integer,""];if(e%1!=0||-1!==e.indexOf("."))return[!1,n+": "+c.integer,""]}if(!0===o.date&&!(!1==a&&q.jgrid.isEmpty(e)||(u[t].formatoptions&&u[t].formatoptions.newformat?(d=u[t].formatoptions.newformat,(f=q.jgrid.getRegional(s,"formatter.date.masks"))&&f.hasOwnProperty(d)&&(d=f[d])):d=u[t].datefmt||"Y-m-d",q.jgrid.checkDate(d,e))))return[!1,n+": "+c.date+" - "+d,""];if(!0===o.time&&!(!1==a&&q.jgrid.isEmpty(e)||q.jgrid.checkTime(e)))return[!1,n+": "+c.date+" - hh:mm (am/pm)",""];if(!0===o.url&&!(!1==a&&q.jgrid.isEmpty(e)||/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i.test(e)))return[!1,n+": "+c.url,""];if(!0===o.custom&&(!1!=a||!q.jgrid.isEmpty(e))){if(q.jgrid.isFunction(o.custom_func)){e=o.custom_func.call(s,e,n,t);return Array.isArray(e)?e:[!1,c.customarray,""]}return[!1,c.customfcheck,""]}}return[!0,"",""]},validateForm:function(e){for(var t,i=!0,a=0;a<e.elements.length;a++)if(("INPUT"===(t=e.elements[a]).nodeName||"TEXTAREA"===t.nodeName||"SELECT"===t.nodeName)&&(void 0!==t.willValidate?("INPUT"===t.nodeName&&t.type!==t.getAttribute("type")&&t.setCustomValidity(q.jgrid.LegacyValidation(t)?"":"error"),t.reportValidity()):(t.validity=t.validity||{},t.validity.valid=q.jgrid.LegacyValidation(t)),!t.validity.valid)){i=!1;break}return i},LegacyValidation:function(e){var t=!0,i=e.value,a=e.getAttribute("type"),o="checkbox"===a||"radio"===a,r=e.getAttribute("required"),n=e.getAttribute("minlength"),d=e.getAttribute("maxlength"),a=e.getAttribute("pattern");return!e.disabled&&(t=(t=t&&(!r||o&&e.checked||!o&&""!==i))&&(o||(!n||i.length>=n)&&(!d||i.length<=d)))&&a?(a=new RegExp(a)).test(i):t},buildButtons:function(e,i,a){var o;return q.each(e,function(e,t){t.id||(t.id=q.jgrid.randId()),t.position||(t.position="last"),t.side||(t.side="left"),o=t.icon?" fm-button-icon-"+t.side+"'><span class='"+a.icon_base+" "+t.icon+"'></span>":"'>",o="<a  data-index='"+e+"' id='"+t.id+"' class='fm-button "+a.button+o+t.text+"</a>","last"===t.position?i+=o:i=o+i}),i},setSelNavIndex:function(i,a){var e=q(".ui-pg-button",i.p.pager);q.each(e,function(e,t){if(a===t)return i.p.navIndex=e,!1}),q(a).attr("tabindex","0")},getFirstVisibleCol:function(e){for(var t=-1,i=0;i<e.p.colModel.length;i++)if(!0!==e.p.colModel[i].hidden){t=i;break}return t},getLastVisibleCol:function(e){for(var t=-1,i=e.p.colModel.length-1;0<=i;i--)if(!0!==e.p.colModel[i].hidden){t=i;break}return t}})});