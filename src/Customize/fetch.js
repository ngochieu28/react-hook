import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";


const useFetch = (url, isCovid) => {
    const [data, setData] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    // const [IsErr, setIsErr] = useState(false)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()  // <--- 1st
        async function fetchData() {
            try {
                let res = await axios.get(url,
                    { cancelToken: ourRequest.token });  // <--- 2nd
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0 && isCovid === true) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })

                    data = data.reverse();
                }
                setData(data)
                setIsLoading(false)
                // setIsErr(false)

            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message)
                } else {
                    // setIsErr(true)
                    // setIsLoading(false)
                }

            }
        }

        setTimeout(() => {
            fetchData();
        }, 1000)

        return () => {
            ourRequest.cancel('Operation canceled by user.')
        }
    }, [url]);

    return {
        data, IsLoading         //IsErr
    }


}

export default useFetch;