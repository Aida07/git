  
   $(document).ready(function(){
    /*Crear un evento click con el id que cuando le de al click se aplicará una función*/
      $('#mostrar').on('click', function(){
          $('#container, #containerForm').fadeIn(1000)
      })
      /*hace que desaparezca ambos containers*/
      $('#container').on('click', function(){
          $('#container, #containerForm').fadeOut(1000)
      })
      });



var myApp = angular.module('myApp', [])


myApp.directive('ngHeaderSection', function() {
  return {
    restrict: 'A',
    templateUrl: 'header.html'
  };
});

myApp.directive('ngFooterSection', function() {
  return {
    restrict: 'A',
    templateUrl: 'footer.html'
  };
});


myApp.controller('carouselController', function ($scope){
  var Item = function (title, image, text, active) {
    this.title = title,
    this.image = image,
    this.text = text,
    this.active = active
  };

  $scope.slides = [
  element1 = new Item ("Promociones", "img/images.jpg", "sjdjshfjkhfdjs", "active"),
  element2 = new Item ("Promociones", "img/images.jpg", "sjdjshfjkhfdjs", " "),
  element3 = new Item ("Promociones", "img/images.jpg", "sjdjshfjkhfdjs", " "),
  element4 = new Item ("Promociones", "img/images.jpg", "sjdjshfjkhfdjs", " ")
  ];

});

myApp.controller('photoController', function($scope) {
  $scope.photos = [{
    name: "img1",
    img: "img/1.jpg",
  },
  {
   name: "img2",
    img: "img/2.jpg",
  },
  {
   name: "img3",
    img: "img/3.jpg",
  },
  {
   name: "img4",
    img: "img/4.jpg",
  },
  {
   name: "img5",
    img: "img/5.jpg",
  },
  {
   name: "img6",
    img: "img/6.jpg",
  },
  {
   name: "img7",
    img: "img/7.jpg",
  },
  {
   name: "img8",
    img: "img/8.jpg",
  },
 
  ]
});