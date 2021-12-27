import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';



import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  

  constructor(private http:HttpClient, private route:Router,private authService:AuthService) { }
    

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
    return this.http.get(`${environment.BASE_URL}/hood/hoods`,{"headers":headers})
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
      alert("you are no longer a member of this hood")
    })
  }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}/users/login`,credentials).subscribe((res:any)=>{
      sessionStorage.setItem('token', res['token'])
      this.authService.authentication(true)
      alert(`Welcome back`)
      this.route.navigate(['hoods'])
    },error=>{
      alert('There was a problem logging you in, please check your credentials and try again.')
      console.log(error)
    })
  }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}/users/register`,credentials).subscribe(response=>{
      alert(`Congratulations ${credentials.get('username')}, your account was successfully created.`)
      this.route.navigate([''])
    },error => {
      alert("Im sorry, there was a problem created the account.")
      console.log(error)
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

  getOccurence(pk:any){
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
       alert("Congratulations, the business was registered successfully!")
     },error => {
      alert("There was a problem registering your business")
     })
  }

  createHood(hood:any){
    for (var pair of hood.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
    let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
   this.http.post(`${environment.BASE_URL}/hood/hoods`,hood,{"headers":headers}).subscribe(response => {
     alert("Congratulations, the neighbourhood was created successfully!")
   },error => {
    alert("There was a problem creating a neighbourhood for you")
    alert(error)
    console.log(error)
    
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

  

