export class Item {
  constructor(category, description, price) {
    this.category = category;
    this.description = description;
    this.price = price;
  }
}
export class Order{
    constructor(){
      this.items=[]
      this.total= this.getTotal();
      this.taxes= this.getTaxes();
    }
    addItem(item){
      this.items.push(item)
    }
    getTotal(){
      let total=0;
      this.items.map((item)=>{

        total+=item.price;
      })
     return total;
    }
    getTaxes(){
    let products= {cigar:1.25,Beer:1.20,Eletronics:1.30,Water:1}
     let taxes=0;
     this.items.map((item)=>{
      const taxe= products[item.category]
      taxes+=item.price*taxe;
    })
     return taxes;  
    }
}
let compras= new Order();
compras.addItem(new Item("cigar","gift",3));
compras.addItem(new Item("Beer","skol",30));
compras.addItem(new Item("Eletronics","brastemp",3000));

// console.log(compras.items);
console.log({taxes:compras.getTaxes()})
console.log({total:compras.getTotal()})

