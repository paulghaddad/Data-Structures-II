/* eslint-disable no-undef */
const Graph = require('../src/graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should have methods named "addVertex", "contains", "removeVertex", "addEdge", "checkIfEdgeExists", and "removeEdge"', () => {
    expect(typeof graph.addVertex).toBe('function');
    expect(typeof graph.contains).toBe('function');
    expect(typeof graph.removeVertex).toBe('function');
    expect(typeof Graph.addEdge).toBe('function');
    expect(typeof Graph.checkIfEdgeExists).toBe('function');
    expect(typeof graph.removeEdge).toBe('function');
  });

  it('should store values as nodes on the graph', () => {
    graph.addVertex('Hello World!');
    expect(graph.contains('Hello World!')).toBe(true);
  });

  it('should properly remove nodes', () => {
    graph.addVertex('hi there');
    graph.removeVertex('hi there');
    expect(graph.contains('hi there')).toBe(false);
  });

  it('should automatically create an edge between two nodes if there is only two nodes in the graph', () => {
    const pineapple = graph.addVertex('pineapple');
    const banana = graph.addVertex('banana');
    const apple = graph.addVertex('apple');
    expect(Graph.checkIfEdgeExists(pineapple, banana)).toBe(true);
    expect(Graph.checkIfEdgeExists(pineapple, apple)).toBe(false);
  });

  it('should create edges between two nodes', () => {
    const pineapple = graph.addVertex('pineapple');
    const banana = graph.addVertex('banana');
    const mango = graph.addVertex('mango', [pineapple]);
    expect(Graph.checkIfEdgeExists(pineapple, banana)).toBe(true);
    expect(Graph.checkIfEdgeExists(mango, banana)).toBe(false);
    expect(Graph.checkIfEdgeExists(mango, pineapple)).toBe(true);
  });

  it('should be able to remove edges connecting two nodes', () => {
    const monkey = graph.addVertex('monkey');
    const human = graph.addVertex('human');
    const crocodile = graph.addVertex('crocodile', [human]);
    Graph.addEdge(crocodile, monkey);
    graph.removeEdge(monkey, human);
    expect(Graph.checkIfEdgeExists(monkey, human)).toBe(false);
  });

  it('should remove nodes without any edges', () => {
    const A = graph.addVertex('A');
    const b = graph.addVertex('b');
    expect(Graph.checkIfEdgeExists(A, b)).toBe(true);
    graph.removeEdge(A, b);
    expect(Graph.checkIfEdgeExists(A, b)).toBe(false);
    expect(graph.contains('A') || graph.contains('b')).toBe(false);
  });
});

