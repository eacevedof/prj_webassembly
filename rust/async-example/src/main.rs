use wasm_bindgen::prelude::*;
use std::env;


#[wasm_bindgen]
pub fn get_data(url: &str) -> str {
  return "hola"
}

//compilar:
/*
wasm-pack build --target web
*/