new Vue({
  el: '#app',
  vuetify: new Vuetify({
    theme: { dark: true },
  }),
  data: () => ({
    expression: '',
  }),
  methods: {
    clear() {
      this.expression = '';
    },
    calculate() {
      this.expression = evaluateExpression(this.expression);
    },
  },
});