window.onload = function () {
    var allTags = document.getElementsByTagName('p');
    for (var tag of allTags) {
        if (tag.textContent.match(/実行時間制限/)) {
            if (tag.textContent != '実行時間制限: 2 sec / メモリ制限: 1024 MB') {
                tag.style.color = "red"
                tag.style.fontSize = "xx-large"
                break;
            }
        }
        if (tag.textContent.match(/Time Limit*/)) {
            if (tag.textContent != 'Time Limit: 2 sec / Memory Limit: 1024 MB') {
                tag.style.color = "red"
                tag.style.fontSize = "xx-large"
                break;
            }
        }
    }
};
