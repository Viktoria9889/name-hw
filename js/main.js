
const conteiner = document.querySelector('.conteiner > ol')
const btnPush = document.querySelector('.btn_push');
const btnClear = document.querySelector('.btn_clear');
const inputName = document.querySelector('.input_name');
const selectGender = document.querySelector('.select_gender');


let name = "";
let arr = [];

const genderImg = [
    {image: "./img/female.png"},
    {image: "./img/male.jpg"}
]



btnPush.addEventListener('click', () => {
    let name = (inputName.value); 
    console.log(name)


    if (inputName.value === '') {
        return
    } else if (selectGender.value === 'male') {
        arr.push({name: inputName.value, image: genderImg[1].image });
        render();
        
    } else if (selectGender.value === 'female') {
        arr.push({name: inputName.value, image: genderImg[0].image });
        render();
    }
    
})



const render = () => {
 
    const html = arr.map((item)  => {
        htmlChange = `<li class="li">${item.name}<img class="img" src="${item.image}"></li>`
        return htmlChange
    
    })
    console.log(html)
    conteiner.innerHTML = html;
   
}


btnClear.addEventListener('click', () => {
    arr = [];
    conteiner.innerHTML = '';
    
})