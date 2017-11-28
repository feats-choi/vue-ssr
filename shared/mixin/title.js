function getTitle(vm){
  const { title } = vm.$options;
  if(title){
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

export const serverTitleMixin = {
  create(){
    const title = getTitle(this);
    if(title){
      this.$ssrContext.title = title
    }
  }
};

export const clientTitleMixin = {
  mounted(){
    const title = getTitle(this);
    if(title){
      document.title = title;
    }
  }
};

