import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

class ChartCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    chart: any

    render() {
        return (
            <View className='chart-card'>
                <chart
                    initFunc={this.state.initChart}
                />
            </View>
        )
    }
}

export default ChartCard
