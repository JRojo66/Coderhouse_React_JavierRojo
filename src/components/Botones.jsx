import useCount from "./useCount";


const Botones = () =>{
    const {counter, reset, increment, decrement} = useCount(1,0,10);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>Botones</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
                        <button type="button" className="btn btn-primary">{counter}</button>
                        <button type="button" className="btn btn-primary" onCgiy lick={increment}>+</button>
                        <button type="button" className="btn btn-primary" onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Botones;


