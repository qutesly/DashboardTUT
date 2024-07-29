
const themeToggler = document.querySelector('.right-theme');
const menuElement = document.querySelector('.hamburger');
const asideElement = document.querySelector('.aside');
const closeMenu = document.querySelector('.close-btn');

themeToggler.addEventListener("click", toggleTheme);

function toggleTheme() {
    document.body.classList.toggle('dark-theme-variables');


    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
}




orders.forEach(order => {
    const tr = document.createElement("tr");
    const trContent = ` 
                  <td>${order.productName}</td>
                  <td>${order.productNumber}</td>
                  <td>${order.payment}</td>
                  <td class="${order.status === 'Declined' ? 'danger' : order.status === 'pending' ? 'warning' : 'primary' }">${order.status}
                  </td>
                  <td class="primary">Details</td>
     `;
     tr.innerHTML = trContent;
     document.querySelector('table tbody').appendChild(tr);
});



menuElement.addEventListener('click', openMenu);

function openMenu() {
    asideElement.classList.add('active');
}

closeMenu.addEventListener('click', ()=> {
    asideElement.classList.remove('active');
})


