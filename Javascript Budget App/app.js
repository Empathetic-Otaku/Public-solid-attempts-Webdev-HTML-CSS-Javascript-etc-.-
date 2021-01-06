class UI{ //classes store data to be used. This is the data ofHTML elements needed.
    constructor(id){
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.expenseFeedback = document.querySelector(".expense-feedback");
        this.budgetForm = document.getElementById("budget-form");
        this.budgetInput = document.getElementById("budget-input");
        this.budgetAmount = document.getElementById("budget-amount");
        this.expenseAmount = document.getElementById("expense-amount");
        this.balance = document.getElementById("balance");
        this.balanceAmount = document.getElementById("balance-amount");
        this.expenseForm = document.getElementById("expense-form");
        this.expenseInput = document.getElementById("expense-input");
        this.amountInput = document.getElementById("amount-input");
        this.expenseList = document.getElementById("expense-list");
        this.itemList = [];
        this.itemID = 0;
    }

    //submit budget method
    submitBudgetForm(){
        const value = this.budgetInput.value;
        if(value === " " || value < 0){
            this.budgetFeedback.classList.add("showItem");
            this.budgetFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;
        
        //added constant "self" because is not in global variables but in specific function.
        const self = this;
        setTimeout(function (){
            self.budgetFeedback.classList.remove("showItem");
            }, 4000);
        }
        else{
            this.budgetAmount.textContent = value;
            this.budgetInput.value = " ";
            this.showBalance();
        }
    }
    //creating another method in function that shows balance
    showBalance(){
        //to show balance we need to calculate the expense
        const expense = this.totalExpense();
        const total = parseInt(this.budgetAmount.textContent) - expense;
        //now we put what we got from the calculation into the balance
        this.balanceAmount.textContent = total;
        if (total < 0){
            this.balance.classList.remove("showPink");
            this.balance.classList.add("showRed");
        }
        else if (total > 0){
            this.balance.classList.remove("showRed");
            this.balance.classList.add("showPink");
        }
        else if (total === 0){
            this.balance.classList.remove("showRed", "showPink");
            this.balance.classList.add("showDark");
        }
    }

    //submit expense form
    submitExpenseForm(){
        const expenseValue = this.expenseInput.value;
        const amountValue = this.amountInput.value;

        if(expenseValue === "" || amountValue === "" || amountValue < 0){
            this.expenseFeedback.classList.add("showItem");
            this.expenseFeedback.innerHTML = `<p>values cannot be empty or negative</p>`;
            const self = this;
            setTimeout(function(){
                self.expenseFeedback.classList.remove("showItem");
            }, 4000);
        }
        else {
            let amount = parseInt(amountValue);
            this.expenseInput.value = "";
            this.amountInput.value = "";

            //creating object to pass into "itemList" for control and simplicity.
            let expense = {
                id:this.itemID,
                title:expenseValue,
                amount:amount,
            }
            this.itemID++; //makes sure all items we add have their own unique ID.
            this.itemList.push(expense);
            this.addExpense(expense);
            this.showBalance();

            
        }
    }

    //adds expense (this will be method that expects to have an object).
    addExpense(expense){
        const div = document.createElement("div");
        div.classList.add("expense");
        div.innerHTML = `
            <div class="expense-item d-flex justify-content-between align-items-baseline">

               <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
               <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
      
               <div class="expense-icons list-item">
      
                <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
                 <i class="fas fa-edit"></i>
                </a>
                <a href="#" class="delete-icon" data-id="${expense.id}">
                 <i class="fas fa-trash"></i>
                </a>
               </div>
              </div> `;
    this.expenseList.appendChild(div);
    }
    //total expense
    totalExpense(){
        let total = 0;
        //now check item list to see if there somehting toc alculate to balance

        if(this.itemList.length > 0){
            total = this.itemList.reduce(function(acc, curr){
                console.log(`total is ${acc} and the current value is ${curr.amount}`);
                acc += curr.amount;
                return acc;
            }, 0)
        }

        this.expenseAmount.textContent = total;
        return total;
    }

    //methods for the itemlist delete and edit functionality
    editExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        
        //remove from dom
        this.expenseList.removeChild(parent);

        //remove from the List
        let expense = this.itemList.filter(function(item){
            return item.id === id;
        })
        //Gives value back with title when edit button is pressed.
        this.expenseInput.value = expense[0].title;
        this.amountInput.value = expense[0].amount;

        //remove item from the list
        let tempList = this.itemList.filter(function(item){
            return item.id !== id;
        })
        //reassigns the list to not include thing we chose to edit.
        this.itemList == tempList;
        this.showBalance()
    }

    deleteExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        
        //remove from dom
        this.expenseList.removeChild(parent);

        //remove item from the list
        let tempList = this.itemList.filter(function(item){
            return item.id !== id;
        })
        //reassigns the list we had to not include the thing we chose to remove.
        this.itemList == tempList;
        this.showBalance()
    }
}

function eventListener(){
    const budgetForm = document.getElementById("budget-form");
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    //new instance of UI CLASS
    const ui = new UI();

    //Budget form submit
    budgetForm.addEventListener("submit", function(event){
        event.preventDefault();
        ui.submitBudgetForm();
    });

    //expense form submit
    expenseForm.addEventListener("submit", function(event){
        event.preventDefault();
        ui.submitExpenseForm();

    });

    //expense List Click (because we looking for a cick)
    expenseList.addEventListener("click", function(event){
        if(event.target.parentElement.classList.contains("edit-icon")){
            ui.editExpense(event.target.parentElement)
        }
        else if (event.target.parentElement.classList.contains("delete-icon")){
            ui.deleteExpense(event.target.parentElement)
        }
    });
}


document.addEventListener("DOMContentLoaded", function(){
    eventListener();
});