package config

import (
	"encoding/json"
	"os"
)

type Config struct {
	Newsapi string
}

func LoadConfig(environment string) *Config {
	file, _ := os.Open(`config/` + environment + `.json`)
	defer file.Close()

	decoder := json.NewDecoder(file)
	config := &Config{}

	err := decoder.Decode(&config)

	if err != nil {
		panic("Failed to read the ")
	}
	return config
}
