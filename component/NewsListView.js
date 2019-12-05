import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from "react-native";
import {findNewsList} from "../api/newsApi";
import RefreshListView, {RefreshState} from "react-native-refresh-list-view";

/**
 * 封面图片列表组件
 * @param props
 * @returns {*}
 * @constructor
 */
function CoverListComponent(props){
    // 每条新闻最多显示的封面数量
    let coverCount = 3;
    return (
        <View style={{flexDirection: "row"}}>
        {
            props.imgList.map((item, index) => {
                if (index >= coverCount){
                    return
                }

                return (
                    <Image style={{ width: '30%', height: 100}}
                           source={{ uri: item }}
                    />
                )
            })
        }
        </View>
    )
}

/**
 * 新闻列表页面
 */
export default class NewsListView extends React.Component{
    state = {
        newsList: [],

        refreshState: RefreshState.Idle,
    }

    constructor(props){
        super(props);
    }

   async componentWillMount(): void {
       let newsList = await this.findNewsList();
       console.log("componentWillMount", newsList);
       this.setState({
           newsList: newsList
       });
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
        return Promise.resolve(newsList);
    }

    /**
     * 补充顶部刷新的数据
     */
    async supplyHeaderRefreshData(){
        let newsList = await this.findNewsList();
        // 新数据补充到列表头部
        newsList = newsList.concat(this.state.newsList);
        console.log("supplyHeaderRefreshData", this.state.newsList, newsList);
        this.setState({
            newsList: newsList
        });
    }

    /**
     * 补充底部刷新的数据
     */
    async supplyFooterRefreshData(){
        let newsList = await this.findNewsList();
        // 新数据补充到列表尾部
        newsList = this.state.newsList.concat(newsList);
        console.log("supplyFooterRefreshData", newsList);
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
                <CoverListComponent imgList={item.imgList}/>
            </TouchableOpacity>
        )
    }

    /**
     * 构造item的key
     * @param item
     */
    buildItemKey(item){
        return item.id;
    }

    /**
     * 顶部刷新事件
     */
    async onHeaderRefresh(){
        console.log("顶部刷新");
        await this.supplyHeaderRefreshData();
    }

    /**
     * 底部刷新事件
     */
    async onFooterRefresh(){
        console.log("底部刷新");
        await this.supplyFooterRefreshData();
    }

    render(){
        console.log("render", this.state.newsList);
        return (
            <RefreshListView
                data={this.state.newsList}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={this.buildItemKey.bind(this)}

                refreshState={this.state.refreshState}
                onHeaderRefresh={this.onHeaderRefresh.bind(this)}
                onFooterRefresh={this.onFooterRefresh.bind(this)}
            />
        );
    }
}
