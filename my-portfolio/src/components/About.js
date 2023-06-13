import headshot from "../images/butterflygarden.081c280c.jpeg"

export default function About() {
  let myName = "Evan Woods"
  return (
    <>
      <section id="about" class="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm {myName}.
              <br className="hidden lg:inline-block" />I love to build amazing
              apps.
            </h1>
            <p className="mb-8 leading-relaxed">
            I am a strong information technology professional and experienced software developer with a Bachelor of Engineering (B.E.) focused in Computer Engineering from Clemson University.
            I spent 2 years developing full-stack applications for Boeing. 
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Email Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Portfolio
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={headshot}
            />
          </div>
        </div>
      </section>

    </>
  )
}

function MyButton() {
  return (
    <button class="py-8 px-8 max-w-sm mx-auto text-green-500 bg-black rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      I'm a button
    </button>
  )
}