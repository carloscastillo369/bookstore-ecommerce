import '../../styles/Spinner/Spinner.css';

const Spinner = ({name, text}) => (
    <>
        <div className={`spinner${name}`}>
            <div className="spinner-icon spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h5 className="text-body">{text}...</h5>
        </div>   
    </>
);

export default Spinner;