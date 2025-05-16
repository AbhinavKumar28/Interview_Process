Readme
Problem 
You are given a complete undirected graph with N nodes (numbered from 0 to N-1). Each node in the graph can participate in at most 3 connections simultaneously in any given round.
Your task is to design an algorithm that schedules the process of establishing connections between all pairs of nodes in the minimum number of rounds. In each round, you must specify which pairs of nodes will establish connections.

Input:
N

Output:

A sequence of rounds, where each round consists of pairs of node IDs that will establish connections in that round.

Constraints:

- Each node can participate in at most 3 connections in any given round.
- Every pair of distinct nodes must establish a connection exactly once.
- Since the graph is undirected, establishing a connection between nodes (i,j) is the same as establishing a connection between (j,i). You only need to establish each connection once.
- The goal is to minimize the number of rounds needed.
