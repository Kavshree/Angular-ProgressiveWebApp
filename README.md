# Angular-ProgressiveWebApp

Steps: 
1) Create new angular app
ng new angular-PWA

2) Get inside your application folder and change Angular app into Progressive Web App (PWA) by running:
ng add @angula/pwa

3) PWA has to work in the production build
ng build --prod

3) To run production build in local environment:

(if http-server not installed already, 1st install : npm install -g http-server)

http-server -p <port_num> dist/<app_name> (EX: My application name was angular-PWA and port i used was 4200 : http-server -p 4200 dist/angular-PWA )

=========================================================================


CODE OVERVIEW:

app.component.ts
Sample API data to be cached as used in the component: 
https://jsonplaceholder.typicode.com/todos

To Detect Netowork Change:

ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe(res => { this.toDo = res; })
    window.addEventListener('online',  this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
  }
onNetworkStatusChange() {
  this.networkStatus = navigator.onLine ? "online" : "offline";
}
  
  

ngsw-config.json

"dataGroups": [
    {
      "name": "todos",
      "urls": [
        "https://jsonplaceholder.typicode.com/todos"
      ],
      "cacheConfig": {
        "maxSize": 5,
        "maxAge": "6h",
        "strategy": "freshness"
      }      
    }
  ]
