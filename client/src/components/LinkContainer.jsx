import Table from './Table'
import Form from './Form'
import React, {useState} from 'react'

function LinkContainer() {
    
    const [favLinks, setFavLinks] = useState([])

    const removeLink = (index) => {
        const updatedLinks = [...favLinks]
        updatedLinks.splice(index, 1)
        setFavLinks(updatedLinks)
    }

    
      const handleSubmit = (favLink) => {
        setFavLinks([...favLinks, favLink])
      }
    
    const submitForm = (formData) => {
        handleSubmit(formData)
    }

    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table! </p>
            <Table linkData={favLinks} removeLink={removeLink} />
            <Form handleSubmit={submitForm}/> 
        </div>
    )

}
export default LinkContainer