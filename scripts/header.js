export default function createHeader() {
    let header = `
    <header class="h-[13.6rem] sm:h-[16rem] lg:h-[16.2rem] w-full max-w-[111rem] 
        sm:rounded-bl-[10rem] lg:rounded-br-[10rem] m-auto bg-violet
        px-[2.4rem] py-[3.2rem] sm:px-[3.9rem] sm:py-[4.2rem] lg:px-[16.5rem] lg:py-[4.4rem]
        transition-all  
        bg-headerMobile sm:bg-headerTablet lg:bg-headerDesktop
        ">
            <div class="header-inner-container w-full h-[3.2rem] flex items-center">
                <div class="logo-container flex-1">
                    <img src="/assets/desktop/logo.svg" alt="">
                </div>
            </div>
    </header>
    `

    return header
}