compile:
	GOARCH=wasm GOOS=js go build -o test.wasm main.go

copy:
	cp $(go env GOROOT)/misc/wasm/wasm_exec.{html,js} .

serve:
	go run server.go