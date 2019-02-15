import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'c-container',
  styleUrl: 'c-container.scss',
  shadow: true
})
export class cContainer {

  @Prop() type?: '' | 'fluid' | 'flex';

  hostData() {
    const data = { class: { } };
    data.class['container' + (this.type ? '-' + this.type : '')] = true;
    return data;
  }

  render() {
    return <slot></slot>;
  }
}
