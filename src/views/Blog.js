import useFetch from "../Customize/fetch"
import './Blog.scss'
import { Link, NavLink, useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import AddNewBlog from "./AddNewBlog";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


const Blog = () => {
    // let history = useHistory();

    const { data: dataBlog, IsLoading } = useFetch('https://jsonplaceholder.typicode.com/posts', false)
    const [newData, setNewData] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let newDataSinmple = dataBlog.slice(0, 10)

            setNewData(newDataSinmple)
        }

    }, [dataBlog])


    const handleAddNewBlog = (blog) => {
        let data = newData;                    // khai báo để gián tiếp xử lý newData(biến const)
        data.unshift(blog)

        setShow(false)
        setNewData(data)
    }

    const deleteCards = (id) => {
        let data = newData;                    // khai báo để gián tiếp xử lý newData(biến const)
        data = data.filter(item => item.id !== id)

        setNewData(data)
    }

    return (
        <>
            <>
                <Container fluid>
                    <Button variant="primary" className="my-3" onClick={handleShow}>
                        + Add newBlog
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>AddNewBlog</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AddNewBlog handleAddNewBlog={handleAddNewBlog} />
                        </Modal.Body>
                        {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer> */}
                    </Modal>

                </Container>

            </>


            {/*<button onClick={handleAddNewBlog}>+ Add newBlog</button>           Cách 2: chuyển sang bằng useHistory */}
            <div className="blog-container">
                {IsLoading === false && newData && newData.length > 0 &&
                    newData.map(item => {
                        return (
                            <div key={item.id}>

                                <Card style={{ width: '18rem', color: 'black' }}>
                                    <Card.Body>
                                        <Button
                                            variant="secondary"
                                            style={{ float: 'right' }}
                                            onClick={() => deleteCards(item.id)}
                                        >X</Button>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.body}</Card.Text>
                                    </Card.Body>
                                    <Button variant="info">
                                        <Link to={`/blog/${item.id}`}>View Detail</Link>   {/* Cách 1: chuyển sang bằng Link */}
                                    </Button>
                                </Card>



                                {/* <div className="blog-card" key={item.id}>
                                    <div className="blog-title">{item.title}</div>
                                    <div className="blog-body">{item.body}</div>
                                    <button type="button">
                                        <Link to={`/blog/${item.id}`}>View Detail</Link>   {/* Cách 1: chuyển sang bằng Link */}
                                {/* </button>
                                 </div> */}
                            </div>



                        )
                    })
                }

                {IsLoading === true &&
                    <div> Loading data....</div>
                }
            </div>
        </>



    )
}

export default Blog


