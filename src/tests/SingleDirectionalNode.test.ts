import { SingleDirectionalNode } from "../Node/SingleDirectionalNode";

describe('SingleDirectionalNode<string> test suite', () => {
  let node1: SingleDirectionalNode<string>;
  let node2: SingleDirectionalNode<string>;

  beforeEach(() => {
    node1 = new SingleDirectionalNode<string>();
    node1.setData('Node 1');
  });

  test('ctor works', () => {
    expect(node1).toBeTruthy();
    expect(node2).toBeFalsy();
  });

  // No need to test typing of args in ctor or functions thanks to TypeScript
  // type safety

  test('setData() sets data field', () => {
    expect(node1._data).toBe('Node 1');
  });

  test('getData() returns data', () => {
    expect(node1.getData()).toBe('Node 1');
  });

  test('setNext() sets link to next', () => {
    node2 = new SingleDirectionalNode<string>('Node 2');
    node1.setNext(node2);
    expect(node1._next).toBe(node2);
  });

  test('getNext() returns next node', () => {
    node2 = new SingleDirectionalNode<string>('Node 2');
    node1.setNext(node2);
    expect(node1.getNext()).toBe(node2);
  });

});

describe('SingleDirectionalNode<number> test suite', () => {
  let node1: SingleDirectionalNode<number>;
  let node2: SingleDirectionalNode<number>;

  beforeEach(() => {
    node1 = new SingleDirectionalNode<number>();
    node1.setData(1);
  });

  test('setData() sets data field', () => {
    node1.setData(2);
    expect(node1._data).toBe(2);
  });

  test('getData() returns data', () => {
    expect(node1.getData()).toBe(1);
  });

  // No need to test get/setNext thanks to generic typesafety in TypeScript

});