import scrapy
from urllib.parse import urlparse

# cd .\Back-slinker\
# Set-ExecutionPolicy Unrestricted -Scope Process
# .\venv\Scripts\activate
# cd .\postscrape\
# scrapy commmand : scrapy crawl posts -o data.json


class PostsSpider(scrapy.Spider):
    name = "posts"
    # start_urls = [
    #     "https://nymag.com/strategist/article/best-keyboards.html"
    # ]
    start_urls = [
        "https://www.homegrounds.co"
    ]

    internal_urls = set()
    external_urls = set()

    def parse(self, response):
        yield response.follow(response.url, self.get_all_website_links)

    def get_all_website_links(self, response):
        url = response.url
        domain_name = urlparse(url).netloc

        for href in response.css('a::attr(href)'):
            href = href.get()
            parsed_href = urlparse(href)
            if href in self.internal_urls:
                # already in the set
                continue
            if domain_name not in href:
                if href not in self.external_urls and (parsed_href.netloc == 'geni.us' or parsed_href.netloc == 'www.amazon.com'):
                    self.external_urls.add(href)
                    yield response.follow(href, self.get_product)
                continue
            self.internal_urls.add(href)

        for link in self.internal_urls:
            yield response.follow(link, self.get_all_website_links)

    def get_product(self, response):
        if response.css('div#imgTagWrapperId').css('img::attr(src)').get():
            yield {
                'url': response.url,
                'name': response.css('span#productTitle::text').get().strip(),
                'image': response.css('div#imgTagWrapperId').css('img::attr(src)').get().strip(),
                'reviews': response.css('div.averageStarRatingNumerical').css('span::text').get().strip(),
                'availability': response.css('div#availability').css('span::text').get().strip(),
            }
        else:
            yield {
                'url': response.url,
                'name': response.css('span#productTitle::text').get().strip(),
                'image': response.css('div#img-canvas').css('img::attr(src)').get().strip(),
                'reviews': response.css('div.averageStarRatingNumerical').css('span::text').get().strip(),
                'availability': response.css('div#availability').css('span::text').get().strip(),
            }
