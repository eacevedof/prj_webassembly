import init from "/pkg/fetcher.js";

const async_run = (async () => {
  // Instantiate our wasm module
  const module = await init("/pkg/fetcher_bg.wasm")
  const r = await module.run("prj_js")
  console.log("result:",r)
  const string = JSON.stringify(r)
  
  // Set the result onto the body
  document.getElementById("result").innerText = `Data got: ${string}`;
})()



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