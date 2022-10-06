import { SingleDirectionalNode } from '../Node/SingleDirectionalNode';

export class LinkedList<T>{
	_head: SingleDirectionalNode<T>;
	constructor(node: SingleDirectionalNode<T>){
		this._head = node;

	}

	public get head(): SingleDirectionalNode<T>{
		return this._head;
	}

	addToHead(node: SingleDirectionalNode<T>){
		const previousHead = this._head;
		node.next = previousHead;
		this._head = node;
	}

	addToTail(node: SingleDirectionalNode<T>){
		let iterNode = this._head;
		while(iterNode.next){
			iterNode = iterNode.next;
		}
		iterNode.next = node;
	}

	removeFromHead(): SingleDirectionalNode<T> {
		const removedHead = this._head;
		if(this._head._next){
			this._head = this._head._next;	
		}
		return removedHead;
	}

	removeTail(): SingleDirectionalNode<T> {
		let tailFinder = this.head;
		let prevNode = tailFinder;
		while(tailFinder?.next){
			prevNode = tailFinder;
			tailFinder = tailFinder.next;
		}
		prevNode.next = null;
		return tailFinder;
	}

	toString() {
		let currentNode = this._head;
		let output = '<head> ';
		while(currentNode.next){
			output += `${currentNode.data}, `;
			currentNode = currentNode.next;
		}
		output += `${currentNode.data} <tail>`;
		return output;
	}

}