function CountFieldEntry({ name }) {
    return (
        <div id={name + "_count"}>
            <label htmlFor={name}>{name} Count:
                <input type="text" name={name} required size="5" pattern="[0-9]*" />
            </label>
            <span className="validity"></span>
        </div>
    );
}

export default CountFieldEntry;