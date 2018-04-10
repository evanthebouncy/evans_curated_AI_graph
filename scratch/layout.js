var L = 100;
var nodes = [];
for (var i = 0; i < L; i++){
  nodes.push({id: 'hello' + String(i+1), label: 'N '+String(i+1), data: "hello? do I crash everything?"})
}
// create an array with nodes
var nodes = new vis.DataSet(nodes);

var edges = [];
for (var i = 0; i < L; i++){
    for (var j = 0; j < L; j++) {
        if (Math.random() < 0.01) {
            edges.push({from: 'hello' +String(i+1), to: 'hello' +String(j+1)});
        }
    }
}
// create an array with edges
var edges = new vis.DataSet(edges);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};

// initialize your network!
var network = new vis.Network(container, data, options);

document.getElementById("bait").addEventListener("click", function() {
network.focus('hello'+String(Math.floor(Math.random() * L)), {scale:2});
}, false);


