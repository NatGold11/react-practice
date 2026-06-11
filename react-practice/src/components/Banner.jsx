import logo from "../assets/CGI_logo.png"

const Banner = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>What a cool internship!</div>
        </header>
    )
}

export default Banner;