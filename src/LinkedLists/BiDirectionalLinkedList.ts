import { BiDirectionalNode } from "../Node/BiDirectionalNode";

export class BiDirectionalLinkedList<T> {
	_head: BiDirectionalNode<T>;
	_tail: BiDirectionalNode<T>;
	constructor(head: BiDirectionalNode<T>){
		this._head = head;
		this._tail = head;
	}

	public get head(): BiDirectionalNode<T> {
		return this._head;
	}

	public set head(node: BiDirectionalNode<T>){
		let prevHead = this._head;
		if(this._head === this._tail){
			prevHead = this._tail;
		}
		prevHead._prev = node;
		node._next = prevHead;
		this._head = node;
		
	}

	public get tail(): BiDirectionalNode<T>{
		return this._tail;
	}

	public set tail(node: BiDirectionalNode<T>){
		const prevTail = this._tail;
		prevTail._next = node;
		node._prev = prevTail;
		this._tail = node;
	}

	popHead(): BiDirectionalNode<T> | undefined {
		if(this._head === this._tail) return;
		const poppedHead = this._head;
		const newHead = poppedHead._next;
		if(newHead != null){
			newHead._prev = null;
			this._head = newHead;
		}
		return poppedHead;

	}

	popTail(): BiDirectionalNode<T> | undefined {
		if(this._head === this._tail) return;
		const poppedTail = this._tail;
		const newTail = poppedTail._prev;
		if(newTail != null){
			newTail._next = null;
			this._tail = newTail;
		}
		return poppedTail;
	}

	popByData(data: T): BiDirectionalNode<T> | undefined {
		if(this.head.data === data){
			return this.popHead();
		} else if(this.tail.data === data){
			return this.popTail();
		} else {
			let prevNode = this.head;
			let iterNode = prevNode.next;
			while(iterNode != null){
				if(iterNode.data !== data){
					prevNode = iterNode;
					if(iterNode.next != null) iterNode = iterNode.next;
				}
				// perform all null checks
				if(iterNode.next != null) {
					const nextNode = iterNode.next;
					prevNode.next = nextNode;
					nextNode.prev = prevNode;
					return iterNode;
				}
			}
		}
		return;
	}	
}