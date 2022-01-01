import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'dropdown.scss',
})
export class Dropdown {
  @Prop() myTitle: string = '';
  @Prop() @State() isToggle: boolean = false;
  @Event() toggle: EventEmitter;

  render() {
    return (
      <div>
        <button onClick={() => this.toggleClick()}>
          {this.myTitle} {this.isToggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>

        <div style={{ display: this.isToggle ? 'block' : 'none' }}>
          <slot></slot>
        </div>
      </div>
    );
  }

  toggleClick() {
    this.isToggle = !this.isToggle;
    this.toggle.emit({ visible: this.isToggle });
  }
}
