import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularIconExp';

  constructor(private matIcon:MatIconRegistry, private domSan: DomSanitizer){
    this.matIcon.addSvgIcon('sale',this.domSan.bypassSecurityTrustResourceUrl('../assets/sale.svg')
    
    );
    
  }
}
