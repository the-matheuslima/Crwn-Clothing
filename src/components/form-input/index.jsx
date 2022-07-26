import "./style.scss"
const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form__input" {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form__input-label`}>{label}</label>
            )}
        </div>
    )
}

export default FormInput;