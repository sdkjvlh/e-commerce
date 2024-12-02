
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.foreach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.foreach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*= ' + id + '] ').classList.add('active');
            });
        };
    });
};
