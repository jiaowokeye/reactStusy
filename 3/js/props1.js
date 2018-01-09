var App = React.createClass({
    getInitialState:function () {
        return {
            value:1
        }
    },
    changeValue:function (val) {
        this.setState({
                value:val
        })
    },
    render:function () {
           return (<div>
               <p>{this.state.value}</p>
               <button onClick={this.changeValue.bind(this,10)}>改变父组件value</button>
               <Child childChangeValue={this.changeValue}/>
           </div>)
    }
});

var Child = React.createClass({
    handleClick:function () {
        this.props.childChangeValue(20);
    },
    render:function () {
        return <button onClick={this.handleClick.bind(this)}>点击子组件按钮</button>
    }
})


var listData = ["商品1","商品2","商品3"];
ReactDOM.render(<App/>,document.getElementById("app"));