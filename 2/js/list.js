
var listData = ["1","2","3","4","5"]
var List = React.createClass({
    getDefaultProps:function () {
        //创建组件
        console.log("创建组件");
        return {
            listData:[]
        }
    },
    getInitialState:function () {
        //设置默认状态
        return {
            listShow:true
        }
    },
    componentWillMount:function () {
        //组件即将加载完成
    },
    changeListState:function () {
        //修改状态的方法
        this.setState({
            listShow:!this.state.listShow
        })
    },
    render:function () {
        var listStyle = {"display":this.state.listShow?"block":"none"};
        var buttonHtml = this.state.listShow?"隐藏":"显示";
        return (<div>
            <button onClick={this.changeListState}>{buttonHtml}</button>
            <ul style={listStyle}>
                {
                    this.props.listData.map(function (ele,index) {
                        return <li key={index}>{ele}</li>
                    })
                }
            </ul>
        </div>)
    },
    conponentDidMount:function () {
        //组件加载完成了
    }
})

ReactDOM.render(<List listData={listData}/>,document.getElementById("app"));