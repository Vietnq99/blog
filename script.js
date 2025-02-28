function likePost(button) {
    let countSpan = button.nextElementSibling;
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
    button.classList.add("liked");
}
