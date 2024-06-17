import React, { useState } from 'react'

function SignUpForm(props) {
    //  폼 안에서 여러개를 받을때는 form-data 로 받으면 편하다.
    //  즉, 객체로 받는다 => 중괄호 {} 사용
    const [formData, setFormData] = useState({
        uname : '' ,
        email : '' ,
        pwd : '' ,
        pwdchk : ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        //  기존 폼데이터를 직접 수정하지 않고
        //  복사해서 추가한다.
        setFormData({
            ...formData,
            [name] : value 
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //  비밀번호 와 비밀번호확인 이 일치하지 않으면 경고창 표시하고 전송안함
        if (formData.pwd !== formData.pwdchk) {
            alert('비밀번호가 일치하지 않습니다.');
            return null;
        }
        console.log(formData);
    }
  
    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <label>Username : &nbsp;
                <input type='text' name='uname' value={formData.uname} 
                        onChange={handleChange} required />
            </label>
            <br/>
            <label>Email : &nbsp;
                <input type='email' name='email' value={formData.email} 
                        onChange={handleChange} required />
            </label>
            <br/>
            <label>Password : &nbsp;
                <input type='password' name='pwd' value={formData.pwd} 
                        onChange={handleChange} required />
            </label>
            <br/>
            <label>Confirm Password : &nbsp;
                <input type='password' name='pwdchk' value={formData.pwdchk} 
                        onChange={handleChange} required />
            </label>
            <br/>
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default SignUpForm