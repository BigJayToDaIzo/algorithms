import { BiDirectionalNode } from "../Node/BiDirectionalNode";

export class Queue<T>{
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

	get tail(): BiDirectionalNode<T>{
		if(this._tail){
			return this._tail;
		}
		throw new Error('Queue is empty'); // underflow
	}

	get size(): number{
		return this._size;
	}

	peek(): BiDirectionalNode<T> {
		if(this._head){
			return this._head;
		}
		throw new Error('Queue is empty'); // underflow
	}

	enqueue(node: BiDirectionalNode<T>): void{
		if(this.size < this.maxSize){
			if(this._tail){
				this._tail.next = node;
				node.prev = this._tail;
				this._tail = node;
			}else{
				this._head = node;
				this._tail = node;
			}
			this._size++;
		}else throw new Error('Queue is full'); // overflow
	}

	dequeue(): BiDirectionalNode<T> {
		const head = this.peek();
		const newHead = this._head?.next;
		if(newHead){
			newHead.prev = null;
			this._head = newHead;
			this._size--;
			return head;
		}else throw new Error('Queue is empty');

	}

}