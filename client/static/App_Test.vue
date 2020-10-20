<template>
  <div class="testApp">
    <div id="babyall"></div>
    <link href=babyall/css/app.css rel=preload as=style> <link
    href=babyall/css/chunk-vendors.css rel=preload as=style> <link
    href=babyall/js/app.js rel=preload as=script> <link
    href=babyall/js/chunk-vendors.js rel=preload as=script> <link
    href=babyall/css/chunk-vendors.css rel=stylesheet> <link
    href=babyall/css/app.css rel=stylesheet>
  </div>
</template>

<style lang="scss" scoped>
.testApp {
  background-color: #fff;
}
</style>

<script lang = "ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class TestDemo extends Vue {
  async mounted() {
    window["onReadyBabyAll"] = function() {
      window["aram"].playDemo("#babyall");
    };

    await this._scriptLoaded();
  }

  _scriptLoaded(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const scriptVendor = document.createElement("script");
      const scriptApp = document.createElement("script");

      scriptVendor.src = "babyall/js/chunk-vendors.js";
      scriptVendor.onload = () => {
        console.log("scriptVendor loadOK");
        scriptApp.src = "babyall/js/app.js";
        scriptApp.onload = () => {
          console.log("scriptAPP loadOK");
          resolve();
        };
      };
      document.body.appendChild(scriptVendor);
      document.body.appendChild(scriptApp);
      console.log("PROMISE REG FINISHED");
    });
  }
}
</script>