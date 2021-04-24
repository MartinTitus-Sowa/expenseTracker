const exp__name = document.getElementById('exp__name');
const exp__date = document.getElementById('exp__date');
const exp__amount = document.getElementById('exp__amount');
const table__data = document.getElementById('tbody');
const exp__btn = document.getElementById('exp__btn');

// const exp__Amount = [];

function insert__Row() {

    if (exp__name.value === '' || exp__date.value === '' || exp__amount.value === '') {
        alert('Please fill all fields !!');
        return;
    };

    const dat = `
        <td>${exp__name.value.toUpperCase()}</td>
        <td>${exp__date.value}</td>
        <td>$ ${exp__amount.value}.00</td>
        <td><button class='dlt__btn'>Delete</button></td>`;

    const trow = document.createElement('tr');
    trow.classList.add('table__row');
    trow.innerHTML = dat;
    table__data.insertAdjacentElement('beforeend', trow);
    exp__Amount.push(Number(exp__amount.value));
    exp__name.value = '';
    exp__date.value = '';
    exp__amount.value = '';

    console.log(exp__Amount)
    console.log(trow.childNodes[5])
};

function edit__delete__row(e) {
    let dlt_el = e.target.classList.contains('dlt__btn');
    let edt_el = e.target.classList.contains('edt__btn');
    if (dlt_el) {
        e.target.closest('.table__row').remove();
        const cvb = exp__Amount.pop()
    } else if (edt_el) {
        const ttdd = e.target.closest('tr').childNodes;
        console.log(ttdd);
    } else {
        return;
    }

};

exp__btn.addEventListener('click', insert__Row);
table__data.addEventListener('click', edit__delete__row)