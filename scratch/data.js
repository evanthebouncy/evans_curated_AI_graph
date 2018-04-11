//var L = 100;
//
//var nodes = [];
//for (var i = 0; i < L; i++){
//  nodes.push({id: 'hello' + String(i+1), label: 'N '+String(i+1), data: "hello? do I crash everything?"})
//}
//
//
//var edges = [];
//for (var i = 0; i < L; i++){
//    for (var j = 0; j < L; j++) {
//        if (Math.random() < 0.01) {
//            edges.push({from: 'hello' +String(i+1), to: 'hello' +String(j+1)});
//        }
//    }
//}

var nodes_list = [
    supervised_learning,
    svm,
    nn,
];

edges_list = [];
nodes_list.forEach(function(o) {
    o.connect_to.forEach(function(destination) {
          edges_list.push( {from: o.id, to: destination} );  
    })
})