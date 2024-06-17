
export default function Layout(props){

    let msg = props.params.id;
    if (msg === '1') {
        msg = "HTML 선택";
    }else if (msg === '2') {
        msg = "CSS 선택";
    }else if (msg === '3') {
        msg = "JS 선택";
    }

    return (
        <div>
            {props.children}
            <h3>parameters : {props.params.id}</h3>
            <h3>return 위에서 자바스크립트 사용 : {msg}</h3>
            <h3>return 아래서 html 사용 : {  
                                props.params.id === '1' ? "HTML 선택" : 
                                props.params.id === '2' ? "CSS 선택" : "JS 선택" 
                            }
            </h3>
        </div>
    )
}