import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.filan();
    this.bisan();
  }

  filan() {
    $.ajax({
      type: 'GET',
      url: "http://demo2469824.mockable.io/best-restaurants",
      dataType: 'json',
      success: function(data) {
          for (let i = 0; i < 3; i++) {
              var jsonAjaxStr = "";
              jsonAjaxStr += "<div class=\"ratings-items\">" +
              "<img src=\""+data.restaurants[i].imgUrl+"\">" +
              "<p class=\"ratings-name-p\">" + data.restaurants[i].name +"</p>" +
              "<div class=\"ratings-rate\">" +
              "<div class=\"div-line\"></div>" +
              "<div class=\"rating-rate-count\">(" + data.restaurants[i].numOfRates + ")"
              +"</div>";
              var star = data.restaurants[i].rate;
              if(star == 4.5 || star == 3.5 || star == 2.5 || star == 1.5 || star == 0.5) {
                  for (let j = 0; j < 5 - star - 1 ; j++) {
                      jsonAjaxStr += "<span class=\"fa fa-star unchecked\"></span>";
                  }
                  jsonAjaxStr += "<span class=\"fa fa-star-half-alt checked\"></span>";
                  for (let j = 0; j < star - 1 ; j++) {
                      jsonAjaxStr += "<span class=\"fa fa-star checked\"></span>";
                  }
              }
              else {
                  for (let j = 0; j < 5 - star ; j++) {
                      jsonAjaxStr += "<span class=\"fa fa-star unchecked\"></span>";
                  }
                  for (let j = 0; j < star ; j++) {
                      jsonAjaxStr += "<span class=\"fa fa-star checked\"></span>";
                  }
              }
              jsonAjaxStr += "<div class=\"rating-rate-number\">" + star + "</div>" +
                  "<div class=\"div-line\"></div></div>";
              var foods = data.restaurants[i].foods;
              jsonAjaxStr += "<div class=\"ratings-rate\">";
              for (let j = 0; j < foods.legth ; j++) {
                  switch (foods[j]) {
                      case "pizza" :
                          jsonAjaxStr += "پیتزا";
                          break;
                      case "fastfood" :
                          jsonAjaxStr += "فست فود";
                          break;
                      case "sandwich" :
                          jsonAjaxStr += "ساندویچ";
                          break;
                      case "burger" :
                          jsonAjaxStr += "برگر";
                          break;
                  }
                  if(j != foods.legth - 1)
                      jsonAjaxStr += " • ";
              }
              jsonAjaxStr += "</div>" + "<h2 class=\"rating-rate-fade\">" + data.restaurants[i].address + "</h2>" +
                  "<button class=\"rating-button\">شروع سفارش</button></div>";
              $("#ratings-ajax-json").append(jsonAjaxStr);
          }

          for (let i = 0; i < 3; i++) {
              var jsonAjaxStr = "";
              jsonAjaxStr += "<div class=\"best-grid-items\">";
              for(let j = 0; j < 4; j++) {
                  var index = i*4 + j + 3;
                  jsonAjaxStr += "<div class=\"best-grid-item\"><img src=\""
                  + data.restaurants[index].imgUrl + "\">";
                  jsonAjaxStr += "<div>" + data.restaurants[index].name + "</div></div>";
              }
              jsonAjaxStr += "</div>";
              $("#best-grid-ajax-json").append(jsonAjaxStr);
          }
      },
      error: function(jqXHR, textStatus, errorThrown) {
          alert("failed");
          console.log(jqXHR.status);
      }
  });
  }


  bisan () {
    $.ajax({
      type: 'GET',
      url: "http://demo2469824.mockable.io/foods",
      dataType: 'xml',
      success: function(xml) {
          var c = 0;
          var ajaxXML = "";
          $(xml).find('food').each(function() {
              var $food = $(this);
              var count = $food.find('count').text();
              var imgUrl = $food.find('imgUrl').text();
              var name = $food.find('name').text();
              var c_collab = 0;
              // 4 first foods
              if(c < 4) {
                  ajaxXML += "<div class=\"choose-grid-items"+ (c+1) +"\">";
                  ajaxXML += "<div class=\"choose-grid-first-text\">";
                  switch (name) {
                      case "sandwich" :
                          ajaxXML += "ساندویچ";
                          break;
                      case "burger" :
                          ajaxXML += "برگر";
                          break;
                      case "pizza" :
                          ajaxXML += "پیتزا";
                          break;
                      case "kebab" :
                          ajaxXML += "کباب";
                          break;
                  }
                  ajaxXML += "</div><div class=\"choose-grid-second-text\">";
                  ajaxXML += count ;
                  ajaxXML += " رستوران فعال";
                  ajaxXML += "</div></div>";
                  $("#choose-grid-ajax-xml").append(ajaxXML);
                  ajaxXML = "";
              }
              // 8 others food
              else {
                  if((c-4)%8 == 0) {
                      ajaxXML += "<div class=\"food-items-grid\">";
                      c_collab = c-4;
                  }
                  ajaxXML += "<div class=\"food-items\">"
                  switch(name) {
                      case "salad":
                          ajaxXML += "سالاد";
                          break;
                      case "iranian":
                          ajaxXML += "غذای ایرانی";
                          break;
                      case "pasta":
                          ajaxXML += "پاستا";
                          break;
                      case "fish":
                          ajaxXML += "ماهی";
                          break;
                      case "breakfast":
                          ajaxXML += "صبحانه";
                          break;
                      case "juice":
                          ajaxXML += "آبمیوه طبیعی";
                          break;
                      case "steak":
                          ajaxXML += "استیک";
                          break;
                      case "soup":
                          ajaxXML += "سوپ";
                          break;
                  }
                  ajaxXML += "</div>";
                  if( (c-4) - c_collab == 7 ) {
                      ajaxXML += "</div>";
                  }
              }
              c++;
          });
          $("#eight-col-ajax-xml").append(ajaxXML);
          console.log(ajaxXML);
      },
      error: function(jqXHR, textStatus, errorThrown) {
          alert("failed");
          console.log(jqXHR.status);
      }
  });

  }
  ngOnInit() {
  }

}
