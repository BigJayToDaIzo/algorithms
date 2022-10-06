export class SingleDirectionalNode<T> {
	_data: T;
	_next: SingleDirectionalNode<T> | null;
	constructor(data: T){
		this._data = data;
		this._next = null;
	}

	public set data(data: T){ 
		this._data = data;
	}

	public get data(): T{
		return this._data;
	}
  
	public set next(node: SingleDirectionalNode<T> | null){
		this._next = node;
	}

	public get next(): SingleDirectionalNode<T> | null{
		return this._next;
	}

	toString(): string {
		if(this.next) return `data: ${this.data}, next: {${this.next.data}}`;
		else return `data: ${this.data}, next: null`;
	}
}

