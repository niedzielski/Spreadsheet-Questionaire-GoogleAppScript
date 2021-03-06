<template>
  <div class="page-wrapper page-info">
    <div class="page-header">
      <h1>What is this?</h1>
    </div>
    <div class="page-content">
      <b-alert show variant="primary">
        Welcome to the Wikimedia Foundation
        <span class="emphasis">distant socializing</span> experiment.
        <br />This is our place to continue connecting, remotely.
      </b-alert>
      <h2>Why was this made?</h2>
      <p>This project was made for fun, as a side project, to encourage and promote connections among us, especially during these challenging times.</p>
      <p>If you smiled, giggled, found a fact or title funny or touching or interesting, and if this made you feel connected, or reach out and connect with others, then the purpose was met.</p>
      <p>Do enjoy, and avoid touching your face.</p>
      <h2>What is the pop quiz?</h2>
      <b-alert
        show
        variant="primary"
      >This quiz is a way to connect and get to know your fellow Wikimedia Foundation fam by interacting with the tidbits they've shared about themselves. The idea isn't competition -- it's connection.</b-alert>
      <h3>How does it work?</h3>
      <b-alert
        show
        variant="primary"
      >The information in this quiz is taken from a form we have shared with you. The form included a few fun questions that were aimed at hashing out some of the great hidden gems and factoids about our peers. By playing the quiz, you can learn about your peers and, hopefully, feel the connections that we share.</b-alert>
      <p>The quiz has very basic rules of operation:</p>
      <ul class="rules">
        <li>
          <span class="emphasis">Driven by the form data</span>
          <br />All questions are built from the form data, and are updated from the information in it.
        </li>
        <li>
          <span class="emphasis">The score doesn't matter</span>
          <br />It's not stored anywhere, and doesn't really matter.
        </li>
        <li>
          <span class="emphasis">Everything resets on reload</span>
          <br />This means that every time you reload the page, you get the questions newly reshuffled and your score resets.
        </li>
        <li>
          <span class="emphasis">Works only for wikimedia.org accounts</span>
          <br />You can play this quiz on any browser that is signed into your wikimedia.org account. Yes, mobile too.
        </li>
        <li>
          <span class="emphasis">The data is stored in the wikimedia.org Google Doc domain.</span>
          The code is
          <a
            href="https://github.com/mooeypoo/Spreadsheet-Questionaire-GoogleAppScript"
            target="_blank"
          >open sourced</a>, but the content of the questions and answered are never shared outside the Foundation servers!
        </li>
      </ul>
      <h3>I want in!</h3>
      <b-alert
        show
        variant="primary"
      >Fret not! The quiz here is updated automatically, which means that you can still have your fun tidbits shared by filling the quiz yourself.</b-alert>
      <div class="button-box">
        <b-button
          variant="warning"
          href="https://forms.gle/aHtXuw2ToNR4287u9"
          target="_blank"
        >Click here to fill in the form</b-button>
      </div>
      <b-alert show variant="warning">
        <span class="emphasis">Note:</span> If you've previously answered the form, you can also use the button above to edit or add to your responses.
      </b-alert>
      <h2>Let's chat!</h2>
      <p>If you've seen a great factoid, or funny joke, you might want to connect to your peers, and chat, laugh, and enjoy one another's wittiness.</p>
      <p>Here are two places to join a conversation:</p>
      <div class="chat">
        <ChatButtons />
        <b-alert show variant="warning">
          <span class="emphasis">Note:</span> Please remember the information shared here was intended only to the Wikimedia Foundatin family; only chat in a place that's limited to Wikimedia Foundation family, unless you get explicit permission from the person who posted the information.
        </b-alert>
      </div>
      <h2>Credits and Participation</h2>
      <p>
        Participating is appreciated! Please add feature requests, bug reports and general contributions:
        <b-button
          variant="warning"
          href="https://github.com/mooeypoo/Spreadsheet-Questionaire-GoogleAppScript"
          target="_blank"
        >
          GitHub
          <sup>
            <b-icon icon="box-arrow-up-right
"></b-icon>
          </sup>
        </b-button>
      </p>
      <p>This experiment was brought you by</p>
      <ul>
        <li>
          <span class="emphasis">Development:</span> Moriel Schottlender
        </li>
        <li>
          <span class="emphasis">Guidance, ideas, and support:</span> Cara Palanca
        </li>
        <li>
          <span class="emphasis">Design guidance:</span> Jess Klein
        </li>
        <li>
          <span class="emphasis">Testing and feature wrangling:</span> Greg Varnum, Ilana Fried, Niharika Kohli
        </li>
      </ul>
      <a href="https://icons8.com/icon/d74IkjBF0-ns/slack">Chat and Slack icons by Icons8</a>
    </div>
  </div>
</template>

<script>
import ChatButtons from "../components/ChatButtons";
export default {
  name: "InfoPage",
  components: { ChatButtons }
};
</script>

<style lang="scss">
@import "../scss/variables";
.page-info .page-content {
  font-size: 1.2em;
  h2 {
    font-weight: bold;
    text-align: center;
    margin: 1em 0 0.5em 0;
    border-bottom: 1px solid $dark-box-font;
  }
  h3 {
    font-weight: bold;
    text-align: center;
    margin: 0.7em 0 0.2em 0;
  }
  .emphasis {
    font-weight: bold;
  }

  .rules a {
    color: $dark-box-font;
    border-bottom: 1px dashed $dark-box-font;
  }

  li {
    margin-bottom: 1em;
    .emphasis {
      font-size: 1.2em;
    }
  }
  .button-box {
    text-align: center;
    margin: 1em 0;
  }

  .chat {
    margin: 1em 0;
    text-align: center;

    &-buttons {
      margin-bottom: 1em;

      // This does not work if the <style> is scoped
      // it seems to expect the [data-xxx] property on the 'a'
      // But attaches the one from the &-buttons element
      a {
        margin-bottom: 0.5em;
      }
    }
  }
}
</style>