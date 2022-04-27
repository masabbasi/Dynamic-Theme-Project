const btn = document.querySelectorAll('.btn');

btn.forEach(function(item){
    item.addEventListener('click',function(event){
        let myColor = event.target.dataset.color;
        document.documentElement.style.setProperty('--main-color',myColor);
    })
})