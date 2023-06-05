var transactionForm = document.getElementById("transactionForm");
var balanceElement = document.getElementById("balance");

var balance = 0;

function updateBalance() {
    balanceElement.textContent = "$" + balance;
}

function handleTransaction(event) {
    event.preventDefault(); // Prevent form submission

    var amount = parseInt(document.getElementById("amount").value);
    var type = document.getElementById("type").value;

    if (type === "deposit") {
        balance += amount;
    } else if (type === "withdraw") {
        if (amount <= balance) {
            balance -= amount;
        } else {
            alert("Insufficient funds!");
            return;
        }
    }

    updateBalance();

    // Reset the form
    transactionForm.reset();
}

transactionForm.addEventListener("submit", handleTransaction);

updateBalance();
