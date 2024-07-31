let header = document.querySelector('#header')
let body = document.querySelector('body')
let logo1 = document.querySelector('#logo1')
let linkedinIcon = document.querySelector('#linkedin')
let linkedinCircle = document.querySelector('#linkedinCircle')
// let linkedinPopup = document.querySelector('#linkedinPopup')
let instagramIcon = document.querySelector('#instagram')
let instagramCircle = document.querySelector('#instagramCircle')
// let instagramPopup = document.querySelector('#instagramPopup')
let twitterIcon = document.querySelector('#twitter')
let twitterCircle = document.querySelector('#twitterCircle')

let podcast = document.querySelector('#podcast')
let japan = document.querySelector('#japan')
let westStreet = document.querySelector('#westStreet')
let exploreMore = document.querySelector('#exploreMore')
let careersAtGoldman1 = document.querySelector('#careersAtGoldman1')
let careersAtGoldman2 = document.querySelector('#careersAtGoldman2')

window.addEventListener( 'scroll', ()=>{

    let scrollTop = window.scrollY;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;//total height of website - total height of viewport screen 
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    if(window.scrollY>0)
    {
        header.classList.add('shadow-xl')
        header.classList.replace('h-20', 'h-16')
        header.classList.replace('md:h-24', 'md:h-20')
        logo1.classList.replace('md:h-24', 'md:h-20')
    }

    if(window.scrollY == 0)
    {
        header.classList.remove('shadow-xl')
        header.classList.replace('h-16', 'h-20')
        header.classList.replace('md:h-20', 'md:h-24')
        logo1.classList.replace('md:h-20', 'md:h-24')
    }
    if(scrollPercentage >= 28)
    {
        podcast.classList.add('opacity-100')
    }
    if(scrollPercentage >= 40)
    {
        japan.classList.add('opacity-100')
    }
    if(scrollPercentage >= 55)
    {
        westStreet.classList.add('opacity-100')
    }
    if(scrollPercentage >= 65)
    {
        exploreMore.classList.add('opacity-100')
    }
    if(scrollPercentage >= 77)
    {
        careersAtGoldman1.classList.add('opacity-100')
        careersAtGoldman2.classList.add('opacity-100')
    }
    
})

// linkedin popup handling
let linkedinIconSelection = true
linkedinIcon.addEventListener('click', ()=>{
    if( linkedinIconSelection )
    {
        linkedinIcon.classList.add('bg-cyan-500')
        linkedinIcon.classList.replace('social-media-arrows','social-media-arrows-selected')
        linkedinPopup.classList.replace('hidden', 'visible')
        linkedinCircle.classList.replace('bg-gray-400', 'bg-white')
        linkedinCircle.classList.replace('text-white', 'text-cyan-500')
        linkedinIconSelection = false
    }
    else
        linkedinIcon.blur();
})
linkedinIcon.addEventListener('blur', ()=>{
    linkedinIcon.classList.remove('bg-cyan-500')
    linkedinIcon.classList.replace('social-media-arrows-selected','social-media-arrows')
    linkedinPopup.classList.replace('visible', 'hidden')
    linkedinCircle.classList.replace('bg-white', 'bg-gray-400')
    linkedinCircle.classList.replace('text-cyan-500', 'text-white')
    linkedinIconSelection = true
})

// instagram popup handling
let instagramIconSelection = true
instagramIcon.addEventListener('click', ()=>{
    if( instagramIconSelection )
    {
        instagramIcon.classList.add('bg-cyan-500')
        instagramIcon.classList.replace('social-media-arrows','social-media-arrows-selected')
        instagramPopup.classList.replace('hidden', 'visible')
        instagramCircle.classList.replace('bg-gray-400', 'bg-white')
        instagramCircle.classList.replace('text-white', 'text-cyan-500')
        instagramIconSelection = false
    }
    else
        instagramIcon.blur();
})
instagramIcon.addEventListener('blur', ()=>{
    instagramIcon.classList.remove('bg-cyan-500')
    instagramIcon.classList.replace('social-media-arrows-selected','social-media-arrows')
    instagramPopup.classList.replace('visible', 'hidden')
    instagramCircle.classList.replace('bg-white', 'bg-gray-400')
    instagramCircle.classList.replace('text-cyan-500', 'text-white')
    instagramIconSelection = true
})

