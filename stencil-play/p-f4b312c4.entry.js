import{r as o,h as a,H as i}from"./p-9f58951b.js";const n=":host{display:block}.accordion-header{background-color:#fafafa;border-radius:4px 4px 0 0;box-shadow:0 0 0 1px #b2b2b2;cursor:pointer;display:block;padding:12px;transition:300ms ease}.accordion-header::before{content:'>';display:inline-block;transition:300ms ease transform;margin-right:12px}.accordion-container--active .accordion-header::before{content:'>';transform:rotate(90deg)}.accordion-content{padding:12px;box-shadow:1px 0 0 0 #b2b2b2, -1px 0 0 0 #b2b2b2, 0 1px 0 0 #b2b2b2;transition:0.3s ease all;opacity:0;visibility:hidden;transform:scaleY(0);transform-origin:top}.accordion-container--active .accordion-content{opacity:1;visibility:visible;transform:scaleY(1)}";const r=class{constructor(a){o(this,a);this.isAccordionOpen=false}toogleAccordion(){this.isAccordionOpen=!this.isAccordionOpen}render(){return a(i,null,a("div",{class:{accordion:true,["accordion-container--active"]:this.isAccordionOpen}},a("div",{class:{["accordion-container--open"]:this.isAccordionOpen,["accordion-container"]:!this.isAccordionOpen},onClick:()=>this.toogleAccordion(),"aria-disabled":"false",role:"button",tabindex:"0"},a("span",{class:"accordion-header"},"This is a panel header")),a("div",{class:"accordion-content"},a("slot",null))))}};r.style=n;export{r as accordion_component};
//# sourceMappingURL=p-f4b312c4.entry.js.map