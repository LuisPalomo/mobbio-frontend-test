require.config({
  baseUrl: '/js',
  paths: {
    "jquery": "../libs/zepto/zepto.min"
  },
  shim: {
    "jquery": {
      exports: "Zepto"
    }
  }
});

require(['modules/shop-cart', 'modules/confirmation'], function(ShopCart, Confirmation) {
  'use strict';

  //options to pass to ShopCart and Confirmation such as class or id selectors
  var shopCartOptions = {},
    confirmationOptions = {};

  ShopCart.init(shopCartOptions);
  Confirmation.init(confirmationOptions);

});
