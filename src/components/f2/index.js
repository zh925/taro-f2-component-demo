import F2 from '@antv/f2'
import PieLabel from '@antv/f2/lib/plugin/pie-label'
import Tooltip from '@antv/f2/lib/plugin/tooltip'

F2.Chart.plugins.register(PieLabel)
F2.Chart.plugins.register(Tooltip)

function wrapEvent(e) {
    if (!e) return
    if (!e.preventDefault) {
        e.preventDefault = function() {}
    }
    return e
}

Component({
    /**
   * 组件的属性列表
   */
    properties: {
        initFunc: {
            type: 'Function',
            value: () => {}
        }
    },

    /**
   * 组件的初始数据
   */
    data: {

    },

    ready() {
        const query = wx.createSelectorQuery().in(this)
        query.select('.f2-canvas')
            .fields({
                node: true,
                size: true
            })
            .exec(res => {
                const { node, width, height } = res[0]
                const context = node.getContext('2d')
                const pixelRatio = wx.getSystemInfoSync().pixelRatio
                // 高清设置
                node.width = width * pixelRatio
                node.height = height * pixelRatio

                const config = { context, width, height, pixelRatio }
                const chart = this.data.initFunc(F2, config)
                if (chart) {
                    this.chart = chart
                    this.canvasEl = chart.get('el')
                }
            })
    },

    /**
   * 组件的方法列表
   */
    methods: {
        touchStart(e) {
            const canvasEl = this.canvasEl
            if (!canvasEl) {
                return
            }
            canvasEl.dispatchEvent('touchstart', wrapEvent(e))
        },
        touchMove(e) {
            const canvasEl = this.canvasEl
            if (!canvasEl) {
                return
            }
            canvasEl.dispatchEvent('touchmove', wrapEvent(e))
        },
        touchEnd(e) {
            const canvasEl = this.canvasEl
            if (!canvasEl) {
                return
            }
            canvasEl.dispatchEvent('touchend', wrapEvent(e))
        }
    }
})
