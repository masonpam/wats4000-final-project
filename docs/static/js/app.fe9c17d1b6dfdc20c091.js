webpackJsonp([1],{"0zlw":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),s=n("mtWM"),o=n.n(s),i={name:"YesorNo",data:function(){return{prediction:null,errors:[]}},methods:{YesorNo:function(){var t=this;o.a.get("https://yesno.wtf/api").then(function(e){t.prediction=e.data}).catch(function(e){t.errors.push(e)})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yes-or-no"},[n("p",[n("router-link",{attrs:{to:{name:"YesorNo"}}},[t._v("Yes or No ")]),t._v("\n•\n")],1),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.YesorNo(e)}}},[t._m(0)]),t._v(" "),t.prediction?n("div",{staticClass:"prediction"},[n("p",[t._v(t._s(t.prediction.answer)+", "),n("img",{attrs:{src:t.prediction.image}})])]):t._e(),t._v(" "),t.errors.length>0?n("ul",{staticClass:"errors"},t._l(t.errors,function(e){return n("li",[t._v("\n      "+t._s(e.message)+"\n    ")])})):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Ask a Yes or No question: "),e("input",{attrs:{type:"text"}}),this._v(" "),e("button",{attrs:{type:"submit"}},[this._v("Submit")])])}]};var c={name:"App",components:{YesorNo:n("VU/8")(i,a,!1,function(t){n("0zlw")},"data-v-2b1a62b2",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("YesorNo")],1)},staticRenderFns:[]};var p=n("VU/8")(c,u,!1,function(t){n("yk24")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:p},template:"<App/>"})},yk24:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fe9c17d1b6dfdc20c091.js.map