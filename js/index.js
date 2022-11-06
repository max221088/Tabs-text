let $openCard = '';
let btn = '';

document.querySelectorAll('.btn').forEach( function (li) {
    li.addEventListener('click', function () {
    document.querySelectorAll('.card').forEach( function (li) {
        li.classList.remove('active');
        document.querySelectorAll('.btn').forEach( function (li) {
        li.classList.remove('active');
        });
    });
        this.classList.toggle('active');
        btn = this.getAttribute ('data-tab');
        $openCard = document.querySelector('#'+ btn);
        $openCard.classList.toggle('active');
    });
});
