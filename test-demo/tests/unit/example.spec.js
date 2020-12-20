import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import sinon from "sinon"

describe("HelloWorld.vue", () => {
  // 检测是否触发
  // let isCalled = false;
  // sino方便检测是否被触发多次，会记录被调用的具体情况。
  const change = sinon.spy();
  const wrapper = mount(Counter, {
    listeners: {
      // 配合sinon使用
      change
      // change() {
      //   isCalled = true;
      // }
    }
  });
  it("renders props.msg when passed", () => {
    const msg = "new message";
    // shallowMount浅渲染，只渲染一层。
    // const wrapper = shallowMount(HelloWorld, {
    //   propsData: { msg }
    // });
    const wrapper = mount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("render template", () => {
    // shallowMount浅渲染，只渲染一层。
    // const wrapper = shallowMount(HelloWorld, {
    //   propsData: { msg }
    // });
    const wrapper = mount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("count++", ()=>{
    // 此处不能再次定义wrapper
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
    // expect(isCalled).toBe(true);
    //配合sinon
    // 触发一次
    // expect(change.called).toBe(true);
    // 触发两次
    button.trigger("click");
    expect(change.callCount).toBe(2);
  });
});
