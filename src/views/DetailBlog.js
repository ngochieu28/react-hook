import { useParams, useHistory } from "react-router-dom"
import useFetch from "../Customize/fetch";

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();

    const { data: dataBlogDetail, IsLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    const handleBackdata = () => {
        history.push("/blog")
    }

    return (
        <>
            <div className="data-detail">
                {dataBlogDetail &&
                    <>
                        <div className="blog-title">
                            {IsLoading == true ? 'Loading data' : 'Id: ' + dataBlogDetail.id + ' --- ' + dataBlogDetail.title}
                        </div>
                        <div className="blog-body">
                            {dataBlogDetail.body}
                        </div>
                    </>
                }
            </div>
            <button type="button" onClick={() => handleBackdata()}>Back</button>
        </>
    )
}
export default DetailBlog