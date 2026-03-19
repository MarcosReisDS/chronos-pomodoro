self.onmessage = function (event) {
    console.log('WORKER recebeu:', event.data)
}

self.postMessage("é nois");