$("#add").click(function () {
    console.log("kygvk")
    var text = $("#cin").val();
    var $li = $("<li class='to' >" + text + "   <button class='clear' onclick='removeli()'>clear</button></li>")
    if ($("#cin").val() !== '') {
        $li.appendTo(".todoList");
    }
})
function storage(){
    localStorage.setItem('li', text)
}
$("#clearAll").click(function () {
    $(".to").remove()
})

function removeli() {
    $("li").remove()
}

function getItem(){
    localStorage.getItem('li')
}