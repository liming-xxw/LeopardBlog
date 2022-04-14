import MessageConstructor from "./message.vue";
import { render, createVNode } from "vue";
const instances = [];
function Message(options) {
  if (typeof options == "string") {
    options = {
      message: options, 
    };
  }
  let offset = options.offset || 20;
  let id = 0;
  instances.forEach((vm) => {
    offset += vm.el.offsetHeight + 20;
    id++;
  });
  let userClose = options.onClose;
  let opts = {
    ...options,
    offset,
    id,
    onClose: () => {
      instances.splice(0, 1);
      userClose?.();
    },
  };
  const container = document.createElement("div");
  const vm = createVNode(MessageConstructor, opts);
  vm.props.onDestroy = () => {
    render(null, container);
  };
  render(vm, container);
  document.body.appendChild(container.firstElementChild);
  instances.push(vm);
}

export default Message;
