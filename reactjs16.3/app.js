class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  renderItems() {
    return this.state.items.map(function(item){
      return React.createElement('li', null, "jj:", item);
    }) 
  }

  render() {
    return React.createElement('ul', null, this.renderItems());
  }
}


var list = [];


var r = ReactDOM.render(
  React.createElement(List, {}, null),
  document.getElementById('react')
);

function clear(callback) {
  list.length = 0;
  r.setState({items: list});
  callback()
};

function fill(n, callback) {
  for(var i=0;i<n;i++) {
    list.push(''+i)
  }
  r.setState({items: list});
  callback()
};

function update(n, callback) {
  for(var i=0;i<n;i++) {
    list[i] += ' ' + i
  }
  r.setState({items: list});
  //r.render();
  callback()
};

function insert(n, callback) {
  list.splice(n, 0, 'xx');
  r.setState({items: list});
  callback();
}

ENV.append({
  code: 'reactjs163',
  clear: clear,
  fill: fill,
  update: update,
  insert: insert
});
