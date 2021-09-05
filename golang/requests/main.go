package main

import (
	"request"
	"syscall/js"
)

var channel chan bool

//tutorial
//https://tutorialedge.net/golang/go-webassembly-tutorial/

func get_products(inputs []js.Value) {
	function := inputs[len(inputs)-1:][0]
	strproducts := request.FetchProducts()
	//fmt.Println(strproducts)
	function.Invoke(js.Null(), strproducts)
}

func main() {
	// main.go no es una libreria es una app compilada, luego la forma de comunicarse con wasm es mediante el canal
	//abre listener de ejecucion
	channel = make(chan bool)

	js.Global().Set("get_products", js.FuncOf(get_products))
	//cierra el canal
	<-channel

	/*
			c := make(chan struct{}, 0)
		    println("WASM Go Initialized")
		    // register functions
		    registerCallbacks()
		    <-c
	*/
}
