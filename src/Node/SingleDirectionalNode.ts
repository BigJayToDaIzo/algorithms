export class SingleDirectionalNode<T> {
  _data?: T;
  _next?: SingleDirectionalNode<T>;
  constructor(data?: T, next?: SingleDirectionalNode<T>){
      this._data = data;
      this._next = next;
  }

  setData(data: T): void { 
      this._data = data;
  }

  getData(){
    return this._data;
  }
  
  setNext(node: SingleDirectionalNode<T>): void{
    this._next = node;
  }

  getNext(){
    return this._next;
  }

  toString(){
    return `data: ${this._data}, next: {${this._next}}`;
  }
}

