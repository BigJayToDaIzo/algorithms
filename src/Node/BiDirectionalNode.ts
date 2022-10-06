import { SingleDirectionalNode } from "./SingleDirectionalNode";

export class BiDirectionalNode<T> extends SingleDirectionalNode<T> {
	_prev: BiDirectionalNode<T> | null;
	constructor(data: T){
		super(data);
		this._prev = null;
	}

	public get prev(): BiDirectionalNode<T> | null {
		return this._prev;
	}

	public set prev(node: BiDirectionalNode<T> | null){
		this._prev = node;
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