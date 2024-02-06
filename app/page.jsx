import Feed from '@components/Feed'

const Home = () => {
    return (
        <div>
            <section className="w-full flex-center flex-col">
                <h1 className="head_text text-center">
                    Lorem, ipsum dolor.
                    <br className="max-md:hidden" />
                    <span className="orange_gradient text-center"> Lorem ipsum dolor sit.</span>
                </h1>
                <p className="desc text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                    voluptatibus laudantium aspernatur sapiente quod modi quo excepturi dicta aliquam,
                    facilis ipsa facere harum! Iste consectetur harum, qui laboriosam quis soluta?
                </p>

                <Feed/>
            </section>
        </div>
    )
}

export default Home