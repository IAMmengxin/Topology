<template>
  <div id="mountNode" ref="mountNode"></div>
  <div class="menu" ref="menuRef">
    <div class="center">
      <div class="rect" draggable="true"
           @mousedown="rectMouseDown"
           @dragstart="dragStart"
           @dragend="dragEnd">节点
      </div>
    </div>
  </div>
</template>

<script setup>
import G6, {registerNode, registerEdge} from "@antv/g6";
import {onMounted, ref} from "vue";
import GraphCustom from "@/assets/struct/tool/GraphCustom";
import Vector2 from "@/assets/struct/tool/Vector2";
import G6Manager from "@/assets/struct/function/G6Manager";
import RectGroup from "@/assets/struct/group-node/RectGroup";

const menuRef = ref(null);
const showMove = ref(false);
// const rectMoveRef = ref(null);
const mountNode = ref(null);
onMounted(() => {
  console.log("G6版本:", G6.Global.version)
  GraphCustom.Instance.createGraph(mountNode);
  G6Manager.setMenuWidth(menuRef.value.offsetWidth);
})
const Zero = Vector2.Zero;
// let startMousePosition = Zero;
let rectDragPosition = Zero;

function rectMouseDown(e) {
  // showMove.value = true;
}

function dragStart(e) {
  // startMousePosition = new Vector2(e.x, e.y);
  rectDragPosition = new Vector2(e.offsetX, e.offsetY);
}

// window.addEventListener('mousemove', (e) => {
//   if (startMousePosition !== Zero) {
//     const targetOffset = Vector2.V2Reduce(e, startMousePosition);
//     rectMoveRef.value.style.left = (rectDragPosition.x +
//         targetOffset.x) + 'px';
//     rectMoveRef.value.style.top = (rectDragPosition.y +
//         targetOffset.y) + 'px';
//   }
// })
function dragEnd(e) {
    // debugger
    // rectMoveRef.value.style.left = rectDragPosition.x + 'px';
    // rectMoveRef.value.style.top = rectDragPosition.y + 'px';
  rectDragPosition = new Vector2(e.offsetX,e.offsetY);
  // G6Manager.addNode(new NodeConstruct(G6Manager.getRandomId(),"newName",rectDragPosition.x,rectDragPosition.y,
  // [30,30],Config.NodeBuildInType.rect));
  RectGroup.addRectComb(rectDragPosition.x,rectDragPosition.y,[80,30])
}
</script>
<style scoped>
#mountNode {
  position: absolute;
  left: 10vw;
  width: 90vw;
  height: 100vh;
}

.menu {
  background-color: #f7f9fb;
  width: 10vw;
  height: 100vh;
  display: flex;
}

.rect {
  user-select: none;
  margin-top: 10px;
  width: 150px;
  height: 20px;
  //border: black solid 1px;
  text-align: center;
  background-color: #cccfd0;
}

.rect:hover {
  cursor: move;
  background: white;
  border: 1px solid #ced4d9;
}

.move {
  position: absolute;
}

.center {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
