webpackJsonp([1],{J3ZB:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("mtWM"),r=n.n(i),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("Thinking...")]),this._v(" "),e("div",{staticClass:"sk-folding-cube"},[e("div",{staticClass:"sk-cube1 sk-cube"}),this._v(" "),e("div",{staticClass:"sk-cube2 sk-cube"}),this._v(" "),e("div",{staticClass:"sk-cube4 sk-cube"}),this._v(" "),e("div",{staticClass:"sk-cube3 sk-cube"})])])}]};n("VU/8")({name:"CubeSpinner"},o,!1,function(t){n("O1oL")},"data-v-745b03cf",null).exports;var a={name:"YesorNo",components:{spinner:CubeSpinner},data:function(){return{prediction:null,errors:[],showSpinner:!1}},methods:{YesorNo:function(){var t=this;this.showSpinner=!0,r.a.get("https://yesno.wtf/api").then(function(e){t.showSpinner=!1,t.prediction=e.data}).catch(function(e){t.showSpinner=!1,t.errors.push(e)})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yes-or-no"},[n("p",[n("router-link",{attrs:{to:{name:"YesorNo"}}},[t._v("Yes or No ")]),t._v("\n•\n")],1),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.YesorNo(e)}}},[t._m(0)]),t._v(" "),t.prediction?n("div",{staticClass:"prediction"},[n("p",[t._v(t._s(t.prediction.answer)+", "),n("img",{attrs:{src:t.prediction.image}})])]):t._e(),t._v(" "),n("div",{staticClass:"results-container"},[t.showSpinner?n("spinner"):t._e()],1),t._v(" "),t.errors.length>0?n("ul",{staticClass:"errors"},t._l(t.errors,function(e){return n("li",[t._v("\n      "+t._s(e.message)+"\n    ")])})):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Ask a Yes or No question: "),e("input",{attrs:{type:"text"}}),this._v(" "),e("button",{attrs:{type:"submit"}},[this._v("Submit")])])}]};var u={name:"App",components:{YesorNo:n("VU/8")(a,c,!1,function(t){n("J3ZB")},"data-v-72a4c317",null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("YesorNo")],1)},staticRenderFns:[]};var l=n("VU/8")(u,p,!1,function(t){n("vqO3")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:l},template:"<App/>"})},O1oL:function(t,e){},vqO3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9cc01e3c1937f3c6f94b.js.map