import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import 'weui';

const {Button} = WeUI;

class App extends React.Component {
    render() {
        return (
            <div className="buttons">
              <h1>Buttons</h1>
              <Button type="primary" size="normal">primay normal button</Button>
              <Button type="primary" size="normal"  plain="true">primay normal outline button</Button>
              <Button type="primary" size="normal"  disabled="true">primay normal outline disabled button</Button>
              <Button>primay normal button</Button>
              <Button type="primary" size="small">primay small button</Button>
              <Button type="warn" size="normal">warn normal button</Button>
              <Button type="warn" size="small">warn small button</Button>
              <Button type="warn" size="normal" plain="true">warn normal outline button</Button>
              <Button type="default" size="normal">default normal button</Button>
              <Button type="default" size="small">default small button</Button>
              <Button type="default" size="normal" plain="true">default normal outline button</Button>
            </div>
        );
    }
}

ReactDOM.render((
  <App />
), document.getElementById('container'));
