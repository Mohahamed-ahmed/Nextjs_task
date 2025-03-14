function ContactUs(){
    return(
        <div className="z-50 px-4">
            <form className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto flex flex-col gap-4 md:gap-[20px]">
                <input 
                    type="text" 
                    placeholder="Name:" 
                    className="w-full p-3 md:p-4 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md placeholder:text-base md:placeholder:text-lg"
                ></input>
                <input 
                    type="email" 
                    placeholder="Email Address:" 
                    className="w-full p-3 md:p-4 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md placeholder:text-base md:placeholder:text-lg"
                ></input>
                <input 
                    type="text" 
                    placeholder="Subject:" 
                    className="w-full p-3 md:p-4 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md placeholder:text-base md:placeholder:text-lg"
                ></input>
                <textarea 
                    placeholder="Your Message" 
                    className="bg-white p-3 md:p-4 resize-none h-28 md:h-32 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md placeholder:text-base md:placeholder:text-lg"
                ></textarea>
                <button className="self-start p-3 md:p-4 bg-pink-500 text-white text-lg md:text-xl text-start rounded-md hover:bg-pink-600 transition-colors">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactUs;