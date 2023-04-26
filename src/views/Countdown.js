import React from "react";
import { useState, useEffect } from "react";

class Countdown extends React.Component {

    state = {
        count: 10,
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {    /// setInterval(chạy liên tục) vs setTimeout(chạy 1 lần) 

            this.setState({
                count: this.state.count - 1
            })

        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                // this.props.onTimesup();
            }
        }
    }

    render() {
        return (
            <>
                {this.state.count} Class
            </>
        )
    }
}



const CountdownByHook = (props) => {

    const [count, setCount] = useState(10)

    useEffect(() => {
        if (count === 0) {    /// check 0 để dừng lai
            // props.onTimesup()
            return;
        }

        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)

        return () => {
            clearInterval(timer)    /// return funciton chạy cuỗi mỗi lần để tránh vòng lặp vô hạn
        }
    }, [count])    /// check mỗi lần conut thay đổi thì chạy 1 lần nữa
    return (
        <>
            {count} Hook
        </>
    )
}

export { Countdown, CountdownByHook };
