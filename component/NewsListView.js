import React from 'react';
import {FlatList, Text, TouchableOpacity} from "react-native";
import {findNewsList} from "../api/newsApi";

/**
 * 新闻列表页面
 */
export default class NewsListView extends React.Component{
    state = {
        newsList: []
    }

    constructor(props){
        super(props);
    }

   async componentWillMount(): void {
       await this.findNewsList();
   }

    /**
     * 查询新闻列表
     * @returns {Promise<void>}
     */
    async findNewsList(){
        let params = {
            did: "1139431234854719488",
            newsCount: 10,
            recentDayCount: 2
        }

        let resp = await findNewsList(params);
        let newsList = resp.data.data;
        this.setState({
            newsList: newsList
        });
    }

    /**
     * 前往新闻详情页
     */
    NavigateNewsDetailView(item){
        console.log("NavigateNewsDetailView", item);
        this.props.navigation.navigate("NewsDetail", item);
    }

    /**
     * 跳转到指定页面
     */
    navigate(pageName){
        this.props.navigation.navigate(pageName);
    }

    /**
     * 渲染item
     * @param item
     * @returns {*}
     */
    renderItem({item}){
        return (
            <TouchableOpacity onPress={this.NavigateNewsDetailView.bind(this, item)}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    /**
     * 构造item的key
     * @param item
     */
    buildItemKey(item){
        console.log("buildItemKey", item.id)
        return item.id;
    }

    render(){
        console.log("render", this.state.newsList);
        return (
            <FlatList
                data={this.state.newsList}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={this.buildItemKey.bind(this)}
            />
        );
    }
}
