import axios from 'axios';
import './Blog.scss'
import { useState } from 'react'

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleClickSubmit = async () => {
        if (!title) {
            alert('empty title')
            return;
        }

        if (!content) {
            alert('empty content')
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);

        if (res && res.data) {
            let newBlog = res.data
            props.handleAddNewBlog(newBlog)
        }
    }

    return (
        <div className="AddNewBlog-container">
            <div className="AddNewBlog-textAdd">------ Add New Blog ------</div>
            <div className='AddNewBlog-input' >
                <div>Title: </div>
                <input type="text" value={title}
                    onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className='AddNewBlog-input'>
                <div>Content: </div>
                <input type="text" value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button className='btn-submit' onClick={() => handleClickSubmit()}>Submit</button>
        </div>
    )
}

export default AddNewBlog