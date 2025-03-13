function ContactUs(){
    return(
        <div className="z-50">
            <form className="w-[50%] mx-auto flex flex-col gap-[20px] z-50">
                <input type="text" placeholder="Name:" className="w-[100%] p-4 bg-white focus:outline-none placeholder:text-lg"></input>
                <input type="email" placeholder="Email Address:" className="w-[100%] p-4 bg-white focus:outline-none placeholder:text-lg"></input>
                <input type="text" placeholder="Subject:" className="w-[100%] p-4 bg-white focus:outline-none placeholder:text-lg"></input>
                <textarea placeholder="Your Message" className="bg-white p-4 resize-none h-32 focus:outline-none placeholder:text-lg"></textarea>
                <button className=" self-start p-4 bg-pink-500 text-white text-xl text-start">Send Message</button>
            </form>
        </div>
    )
}

export default ContactUs;