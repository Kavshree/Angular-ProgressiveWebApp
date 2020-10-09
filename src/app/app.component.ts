import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _http: HttpClient) {}
  toDo; offline; online; networkStatus;
  
  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe(res => { this.toDo = res; })
    window.addEventListener('online',  this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
  }

  onNetworkStatusChange() {
    this.networkStatus = navigator.onLine ? "online" : "offline";
  }
	
}
