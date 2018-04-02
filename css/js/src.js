

$(document).ready( () => {

    const HIDDEN_HEDER_CLASSNAME = 'hidden',
        HIDDEN_HAMBURGERMENU_CLASSNAME = 'hamburger-menu-hidden',
        HIDDEM_HAMBURGERFILLER_CLASSNAME = 'hidden-filler',
        HIDDEN_HAMBURGERSEARCH_CLASSNAME = 'hidden-search',
        HIDDEN_HOMESEARCH_CLASSNAME = 'hidden-home-search'

    const headerMenu = document.body.querySelector('#articles-header'),
        hamburgerOpenButton = document.body.querySelector('#hamburger-open-button'),
        hamburgerCloseButton = document.body.querySelector('#hamburger-close-button'),
        hamburgerMenu = document.body.querySelector('#hamburger-menu'),
        hamburgerMenuFiller = document.body.querySelector('#hamburger-menu-filler'),
        hamburgerSearch = document.body.querySelector('#hamburger-search'),
        searchOnHomePage = document.body.querySelector('#search-mobile-wrapper')

    hamburgerOpenButton.addEventListener('click', toggleMenus)
    hamburgerCloseButton.addEventListener('click', toggleMenus)


    function toggleMenus(e) {
        debugger
        headerMenu.classList.contains(HIDDEN_HEDER_CLASSNAME) ? 
            headerMenu.classList.remove(HIDDEN_HEDER_CLASSNAME)
            : headerMenu.classList.add(HIDDEN_HEDER_CLASSNAME)
        
            hamburgerMenu.classList.contains(HIDDEN_HAMBURGERMENU_CLASSNAME) ? 
            hamburgerMenu.classList.remove(HIDDEN_HAMBURGERMENU_CLASSNAME)
            : hamburgerMenu.classList.add(HIDDEN_HAMBURGERMENU_CLASSNAME)

            hamburgerSearch.classList.contains(HIDDEN_HAMBURGERSEARCH_CLASSNAME) ? 
            hamburgerSearch.classList.remove(HIDDEN_HAMBURGERSEARCH_CLASSNAME)
            : hamburgerSearch.classList.add(HIDDEN_HAMBURGERSEARCH_CLASSNAME)

            hamburgerMenuFiller.classList.contains(HIDDEM_HAMBURGERFILLER_CLASSNAME) ? 
            hamburgerMenuFiller.classList.remove(HIDDEM_HAMBURGERFILLER_CLASSNAME)
            : hamburgerMenuFiller.classList.add(HIDDEM_HAMBURGERFILLER_CLASSNAME)
            
            /** На Home.hbs приходится отдельно прятать сэрч бар. Тк у него отличная структура :(( */
            searchOnHomePage.classList.contains(HIDDEN_HOMESEARCH_CLASSNAME) ? 
            searchOnHomePage.classList.remove(HIDDEN_HOMESEARCH_CLASSNAME)
            : searchOnHomePage.classList.add(HIDDEN_HOMESEARCH_CLASSNAME)
    }
})
