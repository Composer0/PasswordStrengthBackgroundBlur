const background = document.querySelector('.background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - (length * 2);
    background.style.filter = `blur(${blurValue}px)`
    console.log(30 - (length*2))
})

//target goes directly after password because it is inside of its block. That is why input.length can be measured. I wrote blurValue to include a parentheses to assist folks who sometimes forget their order of operations. Manipulating CSS is still awkward for me but I am getting the hang of how it is supposed to work. The $ sign is helping me sync up what I know with Sass and how it is being used in JavaScript. Both instances are used to transfer a property across pages.