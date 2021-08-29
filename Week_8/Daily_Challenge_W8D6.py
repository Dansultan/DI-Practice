import random



class Card:
    def __init__(self, suit, val):
        self.suit = suit
        self.value = val

    def show(self):
        print(f'{self.value} of {self.suit}')

class Deck:
    def __init__(self):
        self.cards = []
        self.build()

    def build(self):
        for s in ['Spades','Hearts','Diamonds','Clubs']:
            for v in ['A','2','3','4','5','6','7','8','9','10','J','Q','K']:
                self.cards.append(Card(s, v))

    def show(self):
        for card in self.cards:
            card.show()

    def shuffle(self):
        random.shuffle(self.cards)

    def play(self):
        return self.cards.pop()


deck = Deck()
deck.shuffle()

game = deck.play()
game.show()

