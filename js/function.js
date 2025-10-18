function showContent(pageId) {
    // ყველა გვერდის დამალვა
    document.querySelectorAll('.content > div').forEach(div => {
        div.classList.remove('active');
    });
    // არჩეული გვერდის ჩვენება
    document.getElementById(pageId).classList.add('active');
}

