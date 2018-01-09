
var lifeData = ["1","2","3","4","5"];
var Life = React.createClass({
    getDefaultProps:function () {
        //创建组件
        console.log("创建组件");
        return {
            lifeData:[]
        }
    },
    getInitialState:function () {
        //设置默认状态
        console.log("设置默认状态");
        return {
            lifeShow:true
        }
    },
    componentWillMount:function () {
        //组件即将加载完成  可以获取和修改组件初始状态
        console.log("组件即将加载完成");
        this.setState({
            lifeShow:true
        })
        console.log(this.props.lifeData);
    },
    changelifeState:function () {
        //修改状态的方法
        this.setState({
            lifeShow:!this.state.lifeShow
        })
    },
    render:function () {
        var lifeStyle = {"display":this.state.lifeShow?"block":"none"};
        var buttonHtml = this.state.lifeShow?"隐藏":"显示";
        return (<div ref="wrap">
            {/*<button onClick={this.changelifeState}>{buttonHtml}</button>*/}
            <ul ref="list" style={lifeStyle}>
                {

                    this.props.lifeData.map(function (ele,index) {
                        return <li key={index}>{ele}</li>
                    })
                }
            </ul>
        </div>)
    },
    componentDidMount:function () {
        //组件加载完成了  可以获取到dom节点了
        //refs 代表了当前组件李所有设置了ref属性的元素的集合
        //this.refs.list获取真是dom
        console.log(this.refs.list);

        console.log("组件加载完成了");
    },
    shouldComponentUpdate:function () {
        //是否允许组件更新return true 表示可以   false不可以
        return true;
    },
    componentWillUpdate:function () {
        console.log("组件即将更新：componentWillUpdate");
    },
    componentDidUpdate:function () {
        console.log("组件更新完成：componentDidUpdate");
    }
})
// ReactDOM.render(<Life lifeData={lifeData}/>,document.getElementById("app"));

var productData = {
    "newList":["新品1","新品2","新品3"],
    "hotlist":["热品1","热品2","热品3"]
}

var ProductList = React.createClass({
    getInitialState:function () {
        return {
            stype : ["newList"]
        }
    },
    changeShowType:function (type) {
      //改变显示数据
        this.setState({
            stype:type==1?"hotlist":"newList"
        })
    },
    render:function () {
        return(<div>
            <div className="btns">
                <button onClick={this.changeShowType.bind(this,2)}>新品</button>
                <button onClick={this.changeShowType.bind(this,1)}>热卖</button>
            </div>
            <Life lifeData={this.props.productData[this.state.stype]}/>
        </div>)
    }
});

ReactDOM.render(<ProductList productData={productData}/>,document.getElementById("app"));