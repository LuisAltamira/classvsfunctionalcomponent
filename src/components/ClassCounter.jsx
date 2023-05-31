import { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        counter: 0
    }

    add(value) {
        this.setState({ counter: this.state.counter + value })
    }

    componentDidMount() {
        console.log('El componente ha sido montado basado en clase')
    }

    componentWillUnmount() {
        console.log('El componente ha sido desmontado basado en clase')
    }

    render() { 
        return (
            <>
                <h1>{ this.props.title }: { this.state.counter }</h1>
                <button onClick={ () => this.add(-1) }>--</button>
                <button onClick={ () => this.add(1) }>++</button>
            </>
        );
    }
}
 
export default ClassCounter;