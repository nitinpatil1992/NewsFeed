package main

import (
	"api/config"
	"net/http"
	"os"
)

var (
	appConfig *config.Config
)

func init() {
	env := os.Getenv("env")
	appConfig = config.LoadConfig(env)
}

func main() {

	http.ListenAndServe(":8081", nil)
}
