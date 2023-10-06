import { Host, h, } from "@stencil/core";
export class AccordionComponent {
  constructor() {
    this.isAccordionOpen = false;
  }
  toogleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  render() {
    return (h(Host, null, h("div", { class: { accordion: true, ['accordion-container--active']: this.isAccordionOpen } }, h("div", { class: { ['accordion-container--open']: this.isAccordionOpen, ['accordion-container']: !this.isAccordionOpen }, onClick: () => this.toogleAccordion(), "aria-disabled": "false", role: "button", tabindex: "0" }, h("span", { class: "accordion-header" }, "This is a panel header")), h("div", { class: "accordion-content" }, h("slot", null)))));
  }
  static get is() { return "accordion-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["accordion-component.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["accordion-component.css"]
    };
  }
  static get states() {
    return {
      "isAccordionOpen": {}
    };
  }
}
//# sourceMappingURL=accordion-component.js.map
