(function () {function i(a){return a&&a.__esModule?{d:a.default}:{d:a}}var u={};function A(e,r){var $=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),$.push.apply($,t)}return $}function B(e){for(var r=1;r<arguments.length;r++){var $=null!=arguments[r]?arguments[r]:{};r%2?A(Object($),!0).forEach(function(r){var $IxO8$$interop$default=i(w);$IxO8$$interop$default.d(e,r,$[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors($)):A(Object($)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor($,r))})}return e}var w={};function I(e,r,$){return r in e?Object.defineProperty(e,r,{value:$,enumerable:!0,configurable:!0,writable:!0}):e[r]=$,e}w=I;var H={};H={name:"seed-vue",version:"0.1.3",description:"A Vue2 based component library. Lightweight, responsible, and open-source.",main:"dist/index.js",style:"dist/index.css",typings:"types.d.ts",files:["src","dist"],scripts:{start:"parcel ./src/index.ts --out-file index --no-cache",build:"rm -rf dist/ && NODE_ENV=production parcel build src/index.ts --out-file index --no-cache --experimental-scope-hoisting",lint:"eslint ./src --ext .ts,.js --no-error-on-unmatched-pattern",unit:"jest",storybook:"start-storybook -p 6006 --no-manager-cache","storybook:build":"rm -rf ./docs && build-storybook --docs -o ./docs"},author:"Rogerio Taques",license:"MIT",unpkg:"dist/index.js",homepage:"https://github.com/rogeriotaques/seed-vue#readme",repository:{type:"git",url:"git+ssh://git@github.com/rogeriotaques/seed-vue.git"},bugs:{url:"https://github.com/rogeriotaques/seed-vue/issues"},keywords:["vue","components","ui","app","responsive"],dependencies:{vue:"^2.6.12"},peerDependencies:{vue:"^2.6.12"},devDependencies:{"@babel/core":"^7.12.10","@babel/plugin-transform-runtime":"^7.12.10","@babel/preset-env":"^7.12.10","@babel/preset-typescript":"^7.12.7","@storybook/addon-actions":"^6.1.11","@storybook/addon-essentials":"^6.1.11","@storybook/addon-links":"^6.1.11","@storybook/theming":"^6.1.11","@storybook/vue":"^6.1.11","@typescript-eslint/eslint-plugin":"^4.9.1","@typescript-eslint/parser":"^4.9.1","@vue/component-compiler-utils":"^3.2.0","@vue/composition-api":"^1.0.0-beta.21","babel-core":"^6.26.3","babel-eslint":"^10.1.0","babel-loader":"^8.2.2","babel-plugin-module-resolver":"^4.0.0",browserslist:"^4.16.0","css-loader":"^5.0.1",eslint:"^7.15.0","eslint-config-prettier":"^7.0.0","eslint-config-standard":"^16.0.2","eslint-plugin-prettier":"^3.3.0","eslint-plugin-vue":"^7.2.0",jest:"^26.6.3","node-sass":"^5.0.0","parcel-bundler":"^1.12.4",pug:"^3.0.0","pug-plain-loader":"^1.1.0",sass:"^1.30.0","sass-loader":"^10.1.0","sass-resources-loader":"^2.1.1","style-loader":"^2.0.0","ts-node":"^9.1.1",typescript:"^4.1.3","vue-hot-reload-api":"^2.3.4","vue-jest":"^3.0.7","vue-loader":"^15.9.5","vue-template-compiler":"^2.6.12"}};var D={};function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(e);r&&($=$.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,$)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=i(w);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var J={};function z(o){return J=z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},z(o)}J=z;var y=function(e){var $b9XL$$interop$default=i(J);return"object"===$b9XL$$interop$default.d(e)&&!Array.isArray(e)},x=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t||!Object.assign){var $=Object.getOwnPropertyNames(r).map(function($){var $IxO8$$interop$default=i(w);return $IxO8$$interop$default.d({},$,function(t){return y(r[t])&&null!==e&&e.hasOwnProperty(t)&&y(e[t])}($)?x(e[$],r[$],t):r[$])}).reduce(function(e,r){return l(l({},e),r)},{});return l(l({},e),$)}return Object.assign(e,r)};D.clone=x;var G,O,N,L,b,c,g,v;(function($){$.PRIMARY="primary",$.SECONDARY="secondary",$.RED="red",$.ORANGE="orange",$.GREEN="green",$.BLUE="blue",$.PURPLE="purple",$.GREY="grey",$.DARK_GREY="grey-dark",$.SOFT_GREY="grey-light",$.WHITE="white",$.BLACK="black"})(b||(G=b={},G)),function($){$.MINI="mini",$.DEFAULT="default",$.LARGE="large"}(c||(O=c={},O)),function($){$.TEXT="text",$.SEARCH="search",$.URL="url",$.EMAIL="email",$.TEL="tel",$.PASSWORD="password"}(g||(N=g={},N)),function($){$.NONE="",$.MISSING="missing",$.INVALID="invalid",$.SUCCESS="success"}(v||(L=v={},L));var F=["zoom","pulse","shake","flip"],d={name:"SIcon",props:{name:{type:String,required:!0},fill:{type:Boolean,default:!1},animation:{validator:function(t){return F.includes(t)},default:null},infinite:{type:Boolean,default:!1},size:{validator:function(t){return"default"},default:"default"},customClass:{type:String,default:null},color:{validator:function(t){return null===t||Object.values(b).includes(t)},default:"grey"}},computed:{style:function(){return this.fill?"":"-outline"},animationClassName:function(){return this.animation?"eva-icon".concat(this.infinite?"":"-hover","-").concat(this.animation):null},sizeClassName:function(){return this.size&&"default"!==this.size?"eva-".concat(this.size.replace("x",""),"x"):null}}};if(typeof d==="function"){d=d.options}Object.assign(d,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("span",{staticClass:"s-icon",class:["s-icon--"+_vm.color,{"eva-parent-hover":_vm.animation&&!_vm.infinite}],on:{"click":function($event){return _vm.$emit("click",$event)}}},[_c("i",{staticClass:"eva",class:["eva-"+_vm.name+_vm.style,{"eva-animation":_vm.animation,"eva-infinite":_vm.infinite},_vm.animationClassName,_vm.sizeClassName]})])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-867b59",functional:undefined}}());var K=[b.WHITE,b.SOFT_GREY,b.GREY],P=Object.values(b).filter(function($){return!K.some(function(e){return e===$})}),k={name:"SAlert",components:{SIcon:d},props:{color:{validator:function($){return null===$||Object.values(P).includes($)},default:"grey-dark"},title:{type:String,default:null},dismissable:{type:Boolean,default:!1}}};if(typeof k==="function"){k=k.options}Object.assign(k,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{class:["s-alert s-alert--"+_vm.color,{"s-alert--dismissable":_vm.dismissable,"s-alert--with-title":_vm.title}]},[_c("span",{staticClass:"s-alert__content"},[_vm.title?_c("span",{staticClass:"s-alert__title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c("span",{staticClass:"s-alert__text"},[_vm._t("default",[_vm._v("This is an alert text!")])],2),_vm.dismissable?_c("span",{staticClass:"s-alert__dismiss",on:{"click":function($event){$event.preventDefault();return _vm.$emit("dismiss",$event)}}},[_c("s-icon",{attrs:{"name":"close"}})],1):_vm._e()])])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var j={name:"SBadge",props:{color:{validator:function(e){return null===e||Object.values(b).includes(e)},default:"grey-light"},size:{validator:function(e){return Object.values(c).includes(e)},default:"default"},disabled:{type:Boolean,default:!1}}};if(typeof j==="function"){j=j.options}Object.assign(j,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("span",{class:["s-badge s-badge--"+_vm.color,{"s-badge--disabled":_vm.disabled},"s-badge--"+_vm.size]},[_vm._t("default",[_vm._v("Badge")])],2)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-29d885",functional:undefined}}());var f={name:"SSpinner",props:{color:{validator:function(t){return null===t||Object.values(b).includes(t)},default:"primary"},size:{validator:function(t){return Object.values(c).includes(t)},default:"default"},speed:{validator:function(t){return null===t||["default","fast","furious"].includes(t)},default:"default"},text:{type:String,default:null}}};if(typeof f==="function"){f=f.options}Object.assign(f,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"s-spinner",class:["s-spinner--"+_vm.color,"s-spinner--"+_vm.size,"s-spinner--"+_vm.speed]},[_vm.text?_c("span",{staticClass:"s-spinner__text"},[_vm._v(_vm._s(_vm.text))]):_vm._e()])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-27d920",functional:undefined}}());var h={name:"SButton",components:{SSpinner:f},props:{color:{validator:function(e){return null===e||Object.values(b).includes(e)},default:"white"},size:{validator:function(e){return Object.values(c).includes(e)},default:"default"},disabled:{type:Boolean,default:!1},icon:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},outline:{type:Boolean,default:!1}}};if(typeof h==="function"){h=h.options}Object.assign(h,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("button",{staticClass:"s-button",class:["s-button--"+_vm.color,"s-button--"+_vm.size,{"s-button--icon":_vm.icon,"s-button--loading":_vm.loading,"s-button--round":_vm.round,"s-button--outline":_vm.outline}],attrs:{"disabled":_vm.disabled},on:{"click":function($event){return _vm.$emit("click",$event)}}},[_vm.loading?_c("div",[_c("s-spinner",{attrs:{"size":"mini","color":_vm.color}})],1):_vm._t("default",[_vm._v("Button")])],2)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-62e2ff",functional:undefined}}());var p={name:"SDot",props:{color:{validator:function(e){return null===e||Object.values(b).includes(e)},default:"grey"},size:{validator:function(e){return Object.values(c).includes(e)},default:"default"},disabled:{type:Boolean,default:!1}}};if(typeof p==="function"){p=p.options}Object.assign(p,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("span",{staticClass:"s-dot",class:["s-dot--"+_vm.color,"s-dot--"+_vm.size,{"s-dot--disabled":_vm.disabled}]})};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-e823b1",functional:undefined}}());var n={name:"SInput",components:{SIcon:d},props:{type:{validator:function(t){return null===t||Object.values(g).includes(t)},default:"text"},name:{type:String,default:"s-input"},value:{type:String,default:""},required:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},optionalMarker:{type:String,default:"(optional)"},hasFeedback:{validator:function(t){return null===t||Object.values(v).includes(t)},default:""},size:{validator:function(t){return null===t||Object.values(c).includes(t)},default:"default"}},data:function(){return{INPUT_FEEDBACKS:v,INPUT_TYPES:g}},computed:{inputType:function(){return this.type===g.SEARCH?g.TEXT:this.type}},methods:{clear:function(t){this.$emit("clear",t),this.$refs.input.focus()}}};if(typeof n==="function"){n=n.options}Object.assign(n,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"s-input",class:["s-input--"+_vm.type,"s-input--"+_vm.size,{"s-input--required":_vm.required,"s-input--with-feedback":_vm.hasFeedback,"s-input--autofocus":_vm.autofocus}]},[_vm.$slots.label?_c("label",{staticClass:"s-input__label",attrs:{"for":_vm.name}},[_c("span",{staticClass:"s-input__label__text"},[_vm._t("label")],2),!_vm.required?_c("span",{staticClass:"s-input__label__optional-marker"},[_vm._t("optionalMarker",[_vm._v("(optional)")])],2):_vm._e()]):_vm._e(),_c("input",_vm._b({ref:"input",staticClass:"s-input__input",class:{"s-input__input--is-missing":_vm.hasFeedback===_vm.INPUT_FEEDBACKS.MISSING,"s-input__input--is-invalid":_vm.hasFeedback===_vm.INPUT_FEEDBACKS.INVALID,"s-input__input--is-success":_vm.hasFeedback===_vm.INPUT_FEEDBACKS.SUCCESS},attrs:{"type":_vm.inputType,"name":_vm.name,"required":_vm.required,"autofocus":_vm.autofocus?"autofocus":null},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit("input",$event.target.value)},"blur":function($event){return _vm.$emit("blur",$event)},"focus":function($event){return _vm.$emit("focus",$event)},"keypress":function($event){return _vm.$emit("keypress",$event)},"keydown":function($event){return _vm.$emit("keydown",$event)},"keyup":function($event){return _vm.$emit("keyup",$event)},"click":function($event){return _vm.$emit("click",$event)},"mouseup":function($event){return _vm.$emit("mouseup",$event)},"mousedown":function($event){return _vm.$emit("mousedown",$event)},"mouseenter":function($event){return _vm.$emit("mouseenter",$event)},"mouseleave":function($event){return _vm.$emit("mouseleave",$event)}}},"input",_vm.$attrs,false)),_vm.type===_vm.INPUT_TYPES.SEARCH?_c("s-icon",{staticClass:"s-input__action-icon",attrs:{"name":"close","color":"black","title":"Clear"},on:{"click":_vm.clear}}):_vm._e(),_vm.hasFeedback===_vm.INPUT_FEEDBACKS.INVALID?_c("s-icon",{staticClass:"s-input__feedback-icon",attrs:{"name":"alert-triangle","color":"orange"}}):_vm._e(),_vm.hasFeedback===_vm.INPUT_FEEDBACKS.MISSING?_c("s-icon",{staticClass:"s-input__feedback-icon",attrs:{"name":"alert-circle","color":"red"}}):_vm._e(),_vm.hasFeedback===_vm.INPUT_FEEDBACKS.SUCCESS?_c("s-icon",{staticClass:"s-input__feedback-icon",attrs:{"name":"checkmark","color":"green"}}):_vm._e(),_vm.hasFeedback&&_vm.$slots.feedback?_c("span",{staticClass:"s-input__feedback",class:"s-input__feedback--is-"+_vm.hasFeedback},[_vm._t("feedback")],2):_vm._e(),_vm.$slots.help?_c("span",{staticClass:"s-input__help"},[_vm._t("help")],2):_vm._e()],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-1657c3",functional:undefined}}());var m={name:"SProgress",props:{color:{validator:function(e){return null===e||Object.values(b).includes(e)},default:"primary"},size:{validator:function(e){return Object.values(c).includes(e)},default:"default"},infinite:{type:Boolean,required:!1},percentage:{type:[Number,String],default:0},hidePercentage:{type:Boolean,default:!1}},computed:{percentageString:function(){if(this.infinite)return"100%";var e=String(this.percentage).replace(/[^0-9]/g,"");return"".concat(e||0,"%")}}};if(typeof m==="function"){m=m.options}Object.assign(m,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"s-progress",class:["s-progress--"+_vm.color,"s-progress--"+_vm.size,{"s-progress--infinite":_vm.infinite}]},[_c("div",{staticClass:"s-progress__bar",style:"width: "+_vm.percentageString,attrs:{"role":"progressbar"}},[!_vm.infinite&&!_vm.hidePercentage?_c("div",{staticClass:"s-progress__bar__percentage"},[_vm._v(_vm._s(_vm.percentageString))]):_vm._e()])])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-b325ac",functional:undefined}}());var M=H.version,s={Alert:k,Badge:j,Button:h,Dot:p,Icon:d,Progress:m,Spinner:f,Input:n},q=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];q.installed||Object.keys(s).forEach(function(r){var $=s[r];e.component($.name,$)})};"undefined"!=typeof window&&window.Vue&&q(window.Vue);var C=B(B({install:q,version:M},s),D);u.default=C,u=C;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=u}else if(typeof define==="function"&&define.amd){define(function(){return u})}})();