/*
 * @Description :
 * @Date        : 2021-11-21 02:31:00 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-21 03:21:15 +0800
 * @LastEditors : JackChou
 */

import { Component, h, Prop, State, Watch, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'my-rating',
  styleUrl: 'my-rating.css',
  shadow: true,
})
export class MyRating {
  @Prop({ mutable: true }) value: number = 0;
  @Prop() maxValue: number = 5;

  @Event() ratingChange: EventEmitter;

  @Method()
  async getValue(params: any) {
    console.log(params);
    this.maxValue = params.maxValue;
    this.createStarList();
    return this.value;
  }

  @State()
  starList: object[] = [];

  @Watch('value')
  watchValue(value: number, oldValue: number) {
    console.log(value, oldValue);
    this.createStarList();
    this.ratingChange.emit({ value });
  }

  componentWillLoad() {
    this.createStarList();
  }
  componentWillRender() {
    console.log('componentWillRender');
    console.log(this.value);
  }

  setValue(newValue) {
    this.value = newValue;
    this.createStarList();
  }

  createStarList(numberOfStars: number = this.value) {
    let starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= numberOfStars) {
        starList.push(
          <span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>
            &#x2605;
          </span>,
        );
      } else {
        starList.push(
          <span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>
            &#x2606;
          </span>,
        );
      }
    }
    this.starList = starList;
  }

  render() {
    return <div>{this.starList}</div>;
  }
}
