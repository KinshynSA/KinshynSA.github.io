"use strict";

var blockArr = document.querySelectorAll('.main-block');

window.onscroll = function(){

  blockArr.forEach(function(item,i,arr){
    if (item.getBoundingClientRect().bottom - window.innerHeight <=0){
      if (!item.classList.contains('active')) item.classList.add('active');
    };
  });
};