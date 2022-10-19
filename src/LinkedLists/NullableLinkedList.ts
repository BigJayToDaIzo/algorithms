import { KVPair, KVPairSingleDirectionalNode } from "../Node/KVPairSingleDirectionalNode";

export class NullableLinkedList<KVPair>{
	_head: KVPairSingleDirectionalNode<KVPair> | null;
	constructor(node: KVPairSingleDirectionalNode<KVPair> | null = null){
		this._head = node;

	}

	get head(): KVPairSingleDirectionalNode<KVPair> | null {
		return this._head;
	}

	pushHead(node: KVPairSingleDirectionalNode<KVPair>): void {
		if(!this.head){
			this._head = node;
		}else{
			const oldHead = this.head;
			this._head = node;
			node.next = oldHead;
		}
	}

	pushTail(node: KVPairSingleDirectionalNode<KVPair>): void {
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

	findNodeByKey(finder: string | number): KVPairSingleDirectionalNode<KVPair> | null {
		let currentNode = this.head;
		while(currentNode){
			if(currentNode.data){
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