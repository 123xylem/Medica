# Medica

## Summary of the latest meta studies of scientific research

Quickly view the summaries of research on any given topic

## How it works

Scrapes medical publishers abstracts/conclusions for meta studies on given keywords
Presents it back in ui as article excerpts (article counts) (keyword map)
Performs 2nd query to ai model to summarise all articles
Presents summary

## Blog

It performs weekly scan of google trends medical research and searches the meta on those keywords
These results are stored as blog pages (weekly)
Also common keywords (searched > 5) are stored as blog pages (and cached)

## Stack

### Frontend

- Next.js

### APIs

     - Entrez api (data)
     - Open APi or hugging face(summary model)

### DB

     - SQL
