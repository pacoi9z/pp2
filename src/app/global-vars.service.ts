import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

  linkToPHP = "http://127.0.0.1/__API_KIDS";
  constructor() { }
}
