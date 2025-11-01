# **Облачное хранилище mcloud**

## **Серверная часть приложения (бэкенд)**

### **1. Структура Бэкенд (Django)**

📁 `backend/` – корневая папка бэкенда  
&nbsp;&nbsp;&nbsp;&nbsp;📁 **`api/`** – приложение  
&nbsp;&nbsp;&nbsp;&nbsp;📁 **`backend/`** – основная конфигурация Django  
&nbsp;&nbsp;&nbsp;&nbsp;📁 **`media/`** – папка для загруженных пользователями файлов  

📄 `manage.py` – точка входа для управления Django-проектом  
📄 `requirements.txt` – список зависимостей Python  
📄 `README.md` – документация по установке и запуску  

---

### **2. Развёртывание проекта локально**

1. Открываем папку `mcloud_v2` в любой IDE и запускаем встроенный терминал

2. Переходим в папку `backend`:

   ```bash
   cd backend
   ```

3. Создаём виртуальное окружение:

   ```bash
   python -m venv venv
   ```
   на macOS
    ```bash
    python3 -m venv venv
    ```

4. Активируем его:

   ```bash
   .\venv\Scripts\activate
   ```
   на macOS
    ```bash
   source venv/bin/activate
   ```

5. Устанавливаем зависимости:

   ```bash
   pip install -r requirements.txt
   ```

6. В папке `backend` создаём файл `.env` в соответствии с шаблоном:

      ```plaintext
      # Настройки Django
      SECRET_KEY=*******  
   # можно сгенерировать на сайте https://djecrety.ir или с помощью терминала python: >>> import secrets >>> print(secrets.token_urlsafe(50))
      DEBUG= #False or True
      ALLOWED_HOSTS= #например через запятую: localhost,127.0.0.1,<ИМЯ ДОМЕНА ИЛИ IP АДРЕС СЕРВЕРА>

      # Настройки базы данных
      DATABASE_HOST=localhost
      DATABASE_PORT=5432
      DATABASE_NAME=your_db
      DATABASE_USER=user
      DATABASE_PASSWORD=password
      ```

7. Создаём базу данных:

   База данных настраивается в **PostgresSQL**, а данные соединения хранятся в файле **`.env`**.

   ```bash
   createdb -U <DB_USER> <DB_NAME>
   ```

8. Применяем миграции:

   ```bash
   python manage.py migrate
   ```

9. Создаём суперпользователя для доступа к Административному интерфейсу:

   ```bash
   python manage.py createsuperuser
   ```

10. Запускаем сервер:

    ```bash
    python manage.py runserver
    ```

После этого по ссылке [127.0.0.1:8000](http://127.0.0.1:8000/admin/) будет доступно страница: Django administration. Суперпользователь позволят входить как в "Django administration", так и в "Административный интерфейс" после входа.