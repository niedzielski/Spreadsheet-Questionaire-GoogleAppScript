<template>
  <div class="wrapper full-height" id="req_app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand class="logo" to="/">
        <span class="logo-emphasized wikifont">Wiki</span>Quaranteam
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav right>
            <ChatButtons small-dark />
            <b-button variant="dark" to="info">
              <b-icon icon="question-circle-fill"></b-icon>&nbsp;What is this
            </b-button>
            <b-button variant="dark" to="quiz">
              <b-icon icon="exclamation-diamond-fill
"></b-icon>&nbsp;Pop quiz
            </b-button>
            <b-button variant="dark" to="jokes">
              <b-icon icon="chat-dots
"></b-icon>&nbsp;Jokes
            </b-button>
            <b-button-group>
              <b-dropdown text="Participate" right>
                <b-dropdown-item
                  variant="dark"
                  href="https://forms.gle/aHtXuw2ToNR4287u9"
                  target="_blank"
                >
                  <b-icon icon="pencil"></b-icon>&nbsp;Fill in the form!
                  <sup>
                    <b-icon icon="box-arrow-up-right
"></b-icon>
                  </sup>
                </b-dropdown-item>
                <b-dropdown-item
                  variant="dark"
                  href="https://github.com/mooeypoo/Spreadsheet-Questionaire-GoogleAppScript"
                  target="_blank"
                >
                  <b-icon icon="braces"></b-icon>&nbsp;Contribute (GitHub)
                  <sup>
                    <b-icon icon="box-arrow-up-right
"></b-icon>
                  </sup>
                </b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import router from "./routes";
import ChatButtons from "./components/ChatButtons";
export default {
  name: "AppMain",
  components: { ChatButtons },
  router
};
</script>

<style lang="scss" scoped>
@import "./scss/variables";
.logo {
  font-size: 1.5em;
  font-variant: small-caps;
  @media only screen and (max-width: 500px) {
    font-size: 1.2em;
  }
  &-emphasized {
    font-size: 1.2em;
  }
}

.navbar {
  &-nav {
    text-align: center;
  }
  &.bg-dark {
    background-color: $dark-box-bg !important;
  }

  .btn {
    &:not(:last-child) {
      margin-right: 0.5em;
      @media only screen and (max-width: 770px) {
        margin-right: 0;
        &:not(:last-child) {
          margin-bottom: 0.5em;
        }
      }
    }
  }
}

.chat-buttons {
  margin-right: 1em;
  @media only screen and (max-width: 800px) {
    margin-bottom: 0.5em;
  }
}
</style>
