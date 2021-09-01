import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
no=''
item=''
amount=''
search=''
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    
  }

additem(){
 var list= this.service.shoplist
 var no=this.no
 var item=this.item
 var amount=this.amount
 if(item in list)
 alert("item already added")
 else{
   list[no]={
     no,
     item,
     amount
     
   }
   alert(" item added sucessfully")
 }
  
}
searchItem(){
  var list=this.service.shoplist
  var searchI =this.search
  var no=this.no
 var item=this.item
 var amount=this.amount
if(searchI==list[no]["item"]){
  alert("item exist")

}
else{
  alert("item not found")
}
}
}
