console.log("index.js")
//polyfill
if (!WebAssembly.instantiateStreaming) {
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
	.then((result) => {
		wasmmodule = result.module;
		wasminstance = result.instance;
		document.getElementById("btn-run").disabled = false;
		console.log("initiatestreming run ok","wasm-module",wasmmodule, typeof wasmmodule, "wasm-instance",wasminstance, typeof wasminstance)
	})
	.catch((err) => {
		console.error(err);
	});

async function run() {
	console.log("async run executed")
	r = await go.run(wasminstance);
	console.log("run.r:", r)
	wasminstance = await WebAssembly.instantiate(wasmmodule, go.importObject);
	console.log("run.wasminstance", wasminstance)
}
