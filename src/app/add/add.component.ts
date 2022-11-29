import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  UserId=""
  Id=""
  Title=""
  Body=""
  readValue=()=>{
    let data={"UserId":this.UserId,"Id":this.Id,"Title":this.Title,"Body":this.Body}
    console.log(data)
  }
}
