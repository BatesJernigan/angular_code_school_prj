
(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.products = gems;
	})
	var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "assets/images/azurite/azurite-01-thumb.gif",
      "assets/images/azurite/azurite-02-thumb.gif",
      "assets/images/azurite/azurite-03-thumb.gif"
    ]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "assets/images/bloodstone/bloodstone-01-thumb.gif",
      "assets/images/bloodstone/bloodstone-02-thumb.gif",
      "assets/images/bloodstone/bloodstone-03-thumb.gif"
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "assets/images/zircon/zircon-01-thumb.gif",
      "assets/images/zircon/zircon-02-thumb.gif",
      "assets/images/zircon/zircon-03-thumb.gif"
    ]
  }];

  app.controller("PanelController", function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

})();






// soldOut: false

