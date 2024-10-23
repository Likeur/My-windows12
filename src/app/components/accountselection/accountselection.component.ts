import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-accountselection',
  standalone: true,
  imports: [],
  templateUrl: './accountselection.component.html',
  styles: ``
})
export default class AccountselectionComponent {

  public date = new Date().toLocaleTimeString()
  public day = new Date().toDateString() 

  // private updateClock(){
  //   setInterval()
  // }

  private readonly router = inject(Router)


  public displayInput(){
    gsap.to('#accountbox',{
      height:'50vh'
    })
  }
  
  public toCancel(){

    gsap.to('#accountbox',{
      height:'15rem'
    })

  }
  public navigateTo(){
    this.router.navigateByUrl('/home')
  }
}
