/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var map = {},
        visited = new Set(),
        visitedPath = new Set();
    //build map
    for (i = 0; i < numCourses; i++) {
        map[i] = { index: i, next: [] };
        console.log(map[i]);
    }
    //add edge
    for (i = 0; i < prerequisites.length; i++) {
        map[prerequisites[i][1]].next.push(map[prerequisites[i][0]]);
        console.log(prerequisites[i][1]);
    }
    //bfs
    for (i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            if (!bfs(map[i])) {
                return false;
            }
        }
    }
    return true;

    function bfs(graph) {
        // visited[graph.index] = true;
        visitedPath[graph.index] = true;
        if (graph.next.length > 0) {
            for (var i = 0; i < graph.next.length; i++) {
                if (visitedPath[graph.next[i].index]) {
                    return false;
                }
                if (!bfs(map[graph.next[i].index])) {
                    return false;
                }
            }
        }
        visitedPath[graph.index] = false;
        return true;
    }
};
console.log(canFinish(2, [
    [1, 0],
    [0, 1]
]));

/*

选课，[m,n]，选m的先决条件是要先选n。

拓扑排序，用DFS实现。

用邻接表建图。循环遍历建立所有节点，再循环所有的边把图建出来。

最后遍历所有的点进行DFS。

 

两个关键的哈希表：visited和visitedPath。

visited是DFS外层循环用的，访问过的点就不再访问了，节省时间；visitedPath是记录回溯的路径，这东西是本题的关键。

举例来说canFinish(4, [[1,0],[2,0],[3,1],[3,2]]) ：

              

走0 -> 1 -> 3这条路的时候，会访问到3，visited[3]记成true了。

当走0 -> 2 -> 3的时候，如果只是看visited变量，3已经访问过了。

所以需要visitedPath记录当前路径上的点，当一条路走不通回溯的时候，visitedPath也需要回溯。



*/