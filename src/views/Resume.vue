<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Jonas Bruylant</strong>, a proud DAE graduate since 2024 and a very enthousiastic Game developer.
      <br/> I have gained experience in a lot of the many different sides of game development, but I personally enjoy 
      gameplay programming the most. <br/>
      Inventing, discussing and implementing mechanics and interactions in the game to make
      it feel come alive. 
      <br/>It has gotten to the point where my mind tries to think of how other games migh have done theirs while playing.
      <br/> I also feel a keen interest in AI related programming, defining behaviours such as pathfinding and other useful algorithms.
      I am familiar with AI programming, and am still honing my skills and gaining experience, but my curiousity and interest stands strong.  
      
      <br/>
      <br/>
      I am currently looking for a job as a Gameplay programmer, preferably something related to game interactions that will satisfy the players.
      <br/> Feel free to 
      <router-link to="/contact">contact me</router-link> for more info.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img :src="`/img/ProfilePicture.png`" alt=""/>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Contract at Myron Software</h3>
      <h4>July 1st 2024 - July 31st 2024</h4>
      <div> After the internship, I got offered a contract for an employment of a month long duration, the game had to be finished soon by then so extending the contract was not necessary. </div>
      <div class="LearnedList">
        <ul>
          <li>Learned how to optimise gameplay loop by removing garbage data</li>  
          <li>Learned that programming is more about properly designing than just typing.</li>
        </ul>
      </div>
    </div>

      <h3>Internship at Myron Software</h3>
      <h4>February 2024 - June 2024</h4>
      <div>Internship was a required course for the major, nevertheless I learned a lot of things in terms of 
        the Unity engine and how to adapt a proper mindset for problem solving. </div>
        <div class="LearnedList">
        <ul>
          <li>Learned how to navigate, learn and work in an already existing code base</li>
          <li>Learned how to hold daily meetings and keep the team updated on everyones work</li>
          <li>Adapted a new work mentality of 'keep it simple'</li>
        </ul>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Practical</h3>
        <SkillRate name="C++" :rate="4" />
        <SkillRate name="C#" :rate="4" />
        <SkillRate name="HTML" :rate="2" />
        <SkillRate name="Unity Engine" :rate="4" />
        <SkillRate name="Unreal Engine" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Soft skills</h3>
        <SkillRate name="Communication" :rate="5" />
        <SkillRate name="Team work" :rate="5" />
        <SkillRate name="Problem-Solving" :rate="4" />
        <SkillRate name="Adaptability" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="Dutch" :rate="5" />
        <SkillRate name="English" :rate="5" />
      </div>
      <div style="clear:both"/>

      <h2>Education</h2>

      <h3>Digital Arts & Entertainment | 2019-2024 </h3>
      <h4>Bachelor Degree for Game Development</h4>
      <div class="Description">
        <ul>
        <li>C++</li>
        <li>How to use a variety of Engines & frameworks</li>
        <li>How to think of good mechanics and how to potentially balance them</li>
        <li>AI decision making in pathfinding and/or action taking</li>
        <li>How to write a raytracer and rasterizer</li>
        <li>The 101 coding standard rules</li>
        </ul>
      </div>

      <h3>PHTI Gent | 2015-2019 </h3>
      <h4>Diploma for Accounting and Computer Science</h4>
      <div class="Description">
        <ul>
        <li>Accounting</li>
        <li>Basic HTML</li>
        <li>Math required for understanding math for the bachelor degree</li>
        </ul>
      </div>


      <!--
      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Violence</h3>
        <div>I find it really soothing to just shoot at bad guys</div>

        <h3>I 🧡 Sports</h3>
        <div>I used to be thin but then I ingested 10 kilos of steroids and proteins a day while doing 1000 push-ups.</div>

        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>

      </div>

    -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, isShallow } from "vue";
import SkillRate from "@/components/SkillRate.vue";


export default defineComponent({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>