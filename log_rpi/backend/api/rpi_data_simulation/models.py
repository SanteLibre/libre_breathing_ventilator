import math
import random


class Data:
    def __init__(self):
        self.v = 450
        self.max_v = 550
        self.data = []
        self.max_size = 100
        self.i = 0

    def get_data(self):
        for u in range(3):
            if self.v > self.max_v:
                self.v = 0
            else:
                self.v += 3

            if len(self.data) < self.max_size:
                # append
                self.data.append(self.v)
            else:
                # replace
                self.i += 1
                if self.i >= self.max_size:
                    self.i = 0
                self.data[self.i] = self.v

        # graph1 = []
        # for i in range(len(self.data)):
        #     graph1.append(("%s" % i, self.data[i]))
        # value = [{"name": "line", "data": graph1}]
        graph1 = []
        graph2 = []
        graph3 = []
        card1 = round(random.uniform(0.0, 550), 2)
        card2 = round(random.uniform(0.0, 550), 2)
        card3 = round(random.uniform(0.0, 550), 2)
        card4 = round(random.uniform(0.0, 550), 2)
        card5 = round(random.uniform(0.0, 550), 2)
        card6 = round(random.uniform(0.0, 550), 2)
        card7 = round(random.uniform(0.0, 550), 2)
        card8 = round(random.uniform(0.0, 550), 2)
        # for i in range(len(self.data)):
        #     graph1.append({"value": ["%s" % i, self.data[i]]})
        for k in range(self.max_size):
            if k < len(self.data):
                graph1.append({"value": ["2020/10/%s" % (k + 1), self.data[k]]})
                graph2.append({"value": ["2020/10/%s" % (k + 1), math.sin(self.data[k])]})
                graph3.append({"value": ["2020/10/%s" % (k + 1), math.cos(self.data[k])]})
            else:
                graph1.append({"value": ["2020/10/%s" % (k + 1), 0]})
                graph2.append({"value": ["2020/10/%s" % (k + 1), 0]})
                graph3.append({"value": ["2020/10/%s" % (k + 1), 0]})

        value = {
            'graphs': [graph1, graph2, graph3],
            'cards': [card1, card2, card3, card4, card5, card6, card7, card8]
        }

        return value
