/*
 * @Description :
 * @Date        : 2021-11-21 02:31:00 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-22 03:42:58 +0800
 * @LastEditors : JackChou
 */

import { Component, h, Prop, State, Watch, Event, EventEmitter, Method } from '@stencil/core';
export type Person = { name: string; age?: number };
@Component({
  tag: 'my-rating',
  styleUrl: 'my-rating.css',
  shadow: true,
})
export class MyRating {
  constructor() {
    console.log('this.value');
    console.log(this.value);
    console.log(typeof this.value);
    console.log('this.maxValue');
    console.log(this.maxValue);
    console.log('this.isShow');
    console.log(this.isShow);
    console.log(typeof this.isShow);
    console.log('this.person');
    console.log(this.person);
    console.log(typeof this.person);
  }
  @Prop({ mutable: true }) value: number = 0;
  @Prop() maxValue: number = 5;
  @Prop() isShow: boolean = false;
  // NOTE 不能接收对象
  @Prop() person: object = {};
  // NOTE 设置可变的，直接调用函数修改它
  @Prop({ mutable: true }) personArray: Person[] = [{ name: 'John' }];

  @Event()
  ratingChange: EventEmitter;
  // FIXME 不支持这种写法
  // @Event()
  // 'rating-change': EventEmitter;
  @Method()
  async setPerson(params: any) {
    this.person = params;
    // this.maxValue = params.maxValue;
    // this.createStarList();
    return true;
  }
  @Method()
  async setPersonArray(persons: []) {
    this.personArray = persons;
    return true;
  }
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
    const span = this.isShow ? <span>isShow:{this.isShow.toString()}</span> : null;
    return (
      <div>
        {this.starList}
        <hr />
        {span}
        <p>person:{JSON.stringify(this.person)}</p>
        <p>personArray:{JSON.stringify(this.personArray)}</p>
      </div>
    );
  }
}
