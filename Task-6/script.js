let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const totalDisplay = document.getElementById('total');

function renderList() {
    list.innerHTML = '';
    let total = 0;

    transactions.forEach((t, index) => {
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="${t.type}">${t.type === 'income' ? '+' : '-'}${t.amount} جنيه</span>
        <button onclick="deleteTransaction(${index})">حذف</button>
    `;
    list.appendChild(li);
    total += t.type === 'income' ? t.amount : -t.amount;
    });

    totalDisplay.textContent = total;
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    renderList();
}

addBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const type = typeInput.value;

    if (!amount || amount <= 0) {
    alert("أدخل مبلغ صحيح");
    return;
    }

    transactions.push({ amount, type });
    amountInput.value = '';
    renderList();
});

renderList();