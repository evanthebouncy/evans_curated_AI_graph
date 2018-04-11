
// create an array with nodes
var nodes = new vis.DataSet(nodes_list);

// create an array with edges
var edges = new vis.DataSet(edges_list);

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
    var random_idx = Math.floor(Math.random() * nodes.length);
    var random_item = nodes_list[random_idx];
    var random_id = random_item.id;
    display_node(random_item);
network.focus(random_id, {scale:2});
}, false);

function display_node (the_node){
            document.getElementById("content_title").innerHTML = the_node.label;
        document.getElementById("content_body").innerHTML = the_node.text;
}

network.on( 'click', function(properties) {
    var ids = properties.nodes;
    var clickedNodes = nodes.get(ids);
    console.log('clicked nodes:', clickedNodes);
    if (clickedNodes.length > 0){
        var the_node = clickedNodes[0];
        display_node(the_node);
    }
});

