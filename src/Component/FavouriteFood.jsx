import { useState } from "react";
export default  function FavoriteFood() {
const [food, setFood] = useState("pizza");
 function handleChangeFood() {
// write Logic to change food on Typing in input box
setFood("burger")
}
return (
<div>
<input value={food} type="text" /> <br />
<button onClick={handleChangeFood}>submit</button>
<h1>My favorite food is {food}!</h1>;
</div>
);
}

    