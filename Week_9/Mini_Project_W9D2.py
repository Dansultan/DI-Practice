class Character():
    def __init__(self, name, life=20, attack=10):
        self.name = name
        self.life = life
        self.attack = attack



    def basic_attack(self,character2):
        self.character2 = character2
        character2.life = character2.life - self.attack

class Druid(Character):
    def medidate(self):
        self.life += 10

    def animal_help(self):
        self.attack += 5

    def fight(self,character2):
        character2.life -= (0.75*self.life + 0.75*self.attack)


class Warrior(Character):
    def brawl(self, character2):
        character2.life -= (2*self.attack)
        self.life += (0.5*self.attack)

    def train(self):
        self.life += 2
        self.attack += 2

    def roar(self, character2):
        character2.attack -= 3

class Mage(Character):
    def curse(self, character2):
        character2.attack -= 2

    def summon(self):
        self.attack += 3

    def cast_spell(self, character2):
        character2.life -= (self.attack/self.life)

