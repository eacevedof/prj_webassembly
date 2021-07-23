compile:
	GOARCH=wasm GOOS=js go build -o main.wasm main.go

copy:
	cp /usr/local/Cellar/go/1.16.6/libexec/misc/wasm/wasm_exec.{html,js} .

serve:
	go run server.go


# go env GOROOT = /usr/local/Cellar/go/1.16.6/libexec
# /usr/local/Cellar/go/1.16.6/libexec/misc/wasm