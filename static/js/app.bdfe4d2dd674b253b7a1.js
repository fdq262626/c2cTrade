webpackJsonp([1],{"6pAo":function(t,s){},EPl5:function(t,s){},"Kax/":function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("7+uW"),e=(i("kNAH"),i("Dd8w")),a=i.n(e),c=i("NYxO"),o={data:function(){return{tradeinfo:[{type:"买入",time:"2017-11-12 17:36:24",price:.117,count:1912.5156,poundage:0,status:"已成交"},{type:"卖出",time:"2017-11-12 17:36:24",price:.117,count:1912.5156,poundage:0,status:"已成交"},{type:"买入",time:"2017-11-12 17:36:24",price:.117,count:1912.5156,poundage:0,status:"已成交"},{type:"卖出",time:"2017-11-12 17:36:24",price:.117,count:1912.5156,poundage:0,status:"已成交"}]}},computed:a()({},Object(c.b)(["hisflag"])),methods:{closeHistory:function(){this.$store.dispatch("closeHistory")}}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{"enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.hisflag,expression:"hisflag"}],staticClass:"ct"},[i("div",{staticClass:"top"},[t._v("\n        历史交易\n        "),i("i",{staticClass:"icon iconfont icon-fanhui",on:{click:function(s){t.closeHistory()}}})]),t._v(" "),t._l(t.tradeinfo,function(s,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-top"},[i("div",{staticClass:"it-l"},[t._v("\n            "+t._s(s.type)+"\n            "),i("span",[t._v(t._s(s.time))])]),t._v(" "),i("div",{staticClass:"it-r"},[i("span",[t._v(t._s(s.status))])])]),t._v(" "),i("div",{staticClass:"item-bottom"},[i("div",{staticClass:"ib-l"},[t._v("\n            "+t._s(t._f("formatNum")(s.price,4))+"\n            "),i("p",[t._v("价格(RYC)")])]),t._v(" "),i("div",{staticClass:"ib-m"},[t._v("\n            "+t._s(t._f("formatNum")(s.count,4))+"\n            "),i("p",[t._v("数量(RYC)")])]),t._v(" "),i("div",{staticClass:"ib-r"},[t._v("\n            "+t._s(t._f("formatNum")(s.poundage,4))+"\n            "),i("p",[t._v("手续费(RYC)")])])])])})],2)])},staticRenderFns:[]},v=i("VU/8")(o,l,!1,function(t){i("s0nX")},"data-v-046fd152",null).exports,r={components:{history:v},methods:{showHistory:function(){this.$store.dispatch("showHistory")}}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"top"},[t._m(0),t._v(" "),i("span",{staticClass:"ht",on:{click:function(s){t.showHistory()}}},[t._v("历史交易")]),t._v(" "),i("history")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"top-m"},[s("span",[this._v("C2C交易")])])}]},_={name:"app",components:{tradehead:i("VU/8")(r,u,!1,function(t){i("x2m7")},"data-v-c56bb924",null).exports},methods:{}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("tradehead"),this._v(" "),s("div",{staticClass:"tap"},[s("div",{staticClass:"item"},[s("router-link",{attrs:{to:"/"}},[this._v("买入AIC")])],1),this._v(" "),s("div",{staticClass:"item"},[s("router-link",{attrs:{to:"/sellout"}},[this._v("卖出AIC")])],1),this._v(" "),s("div",{staticClass:"item"},[s("router-link",{attrs:{to:"/currenttrade"}},[this._v("当前交易")])],1)]),this._v(" "),s("keep-alive",[s("router-view",{attrs:{"transition-mode":"out-in"}})],1)],1)},staticRenderFns:[]},p=i("VU/8")(_,d,!1,function(t){i("Kax/")},"data-v-0d6f993a",null).exports,f=i("/ocq"),h=(i("oPmM"),{computed:a()({},Object(c.b)(["subflag","ioItem"])),props:["count"],data:function(){return{img:{data:""},tm:"3600"}},methods:{cb:function(){this.$store.dispatch("cb")},changeFile:function(t,s){var i=this.img,n=t.target,e=new FileReader;e.readAsDataURL(n.files[0]),e.onload=function(){i.data=this.result,console.log(this.result)}},openFile:function(){document.getElementById("pic").click();document.getElementById("camera").style.opacity=0},checkTime:function(){var t;!function(){if(!t){var s=document.getElementById("result"),i=new Date("1111/1/1,0:0:10");s.innerHTML=i.getHours()+"时"+i.getMinutes()+"分"+i.getSeconds()+"秒",t=setInterval(function(){0==i.getHours()&&0==i.getMinutes()&&0==i.getSeconds()&&(clearInterval(t),t=null),s.innerHTML=i.getHours()+"时"+i.getMinutes()+"分"+i.getSeconds()+"秒",i.setSeconds(i.getSeconds()-1)},1e3)}}()}}}),m={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{"enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.subflag,expression:"subflag"}],staticClass:"subaic"},[i("div",{staticClass:"top"},[t._v("\n        完成付款\n        "),i("i",{staticClass:"icon iconfont icon-fanhui",on:{click:function(s){t.cb()}}})]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"c-c"},[i("div",{staticClass:"c-l"},[i("p",[t._v("您需支付 :")]),t._v(" "),i("p",[t._v("付款方式 :")]),t._v(" "),i("p",[t._v("开户行 :")]),t._v(" "),i("p",[t._v("开户名 :")]),t._v(" "),i("p",[t._v("卖家备注 :")])]),t._v(" "),i("div",{staticClass:"c-r"},[i("p",[t._v(t._s(t._f("formatNum")(t.ioItem.price*t.count,4)))]),t._v(" "),i("p",[i("i",{staticClass:"icon iconfont icon-yinhangqia"}),t._v("  银行转账")]),t._v(" "),i("p",[t._v("XXXXXXXXXXXXXX")]),t._v(" "),i("p",[t._v("李四")]),t._v(" "),i("div",{staticClass:"remark"},[t._v("如果你无法简洁的表达你的想法，那只说明你还不够了解它。")])])])]),t._v(" "),i("div",{staticClass:"c-bottom"},[i("span",[t._v("请在60分钟内完成支付并上传支付凭证，否则交易将会自动取消。（请上传真实凭证，否则将封号处理！）")]),t._v(" "),i("div",{staticClass:"timeout"},[i("span",[t._v("倒计时："),i("span",{attrs:{id:"result"}})])])]),t._v(" "),i("div",{staticClass:"upload"},[i("input",{attrs:{type:"file",id:"pic",accept:"image/jpeg,image/png,"},on:{change:function(s){t.changeFile(s,this)}}}),t._v(" "),i("img",{attrs:{src:t.img.data,id:"showImg",alt:"22"}}),t._v(" "),i("i",{staticClass:"icon iconfont icon-zhaoxiangji",attrs:{id:"camera"},on:{click:function(s){t.openFile()}}})]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(s){t.checkTime()}}},[t._v("\n        完成付款\n      ")])])])},staticRenderFns:[]},C=i("VU/8")(h,m,!1,function(t){i("jTr/")},"data-v-f43ae038",null).exports,g={components:{subaic:C},computed:a()({},Object(c.b)(["ioItem","show"])),props:[],data:function(){return{count:""}},methods:{close:function(){this.$store.dispatch("close")},showsubaic:function(){this.$store.dispatch("showsubaic")},checkCount:function(){this.count*this.ioItem.price>this.ioItem.count&&console.log("超出限额！")}}},b={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{"enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"buyaic"},[i("div",{staticClass:"top"},[t._v("\n        购买AIC\n        "),i("i",{staticClass:"icon iconfont icon-fanhui",on:{click:function(s){t.close()}}})]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"c-top"},[i("p",[t._v("价格:"),i("span",[t._v("￥"+t._s(t.ioItem.price))])])]),t._v(" "),i("div",{staticClass:"c-c"},[i("div",{staticClass:"c-l"},[i("p",[t._v("付款方式 :")]),t._v(" "),i("p",[t._v("卖家 :")]),t._v(" "),i("p",[t._v("交易限额 :")]),t._v(" "),i("p",[t._v("付款期限 :")]),t._v(" "),i("p",[t._v("卖家备注 :")])]),t._v(" "),i("div",{staticClass:"c-r"},[i("p",[i("i",{staticClass:"icon iconfont icon-yinhangqia"}),t._v("  银行转账")]),t._v(" "),i("p",[t._v(t._s(t._f("formatTel")(t.ioItem.tel)))]),t._v(" "),i("p",[t._v(t._s(t.ioItem.count))]),t._v(" "),i("p",[t._v("60分钟")]),t._v(" "),i("div",{staticClass:"remark"},[t._v("如果你无法简洁的表达你的想法，那只说明你还不够了解它。")])])])]),t._v(" "),i("div",{staticClass:"c-bottom"},[t._v("\n        买入数量："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{type:"text"},domProps:{value:t.count},on:{blur:function(s){t.checkCount()},input:function(s){s.target.composing||(t.count=s.target.value)}}}),i("span",{staticClass:"a"},[t._v("AIC")])]),t._v(" "),i("div",{staticClass:"bp"},[t._v("\n        买入金额："),i("span",[t._v("￥"+t._s(t._f("formatNum")(t.ioItem.price*t.count,4)))])]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(s){t.showsubaic()}}},[t._v("\n        买入\n      ")]),t._v(" "),i("subaic",{attrs:{count:t.count}})],1)])},staticRenderFns:[]},y=i("VU/8")(g,b,!1,function(t){i("T8pC")},"data-v-649b03e0",null).exports,w={computed:a()({},Object(c.b)(["payflag"])),data:function(){return{}},methods:{closepay:function(){this.$store.dispatch("closepay")},showsubaic:function(){this.$store.dispatch("showsubaic")}}},X={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{"enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.payflag,expression:"payflag"}],staticClass:"waitpay"},[i("div",{staticClass:"top"},[t._v("\n        完成付款\n        "),i("i",{staticClass:"icon iconfont icon-fanhui",on:{click:function(s){t.closepay()}}})]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"c-c"},[i("div",{staticClass:"c-l"},[i("p",[t._v("交易金额 :")]),t._v(" "),i("p",[t._v("付款方式 :")]),t._v(" "),i("p",[t._v("开户行 :")]),t._v(" "),i("p",[t._v("开户名 :")]),t._v(" "),i("p",[t._v("卖家备注 :")])]),t._v(" "),i("div",{staticClass:"c-r"},[i("p",[t._v("￥2687.00")]),t._v(" "),i("p",[i("i",{staticClass:"icon iconfont icon-yinhangqia"}),t._v("  银行转账")]),t._v(" "),i("p",[t._v("XXXXXXXXXXXXXX")]),t._v(" "),i("p",[t._v("李四")]),t._v(" "),i("p",[t._v("如果你无法简洁的表达你的想法，那只说明你还不够了解它。")])])])]),t._v(" "),i("div",{staticClass:"c-bottom"},[i("span",[t._v("请在60分钟内完成支付并上传支付凭证，否则交易将会自动取消。（请上传真实凭证，否则将封号处理！）")]),t._v(" "),i("p",[t._v("倒计时：")])]),t._v(" "),i("div",{staticClass:"upload"},[i("i",{staticClass:"icon iconfont icon-zhaoxiangji"})]),t._v(" "),i("div",{staticClass:"btn"},[t._v("\n        上传付款凭证\n      ")])])])},staticRenderFns:[]},I=i("VU/8")(w,X,!1,function(t){i("rcbh")},"data-v-b7ac0d02",null).exports,x={computed:a()({},Object(c.b)(["comflag"])),data:function(){return{}},methods:{closecom:function(){this.$store.dispatch("closecom")},showsubaic:function(){this.$store.dispatch("showsubaic")}}},R={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{"enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.comflag,expression:"comflag"}],staticClass:"waitconfirm"},[i("div",{staticClass:"top"},[t._v("\n        完成付款\n        "),i("i",{staticClass:"icon iconfont icon-fanhui",on:{click:function(s){t.closecom()}}})]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"c-c"},[i("div",{staticClass:"c-l"},[i("p",[t._v("交易金额 :")]),t._v(" "),i("p",[t._v("付款方式 :")]),t._v(" "),i("p",[t._v("开户行 :")]),t._v(" "),i("p",[t._v("开户名 :")]),t._v(" "),i("p",[t._v("卖家备注 :")])]),t._v(" "),i("div",{staticClass:"c-r"},[i("p",[t._v("￥2687.00")]),t._v(" "),i("p",[i("i",{staticClass:"icon iconfont icon-yinhangqia"}),t._v("  银行转账")]),t._v(" "),i("p",[t._v("XXXXXXXXXXXXXX")]),t._v(" "),i("p",[t._v("李四")]),t._v(" "),i("p",[t._v("如果你无法简洁的表达你的想法，那只说明你还不够了解它。")])])])]),t._v(" "),i("div",{staticClass:"c-bottom"},[i("span",[t._v("已上传打款凭证，等待卖家确认中......")]),t._v(" "),i("p",[t._v("倒计时：")])]),t._v(" "),i("div",{staticClass:"evidence"},[i("div",{staticClass:"item"}),t._v(" "),i("div",{staticClass:"item"}),t._v(" "),i("div",{staticClass:"item"})])])])},staticRenderFns:[]},k=i("VU/8")(x,R,!1,function(t){i("bCtT")},"data-v-bb3183f8",null).exports,$={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"help"},[i("div",{staticClass:"top"},[t._v("\n    AICEX\n    "),i("i",{staticClass:"icon iconfont icon-fanhui",on:{click:function(s){t.closesubaic()}}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("p",[this._v("客服电话")]),this._v(" "),s("p",[this._v("400-800-1313")]),this._v(" "),s("p",[this._v("客服微信（AICkefu）:")]),this._v(" "),s("div",{staticClass:"pic"},[s("img",{attrs:{draggable:"false",src:i("msxP")}})])])}]},E=i("VU/8")({},$,!1,function(t){i("EPl5")},"data-v-44da9d17",null).exports,N={computed:a()({},Object(c.b)(["sellflag","sellDe"])),components:{help:E},data:function(){return{}},methods:{closesell:function(){this.$store.dispatch("closesell")}}},A={render:function(){var t=this.$createElement,s=this._self._c||t;return s("transition",{attrs:{"enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:this.sellflag,expression:"sellflag"}],staticClass:"selldetail"},[s("div",{staticClass:"top"},[this._v("\n        AICEX\n        "),s("i",{staticClass:"icon iconfont icon-fanhui",on:{click:this.closesell}})]),this._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"c-c"},[s("div",{staticClass:"c-l"},[s("p",[this._v("交易金额 :")]),this._v(" "),s("p",[this._v("付款方式 :")]),this._v(" "),s("p",[this._v("开户行 :")]),this._v(" "),s("p",[this._v("开户名 :")])]),this._v(" "),s("div",{staticClass:"c-r"},[s("p",[this._v("￥"+this._s(this._f("formatNum")(this.sellDe.price*this.sellDe.count,4)))]),this._v(" "),s("p",[s("i",{staticClass:"icon iconfont icon-yinhangqia"}),this._v("  银行转账")]),this._v(" "),s("p",[this._v("XXXXXXXXXXXXXX")]),this._v(" "),s("p",[this._v("李四")])])])]),this._v(" "),s("div",{staticClass:"txt"},[this._v("买家购买凭证：")]),this._v(" "),s("div",{staticClass:"evidence"},[s("div",{staticClass:"item"}),this._v(" "),s("div",{staticClass:"item"}),this._v(" "),s("div",{staticClass:"item"})]),this._v(" "),s("div",{staticClass:"c-bottom"},[s("span",[this._v("请在24小时内确认收款，否则AIC将会被自动转账给买家。请及时联系买家。")]),this._v(" "),s("p",[this._v("倒计时：")])]),this._v(" "),s("div",{staticClass:"btn"},[this._v("\n        确认收款\n      ")]),this._v(" "),s("div",{staticClass:"help"},[s("a",{attrs:{href:"/help"}},[this._v("没有收到款且无法联系到买家？请联系客服")])]),this._v(" "),s("help")],1)])},staticRenderFns:[]},H=i("VU/8")(N,A,!1,function(t){i("6pAo")},"data-v-52b1131c",null).exports,F={methods:{open:function(t){this.$store.dispatch("open",t)}},data:function(){return{info:[{tel:15813885588,count:3500,price:15.12},{tel:13813885388,count:3400,price:16.12},{tel:13855661388,count:4400,price:16.12},{tel:13683885228,count:3300,price:17.58},{tel:13955664889,count:5100,price:15.82}]}},components:{buyaic:y,history:v,subaic:C,waitpay:I,waitconfirm:k,selldetail:H,help:E}},T={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"buyin"},[t._l(t.info,function(s,n){return i("div",{key:n,staticClass:"item",on:{click:function(i){t.open(s)}}},[i("div",{staticClass:"item-l"},[t._v(t._s(t._f("formatTel")(s.tel)))]),t._v(" "),i("div",{staticClass:"item-m"},[i("p",[t._v(t._s(s.count))]),t._v(" "),i("p",[t._v("可买(AIC)")])]),t._v(" "),i("div",{staticClass:"item-r"},[i("p",[t._v("￥"+t._s(s.price))]),t._v(" "),i("p",[t._v("卖价(RMB)")]),t._v(" "),i("i",{staticClass:"icon iconfont icon-sandian"})])])}),t._v(" "),i("buyaic")],2)},staticRenderFns:[]},D=i("VU/8")(F,T,!1,function(t){i("ivRT")},"data-v-377ec15a",null).exports,O={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"sellout"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"sellprice"},[t._m(3),t._v(" "),i("div",{staticClass:"btn1",on:{click:function(s){t.sell()}}},[t._v("卖出")]),t._v(" "),i("div",{staticClass:"btn2",on:{click:function(s){t.back()}}},[t._v("返回")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sellable"},[s("div",{staticClass:"sa"},[s("span",[this._v("可卖AIC")]),this._v(" "),s("span",[this._v("1234.00AIC")])]),this._v(" "),s("div",{staticClass:"sa-b"},[this._v("\n      卖出数量："),s("input",{attrs:{type:"text"}}),s("span",{staticClass:"a"},[this._v("AIC")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sellable"},[s("div",{staticClass:"sa"},[s("span",[this._v("出价范围")]),this._v(" "),s("span",[this._v("￥10.00~￥10.50")])]),this._v(" "),s("div",{staticClass:"sa-b"},[this._v("\n      卖出价格："),s("input",{attrs:{type:"text"}}),s("span",[this._v("RMB/AIC")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"info sellable"},[s("div",{staticClass:"info-t"},[s("span",[this._v("备注：")])]),this._v(" "),s("div",{staticClass:"info-b"},[s("textarea",{attrs:{rows:"10",maxlength:"140",placeholder:"限制140字，您可以备注你的联系方式，以便买家及时联系您"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("卖出金额："),s("span",[this._v("￥1234.00")])])}]},V=i("VU/8")({},O,!1,function(t){i("mfqF")},"data-v-3cb36d12",null).exports,j={methods:{showDetail:function(t){this.$store.dispatch("showDetail",t)}},computed:a()({},Object(c.b)({})),data:function(){return{tradeinfo:[{typenode:0,time:"2017-11-12 17:36:24",price:.116,count:1912.5156,poundage:0,statustype:1},{typenode:1,time:"2017-11-12 17:36:24",price:.12,count:1945.5156,poundage:0,statustype:2},{typenode:0,time:"2017-11-12 17:36:24",price:.119,count:1944.5156,poundage:0,statustype:3},{typenode:1,time:"2017-11-12 17:36:24",price:.155,count:1965.5156,poundage:0,statustype:4}]}},components:{subaic:C,selldetail:H,waitconfirm:k,waitpay:I}},U={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ct"},[t._l(t.tradeinfo,function(s,n){return i("div",{key:n,staticClass:"item",on:{click:function(i){t.showDetail(s)}}},[i("div",{staticClass:"item-top"},[i("div",{staticClass:"it-l"},[t._v("\n       "+t._s(t._f("tradeType")(s.typenode))+"\n        "),i("span",[t._v(t._s(s.time))])]),t._v(" "),i("div",{staticClass:"it-r"},[i("span",[t._v(t._s(t._f("chosetype")(s.statustype)))])])]),t._v(" "),i("div",{staticClass:"item-bottom"},[i("div",{staticClass:"ib-l"},[t._v("\n        "+t._s(t._f("formatNum")(s.price,4))+"\n        "),i("p",[t._v("价格(RYC)")])]),t._v(" "),i("div",{staticClass:"ib-m"},[t._v("\n        "+t._s(t._f("formatNum")(s.count,4))+"\n        "),i("p",[t._v("数量(RYC)")])]),t._v(" "),i("div",{staticClass:"ib-r"},[t._v("\n        "+t._s(t._f("formatNum")(s.poundage,4))+"\n        "),i("p",[t._v("手续费(RYC)")])])])])}),t._v(" "),i("selldetail"),t._v(" "),i("waitconfirm"),t._v(" "),i("waitpay")],2)},staticRenderFns:[]},M=i("VU/8")(j,U,!1,function(t){i("VoIr")},"data-v-fc7696ea",null).exports;n.a.use(f.a);var q=new f.a({routes:[{path:"/",component:D},{path:"/sellout",component:V},{path:"/currenttrade",component:M},{path:"/help",component:E}],linkActiveClass:"active",mode:"history",history:!0}),P={state:{show:!1,ioItem:"",subflag:"",de:"",sc:""},getters:{show:function(t){return t.show},ioItem:function(t){return t.ioItem},subflag:function(t){return t.subflag},de:function(t){return t.de},sc:function(t){return t.sc}},actions:{open:function(t,s){(0,t.commit)("open",s)},close:function(t){(0,t.commit)("close")},showsubaic:function(t){(0,t.commit)("showsubaic")},cb:function(t){(0,t.commit)("cb")}},mutations:{open:function(t,s){t.show=!0,t.ioItem=s},close:function(t){t.show=!1},showsubaic:function(t){t.subflag=!0},cb:function(t){t.subflag=!1}}},S={state:{sellflag:!1,comflag:!1,payflag:!1,sellDe:"",hisflag:!1},getters:{sellflag:function(t){return t.sellflag},comflag:function(t){return t.comflag},payflag:function(t){return t.payflag},sellDe:function(t){return t.sellDe},hisflag:function(t){return t.hisflag}},actions:{showDetail:function(t,s){(0,t.commit)("showDetail",s)},closesell:function(t){(0,t.commit)("closesell")},closecom:function(t){(0,t.commit)("closecom")},closepay:function(t){(0,t.commit)("closepay")},showHistory:function(t){(0,t.commit)("showHistory")},closeHistory:function(t){(0,t.commit)("closeHistory")}},mutations:{showHistory:function(t){t.hisflag=!0},closeHistory:function(t){t.hisflag=!1},showDetail:function(t,s){for(t.sellDe=s;4==s.statustype||2==s.statustype;)return t.sellflag=!0;for(;3==s.statustype;)return t.comflag=!0;for(;1==s.statustype;)return t.payflag=!0},closesell:function(t){t.sellflag=!1},closecom:function(t){t.comflag=!1},closepay:function(t){t.payflag=!1}}};n.a.use(c.a);var Y=new c.a.Store({modules:{buyin:P,ctrade:S}});n.a.config.productionTip=!1,n.a.filter("chosetype",function(t){return 1==t?" 等待您付款":2==t?" 等待买家付款":3==t?" 等待卖家确认收款":4==t?" 等待您确认收款":void 0}),n.a.filter("formatNum",function(t,s){return t.toFixed(s)}),n.a.filter("tradeType",function(t){return 0==t?"买入":1==t?"卖出":void 0}),n.a.filter("formatTel",function(t){return t.toString().replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}),new n.a({el:"#app",router:q,store:Y,template:"<App/>",components:{App:p}})},T8pC:function(t,s){},VoIr:function(t,s){},bCtT:function(t,s){},ivRT:function(t,s){},"jTr/":function(t,s){},kNAH:function(t,s){!function(t,s){var i=t.documentElement,n="orientationchange"in window?"orientationchange":"resize",e=function(){window.rem=i.getBoundingClientRect().width/25,i.style.fontSize=window.rem+"px"};e(),t.addEventListener&&s.addEventListener(n,e,!1)}(document,window)},mfqF:function(t,s){},msxP:function(t,s,i){t.exports=i.p+"static/img/raw_1509014967.b3a5158.png"},oPmM:function(t,s){},rcbh:function(t,s){},s0nX:function(t,s){},x2m7:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.bdfe4d2dd674b253b7a1.js.map