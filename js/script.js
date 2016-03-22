document.addEventListener("DOMContentLoaded",function(){
console.log('dziala');

// bxslider
$('#sliderMain').bxSlider({
  auto: true,
  autoControls: true
});

//bx gallery
$('#gallerySlider').bxSlider({
  pagerCustom: '#bx-pager'
});

});
