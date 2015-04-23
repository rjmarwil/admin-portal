
  function productsRequest(){

    var source   = $("#products-template").html();
    var template = Handlebars.compile(source);

    $.ajax({
      url:"http://localhost:3001/api/products"
    }).done(function(data){
      console.log(data);
      var products = data;
      var html = template(products);

      $('body').append(html);

    });
  }

    function ordersRequest(){
      var source   = $("#orders-template").html();
      var template = Handlebars.compile(source);

      $.ajax({
        url:"http://localhost:3001/api/orders"
      }).done(function(data){
        console.log(data);
        var orders = data;
        var html = template(orders);

        $('body').append(html);

        });
    }

    function productRequest(product_id){
      // console.log(window.location.search);

      var source   = $("#product-template").html();
      var template = Handlebars.compile(source);

      $.ajax({
        url:"http://localhost:3001/api/products/"+product_id
      }).done(function(data){
        console.log(data);
        var product = data;
        var html = template(product);

        $('body').append(html);

        });

    }
