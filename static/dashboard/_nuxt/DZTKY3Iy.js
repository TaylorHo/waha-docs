import v from"./CuUIlA5n.js";import{a3 as P,a4 as u,i as S,t as s,v as d,aa as g,Y as o,O as n,P as h,a1 as c,A as f,W as w,x as k,N as T,B as b,y as $}from"./Cy-Swep5.js";import{s as R}from"./CE8CCwkZ.js";import"./DUetiKNn.js";import"./BabqqIsz.js";import"./k3uShykO.js";import"./kRkIRYsV.js";import"./B0c67bnt.js";import"./CDWNYJc-.js";import"./DTY5LhYL.js";import"./CLyxQjjc.js";import"./Deom2ZJI.js";import"./BpzpMtC4.js";import"./BSHco4J2.js";import"./DIEwYtuT.js";import"./BHKdfI-P.js";import"./noPsbDs2.js";import"./DE0typ6S.js";import"./CZyyxOQK.js";import"./BavvvBis.js";import"./-zzw_cGM.js";var A={root:function(e){var r=e.props;return["p-dataview p-component",{"p-dataview-list":r.layout==="list","p-dataview-grid":r.layout==="grid"}]},header:"p-dataview-header",paginator:function(e){var r=e.instance;return r.paginatorTop?"p-paginator-top":r.paginatorBottom?"p-paginator-bottom":""},content:"p-dataview-content",emptyMessage:"p-dataview-emptymessage",footer:"p-dataview-footer"},O=P.extend({name:"dataview",classes:A}),B={name:"BaseDataView",extends:R,props:{value:{type:Array,default:null},layout:{type:String,default:"list"},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},lazy:{type:Boolean,default:!1},dataKey:{type:String,default:null}},style:O,provide:function(){return{$parentInstance:this}}};function L(t){return N(t)||z(t)||D(t)||F()}function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,e){if(t){if(typeof t=="string")return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}}function z(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function N(t){if(Array.isArray(t))return y(t)}function y(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,l=new Array(e);r<e;r++)l[r]=t[r];return l}var V={name:"DataView",extends:B,inheritAttrs:!1,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(e){this.d_first=e},rows:function(e){this.d_rows=e},sortField:function(){this.resetPage()},sortOrder:function(){this.resetPage()}},methods:{getKey:function(e,r){return this.dataKey?u.resolveFieldData(e,this.dataKey):r},onPage:function(e){this.d_first=e.first,this.d_rows=e.rows,this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",e)},sort:function(){var e=this;if(this.value){var r=L(this.value),l=u.localeComparator();return r.sort(function(i,a){var m=u.resolveFieldData(i,e.sortField),p=u.resolveFieldData(a,e.sortField);return u.sort(m,p,e.sortOrder,l)}),r}else return null},resetPage:function(){this.d_first=0,this.$emit("update:first",this.d_first)}},computed:{getTotalRecords:function(){return this.totalRecords?this.totalRecords:this.value?this.value.length:0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var e;return((e=this.$primevue.config)===null||e===void 0||(e=e.locale)===null||e===void 0?void 0:e.emptyMessage)||""},paginatorTop:function(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom:function(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},items:function(){if(this.value&&this.value.length){var e=this.value;if(e&&e.length&&this.sortField&&(e=this.sort()),this.paginator){var r=this.lazy?0:this.d_first;return e.slice(r,r+this.d_rows)}else return e}else return null}},components:{DVPaginator:v}};function M(t,e,r,l,i,a){var m=S("DVPaginator");return s(),d("div",g({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(s(),d("div",g({key:0,class:t.cx("header")},t.ptm("header")),[o(t.$slots,"header")],16)):n("",!0),a.paginatorTop?(s(),h(m,{key:1,rows:i.d_rows,first:i.d_first,totalRecords:a.getTotalRecords,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:w(t.cx("paginator")),alwaysShow:t.alwaysShowPaginator,onPage:e[0]||(e[0]=function(p){return a.onPage(p)}),unstyled:t.unstyled,pt:t.ptm("paginator")},c({_:2},[t.$slots.paginatorstart?{name:"start",fn:f(function(){return[o(t.$slots,"paginatorstart")]}),key:"0"}:void 0,t.$slots.paginatorend?{name:"end",fn:f(function(){return[o(t.$slots,"paginatorend")]}),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):n("",!0),k("div",g({class:t.cx("content")},t.ptm("content")),[a.empty?(s(),d("div",g({key:1,class:t.cx("emptyMessage")},t.ptm("emptyMessage")),[o(t.$slots,"empty",{layout:t.layout},function(){return[b($(a.emptyMessageText),1)]})],16)):(s(),d(T,{key:0},[t.$slots.list&&t.layout==="list"?o(t.$slots,"list",{key:0,items:a.items}):n("",!0),t.$slots.grid&&t.layout==="grid"?o(t.$slots,"grid",{key:1,items:a.items}):n("",!0)],64))],16),a.paginatorBottom?(s(),h(m,{key:2,rows:i.d_rows,first:i.d_first,totalRecords:a.getTotalRecords,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:w(t.cx("paginator")),alwaysShow:t.alwaysShowPaginator,onPage:e[1]||(e[1]=function(p){return a.onPage(p)}),unstyled:t.unstyled,pt:t.ptm("paginator")},c({_:2},[t.$slots.paginatorstart?{name:"start",fn:f(function(){return[o(t.$slots,"paginatorstart")]}),key:"0"}:void 0,t.$slots.paginatorend?{name:"end",fn:f(function(){return[o(t.$slots,"paginatorend")]}),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):n("",!0),t.$slots.footer?(s(),d("div",g({key:3,class:t.cx("footer")},t.ptm("footer")),[o(t.$slots,"footer")],16)):n("",!0)],16)}V.render=M;export{V as default};
