use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn get_data() -> String {
  let mut string = String::new();
  string.push_str("xxxx");
  return string;
}

//compilar:
/*
wasm-pack build --target web
*/