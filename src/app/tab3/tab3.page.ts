import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contactlist  = [
    {id: 1, name: 'Jessa Mae Cabelin', email: 'jessamae.cabelin@evsu.edu.ph',number: '09089145678'},
    {id: 1, name: 'Coren Reboso', email: 'rebosocoren12@gmail.com',number: '09563490234'},
    {id: 1, name: 'Alex Brother', email: 'cunaalex@gmail.com',number: '09666755484'},
  ]

}