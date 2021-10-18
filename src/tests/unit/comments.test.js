import { shallowMount } from "@vue/test-utils";
import Comments from "@/components/Comments.vue";

describe("comments.vue", () => {
  it("should find comments list", () => {
    let wrapper = shallowMount(Comments);
    expect(wrapper.findAll("ul > li").exists());
  });
});
