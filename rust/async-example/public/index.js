import init, {run} from "/pkg/fetcher.js";

const _async_run = (async () => {
  // Instantiate our wasm module
  const module = await init("/pkg/fetcher_bg.wasm")
  console.log("module",module)
  const x = module.run("xxx")
  console.log("xxxx",x)
  const r = await module.run("prj_js")
  console.log("result:",r)
  const string = JSON.stringify(r)
  
  // Set the result onto the body
  document.getElementById("result").innerText = `Data got: ${string}`;
})


const x = (( ) =>{
  //console.log(run())
  init()
    .then(() => run("prj_js"))
    .then(r => console.log("result as promise:",r))
})

const y = (async ( ) =>{
  //carga el módulo wasm
  const r = await init()
  //ya existe la función run
  const r2 = await run("prj_js")
  console.log("r2", r2)
  const string = JSON.stringify(r2, null, 2)
  console.log("string:", string)
  
  // Set the result onto the body
  document.getElementById("result").innerText = string

})()

console.log("y",y)


/*
const rust = import('../pkg');

rust
  .then(m => {
      return m.run("rustwasm/wasm-bindgen").then((data) => {
          console.log(data);

          console.log("The latest commit to the wasm-bindgen %s branch is:", data.name);
          console.log("%s, authored by %s <%s>", data.commit.sha, data.commit.commit.author.name, data.commit.commit.author.email);
      })
  })
  .catch(console.error);
  */