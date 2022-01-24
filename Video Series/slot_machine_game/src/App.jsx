import React from "react";

const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄';

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if( (props.x === props.y) && (props.y === props.z) ){
        return (
            <>
                <div className="slot_inner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is Matching.</h1>
                    <hr />
                </div>
            </>
        );
    }else{
        return (
            <>
                <div className="slot_inner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is Not Matching.</h1>
                    <hr />
                </div>
            </>
        );
    }
};

const App = () => {
    return (
        <>
            <h1 className="heading_style"> 
            🎰 Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine Game</span> 🎰</h1>
            <div className="slotMachine">
                <SlotM x='😄' y='😄' z='😄' />
                <hr />
                <SlotM x='😄' y='😆' z='😄'/>
                <hr />
                <SlotM x='🍎' y='🥝' z='🍎'/>
                <hr />
                <SlotM x='💏' y='💏' z='💏'/>
                
            </div>
        </>
    );
};
export default App;