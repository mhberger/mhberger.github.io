import{p as F,i as Y,c as g,r as $,a as O,g as de,o as ve,b as T,d as Te,e as fe,f as Be,h as ze,j as Re,k as Ce,l as A,T as Ae,m as ee,n as te,q as Le,s as r,S as me,t as ge,w as G,u as Pe,v as ke,x as ue,y as Ne,F as Ee,z as He,A as ne,B as ye,C as J,D as pe,E as Oe,G as Me,H as je,I as ae,J as oe,K as j,L as De,M as Fe,N as qe,O as We}from"./assets/index.js";import{u as Ke,m as Ue,a as Ge,b as R,c as se,d as Ze,e as Je,f as Xe,g as Qe,h as Ye,i as et,j as tt,V as Z,k as nt}from"./VIcon.js";const D=Symbol.for("vuetify:layout"),he=Symbol.for("vuetify:layout-item"),ce=1e3,at=F({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ot=F({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function st(){const e=Y(D);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function lt(e){const s=Y(D);if(!s)throw new Error("[Vuetify] Could not find injected layout");const a=e.id??`layout-item-${Te()}`,t=de("useLayoutItem");fe(he,{id:a});const u=$(!1);Be(()=>u.value=!0),ze(()=>u.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:n}=s.register(t,{...e,active:g(()=>u.value?!1:e.active.value),id:a});return Re(()=>s.unregister(a)),{layoutItemStyles:l,layoutRect:s.layoutRect,layoutItemScrimStyles:n}}const it=(e,s,a,t)=>{let u={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...u}}];for(const n of e){const o=s.get(n),f=a.get(n),d=t.get(n);if(!o||!f||!d)continue;const v={...u,[o.value]:parseInt(u[o.value],10)+(d.value?parseInt(f.value,10):0)};l.push({id:n,layer:v}),u=v}return l};function rt(e){const s=Y(D,null),a=g(()=>s?s.rootZIndex.value-100:ce),t=$([]),u=O(new Map),l=O(new Map),n=O(new Map),o=O(new Map),f=O(new Map),{resizeRef:d,contentRect:v}=Ke(),p=g(()=>{const y=new Map,_=e.overlaps??[];for(const i of _.filter(c=>c.includes(":"))){const[c,m]=i.split(":");if(!t.value.includes(c)||!t.value.includes(m))continue;const x=u.get(c),w=u.get(m),N=l.get(c),E=l.get(m);!x||!w||!N||!E||(y.set(m,{position:x.value,amount:parseInt(N.value,10)}),y.set(c,{position:w.value,amount:-parseInt(E.value,10)}))}return y}),h=g(()=>{const y=[...new Set([...n.values()].map(i=>i.value))].sort((i,c)=>i-c),_=[];for(const i of y){const c=t.value.filter(m=>{var x;return((x=n.get(m))==null?void 0:x.value)===i});_.push(...c)}return it(_,u,l,o)}),B=g(()=>!Array.from(f.values()).some(y=>y.value)),I=g(()=>h.value[h.value.length-1].layer),C=g(()=>({"--v-layout-left":T(I.value.left),"--v-layout-right":T(I.value.right),"--v-layout-top":T(I.value.top),"--v-layout-bottom":T(I.value.bottom),...B.value?void 0:{transition:"none"}})),b=g(()=>h.value.slice(1).map((y,_)=>{let{id:i}=y;const{layer:c}=h.value[_],m=l.get(i),x=u.get(i);return{id:i,...c,size:Number(m.value),position:x.value}})),z=y=>b.value.find(_=>_.id===y),L=de("createLayout"),P=$(!1);ve(()=>{P.value=!0}),fe(D,{register:(y,_)=>{let{id:i,order:c,position:m,layoutSize:x,elementSize:w,active:N,disableTransitions:E,absolute:$e}=_;n.set(i,c),u.set(i,m),l.set(i,x),o.set(i,N),E&&f.set(i,E);const le=Ce(he,L==null?void 0:L.vnode).indexOf(y);le>-1?t.value.splice(le,0,i):t.value.push(i);const ie=g(()=>b.value.findIndex(H=>H.id===i)),W=g(()=>a.value+h.value.length*2-ie.value*2),Ie=g(()=>{const H=m.value==="left"||m.value==="right",K=m.value==="right",Ve=m.value==="bottom",re={[m.value]:0,zIndex:W.value,transform:`translate${H?"X":"Y"}(${(N.value?0:-110)*(K||Ve?-1:1)}%)`,position:$e.value||a.value!==ce?"absolute":"fixed",...B.value?void 0:{transition:"none"}};if(!P.value)return re;const V=b.value[ie.value];if(!V)throw new Error(`[Vuetify] Could not find layout item "${i}"`);const U=p.value.get(i);return U&&(V[U.position]+=U.amount),{...re,height:H?`calc(100% - ${V.top}px - ${V.bottom}px)`:w.value?`${w.value}px`:void 0,left:K?void 0:`${V.left}px`,right:K?`${V.right}px`:void 0,top:m.value!=="bottom"?`${V.top}px`:void 0,bottom:m.value!=="top"?`${V.bottom}px`:void 0,width:H?w.value?`${w.value}px`:void 0:`calc(100% - ${V.left}px - ${V.right}px)`}}),we=g(()=>({zIndex:W.value-1}));return{layoutItemStyles:Ie,layoutItemScrimStyles:we,zIndex:W}},unregister:y=>{n.delete(y),u.delete(y),l.delete(y),o.delete(y),f.delete(y),t.value=t.value.filter(_=>_!==y)},mainRect:I,mainStyles:C,getLayoutItem:z,items:b,layoutRect:v,rootZIndex:a});const k=g(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),q=g(()=>({zIndex:a.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:k,layoutStyles:q,getLayoutItem:z,items:b,layoutRect:v,layoutRef:d}}function S(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",a=arguments.length>2?arguments[2]:void 0;return A({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:a},origin:{type:String,default:s}},setup(t,u){let{slots:l}=u;return()=>{const n=t.group?Ae:ee;return te(n,{name:e,mode:t.mode,onBeforeEnter(o){o.style.transformOrigin=t.origin},onLeave(o){if(t.leaveAbsolute){const{offsetTop:f,offsetLeft:d,offsetWidth:v,offsetHeight:p}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${f}px`,o.style.left=`${d}px`,o.style.width=`${v}px`,o.style.height=`${p}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&o!=null&&o._transitionInitialStyles){const{position:f,top:d,left:v,width:p,height:h}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=f||"",o.style.top=d||"",o.style.left=v||"",o.style.width=p||"",o.style.height=h||""}}},l.default)}}})}function _e(e,s){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return A({name:e,props:{mode:{type:String,default:a}},setup(t,u){let{slots:l}=u;return()=>te(ee,{name:e,...s},l.default)}})}function be(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Le(`offset-${a}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[a]:n.style[a]}},onEnter(n){const o=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const f=`${n[t]}px`;n.style[a]="0",n.offsetHeight,n.style.transition=o.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[a]=f})},onAfterEnter:l,onEnterCancelled:l,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[a]:n.style[a]},n.style.overflow="hidden",n.style[a]=`${n[t]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[a]="0")},onAfterLeave:u,onLeaveCancelled:u};function u(n){e&&n._parent&&n._parent.classList.remove(e),l(n)}function l(n){const o=n._initialStyle[a];n.style.overflow=n._initialStyle.overflow,o!=null&&(n.style[a]=o),delete n._initialStyle}}S("fab-transition","center center","out-in");S("dialog-bottom-transition");S("dialog-top-transition");S("fade-transition");S("scale-transition");S("scroll-x-transition");S("scroll-x-reverse-transition");S("scroll-y-transition");S("scroll-y-reverse-transition");S("slide-x-transition");S("slide-x-reverse-transition");S("slide-y-transition");S("slide-y-reverse-transition");const ut=_e("expand-transition",be());_e("expand-x-transition",be("",!0));function ct(e){return{aspectStyles:g(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const dt=A({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Ue()},setup(e,s){let{slots:a}=s;const{aspectStyles:t}=ct(e),{dimensionStyles:u}=Ge(e);return R(()=>{var l;return r("div",{class:"v-responsive",style:u.value},[r("div",{class:"v-responsive__sizer",style:t.value},null),(l=a.additional)==null?void 0:l.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function vt(e,s){if(!me)return;const a=s.modifiers||{},t=s.value,{handler:u,options:l}=typeof t=="object"?t:{handler:t,options:{}},n=new IntersectionObserver(function(){var o;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const v=(o=e._observe)==null?void 0:o[s.instance.$.uid];if(!v)return;const p=f.some(h=>h.isIntersecting);u&&(!a.quiet||v.init)&&(!a.once||p||v.init)&&u(p,f,d),p&&a.once?Se(e,s):v.init=!0},l);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:n},n.observe(e)}function Se(e,s){var a;const t=(a=e._observe)==null?void 0:a[s.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const ft={mounted:vt,unmounted:Se},mt=ft,gt=F({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),M=(e,s)=>{let{slots:a}=s;const{transition:t,...u}=e,{component:l=ee,...n}=typeof t=="object"?t:{};return te(l,ge(typeof t=="string"?{name:t}:n,u),a)},yt=A({name:"VImg",directives:{intersect:mt},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...gt()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:a,slots:t}=s;const u=$(""),l=$(),n=$(e.eager?"loading":"idle"),o=$(),f=$(),d=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=g(()=>d.value.aspect||o.value/f.value||0);G(()=>e.src,()=>{p(n.value!=="idle")}),G(v,(i,c)=>{!i&&c&&l.value&&b(l.value)}),Pe(()=>p());function p(i){if(!(e.eager&&i)&&!(me&&!i&&!e.eager)){if(n.value="loading",d.value.lazySrc){const c=new Image;c.src=d.value.lazySrc,b(c,null)}d.value.src&&ke(()=>{var c,m;if(a("loadstart",((c=l.value)==null?void 0:c.currentSrc)||d.value.src),(m=l.value)!=null&&m.complete){if(l.value.naturalWidth||B(),n.value==="error")return;v.value||b(l.value,null),h()}else v.value||b(l.value),I()})}}function h(){var i;I(),n.value="loaded",a("load",((i=l.value)==null?void 0:i.currentSrc)||d.value.src)}function B(){var i;n.value="error",a("error",((i=l.value)==null?void 0:i.currentSrc)||d.value.src)}function I(){const i=l.value;i&&(u.value=i.currentSrc||i.src)}let C=-1;function b(i){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(C);const{naturalHeight:x,naturalWidth:w}=i;x||w?(o.value=w,f.value=x):!i.complete&&n.value==="loading"&&c!=null?C=window.setTimeout(m,c):(i.currentSrc.endsWith(".svg")||i.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,f.value=1)};m()}const z=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),L=()=>{var i;if(!d.value.src||n.value==="idle")return null;const c=r("img",{class:["v-img__img",z.value],src:d.value.src,srcset:d.value.srcset,alt:"",sizes:e.sizes,ref:l,onLoad:h,onError:B},null),m=(i=t.sources)==null?void 0:i.call(t);return r(M,{transition:e.transition,appear:!0},{default:()=>[ue(m?r("picture",{class:"v-img__picture"},[m,c]):c,[[He,n.value==="loaded"]])]})},P=()=>r(M,{transition:e.transition},{default:()=>[d.value.lazySrc&&n.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",z.value],src:d.value.lazySrc,alt:""},null)]}),k=()=>t.placeholder?r(M,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,q=()=>t.error?r(M,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,y=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,_=$(!1);{const i=G(v,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{_.value=!0})}),i())})}return R(()=>ue(r(dt,{class:["v-img",{"v-img--booting":!_.value}],style:{width:T(e.width==="auto"?o.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>r(Ee,null,[r(L,null,null),r(P,null,null),r(y,null,null),r(k,null,null),r(q,null,null)]),default:t.default}),[[Ne("intersect"),{handler:p,options:e.options},null,{once:!0}]])),{currentSrc:u,image:l,state:n,naturalWidth:o,naturalHeight:f}}}),X=ne()({name:"VToolbarTitle",props:{text:String,...se()},setup(e,s){let{slots:a}=s;return R(()=>{var t;const u=!!(a.default||a.text||e.text);return r(e.tag,{class:"v-toolbar-title"},{default:()=>[u&&r("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]})}),{}}}),pt=[null,"prominent","default","comfortable","compact"],xe=F({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>pt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ze(),...Je(),...Xe(),...se({tag:"header"}),...ye()},"v-toolbar"),Q=ne()({name:"VToolbar",props:xe(),setup(e,s){var a;let{slots:t}=s;const{backgroundColorClasses:u,backgroundColorStyles:l}=Qe(J(e,"color")),{borderClasses:n}=Ye(e),{elevationClasses:o}=et(e),{roundedClasses:f}=tt(e),{themeClasses:d}=pe(e),v=$(!!(e.extended||(a=t.extension)!=null&&a.call(t))),p=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=g(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Oe({VBtn:{variant:"text"}}),R(()=>{var B,I,C,b,z;const L=!!(e.title||t.title),P=!!(t.image||e.image),k=(B=t.extension)==null?void 0:B.call(t);return v.value=!!(e.extended||k),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,n.value,o.value,f.value,d.value],style:[l.value]},{default:()=>[P&&r("div",{key:"image",class:"v-toolbar__image"},[r(Z,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(I=t.image)==null?void 0:I.call(t):r(yt,null,null)]})]),r(Z,{defaults:{VTabs:{height:T(p.value)}}},{default:()=>[r("div",{class:"v-toolbar__content",style:{height:T(p.value)}},[t.prepend&&r("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),L&&r(X,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&r("div",{class:"v-toolbar__append"},[(z=t.append)==null?void 0:z.call(t)])])]}),r(Z,{defaults:{VTabs:{height:T(h.value)}}},{default:()=>[r(ut,null,{default:()=>[v.value&&r("div",{class:"v-toolbar__extension",style:{height:T(h.value)}},[k])]})]})]})}),{contentHeight:p,extensionHeight:h}}});function ht(e){return Me(e,Object.keys((Q==null?void 0:Q.props)??{}))}const _t=ne()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...xe(),...ot(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:a}=s;const t=$(),u=je(e,"modelValue"),l=g(()=>{var o,f;const d=((o=t.value)==null?void 0:o.contentHeight)??0,v=((f=t.value)==null?void 0:f.extensionHeight)??0;return d+v}),{layoutItemStyles:n}=lt({id:e.name,order:g(()=>parseInt(e.order,10)),position:J(e,"location"),layoutSize:l,elementSize:l,active:u,absolute:J(e,"absolute")});return R(()=>{const[o]=ht(e);return r(Q,ge({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...n.value,height:void 0}},o),a)}),{}}}),bt=A({name:"VAppBarTitle",props:{...X.props},setup(e,s){let{slots:a}=s;return R(()=>r(X,{class:"v-app-bar-title"},a)),{}}}),St={__name:"AppBar",setup(e){return(s,a)=>(ae(),oe(_t,{elevation:"1"},{default:j(()=>[r(bt,null,{default:j(()=>[r(nt,{icon:"mdi-dialpad",color:"amber-darken-1"}),De(" Random Quotes… ")]),_:1})]),_:1}))}};function xt(){const e=$(!1);return ve(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:g(()=>e.value?void 0:{transition:"none !important"}),isBooted:Fe(e)}}const $t=A({name:"VMain",props:{scrollable:Boolean,...se({tag:"main"})},setup(e,s){let{slots:a}=s;const{mainStyles:t}=st(),{ssrBootStyles:u}=xt();return R(()=>{var l,n;return r(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,u.value]},{default:()=>[e.scrollable?r("div",{class:"v-main__scroller"},[(l=a.default)==null?void 0:l.call(a)]):(n=a.default)==null?void 0:n.call(a)]})}),{}}}),It={__name:"View",setup(e){return(s,a)=>{const t=qe("router-view");return ae(),oe($t,null,{default:j(()=>[r(t)]),_:1})}}};const wt=A({name:"VApp",props:{...at({fullHeight:!0}),...ye()},setup(e,s){let{slots:a}=s;const t=pe(e),{layoutClasses:u,layoutStyles:l,getLayoutItem:n,items:o,layoutRef:f}=rt(e),{rtlClasses:d}=We();return R(()=>{var v;return r("div",{ref:f,class:["v-application",t.themeClasses.value,u.value,d.value],style:l.value},[r("div",{class:"v-application__wrap"},[(v=a.default)==null?void 0:v.call(a)])])}),{getLayoutItem:n,items:o,theme:t}}}),zt={__name:"Default",setup(e){return(s,a)=>(ae(),oe(wt,null,{default:j(()=>[r(St),r(It)]),_:1}))}};export{zt as default};
