import { Component, signal, Signal, WritableSignal } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-test',
  styleUrl: './test.scss',
  templateUrl: './test.html',
})
export class Test {

  public title:string = 'test';
  public count = signal<number>(0);
  public increment = () => {
    this.count.set(10);
  };
  public decrement = () => {
    this.count.update(count => count - 1);
  };
}
