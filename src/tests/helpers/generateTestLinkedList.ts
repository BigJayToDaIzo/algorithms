import { SingleDirectionalNode } from '../../Node/SingleDirectionalNode';
import { LinkedList } from '../../LinkedLists/LinkedList';

export function generateTestLinkedList(n: number): LinkedList<string> {
	const initNode = new SingleDirectionalNode<string>('Node 1');
	const list = new LinkedList<string>(initNode);
	for(let i = 2; i <= n; i++){
		const node = new SingleDirectionalNode<string>(`Node ${i}`);
		list.addToTail(node);
	}
	return list;
}