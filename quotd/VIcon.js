import{g as y,r as b,a8 as N,j as R,w as $,M as B,a9 as I,aa as P,E as w,p as l,c as i,b as o,R as f,ab as c,ac as S,ad as C,P as D,a1 as V,B as W,l as H,ae as T,D as E,af as O,C as _,s as j}from"./assets/index.js";function F(e){const n=y("useRender");n.render=e}function L(e){const n=b(),s=b();if(N){const t=new ResizeObserver(a=>{e==null||e(a,t),a.length&&(s.value=a[0].contentRect)});R(()=>{t.disconnect()}),$(n,(a,r)=>{r&&(t.unobserve(r),s.value=void 0),a&&t.observe(a)},{flush:"post"})}return{resizeRef:n,contentRect:B(s)}}const Q=I({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,n){let{slots:s}=n;const{defaults:t,reset:a,root:r,scoped:d}=P(e);return w(t,{reset:a,root:r,scoped:d}),()=>{var u;return(u=s.default)==null?void 0:u.call(s)}}}),X=l({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Y(e){return{dimensionStyles:i(()=>({height:o(e.height),maxHeight:o(e.maxHeight),maxWidth:o(e.maxWidth),minHeight:o(e.minHeight),minWidth:o(e.minWidth),width:o(e.width)}))}}const U=l({tag:{type:String,default:"div"}},"tag"),Z=l({border:[Boolean,Number,String]},"border");function p(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f();return{borderClasses:i(()=>{const t=c(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))a.push(`border-${r}`);return a})}}const ee=l({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function te(e){return{elevationClasses:i(()=>{const s=c(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const ne=l({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function se(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f();return{roundedClasses:i(()=>{const t=c(e)?e.value:e.rounded,a=[];if(t===!0||t==="")a.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))a.push(`rounded-${r}`);return a})}}function k(e){return S(()=>{const n=[],s={};return e.value.background&&(C(e.value.background)?s.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(C(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:s}})}function M(e,n){const s=i(()=>({text:c(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=k(s);return{textColorClasses:t,textColorStyles:a}}function ae(e,n){const s=i(()=>({background:c(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:a}=k(s);return{backgroundColorClasses:t,backgroundColorStyles:a}}const q=["x-small","small","default","large","x-large"],A=l({size:{type:[String,Number],default:"default"}},"size");function G(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f();return S(()=>{let s,t;return D(q,e.size)?s=`${n}--size-${e.size}`:e.size&&(t={width:o(e.size),height:o(e.size)}),{sizeClasses:s,sizeStyles:t}})}const J=l({color:String,start:Boolean,end:Boolean,icon:V,...A(),...U({tag:"i"}),...W()},"v-icon"),oe=H({name:"VIcon",props:J(),setup(e,n){let{attrs:s,slots:t}=n,a;t.default&&(a=i(()=>{var g,m;const v=(g=t.default)==null?void 0:g.call(t);if(v)return(m=T(v).filter(h=>h.children&&typeof h.children=="string")[0])==null?void 0:m.children}));const{themeClasses:r}=E(e),{iconData:d}=O(a||e),{sizeClasses:u}=G(e),{textColorClasses:x,textColorStyles:z}=M(_(e,"color"));return F(()=>j(d.value.component,{tag:e.tag,icon:d.value.icon,class:["v-icon","notranslate",r.value,u.value,x.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[u.value?void 0:{fontSize:o(e.size),height:o(e.size),width:o(e.size)},z.value],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},null)),{}}});export{Q as V,Y as a,F as b,U as c,Z as d,ee as e,ne as f,ae as g,p as h,te as i,se as j,oe as k,k as l,X as m,A as n,G as o,M as p,L as u};
