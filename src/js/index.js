import { projects } from "./projects.js";

const openMenu = () => {
    const btnOpen = document.querySelector('.fa-bars');
    const btnClose = document.querySelector('.fa-xmark');
    const navBar = document.getElementById('nav');
    const links = document.querySelectorAll('#nav a');
    const header = document.querySelector('header');

    const open = () => {
        navBar.style.display = 'flex';
        btnOpen.style.display = 'none';
        btnClose.style.display = 'block';
        document.querySelector('main').style.filter = 'brightness(40%)';
        document.querySelector('body').style.overflow = 'hidden'
        header.classList.remove('hidden');
        header.classList.remove('show');

    }

    const close = () => {
        navBar.style.display = 'none';
        btnOpen.style.display = 'block';
        btnClose.style.display = 'none';
        document.querySelector('main').style.filter = 'brightness(100%)';
        document.querySelector('body').style.overflow = 'auto'
        header.classList.add('hidden');
        header.classList.add('show');

    }

    btnOpen.addEventListener('click', open);

    btnClose.addEventListener('click', close);

    links.forEach(link => {
        link.addEventListener('click', close);
    });


}

openMenu();

const openProject = () => {
    const cards = document.querySelectorAll('.cards');

    const mouseOver = (card) => {
        const info = card.querySelector('.info-card')
        const description = card.querySelector('.description');
        info.style.display = 'none'
        description.style.display = 'flex'

        openInfoProject(description)
    }

    const mouseOut = (card) => {
        const info = card.querySelector('.info-card')
        const description = card.querySelector('.description');
        info.style.display = 'block'
        description.style.display = 'none'
    }

    cards.forEach((cards, index) => {
        const idUnico = `meu-id${index + 1}`
        cards.id = idUnico
        cards.addEventListener('mouseover', () => {
            mouseOver(cards)
        })
    })

    cards.forEach((cards, index) => {
        const idUnico = `meu-id${index + 1}`
        cards.id = idUnico
        cards.addEventListener('mouseout', () => {
            mouseOut(cards)
        })
    })
}

openProject()

const openInfoProject = (description) => {
    const btn = description.querySelector('span')
    const divProject = document.querySelector('.sobre-projct')
    const btnClose = document.querySelector('#close')

    const showInfo = (btn) => {

        if (btn.id === 'meu-id1') {
            document.body.style.overflow = 'hidden'
            divProject.insertAdjacentHTML('beforeend', projects.space)
            divProject.style.display = 'flex'
        } else if (btn.id === 'meu-id2') {
            document.body.style.overflow = 'hidden'
            divProject.insertAdjacentHTML('beforeend', projects.countries)
            divProject.style.display = 'flex'
        } else if (btn.id === 'meu-id3') {
            document.body.style.overflow = 'hidden'
            divProject.insertAdjacentHTML('beforeend', projects.room)
            divProject.style.display = 'flex'
        } else if (btn.id === 'meu-id4') {
            document.body.style.overflow = 'hidden'
            divProject.insertAdjacentHTML('beforeend', projects.advice)
            divProject.style.display = 'flex'
        } else if (btn.id === 'meu-id5') {
            document.body.style.overflow = 'hidden'
            divProject.insertAdjacentHTML('beforeend', projects.jokenpo)
            divProject.style.display = 'flex'
        } else if (btn.id === 'meu-id6') {
            document.body.style.overflow = 'hidden'
            divProject.insertAdjacentHTML('beforeend', projects.sneakers)
            divProject.style.display = 'flex'
        } else if (btn.id === 'meu-id7') {
            document.body.style.overflow = 'hidden'
            divProject.insertAdjacentHTML('beforeend', projects.calc)
            divProject.style.display = 'flex'
        } else if (btn.id === 'meu-id8') {
            document.body.style.overflow = 'hidden'
            divProject.insertAdjacentHTML('beforeend', projects.bank)
            divProject.style.display = 'flex'
        } else if (btn.id === 'meu-id9') {
            document.body.style.overflow = 'hidden'
            divProject.insertAdjacentHTML('beforeend', projects.fylo)
            divProject.style.display = 'flex'
        } else {
            return
        }

    }

    const choseInfo = () => {
        const infoProject = document.querySelector('.info-pro')
        const links = document.querySelector('.links')

        divProject.style.display = 'none'
        document.body.style.overflow = 'auto'
        infoProject.remove()
        links.remove()
    }

    btn.addEventListener('click', () => {

        const description = document.querySelectorAll('.description span')

        description.forEach((des, index) => {
            const idUnico = `meu-id${index + 1}`
            des.id = idUnico
        })

        const cards = document.querySelectorAll('.cards');
        cards.forEach((cards) => {
            cards.removeAttribute('id')
        })

        showInfo(btn)

    })

    btnClose.addEventListener('click', () => {
        choseInfo()
    })

}

const animateScroll = () => {

    const myObserve = new IntersectionObserver((enties) => {
        enties.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    const elements = document.querySelectorAll('.hidden')

    elements.forEach((element) => myObserve.observe(element))
}

animateScroll();

particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;





