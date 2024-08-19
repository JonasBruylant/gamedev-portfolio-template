<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Jonas Bruylant</strong>, 23 years old, a Junior Game Developer and graduate at Digital Arts and Entertainment.<br/>
        I will take any opportunity to improve both myself and my skills to grow as a person.<br />
        In general I think of myself as cool-headed and an overall good team player who is able to communicate his desires and dissatisfactions well without
        stirring up drama.<br />
        I enjoy playing games while also thinking of the development process behind it, 
        how certain things were made and implemented.<br />
      </div>

      <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">these projects</router-link> and some of my general skills can be found <router-link to="/resume">here</router-link>.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a Game Developer, leaning towards Gameplay or Game Mechanics related programming. You can reach me at <a href="mailto:jonas.bruylant@gmail.com">jonas.bruylant@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img :src="`/img/ProfilePicture.png`" alt="" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>