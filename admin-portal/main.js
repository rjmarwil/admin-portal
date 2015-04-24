//Module Pattern
$( document ).ready(function() {
var products = (function() {

  // Private variables and functions
  var template = $("#products-template").html()

  var compile = Handlebars.compile(template);

  var request = function() {
    var getProducts = $.ajax({ url: "http://localhost:3000/api/products"});
    getProducts.done(buildTemplate);
  };

  var buildTemplate = function(data) {
    var html = compile(data);
    $('body').append(html);
  };

  // Public API
  return { request: request };

})();

products.request();

});

//Object Pattern
// var products = {
//  template: function() {
//    return $("#products-template").html()
//  },
//  compile: function() {
//    return Handlebars.compile(this.template());
//  },
//  request: function() {
//    var getProducts = $.ajax({
//        url: "http://localhost:3000/api/products"
//        });
//    getProducts.done(this.buildTemplate);
//
//  },
//  buildTemplate: function(data) {
//    var html = products.compile()(data);
//    $('body').append(html);
//  },
//
//  init: function() {
//    this.request();
//  }
// }
//
// $(function() {
//   products.init();
// });

// var orders = {
//  template: function() {
//    return $("#orders-template").html()
//  },
//  compile: function() {
//    Handlebars.compile(this.template());
//  },
//  request: function() {
//    var getOrders = $.getJSON("http://localhost:3000/api/orders");
//    getOrders.done(this.buildTemplate);
//
//  },
//  buildTemplate: function(data) {
//    var html = compile(data);
//    $('body').append(html);
//  }
// }

  // function productsRequest(){
  //
  //   var source   = $("#products-template").html();
  //   var template = Handlebars.compile(source);
  //
  //   $.ajax({
  //     url:"http://localhost:3000/api/products"
  //   }).done(function(data){
  //     console.log(data);
  //     var products = data;
  //     var html = template(products);
  //
  //     $('body').append(html);
  //
  //   });
  // }
  //
  //   function ordersRequest(){
  //     var source   = $("#orders-template").html();
  //     var template = Handlebars.compile(source);
  //
  //     $.ajax({
  //       url:"http://localhost:3001/api/orders"
  //     }).done(function(data){
  //       console.log(data);
  //       var orders = data;
  //       var html = template(orders);
  //
  //       $('body').append(html);
  //
  //       });
  //   }

    // function productRequest(product_id){
    //   // console.log(window.location.search);
    //
    //   var source   = $("#product-template").html();
    //   var template = Handlebars.compile(source);
    //
    //   $.ajax({
    //     url:"http://localhost:3000/api/products/"+product_id
    //   }).done(function(data){
    //     console.log(data);
    //     var product = data;
    //     var html = template(product);
    //
    //     $('body').append(html);
    //
    //     });
    //
    // }
