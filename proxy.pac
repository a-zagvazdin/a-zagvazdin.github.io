function FindProxyForURL(url, host) {
var regexpr_torrent = /(^|\.)(rutracker\.org|rutor\.info|rutor\.is|pornolab\.net|kinozal\.tv)$/;
if (regexpr_torrent.test(host))
{
return "HTTPS proxy-ssl.antizapret.prostovpn.org:3143";
};
return "DIRECT";
}
