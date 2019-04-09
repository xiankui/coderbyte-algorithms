/**
 * Find the minimum spanning tree using Prim's algorithm (最小生成树)
 * @source https://www.coderbyte.com/algorithm/find-minimum-spanning-tree-using-prims-algorithm
 *         https://www.jianshu.com/p/efcd21494dff
 */

// To resolve the problem, the first thing is break model into proper data structure.

// graph vertices
const a = 'a', b = 'b', c = 'c', d = 'd', e = 'e', f = 'f';
const vertices = [a, b, c, d, e, f];

// graph edges with weights
// diagram of graph is shown above
const graph = [
  [a,b,2],
  [a,c,3],
  [b,d,3],
  [b,c,5],
  [b,e,4],
  [c,e,4],
  [d,e,2],
  [d,f,3],
  [e,f,5]
];

// get vertices of collected edges
function getVertices(mst) {
  const pickedVertices = mst.reduce((v, item) => {
    if (!v.includes(item[0])) {
      v.push(item[0]);
    }
    if (!v.includes(item[1])) {
      v.push(item[1]);
    }
    return v;
  }, []);

  return pickedVertices;
}

// which vertices are lost
function getLostVertices(pickedVertices, vertices) {
  const lostVertices = vertices.reduce((lost, item) => {
    if (!pickedVertices.includes(item)) {
      lost.push(item);
    }
    return lost;
  }, []);
  return lostVertices;
}


// implementing a priority queue data structure
// if a concat array includes all the vertices and get the minimum edge weights, it is the result
function prims(vertices, graph) {
  // const MST = []; // result
  const mstEdges = vertices.length - 1;
  const edges = graph.length;
  const queueGraph = graph.sort((a, b) => (a[2] - b[2]));
  
  // maybe the minimum edges includes all vertices
  const MST = queueGraph.slice(0, mstEdges);
  const pickedVertices = getVertices(MST);

  if (pickedVertices.length === vertices.length) {
    return MST;
  }

  // so, what should i do when lost vertices?
  const lostVertices = getLostVertices(pickedVertices, vertices);

  return lostVertices;
}

// hidden runtime response
window.global = {
  runtimeRes: `<span>The Prim's algorithm result is:</span> ${JSON.stringify(prims(vertices, graph))}`
};
