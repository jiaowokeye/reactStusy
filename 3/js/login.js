var Header = React.createClass({
    getInitialState:function () {
        return {
            title:"首页",
            hasBack:false,
            hasSearch:false
        }
    },
    render:function () {
        var backHtml = this.props.hasBack?"<":"";
        var searchHtml = this.props.hasSearch?"搜索":"";
        return (<div className="header">
            <div className="left">{backHtml}</div>
            <div className="middle">{this.props.title}</div>
            <div className="right">{searchHtml}</div>
        </div>)
    }
});

var Body = React.createClass({
    render:function () {
        var className = this.props.hasFooter?"body":"body noFooter";
        return <div className={className}>{this.props.children}</div>
    }
});

var footData = ["首页","列表","我的","登录"];
var Footer = React.createClass({
    getInitialState:function () {
        return {
            footData:[]
        }
    },
    render:function () {
        return (<div className="footer">
            <ul>
            {
                this.props.footData.map(function (ele,index) {
                    return <li  key={index} className={index==this.props.now?"active":""}>{ele}</li>
                }.bind(this))
            }
            </ul>
        </div>)
    }
});
var LoginList = React.createClass({
    getInitialState:function () {
        return {
            remember:true,
            showPwd:false,
            password:"",
            username:""
        }
    },
    changeRemember:function () {

    },
    changeShowPwd:function () {
        this.setState({
            showPwd:!this.state.showPwd
        })
    },
    filter:function (ev) {
        var ev = ev||window.event;
        this.setState({
            password:ev.target.value
        })
    },
    filterUserName:function (ev) {
        var ev = ev||window.event;
        this.setState({
            username:ev.target.value
        })
    },
    loginIn:function () {
        console.log("用户名："+this.state.username);
        console.log("密码："+this.state.password);
    },
    render:function () {
        return (<ul className="login-list">
            <li>
                <input type="text" className="text-bar" value={this.state.username} onChange={this.filterUserName.bind(this)}/>
            </li>
            <li>
                <input type={this.state.showPwd?"text":"password"} className="text-bar" value={this.state.password} onChange={this.filter.bind(this)}/>
            </li>
            <li>
                <input ref="remember" type="checkbox"/><span>记住密码</span>
                <input ref="showPwd" onClick={this.changeShowPwd.bind(this)} type="checkbox"/><span>显示密码</span>
                <a className="forget">忘记密码？</a>
            </li>
            <li>
                <button className="login-in" onClick={this.loginIn.bind(this)}>登录</button>
            </li>
            <li>
                <button className="goReg">注册</button>
            </li>
        </ul>)
    }
})

var LoginPage = React.createClass({
    render:function () {
        return (<div>
            <Header title="登录" hasBack={true} hasSearch={true}/>
            <Body hasFooter={this.props.hasFooter}>
                <LoginList/>
            </Body>
            <Footer footData={footData}/>
        </div>)
    }
})
ReactDOM.render(
    <LoginPage hasFooter={true}/>,document.getElementById("app")
)
