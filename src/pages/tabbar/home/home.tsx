import React, { Component, ComponentClass } from 'react'
import { View } from '@tarojs/components'
import ChartCard from '@/components/chartCard'
import './Home.scss'

class Home extends Component<PageProps, State> {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View className='canvas-wrap'>
                <ChartCard/>
            </View>
        )
    }
}

export default Home
