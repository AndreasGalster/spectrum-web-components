import{c as e,p as t,q as i}from"./lit-element-45614e86.js";import{o as s,j as r,w as a}from"./storybook-preview-54ad6afb.js";import{_ as o}from"./tslib.es6-d9c764b6.js";import{i as p}from"./if-defined-b94f78ef.js";import"./index-16394ca3.js";import"./spectrum-icon-alert-small.css-b909ec33.js";import"./focusable-b12aa67a.js";import"./iconset-svg-5d368e15.js";import"./index-d58ab459.js";import"./observe-slot-text-5194cee4.js";import"./spectrum-icon-checkmark-small.css-0cf26621.js";import{T as c}from"./index-592237ae.js";var n=e`:host{display:inline-block;position:relative}#button{position:absolute;right:0;top:0}#input{display:block;-webkit-appearance:none;outline-offset:-2px;padding-left:var(--spectrum-search-padding-left,36px);text-indent:0;padding-right:var(--spectrum-search-padding-right,28px)}#input::-webkit-search-cancel-button,#input::-webkit-search-decoration{-webkit-appearance:none}:host([quiet]) #input{padding-left:var(--spectrum-search-quiet-padding-left,24px);padding-right:var(--spectrum-search-quiet-padding-right,20px)}:host([quiet]) #input~#icon{left:0}:host([quiet]) #input~#button{right:-8px}:host([quiet]) #input~.spectrum-Search-rightIcon{right:0}#icon{display:block;position:absolute;left:12px;top:calc(var(--spectrum-textfield-height,var(--spectrum-alias-single-line-height))/ 2 - var(--spectrum-icon-magnifier-width,var(--spectrum-global-dimension-size-200))/ 2);pointer-events:none;color:var(--spectrum-textfield-icon-color,var(--spectrum-alias-icon-color))}#input:disabled~#icon{color:var(--spectrum-textfield-text-color-disabled,var(--spectrum-alias-text-color-disabled))}`,l=e`.magnifier{width:var(--spectrum-icon-magnifier-width,var(--spectrum-global-dimension-size-200));height:var(--spectrum-icon-magnifier-height,var(--spectrum-global-dimension-size-200))}`;class u extends c{constructor(){super(...arguments),this.label="Search",this.placeholder="Search"}static get styles(){return[...super.styles,n,l]}handleSubmit(e){this.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))||e.preventDefault()}reset(){this.form&&(this.value="",this.form.reset())}render(){return s` <sp-icons-medium></sp-icons-medium> <form action="${p(this.action)}" id="form" method="${p(this.method)}" @submit="${this.handleSubmit}"> ${super.render()} <sp-icon id="icon" class="icon magnifier" size="s" name="ui:Magnifier"></sp-icon> ${this.value?s` <sp-clear-button id="button" label="Reset" @click="${this.reset}"></sp-clear-button> `:s``} </form> `}updated(e){super.updated(e),e.has("multiline")&&(this.multiline=!1)}}o([t()],u.prototype,"action",void 0),o([t()],u.prototype,"label",void 0),o([t()],u.prototype,"method",void 0),o([t()],u.prototype,"placeholder",void 0),o([i("#form")],u.prototype,"form",void 0),customElements.get("sp-search")||customElements.define("sp-search",u);var d=()=>r`
    <sp-search
        @submit=${e=>{e.preventDefault();var t=e.target;a(`Search: ${t.value}`)()}}
    ></sp-search>
    <sp-search disabled></sp-search>
`,m=()=>r`
    <sp-search
        quiet
        @submit=${e=>{e.preventDefault();var t=e.target;a(`Search: ${t.value}`)()}}
    ></sp-search>
    <sp-search quiet disabled></sp-search>
`,h=["Default","Quiet"];export default{component:"sp-search",title:"Search"};export{d as Default,m as Quiet,h as __namedExportsOrder};
//# sourceMappingURL=search.stories-3eb06c49.js.map