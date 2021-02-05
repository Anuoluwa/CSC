def jumpingOnClouds(c):
    current = 0
    end = len(c) - 1
    counts = 0
    while current < end:
        if ((current + 2) <= end) and (c[current + 2] == 0):
            current += 2
            counts += 1
        elif c[current + 1] == 0:
            current += 1
            counts += 1
    return counts

print(jumpingOnClouds([0,1, 0, 0, 0, 1,0]))