document.addEventListener('DOMContentLoaded', function () {
    const colorCheckbox = document.getElementById('check');
    const colorContainer = document.getElementsByTagName('nav')[0];

    colorCheckbox.addEventListener('change', function () {
        if (colorCheckbox.checked) {
                    document.getElementsByTagName('ul')[0].style.left="0%";
                } else {
                    document.getElementsByTagName('ul')[0].style.left="-100%";
                }
            });
});