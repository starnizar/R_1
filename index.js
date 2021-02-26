

const Greetings = () => {
    const [step, setStep] = React.useState(0);

    const SayHi = () => {
        setStep(step + 1)
        if (step == 5) {
            alert('Enough!!!')
        }
    }

    return (
        <div>
            <span>{step}</span> <br/><br/>
            <button onClick={SayHi}>Clicks Counter</button>
        </div>
    )
}

const Solution = (props) => {
    let x = Number(props.xy[0])
    let y = Number(props.xy[1])
    let result = 0
    if(isNaN(x)||isNaN(y)){
        result = ''
    } else {
        result = x + y
    }
    return (<div>
        <span>{result}</span>
    </div>)
}

const Fields = (props) => {
    const xInput = React.useRef('x')
    const yInput = React.useRef('y')
    const getValues = () => {
        props.setXY([
            props.xy[0] = xInput.current.value,
            props.xy[1] = yInput.current.value
        ])
       
    }

    return(<div>
        <br/>
        <label>x + y = ??? </label>
        <br/><br/>
        <label>x = </label>
        <input ref={xInput}/><br/>
        <label>y = </label>
        <input ref={yInput}/><br/><br/>
        <button onClick={getValues}>Solve</button>
    </div>)
}

const Component = () => {
    const [xy, setXY] = React.useState([])
    console.log(xy);
    return (
        <div>
            <Greetings/>
            <Fields xy={xy} setXY={setXY}/>
            <Solution xy={xy}/>
        </div>
    )
}

ReactDOM.render(<Component/>, document.getElementById('root'))