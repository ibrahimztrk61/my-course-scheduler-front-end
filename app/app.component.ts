import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  /*app componentinin kullanılacağı yeri belirler. Html de burası çağrılır.*/
  templateUrl: './app.component.html',  /* burada app app-root çağrıldığında aslında html ve css dosyaları çalıştırılır.*/
  styleUrls: ['./app.component.css']
})
export class AppComponent { /* veri tabanından alınan componentler burada olmalı.*/
  title = 'introAngular'; /* html sayfasındaki çift tırnak arasına yazılarak çağrılır.*/
  deneme ='nasılsın';
}
