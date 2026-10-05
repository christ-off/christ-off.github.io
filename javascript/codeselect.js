// adapted from https://stackoverflow.com/a/48078807/1217368
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.highlight').forEach(function (block, i) {
        if (block.parentElement.classList.contains('no-select-button')) return;
        var id = 'codeblock' + (i + 1);
        block.querySelector('code').id = id;
        var btn = document.createElement('a');
        btn.setAttribute('type', 'btn');
        btn.className = 'btn-copy-code';
        btn.setAttribute('data-clipboard-target', '#' + id);
        btn.innerHTML = '<svg class="icon icon-2x" aria-hidden="true"><use href="#i-file-code"/></svg>&nbsp;&nbsp;Copy to clipboard';
        block.insertBefore(btn, block.firstChild);
    });
    new ClipboardJS('.btn-copy-code');
});
