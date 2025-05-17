from itertools import combinations
def solve(N):
    if N ==1:
        return "No graph possible with single node"
    all_pairs = set(combinations(range(N),2))
    rounds = []
    while all_pairs:
        cur_round=[]
        connections =[0]*N
        for u,v in sorted(all_pairs):
            if connections[u]<3 and connections[v]<3:
                cur_round.append((u,v))
                connections[u]=connections[u]+1
                connections[v]=connections[v]+1
        for pair in cur_round:
            all_pairs.remove(pair) 
        rounds.append(cur_round)
    return rounds
n=int(input())
print(solve(n))