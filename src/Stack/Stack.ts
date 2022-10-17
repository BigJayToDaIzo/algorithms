import { BiDirectionalNode } from "../Node/BiDirectionalNode";

export class Stack<T>{
	_head: BiDirectionalNode<T> | null;
	_tail: BiDirectionalNode<T> | null;
	_size: number;
	maxSize: number;

	constructor(node: BiDirectionalNode<T> | null = null, maxSize = Infinity){
		this._head = node;
		this._tail = node;
		this.maxSize = maxSize;
		if(node) this._size = 1;
		else this._size = 0;
	}

	get head(): BiDirectionalNode<T>{
		if(this._head) return this._head;
		else throw new Error('Stack is empty');
	}

	get tail(): BiDirectionalNode<T>{
		if(this._tail) return this._tail;
		else throw new Error('Stack is empty');
	}

	get size(): number {
		return this._size;
	}

	push(node: BiDirectionalNode<T>): void {
		if(this.size < this.maxSize){
			if(!this._head){
				this._head = node;
				this._tail = node;
			} else {
				const oldTail = this.tail;
				oldTail.next = node;
				node.prev = oldTail;
				this._tail = node;
			}
			this._size++;
		}else throw new Error('Stack is full');
	}

	peek(): BiDirectionalNode<T>{
		if(this.size > 0) return this.head;
		else throw new Error('Stack is empty');
	}

	pop(): BiDirectionalNode<T>{
		if(this.size > 0){
			const poppedTail = this.tail;
			if(this.size > 1){
				if(this._tail?.prev) this._tail = poppedTail.prev;
			}else{
				this._head = null;
				this._tail = null;
			}
			this._size--;
			return poppedTail;
		}else throw new Error('Stack is empty');
	}

}