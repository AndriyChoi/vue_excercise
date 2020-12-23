<script>
import { check } from "../utils/auth";
export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true
    }
  },
  render(h, context) {
    const { props, scopedSlots } = context;
    // 如果验证通过则返回传入的插槽。
    return check(props.authority) ? scopedSlots.default() : null;
  }
};
</script>

<style></style>
