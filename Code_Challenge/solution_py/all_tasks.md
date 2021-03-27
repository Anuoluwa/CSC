### Online Round (Coding Test – 90 mins)

We are given the costs of a list of pants, shirts, shoes, skirts. We have a certain amount of cash with us, we need to determine the total number of possible combinations which we can buy given that we must buy one and only one of each type.
Eg: pants=[3, 5, 7], shirts = [4, 7, 8], 
skirts = [5, 8], shoes = [3], budget = 25
So in the above e.g., apart from the combination [7, 8, 8, 3], all others are possible.

Hint: Since we have to buy all, we can combine the first two lists and the last two lists, so we would have cost lists like pants_shirts = […] and 

skirts_shoes = […], now we can just iterate over one list and binary search the remaining amount over the other list and add accordingly.

