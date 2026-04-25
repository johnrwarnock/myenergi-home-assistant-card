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
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

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
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),w=x(2),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

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

const cardStyles = i$3 `
  @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,400;0,700;0,800;1,800&display=swap');

  :host {
    display: block;
    font-family: 'Overpass', sans-serif;
  }

  .card-root {
    background: #1a1a1a;
    border-radius: 16px;
    padding: 16px;
    color: #ffffff;
    font-family: 'Overpass', sans-serif;
    user-select: none;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 0 2px;
  }

  .card-title {
    font-size: 13px;
    font-weight: 800;
    font-style: italic;
    letter-spacing: 0.4px;
    text-transform: lowercase;
    color: #ffffff;
  }

  .hamburger {
    font-size: 18px;
    color: #cecdcd;
    cursor: pointer;
    line-height: 1;
  }

  .card-svg {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 4px;
    gap: 6px;
    opacity: 0.7;
  }

  .footer-text {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #40ff7a;
    text-transform: lowercase;
  }

  /* node labels rendered as foreignObject or SVG text */
  .node-power {
    font-family: 'Overpass', sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 13px;
    fill: currentColor;
  }

  .node-label {
    font-family: 'Overpass', sans-serif;
    font-weight: 700;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    fill: #cecdcd;
  }

  .self-pct {
    font-family: 'Overpass', sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 13px;
    fill: #84ff00;
  }

  @keyframes chev {
    from { stroke-dashoffset: 0; }
    to   { stroke-dashoffset: -36; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }
`;

const COLORS = {
    card: "#303030",
    stroke: "#2D2D2D",
    grid: "#FF4400",
    solar: "#55FF00",
    zappi: "#0086FF",
    libbi: "#F91CDF",
    leafGreen: "#84ff00",
    text: "#ffffff",
    muted: "#cecdcd",
    spokeTrack: "rgba(255,255,255,0.15)",
    chevGreen: "#55ff00",
    chevRed: "#FF3B30",
    chevYellow: "#FFD400",
};
const CENTRE_R = 41;
const NODE_R = 31;
const ORBIT_R = 150;
/** Card SVG viewBox dimensions */
const SVG_W = 374;
const SVG_H = 420;
const CENTRE_X = SVG_W / 2;
const CENTRE_Y = SVG_H / 2 + 10;

/**
 * Places N peripheral nodes evenly on a circle, first node at 0° (12 o'clock),
 * subsequent nodes clockwise. Returns pixel coordinates for each node.
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

/** Duration in seconds for chevron animation at a given |powerW| */
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
    return Math.max(0.8, Math.min(3, 3000 / abs));
}
function renderSpokes(spokes, positions, animSpeed = "auto") {
    const posMap = new Map(positions.map((p) => [p.id, p]));
    return spokes.map((spoke) => {
        const from = spoke.from === "home"
            ? { cx: CENTRE_X, cy: CENTRE_Y }
            : posMap.get(spoke.from);
        const to = spoke.to === "home"
            ? { cx: CENTRE_X, cy: CENTRE_Y }
            : posMap.get(spoke.to);
        if (!from || !to)
            return w ``;
        const dx = to.cx - from.cx;
        const dy = to.cy - from.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ux = dx / dist;
        const uy = dy / dist;
        const fromR = spoke.from === "home" ? CENTRE_R : NODE_R;
        const toR = spoke.to === "home" ? CENTRE_R : NODE_R;
        const x1 = from.cx + ux * fromR;
        const y1 = from.cy + uy * fromR;
        const x2 = to.cx - ux * toR;
        const y2 = to.cy - uy * toR;
        const dur = chevDuration(spoke.powerW, animSpeed);
        const isReverse = spoke.direction === "reverse";
        const isIdle = spoke.direction === "idle" || dur === 0;
        return w `
      <!-- spoke track -->
      <line
        x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
        stroke="${COLORS.spokeTrack}" stroke-width="3"
      />
      ${!isIdle
            ? w `
        <!-- animated chevron -->
        <line
          x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
          stroke="${spoke.chevronColor}"
          stroke-width="3"
          stroke-dasharray="6 30"
          style="animation: chev ${dur}s linear infinite ${isReverse ? "reverse" : "normal"};"
        />`
            : ""}
    `;
    });
}

