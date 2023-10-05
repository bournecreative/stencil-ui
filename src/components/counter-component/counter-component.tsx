import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {

  @Prop() btnText: string;
  @Prop() resetText: string;
  @Prop() color: string;

  @State() counter = 0;

  increase() {
    this.counter++
  }

  reset() {
    this.counter = 0
  }

  render() {
    return (
      <Host>
        <div class="counter">
          <div class="counter_controls">
            <button onClick={() => this.increase()}>{this.btnText}</button>
            <button onClick={() => this.reset()}>{this.resetText}</button>
          </div>
          <div class="counter_display">{this.counter}</div>
        </div>
      </Host>
    );
  }

}
