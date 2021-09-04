package main

import (
	"fmt"
	//"request"
	"syscall/js"
)

var channel chan bool

func callable_from_js(this js.Value, inputs []js.Value) interface{} {
	fmt.Println(inputs[0].String())
	//channel <- true
	return this
}

func callbacker(this js.Value, inputs []js.Value) interface{} {
	function := inputs[len(inputs)-1:][0]
	message := inputs[0].String()

	function.Invoke(js.Null(), "Did you say "+message)
	return this
}

func init() {
	//channel = make(chan bool)
}

func main() {
	channel = make(chan bool)
	//channel := make(chan bool)
	//interact js from go
	//strproducts := request.FetchProducts()
	//fmt.Println(strproducts)
	//fmt.Println("returning")

	// func main must have no arguments and no return values
	//return strproducts
	//js.Global().Set("callable_from_js", js.FuncOf(callable_from_js))
	js.Global().Set("callbacker", js.FuncOf(callbacker))
	<-channel
}
