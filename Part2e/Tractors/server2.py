from flask import Flask
import requests
from bs4 import BeautifulSoup
app=Flask(__name__);

@app.route('/api/tractor-image/<model>')
def get_tractor_image(model):
    search_url = f"https://www.tractordata.com/lawn-tractors/index.html/search?q={model}&tbm=isch"
    response = requests.get(search_url)
    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    images = soup.find_all("img")
    first_image_url = images[0]['src']
    return first_image_url
    
   

if __name__=="__main__":
   app.run(debug='True')    