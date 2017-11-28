import renderer from 'vue-ssr-renderer';

export default template => renderer.createRenderer({
  template
});