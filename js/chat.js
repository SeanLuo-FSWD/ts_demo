$(document).ready(function () {
    $(".msg_input .submit").on('click', () => {
        
        let msg = $(".msg_input textarea").val();
        let msg_string = `
        <p class="my_msg">${msg}</p>
        `
        $("section.messages").append(msg_string);
        $(".msg_input textarea").val('');
    })
});