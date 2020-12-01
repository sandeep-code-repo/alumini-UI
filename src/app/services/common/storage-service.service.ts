import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage'
//var CryptoJS = require("crypto-js");

const SECRET_KEY = 'secret_key';
// const SecureStorage = require('secure-web-storage');
@Injectable({
  providedIn: 'root'
})

export class StorageServiceService {

  constructor() { }

  encryptData(data) {

    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    } catch (e) {
      console.log(e);
    }
  }

  decryptData(data) {

    try {
      const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }

}
