import "../style/contact.css"

function Contact(){
    return(
        <main className="contact-main">

            <div className="form-con">
                <h1 className="con-title">Contact</h1>
                <form action={""} className="form">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="@gaim.comm"/>
                    <input className="msg" type="text" placeholder="Your message"/>
                </form>
                <button className="btn-sub">Submit</button>
            </div>
        </main>
            
    )
}
export default Contact;