const icon = (path) => w `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">${path}</svg>`;
const homeIcon = () => icon(`<path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
     <path d="M9 22V12h6v10"/>`);
const gridIcon = () => icon(`<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
     <circle cx="12" cy="12" r="3"/>`);
const solarIcon = () => icon(`<rect x="2" y="6" width="9" height="6" rx="1"/>
     <rect x="13" y="6" width="9" height="6" rx="1"/>
     <rect x="2" y="14" width="9" height="6" rx="1"/>
     <rect x="13" y="14" width="9" height="6" rx="1"/>
     <path d="M12 3v2M12 19v2M3 12H1M23 12h-2"/>`);
const libbiIcon = () => icon(`<rect x="6" y="4" width="12" height="18" rx="2"/>
     <path d="M10 2h4M9 9h6M9 13h6M9 17h4"/>`);
const zappiIcon = () => icon(`<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h11l5 5v5a2 2 0 0 1-2 2h-2"/>
     <circle cx="7" cy="17" r="2"/>
     <circle cx="17" cy="17" r="2"/>
     <path d="M13 6v4l3 2"/>`);
const eddiIcon = () => icon(`<path d="M12 2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/>
     <path d="M12 13v4M8 22h8M10 22v-2h4v2"/>`);
const leafIcon = () => w `<svg viewBox="0 0 24 24" width="20" height="20" fill="#84ff00">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 3-11 4l-1-3.5C12 2 17 2 17 8z"/>
  </svg>`;

/** Static dummy data used during M2 scaffold — replaced by real HA entities in M3. */
const DUMMY_STATE = {
    title: "The Poplars",
    selfConsumptionPct: 87,
    nodes: [
        { id: "home", label: "home", color: "#F91CDF", powerW: 3200, subLabel: "consuming", active: true },
        { id: "grid", label: "grid", color: COLORS.grid, powerW: 800, subLabel: "importing", active: true },
        { id: "solar", label: "solar", color: COLORS.solar, powerW: 4100, subLabel: "14.6 kWh today", active: true },
        { id: "libbi", label: "libbi", color: COLORS.libbi, powerW: 1100, subLabel: "charging · 62%", active: true },
        { id: "zappi", label: "zappi", color: COLORS.zappi, powerW: 7400, subLabel: "eco+", active: true },
    ],
    spokes: [
        { from: "solar", to: "home", powerW: 4100, direction: "forward", chevronColor: COLORS.chevGreen },
        { from: "grid", to: "home", powerW: 800, direction: "forward", chevronColor: COLORS.chevRed },
        { from: "home", to: "libbi", powerW: 1100, direction: "forward", chevronColor: COLORS.chevYellow },
        { from: "home", to: "zappi", powerW: 7400, direction: "forward", chevronColor: COLORS.chevYellow },
    ],
};

