# Hur jag byggde och strukturerade min app

* Har skapat min strukturering genom att:
    * Skapat en client-mapp för frontend och en server-mapp för backend.
    * Installerat olika typer av paket(cors, express, nodemon, path, axios)
    * Har en .dockerignore där jag lagt in stora filer såsom node_modules
    * Dockerfile-fil på både frontend- o backend
    * Har skapat en folder som heter *db*, inut den har jag en .js fil på server sidan, därifrån gör jag mina axios get-req ifrån. 
    * dist mapp skapades när jag körde kommandot npm run build.
    * docker-compose.yml lades till vilket låter mig deploya, kombinera och konfigurera olika typer av docker-containers samtidigt, för min frontend och backend.

# Hur jag kör igång både frontend och backend(api och client) 

 * i terminalen kör jag kommandot *docker-compose up --build* vilket bygger, skapar och startar en container för både front- o backend.

 * När jag har kört kommandot ovan, räcker det med att köra kommandot *docker-compose up* när jag vill starta min front- o backend.

 # Hur jag startar igång front- o backend i dev-mode

 * Du är i rooten från första början, därför måste du köra kommandot *cd server* för att komma in i server mappen, därefter måste du köra kommandot *npm run dev* för att i package.json filen har vi ett script som heter *dev* som både startar våran client och server(npm run client \" \" npm run server) som med hjälp utav concourrently kan köra båda kommandot samtidigt

# Vilket molntjänst jag har deploya till, samt vilka kommandon jag körde:

* Heroku - Hur jag deployade min applikation
 * heroku container:login('heroku login' ifall du inte är inloggad på heroku) - du loggar in på heroku med din docker-container
 * heroku create . -den lokala applikationen skickas(pushas) in i heroku applikationen
 * docker tag registry.heroku.com//web - **taggar imagen innan den pushas till heroku
 * docker push registry.heroku.com//web* - pushar imagen till heroku
 * heroku container:release web - släpper imagen till applikationen
 * heroku open - applikationen öppnas i webbläsaren


