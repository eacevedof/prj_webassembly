package main

import (
	//"fmt"
	"request"
	"syscall/js"
)

var channel chan bool

//https://tutorialedge.net/golang/go-webassembly-tutorial/

func get_products(this js.Value, inputs []js.Value) interface{} {
	//function := inputs[len(inputs)-1:][0]
	strproducts := request.FetchProducts()
	//function.Invoke(js.Null(), strproducts)
	//fmt.Println(strproducts)
	return js.ValueOf(strproducts)
}

func main() {
	channel = make(chan bool)
	js.Global().Set("get_products", js.FuncOf(get_products))
	<-channel
}
