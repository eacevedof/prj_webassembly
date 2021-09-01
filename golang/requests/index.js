console.log("index.js")
//polyfill
if (!WebAssembly.instantiateStreaming) {
	console.log("!instantiateStreaming")
	WebAssembly.instantiateStreaming = async (resp, importObject) => {
		const source = await (await resp).arrayBuffer();
		return await WebAssembly.instantiate(source, importObject);
	};
}

//clase dentro de wasm_exec.js
const go = new Go();
let wasmmodule, wasminstance;

WebAssembly
	.instantiateStreaming(fetch("main.wasm"), go.importObject)
	.then( result => {
		wasmmodule = result.module;
		wasminstance = result.instance;
		document.getElementById("btn-run").disabled = false;
		console.log("initiatestreming run ok","wasm-module",wasmmodule, typeof wasmmodule, "wasm-instance",wasminstance, typeof wasminstance)
	})
	.catch( err => {
		console.error(err);
	});
622162792

622152792
async function run() {
	console.log("async run executed")
	const r = await go.run(wasminstance);
	console.log("run.r:", r)
    const msg = await promise_callbacker("xxxxx")
    console.log("MSG:",msg)
	wasminstance = await WebAssembly.instantiate(wasmmodule, go.importObject);
	console.log("run.wasminstance", wasminstance)
}

/*
callbacker('JS calling Go and back again!', (err, message) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("messg:",message);
});
*/

function promise_callbacker(msg) {
    return new Promise((resolve, reject) => {
        callbacker(msg, (err, message) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(message);
        })
    })
}

(async () => {
    //console.log("main async anonym")
    //const r = await go.run(wasminstance);
    //let msg = await promise_callbacker("xxxxx")
    //console.log("MSG:",msg)
})()
