
export default function Index (props) {

    const {label, data, onDataChange} = props;

    return (
        <div>
            <label htmlFor="">{label}:</label>
            <input type="number" name={label} value={data} onChange={onDataChange}/>
        </div>
    )
}