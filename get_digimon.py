# Downloads digimon information using the Digimon API created by Shadow Smith
# at https://digimon-api.vercel.app/
import requests

def download_image(url, file_name):
    response = requests.get(url)
    with open(file_name, 'wb+') as f:
        f.write(response.content)

digimon = requests.get('https://digimon-api.vercel.app/api/digimon/').json()


for d in digimon:
    download_image(d['img'], d['name'] + '.jpg')
