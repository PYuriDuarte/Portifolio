function SwitchAjs(){

  const html = document.querySelector('html');
  const checkbox = document.querySelector('#switchA');
 
  const handleChange = () => {
    checkbox.addEventListener('onChange', html.classList.toggle('darkMode')
    )
  }
  

  return (    
    <div className="radio">
      <label>
        <input disabled id="switchA" onChange={handleChange} name="PageColor" type="radio" value="0"/>
      </label>
    </div>    
  )
};

export default SwitchAjs;