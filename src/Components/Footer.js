

export default function Footer(){

    let year = new Date().getFullYear();

    return (

        <div className="footer">
            {/* Left Side, contains privacy policy and terms of use links */}
            <div className="footer-left">
                <p>
                    <a href="https://www.freeprivacypolicy.com/live/518f7d98-4e86-4640-af83-abe363efc166" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                    </a>
                </p>
                <p>
                    <a href="https://www.freeprivacypolicy.com/live/0249266b-5b59-4d67-a6ed-1b09dd741d9a" target="_blank" rel="noopener noreferrer">
                        Terms of Use
                    </a>
                </p>
            </div>

            {/* Center, contains logo and copyright stuff*/}
            <div className="footer-center">
                <img src="logo192.png" alt="Logo" className="logo" />
                <p>
                    &copy; {year}, Ashton Morrison 
                </p>
                
            </div>

            {/* Right Side, contains license info for content */}
            <div className="footer-right">
                <p>
                The content of this website is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">
                    CC BY-NC-ND 4.0
                    </a>
                </p> 
            </div>

        </div>
    )
}