// const content =document.querySelector('p');

// console.log(content.classList);

// content.classList.add('add_on');//加class
// console.log(content.classList);

// content.classList.remove('add_on');//删class
// console.log(content.classList);

const content =document.querySelectorAll('p');//'p'属性 '.error'class

content.forEach(p=>{
  if(p.textContent.includes('orange')){//如果原文有orange
    p.classList.add('Lux');//加class = Lux 可以上色和格式
  }
  if(p.innerText.includes('Hololive')){
    p.classList.add('error');
  }
});

const head =document.querySelector('.head');

head.classList.toggle('head_two');//.classList.toggle 切換class
// head.classList.toggle('head_two');//回到原來