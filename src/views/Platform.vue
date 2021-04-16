<template>
  <div class="px-2">
    <!-- controlling area   -->
    <div class="flex ">
      <div class="flex flex-row items-center ml-4">
        <label id="listbox-label1" class="block text-3xl text-o_purple-100 font-semibold mr-2">
          Farm
        </label>
        <div class="relative inline-block text-left">
          <div>
            <button v-on:click="isActive1 = !isActive1" type="button"
                    class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xl font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-o_purple-100" id="options-menu1" aria-haspopup="true" aria-expanded="true">
              {{ select_state1 }}
              <!-- Heroicon name: solid/chevron-down -->
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--
            Dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div v-show="isActive1" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a @click="selectEvent"
                 v-for="f_option in farms" :key="f_option"
                 href="#" class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                {{ f_option }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="searchBar2" class="flex flex-row items-center ml-4">
        <label id="listbox-label2" class="block text-3xl font-semibold text-o_purple-100 mr-2">
          Products code
        </label>
        <div class="relative inline-block text-left">
          <div>
            <button v-on:click="isActive2 = !isActive2" type="button"
                    class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm
                    px-4 py-2 bg-white text-xl font-medium text-gray-700 hover:bg-gray-50 focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-o_purple-100"
                    id="options-menu2" aria-haspopup="true" aria-expanded="true">
              {{ select_state2 }}
              <!-- Heroicon name: solid/chevron-down -->
              <svg class="-mr-1 ml-2 h-5 w-5"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!--
            Dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div v-show="isActive2" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a @click="selectEvent2"
                 v-for="p_option in products" :key="p_option"
                 href="#" class="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                {{ p_option }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <button @click="clear"
              v-if="clearActive"
              type="button"
              class=" ml-3 font-semibold
              inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md
              shadow-sm text-white bg-o_purple-100 hover:bg-o_purple-200 focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-o_purple-100">
        Clear
      </button>
      <button @click="hideNodeTest"
              v-if="false"
              type="button"
              class=" ml-3 font-semibold
              inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md
              shadow-sm text-white bg-o_purple-100 hover:bg-o_purple-200 focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-o_purple-100">
        hide
      </button>
    </div>
    <!-- content area   -->
    <div class="grid grid-cols-8 grid-rows-6 gap-1.5 mt-5 custom-h-inside">
      <!-- product info     -->
      <div class="grid grid-rows-2 row-span-full col-span-2 gap-1.5">
        <ul class="bg-white shadow-2xl text-left mx-2 my-2 text-2xl p-6 rounded-2xl rows-span-1 overflow-auto">
          <li v-show="productCardActivate" class="text-o_purple-200 text-3xl font-semibold">{{ select_state2 }}</li>
          <li v-show="productCardActivate" class="text-o_purple-100 text-2xl font-semibold my-2" v-for="(item, key) in productCardInfo" :key="key">
            <span>{{ key }}</span> : <span>{{ item }}</span>
          </li>
          <li v-show="productCardActivate" class="block text-o_pink text-3xl font-semibold my-4 hover:underline">
            <a :href="productChainLink">
              Blockchain
            </a>
          </li>
        </ul>
        <div class="bg-white shadow-2xl rounded-2xl p-6 mx-2 my-2 rows-span-1 overflow-auto">
          <h1 v-show="detailActive" class="text-o_purple-200 text-4xl font-semibold">
            {{ nodeName }}
          </h1>
          <p v-show="detailActive" class="text-o_purple-100 text-3xl my-3">
            {{ node_info_current }}
          </p>
        </div>
      </div>

      <!--  graph canvas   -->
      <div id="graph" class="rounded-2xl bg-white shadow-2xl mx-2 my-2 col-span-6 row-span-full overflow-auto" ref="canvas"></div>
<!--      <div v-if="false">暫定之後operationlist area</div>-->
    </div>
    <!--     尚無included into grid因此有gap差異-->
    <!--&lt;!&ndash;   width 0 調節aside   &ndash;&gt;111-->
    <div class="grid grid-cols-3 custom-h-inside rounded-2xl shadow-2xl bg-white shadow-2xl mx-2 my-8">
<!--      <img :src="img_source" alt="" />-->
      <aside v-show="imageGalleryActivate" class="cow-span-1 row-span-full flex flex-col overflow-auto">
        <!--  之後改router link    -->
        <div v-for="(path, index) in img_s_sources" :key="path" @click="getIndexAndSelected(index, path)"
             class="flex flex-col p-3 ml-4 justify-center">
          <h1 class="items-end text-o_purple-200 text-3xl font-semibold">
            {{ img_info[index].title }}
          </h1>
          <img :src="path" alt="" class="inline-block w-5/6 items-center"/>
        </div>
      </aside>
      <main v-show="imageGalleryActivate" class="flex flex-col row-span-full col-span-2 overflow-auto ml-2">
        <div class="py-6 pr-6 ml-2">
          <h1 class="text-o_purple-200 text-3xl font-semibold">
            {{ current_img_title }}
          </h1>
          <p class="text-o_purple-100 text-2xl font-semibold mt-2">
            {{ current_img_detail }}
          </p>
        </div>
        <div id="myWindow" class="w-auto h-auto">
            <img id="myContent" :src="img_b_current" alt="" />
        </div>
      </main>
<!--      <span class="row-span-full">hide</span>-->
    </div>
    <div v-if="true">
      Test Part
    </div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
import WZoom from 'vanilla-js-wheel-zoom/src/wheel-zoom'
let graphInstance = {}
export default {
  name: 'Platform',
  components: {},
  data: function () {
    return {
      testData: {},
      node_infos: {},
      node_info_current: '',
      img_info: this.$store.state.imageInfo,
      current_img_title: '',
      current_img_detail: '',
      img_s_sources: this.$store.state.imagePathS,
      img_b_sources: this.$store.state.imagePathB,
      unselected_classes: ['mt-2', 'p-3'],
      selected: true,
      unselected: false,
      showImageList: true,
      img_b_current: '',
      farms: [],
      products: [],
      graph_name: 'g2',
      graphObject: {},
      select_state1: 'Please select',
      select_state2: 'Please select',
      searchBar2: false,
      isActive1: false,
      isActive2: false,
      clearActive: false,
      productCardActivate: false,
      imageGalleryActivate: false,
      productCardInfo: {},
      productChainLink: '',
      nodeActive: false,
      nodeName: '',
      detailActive: false,
      imgContainerW: 0,
      imgContainerH: 0
    }
  },
  created: function () {
    this.farms = this.$store.state.farmlist
    this.node_infos = this.$store.state.nodeInfo

    // vuex獲取server data到state
    this.$store.dispatch('getData')
  },
  mounted () {
    // this.img_s_sources = this.$store.state.imagePathB
    this.$store.state.current_graph_data = {}
    // 我個人覺得我這邊用nextTick有點怪，因為mounted階段已經有DOM了
    this.$nextTick(function () {
      // 動態抓取element寬高的function
      const width = this.$refs.canvas.clientWidth
      const height = this.$refs.canvas.clientHeight
      this.initG6(width, height, this.$store.state.current_graph_data)
    })
    // WZoom放在mounted hook合理，因為他要等DOM建立才能作用
    this.$nextTick(function () {
      WZoom.create('#myContent', {
        // type content: `image` - only one image, `html` - any HTML content
        type: 'image',
        // for type `image` computed auto (if width set null), for type `html` need set real html content width, else computed auto
        width: 1280,
        // for type `image` computed auto (if height set null), for type `html` need set real html content height, else computed auto
        height: 1024,
        // drag scrollable image
        dragScrollable: true,
        // options for the DragScrollable module
        dragScrollableOptions: {
          // smooth extinction moving element after set loose
          smoothExtinction: false,
          // callback triggered when grabbing an element
          onGrab: null,
          // callback triggered when moving an element
          onMove: null,
          // callback triggered when dropping an element
          onDrop: null
        },
        // minimum allowed proportion of scale
        minScale: null,
        // maximum allowed proportion of scale
        maxScale: 4,
        // image resizing speed
        speed: 10
      })
    })

    // server獲取的state灌入到頁面
    // this.testData = this.$store.getters('getData')
  },
  computed: {
  },
  methods: {
    async nodeDetail (nodeName) {
      this.node_info_current = this.node_infos[nodeName].content
    },
    getIndexAndSelected (index) {
      this.showBig(index)
      // this.$refs[index].className = 'mt-2 p-3 block border-4 border-green-800 hover:shadow-2xl'
      // this.$refs[index].classList = ['mt-2', 'p-3', 'block', 'border-4', 'border-green-800', 'hover:shadow-2xl']
      // console.log(this.$refs[index].class)
      this.current_img_title = this.img_info[index].title
      this.current_img_detail = this.img_info[index].detail
      return false
    },
    showBig (index) {
      this.img_b_current = this.img_b_sources[index]
    },
    showDetail (nodeName) {
      this.detailActive = true
      this.nodeDetail(nodeName)
    },
    selectEvent (event) {
      // const i = this.$store.state.graphInstance
      // i.read(this.$store.state.graphs.LMR.g2)
      this.select_state1 = event.target.innerText
      this.isActive1 = !this.isActive1
      this.products = this.$store.state.cardList[this.select_state1]
      this.searchBar2 = true
    },
    selectEvent2 (event) {
      this.clearActive = true
      this.select_state2 = event.target.innerText
      this.isActive2 = !this.isActive2
      this.productCardInfo = this.$store.state.productCardInfo[this.select_state2][0]
      this.productChainLink = this.$store.state.productCardInfo[this.select_state2][1]
      this.productCardActivate = true
      this.imageGalleryActivate = true
      this.$store.state.current_graph_data = this.$store.state.graphs[this.select_state2]
      graphInstance.read(this.$store.state.current_graph_data)
      // show grapph JSON
      console.log(JSON.stringify(this.$store.state.graphs))
    },
    clear () {
      this.searchBar2 = false
      this.clearActive = false
      this.detailActive = false
      this.select_state1 = 'Please select'
      this.productCardActivate = false
      this.imageGalleryActivate = false
      this.$store.state.current_graph_data = {}
      graphInstance.read(this.$store.state.current_graph_data)
    },
    initG6 (w, h, d) {
      const data = d
      // const elementwidth = this.$refs.infoBox.clientWidth
      // const elementheight = this.$refs.infobox.clientHeight
      graphInstance = new G6.Graph({
        container: 'graph',
        fitView: true,
        width: w,
        height: h,
        defaultNode: {
          // fill: '#40a9ff',
          // stroke: '#096dd9'
        },
        defaultEdge: {
          type: 'line',
          style: {
            endArrow: {
              path: G6.Arrow.triangle(10, 10),
              fill: '#413960',
              lineWidth: 3
            },
            stroke: '#413960',
            lineWidth: 1
          }
        },
        layout: {
          type: 'force',
          // type: 'gForce',
          // 防止重疊
          preventOverlap: true,
          linkDistance: 500
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'] // 允许拖拽画布、放缩画布、拖拽节点
        }
      })
      // graph.read(data)
      // graph.on('node:dragstart', function (e) {
      //   graph.layout()
      //   refreshDragedNodePosition(e)
      // })
      // graph.on('node:drag', function (e) {
      //   refreshDragedNodePosition(e)
      // })
      // graph.on('node:dragend', function (e) {
      //   e.item.get('model').fx = null
      //   e.item.get('model').fy = null
      // })
      // function refreshDragedNodePosition (e) {
      //   const model = e.item.get('model')
      //   model.fx = e.x
      //   model.fy = e.y
      // }
      graphInstance.read(data)
      graphInstance.on('node:dragstart', function (e) {
        graphInstance.layout()
        refreshDragedNodePosition(e)
      })
      graphInstance.on('node:drag', function (e) {
        refreshDragedNodePosition(e)
      })
      graphInstance.on('node:dragend', function (e) {
        e.item.get('model').fx = null
        e.item.get('model').fy = null
      })
      // graphInstance.on('node:click', ev => {
      //   const nodeID = ev.item.id
      //   console.log(nodeID)
      //   this.showSomething()
      // })
      // 有時間的話會完成，選取他會highlight node並顯示node name
      // 另外會data紀錄上一個選取的node，選取到另一個就要取消掉上個style
      graphInstance.on('node:click', ev => {
        // some operations
        const nodeInstance = ev.item
        this.nodeName = nodeInstance._cfg.id
        this.showDetail(this.nodeName)
      })

      function refreshDragedNodePosition (e) {
        const model = e.item.get('model')
        model.fx = e.x
        model.fy = e.y
      }
    }
  }
}
</script>

<style scoped>
.custom-h-inside {
  height: 800px;
}
/* #myWindow與#myContent是給秀圖套件用的*/
#myWindow {
  display: flex;
  /*align-items: center;*/
  /*justify-content: center;*/
  overflow: hidden;
}
#myContent {
  position: relative;
  display: flex;
  /*align-items: center;*/
}
</style>
