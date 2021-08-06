package main

import (
    "fmt"
	//"request"
	"syscall/js"
)

var channel chan bool

func printJs(this js.Value, inputs []js.Value) interface{} {
    fmt.Println(inputs[0].String())
    channel <- true
    return this
}

func init() {
    channel = make(chan bool)
}

func main() {
    //interact js from go
    //strproducts := request.FetchProducts()
    //fmt.Println(strproducts)
    //fmt.Println("returning")

    // func main must have no arguments and no return values
    //return strproducts
    js.Global().Set("printJs", js.FuncOf(printJs))
    <-channel
}
