import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("Underworld-Overseer", "Underworld Overseer", "img/projects/Overseer.jpg", `
    <div class="paragraph">
    <strong>Overseer</strong> is a project I've worked on during my internship and one that I am so proud of. It's been an amazing experience to
    work with the team and learn so many new things and perspectives. After the internship, I was given the opportunity to work on the game
    a week before the QA testing would happen.
    <br/> I've worked on gameplay aspects and mechanics of the game, making sure the player has enough options to defend themselves with spells and traps.
     I've also been involved with the jailing system where units are not usable to the player unless they're freed.
     <br/>
     <br/>
     The game is about you taking the role of a dark overlord, gathering warriors and minions to fight for you as you defend yourself
     against the humans trying to conquer your dungeon!
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Lp1ScH8JPB4?si=I2cB3KJxa3lGquO8" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
    The game will be available on <a href="https://store.steampowered.com/app/2909910/Underworld_Overseer/" target="_blank">steam</a> and the <a href="https://www.oculus.com/deeplink/?action=view&path=/app/7249464208476495&ref=oculus_desktop" target="_blank">meta quest store</a>.
    <br/>
    </div>
    <!--
    <div class="paragraph center">
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    </div>
    -->
    
    `, "#23bd69"),
    new ProjectData("Sticky-Situation", "Sticky Situation", "img/projects/StickySituationLogo.jpg", `
    <div class="paragraph">
        <strong>Sticky Situation</strong> is the result of a course held at DAE, Game Projects is a 4 month long game jam hosted by the school
        to encourage people to make a great game while also learning soft skills and the essence of good communication, planning and team work.
        <br/> 
        <br/>
        The game is made in Unreal Engine 4 and available to download and play on itch.io.
        I was in charge of making the gameplay loop and interactions of the game, to give a quick summary, this refers to: <br/>
        <ul>
        <li>Spawning of the ingredients</li>
        <li>Customer order generation</li>
        <li>Cooking the ingredients</li>
        <li>Combining ingredients to form a dish</li>
        <li>Having the customer react on the quality of your dish</li>
        <li>Customer mood change over time</li>
        </ul>
    </div>
    <div class="paragraph center">
    <iframe width=760 height=350 src="https://www.youtube.com/embed/4Eo322pEO4I?si=dUuANSSDbwLCSUzK" frameborder="0" allowfullscreen></iframe>
    </div>

        <div class="paragraph">
            <div class="notice">
            Windows build is available on <a href="https://alternativve.itch.io/stickysituation" target="_blank">itch.io</a>.
            </div>
        </div>

    `, "#5a78af"),
    new ProjectData("Tree-umph", "Treeumph", "img/projects/TreeumphLogo.jpg", `
    <div class="paragraph">
        <strong>Treeumph</strong> is a game made in 3 days in the Unity engine during a <a target="_blank" href="https://itch.io/jam/dae-crea-week-2022/entries">game jam</a> hosted by the school with the theme
        <strong>Peace and Chaos</strong>.
        <br/>
        <br/>
        The goal of the game is to climb to the top of the tree as quickly as possible, all while dodging and navigating falling objects.
        <br/>But you can use your time manipulating powers to slow down time and use the falling objects to climb higher.     
        </div>
    <div class="paragraph center">
    <iframe width=760 height=350 src="https://www.youtube.com/embed/QNvzSVvZZjk?si=R6fYbLvkRYDAaHyc" allowfullscreen></iframe>
    </div>

    <div className="paragraph">
    I've been responible for a number of things in this project, my most proudest one being the ripple effect you see when you activate your time slowing ability
        as this was the first time I was interacting with the Unity Shader editor.
        A quick summary of the things I've implemented:
        <ul>
        <li>Ripple shader effect</li>
        <li>The falling objects hindering/assisting the player.</li>
        <li>The timer looking similar to the art style used for the HUD</li>
        <li>Timer value carrying over to the next scene</li>
        <li>Placement of the UI</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        The build is available to download on <a href="https://gillianassi.itch.io/tree-umph" target="_blank">itch.io</a>.
        </div>
    </div>
    
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/TreeumphShowcase1.gif" alt="Gameplay footage" />
        <img class="pc-screenshot" src="img/projects/TreeumphShowcase2.gif" alt="Ripple effect + slowed down time" />
        <img class="pc-screenshot" src="img/projects/TreeumphShowcase3.gif" alt="Reverse ripple + time returning to normal" />
    </div>

    `, "#383838"),
    new ProjectData("Grad-Work", "Research about AR engagement", "img/projects/ChessPuzzles.jpg", `
    <div class="paragraph">
    This topic was a research I have conducted about how learning topics throuh the use of AR could prove
    to be more efficient than the real world counter parts.
    <br/>This falls under the category of "Edutainment" games.
    <br/>I've used the games Chess as the example game in the paper and had a group of people within a chess club try understand
    certain material taught by teachers through physical means, and a group using the app.
    
    <br /><br /> If you're interested in reading the paper, you can open and/or download the pdf.
    <br />
    <a class="download-link" href="d/GW2324_Bruylant_Jonas_EN_Paper-1.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
    </div>

    <div className="photograph">
    <img class="pc-screenshot" src="img/projects/DetectionPlanes.jpg" alt="View of where a board is available to be placed." width=10 height=400 />
    <img class="pc-screenshot" src="img/projects/Boardgame.jpg" alt="A demonstration of how a game looks like on the AR application." width=10 height=400 />
    </div>


    `, "#e80fb7"),
    new ProjectData("ToolDev-Project", "Valorant Agent API", "img/projects/ValorantAPIShowcase.gif", `
    <div class="paragraph">
        This project is the result of a class where we learned how to interact with API calls and displaying them via the
        MVVM practice.
        <br />For the project, I called upon the public Valorant API to display a list of the agents that are available in the game.
        <br />You can select one, and use the button below to show their details of who they are, how they play an what abilities they have. 
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/ValorantAPIShowcase1.jpg" alt="Screenshot of list being filtered by role." />
        <img class="pc-screenshot" src="img/projects/ValorantAPIShowcase2.jpg" alt="Screenshot of list being sorted by name descending." />
        <img class="pc-screenshot" src="img/projects/ValorantAPIShowcase3.jpg" alt="Screenshot of an agents details." />
    </div>`, "#e48246"),
    new ProjectData("2048-Neural-Network", "2048 Neural Network", "img/projects/square-2048.gif", `
        <div class="paragraph">    
            One of the courses I had been taught, showed us different ways of behaviour and AI patterns.
            <br /> This project is the result of my interest in wanting to understand it a bit deeper, by making an already existing
            application, in this case the game 2048, be played by an AI neural network.
            <br /><br />
            At first I had the network learn how to predict the outcome of an XOR notation and test if after multiple generations
            it was able to accurately predict the outcome.
            <br /> After establishing that it works, I hooked it up to the 2048 application.
            <br /><br />
            The repository can be found <a href="https://github.com/JonasBruylant/2048" target="_blank">here</a> in case you're interested.
        </div>
            </div>`, "#5532f0")
];