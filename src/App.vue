<script>
import HelloWorld from './components/HelloWorld.vue'
import * as firebase from 'firebase/app'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  metaInfo: {
    changed(metaInfo) {
      firebase.analytics().setCurrentScreen(metaInfo.title);
      firebase.analytics().logEvent("page_view");
      firebase.analytics().logEvent("screen_view", {
        app_name: "my-website",
        screen_name: metaInfo.title,
        app_version: "1.0"
      });
    }
  }
}
</script>
