

$(document).ready( () => {

    const HIIDDEN_HEADER_CLASSNAME = 'hidden',
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
        
        runFunctionIfUiIsReachable(headerMenu, () => {
            headerMenu.classList.contains(HIIDDEN_HEADER_CLASSNAME) ? 
                headerMenu.classList.remove(HIIDDEN_HEADER_CLASSNAME)
                : headerMenu.classList.add(HIIDDEN_HEADER_CLASSNAME)
        })      
        runFunctionIfUiIsReachable(hamburgerMenu, () => {
            hamburgerMenu.classList.contains(HIDDEN_HAMBURGERMENU_CLASSNAME) ? 
            hamburgerMenu.classList.remove(HIDDEN_HAMBURGERMENU_CLASSNAME)
            : hamburgerMenu.classList.add(HIDDEN_HAMBURGERMENU_CLASSNAME)
        })
        runFunctionIfUiIsReachable(hamburgerSearch, () => {
            hamburgerSearch.classList.contains(HIDDEN_HAMBURGERSEARCH_CLASSNAME) ? 
            hamburgerSearch.classList.remove(HIDDEN_HAMBURGERSEARCH_CLASSNAME)
            : hamburgerSearch.classList.add(HIDDEN_HAMBURGERSEARCH_CLASSNAME)

        })
        runFunctionIfUiIsReachable(hamburgerMenuFiller, () => {
            hamburgerMenuFiller.classList.contains(HIDDEM_HAMBURGERFILLER_CLASSNAME) ? 
            hamburgerMenuFiller.classList.remove(HIDDEM_HAMBURGERFILLER_CLASSNAME)
            : hamburgerMenuFiller.classList.add(HIDDEM_HAMBURGERFILLER_CLASSNAME)
        
        })
        runFunctionIfUiIsReachable(searchOnHomePage, () => {
            /** На Home.hbs приходится отдельно прятать сэрч бар. Тк у него загадочная структура :( */
            searchOnHomePage.classList.contains(HIDDEN_HOMESEARCH_CLASSNAME) ? 
            searchOnHomePage.classList.remove(HIDDEN_HOMESEARCH_CLASSNAME)
            : searchOnHomePage.classList.add(HIDDEN_HOMESEARCH_CLASSNAME)   
        })     
    }

    function runFunctionIfUiIsReachable(UI, aFunction) {
        if (UI) {
            aFunction()
        }
    }
})
