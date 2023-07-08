import pandas as pd
import requests
import re
from urllib.parse import urlencode

API_KEY = '3f407e40-3ee1-4761-8bce-3bee724899a3'

def get_scrapeops_url(url):
    payload = {'api_key': API_KEY, 'url': url}
    proxy_url = 'https://proxy.scrapeops.io/v1/?' + urlencode(payload)
    return proxy_url

csv_file = 'UsedDataset/Movie.csv'

data = pd.read_csv(csv_file)

data['poster_link'] = ''

for index, row in data.iterrows():
    #Web link
    url = row[6]
    response = requests.get(get_scrapeops_url(url))
    html_content = response.text

    pattern = r'"image":"(https://m\.media-amazon\.com/images/.*?)",'
    poster_links = re.findall(pattern, html_content)

    if poster_links:
        print(poster_links)
        data.at[index, 'poster_link'] = poster_links[0]

data.to_csv('UsedDataset/poster_created.csv')