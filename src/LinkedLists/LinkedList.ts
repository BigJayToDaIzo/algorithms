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

	removeFromHead(): SingleDirectionalNode<T>{
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

	swapElements(data1: T, data2: T): void{
		let swap1 = null;
		let swap2 = null;
		let swap1Prev = null;
		let swap2Prev = null;
		let iterNode = this.head;
		while(iterNode.next){
			if(iterNode.data !== data1){
				if(!swap1) swap1Prev = iterNode;
			}else{
				if(!swap1) swap1 = iterNode;
			}
			if(iterNode.data !== data2){
				if(!swap2) swap2Prev = iterNode;
			}else{
				if(!swap2) swap2 = iterNode;
			}
			iterNode = iterNode.next;
			// HOW DO WE CAPTURE TAIL?!
			
		}

		if(swap1 && swap2){
			//swap-o change-o
			if(!swap1Prev){
				this._head = swap2;
			} 
			else{
				swap1Prev.next = swap2;
			} 
			if(!swap2Prev) {
				this._head = swap1;
			}
			else{
				swap2Prev.next = swap1;
			} 
			const temp = swap1.next;
			swap1.next = swap2.next;
			swap2.next = temp;
		}
	}

	toString(): string {
		let currentNode = this._head;
		let output = '<head> ';
		while(currentNode.next){
			output += `${currentNode.data}, `;
			currentNode = currentNode.next;
		}
		output += `${currentNode.data}`;
		return output;
	}

}