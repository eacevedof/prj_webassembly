package main

import (
	"syscall/js"
)

// Add ...
func Add(a, b int) int {
	return a + b
}

func main() {
	c := make(chan struct{}, 0)

	add := func(args []js.Value) {
		go func() {
			js.Global().Set("output", js.ValueOf(Add(args[0].Int(), args[1].Int())))
			close(c)
		}()

	}

	js.Global().Set("add", js.NewCallback(add))

	<-c
}