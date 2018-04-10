
// create an array with nodes
var nodes = new vis.DataSet(nodes);

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


