compile:
	GOARCH=wasm GOOS=js go build -o main.wasm main.go

copy:
	cp $(go env GOROOT)/misc/wasm/wasm_exec.{html,js} .

serve:
	go run server.go


# ioedu@mbp2014  ~/projects/prj_webassembly/golang/hello-world   main ●  cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .