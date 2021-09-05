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

function promise_callbacker() {
  return new Promise((resolve, reject) => {
    get_products(null, (err, message) => {
      if (err) {
          reject(err)
          return
      }

      resolve(message)
    })
  })
}

async function on_btnclick() {
  const r = await promise_callbacker()
  console.log("on_btnclick:",r)
}

