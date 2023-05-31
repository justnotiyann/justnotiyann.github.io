const cardContainer = document.querySelector('#card_container')

const projectsData = [
    {
        url: 'projects1',
        title: "Simple Portfolio Website",
        body: "My First Portfolio Website",
        link: "https://projects.iyanxdev.my.id/"
    },
    {
        url: 'projects2',
        title: "Simple Login Page - Skyline",
        body: "Inspired By : CodeDesign Challenge",
        link: "https://projects.iyanxdev.my.id/codewithcoffie"
    },
    {
        url: 'projects3',
        title: "Simple Login Page - MonkeyType",
        body: "Inspired By : MonkeyType",
        link: "https://projects.iyanxdev.my.id/FE-SLICING-MONKEYTYPE"
    },
    {
        url: 'projects4',
        title: "Simple Login Page - Font Awesome",
        body: "Inspired By : Font Awesome",
        link: "https://projects.iyanxdev.my.id/login-pages/"
    },
    {
        url: 'projects5',
        title: "Simple Landing Page -  Suxz",
        body: "Inspired By : Challenge CodeDesign",
        link: "https://projects.iyanxdev.my.id/sxuz/"
    },
    {
        url: 'projects7',
        title: "Landing Shop Page - NovelKeys",
        body: "Inspired By : NovelKeys",
        link: "https://projects.iyanxdev.my.id/NOVELSKEY/"
    },
]

function renderCard({ url, title, body, link }) {
    const card = `
    <div
        class="card flex flex-col gap-y-2 p-2 border-2 border-solid rounded-lg md:w-1/4 md:gap-x-3 md:flex-wrap md:justify-center hover:shadow-lg duration-300 ease-in-out">
        <div class="card-image w-full">
            <img src="./src/images/projects/${url}.jpg" alt="login pages" class="rounded-lg w-full">
        </div>
        <div class="card-title text-lg text-center">
            <h1>${title}</h1>
        </div>
        <div class="card-body text-primary-gray py-2 text-center">
            <p>${body}</p>
        </div>
        <div class="card-footer">
            <a href="${link}" target="_blank" class="flex justify-evenly items-center gap-x-2">
                <button
                    class="w-full py-2 px-6 rounded-lg bg-primary-teal flex  justify-center items-center gap-x-2 text-white font-bold">

                    <p>Lihat Detail</p>
                    <i class="fa-solid fa-square-arrow-up-right"></i>
                </button>
            </a>
        </div>
    </div>
    
    `
    cardContainer.insertAdjacentHTML('afterbegin', card)
}


projectsData.forEach(data => {
    const { url, title, body, link } = data
    renderCard({ url, title, body, link })
})


