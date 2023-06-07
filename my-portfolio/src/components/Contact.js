import { projects } from '../data'

export default function Contact() {
    return (
        <section id="contact" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">

                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Portfolio
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Below is a collection of past works.
                    </p>
                </div>
                <div className="flex flex-wrap -m-3">
                    <iframe
                        src="https://github.com/sponsors/efwoods/card"
                        title="Sponsor efwoods"
                        height={225}
                        width={600}
                        style={{ border: 0 }}
                    />
                </div>
            </div>
        </section>
    )
}