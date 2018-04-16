
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

function display_node (the_node){
    $("#content_title").html(the_node.label);
    $("#content_body").html(the_node.text);
    
    $("#related").empty();
    the_node.connect_to.forEach(function(con){
        
        var the_div = $('<div/>', {
            //id: 'foo',
            "class": 'border',
            text: con,
            style: 'cursor: pointer',
            click: function(e){
                e.preventDefault();
                console.log(con);
                display_node(nodes.get(con));
            },

        });
        
        the_div.appendTo('#related');
        
        
//        $("#related").append('<div>hello</div>');
    });
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

$(document).ready(function(){
    $("#bait").click(function(){
        var random_idx = Math.floor(Math.random() * nodes.length);
        var random_item = nodes_list[random_idx];
        var random_id = random_item.id;
        display_node(random_item);
        network.focus(random_id, {scale:2});
    });
});

