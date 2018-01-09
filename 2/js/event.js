var data = ["0","1","2","3","4"];
var MyEvent = React.createClass({
    handleClick:function (index) {
        alert(index);
    },
    render:function () {
        return (<div>
            {
                data.map(function (ele,index) {
                    return <li onClick={this.handleClick.bind(this,index)} key={index}>{ele}</li>
                }.bind(this))
            }

        </div>)
    }
});


ReactDOM.render(
    <MyEvent/>,
    document.getElementById("app")
);

