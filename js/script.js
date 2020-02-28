// manupulasi user
// var cek  = confirm("Aktifasi Untuk Melanjutkan")
// if(cek) {

//     var nama = prompt("Masukan Nama Anda !");
//     var idn = prompt("Masukan Alamat Anda  !")
//     cek = confirm("Nama : " + nama + "\n" + "Alamat : " + idn );
//     alert("Terimaksih Sayang :*")
// } else if(cek == false) {
//     alert("Ehhh ni orang .. Suruh ngisi nama aja susah amat !!! Fuck !!!");
// }

//komentar pada pencarian
// $('#cari').on('click', function() {
//     alert('Pencarian Tidak Dapat Berjalan Saat Ini..');
// })
// komentar pesan
$('button#sendMessageButton').on('click', function() {
    alert('Pesan Tidak Dapat Dikirim , Database Belum Di Buat!');
});

// paralax about p
$(window).on('load',function() {
    $('.pkiri').addClass('muncul');
    $('.ptengah').addClass('muncul');
    $('.pkanan').addClass('muncul');
});
   
//paralax masthead
$(window).on('load', function() {
    $('#divgambar').addClass('turun');
});


//jalankan even pada saat on.click

$('.page-scroll').on('click', function(e) {

//ambil semua href
    var tujuan = $(this).attr('href');
//tangkap elmn
    var elemenTujuan = $(tujuan);
//jalankan animasi scroll
    $('html, body').animate( {
        scrollTop: elemenTujuan.offset().top
    })

    e.preventDefault();

});


//paralax fx scroll
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // if(wScroll > $('#portfolio').offset().top - 200 ) {
    //    $('#portfolio .img-thumbnail').addClass('muncul')
    // }

    if(wScroll > $('#portfolio').offset().top - 50 ) {
        $('#portfolio .img-thumbnail').each(function(i) {
            setTimeout(function() {
                $('#portfolio .img-thumbnail').eq(i).addClass('muncul')
            }, 800  * i + 1);
        });
        // $('#portfolio .img-thumbnail').addClass('muncul')
     }

     if(wScroll > $('#contact').offset().top - 50 ) {
         $('#contact .tambah').each(function(i) {
             setTimeout(function() {
                 $('#contact .tambah').eq(i).addClass('nongol')
             }, 800 * i + 1);
         });
     }

});