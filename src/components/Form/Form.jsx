import React from 'react'

function Form() {
    return (
    <form action="/action_page.php" method="get">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"/><br/><br/>
        <label for="lname">Email</label>
        <input type="text" id="lname" name="lname"/><br/><br/>
        <input type="submit" value="Submit"/>
    </form>
    )
}

export default Form