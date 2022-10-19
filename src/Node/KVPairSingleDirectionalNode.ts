export type KVPair = {[key: string | number]: string  | number };

export class KVPairSingleDirectionalNode<KVPair> {
	_data: KVPair | null;
	_next: KVPairSingleDirectionalNode<KVPair> | null;
	constructor(data: KVPair | null = null){
		this._data = data;
		this._next = null;

	}

	set data(data: KVPair | null){
		this._data = data;
	}

	get data(){
		return this._data;
	}

	set next(next: KVPairSingleDirectionalNode<KVPair> | null){
		this._next = next;
	}

	get next(){
		return this._next;
	}

	toString(){
		return `data: ${this.data}, next: ${this.next}`;
	}

}