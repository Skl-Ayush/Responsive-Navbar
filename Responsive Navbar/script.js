document.addEventListener('DOMContentLoaded', function () {
    const Checkbox = document.getElementById('check');
    
    Checkbox.addEventListener('change', function () {
        if (Checkbox.checked) {
                    document.getElementsByTagName('ul')[0].style.left="0%";
                } else {
                    document.getElementsByTagName('ul')[0].style.left="-100%";
                }
            });
});
