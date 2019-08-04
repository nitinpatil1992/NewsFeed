package main

import (
	"encoding/json"
	"encoding/xml"
	"io/ioutil"
	"log"
	"net/http"
)

type GoogleRss struct {
	XMLName   xml.Name `xml:"rss"`
	LinkBlock string   `xml:"link"`
	Style     string   `xml:"style"`
	Channel   Channel  `xml:"channel"`
}

type Channel struct {
	XMLName       xml.Name `xml:"channel"`
	Generator     string   `xml:"generator"`
	Title         string   `xml:"title"`
	ChannelLink   Link     `xml:"link"`
	Language      string   `xml:"language"`
	WebMaster     string   `xml:"webMaster"`
	Copyright     string   `xml:"copyright"`
	LastBuildDate string   `xml:"lastBuildDate"`
	Description   string   `xml:"description"`
	Items         []Item   `xml:"item"`
}

type Link struct {
	XMLName xml.Name `xml:"link"`
}
type Item struct {
	XMLName       xml.Name `xml:"item"`
	Title         string   `xml:"title"`
	ItemLink      string   `xml:"link"`
	Guid          string   `xml:"guid"`
	PublishedDate string   `xml:"pubDate"`
	Description   string   `xml:"description"`
	Source        string   `xml:"source"`
}

type NewsItem struct {
	Title         string
	NewsItemLink  string
	Guide         string
	PublishedDate string
	Descripton    string
	Source        string
}

func GetNews(w http.ResponseWriter, r *http.Request) {
	query, ok := r.URL.Query()["q"]

	if !ok || len(query[0]) < 1 {
		log.Println("Url Param 'key' is missing")
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")

	key := query[0]

	log.Println("Search request for  : " + string(key))

	res, err := http.Get(appConfig.Newsapi + `?q=` + key)

	if err != nil {
		panic("Failed to get response from google news")
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic("Failed to read response obtained from google news")
	}
	var result GoogleRss
	xml.Unmarshal(body, &result)

	var newResult []NewsItem
	for _, item := range result.Channel.Items {
		news := NewsItem{item.Title, item.ItemLink, item.Guid, item.PublishedDate, item.Description, item.Source}
		newResult = append(newResult, news)
	}
	json.NewEncoder(w).Encode(newResult)

}
