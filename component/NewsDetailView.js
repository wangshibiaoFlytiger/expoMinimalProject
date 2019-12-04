import React from 'react';
import {Text, View} from "react-native";
import {getNewsById} from "../api/newsApi";

/**
 * 新闻详情页面
 */
export default class NewsDetailView extends React.Component{
    state = {
        // 接收父路由参数
        news: this.props.navigation.state.params
    }

    constructor(props){
        super(props);
    }

   async componentWillMount(): void {
       await this.getNews();
   }

    /**
     * 查询某条新闻
     * @returns {Promise<void>}
     */
    async getNews(){
        let resp = await getNewsById(this.state.news);
        let news = resp.data.data;
        this.setState({
            news: news
        });
    }

    render(){
        console.log("render", this.state.news);
        return (
            <View>
                <Text>{this.state.news.title}</Text>
                <Text>{this.state.news.publishTime}</Text>
                <Text>{this.state.news.content}</Text>
            </View>
        );
    }
}
