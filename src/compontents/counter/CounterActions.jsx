import './counter-style.css';

const CounterActions = (props) => {
    return (
        <section>
            <h1> Counter </h1>
            <div>
                <button onClick={props.plus}>+</button>
                <h1>{props.counter}</h1>
                <button onClick={props.minus}>-</button>
            </div>
        </section>
    );  
}

export default CounterActions;