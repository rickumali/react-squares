function CountFieldEntry({ name, value, onValueChange }) {
    return (
        <div id={name + "_count"}>
            <label htmlFor={name}>{name} Count:
                <input type="text" value={value} name={name} required size="5" pattern="[0-9]*" 
                    onChange={(e) => onValueChange(e.target.value)}/>
            </label>
            <span className="validity"></span>
        </div>
    );
}

export default CountFieldEntry;