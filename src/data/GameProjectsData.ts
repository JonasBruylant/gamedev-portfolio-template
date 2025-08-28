import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("Underworld-Overseer", "Underworld Overseer", "img/projects/Overseer.jpg", `
    <div class="paragraph">
    <strong>Underworld Overseer</strong> is a project I've worked on during my internship and one that I am very proud of. 
    My internship in <strong> Myron Games </strong> began in February 2024 and ended in June 2024 to which I worked in a team of roughly <strong>10 people</strong>.
    The game is made in <strong>Unity</strong>, the version control used was <strong> PlasticSCM </strong>
    and the gameplay is similar to 'Dungeon Keeper' but <strong> in VR </strong>, managing your monsters, minions and creatures.
    In order to keep the communication within the team efficient and easy, we used <strong> Notion </strong> as our sprint planning tool.
     <br/>
     <br/>
     The game is about you taking the role of a dark overlord, gathering warriors and minions to fight for you as you defend yourself
     against the humans trying to conquer your dungeon!
    </div>
    <div class="paragraph">
    The game is available on
    <ul>
    <li><a href="https://store.steampowered.com/app/2909910/Underworld_Overseer/" target="_blank">Steam</a> </li> 
    <li><a href="https://www.oculus.com/deeplink/?action=view&path=/app/7249464208476495&ref=oculus_desktop" target="_blank">Meta quest store</a> </li>
    </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Lp1ScH8JPB4?si=I2cB3KJxa3lGquO8" frameborder="0" allowfullscreen></iframe>
    </div>

    <div>
        During my internship I've been in charge of many game play aspects that players can experience.
        <ul text-align: center>
            <li> <strong> Flamethrower trap </strong> </li>
            <div class ="paragraph"> 
                There were already a handful of traps already present when I started, but this was the <strong>first</strong> trap the player could actually interact with after placing it down. <br/>
                The biggest issues I had encountered with it was the registration of enemies entering the range of the flamethrower and properly applying damage. 
                This was because I made it too difficult by limiting myself by following a template for the other traps that didn't work out for these specific type of traps.
            </div>
            <br/>
            
            <li> <strong> Crossbow trap </strong> </li>
            <div class ="paragraph">  
                Similar to the flamethrowe trap, this one can also change it's direction with player input. <br/>
                Since the groundwork had already been laid by the flamethrower trap, this one had less issues during development <br/>
                The biggest challenge with this one was syncing the animation with the actual shot of the arrow from the trap, here communication between me and the art team was an essential part of resolving it.
            </div>
            <br/>

            <li> <strong> Hornet egg </strong> </li>
            <div class ="paragraph"> 
                The hornet egg is a spell that is able to be picked up by the player in some levels. <br/>
                This differs from normal spells that are found within the menu the player can open in their hand. <br/>
                I spent the majority of my time figuring out how to give it the same functionality as a spell, having a UI name and description, being blocked by spell shield, while also being a grabbable item within a level.
            </div>
            <br/>

            <li> <strong> Planetarium & Star Portal </strong> </li>
            <div class ="paragraph"> 
                This was the first task where I felt it's importance radiate from it. Throughout the level there would be planetariums scattered and players had to 
                activate them all in order to activate the Start Portal and advance to the final levels of the game. <br/>
                I immediately went to thinking and quickly over complicated the process of the interaction between the two. The idea I had in mind worked, but was
                too difficult to keep track of for the players and the saving system. <br/>
                This first iteration I made became the ground work for a much more streamlined and easier version of the planeteriums.
            </div>
            <br/>

            <li> <strong> Polymorph spell </strong> </li>
            <div class ="paragraph"> 
                The polymorph transforms any enemies hit to innocent mandrakes for a set duration. <br/>
                For this spell I had to think on how I wanted to handle the transformation of the enemy. In the end I chose to have the data of the transformed enemy stored
                in the mandrake so it could transform back into the correct enemy once the timer was up.
            </div>
            <br/>

            <li> <strong> Hiding hidden rooms </strong> </li>
            <div class ="paragraph"> 
                Hidden rooms are for players to 'find' during the gameplay, but when sticking your head through walls, you could see these not so hidden rooms and easily open them. <br/>
                In order to counter this, we check if anything is on a tile that is supposed to be hidden and disable everything, from meshes to animation. Once the room has been properly
                found, then everything will become visible and begin working as intended.
            </div>
            <br/>

            <li> <strong> Jail system</strong> </li>
            <div class ="paragraph"> 
                By checking the tiles, I was able to determine what tile is a jail tile and wich one wasn't. That way I could allow units to only walk on adjacent jail tiles or regular ones. <br/>
                Imps can break the jails from the outside to free the units within them and making you able to pick them up and add them to your army.
            </div>
            <br/>

        </ul>
    </div>

    `, "#ad2a18"),

    new ProjectData("Sticky-Situation", "Sticky Situation", "img/projects/StickySituationLogo.jpg", `
    <div class="paragraph">
        <strong>Sticky Situation</strong> is the result of a course held at DAE, Game Projects is a <strong>4 month long game jam</strong> hosted by the school
        to encourage people to make a great game while also learning soft skills and the essence of good communication, planning and team work.
        <br/> 
        <br/>
        The game is made in <strong>Unreal Engine 4</strong>, using <strong>Perforce</strong> as version control, <strong>Hack 'n plan</strong> for sprint planning and is available on itch.io. <br/> 
    </div>
    <div class="paragraph center">
    <iframe width=760 height=350 src="https://www.youtube.com/embed/4Eo322pEO4I?si=dUuANSSDbwLCSUzK" frameborder="0" allowfullscreen></iframe>
    </div>

    <div>
        I was in charge of making the gameplay loop and interactions of the game, this refers to: <br/>
        <ul>
        <li><strong> Spawning of the ingredients</strong></li>
        <div class ="paragraph"> 
                On the right side of the screen, where the player can't see I spawned in ingredients that will gradually move along the conveyor belt. <br/>
                Later in development it was adjusted to spawn items more frequently based on what the customer wants.
        </div>
            <br/>

        <li><strong>Customer order generation</strong></li>
        <div class ="paragraph"> 
           The customer has a set amount of dishes he would like to eat, this was done by getting a random dish from a lookup table and then displaying the ingredients within
           his thought bubble so the player knows which ones to grab.
        </div>
        <br/>

        <li><strong>Cooking the ingredients</strong></li>
        <div class ="paragraph"> 
            Once a player places one or more ingredients on the stove and heats up the fire, the ingredient will start to cook, but they can also burn it! <br/>
            In order to visualise the cooking process, we change the material for the food over time based on how long it takes to be cooked to perfection (or to be burnt).
        </div>
        <br/>

        <li><strong>Combining ingredients to form a dish</strong></li>
        <div class ="paragraph"> 
            Using the same lookup table, we check what the current ingredients on the chopping block will result into when made into a dish. <br/>
            If we have a valid dish, we remove the ingredients and spawn the dish with a hidden score based on how well the ingredients were cooked.
        </div>
        <br/>

        <li><strong>Having the customer react on the quality of your dish</strong></li>
        <div class ="paragraph"> 
            Once the dish has been made, you can serve it to your customer and based on how well it was made, the customer will react accordingly,
            being very happy when it's perfect to slamming the table when you give him a bad one.
        </div>
        <br/>

        <li><strong>Customer mood change over time</strong></li>
        <div class ="paragraph"> 
            The longer you make the customer wait, the more bored and annoyed he gets. Once the timer for his patience runs out he'll leave your store in order to
            search for an establishment that will be able to get his orders done in time. <br/>
            The customer has a hidden timer within him and will change his animation accordingly to the current state of his patience.
        </div>
        <br/>

        <li><strong>End of game loop</strong></li>
        <div class ="paragraph"> 
            The customer will leave satisfied once you have delivered all of his orders, giving you your total score for that playthrough. <br/>
            The highest score across playthroughs is saved and displayed on the menu screen with the name you've given in to participate. 
            This is to spark some friendly competition to achieve the highest score possible.
        </div>
        <br/>


    </ul>

    </div>


        <div class="paragraph">
            <div class="notice">
            Windows build is available on <a href="https://alternativve.itch.io/stickysituation" target="_blank">itch.io</a>.
            </div>
        </div>

    `, "#cc6216"),

    new ProjectData("Tree-umph", "Treeumph", "img/projects/TreeumphLogo.jpg", `
    <div class="paragraph">
        <strong>Treeumph</strong> is a game made in 3 days in the <strong>Unity engine</strong> using <strong>Perforce</strong> as version control during a <strong><a target="_blank" href="https://itch.io/jam/dae-crea-week-2022/entries">game jam</a></strong> hosted by the school with the theme
        <strong>Peace and Chaos</strong>.
        <br/>
        The goal of the game is to climb to the top of the tree as quickly as possible, all while dodging and navigating falling objects.
        <br/>But you can use your time manipulating powers to slow down time and use the falling objects to climb higher.     
    </div>


    <div class="paragraph center">
    <iframe width=760 height=350 src="https://www.youtube.com/embed/QNvzSVvZZjk?si=R6fYbLvkRYDAaHyc" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/TreeumphShowcase1.gif" alt="Gameplay footage" />
        <img class="pc-screenshot" src="img/projects/TreeumphShowcase2.gif" alt="Ripple effect + slowed down time" />
        <img class="pc-screenshot" src="img/projects/TreeumphShowcase3.gif" alt="Reverse ripple + time returning to normal" />
    </div>

    <div className="paragraph">

        <ul>
        <li><strong> Ripple shader effect</strong></li>
        <div class ="paragraph"> 
            This was the first time I used and interacted with the Unity shader editor. <br/>
            I had to search up a lot of things in order to get the resulted I wanted. <br/>
            The ripple shader was made to clearly visualise the player using their time slowing ability and when it has ran out.
        </div>
        <br/>

        <li><strong> The falling objects hindering/assisting the player.</strong></li>
        <div class ="paragraph"> 
            Each bush of leaves in the tree would shake off branches or rocks, each having their own movement behaviour. <br/>
            The bush will pick a random object within its list to then drop down towards the player.
        </div>
        <br/>

        <li><strong>Timer value carrying over to the next scene </strong></li>
        <div class ="paragraph"> 
           Once someone managed to reach the top, I stop the timer and carry over that time to then properly display
           when having switched back to the main menu screen.
        </div>
        <br/>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
        The build is available to download on <a href="https://gillianassi.itch.io/tree-umph" target="_blank">itch.io</a>.
        </div>
    </div> 

    `, "#6dcc5c"),


    new ProjectData("ToolDev-Project", "Valorant Agent API", "img/projects/ValorantAPIShowcase.gif", `
    <div class="paragraph">
        This is the end result for an exam where we had to interact with <strong>API</strong> calls using the <strong>.NET framework in C#</strong> and displaying them via the
        <strong>MVVM</strong> practice.
        <br />For the project, I called upon the public Valorant API to display a list of the agents that are available in the game.
        <br />You can select one, and use the button below to show their details of who they are, how they play an what abilities they have. 
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/ValorantAPIShowcase1.jpg" alt="Screenshot of list being filtered by role." />
        <img class="pc-screenshot" src="img/projects/ValorantAPIShowcase2.jpg" alt="Screenshot of list being sorted by name descending." />
        <img class="pc-screenshot" src="img/projects/ValorantAPIShowcase3.jpg" alt="Screenshot of an agents details." />
    </div>`, "#c91818"),

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
    
    
        `, "#33b89b"),

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