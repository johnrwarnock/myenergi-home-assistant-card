/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$3),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$3)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t=>t,s$2=t.trustedTypes,e=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),w=x(2),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$1=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s$1.litElementHydrateSupport?.({LitElement:i});const o$1=s$1.litElementPolyfillSupport;o$1?.({LitElement:i});(s$1.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

const COLORS = {
    card: "#303030",
    stroke: "#3a3a3a",
    grid: "#FF4400",
    solar: "#55FF00",
    zappi: "#0086FF",
    eddi: "#00E6C0",
    home: "#F91CDF",
    battery: "#FF9234",
    leafGreen: "#84ff00",
    muted: "#cecdcd",
    dim: "#6b6b6b",
    spokeTrack: "rgba(255,255,255,0.12)",
};
const HUB_R = 40;
const NODE_R = 34;
const NODE_ICON_SIZE = NODE_R * 2 * 0.65;
const ORBIT_R = 140;
/** Card SVG viewBox dimensions */
const SVG_W = 380;
const SVG_H = 440;
const CENTRE_X = SVG_W / 2;
const CENTRE_Y = 218;
/** Clockwise node order from 12 o'clock. */
const SLOT_ORDER = ["home", "solar", "battery", "eddi", "zappi", "grid"];

const cardStyles = i$3 `
  @font-face {
    font-family: "Overpass";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/overpass/v19/qFda35WCmI96Ajtm83upeyoaX6QPnlo6_PLrOQ.ttf") format("truetype");
  }

  @font-face {
    font-family: "Overpass";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/overpass/v19/qFda35WCmI96Ajtm83upeyoaX6QPnlo6_PPrOQ.ttf") format("truetype");
  }

  :host {
    display: block;
  }

  ha-card {
    background: var(--myenergi-flow-bg, #1a1a1a);
    padding: 12px 8px 8px;
    color: #ffffff;
    font-family: "Overpass", sans-serif;
    font-weight: 100;
    user-select: none;
  }

  .card-header {
    font-size: 18.4px;
    font-weight: 100;
    padding: 0 8px 4px;
    color: var(--primary-text-color, #fff);
  }

  .card-svg {
    display: block;
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
    height: auto;
    overflow: visible;
  }

  .node-icon {
    --mdc-icon-size: ${NODE_ICON_SIZE}px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${NODE_ICON_SIZE}px;
    height: ${NODE_ICON_SIZE}px;
    color: #ffffff;
  }

  .node-icon.idle {
    color: #8a8a8a;
  }

  @keyframes chev {
    from { stroke-dashoffset: 0; }
    to   { stroke-dashoffset: -36; }
  }

  @media (prefers-reduced-motion: reduce) {
    line { animation: none !important; }
  }
`;

/**
 * Places nodes evenly on a circle, first at 12 o'clock, clockwise.
 * Slots are fixed by the id list so a hidden node leaves a gap rather
 * than making everything jump around.
 */
function radialPositions(ids, orbitR = ORBIT_R, cx = CENTRE_X, cy = CENTRE_Y) {
    const n = ids.length;
    return ids.map((id, i) => {
        const angleDeg = (360 / n) * i;
        const angleRad = ((angleDeg - 90) * Math.PI) / 180;
        return {
            id,
            cx: cx + orbitR * Math.cos(angleRad),
            cy: cy + orbitR * Math.sin(angleRad),
            angleDeg,
        };
    });
}

/** Seconds per chevron cycle — faster for bigger flows. */
function chevDuration(powerW, speed) {
    if (speed === "off")
        return 0;
    if (speed === "fast")
        return 0.8;
    if (speed === "slow")
        return 3;
    const abs = Math.abs(powerW);
    if (abs <= 0)
        return 0;
    return Math.max(0.6, Math.min(3, 7500 / abs));
}
function spokeWidth(powerW) {
    return Math.min(8, 2 + Math.sqrt(Math.max(0, powerW) / 1000) * 2);
}
function renderSpokes(spokes, positions, animSpeed = "auto") {
    const posMap = new Map(positions.map((p) => [p.id, p]));
    return spokes.map((spoke) => {
        const node = posMap.get(spoke.node);
        if (!node)
            return w ``;
        const dx = node.cx - CENTRE_X;
        const dy = node.cy - CENTRE_Y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ux = dx / dist;
        const uy = dy / dist;
        // hub edge → node edge
        const hx = CENTRE_X + ux * HUB_R;
        const hy = CENTRE_Y + uy * HUB_R;
        const nx = node.cx - ux * NODE_R;
        const ny = node.cy - uy * NODE_R;
        // Draw the animated line in the direction of flow
        const [x1, y1, x2, y2] = spoke.direction === "in" ? [nx, ny, hx, hy] : [hx, hy, nx, ny];
        const dur = chevDuration(spoke.powerW, animSpeed);
        const isActive = spoke.direction !== "idle" && dur > 0;
        const width = spokeWidth(spoke.powerW);
        return w `
      <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
        stroke="${COLORS.spokeTrack}" stroke-width="2" stroke-linecap="round"/>
      ${isActive
            ? w `
              <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
                stroke="${spoke.chevronColor}" stroke-width="${width}" stroke-linecap="round" opacity="0.45"/>
              ${[0, 1, 2].map((index) => w `
                  <g>
                    <animateMotion
                      dur="${dur}s"
                      begin="${(-dur * index) / 3}s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="M ${x1} ${y1} L ${x2} ${y2}"/>
                    <path d="M -5 -5 L 0 0 L -5 5"
                      fill="none"
                      stroke="${spoke.chevronColor}"
                      stroke-width="${Math.max(1.5, width * 0.42)}"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
                  </g>
                `)}
            `
            : ""}
    `;
    });
}

const icon = (paths) => w `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75"
    stroke-linecap="round" stroke-linejoin="round" width="${NODE_ICON_SIZE}" height="${NODE_ICON_SIZE}">${paths}</svg>`;
const homeIcon = (mood = "neutral") => icon(w `
    <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
    ${mood === "smile"
    ? w `<circle cx="9" cy="11" r=".55" fill="currentColor"/><circle cx="15" cy="11" r=".55" fill="currentColor"/><path d="M9 15q3 3 6 0"/>`
    : mood === "frown"
        ? w `<circle cx="9" cy="11" r=".55" fill="currentColor"/><circle cx="15" cy="11" r=".55" fill="currentColor"/><path d="M9 16q3-3 6 0"/>`
        : w `<path d="M9 11v.1m6-.1v.1M9 15h6"/>`}
  `);
const gridIcon = () => icon(w `
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3"/>
  `);
const solarIcon = () => icon(w `
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>
  `);
const libbiIcon = (socPct = null) => {
    const filledBars = socPct === null ? 0 : Math.floor(Math.max(0, Math.min(100, socPct)) / 10);
    return icon(w `
    <g transform="rotate(90 12 12)">
      <rect x="6" y="4" width="12" height="18" rx="2"/>
      <path d="M10 2h4"/>
      ${Array.from({ length: 10 }, (_, i) => w `<path d="M8 ${6.5 + (9 - i) * 1.45}h8"
          stroke-width="0.4"
          opacity="${i < filledBars ? 1 : 0.25}"/>`)}
    </g>
  `);
};
const zappiIcon = () => icon(w `
    <path d="M2 12V8a4 4 0 0 1 4-4h5"/>
    <path d="M11 2h3a2 2 0 0 1 2 2v3h-5zM16 3h3m-3 3h3"/>
    <path d="M3 17v-4l2-5a2 2 0 0 1 2-1h7l4 5 3 1v4H3z"/>
    <circle cx="7" cy="17" r="1.5"/>
    <circle cx="17" cy="17" r="1.5"/>
  `);
const eddiIcon = () => icon(w `
    <path d="M21 22V6a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v3"/>
    <path d="M3 11q1-3 4-3h5q3 0 4 3l1 2H2z"/>
    <path d="M4 16v2m4-2v2m4-2v2m4-2v2"/>
  `);
const leafIcon = () => w `<svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#84ff00" d="M2 1c8 0 15 3 18 9 3 6-1 12-7 13C7 24 2 18 2 11 2 7 2 3 2 1z"/>
    <path d="M4 3 20 21M8 8l-4 1m8 3-5 1m9-1 2-4m-5 9 3-1"
      fill="none" stroke="#1a1a1a" stroke-width="0.65" stroke-linecap="round"/>
  </svg>`;
const M2_DEFAULT_ICONS = {
    home: "mdi:home",
    grid: "mdi:transmission-tower",
    solar: "mdi:solar-panel",
    battery: "mdi:home-battery",
    zappi: "mdi:ev-station",
    eddi: "mdi:water-boiler",
};
const m2NodeIcon = (id, socPct = null, houseMood = "neutral") => {
    switch (id) {
        case "home":
            return homeIcon(houseMood);
        case "grid":
            return gridIcon();
        case "solar":
            return solarIcon();
        case "battery":
            return libbiIcon(socPct);
        case "zappi":
            return zappiIcon();
        case "eddi":
            return eddiIcon();
    }
};

/** Read a power entity in W, converting kW/MW. Returns null if missing/unavailable. */
function readPowerW(hass, entityId) {
    if (!entityId)
        return null;
    const st = hass.states[entityId];
    if (!st)
        return null;
    const v = parseFloat(st.state);
    if (!Number.isFinite(v))
        return null;
    const unit = String(st.attributes.unit_of_measurement ?? "W").toLowerCase();
    if (unit === "kw")
        return v * 1000;
    if (unit === "mw")
        return v * 1000000;
    return v;
}
function readNumber(hass, entityId) {
    if (!entityId)
        return null;
    const v = parseFloat(hass.states[entityId]?.state ?? "");
    return Number.isFinite(v) ? v : null;
}
function readText(hass, entityId) {
    if (!entityId)
        return undefined;
    const s = hass.states[entityId]?.state;
    if (!s || s === "unavailable" || s === "unknown")
        return undefined;
    return s;
}
function hasStatus(status, pattern) {
    return !!status && pattern.test(status);
}
function buildState(hass, cfg) {
    const thr = cfg.display?.idle_threshold_w ?? 30;
    const pos = (w) => Math.max(0, w ?? 0);
    // ---- raw readings -------------------------------------------------------
    const solarW = pos(readPowerW(hass, cfg.solar?.power_entity));
    const gridW = readPowerW(hass, cfg.grid?.power_entity) ?? 0;
    const gridImportW = pos(gridW);
    const gridExportW = pos(-gridW);
    let battW = readPowerW(hass, cfg.battery?.power_entity) ?? 0;
    if (cfg.battery?.invert)
        battW = -battW;
    const battDischargeW = pos(battW);
    const battChargeW = pos(-battW);
    const soc = readNumber(hass, cfg.battery?.soc_entity);
    const homeW = pos(readPowerW(hass, cfg.home?.power_entity));
    const zappiW = pos(readPowerW(hass, cfg.zappi?.power_entity));
    const eddiW = pos(readPowerW(hass, cfg.eddi?.power_entity));
    // ---- what's feeding the hub, and who's winning ------------------------
    const inbound = solarW + gridImportW + battDischargeW;
    const generationW = solarW + battDischargeW;
    let mixColour = COLORS.solar;
    if (inbound > thr) {
        if (solarW >= inbound / 2)
            mixColour = COLORS.solar;
        else if (gridImportW >= battDischargeW)
            mixColour = COLORS.grid;
        else
            mixColour = COLORS.battery;
    }
    // Self-consumption: entity if given, else share of inbound supplied by solar
    let selfPct = readNumber(hass, cfg.hub?.self_consumption_entity);
    if (selfPct === null && cfg.solar?.power_entity) {
        selfPct = inbound > thr ? Math.round((solarW / inbound) * 100) : null;
    }
    if (selfPct !== null)
        selfPct = Math.max(0, Math.min(100, Math.round(selfPct)));
    // ---- nodes --------------------------------------------------------------
    const nodes = [];
    const spokes = [];
    const idleIn = (w) => (w > thr ? "in" : "idle");
    const idleOut = (w) => (w > thr ? "out" : "idle");
    const add = (n, s) => {
        nodes.push(n);
        spokes.push(s);
    };
    if (cfg.solar?.power_entity) {
        const today = readNumber(hass, cfg.solar.daily_entity);
        add({
            id: "solar",
            label: cfg.solar.name ?? "solar",
            icon: cfg.solar.icon ?? "mdi:solar-panel",
            color: COLORS.solar,
            powerW: solarW,
            subLabel: today !== null ? `${today.toFixed(1)} kWh today` : undefined,
            active: solarW > thr,
        }, { node: "solar", powerW: solarW, direction: idleIn(solarW), chevronColor: COLORS.solar });
    }
    if (cfg.home?.power_entity) {
        add({
            id: "home",
            label: cfg.home.name ?? "home",
            icon: cfg.home.icon ?? "mdi:home",
            color: COLORS.home,
            powerW: homeW,
            houseMood: soc !== null && soc < 40
                ? "frown"
                : generationW > 0 && generationW >= homeW
                    ? "smile"
                    : "neutral",
            active: homeW > thr,
        }, { node: "home", powerW: homeW, direction: idleOut(homeW), chevronColor: mixColour });
    }
    if (cfg.eddi?.power_entity) {
        const eddiStatus = readText(hass, cfg.eddi.status_entity);
        const eddiAtMaxTemp = hasStatus(eddiStatus, /\bmax(?:imum)?\s+temp(?:erature)?\s+reached\b/i);
        const eddiDiverting = !eddiStatus || /\bdivert(?:ing)?\b/i.test(eddiStatus);
        const eddiActive = eddiW > thr && eddiDiverting && !eddiAtMaxTemp;
        add({
            id: "eddi",
            label: cfg.eddi.name ?? "eddi",
            icon: cfg.eddi.icon ?? "mdi:water-boiler",
            color: COLORS.eddi,
            powerW: eddiW,
            subLabel: eddiStatus,
            active: eddiActive,
            complete: eddiAtMaxTemp,
        }, {
            node: "eddi",
            powerW: eddiW,
            direction: eddiActive ? idleOut(eddiW) : "idle",
            chevronColor: mixColour,
        });
    }
    if (cfg.zappi?.power_entity) {
        const zappiStatus = readText(hass, cfg.zappi.status_entity);
        add({
            id: "zappi",
            label: cfg.zappi.name ?? "zappi",
            icon: cfg.zappi.icon ?? "mdi:ev-station",
            color: COLORS.zappi,
            powerW: zappiW,
            subLabel: readText(hass, cfg.zappi.mode_entity),
            active: zappiW > thr,
            complete: hasStatus(zappiStatus, /^(?:fully\s+charged|charge\s+complete(?:d)?|charged)$/i),
        }, { node: "zappi", powerW: zappiW, direction: idleOut(zappiW), chevronColor: mixColour });
    }
    if (cfg.battery?.power_entity) {
        const action = battChargeW > thr ? "charging" : battDischargeW > thr ? "discharging" : "resting";
        const sub = soc !== null ? `${Math.round(soc)}% · ${action}` : action;
        const charging = battChargeW > thr;
        add({
            id: "battery",
            label: cfg.battery.name ?? "battery",
            icon: cfg.battery.icon ?? "mdi:home-battery",
            color: COLORS.battery,
            powerW: charging ? battChargeW : battDischargeW,
            subLabel: sub,
            socPct: soc === null ? null : Math.max(0, Math.min(100, soc)),
            active: battChargeW > thr || battDischargeW > thr,
        }, {
            node: "battery",
            powerW: Math.abs(battW),
            direction: charging ? "out" : idleIn(battDischargeW),
            chevronColor: charging ? mixColour : COLORS.battery,
        });
    }
    if (cfg.grid?.power_entity) {
        const active = gridImportW > thr || gridExportW > thr;
        const exporting = gridExportW > thr;
        add({
            id: "grid",
            label: cfg.grid.name ?? "grid",
            icon: cfg.grid.icon ?? "mdi:transmission-tower",
            color: COLORS.grid,
            powerW: exporting ? gridExportW : gridImportW,
            subLabel: exporting ? "exporting" : active ? "importing" : undefined,
            active,
            hidden: !!cfg.grid.hide_when_idle && !active,
        }, {
            node: "grid",
            powerW: Math.abs(gridW),
            direction: exporting ? "out" : idleIn(gridImportW),
            chevronColor: exporting ? mixColour : COLORS.grid,
        });
    }
    // hidden nodes keep their slot but lose their spoke
    const hiddenIds = new Set(nodes.filter((n) => n.hidden).map((n) => n.id));
    return {
        nodes,
        spokes: spokes.filter((s) => !hiddenIds.has(s.node)),
        selfConsumptionPct: selfPct,
    };
}

/** Fake hass + config used by preview.html and the card picker preview. */
const DUMMY_CONFIG = {
    type: "custom:myenergi-flow-card",
    hub: { self_consumption_entity: "sensor.demo_self" },
    solar: { power_entity: "sensor.demo_solar", daily_entity: "sensor.demo_solar_today" },
    home: { power_entity: "sensor.demo_home" },
    eddi: { power_entity: "sensor.demo_eddi", status_entity: "sensor.demo_eddi_status" },
    zappi: { power_entity: "sensor.demo_zappi", mode_entity: "sensor.demo_zappi_mode" },
    battery: { power_entity: "sensor.demo_batt", soc_entity: "sensor.demo_soc" },
    grid: { power_entity: "sensor.demo_grid" },
};
const s = (state, unit) => ({
    state,
    attributes: unit ? { unit_of_measurement: unit } : {},
});
const DUMMY_HASS = {
    states: {
        "sensor.demo_self": s("87", "%"),
        "sensor.demo_solar": s("4100", "W"),
        "sensor.demo_solar_today": s("14.6", "kWh"),
        "sensor.demo_home": s("650", "W"),
        "sensor.demo_eddi": s("0", "W"),
        "sensor.demo_eddi_status": s("Max temp reached"),
        "sensor.demo_zappi": s("2.3", "kW"),
        "sensor.demo_zappi_mode": s("Eco+"),
        "sensor.demo_batt": s("-1100", "W"),
        "sensor.demo_soc": s("62", "%"),
        "sensor.demo_grid": s("0", "W"),
    },
};

function formatPower(w) {
    const abs = Math.abs(w);
    return `${(abs / 1000).toFixed(1)} kW`;
}
class MyenergiFlowCard extends i {
    constructor() {
        super(...arguments);
        this.hass = null;
        this._config = null;
    }
    setConfig(config) {
        if (!config)
            throw new Error("Invalid configuration");
        this._config = config;
    }
    static getStubConfig() {
        return { ...DUMMY_CONFIG };
    }
    getCardSize() {
        return 6;
    }
    getGridOptions() {
        return { columns: 12, rows: "auto", min_columns: 6 };
    }
    /** Only re-render when an entity we care about changes. */
    shouldUpdate(changed) {
        if (changed.has("_config") || !this._config)
            return true;
        const oldHass = changed.get("hass");
        if (!oldHass || !this.hass)
            return true;
        return this._entityIds().some((id) => oldHass.states[id] !== this.hass.states[id]);
    }
    _entityIds() {
        const c = this._config ?? {};
        return [
            c.hub?.self_consumption_entity,
            c.solar?.power_entity, c.solar?.daily_entity,
            c.home?.power_entity,
            c.battery?.power_entity, c.battery?.soc_entity,
            c.grid?.power_entity,
            c.zappi?.power_entity, c.zappi?.mode_entity, c.zappi?.status_entity,
            c.eddi?.power_entity, c.eddi?.status_entity,
        ].filter((x) => !!x);
    }
    _renderNode(node, pos) {
        if (node.hidden)
            return A;
        const stroke = node.active ? node.color : COLORS.dim;
        const valueColour = node.active ? node.color : COLORS.muted;
        const useM2Icon = node.icon === M2_DEFAULT_ICONS[node.id];
        const powerY = node.id === "home"
            ? pos.cy - NODE_R - 12
            : pos.cy + NODE_R + 18;
        const iconYOffset = node.id === "home" ? -3 : 0;
        return w `
      <circle cx="${pos.cx}" cy="${pos.cy}" r="${NODE_R}"
        fill="url(#node-grad-${node.id})" stroke="${stroke}" stroke-width="2.5"/>
      <defs>
        <radialGradient id="node-grad-${node.id}" cx="50%" cy="65%" r="70%">
          <stop offset="0%" stop-color="${stroke}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="${COLORS.card}" stop-opacity="0.96"/>
        </radialGradient>
      </defs>
      ${useM2Icon
            ? w `
              <foreignObject x="${pos.cx - NODE_ICON_SIZE / 2}" y="${pos.cy - NODE_ICON_SIZE / 2 + iconYOffset}"
                width="${NODE_ICON_SIZE}" height="${NODE_ICON_SIZE}">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-icon">
                  ${m2NodeIcon(node.id, node.socPct ?? null, node.houseMood ?? "neutral")}
                </div>
              </foreignObject>
            `
            : w `
              <foreignObject x="${pos.cx - NODE_ICON_SIZE / 2}" y="${pos.cy - NODE_ICON_SIZE / 2 + iconYOffset}"
                width="${NODE_ICON_SIZE}" height="${NODE_ICON_SIZE}">
                <div xmlns="http://www.w3.org/1999/xhtml" class="node-icon ${node.active ? "" : "idle"}">
                  <ha-icon icon="${node.icon}"></ha-icon>
                </div>
              </foreignObject>
            `}
      <text x="${pos.cx}" y="${powerY}" text-anchor="middle"
        font-size="14.95" font-weight="400" fill="${valueColour}">${formatPower(node.powerW)}</text>
      ${node.complete
            ? w `
              <circle cx="${pos.cx + NODE_R * 0.72}" cy="${pos.cy - NODE_R * 0.72}" r="10"
                fill="${COLORS.card}" stroke="${node.color}" stroke-width="2"/>
              <path d="M ${pos.cx + NODE_R * 0.72 - 4} ${pos.cy - NODE_R * 0.72}
                l 3 3 5 -6"
                fill="none" stroke="#ffffff" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
            `
            : A}
    `;
    }
    _renderHub(selfPct) {
        return w `
      <defs>
        <radialGradient id="hub-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3a3a3a"/>
          <stop offset="100%" stop-color="#1f1f1f"/>
        </radialGradient>
      </defs>
      <circle cx="${CENTRE_X}" cy="${CENTRE_Y}" r="${HUB_R}"
        fill="url(#hub-grad)" stroke="${COLORS.stroke}" stroke-width="2"/>
      <foreignObject x="${CENTRE_X - 10}" y="${CENTRE_Y - 22}" width="20" height="20">
        <div xmlns="http://www.w3.org/1999/xhtml"
          style="display:flex;align-items:center;justify-content:center;width:20px;height:20px;">
          ${leafIcon()}
        </div>
      </foreignObject>
      <text x="${CENTRE_X}" y="${CENTRE_Y + 15}" text-anchor="middle"
        font-size="17.25" font-weight="100" fill="${COLORS.leafGreen}">${selfPct === null ? "–" : `${selfPct}%`}</text>
    `;
    }
    render() {
        if (!this._config)
            return A;
        const hass = this.hass ?? DUMMY_HASS;
        const cs = buildState(hass, this.hass ? this._config : DUMMY_CONFIG);
        const positions = radialPositions(SLOT_ORDER.filter((id) => cs.nodes.some((n) => n.id === id)));
        const anim = this._config.display?.flow_animation_speed ?? "auto";
        return b `
      <ha-card>
        ${this._config.title ? b `<div class="card-header">${this._config.title}</div>` : A}
        <svg class="card-svg" viewBox="0 0 ${SVG_W} ${SVG_H}" xmlns="http://www.w3.org/2000/svg"
          font-family="Overpass, sans-serif" font-weight="100" role="img" aria-label="Energy flow">
          ${renderSpokes(cs.spokes, positions, anim)}
          ${cs.nodes.map((n) => this._renderNode(n, positions.find((p) => p.id === n.id)))}
          ${this._renderHub(cs.selfConsumptionPct)}
        </svg>
      </ha-card>
    `;
    }
}
MyenergiFlowCard.styles = cardStyles;
__decorate([
    n({ attribute: false })
], MyenergiFlowCard.prototype, "hass", void 0);
__decorate([
    r()
], MyenergiFlowCard.prototype, "_config", void 0);
if (!customElements.get("myenergi-flow-card")) {
    customElements.define("myenergi-flow-card", MyenergiFlowCard);
    window.customCards = window.customCards || [];
    window.customCards.push({
        type: "myenergi-flow-card",
        name: "myenergi Flow Card",
        description: "Radial energy flow card styled after the myenergi app.",
        preview: true,
    });
}
//# sourceMappingURL=myenergi-flow-card.js.map
