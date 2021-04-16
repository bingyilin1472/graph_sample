<template>
  <div class="px-2">
    <div class="flex ">
      <!-- 下拉選單1   -->
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
      <!-- 下拉選單2，第一個下拉選單選完才會觸發   -->
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
      <!--  清理畫面，回到尚未選擇前畫面    -->
      <button @click="clear"
              v-if="clearActive"
              type="button"
              class=" ml-3 font-semibold
              inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md
              shadow-sm text-white bg-o_purple-100 hover:bg-o_purple-200 focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-o_purple-100">
        Clear
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

      <div id="graph" class="rounded-2xl bg-white shadow-2xl mx-2 my-2 col-span-6 row-span-full overflow-auto" ref="canvas"></div>
    </div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
// antG6 instance用下面這個graphInstance來存放
let graphInstance = {}
export default {
  name: 'Platform',
  components: {},
  data: function () {
    return {
      // 下拉選單對影變數
      // farms對應到index.js的farmList data
      // products對應到index.js的cardList
      farms: [],
      products: [],
      node_infos: {},
      node_info_current: '',
      select_state1: 'Please select',
      select_state2: 'Please select',
      searchBar2: false,
      isActive1: false,
      isActive2: false,
      clearActive: false,
      productCardActivate: false,
      productCardInfo: {},
      productChainLink: '',
      nodeName: '',
      detailActive: false
    }
  },
  created: function () {
    this.farms = this.$store.state.farmList
    this.node_infos = this.$store.state.nodeInfo
  },
  mounted () {
    this.$store.state.current_graph_data = {}
    // 動態抓取element寬高的function
    const width = this.$refs.canvas.clientWidth
    const height = this.$refs.canvas.clientHeight
    this.initG6(width, height, this.$store.state.current_graph_data)
  },
  methods: {
    async nodeDetail (nodeName) {
      this.node_info_current = this.node_infos[nodeName].content
    },
    showDetail (nodeName) {
      this.detailActive = true
      this.nodeDetail(nodeName)
    },
    selectEvent (event) {
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
      this.$store.state.current_graph_data = this.$store.state.graphs[this.select_state2]
      graphInstance.read(this.$store.state.current_graph_data)
    },
    clear () {
      this.searchBar2 = false
      this.clearActive = false
      this.detailActive = false
      this.select_state1 = 'Please select'
      this.productCardActivate = false
      this.$store.state.current_graph_data = {}
      graphInstance.read(this.$store.state.current_graph_data)
    },
    // 產生graph instance的method
    initG6 (w, h, d) {
      const data = d
      graphInstance = new G6.Graph({
        container: 'graph',
        fitView: true,
        width: w,
        height: h,
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
          // 防止重疊
          preventOverlap: true,
          linkDistance: 500
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'] // 允许拖拽画布、放缩画布、拖拽节点
        }
      })
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
</style>
