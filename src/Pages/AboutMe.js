
export default function AboutMe(){
    return (
        <div className="container">

            {/* Top Section */}
            <h1 className="header">
                Who Am I?
            </h1>
            <p className="paragraph">
                Hello, potential employer! Or stalker, I don't judge. My name is Ashton Morrison and I'm a Canadian student at 
                Simon Fraser University. I'm currently studying computer science with no plans on stopping, since I'm such a 
                hard worker. I don't have a job in that field yet, but I'm currently working in a kitchen as a line cook. You'll 
                definitly be able to determine the rest of my personality over the course of this website, so I won't bore you with 
                that. What I will tell you, though, is that I'm motivated, determined, and ready to take on any challenge that comes 
                my way. I'm excited to see what the future holds for me, and I hope you are too.
            </p>

            {/* Middle Section */}
            <div className="section">
                <img className="about-image-stump" src="/Photos/AshtonStump.jpg" alt="Ashton on a stump looking at camera" />

                <div className="section abouttext">
                    <h1 className="header"> 
                        What Are My Interests?
                    </h1>

                    <p className="paragraph">
                        I have a lot of interests, but I'll try to keep this brief. My top interest would be video games, by a 
                        landslide. I've been playing video games since I was a kid, and I've spent more money on computers and 
                        other technologies than my car. I also enjoy walking outside in parks or forests, as depicted in the photo 
                        to the left. I find it very relaxing and it helps me clear my mind. Focusing on my field of choice, I enjoy 
                        the problem-solving aspect the most, be it in AI, game development, or other projects. Speaking of projects, 
                        you'll see more of those on the next page, so stay tuned. 
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="section aboutimage">
                <h1 className="header"> 
                    Who Are These Guys?
                </h1>

                <img className="about-image-beatles" src="/Photos/AshtonXBeatles.jpg" alt="Ashton walking with friends like the beatles" />

                <p className="paragraph">
                    Great question! The answer? I have no idea. Nah, I'm just kidding, these are a few of my friends. I've known them for 
                    quite a long time. This photo was taken as a part of our high school graduation photos, where we decided to try and
                    recreate the famous Beatles photo. I think we did a pretty good job, except for the fact that we're not the Beatles, 
                    nor are we in the right location, nor are we wearing the right clothes, nor are we even walking in the right direction.
                    But hey, we tried. I'm very lucky to have friends like these, and I'm excited to see where life takes us.
                </p>
            </div>
            
        </div>
    )
}