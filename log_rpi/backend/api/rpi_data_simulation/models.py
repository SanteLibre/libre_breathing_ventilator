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

        ppeak = round(random.uniform(-99.0, 99), 1)
        peep = round(random.uniform(-99.0, 99), 1)
        pmean = round(random.uniform(-99.0, 99), 1)
        rr = round(random.uniform(6.0, 40), 1)
        o2conc = round(random.uniform(0.0, 100), 1)
        vte = math.ceil(random.uniform(0.0, 1000))
        ie_ratio = f"1:{random.randint(1, 4)}"
        mve = round(random.uniform(0.0, 99), 1)

        # for i in range(len(self.data)):
        #     graph1.append({"value": ["%s" % i, self.data[i]]})
        for k in range(self.max_size):
            if k < len(self.data):
                graph1.append({"value": [k + 1, self.data[k]]})
                graph2.append({"value": [k + 1, math.sin(self.data[k]) + 1]})
                graph3.append({"value": [k + 1, math.cos(self.data[k]) + 1]})
            else:
                graph1.append({"value": [k + 1, 0]})
                graph2.append({"value": [k + 1, 0]})
                graph3.append({"value": [k + 1, 0]})

        value = {
            'graphs': [graph1, graph2, graph3],
            'cards': {
                'ppeak': ppeak,
                'peep': peep,
                'pmean': pmean,
                'rr': rr,
                'o2conc': o2conc,
                'vte': vte,
                'ie_ratio': ie_ratio,
                'mve': mve
            }
        }

        return value
