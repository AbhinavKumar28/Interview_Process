const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// # Problem Statement:
// # You are given a complete undirected graph with N nodes (numbered from 0 to N-1). Each node in the graph 
function solve(N) {
    // console.log(N)
    let allPairs = new Set();
    for (let i = 0; i < (N-1); i++) {
        for (let j = i + 1; j < N; j++) {
            allPairs.add((i+","+j));
        }
    }
    // console.log(allPairs.size)
    // console.log(allPairs)
    let rounds = [];

    while (allPairs.size > 0) {
        let cur_round = [];
        let connections = Array.from({ length: N }, () => 0);
        let usedPairs = new Set();
        // console.log(usedPairs)
        // console.log(cur_round)
        // console.log(N,connections)
        // break
        for (let pair of allPairs) {
            let [u, v] = pair.split(',').map(Number);
            // console.log(u,v)
            // console.log(usedPairs)
            // console.log(cur_round)
            // break
            if (connections[u] < 3 && connections[v] < 3) {
                cur_round.push([u, v]);
                connections[u]=connections[u]+1;
                connections[v]=connections[v]+1;
                usedPairs.add(pair);
                // console.log(u,v)
                // console.log(usedPairs)
                // console.log(cur_round)
                // break
            }
        }
        for (let pair of usedPairs) {
            allPairs.delete(pair);
        }
        rounds.push(cur_round);
    }
    if (N==1){
        console.log("No graph possible with 1 node.")
    }
    else{
        console.log(rounds);
    }
    rl.close();
    return rounds;
}
rl.question("What is the value of N? ", solve);
// # can participate in at most 3 connections simultaneously in any given round.
// # Your task is to design an algorithm that schedules the process of establishing connections between all
// #  pairs of nodes in the minimum number of rounds. In each round, you must specify which pairs of nodes 
// # will establish connections.

// # Input:
// # N

// # Output:

// # A sequence of rounds, where each round consists of pairs of node IDs that will establish connections 
// # in that round.

// # Constraints:

// # - Each node can participate in at most 3 connections in any given round.
// # - Every pair of distinct nodes must establish a connection exactly once.
// # - Since the graph is undirected, establishing a connection between nodes (i,j) is the same as 
// # establishing a connection between (j,i). You only need to establish each connection once.
// # - The goal is to minimize the number of rounds needed.
// let N = 4;
// let degree = new Array(N).fill(0);
// console.log(degree); // Expected: [0, 0, 0, 0]
