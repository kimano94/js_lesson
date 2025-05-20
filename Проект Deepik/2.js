let currentPage = 1
const loadMoreData = () => {
setTimeout(() => {
    for(let i=0; i<10; i++) {
        document.getElementByld('content').innerHTML += `<div class="item">Элемент ${currentPage * 10 + i}</div>`
    }
    currentPage++
}, 1000)
}
window.addEventListener("scroll", function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("Достигнута нижняя граница страницы");
            loadMoreData();
        }
    });

    // Загрузка начальных данных
    loadMoreData();
