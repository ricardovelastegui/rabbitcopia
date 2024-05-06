import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  signupUsers :any[] = [];
  signupObj:any = {
    username: '',
    password: '',
    role: ''
  };
  loginObj: any = {
    username: '',
    password: ''
  };
  
  constructor(private router: Router){}
  ngOnInit(): void {
    const localdata = localStorage.getItem('signupUsers');
    if(localdata != null){
      this.signupUsers = JSON.parse(localdata);
    }
      
  }

  onSignUp(){

    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      username:'',
      password:'',
      role:''
    };

  }

  onLogin(){
    const isUserExist = this.signupUsers.find( m => m.username == this.loginObj.username && m.password == this.loginObj.password);
    if ( isUserExist != undefined ){
      alert('login succes');
      this.router.navigate(['/dashboard']);
    } else {
      alert('wrong credentials');
    }
  }


}



  
  // form: FormGroup;
  // loading= false;
  // users: any[];
  // loggedInUser: any;
  // username: string = '';
  // password: string = '';
  

  // private users = [
  //   { id: 1, username: 'user1', password: 'password1', role: 'admin' },
  //   { id: 2, username: 'user2', password: 'password2', role: 'user' },
  //   { id: 3, username: 'user3', password: 'password3', role: 'user' },
  //   { id: 4, username: 'user4', password: 'password4', role: 'user' },
  //   { id: 5, username: 'user5', password: 'password5', role: 'admin' }
  // ];
  

  // constructor(private fb: FormBuilder, private usuariosService: UsuariosService, private router: Router, private _snackBar: MatSnackBar) {
  //   this.form = this.fb.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //     role: ['', Validators.required]

  //   })
  
  // ngOnInit(): void {
  //     // this.usuariosService.getUsers().subscribe(users => {
  //     //   this.users = users;
  //     // });
  // }

  // ingresar(){
  //   const username = this.form.value.username;
  //   const password = this.form.value.password;
  //   const role = this.form.value.role;

  //   if(username == 'jperez' && password== 'abc123' && role == 'administrador'){
  //     this.fakeloading();
  //   }else{
  //     this.error();
  //     this.form.reset();
  //   }
  // }

  // ingresar(){
  //   const username = this.form.value.username;
  //   const password = this.form.value.password;
  //   this.usuariosService.login(this.form.value.username,this.form.value.password).subscribe((isValid) => {
  //     // this.loggedInUser = user;
  //     if (isValid) {
  //       // this.loggedInUser = user;
  //       // console.log(this.loggedInUser);
  //       this.fakeloading();
  //     } else {
  //       this.error();
  //       this.form.reset();
  //     }
  //   });
  // }
  //-----------------------------------------------------------------------------------------------------------------------------------------
  // ingresar(username: string, password: string){

  //   const user = this.users.find(u => u.username === username && u.password === password);
  //   if (user) {
  //     // Redirect to dashboard or do something else
  //     console.log('Logged in as', user.username);
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     alert('Usuario o contraseña incorrectos');
  //   }

  // }

  // error(){
  //   this._snackBar.open('usuario o contraseña incorrectos', '', {
  //     duration: 3000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'bottom',
  //   })
  // }

  // fakeloading(){
  //   this.loading = true;
  //   setTimeout( () => {
  //     this.router.navigate(['/dashboard']);
  //   }, 1500);
  // }


