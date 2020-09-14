const CashCashRegister=(cash,price,cid )=>{
  const cashAmount = {
      "fiveCents": 0.05,
      "tenCents": 0.10,
      "twentyCents": 0.20,
      "fiftyCents": 0.50,
      "oneRand": 1.00,
      "twoRand": 2.00,
      "fiveRand": 5.00,
      "tenRand": 10.00,
      "twentyRand": 20.00,
      "fifyRand": 50.00,
      "oneHudrand": 100.00,
     "twoHudrand": 200.00  
}
let cashDrawer = 0;
 for(let value of cid ){
     cashDrawer+= value[1]
 }
 cashDrawer = cashDrawer.toFixed(2)
 let customerChange = cash - price;
 let Change = [];

}