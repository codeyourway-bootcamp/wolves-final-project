

export default function Checkout() {
  return (
    <>
    <div classNameName="Header">
        <h4>Company Name:</h4>
        <h4>Adress:</h4>
    </div>
    
        

  <label>Select Employee</label>
  <select class="browser-default">
    <option value="" disabled selected>Choose your Barber</option>
    <option value="1">João</option>
    <option value="2">Pedro</option>
    </select>
    <div className="Calendar"><h4>Select day and hour</h4></div>
    
    </>
  )
}