// twitter popup handling
let twitterIconSelection = true
twitterIcon.addEventListener('click', ()=>{
    if( twitterIconSelection )
    {
        twitterIcon.classList.add('bg-cyan-500')
        twitterIcon.classList.replace('social-media-arrows','social-media-arrows-selected')
        twitterPopup.classList.replace('hidden', 'visible')
        twitterCircle.classList.replace('bg-gray-400', 'bg-white')
        twitterCircle.classList.replace('text-white', 'text-cyan-500')
        twitterIconSelection = false
    }
    else
        twitterIcon.blur();
})
twitterIcon.addEventListener('blur', ()=>{
    twitterIcon.classList.remove('bg-cyan-500')
    twitterIcon.classList.replace('social-media-arrows-selected','social-media-arrows')
    twitterPopup.classList.replace('visible', 'hidden')
    twitterCircle.classList.replace('bg-white', 'bg-gray-400')
    twitterCircle.classList.replace('text-cyan-500', 'text-white')
    twitterIconSelection = true
})

//handling button with arrows
let selected = [false, false]
let btnWithArrow = document.querySelectorAll('.btn-with-arrow')
let informationArticle = document.querySelector('#informationArticle')
let corporation = document.querySelector('#corporateList')
let individual = document.querySelector('#individualsList')
btnWithArrow.forEach( (btn, index) =>{
    btn.addEventListener('click', ()=>{
        if( selected[index] == false )
        {
            btn.classList.replace('btn-with-arrow', 'btn-with-arrow-selected')
            btnWithArrow[Number(!index)].classList.replace('btn-with-arrow-selected', 'btn-with-arrow')
            selected[index] = true
            selected[Number(!index)] = false
            informationArticle.classList.replace('visible','hidden')
            if( !index )
            {
                corporation.classList.replace('hidden', 'grid')
                individual.classList.replace('grid', 'hidden')
            }
            else
            {
                corporation.classList.replace('grid', 'hidden')
                individual.classList.replace('hidden', 'grid')
            }
        }
        else
        {
            btn.classList.replace('btn-with-arrow-selected', 'btn-with-arrow')
            selected[index] = false
            informationArticle.classList.replace('hidden', 'visible')
            if( !index )
            {
                corporation.classList.replace('grid', 'hidden')
            }
            else
                individual.classList.replace('grid', 'hidden')
        }
    })
})

//handing user entered email
let inputMail = document.querySelector('#inputMail')
let enterMail = document.querySelector('#enterMail')
let emailInputErrorMessage = document.querySelector('#emailInputErrorMessage')
let inputMailContainer = document.querySelector('#inputMailContainer')
let successEmailInput = document.querySelector('#successEmailInput')

let enteredMail = ()=>{
        if(inputMail.value && inputMail.value.endsWith('.com') && inputMail.value.includes('@'))
        {
            inputMailContainer.classList.replace('visible', 'hidden')
            inputMailContainer.classList.remove('flex')
            successEmailInput.classList.replace('hidden', 'visible')
        }
        else
        {
            inputMail.classList.replace('border-b-1', 'border-b-1error')
            enterMail.classList.replace('border-b-1', 'border-b-1error')
            enterMail.classList.replace('bg-sky-600', 'bg-red-200')
            enterMail.classList.remove('hover:bg-sky-400')
            emailInputErrorMessage.classList.replace('hidden', 'visible')
        }    
}

inputMail.addEventListener( 'focus', ()=>{
    inputMail.classList.add('hide-placeholder')
    // if previously incorrect email was entered
    inputMail.classList.replace('border-b-1error', 'border-b-1')
    enterMail.classList.replace('border-b-1error', 'border-b-1')
    enterMail.classList.replace('bg-red-200', 'bg-sky-600')
    enterMail.classList.add('hover:bg-sky-400')
    emailInputErrorMessage.classList.replace('visible', 'hidden')
})
inputMail.addEventListener( 'blur', ()=>{
    inputMail.classList.remove('hide-placeholder')
})

enterMail.addEventListener('click', ()=>{
    enteredMail()
})

inputMail.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13)
        enteredMail()
})