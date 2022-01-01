import { Component, Listen, h } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss',
})
export class MyName {
  private test: string = 'test';
  render() {
    return (
      <div>
        <h1>My Web Component App</h1>
        {/* onToggle={this.log} */}
        <my-dropdown my-title="Toggle">Hello World</my-dropdown>
      </div>
    );
  }

  @Listen('toggle')
  log(event) {
    console.log(event);
    console.log(this.test);
  }
}
