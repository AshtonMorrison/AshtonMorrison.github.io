
import {ProjectSectionLeft, ProjectSectionRight} from '../Components/ProjectSection';

export default function Projects(){
    return (
        <div className="container">
            <ProjectSectionLeft 
                image="/Photos/2DDungeonCrawler.png" 
                title="2D Dungeon Crawler" 
                text="This is an ongoing project that I'm working on with two other friends. It's a 2D dungeon crawler game 
                that's being made in C# using the Monogame framework. We're currently in the very early stages of development, but I believe
                it's still worth noting. It's so far been a very fun project and a great introduction to game development." 
                link="https://github.com/YKPandit/Hackathon-Project" 
            />
            <ProjectSectionRight 
                image="/Photos/Ashton1Mod.png" 
                title="Image Editing Software" 
                text="This is an old project that I created for my capstone in high school. It's an image editing program made with Java
                that allows you to apply various different effects to a given image. It's not the most advanced program in the world, 
                but it was a great learning experience. The image on the left here was edited using the software, so it gives you an idea
                of it's capabilities." 
                link="https://github.com/AshtonMorrison/Image-Editing-Software" 
            />

            <ProjectSectionLeft 
                image="/Photos/AshtonWebsite.jpg"
                title="Personal Website" 
                text="Obviously, the website that you're currently on is made by me! This website was made using React, and it was my
                first time ever doing web development, and also my first time interacting with HTML and CSS. I'm happy with how it turned out,
                and I'm planning to expand on it throughout my life as I accumulate more and better projects."
                link="https://github.com/AshtonMorrison/AshtonMorrison.github.io" 
            />
        </div>
    )
}