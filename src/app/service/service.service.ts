import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
shoplist:any={
  1:{no:1,item:"pen",amount:20},
  2:{no:2,item:"apple",amount:50},
  3:{no:3,item:"orange",amount:30},
  4:{no:4,item:"shirt",amount:700},
  5:{no:5,item:"scale",amount:5}
}
  constructor() { }
}
