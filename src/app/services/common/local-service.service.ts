import { Injectable } from '@angular/core';
import { StorageServiceService } from './storage-service.service';


@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor(private storageService: StorageServiceService) { }

  // Set the json data to local storage
setJsonValue(key: string, value: any) {
 localStorage.setItem(key, this.storageService.encryptData(value));

}
// Get the json value from local storage
getJsonValue(key: string) {
  return this.storageService.decryptData(localStorage.getItem(key));
}
// Clear the local storage
clearToken() {
 // return this.storageService.secureStorage.clear();
}
}
