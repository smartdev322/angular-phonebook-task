import { Component, OnInit } from '@angular/core';
import { Phonebook } from 'src/app/Phonebook';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

phonebook:Phonebook[];

  constructor(private phonebookService:PhonebookService) { 
    this.phonebook = [];
  }

  ngOnInit(): void {
    this.phonebook = this.getPhonebook();
  }

  getPhonebook():Phonebook[]{
    let phonebook:Phonebook[] = [];
    this.phonebookService.getPhonebook()
        .subscribe( (data) => phonebook = data);
    return phonebook;
}

}
