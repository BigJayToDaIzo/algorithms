import { SingleDirectionalNode } from "../Node/SingleDirectionalNode";

export class NullableLinkedList<T>{
	_head: SingleDirectionalNode<T> | null;
	constructor(node: SingleDirectionalNode<T> | null = null){
		this._head = node;

	}

	get head(): SingleDirectionalNode<T> | null {
		return this._head;
	}

	pushHead(node: SingleDirectionalNode<T>): void {
		if(!this.head){
			this._head = node;
		}else{
			const oldHead = this.head;
			this._head = node;
			node.next = oldHead;
		}
	}

	pushTail(node: SingleDirectionalNode<T>): void {
		if(!this.head){
			this._head = node;
		}else{
			let tail = this.head;
			while(tail.next){
				tail = tail.next;
			}
			tail.next = node;
		}
	}

	findNode(data: string): SingleDirectionalNode<T> | null {
		let currentNode = this.head;
		while(currentNode){
			if(currentNode.data === data){
				return currentNode;
			}
			currentNode = currentNode.next;
		}
		return null;
	}

	toString(){
		let output = '[HEAD]=';
		let iterNode = this.head;
		while(iterNode){
			output += `<${iterNode.data}>->`;
			iterNode = iterNode.next;
		}
		return output +='null';
	}

}