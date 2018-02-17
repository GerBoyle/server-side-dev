simpleCart({
			checkout: {
			type: "PayPal",
			email: "you@yours.com"
			},
			
			cartStyle: "table",
			cartColumns: [
			

			/* Picture (same for every product right now) */
				{ view: function( item, column) {
				return "<a class=\"thumbnail pull-left\" href=\"#\"> "
				+"<img class=\"media-object\" src=\"http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png\" "
				+"style=\"width: 72px; height: 72px;\"> </a>";
				}, label: false },
				
			/* Name */
			{ attr: "name", label: "Product" },
			
			/* Quantity */
			{ attr: "quantity" , label: "Qty" } ,
			
			/* Price */
			{ attr: "price" , label: "Price", view: 'currency' } ,
			
			/* Remove */
			{ view: "remove" , text: "Remove" , label: false }
			]
  });	
  
  simpleCart.currency( "EUR" ); // set the currency to Euros