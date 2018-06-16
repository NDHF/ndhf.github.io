# unit-4-game

1. The player may choose from a number of characters. 
    - Once a player character has been chosen, all other players become enemies
2. Player chooses one enemy to fight at a time.
3. Player character has a starting attack power, which is multiplied each time they attack. 
    - e.g. If your character's starting attack power is 8, the next attack will be for 16, and the next will be for 24.
4. Each enemy has a static counterattack power. 
5. Player attack will lower the enemy's HP, and enemy counterattacks will lower the player's HP. 
    - HP cannot be restored once lost. 
6. If enemy's HP is reduced to zero, they are eliminated, and a new enemy may be chosen.
7. If player HP is reduced to zero at any time, player loses the game. 
8. To win the game, the player must find the correct order for fighting enemies, building up their attack power sufficiently to defeat enemies with
larger counterattacks. 
9. The order for fighting enemies will be different for each player. 