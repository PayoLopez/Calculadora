const Button = ({name, onClick}) =>{
    return(<div>
       
        <button name={name} onClick={onClick}>{name}</button>
    
    </div>);

}

export default Button;