package main

import (
	"fmt"
	"request"
	"syscall/js"
)

var channel chan bool

//tutorial
//https://tutorialedge.net/golang/go-webassembly-tutorial/

func get_products() {
	strproducts := request.FetchProducts()
	fmt.Println(strproducts)
	//function.Invoke(js.Null(), strproducts)

}

func add(i []js.Value) {
	js.Global().Set("output", js.ValueOf(i[0].Int()+i[1].Int()))
	println(js.ValueOf(i[0].Int() + i[1].Int()).String())
}

func main() {
	// main.go no es una libreria es una app compilada, luego la forma de comunicarse con wasm es mediante el canal
	//abre listener de ejecucion
	channel = make(chan bool)

	js.Global().Set("get_products", js.Callback(get_products))
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
