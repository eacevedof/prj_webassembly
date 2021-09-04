compile-wasm:
	rm -f main.wasm
	GOARCH=wasm GOOS=js go build -o main.wasm main.go

http:
	go run server.go
