const unReadMessage = document.querySelectorAll(".unread");
const unread = document.getElementById("notifications");
const markAll = document.getElementById("mark_all");

unread.innerText = unReadMessage.length;

unReadMessage.forEach((message)=>{
    message.addEventListener("click", ()=>{
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread");
        unread.innerText = newUnreadMessages.length
    })
})

markAll.addEventListener("click", ()=>{
    unReadMessage.forEach((message)=>{
        message.classList.remove("unread");
    })
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
})