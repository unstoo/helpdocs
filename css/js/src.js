<script>


$(document).ready( () => {

    const HIDDEN_HEDER_CLASSNAME = 'hidden',
        HIDDEN_HAMBURGERMENU_CLASSNAME = 'hamburger-menu-hidden',
        HIDDEM_HAMBURGERFILLER_CLASSNAME = 'hidden-filler',
        HIDDEN_HAMBURGERSEARCH_CLASSNAME = 'hidden-search'

    const headerMenu = document.body.querySelector('#articles-header'),
        hamburgerOpenButton = document.body.querySelector('#hamburger-open-button'),
        hamburgerCloseButton = document.body.querySelector('#hamburger-close-button'),
        hamburgerMenu = document.body.querySelector('#hamburger-menu'),
        hamburgerMenuFiller = document.body.querySelector('#hamburger-menu-filler'),
        hamburgerSearch = document.body.querySelector('#hamburger-search')

    hamburgerOpenButton.addEventListener('click', toggleMenus)
    hamburgerCloseButton.addEventListener('click', toggleMenus)


    function toggleMenus(e) {

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
    }
})

  </script>