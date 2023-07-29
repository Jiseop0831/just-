let basic_url = "http://13.125.13.204:8000/"

var id = '';
var password = '';
var nickname = '';


function id_onchange(e) {
    id = e.value;
    console.log(e.value)
}

function ps_onchange(e) {
    password = e.value;
    console.log(e.value)
}

function name_onchange(e) {
    nickname = e.value;
    console.log(e.value)
}


async function post_fetch(post_url, post_data) {
    let response = await fetch(basic_url+post_url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(post_data),
        }
    )
    return await response.json()
}

function sign_up_button() {
    post_fetch('user/sign-up', {'id': id,'password':password}).then((value) => {
        if(value['status'] == 'fail') {
            console.log('fail');
            alert('회원가입에 실패 하셨습니다.');
        }
        else if(value['status'] == 'success') {
            console.log('success');
            alert('회원가입에 성공 하셨습니다.');
        }
    })
}

var u_id = 0;

function sign_in_button() {
    post_fetch('user/sign-in',  {'id': id, 'password':password}).then((value) => {
        console.log(id,password);

        if(value['status'] == 'fail') {
            console.log('fail');
            alert('로그인에 실패 하셨습니다.');
        }
        else if(value['status'] == 'success') {
            console.log('success');
            // let user = {'status':'success':'user': {'u_id':u_id, 'id':id, 'ninkname':nickname}}
            console.log(value['user']); 
            id = value['user']['id'];
            u_id = value['user']['u_id'];
            nickname = value['user']['nickname'];
            alert('로그인에 성공 하셨습니다.');
        }
    })
}

function nickname_in_button() {
    post_fetch('user/change-nickname',  {'u_id': u_id, 'nickname':nickname}).then((value) => {
        console.log(id,password);
        if(value['status'] == 'fail') {
            console.log('fail');
            alert('닉네임 변경에 실패 하셨습니다.');
        }
        else if(value['status'] == 'success') {
            console.log('success');
            // let user = {'status':'success':'user': {'u_id':u_id, 'id':id, 'ninkname':nickname}}
            console.log(value['user']);   
            alert(`닉네임이` + nickname +`로 변경 되었습니다`);

        }
    })
}