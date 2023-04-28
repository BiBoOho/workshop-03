const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector("#toggle-icon");
const nav = document.querySelector('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

function switchMode(e){
    if(e.target.checked){// Check inputbox ເມື່ອຖິກກົດ
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
        imageSwitchMode('dark');
    }else{
        //ປ່ຽນຄ່າ Attribute ຈາກ [data-theme=''dark'] ເປັນ [data-theme=''light']
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
        imageSwitchMode('light');
    }
}

function darkMode(){
    toggleIcon.children[0].textContent="ໂໝດກາງຄືນ";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';//ກຳນົດສີພື້ນຫຼັງ
}

function lightMode(){
    toggleIcon.children[0].textContent="ໂໝດກາງເວັນ";//ການເຂົ້າເຖິງ Element ລູກ
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';

}

function imageSwitchMode(mode){
    image1.src = `img/undraw_online_test_re_kyfx_${mode}.svg`;
    image2.src = `img/undraw_investor_update_re_qnuu_${mode}.svg`;
    image3.src = `img/undraw_clean_up_re_504g_${mode}.svg`;
}

switchToggle.addEventListener('change',switchMode);