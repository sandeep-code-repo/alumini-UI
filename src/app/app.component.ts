import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  net_status = 'ONLINE';
  isConnected = true;
  public showOverlay = true;
  
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }

  constructor(private router: Router,private connectionService: ConnectionService) {

    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.net_status = "ONLINE";
      }
      else {
        this.net_status = "OFFLINE";
      }
    })

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })

  
  }

    title = 'alumina';
}


