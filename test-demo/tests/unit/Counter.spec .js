import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("renders props.msg when passed", () => {
    // shallowMount浅渲染，只渲染一层。
    // const wrapper = shallowMount(HelloWorld, {
    //   propsData: { msg }
    // });
    const wrapper = mount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
