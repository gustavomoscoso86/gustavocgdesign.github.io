(function(){

    const sliders = [...document. querySelectorAll('.testimony_body')];
    const buttonNEXT = document.querySelector('#next');
    const buttonBEFORE = document.querySelector('#before');
    let Value;

    buttonNEXT.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBEFORE.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        Value = Number(currentTestimony);
        Value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
        if(Value === sliders.length+1 || Value === 0){
            Value = Value === 0 ? sliders.length : 1;
        }

        sliders[Value-1].classList.add('testimony_body--show')


    }

})();