## Облачное хранилище mcloud


1. Инструкции по настройке [backend!](./backend/README.md)
2. Инструкции по настройке [frontend!](./frontend/mcloud/README.md)



Доп надстройки:
1. В файле [settings](/backend/backend/settings.py) в параметр ALLOWED_HOSTS вносим IP сервера, например: ["79.174.91.225"]
2. В файле [api.ts](/frontend/mcloud/src/api/api.ts) поменять параметр BASE_URL в зависимости от вашего сервера. У меня на сервере будет: export const BASE_URL = 'http://79.174.91.225:80/api';