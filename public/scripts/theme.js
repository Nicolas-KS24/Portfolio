const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// verificar se user colocou tema
if(localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () =>{
    body.classList.toggle('dark-mode');

    // save preferência
    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');

    } else{
        localStorage.setItem('theme', 'light');
    }
});