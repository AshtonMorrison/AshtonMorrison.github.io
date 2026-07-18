
import {ProjectSectionLeft, ProjectSectionRight} from '../Components/ProjectSection';

export default function Projects(){
    return (
        <div className="container">

            <ProjectSectionRight 
                image={import.meta.env.BASE_URL + 'Photos/TerritoryAscent.png'} 
                title="Territory Ascent" 
                text="This is a simple LAN multiplayer game that I made with 3 classmates for my networking class. The game allows up to 8 
                players and is built using Pygame for graphics, Msgpack for data serialization, and works directly with TCP sockets for communication."
                link="https://github.com/AshtonMorrison/Territory-Ascent" 
            />

            <ProjectSectionLeft 
                image={import.meta.env.BASE_URL + 'Photos/AshtonWebsite.jpg'}
                title="Personal Website" 
                text="Obviously, the website that you're currently on is made by me! This website was made using React, and it was my
                first time ever doing web development, and also my first time interacting with HTML and CSS. I'm happy with how it turned out,
                and I'm planning to expand on it throughout my life as I accumulate more and better projects."
                link="https://github.com/AshtonMorrison/AshtonMorrison.github.io" 
            />

            <ProjectSectionRight 
                image={import.meta.env.BASE_URL + 'Photos/LoveAtFirstPaw.png'} 
                title="Love At First Paw"
                text="This is my final project for my Software Engineering class, which I worked on with 4 other classmates as 
                Project Manager. Its an adoption website that used both PetFinder and MapBox APIs to allow users to find pets available
                for adoption in their area. The website is now depricated since Petfinder discontinued their public API, but the code is still available"
                link="https://github.com/CMPT-276-SPRING-2025/final-project-08-oceans"
            />

            <ProjectSectionLeft
                image={import.meta.env.BASE_URL + 'Photos/2DDungeonCrawler.png'} 
                title="2D Dungeon Crawler" 
                text="This is an ongoing project that I started with two other friends, but have since carried on developing by myself. It's a 2D dungeon crawler game 
                that's being made in C# using the Monogame framework. I'm currently in the very early stages of development, but I believe
                it's still worth noting. It's so far been a very fun project and a great introduction to game development." 
                link="https://github.com/AshtonMorrison/2D-Dungeon-Crawler" 
            />

            <ProjectSectionRight
                image={import.meta.env.BASE_URL + 'Photos/Ashton1Mod.png'} 
                title="Image Editing Software" 
                text="This is an old project that I created for my capstone in high school. It's an image editing program made with Java
                that allows you to apply various different effects to a given image. It's not the most advanced program in the world, 
                but it was a great learning experience. The image on the left here was edited using the software, so it gives you an idea
                of it's capabilities." 
                link="https://github.com/AshtonMorrison/Image-Editing-Software" 
            />
        </div>
    )
}