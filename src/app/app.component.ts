import { Component } from '@angular/core';
import { GetPhotoService } from './get-photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchTerm: string = ''
  fotoUrl: any = ''
  numberOfImage: string = '15'
  class: boolean = false
  emptyArray: boolean = false


  constructor(private photoService: GetPhotoService ){
  }

  // Submit Form
  onFormSumbit(event: Event){
    event.preventDefault()
    this.searchTerm = this.searchTerm.toLowerCase()

    if(this.searchTerm){
      this.photoService.getPhoto(this.searchTerm, this.numberOfImage).subscribe((response)=>{
          this.fotoUrl = response.results
          console.log(response)

          if(this.fotoUrl.length == 0){
            this.emptyArray = true
          }
        })
    }

    this.class = true
  }
 
  // Change number of Picture
  numOfPic(event: string){
    this.numberOfImage = event

    if(this.searchTerm){
      this.photoService.getPhoto(this.searchTerm, this.numberOfImage).subscribe((response)=>{
          this.fotoUrl = response.results
        })
    }
  }

  typeSearchTerm(event: string){
    console.log(event)
    this.searchTerm = event

    if(!this.searchTerm){
      this.class = false
      this.fotoUrl = []
      this.emptyArray = false
    }
  }

}
