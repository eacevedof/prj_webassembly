//https://www.aaron-powell.com/posts/2019-02-07-golang-wasm-4-response-to-javascript/
console.log("index.js")
;(async function init() {
  if (!WebAssembly.instantiateStreaming) {
      WebAssembly.instantiateStreaming = async (resp, importObject) => {
          const source = await (await resp).arrayBuffer();
          return await WebAssembly.instantiate(source, importObject);
      };
  }

  const go = new Go();
  let result = await WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject)
  document.getElementById("btn-run").disabled = false;
  go.run(result.instance)
})()

function promise_callbacker(msg) {
  return new Promise((resolve, reject) => {
    callbacker(msg, (err, message) => {
      if (err) {
          reject(err)
          return
      }

      resolve(message)
    })
  })
}


async function on_btnclick() {
  //await go.run(wasminstance)
  const r = await promise_callbacker("rrrrrr")
  console.log(r)
  //debugger;
  //wasminstance = await WebAssembly.instantiate(wasmmodule, go.importObject)
}

