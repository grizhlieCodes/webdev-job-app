export default function creatToggle(){
    let toggle = `
<div id="toggle-dark-mode-container" class="w-[12.2rem] h-[2.4rem] flex justify-between items-center ">
    <div id="light-icon">
        <img src="./assets/desktop/icon-sun.svg" alt="">
    </div>

    <div id="switch-container" class="">
        <label for="toggle-checkbox" class=" w-[4.8rem] h-[2.4rem] rounded-full bg-white  p-[0.5rem] block">
            <input type="checkbox" id="toggle-checkbox" class="peer sr-only" >
<div class="w-[1.4rem] h-[1.4rem] rounded-full bg-violet transition-all peer-checked:translate-x-[2.4rem]"></div>
        </label>
    </div>

    <div id="dark-icon">
        <img src="./assets/desktop/icon-moon.svg" class=" w-[1.6rem]" alt="">
    </div>
</div>
    `
    return toggle
}

