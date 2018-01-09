var List = React.createClass({
    propTypes:{
      listData:React.PropTypes.array.isRequired
    },
    render:function () {
        //必须有listData 而且需要是数组
        return <div className="header">
            {
                this.props.listData.map(function (ele,index) {
                    return <p key={index}>{ele}</p>
                })
            }
        </div>
    }
});

var listData = ["商品1","商品2","商品3"];
ReactDOM.render(
    <List listData="23"/>
    ,document.getElementById("app"));