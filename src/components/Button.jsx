const Button = ({name, onClick}) =>{
    return(<div className="button">
       
        <button name={name} onClick={onClick}>{name}</button>
    
    </div>);

}

export default Button;