---
title: 原生js
---

## 原生js

```
;((doc, storage, location) => {

  const oUsername = doc.querySelector('#username');
  const oEnterBtn = doc.querySelector('#enter');

  const init = () => {
    bindEvent();
  }

  function bindEvent () {
    oEnterBtn.addEventListener('click', handleEnterBtnClick, false);
  }

  function handleEnterBtnClick () {
    const username = oUsername.value.trim();

    if (username.length < 6) {
      alert('用户名不小于6位');
      return;
    }
    
    storage.setItem('username', username);
    location.href = 'index.html';
  }

  init();

})(document, localStorage, location);
;((doc, Socket, storage, location) => {
  
  const oList = doc.querySelector('#list');
  const oMsg = doc.querySelector('#message');
  const oSendBtn = doc.querySelector('#send');
  const ws = new Socket('ws:localhost:8000');
  let username = '';

  const init = () => {
    bindEvent();
  }

  function bindEvent () {
    oSendBtn.addEventListener('click', handleSendBtnClick, false);
    ws.addEventListener('open', handleOpen, false);
    ws.addEventListener('close', handleClose, false);
    ws.addEventListener('error', handleError, false);
    ws.addEventListener('message', handleMessage, false);
  }

  function handleSendBtnClick () {
    const msg = oMsg.value;

    if (!msg.trim().length) {
      return;
    }

    ws.send(JSON.stringify({
      user: username,
      dateTime: new Date().getTime(),
      message: msg
    }));

    oMsg.value = '';
  }

  function handleOpen (e) {
    console.log('Websocket open', e);
    username = storage.getItem('username');

    if (!username) {
      location.href = 'entry.html';
      return;
    }
  }

  function handleClose (e) {
    console.log('Websocket close', e);
  }

  function handleError (e) {
    console.log('Websocket error', e);
  }

  function handleMessage (e) {
    console.log('Websocket message');
    const msgData = JSON.parse(e.data);
    oList.appendChild(createMsg(msgData));
  }

  function createMsg (data) {
    const { user, dateTime, message } = data;
    const oItem = doc.createElement('li');
    oItem.innerHTML = `
      <p>
        <span>${ user }</span>
        <i>${ new Date(dateTime) }</i>
      </p>
      <p>消息：${ message }</p>
    `;

    return oItem;
  }

  init();
})(document, WebSocket, localStorage, location);

```