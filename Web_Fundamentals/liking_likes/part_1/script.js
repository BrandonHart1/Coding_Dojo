function addLikes() {
    var element = document.getElementById("likes_section_1");
    var value = element.innerHTML;

    value++;

    console.log(value)
    document.getElementById("likes_section_1").innerHTML = value
}

