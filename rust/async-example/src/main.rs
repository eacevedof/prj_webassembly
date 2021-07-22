use wasm_bindgen::prelude::*;

fn main() {
  println!("message: {}", ":)");
}

#[wasm_bindgen]
pub fn get_data(url: &str) -> String {
  let mut string = String::new();
  string.push_str("xxxx");
  return string;
}

//compilar:
/*
wasm-pack build --target web
*/