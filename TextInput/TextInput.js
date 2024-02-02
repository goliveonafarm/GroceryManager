import styles from './TextInput.module.css';

const TextInput = ({ value, placeholder, onTextChange}) => {
    const handleChange = (event) => {
            onTextChange(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={styles['text-input']}
        />
    )
}

export default TextInput;