const ICON_MAP = {
    home: homeIcon,
    grid: gridIcon,
    solar: solarIcon,
    libbi: libbiIcon,
    zappi: zappiIcon,
    eddi: eddiIcon,
};
function formatPower(w) {
    const abs = Math.abs(w);
    if (abs >= 1000)
        return `${(abs / 1000).toFixed(1)}kW`;
    return `${abs}W`;
}
class MyenergiFlowCard extends i {
    constructor() {
        super(...arguments);
        this.hass = null;
        this._config = null;
        this._cardState = DUMMY_STATE;
    }
    setConfig(config) {
        this._config = config;
    }
    static getConfigElement() {
        return document.createElement("myenergi-flow-card-editor");
    }
    static getStubConfig() {
        return {
            type: "custom:myenergi-flow-card",
            title: "Home Energy",
        };
    }
    _renderNodeCircle(node, pos) {
        const isEddi = node.id === "eddi";
        const iconFn = ICON_MAP[node.id];
        return w `
      <g transform="translate(${pos.cx}, ${pos.cy})">
        <!-- fill circle -->
        ${isEddi
            ? w `
          <defs>
            <radialGradient id="eddi-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#4B4B4B"/>
              <stop offset="100%" stop-color="#292525"/>
            </radialGradient>
          </defs>
          <circle r="${NODE_R}" fill="url(#eddi-grad)" stroke="${node.color}" stroke-width="2.5"/>`
            : w `<circle r="${NODE_R}" fill="${COLORS.card}" stroke="${node.color}" stroke-width="2.5"/>`}
        <!-- icon centred -->
        <foreignObject
          x="${ -11}" y="${ -18}"
          width="22" height="22"
          style="color:${COLORS.text};overflow:visible;"
        >
          <div xmlns="http://www.w3.org/1999/xhtml"
               style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;">
            ${iconFn()}
          </div>
        </foreignObject>
        <!-- power value -->
        <text
          y="10"
          text-anchor="middle"
          class="node-power"
          fill="${node.color}"
          font-family="Overpass, sans-serif"
          font-weight="800"
          font-style="italic"
          font-size="11"
        >${formatPower(node.powerW)}</text>
      </g>
    `;
    }
    _renderOuterLabel(node, pos) {
        const dx = pos.cx - CENTRE_X;
        const dy = pos.cy - CENTRE_Y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const offset = NODE_R + 14;
        const lx = pos.cx + (dx / dist) * offset;
        const ly = pos.cy + (dy / dist) * offset;
        return w `
      <text
        x="${lx}" y="${ly}"
        text-anchor="middle"
        dominant-baseline="middle"
        class="node-label"
        font-family="Overpass, sans-serif"
        font-weight="700"
        font-size="9"
        letter-spacing="1"
        fill="${COLORS.muted}"
      >${node.label}</text>
    `;
    }
    _renderCentreNode(selfPct) {
        return w `
      <g transform="translate(${CENTRE_X}, ${CENTRE_Y})">
        <defs>
          <radialGradient id="centre-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3a3a3a"/>
            <stop offset="100%" stop-color="#1f1f1f"/>
          </radialGradient>
        </defs>
        <circle r="${CENTRE_R}" fill="url(#centre-grad)" stroke="${COLORS.stroke}" stroke-width="2"/>
        <!-- leaf icon -->
        <foreignObject x="-10" y="-20" width="20" height="20" style="overflow:visible;">
          <div xmlns="http://www.w3.org/1999/xhtml"
               style="display:flex;align-items:center;justify-content:center;width:20px;height:20px;">
            ${leafIcon()}
          </div>
        </foreignObject>
        <!-- self-consumption % -->
        <text
          y="14"
          text-anchor="middle"
          class="self-pct"
          font-family="Overpass, sans-serif"
          font-weight="800"
          font-style="italic"
          font-size="13"
          fill="${COLORS.leafGreen}"
        >${selfPct}%</text>
      </g>
    `;
    }
    render() {
        const cs = this._cardState;
        const peripheralNodes = cs.nodes.filter((n) => n.id !== "home");
        const peripheralIds = peripheralNodes.map((n) => n.id);
        const positions = radialPositions(peripheralIds);
        const animSpeed = this._config?.display?.flow_animation_speed ?? "auto";
        return b `
      <div class="card-root">
        <div class="card-header">
          <span class="hamburger">☰</span>
          <span class="card-title">${cs.title}</span>
          <span style="font-size:11px;color:${COLORS.muted};font-weight:300;">
            ${cs.selfConsumptionPct}% self
          </span>
        </div>

        <svg
          class="card-svg"
          viewBox="0 0 ${SVG_W} ${SVG_H}"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- spoke tracks + chevrons -->
          ${renderSpokes(cs.spokes, positions, animSpeed)}

          <!-- peripheral node circles -->
          ${peripheralNodes.map((node) => {
            const pos = positions.find((p) => p.id === node.id);
            return w `
              ${this._renderNodeCircle(node, pos)}
              ${this._renderOuterLabel(node, pos)}
            `;
        })}

          <!-- centre node -->
          ${this._renderCentreNode(cs.selfConsumptionPct)}
        </svg>

        <div class="card-footer">
          <span class="footer-text">myenergi</span>
        </div>
      </div>
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
__decorate([
    r()
], MyenergiFlowCard.prototype, "_cardState", void 0);
customElements.define("myenergi-flow-card", MyenergiFlowCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "myenergi-flow-card",
    name: "myenergi Flow Card",
    description: "Radial energy flow card styled after the myenergi app.",
});
//# sourceMappingURL=myenergi-flow-card.js.map
