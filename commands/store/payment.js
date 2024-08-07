module.exports = {
    name: "payment",
    category: "store",
    code: `
    $title[PAYMENT <a:ovpayment:1258686741662007376>]
    $description[
<:ovdana:1239714131767197696> Dana : 0813-2579-8778
<:ovo:1239714531224191017> OvO : 0813-2579-8778
<:ovgopay:1239714928122925146> Gopay : 0813-2579-8778
<:ovshopeepay:1255756203452006401> Shopee pay : 0813-2579-8778
<:ovsociabuzz:1252995444275937301> SociaBuzz : Click tombol dibawah
<:ovsaweria:1252980164082794549> Saweria : Click tombol dibawah
<:ovhotmur:1241875403656663040> Hotmur : Tanyakan diticket
<:ovpaypal:1265287021824577546> Paypal : Tanyakan diticket
<:ovqris:1241786494725918921> Qris : Tanyakan diticket
    \`\`\`Note:\`\`\`
    \`\`\`Harap konfirmasi sebelum/sesudah membayar, wajib mengirim bukti pembayaran, agar garansi dapat diaktifkan tidak ada bukti tapi uang sudah diterima maka garansi tidak akan aktif dan diclaim\`\`\`]
    $addButton[1;Saweria;link;https://saweria.co/rendraaja;false;<:ovsaweria:1252980164082794549>]
    $addButton[1;SociaBuzz;link;https://sociabuzz.com/rendraaja/support;false;<:ovsociabuzz:1252995444275937301>]
    $thumbnail[$guildIcon[$guildID]]
    $footer[$guildName[$guildID];$guildIcon[$guildID]]
    $clientTyping
    $addTimestamp
    $reply[$messageID;true]
    $color[#00FFFF]`
}