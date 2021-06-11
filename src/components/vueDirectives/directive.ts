import {DirectiveOptions, VNode} from 'vue';
import {DirectiveBinding} from 'vue/types/options';

export class Directive implements DirectiveOptions {
  bind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
    console.log(oldVnode);
  }

  inserted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
    console.log(oldVnode);
  }

  update(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
    console.log(oldVnode);
  }

  componentUpdated(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
    console.log(oldVnode);
  }

  unbind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
    console.log(oldVnode);
  }

}

export default new Directive();
