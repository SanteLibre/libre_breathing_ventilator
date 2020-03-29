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

        # transform = []
        # for i in range(len(self.data)):
        #     transform.append(("%s" % i, self.data[i]))
        # value = [{"name": "line", "data": transform}]
        transform = []
        # for i in range(len(self.data)):
        #     transform.append({"value": ["%s" % i, self.data[i]]})
        for k in range(self.max_size):
            if k < len(self.data):
                transform.append({"value": ["2020/10/%s" % (k + 1), self.data[k]]})
            else:
                transform.append({"value": ["2020/10/%s" % (k + 1), 0]})

        value = [transform]

        return value
