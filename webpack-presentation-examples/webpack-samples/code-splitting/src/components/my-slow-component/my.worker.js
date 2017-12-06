self.onmessage = async function (event) {
    if (event.data === "gentoo") {
        const list = [];
        for (let i = 0; i < 500000; i++) {
            list.push(i * (i-1))
        }
        self.postMessage(list)
    }
  };