function Speed(props) { 
    const handleSpeed = ({target}) => {
        const speed = target.value === 'fast'? 10 : target.value === 'normal' ? 20 : 40;
        props.handleSpeed(speed);
    }

    return (
        <select className="btn speed" onChange={handleSpeed} >
            <option defaultValue="fast">Fast</option>
            <option value="normal">Normal</option>
            <option value="slow">Slow</option>
        </select>
    )
}

export default Speed;