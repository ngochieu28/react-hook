import { useEffect, useState } from "react";
import useFetch from "../Customize/fetch";
import moment from "moment/moment";


const Covid = () => {
    // today = moment().startOf('day')            /// bắt đầu 1 ngày mới =  ngày hiện tại
    // priorDate = moment().subtract(31, 'days'); /// 30 ngày về trước
    // priorDate = moment().add(31, 'days');     /// 30 ngày về sau

    // const today = moment().startOf('day').toISOString(true);
    // const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);
    const { data: dataCovid, IsLoading } = useFetch('https://api.covid19api.com/country/vietnam?from=2022-02-10T00%3A00%3A00Z&to=2022-03-09T00%3A00%3A00Z', true)
    // useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}to=${today}`)
    return (
        <>
            {/* {console.log("check", dataCovid)} */}
            <h2>Covid19 Tracking in VietNam</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {/*IsErr === false && */IsLoading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }

                    {IsLoading === true &&
                        <tr>
                            <td colSpan={5} style={{ textAlign: "center" }}>
                                Loading....
                            </td>
                        </tr>
                    }

                    {/* {IsErr === true &&
                        <tr>
                            <td colSpan={5} style={{ textAlign: "center" }}>
                                Something wrong....
                            </td>
                        </tr>
                    } */}
                </tbody>
            </table>
        </>

    )
}

export default Covid