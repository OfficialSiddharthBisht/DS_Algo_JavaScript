var products={
    product1:{
        nameOfProduct:"Apple I phones",
        ram:"8 GB",
        memory:"256 gb",
        phoneInCart:[],
        phonesInCart:function(phoneName)
        {
            this.phoneInCart.push(phoneName);
        },
        countOfPhonesInCart:function()
        {
            return this.phoneInCart.length; 
        }
    }
}
console.log(products.product1.nameOfProduct);
console.log(`No. of phones in cart = ${products.product1.countOfPhonesInCart()}`);
products.product1.phonesInCart("I phone 7");
console.log(`No. of phones in cart = ${products.product1.countOfPhonesInCart()}`);
