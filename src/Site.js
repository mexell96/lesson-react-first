import React from "react";

export default function Site ({number}) {
    if (number > 0 && number <=4) {
        return <div className="green">Counter: {number} Без опыта</div>;
    }
    else if (number > 4 && number <=9) {
        return <div className="grey">Counter: {number} Новичёк</div>;
    }
    else if (number > 9 && number <=14) {
        return <div className="yellow">Counter: {number} Мастер</div>;
    }
    else if (number > 14) {
        return <div className="violet">Counter: {number} Профи</div>;
    }
    return <div>Counter: N/A</div>
}
