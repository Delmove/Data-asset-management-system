(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59ebdedc"],{"6ff1":function(t,e,a){"use strict";a.d(e,"f",(function(){return r})),a.d(e,"i",(function(){return i})),a.d(e,"e",(function(){return o})),a.d(e,"g",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return s})),a.d(e,"h",(function(){return c})),a.d(e,"b",(function(){return d})),a.d(e,"c",(function(){return m}));var n=a("b775");function r(t){return Object(n["a"])({url:"/xdata/model/data",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/xdata/model/data",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/xdata/model/list",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/xdata/model/select",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/xdata/model/"+t,method:"get"})}function s(t){return Object(n["a"])({url:"/xdata/model",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/xdata/model",method:"put",data:t})}function d(t){return Object(n["a"])({url:"/xdata/model/"+t,method:"delete"})}function m(t){return Object(n["a"])({url:"/xdata/model/export",method:"get",params:t})}},c7ec:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:t.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:t.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"过滤条件",prop:"searchValue"}},[a("el-input",{staticStyle:{width:"600px"},attrs:{placeholder:"请输入过滤条件",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.queryParams.searchValue,callback:function(e){t.$set(t.queryParams,"searchValue",e)},expression:"queryParams.searchValue"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"cyan",icon:"el-icon-search",size:"mini"},on:{click:t.getList}},[t._v("搜索")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.dataList},on:{"cell-dblclick":t.editData}},[a("el-table-column",{attrs:{type:"number",width:"55",align:"center"}}),t._l(t.cols,(function(t){return a("el-table-column",{attrs:{label:t.title,align:"center",prop:t.field}})}))],2),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}})],1)},r=[],i=a("6ff1"),o={name:"ModelData",data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,dataList:[],queryParams:{pageNum:1,pageSize:10,searchValue:null,id:null},cols:[]}},created:function(){var t=this.$route.params&&this.$route.params.modelId;this.queryParams.id=t,this.getList()},methods:{getList:function(){var t=this;this.loading=!0,Object(i["f"])(this.queryParams).then((function(e){if(null!=e.rows&&e.rows.length>0){var a=e.rows[0],n=[];for(var r in a)n.push({field:r,title:r});n.sort(),t.cols=n}t.dataList=e.rows,t.total=e.total,t.loading=!1}))},updateData:function(t){var e=this;Object(i["i"])({id:this.queryParams.id,params:t}).then((function(t){e.msgSuccess("修改成功"),e.getList()}))},editData:function(t,e,a,n){var r=this;this.$prompt("请输入你要设置的值:","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:t[e.property]}).then((function(a){var n=a.value;r.updateData({field:e.property,value:n,id:t["id"]})})).catch((function(t){console.log(t)}))}}},u=o,l=a("2877"),s=Object(l["a"])(u,n,r,!1,null,null,null);e["default"]=s.exports}}]);