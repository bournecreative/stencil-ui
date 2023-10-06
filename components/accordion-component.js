import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const accordionComponentCss = ":host{display:block}.accordion-header{background-color:#fafafa;border-radius:4px 4px 0 0;box-shadow:0 0 0 1px #b2b2b2;cursor:pointer;display:block;padding:12px;transition:300ms ease}.accordion-header::before{content:'>';display:inline-block;transition:300ms ease transform;margin-right:12px}.accordion-container--active .accordion-header::before{content:'>';transform:rotate(90deg)}.accordion-content{padding:12px;box-shadow:1px 0 0 0 #b2b2b2, -1px 0 0 0 #b2b2b2, 0 1px 0 0 #b2b2b2;transition:0.3s ease all;opacity:0;visibility:hidden;transform:scaleY(0);transform-origin:top}.accordion-container--active .accordion-content{opacity:1;visibility:visible;transform:scaleY(1)}";

const AccordionComponent$1 = /*@__PURE__*/ proxyCustomElement(class AccordionComponent extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.isAccordionOpen = false;
  }
  toogleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  render() {
    return (h(Host, null, h("div", { class: { accordion: true, ['accordion-container--active']: this.isAccordionOpen } }, h("div", { class: { ['accordion-container--open']: this.isAccordionOpen, ['accordion-container']: !this.isAccordionOpen }, onClick: () => this.toogleAccordion(), "aria-disabled": "false", role: "button", tabindex: "0" }, h("span", { class: "accordion-header" }, "This is a panel header")), h("div", { class: "accordion-content" }, h("slot", null)))));
  }
  static get style() { return accordionComponentCss; }
}, [1, "accordion-component", {
    "isAccordionOpen": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["accordion-component"];
  components.forEach(tagName => { switch (tagName) {
    case "accordion-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AccordionComponent$1);
      }
      break;
  } });
}

const AccordionComponent = AccordionComponent$1;
const defineCustomElement = defineCustomElement$1;

export { AccordionComponent, defineCustomElement };

//# sourceMappingURL=accordion-component.js.map