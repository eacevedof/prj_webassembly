package request

import (
   "io/ioutil"
   "log"
   "net/http"
)

func FetchProducts() string {
    resp, err := http.Get("https://json.theframework.es/index.php?getfile=app_product.json")
    if err != nil {
       log.Fatalln(err)
    }

    //We Read the response body on the line below.
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
      log.Fatalln(err)
    }

    //Convert the body to type string
    sb := string(body)
    log.Printf(sb)
    return sb
}