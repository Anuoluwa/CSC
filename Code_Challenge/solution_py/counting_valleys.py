def countingValleys(n, s):
    counts = 0
    alt = 0
    for i in range(len(s)):
      if s[i] == 'U':
        alt += 1
        if alt == 0:
          counts += 1
      else:
        alt -= 1    
    return counts
