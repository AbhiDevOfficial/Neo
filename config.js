const _0x5e98dc=_0x1162;function _0x1162(_0x36a44c,_0x219d82){const _0x38900a=_0x3890();return _0x1162=function(_0x116296,_0x2159f3){_0x116296=_0x116296-0x11c;let _0xfe6a0e=_0x38900a[_0x116296];return _0xfe6a0e;},_0x1162(_0x36a44c,_0x219d82);}(function(_0x4b67e6,_0x334152){const _0x5b3173=_0x1162,_0xf4a004=_0x4b67e6();while(!![]){try{const _0x3875ec=parseInt(_0x5b3173(0x144))/0x1+parseInt(_0x5b3173(0x168))/0x2*(-parseInt(_0x5b3173(0x136))/0x3)+parseInt(_0x5b3173(0x143))/0x4*(-parseInt(_0x5b3173(0x132))/0x5)+parseInt(_0x5b3173(0x16a))/0x6+-parseInt(_0x5b3173(0x11e))/0x7*(parseInt(_0x5b3173(0x141))/0x8)+-parseInt(_0x5b3173(0x145))/0x9*(parseInt(_0x5b3173(0x121))/0xa)+parseInt(_0x5b3173(0x171))/0xb;if(_0x3875ec===_0x334152)break;else _0xf4a004['push'](_0xf4a004['shift']());}catch(_0x5159c1){_0xf4a004['push'](_0xf4a004['shift']());}}}(_0x3890,0x71b1a));const fs=require('fs'),chalk=require(_0x5e98dc(0x170)),{getBuffer}=require(_0x5e98dc(0x15a));let owners=[];function _0x3890(){const _0x1c93c9=['STICKER_AUTHOR','desc*\x20-\x0a_Sets\x20group\x20description\x20with\x20replied\x20message._\x0a\x0a*','cache','spdf*\x20-\x0a_Converts\x20provided\x20website\x20to\x20pdf._\x0a\x0a*','ephemeral*\x20-\x0a_Turns\x20on/off\x20disappearing\x20message\x20in\x20the\x20chat._\x0a\x0a*','email*\x20-\x0a_Checks\x20wheather\x20the\x20email\x20is\x20disposable/temporary\x20or\x20not._\x0a\x0a*','reply','private','*Successfully\x20turned\x20off\x20{}!*','OWNER','STICKER_PACKNAME','MODE','1256870imSehN','country*\x20-\x0a_Fetches\x20the\x20information\x20about\x20the\x20country._\x0a\x0a*','miscMenu','quote*\x20-\x0a_Gives\x20random\x20quote._\x0a\x0a*','3tmJolx','url*\x20-\x0a_Uploads\x20file\x20to\x20telegraph._\x0a\x0a*','push','PREFIX','*Sorry,\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20Groups!*','tagall*\x20-\x0a_Tags\x20everyone\x20in\x20ths\x20group._\x0a\x0a*','unwatchFile','map','promote*\x20-\x0a_Adds\x20the\x20given\x20participant\x20in\x20admin\x20list\x20of\x20the\x20group._\x0a\x0a*','ss*\x20-\x0a_Captures\x20the\x20screenshot\x20of\x20provided\x20website._\x0a\x0a*','circle*\x20-\x0a_Crops\x20the\x20image\x20in\x20circle._\x0a\x0a*','1058584EYGNHi','link*\x20-\x0a_Sends\x20the\x20group\x20invitation\x20link._\x0a\x0a*','12GkQvmD','161625BLKKlS','14409EYnSBO','editinfo*\x20-\x0a_Allows/disallows\x20everyone\x20to\x20edit\x20group\x27s\x20info._\x0a\x0a*','del*\x20-\x0a_Deletes\x20the\x20replied\x20message._\x0a\x0a*','```👋\x20Hey```\x20*{}!*\x0a```I\x20am```\x20*Neo!*\x0a*🤖\x20A\x20multifunctional\x20bot\x20to\x20help\x20you!*\x0a\x0a_Total\x20Hit_\x20:\x20*{hitt}*\x0a_Today\x20Hit_\x20:\x20*{todhit}*\x0a\x0a```👇\x20Select\x20any\x20category\x20of\x20commands\x20to\x20get\x20started.```','ip*\x20-\x0a_Fetches\x20the\x20information\x20about\x20ip\x20address._\x0a\x0a*','hangman*\x20-\x0a_Play\x20hangman\x20game._\x0a','wiki*\x20-\x0a_Searches\x20your\x20query\x20in\x20wikipedia._','tr*\x20-\x0a_Translates\x20replied\x20text._\x0a\x0a*','sticker*\x20-\x0a_Converts\x20video/photo\x20to\x20sticker._\x0a\x0a*','revoke*\x20-\x0a_Revokes\x20the\x20group\x20invitation\x20link._\x0a\x0a*','owner','*{}\x20is\x20already\x20turned\x20on\x20in\x20this\x20chat!*','mute*\x20-\x0a_Allows\x20only\x20admins\x20to\x20send\x20messages\x20in\x20the\x20group._\x0a\x0a*','compliment*\x20-\x0a_Gives\x20random\x20Compliments._\x0a\x0a*','logo','kick*\x20-\x0a_Kicks\x20the\x20given\x20participant\x20from\x20group._\x0a\x0a*','tagall*\x20-\x0a_Tags\x20everyone\x20in\x20the\x20group._\x0a\x0a*','packname','bcp*\x20-\x0a_Broadcast(s)\x20entered/replied\x20message\x20to\x20group\x20members._\x0a\x0a*','unblock*\x20-\x0a_Unblocks\x20a\x20user._\x0a','*Sorry,\x20This\x20command\x20can\x20only\x20be\x20used\x20by\x20Premium\x20members!*','./lib/myfunc','*Sorry,\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20Group\x20by\x20Admins!*','*{}\x20is\x20already\x20turned\x20off\x20in\x20this\x20chat!*','demote*\x20-\x0a_Removes\x20the\x20given\x20participant\x20from\x20admin\x20list\x20of\x20the\x20group._\x0a\x0a*','*Processing...*','leave*\x20-\x0a_Leaves\x20the\x20group._\x0a\x0a*','info*\x20-\x0a_Gives\x20the\x20information\x20about\x20the\x20mentioned\x20user._\x0a\x0a*','prefix','includes','*Successfully\x20turned\x20on\x20{}!*','add*\x20-\x0a_Adds\x20the\x20given\x20participant\x20to\x20group._\x0a\x0a*','toLowerCase','block*\x20-\x0a_Blocks\x20a\x20user._\x0a\x0a*','split','1563134eDvSYX','joke*\x20-\x0a_Gives\x20random\x20Jokes._\x0a\x0a*','260646Najqme','*Sorry,\x20This\x20command\x20can\x20only\x20be\x20used\x20by\x20Owner!*','adminMenu','rbg*\x20-\x0a_Removes\x20the\x20background\x20of\x20replied\x20image._\x0a\x0a*','allMenu','upload*\x20-\x0a_Uploads\x20media\x20from\x20url._\x0a\x0a*','chalk','28429346BTLvdQ','*Sorry,\x20This\x20command\x20can\x20only\x20be\x20used\x20if\x20the\x20bot\x20is\x20an\x20Admin\x20in\x20this\x20Group!*','dev*\x20-\x0a_Sends\x20the\x20given\x20message\x20to\x20the\x20developer._\x0a\x0a*','*TYPE\x20rule\x20ALONG\x20WITH\x20THE\x20COMMAND\x20TO\x20KNOW\x20HOW\x20TO\x20PLAY.*\x0a\x0a*','ping*\x20-\x0a_Measures\x20the\x20ping/speed\x20of\x20the\x20bot._\x0a\x0a*','public','mode','ownerMenu','https://raw.githubusercontent.com/AbhiDevOfficial/Neo/main/src/Neo.png','subject*\x20-\x0a_Sets\x20group\x20subject\x20with\x20entered\x20text._\x0a\x0a*','env','14DpneAj','watchFile','about*\x20-\x0a_Gives\x20the\x20information\x20about\x20bot._\x0a\x0a*','3270Rcuoes','join*\x20-\x0a_Joines\x20the\x20group\x20with\x20given\x20group\x20link._\x0a\x0a*','*Sorry,\x20This\x20command\x20is\x20under\x20maintenance\x20and\x20will\x20be\x20ready\x20soon!*','unmute*\x20-\x0a_Allows\x20everyone\x20to\x20send\x20message\x20in\x20the\x20group._','unblock*\x20-\x0a_Unblocks\x20a\x20user._\x0a\x0a*'];_0x3890=function(){return _0x1c93c9;};return _0x3890();}global[_0x5e98dc(0x177)]=process[_0x5e98dc(0x11d)][_0x5e98dc(0x131)]?process[_0x5e98dc(0x11d)]['MODE']['toLowerCase']()!==_0x5e98dc(0x12d)||process[_0x5e98dc(0x11d)]['MODE'][_0x5e98dc(0x165)]()!==_0x5e98dc(0x176)?_0x5e98dc(0x12d):process[_0x5e98dc(0x11d)][_0x5e98dc(0x131)]:'private',global[_0x5e98dc(0x14f)]=process[_0x5e98dc(0x11d)][_0x5e98dc(0x12f)]?process['env']['OWNER'][_0x5e98dc(0x162)](',')?process[_0x5e98dc(0x11d)]['OWNER'][_0x5e98dc(0x167)](',')[_0x5e98dc(0x13d)](_0x4271c2=>owners[_0x5e98dc(0x138)](_0x4271c2)):process[_0x5e98dc(0x11d)]['OWNER']:['0'],global[_0x5e98dc(0x156)]=process[_0x5e98dc(0x11d)][_0x5e98dc(0x130)]||'AbhiDev',global['author']=process[_0x5e98dc(0x11d)][_0x5e98dc(0x126)]||'Neo',global[_0x5e98dc(0x161)]=process[_0x5e98dc(0x11d)][_0x5e98dc(0x139)]||'.',global['rbgApikey']=process['env']['RBG_APIKEY']||![],global[_0x5e98dc(0x153)]=getBuffer(_0x5e98dc(0x179)),global[_0x5e98dc(0x12c)]={'wait':_0x5e98dc(0x15e),'admin':_0x5e98dc(0x15b),'botAdmin':_0x5e98dc(0x172),'premime':_0x5e98dc(0x159),'owner':_0x5e98dc(0x16b),'group':_0x5e98dc(0x13a),'private':'*Sorry,\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20Private\x20Chats!*','underm':_0x5e98dc(0x123),'suc_on':_0x5e98dc(0x163),'suc_off':_0x5e98dc(0x12e),'already_on':_0x5e98dc(0x150),'already_off':_0x5e98dc(0x15c)},global['listMenu']=_0x5e98dc(0x148),global[_0x5e98dc(0x16e)]='*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x120)+global['prefix']+'add*\x20-\x0a_Adds\x20the\x20given\x20participant\x20to\x20group._\x0a\x0a*'+global[_0x5e98dc(0x161)]+'bcp*\x20-\x0a_Broadcast(s)\x20entered/replied\x20message\x20to\x20group\x20members._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x166)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x140)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x152)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x133)+global['prefix']+'demote*\x20-\x0a_Removes\x20the\x20given\x20participant\x20from\x20admin\x20list\x20of\x20the\x20group._\x0a\x0a*'+global['prefix']+_0x5e98dc(0x147)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x127)+global[_0x5e98dc(0x161)]+'dev*\x20-\x0a_Sends\x20the\x20given\x20message\x20to\x20the\x20developer._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x146)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x12b)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x12a)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x154)+global[_0x5e98dc(0x161)]+'jid*\x20-\x0a_Gives\x20the\x20jid\x20of\x20the\x20chat\x20or\x20user._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x15f)+global['prefix']+_0x5e98dc(0x160)+global['prefix']+'ip*\x20-\x0a_Fetches\x20the\x20information\x20about\x20ip\x20address._\x0a\x0a*'+global['prefix']+_0x5e98dc(0x122)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x169)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x151)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x175)+global[_0x5e98dc(0x161)]+'quote*\x20-\x0a_Gives\x20random\x20quote._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x16d)+global['prefix']+_0x5e98dc(0x13e)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x129)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x13f)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x14d)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x11c)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x155)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x14c)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x125)+global[_0x5e98dc(0x161)]+'unmute*\x20-\x0a_Allows\x20everyone\x20to\x20send\x20message\x20in\x20the\x20group._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x16f)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x137)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x14b),global[_0x5e98dc(0x178)]='*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x166)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x122)+global[_0x5e98dc(0x161)]+'leave*\x20-\x0a_Leaves\x20the\x20group._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x158),global[_0x5e98dc(0x134)]='*'+global['prefix']+_0x5e98dc(0x120)+global['prefix']+_0x5e98dc(0x140)+global[_0x5e98dc(0x161)]+'compliment*\x20-\x0a_Gives\x20random\x20Compliments._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x133)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x157)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x173)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x147)+global[_0x5e98dc(0x161)]+'email*\x20-\x0a_Checks\x20wheather\x20the\x20email\x20is\x20disposable/temporary\x20or\x20not._\x0a\x0a*'+global[_0x5e98dc(0x161)]+'dict*\x20-\x0a_Finds\x20the\x20meaning\x20of\x20the\x20given\x20word._\x0a\x0a*'+global['prefix']+_0x5e98dc(0x160)+global[_0x5e98dc(0x161)]+'jid*\x20-\x0a_Gives\x20the\x20jid\x20of\x20the\x20chat\x20or\x20user._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x149)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x169)+global[_0x5e98dc(0x161)]+'movie*\x20-\x0a_Searches\x20movies/series\x20and\x20shares\x20its\x20information._\x0a\x0a*'+global[_0x5e98dc(0x161)]+'ping*\x20-\x0a_Measures\x20the\x20ping/speed\x20of\x20the\x20bot._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x135)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x16d)+global['prefix']+_0x5e98dc(0x129)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x13f)+global['prefix']+_0x5e98dc(0x14d)+global['prefix']+_0x5e98dc(0x14c)+global[_0x5e98dc(0x161)]+'upload*\x20-\x0a_Uploads\x20media\x20from\x20url._\x0a\x0a*'+global[_0x5e98dc(0x161)]+'url*\x20-\x0a_Uploads\x20file\x20to\x20telegraph._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x14b),global['gamesMenu']=_0x5e98dc(0x174)+global[_0x5e98dc(0x161)]+'rps*\x20-\x0a_Play\x20rock\x20paper\x20scissor\x20game._\x0a\x0a*'+global['prefix']+_0x5e98dc(0x14a),global['makerMenu']='',global['groupMenu']='*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x164)+global['prefix']+_0x5e98dc(0x15d)+global['prefix']+'desc*\x20-\x0a_Sets\x20group\x20description\x20with\x20replied\x20message._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x146)+global['prefix']+_0x5e98dc(0x12a)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x154)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x15f)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x142)+global[_0x5e98dc(0x161)]+'mute*\x20-\x0a_Allows\x20only\x20admins\x20to\x20send\x20messages\x20in\x20the\x20group._\x0a\x0a*'+global['prefix']+_0x5e98dc(0x13e)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x14e)+global['prefix']+_0x5e98dc(0x11c)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x155)+global['prefix']+_0x5e98dc(0x124),global[_0x5e98dc(0x16c)]='*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x164)+global['prefix']+_0x5e98dc(0x15d)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x127)+global['prefix']+_0x5e98dc(0x146)+global['prefix']+'ephemeral*\x20-\x0a_Turns\x20on/off\x20disappearing\x20message\x20in\x20the\x20chat._\x0a\x0a*'+global[_0x5e98dc(0x161)]+_0x5e98dc(0x154)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x15f)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x142)+global[_0x5e98dc(0x161)]+'mute*\x20-\x0a_Allows\x20only\x20admins\x20to\x20send\x20messages\x20in\x20the\x20group._\x0a\x0a*'+global['prefix']+_0x5e98dc(0x13e)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x14e)+global['prefix']+_0x5e98dc(0x11c)+global[_0x5e98dc(0x161)]+_0x5e98dc(0x13b)+global['prefix']+'unmute*\x20-\x0a_Allows\x20everyone\x20to\x20send\x20message\x20in\x20the\x20group._';let file=require['resolve'](__filename);fs[_0x5e98dc(0x11f)](file,()=>{const _0x2fbcbe=_0x5e98dc;fs[_0x2fbcbe(0x13c)](file),console['log'](chalk['redBright']('Update\x27'+__filename+'\x27')),delete require[_0x2fbcbe(0x128)][file],require(file);});
