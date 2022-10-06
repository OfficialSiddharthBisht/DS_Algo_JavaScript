// similar to normal function but starts with capital letter (naming conventions)
function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // methods
    this.deposit = (amount)=>{
        this.balance += amount;
    } 
    this.withdrawal = (amount)=>{
        this.balance -= amount;
    }
}

const siddharthAcc = new BankAccount("Siddharth Bisht",5000);
const vishankAcc = new BankAccount("Vishank Bisht");
// console.log(siddharthAcc);
// console.log(vishankAcc);
vishankAcc.deposit(500);
console.log(vishankAcc.balance);