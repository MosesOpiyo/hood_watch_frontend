import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient, private route:Router,private authService:AuthService, private snackBar:MatSnackBar) { }

  getProfile(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}/hood/my_hood`,{'headers':headers})
  }
  allHoods(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}/hood/`,{"headers":headers})
  }

  joinHood(id:number){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.post(`${environment.BASE_URL}/hood/join_hood/${id}`,id,{"headers":headers})

  }


  moveOut(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    this.http.post(`${environment.BASE_URL}/hood/move_out/`,1,{"headers":headers}).subscribe(response => {
      this.snackBar.open("You are now no longer a member of the neighbourhood","See you",{duration:1000})
    })
  }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}/login`,credentials).subscribe(response=>{
      // sessionStorage.setItem('token',response['token'])
      this.authService.authentication(true)
      this.snackBar.open(`Welcome back ${credentials.get('username')}`)
      this.route.navigate(['myhood'])
    },error=>{
      this.snackBar.open(`There was a problem logging you in, please check your credentials and try again.`,"Please",{duration:1000})
    })
  }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}/register`,credentials).subscribe(response=>{
      this.snackBar.open(`Congratulations ${credentials.get('username')}, your account was successfully created.`,"Log in",{duration:3000})
      this.route.navigate([''])
    },error => {
      this.snackBar.open("Im sorry, there was a problem created the account.")
    })
  }

  logout(){
    sessionStorage.removeItem('token')
    this.authService.authentication(false)
  }
  getLocations(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}/hood/locations/`,{"headers":headers})
  }

  getEventTypes(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}/hood/event_types/`,{"headers":headers})
  }

  postOccurence(body:any,pk:any){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
      })
     return this.http.post(`${environment.BASE_URL}/hood/occurence/${pk}`,body,{"headers":headers})
  }

  getEvents(pk:any){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
      })
     return this.http.get(`${environment.BASE_URL}/hood/occurence/${pk}`,{"headers":headers})
  }

  registerBusiness(body:any){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
      })
     this.http.post(`${environment.BASE_URL}/hood/business/`,body,{"headers":headers}).subscribe(response => {
       this.snackBar.open("Congratulations, the business was registered successfully!","Thank you",{duration:3000})
     },error => {
      this.snackBar.open("There was a problem registering your business","Sorry",{duration:3000})
     })
  }

  createHood(hood:any){
    let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
   this.http.post(`${environment.BASE_URL}/hood/`,hood,{"headers":headers}).subscribe(response => {
     this.snackBar.open("Congratulations, the neighbourhood was created successfully!","Thank you",{duration:3000})
     this.route.navigate(['myhood'])
   },error => {
    this.snackBar.open("There was a problem creating a neighbourhood for you, please move out to create a new one!","Thank you",{duration:3000})
    this.route.navigate(['myhood'])
   })
  }

  getBusinesses(pk:any){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
      })
     return this.http.get(`${environment.BASE_URL}/hood/business/${pk}`,{"headers":headers})
  }

  getResidents(pk:any){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
      })
     return this.http.get(`${environment.BASE_URL}/hood/myhood/${pk}`,{"headers":headers})
  }

  searchBusiness(searchTerm:any){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
      })
     return this.http.get(`${environment.BASE_URL}/hood/search/${searchTerm}`,{"headers":headers})
  }
}

  

