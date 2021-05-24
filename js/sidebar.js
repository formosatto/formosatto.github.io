function load_sidebar() {

    const body = document.getElementById('iron-body');
    const sidebar = document.getElementById('sidebar');
    const hint = document.createElement('i');
    hint.classList.add("fa");
    hint.classList.add("fa-arrow-right");
    hint.classList.add("fa-5x");
    hint.classList.add("media");
    hint.classList.add("blink");
    hint.style = `
        padding: 1rem;
        position: fixed;
        left: 0;
        top: 80px;
        color: #55BCA6;
    `
    body.appendChild(hint);

    let startX = 0;
    let endX = 0;

    body.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].clientX;
        
        if (startX > 240){
            sidebar.classList.remove('sidebar-open');
            sidebar.classList.add('sidebar-close');
        }
    })

    body.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handle_touch();
    })

    function handle_touch(){
        if (endX - startX > 0 && startX < 130){
            sidebar.classList.add('sidebar-open');
            sidebar.classList.remove('sidebar-close');
            hint.remove();
        }
    }

}