- **instalar go**
```
mkdir -p $HOME/go/{bin,src}

export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

. ~/.bash_profile
```
- **compilar para webassembly**
- compile:
```
GOARCH=wasm GOOS=js go build -o main.wasm main.go
```
- GOARCH: Arquitectura 
- GOOS: Sistema operativo
- **-o**: Output

- **ejecutar go el http con go**
- `go run server.go`
