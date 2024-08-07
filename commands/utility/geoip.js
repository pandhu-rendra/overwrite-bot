module.exports = {
    name: "geoip",
    aliases: ["lookup-ip", "ip-lookup"],
    category: "utility",
    code: `
    $title[GeoIP]
    $description[
    **IP:** $jsonRequest[https://ipwhois.app/json/$message[1];ip]
    **Success:** $jsonRequest[https://ipwhois.app/json/$message[1];success]
    **Type:** $jsonRequest[https://ipwhois.app/json/$message[1];type]
    **Continent:** $jsonRequest[https://ipwhois.app/json/$message[1];continent]
    **Continent Code:** $jsonRequest[https://ipwhois.app/json/$message[1];continent_code]
    **Country:** $jsonRequest[https://ipwhois.app/json/$message[1];country]
    **Country Code:** $jsonRequest[https://ipwhois.app/json/$message[1];country_code]
    **Region:** $jsonRequest[https://ipwhois.app/json/$message[1];region]
    **Region Code:** $jsonRequest[https://ipwhois.app/json/$message[1];region_code]
    **City:** $jsonRequest[https://ipwhois.app/json/$message[1];city]
    **Postal:** $jsonRequest[https://ipwhois.app/json/$message[1];postal]
    **Calling Code:** $jsonRequest[https://ipwhois.app/json/$message[1];calling_code]
    **Capital:** $jsonRequest[https://ipwhois.app/json/$message[1];capital]
    **ISP:** $jsonRequest[https://ipwhois.app/json/$message[1];isp]
    **Currency:** $jsonRequest[https://ipwhois.app/json/$message[1];currency]
    **Timezone:** $jsonRequest[https://ipwhois.app/json/$message[1];timezone]
    **Latitude:** $jsonRequest[https://ipwhois.app/json/$message[1];latitude]
    **Longitude:** $jsonRequest[https://ipwhois.app/json/$message[1];longitude]]
    $addButton[1;🌎・Google Maps;link;https://www.google.com/maps/search/$jsonRequest[https://ipwhois.app/json/$message[1];latitude],$jsonRequest[https://ipwhois.app/json/$message[1];longitude];false]
    $color[$getVar[embedcolor]]
    $footer[$username;$authorAvatar]
    $addTimestamp
    $reply[$messageID;true]
    $clientTyping`
}