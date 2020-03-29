class Data:
    def __init__(self):
        self.v = 0
        self.max_v = 88
        self.data = []
        self.max_size = 30
        self.i = 0

    def get_data(self):
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

        transform = []
        for i in range(len(self.data)):
            transform.append(("%s" % i, self.data[i]))
        value = [{"name": "line", "data": transform}]

        return value
