const cardContainer = document.querySelector('#card_container')

const projectsData = [
    {
        url: 'projects1',
        title: "Simple Login Page",
        body: "Inspired By : Font Awesome"
    },
    {
        url: 'projects2',
        title: "Simple Login Page",
        body: "Inspired By : Font Awesome"
    },
    {
        url: 'projects3',
        title: "Simple Login Page",
        body: "Inspired By : Font Awesome"
    },
    {
        url: 'projects4',
        title: "Simple Landing Page",
        body: "Inspired By : Challenge CodeDesign.dev"
    },
    {
        url: 'projects5',
        title: "Simple Landing Page",
        body: "Inspired By : Challenge CodeDesign.dev"
    },
]

function renderCard({
    url,
    title,
    body
}) {
    const card = `
      <div class="card flex flex-col gap-y-2 p-2 border-2 border-solid rounded-lg md:w-1/4 md:gap-x-3 md:flex-wrap md:justify-center hover:shadow-lg duration-300 ease-in-out">
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
                        <button
                            class="w-full py-2 px-6 rounded-lg bg-primary-teal flex justify-center items-center gap-x-2 text-white font-bold">
                            <a href="https://projects.iyanxdev.my.id/login-pages/" target="_blank"
                                class="flex justify-evenly items-center gap-x-2">
                                <p>Lihat Detail</p>
                                <i class="fa-solid fa-square-arrow-up-right"></i>
                            </a>
                        </button>
                    </div>
                </div>
    
    `
    cardContainer.insertAdjacentHTML('afterbegin', card)
}


projectsData.forEach(data => {
    const { url, title, body } = data
    renderCard({ url, title, body })
})


