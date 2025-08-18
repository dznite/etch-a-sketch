
for (let i=0; i<16; i++){
    const box = document.createElement('div');
    box.classList.add('boxes');
    box.textContent = 'hello';
    document.querySelector('body').appendChild(box);
}