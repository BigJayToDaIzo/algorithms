export class BiDirectionalNode<T>{
	_data: T;
	_next: BiDirectionalNode<T> | null;
	_prev: BiDirectionalNode<T> | null;
	constructor(data: T){
		this._data = data;
		this._next = null;
		this._prev = null;
	}

	public get next(): BiDirectionalNode<T> | null {
		return this._next;
	}

	public set next(node: BiDirectionalNode<T> | null){
		this._next = node;
	}

	public get prev(): BiDirectionalNode<T> | null {
		return this._prev;
	}

	public set prev(node: BiDirectionalNode<T> | null){
		this._prev = node;
	}

	public get data(): T{
		return this._data;
	}

	public set data(data: T){
		this._data = data;
	}

	toString(): string {
		if(this._prev && this._next){
			return `data: ${this._data}, prev: {${this._prev.data}}, next: {${this._next.data}}`;
		}else if (this._prev){
			return `data: ${this._data}, prev: {${this._prev.data}}, next: null`;
		}else if(this._next){
			return `data: ${this._data}, prev: null, next: {${this._next.data}}`;
		}else{
			return `data: ${this._data}, prev: null, next: null`;
		}
		
	}
}