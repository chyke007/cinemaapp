(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-384aae72"],{"3b05":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("App-navigation"),a("v-container",{attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-center display-1 font-weight-black "},[e._v("\n            Available  tickets refreshments\n                         ")]),a("v-text-field",{staticClass:"mx-2",attrs:{"prepend-icon":"search","append-icon":"mic",label:"Search","solo-inverted":"",flat:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center display-3 font-weight-black my-3"},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.specific(),search:e.search,"custom-filter":e.customFilter,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){var s=t.item;return[a("td",[a("b",[e._v(e._s(s.sn))])]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(s.name.toUpperCase()))]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(s.ref_name.toUpperCase()))]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(s.quantity))]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(s.price))]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(s.amount))]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(s.usersold.toUpperCase()))]),a("td",{staticClass:"text-xs-center"},[e._v(e._s(s.dateadded))]),a("td",{staticClass:"justify-center layout px-0"},[e.crc(e.staff.rights,"015")?a("Delete-ticket",{attrs:{name:s.name}}):e._e()],1)]}}])})],1)],1)],1)],1)},n=[],r=(a("ac6a"),a("456d"),a("28a5"),a("6b54"),a("a481"),a("53ca")),c=a("3fcb"),i=a("8c02"),l=a("ea45"),o={name:"ticket-refreshment",data:function(){return{staff:this.$store.getters.getStaff,dialog:!1,search:"",headers:[{text:"S/N",align:"center",sortable:!0,value:"sn"},{text:"Ticket ID",align:"center",sortable:!0,value:"name"},{text:"NAME",align:"center",sortable:!0,value:"ref_name"},{text:"QUANTITY",align:"center",sortable:!0,value:"quantity"},{text:"PRICE(N)",align:"center",sortable:!0,value:"price"},{text:"AMOUNT(N)",align:"center",sortable:!0,value:"amount"},{text:"SOLD BY",align:"center",sortable:!0,value:"usersold"},{text:"DATE SOLD",align:"center",sortable:!0,value:"dateadded"},{text:"ACTIONS",sortable:!1}],listPrimitive:null}},methods:{specific:function(){return Object(l["g"])(this.loads(),"type","refreshment")},loads:function(){var e,t=this;return t.$store.dispatch("updateTickets"),e=t.$store.getters.getTicket,e},crc:function(e,t){return Object(l["a"])(e,t)},customFilter:function(e,t){if(!t)return e;function a(e,t){return null!==e&&-1===["undefined","boolean"].indexOf(Object(r["a"])(e))&&-1!==e.toString().toLowerCase().replace(/[^0-9a-zA-Z]+/g,"").indexOf(t)}var s=t.toString().toLowerCase().split(" ").filter(function(e){return e});return e.filter(function(e){return s.every(function(t){return Object.keys(e).some(function(s){return a(e[s],t)})})})}},components:{AppNavigation:c["a"],DeleteTicket:i["a"]}},u=o,d=a("0c7c"),f=a("6544"),v=a.n(f),p=a("a523"),x=a("8fea"),h=a("0e8f"),m=a("a722"),b=a("2677"),_=Object(d["a"])(u,s,n,!1,null,null,null);_.options.__file="TicketRefreshment.vue";t["default"]=_.exports;v()(_,{VContainer:p["a"],VDataTable:x["a"],VFlex:h["a"],VLayout:m["a"],VTextField:b["a"]})},"524b":function(e,t,a){"use strict";var s=a("9d69"),n=a.n(s);n.a},"8c02":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(t){e.deleteTicket()}}},[a("v-icon",{attrs:{color:"pink"}},[e._v("delete")])],1)],1)},n=[],r=(a("7f7f"),a("4abe")),c={name:"DeleteTicket",props:{name:{required:!0}},data:function(){return{}},methods:{deleteTicket:function(){var e=this,t=confirm("Warning!!! \n This will delete this ticket, do you continue?","Exodus","Yes","No");t&&Object(r["e"])("ticket",this.name,function(t){t?(console.log("This is response: ",t),alert("Ticket has been successfully deleted"),e.$store.dispatch("updateTickets")):console.log(null)})}}},i=c,l=(a("524b"),a("0c7c")),o=a("6544"),u=a.n(o),d=a("8336"),f=a("132d"),v=Object(l["a"])(i,s,n,!1,null,"3c0ca2e1",null);v.options.__file="DeleteTicket.vue";t["a"]=v.exports;u()(v,{VBtn:d["a"],VIcon:f["a"]})},"9d69":function(e,t,a){}}]);
//# sourceMappingURL=chunk-384aae72.945b0a6e.js.map