import { Component, Host, h, State,  } from '@stencil/core';

@Component({
  tag: 'accordion-component',
  styleUrl: 'accordion-component.css',
  shadow: true,
})
export class AccordionComponent {

  @State() isAccordionOpen: boolean = false;

  toogleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  
  render() {
    return (
      <Host>
        <div class={{ accordion: true, ['accordion-container--active']: this.isAccordionOpen  }}>
          <div class={{['accordion-container--open']: this.isAccordionOpen, ['accordion-container']: !this.isAccordionOpen  }} onClick={() => this.toogleAccordion()} aria-disabled="false" role="button" tabindex="0">
            <span class="accordion-header">This is a panel header</span>
          </div>
          <div class="accordion-content">
            <slot></slot>
          </div>
       </div>
      </Host>
    );
  }

}
