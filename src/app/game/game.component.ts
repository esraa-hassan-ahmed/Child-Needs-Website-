import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){

      $(".female").click(function(){
          $(".char").attr("src","../assets/images/games/girl4-02.png");
          $(".splash").css("display","none");
          $(".bg").css("display","block");
      });
  
      $(".male").click(function(){
          $(".splash").css("display","none");
          $(".bg").css("display","block");
      });
  
      var counter=0;
      var score=0;
      $("button").click(function(){
          counter++;
  
          var x =$(this).text();
          setTimeout(function(){
              if(counter==1){
                  if(x == "Egypt")
                  {
                      score++;
  
                  }
                  $(".bg").css("background-image", "url('../assets/images/games/dubi-01.png')");
                  $(".one").html("Dubai");
                  $(".two").html("Paris");
                  }
              else if(counter==2){
                  if(x == "Dubai")
                  {
                      score++;
  
                  }
                  $(".bg").css("background-image", "url('../assets/images/games/usa2-01.png')");
                  $(".one").html("EGYPT");
                  $(".two").html("USA");
              }
              else if(counter==3){
                  if(x == "USA")
                  {
                      score++;
  
                  }
                  $(".bg").css("display","none");
                  $(".end").css("display","block");
                  if(score >=2){
                      $(".win").css("display","block");
                  }
                  else{
                      $(".lose").css("display","block");
  
                  }
              }
          }, 200);
      });
  
  
  
  });
  
  }

}
