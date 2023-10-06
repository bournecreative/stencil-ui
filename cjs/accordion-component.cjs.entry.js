'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f6e6c248.js');

const accordionComponentCss = ":host{display:block}.accordion-header{background-color:#fafafa;border-radius:4px 4px 0 0;box-shadow:0 0 0 1px #b2b2b2;cursor:pointer;display:block;padding:12px;transition:300ms ease}.accordion-header::before{content:'>';display:inline-block;transition:300ms ease transform;margin-right:12px}.accordion-container--active .accordion-header::before{content:'>';transform:rotate(90deg)}.accordion-content{padding:12px;box-shadow:1px 0 0 0 #b2b2b2, -1px 0 0 0 #b2b2b2, 0 1px 0 0 #b2b2b2;transition:0.3s ease all;opacity:0;visibility:hidden;transform:scaleY(0);transform-origin:top}.accordion-container--active .accordion-content{opacity:1;visibility:visible;transform:scaleY(1)}";

const AccordionComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isAccordionOpen = false;
  }
  toogleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: { accordion: true, ['accordion-container--active']: this.isAccordionOpen } }, index.h("div", { class: { ['accordion-container--open']: this.isAccordionOpen, ['accordion-container']: !this.isAccordionOpen }, onClick: () => this.toogleAccordion(), "aria-disabled": "false", role: "button", tabindex: "0" }, index.h("span", { class: "accordion-header" }, "This is a panel header")), index.h("div", { class: "accordion-content" }, index.h("slot", null)))));
  }
};
AccordionComponent.style = accordionComponentCss;

exports.accordion_component = AccordionComponent;

//# sourceMappingURL=accordion-component.cjs.entry.js.map