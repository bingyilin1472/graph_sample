import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    graphs: {
      '2020C1-Lu Ming Rice_Tainan 16': {
        nodes: [
          // 可以利用 \n  換行
          {
            id: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            groupId: 'farmer',
            // visible: false,
            size: 170,
            label: '2020C1-\nLu Ming Rice_\nTian-Shang Chang',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#fe917d' }
          },
          {
            id: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            groupId: 'farmer',
            size: 170,
            label: '2020C1-\nLu Ming Rice_\nJin-Shi Hsieh',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#fe917d' }
          },
          {
            id: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            groupId: 'farmer',
            size: 170,
            label: '2020C1-\nLu Ming Rice_\nCheng-Po Hsu',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#fe917d' }
          },
          {
            id: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            groupId: 'farmer',
            size: 150,
            label: '2020C1-\nLu Ming Rice_\nJin-Nan Hsieh',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#fe917d' }
          }, // operations1
          {
            id: 'Rice Seed Transplantation',
            size: 170,
            label: 'Rice Seed\n Transplantation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Site Preparation',
            size: 170,
            label: 'Site Preparation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Irrigation',
            size: 170,
            label: 'Irrigation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Fertilization',
            size: 170,
            label: 'Fertilization',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Biotic Suppression Operation',
            size: 170,
            label: 'Biotic\n Suppression Operation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          }, // operation2
          {
            id: 'Harvesting And Milling',
            size: 170,
            label: 'Harvesting\n And Milling',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Delivering',
            size: 170,
            label: 'Delivering',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Pesticide And Detecting',
            size: 170,
            label: 'Pesticide\n And Detecting',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Rice House',
            size: 170,
            label: 'Rice House',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Tian-Shang Chang\'s Organic Farm',
            size: 170,
            label: 'Tian-Shang Chang\'s\n Organic Farm',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Jin-Shi Hsieh\'s Organic Farm',
            size: 170,
            label: 'Jin-Shi Hsieh\'s\n Organic Farm',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Cheng-Po Hsu\'s Organic Farm',
            size: 170,
            label: 'Cheng-Po Hsu\'s\n Organic Farm',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Jin-Nan Hsieh\'s Organic Farm',
            size: 170,
            label: 'Jin-Nan Hsieh\'s\n Organic Farm',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Rice Transplanter',
            size: 170,
            label: 'Rice \nTransplanter',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tractor',
            size: 170,
            label: 'Tractor',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Irrigating',
            size: 170,
            label: 'Irrigating',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Drainaging',
            size: 170,
            label: 'Drainaging',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow organic fertilizer 426',
            size: 170,
            label: 'Fusow organic\n fertilizer 426',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Ear fertilizer',
            size: 170,
            label: 'Ear fertilizer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow special fertilizer for organic cultivation 522',
            size: 170,
            label: 'Fusow special\n fertilizer for\n organic cultivation\n 522',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fagopyrum Esculentum Seed',
            size: 170,
            label: 'Fagopyrum \nEsculentum Seed',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tea Seed Meal',
            size: 170,
            label: 'Tea Seed Meal',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Brown Rice Milling + Package',
            size: 170,
            label: 'Brown Rice \nMilling + Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Milled Rice+Package',
            size: 170,
            label: 'Milled Rice\n+Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Paddy Dryer',
            size: 170,
            label: 'Low Temperature\n Paddy Dryer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Bin',
            size: 170,
            label: 'Low Temperature\n Bin',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Paddy complete harvester',
            size: 170,
            label: 'Paddy complete\n harvester',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Pass',
            size: 170,
            label: 'Pass',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          }
        ],
        edges: [
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Rice Seed Transplantation'
          },
          {
            source: 'Rice Seed Transplantation',
            target: "Tian-Shang Chang's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Site Preparation'
          },
          { source: 'Site Preparation', target: "Tian-Shang Chang's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Tian-Shang Chang', target: 'Irrigation' },
          { source: 'Irrigation', target: "Tian-Shang Chang's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Tian-Shang Chang', target: 'Fertilization' },
          { source: 'Fertilization', target: "Tian-Shang Chang's Organic Farm" },
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Biotic Suppression Operation'
          },
          {
            source: 'Biotic Suppression Operation',
            target: "Tian-Shang Chang's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Harvesting And Milling'
          },
          { source: '2020C1-Lu Ming Rice_Tian-Shang Chang', target: 'Delivering' },
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Pesticide And Detecting'
          },
          {
            source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            target: 'Rice Seed Transplantation'
          },
          {
            source: 'Rice Seed Transplantation',
            target: "Jin-Shi Hsieh's Organic Farm"
          },
          { source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh', target: 'Site Preparation' },
          { source: 'Site Preparation', target: "Jin-Shi Hsieh's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh', target: 'Irrigation' },
          { source: 'Irrigation', target: "Jin-Shi Hsieh's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh', target: 'Fertilization' },
          { source: 'Fertilization', target: "Jin-Shi Hsieh's Organic Farm" },
          {
            source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            target: 'Biotic Suppression Operation'
          },
          {
            source: 'Biotic Suppression Operation',
            target: "Jin-Shi Hsieh's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            target: 'Harvesting And Milling'
          },
          { source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh', target: 'Delivering' },
          {
            source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            target: 'Pesticide And Detecting'
          },
          {
            source: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            target: 'Rice Seed Transplantation'
          },
          {
            source: 'Rice Seed Transplantation',
            target: "Cheng-Po Hsu's Organic Farm"
          },
          { source: '2020C1-Lu Ming Rice_Cheng-Po Hsu', target: 'Site Preparation' },
          { source: 'Site Preparation', target: "Cheng-Po Hsu's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Cheng-Po Hsu', target: 'Irrigation' },
          { source: 'Irrigation', target: "Cheng-Po Hsu's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Cheng-Po Hsu', target: 'Fertilization' },
          { source: 'Fertilization', target: "Cheng-Po Hsu's Organic Farm" },
          {
            source: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            target: 'Biotic Suppression Operation'
          },
          {
            source: 'Biotic Suppression Operation',
            target: "Cheng-Po Hsu's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            target: 'Harvesting And Milling'
          },
          { source: '2020C1-Lu Ming Rice_Cheng-Po Hsu', target: 'Delivering' },
          {
            source: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            target: 'Pesticide And Detecting'
          },
          {
            source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            target: 'Rice Seed Transplantation'
          },
          {
            source: 'Rice Seed Transplantation',
            target: "Jin-Nan Hsieh's Organic Farm"
          },
          { source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh', target: 'Site Preparation' },
          { source: 'Site Preparation', target: "Jin-Nan Hsieh's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh', target: 'Irrigation' },
          { source: 'Irrigation', target: "Jin-Nan Hsieh's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh', target: 'Fertilization' },
          { source: 'Fertilization', target: "Jin-Nan Hsieh's Organic Farm" },
          {
            source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            target: 'Biotic Suppression Operation'
          },
          {
            source: 'Biotic Suppression Operation',
            target: "Jin-Nan Hsieh's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            target: 'Harvesting And Milling'
          },
          { source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh', target: 'Delivering' },
          {
            source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            target: 'Pesticide And Detecting'
          },
          { source: 'Harvesting And Milling', target: 'Rice House' },
          { source: 'Delivering', target: 'Rice House' },
          { source: 'Pesticide And Detecting', target: 'Rice House' },
          { source: 'Rice Seed Transplantation', target: 'Rice Transplanter' },
          { source: 'Site Preparation', target: 'Tractor' },
          { source: 'Irrigation', target: 'Irrigating' },
          { source: 'Irrigation', target: 'Drainaging' },
          { source: 'Fertilization', target: 'Fusow organic fertilizer 426' },
          { source: 'Fertilization', target: 'Ear fertilizer' },
          { source: 'Fertilization', target: 'Fusow special fertilizer for organic cultivation 522' },
          { source: 'Fertilization', target: 'Fagopyrum Esculentum Seed' },
          { source: 'Biotic Suppression Operation', target: 'Tea Seed Meal' },
          {
            source: 'Harvesting And Milling',
            target: 'Brown Rice Milling + Package'
          },
          { source: 'Harvesting And Milling', target: 'Milled Rice+Package' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Paddy Dryer' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Bin' },
          { source: 'Harvesting And Milling', target: 'Paddy complete harvester' },
          { source: 'Pesticide And Detecting', target: 'Pass' }
        ]
      },
      '2020C1-Lu Ming Rice_Tian-Shang Chang': {
        nodes: [
          {
            id: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            groupId: 'farmer',
            size: 170,
            label: '2020C1-\nLu Ming Rice_\nTian-Shang Chang',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#fe917d' }
          }, // operations1
          {
            id: 'Rice Seed Transplantation',
            groupId: 'operation',
            size: 170,
            label: 'Rice Seed\n Transplantation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Site Preparation',
            groupId: 'operation',
            size: 170,
            label: 'Site Preparation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Irrigation',
            groupId: 'operation',
            size: 170,
            label: 'Irrigation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Fertilization',
            groupId: 'operation',
            size: 170,
            label: 'Fertilization',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Biotic Suppression Operation',
            groupId: 'operation',
            size: 170,
            label: 'Biotic\n Suppression Operation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          }, // operation2
          {
            id: 'Harvesting And Milling',
            groupId: 'operation',
            size: 170,
            label: 'Harvesting\n And Milling',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Delivering',
            groupId: 'operation',
            size: 170,
            label: 'Delivering',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Pesticide And Detecting',
            groupId: 'operation',
            size: 170,
            label: 'Pesticide\n And Detecting',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Rice House',
            groupId: 'site',
            size: 170,
            label: 'Rice House',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Tian-Shang Chang\'s Organic Farm',
            groupId: 'site',
            size: 170,
            label: 'Tian-Shang Chang\'s\n Organic Farm',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Rice Transplanter',
            groupId: 'operation_detail',
            size: 170,
            label: 'Rice \nTransplanter',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tractor',
            groupId: 'operation_detail',
            size: 170,
            label: 'Tractor',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Irrigating',
            groupId: 'operation_detail',
            size: 170,
            label: 'Irrigating',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Drainaging',
            groupId: 'operation_detail',
            size: 170,
            label: 'Drainaging',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow organic fertilizer 426',
            groupId: 'operation_detail',
            size: 170,
            label: 'Fusow organic\n fertilizer 426',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Ear fertilizer',
            groupId: 'operation_detail',
            size: 170,
            label: 'Ear fertilizer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow special fertilizer for organic cultivation 522',
            groupId: 'operation_detail',
            size: 170,
            label: 'Fusow special\n fertilizer for\n organic cultivation\n 522',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fagopyrum Esculentum Seed',
            groupId: 'operation_detail',
            size: 170,
            label: 'Fagopyrum \nEsculentum Seed',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tea Seed Meal',
            groupId: 'operation_detail',
            size: 170,
            label: 'Tea Seed Meal',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Brown Rice Milling + Package',
            groupId: 'operation_detail',
            size: 170,
            label: 'Brown Rice \nMilling + Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Milled Rice+Package',
            groupId: 'operation_detail',
            size: 170,
            label: 'Milled Rice\n+Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Paddy Dryer',
            groupId: 'operation_detail',
            size: 170,
            label: 'Low Temperature\n Paddy Dryer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Bin',
            groupId: 'operation_detail',
            size: 170,
            label: 'Low Temperature\n Bin',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Paddy complete harvester',
            groupId: 'operation_detail',
            size: 170,
            label: 'Paddy complete\n harvester',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Pass',
            groupId: 'operation_detail',
            size: 170,
            label: 'Pass',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          }
        ],
        edges: [
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Rice Seed Transplantation'
          },
          {
            source: 'Rice Seed Transplantation',
            target: "Tian-Shang Chang's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Site Preparation'
          },
          { source: 'Site Preparation', target: "Tian-Shang Chang's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Tian-Shang Chang', target: 'Irrigation' },
          { source: 'Irrigation', target: "Tian-Shang Chang's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Tian-Shang Chang', target: 'Fertilization' },
          { source: 'Fertilization', target: "Tian-Shang Chang's Organic Farm" },
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Biotic Suppression Operation'
          },
          {
            source: 'Biotic Suppression Operation',
            target: "Tian-Shang Chang's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Harvesting And Milling'
          },
          { source: '2020C1-Lu Ming Rice_Tian-Shang Chang', target: 'Delivering' },
          {
            source: '2020C1-Lu Ming Rice_Tian-Shang Chang',
            target: 'Pesticide And Detecting'
          },
          { source: 'Harvesting And Milling', target: 'Rice House' },
          { source: 'Delivering', target: 'Rice House' },
          { source: 'Pesticide And Detecting', target: 'Rice House' },
          { source: 'Rice Seed Transplantation', target: 'Rice Transplanter' },
          { source: 'Site Preparation', target: 'Tractor' },
          { source: 'Irrigation', target: 'Irrigating' },
          { source: 'Irrigation', target: 'Drainaging' },
          { source: 'Fertilization', target: 'Fusow organic fertilizer 426' },
          { source: 'Fertilization', target: 'Ear fertilizer' },
          {
            source: 'Fertilization',
            target: 'Fusow special fertilizer for organic cultivation 522'
          },
          { source: 'Fertilization', target: 'Fagopyrum Esculentum Seed' },
          { source: 'Biotic Suppression Operation', target: 'Tea Seed Meal' },
          {
            source: 'Harvesting And Milling',
            target: 'Brown Rice Milling + Package'
          },
          { source: 'Harvesting And Milling', target: 'Milled Rice+Package' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Paddy Dryer' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Bin' },
          { source: 'Harvesting And Milling', target: 'Paddy complete harvester' },
          { source: 'Pesticide And Detecting', target: 'Pass' }
        ]
      },
      '2020C1-Lu Ming Rice_Jin-Shi Hsieh': {
        nodes: [
          {
            id: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            size: 170,
            label: '2020C1-\nLu Ming Rice_\nJin-Shi Hsieh',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#fe917d' }
          }, // operations1
          {
            id: 'Rice Seed Transplantation',
            size: 170,
            label: 'Rice Seed\n Transplantation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Site Preparation',
            size: 170,
            label: 'Site Preparation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Irrigation',
            size: 170,
            label: 'Irrigation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Fertilization',
            size: 170,
            label: 'Fertilization',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Biotic Suppression Operation',
            size: 170,
            label: 'Biotic\n Suppression Operation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          }, // operation2
          {
            id: 'Harvesting And Milling',
            size: 170,
            label: 'Harvesting\n And Milling',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Delivering',
            size: 170,
            label: 'Delivering',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Pesticide And Detecting',
            size: 170,
            label: 'Pesticide\n And Detecting',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Rice House',
            size: 170,
            label: 'Rice House',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Jin-Shi Hsieh\'s Organic Farm',
            size: 170,
            label: 'Jin-Shi Hsieh\'s\n Organic Farm',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Rice Transplanter',
            size: 170,
            label: 'Rice \nTransplanter',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tractor',
            size: 170,
            label: 'Tractor',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Irrigating',
            size: 170,
            label: 'Irrigating',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Drainaging',
            size: 170,
            label: 'Drainaging',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow organic fertilizer 426',
            size: 170,
            label: 'Fusow organic\n fertilizer 426',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Ear fertilizer',
            size: 170,
            label: 'Ear fertilizer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow special fertilizer for organic cultivation 522',
            size: 170,
            label: 'Fusow special\n fertilizer for\n organic cultivation\n 522',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fagopyrum Esculentum Seed',
            size: 170,
            label: 'Fagopyrum \nEsculentum Seed',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tea Seed Meal',
            size: 170,
            label: 'Tea Seed Meal',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Brown Rice Milling + Package',
            size: 170,
            label: 'Brown Rice \nMilling + Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Milled Rice+Package',
            size: 170,
            label: 'Milled Rice\n+Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Paddy Dryer',
            size: 170,
            label: 'Low Temperature\n Paddy Dryer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Bin',
            size: 170,
            label: 'Low Temperature\n Bin',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Paddy complete harvester',
            size: 170,
            label: 'Paddy complete\n harvester',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Pass',
            size: 170,
            label: 'Pass',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          }
        ],
        edges: [
          {
            source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            target: 'Rice Seed Transplantation'
          },
          {
            source: 'Rice Seed Transplantation',
            target: "Jin-Shi Hsieh's Organic Farm"
          },
          { source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh', target: 'Site Preparation' },
          { source: 'Site Preparation', target: "Jin-Shi Hsieh's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh', target: 'Irrigation' },
          { source: 'Irrigation', target: "Jin-Shi Hsieh's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh', target: 'Fertilization' },
          { source: 'Fertilization', target: "Jin-Shi Hsieh's Organic Farm" },
          {
            source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            target: 'Biotic Suppression Operation'
          },
          {
            source: 'Biotic Suppression Operation',
            target: "Jin-Shi Hsieh's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            target: 'Harvesting And Milling'
          },
          { source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh', target: 'Delivering' },
          {
            source: '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
            target: 'Pesticide And Detecting'
          },
          { source: 'Harvesting And Milling', target: 'Rice House' },
          { source: 'Delivering', target: 'Rice House' },
          { source: 'Pesticide And Detecting', target: 'Rice House' }, { source: 'Pesticide And Detecting', target: 'Rice House' },
          { source: 'Rice Seed Transplantation', target: 'Rice Transplanter' },
          { source: 'Site Preparation', target: 'Tractor' },
          { source: 'Irrigation', target: 'Irrigating' },
          { source: 'Irrigation', target: 'Drainaging' },
          { source: 'Fertilization', target: 'Fusow organic fertilizer 426' },
          { source: 'Fertilization', target: 'Ear fertilizer' },
          {
            source: 'Fertilization',
            target: 'Fusow special fertilizer for organic cultivation 522'
          },
          { source: 'Fertilization', target: 'Fagopyrum Esculentum Seed' },
          { source: 'Biotic Suppression Operation', target: 'Tea Seed Meal' },
          {
            source: 'Harvesting And Milling',
            target: 'Brown Rice Milling + Package'
          },
          { source: 'Harvesting And Milling', target: 'Milled Rice+Package' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Paddy Dryer' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Bin' },
          { source: 'Harvesting And Milling', target: 'Paddy complete harvester' },
          { source: 'Pesticide And Detecting', target: 'Pass' }
        ]
      },
      '2020C1-Lu Ming Rice_Cheng-Po Hsu': {
        nodes: [
          {
            id: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            size: 170,
            label: '2020C1-\nLu Ming Rice_\nCheng-Po Hsu',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#fe917d' }
          }, // operations1
          {
            id: 'Rice Seed Transplantation',
            size: 170,
            label: 'Rice Seed\n Transplantation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Site Preparation',
            size: 170,
            label: 'Site Preparation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Irrigation',
            size: 170,
            label: 'Irrigation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Fertilization',
            size: 170,
            label: 'Fertilization',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Biotic Suppression Operation',
            size: 170,
            label: 'Biotic\n Suppression Operation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          }, // operation2
          {
            id: 'Harvesting And Milling',
            size: 170,
            label: 'Harvesting\n And Milling',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Delivering',
            size: 170,
            label: 'Delivering',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Pesticide And Detecting',
            size: 170,
            label: 'Pesticide\n And Detecting',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Rice House',
            size: 170,
            label: 'Rice House',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Cheng-Po Hsu\'s Organic Farm',
            size: 170,
            label: 'Cheng-Po Hsu\'s\n Organic Farm',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Rice Transplanter',
            size: 170,
            label: 'Rice \nTransplanter',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tractor',
            size: 170,
            label: 'Tractor',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Irrigating',
            size: 170,
            label: 'Irrigating',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Drainaging',
            size: 170,
            label: 'Drainaging',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow organic fertilizer 426',
            size: 170,
            label: 'Fusow organic\n fertilizer 426',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Ear fertilizer',
            size: 170,
            label: 'Ear fertilizer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow special fertilizer for organic cultivation 522',
            size: 170,
            label: 'Fusow special\n fertilizer for\n organic cultivation\n 522',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fagopyrum Esculentum Seed',
            size: 170,
            label: 'Fagopyrum \nEsculentum Seed',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tea Seed Meal',
            size: 170,
            label: 'Tea Seed Meal',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Brown Rice Milling + Package',
            size: 170,
            label: 'Brown Rice \nMilling + Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Milled Rice+Package',
            size: 170,
            label: 'Milled Rice\n+Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Paddy Dryer',
            size: 170,
            label: 'Low Temperature\n Paddy Dryer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Bin',
            size: 170,
            label: 'Low Temperature\n Bin',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Paddy complete harvester',
            size: 170,
            label: 'Paddy complete\n harvester',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Pass',
            size: 170,
            label: 'Pass',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          }
        ],
        edges: [
          {
            source: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            target: 'Rice Seed Transplantation'
          },
          {
            source: 'Rice Seed Transplantation',
            target: "Cheng-Po Hsu's Organic Farm"
          },
          { source: '2020C1-Lu Ming Rice_Cheng-Po Hsu', target: 'Site Preparation' },
          { source: 'Site Preparation', target: "Cheng-Po Hsu's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Cheng-Po Hsu', target: 'Irrigation' },
          { source: 'Irrigation', target: "Cheng-Po Hsu's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Cheng-Po Hsu', target: 'Fertilization' },
          { source: 'Fertilization', target: "Cheng-Po Hsu's Organic Farm" },
          {
            source: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            target: 'Biotic Suppression Operation'
          },
          {
            source: 'Biotic Suppression Operation',
            target: "Cheng-Po Hsu's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            target: 'Harvesting And Milling'
          },
          { source: '2020C1-Lu Ming Rice_Cheng-Po Hsu', target: 'Delivering' },
          {
            source: '2020C1-Lu Ming Rice_Cheng-Po Hsu',
            target: 'Pesticide And Detecting'
          },
          { source: 'Harvesting And Milling', target: 'Rice House' },
          { source: 'Delivering', target: 'Rice House' },
          { source: 'Pesticide And Detecting', target: 'Rice House' },
          { source: 'Rice Seed Transplantation', target: 'Rice Transplanter' },
          { source: 'Site Preparation', target: 'Tractor' },
          { source: 'Irrigation', target: 'Irrigating' },
          { source: 'Irrigation', target: 'Drainaging' },
          { source: 'Fertilization', target: 'Fusow organic fertilizer 426' },
          { source: 'Fertilization', target: 'Ear fertilizer' },
          {
            source: 'Fertilization',
            target: 'Fusow special fertilizer for organic cultivation 522'
          },
          { source: 'Fertilization', target: 'Fagopyrum Esculentum Seed' },
          { source: 'Biotic Suppression Operation', target: 'Tea Seed Meal' },
          {
            source: 'Harvesting And Milling',
            target: 'Brown Rice Milling + Package'
          },
          { source: 'Harvesting And Milling', target: 'Milled Rice+Package' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Paddy Dryer' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Bin' },
          { source: 'Harvesting And Milling', target: 'Paddy complete harvester' },
          { source: 'Pesticide And Detecting', target: 'Pass' }
        ]
      },
      '2020C1-Lu Ming Rice_Jin-Nan Hsieh': {
        nodes: [
          {
            id: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            size: 170,
            label: '2020C1-\nLu Ming Rice_\nJin-Nan Hsieh',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#fe917d' }
          }, // operations1
          {
            id: 'Rice Seed Transplantation',
            size: 170,
            label: 'Rice Seed\n Transplantation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Site Preparation',
            size: 170,
            label: 'Site Preparation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Irrigation',
            size: 170,
            label: 'Irrigation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Fertilization',
            size: 170,
            label: 'Fertilization',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Biotic Suppression Operation',
            size: 170,
            label: 'Biotic\n Suppression Operation',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          }, // operation2
          {
            id: 'Harvesting And Milling',
            size: 170,
            label: 'Harvesting\n And Milling',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Delivering',
            size: 170,
            label: 'Delivering',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Pesticide And Detecting',
            size: 170,
            label: 'Pesticide\n And Detecting',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#85d0a0' }
          },
          {
            id: 'Rice House',
            size: 170,
            label: 'Rice House',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Jin-Nan Hsieh\'s Organic Farm',
            size: 170,
            label: 'Jin-Nan Hsieh\'s\n Organic Farm',
            labelCfg: { style: { fontSize: 16 } },
            style: { stroke: '#413960', fill: '#ffffff' }
          },
          {
            id: 'Rice Transplanter',
            size: 170,
            label: 'Rice \nTransplanter',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tractor',
            size: 170,
            label: 'Tractor',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Irrigating',
            size: 170,
            label: 'Irrigating',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Drainaging',
            size: 170,
            label: 'Drainaging',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow organic fertilizer 426',
            size: 170,
            label: 'Fusow organic\n fertilizer 426',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Ear fertilizer',
            size: 170,
            label: 'Ear fertilizer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fusow special fertilizer for organic cultivation 522',
            size: 170,
            label: 'Fusow special\n fertilizer for\n organic cultivation\n 522',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Fagopyrum Esculentum Seed',
            size: 170,
            label: 'Fagopyrum \nEsculentum Seed',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Tea Seed Meal',
            size: 170,
            label: 'Tea Seed Meal',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Brown Rice Milling + Package',
            size: 170,
            label: 'Brown Rice \nMilling + Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Milled Rice+Package',
            size: 170,
            label: 'Milled Rice\n+Package',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Paddy Dryer',
            size: 170,
            label: 'Low Temperature\n Paddy Dryer',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Low Temperature Bin',
            size: 170,
            label: 'Low Temperature\n Bin',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Paddy complete harvester',
            size: 170,
            label: 'Paddy complete\n harvester',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          },
          {
            id: 'Pass',
            size: 170,
            label: 'Pass',
            labelCfg: { style: { fontSize: 16, fill: '#ffffff' } },
            style: { stroke: '#413960', fill: '#6154a5' }
          }
        ],
        edges: [
          {
            source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            target: 'Rice Seed Transplantation'
          },
          {
            source: 'Rice Seed Transplantation',
            target: "Jin-Nan Hsieh's Organic Farm"
          },
          { source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh', target: 'Site Preparation' },
          { source: 'Site Preparation', target: "Jin-Nan Hsieh's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh', target: 'Irrigation' },
          { source: 'Irrigation', target: "Jin-Nan Hsieh's Organic Farm" },
          { source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh', target: 'Fertilization' },
          { source: 'Fertilization', target: "Jin-Nan Hsieh's Organic Farm" },
          {
            source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            target: 'Biotic Suppression Operation'
          },
          {
            source: 'Biotic Suppression Operation',
            target: "Jin-Nan Hsieh's Organic Farm"
          },
          {
            source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            target: 'Harvesting And Milling'
          },
          { source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh', target: 'Delivering' },
          {
            source: '2020C1-Lu Ming Rice_Jin-Nan Hsieh',
            target: 'Pesticide And Detecting'
          },
          { source: 'Harvesting And Milling', target: 'Rice House' },
          { source: 'Delivering', target: 'Rice House' },
          { source: 'Pesticide And Detecting', target: 'Rice House' },
          { source: 'Rice Seed Transplantation', target: 'Rice Transplanter' },
          { source: 'Site Preparation', target: 'Tractor' },
          { source: 'Irrigation', target: 'Irrigating' },
          { source: 'Irrigation', target: 'Drainaging' },
          { source: 'Fertilization', target: 'Fusow organic fertilizer 426' },
          { source: 'Fertilization', target: 'Ear fertilizer' },
          {
            source: 'Fertilization',
            target: 'Fusow special fertilizer for organic cultivation 522'
          },
          { source: 'Fertilization', target: 'Fagopyrum Esculentum Seed' },
          { source: 'Biotic Suppression Operation', target: 'Tea Seed Meal' },
          {
            source: 'Harvesting And Milling',
            target: 'Brown Rice Milling + Package'
          },
          { source: 'Harvesting And Milling', target: 'Milled Rice+Package' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Paddy Dryer' },
          { source: 'Harvesting And Milling', target: 'Low Temperature Bin' },
          { source: 'Harvesting And Milling', target: 'Paddy complete harvester' },
          { source: 'Pesticide And Detecting', target: 'Pass' }
        ]
      }
    },
    productCardInfo: {
      '2020C1-Lu Ming Rice_Tainan 16': [{
        Farm: 'Rice House',
        City: 'Changhua County',
        Town: 'Erlin Town',
        Address: 'Mo. 2-3. Rulin Rd.,Nanguang Vil.',
        Phone: '04 896 5111'
      }, 'http://140.112.76.152:4000/address/0x1718253eeF065C14d2640025a4F5920c6e47B93B/transactions'],
      '2020C1-Lu Ming Rice_Tian-Shang Chang': [{
        Farm: 'Rice House',
        City: 'Changhua County',
        Town: 'Erlin Town',
        Address: 'Mo. 2-3. Rulin Rd.,Nanguang Vil.',
        Phone: '04 896 5111'
      }, 'http://140.112.76.152:4000/address/0xacC6aDb7D8a035728A73787ddEe3cfbFdeFe46Bd/transactions'],
      '2020C1-Lu Ming Rice_Cheng-Po Hsu': [{
        Farm: 'Rice House',
        City: 'Changhua County',
        Town: 'Erlin Town',
        Address: 'Mo. 2-3. Rulin Rd.,Nanguang Vil.',
        Phone: '04 896 5111'
      }, 'http://140.112.76.152:4000/address/0x56786Ee81b9Ffb4f7d589653e64295c10E6f2527/transactions'],
      '2020C1-Lu Ming Rice_Jin-Shi Hsieh': [{
        Farm: 'Rice House',
        City: 'Changhua County',
        Town: 'Erlin Town',
        Address: 'Mo. 2-3. Rulin Rd.,Nanguang Vil.',
        Phone: '04 896 5111'
      }, 'http://140.112.76.152:4000/address/0x6781Ef28252A3A9e15A8bFe44C4558D7ab1C767D/transactions'],
      '2020C1-Lu Ming Rice_Jin-Nan Hsieh': [{
        Farm: 'Rice House',
        City: 'Changhua County',
        Town: 'Erlin Town',
        Address: 'Mo. 2-3. Rulin Rd.,Nanguang Vil.',
        Phone: '04 896 5111'
      }, 'http://140.112.76.152:4000/address/0x08C6D4122955d1471AaD762c71b96EB15Dae50ef/transactions']
    },
    farmList: [
      'Rice House'
    ],
    cardList: {
      'Rice House': [
        '2020C1-Lu Ming Rice_Tainan 16',
        '2020C1-Lu Ming Rice_Tian-Shang Chang',
        '2020C1-Lu Ming Rice_Jin-Shi Hsieh',
        '2020C1-Lu Ming Rice_Cheng-Po Hsu',
        '2020C1-Lu Ming Rice_Jin-Nan Hsieh'
      ]
    },
    nodeInfo: {
      '2020C1-Lu Ming Rice_Tian-Shang Chang': { content: 'Product & Farmer' },
      '2020C1-Lu Ming Rice_Jin-Shi Hsieh': { content: 'Product & Farmer' },
      '2020C1-Lu Ming Rice_Jin-Nan Hsieh': { content: 'Product & Farmer' },
      '2020C1-Lu Ming Rice_Cheng-Po Hsu': { content: 'Product & Farmer' },
      'Rice House': { content: 'Rice Mill' },
      'Cheng-Po Hsu\'s Organic Farm': { content: 'Farmer & Farm' },
      'Tian-Shang Chang\'s Organic Farm': { content: 'Farmer & Farm' },
      'Jin-Shi Hsieh\'s Organic Farm': { content: 'Farmer & Farm' },
      'Jin-Nan Hsieh\'s Organic Farm': { content: 'Farmer & Farm' },
      'Site Preparation': {
        content: 'Land preparation: \n' +
          'The main purpose of land preparation is to have the soil in optimum physical condition for growing rice.'
      },
      'Rice Seed Transplantation': {
        content: 'Crop establishment: \n' +
          'Transplanting occurs when pre-germinated seedlings are transferred from a seedbed to the wet field.'
      },
      Irrigation: {
        content: 'Water management: \n' +
          'Cultivated rice is extremely sensitive to water shortages and when the soil water content drops below saturation.'
      },
      Fertilization: {
        content: 'Nutrient management: \n' +
          'Applying nutrients to the crop is essential in managing soil fertility so the plants grow and develop normally.'
      },
      'Biotic Suppression Operation': {
        content: 'Crop health management: \n' +
          'Depending upon various factors, Pest control management is crucial.'
      },
      'Harvesting And Milling': {
        content: 'Harvesting & Post harvest: \n' +
          'Harvesting activities include cutting, stacking, handling, threshing, cleaning, and hauling.\n' +
          'Post harvest steps include drying, storing, milling, and final processing.'
      },
      'Pesticide And Detecting': {
        content: 'Post harvest: \n' +
          'Pesticide residue test.'
      },
      Delivering: {
        content: 'Post harvest: \n' +
          'Transports rice to their destination via vehicles which must be cleaned, sanitized, and ready to operate.'
      },
      Tractor: {
        content: 'Land preparation: \n' +
          'The proper preparation of land for sowing is achieved via tractors'
      },
      'Rice Transplanter': {
        content: 'Crop establishment: \n' +
          'Seedlings can be transplanted by rice tensplantor.'
      },
      Drainaging: {
        content: 'Water management: \n' +
          'artificial application of water from land.'
      },
      Irrigating: {
        content: 'Water management: \n' +
          'artificial application of water to land.'
      },
      'Fusow organic fertilizer 426': {
        content: 'Nutrient management: \n' +
          'At each growth stage, the rice plant has specific nutrient needs.'
      },
      'Fusow special fertilizer for organic cultivation 522': {
        content: 'Nutrient management: \n' +
          'At each growth stage, the rice plant has specific nutrient needs.'
      },
      'Fagopyrum Esculentum Seed': {
        content: 'Nutrient management: \n' +
          'At each growth stage, the rice plant has specific nutrient needs.'
      },
      'Ear fertilizer': {
        content: 'Nutrient management: \n' +
          'At each growth stage, the rice plant has specific nutrient needs.'
      },
      'Tea Seed Meal': {
        content: 'Crop health management: \n' +
          'Farmers manage Pest control through non-pesticide materials.'
      },
      'Paddy complete harvester': {
        content: 'Harvesting: \n' +
          'Harvesting can be done by harvester.'
      },
      'Low Temperature Bin': {
        content: 'Post harvest: \n' +
          'Low temperature storage conditions will ensure minimal loss of paddy rice due to ' +
          'changes in weather and moisture content, rodents, insects, microorganisms etc.'
      },
      'Low Temperature Paddy Dryer': {
        content: 'Post harvest: \n' +
          'Rice can be stored for longer periods if moisture content is maintained at less than 14%.'
      },
      'Brown Rice Milling + Package': {
        content: 'Post harvest: \n' +
          'Milling rice paddy removes the husk to produce brown rice.'
      },
      'Milled Rice+Package': {
        content: 'Post harvest: \n' +
          'Milling rice paddy removes the husk and bran layer to produce white rice.'
      },
      Pass: {
        content: 'Post harvest: \n' +
          'Products pass the pesticide residue test.'
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
