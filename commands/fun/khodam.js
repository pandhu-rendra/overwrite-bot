module.exports = {
    name: "khodam",
    alaises: ["cek-khodam", "kodam-cek"],
    category: "fun",
    executeAt: "both",
    code: `
    $title[Cek Khodam]
    $description[
    Cek khodam kamu disini!
    
    Nama: <@$mentioned[1]>
    Khodam: $randomText[Cobra Sulawesi;Ular Jawa;Meja Blonde;Burung Merak;Gajah Gundul;Walang Sangit;Anakonda;Tikus Curut;Macan Koreng;Ayam Suwir;Tikus Sawah;Bebek Hitam;Kucing Garong;Gajah Terbang;Pocong Hutan;Kuntilanak Tidur;Kuntilanak Laut;Genderuwo Gunung;Tuyul Emak;Wewe Gombel;Leak Bali;Sundel Bolong;Banaspati;Nyi Roro Kidul;Jelangkung Pasar;Kursi Majalengka;Suster Ngesot;Mbak Kunti;Demit Rumah Kosong;Hantu Jeruk Purut;Si Manis Jembatan Ancol;Buto Ijo;Nyai Blorong;Arwah Penasaran;Palasik;Kuyang;Ular Tangga;Siluman Harimau;Setan Televisi;Penunggu Rumah Tua;Mbah Sukri;Hantu Laut Utara;Kakek Cino;Kelabang Raksaksa;Hantu Belanda;Lelebut Alas;Macan Kumbang;Hantu Jepang;Siluman Buaya;Siluman Serigala;Hantu Gundul;Arwah Tentara;Kuntilanak Kompor;Hantu Kendaraan;Leluhur Jombrang;Wesi Kuning;Hantu Luweng;Setan Alas;Penunggu Kuburan;Arwah Gentayangan;Roh Tumbuhan;Sigit Rendang;Ambatron;Ambatukam;Mas Faiz;Laba - Laba Sunda;Kuntilanak Ketawa;Pocong Selfie;Genderuwo Ngopi;Tuyul Nguntil;Wewe Gombel Tiktok;Leak Joget;Sundel Bolong Nongkrong;Banaspati Berkabut;Kuntilanak Kuda;Penghuni Rawa;Hantu Tol;Setan Dapur;Makhluk Halus;Siluman Kucing;Kuntilanak Sarang;Hantu Teman;Hantu Tetangga;Hantu Garasi;Kuntilanak Sosial Media;Nenek Kost;Kuntilanak Nangis;Begu Gembong;Tuyul Banyu;Siluman Kodok;Hantu Muka Buruk;Si Buta Dari Goa Hantu;Setan Karaoke;Kosong;Ada;Isi]]
    $thumbnail[$userAvatar[$authorID]]
    $color[#00FFFF]
    $reply[$messageID;true]
    $clientTyping
    $addTimestamp
    $footer[Requested by $userTag[$authorID]]`
}