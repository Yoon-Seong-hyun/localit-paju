
import json
import requests
from bs4 import BeautifulSoup

def fetch_google_news():
    url = "https://news.google.com/search?q=파주&hl=ko&gl=KR&ceid=KR:ko"
    headers = {"User-Agent": "Mozilla/5.0"}
    resp = requests.get(url, headers=headers)
    soup = BeautifulSoup(resp.text, 'html.parser')
    items = soup.select('article h3 a')

    articles = []
    for a in items[:10]:  # 상위 10개만
        title = a.text.strip()
        link = "https://news.google.com" + a['href'][1:]
        articles.append({"title": title, "link": link})

    with open("news.json", "w", encoding="utf-8") as f:
        json.dump({"articles": articles}, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    fetch_google_news()
