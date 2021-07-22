use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    //llamando funciones de js
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    //función exportable para que se pueda usar en js
    alert(&format!("Hello, {}!", name));
}