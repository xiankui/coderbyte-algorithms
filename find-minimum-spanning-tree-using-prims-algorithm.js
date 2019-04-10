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

/***************** Kruskal's algorithm *********************/

// 验证新加入的边是否会行成闭合
function hasCycle(mst, edge) {
  const all_vertices = mst.reduce((v, edge) => {
    v = v.concat(edge.slice(0, 2));
    return v;
  }, []);

  // 顶点集合
  const vertices = all_vertices.reduce((arr, v) => {
    if (!arr.includes(v)) {
      arr.push(v);
    }
    return arr;
  }, []);

  // 如果每一个顶点都不会和新加入的两个顶点产生闭合，则表示不会产生闭合现象
  let hasCycle = false;

  for (let i = 0, len = vertices.length; i < len; i++) {
    const e1 = vertices[0] + edge[0],
          e2 = vertices[0] + edge[1],
          e3 = edge[0] + vertices[0],
          e4 = edge[1] + vertices[0];
    const cycles = [e1, e2, e3, e4];

    // 当两条有可能产生闭合的边被找到时，就表示找到了闭合现象
    let findEdges = 0;

    if (hasCycle) {
      break;
    }

    for (let j = 0, jlen = mst.length; j < jlen; j++) {
      const _edge = mst[j].slice(0, 2).join('');
      if (cycles.includes(_edge)) {
        findEdges += 1;
      }

      if (findEdges === 2) {
        hasCycle = true;
        break;
      }
    }
  }

  return hasCycle;
}

// 找到不会闭合的，最小的边的集合，当边的数量为顶点树减去一时，成功
function kruskals(vertices, graph) {
  const MST = []; // result
  const mstEdges = vertices.length - 1; // 应该入选的边的数量

  // 数据按边长排序后，即可顺序排查每条边是否符合条件
  const queueGraph = graph.sort((a, b) => (a[2] - b[2]));

  // the smallest must be included
  const firstEdge = queueGraph.shift();
  MST.push(firstEdge);

  // 直到找到符合条件的足够多的边，即各顶点之间不会形成闭合回路，即数组中不可以包含终点相同的两个点
  while (MST.length < mstEdges && queueGraph.length) {
    const edge = queueGraph.shift();
    if (!hasCycle(MST, edge)) {
      MST.push(edge);
    }
  }

  return MST;
}

/***************** Prim's algorithm *********************/

// 找下一个顶点，即剩余边中，满足一个点在已选取中，另一个点不在已选取中的最小边的点
function findNextVertex(includedVertices, graph) {
  let nextVertex = '';

  const smallestEdge = graph.reduce((smallest, edge) => {
    // 前一个点已经收入，后一个点没有被收入
    if (includedVertices.includes(edge[0]) && !includedVertices.includes(edge[1])) {
      if (!smallest || edge[2] < smallest[2]) {
        smallest = edge;
        nextVertex = edge[1];
      }
    }

    // 后一个点已经被收入，前一个点没有被收入
    if (includedVertices.includes(edge[1]) && !includedVertices.includes(edge[0])) {
      if (!smallest || edge[2] < smallest[2]) {
        smallest = edge;
        nextVertex = edge[0];
      }
    }

    return smallest;
  }, null);

  return {
    nextVertex,
    nextEdge: smallestEdge
  };
}

// 找到全部的点，如果每个点都选取最小的边，那结果就是最小生成树
function prims(vertices, graph) {
  const MST = []; // result
  const includedVertices = [vertices[0]];

  // 总是找已选取点的最小边
  while (includedVertices.length !== vertices.length) {
    const { nextEdge, nextVertex } = findNextVertex(includedVertices, graph);
    if (nextEdge && nextVertex) {
      includedVertices.push(nextVertex);
      MST.push(nextEdge);
    } else {
      break;  // 防止死循环
    }
  }

  return MST;
}

// hidden runtime response
window.global = {
  runtimeRes: `
    <span>The Prim's algorithm result is:</span> ${JSON.stringify(prims(vertices, graph))}
    <span>The kruskal's algorithm res is:</span> ${JSON.stringify(kruskals(vertices, graph))}
  `
};
