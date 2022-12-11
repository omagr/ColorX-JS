import { useContext } from 'react';
import Values from 'values.js';
import { Context } from '../App';


function Navigation() {
    
    const [state, setState] = useContext(Context)
    const submitForm = (e) => {
        e.preventDefault();
        try {
            const array = new Values(state.color).all(Number(state.weight));
            setState({...state, array:array})
        } catch (error) {
            setState({...state, error:true})
        }
    }
    const randomHex = () => {
        const random_hex = '#' + Math.floor(Math.random()*16777215).toString(16);
        const random_array = new Values(random_hex).all(Number(state.weight));
        setState({...state, array: random_array, color: random_hex})
    }
       
    return (
        <header>
            <nav className="navbar">
                <div className="left_navbar">
                    <div className="logo">
                        <a href="#">
                         ColorX
                        </a>
                    </div>
                    <form onSubmit={submitForm}>
                        <input 
                        className="input color_name" 
                        type="text" 
                        placeholder="#" 
                        value={state.color} 
                        onChange={(e) => setState({...state, color: e.target.value})} 
                        required />
                        <div className="label input">
                            <span> <i className="ri-percent-line"></i></span>
                            <input 
                            className="shade_name" 
                            type="number" 
                            placeholder="#fff"
                            value={state.weight} 
                            onChange={(e) => setState({...state, weight: e.target.value})}
                            required />
                        </div>
                        <button className="get" type='submit'>Get</button>
                    </form>
                </div>
                <div className="right_navbar">
                    <button className="random" onClick={randomHex}>
                    <i className="ri-lightbulb-flash-fill"></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;