webpackJsonp([1],{"8kyA":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),r=s("mtWM"),o=s.n(r),a={name:"YesorNo",data:function(){return{results:null,errors:[],phrase:"",rhyme:""}},methods:{YesorNo:function(){var t=this;o.a.get("https://yesno.wtf/api").then(function(e){t.prediction=e.data}).catch(function(e){t.errors.push(e)})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yes-or-no"},[s("p",[s("router-link",{attrs:{to:{name:"YesorNo"}}},[t._v("Yes or No ")]),t._v("\n•\n")],1),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.yesno(e)}}},[t._m(0)]),t._v(" "),t.results&&t.results.length>0?s("ul",{staticClass:"results"},t._l(t.results,function(e){return s("li",{staticClass:"item"},[s("p",[s("strong",[t._v(t._s(e.word))])]),t._v(" "),s("p",[t._v(t._s(e.score))])])})):t._e(),t._v(" "),t.answer?s("div",{staticClass:"answer"},[s("p",[t._v(t._s(t.answer.answer)+", "),s("img",{attrs:{src:t.answer.image}})])]):t._e(),t._v(" "),t.errors.length>0?s("ul",{staticClass:"errors"},t._l(t.errors,function(e){return s("li",[t._v("\n      "+t._s(e.message)+"\n    ")])})):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Ask a Yes or No question: "),e("input",{attrs:{type:"text"}}),this._v(" "),e("button",{attrs:{type:"submit"}},[this._v("Submit")])])}]};var u={name:"App",components:{YesorNo:s("VU/8")(a,i,!1,function(t){s("8kyA")},"data-v-7b3a24eb",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("YesorNo")],1)},staticRenderFns:[]};var l=s("VU/8")(u,c,!1,function(t){s("yk24")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:l},template:"<App/>"})},yk24:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5ef6e56c40d4639ccf2e.js.map