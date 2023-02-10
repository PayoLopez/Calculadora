import Button from "./Button";

const ButtonPanel = ({ buttonHandler }) => {
  return (
    <div>
      <div>
        <Button name="AC" onClick={buttonHandler}/>
        <Button name="+/-" onClick={buttonHandler}/>
        <Button name="%" onClick={buttonHandler}/>
        <Button name="/" onClick={buttonHandler}/>
      </div>
      <div>
        <Button name="7" onClick={buttonHandler}/>
        <Button name="8" onClick={buttonHandler}/>
        <Button name="9" onClick={buttonHandler}/>
        <Button name="X" onClick={buttonHandler}/>
      </div>
      <div>
        <Button name="4" onClick={buttonHandler}/>
        <Button name="5" onClick={buttonHandler}/>
        <Button name="6" onClick={buttonHandler}/>
        <Button name="-" onClick={buttonHandler}/>
      </div>
      <div>
        <Button name="1" onClick={buttonHandler}/>
        <Button name="2" onClick={buttonHandler}/>
        <Button name="3" onClick={buttonHandler}/>
        <Button name="+" onClick={buttonHandler}/>
      </div>
      <div>
        <Button name="0" onClick={buttonHandler}/>
        <Button name="," onClick={buttonHandler}/>
        <Button name="=" onClick={buttonHandler}/>
       
      </div>
    </div>
  );
};

export default ButtonPanel;
