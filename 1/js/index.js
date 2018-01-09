var Header = React.createClass({
     render:function () {
         return <div className="header">
             {this.props.title}
         </div>
     }
});


var Content = React.createClass({
    render:function () {
        return <div className="content">{this.props.childn}</div>
    }
});

var CartListData = ["商品1","商品2","商品3"];
var CartList = React.createClass({
    render:function () {
        return <div>
            {
                CartListData.map(function (value,key) {
                    return <p key={key}>{value}</p>
                })
            }
        </div>
    }
})

var FooterData = ["首页","详情","我的","更多"];

var Footer = React.createClass({
    render:function () {
        return <div className="footer">
            <ul>
                {
                    FooterData.map(function (value,key) {
                        return <li key={key}>{value}</li>
                    })
                }
            </ul>
        </div>
    }
});
ReactDOM.render(
    <div>
        <Header title={"首页"} />
        <Content>
            <CartList/>
        </Content>
        <Footer />
    </div>
    ,document.getElementById("app"));